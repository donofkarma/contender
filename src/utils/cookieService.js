export function createCookie(name, value, expires) {
	let expiresAt = "";

	// no expiration date set
	if (!expires) {
		// default to one day
		let date = new Date();
		date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
		expiresAt = "; expires=" + date.toGMTString();
	}

	document.cookie = name + "=" + value + expiresAt + "; path=/";
}

export function readCookie(name) {
	const nameEQ = name + "=";
	const ca = document.cookie.split(";");

	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];

		while (c.charAt(0) === " ") {
			c = c.substring(1, c.length);
		}

		if (c.indexOf(nameEQ) === 0) {
			return c.substring(nameEQ.length, c.length);
		}
	}

	return null;
}

export function eraseCookie(name) {
	createCookie(name, "", -1);
}
