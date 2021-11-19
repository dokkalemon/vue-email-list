/* 
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

BONUS
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

// API: https://flynn.boolean.careers/exercises/api/random/mail

/* VUE */
const app = new Vue({
    el: '#app',
    data: {
        emails: [],
        email: '',
    },

    created() {
        this.genEmails()
    },

    methods: {
        //mettiamo 10 mail random nell'array
        genEmails() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(result => {
                    this.emails.push(result.data.response);
                })
            }
        }
    }
})