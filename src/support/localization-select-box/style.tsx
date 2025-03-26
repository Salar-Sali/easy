import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";

export const StyledHeaderLocalizationWrapper = styled.div`
  display: flex;
`;

export const StyledHeaderLocalizationIcon = styled(LanguageIcon)`
  && {
    font-size: 36px;
  }
`;
