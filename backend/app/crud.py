from sqlalchemy.orm import Session
from models.user import User
from db.schemas import UserSchema

def create_user(db: Session, user: UserSchema):
    db_user = User(name=user.name, email=user.email, password=user.password, phone=user.phone, is_active=user.is_active, created_at=user.created_at, updated_at=user.updated_at, role=user.role)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(User).offset(skip).limit(limit).all()

def update_user(db: Session, user_id: int, user: UserSchema):
    db_user = db.query(User).filter(User.id == user_id).first()
    db_user.name = user.name
    db_user.email = user.email
    db_user.password = user.password
    db_user.phone = user.phone
    db_user.is_active = user.is_active
    db_user.created_at = user.created_at
    db_user.updated_at = user.updated_at
    db_user.role = user.role
    db.commit()
    return db_user


def delete_user(db: Session, user_id: int):
    db_user = db.query(User).filter(User.id == user_id).first()
    db.delete(db_user)
    db.commit()
    return db_user
