// components/CurrencySelector.tsx
import React from "react";
import { TextField, MenuItem, Typography } from "@mui/material";
import Image from "next/image";
import "./styles.css";

interface CurrencySelectorProps {
  currencies: string[];
  defaultCurrency: string;
  handleCurrencyChange: any;
  selectedCurrency: any;
  label: string;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  currencies,
  defaultCurrency,
  handleCurrencyChange,
  label,
}) => {
  const getCountryName = (countryCode: string): string => {
    const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(countryCode) || "Unknown Country";
  };
  return (
    <TextField
      select
      label={label}
      defaultValue={defaultCurrency}
      onChange={handleCurrencyChange}
      //   sx={{ width: "30ch" }}
      id="select-currency"
      //   sx={{ display: "flex", alignItems: "center" }}
      className="selectCurrency"
    >
      {currencies.map((option) => (
        <MenuItem key={option} value={option}>
          <Image
            src={`https://flagsapi.com/${option.substring(0, 2)}/flat/64.png`}
            width={35}
            height={35}
            alt="Currency Flag"
            style={{ marginRight: "8px" }}
          />
          <Typography
            component="span"
            // sx={{ position: "relative", bottom: "14px" }}
          >
            {option} - {getCountryName(option.substring(0, 2))}
          </Typography>
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CurrencySelector;
