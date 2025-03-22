import dayjs from "dayjs";
import { Offer } from "~/pages/offers-page/offers-page-container";

export const getOffersTotalPricePerDay = (offers: Offer[]) => {
  const groupedOffers = offers.reduce<Record<string, number>>((acc, offer) => {
    const date = dayjs(offer.created_at).format("DD.MM.YYYY");
    acc[date] = acc[date] ? acc[date] + offer.price : offer.price;
    return acc;
  }, {});

  return Object.entries(groupedOffers).map(([date, count]) => ({
    date,
    count,
  }));
};
