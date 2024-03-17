import {timeUntil} from "./time-until";


const weddingDate = new Date(2024, 6, 23, 16, 0, 0, 0);
describe("Time until", () => {
  it('should get the time until 23 June 2024 from one moth prior', () => {
    const date = new Date(2024, 6, 0, 0, 0, 0);
    jasmine.clock().mockDate(date);

    expect(
      timeUntil(weddingDate)
    ).toEqual({days: 23, hours: 16, minutes: 0, seconds: 0});
  });

  it('should return 0 for equal dates', () => {
    const date = new Date(2024, 6, 23, 16, 0, 0, 0);
    jasmine.clock().mockDate(date);

    expect(
      timeUntil(weddingDate)
    ).toEqual({days: 0, hours: 0, minutes: 0, seconds: 0});
  });

  it('should get the time until 23 June 2024 prior one minute', () => {
    const date = new Date(2024, 6, 23, 15, 59, 0);
    jasmine.clock().mockDate(date);

    expect(
      timeUntil(weddingDate)
    ).toEqual({days: 0, hours: 0, minutes: 1, seconds: 0});
  });

  it('should get the time until 23 June 2024 prior several seconds', () => {
    const date = new Date(2024, 6, 23, 15, 59, 27);
    jasmine.clock().mockDate(date);

    expect(
      timeUntil(weddingDate)
    ).toEqual({days: 0, hours: 0, minutes: 0, seconds: 33});
  });

  it('should get the time until 23 June 2024 prior one hour and several minutes', () => {
    const date = new Date(2024, 6, 23, 15, 37, 23);
    jasmine.clock().mockDate(date);

    expect(
      timeUntil(weddingDate)
    ).toEqual({days: 0, hours: 0, minutes: 22, seconds: 37});
  });

  it('should get the time until 23 June 2024 from one moth prior and hours', () => {
    const date = new Date(2024, 6, 3, 15, 37, 23);
    jasmine.clock().mockDate(date);

    expect(
      timeUntil(weddingDate)
    ).toEqual({days: 20, hours: 0, minutes: 22, seconds: 37});
  });

  it('should get the time until 23 June 2024 with time before the wedding', () => {
    const date = new Date(2024, 4, 25, 3, 11, 35);
    jasmine.clock().mockDate(date);

    expect(
      timeUntil(weddingDate)
    ).toEqual({days: 59, hours: 12, minutes: 48, seconds: 25});
  });

  it('should get the time until 23 June 2024 after one minute', () => {
    const date = new Date(2024, 6, 24, 16, 1, 0);
    jasmine.clock().mockDate(date);

    expect(
      timeUntil(weddingDate)
    ).toEqual({days: 0, hours: 0, minutes: 0, seconds: 0});
  });

  it('should get the time until 23 June 2024 after one second', () => {
    const date = new Date(2024, 6, 24, 16, 0, 1);
    jasmine.clock().mockDate(date);

    expect(
      timeUntil(weddingDate)
    ).toEqual({days: 0, hours: 0, minutes: 0, seconds: 0});
  });

  it('should get the time after 23 june 2024', () => {
    const date = new Date(2024, 6, 25, 3, 11, 35);
    jasmine.clock().mockDate(date);

    expect(
      timeUntil(weddingDate)
    ).toEqual({days: 0, hours: 0, minutes: 0, seconds: 0});
  });
})
