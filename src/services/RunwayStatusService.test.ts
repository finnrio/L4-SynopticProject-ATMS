import RunwayStatusService from "./RunwayStatusService";

describe("RunwayStatusService", () => {
    const mockStatus = "status";
    const mockRunway = {
        status: mockStatus,
        queue: [{action: "landing"}, {action: "takeOff"}, {action: "preparing"}, {action: "takeOff"}]
    }

    it("should return the runway status", () => {
        const resp = RunwayStatusService(mockRunway);
        expect(resp.availability).toBe(mockStatus);
    });

    it("should return the runway queue size", () => {
        const resp = RunwayStatusService(mockRunway);
        expect(resp.queueSize).toBe(3);
    });
})