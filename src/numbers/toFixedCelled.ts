const toFixedCelled = (n: number, decimals = 1): number =>
  Number(`${Math.ceil(Number(`${n}e${decimals}`))}e-${decimals}`);

export default toFixedCelled;
