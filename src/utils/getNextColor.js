const colorGenerator = (function* () {
  while (true) {
    yield 'deeppink';
    yield 'navajowhite';
    yield 'royalblue';
    yield 'springgreen';
    yield 'lightsalmon';
    yield 'orangered';
    yield 'orchid';
    yield 'peru';
  }
})();

export const getNextColor = (() => {
  return () => colorGenerator.next().value;
})();
