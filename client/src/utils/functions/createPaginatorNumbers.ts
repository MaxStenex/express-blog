const createPaginatorNumbers = (
  currentPageNumber: number,
  totalPages: number,
  visibleNumbers: number
) => {
  const numbersArray = [];

  if (currentPageNumber === 1 || currentPageNumber === 2) {
    for (let i = 1; i <= visibleNumbers; i++) {
      numbersArray.push(i);
      if (numbersArray.length >= totalPages) {
        return numbersArray;
      }
    }
    return numbersArray;
  } else if (currentPageNumber + 2 > totalPages) {
    for (let i = totalPages - visibleNumbers + 1; i <= totalPages; i++) {
      numbersArray.push(i);
      if (numbersArray.length >= visibleNumbers) {
        return numbersArray;
      }
    }
  } else {
    for (let i = currentPageNumber - 2; i <= currentPageNumber + 2; i++) {
      numbersArray.push(i);
      if (numbersArray.length >= visibleNumbers) {
        return numbersArray;
      }
    }
  }
};

export default createPaginatorNumbers;
