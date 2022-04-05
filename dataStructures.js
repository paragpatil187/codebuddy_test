// level 2
//1

let arr=[1, 3, 4, 6, 7, 8];
let oddArray=[];
function removeEven(arr){
for( let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        oddArray.push(arr[i])
    }
    
}
return oddArray
}
console.log(removeEven(arr))

//2
let str='Elie'
function vowelUperrcase(str){
var outputString=""
for(let i=0;i<str.length;i++){
    if(str[i]=="a"|| str[i]=="e" || str[i]=="i" ||str[i]=="o" || str[i]=="u"){
        outputString+=str[i].toUpperCase()

    }
    else{
        outputString+=str[i]
    }
}
return outputString
}
console.log(vowelUperrcase(str))

//3
var array=[1, 3, 4, 6, 7, 8, 2, 5]
function maxElement(array){
var max=array[0];
for(let i=0;i<array.length;i++){
    if(array[i]>max){
        max=array[i]
    }
}
return max
}
console.log(maxElement(array))

