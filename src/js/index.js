import '../css/components.css'

const saludar = (nombre) => {
    let h1 = document.createElement('h1');
    let mensaje = `Hola ${nombre} como estas? muy bien gracias, hola otra vez hola hola hola`;
    h1.innerText = mensaje;
    document.body.append(h1);
}

export {
    saludar
}