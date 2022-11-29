export default class Aircraft {
    
    id;
    takeOff;
    landing;

    constructor(id, takeOff, landing){
        this.id = id;
        this.takeOff = takeOff;
        this.landing = landing;
    }

    getTakeOff(){
        return this.takeOff;
    }

    getLanding(){
        return this.landing;
    }
    
    getTrafficTime(operation){
        return this[operation];
    }
}