export function isEven(num: number): boolean {
  return num % 2 === 0;
}

export function formatNumberForDispay(number: number): string {
  return number.toLocaleString('en-US').replace(/,/g, ' ');
}
