import { styled } from "styled-components";
import { Offer } from "~/pages/offers-page/offers-page-container";
import { getOffersCountPerDay } from "~/pages/offers-page/get-offers-count-per-day";
import { getOffersTotalPricePerDay } from "~/pages/offers-page/get-offers-total-price-per-day";
import OffersPerDayChart from "~/pages/offers-page/offers-per-day-chart";

interface Props {
  offers: Offer[];
}
const ChartsContainer = ({ offers }: Props) => {
  const offersCountPerDay = getOffersCountPerDay(offers);
  const totalPricePerDay = getOffersTotalPricePerDay(offers);

  return (
    <StyledChartContainer>
      <OffersPerDayChart
        chartData={offersCountPerDay}
        yAxisTitle="Number of offers"
        fillColor="#8AB2A6"
      />
      <OffersPerDayChart
        chartData={totalPricePerDay}
        yAxisTitle="Total price"
        fillColor="#3E3F5B"
      />
    </StyledChartContainer>
  );
};

export default ChartsContainer;

const StyledChartContainer = styled.div`
  width: 100%;
  margin: 32px 0px;
  gap: 16px;
`;
