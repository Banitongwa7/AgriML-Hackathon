from typing import List, Optional, Generic, TypeVar
from pydantic import BaseModel, Field
from pydantic.generics import GenericModel


T = TypeVar("T")

class UserSchema(BaseModel):
    name: str
    email: str
    password: str
    phone: str
    is_active: bool
    created_at: str
    updated_at: str
    role: str

    class Config:
        orm_mode = True

class RequestUser(BaseModel):
    parameter: UserSchema = Field(...)


class ResponseUser(GenericModel, Generic[T]):
    message: str
    data: Optional[T]
    code: str
    status: str

class ActivitySchema(BaseModel):
    title: str
    category: str
    location: str
    date: str
    type_of_activity: str
    image: str
    description: str
    created_at: str
    updated_at: str

    class Config:
        orm_mode = True


class RequestActivity(BaseModel):
    parameter: ActivitySchema = Field(...)


class ResponseActivity(GenericModel, Generic[T]):
    message: str
    data: Optional[T]
    code: str
    status: str
