// @flow

import React from "react";
import type { Node } from "react";

import { Row } from "./style";

type Props = {
	children: Node,
};

export function FormRow(props: Props) {
	const { children } = props;

	return <Row>{children}</Row>;
}
