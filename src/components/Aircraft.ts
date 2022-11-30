export default class Aircraft {
    
    id: number;
    takeOff: number;
    landing: number;

    constructor(id: number, takeOff: number, landing: number){
        this.id = id;
        this.takeOff = takeOff;
        this.landing = landing;
    }

    GetTrafficTime(operation: string){
        return this[operation];
    }
}