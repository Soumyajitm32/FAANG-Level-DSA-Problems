/*
Problem Name:-Product of Array Except Self
Problem Link:-https://leetcode.com/problems/product-of-array-except-self/
*/ 
function productExceptSelf(array){
    let n = array.length;
    let leftArray=[]
    let rightArray=[]
    let finalArray=[]
    let leftProduct=1
    for(let i=0;i<n;i++){
        leftArray[i]=leftProduct
        leftProduct*=array[i]
    }
    let rightProduct=1
    for(let i=n-1;i>=0;i--){
        rightArray[i]=rightProduct
        rightProduct*=array[i]
    }
    for(let i=0;i<n;i++){
        
        finalArray[i]=leftArray[i]*rightArray[i]
    }
    return finalArray 

}
