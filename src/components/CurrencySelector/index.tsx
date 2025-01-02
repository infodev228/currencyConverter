// components/CurrencySelector.tsx
import React from "react";
import { TextField, MenuItem, Typography } from "@mui/material";
import Image from "next/image";
import "./styles.css";

interface CurrencySelectorProps {
  currencies: string[];
  //   defaultCurrency: string;
  handleCurrencyChange: any;
  selectedCurrency: any;
  label: string;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  currencies,
  handleCurrencyChange,
  label,
  selectedCurrency,
}) => {
  const getCountryName = (countryCode: string): string => {
    const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(countryCode) || "Unknown Country";
  };
  return (
    <TextField
      select
      label={label}
      value={selectedCurrency}
      onChange={handleCurrencyChange}
      id="select-currency"
      className="selectCurrency"
    >
      {currencies.map((option) => (
        <MenuItem key={option} value={option}>
          <Image
            src={`https://flagsapi.com/${option.substring(0, 2)}/flat/64.png`}
            width={25}
            height={25}
            alt="Currency Flag"
            style={{ marginRight: "8px" }}
          />
          <Typography component="span">
            {option} - {getCountryName(option.substring(0, 2))}
          </Typography>
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CurrencySelector;
