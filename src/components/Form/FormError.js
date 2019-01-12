// @flow

import React from "react";

import { ErrorMessage } from "./style";

type Props = {
	children: string,
};

export function FormError(props: Props) {
	const { children } = props;

	return <ErrorMessage>{children}</ErrorMessage>;
}
