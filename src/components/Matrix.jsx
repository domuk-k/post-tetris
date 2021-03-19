import { Flex } from '@chakra-ui/layout';
import Cell from 'components/Cell';

const Matrix = ({ matrix, ref }) => {
  return (
    <Flex direction="column" margin="0 auto" alignItems="center">
      {matrix.map((row, rowIndex) => (
        <Flex direction="row" key={rowIndex}>
          {row.map(({ isFilled, color }, cellIndex) => (
            <Cell key={cellIndex} isFilled={isFilled} color={color} />
          ))}
        </Flex>
      ))}
    </Flex>
  );
};
export default Matrix;
