const BASE_COLOR = "black";
export const COLORS = {
	black: {
		h: 0,
		s: 0,
		l: 0,
	},
	red: {
		h: 360,
		s: 100,
		l: 50,
	},
};

export function getColor({
	alpha = 1,
	color = COLORS[BASE_COLOR],
	luminosity,
} = {}) {
	const { h, s, l } = color;

	return `hsla(${h}, ${s}%, ${luminosity || l}%, ${alpha})`;
}

export function black({ alpha = 1, luminosity = 0 } = {}) {
	return `hsla(0, 0%, ${luminosity}%, ${alpha})`;
}
