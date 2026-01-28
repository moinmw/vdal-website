"use client";

import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import HubIcon from '@mui/icons-material/Hub';
import StorageIcon from '@mui/icons-material/Storage';
import InsightsIcon from '@mui/icons-material/Insights';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

export default function EnterprisePainBento() {
  const painPoints = [
    {
      title: "Fragmentation",
      desc: "Data is fragmented across disconnected systems and teams, creating silos.",
      icon: <HubIcon fontSize="large" />,
      isBlue: true,
    },
    {
      title: "Redundancy",
      desc: "Different units rebuild integrations for the same datasets repeatedly.",
      icon: <StorageIcon fontSize="large" />,
      isBlue: false,
    },
    {
      title: "Cost & Compliance",
      desc: "Analytical copies proliferate, increasing infrastructure cost and compliance exposure.",
      icon: <InsightsIcon fontSize="large" />,
      isBlue: true,
    },
    {
      title: "Security Gaps",
      desc: "Sensitive data protection varies across systems and consumption channels.",
      icon: <VerifiedUserIcon fontSize="large" />,
      isBlue: false,
    },
    {
      title: "Traceability",
      desc: "Lack of centralized traceability into data access behavior and processing.",
      icon: <TrackChangesIcon fontSize="large" />,
      isBlue: true,
    },
    {
      title: "AI Stagnation",
      desc: "AI initiatives stall due to lack of trusted, governed, real-time data.",
      icon: <AutoGraphIcon fontSize="large" />,
      isBlue: false,
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#05091A", py: { xs: 8, md: 12 }, color: "#FFFFFF" }}>
      <Container maxWidth="lg">
        {/* Header aligned perfectly center */}
        <Stack spacing={2} alignItems="center" sx={{ mb: 10, textAlign: "center" }}>
          <Typography 
            variant="h3" 
            fontWeight={800} 
            
            sx={{ fontSize: { xs: "2.5rem", md: "3rem" }, letterSpacing: "-0.02em" }}
          >
            Enterprise Pain & Business Impact
          </Typography>
          <Typography sx={{ color: "#CBD5E1", maxWidth: "800px", fontSize: "1.1rem", opacity: 0.8 }}>
            Solving the core challenges that prevent modern enterprises from scaling their data intelligence.
          </Typography>
        </Stack>

        {/* Grid set to 3 columns (md={4}) with equal spacing */}
        <Grid container spacing={4} justifyContent="center">
          {painPoints.map((item, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index} sx={{ display: 'flex' }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 5 },
                  width: "100%",
                  borderRadius: "32px", // Slightly more rounded like the screenshot
                  backgroundColor: item.isBlue ? "#3A86F3" : "#0F172A",
                  color: item.isBlue ? "#FFFFFF" : "#CBD5E1",
                  border: item.isBlue ? "none" : "1px solid rgba(255,255,255,0.08)",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 3,
                  "&:hover": {
                    transform: "translateY(-12px)",
                    boxShadow: item.isBlue 
                      ? "0 20px 40px rgba(58, 134, 243, 0.3)" 
                      : "0 20px 40px rgba(0, 0, 0, 0.6)",
                  },
                }}
              >
                {/* Icon Container */}
                <Box 
                  sx={{ 
                    color: item.isBlue ? "#FFFFFF" : "#3A86F3",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {item.icon}
                </Box>
                
                <Box>
                  <Typography 
                    variant="h5" 
                    fontWeight={700} 
                    sx={{ 
                      mb: 2, 
                      color: "#FFFFFF", // Keep titles white on both for maximum punch
                      letterSpacing: "-0.01em" 
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      lineHeight: 1.6, 
                      opacity: item.isBlue ? 0.9 : 0.7,
                      fontSize: "1rem" 
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Business Consequence section */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            textAlign: "center",
            borderRadius: "24px",
            border: "1px solid rgba(58, 134, 243, 0.2)",
            background: "linear-gradient(90deg, rgba(58,134,243,0.05) 0%, rgba(5,9,26,1) 100%)",
          }}
        >
          <Typography variant="h6" sx={{ color: "#FFFFFF", fontWeight: 400 }}>
            <Box component="span" sx={{ color: "#3A86F3", fontWeight: 800, mr: 1 }}>
              Impact:
            </Box>
            Organizations currently spend more time managing infrastructure than generating value.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}