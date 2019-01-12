import styled from "styled-components/macro";

import { black } from "styles/color";
import { SPACING, getSpacing } from "styles/dimensions";

export const Wrapper = styled.button`
	margin: 0;
	padding: ${getSpacing()} ${getSpacing(SPACING.large)};
	background: none;
	border: 1px solid ${black()};
	justify-content: center;
	cursor: pointer;
`;
