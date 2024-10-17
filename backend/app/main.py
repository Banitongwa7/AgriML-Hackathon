from fastapi import FastAPI
import models.user
from db.database import engine

app = FastAPI()

models.user.Base.metadata.create_all(bind=engine)



@app.get("/")
async def Home():
    return {"message": "Hello World"}