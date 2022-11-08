function countTruthy(arr){
let truthyvalue=0
for (leti=0;i<arr.length;i++){
    if(arr[i]){
        truthyvalue++;
    }
}
return truthyvalue;



}
console.log(truthyValue([6,3,0,30,7]))
console.log(truthyValue(['',3,0,30,7]))
console.log(truthyValue(['',0,0,undefined,7])) 

module.exports = countTruthy

