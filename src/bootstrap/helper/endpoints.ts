export const pagesRoutes = {
  main: "/",
  draft: "page1",
  offers: "/angebotsliste",
  login: "/login",
};

export const mainOperationsEndpoint = {
  login: "http://127.0.0.1:8000/api/login",
  getOffers: `http://127.0.0.1:8000/api/offer`,
  createOffer: `http://127.0.0.1:8000/api/offer`,
};
