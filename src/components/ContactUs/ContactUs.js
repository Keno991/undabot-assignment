import axios from 'axios';

const adjustTextarea = (event) => {
    event.target.style.height = "20px";
    event.target.style.height = event.target.scrollHeight + "px";
};

// must use old syntax because of "this" scope issue in fat arrow function
async function sendContactData() {
    let response = null;
    this.resetMessages();
    try {
        response = await axios.post('/api/contact', this.form);
    } catch (error) {
        console.log(error)
        error.response.data.errors.forEach((error) => {
            this.errorResponseMessages.push(error.message);
        })
    }
    this.responseMessages = response.data.message
}

function resetMessages() {
    this.errorResponseMessages = [];
    this.responseMessages = '';
}

export default {
    name: "HomePage",
    data() {
        return {
            form: {
                email: '',
                message: ''
            },
            errorResponseMessages: [],
            responseMessages: ''
        }
    },
    methods: {
        adjustTextarea,
        sendContactData,
        resetMessages
    },
};