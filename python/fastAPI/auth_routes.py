from fastapi import APIRouter, Depends, HTTPException
from models import User
from dependencies import get_session
from main import bcrypt_context
from schemas import UserSchema, LoginSchema
from sqlalchemy.orm import Session

auth_router = APIRouter(prefix='/auth', tags=['auth'])

def create_token(id_user):
    token = f'oasrf2kmsak{id_user}'
    return token

@auth_router.get('/')
async def autenticar():
    return {'message': 'Authenticated', 'authenticated': False}

@auth_router.post('/create_account')
async def create_account(user_schema: UserSchema, session: Session = Depends(get_session)):
    
    user = session.query(User).filter(User.email==user_schema.email).first()
    if user:
        raise HTTPException(status_code=400, detail='Email already exist')
    else:
        hash_password = bcrypt_context.hash(user_schema.password)
        new_user = User(user_schema.name,user_schema.email,hash_password, user_schema.active, user_schema.admin)
        session.add(new_user)
        session.commit()
        return {'message':f'User created successfully: {user_schema.email}'}

@auth_router.post('/login')
async def login(login_schema: LoginSchema, session: Session = Depends(get_session)):
    user = session.query(User).filter(User.email==login_schema.email).first()
    if not user:
        raise HTTPException(status_code=400, detail='User not found')
    else:
        access_token = create_token(user.id)
        return {
            'access_token': access_token,
            'token_type': 'Bearer'
        }