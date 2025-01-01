"use client";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CurrencyConverter from "@/components/CurrencyConverter";

export default function cunverter() {
  return (
    <>
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
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" }, mb: 2 }}
          >
            Need to make an international business payment? Take a look at our
            live foreign exchange rates.
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
                Send secure international business payments in XX currencies,
                all at competitive rates with no hidden fees.
              </Typography>

              <Box sx={{ mt: 4 }}>
                {/* Ensure the input field is full width on mobile */}
                <CurrencyConverter />
              </Box>

              <Typography
                sx={{
                  color: "#1A1A1A",
                  fontFamily: "Roboto",
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: "400",
                  lineHeight: "24px",
                  marginTop: "20px",
                  textAlign: { xs: "center", md: "left" }, // Center for small screens
                }}
              >
                3.00 Indian Rupees = <br />
                3.00 Indian Rupees <br />
                1 INR = 1.00000 INR <br />1 INR = 1.00000 INR
              </Typography>
            </CardContent>

            <CardActions
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" }, // Center button on small screens
                padding: "16px",
              }}
            >
              <Button
                size="large"
                variant="contained"
                sx={{ backgroundColor: "#E5133A" }}
              >
                Convert
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </>
  );
}
