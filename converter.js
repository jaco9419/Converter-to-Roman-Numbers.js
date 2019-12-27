function convertToRoman(num) {
    let numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNumArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let inRoman = "";

    for (let i = 0; i < numArr.length; i++) {
        while (numArr[i] <= num) {
            inRoman += romanNumArr[i];
            num -= numArr[i];
        }
    }
    return inRoman;
}
console.log(convertToRoman(999));
