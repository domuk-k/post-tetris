import { Box, SimpleGrid } from '@chakra-ui/react';
import GameInfoSection from 'components/GameInfoSection';
import Board from 'feature/board/Board';

const Main = () => {
  return (
    <Box
      as="main"
      border="1px solid #efefef"
      maxWidth="360px"
      margin="20px auto 0"
    >
      <SimpleGrid gridTemplateColumns="2fr 1fr">
        <Board />
        <GameInfoSection />
      </SimpleGrid>
    </Box>
  );
};

export default Main;
