from fastapi import APIRouter,Depends, HTTPException
from sqlalchemy.orm import Session
from dependencies import get_session, verify_token
from schemas import OrderSchema
from models import Order, User

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