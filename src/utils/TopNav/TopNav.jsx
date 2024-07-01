import { Apps, DataArray, Face2, Image, Person } from "@mui/icons-material";
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
        <Link
          to={"/login"}
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <Face2 className="text-white" />
          <div style={{ fontSize: "10px", fontWeight: "bold", color: "white" }}>
            Optimized Face Recognition
          </div>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link
          to={"/url-to-face"}
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <Image className="text-white" />
          <div style={{ fontSize: "10px", fontWeight: "bold", color: "white" }}>
            Url to Face Recognition
          </div>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link
          to={"/image-with-backend"}
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <DataArray className="text-white" />
          <div style={{ fontSize: "10px", fontWeight: "bold", color: "white" }}>
            Image with Backend
          </div>
        </Link>
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
