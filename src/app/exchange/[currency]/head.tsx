// Dynamic Head Tags for different pages:
export default function Head({ params }: { params: { currency: string } }) {
  return (
    <>
      <title>{`Exchange ${params.currency.toUpperCase()} | FX Rates`}</title>
      <meta
        name="description"
        content={`Check the exchange rate for ${params.currency.toUpperCase()}.`}
      />
    </>
  );
}