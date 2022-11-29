import * as uuid from "uuid";

export default function CreateTrafficRequestService(runway, aircraft, hour, minute, type){
    return {
        id: uuid.v4(),
        runway: runway,
        aircraft: aircraft,
        hour: hour,
        minute: minute,
        type: type
    };
}
