export function getZoneStatus(count) {
    if (count > 100) return "high";
    if (count > 50) return "medium";
    return "low";
}

export function getColor(status) {
    if (status === "high") return "bg-red-500";
    if (status === "medium") return "bg-yellow-500";
    return "bg-green-500";
}

export function calculateHealth(zones) {
    const redZones = zones.filter(z => z > 100).length;
    return 100 - redZones * 5; // Decrease health by 5% for each red zone      
}