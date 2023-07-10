import type { AppProps } from "next/app";
import { useEffect } from "react";

import AppProvider from "services/hooks";

import { Theme } from "styles/theme";
import { useRouter } from "next/router";
import GlobalStylesMediaQueries from "styles/mediaQueries";
import "bootstrap/dist/css/bootstrap.min.css";

import GlobalStyles from "styles/global";
import Header from "components/Header";
import { useAuth } from "services/hooks/useAuth/useAuth";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    const id = sessionStorage.getItem("@login/id");
    const role = sessionStorage.getItem("@login/role");
    const regExp = new RegExp("(/pet/).*", "gm");
    switch (true) {
      case regExp.test(router.asPath):
        if (!id) {
          router.push("/login");
          alert("Você não possui permissão para acessar esta página");
        } else if (role !== "6" && role !== "7") {
          router.push("/");
          console.log(role);
          alert("Apenas alunos e admins podem acessar esta página");
        }
        break;
      case router.asPath === "/usuarios":
        if (!id) {
          router.push("/login");
          alert("Você não possui permissão para acessar esta página");
        } else if (role !== "6") {
          router.push("/");
          alert("Apenas admins podem acessar esta página");
        }
        break;
    }
  }, [router.asPath]);

  return (
    <Theme>
      <GlobalStylesMediaQueries />
      <AppProvider>
        <>
          <Header />
          <Component {...pageProps} />
        </>
      </AppProvider>

      <GlobalStyles />
    </Theme>
  );
}

export default MyApp;
