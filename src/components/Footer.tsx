"use client";

import {
  Box,
  Container,
  Typography,
  Stack,

} from "@mui/material";



export default function Footer() {
  const quickMenu = [
    { label: "Home", id: "home" },
    { label: "Solutions", id: "solution" },
    { label: "Success Stories", id: "success-stories" },
    { label: "Contact Us", id: "contact" },
  ];



  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#05091A",
        color: "white",
        pt: { xs: 8, md: 10 },
        pb: 4,
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <Container maxWidth="lg">
        {/* TOP CONTENT */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 6,
            mb: 8,
          }}
        >
          {/* BRAND */}
          <Box sx={{ flex: 1.5, maxWidth: { md: "500px" } }}>
            <Stack spacing={3}>
              <Typography variant="h4" fontWeight={800} sx={{ letterSpacing: -1 }}>
                VDAL<span style={{ color: "#3A86F3" }}>.</span>
              </Typography>

              <Typography
                sx={{
                  color: "#94A3B8",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                VDAL is a modern, secure, and intelligent data access layer
that unifies all enterprise data sources through virtualization.
It enables real-time, governed analytics on trusted data
without moving, duplicating, or disrupting source systems.
              </Typography>

              {/* <Box sx={{ display: "flex", gap: 4, alignItems: "center", pt: 2 }}>
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 700, color: "#64748B" }}
                >
                  VISION 2030
                </Typography>

                <Box sx={{ borderLeft: "1px solid rgba(255,255,255,0.1)", pl: 4 }}>
                  <Typography
                    variant="caption"
                    sx={{ display: "block", color: "#64748B", mb: 0.5 }}
                  >
                    A Subsidiary of
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, color: "#94A3B8" }}
                  >
                    masterworks
                  </Typography>
                </Box>
              </Box> */}


            </Stack>
          </Box>

          {/* QUICK MENU */}
          <Box sx={{ minWidth: "180px" }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 3 }}>
              Quick Menu
            </Typography>

            <Stack spacing={1.5}>
              {quickMenu.map((item) => (
                <Typography
                  key={item.label}
                  component="button"
                  onClick={() => handleScroll(item.id)}
                  sx={{
                    all: "unset",
                    cursor: "pointer",
                    color: item.id === "home" ? "#3A86F3" : "#94A3B8",
                    fontSize: "0.95rem",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "#FFFFFF",
                      paddingLeft: "4px",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* BOTTOM BAR */}
        <Box
          sx={{
            pt: 4,
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography sx={{ color: "#64748B", fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} VDAL. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 1.5 }}>
                <Box>
                  <Typography sx={{ color: "#94A3B8", fontSize: "0.85rem" }}>
                    +966 11 400 0014
                  </Typography>
                  <Typography sx={{ color: "#94A3B8", fontSize: "0.85rem" }}>
                    6319, Alyasmin, Riyadh 13322 2756, Riyadh 11564
                  </Typography>
                </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
