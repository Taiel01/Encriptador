const app = new Vue({
    el: "#app",
    data:{
        titulo: "Texto normal",
        titulo2: "Texto encriptado",
        array:[],
        fondo: `bg-success`,
        fondo2: `bg-info`,
        texto: "",
    },
    computed:{
        encriptado(){
         return this.texto.toLowerCase().split("").reverse().join("a e i o u");
        },
        desencriptado(){
            return this.texto.toLowerCase().split("a e i o u").reverse().join("");
        } 
    }
});