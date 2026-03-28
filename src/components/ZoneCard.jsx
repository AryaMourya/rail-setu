import react from 'react';
import { getZoneStatus, getColor } from '../logic/crowdLogic';

export default function ZoneCard({ count,index}) {
    const status = getZoneStatus(count);
    const color = getColor(status);

    return (
        <div className ={`p-4 rounded-2x1
          text-white ${color} w-full text-center`}>
          <p className="font-bold">Zone {index + 1}</p>
            <p>{count} people</p>
        </div>
    );
}