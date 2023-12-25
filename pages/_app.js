import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import '@/styles/globals.css';
import Layout from '@/components/Layout.js';

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";

export const client = new ApolloClient({
  uri: `${STRAPI_URL}/graphql`,
  cache: new InMemoryCache(),
  defaultOptions: {
    mutate: {
      errorPolicy: "all",
    },
    query: {
      errorPolicy: "all",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </ApolloProvider>
  );
}