  //  Part 1: Array Higher-Order Methods


  let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
numbers.forEach((num) => {
    console.log(num);
});



let numbers1 = [2, 4, 6, 8, 10];
let result = numbers1.map((num) => {
    return num * 5;
});
console.log(result);



let numbers2 = [10, 25, 15, 30, 45, 5, 20];

let result1 = numbers2.filter((num) => {
    return num > 20;
});
console.log(result1);



let employees = [
    { name: "Ravi", salary: 250000 },
    { name: "Sita", salary: 400000 },
    { name: "Krishna", salary: 300000 },
    { name: "Priya", salary: 200000 }
];
let result2 = employees.filter((employee) => {
    return employee.salary <= 300000;
});
console.log(result2);




let result3 = employees.find((employee) => {
    return employee.salary > 200000;
});
console.log(result3);



let numbers3 = [10, 20, 30, 40, 50];
let total = numbers3.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log("Total:", total);




let numbers4 = [3, 7, 9, 12, 15];
let result4 = numbers4.some((num) => {
    return num % 2 === 0;
});
console.log(result4);




let numbers5 = [10, 20, 30, 40, 50];
let result5 = numbers5.every((num) => {
    return num > 0;
});
console.log(result5);



let numbers6 = [50, 10, 40, 20, 30];
numbers6.sort((a, b) => {
    return a - b;
});
console.log(numbers6);



let numbers7 = [50, 10, 40, 20, 30];
numbers7.sort((a, b) => b - a);
console.log(numbers7);


//  Part 2: String Methods



let str = "javascript";
console.log(str.charAt(4));




let str1 = "javascript";
console.log(str1.charCodeAt(2));



let str2 = "   Hello JavaScript   ";
console.log(str2.trim());



let str3 = "JavaScript";

console.log(str3.toUpperCase());
console.log(str3.toLowerCase());


let str4 = "javascript";
console.log(str4.includes("script"));



let str5 = "JavaScript";
console.log(str5.startsWith("Java"));
console.log(str5.endsWith("Script"));



let str6 = "java is easy, java is popular";
let result6 = str6.replaceAll("java", "python");
console.log(result6);



let str7 = "html-css-javascript-react";
let result7 = str7.split("-");
console.log(result7);



let names = ["Ravi", "Sita", "Krishna", "Priya"];
let result8 = names.join(",");
console.log(result8);



let str8 = "JavaScript";
console.log(str8.slice(0, 4));
console.log(str8.slice(4, 10));

//  Part 3: Date Methods


let today = new Date();

console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Date:", today.getDate());
console.log("Day:", today.getDay());



let months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];
let today1 = new Date();
let currentMonth = today1.getMonth();
console.log("Current Month:", months[currentMonth]);




let today2 = new Date();
console.log("Hours:", today2.getHours());
console.log("Minutes:", today2.getMinutes());
console.log("Seconds:", today2.getSeconds());



let today3 = new Date();

today3.setFullYear(2003);
today3.setMonth(0);
today3.setDate(30);

console.log(today3);
console.log(
    today3.getDate() + "/" +
    (today3.getMonth() + 1) + "/" +
    today3.getFullYear()
);


//   Part 4: Asynchronous JavaScript


setTimeout(() => {
    console.log("Welcome to JavaScript");
}, 3000);



setInterval(() => {
    console.log("Learning JavaScript");
}, 2000);



let interval = setInterval(() => {
    console.log("Learning JavaScript");
}, 2000);

setTimeout(() => {
    clearInterval(interval);
    console.log("Interval stopped");
}, 8000);




function one() {
    console.log("One");
}
function two() {
    console.log("Two");
}
function three() {
    console.log("Three");
}
one();
setTimeout(two, 0);
three();



//   Part 5: Promises and API Fetching



let login = new Promise((resolve, reject) => {
    resolve("Login successful");
});
login.then((message) => {
    console.log(message);
});




let login1 = new Promise((resolve, reject) => {
    reject("Invalid password");
});

login1
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });



    let process = new Promise((resolve, reject) => {
    resolve("Data loaded successfully");
});

process
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Process completed");
    });




    fetch("https://fakestoreapi.com/products")
    .then((response) => {
        return response.json();
    })
    .then((products) => {
        products.forEach((product) => {
            console.log(product.title);
        });
    });



fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("--------------------");
        });
    });




    fetch("https://fakestoreapi.com/products")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then((products) => {
        console.log(products);
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    });




    fetch("https://fakestoreapi.com/products")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then((products) => {
        products.forEach((product) => {
            console.log(product.title);
        });
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("API call completed");
    });



//  Part 6: Real-Time Mini Tasks 



let employees2 = [
    { name: "Ravi", salary: 250000 },
    { name: "Sita", salary: 400000 },
    { name: "Krishna", salary: 180000 },
    { name: "Priya", salary: 300000 },
    { name: "Arjun", salary: 220000 }
];
let result9 = employees2.filter((employee) => {
    return employee.salary < 300000;
});
result9.forEach((employee) => {
    console.log("Name:", employee.name);
    console.log("Salary:", employee.salary);
    console.log("----------------");
});




fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        let result = products.map((product) => {
            return {
                title: product.title,
                price: product.price
            };
        });

        console.log(result);
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("Product calculation completed");
    });



    fetch("https://fakestoreapi.com/products")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then((products) => {
        let result = products.filter((product) => {
            return product.category === "jewelery";
        });

        console.log(result);
    })
    .catch((error) => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("Product search completed");
    });





    let numbers9 = [10, 15, 20, 25, 30];

// 1. Multiply each number by 2
let doubled = numbers9.map((num) => num * 2);
console.log("Doubled:", doubled);

// 2. Get numbers greater than 20
let greaterThan20 = numbers9.filter((num) => num > 20);
console.log("Greater than 20:", greaterThan20);

// 3. Calculate total
let total1 = numbers9.reduce((sum, num) => sum + num, 0);
console.log("Total:", total1);

// 4. Check whether at least one number is even
let hasEven = numbers9.some((num) => num % 2 === 0);
console.log("Has even number:", hasEven);

// 5. Check whether all numbers are positive
let allPositive = numbers9.every((num) => num > 0);
console.log("All positive:", allPositive);




fetch("https://fakestoreapi.com/products")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then((products) => {
        products.forEach((product) => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("---------------------------");
        });
    })
    .catch((error) => {
        console.warn("API Error:", error.message);
    })
    .finally(() => {
        console.log("API call completed");
    });



    