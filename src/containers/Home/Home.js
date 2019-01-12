import React from "react";

import { Header } from "components/Header";

import { Main, Wrapper } from "./style";

export function Home() {
	return (
		<Wrapper>
			<Header />

			<Main>
				<p>I could have been one</p>
			</Main>
		</Wrapper>
	);
}
