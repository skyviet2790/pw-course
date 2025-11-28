// tong tu 1 den 100
let sum = 0;

for (let i = 0; i <= 100; i++) {

    sum = sum + i
}
console.log(sum);

// bang cuu chuong

for (i = 1; i <= 10; i++) {
    console.log(`--- Bảng cửu chương ${i} ---`);
    for (j = 1; j <= 10; j++) {
        console.log(i, '*', j, '=', (i * j));
    }
}

//mang chua so le

let arr = [];

for (i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        arr.push(i)
    }
}

console.log(arr)

//email

for (i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`)
}

let revenue = [
    { "month": 1, "total": 100 },
    { "month": 2, "total": 100 },
    { "month": 3, "total": 100 },
    { "month": 4, "total": 100 },
    { "month": 5, "total": 100 },
    { "month": 6, "total": 100 },
    { "month": 7, "total": 100 },
    { "month": 8, "total": 100 },
    { "month": 9, "total": 100 },
    { "month": 10, "total": 100 },
    { "month": 11, "total": 100 },
    { "month": 12, "total": 100 },
];

let sumRevenue = 0;
for (let i = 0; i < revenue.length; i++) {
    sumRevenue += revenue[i].total;

}

console.log("Tổng doanh thu:", sumRevenue);