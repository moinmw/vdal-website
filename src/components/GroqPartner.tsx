"use client";

import { Box, Container, Typography, Stack, Paper } from "@mui/material";
import { useState } from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SpeedIcon from "@mui/icons-material/Speed";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function GroqPartner() {
  const [isHovered, setIsHovered] = useState(false);

  const benefits = [
    {
      icon: SpeedIcon,
      title: "LPU Technology",
      description: "Groq's Language Processing Unit delivers high-performance AI inference optimized for real-time analytics workloads",
    },
    {
      icon: BusinessCenterIcon,
      title: "Local GroqCloud Region",
      description: "Dedicated AI inference region in Dammam, Saudi Arabia enabling low-latency processing for regional enterprises",
    },
    {
      icon: VerifiedIcon,
      title: "Data Sovereignty Ready",
      description: "Strategic partnerships with Aramco Digital, OmniOps, Zain KSA, and HUMAIN align with Saudi AI strategy goals",
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0F172A 0%, #05091A 100%)",
        py: { xs: 10, md: 14 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(58, 134, 243, 0.08) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(58, 134, 243, 0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 10s ease-in-out infinite reverse",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-25px)" },
          },
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={10}>
          {/* Section Header */}
          <Box
            sx={{
              animation: "slideInDown 0.8s ease-out",
              "@keyframes slideInDown": {
                "0%": { opacity: 0, transform: "translateY(-30px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            <Typography
              variant="h3"
              fontWeight={800}
              sx={{
                fontSize: { xs: "1.8rem", md: "2.3rem" },
                background: "linear-gradient(90deg, #FFFFFF 0%, #CBD5E1 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-8px",
                  left: 0,
                  width: "280px",
                  height: "4px",
                  background: "linear-gradient(90deg, #3A86F3 0%, transparent 100%)",
                  borderRadius: "2px",
                  animation: "slideIn 0.8s ease-out 0.3s both",
                  "@keyframes slideIn": {
                    "0%": { width: 0 },
                    "100%": { width: "280px" },
                  },
                },
              }}
            >
              Groq – AI Inference Partner in Saudi Arabia
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                color: "#CBD5E1",
                fontWeight: 600,
                mt: 1,
                mb: 2,
              }}
            >
              Advanced AI Inference with Local Infrastructure
            </Typography>
          </Box>

          {/* Description Cards */}
          <Stack spacing={4}>
            {/* Main Description */}
            <Paper
              elevation={0}
              sx={{
                background: "linear-gradient(135deg, rgba(58, 134, 243, 0.1) 0%, rgba(58, 134, 243, 0.05) 100%)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(58, 134, 243, 0.15)",
                borderRadius: "16px",
                p: { xs: 4, md: 5 },
                animation: "fadeInUp 0.8s ease-out 0.2s both",
                "@keyframes fadeInUp": {
                  "0%": { opacity: 0, transform: "translateY(30px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <Stack spacing={3}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: "4px",
                      height: "24px",
                      background: "linear-gradient(180deg, #3A86F3 0%, transparent 100%)",
                      borderRadius: "2px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    fontWeight={800}
                    sx={{
                      color: "#FFFFFF",
                      fontSize: { xs: "1.1rem", md: "1.2rem" },
                    }}
                  >
                    About Groq
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#CBD5E1",
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    lineHeight: 1.8,
                    pl: 2,
                  }}
                >
                  Groq provides high-performance AI inference technology with its Language Processing Unit (LPU), optimized for real-time AI analytics. A dedicated GroqCloud AI inference region operates in Dammam, Saudi Arabia, enabling low-latency AI workloads locally while maintaining data sovereignty.
                </Typography>

                <Typography
                  sx={{
                    color: "#94A3B8",
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    lineHeight: 1.8,
                    pl: 2,
                  }}
                >
                  Groq has strategic partnerships in KSA with Aramco Digital, OmniOps, Zain KSA, and HUMAIN to accelerate enterprise AI adoption. This local infrastructure aligns with Saudi Arabia&apos;s national AI strategy goals and commitment to technological sovereignty.
                </Typography>
              </Stack>
            </Paper>

            {/* Benefits Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                gap: 3,
              }}
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <Paper
                    key={index}
                    elevation={0}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    sx={{
                      background: "rgba(58, 134, 243, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(58, 134, 243, 0.1)",
                      borderRadius: "16px",
                      p: 4,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      animation: `fadeInUp 0.6s ease-out ${0.3 + index * 0.1}s both`,
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
                        transition: "left 0.6s ease-in-out",
                      },
                      "&:hover": {
                        background: "linear-gradient(135deg, rgba(58, 134, 243, 0.15) 0%, rgba(58, 134, 243, 0.05) 100%)",
                        border: "2px solid rgba(58, 134, 243, 0.3)",
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 50px rgba(58, 134, 243, 0.15)",
                        "&::before": {
                          left: "100%",
                        },
                      },
                      "@keyframes fadeInUp": {
                        "0%": { opacity: 0, transform: "translateY(30px)" },
                        "100%": { opacity: 1, transform: "translateY(0)" },
                      },
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "12px",
                        background: "linear-gradient(135deg, rgba(58, 134, 243, 0.2) 0%, rgba(58, 134, 243, 0.08) 100%)",
                        border: "1px solid rgba(58, 134, 243, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease-out",
                      }}
                    >
                      <Icon
                        sx={{
                          fontSize: "1.8rem",
                          color: "#3A86F3",
                        }}
                      />
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{
                        fontSize: { xs: "1.05rem", md: "1.1rem" },
                        color: "#FFFFFF",
                        transition: "all 0.3s ease-out",
                      }}
                    >
                      {benefit.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        color: "#CBD5E1",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                        flex: 1,
                      }}
                    >
                      {benefit.description}
                    </Typography>

                    {/* Arrow indicator */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        marginTop: "auto",
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? "translateX(0)" : "translateX(-10px)",
                        transition: "all 0.3s ease-out",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#3A86F3",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Learn more
                      </Typography>
                      <ArrowForwardIcon
                        sx={{
                          fontSize: "1rem",
                          color: "#3A86F3",
                        }}
                      />
                    </Box>
                  </Paper>
                );
              })}
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
