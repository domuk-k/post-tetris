import { Box, Flex } from '@chakra-ui/react';

const Board = ({ matrix }) => {
  return (
    <Flex as="section" direction="column" margin="0 auto" alignItems="center">
      {matrix.map((row, rowIndex) => (
        <Flex direction="row" key={rowIndex}>
          {row.map((cube, cubeIndex) => (
            <Cube key={cubeIndex} />
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

const Cube = () => {
  return (
    <Box
      width="22px"
      height="22px"
      border="2px solid"
      borderColor="lightgrey"
      padding="2px"
      margin="1px"
      _after={{
        content: `""`,
        display: 'block',
        backgroundColor: 'lightgrey',
        height: '14px',
        width: '14px',
      }}
    ></Box>
  );
};

export default Board;
