import React from "react";

import { Button } from "components/Button";
import { useAuth } from "providers/AuthContext";

import { Wrapper } from "./style";

export function Header() {
	const auth = useAuth();

	return (
		<Wrapper>
			<h1>Contender</h1>
			<Button type="button" onClick={auth.logout}>
				Log out
			</Button>
		</Wrapper>
	);
}
