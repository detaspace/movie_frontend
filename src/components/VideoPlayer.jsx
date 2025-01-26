import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, IconButton, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const VideoPlayer = () => {
  const { id } = useParams();
  const [isBlurred, setIsBlurred] = useState(true); // State to control blur effect
  const [platform, setPlatform] = useState(null); // Detect user's platform
  const [url, setUrl] = useState(null); // Video URL

  // Detect platform
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/android/.test(userAgent)) {
      setPlatform('android');
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform('ios');
    } else {
      setPlatform('desktop');
    }
  }, []);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://movie-backend-wv9x.onrender.com/api/movies/${id}`);
        const data = await response.json();
        setUrl(data.videoUrl);
        console.log(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };
    fetchMovie();
  }, [id]);

  const handleViewApp = () => {
    if (platform === 'android') {
      // Redirect to Play Store for Android
      window.location.href = 'https://play.google.com/store/apps/details?id=com.yourapp'; // Replace with your app's Play Store link
    } else {
      // Remove blur and play the video for other platforms
      setIsBlurred(false);
      const videoElement = document.getElementById('video-player');
      videoElement.play();
    }
  };

  const handleDownloadMovie = () => {
    // Download movie logic for Android
    window.location.href = url;
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        bgcolor: 'whilte',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
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
          width: '95%',
          maxWidth: '610px',
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
            filter: isBlurred ? 'blur(10px)' : 'none', // Apply blur effect
            transition: 'filter 0.3s ease', // Smooth transition for blur
          }}
        >
          <source src={`https://movie-backend-wv9x.onrender.com/api/movies/stream/${id}`} type="video/mp4" />
          Your browser does not support the video tag.
        </Box>

        {/* Overlay Details and Buttons (Visible when blurred) */}
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
                fontSize: { xs: '14px', sm: '12px', md: '20px' }, // Adjust font size for different screen sizes
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 2,
                px: 2,
                wordWrap: 'break-word', // Ensure long text wraps on small screens
              }}
            >
              Bhool Bhulaiyaa 3 (2024) - Hindi Movie - 480p
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '12px', sm: '14px' }, // Smaller font for mobile
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
                px: { xs: 2, sm: 3 }, // Adjust padding for smaller screens
                py: { xs: 1, sm: 1.5 },
                fontSize: { xs: '12px', sm: '14px', md: '16px' }, // Adjust font size for responsiveness
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  backgroundColor: '#166ad6',
                },
                // mb: { xs: 2, sm: 3 }, // Add margin below the button on smaller screens
              }}
            >
              {platform === 'android' ? 'View in App' : 'View in App'}
            </Button>

            {/* Download Button (Only for Android) */}
            {platform === 'android' && (
              <Button
                variant="outlined"
                onClick={handleDownloadMovie}
                sx={{
                  mt: 1,
                  color: 'white',
                  borderColor: 'white',
                  textTransform: 'none',
                  borderRadius: '20px',
                  px: { xs: 2, sm: 3 }, // Adjust padding for smaller screens
                  py: { xs: 0.5, sm: 1.5 },
                  fontSize: { xs: '12px', sm: '14px', md: '16px' }, // Adjust font size for responsiveness
                  '&:hover': {
                    borderColor: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              >
                Download Movie
              </Button>
            )}
          </Box>
        )}

      </Box>
    </Box>
  );
};

export default VideoPlayer;