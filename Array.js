

const Remove_Duplicate =(arr)=>{
    let len=arr.length;
    const returnArr=[];
    for(let i=0;i<len;i++){
        if(!returnArr.includes(arr[i])){
            returnArr.push(arr[i])
        }
    }
    return returnArr;
};
const arr = [1, 2, 3, 4, 5,3,2,1,4,5];
const result=(Remove_Duplicate(arr));
console.log(result);

