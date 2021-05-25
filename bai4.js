// let employee = [
//     {
//     name : 'Long',
//     age : 21,
//     salary : '2000$',
//     position: 'fullstackDEV' 
//     },
//     {
//     name : 'Linh',
//     age : 21,
//     salary : '2000$',
//     position: 'frontendDEV' 
//     },
//     {
//     name : 'Luan',
//     age : 21,
//     salary : '2000$',
//     position: 'backendDEV' 
//     },
// ]
// let a ;
// while(a!='E'){
//     a = prompt("Enter C/R/U/D/E");
//     if(a=='R'){
//         for(i=0;i<employee.length;i++){
        
//         console.log((i+1)+': Name: ' + employee[i].name);
//         console.log('age: '+ employee[i].age);
//         console.log('salary: '+ employee[i].salary);
//         console.log('position: '+ employee[i].position);
//         }
//     }
//     else if(a=='C'){
//         let n =prompt("enter a new name: ");
//         let b =Number(prompt("age: "));
//         let s =prompt("salary: ");
//         let p =prompt("enter the position: ");
//         let obj = {
//             name : n,
//             age : b,
//             salary : s,
//             position : p,
//         }
//         employee.push(obj);
//     }
//     else if(a=='U'){
//         let index = prompt("enter a index of employee: ");
//         let n =prompt("update name: ");
//         let b =Number(prompt("age: "));
//         let s =prompt("salary: ");
//         let p =prompt("position: ");
//         employee[index-1].name = n;
//         employee[index-1].age = b;
//         employee[index-1].salary = s;
//         employee[index-1].position = p;
//     }
//     else if(a=='D'){
//         let index = prompt("index of employee");
//         employee.splice(index-1,1);

//     }
// }