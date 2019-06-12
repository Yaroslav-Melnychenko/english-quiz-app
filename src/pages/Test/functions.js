export const ifObjectIdExistInArray = (obj, array) => {
  let ifExist = false;
  array.forEach((element) => {
    if (element.id === obj.id) {
      ifExist = true;
    }
  });
  return ifExist;
};

export const findArrayIndex = (obj, array) => {
  let index = -1;
  array.forEach((element, i) => {
    if (element.id === obj.id) {
      index = i;
    }
  });
  return index;
};
