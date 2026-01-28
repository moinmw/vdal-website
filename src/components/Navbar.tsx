"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  IconButton,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const navItems = [
  { label: "Home", id: "home" },
  { label: "success-stories", id: "success-stories" },
  { label: "solution", id: "solution" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: "20px",
          left: 0,
          right: 0,
          width: "95%",
          maxWidth: "1200px",
          margin: "0 auto",
          background: "rgba(5, 9, 26, 0.4)",
          backdropFilter: "blur(12px)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            border: "1px solid rgba(58, 134, 243, 0.3)",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 2, md: 4 },
            height: "75px",
          }}
        >
          {/* Logo */}
          <Box
            sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            onClick={() => handleNavClick("home")}
          >
            <Image
              src="/logos/VDAL Word-Logo-Dark.svg"
              alt="VDAL"
              width={100}
              height={45}
              priority
            />
          </Box>

          {/* Desktop Navigation */}
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                sx={{
                  color: "#FFFFFF",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  "&:hover": { color: "#3A86F3", background: "none" },
                }}
              >
                {item.label}
              </Button>
            ))}

            <Box
              sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
              onClick={() => handleNavClick("contact")}
            >
              <Button
                variant="contained"
                sx={{
                  background: "#1E50BB",
                  borderRadius: "8px",
                  textTransform: "none",
                  px: 3,
                  "&:hover": { background: "#2f6fe0" },
                }}
              >
                Request Demo ↗
              </Button>
            </Box>
          </Stack>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "#FFFFFF" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 260,
            height: "100%",
            backgroundColor: "#05091A",
            p: 3,
          }}
        >
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{ color: "#FFFFFF", mb: 3 }}
          >
            <CloseIcon />
          </IconButton>

          <Stack spacing={2}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                fullWidth
                onClick={() => {
                  handleNavClick(item.id);
                  setOpen(false);
                }}
                sx={{
                  justifyContent: "flex-start",
                  color: "#FFFFFF",
                  textTransform: "none",
                  "&:hover": { color: "#3A86F3", background: "none" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
