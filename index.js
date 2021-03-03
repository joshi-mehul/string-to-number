const MAX_COLORS = 16777215;
const BUCKET_SIZE = 152;
const BUCKET_NUMBER  = MAX_COLORS / BUCKET_SIZE;
const stringToNumber = (str) => {
  let finalNumber = 0;
  for(let index = 0 ; index < str.length; index = index + 1) {
    finalNumber = finalNumber + str.charCodeAt(index);

    if(finalNumber >= MAX_COLORS) {
      finalNumber = finalNumber % MAX_COLORS;
    }
  }

  return Math.floor((finalNumber % BUCKET_SIZE) * BUCKET_NUMBER);
}
export { stringToNumber };