import styled from 'styled-components';
import { darken } from 'polished';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #ffffff; // White background
  font-family: 'Arial', sans-serif;
`;

export const Header = styled.header`
  width: 100%;
  padding: 20px;
  background-color: #032539; // Dark Blue
  color: white;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #032539; // Dark Blue
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #032539; // Dark Blue
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 20px;
  color: #1c768f; // Teal
  text-align: center;
  max-width: 600px;
  margin-bottom: 30px;
  line-height: 1.5;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fbf3f2; // Light Pink
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SearchInput = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  width: 300px;
  outline: none;
  transition: box-shadow 0.3s;

  &:focus {
    box-shadow: 0 0 0 2px #1c768f; // Teal
  }
`;

export const SearchButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  background-color: #fa991c; // Orange
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: ${darken(0.1, '#fa991c')}; // Darkened Orange
    transform: translateY(-2px);
  }

  &:active {
    background-color: ${darken(0.2, '#fa991c')}; // More Darkened Orange
    transform: translateY(0);
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #032539; // Dark Blue
  color: white;
  font-size: 14px;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
`;
