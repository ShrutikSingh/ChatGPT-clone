import { useRef, useEffect } from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CenterFocusWeakOutlinedIcon from '@mui/icons-material/CenterFocusWeakOutlined';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';

export default function ChatArea({ messages, onSend }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const hasMessages = messages.length > 0;

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        bgcolor: '#212121',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          py: 1,
          minHeight: 48,
        }}
      >
        <Typography
          sx={{
            color: '#ececec',
            fontWeight: 600,
            fontSize: 15,
          }}
        >
          ChatGPT{' '}
          <Typography
            component="span"
            sx={{ color: '#8e8e8e', fontSize: 13, fontWeight: 400 }}
          >
            4o
          </Typography>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Tooltip title="Temporary chat">
            <IconButton
              sx={{
                color: '#b4b4b4',
                '&:hover': { color: '#ececec', bgcolor: 'rgba(255,255,255,0.06)' },
              }}
            >
              <PersonAddAltOutlinedIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Focus">
            <IconButton
              sx={{
                color: '#b4b4b4',
                '&:hover': { color: '#ececec', bgcolor: 'rgba(255,255,255,0.06)' },
              }}
            >
              <CenterFocusWeakOutlinedIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          '&::-webkit-scrollbar': { width: 6 },
          '&::-webkit-scrollbar-thumb': {
            bgcolor: 'rgba(255,255,255,0.15)',
            borderRadius: 3,
          },
        }}
      >
        {hasMessages ? (
          <Box sx={{ flex: 1, py: 2 }}>
            {messages.map((msg, idx) => (
              <MessageBubble key={idx} message={msg} />
            ))}
            <div ref={messagesEndRef} />
          </Box>
        ) : (
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AutoAwesomeIcon sx={{ color: '#ececec', fontSize: 28 }} />
            </Box>
            <Typography
              sx={{
                color: '#ececec',
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              How can I help you today?
            </Typography>
          </Box>
        )}
      </Box>

      {/* Input */}
      <ChatInput onSend={onSend} />
    </Box>
  );
}
