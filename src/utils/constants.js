import { createTwoDimensionArray } from './createTwoDimensionArray';

const MATRIX_SIZE = {
  WIDTH: 10,
  HEIGHT: 20,
};

const NEXT_BLOCK_SECTION = createTwoDimensionArray({ width: 4, height: 2 });

export { MATRIX_SIZE, NEXT_BLOCK_SECTION };
