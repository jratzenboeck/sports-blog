export default function padWithZero(number) {
  return number < 10 ? `0${number}` : number;
}
