// ServicesPage.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import styled from "styled-components";
import { mainOperationsEndpoint } from "~/bootstrap/helper/endpoints";
import dayjs from "dayjs";

// Define the type for the service data
type Service = {
  customerName: string;
  price: number;
  mainServices: string[];
  created_at: string;
  id: string;
};

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

/* -------------------------------------------------------------------------- */
/*                                  component                                 */
/* -------------------------------------------------------------------------- */
const ServicesPage: React.FC = () => {
  /* --------------------------------- states --------------------------------- */
  const [services, setServices] = useState<Service[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  /* ---------------------------------- fetch --------------------------------- */
  useEffect(() => {
    axios
      .get(`${mainOperationsEndpoint.createOffer}`)
      .then((response) => {
        setServices(response.data.offer);
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  /* --------------------------------- filter --------------------------------- */
  const filteredServices = services.filter((service) => {
    const search = searchTerm.toLowerCase();
    return (
      service.id.toString().includes(search) ||
      service.customerName.toLowerCase().includes(search) ||
      dayjs(service.created_at).format("DD.MM.YYYY HH:mm").includes(search)
    );
  });

  return (
    <PageContainer>
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
            {filteredServices.map((service, index) => (
              <TableRow key={index}>
                <TableCell>{service.id}</TableCell>
                <TableCell>{service.customerName}</TableCell>
                <TableCell>€{service.price.toFixed(2)}</TableCell>
                <TableCell>
                  <MainServicesList>
                    {service.mainServices.map((item, i) => (
                      <ServiceItem key={i}>{item}</ServiceItem>
                    ))}
                  </MainServicesList>
                </TableCell>
                <TableCell>
                  {dayjs(service.created_at).format("DD.MM.YYYY HH:mm")}
                </TableCell>
              </TableRow>
            ))}
            {filteredServices.length === 0 && (
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
