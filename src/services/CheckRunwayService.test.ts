import Runway from "../components/Runway";
import CheckRunwayService from "./CheckRunwayService";

describe("CheckRunwayService", () => {
    const mockRunway = new Runway(1)
    
    describe("available", () => {
        it("should return true", () => {
            expect(CheckRunwayService(mockRunway)).toBe(true);
        })
    })

    describe("other", () => {
        it("should return false", () => {
            mockRunway.status = "other";
            let resp = CheckRunwayService(mockRunway);
            expect(resp).toBe(false);
        })
    })
})