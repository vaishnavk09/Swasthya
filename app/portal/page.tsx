"use client";
import { Box, Typography, Card, CardContent, Grid, Fade } from "@mui/material";
import SymptomChecker from "../components/SymptomChecker";
import HealthBot from "../components/HealthBot";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import SmartToyIcon from "@mui/icons-material/SmartToy";

export default function PortalPage() {
  return (
    <Fade in timeout={700}>
      <Box>
        <Typography variant="h3" align="center" fontWeight={700} gutterBottom color="primary">
          Swaasthya Health Portal
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card elevation={6} sx={{ borderRadius: 4 }}>
              <CardContent>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <MedicalServicesIcon color="primary" fontSize="large" />
                  <Typography variant="h5" fontWeight={600}>Symptom Checker</Typography>
                </Box>
                <SymptomChecker />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={6} sx={{ borderRadius: 4 }}>
              <CardContent>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <SmartToyIcon color="secondary" fontSize="large" />
                  <Typography variant="h5" fontWeight={600}>AI Health Bot</Typography>
                </Box>
                <HealthBot />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
} 