/** @format */

export const checkDate = (date: string): boolean =>
  new Date(date).toString() !== "Invalid Date";
