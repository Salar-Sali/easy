import { styled } from "styled-components";
import { Offer } from "~/pages/angibots-list/angibots-list";
import { getOffersCountPerDay } from "~/pages/angibots-list/get-offers-count-per-day";
import { getOffersTotalPricePerDay } from "~/pages/angibots-list/get-offers-total-price-per-day";
import OffersPerDayChart from "~/pages/angibots-list/offers-per-day-chart";

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
      />
      <OffersPerDayChart
        chartData={totalPricePerDay}
        yAxisTitle="Total price"
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
