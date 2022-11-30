export default class Runway {

    constructor(id) {
        this.id = id;
        this.status = "available"
        this.queue = [];
    }

    QueuePrepare(){
        this.queue.push({action: "preparing", time: 15*1000});
    }

    QueueAdd(action, time){
        this.queue.push({action, time})
        this.QueuePrepare();
    }
}