function maximumSwap(num: number): number {
  const numString = num.toString();
  let prevPlace: number | null = null;
  for (let i = 0; i < numString.length; i++) {
    if (prevPlace === null) {
      prevPlace = Number(numString[i]);
      continue;
    }
    const place = Number(numString[i]);
    const currentPos = numString.length - i;
    const newNum = num - prevPlace * 10 ** currentPos -
      place * 10 ** (currentPos - 1) + prevPlace * 10 ** (currentPos - 1) +
      place * 10 ** currentPos;
    if (newNum > num) return newNum;
  }
  return num;
}

console.log(maximumSwap(123));
