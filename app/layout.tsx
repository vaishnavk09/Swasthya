import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientThemeProvider from "./components/ClientThemeProvider";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientThemeProvider>
          <AppBar position="static" color="primary" elevation={2}>
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
                <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Swaasthya</Link>
              </Typography>
              <Button color="inherit" component={Link} href="/">Home</Button>
              <Button color="inherit" component={Link} href="/portal">Portal</Button>
            </Toolbar>
          </AppBar>
          <Container maxWidth="xl" sx={{ py: 4 }}>{children}</Container>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
