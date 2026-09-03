import type { Metadata } from "next";
import "./globals.css";
import { AmplitudeProvider } from "./components/AmplitudeProvider";

export const metadata: Metadata = {
  title: "Manejo Inteligente de Animais | especies",
  description: "Ajudando instituições a gerir melhor sua operação e dedicar mais tempo ao cuidado com os animais.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AmplitudeProvider>{children}</AmplitudeProvider>
      </body>
    </html>
  );
}
