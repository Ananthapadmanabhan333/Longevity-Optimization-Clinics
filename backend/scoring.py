import numpy as np
from typing import Dict

def calculate_pheno_age(
    chronological_age: float,
    albumin: float, # g/dL
    creatinine: float, # mg/dL
    glucose: float, # mg/dL (fasting)
    crp: float, # mg/L (log)
    lymphocyte_percent: float, # %
    mean_cell_volume: float, # fL
    red_cell_dist_width: float, # %
    alkaline_phosphatase: float, # U/L
    white_blood_cell_count: float # 1000 cells/uL
) -> float:
    """
    Calculates Biological Age using the PhenoAge model (Levine et al. 2018).
    Note: This is a simplified implementation for MVP demonstration.
    """
    
    # Coefficients from the Levine paper (approximation)
    # Phenotypic Age = 141.5 + ln(-ln(1 - MortScore) / (1.512e-5 * exp(0.0901 * Age))) / 0.0901
    
    # Linear Predictor (xb)
    xb = -19.907 \
        - 0.0336 * albumin \
        + 0.0095 * creatinine \
        + 0.1953 * glucose \
        + 0.0954 * np.log(max(crp, 0.01)) \
        - 0.0120 * lymphocyte_percent \
        + 0.0268 * mean_cell_volume \
        + 0.3306 * red_cell_dist_width \
        + 0.0019 * alkaline_phosphatase \
        + 0.0554 * white_blood_cell_count
        
    # Mortality Score
    mort_score = 1 - np.exp(-np.exp(xb))
    
    # Biological Age
    # This formula maps the mortality score back to a standardized age scale
    # Based on the NHANES IV reference population
    bio_age = chronological_age + (xb + 1.517142) / 0.090165
    
    return round(float(bio_age), 2)

def calculate_longevity_optimization_score(
    bio_age: float,
    chronological_age: float,
    hrv_score: float, # 0-100
    sleep_score: float, # 0-100
    glucose_stability: float # 0-100
) -> Dict[str, float]:
    """
    Composite score representing how well a user is currently optimizing their longevity.
    """
    age_delta = chronological_age - bio_age
    
    # Weighting: 40% Age Delta, 20% HRV, 20% Sleep, 20% Metabolic
    score = (min(max(age_delta + 5, 0), 10) * 4) + \
            (hrv_score * 0.2) + \
            (sleep_score * 0.2) + \
            (glucose_stability * 0.2)
            
    return {
        "score": round(score, 1),
        "age_advantage": round(age_delta, 1)
    }
