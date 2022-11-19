const isIsogram = (str) => {
  return new Set(str.toUpperCase()).size == str.length;
};
// Set() checks if all values are unique
