import LogoutIcon from "@mui/icons-material/Logout";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { pagesRoutes } from "~/bootstrap/helper/endpoints";
import { LANGS } from "~/bootstrap/i18n/init-i18n";
import langKey from "~/bootstrap/i18n/langKey";
import { logout } from "~/pages/login-page/auth-service";
import HeaderLocalizationSelectBox from "~/support/localization-select-box/header-localization-select-box";

/* -------------------------------------------------------------------------- */
/*                                   styles                                   */
/* -------------------------------------------------------------------------- */
const StyledAppBar = styled(AppBar)`
  background-color: #f4f4f4;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 82px;
`;


const StyledToolbar = styled(Toolbar)<{ $isRtl?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  flex-direction: ${({ $isRtl }) => ($isRtl ? "row-reverse" : "row")};
`;


const StyledBox = styled(Box)<{ $isRtl?: boolean }>`
  display: flex;
  gap: 8px;
  flex-direction: ${({ $isRtl }) => ($isRtl ? "row-reverse" : "row")};
`;

const StyledImg = styled("img")`
  width: auto;
  height: 70px;
`;

/* -------------------------------------------------------------------------- */
/*                                  component                                 */
/* -------------------------------------------------------------------------- */
const MainHeader: React.FC = () => {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();
  const direction = i18n.language === LANGS.AR ? "rtl" : "ltr";

  return (
    <StyledAppBar position="fixed">
      <StyledToolbar $isRtl={direction === "rtl"}>
      {/* Logo */}
        <Button component={Link} to={`${pagesRoutes.main}`}>
          <StyledImg src="logo.png" alt="MyLogo" />
        </Button>

        {/* Navigation Links */}
        <StyledBox $isRtl={direction === "rtl"}>
          <Button
            component={Link}
            to={`${pagesRoutes.offers}`}
            sx={{ color: "#555", fontWeight: "bold", textTransform: "none" }}
          >
            {t(langKey.offerListPage.offerList)}
          </Button>
          <HeaderLocalizationSelectBox />
          <Button
            onClick={() => {
              logout();
              navigate(`${pagesRoutes.login}`);
            }}
            sx={{ color: "#f00", fontWeight: "bold", textTransform: "none" }}
          >
            <LogoutIcon />
          </Button>
        </StyledBox>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default MainHeader;
