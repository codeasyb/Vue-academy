//this component is a reusable code type
Vue.component("comment", {
    props: {
        comment: {
            type: Object,
            required: true,
        }
    },
    template: `
        <div class="container">
            <div class="card-body">
                <p>{{ comment.username }}</p>
                <p>{{ comment.content }}</p>
            </div>
            <hr>
        </div>
    `
})

var app = new Vue({
    el: '#app',
    data: {
        comments: [{
                username: 'Amir',
                content: 'Im learning'
            },
            {
                username: 'Brenda',
                content: 'Accounting is great'
            },
            {
                username: 'Arjun',
                content: 'I love money'
            },
            {
                username: 'Ishal',
                content: 'Ahhh carry me!'
            },
            {
                username: 'Salsalbeel',
                content: 'I just want to play!'
            },
        ]
    }
})