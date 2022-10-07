import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/provider";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
}

export default MyApp