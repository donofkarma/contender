import React from "react";

import { useAuth } from "providers/AuthContext";
import history from "utils/history";

import { Container, Content } from "./style";

export function AuthCallback() {
	const auth = useAuth();

	const handleAuthResponse = res => {
		if (res.error) {
			history.push({
				pathname: "/login",
				state: { error: res.error_description },
			});

			return;
		}

		history.push({
			pathname: "/",
		});
	};

	auth.handleAuthentication(handleAuthResponse);

	return (
		<Container>
			<Content>
				<p>Authenticating...</p>
			</Content>
		</Container>
	);
}
