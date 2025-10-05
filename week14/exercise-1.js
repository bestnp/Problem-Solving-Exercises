function isEvenNumber (num) {
    if (typeof num !== 'number') {
        throw new Error('พารามิเตอร์ต้องเป็น number เท่านั้น');
    }
    
    const result = num % 2 === 0;
    console.log(result ? true : false);
    return result;
}