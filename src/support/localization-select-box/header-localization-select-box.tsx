import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGS } from "~/bootstrap/i18n/init-i18n";
import {
  StyledHeaderLocalizationIcon,
  StyledHeaderLocalizationWrapper,
} from "~/support/localization-select-box/style";

const FLAG_URLS = {
  [LANGS.DE]: "https://flagcdn.com/de.svg",
  [LANGS.AR]: "https://flagcdn.com/sa.svg",
  [LANGS.EN]: "https://flagcdn.com/gb.svg",
};

const HeaderLocalizationSelectBox = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleSetLanguage = (language: LANGS) => {
    i18n.changeLanguage(language);
    handleClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledHeaderLocalizationWrapper>
      <IconButton disableRipple onClick={handleClick}>
        <StyledHeaderLocalizationIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ zIndex: 9001 }}
        disableScrollLock
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {Object.entries(LANGS).map(([key, value]) => (
          <MenuItem key={key} onClick={() => handleSetLanguage(value)}>
            <img
              src={FLAG_URLS[value]}
              alt={key}
              style={{
                width: 24,
                height: 16,
                marginRight: 8,
                borderRadius: 2,
              }}
            />
            {key}
          </MenuItem>
        ))}
      </Menu>
    </StyledHeaderLocalizationWrapper>
  );
};

export default HeaderLocalizationSelectBox;
