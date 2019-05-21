import React, { Component } from 'react'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import indexRoutes from 'routes/index.js'
import 'assets/css/senti.css'

import TProvider from 'components/Localization/TProvider'

import { MuiThemeProvider } from '@material-ui/core';
import { lightTheme } from 'assets/themes';

export const hist = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
					<TProvider>
						<MuiThemeProvider theme={lightTheme}>
							<Router history={hist}>
								<Switch>
									{indexRoutes.map((prop, key) => {
										return <Route path={prop.path} component={prop.component} key={key} exact={prop.exact ? true : false} />;
									})}
								</Switch>
							</Router>
						</MuiThemeProvider>
					</TProvider>
			</Provider>
		)
	}
}


export default App