//single-coment component is a reusable code type
Vue.component("single-comment", {
    props: {
        comment: {
            type: Object,
            required: true,
        }
    },
    template: `
        <div class="mb-2">
            <div class="card">
                <div class="card-header">
                    <p>Published by: {{ comment.username }}</p>   
                </div>
                <div class="card-body">
                    <p>{{ comment.content }}</p>
                </div>
            </div>
        </div>
    `
})

//Second component for comment list
Vue.component("comment-list", {
    props: {
        comments: {
            type: Array,
            required: true,
        }
    },
    data: function() {
        return {
            new_comment: null,
            comment_author: null,
            errors: null,
        }
    },
    methods: {
        submitComment() {
            if (this.new_comment && this.comment_author) {
                this.$emit('submit-comment', {
                    username: this.comment_author,
                    content: this.new_comment
                });
                this.new_comment = null;
                this.comment_author = null;

                if (this.errors) {
                    this.errors = null;
                }
            } else {
                this.errors = "Please fill out both fields!"
            }
        }
    },
    template: `
        <div class="mt-2">
            <div class="container">
                
                <single-comment
                    v-for="(comment, index) in comments"
                    :comment="comment"
                    :key="index">
                </single-comment>
                
                <hr>
                
                <h3>{{ errors }}</h3>

                <form @submit.prevent="submitComment" class="mb-3">
                    <div class="form-group">
                        <label for="commentAuthor">Username</label>
                        <input class="form-control"
                            id="commentAuthor"
                            type="text"
                            v-model="comment_author">
                    </div>
                    
                    <div class="form-group">
                        <label for="commentText">Add a Comment</label>
                        <textarea class="form-control"
                                id="commentText"
                                rows="3"
                                cols="40"
                                v-model="new_comment">
                        </textarea>
                    </div>

                    <button class="btn btn-sm btn-primary" 
                            type="submit">
                            Publish
                    </button>
                </form>
            </div>
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
    },
    methods: {
        addNewComment(new_comment) {
            this.comments.push(new_comment);
        }
    }
})