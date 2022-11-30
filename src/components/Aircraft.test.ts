import Aircraft from "./Aircraft";

describe("Aircraft", () => {

    const mockId = 1;
    const mockTakeOff = 15;
    const mockLanding = 25;

    const myAircraft = new Aircraft(mockId, mockTakeOff, mockLanding);

    beforeAll(() => {
        jest.clearAllMocks();
    })

    describe("GetTakeOff", () => {
        describe("takeOff", () => {
            it("should return expected takeOff time", () => {
                expect(myAircraft.GetTrafficTime("takeOff")).toBe(mockTakeOff);
            })
        })
        describe("landing", () => {
            it("should return expected landing time", () => {
                expect(myAircraft.GetTrafficTime("landing")).toBe(mockLanding);
            })
        })
        
    })

})