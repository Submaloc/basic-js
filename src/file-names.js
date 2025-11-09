const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const map = {};
  const result = [];

  for (const name of names) {
    if (!(name in map)) {
      result.push(name);
      map[name] = 0;
    } else {
      let k = map[name] + 1;
      let newName = `${name}(${k})`;
      while (newName in map) {
        k++;
        newName = `${name}(${k})`;
      }
      result.push(newName);
      map[name] = k;
      map[newName] = 0;
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
