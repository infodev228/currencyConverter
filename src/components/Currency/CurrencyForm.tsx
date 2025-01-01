"use client";
import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import CurrencySelector from "../CurrencySelector";
import SwapHorizontalCircleOutlinedIcon from "@mui/icons-material/SwapHorizontalCircleOutlined";

export default function CurrencyForm() {
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("INR");
  const [conversionRate, setConversionRate] = useState<number | null>(null);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch currencies and conversion rate
  useEffect(() => {
    const getCurrencyData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/currencyConvert");
        if (!response.ok) {
          throw new Error("Failed to fetch exchange rates");
        }
        const data = await response.json();
        if (data && data.rates) {
          setCurrencies(Object.keys(data.rates));
          setConversionRate(data.rates[toCurrency] || null);
          console.log(Object.keys(data.rates));
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getCurrencyData();
  }, [fromCurrency, toCurrency]);

  // Calculate converted amount
  useEffect(() => {
    if (conversionRate) {
      const result = amount * conversionRate;
      setConvertedAmount(result);
    }
  }, [amount, conversionRate]);

  // Swap Currencies
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: { xs: "100%", md: "29ch" } },
        // width: { xs: "100%", md: "auto" },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <div> */}
      <TextField
        label="Amount"
        type="number"
        variant="outlined"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        sx={{ xs: "100%", md: "30%" }}
      />

      <CurrencySelector
        label="From"
        defaultCurrency="USD"
        currencies={currencies}
        selectedCurrency={fromCurrency}
        handleCurrencyChange={(e: any) => setFromCurrency(e.target.value)}
      />

      <Typography onClick={handleSwap} component="span" sx={{ m: 0 }}>
        <SwapHorizontalCircleOutlinedIcon
          fontSize={"large"}
          sx={{ mt: 2, color: "#E5133A" }}
        />
      </Typography>

      <CurrencySelector
        label="To"
        defaultCurrency="INR"
        currencies={currencies}
        selectedCurrency={toCurrency}
        handleCurrencyChange={(e: any) => setToCurrency(e.target.value)}
      />

      {error && <Typography color="error">{error}</Typography>}

      {convertedAmount !== null && !loading && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
        </Typography>
      )}
      {/* </div> */}
      {loading && <CircularProgress sx={{ mt: 2, color: "#E5133A" }} />}
    </Box>
  );
}
