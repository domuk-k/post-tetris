const DIRECTIONS = {
  DOWN: 'Down',
  RIGHT: 'Right',
  LEFT: 'Left',
};

export const readKey = keyName => {
  switch (keyName.replace('Arrow', '')) {
    case DIRECTIONS.DOWN:
      return { axis: 'Y', direction: +1 };
    case DIRECTIONS.LEFT:
      return { axis: 'X', direction: -1 };
    case DIRECTIONS.RIGHT:
      return { axis: 'X', direction: 1 };
    default:
      return { axis: 'Y', direction: -1 };
  }
};
