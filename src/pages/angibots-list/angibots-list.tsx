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
  min-height: 100vh;
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

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    axios
      .get(`${mainOperationsEndpoint.createOffer}`)
      .then((response) => {
        setServices(response.data.offer);
      })
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <PageContainer>
      <TableTitle>Angebotsliste</TableTitle>
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: 800,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Table>
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
            {services.map((service, index) => (
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
                  {dayjs(service.created_at).format("YYYY-MM-DD HH:mm")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  );
};

export default ServicesPage;
