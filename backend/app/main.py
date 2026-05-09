from fastapi import FastAPI

app = FastAPI(title="Recipe Recommender API")


@app.get("/")
def read_root():
    return {"message": "Recipe Recommender API is running"}


@app.get("/health")
def health_check():
    return {"status": "ok"}
