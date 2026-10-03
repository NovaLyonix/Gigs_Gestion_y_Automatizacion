console.log("Pasta con Carne Molida")

const FUENTE = { "Pasta": 45, "Arroz": 54, "Queso": 32 };

const cajota = document.getElementById("calculadora");

function crearEntrada( precioDLR, precioBS, descrip){

    
    const entrada = document.createElement("div"); //CAJA PRINCIPAL
    entrada.className = "cajita";
    
    const box_producto = document.createElement("select");//CAJA CATEGORIA DE PRODUCTO
    box_producto.className = "inp-list";

    for (const propiedad in FUENTE){

        const opcion_producto = document.createElement("option"); // OPCION DE NOMBRE CATEGORIA DE PRODUCTO
        const opcion = document.createTextNode(`${propiedad}:   `);
        opcion_producto.appendChild(opcion);
        opcion_producto.value = `${propiedad}`;
        box_producto.appendChild(opcion_producto); //Añadimos su nombre a su cajita de nombre

    }

    const box_marca = document.createElement("input"); //Caja de la seccion MARCA
    box_marca.type = "text"; // Hacemos que sea un tipo de input de texto
    box_marca.placeholder = "Marca"
    box_marca.className = "inp-mark"
    
    console.log(box_producto.value);

    const BasePrice_producto = document.createElement("input");  
    BasePrice_producto.type = "text"; //CAJA PRECIO BASE DEL PRODUCTO 
    BasePrice_producto.className = "inp-precioBase"

    const PBS_producto = precioBS;   // Precio del producto en bolivares.
    const PDLR_producto = precioDLR; // Precio del producto en dolares.
    var Precio_base = document.createTextNode(`${PDLR_producto}bs || ${PBS_producto}$`); //Texto con ambos precios

    BasePrice_producto.textContent = Precio_base; // Añadimos a su caja de precios.
    BasePrice_producto.placeholder = "X Bs || Y $"

    const boton_menos = document.createElement("button"); 
    boton_menos.textContent = "-"; // boton para restar restar cantidad
    boton_menos.className = "btn-minus"
    
    const boton_mas = document.createElement("button"); 
    boton_mas.textContent = "+"; // boton para sumar una cantidad
    boton_mas.className = "btn-plus"

    const box_cantidad = document.createElement("input"); // espacio que indica la cantidad actual 
    box_cantidad.type = "text"; 
    box_cantidad.value = "4";
    box_cantidad.className = "inp-cantidad";


    const precio_calculado = document.createElement("input"); // Espacio que indica el valor calculado de una entrada
    precio_calculado.type = "text"; 
    precio_calculado.placeholder = " - - - bs"
    precio_calculado.className = "inp-calculo"

    const boton_borrar = document.createElement("button"); // boton ELIMINAR la entrada
    boton_borrar.onclick = "borrarse";
    boton_borrar.textContent = "X"; 
    boton_borrar.className = "btn-borrar";
    //boton_borrar.onclick = borrarse(this); Metodo brusco
  


    //Añadimos TODO a la caja principal.
    entrada.appendChild(box_producto);
    entrada.appendChild(box_marca);
    entrada.appendChild(BasePrice_producto);
    entrada.appendChild(boton_menos);
    entrada.appendChild(box_cantidad);
    entrada.appendChild(boton_mas);
    entrada.appendChild(precio_calculado);
    entrada.appendChild(boton_borrar);
    
    

    //Añadimos la CAJA PRINCIPAL, al documento.
    cajota.appendChild(entrada);
    //console.log(cajota.childNodes)

}

cajota.addEventListener("click", function(e){ //Función de Evento que maneja casi toda la interactividad de las listas

    const borrador = e.target.classList.contains("btn-borrar"),
          sumador = e.target.matches(".btn-plus"),
          restador = e.target.matches(".btn-minus");

          ;

    if (borrador){ //Este condicional verifica si el boton presionado es la X, para borrar una entrada
            const cajita = e.target.closest('.cajita');
            console.log(`Nodo eliminado:`);
            console.log(cajita);
            cajita.remove();
    }

    if (sumador){//Este condicional verifica si el boton presionado es el + o -

        const toque = e.target.closest(".btn-plus");
        //console.log("albondiga") //debugg xD
        console.log(toque)
        
    }

    if (restador){//Este condicional verifica si el boton presionado es el + o -

        const toque = e.target.closest(".btn-minus");
        //console.log("albondiga") //debugg xD
        console.log(toque)
        
    }

})

cajota.addEventListener("change", function(e){

// Verificamos si lo que cambió fue tu select (inp-list)
    const listado = e.target.closest(".inp-list");
    
    if (listado) {
        const seleccionActual = listado.value;
        const valorActual = FUENTE[seleccionActual];
        
        // Buscamos el precioBase DENTRO de la misma cajita donde ocurrió el cambio
        const cajita = listado.closest(".cajita");
        const precio = cajita.querySelector(".inp-precioBase");
        const marca = cajita.querySelector(".inp-mark");
        const cantidad = cajita.querySelector(".inp-cantidad");
        const calculo = cajita.querySelector(".inp-calculo");
        
        if (precio) {
            // Si es un div/span usa textContent, si es un input usa .value
            precio.value = valorActual; 
            console.log(`Precio del producto: ${precio.value} y cantidad del produto: [${cantidad.value}]`)
        }



        calculo.value = parseInt(precio.value) * parseInt(cantidad.value)
    }

}) //Función de Evento que maneja casi toda la interactividad de las listas




