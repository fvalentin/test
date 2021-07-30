import { TListItem } from '../components/ListItem/ListItem';

// TODO: generate ids using nanoid or whatever
export const adoptTimezonesFromServer = (timezonesFromServer: string[]): TListItem[] => (
  timezonesFromServer
    && timezonesFromServer.map((timeZone, id) => ({ id, label: timeZone })))
  || [];
