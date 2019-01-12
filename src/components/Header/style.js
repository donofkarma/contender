import styled from "styled-components/macro";

import { getSpacing } from "styles/dimensions";

export const Wrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${getSpacing()};

	h1 {
		margin: 0;
	}
`;
