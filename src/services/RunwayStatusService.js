export default function RunwayStatusService (runway) {
    const d = new Date();
    return(runway.time[d.getHours()][d.getHours()].availability)
}