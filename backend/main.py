from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
import scoring

app = FastAPI(title="Aeterna Longevity API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class BiomarkerInput(BaseModel):
    chronological_age: float
    albumin: float
    creatinine: float
    glucose: float
    crp: float
    lymphocyte_percent: float
    mean_cell_volume: float
    red_cell_dist_width: float
    alkaline_phosphatase: float
    white_blood_cell_count: float

class WearableData(BaseModel):
    hrv: float
    sleep_efficiency: float
    resting_heart_rate: float
    steps: int

class Protocol(BaseModel):
    id: str
    category: str
    action: str
    evidence_level: float
    priority: str

@app.get("/")
async def root():
    return {"message": "Aeterna Longevity Engine Active", "status": "operational"}

@app.post("/analyze/bio-age")
async def analyze_bio_age(data: BiomarkerInput):
    try:
        bio_age = scoring.calculate_pheno_age(
            data.chronological_age,
            data.albumin,
            data.creatinine,
            data.glucose,
            data.crp,
            data.lymphocyte_percent,
            data.mean_cell_volume,
            data.red_cell_dist_width,
            data.alkaline_phosphatase,
            data.white_blood_cell_count
        )
        return {
            "chronological_age": data.chronological_age,
            "biological_age": bio_age,
            "age_delta": round(data.chronological_age - bio_age, 2),
            "status": "optimization_required" if bio_age > data.chronological_age else "optimized"
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/protocols/{user_id}", response_model=List[Protocol])
async def get_personalized_protocols(user_id: str):
    # Mock dynamic protocol generation based on user state
    return [
        Protocol(
            id="p1", 
            category="Supplementation", 
            action="Start GlyNAC (600mg/day) to support glutathione synthesis and redox balance.",
            evidence_level=0.85,
            priority="High"
        ),
        Protocol(
            id="p2",
            category="Metabolic",
            action="Implement Zone 2 training (45 min, 3x/week) to improve mitochondrial flexibility.",
            evidence_level=0.92,
            priority="Critical"
        ),
        Protocol(
            id="p3",
            category="Sleep",
            action="Magnesium Threonate (400mg) 60 min before bed to enhance N3 slow-wave sleep.",
            evidence_level=0.78,
            priority="Medium"
        )
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
