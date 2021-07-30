import { Layer, Rect, Text, Group } from 'react-konva';

const HOUR_EVENT_HEIGHT = 78;
const CORNER_RADIUS = 5;

export const CanvasEvent = ({ diff, timeLabel, activeEventLabel }: any) => (
  <Layer>
    <Group x={190} y={50}>
      <Rect
        x={0}
        y={0}
        width={39}
        height={HOUR_EVENT_HEIGHT * diff}
        fill="#6CE37F"
        cornerRadius={[CORNER_RADIUS, 0, 0, CORNER_RADIUS]}
      />

      <Rect
        x={2}
        y={0}
        width={120}
        height={HOUR_EVENT_HEIGHT * diff}
        fill="#C4F4CC"
        cornerRadius={[0, CORNER_RADIUS, CORNER_RADIUS, 0]}
      />

      <Text
        text={timeLabel}
        fontSize={13}
        x={5}
        y={5}
        fontFamily="Inter"
        ellipsis
        width={100}
        wrap="none"
        fill="#39AE4C"
      />

      <Text
        text={activeEventLabel}
        fontSize={13}
        fontStyle="bold"
        x={5}
        y={20}
        fontFamily="Inter"
        ellipsis
        width={100}
        wrap="none"
        fill="#39AE4C"
      />
    </Group>
  </Layer>
);
