export function getZoneStatus(count) {
    if (count > 100) return "high";
    if (count > 50) return "medium";
    return "low";
}
