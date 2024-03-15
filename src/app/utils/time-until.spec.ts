import {timeUntil} from "./time-until";

describe("Time until", () => {
  it('should get the time until 23 June 2024', () => {
    expect(timeUntil(new Date('2024-06-23'))).toEqual(3);
  })
})
