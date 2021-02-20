import styled from 'styled-components';

export const Wrapper = styled.div`
  
  max-width: 1100px;
  background: #F1F2F6;
  border-radius: 10px;
  border: none;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  .answers-container {
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  width: 50%;
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
    correct
      ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
      : !correct && userClicked
        ? 'linear-gradient(90deg, #FF5656, #C16868)'
        : 'linear-gradient(90deg, #003249, #007ea7)'};
    border: none;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;