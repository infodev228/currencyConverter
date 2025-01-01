"use client";

import CurrencyForm from "@/components/Currency/CurrencyForm";
import { Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        <CurrencyForm />
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </div>
  );
}
