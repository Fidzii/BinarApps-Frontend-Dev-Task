export function getRandomNumber(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffleArray(array: any[]) {
  let randomIndex;

  for (let index = array.length - 1; index > 0; index--) {
    randomIndex = getRandomNumber(0, index);
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }

  return array;
}
