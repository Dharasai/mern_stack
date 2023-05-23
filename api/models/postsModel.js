const mongoose = require('mongoose');

const postsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add the name"],
        },
        email: {
            type: String,
            required: [true, "Please add the email address"],
        },
        password: {
            type: String,
            required: [true, "Please add the password"],
        },
        mobileno: {
            type: String,
            required: [true, "Please add the mobile or phone number"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Posts", postsSchema)