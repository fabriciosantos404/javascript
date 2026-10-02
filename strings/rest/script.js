let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

imprimirNumeros(num, num1, num2);
console.log('break');
imprimirNumeros(num2, num3);
console.log('break');
imprimirNumeros(2,6,4,2,3,6,9,8,6,5,1,3,4,0,7)