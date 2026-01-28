"use client";

import { Box, Container, Typography, Stack, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SchoolIcon from "@mui/icons-material/School";

const phaseIcons = [RocketLaunchIcon, TrendingUpIcon, SchoolIcon];

// Unified Blue Theme
const themeColor = "#3A86F3";
const themeGradient = "135deg, rgba(58, 134, 243, 0.15) 0%, rgba(58, 134, 243, 0.05)";

export default function Roadmap() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const roadmap = [
    {
      phase: "Near-Term",
      items: [
        "Full Arabic language enablement",
        "Expanded enterprise and cloud connectors",
      ],
    },
    {
      phase: "Mid-Term",
      items: [
        "AI-driven governance intelligence",
        "Automated KPI lifecycle workflows",
      ],
    },
    {
      phase: "Long-Term",
      items: [
        "Managed cloud edition for regulated enterprises",
        "Government-ready deployments",
      ],
    },
  ];

  return (
    <Box
      id="roadmap"
      sx={{
        background: "linear-gradient(135deg, #0F172A 0%, #1A1F3A 100%)",
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
          background: `radial-gradient(circle, rgba(58, 134, 243, 0.08) 0%, transparent 70%)`,
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-25px)" },
          },
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-40%",
          left: "-5%",
          width: "450px",
          height: "450px",
          background: `radial-gradient(circle, rgba(58, 134, 243, 0.06) 0%, transparent 70%)`,
          borderRadius: "50%",
          animation: "float 10s ease-in-out infinite reverse",
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={8}>
          {/* Section Title */}
          <Box
  sx={{
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
  <Typography
    variant="h3"
    fontWeight={800}
    sx={{
      fontSize: { xs: "2rem", md: "2.5rem" },
      background: "linear-gradient(90deg, #FFFFFF 0%, #CBD5E1 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      mb: 2,
    }}
  >
    Strategic Roadmap Direction
  </Typography>

  <Typography
    sx={{
      color: "#94A3B8",
      fontSize: { xs: "1rem", md: "1.1rem" },
      mt: 2,
      maxWidth: "700px",
      lineHeight: 1.6,
    }}
  >
    Planned enhancements and roadmap milestones for future releases
  </Typography>
</Box>


          {/* Roadmap Timeline */}
          <Grid container spacing={3}>
            {roadmap.map((phase, index) => {
              const IconComponent = phaseIcons[index];
              const isHovered = hoveredIndex === index;

              return (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      background: isHovered
                        ? `linear-gradient(${themeGradient} 100%)`
                        : "rgba(58, 134, 243, 0.03)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid",
                      borderColor: isHovered
                        ? `${themeColor}66`
                        : "rgba(58, 134, 243, 0.1)",
                      borderRadius: "16px",
                      p: 4,
                      height: "100%",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      "&:hover": {
                        transform: "translateY(-12px)",
                        boxShadow: `0 30px 60px ${themeColor}20`,
                      },
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Phase Icon */}
                    <Box
                      sx={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "12px",
                        background: `linear-gradient(135deg, ${themeColor}20 0%, ${themeColor}08 100%)`,
                        border: `1px solid ${themeColor}33`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease-out",
                        transform: isHovered ? "scale(1.15) rotate(-10deg)" : "scale(1)",
                        filter: `drop-shadow(0 0 15px ${themeColor}40)`,
                      }}
                    >
                      <IconComponent
                        sx={{
                          fontSize: "1.8rem",
                          color: themeColor,
                        }}
                      />
                    </Box>

                    {/* Phase Title */}
                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight={800}
                        sx={{
                          fontSize: { xs: "1.2rem", md: "1.35rem" },
                          color: "#FFFFFF",
                          mb: 0.5,
                        }}
                      >
                        {phase.phase}
                      </Typography>

                      {/* Accent line */}
                      <Box
                        sx={{
                          height: "3px",
                          background: `linear-gradient(90deg, ${themeColor} 0%, transparent 100%)`,
                          transition: "width 0.4s ease",
                          width: isHovered ? "40px" : "0px",
                          borderRadius: "2px",
                        }}
                      />
                    </Box>

                    {/* Items List */}
                    <Stack spacing={1.5} sx={{ flex: 1 }}>
                      {phase.items.map((item, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: "flex",
                            gap: 1.5,
                            alignItems: "flex-start",
                            opacity: isHovered ? 1 : 0.8,
                          }}
                        >
                          <Box
                            sx={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background: themeColor,
                              mt: 1,
                              flexShrink: 0,
                              boxShadow: `0 0 10px ${themeColor}`,
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: { xs: "0.9rem", md: "0.95rem" },
                              lineHeight: 1.5,
                              color: isHovered ? "#E2E8F0" : "#CBD5E1",
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}