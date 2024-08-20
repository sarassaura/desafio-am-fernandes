type FlattenedObject = { [key: string]: any };

function flattenObject(
  obj: { [key: string]: any },
  parentKey: string = "",
  result: FlattenedObject = {}
): FlattenedObject {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

export { flattenObject };
