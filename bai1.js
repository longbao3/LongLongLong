let inp = prompt("Enter a tring: ");
let oup = inp.split("");
let ouput = '';

for(i = inp.length - 1 ;i >= 0; i--){
    ouput += oup[i];
}
console.log(ouput);
