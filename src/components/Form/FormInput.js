// @flow

import React, { Fragment } from "react";
import type { Node } from "react";
import { ErrorMessage } from "formik";

import { FormError } from "./FormError";
import { Input } from "./style";

type Props = {
	children: Node,
	component: string,
	name: string,
	placeholder?: string,
	type: string,
	value?: string,
};

export function FormInput(props: Props) {
	const { children, name } = props;

	return (
		<Fragment>
			<Input {...props}>{children}</Input>
			<ErrorMessage name={name} component={FormError} />
		</Fragment>
	);
}
