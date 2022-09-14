import styled from 'styled-components';
import { colors } from 'styles/variables';

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  min-width: 175px;

  background-color: ${colors.CARD_CLR};
  color: ${colors.OVERALL_CLR};
  padding: 12px;
  margin: 1rem;
  border-radius: 4px;

  > h5 {
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  > span {
    font-weight: 300;
    font-size: 12.5px;
  }
`;

const CardHeader = styled.div`
  position: relative;
  width: 100%;

  > button {
    position: absolute;
    top: 0;
    right: 0;
    font-weight: bold;
  }
`;

const CountBtn = styled.button`
  margin-top: 1rem;
  width: 200px;
  background-color: ${colors.SECONDARY_BTN_CLR};
  border-radius: 4px;
  margin-top: 1rem;
  padding: 8px;
  font-weight: 600;
  color: white;
`;

export const ContactsStyles = {
  List,
  Card,
  CardHeader,
  CountBtn
};
