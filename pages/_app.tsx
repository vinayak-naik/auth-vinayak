import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as AuthProvider } from "next-auth/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider session={pageProps.session}>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
