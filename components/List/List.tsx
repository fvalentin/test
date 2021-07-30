import styled from '@emotion/styled';
import { ReactNode } from 'react';

const ListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  & > li {
    margin-bottom: 10px;
  }
`;

interface ListProps {
  className?: string;
  children: ReactNode;
}

export const List = ({ className, children }: ListProps) => (
  <ListStyled className={className}>{children}</ListStyled>
);
