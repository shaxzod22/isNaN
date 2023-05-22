

function inputNumber() {
    let arr = []
    let info = prompt('son bo`lmagan qiymat kiriting')
    arr.push(info)
    
    for(let i = 0;i < arr.length ;i++){
        if(!isNaN(arr[i])){
            let info = prompt('son bo`lmagan qiymat kiriting')
            arr.push(info)
            
        }
        if(isNaN(arr[i])){
            arr.pop()
        }
        
    }
    return console.log(arr);
}


inputNumber()
