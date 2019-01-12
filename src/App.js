import React from "react";
import { Router, Route } from "react-router-dom";
import styled from "styled-components/macro";

import history from "utils/history";

import { PrivateRoute } from "components/PrivateRoute";
import { AuthProvider } from "providers/AuthContext";

import { AuthCallback } from "containers/AuthCallback";
import { Home } from "containers/Home";
import { Login } from "containers/Login";

import { GlobalStyle } from "styles/GlobalStyle";

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;

export default function App() {
	return (
		<Router history={history}>
			<Wrapper>
				<GlobalStyle />

				<AuthProvider>
					<PrivateRoute exact path="/" component={Home} />
					<Route path="/login" render={props => <Login {...props} />} />
					<Route path="/auth" render={props => <AuthCallback {...props} />} />
				</AuthProvider>
			</Wrapper>
		</Router>
	);
}
