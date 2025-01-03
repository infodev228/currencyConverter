"use client";

import { currency_list, api } from "../utils/currencyCodes";
import React, { useState, useEffect } from "react";

import "./globals.css";

export default function Home() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");
  const [currencyOptions, setCurrencyOptions] = useState<any>([]);

  // useEffect(() => {
  //   // Populate the currency lists on mount
  //   const fromSelect = document.getElementById("fromCurrency");
  //   const toSelect = document.getElementById("toCurrency");
  //   currency_list.forEach(([code, name]) => {
  //     const option = new Option(`${code} - ${name}`, code);
  //     if (code === "USD") option.selected = true;
  //     fromSelect.append(option);

  //     const optionTo = new Option(`${code} - ${name}`, code);
  //     if (code === "INR") optionTo.selected = true;
  //     toSelect.append(optionTo);
  //   });
  // }, []);
  useEffect(() => {
    // Populate currency options from the list
    const options = currency_list.map(([code, name]) => ({
      code,
      name,
    }));
    setCurrencyOptions(options);
  }, []);

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const handleConversion = async () => {
    if (amount < 1 || isNaN(amount)) {
      setResult("Error: Only numeric values greater than 0 are allowed.");
      return;
    }
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${api}/latest/USD`
    );
    const data = await response.json();
    const fromRate = data.conversion_rates[fromCurrency];
    const toRate = data.conversion_rates[toCurrency];
    const convertedAmount = (amount * (toRate / fromRate)).toFixed(2);

    setResult(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
    setStatus(
      `1 ${fromCurrency} = ${(toRate / fromRate).toFixed(2)} ${toCurrency}`
    );
    // Fetch conversion for AUD to INR
    // const audInrRate =
    //   data.conversion_rates["AUD"] / data.conversion_rates["INR"];
    // const audToInrConversion = (amount * audInrRate).toFixed(2);
    // setAudToInr(`${amount} AUD = ${audToInrConversion} INR`);
  };

  return (
    <>
      <div className="container">
        <h1 id="title">Realtime Currency Converter</h1>
        <img
          src="../coinExchangeSticker.jpg"
          alt="Currency Exchange Icon"
          id="coinSticker"
        />
        <input
          type="number"
          value={amount}
          onChange={(e: any) => setAmount(e.target.value)}
          id="userValue"
        />
        <div className="selecterContainer">
          {/* <div className="flag">
          <img
            src={`https://flagsapi.com/${fromCurrency.substring(
              0,
              2
            )}/flat/64.png`}
            alt={fromCurrency}
          />
        </div> */}
          <select
            id="fromCurrency"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencyOptions.map((option: any) => (
              <option key={option.code} value={option.code}>
                <img
                  src={`https://flagsapi.com/${option.code.substring(
                    0,
                    2
                  )}/flat/64.png`}
                />
                {option.code} - {option.name}
              </option>
            ))}
          </select>

          <button id="switchCurrency" onClick={swapCurrencies}>
            🔁
          </button>
          <select
            id="toCurrency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencyOptions.map((option: any) => (
              <option key={option.code} value={option.code}>
                {option.code} - {option.name}
              </option>
            ))}
          </select>
        </div>
        <p id="status">{status}</p>
        <button id="btn" onClick={handleConversion}>
          Convert
        </button>
        <p id="result">{result}</p>
      </div>
    </>
  );
}
