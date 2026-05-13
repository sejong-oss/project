from fastapi import FastAPI
from starlette.middleware.sessions import SessionMiddleware

from app.api.auth import router as auth_router
from app.config import SESSION_SECRET_KEY
from app.api.recipe import router as recipe_router

app = FastAPI(title="Recipe Recommender API")

app.add_middleware(SessionMiddleware, secret_key=SESSION_SECRET_KEY)

app.include_router(auth_router)
app.include_router(recipe_router)


@app.get("/")
def read_root():
    return {"message": "Recipe Recommender API is running"}


@app.get("/health")
def health_check():
    return {"status": "ok"}
