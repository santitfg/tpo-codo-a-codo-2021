Vue.component('pie', {
    //cuando tengo que utilizar más de una línea necesariamente usos los backticks (ALT + 96) y uso un contenedor
    template: ` 
        <footer class="footer">
        <hr>
        <h3>{{msj}}</h3>
        <br>

        <p>{{informacion}}</p>
        <br>
        <br>
        </footer>
    `,
    data() {
        return {

            msj: '¡Gracias por mirar!',
            informacion: "stfg.prof@gmail.com"
        }
    }
})
Vue.component('encabezado', {
    template: `
<header class="header">
<nav class="nav">
   
    <div class="logo"><a href="index.html"><img src="img/ico2.jpg" alt="logo"></img></a></div>
    <ul class="nav">
        <li><a href="works.html">work</a></li>
        <li><a href="about.html">about</a></li>
        <li><a href="formulario.html">contacto</a></li>
    </ul>
 
</div>
</nav>
</header>`
        /* ,
            data() {
                return {
                    pathLogo: ''
                }
            }
 */
})



var app = new Vue({
        el: '#app'

    })
    //     // data: {
    //     //     msj: "Hola Mundo!"
    //     // }
    // })

//VUE no interpreta las cadenas literales como etiquetas html sino q las deja liretales dentro del html
//a su vez esto rompe pasarle parametros tengo q estudiar aun mas

//usar componentes a la manera de props?
/* habra forma de componentes reutilicen otros componentes?

Vue.component('llamar', {
    //cuando tengo que utilizar más de una línea necesariamente usos los backticks (ALT + 96) y uso un contenedor
    template: `
    <h1>funca?</h1>
        <pie></pie>

`
})

 */