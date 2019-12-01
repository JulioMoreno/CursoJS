let object = {
    name: "Pedro",
    lastName: "Arenas",
    other: "77777777"
}
object.telefono = "3334545635";
const limpiar =(object) =>{
    for(let propiedad in object){
        if(object[propiedad] == null||object[propiedad] == '')
        delete object[propiedad];
    }
}
limpiar(object);
console.log(object);
