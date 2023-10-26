import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  margin-left: 10px;
  width: 300px;
  height: 200px;
  border: 2px solid black;
  padding: 20px;
  border-radius: 4px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 5px 10px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
