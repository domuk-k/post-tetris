import { Box, SimpleGrid } from '@chakra-ui/react';
import Board from 'components/Board';
import GameInfoSection from './GameInfoSection';
import { MATRIX_SIZE } from 'utils/constants';

const initialMatrix = Array.from({ length: MATRIX_SIZE.HEIGHT }, _ =>
  Array.from({ length: MATRIX_SIZE.WIDTH }),
);

const Main = () => {
  return (
    <Box
      as="main"
      border="1px solid #efefef"
      maxWidth="360px"
      margin="20px auto 0"
    >
      <SimpleGrid gridTemplateColumns="2fr 1fr">
        <Board matrix={initialMatrix} />
        <GameInfoSection />
      </SimpleGrid>
    </Box>
  );
};

export default Main;
