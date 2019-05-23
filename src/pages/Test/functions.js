export const ifObjectIdExistInArray = (obj, array) => {
  let ifExist = false;
  array.forEach((element) => {
    if (element.id === obj.id) {
      ifExist = true;
    }
  });
  return ifExist;
};
