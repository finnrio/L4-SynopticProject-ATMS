export default class Runway {

    constructor(id) {
        this.id = id;
        
        this.time = this.createTimetable()
    }

    createTimetable() {
        let time = {}
        for (var h = 0; h < 24; h++){
            time[h] = []
            for (let m = 0; m < 60; m++){
                time[h].push(
                    { minute: m, availability: "available"}
                    );
            }
        }
        return time;
    }
}