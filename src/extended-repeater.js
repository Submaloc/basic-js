const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
    str = String(str);
    let addition = options.addition !== undefined ? String(options.addition) : '';
    let repeatedAddition = addition;

    if (options.additionRepeatTimes) {
        repeatedAddition = Array(options.additionRepeatTimes)
            .fill(addition)
            .join(options.additionSeparator !== undefined ? options.additionSeparator : '|');
    }

    let block = str + repeatedAddition;

    if (options.repeatTimes) {
        return Array(options.repeatTimes)
            .fill(block)
            .join(options.separator !== undefined ? options.separator : '+');
    }

    return block;
}

module.exports = {
  repeater
};
