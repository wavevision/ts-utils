const toFixed = (n: number, decimals = 1): number => {
  const exp = new RegExp(`^-?\\d+(?:.\\d{0,${decimals || -1}})?`);
  const match = n.toString().match(exp);
  return match ? parseFloat(match[0]) : n;
};

export default toFixed;
