let array1 = [3, 20, -2, 6, 0, 1, -5, 2, 74, -30];
// Написать цикл, который выводит те числа из массива, которые больше или равны 20.
for (let i = 0; i < array1.length; i++) {
    if (array1[i] >= 20) {
        console.log(array1[i]);
    }
}
// Написать цикл, который выводит только нечетные числа массива.                                
for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 !== 0) {
        console.log(array1[i]);
    }
}
//Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.     
let sum = 0;
let sum2 = 0;
for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 === 0) {
        sum += array1[i];
    } else {
        sum2 += array1[i];
    }
}
let diff = Math.abs(sum - sum2);
console.log("Сумма четных чисел:", sum);
console.log("Сумма нечетных чисел:", sum2);
console.log("Разница между суммой четных и нечетных чисел:", diff);


let products = [
    {
        id: 1,
        title: "bicycle",
        price: 45000,
        discount: 10
    },
    {
        id: 2,
        title: "roller-skates",
        price: 15000,
        discount: 5
    },
    {
        id: 3,
        title: "Kick scooter",
        price: 10000,
        discount: 30
    },
    {
        id: 4,
        title: "skis",
        price: 25000,
        discount: 20
    },
    {
        id: 5,
        title: "skate",
        price: 10000,
        discount: 0
    }
];

// Написать цикл, который выводит все товары, цена которых больше 20000.
for (let i = 0; i < products.length; i++) {

    console.log(products[i].title
    )


}

