"use client";

import { Box, Container, Typography, Stack, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";

export default function UseCases() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const useCases = [
    {
      title: "Semantic Layer & KPI Standardization",
      need: "Teams define KPIs and business views independently, causing inconsistent numbers across dashboards and repeated implementation effort.",
      value:
        "VDAL leverages a dedicated semantic catalog to define standardized business views and KPI logic natively. Consumers access KPIs on the latest trusted data while inheriting unified governance, visibility controls, and centralized audit lineage — ensuring consistent insight delivery across BI, enterprise reporting, and AI workloads.",
      outcome:
        "Consistent KPIs, one semantic definition, inherited governance, zero duplication of semantic logic.",
    },
    {
      title: "Data Lake & Lakehouse Consumption Enablement",
      need: "Lake and lakehouse environments contain critical analytical data, but consuming them through repeated pipelines increases cost, delay, and governance risk.",
      value:
        "VDAL enables governed analytical access to lake and lakehouse environments through the same semantic layer, exposing trusted analytical views without moving or duplicating data. It supports real-time access while maintaining inherited governance and full traceability, without disrupting existing lake architecture.",
      outcome:
        "Analytics-ready lake consumption with centralized protection — without data movement or duplication.",
    },
    {
      title: "Hybrid & Multi-System Virtualization",
      need: "Enterprises operate across legacy systems, cloud platforms, NoSQL stores, streaming data, and data lakes — but struggle to unify analytics access without redesigning architectures or creating multiple data copies.",
      value:
        "VDAL provides a single governed access layer that virtualizes analytics across heterogeneous environments. Users and applications can combine data across systems in real time while inheriting consistent governance and audit traceability — enabling cross-domain analytics without disrupting source platforms.",
      outcome:
        "One access layer across hybrid estates — unified analytics without source disruption or uncontrolled data copies",
    },
    {
      title: "AI-Assisted Analytics (Ask vDAL)",
      need: "AI and analytics teams require rapid query generation, interpretation, and governed insight retrieval from enterprise and lake data, without exposing sensitive information or creating inconsistent logic.",
      value:
        "Ask vDAL converts natural language business questions into analytical queries, validates them within governed data boundaries, executes them on always-latest trusted data, and delivers AI-generated insights with controlled visibility. All outputs inherit organizational governance and full execution lineage, enabling secure AI analytics at scale without data leakage or source disruption.",
      outcome:
        "Fast AI analytics with governed query generation, inherited access policies, controlled data visibility, and complete execution lineage for every consumer.",
    },
    {
      title: "Digital Application Integration",
      need: "Digital teams repeatedly build and maintain integrations for the same enterprise data, increasing engineering cost and inconsistent access rules.",
      value:
        "Applications integrate once with VDAL, consume data virtually, and automatically inherit centralized governance and visibility controls. This reduces integration sprawl and ensures compliant, consistent data delivery for digital services.",
      outcome:
        "Integrate once, inherit compliance, deliver faster with lower risk.",
    },
  ];

  return (
    <Box
      id="use-cases"
      sx={{
        background: "#0F172A",
        py: { xs: 12, md: 16 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: "-40%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(58, 134, 243, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 9s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-25px)" },
          },
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: "-30%",
          right: "-15%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(58, 134, 243, 0.06) 0%, transparent 70%)",
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
        <Stack spacing={8}>
          {/* Section Title */}
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
                fontSize: { xs: "2rem", md: "2.5rem" },
                background: "linear-gradient(90deg, #FFFFFF 0%, #CBD5E1 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
                textAlign: "center",

              }}
            >
              Enterprise Use Cases
            </Typography>
          </Box>

          {/* Use Cases Cards */}
          <Stack spacing={4}>
            {useCases.map((item, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  background:
                    expandedIndex === index
                      ? "linear-gradient(135deg, rgba(58, 134, 243, 0.1) 0%, rgba(58, 134, 243, 0.04) 100%)"
                      : "rgba(58, 134, 243, 0.04)",
                  backdropFilter: "blur(10px)",
                  border:
                    expandedIndex === index
                      ? "2px solid rgba(58, 134, 243, 0.25)"
                      : "1px solid rgba(58, 134, 243, 0.08)",
                  borderRadius: "16px",
                  p: { xs: 3, md: 4 },
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s both`,
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-1px",
                    left: 0,
                    right: 0,
                    height: "1px",
                    background:
                      expandedIndex === index
                        ? "linear-gradient(90deg, transparent, #3A86F3, transparent)"
                        : "transparent",
                    transition: "all 0.4s ease-out",
                  },
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, rgba(58, 134, 243, 0.1) 0%, rgba(58, 134, 243, 0.04) 100%)",
                    border: "2px solid rgba(58, 134, 243, 0.25)",
                    boxShadow: "0 20px 50px rgba(58, 134, 243, 0.15)",
                  },
                  "@keyframes fadeInUp": {
                    "0%": { opacity: 0, transform: "translateY(30px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                  },
                }}
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <Stack spacing={3}>
                  {/* Title with Icon and Indicator */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "12px",
                          background:
                            "linear-gradient(135deg, rgba(58, 134, 243, 0.2) 0%, rgba(58, 134, 243, 0.08) 100%)",
                          border: "1px solid rgba(58, 134, 243, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.5rem",
                        }}
                      >
                        {index === 0 && (
                          <ThumbUpRoundedIcon sx={{ color: "#3A86F3" }} />
                        )}
                        {index === 1 && (
                          <HelpOutlineRoundedIcon sx={{ color: "#3A86F3" }} />
                        )}
                        {index === 2 && (
                          <EmojiEventsRoundedIcon sx={{ color: "#3A86F3" }} />
                        )}
                        {index === 3 && (
                          <ThumbUpRoundedIcon sx={{ color: "#3A86F3" }} />
                        )}
                        {index === 4 && (
                          <HelpOutlineRoundedIcon sx={{ color: "#3A86F3" }} />
                        )}
                      </Box>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{
                          fontSize: { xs: "1.1rem", md: "1.25rem" },
                          color: "#FFFFFF",
                          transition: "all 0.3s ease-out",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Three-Column Layout with Smooth Animation */}
                  <Box
                    sx={{
                      display: expandedIndex === index ? "block" : "block",
                      animation:
                        expandedIndex === index
                          ? "expandIn 0.4s ease-out"
                          : "none",
                      "@keyframes expandIn": {
                        "0%": { opacity: 0, maxHeight: 0 },
                        "100%": { opacity: 1, maxHeight: "500px" },
                      },
                    }}
                  >
                    <Grid container spacing={3}>
                      {/* Need */}
                      <Grid size={{ xs: 12, md: 4 }}>
                        <Stack spacing={1.5}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <HelpOutlineRoundedIcon
                              sx={{
                                color: "#3A86F3",
                                fontSize: "1.3rem",
                              }}
                            />
                            <Typography
                              fontWeight={700}
                              sx={{
                                color: "#3A86F3",
                                fontSize: "0.95rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              Business Need
                            </Typography>
                          </Box>
                          <Typography
                            sx={{
                              color: "#CBD5E1",
                              fontSize: { xs: "0.9rem", md: "0.95rem" },
                              lineHeight: 1.6,
                              transition: "color 0.3s ease-out",
                            }}
                          >
                            {item.need}
                          </Typography>
                        </Stack>
                      </Grid>

                      {/* Value */}
                      <Grid size={{ xs: 12, md: 4 }}>
                        <Stack spacing={1.5}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <ThumbUpRoundedIcon
                              sx={{
                                color: "#3A86F3",
                                fontSize: "1.3rem",
                              }}
                            />
                            <Typography
                              fontWeight={700}
                              sx={{
                                color: "#3A86F3",
                                fontSize: "0.95rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              VDAL Value
                            </Typography>
                          </Box>
                          <Typography
                            sx={{
                              color: "#CBD5E1",
                              fontSize: { xs: "0.9rem", md: "0.95rem" },
                              lineHeight: 1.6,
                              transition: "color 0.3s ease-out",
                            }}
                          >
                            {item.value}
                          </Typography>
                        </Stack>
                      </Grid>

                      {/* Outcome */}
                      <Grid size={{ xs: 12, md: 4 }}>
                        <Stack spacing={1.5}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <EmojiEventsRoundedIcon
                              sx={{
                                color: "#3A86F3",
                                fontSize: "1.3rem",
                              }}
                            />
                            <Typography
                              fontWeight={700}
                              sx={{
                                color: "#3A86F3",
                                fontSize: "0.95rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              Key Outcome
                            </Typography>
                          </Box>
                          <Typography
                            sx={{
                              color: "#CBD5E1",
                              fontSize: { xs: "0.9rem", md: "0.95rem" },
                              lineHeight: 1.6,
                              transition: "color 0.3s ease-out",
                            }}
                          >
                            {item.outcome}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
