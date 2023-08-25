function tablas()
{
    contador1=1;
    while(contador1<=10)
    {
        document.write('<td>');
        contador2=1;
        while(contador2<=10)
        {
            document.write(contador1,'X',contador2,'= ',contador1*contador2,'<br>');
            contador2++;
        }
        contador1++;
        document.write('</td>');
        if(contador1==6)
        {
            console.log('seis aqui');
            document.write('<tr>');
        }
        else{
            if(contador1==11)
            {
                document.write('</tr>');
            }
        }
    }
    
}

tablas();