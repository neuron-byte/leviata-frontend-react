from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Ou substitua "*" pelo domínio que você deseja permitir
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos HTTP
    allow_headers=["*"],  # Permite todos os cabeçalhos
)

class CoordinatesList(BaseModel):
    coordinates: list

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

@app.post("/api/sendCoordinates")
def send_coordinates(coordinates: CoordinatesList):
    # processar as coordenadas
    print(coordinates)
    return {"received_coordinates": coordinates}