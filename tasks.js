//task1 
/*
"Fizz buzz" is a word game we will use to teach the robots about division. Let's learn computers.

You should write a function that will receive a positive integer and return:
"Fizz Buzz" if the number is divisible by 3 and by 5;
"Fizz" if the number is divisible by 3;
"Buzz" if the number is divisible by 5;
The number as a string for other cases.
Input: A number as an integer.

Output: The answer as a string.

fizzBuzz(15) == "Fizz Buzz"
fizzBuzz(6) == "Fizz"
fizzBuzz(5) == "Buzz"
fizzBuzz(7) == "7"
*/

let fizzBuzz = (data) => {
    if (!isNaN(data) && data != '') {
        if (Number.isInteger(data)) {
            switch (data > 0 && data <= 1000) {
                case ((data % 3) == 0 && (data % 5) == 0):
                    return 'Fizz Buzz';
                    break;
                case ((data % 3) == 0):
                    return 'Fizz';
                    break;
                case ((data % 5) == 0):
                    return 'Buzz';
                    break;
                default:
                    return String(data);
            }
        }
    } else {return null}
}


let game = fizzBuzz(9);
console.log(game);


//task2
/*
You are given a positive integer. Your function should calculate the product of the digits excluding any zeroes.

For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).

Input: A positive integer.

Output: The product of the digits as an integer.

digitsMultip(123405) == 120
digitsMultip(999) == 729
digitsMultip(1000) == 1
digitsMultip(1111) == 1
*/

let digitsMultip = (data) => {
    if (!(isNaN(data)) && data != '') {
        if (Number.isInteger(data) && data > 0 && data < 1000000) {
            let newData = ("" + data).split("");
            let multipResult = 1;
            for (let el of newData) {                
                if (el == '0') continue;
                    multipResult *= el;
            }
            return multipResult;
        } else return null

    } else {
        return null;
    }
}

let check = digitsMultip(10123);
console.log(check);

//task3
/*
You are given a chunk of text. Gather all capital letters in one word in the order that they appear in the text.

For example: text = "How are you? Eh, ok. Low or Lower? Ohhh.", if we collect all of the capital letters, we get the message "HELLO".

Input: A text as a string (unicode).

Output: The secret message as a string or an empty string.

findMessage("How are you? Eh, ok. Low or Lower? Ohhh.") == "HELLO"
findMessage("hello world!") == ""
*/

let findMessage = (data) => {
    if (data != '') {
        let arrOfWords = data.split(' ');
        let secretResult = [];
        let format = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        for (let word = 0; word < arrOfWords.length; word++) {console.log(arrOfWords[word]);
            for (let allLettersOfWord = 0; allLettersOfWord < arrOfWords[word].length; allLettersOfWord++) {
                if (format.test(arrOfWords[word][allLettersOfWord])) continue;
                if (arrOfWords[word][allLettersOfWord] === arrOfWords[word][allLettersOfWord].toUpperCase()) {
                    secretResult.push(arrOfWords[word][allLettersOfWord]);  
                }
            }
        } 
        if (secretResult.length != 0) return secretResult.join('');
        else return secretResult.toString()
    } else return null
}

let secretWord = "dnwkldhiqw3ry37xhqdxaifiuoa7eya8w6r87a7y87y&Y&*DS&*DYH*&d8w9y8whd7*&Whdukjldwj*HDJKj"
console.log(findMessage(secretWord));

//task4
/*
You are given two strings and you have to find an index of the second occurrence of the second string in the first one.

Let's go through the first example where you need to find the second occurrence of "s" in a word "sims". It’s easy to find its first occurrence with a function indexOf which will point out that "s" is the first symbol in a word "sims" and therefore the index of the first occurrence is 0. But we have to find the second "s" which is 4th in a row and that means that the index of the second occurrence (and the answer to a question) is 3.

Input: Two strings.

Output: Int or undefined

secondIndex("sims", "s") == 3
secondIndex("find the river", "e") == 12
secondIndex("hi", " ")  == undefined
*/

let secondIndex = (text, symbol) => { 
    let arrOfStr1 = text.split('');
    let filt = arrOfStr1.filter((letter) => {
        return letter == symbol; 
    })
    if (filt.length >= 2) {
        let indexOfFirstFoundEl = arrOfStr1.indexOf(symbol); console.log(indexOfFirstFoundEl);
        for (let letter = indexOfFirstFoundEl + 1; letter < arrOfStr1.length; letter++) {
            if (arrOfStr1[letter] == symbol) {
                return letter;
                break;
            }
        }
    }
    
}


let res = secondIndex("sims", "s")
console.log(res);

//task5
/*
For the input of your function, you will be given one sentence. You have to return a corrected version, that starts with a capital letter and ends with a period (dot).

Pay attention to the fact that not all of the fixes are necessary. If a sentence already ends with a period (dot), then adding another one will be a mistake.

Input: A string.

Output: A string.

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."

Precondition: No leading and trailing spaces, text contains only spaces, a-z A-Z , and .
*/

let correctSentence = (text) => {
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?]+/;
    let arrOfText = text.split(' '); console.log(arrOfText)
    if (!format.test(arrOfText)) { 
        if (arrOfText[0][0] !== arrOfText[0][0].toUpperCase()) {
            let firstWord = arrOfText[0].split('');
            firstWord[0] = firstWord[0].toUpperCase();
            arrOfText[0] = firstWord.join('')
        }
        let lastEl = arrOfText[arrOfText.length - 1];
        if (lastEl.slice(-1) != '.') {              
            arrOfText[arrOfText.length - 1] += '.' 
        }
        return arrOfText.join(' ');
    } else return null
    
}

let sentence = correctSentence("greetings, my dear friends.");
console.log(sentence);

// task6
/*
You are given an array of integers. You should find the sum of the integers with even indexes (0th, 2nd, 4th...). Then multiply this summed number and the final element of the array together. Don't forget that the first element has an index of 0.
For an empty array, the result will always be 0 (zero).
Input: A list of integers.
Output: The number as an integer.

evenLast([0, 1, 2, 3, 4, 5]) == 30
evenLast([1, 3, 5]) == 30
evenLast([6]) == 36
evenLast([]) == 0

How it is used: Indexes and slices are important elements of coding. This will come in handy down the road!

Precondition: 0 ≤ len(array) ≤ 20
all(isinstance(x, int) for x in array)
all(-100 < x < 100 for x in array)
*/

let evenLast = (data) => {
    if (data.length == 0) return 0;
    if (Array.isArray(data)) {
        if (data.length >= 0 && data.length <= 20) {
            let resMultdigits = data[data.length - 1];
            let sumEvenIndex = 0;
            for (let index = 0; index < data.length; index = index + 2) {
                console.log(index);
                sumEvenIndex += data[index]; console.log(sumEvenIndex);
            }
            return (sumEvenIndex * resMultdigits)
        }
    } else return null
}

let res = evenLast([6]);
console.log(res);

//task 7
/*
Your function should find all of the words that appear in both strings. The result must be represented as a string of words separated by commas in alphabetic order.

Input: Two arguments as strings.

Output: The common words as a string.

commonWords("hello,world", "hello,earth") == "hello"
commonWords("one,two,three", "four,five,six") == ""
commonWords("one,two,three", "four,five,one,two,six,three") == "one,three,two"

How it is used: Here you can learn how to work with strings and sets. This knowledge can be useful for linguistic analysis.

Precondition:
Each string contains no more than 10 words.
All words separated by commas.
All words consist of lowercase latin letters.
*/

let commonWords = (first, second) => {
    let arr1 = first.split(','); 
    let arr2 = second.split(','); 
    let arrResult = [];
    for (let el of arr1) {
        if (arr2.includes(el)) {
            arrResult.push(el); 
        }
    }
    if (arrResult.length == 0) return ''
    else {
        arrResult.sort();
        return arrResult.join(',')
    };
}

let res = commonWords("hello,world", "hello,earth")
console.log(res);

//task 8
/*
You are given an array of numbers (floats). You should find the difference between the maximum and minimum element. Your function should be able to handle an undefined amount of arguments. For an empty argument list, the function should return 0.

Floating-point numbers are represented in computer hardware as base 2 (binary) fractions. So we should check the result with ±0.001 precision.
Think about how to work with an arbitrary number of arguments.

Input: An arbitrary number of arguments as numbers (int, float).

Output: The difference between maximum and minimum as a number (int, float).

mostNumbers(1, 2, 3) == 2
mostNumbers(5, -5) == 10
mostNumbers(10.2, -2.2, 0, 1.1, 0.5) == 12.4
mostNumbers() == 0
*/

let mostNumbers = (...numbers) => {
    if (numbers.length == 0) return 0;
    let minEl = numbers[0];
    let maxEl = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i])) continue;
        if (numbers[i] < minEl) {
            minEl = numbers[i];
        }
        if (numbers[i] > maxEl) {
            maxEl = numbers[i]
        }
    }
    let roundToThree = (num) => {    
        return +(Math.round(num + "e+3")  + "e-3");
    }
    return roundToThree(maxEl - minEl);
} 

let func = mostNumbers(-0.036,-0.11,-0.55,-64);
console.log(func);

//task 9
/*
In computer science and discrete mathematics, an inversion is a pair of places in a sequence where the elements in these places are out of their natural order. So, if we use ascending order for a group of numbers, then an inversion is when larger numbers appear before lower number in a sequence.
Check out this example sequence: (1, 2, 5, 3, 4, 7, 6) and we can see here three inversions
- 5 and 3; - 5 and 4; - 7 and 6.
You are given a sequence of unique numbers and you should count the number of inversions in this sequence.
Input: A sequence as a tuple of integers.

Output: The inversion number as an integer.

countInversion([1, 2, 5, 3, 4, 7, 6]) == 3
countInversion([0, 1, 2, 3]) == 0

Precondition: 2 <= len(sequence) < 200
len(sequence) == len(set(sequence))
all(-100 < x < 100 for x in sequence)
*/

let countInversion = (sequence) => {
    if (sequence.length >= 2 && sequence.length < 200) {
        let resOfCount = 0;
        for (let i = 0; i < sequence.length; i++) {
            for (let j = i + 1; j < sequence.length; j++) { 
            
                if (sequence[i] > sequence[j]) {
                    resOfCount += 1;
                }
            }
        }
        return resOfCount;
        console.log(restOfCount);

    } else return null
    
} 

let res = countInversion([99,-99]);
console.log(res);

//task 10
/*
You have a sequence of strings, and you’d like to determine the most frequently occurring string in the sequence. It can be only one.

Input: non empty Array of strings.

Output: a string.

mostFrequent([
    'a', 'b', 'c', 
    'a', 'b',
    'a'
]) == 'a'
mostFrequent(['a', 'a', 'bi', 'bi', 'bi']) == 'bi'
*/

let mostFrequent = (data) => {
    let count = 0;
    let resStr = ''
    for (let el of data) {
        let arr = data.filter((item) => {return item == el});
        if (arr.length > count) {
            count = arr.length;
            resStr = el;
        }        
    }
    if (resStr) return resStr;
    else return null
}

let res = mostFrequent(['a', 'a', 'bi', 'bi', 'bi']);
console.log(res);

//task 11
/*
Let's teach the Robots to distinguish words and numbers.

You are given a string with words and numbers separated by whitespaces (one space). The words contains only letters. You should check if the string contains three words in succession. For example, the string "start 5 one two three 7 end" contains three words in succession.

Input: A string with words.

Output: The answer as a boolean.

threeWords("Hello World hello") == True
threeWords("He is 123 man") == False
threeWords("1 2 3 4") == False
threeWords("bla bla bla bla") == True
threeWords("Hi") == False

Precondition: The input contains words and/or numbers. There are no mixed words (letters and digits combined).
0 < len(words) < 100
*/

let threeWords = (data) => {
    if (data.length > 0 && data.length < 100) {
        let arrOfWords = data.split(' ');
        let countOf3Words = 0;
        for (let word = 0; word < arrOfWords.length; word++) {
            if (isNaN(+(arrOfWords[word]))) {
                countOf3Words += 1;
                console.log(countOf3Words);
            } else if (countOf3Words >= 3) break;
            else countOf3Words = 0;
        } 
        if (countOf3Words >= 3) return true;
        else return false;
        
    } 
}

let res = threeWords("bla bla bla bla");
console.log(res);

//task 12
/*
You have a table with all available goods in the store. The data is represented as a list of objects
Your mission here is to find the TOP most expensive goods. The amount we are looking for will be given as a first argument and the whole data as the second one
Input: Integer and array of objects. Each objects has two attributes "name" and "price"
Output: the same as the second Input argument

Example:

biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]) == [
    {"name": "wine", "price": 138},
    {"name": "bread", "price": 100}
]

biggerPrice(1, [
    {"name": "pen", "price": 5},
    {"name": "whiteboard", "price": 170}
]) == [{"name": "whiteboard", "price": 170}]
*/

let biggerPrice = (limit, data) => {
    if (data.length == 0) {
        return 0
    } else {
        data.sort((a, b) => b.price - a.price);
        let res = data.slice(0, limit); 
        return res;
    }
}

let res = biggerPrice(1, [
        {"name": "pen", "price": 5},
        {"name": "whiteboard", "price": 170}
    ])

console.log(res);

//task 13
/*
You are given a string where you have to find its first word.
When solving a task pay attention to the following points:
There can be dots and commas in a string.
A string can start with a letter or, for example, a dot or space.
A word can contain an apostrophe and it's a part of a word.
The whole text can be represented with one word and that's it.
Input: A string.
Output: A string.

Example:

firstWord("Hello world") == "Hello"
firstWord("greetings, friends") == "greetings"
1
2
How it is used: the first word is a command in a command line

Precondition: the text can contain a-z A-Z , . '
*/

let firstWord = (a) => {
    let aa = a.trim();
    let b = aa.split(' ');
    let format2 = /[A-aZ-z]+/;
    //let firstWord = '';

    for (let el = 0; el < b.length; el++) {
        if (format2.test(b[el])) {
            firstWord = b[el];
            break;
        }
    }
    let firstWordArr = firstWord.split('')
    console.log(firstWord);
    
    let format = /[. ,!@ #$%^&*()_+\-=\[\]{};':"\\|<>\/?]+/;
    let countOfSymbolsAtTheBegginingOfWord = 0;
    for (let letter = 0; letter < firstWordArr.length; letter++) {
        if (format.test(firstWordArr[letter])) {
            countOfSymbolsAtTheBegginingOfWord += 1;
            console.log(countOfSymbolsAtTheBegginingOfWord);
            
        } else {break}
            
    }
    firstWordArr.splice(0, countOfSymbolsAtTheBegginingOfWord);
    firstWordArr.reverse();
    let countOfSymbolsAtTheEndOfWord = 0;
    for (let letter = 0; letter < firstWordArr.length; letter++) {
        if (format.test(firstWordArr[letter])) {
            countOfSymbolsAtTheEndOfWord += 1;    
                    
        } else {break}

    }
    firstWordArr.splice(0, countOfSymbolsAtTheEndOfWord);
    firstWordArr.reverse();
    return firstWordArr.join('')
}

let res = firstWord("..Hello world");
console.log(res);

