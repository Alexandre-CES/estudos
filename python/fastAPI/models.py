from sqlalchemy import create_engine, Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql.sqltypes import Float
from sqlalchemy_utils import ChoiceType

db = create_engine('sqlite:///banco.db')
Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = Column('id',Integer, primary_key=True, autoincrement=True)
    name = Column('name',String)
    email = Column('email',String, nullable=False)
    password = Column('password',String)
    active = Column('active',Boolean)
    admin = Column('admin',Boolean, default=False)

    def __init__(self, name, email, password, active=True, admin=False):
        self.name = name
        self.email = email
        self.password = password
        self.active = active
        self.admin = admin

class Order(Base):
    __tablename__ = 'orders'

    #STATUS_ORDERS = (
     #   ('PENDING','PENDING'),
      #  ('CANCELED','CANCELED'),
       # ('FINISHED','FINISHED')
    #)

    id = Column('id',Integer, primary_key=True, autoincrement=True)
    status = Column('status',String)
    user = Column('user',ForeignKey('users.id'))
    price = Column('price',Float)

    def __init__(self, user, status='PENDING', price=0):
        self.status = status
        self.user = user
        self.price = price

class OderItem(Base):
    __tablename__ = 'order_items'

    id = Column('id',Integer, primary_key=True, autoincrement=True)
    quantity = Column('quantity',Integer)
    flavor = Column('flavor',String)
    size = Column('size',String)
    unitary_price = Column('price',Float)
    order =Column('order',ForeignKey('orders.id'))

    def __init__(self, quantity, flavor, size, unitary_price, order):
        self.quantity = quantity
        self.flavor = flavor
        self.size = size
        self.unitary_price = unitary_price
        self.order = order