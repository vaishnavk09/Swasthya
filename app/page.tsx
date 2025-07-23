"use client";
import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "linear-gradient(135deg, #a8e063 0%, #56ab2f 100%)",
        borderRadius: 4,
        boxShadow: 3,
        mt: 4,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" fontWeight={800} color="#fff" gutterBottom align="center">
          Welcome to Swaasthya
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h5" color="#e8f5e9" align="center" sx={{ mb: 4 }}>
          Your Smart Health Companion – Symptom Checker, AI Health Bot, and more.
        </Typography>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.97 }}
      >
        <Stack direction="row" spacing={3} justifyContent="center">
          <Button
            component={Link}
            href="/portal"
            size="large"
            variant="contained"
            color="secondary"
            sx={{ fontWeight: 700, px: 4, py: 1.5, fontSize: 20, borderRadius: 8, boxShadow: 2 }}
          >
            Enter Portal
          </Button>
        </Stack>
      </motion.div>
    </Box>
  );
}
