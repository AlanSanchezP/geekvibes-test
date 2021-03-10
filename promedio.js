let alumnos=[
    {
        name:"Jorge",
        lastName:"Camarillo",
        average:29
    },
    {name:"Jorge",lastName:"Camarillo",average:30},{name:"Jorge",lastName:"Camarillo",average:18},{name:"Jorge",lastName:"Camarillo",average:19}];

console.log(alumnos.reduce((accumulator, current) => accumulator += current.average, 0)/alumnos.length);