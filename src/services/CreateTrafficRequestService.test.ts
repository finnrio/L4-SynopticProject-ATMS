import CreateTrafficRequestService from "./CreateTrafficRequestService";

const mockId = "mockUUID";

// jest.mock("uuid", () => {
//     return jest.fn().mockImplementation(() => {
//         return {v4: () => {console.log("DOING IT"); return mockId}};
//       });
// });
jest.mock("uuid", () => mockId);

const mockRunway = "runway";
const mockAircraft = "aircraft";
const mockAction = "action";

describe("CreateTrafficRequestService", () => {
    const resp = CreateTrafficRequestService(mockRunway, mockAircraft, mockAction);
    it("should return an id", () => {
        expect(resp.id).toBe(mockId);
    })
    it("should return runway", () => {
        expect(resp.runway).toBe(mockRunway);
    })
    it("should return aircraft", () => {
        expect(resp.aircraft).toBe(mockAircraft);
    })
    it("should return action", () => {
        expect(resp.action).toBe(mockAction);
    })
})