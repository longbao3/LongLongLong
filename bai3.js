let a = prompt(" Nhap vao 1 mang canh nhau boi dau , ");
let arr = a.split(",");
for(i = 0; i < arr.length -1 ; i++){
    let temp = a[i];
    {
        for(j = i+1 ; j < arr.length; j++ ){
            if(arr[i] == arr[j]){
                arr.splice(j-1,1);
            }
        }
    }
}
console.log(arr);
