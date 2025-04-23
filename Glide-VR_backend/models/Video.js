const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true }, // URL or path to the 360 video
});

module.exports = mongoose.model('Video', videoSchema);
