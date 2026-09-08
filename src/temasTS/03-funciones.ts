let x=8
let y=2

function sumar(x:number, y:number,z:number=5):number {
    let a=6
    let b=7
    let res=a+b
console.log('La suma es: ' +res)
return x+y+z
}

let resultado=sumar(x,y)
console.log(resultado)

interface Mascotas{
    nombre:string,
    edad:number,
    raza:string,
    sexo?:string,
    vacunado:boolean,
    mostrar:()=>void
}

const nuevaMascota:Mascotas={
    nombre:'Firulais',
    edad:5,
    raza:"Pastos alemán",
    vacunado:true,
    mostrar(){
        console.log(`La edad de ${this.nombre} es ${this.edad}`)
    }
}

function mostrarMascota(mascota:Mascotas,s:number):void{
    mascota.edad+=s //mascota.edad=mascota.edad+x
    console.log(mascota)
   // console.log(mascota.mostrar())
}

mostrarMascota(nuevaMascota,3)

//Siempre definir las variables