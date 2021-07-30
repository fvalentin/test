import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import { TListItem } from '../../components/ListItem/ListItem';
import { TEventListItem } from '../../helpers/adoptEventsFromServer';

import { ListContainer } from '../ListContainer/ListContainer';

const ListsContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
`;

const StyledListContainer = styled(ListContainer)`
  width: 300px;
`;

interface ListsContainerProps {
  timeZones: TListItem[];
  events: TEventListItem[];
  activeTimezoneId: number;
  setActiveTimezoneId: Dispatch<SetStateAction<number>>;
  activeEventId: number;
  setActiveEventId: Dispatch<SetStateAction<number>>;
}

export const ListsContainer = ({
  timeZones,
  events,
  activeTimezoneId,
  setActiveTimezoneId,
  activeEventId,
  setActiveEventId,
}: ListsContainerProps) => (
  <ListsContainerStyled>
    <StyledListContainer
      items={timeZones}
      activeItemId={activeTimezoneId}
      setActiveItemId={setActiveTimezoneId}
    />
    <StyledListContainer
      items={events}
      activeItemId={activeEventId}
      setActiveItemId={setActiveEventId}
    />
  </ListsContainerStyled>
);
