import RunwayStatusService from "./RunwayStatusService";

describe("RunwayStatusService", () => {
    const mockStatus = "status";
    const mockRunway = {
        status: mockStatus,
        queue: [1, 2, 3, 4, 5]
    }

    it("should return the runway status", () => {
        const resp = RunwayStatusService(mockRunway);
        expect(resp.availability).toBe(mockStatus);
    });

    it("should return the runway queue size", () => {
        const resp = RunwayStatusService(mockRunway);
        expect(resp.queueSize).toBe(2);
    });
})