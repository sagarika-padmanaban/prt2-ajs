let fs = require("fs");
const { join } = require("path");
let data = fs.readFileSync('input.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
let testCase = parseInt(readLine())
for(let i=0;i<testCase;i++){
    let arr = readLine().split(" ").map((nos)=>{return parseInt(nos)})
    let result = tri(arr)
    console.log(result);
      
}
function tri(arr){
    arr = arr.sort((a,b)=>{return b-a});
    let ans = 0;
    for(let j=0;j<arr.length-2;j++){
        if(arr[j] < (arr[j+1]+arr[j+2])){
            ans = arr[j]+arr[j+1]+arr[j+2]
            return (ans);
        }
    }
    return 0
}