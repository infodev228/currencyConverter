"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { InputAdornment } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // Currency icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CurrencySelector from "../CurrencySelector";

// const currencies = [
//   {
//     value: "USD",
//     label: "$",
//   },
//   {
//     value: "EUR",
//     label: "€",
//   },
//   {
//     value: "BTC",
//     label: "฿",
//   },
//   {
//     value: "JPY",
//     label: "¥",
//   },
// ];

export default function CurrencyConverter() {
  const [currencies, setCurrencies] = useState<any>([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [conversionRate, setConversionRate] = useState<any>(null);
  const [convertedAmount, setConvertedAmount] = useState<any>(null);

  useEffect(() => {
    const getCurrency = async () => {
      const response = await fetch("/api/currencyConvert");
      const data = await response.json();
      console.log("===response", data);
      if (data) {
        // console.log("======", Object.keys(data.rates));
        setCurrencies(Object.keys(data.rates));
        setConversionRate(data.rates[toCurrency]);
      }
    };

    getCurrency();
  }, [fromCurrency, toCurrency]);
  // Calculate converted amount
  useEffect(() => {
    if (conversionRate) {
      let result = amount * conversionRate;
      setConvertedAmount(result);
      //   onConversion(result);
    }
  }, [amount, conversionRate]);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        width: { xs: "100%", md: "auto" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency-native"
          label="Amount"
          variant="outlined"
          defaultValue="1"
          onChange={(e: any) => setAmount(e.target.value)}
        />

        <CurrencySelector
          currencies={currencies}
          defaultCurrency="USD"
          selectedCurrency={fromCurrency}
          handleCurrencyChange={(e: any) => setFromCurrency(e.target.value)}
        />
        {/* Later will add here swap */}
        <CurrencySelector
          currencies={currencies}
          defaultCurrency="INR"
          selectedCurrency={toCurrency}
          handleCurrencyChange={(e: any) => setToCurrency(e.target.value)}
        />
      </div>
    </Box>
  );
}
