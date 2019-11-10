//let arr = ['julio', 'pedro', 'vero', 'juan'];
//let res =[];
//arr.forEach( (item)=>{
//    res.push(item.length);  
//});
//console.log(res);
//console.log(arr);


let arr = ['julio', 'pedro', 'vero', 'juan']; 
const lengthArr = arr.map(item=>{ 
    if (item.length>4)
        return item.length

}).filter(item=>{
    return item!=undefined;
});

console.log(lengthArr);