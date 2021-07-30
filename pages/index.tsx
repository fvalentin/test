import { GetServerSideProps } from 'next';
import { adoptTimezonesFromServer } from '../helpers/adoptTimezonesFromServer';
import { adoptEventsFromServer } from '../helpers/adoptEventsFromServer';
import { timezonesRequest, eventsRequest } from '../api/api';
import { Main } from '../containers/Main/Main';

export default Main;

export const getServerSideProps: GetServerSideProps = async () => {
  const [{ eventsFromServer }, { timezonesFromServer }] = await Promise.all([
    eventsRequest(),
    timezonesRequest(),
  ]);

  return {
    props: {
      timeZones: adoptTimezonesFromServer(timezonesFromServer),
      events: adoptEventsFromServer(eventsFromServer),
    },
  };
};
