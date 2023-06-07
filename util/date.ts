export const toDateString = (date: Date = new Date()) =>
  date.toLocaleString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
  });

export const toTimeString = (date: Date = new Date()) =>
  date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h24',
  });
