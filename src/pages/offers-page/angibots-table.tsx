import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { styled } from "styled-components";
import langKey from "~/bootstrap/i18n/langKey";
import { Offer } from "~/pages/offers-page/offers-page-container";

const MainServicesList = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

const ServiceItem = styled.li`
  font-size: 14px;
`;

interface Props {
  filteredOffers: Offer[];
}

const OffersTable = ({ filteredOffers }: Props) => {
  const { t } = useTranslation();
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
        borderRadius: "8px",
        maxHeight: {
          xs: 580,
          md: 650,
        },
      }}
    >
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>{t(langKey.offerListPage.offerNumber)}</strong>
            </TableCell>
            <TableCell>
              <strong>{t(langKey.offerListPage.customerName)}</strong>
            </TableCell>
            <TableCell>
              <strong>{t(langKey.offerListPage.totalPrice)}</strong>
            </TableCell>
            <TableCell>
              <strong>{t(langKey.offerListPage.mainServices)}</strong>
            </TableCell>
            <TableCell>
              <strong>{t(langKey.offerListPage.createdAt)}</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredOffers.map((offer, index) => (
            <TableRow key={index}>
              <TableCell>{offer.id}</TableCell>
              <TableCell>{offer.customerName}</TableCell>
              <TableCell>€{offer.price.toFixed(2)}</TableCell>
              <TableCell>
                <MainServicesList>
                  {offer.mainServices.map((item, i) => (
                    <ServiceItem key={i}>{item}</ServiceItem>
                  ))}
                </MainServicesList>
              </TableCell>
              <TableCell>
                {dayjs(offer.created_at).format("DD.MM.YYYY HH:mm")}
              </TableCell>
            </TableRow>
          ))}
          {filteredOffers.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={5}
                style={{ textAlign: "center", padding: "16px" }}
              >
                {t(langKey.global.noResults)}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OffersTable;
