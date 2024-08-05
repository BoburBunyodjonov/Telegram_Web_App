// Import necessary types
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from './store';

// Define the props interface
interface StoreProviderProps {
    children: ReactNode; // `ReactNode` covers all possible children types
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default StoreProvider;
