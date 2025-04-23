import React from 'react';
import ReactPlayer from 'react-player';  // Import ReactPlayer to play 360 videos

const VideoModal = ({ videoUrl, onClose }) => {
  return (
    <div className="video-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times; {/* Close button */}
        </button>
        <h2>360 Video</h2>
        <ReactPlayer
          url={videoUrl} // Set the video URL
          playing={true} // Autoplay the video
          controls={true} // Show video controls
          width="100%" // Full width
          height="100%" // Full height
          config={{
            file: {
              attributes: {
                controlsList: 'nodownload', // Disable video download
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default VideoModal;
