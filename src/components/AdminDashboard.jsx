import react from 'react';
import { calculateHealth } from "../logic/crowdLogic"

export default function AdminDashboard({ zones}) {
    return (
        <div className="nt-6">
            <h2 className="text-xl font-semiboldmb-2">Admin Dashboard</h2>
            <p className="font-semibold mb-2">Station Health Score: {calculateHealth(zones)}%</p>

            {zones.map((zone, index) => {
                if (count >100) {
                    return (
                        <p key={index} className="text-red-600">
                            Zone {index + 1} overcrowded
                        </p>
                    );
                }
                return null;
            })}
        </div>
    );
}
