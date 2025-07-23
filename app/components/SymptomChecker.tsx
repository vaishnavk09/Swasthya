"use client";
import { Box, Typography, Button, Autocomplete, TextField, CircularProgress, List, ListItem } from "@mui/material";
import { useState } from "react";

const SYMPTOMS = [
  "fever",
  "cough",
  "headache",
  "sore throat",
  "fatigue"
];

export default function SymptomChecker() {
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [conditions, setConditions] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setConditions([]);
    try {
      const res = await fetch("/api/symptom-checker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms: selected })
      });
      const data = await res.json();
      if (res.ok) setConditions(data.conditions);
      else setError(data.error || "Unknown error");
    } catch (err) {
      setError("Failed to check symptoms");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Symptom Checker
      </Typography>
      <form onSubmit={handleSubmit}>
        <Autocomplete
          multiple
          options={SYMPTOMS}
          value={selected}
          onChange={(_, v) => setSelected(v)}
          renderInput={params => <TextField {...params} label="Select symptoms" margin="normal" />}
        />
        <Button type="submit" variant="contained" color="primary" disabled={loading || selected.length === 0}>
          {loading ? <CircularProgress size={24} /> : "Check"}
        </Button>
      </form>
      {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
      {conditions.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1">Possible conditions:</Typography>
          <List>
            {conditions.map(cond => <ListItem key={cond}>{cond}</ListItem>)}
          </List>
        </Box>
      )}
    </Box>
  );
} 