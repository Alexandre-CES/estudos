from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
from dependencies import get_session
from schemas import OrderSchema
from models import Order

order_router = APIRouter(prefix='/order', tags=['order'])

@order_router.get('/')
async def orders():
    return {'message': 'acessou rota de pedidos'}

@order_router.post('/order')
async def create_order(orderSchema: OrderSchema, session: Session = Depends(get_session)):
    new_order = Order(user=orderSchema.user_id)
    session.add(new_order)
    session.commit()
    return {'message': f'Order created successfully. Order ID: {new_order.id}'}