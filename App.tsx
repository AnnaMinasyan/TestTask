import React from 'react';
import { WHITE } from './src/assets/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Provider as ReduxProvider } from 'react-redux';
import store from './src/store';
import Main from './src/screens/main';

function App(): JSX.Element {

  const cache = new InMemoryCache()

  const client = new ApolloClient({
    uri: 'https://api.quickclick.online/content/graphql',
    cache,
    defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
  })
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ReduxProvider store={store}>

        <ApolloProvider client={client}>
          <Main />
        </ApolloProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}

export default App;
