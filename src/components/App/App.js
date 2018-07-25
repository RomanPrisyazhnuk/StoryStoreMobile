import { addListener } from '../../redux/utils/redux';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from '../../router';
import React from 'react';

const App = ({ dispatch, nav }) => {
    return (
        <AppNavigator
            navigation={addNavigationHelpers({
                dispatch,
                state: nav,
                addListener
            })}/>
    );
};

export default App;
