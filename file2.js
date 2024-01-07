//filter method
const persons = [1, 2, 3, 3, 4, 5, 1, 2, 6, 5, 7, 8, 9, 9, 2, 4];
const nums = persons.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
})

console.log(nums);

//reduce method
const sum = (accumulator, value) => {
    return accumulator + value;
}
const total = persons.reduce(sum);
console.log(total);

//array of store
const store = [
    {
        product: "laptop",
        price: 1000,
        count: 3
    },
    {
        product: "laptop1",
        price: 5000,
        count: 2
    },
    {
        product: "laptop3",
        price: 1500,
        count: 5
    }
];

const storeValue = store.reduce((acc, arr) => {
    return acc + arr.price * arr.count;
} , 0)

console.log(storeValue);