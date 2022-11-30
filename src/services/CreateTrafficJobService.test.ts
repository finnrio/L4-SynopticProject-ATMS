import CreateTrafficJobService from "./CreateTrafficJobService";

const mockRunway = jest.mock("../components/Runway.ts");
const mockAircraft = jest.mock("../components/Aircraft.ts");

const mockTrafficRequest = {
    id: 1,
    runway: mockRunway,
    aircraft: mockAircraft,
    action: "action"
}

describe("CreateTrafficJobService", () => {
    it("should call runway queue add", () => {
        CreateTrafficJobService(mockTrafficRequest);
        expect(mockRunway).toBeCalled();
    })
    
})