'use strict';
/**
* Add or Sub TimeZone from given Date
* @param {date || dateString} date
* @param {number} timeZone
* @return {date}
*/
module.exports = function (date, timeZone) {
  var targetTime = date;
  if (typeof (date) === 'string') {
     targetTime = new Date(date);
  }
  //get the timezone offset from local time in minutes
  var tzDifference = timeZone * 60 + targetTime.getTimezoneOffset();
  //convert the offset to milliseconds, add to targetTime, and make    a new Date
  var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000);
  return offsetTime;
};