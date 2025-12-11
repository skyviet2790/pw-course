for (let i = 0; i <= 5; i++) {
    if (i % 2 === 0) {
        continue
    }
}

let product = {
    "A": 20,
    "B": 30,
    "C": 10,
}

for (let property in product) {
    console.log(product[property]);
}

let arr = ["A", "B", "C"];

for (let value of arr) {
    console.log(value);
}

//forEach

arr = ["A", "B", "C"];
arr.forEach((value, index) => {
    console.log(value);
    console.log(index);
});
