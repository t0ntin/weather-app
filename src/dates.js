import { format, toDate } from 'date-fns';
import { timeEl, tomorrowDateEl } from './dom-cache';

const convertEpochToDate = (epoch) => {
  // Convert seconds to milliseconds (date-fns expects milliseconds)
  const dateInMilliseconds = epoch * 1000;

  // Convert to a Date object using toDate
  const dateObject = toDate(dateInMilliseconds);

  // Format the date
  const formattedDate = format(dateObject, 'MMM d. h:mm a');
  const formattedDate2 = format(dateObject, 'MMM d');

  return { formattedDate, formattedDate2 };
};

function formatDate(inputDate) {
  const parsedDate = new Date(inputDate);
  return format(parsedDate, 'MMM d');
}

const displayTodaysDate = (json) => {
  const dateEpoch = json.location.localtime_epoch;
  const { formattedDate } = convertEpochToDate(dateEpoch);
  timeEl.innerText = formattedDate;
};

const displayTomorrowsDate = (json) => {
  const unformattedDate = json.forecast.forecastday[1].date;
  const formattedDate = formatDate(unformattedDate);
  tomorrowDateEl.innerText = formattedDate;
  console.log(`tomorrows date: ${formattedDate}`);
};

export { displayTodaysDate, displayTomorrowsDate };
