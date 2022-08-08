function fibonacci(n) {
    let f0 = 0;
    let f1 = 1;
    let fn = 1;
    let j;
    if (n < 0) {
        return -1;
    } else if (n == 0 || n == 1) {
        return n;
    } else {
        for (j = 2; j < n; j++) {
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
        }
    }
    return fn;
}

function printFibonacci() {
    let number = document.getElementById("number").value;
    for (let i = 1; i <= number; i++) {
        document.getElementById("screen").innerHTML += fibonacci(i) + " ";
        document.getElementById("result").innerHTML =fibonacciDiv5(i);
        document.getElementById("result_2").innerHTML = fibonacci_Sum(i);
    }

}

function clearScreen() {
    document.getElementById('screen').innerHTML = '';
}

function fibonacciDiv5(n) {
    let f0 = 0;
    let f1 = 1;
    let fn = 1;
    let j;
    if (n < 0) {
        return 2;
    } else if (n == 0 || n == 1) {
        return n;
    } else {
        for (j = 2; j < n; j++) {
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
            if (fn % 5 == 0) {
                return fn;
                break;
            }
        }
    }
}

function fibonacci_Sum(n) {
    let f0 = 0;
    let f1 = 1;
    let fn = 1;
    let j;
    let sum = 0, count = 0;

    if (n < 0) {
        return -1;
    } else if (n == 0 || n == 1) {
        return n;
    } else {
        for (j = 2; j < n; j++) {
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
            if (count < 30) {
                if (fn % 7 == 0) {
                    sum = sum + fn;
                    count += 1;

                }
            }
        }
    }
    return sum;
}




