let inp = prompt("enter a string: ");
let temp = inp.split("");
let a = '';
a = temp[0].toUpperCase();
for(i = 1 ; i < temp.length ; i++){
    if(temp[i] == ' '){
        temp[i+1] = temp[i+1].toUpperCase();
    }
    a  += temp[i]; 
}
console.log(a);
