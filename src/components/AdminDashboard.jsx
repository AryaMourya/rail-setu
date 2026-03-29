import react from 'react';
import { calculateHealth, getZoneStatus }  from '../logic/crowdLogic';

export default function ZoneCard({ count,index}){
    const status = getZoneStatus(count);
    const color = calculateHealth(status);

    return (
        <div className ={`p-4 rounded-2x1
          text-white ${color} w-full text-center ${color}`}>
          <p className="font-bold">Zone {index + 1}</p>
            <p>{count} people</p>
        </div>
    );
}