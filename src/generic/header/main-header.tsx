import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { pagesRoutes } from "~/bootstrap/helper/endpoints";
import { logout } from "~/pages/login-page/auth-service";
import LogoutIcon from "@mui/icons-material/Logout";

// Styled Components
const StyledAppBar = styled(AppBar)`
  background-color: #f4f4f4;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const StyledBox = styled(Box)`
  display: flex;
  gap: 16px;
`;

const StyledImg = styled("img")`
  width: auto;
  height: 70px;
`;

const MUIHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        {/* Logo */}
        <Button component={Link} to={`${pagesRoutes.main}`}>
          <StyledImg src="logo.png" alt="MyLogo" />
        </Button>

        {/* Navigation Links */}
        <StyledBox>
          <Button
            component={Link}
            to={`${pagesRoutes.offers}`}
            sx={{ color: "#555", fontWeight: "bold", textTransform: "none" }}
          >
            Angebotsliste
          </Button>
          <Button
            onClick={() => {
              logout();
              navigate(`${pagesRoutes.login}`);
            }}
            sx={{ color: "#555", fontWeight: "bold", textTransform: "none" }}
          >
            <LogoutIcon />
          </Button>
        </StyledBox>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default MUIHeader;
