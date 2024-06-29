import { Apps, CorporateFare, Groups, Person } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { Link } from "react-router-dom";

export default function TopNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const theme = useTheme();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={isMenuOpen}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      sx={{
        overflow: "visible",
        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        "& .MuiAvatar-root": {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
      }}
      PaperProps={{
        sx: {
          background: theme.palette.primary.main,
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem onClick={handleMenuClose}>
        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <Groups />
          <div style={{ fontSize: "10px", fontWeight: "bold" }}>
            Create Your Own Organization
          </div>
        </div>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <CorporateFare />
          <div style={{ fontSize: "10px", fontWeight: "bold" }}>
            Create New Department
          </div>
        </div>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="sticky" enableColorOnDark>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Apps color="primary" />
            </IconButton>
            <Typography
              variant="body1"
              style={{ color: "#1D6EB7", fontWeight: "bold" }}
              component="h2"
            >
              RMTF
            </Typography>
          </div>
          <Link
            style={{ display: "flex", alignItems: "flex-end", gap: 4 }}
            to={"/login"}
          >
            <Person color="primary" />
            <Typography
              style={{ fontSize: 14, fontWeight: "bold" }}
              color={"#1D6EB7"}
            >
              Login/Signup
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
