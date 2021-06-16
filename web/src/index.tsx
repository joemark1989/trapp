import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
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
