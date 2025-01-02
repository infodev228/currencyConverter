"use client";
import { useState, useEffect } from "react";
import { Box, TextField, CircularProgress, Typography } from "@mui/material";
import CurrencySelector from "../CurrencySelector";
import SwapHorizontalCircleOutlinedIcon from "@mui/icons-material/SwapHorizontalCircleOutlined";

export default function CurrencyForm() {
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [rawAmount, setRawAmount] = useState<string>("1"); // Unformatted
  const [displayAmount, setDisplayAmount] = useState<string>("$1.00"); // Formatted
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("INR");
  const [conversionRate, setConversionRate] = useState<number | null>(null);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [, setCurrencySymbol] = useState<string>("$");

  useEffect(() => {
    const getCurrencyData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/currencyConvert");
        if (!response.ok) throw new Error("Failed to fetch rates");
        const data = await response.json();
        if (data && data.rates) {
          setCurrencies(Object.keys(data.rates));
          setConversionRate(data.rates[toCurrency] || null);
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    getCurrencyData();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (conversionRate && rawAmount) {
      const result = parseFloat(rawAmount) * conversionRate;
      setConvertedAmount(result);
    }
  }, [rawAmount, conversionRate]);

  useEffect(() => {
    const symbol = getCurrencySymbol(fromCurrency);
    setCurrencySymbol(symbol);
    formatAmount(rawAmount, fromCurrency);
  }, [fromCurrency]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value.replace(/[^\d.]/g, ""); // Allow only numbers and dots
    setRawAmount(rawInput);
    setDisplayAmount(rawInput); // Temporarily show unformatted while typing
  };

  const handleBlur = () => {
    formatAmount(rawAmount, fromCurrency);
  };

  const formatAmount = (value: string, currencyCode: string) => {
    if (!value) {
      setDisplayAmount("");
      return;
    }
    const formatted = Number(value).toLocaleString("en", {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: 2,
    });
    setDisplayAmount(formatted);
  };

  const getCurrencySymbol = (currencyCode: string): string => {
    try {
      return (0)
        .toLocaleString("en", {
          style: "currency",
          currency: currencyCode,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
        .replace(/\d/g, "")
        .trim();
    } catch (error) {
      console.log(error);
      console.error("Invalid currency code:", currencyCode);
      return "$";
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: { xs: "100%", md: "29ch" } },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <Typography variant="h6">{displayAmount}</Typography> */}

      <TextField
        label="Amount"
        variant="outlined"
        value={displayAmount}
        onChange={handleAmountChange}
        onBlur={handleBlur} // Format on blur
        sx={{ width: "100%" }}
      />

      <CurrencySelector
        label="From"
        defaultCurrency="USD"
        currencies={currencies}
        selectedCurrency={fromCurrency}
        handleCurrencyChange={(e: any) => {
          const newCurrency = e.target.value;
          setFromCurrency(newCurrency);
          setCurrencySymbol(getCurrencySymbol(newCurrency));
          formatAmount(rawAmount, newCurrency);
        }}
      />

      <Typography onClick={() => setFromCurrency(toCurrency)} component="span">
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
          {displayAmount} ={" "}
          {convertedAmount.toLocaleString("en", {
            style: "currency",
            currency: toCurrency,
          })}
        </Typography>
      )}
      {loading && <CircularProgress sx={{ mt: 2, color: "#E5133A" }} />}
    </Box>
  );
}
