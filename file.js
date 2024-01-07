const age = 22;
console.log("age",age);

let person = "Rahil";
let ans = person === "Rahil" ? "correct" : "wrong";
console.log(ans);

const students = {
    sname: "Amaan",
    sclass: 12,
    grade: "A"
}

const {sname, sclass, grade} = students;
console.log(sclass);

const students2 = { ...students, sname: "Rahil"}
console.log(students2);

// map method 
let names = ["Rahil", "Amaan"];
names.map((i) => {
    console.log("Mohammad " + i);
})

//filter method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = (value) => {
    return value % 2 === 0;
}

const even = numbers.filter(isEven);

console.log(even);