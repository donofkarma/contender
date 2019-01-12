import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuth } from "providers/AuthContext";

export function PrivateRoute({ component: Component, ...otherProps }) {
	const auth = useAuth();

	return (
		<Route
			{...otherProps}
			render={props => {
				if (auth.isAuthenticated()) {
					return <Component {...props} />;
				}

				return (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location },
						}}
					/>
				);
			}}
		/>
	);
}
