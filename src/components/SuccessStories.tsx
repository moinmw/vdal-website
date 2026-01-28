"use client";

import { Box, Container, Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function SuccessStories() {
  const stories = [
    {
      name: "Government Entity ",
      challenge: [
        "Enterprise data stored in distributed object repositories.",
        "Legacy query dependency created performance bottlenecks.",
        "More effort spent acquiring data than generating insights.",
      ],
      impact: [
        "100% removal of repeated integration pipelines for analytics.",
        "Real-time governed BI access without data movement.",
        "Unified visibility into query behavior and processing lifecycle.",
      ],
      results: [
        "100% elimination of analytical data copies for BI consumption.",
        "Faster KPI generation and reporting cycles.",
        "Centralized audit traceability for all analytical workloads.",
        "Significant infrastructure cost reduction.",
      ],
    },
    {
      name: "Telecom",
      challenge: [
        "Telecom data spread across legacy, cloud, NoSQL, and lake systems.",
        "Duplicated analytics pipelines across business units.",
        "Inconsistent sensitive data access rules and KPIs.",
      ],
      impact: [
        "Unified access backbone across enterprise and lake sources.",
        "Central governance automatically inherited by all consumers.",
        "Live access to trusted telecom KPIs and business views.",
      ],
      results: [
        "Consistent regulatory KPIs across dashboards.",
        "70% improvement in analysis speed and productivity.",
        "50% reduction in duplicated data integrations.",
        "Customer 360 and network analytics enabled without data copies.",
      ],
    },
  ];

  return (
    <Box
      id="success-stories"
      sx={{
        backgroundColor: "#05091A",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          {/* Section Title */}
          <Typography variant="h3" fontWeight={800} textAlign="center">
            Success Stories
          </Typography>

          {stories.map((story, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#0F172A",
                p: { xs: 3, md: 4 },
                borderRadius: 2,
              }}
            >
              <Stack spacing={3}>
                {/* Client Name */}
                <Typography variant="h5" fontWeight={600}>
                  {story.name}
                </Typography>

                <Grid container spacing={3}>
                  {/* Challenge */}
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Typography
                      fontWeight={600}
                      sx={{ color: "#3A86F3", mb: 1 }}
                    >
                      Client Challenge
                    </Typography>
                    {story.challenge.map((item, i) => (
                      <Typography
                        key={i}
                        sx={{ color: "#CBD5E1", mb: 1 }}
                      >
                        • {item}
                      </Typography>
                    ))}
                  </Grid>

                  {/* VDAL Impact */}
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Typography
                      fontWeight={600}
                      sx={{ color: "#3A86F3", mb: 1 }}
                    >
                      VDAL Impact
                    </Typography>
                    {story.impact.map((item, i) => (
                      <Typography
                        key={i}
                        sx={{ color: "#CBD5E1", mb: 1 }}
                      >
                        • {item}
                      </Typography>
                    ))}
                  </Grid>

                  {/* Results */}
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Typography
                      fontWeight={600}
                      sx={{ color: "#3A86F3", mb: 1 }}
                    >
                      Achieved Results
                    </Typography>
                    {story.results.map((item, i) => (
                      <Typography
                        key={i}
                        sx={{ color: "#CBD5E1", mb: 1 }}
                      >
                        • {item}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
