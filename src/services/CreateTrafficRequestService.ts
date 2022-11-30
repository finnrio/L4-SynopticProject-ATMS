import * as uuid from "uuid";

export default function CreateTrafficRequestService(runway, aircraft, action){
    return {
        id: uuid.v4(),
        runway: runway,
        aircraft: aircraft,
        action: action
    };
}
