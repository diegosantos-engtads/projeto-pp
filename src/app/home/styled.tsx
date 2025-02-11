import styled from 'styled-components';

export const Header = styled.header`
  background-color: #3498db;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  font-family: 'Arial', sans-serif;
`;

export const Main = styled.main`
  padding: 40px 20px;
  background-color: #f4f4f4;
  min-height: 60vh;
  color: #333;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
  }
`;

export const Footer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  text-align: center;
`;

export const CopyRight = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #ecf0f1;
  font-family: 'Arial', sans-serif;
  font-style: italic;
`;
