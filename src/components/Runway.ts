export default class Runway {

    id: number;
    status: string;
    queue: any[];


    constructor(id) {
        this.id = id;
        this.status = "available"
        this.queue = [];
    }

    QueuePrepare(){
        const preparingQueueJob = {action: "preparing", time: 300000};
        this.queue.push(preparingQueueJob);
    }

    QueueAdd(action, time){
        this.queue.push({action, time})
        this.QueuePrepare();
    }
}