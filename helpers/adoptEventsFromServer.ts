import { TEventFromServer } from '../api/api';
import { TListItem } from '../components/ListItem/ListItem';

export type TEventListItem = TListItem & TEventFromServer;

// TODO: generate ids using nanoid or whatever
export const adoptEventsFromServer = (eventsFromServer: TEventFromServer[]): TEventListItem[] => (
  eventsFromServer
    && eventsFromServer.map((event, id) => ({
      ...event,
      id,
      label: event.summary,
    })))
  || [];
