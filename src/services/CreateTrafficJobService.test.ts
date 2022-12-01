import CreateTrafficJobService from "./CreateTrafficJobService";
describe("CreateTrafficJobService", () => {
    const mockTime = 1000;
    const mockAircraft = require("../components/Aircraft.ts");
    jest.mock("../components/Aircraft.ts", () => ({ GetTrafficTime: jest.fn(() => mockTime)}));
    const mockRunway = require("../components/Runway.ts");
    jest.mock("../components/Runway.ts", () => ({ QueueAdd: jest.fn()}))
    const mockAction = "action";
    const mockTrafficRequest = {
        id: 1,
        runway: mockRunway,
        aircraft: mockAircraft,
        action: mockAction
    }
    CreateTrafficJobService(mockTrafficRequest);
    it("should call runway QueueAdd", () => {
        expect(mockRunway.QueueAdd).toBeCalled();
    });
    it("should call aircraft GetTrafficTime", () => {
        expect(mockAircraft.GetTrafficTime).toBeCalledWith(mockAction);
    });
});