// app/exchange/[currency]/page.tsx
export default async function ExchangePage({
  params,
}: {
  params: { currency: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/exchange-rate?base=USD`
  );
  const data = await res.json();
  const rate = data.rates[params.currency.toUpperCase()];

  return (
    <div>
      <h1>{`1 USD to ${params.currency.toUpperCase()}`}</h1>
      <p>{`Exchange Rate: ${rate.toFixed(2)}`}</p>
    </div>
  );
}
