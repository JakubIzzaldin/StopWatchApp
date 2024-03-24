export const convertMillisecondsToTime = (milliseconds: number) => {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const remainingMilliseconds = milliseconds % 1000;

  return {hour: hours, min: minutes, sec: seconds, ms: remainingMilliseconds};
};
