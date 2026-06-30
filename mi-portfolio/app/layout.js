import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Estudiante de Licenciatura en Sistemas en la UNLa. Portfolio web de proyectos y habilidades.",
  icons: {
    icon: "/assets/images/maletin.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
