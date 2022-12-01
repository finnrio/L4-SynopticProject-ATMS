export default function RunwayStatusService (runway) {
    let queueSize = 0;
    for(const item in runway.queue){
        if(runway.queue[item].action !== "preparing"){
            queueSize += 1;
        }
    }
    return {
        availability: runway.status,
        queueSize: queueSize,
    }
}