from sqlalchemy import Column, Integer, String
from db.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)
    phone = Column(String)
    is_active = Column(Integer)
    created_at = Column(String)
    updated_at = Column(String)
    role = Column(String)

    def __repr__(self):
        return f"<User {self.name}>"

    def __str__(self):
        return self.name

    def __init__(self, name, email, password, phone, is_active, created_at, updated_at, role):
        self.name = name
        self.email = email
        self.password = password
        self.phone = phone
        self.is_active = is_active
        self.created_at = created_at
        self.updated_at = updated_at
        self.role = role