/*
O arquivo _app.tsx é usado para envolver todos os seus componentes de página 
com uma camada de lógica de nível superior. Ele é carregado uma vez, no lado do cliente, 
quando o aplicativo é inicializado, e é útil para configurar o layout comum, 
adicionar estilos globais, adicionar provedores de contexto ou roteadores, entre outras coisas.
*/

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
