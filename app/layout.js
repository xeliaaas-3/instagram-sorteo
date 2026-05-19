import "./globals.css";

export const metadata = {
  title: "Sorteo Instagram",
  description: "Sorteador de Instagram elegante"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}