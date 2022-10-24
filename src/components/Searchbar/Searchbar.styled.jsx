import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #3f57b3;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  min-width: 250px;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  outline: none;
`;

export const Button = styled.button`
  display: inline-block;
  width: 75px;
  height: 100%;
  background-color: #d3d3d3;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  cursor: pointer;
`;
