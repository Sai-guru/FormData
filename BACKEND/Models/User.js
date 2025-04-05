const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    instaId: { type: String, required: true }  // ✅ Make sure this line exists and is required
});

module.exports = mongoose.model('users', usersSchema);
