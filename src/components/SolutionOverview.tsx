"use client";

import { Box, Container, Typography, Stack } from "@mui/material";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function SolutionOverview() {
  const solutions = [
    "Single governed access backbone for all data consumers",
    "Real-time analytical access to the latest trusted data",
    "Zero duplication for analytical consumption",
    "Unified governance inheritance for every query, KPI, dataset, and report",
    "Standardized KPI-led analytical data products for enterprise reporting",
    "Safe AI-driven analytics delivered within visibility and governance boundaries",
    "Horizontal scalability for enterprise and AI workloads",
  ];

  return (
    <Box
      id="solution"
      sx={{
        backgroundColor: "#0F172A",
        py: { xs: 8, md: 12 },
        color: "white",
        scrollMarginTop: "100px",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          {/* HEADER */}
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              fontWeight={800}
              gutterBottom
              sx={{
                color:"#ffffff"
              }}
            >
              VDAL Solution Overview
            </Typography>

            <Typography
              sx={{
                color: "#94A3B8",
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              Transforming enterprise data landscapes by eliminating redundant
              integrations and ensuring consistent security for every consumer.
            </Typography>
          </Box>

          {/* TOP IMAGES */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
            }}
          >
            <Box
              sx={{
                flex: 2,
                position: "relative",
                height: 350,
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(58, 134, 243, 0.2)",
              }}
            >
              <Image
                src="/images/solution.png"
                alt="VDAL Architecture"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </Box>

            <Box
              sx={{
                flex: 1,
                position: "relative",
                height: 350,
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(58, 134, 243, 0.2)",
              }}
            >
              <Image
                src="/images/solution2.jpg"
                alt="VDAL Analytics"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>

          {/* FEATURES — CSS GRID USING BOX */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              gap: 2,
            }}
          >
            {solutions.map((item, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "#05091A",
                  p: 2.5,
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CheckCircleIcon
                  sx={{ color: "#10B981", fontSize: "1.2rem" }}
                />
                <Typography
                  fontWeight={600}
                  sx={{ color: "#FFFFFF", fontSize: "0.9rem" }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* RESULT */}
          <Box
            sx={{
              p: 4,
              backgroundColor: "rgba(58, 134, 243, 0.05)",
              border: "1px solid rgba(58, 134, 243, 0.2)",
              borderRadius: "24px",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" fontWeight={700}>
              The Result:{" "}
              <span style={{ color: "#3A86F3" }}>
                Faster insights, lower cost, and unified protection.
              </span>
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
