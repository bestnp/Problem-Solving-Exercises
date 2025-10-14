const findMode = (arr) => {
    const frequency = {};
    let maxFrequency = 0;
    let mode = null;

    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        frequency[number] = (frequency[number] || 0) + 1;
        if (frequency[number] > maxFrequency) {
            maxFrequency = frequency[number];
            mode = number;
        }
    }
    
    return mode;
};

let result1 = findMode([1, 2, 2, 3, 3, 3, 4]);
console.log(result1); // 3

let result2 = findMode([7, 7, 1, 1, 7]);
console.log(result2); // 7

let result3 = findMode([7, 7, 1, 1, 7, 1]);
console.log(result3); // 7