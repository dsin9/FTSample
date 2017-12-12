import './assets/style/bootstrap.fixes.css';
import './assets/bootstrap.css';
import './assets/bootswatch.css';
import './assets/style/font-awesome.min.css';
import './assets/style/site-footer.css';
import './assets/style/modal-smt.css';
import './index.css';
import './App.css';
import './styles/css/auto-suggest.css';
import './styles/css/theme-classicfipmt.css';
import './styles/css/theme-moderndark.css';
import './styles/css/theme-modernlight.css';
import './styles/css/theme-pmwgrayflat.css';
import './styles/css/theme-pmworiginal.css';


import React from 'react';
import ReactDOM from 'react-dom';
import Main from './routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import * as basketActions from './actions/basketActions';
import routes from './routes';

const store = configureStore();
store.dispatch(basketActions.fetchBaskets());

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>
        ,
        document.getElementById('root')
    )
}

render(Main)

// if (module.hot) {
//     module.hot.accept('./routes', () => {
//         render(App)
//     })
// }


