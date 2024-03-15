import {
  differenceInDays,
  differenceInHours,
  differenceInMilliseconds,
  differenceInMonths,
  differenceInSeconds
} from "date-fns";

export const timeUntil = (futureDate: Date) => {
  const now = Date();
  const seconds = differenceInSeconds(futureDate, now)
  const hours = differenceInHours(futureDate, now)
  const days = differenceInDays(futureDate, now)
  const months = differenceInMonths(futureDate, now)
  return days;
}
