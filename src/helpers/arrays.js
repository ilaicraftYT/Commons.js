// Helpers for arrays.

/**
 * This function will get a random item/value of an array.
 * @param {Array} array  An array, where CommonsJS will get the random item.
 * @returns {Array} Note, that if a empty array is given, null will be returned.
 * @example
 * const array = ["cool", "ur", "lib", "my"]
 * getRandomFromArray(array)
 */
function getRandomFromArray(array){
    if(typeof array == undefined) throw new TypeError("Array wasn't provided.")
    if(typeof array !== typeof [])
        throw new TypeError("Expected array when getting random value of array, got " + typeof array + " instead.")
    if(array.length === 0)
        return null
    
    return array[Math.floor(Math.random() * array.length)]
}

/**
 * Clones an array.
 * @param {Array} array The array to clone
 * @returns {Array} The same array as the provided
 * @example
 * const array = [ "hello!", 2, true]
 * cloneArray(array)
 */
function cloneArray(array){
    // eslint-disable-next-line valid-typeof
    if(typeof array === "undefined") throw new TypeError("Array wasn't provided.")
    if(typeof array !== typeof [])
        throw new TypeError("Expected array when cloning array, got " + typeof array + " instead.")
    if(array.length == 0)
        return []
    let narray = []

    array.forEach(element => {
        narray.push(element)
    })

    return narray
}

module.exports = {
    getRandomFromArray,
    cloneArray
}