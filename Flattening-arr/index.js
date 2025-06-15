const arr = [1, [2, [3, 4], 5],6];

let ans = []
const flatten = (arr) => {
    for(let i = 0 ; i< arr.length ; i++){
        if(typeof arr[i] == 'object'){
            flatten(arr[i])
        }else{
            ans.push(arr[i]);
        }
    }
}

flatten(arr)
console.log(ans)