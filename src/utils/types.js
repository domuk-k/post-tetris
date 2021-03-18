/**
 * @typedef {object} Cell
 * @property {{x:number,y:number}} position
 * @property {boolean} isFilled
 * @property {string} color
 */
/**
 * @param {keyof Cell}
 * @return {Cell}
 */
export function createCell({ position, isFilled = false, color = 'lightgrey' }) {
  return {
    position,
    isFilled,
    color,
  };
}
