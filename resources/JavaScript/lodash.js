const _ = {
        //5 clamp Method
        clamp(number, lower, upper) {
            const lowerClampedValue = Math.max(number, lower);
            const clampedValue = Math.min(lowerClampedValue, upper);
            return clampedValue;

            //Tests done to check if clamp Method worked.
            // $ node test/clamp.js
            // _.clamp() Tests:
            // 1 - _.clamp() is defined - Passed!
            // 2 - Returns in-range values unclamped - Passed!
            // 3 - Clamps values by lower bound - Passed!
            // 4 - Clamps values by upper bound - Passed!

        },
        //.inRange() Method
        inRange(number, start, end) {
            if (!end) {
                end = start;
                start = 0;
            }

            if (start > end) {
                let temp = end;
                end = start;
                start = temp;
            }

            const isInRange = start <= number && number < end;

            return isInRange;

            // Test .inRange() Method
            //  $ node test/in-range.js
            // _.inRange() Tests:
            // 1 - _.inRange() is defined - Passed!
            // 2 - Returns true if an in-range value is in range - Passed!
            // 3 - Returns false if a too small value is out of range - Passed!
            // 4 - Returns false if a too large value is out of range - Passed!
            // 5 - Uses end value as start value and start value as 0 if end value is not defined - Passed!
            // 6 - Reverses start and end values if start is bigger than end - Passed!
            // 7 - Returns true if provided value is same as start value - Passed!
            // 8 - Returns false if provided value is same as end value - Passed!
        },
        // .words() Method
        words(string) {
            const words = string.split(' ');
            return words;

            // Test .words() Method
            // $ node test / words.js
            // _.words() Tests:
            //     1 - _.words() is defined - Passed!
            //     2 - Returns an array - Passed!
            //     3 - Returns an array of words from a string with one word - Passed!
            //     4 - Returns an array of words from a string with two words - Passed!
            //     5 - Returns an array of words from a string with three words - Passed!
        },
        pad(string, length) {
            if (length <= length) {
                return string;
            }

            const startPaddingLength = Math.floor((length - string.length) / 2);
            const endPaddingLength = (length - string.length) - startPaddingLength;


            //Create a new variable called paddedString and set its value equal to the space character, ' ', 
            //repeated startPaddingLength number of times (using the string .repeat() method), concatenated with string, 
            //concatenated with the space character repeated endPaddingLength number of times.
            // Check nr 6 - the concatenated values????
            const paddedString = ' ' + startPaddingLength.repeat() + string + ' ' + endPaddingLength;

            return paddedString;
        },
        //18-implement -.has() Method
        has(object, key) {
            has(object, key) {
                const hasValue = object.hasOwnProperty(key) ? (object[key] ? true : false) : false;
                return hasValue;

                //Test
                //                 $ node test/has.js
                // _.has() Tests:
                // 1 - _.has() is defined - Passed!
                // 2 - Returns true if an object has a value at a specified key - Passed!
                // 3 - Returns false if an object does not have a value at a specified key - Passed!
                //             },
                invert(object) {
                        let invertedObject = {};
                        let originalValue;
                        for (let key in object) {
                            originalValue = object[key];
                            invertedObject[originalValue] = key;
                        }
                        return invertedObject;

                        //Test $ node test/invert.js
                        // _.invert() Tests:
                        // 1 - _.invert() is defined - Passed!
                        // 2 - Returns an object with key and value inverted for a single key-value pair - Passed!
                        // 3 - Original key is not present after the key-value pairs have been inverted - Passed!
                        // 4 - Returns an object with all keys and values inverted - Passed!
                    },
                    //27- Implement .findKey()
                    findKey(object, predicate) {
                        for (let key in object) {
                            value = object[key];
                            predicateReturnValue = predicate[value];
                            if (predicate(object[key])) {
                                return key;
                            }
                        }
                        return undefined;

                        //Test
                        //  $ node test/find-key.js
                        // _.findKey() Tests:
                        // 1 - _.findKey() is defined - Passed!
                        // 2 - Returns the corresponding key of a value that returns truthy from the predicate function - Passed!
                        // 3 - Returns undefined if an object has no values that return truthy from the predicate function - Passed!
                    },
            };


        };

        // Do not write or modify code below this line.
        module.exports = _;