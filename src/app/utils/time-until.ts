const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const timeUntil = (futureDate: Date) => {
  const now = new Date();
  const distance = futureDate.getTime() - now.getTime();
  if (distance < 0) {
    return {days: 0, hours: 0, minutes: 0, seconds: 0};
  }
  const days = Math.floor(distance / DAY);
  const hours = Math.floor((distance % DAY) / HOUR);
  const minutes = Math.floor((distance % HOUR) / MINUTE);
  const seconds = Math.floor((distance % MINUTE) / SECOND);

  return {days, hours, minutes, seconds};
}

