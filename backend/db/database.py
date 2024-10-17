#import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
#from dotenv import load_dotenv

#load_dotenv()

DATABASE_URL = "postgresql://postgres:P@ssWord1728@localhost/agrimldb"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def test_connection():
    try:
        # Connect to the database
        connection = engine.connect()
        print("Connection to the database was successful!")
    except Exception as e:
        print(f"Error connecting to the database: {e}")
    finally:
        # Close the connection
        connection.close()

if __name__ == "__main__":
    test_connection()