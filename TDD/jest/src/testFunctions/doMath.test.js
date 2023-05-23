import { sum, divide, substract, multiply } from "../myFunctions/doMath";

describe("Math functions text", () => {
    it("두가지 값을 더합니다", () => {
        expect(sum(1,1)).toBe(2)
    })
    it("두가지 값을 뺍니다", () => {
        expect(substract(1,1)).toBe(0)
    })
    it("두가지 값을 나눕니다", () => {
        expect(divide(4,2)).toBe(2)
        expect(divide(3,4)).toBe(0.75)
        expect(() => divide(0,0)).toThrowError('0이면 안됨니다')
    })
    it("두가지 값을 곱합니다", () => {
        expect(multiply(2,3)).toBe(6)
        expect(multiply(4,6)).toBe(24)
        expect(multiply(2,5)).toBe(10)
        expect(multiply(1,11)).toBe(11)
    })
});
