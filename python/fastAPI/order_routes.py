from fastapi import APIRouter,Depends, HTTPException
from sqlalchemy.orm import Session
from dependencies import get_session, verify_token
from schemas import OrderSchema, OrderItemSchema
from models import Order, User, OrderItem

order_router = APIRouter(prefix='/order', tags=['order'], dependencies=[Depends(verify_token)])

@order_router.get('/')
async def orders():
    return {'message': 'acessou rota de pedidos'}

@order_router.post('/order')
async def create_order(orderSchema: OrderSchema, session: Session = Depends(get_session)):
    new_order = Order(user=orderSchema.user_id)
    session.add(new_order)
    session.commit()
    return {'message': f'Order created successfully. Order ID: {new_order.id}'}

@order_router.post('/order/cancel/{order_id}')
async def cancel_order(order_id: int, session: Session = Depends(get_session), user: User = Depends(verify_token)):
    #user.admin = True
    #user.id = Order.user
    order = session.query(Order).filter(Order.id==order_id).first()
    if not order:
        raise HTTPException(status_code=400, detail='order not found')
    if not user.admin and user.id != order.user:
        raise HTTPException(status_code=401, detail='You can not make this operation')
    else:
        order.status = "CANCELED"
        session.commit()
        return{
            'message': f'order {order.id} canceled successfully',
            'order': order
        }
    
@order_router.get('/list')
async def list_orders(session: Session = Depends(get_session), user: User = Depends(verify_token)):
    if not user.admin:
        raise HTTPException(status_code=401, detail='You can not make this operation') 
    else:
        orders = session.query(Order).all()
        return{
            'orders': orders
        }

@order_router.post('/order/add-item/{order_id}')
async def add_order_item(
    order_id: int,
    order_item_schema: OrderItemSchema,
    session: Session = Depends(get_session),
    user: User = Depends(verify_token)
):
    order = session.query(Order).filter(Order.id==order_id).first()
    if not order:
        raise HTTPException(status_code=400, detail='Order not found')
    elif not user.admin and user.id != order.user:
        raise HTTPException(status_code=401, detail='You can not make this operation')
    else:
        order_item = OrderItem(
            order_item_schema.quantity,
            order_item_schema.flavor,
            order_item_schema.size,
            order_item_schema.unitary_price,
            order_id
        )

        order.calc_price()
        session.add(order_item)
        session.commit()
        return{
            'message': 'Item created successfully',
            'item_id': order_item.id,
            'order_price': order.price
        }