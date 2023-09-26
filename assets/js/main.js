// ***** Level1-1 *****
let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];
const sortierung  = (lan) =>{
    return languages.sort();
}
console.log("###### Array-Sort-Level-1_1 ####");
let sortArr = sortierung(languages)
console.log(sortArr);

// ***** Level1-2 *****

console.log("###### Array-Sort-Level-1_2 ####");
console.log(sortArr.reverse());

// ***** Level1-3 *****
console.log("###### Array-Sort-Level-1_3 ####");
let numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
console.log(numArray1.sort((a,b) => a-b));

// ***** Level2-2 *****
console.log("###### Array-Sort-Level-2_2 ####");
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
console.log(numArray2.sort((a,b) => a-b));
