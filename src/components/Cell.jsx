import { Box } from '@chakra-ui/layout';

const Cell = ({ isFilled, color }) => {
  const cellColor = isFilled ? color : 'lightgrey';
  return (
    <Box
      width="22px"
      height="22px"
      border="2px solid"
      borderColor={cellColor}
      padding="2px"
      margin="1px"
      _after={{
        content: `""`,
        display: 'block',
        backgroundColor: cellColor,
        height: '14px',
        width: '14px',
      }}
    />
  );
};

export default Cell;
