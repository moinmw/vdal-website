"use client";

import { Box, Container, Typography, Stack, Paper } from "@mui/material";
import { useState } from "react";
import SecurityIcon from "@mui/icons-material/Security";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import ShieldIcon from "@mui/icons-material/Shield";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const controlIcons = [
  LockPersonIcon,
  ShieldIcon,
  SecurityIcon,
  VerifiedUserIcon,
  TaskAltIcon,
];

const controls = [
  "Central identity-based access enforced consistently across all data consumers.",
  "Row-level and attribute-level visibility controls for fine-grained data protection.",
  "Context-aware sensitive data shielding, including dynamic masking.",
  "Centralized audit trail for all queries and analytical workloads.",
  "Unified governance inheritance across queries, KPIs, datasets, and reports.",
];

export default function SecurityGovernance() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box sx={{ background: "#05091A", py: { xs: 10, md: 15 }, color: "white", position: "relative", overflow: "hidden" }}>
      
      {/* Background Decorative Element */}
      <Box sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "800px",
        background: "radial-gradient(circle, rgba(58, 134, 243, 0.03) 0%, transparent 70%)",
        zIndex: 0
      }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Changed alignItems from "center" to "flex-start" */}
        <Stack spacing={6} alignItems="flex-start">
          
          {/* Header Section - Now Left Aligned */}
          <Box sx={{ textAlign: "center", width: "100%" }}>
            <Typography
              variant="h3"
              fontWeight={800}
              sx={{ 
                mb: 2,
                background: "linear-gradient(90deg, #FFFFFF 0%, #94A3B8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Security & Governance
            </Typography>
            {/* Added a subtle accent line under the left-aligned heading */}
            
          </Box>

          {/* Controls Grid */}
          <Box sx={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: 3, 
            width: "100%" 
          }}>
            {controls.map((text, index) => {
              const Icon = controlIcons[index];
              const isFullWidth = index === 4;

              return (
                <Box
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  sx={{
                    flex: {
                      xs: "1 0 100%",
                      md: isFullWidth ? "1 0 100%" : "1 0 calc(50% - 24px)"
                    },
                    maxWidth: isFullWidth ? "100%" : { md: "calc(50% - 12px)" },
                    p: 4,
                    borderRadius: "20px",
                    background: hoveredIndex === index 
                      ? "rgba(58, 134, 243, 0.08)" 
                      : "rgba(255, 255, 255, 0.02)",
                    border: "1px solid",
                    borderColor: hoveredIndex === index ? "#3A86F3" : "rgba(255, 255, 255, 0.05)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <Box sx={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: hoveredIndex === index ? "#3A86F3" : "rgba(58, 134, 243, 0.1)",
                    color: hoveredIndex === index ? "#FFF" : "#3A86F3",
                    transition: "all 0.3s ease",
                    flexShrink: 0
                  }}>
                    <Icon sx={{ fontSize: "2rem" }} />
                  </Box>

                  <Typography sx={{ 
                    color: hoveredIndex === index ? "#FFF" : "#CBD5E1",
                    fontSize: "1.05rem",
                    lineHeight: 1.6,
                    fontWeight: hoveredIndex === index ? 500 : 400
                  }}>
                    {text}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          {/* The Outcome Banner */}
          <Paper
            sx={{
              width: "100%",
              p: 4,
              borderRadius: "24px",
              background: "linear-gradient(90deg, rgba(58, 134, 243, 0.1) 0%, transparent 100%)",
              border: "1px solid rgba(58, 134, 243, 0.2)",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 3
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <CheckCircleIcon sx={{ color: "#3A86F3", fontSize: "2.5rem" }} />
              <Box>
                <Typography variant="h6" fontWeight={700}>Key Outcome</Typography>
                <Typography sx={{ color: "#94A3B8" }}>One trusted, compliant, inherited governance model.</Typography>
              </Box>
            </Stack>
            
            <Stack direction="row" spacing={2}>
              {["Compliant", "Auditable", "Transparent"].map((label) => (
                <Box key={label} sx={{
                  px: 2,
                  py: 0.5,
                  borderRadius: "6px",
                  border: "1px solid rgba(58, 134, 243, 0.4)",
                  color: "#3A86F3",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase"
                }}>
                  {label}
                </Box>
              ))}
            </Stack>
          </Paper>

        </Stack>
      </Container>
    </Box>
  );
}