import styled from '@emotion/styled';

type ButtonStyledProps = {
  active: boolean;
};

const ButtonStyled = styled.button<ButtonStyledProps>`
  border: none;
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0 30px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};
  background-color: ${({ active }) => (active ? 'gray' : 'white')};

  &:hover {
    ${({ active }) => !active && 'background-color: lightgray'};
  }
`;

const ButtonLabel = styled.span`
  overflow: hidden;
  white-space: nowrap;
  display: block;
  text-overflow: ellipsis;
`;

export type TListItem = {
  id: number;
  label: string;
};

interface ListItemProps extends TListItem {
  className?: string;
  active: boolean;
  onClick: () => void;
}

export const ListItem = ({
  className,
  label,
  active,
  id,
  onClick,
  ...props
}: ListItemProps) => (
  <li className={className} {...props}>
    <ButtonStyled active={active} onClick={onClick}>
      <ButtonLabel>{label}</ButtonLabel>
    </ButtonStyled>
  </li>
);
