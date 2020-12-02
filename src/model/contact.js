
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactSchema = new Schema({

    emailId: {

        type: Schema.Types.String,

        required: true

    },

});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = {Contact};