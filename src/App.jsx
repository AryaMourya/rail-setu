import React , { useState, useEffect } from 'react';
import PassengerView from './components/PassengerView';
import AdminDashboard from './components/AdminDashboard';   
import platformGrid from './components/platformGrid';
import PlatformGrid from './components/platformGrid';

const zonesCount = 20; 

export default function App() {
    const [zones, setZones] = useState(Array(zonesCount).fill(0));

    useEffect(() => {
        const interval = setInterval(() => {
            setZones(prevZones => prevZones.map(() => Math.floor(Math.random() * 150)));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-6 font-sans">
            <h1 className="text-2xl font-bold mb-2">RailSetu Dashboard</h1>
            <p className="mb-4 text-gray-600">AI-Driven Crowd Simulation</p>

            <PlatformGrid zones={zones} />

            <AdminDashboard zones={zones} />

            <PassengerView />
        </div>
    );
}