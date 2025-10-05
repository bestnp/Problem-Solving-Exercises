function findMax(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('พารามิเตอร์ต้องเป็น array เท่านั้น');
    }

    return Math.max(...arr);
}

console.log(findMax([1, 2, 3, 4, 5]));
console.log(findMax([1, 2, 3, 4, 10]));