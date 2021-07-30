import { Dispatch, SetStateAction } from 'react';
import { List } from '../../components/List/List';
import { ListItem } from '../../components/ListItem/ListItem';

type TListItem = {
  id: number;
  label: string;
};

interface ListContainerProps {
  className?: string;
  items: TListItem[];
  activeItemId: number;
  setActiveItemId: Dispatch<SetStateAction<number>>;
}

export const ListContainer = ({
  className,
  items,
  activeItemId,
  setActiveItemId,
}: ListContainerProps) => {
  const onClickHandler = (id: number) => {
    setActiveItemId(id);
  };

  return (
    <List className={className}>
      {items.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          label={item.label}
          active={activeItemId === item.id}
          onClick={() => onClickHandler(item.id)}
        />
      ))}
    </List>
  );
};
