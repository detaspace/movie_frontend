import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const VideoPlayer = () => {
  const { id } = useParams();

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        bgcolor: 'black',
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
          width: '100%',
          height: 'auto',
          maxHeight: '100%',
          objectFit: 'contain',
          borderRadius: { xs: '0px', sm: '10px' },
          margin: { xs: 0, sm: 2 },
        }}
      >
        <source src={`https://movie-backend-wv9x.onrender.com/api/movies/stream/${id}`} type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
    </Box>
  );
};

export default VideoPlayer;