const MATRIX_SIZE = {
  WIDTH: 10,
  HEIGHT: 20,
};

const NEXT_BLOCK_SECTION = Array.from({ length: 2 }, () =>
  Array.from({ length: 4 }, () => 0),
);

export { MATRIX_SIZE, NEXT_BLOCK_SECTION };
