import GlobalStyle from "../styles";
import Navigation from "../components/Navigation";
import { SWRConfig } from "swr";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {

  const {data , error, isLoading} = useSWR("https://example-apis.vercel.app/api/art", fetcher);


  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{fetcher}}>
        <Navigation />
        <Component {...pageProps} 
        data={data}
        />
      </SWRConfig>
    </>
  );
}
