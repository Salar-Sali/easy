import { mainOperationsEndpoint } from "~/bootstrap/helper/endpoints";

export const login = async (email: string, password: string) => {
  const response = await fetch(`${mainOperationsEndpoint.login}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Invalid email or password");
  }

  const data = await response.json();
  localStorage.setItem("access_token", data.access_token);
};

export const getToken = () => localStorage.getItem("access_token");

export const isAuthenticated = () => !!getToken();

export const logout = () => {
  localStorage.removeItem("access_token");
};
