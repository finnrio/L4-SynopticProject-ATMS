export default function RunwayStatusService (runway) {
    return {
        availability: runway.status,
        queueSize: Math.floor(runway.queue.length/2),
    }
}