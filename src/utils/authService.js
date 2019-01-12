import auth0 from "auth0-js";

import { createCookie, readCookie, eraseCookie } from "utils/cookieService";
import history from "utils/history";

export default class authService {
	auth0 = new auth0.WebAuth({
		domain: process.env.REACT_APP_AUTH_DOMAIN,
		clientID: process.env.REACT_APP_AUTH_CLIENT_ID,
		redirectUri: process.env.REACT_APP_AUTH_CALLBACK_URL,
		responseType: "id_token token",
		scope: "email openid profile",
	});

	login = (user, cb) => {
		this.auth0.passwordlessStart(
			{
				connection: "email",
				email: user.email,
				send: "link",
			},
			(err, res) => {
				const response = {
					msg: "",
					status: 200,
				};

				if (err) {
					response.status = 400;
					response.msg = "There was a problem";
				}

				cb(response);
			}
		);
	};

	handleAuthentication = cb => {
		this.auth0.parseHash((err, authResult) => {
			if (authResult && authResult.accessToken) {
				this.setSession(authResult, cb);
			} else if (err) {
				cb(err);
			}
		});
	};

	setSession = (authResult, cb) => {
		// set the time that the Access Token will expire at
		const expiresAt = JSON.stringify(
			authResult.expiresIn * 1000 + new Date().getTime()
		);

		// create a cookie object
		const user = {
			access_token: authResult.accessToken,
			expires_at: expiresAt,
			name: authResult.idTokenPayload.name || authResult.idTokenPayload.email,
		};

		createCookie("contender_user", JSON.stringify(user), expiresAt);

		// navigate to the home route
		cb({
			error: false,
		});
	};

	logout = () => {
		this.clearSession();

		history.push({
			pathname: "/login",
		});
	};

	clearSession() {
		eraseCookie("contender_user");
	}

	isAuthenticated() {
		const cookieData = readCookie("contender_user") || "{}";
		const cookie = JSON.parse(cookieData);
		const isAuthenticated =
			cookie.expires_at && new Date().getTime() < cookie.expires_at;

		if (!isAuthenticated) {
			this.clearSession();
		}

		return isAuthenticated;
	}

	getAccessToken() {
		const cookieData = readCookie("contender_user") || "{ access_token: null }";
		const cookie = JSON.parse(cookieData);

		return cookie.access_token;
	}

	getSocketUrl() {
		const cookieData = readCookie("contender_user") || "{ access_token: null }";
		const cookie = JSON.parse(cookieData);

		return cookie.ws_url;
	}
}
