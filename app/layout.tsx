import type { Metadata } from "next";
import "./globals.css";
import { AmplitudeProvider } from "./components/AmplitudeProvider";

export const metadata: Metadata = {
  title: "especies | O cuidado conecta. A especies reúne.",
  description:
    "Conheça o aplicativo especies: manejo, veterinária, biologia e gestão conectados ao cuidado com a fauna. Participe da pesquisa e ajude a construir a plataforma.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AmplitudeProvider>{children}</AmplitudeProvider>
      </body>
    </html>
  );
}
