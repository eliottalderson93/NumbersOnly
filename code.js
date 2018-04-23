function NumbersOnly(arr){
    var newArr = [];
    for(var i =0;i<arr.length;i++){
        if((typeof arr[i])==='number'){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var Array1 = [1, 'stone', 'woods',5,true, 8];
NumbersOnly(Array1);

function killAllOthers(arr){
    for(var i =0;i<arr.length;i++){
        if((typeof arr[i])!='number'){
            arr.splice(i,1);
        }
    }
    return arr;
}
console.log(killAllOthers(Array1));