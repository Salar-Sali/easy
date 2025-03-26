import { TextField, Typography } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mainOperationsEndpoint } from "~/bootstrap/helper/endpoints";
import { StyledMainButton } from "~/bootstrap/helper/global-styles";
import MainHeader from "~/generic/header/main-header";
import OffersTable from "~/pages/offers-page/angibots-table";
import ChartsContainer from "~/pages/offers-page/charts-container";
import { exportToExcel } from "~/pages/offers-page/save-in-excel";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { useTranslation } from "react-i18next";
import langKey from "~/bootstrap/i18n/langKey";
const PageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
`;

const TableTitle = styled(Typography)`
  margin-bottom: 16px !important;
  font-size: 24px !important;
  font-weight: bold !important;
`;

const SearchInput = styled(TextField)`
  margin-bottom: 16px !important;
  width: 100%;
`;

export type Offer = {
  customerName: string;
  price: number;
  mainServices: string[];
  created_at: string;
  id: string;
};

/* -------------------------------------------------------------------------- */
/*                                  component                                 */
/* -------------------------------------------------------------------------- */
const OffersPageContainer: React.FC = () => {
  /* --------------------------------- states --------------------------------- */
  const [offers, setOffers] = useState<Offer[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  /* ---------------------------------- fetch --------------------------------- */
  useEffect(() => {
    axios
      .get(`${mainOperationsEndpoint.createOffer}`)
      .then((response) => {
        setOffers(response.data.offer);
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  /* --------------------------------- filter --------------------------------- */
  const filteredOffers = offers.filter((offer) => {
    const search = searchTerm.toLowerCase();
    return (
      offer.id.toString().includes(search) ||
      offer.customerName.toLowerCase().includes(search) ||
      dayjs(offer.created_at).format("DD.MM.YYYY HH:mm").includes(search)
    );
  });

  const { t } = useTranslation();
  return (
    <PageContainer>
      <MainHeader />
      <TableTitle>{t(langKey.offerListPage.offerList)}</TableTitle>
      {/* charts */}
      <ChartsContainer offers={offers} />

      {/* Search Input */}
      <SearchInput
          label={t(langKey.global.search)}
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <BillsTableActionsContainer className="bills-actions">
        <StyledMainButton
          startIcon={<ArrowCircleDownIcon />}
          onClick={() => exportToExcel(offers)}
        >
          {t(langKey.offerListPage.downloadAsExcel)}
        </StyledMainButton>
      </BillsTableActionsContainer>

      <OffersTable filteredOffers={filteredOffers} />
    </PageContainer>
  );
};

export default OffersPageContainer;

const BillsTableActionsContainer = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;
