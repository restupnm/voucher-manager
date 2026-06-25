"""No backend used. This is a static GitHub Pages app. Stub to keep supervisor happy."""
from fastapi import FastAPI

app = FastAPI(title="cloud.spot stub")


@app.get("/api/")
def root():
    return {"status": "ok", "note": "This app uses no backend. All data is stored in browser IndexedDB."}


@app.get("/api/health")
def health():
    return {"status": "ok"}
