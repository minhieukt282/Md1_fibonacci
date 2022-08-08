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
        document.getElementById("result").innerHTML += fibonacci(i) + " ";
    }
}


