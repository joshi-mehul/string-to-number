  const MAX_COLORS = 16777215;
const stringToNumber = (str) => {
  let finalNumber = 0;
  for(let index = 0 ; index < str.length; index = index + 1) {
    finalNumber = finalNumber + str.charCodeAt(index);

    if(finalNumber >= MAX_COLORS) {
      finalNumber = finalNumber % MAX_COLORS;
    }
  }
  return finalNumber;
}
export { stringToNumber };