import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 88px;
  width: 770px;
`;

export const ListWrapper = styled.ul`
  margin-top: 50px;
`;

export const Item = styled.li`
  padding-bottom: 24px;

  :not(:first-child) {
    padding-top: 24px;
  }

  :not(:last-child) {
    border-bottom: 1px solid #e9ebef;
  }
`;
