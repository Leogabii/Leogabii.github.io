export function superFuncion(data) {
    let item;
    let items = "";

    if (!data) {
        console.log("error no hay datos a leer");
        return;
    }

    for (const item of data) {
        //   console.log("la descripcion"+item.description.slice(0,5))
        let pattern = `
    <div class="card">
        <img src="${item.img}" alt="${item.title}" height="300">
        <div class="card-info">
            <h2>${item.nombre}</h2>
            <h6>${item.description.slice(0, 25)}</h6>
            <p ><span class="black-bold">Precio: </span>${item.precio}</p>
            <p ><span class="black-bold">Código: </span>${item.codigo}</p>
        </div>
    </div>
          `;
        items += pattern;
    }
    return items;
}