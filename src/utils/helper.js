// Get the locale code from the path ([ 'de', 'ueber-uns' ] => de)
export const getLocaleFromPath = (pathArr) => {
  const locales = ["en", "de", "fr"];

  let locale = pathArr ? pathArr[0] : "en";

  if (locale && !locales.includes(locale)) {
    locale = "en";
  }

  return locale;
};
