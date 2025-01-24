import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, IconButton, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const VideoPlayer = () => {
  const { id } = useParams();

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
          zIndex: 1,
          padding: { xs: '6px', sm: '8px' },
        }}
        onClick={() => window.history.back()}
      >
        <ArrowBackIcon fontSize="inherit" />
      </IconButton>

      {/* Video Element */}
      <Box
        component="video"
        controls
        autoPlay
        sx={{
          width: '90%', // Adjust for responsiveness
          maxWidth: '600px',
          height: 'auto',
          borderRadius: '10px',
          objectFit: 'contain',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        <source src={`https://movie-backend-wv9x.onrender.com/api/movies/stream/${id}`} type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      {/* App View Button */}
      <Button
        variant="contained"
        sx={{
          mt: 2,
          px: 3,
          py: 1,
          backgroundColor: '#1a73e8',
          color: 'white',
          textTransform: 'none',
          borderRadius: '20px',
          fontSize: { xs: '14px', sm: '16px' },
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            backgroundColor: '#166ad6',
          },
        }}
        onClick={() => alert('View in App functionality is not implemented yet!')}
      >
        View in App
      </Button>

      {/* Video Details (Optional) */}
      <Typography
        variant="caption"
        sx={{
          color: 'black',
          mt: 1,
          textAlign: 'center',
          px: 2,
          fontSize: { xs: '12px', sm: '14px' },
          wordBreak: 'break-word',
        }}
      >
        Bhool Bhulaiyaa 3 (2024) - Hindi Movie - 480p
      </Typography>
    </Box>
  );
};

export default VideoPlayer;