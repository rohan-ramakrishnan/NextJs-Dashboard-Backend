const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
    token: {
        type: String,
        required: false,
    },
    coursesProgress: {
        type: Object,
        required: false,
    }
});

module.exports = mongoose.model('user', UserSchema);