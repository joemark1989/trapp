import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { PaginatedProducts } from "./generated/graphql";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          products: {
            keyArgs: ["name"],
            merge(
              existing: PaginatedProducts | undefined,
              incoming: PaginatedProducts
            ): PaginatedProducts {
              return {
                ...incoming,
                products: [...(existing?.products || []), ...incoming.products],
              };
            },
          },
        },
      },
    },
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ColorModeScript />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
