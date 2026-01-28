"use client";

import { Box, Container, Typography, Stack,} from "@mui/material";

/* ---------------- TYPES ---------------- */

interface BenefitItem {
  title: string;
  icon: string;
  description: string;
}

interface BenefitCardProps {
  item: BenefitItem;
}

/* ---------------- COMPONENT ---------------- */

export default function WhoBenefits() {
  const benefits: BenefitItem[] = [
    {
      title: "Large Enterprises",
      icon: "/images/Large-Enterprises.png",
      description: "Organizations operating across hybrid and multi-domain data landscapes requiring unified, governed analytics access.",
    },
    {
      title: "Business Analysts",
      icon: "/images/Business-Analysts.png",
      description: "Self-service analytics users who need consistent KPIs and trusted business views across dashboards and reports.",
    },
    {
      title: "Digital Teams",
      icon: "/images/Digital-Teams.png",
      description: "Engineering teams integrating enterprise data once with inherited governance for faster application delivery.",
    },
    {
      title: "AI & Advanced Analytics",
      icon: "/images/AI -Advanced-Analytics.png",
      description: "AI workloads demanding trusted, real-time analytical access within strict security and governance boundaries.",
    },
    {
      title: "Audit & Regulatory Teams",
      icon: "/images/Audit-Regulatory.png",
      description: "Teams requiring centralized visibility, traceability, and audit readiness across all analytical activity.",
    },
  ];

 return (
  <Box sx={{ backgroundColor: "#05091A", py: { xs: 8, md: 12 }, color: "#FFFFFF" }}>
    <Container maxWidth="lg">
      <Stack spacing={6}>
        <Typography variant="h3" fontWeight={800} textAlign="center" sx={{ mb: 4 }}>
          Who Benefits from VDAL
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4, // Space between cards
            justifyContent: "center", // Centers the bottom 2 cards
          }}
        >
          {benefits.map((item, index) => {
            const isFirstRow = index < 3;

            return (
              <Box
                key={index}
                sx={{
                  // For the first 3: Roughly 33% minus gap
                  // For the next 2: Roughly 45% for a balanced look
                  width: {
                    xs: "100%", 
                    sm: isFirstRow ? "calc(50% - 32px)" : "calc(50% - 32px)", 
                    md: isFirstRow ? "calc(33.33% - 32px)" : "calc(45% - 32px)"
                  },
                  display: "flex"
                }}
              >
                <BenefitCard item={item} />
              </Box>
            );
          })}
        </Box>
      </Stack>
    </Container>
  </Box>
);
}

/* ---------------- CARD ---------------- */

function BenefitCard({ item }: BenefitCardProps) {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#0A1229",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid #1E293B",
        minHeight: "280px",
        width: "100%", // Ensures it fills the Grid item
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-8px)",
          borderColor: "#334155",
          boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
          "& .card-bg": {
            transform: "scale(1.1)",
          },
        },
      }}
    >
      {/* Background Image Layer */}
      <Box
        className="card-bg"
        component="img"
        src={item.icon}
        alt=""
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
          transition: "transform 0.6s ease-in-out",
        }}
      />

      {/* Gradient Overlay for Readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          background: "linear-gradient(to top, rgba(5, 9, 26, 0.95) 20%, rgba(5, 9, 26, 0.4) 100%)",
        }}
      />

      {/* Content Layer */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          p: 4,
        }}
      >
        <Typography variant="h5" fontWeight={700} gutterBottom sx={{ fontSize: "1.25rem" }}>
          {item.title}
        </Typography>

        <Typography sx={{ color: "#CBD5E1", lineHeight: 1.6, fontSize: "0.95rem" }}>
          {item.description}
        </Typography>
      </Box>
    </Box>
  );
}