var app = new Vue({
    el: '#app',
    data: {
        first_name: "Amir",
        last_name: "Ayoub"
    },
    computed: {
        getRandomComputed() {
            return Math.random();
        },
        fullName() {
            return `${ this.first_name } ${ this.last_name }`;
        },
        reversedFullName() {
            first = this.first_name.split('').reverse().join('');
            last = this.last_name.split('').reverse().join('');
            return `${ last } ${ first }`;
        },
    },
    methods: {
        getRandomNumber() {
            return Math.random();
        }
    }
})