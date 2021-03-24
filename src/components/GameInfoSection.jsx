import { Flex, Kbd } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectGame } from 'feature/game/gameSlice';
import { NEXT_BLOCK_SECTION, USRE_INTERFACES, format } from 'utils';
import Matrix from './Matrix';

const GameInfoSection = () => {
  const {
    score,
    timer,
    levelInfo: { stage },
  } = useSelector(selectGame);

  return (
    <Flex as="section" direction="column" justifyContent="center" textAlign="center">
      <GameInfo label="Score">{score}</GameInfo>
      <GameInfo label="Timer">{format(timer)}</GameInfo>
      <GameInfo label="Level">{stage}</GameInfo>
      <GameInfo label="Next Block">
        <Matrix matrix={NEXT_BLOCK_SECTION} />
      </GameInfo>
      <GameInfo label="user-interfaces">
        <Flex direction="column" w="80%" alignItems="center" margin="0 auto">
          {USRE_INTERFACES.map(name => (
            <Kbd>{name}</Kbd>
          ))}
          <div>and dummy mousemove</div>
        </Flex>
      </GameInfo>
    </Flex>
  );
};

const GameInfo = ({ label, children }) => {
  return (
    <section>
      <h1>{label}</h1>
      {children}
    </section>
  );
};

export default GameInfoSection;
