import { useState } from 'react';
import { Box, TextField, IconButton, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 720,
        width: '100%',
        mx: 'auto',
        px: 2,
        pb: 2,
        pt: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          bgcolor: '#2f2f2f',
          borderRadius: 3,
          border: '1px solid rgba(255,255,255,0.1)',
          px: 2,
          py: 1,
          transition: 'border-color 0.2s',
          '&:focus-within': {
            borderColor: 'rgba(255,255,255,0.25)',
          },
        }}
      >
        <TextField
          fullWidth
          multiline
          maxRows={6}
          placeholder="Message ChatGPT..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          variant="standard"
          InputProps={{
            disableUnderline: true,
            sx: {
              color: '#ececec',
              fontSize: 15,
              lineHeight: 1.5,
              '& textarea::placeholder': {
                color: '#8e8e8e',
                opacity: 1,
              },
            },
          }}
          sx={{ flex: 1 }}
        />
        <IconButton
          onClick={handleSend}
          disabled={!input.trim()}
          sx={{
            bgcolor: input.trim() ? '#ececec' : 'rgba(255,255,255,0.1)',
            color: input.trim() ? '#000' : '#8e8e8e',
            width: 32,
            height: 32,
            ml: 1,
            mb: 0.3,
            '&:hover': {
              bgcolor: input.trim() ? '#d1d5db' : 'rgba(255,255,255,0.1)',
            },
            '&.Mui-disabled': {
              bgcolor: 'rgba(255,255,255,0.1)',
              color: '#8e8e8e',
            },
          }}
        >
          <ArrowUpwardIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          textAlign: 'center',
          color: '#8e8e8e',
          fontSize: 11.5,
          mt: 1.5,
        }}
      >
        ChatGPT can make mistakes. Check important info.
      </Typography>
    </Box>
  );
}
