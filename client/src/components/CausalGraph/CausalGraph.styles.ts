import styled, { keyframes } from 'styled-components';

// Keyframes for the spin animation
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled component for the loader
export const Loader = styled.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 2s linear infinite;
`;

export const StyledInput = styled.input`
  display: inline-block;
  width: calc(50% - 120px); // Assuming button width + margin ~120px
  padding: 10px;
  font-size: 1.2em;
  border: 2px solid #0074D9;
  border-radius: 4px;
  margin: 0; // Remove any default margin
`;
export const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  border: 2px solid #0074D9;
  background-color: #0074D9;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px; // Maintain a small gap between input and button
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center; // Center the items horizontally
  align-items: center; // Align the items vertically
  gap: 10px; // Add space between items
  padding: 10px 0; // Padding on top and bottom only
`;
