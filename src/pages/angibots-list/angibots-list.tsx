// ServicesPage.tsx
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mainOperationsEndpoint } from "~/bootstrap/helper/endpoints";
import MainHeader from "~/generic/header/main-header";

// Styled container using styled-components
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

const MainServicesList = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

const ServiceItem = styled.li`
  font-size: 14px;
`;

const SearchInput = styled(TextField)`
  margin-bottom: 16px !important;
  width: 100%;
`;

type Offer = {
  customerName: string;
  price: number;
  mainServices: string[];
  created_at: string;
  id: string;
};

/* -------------------------------------------------------------------------- */
/*                                  component                                 */
/* -------------------------------------------------------------------------- */
const ServicesPage: React.FC = () => {
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

  return (
    <PageContainer>
      <MainHeader />
      <TableTitle>Angebotsliste</TableTitle>
      {/* Search Input */}
      <SearchInput
        label="Suche..."
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* table */}
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
                <strong>Number</strong>
              </TableCell>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Preis</strong>
              </TableCell>
              <TableCell>
                <strong>Main Services</strong>
              </TableCell>
              <TableCell>
                <strong>Created at</strong>
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
                  Keine Ergebnisse gefunden
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  );
};

export default ServicesPage;
