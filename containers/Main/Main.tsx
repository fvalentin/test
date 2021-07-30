import Head from 'next/head';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { ListsContainer } from '../../containers/ListsContainer/ListsContainer';
import { TEventListItem } from '../../helpers/adoptEventsFromServer';
import { TListItem } from '../../components/ListItem/ListItem';

const MyCanvas = dynamic(() => import('../../components/Canvas/Canvas'), {
  ssr: false,
});

interface MainProps {
  timeZones: TListItem[];
  events: TEventListItem[];
}

export const Main = ({ timeZones, events }: MainProps) => {
  const [activeTimezoneId, setActiveTimezoneId] = useState(0);
  const [activeEventId, setActiveEventId] = useState(0);

  const activeTimezone = timeZones.find(
    (timezone) => timezone.id === activeTimezoneId
  );
  const activeEvent = events.find((event) => event.id === activeEventId);

  const isCanvasShown = activeTimezone && activeEvent;

  return (
    <div className="container">
      <Head>
        <title>Focus Calendar Test</title>
      </Head>

      <main>
        <ListsContainer
          timeZones={timeZones}
          events={events}
          activeTimezoneId={activeTimezoneId}
          setActiveTimezoneId={setActiveTimezoneId}
          activeEventId={activeEventId}
          setActiveEventId={setActiveEventId}
        />

        {isCanvasShown && (
          <MyCanvas activeTimezone={activeTimezone} activeEvent={activeEvent} />
        )}
      </main>
    </div>
  );
};
