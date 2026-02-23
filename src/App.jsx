import { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#212121',
      paper: '#171717',
    },
  },
  typography: {
    fontFamily:
      '"Söhne", "Segoe UI", "Helvetica Neue", Arial, sans-serif',
  },
});

const simulatedResponses = [
  "That's a great question! In general, the best approach depends on your specific use case. Could you tell me more about what you're trying to accomplish?",
  "Here's a quick overview:\n\n1. First, set up your project structure\n2. Then, configure the necessary dependencies\n3. Finally, implement the core logic\n\nLet me know if you'd like me to elaborate on any of these steps!",
  "I'd be happy to help with that! Here's a concise explanation:\n\nThe concept you're referring to is a common pattern in software development. It helps separate concerns and makes your code more maintainable and testable.",
  "Great choice! That technology has gained a lot of popularity recently. Here are some key benefits:\n\n• Improved performance\n• Better developer experience\n• Strong community support\n• Excellent documentation",
  "Based on my understanding, here's what I'd recommend:\n\nStart with the fundamentals and build up from there. Practice is key — try building small projects to reinforce your learning. Don't hesitate to refer to the official documentation when you're stuck.",
];

export default function App() {
  const [messages, setMessages] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSend = (text) => {
    const userMessage = { role: 'user', content: text };
    const responseIndex = messages.filter((m) => m.role === 'user').length;
    const botMessage = {
      role: 'assistant',
      content: simulatedResponses[responseIndex % simulatedResponses.length],
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
  };

  const handleNewChat = () => {
    setMessages([]);
    setActiveChatId(null);
  };

  const handleChatSelect = (id) => {
    setActiveChatId(id);
    setMessages([
      { role: 'user', content: 'Tell me about this topic' },
      {
        role: 'assistant',
        content:
          'Sure! This is a simulated previous conversation. In a real app, messages would be loaded from a database or API based on the selected chat ID.',
      },
    ]);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((prev) => !prev)}
          activeChatId={activeChatId}
          onChatSelect={handleChatSelect}
          onNewChat={handleNewChat}
        />
        <ChatArea messages={messages} onSend={handleSend} />
      </Box>
    </ThemeProvider>
  );
}
