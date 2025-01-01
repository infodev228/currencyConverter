export async function GET(request: any) {
  // Fetch data from JSONPlaceholder API
  const response = await fetch(
    "https://api.exchangerate-api.com/v4/latest/USD"
  );

  // Check if the response is successful
  if (!response.ok) {
    return new Response(JSON.stringify({ message: "Failed to fetch data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Parse the response data as JSON
  const data = await response.json();

  // Return the fetched data as a JSON response
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
