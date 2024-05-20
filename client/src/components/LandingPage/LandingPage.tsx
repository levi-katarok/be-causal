import React, { useState } from 'react';
import {
  PageContainer,
  Header,
  MainContainer,
  Title,
  Description,
  SearchContainer,
  SearchInput,
  SearchButton,
  Footer
} from './LandingPage.styles';

const LandingPage: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Handle the search action
    console.log('Search query:', query);
  };

  return (
    <PageContainer>
      <Header>BeCausal</Header>
      <MainContainer>
        <Title>Welcome to BeCausal</Title>
        <Description>
          Discover amazing things and explore the world of possibilities with our app. Start by
          searching for something interesting.
        </Description>
        <SearchContainer>
          <SearchInput
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter search query..."
          />
          <SearchButton onClick={handleSearch}>Search</SearchButton>
        </SearchContainer>
      </MainContainer>
      <Footer>&copy; 2024 My Awesome App. All rights reserved.</Footer>
    </PageContainer>
  );
};

export default LandingPage;
