Vue.component("hijo",{
    template: //html
    `<div>
    <a>{{nashe}}</a>
    </div>`,
    data(){
        return{
            a: "a",
        }
    },
    props: ["nashe",],
})