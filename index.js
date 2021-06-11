// let arr = [30, 4, 26, 86, 2, 17];
// let max = arr[0];

// arr.forEach((val, idx, ar) => {
//   if (max < val) {
//     max = val;
//   }
// });

// console.log(max);

// var things = [
//   ["red pen", "blue pen"],
//   ["analog clock", "digital clock"],
//   ["futsal shoes", "badminton shoes"],
// ];

// for (var i = 0; i < things.length; i++) {
//   var idx = things[i].indexOf("blue pen");
//   if (idx != -1) {
//     let index = i;
//     break;
//   }
// }

// console.log(`blue pen ditemukan di things[${i}]`);

// let data = [11, 22, 34, 41, 52, 63, 71, 86];
// let odd = [];
// let even = [];

// data.forEach((val) => {
//   if (val % 2 == 0) {
//     even.push(val);
//   } else {
//     odd.push(val);
//   }
// });

// let newData = [odd, even];
// console.log(data);

// let dataMap = data.map((val) => {
//   return val * 2;
// });

// console.log(dataMap);

// let persons = [
//   ["Janette", "Woman"],
//   ["Kim Shin", "Man"],
//   ["Tony", "Man"],
// ];

// let personsCall = persons.map((val) => {
//   if (val[1] == "Woman") {
//     return `Mrs. ${val[0]}`;
//   } else {
//     return `Mr. ${val[0]}`;
//   }
// });

// console.log(personsCall);

// let numbers = [11, 21, 30, 47, 60];

// let numbersType = numbers.map((number) => {
//   if (number % 2 == 0) {
//     return [number, "Genap"];
//   } else {
//     return [number, "Ganjil"];
//   }
// });

// console.log(numbersType);

// //MAP DUPLICATE
// let mapDuplicate = (arr, func) => {
//   let result = [];

//   arr.forEach((val) => {
//     result.push(func(val));
//   });

//   return result;
// };

// let numbers = [11, 21, 30, 47, 60];

// let numbersType = mapDuplicate(numbers, (number) => {
//   if (number % 2 == 0) {
//     return [number, "Genap"];
//   } else {
//     return [number, "Ganjil"];
//   }
// });

// console.log(numbersType);

// let numbers = [11, 21, 30, 47, 60];

// let numberEvent = numbers.filter((number) => {
//   return number % 2 == 0; //return TRUE or FALSE
// });

// word = "Rebecca Kondo";

// console.log(word.length);

// let persons = [
//   ["John", 43, "Jakarta"],
//   ["Baby", 21, "Jakarta"],
//   ["Tony", 34, "Surabaya"],
//   ["Justin", 29, "Banjarmasin"],
// ];

// let personsFilter = persons.filter((person) => {
//   return (person[1] > 30) | (person[2] === "Jakarta");
// });

// console.log(personsFilter);

//FILTER DUPLICATE

let fiterLoop = (arr, func) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
};

// let filterEach = (arr, func) => {
//   let result = [];

//   arr.forEach((val) => {
//     if (func(val)) {
//       result.push(val);
//     }
//   });

//   return result;
// };

// let numbers = [11, 21, 30, 47, 62];

// let filterResult = filterEach(numbers, (val) => {
//   return val % 2 === 0;
// });

// console.log(filterResult);

// let numbers = [51, 163, 21, 204, 30, 4, 62, 17];

// numbers.sort((a, b) => {
//   return a - b;
// });

// console.log(numbers);

// let persons = [
//   ["John", 44],
//   ["Baby", 21],
//   ["John", 40],
//   ["Justin", 25],
// ];

// let personsSort = (a, b) => {
//   if (a[0] > b[0]) {
//     return 1;
//   } else if (a[0] < b[0]) {
//     return -1;
//   } else {
//     if (a[1] > b[1]) {
//       return 1;
//     } else if (a[1] < b[1]) {
//       return -1;
//     } else {
//       return 0;
//     }
//   }
// };

// persons.sort(personsSort);
// console.table(persons);

// //NO 1
// let things = ["Alex", "Elena", "Chaplin", "Bernard", "Dany"];

// let dsc = (a, b) => {
//   if (a < b) {
//     return 1;
//   } else if (a > b) {
//     return -1;
//   } else {
//     return 0;
//   }
// };

// things.sort(dsc);
// console.log(things);

// // NO 2
// let numbers = [22, 17, 19, 20, 14];

// let type = numbers.map((number) => {
//   if (number % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// });

// console.log(type);

// //NO 3
// let salaries = [9100000, 9800000, 9500000, 10300000, 9300000];

// let filtering = salaries.filter((salary) => {
//   return salary - (salary * 5) / 100 > 9000000;
// });

// console.log(filtering);

// //NO 4
// let fibo = (numb) => {
//   let fiboNumb = [1, 1];

//   if (numb > 2) {
//     for (let i = 2; i < numb; i++) {
//       fiboNumb[i] = fiboNumb[i - 2] + fiboNumb[i - 1];
//     }
//   }

//   return fiboNumb[numb - 1];
// };

// console.log(fibo(12));

// //NO 5
// let Palindrome = (word) => {
//   //make lower case
//   word = word.toLowerCase();
//   //insert each alphabet to an array
//   let wordAr = [];
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] != " ") {
//       wordAr.push(word[i]);
//     }
//   }

//   //check if the word is palindrome
//   let lg = Math.floor(wordAr.length / 2);
//   if (wordAr.length % 2 == 0) {
//     console.log(
//       wordAr.slice(0, lg).join("") === wordAr.slice(lg).reverse().join("")
//     );
//   } else {
//     console.log(
//       wordAr.slice(0, lg).join("") ===
//         wordAr
//           .slice(lg + 1)
//           .reverse()
//           .join("")
//     );
//   }
// };

// Palindrome("Malamas");
// Palindrome("Katak");
// Palindrome("Race car");
// Palindrome("Madam Im Adam");
// Palindrome("Bulus");

// //NO 6
// let reverseWords = (sentence) => {
//   let ar;
// };

// let arr = [[12]];
// arr[1] = "ma";
// console.log(arr);

// //NO 6 REVERSE WORDS
// let revWords = (words) => {
//   let wordsAr = []; //array for storing the words
//   let start = 0; //start index of each word

//   for (let i = 0; i < words.length; i++) {
//     wordsAr.push(words[i]); //put words into an array
//     if ((words[i] === " ") | (i === words.length - 1)) {
//       let temp = wordsAr.slice(start, i); //temporary array to save the reverse word
//       temp.reverse(); //reverse each word (separated by space)

//       for (let j = start; j < i; j++) {
//         wordsAr[j] = temp[j - start]; //replace original word with the reverse version
//       }

//       start = i + 1; //change start index to the character after space
//     }
//   }

//   let reverseWord = wordsAr.join("");
//   console.log(reverseWord);
// };

// let sentence = "Reverse words for exercise";
// revWords(sentence);
// console.log(sentence.split(" ")); //use split

// //No 7
// let caesearChiper = (words, chip) => {
//   let ar = [];

//   for (let i = 0; i < words.length; i++) {
//     ar.push(words[i]);
//   }
// };

//NO 8
//MEAN
let mean = (ar) => {
  let sum = 0;

  ar.forEach((numb) => {
    sum += numb;
  });

  return sum / ar.length;
};

//Median
let median = (ar) => {
  let sorted = ar.sort((a, b) => {
    return a - b;
  });

  let md = Math.floor(ar.length / 2);
  if (ar.length % 2 == 0) {
    return (sorted[md - 1] + sorted[md]) / 2;
  } else {
    return sorted[md];
  }
};

//MODUS
let mode1 = (ar) => {
  let number = []; //unique number in 'ar' array
  let count = []; //store how many each number appear in 'ar'
  let un; //

  for (let i = 0; i < ar.length; i++) {
    //check if ar[i] already included in 'number' array
    if (!number.includes(ar[i])) {
      number.push(ar[i]);
      count.push(0);
      un = number.indexOf(ar[i]);
    } else {
      continue; //skip below steps
    }

    //check how many ar[i] included in 'ar'
    for (let j = 0; j < ar.length; j++) {
      if (ar[j] === number[un]) {
        count[un] += 1;
      }
    }
  }

  //Modus
  let maxIndex = 0;
  for (let i = 0; i < count.length; i++) {
    if (count[i] > count[maxIndex]) {
      maxIndex = i; //index of larger value in 'count' array
    }
  }

  console.log(`Original data: ${ar}`);
  console.log(`Number array: ${number}`);
  console.log(`Count array: ${count}`);
  console.log(`Modus: ${number[maxIndex]}`);
};

let modus = (ar) => {
  let mod = {};
  let max = [];
  let ind = 0;
  console.log(mod.angka);

  for (let i = 0; i < ar.length; i++) {
    if (!mod[`${ar[i]}`]) {
      mod[`${ar[i]}`] = 0;
    }

    mod[`${ar[i]}`] += 1;
  }

  console.log(mod);

  for (let j in mod) {
    if (mod[`${j}`] > ind) {
      max = [j]; //key
      ind = mod[`${j}`]; //value
    } else if (mod[`${j}`] == ind) {
      max.push(j); //if modus more than 1
    }

    // for (let k in mod) {
    //   if (mod[`${k}`] == ind) {
    //     max.push();
    //   }
    // }
  }

  console.log(max);
};

let data = [1, 2, 3, 2, 5, 2, 1, 2];
let data1 = [4, 2, 4, 7, 5, 9, 9];
modus(data1);
