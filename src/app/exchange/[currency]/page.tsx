export default async function ExchangePage({ params }) {
  // Fetching exchange rate data server-side
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/exchange-rate?base=USD`
  );
  const data = await res.json();
  const rate = data.rates[params.currency.toUpperCase()] || null;

  // Return the JSX for the page
  return (
    <div>
      <h1>{`1 USD to ${params.currency.toUpperCase()}`}</h1>
      <p>{`Exchange Rate: ${rate ? rate.toFixed(2) : "N/A"}`}</p>
    </div>
  );
}
