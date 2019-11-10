let arr = ['julio', 'pedro', 'vero', 'juan'];
let newArr = [];
const items  = arr.map((item)=>{
    if(item.length>4)
    newArr.push(item.length);
});
console.log(newArr);

