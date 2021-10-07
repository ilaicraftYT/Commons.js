// Helpers for strings

/**
 * Parses a given string number to a literal number (incluse with a non-number text)
 * @param {Number} num The number to parse
 * @param {Boolean} alwaysint If the number will be always a int (eg: 1), not required
 * @param {Boolean} alwaysfloat If the number will be always a float (eg: 2.1), not required
 * @returns {Number|NaN} Note, that if alwaysint or alwaysfloat isn't specified or its false, Number function will be used, if a number with non-number text is provided, it will return NaN.
 * @example
 * parseNum("1", true) // Will return 1
 * parseNum("2.5adas", false, true) // Will return 2.5
 * parseNum("2.3") // Will return 2.3
 */
function parseNum(num, alwaysint, alwaysfloat) {
    if(num === "undefined") throw new TypeError("Number isn't specified")
    if(alwaysint == true && alwaysfloat == true || alwaysint == false && alwaysfloat == false)
        throw new SyntaxError("Invalid usage of \"alwaysint\" and \"alwaysfloat\" parameters.")
    if(alwaysint && alwaysint !== false)
        return parseInt(num, 10)
    else if(alwaysfloat && alwaysfloat !== false)
        return parseFloat(num)
    else
        return Number(num)
}

module.exports = {
    parseNum
}