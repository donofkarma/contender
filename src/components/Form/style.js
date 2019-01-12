import styled from "styled-components/macro";
import { Field } from "formik";

import { COLORS, black, getColor } from "styles/color";
import { SPACING, getSpacing } from "styles/dimensions";

export const ErrorMessage = styled.div`
	color: ${getColor({ color: COLORS.red })};
	input + &,
	select + &,
	textarea + & {
		margin-top: ${getSpacing()};
	}
`;

export const Label = styled.label`
	display: block;
`;

export const Input = styled(Field)`
	padding: ${getSpacing()};
	width: 100%;
	border: 1px solid ${black({ luminosity: 40 })};

	label + & {
		margin-top: ${getSpacing(SPACING.small)};
	}
`;

export const Row = styled.div`
	margin-bottom: ${getSpacing()};
`;
