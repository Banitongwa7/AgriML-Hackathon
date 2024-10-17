from sqlalchemy import Column, Integer, String
from ..database import Base


class Activity(Base):
    __tablename__ = "activities"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    category = Column(String)
    location = Column(String)
    date = Column(String)
    type_of_activity = Column(String)
    image = Column(String)
    description = Column(String)
    created_at = Column(String)
    updated_at = Column(String)

    def __init__(self, title, category, location, date, type_of_activity, image, description, created_at, updated_at):
        self.title = title
        self.category = category
        self.location = location
        self.date = date
        self.type_of_activity = type_of_activity
        self.image = image
        self.description = description
        self.created_at = created_at
        self.updated_at = updated_at

    def __repr__(self):
        return f"<Activity {self.title}>"

    def __str__(self):
        return self.title