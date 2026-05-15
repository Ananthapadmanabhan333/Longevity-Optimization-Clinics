import time
import random
import json
import requests
from datetime import datetime

API_URL = "http://localhost:8000"

def simulate_wearable_stream():
    """Simulates real-time ingestion of wearable data."""
    print("Starting Aeterna Data Ingestion Stream...")
    
    while True:
        data = {
            "hrv": random.uniform(40, 85),
            "sleep_efficiency": random.uniform(0.7, 0.98),
            "resting_heart_rate": random.uniform(45, 65),
            "steps": random.randint(2000, 15000),
            "timestamp": datetime.now().isoformat()
        }
        
        # In a real system, this would go to Kafka
        # For MVP, we log it and potentially send to a local dev endpoint
        print(f"Ingesting wearable event: {json.dumps(data)}")
        
        time.sleep(5) # Simulate 5-second sampling (accelerated for demo)

if __name__ == "__main__":
    simulate_wearable_stream()
