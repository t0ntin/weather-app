import { format, toDate } from 'date-fns';

export const convertEpochToDate = (epoch) => {
  // Convert seconds to milliseconds (date-fns expects milliseconds)
  const dateInMilliseconds = epoch * 1000;

  // Convert to a Date object using toDate
  const dateObject = toDate(dateInMilliseconds);

  // Format the date
  const formattedDate = format(dateObject, 'MMM d. h:mm a');
  const formattedDate2 = format(dateObject, 'MMM d');

  return { formattedDate, formattedDate2 };
};

export function formatDate(inputDate) {
  const parsedDate = new Date(inputDate);
  return format(parsedDate, 'MMM d');
}
