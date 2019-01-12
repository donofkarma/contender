// @flow

import React from "react";
import type { Node } from "react";

import { Wrapper } from "./style";

type Props = {
	children: Node,
	variant?: String,
};

export function Button(props: Props) {
	const { children, ...rest } = props;

	return <Wrapper {...rest}>{children}</Wrapper>;
}
