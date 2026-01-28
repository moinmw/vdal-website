"use client";

import { Box, Container, Typography } from "@mui/material";

export default function ClosingStatement() {
  return (
    <Box
      sx={{
        backgroundColor: "#05091A",
        py: { xs: 6, md: 10 },
        borderTop: "1px solid #0F172A",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h5"
          fontWeight={700}
          align="center"
          gutterBottom
        >
          Closing Statement
        </Typography>

        <Typography
          align="center"
          sx={{ color: "#CBD5E1", fontSize: "1.05rem" }}
        >
          VDAL is the strategic backbone for governed, real-time, AI-ready
          enterprise data access — unifying analytics, automation, semantics,
          and compliance without disrupting existing data estates.
        </Typography>
      </Container>
    </Box>
  );
}
