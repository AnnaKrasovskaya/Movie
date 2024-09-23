import { headers, baseUrl } from "../services/vars";
export default function filters() {
  const getFilters = async () => {
    const response = await fetch(`${baseUrl}/api/v2.2/films/filters`, {
      method: "GET",
      headers,
    });
    return response.json();
  };
  return getFilters();
}
