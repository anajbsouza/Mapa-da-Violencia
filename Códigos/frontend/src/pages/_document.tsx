/*
O arquivo _document.tsx é usado para personalizar a estrutura HTML gerada pelo Next.js 
para todas as páginas do seu aplicativo. Ele é carregado apenas no servidor durante 
a renderização inicial e é útil para adicionar metatags, scripts, estilos ou outras 
configurações que são necessárias para todas as páginas.
*/

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
