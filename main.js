// Task 1
function debounce(fn, delay = 400) {
    let timerId;
    return function (...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delay);
    };
}
function handleSearch(event) {
    console.log("Input value:", event.target.value);
}

const debouncedSearch = debounce(handleSearch, 400);
const input = document.getElementById('searchInput');
input.addEventListener('input', debouncedSearch);


// Task 2
function sum(a){
    return function (b){
        return function (c){
            return a+b+c;
        };
    };
}

console.log(sum(2)(3)(5));


// Task 3
function greet(greeting){
    return function (name){
        return `${greeting}, ${name}`;
    }
}
const sayHi = greet('Hi');
console.log(sayHi('John'));

// Task 4
const user1 = {
  name: "Alice",
  greet() {
    return `Hello, I'm ${this.name}`;
  }
};

const user2 = {
  name: "Bob"
};

console.log(user1.greet.call(user2))

// Task 5
const counter = {
  count: 0,
  increment() {
    this.count++;
    console.log(this.count);
  }
};

const button = document.getElementById("clickBtn")
button.addEventListener('click',counter.increment.bind(counter))

// Task 6
// version 1
function removeDublicatesWithSet(arr) {
    const unique = arr => [...new Set(arr)];
    console.log(unique(arr))
}

removeDublicatesWithSet([1,2,3,2,2,2,1])

// version 2
function removeDublicates(arr) {
    unique = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(unique);
}

removeDublicates([4,5,8,9,5,4,8,9,5,4,8,9,5])


// Task 7
const people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 21 },
  { name: "David", age: 25 },
];

const ageMap= new Map();
people.forEach(person => {
    if(!ageMap.has(person.age)) {
        ageMap.set(person.age, []);
    }
    ageMap.get(person.age).push(person.name)
})
console.log(ageMap)


// Task 8
const sales = new Map([
  [101, 10],
  [102, 5],
  [103, 8]
]);

function increase(productId) {
    if (sales.has(productId)) {
        sales.set(productId, sales.get(productId)+1);
    } else {
        sales.set (productId, 1);
    }
}

increase(101)
console.log(sales)