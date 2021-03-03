//This is the new Vue 3.0 format
// const app = Vue.createApp({
//     data() {

//         return {

//             message: "Hello World from Vue"
//         }
//     }
// })
var app = new Vue({
    el: '#app',
    data: {
        message: "Hello World",
        value: 30,
        imgSrc: "solar.jpg", // does not work
        link: "https://vuejs.org"
    }
})