function fact(n) {
  if (n < 0) return "Undefined"; 
  let f = 1;
  for (let i = 2; i <= n; i++) {
      f = f * i;
  }
  return f;
}