export const smallScreenSize = "480px";
export const mediumScreenSize = "768px";
export const largeScreenSize = "1024px";
export const extraLargeScreenSize = "1200px";

export const removeLettersFromString = (value: string) => {
  const currentValue = value.replace(/[^\d]/g, "");
  return currentValue;
};
