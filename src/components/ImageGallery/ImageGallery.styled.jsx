import styled from 'styled-components';

export const ImageGallery = styled.ul`
  display: grid;
  padding-top: 40px;
  padding-bottom: 40px;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
`;

export const LoadMoreBtn = styled.button`
  display: block;
  width: 120px;
  height: 45px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  background-color: #d3d3d3;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
