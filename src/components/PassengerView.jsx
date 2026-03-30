import react from 'react';

export default function PassengerView() {
    return(
        <div className="mt-6 p-4 border rounded-xl">
            <h2 className="text-xl font-semibold mb-2">Passenger View</h2>
            <p className="mb-2">Welcome to the station! Here you can see real-time updates on crowd levels and find less crowded areas to wait.</p>
            <p className="mb-2">Use the station map to navigate to quieter zones and avoid overcrowding.</p>
            <p><strong>Train:</strong>Lichchavi Express</p>
            <p><strong>Assinged Zone:</strong>5</p>
            <p><strong>Instrution:</strong>Move to Gate B</p>

            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={()=>alert("Voice Alert:Move to Zone 5")}
            >Play Voice Alert
            </button>
        </div>
    );
}