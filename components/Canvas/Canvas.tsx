import { Stage, Layer, Rect } from 'react-konva';
import { TEventListItem } from '../../helpers/adoptEventsFromServer';
import { TListItem } from '../ListItem/ListItem';
import { CanvasEvent } from './CanvasEvent';

const moment = require('moment-timezone');

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 400;

interface CanvasProps {
  activeTimezone?: TListItem;
  activeEvent?: TEventListItem;
}

export default function Canvas({ activeTimezone, activeEvent }: CanvasProps) {
  const activeTimezoneLabel = activeTimezone && activeTimezone.label;
  const activeEventLabel = activeEvent && activeEvent.label;
  const { start, end } = activeEvent || {};

  const localStart = moment.tz(start, activeTimezoneLabel);
  const localEnd = moment.tz(end, activeTimezoneLabel);
  const diff = moment(localEnd).diff(moment(localStart), 'hours', true);

  const localStartLabel = moment(localStart).format('HH:mm');
  const localEndLabel = moment(localEnd).format('HH:mm');
  const timeLabel = `${localStartLabel} - ${localEndLabel}`;

  return (
    <Stage width={CANVAS_WIDTH} height={CANVAS_HEIGHT}>
      {/* Background */}
      <Layer>
        <Rect
          x={0}
          y={0}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          fill="white"
          stroke="black"
          stokeWidth={2}
        />
      </Layer>

      <CanvasEvent
        diff={diff}
        timeLabel={timeLabel}
        activeEventLabel={activeEventLabel}
      />
    </Stage>
  );
}
