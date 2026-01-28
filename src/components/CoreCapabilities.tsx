"use client";

import { Box, Container, Typography, Stack } from "@mui/material";
import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function CoreCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  const capabilities = [
    {
      title: "Single Unified Access Layer",
      desc: "One integration point for analysts, applications, reports, and AI workloads. Eliminate point-to-point complexity and reduce infrastructure overhead.",
    },
    {
      title: "Zero-Duplication Analytics",
      desc: "Live in-place data access without creating analytical data copies. Reduce storage costs and ensure your data is always fresh and never stale.",
    },
    {
      title: "KPI-Standardized Views",
      desc: "Certified business views with consistent KPI definitions. Ensure every department is looking at the same 'single version of the truth'.",
    },
    {
      title: "Governance Inheritance",
      desc: "Security and visibility rules are defined once at the source and inherited by every downstream data consumer automatically.",
    },
    {
      title: "AI-Safe Analytics",
      desc: "Query generation and insights delivered inside your security boundaries. Build AI workloads that respect enterprise-grade privacy.",
    },
    {
      title: "Central Monitoring",
      desc: "Source health and analytical workload behavior visibility.",
    },
    {
      title: "Enterprise-Scale Foundation",
      desc: "Horizontal scalability for analytics and AI workloads.",
    },
  ];

  return (
    <Box sx={{ background: "#05091A", py: { xs: 8, md: 15 }, color: "white" }}>
      <Container maxWidth="lg">

        {/* TOP HEADING (FULL WIDTH) */}
        <Typography
          variant="h3"
          textAlign={"center"}
          fontWeight={800}
          sx={{ mb: 6 }}
        >
          Core Strategic Capabilities
        </Typography>

        {/* CONTENT ROW */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 8 },
            alignItems: "flex-start",
          }}
        >
          {/* LEFT MENU */}
          <Box sx={{ flex: { xs: "1 1 auto", md: "0 0 40%" }, width: "100%" }}>
  <Stack spacing={0.5}>
    {capabilities.map((cap, index) => (
      <Box
        key={index}
        onMouseEnter={() => setActiveIndex(index)}
        sx={{
          px: 2,           // horizontal padding
          py: 1.4,         // vertical padding ↓ (was 2.5)
          cursor: "pointer",
          borderRadius: "10px",
          borderLeft: "3px solid",
          borderColor: activeIndex === index ? "#3A86F3" : "transparent",
          background:
            activeIndex === index
              ? "rgba(58, 134, 243, 0.08)"
              : "transparent",
          transition: "all 0.2s ease-in-out",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.05rem",     // slightly smaller
            lineHeight: 1.3,         // tighter text
            fontWeight: activeIndex === index ? 700 : 400,
            color: activeIndex === index ? "#FFF" : "#94A3B8",
          }}
        >
          {cap.title}
        </Typography>

        {activeIndex === index && (
          <ChevronRightIcon
            sx={{
              fontSize: "20px",      // smaller icon
              color: "#3A86F3",
            }}
          />
        )}
      </Box>
    ))}
  </Stack>
</Box>


          {/* RIGHT CONTENT */}
          <Box sx={{ flex: { xs: "1 1 auto", md: "0 0 60%" }, width: "100%" }}>
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: "24px",
                background: "rgba(10, 18, 41, 0.5)",
                backdropFilter: "blur(10px)",
                border: "1px solid #1E293B",
                minHeight: "320px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
                {capabilities[activeIndex].title}
              </Typography>

              <Typography
                sx={{
                  color: "#ffffff",
                  lineHeight: 1.8,
                  fontSize: "1.15rem",
                }}
              >
                {capabilities[activeIndex].desc}
              </Typography>

            
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
