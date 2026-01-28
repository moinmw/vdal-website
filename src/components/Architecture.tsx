"use client";

import { Box, Container, Typography, Stack, Paper } from "@mui/material";
import Image from "next/image"; // Import Next.js Image component

export default function Architecture() {
  return (
    <Box
      id="architecture"
      sx={{
        background: "linear-gradient(135deg, #05091A 0%, #0F172A 100%)",
        py: { xs: 12, md: 16 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(58, 134, 243, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite",
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center">
          {/* Section Title */}
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              fontWeight={800}
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                background: "linear-gradient(90deg, #FFFFFF 0%, #CBD5E1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 0,
                position: "relative",
                display: "inline-block",
              }}
            >
              Architecture — Where VDAL Fits
            </Typography>
          </Box>

          {/* Description Text */}
          <Typography
            variant="body1"
            sx={{
              color: "#E2E8F0",
              maxWidth: "850px",
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              opacity: 0.9,
              textAlign: "center",
              mx: "auto", // <-- centers the block
            }}
          >
            VDAL acts as a unified virtual access layer that sits between
            enterprise data sources and all data consumers. It enables governed,
            real-time analytical access without disrupting existing source
            systems or creating duplicate data copies.
          </Typography>

          {/* Actual Image Container */}
          <Paper
            elevation={0}
            sx={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(58, 134, 243, 0.2)",
              borderRadius: "24px",
              p: { xs: 2, md: 4 },
              position: "relative",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.4s ease",
              "&:hover": {
                borderColor: "rgba(58, 134, 243, 0.5)",
                boxShadow: "0 20px 80px rgba(58, 134, 243, 0.15)",
                transform: "translateY(-5px)",
              },
            }}
          >
            <Box sx={{ width: "100%", height: "auto", position: "relative" }}>
              <Image
                src="/images/Architecture2.png" // CHANGE THIS TO YOUR IMAGE PATH
                alt="VDAL Architecture Diagram"
                width={1200} // Set to your image's base width
                height={700} // Set to your image's base height
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  display: "block",
                }}
                priority // Ensures the image loads quickly
              />
            </Box>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
