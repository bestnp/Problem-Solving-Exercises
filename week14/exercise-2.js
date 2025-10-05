function reverseString(str) {
    if (typeof str !== 'string') {
        throw new Error('พารามิเตอร์ต้องเป็น string เท่านั้น');
    }

    return str.split('').reverse().join('');
}