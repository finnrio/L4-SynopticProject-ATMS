import Runway from './components/Runway.ts';
import Aircraft from './components/Aircraft.ts';

export default function Start() {
    const runways = []
    for(let i=0;i<4;i++){
        runways.push(new Runway(i+1))
    }

    const aircrafts = [
      new Aircraft("F800", 15*60*1000, 21*60*1000),
      new Aircraft("DC1001", 12*60*1000, 18*60*1000),
      new Aircraft("FA20", 10*60**1000, 15*60*1000),
    ]

    return [runways, aircrafts]
}