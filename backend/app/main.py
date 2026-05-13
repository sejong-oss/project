from fastapi import FastAPI

from app.api.auth import router as auth_router
from app.api.recipe import router as recipe_router

app = FastAPI(title="Recipe Recommender API")

app.include_router(auth_router)
app.include_router(recipe_router)


@app.get("/")
def read_root():
    return {"message": "Recipe Recommender API is running"}


@app.get("/health")
def health_check():
    return {"status": "ok"}
