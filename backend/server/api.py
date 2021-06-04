from fastapi import FastAPI
from .routes import router as Router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "https://cse412-21sp.github.io/us-gun-violence"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", tags=["Root"])
async def read_root() -> dict:
    return {
        "message": "Welcome to my notes application, use the /docs route to proceed"
    }

app.include_router(Router, prefix="/api")