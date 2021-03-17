import { Flex } from '@chakra-ui/react';
import { NEXT_BLOCK_SECTION } from 'utils/constants';
import Board from 'feature/board/Board';

const GameInfoSection = () => {
  return (
    <Flex
      as="section"
      direction="column"
      justifyContent="center"
      textAlign="center"
    >
      <GameInfo label="Score">2021</GameInfo>
      <GameInfo label="Timer">01:33</GameInfo>
      <GameInfo label="Level">1</GameInfo>
      <GameInfo label="Next Block">
        <Board matrix={NEXT_BLOCK_SECTION} />
      </GameInfo>
    </Flex>
  );
};

const GameInfo = ({ label, children }) => {
  return (
    <div>
      <h1>{label}</h1>
      {children}
    </div>
  );
};

export default GameInfoSection;
