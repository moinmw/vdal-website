"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function VDALOverview() {
  return (
    <Box
      sx={{
        backgroundColor: "#05091A",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "stretch",
          }}
        >
          {/* LEFT CONTENT */}
          <Box
            sx={{
              borderRadius: 3,
              p: { xs: 4, md: 5 },
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // top-left
            }}
          >
            <Typography
              fontWeight={800}
              variant="h3"
              sx={{
                color: "#FFFFFF",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Unified Intelligent Data Access
            </Typography>

            <Typography sx={{ color: "#FFFFFF", opacity: 0.9, mb: 2 }}>
              • VDAL is a modern, secure, and intelligent platform that unifies
              access to all enterprise data sources through a virtualized layer
              — enabling governed analytics, seamless integration, and real-time
              insights without moving data.
            </Typography>

            <Typography sx={{ color: "#FFFFFF", opacity: 0.9, mb: 1.5 }}>
              • One secure intelligent access backbone for all consumers
            </Typography>

            <Typography sx={{ color: "#FFFFFF", opacity: 0.9, mb: 1.5 }}>
              • Real-time governed analytics on latest trusted data
            </Typography>

            <Typography sx={{ color: "#FFFFFF", opacity: 0.9 }}>
              • No disruption or duplication of source systems
            </Typography>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              // backgroundColor: "#0F172A",
              borderRadius: 3,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              // justifyContent: "center",
              // border: "1px solid rgba(58, 134, 243, 0.25)",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: 300,
              }}
            >
              <Image
                src="/images/home.png"
                alt="VDAL Platform"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority={false}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
