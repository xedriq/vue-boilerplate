import Vue from 'vue'

Vue.component('my-component', {
    props: ['blog'],
    
    template: `
        <div>
            <h1>{{ blog.title }}</h1>
            <button @click="hidden = !hidden">{{!hidden ? 'Show':'Hide'}} Details</button>
            <p v-if="hidden">{{ blog.description }}</p>
        </div>
    `,

    data: function(){
        return {
            hidden: false
        }
    }
})

new Vue({
    el: '#app',

    data: {
       items : [
           {title: 'Title 1', description: 'Details of 1'},
           {title: 'Title 2', description: 'Details of 2'},
           {title: 'Title 3', description: 'Details of 4'},
           {title: 'Title 4', description: 'Details of 3'},
       ]
    },
})