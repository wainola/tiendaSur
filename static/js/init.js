document.addEventListener('DOMContentLoaded', (e) => {
    if(window.location.pathname === '/producto/p1/'){
        console.log("En Producto");
        let form = document.forms[0];
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            swal({
                text: "Gracias por su pedido. Nos contactaremos con usted a la brevedad",
                type: "success"
            });
            form.reset();
        })
        
    }
})