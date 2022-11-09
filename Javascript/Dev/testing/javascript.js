let arrayOfNumbers = [1, 2, 3];

// function that returns an array with each elements value doubled
function doubleNums(nums) {
  const newArray = [...arrayOfNumbers];
  for (let index = 0; index < nums.length; index++) {
    newArray[index] *= 2;
  }
  return newArray;
}
