"use client";
import { Box, Typography, TextField, Button, Paper, CircularProgress } from "@mui/material";
import { useState } from "react";

export default function HealthBot() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/health-bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      if (res.ok) {
        setMessages(msgs => [...msgs, { sender: "bot", text: data.reply }]);
      } else {
        setError(data.error || "Unknown error");
      }
    } catch (err) {
      setError("Failed to get response");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        AI Health Bot
      </Typography>
      <Paper sx={{ minHeight: 120, maxHeight: 200, overflow: "auto", mb: 2, p: 2 }}>
        {messages.length === 0 ? (
          <Typography color="text.secondary">No messages yet.</Typography>
        ) : (
          messages.map((msg, idx) => (
            <Typography key={idx} align={msg.sender === "user" ? "right" : "left"}>
              <b>{msg.sender === "user" ? "You" : "Bot"}:</b> {msg.text}
            </Typography>
          ))
        )}
      </Paper>
      <form onSubmit={handleSend} style={{ display: "flex", gap: 8 }}>
        <TextField
          value={input}
          onChange={e => setInput(e.target.value)}
          label="Type your message"
          fullWidth
          disabled={loading}
        />
        <Button type="submit" variant="contained" disabled={loading || !input.trim()}>
          {loading ? <CircularProgress size={24} /> : "Send"}
        </Button>
      </form>
      {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
    </Box>
  );
} 