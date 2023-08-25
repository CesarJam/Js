class miClase
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
        document.write(this.primero);
        document.write(this.segundo);
    };
    miMetodoDos(dato1,dato2)
    {
        console.log(dato1 +"-"+dato2);
    };

};

var objetoUno = new miClase("juanito",21212);