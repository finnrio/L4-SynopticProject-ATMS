import * as uuid from "uuid";

export default function CreateTrafficRequestService(runway, aircraft, type){
    const d = new Date();
    return {
        id: uuid.v4(),
        runway: runway,
        aircraft: aircraft,
        hour: d.getHours(),
        minute: d.getMinutes(),
        type: type
    };
}
