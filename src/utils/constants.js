import { createTwoDimensionArray } from './createTwoDimensionArray';

const MATRIX_SIZE = {
  WIDTH: 10,
  HEIGHT: 20,
};

const NEXT_BLOCK_SECTION = createTwoDimensionArray({ width: 4, height: 2 });

const USRE_INTERFACES = ['ArrowDown', 'ArrowLeft', 'ArrowRight', 'Spacebar'];

export { MATRIX_SIZE, NEXT_BLOCK_SECTION, USRE_INTERFACES };
