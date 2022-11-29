export default function RunwayStatusService (runway) {
    const d = new Date();
    const minutes = d.getMinutes();
    const availability = runway.time[d.getHours()][d.getHours()].availability;
    return `${availability} | ${minutes}`
}