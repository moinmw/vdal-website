"use client";

import { Box, Container, Typography, Button, Stack, Fade } from "@mui/material";


export default function Hero() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        scrollMarginTop: "100px",
    minHeight: "100vh",
        background: "radial-gradient(circle at 50% 50%, #101827 0%, #05091A 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        textAlign: "center", // Centers the text content
        px: 2,
      }}
    >
      {/* Decorative Background Element */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: "rgba(58, 134, 243, 0.15)",
          filter: "blur(120px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <Container maxWidth="md" sx={{ zIndex: 1 }}>
        <Fade in timeout={1200}>
          <Stack spacing={4} alignItems="center">
            

            {/* Title - Optimized Font Sizes */}
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                lineHeight: 1.1,
                fontSize: {
                  xs: "2.75rem",
                  sm: "3.5rem",
                  md: "4.5rem",
                },
                letterSpacing: "-0.03em",
                background: "linear-gradient(180deg, #FFFFFF 30%, #94A3B8 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Unified, Governed,
              <br />
              AI-Ready Data Access
            </Typography>

            {/* Subtitle - Better width for readability */}
            <Typography
              sx={{
                color: "#E2E8F0",
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.6,
                fontSize: { xs: "1.1rem", md: "1.4rem" },
                fontWeight: 400,
                opacity: 0.9,
              }}
            >
              VDAL is the strategic backbone for secure, real-time, and
              compliant enterprise data access without disrupting your existing
              data estates.
            </Typography>

            {/* Description - Muted & Refined */}
            <Typography
              sx={{
                color: "#94A3B8",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.7,
                fontSize: { xs: "0.95rem", md: "1.1rem" },
                fontWeight: 300,
              }}
            >
              One intelligent access layer that unifies analytics,
              automation, semantics, and governance on the latest trusted data.
            </Typography>

            {/* CTA Buttons - Centered Stack */}
            <Stack 
                direction={{ xs: "column", sm: "row" }} 
                spacing={3} 
                pt={4}
                sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              <Button
                variant="contained"
                href="#contact"
                sx={{
                  backgroundColor: "#3A86F3",
                  textTransform: "none",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  px: 5,
                  py: 1.8,
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(58, 134, 243, 0.4)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#2f6fe0",
                    transform: "translateY(-3px)",
                    boxShadow: "0 15px 35px rgba(58, 134, 243, 0.5)",
                  },
                }}
              >
                Request Demo
              </Button>

              <Button
                variant="outlined"
                href="#solution"
                sx={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#FFFFFF",
                  textTransform: "none",
                  fontSize: "1.1rem",
                  px: 5,
                  py: 1.8,
                  borderRadius: "12px",
                  backdropFilter: "blur(12px)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#3A86F3",
                    backgroundColor: "rgba(58,134,243,0.08)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
        </Fade>
      </Container>
    </Box>
  );
}