// @flow

import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button } from "components/Button";
import { FormError, FormInput, FormLabel, FormRow } from "components/Form";
import { useAuth } from "providers/AuthContext";

import { Container, Content } from "./style";

type LoginProps = {
	location: {
		state: {
			error?: string,
			from?: string,
		},
	},
};

export function Login(props: LoginProps) {
	const auth = useAuth();
	const { location } = props;
	const [loginError, setLoginError] = useState(null);
	const [isLinkSent, setIsLinkSent] = useState(false);

	useEffect(() => {
		const errorMessage = (location.state && location.state.error) || null;

		setLoginError(errorMessage);
	}, []);

	const handleSubmit = (values, actions) => {
		// clear any form errors from auth
		setLoginError(null);

		auth.login(values, res => {
			if (res.status === 400) {
				// allow the user to submit the form again
				actions.setSubmitting(false);

				// set the new error
				setLoginError(res.msg);
			} else {
				setIsLinkSent(true);
			}
		});
	};

	if (auth.isAuthenticated()) {
		const from = (location.state && location.state.from) || "/";

		return <Redirect to={from} />;
	}

	return (
		<Container>
			<Content>
				<h1>Contender</h1>
				{isLinkSent ? (
					<p>We've sent you a login link. Please check your email.</p>
				) : (
					<Formik
						initialValues={{ email: "" }}
						validationSchema={Yup.object().shape({
							email: Yup.string()
								.email("Please enter a valid email address")
								.required("Please enter a valid email address"),
						})}
						onSubmit={handleSubmit}
						render={({ errors, status, touched, isSubmitting }) => (
							<Form>
								{loginError && (
									<FormRow>
										<FormError>{loginError}</FormError>
									</FormRow>
								)}
								<FormRow>
									<FormLabel name="email">Email</FormLabel>
									<FormInput
										id="email"
										name="email"
										placeholder="rick_c137@gmail.com"
										type="email"
									/>
								</FormRow>
								<FormRow>
									<Button
										type="submit"
										disabled={isSubmitting}
										variant="primary"
									>
										{isSubmitting ? `Authenticating...` : `Log in`}
									</Button>
								</FormRow>
							</Form>
						)}
					/>
				)}
			</Content>
		</Container>
	);
}
