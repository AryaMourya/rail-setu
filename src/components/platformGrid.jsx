import react from 'react';
import ZoneCard from './ZoneCard';

export default function PlatformGrid({ zones }) {
    return(
        <div className="grid grid-cols-5gap-3">
            {zones.map((count, index) => (
                <ZoneCard key={index} count={count} index={index} />
            ))}
        </div>
    )
}