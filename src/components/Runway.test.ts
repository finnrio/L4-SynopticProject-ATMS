import Runway from "./Runway";

describe("Runway", () => {
    const mockId = 1;
    const mockAction = "landing";
    const mockTime = 25;
    const myRunway = new Runway(mockId);
    describe("Queue", () => {
        beforeAll(async () => {
            await myRunway.QueueAdd(mockAction, mockTime);
        })
        it("should add expected job to queue as the first item", () => {
            expect(myRunway.queue[0].action).toBe(mockAction);
            expect(myRunway.queue[0].time).toBe(mockTime);
        })
        it("should add prepare job to queue as the second item", () => {
            myRunway.QueuePrepare();
            expect(myRunway.queue[1].action).toBe("preparing");
            expect(myRunway.queue[1].time).toBe(300000);
        })
    })
    
})