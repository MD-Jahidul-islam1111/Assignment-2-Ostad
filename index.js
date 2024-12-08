// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.

const calculateDifference = (a, b) => {
    return a - b;
};


// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
const isOdd = (num) => {
    return num % 2 !== 0;
};

// 3) Write a function named findMin that takes an array of numbers and returns the smallest number from the array.

const findMin = (arr) => {
    return Math.min(...arr);
};

// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
const filterEvenNumbers = (arr) => {
    return arr.filter((num) => num % 2 === 0);
};

// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

const sortArrayDescending = (arr) => {
    return arr.slice().sort((a, b) => b - a);
};

// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

const lowercaseFirstLetter = (str) => {
    if (!str) {
        return str;
    }
    return str[0].toLowerCase() + str.slice(1);
};

// 7) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

const findAverage = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    const sum = arr.reduce((acc, num) => {
        return acc + num;
    }, 0);
    return sum / arr.length;
};

// 8) Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.


const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};



// calling the funtions:

console.log("Difference:", calculateDifference(10, 5)); 


console.log("Is 7 Odd?:", isOdd(7)); 


console.log("Minimum Value:", findMin([10, 5, 20, 2])); 


console.log("Even Numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));


console.log("Sorted Descending:", sortArrayDescending([1, 5, 3, 9])); 


console.log("Lowercased String:", lowercaseFirstLetter("Hello World"));


console.log("Average:", findAverage([10, 20, 30, 40])); 


console.log("Is Leap Year (2024):", isLeapYear(2024)); 