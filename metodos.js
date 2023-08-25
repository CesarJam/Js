class MiClase
{
    constructor(primero,segundo)
    {
        this.primero = primero;
        this.segundo = segundo;
        this.tres = "este es el tres";
    };

    miMetodoUno()
    {
        var a = 50;
        var b = 70;
        var c = a + b ;
        return c;
    };
    escribir()
    {
        console.log(this.primero);
        console.log(this.segundo);
        alert("nombres");
    };
    miMetodoDos(dato1,dato2)
    {
        console.log(dato1 +"-"+dato2);
    };

};

let objetoUno = new MiClase("juanito", 21212);
console.log(objetoUno.miMetodoUno());
console.log(objetoUno.escribir());
console.log(objetoUno.miMetodoDos("dato1aaa", "dato2bb"));