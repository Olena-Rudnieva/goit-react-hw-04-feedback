import styled from 'styled-components';

export const FeedbackWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 10px;
  min-width: 100px;
  border-radius: 8px;
  border: 1px solid #9fa196;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);
  text-transform: capitalize;

  &:hover,
  &:focus {
    transform: scale(1.1);
    border: 1px solid #9fa79f;
  }

  &:nth-child(1) {
    background-image: linear-gradient(to top left, #12993b, #bcd7c4);
  }

  &:nth-child(2) {
    background-image: linear-gradient(to top left, #ecd02f, #e7e3cd);
  }

  &:nth-child(3) {
    background-image: linear-gradient(to top left, #e9360c, #e7d2cd);
  }
`;
