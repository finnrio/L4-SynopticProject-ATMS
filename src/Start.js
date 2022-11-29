import Runway from './components/Runway.js';
import Aircraft from './components/Aircraft.js';

export default function Start() {
    console.log("STARTING APP at:", Date.now())
    const runways = []
    for(let i=0;i<4;i++){
        runways.push(new Runway(i+1))
    }

    const aircrafts = [
      new Aircraft("F800", 15, 21),
      new Aircraft("DC1001", 12, 18),
      new Aircraft("FA20", 10, 1),
    ]

    return [runways, aircrafts]
}