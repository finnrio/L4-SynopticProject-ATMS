import CreateTrafficRequestService from "./CreateTrafficRequestService";
describe("CreateTrafficRequestService", () => {
    const mockId = "123456789";
    jest.mock('uuid', () => ({ v4: () => mockId }));
    const mockRunway = "runway";
    const mockAircraft = "aircraft";
    const mockAction = "action";
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