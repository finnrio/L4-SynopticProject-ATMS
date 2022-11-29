export default class RunwayProcessor {
    async Process(runway){
        function timeout(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        while(runway.queue.length > 0){
            runway.status = runway.queue[0].action;
            await timeout(runway.queue[0].time)
            runway.queue = runway.queue.slice(1);
        }
    }
}