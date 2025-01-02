"use client";

import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/exchange");
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {/* <CurrencyForm /> */}
      </Typography>
    </div>
  );
}
