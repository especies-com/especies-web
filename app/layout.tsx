import type { Metadata } from "next";
import "./globals.css";
import { AmplitudeProvider } from "./components/AmplitudeProvider";

export const metadata: Metadata = {
  title: "especies | Gestão de fauna simples. Mais tempo para cuidar.",
  description:
    "A especies é uma plataforma de tecnologia para gestão de instituições de fauna. Conecta informações, processos e operações para simplificar a gestão e dedicar mais tempo ao cuidado com os animais.",
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
