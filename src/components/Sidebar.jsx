import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Tooltip,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const EXPANDED_WIDTH = 260;
const COLLAPSED_WIDTH = 56;

const navItems = [
  { icon: <EditOutlinedIcon sx={{ fontSize: 20 }} />, label: 'New chat', action: 'newChat' },
  { icon: <SearchIcon sx={{ fontSize: 20 }} />, label: 'Search chats' },
  { icon: <ImageOutlinedIcon sx={{ fontSize: 20 }} />, label: 'Images' },
  { icon: <AppsOutlinedIcon sx={{ fontSize: 20 }} />, label: 'Apps' },
  { icon: <CodeOutlinedIcon sx={{ fontSize: 20 }} />, label: 'Codex' },
  { icon: <FolderOutlinedIcon sx={{ fontSize: 20 }} />, label: 'Projects' },
];

const recentChats = [
  { id: 1, title: 'Why Do We Dream?' },
  { id: 2, title: 'What If Humans Could Fly?' },
  { id: 3, title: 'Best Way to Spend a Rainy Day' },
  { id: 4, title: 'Are We Alone in the Universe?' },
  { id: 5, title: 'How to Build Better Habits?' },
  { id: 6, title: 'Why Is the Sky Blue?' },
  { id: 7, title: 'What Makes a Good Friend?' },
  { id: 8, title: 'Is Time Travel Possible?' },
  { id: 9, title: 'How to Stay Motivated Daily?' },
  { id: 10, title: 'Mountains or Beaches?' },
  { id: 11, title: 'What Defines Happiness?' },
  { id: 12, title: 'Why Do We Procrastinate?' },
  { id: 13, title: 'Is Luck Real?' },
  { id: 14, title: 'Cats or Dogs?' },
  { id: 15, title: 'If You Won the Lottery...' },
];

export default function Sidebar({ collapsed, onToggle, activeChatId, onChatSelect, onNewChat }) {
  return (
    <Box
      sx={{
        width: collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
        height: '100vh',
        bgcolor: '#171717',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.2s ease',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'space-between',
          px: collapsed ? 0 : 1.5,
          pt: 1.5,
          pb: 0.5,
          minHeight: 48,
        }}
      >
        {!collapsed && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pl: 0.5 }}>
            <SmartToyOutlinedIcon sx={{ color: '#ececec', fontSize: 22 }} />
          </Box>
        )}
        <Tooltip title={collapsed ? 'Open sidebar' : 'Close sidebar'} placement="right">
          <IconButton
            onClick={onToggle}
            sx={{
              color: '#b4b4b4',
              '&:hover': { color: '#ececec', bgcolor: 'rgba(255,255,255,0.06)' },
            }}
          >
            <ViewSidebarOutlinedIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Nav Items */}
      <Box sx={{ px: collapsed ? 0.5 : 1, mt: 0.5 }}>
        {navItems.map((item) => (
          <Tooltip
            key={item.label}
            title={collapsed ? item.label : ''}
            placement="right"
            disableHoverListener={!collapsed}
          >
            <ListItemButton
              onClick={item.action === 'newChat' ? onNewChat : undefined}
              sx={{
                borderRadius: 2,
                py: 0.8,
                px: collapsed ? 0 : 1.5,
                mb: 0.2,
                minHeight: 40,
                justifyContent: collapsed ? 'center' : 'flex-start',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: collapsed ? 0 : 32,
                  color: '#b4b4b4',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              {!collapsed && (
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    color: '#ececec',
                    noWrap: true,
                  }}
                />
              )}
            </ListItemButton>
          </Tooltip>
        ))}
      </Box>

      {!collapsed && (
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            px: 1,
            mt: 1.5,
            '&::-webkit-scrollbar': { width: 4 },
            '&::-webkit-scrollbar-thumb': {
              bgcolor: 'rgba(255,255,255,0.12)',
              borderRadius: 2,
            },
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: '#8e8e8e',
              fontWeight: 600,
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: 0.5,
              pl: 1,
              mb: 0.5,
              display: 'block',
            }}
          >
            Your chats
          </Typography>
          <List disablePadding>
            {recentChats.map((chat) => (
              <ListItemButton
                key={chat.id}
                selected={activeChatId === chat.id}
                onClick={() => onChatSelect(chat.id)}
                sx={{
                  borderRadius: 2,
                  py: 0.6,
                  px: 1.5,
                  mb: 0.2,
                  '&.Mui-selected': {
                    bgcolor: 'rgba(255,255,255,0.08)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.12)' },
                  },
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' },
                  '&:hover .delete-icon': { opacity: 1 },
                }}
              >
                <ListItemText
                  primary={chat.title}
                  primaryTypographyProps={{
                    fontSize: 13.5,
                    color: '#ececec',
                    noWrap: true,
                  }}
                />
                <IconButton
                  className="delete-icon"
                  size="small"
                  sx={{ opacity: 0, transition: 'opacity 0.2s', color: '#8e8e8e', p: 0.3 }}
                >
                  <DeleteOutlineIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </ListItemButton>
            ))}
          </List>
        </Box>
      )}

      {/* Spacer when collapsed */}
      {collapsed && <Box sx={{ flex: 1 }} />}

      {/* Bottom: User avatar */}
      <Box
        sx={{
          px: collapsed ? 0 : 1,
          pb: 1.5,
          pt: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'flex-start',
        }}
      >
        <Tooltip title="User" placement="right">
          <IconButton
            sx={{
              color: '#b4b4b4',
              '&:hover': { color: '#ececec', bgcolor: 'rgba(255,255,255,0.06)' },
            }}
          >
            <AccountCircleIcon sx={{ fontSize: 24 }} />
          </IconButton>
        </Tooltip>
        {!collapsed && (
          <Box sx={{ ml: 0.5 }}>
            <Typography sx={{ color: '#ececec', fontSize: 13.5, fontWeight: 500, lineHeight: 1.2 }}>
              Marble
            </Typography>
            <Typography sx={{ color: '#8e8e8e', fontSize: 11.5, lineHeight: 1.2 }}>
              Free
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
