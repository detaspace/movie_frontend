import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, IconButton, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const VideoPlayer = () => {
  const { id } = useParams();
  const [isBlurred, setIsBlurred] = useState(true); // State to toggle blur and details visibility

  const handleViewApp = () => {
    setIsBlurred(false); // Remove blur and hide details
    const videoElement = document.getElementById('video-player');
    videoElement.play(); // Play video
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        bgcolor: 'white',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Back Button */}
      <IconButton
        sx={{
          position: 'absolute',
          top: { xs: 10, sm: 20 },
          left: { xs: 10, sm: 20 },
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          zIndex: 2,
          padding: { xs: '6px', sm: '8px' },
        }}
        onClick={() => window.history.back()}
      >
        <ArrowBackIcon fontSize="inherit" />
      </IconButton>

      {/* Video Container */}
      <Box
        sx={{
          position: 'relative',
          width: '90%',
          maxWidth: '600px',
          height: 'auto',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Video Element */}
        <Box
          component="video"
          id="video-player"
          controls
          autoPlay={false}
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            filter: isBlurred ? 'blur(10px)' : 'none', // Blur effect based on state
            transition: 'filter 0.3s ease', // Smooth transition for blur removal
          }}
        >
          <source src={`https://movie-backend-wv9x.onrender.com/api/movies/stream/${id}`} type="video/mp4" />
          Your browser does not support the video tag.
        </Box>

        {/* Overlay Details and Button (Visible when blurred) */}
        {isBlurred && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
              color: 'white',
              zIndex: 3,
            }}
          >
            {/* Video Details */}
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '16px', sm: '20px' },
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 2,
                px: 2,
              }}
            >
              Bhool Bhulaiyaa 3 (2024) - Hindi Movie - 480p
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '12px', sm: '14px' },
                color: 'rgba(255, 255, 255, 0.7)',
                textAlign: 'center',
                mb: 3,
              }}
            >
              Duration: 02:32:26 | Size: 570.5MB
            </Typography>

            {/* View in App Button */}
            <Button
              variant="contained"
              onClick={handleViewApp}
              sx={{
                backgroundColor: '#1a73e8',
                color: 'white',
                textTransform: 'none',
                borderRadius: '20px',
                px: 3,
                py: 1.5,
                fontSize: { xs: '14px', sm: '16px' },
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  backgroundColor: '#166ad6',
                },
              }}
            >
              View in App
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default VideoPlayer;