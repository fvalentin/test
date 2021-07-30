import eventsMockup from '../data/events.json';
import timezonesMockup from '../data/timezones.json';

// Kinda requests

export type TEventFromServer = {
  start: string;
  end: string;
  summary: string;
}

type TEventsRequestResult = {
  eventsFromServer: TEventFromServer[];
}

export const eventsRequest = (): Promise<TEventsRequestResult> => new Promise((resolve) => {
  setTimeout(() => {
    resolve({ eventsFromServer: eventsMockup.events });
  }, 0);
});

type TTimezonesRequestResult = {
  timezonesFromServer: string[];
}

export const timezonesRequest = (): Promise<TTimezonesRequestResult> => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      timezonesFromServer: timezonesMockup.timezones,
    });
  }, 0);
});
