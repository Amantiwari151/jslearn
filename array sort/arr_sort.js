// using for loop
var arr = [23,12,34,67,10,4];
for(var i=1;i<arr.length;i++){
    for(var j=0;j<i;j++){
        if(arr[i]<arr[j]){
            var x = arr[i];
            arr[i]=arr[j];
            arr[j]=x;
        }
    }
}
console.log(arr);