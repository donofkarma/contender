// @flow

import React from "react";
import type { Node } from "react";

import { Label } from "./style";

type Props = {
	children: Node,
	className?: string,
	name: string,
};

export function FormLabel(props: Props) {
	const { children, className, name } = props;

	return (
		<Label className={className} htmlFor={name}>
			{children}
		</Label>
	);
}
