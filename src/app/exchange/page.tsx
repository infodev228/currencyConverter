// app/exchange/page.tsx

import CurrencyForm from "@/components/Currency/CurrencyForm";
import { Padding } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

export default function ExchangePage() {
  return (
    <main>
      <Container maxWidth={false} disableGutters>
        <Box sx={{ bgcolor: "#F0F5FF", height: "330px", position: "relative" }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontSize: {
                xs: "2rem",
                md: "60px",
                fontFamily: "Roboto",
                fontWeight: "700",
                lineHeight: "100px",
              },
            }}
          >
            Currency Converter
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontSize: { xs: "0.875rem", md: "1rem" },
              padding: { xs: "0 5px" },
              mb: 2,
            }}
          >
            Need to make an international business payment? Explore our live
            foreign exchange rates and convert currency with ease.
          </Typography>
        </Box>

        <Box
          sx={{
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            position: "relative",
            top: { xs: "-50px", md: "-177px" }, // Adjust overlap for mobile
            padding: { xs: "0 10px", md: "0" },
          }}
        >
          <Card
            sx={{ width: { xs: "100%", sm: "90%", md: 900 }, boxShadow: 3 }}
          >
            <CardContent>
              <Typography
                variant="body1"
                sx={{
                  color: "#1A1A1A",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: { xs: "24px", md: "32px" },
                  fontWeight: "700",
                  lineHeight: "1.4",
                }}
              >
                Make fast and affordable <br />
                international business payments
              </Typography>

              <Typography
                sx={{
                  color: "#1A1A1A",
                  fontFamily: "Roboto",
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: "400",
                  lineHeight: "24px",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Exchange rates provided by this API are updated once per day and
                may not reflect real-time market values. Rates are for
                informational purposes only and should not be used for financial
                transactions requiring precise data. Please verify rates with
                your financial institution before proceeding with any exchange.
              </Typography>

              <Box sx={{ mt: 4 }}>
                {/* Ensure the input field is full width on mobile */}
                <CurrencyForm />
              </Box>
            </CardContent>

            <CardActions
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" }, // Center button on small screens
                padding: "16px",
              }}
            ></CardActions>
          </Card>
        </Box>
      </Container>
    </main>
  );
}
