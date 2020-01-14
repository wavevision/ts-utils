const toFixedRounded = (n: number, decimals = 1): number =>
  Number(n.toFixed(decimals));

export default toFixedRounded;
