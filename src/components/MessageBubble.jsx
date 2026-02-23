import { Box, Avatar, Typography } from '@mui/material';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import PersonIcon from '@mui/icons-material/Person';

export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        maxWidth: 720,
        width: '100%',
        mx: 'auto',
        py: 2,
        px: 2,
      }}
    >
      <Avatar
        sx={{
          width: 30,
          height: 30,
          bgcolor: isUser ? '#5c5c5c' : '#19c37d',
          mt: 0.5,
          flexShrink: 0,
        }}
      >
        {isUser ? (
          <PersonIcon sx={{ fontSize: 18 }} />
        ) : (
          <SmartToyOutlinedIcon sx={{ fontSize: 18 }} />
        )}
      </Avatar>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          variant="subtitle2"
          sx={{
            color: '#ececec',
            fontWeight: 600,
            fontSize: 14,
            mb: 0.5,
          }}
        >
          {isUser ? 'You' : 'ChatGPT'}
        </Typography>
        <Typography
          sx={{
            color: '#d1d5db',
            fontSize: 15,
            lineHeight: 1.7,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        >
          {message.content}
        </Typography>
      </Box>
    </Box>
  );
}
