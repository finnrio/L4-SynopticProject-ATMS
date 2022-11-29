export default function RunwayStatusService (runway) {
    function getWaitingTime(){
        let time = 0;
        for (const item in runway.queue) {
            time += runway.queue[item].time
        }
        return time;
    }
    return {
        availability: runway.status,
        waitingTime: getWaitingTime(),
    }
}