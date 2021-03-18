import { createCell } from './types';

export const createTwoDimensionArray = ({ width, height }) => {
  return Array.from({ length: height }, (_, rowIndex) =>
    Array.from({ length: width }, (_, colIndex) =>
      createCell({ position: { x: rowIndex, y: colIndex } }),
    ),
  );
};
