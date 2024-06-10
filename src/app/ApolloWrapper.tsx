"use client"
import client from '@/lib/client';
import { ApolloProvider } from '@apollo/client';

const ApolloProviderWrapper = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};

export default ApolloProviderWrapper;