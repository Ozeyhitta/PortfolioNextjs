// src/lib/api.ts (tạo file mới)
export async function fetchPortfolios() {
  const res = await fetch("http://localhost:1337/api/portfolios?populate=*");
  const json = await res.json();
  return json.data;
}
