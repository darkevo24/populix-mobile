import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './App';
import { store,persistor } from './redux/store';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

const Root = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  )

registerRootComponent(Root);
