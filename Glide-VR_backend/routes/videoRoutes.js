const express = require('express');
const Video = require('../models/Video');
const router = express.Router();

// Route to fetch the video details
router.get('/:name', async (req, res) => {
    try {
      const name = req.params.name;
      console.log('Searching for:', name);
  
      const video = await Video.findOne({ name });
  
      if (!video) {
        console.log('Not found in DB');
        return res.status(404).json({ message: 'Video not found' });
      }
  
      console.log('Found video:', video);
      res.json(video);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

module.exports = router;
