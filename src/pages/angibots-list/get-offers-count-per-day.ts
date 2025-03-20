import dayjs from "dayjs";
import { Offer } from "~/pages/angibots-list/angibots-list";

export const getOffersCountPerDay = (offers: Offer[]) => {
  const groupedOffers = offers.reduce<Record<string, number>>((acc, offer) => {
    const date = dayjs(offer.created_at).format("DD.MM.YYYY");
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(groupedOffers).map(([date, count]) => ({
    date,
    count,
  }));
};
