"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Container,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setErrorMsg(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      );

      setSent(true);

      // hide success after 3 sec
      setTimeout(() => setSent(false), 3000);

      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setErrorMsg("Failed to send message. Please try again.");

      // hide error after 3 sec
      setTimeout(() => setErrorMsg(null), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        background: "linear-gradient(135deg, #0F172A 0%, #05091A 100%)",
        py: { xs: 8, md: 12 },
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 10 },
            alignItems: "flex-start",
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ flex: 1 }}>
            <Stack spacing={4}>
              <Box>
                <Typography
                  variant="h2"
                  fontWeight={700}
                  sx={{ mb: 2, fontSize: { xs: "2.5rem", md: "3.5rem" } }}
                >
                  Get in touch
                </Typography>
                <Typography sx={{ color: "#94A3B8", fontSize: "1.1rem" }}>
                  Have a question or just want to say hello? Reach out anytime.
                </Typography>
              </Box>

              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    bgcolor: "rgba(58, 134, 243, 0.1)",
                    p: 2,
                    borderRadius: "12px",
                    border: "1px solid rgba(58, 134, 243, 0.2)",
                  }}
                >
                  <EmailIcon sx={{ color: "#3A86F3" }} />
                </Box>
                <Box>
                  <Typography fontWeight={600}>Email us</Typography>
                  <Typography sx={{ color: "#94A3B8" }}>
                    info@master-works.sa
                  </Typography>
                </Box>
              </Stack>

              {/* Address  */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    bgcolor: "rgba(58, 134, 243, 0.1)",
                    p: 2,
                    borderRadius: "12px",
                    border: "1px solid rgba(58, 134, 243, 0.2)",
                  }}
                >
                  <LocationOnIcon sx={{ color: "#3A86F3" }} />
                </Box>
                <Box>
                  <Typography fontWeight={600}>Address</Typography>
                  <Typography sx={{ color: "#94A3B8" }}>
                    6319, Alyasmin, Riyadh 13322 2756, Riyadh 11564
                  </Typography>
                </Box>
              </Stack>

              {/* Mobile  */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    bgcolor: "rgba(58, 134, 243, 0.1)",
                    p: 2,
                    borderRadius: "12px",
                    border: "1px solid rgba(58, 134, 243, 0.2)",
                  }}
                >
                  <PhoneIcon sx={{ color: "#3A86F3" }} />
                </Box>
                <Box>
                  <Typography fontWeight={600}>Mobile</Typography>
                  <Typography sx={{ color: "#94A3B8" }}>
                    +966 11 400 0014
                  </Typography>
                </Box>
              </Stack>




              {/* <Stack spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box
                    sx={{
                      width: 40,
                      height: "1px",
                      bgcolor: "rgba(255,255,255,0.3)",
                    }}
                  />
                  <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                    Connect with us
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2}>
                  {socialLinks.map((social, i) => (
                    <IconButton
                      key={i}
                      sx={{
                        bgcolor: "rgba(255,255,255,0.05)",
                        color: "white",
                        borderRadius: "8px",
                        "&:hover": { bgcolor: "#3A86F3" },
                      }}
                    >
                      <social.icon fontSize="small" />
                    </IconButton>
                  ))}
                </Stack>
              </Stack> */}
            </Stack>
          </Box>

          {/* RIGHT SIDE FORM */}
          <Box
            sx={{
              flex: 1.2,
              width: "100%",
              bgcolor: "#05091A",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.25)",
              p: { xs: 3, md: 4 },
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
          >
            <Typography variant="h6" fontWeight={700}>
              We are here to help you!
            </Typography>
            <Typography
              variant="caption"
              sx={{ mb: 2, display: "block", fontStyle: "italic" }}
            >
              We love to hear from you — let’s start the conversation.
            </Typography>

            <form ref={formRef} onSubmit={handleSubmit}>


              {sent && (
                <Typography variant="caption" color="success.main">
                  Message sent successfully!
                </Typography>
              )}

              {errorMsg && (
                <Typography variant="caption" color="error.main">
                  {errorMsg}
                </Typography>
              )}

              <Stack spacing={1.2}>
                {[
                  { label: "Name", name: "name", type: "text" },
                  { label: "Email", name: "email", type: "email" },
                  { label: "Phone Number", name: "phone", type: "number" },
                  {
                    label: "Message",
                    name: "message",
                    type: "text",
                    multiline: true,
                  },
                ].map((field) => (
                  <Box key={field.name}>
                    <Typography
                      variant="caption"
                      fontWeight={700}
                      sx={{ mb: 0.5, display: "block" }}
                    >
                      {field.label}
                    </Typography>

                    <TextField
                      fullWidth
                      required
                      variant="filled"
                      hiddenLabel
                      name={field.name}
                      type={field.type}
                      multiline={field.multiline}
                      rows={field.multiline ? 3 : 1}
                      placeholder={
                        field.label === "Name"
                          ? "Enter your full name"
                          : field.label === "Email"
                            ? "Your email address"
                            : field.label === "Phone Number"
                              ? "Best number to reach you"
                              : "Tell us more — how can we help?"
                      }
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          borderRadius: "8px",
                          border: "1px solid rgba(255,255,255,0.1)",
                          fontSize: "0.85rem",
                          bgcolor: "#0F172A",
                          color: "#ffffff",
                          "& .MuiFilledInput-input": {
                            py: field.multiline ? 1.2 : 1,
                          },
                        },
                      }}
                    />
                  </Box>
                ))}

                <Button
                  type="submit"
                  fullWidth
                  disabled={loading}
                  sx={{
                    bgcolor: "#3A86F3",
                    mt: 1.5,
                    py: 1.2,
                    borderRadius: "8px",
                    color: "#ffffff",
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
