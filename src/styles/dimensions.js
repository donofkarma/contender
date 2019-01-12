export const SPACING = {
	small: 5,
	default: 10,
	large: 20,
};

export function getSpacing(size = SPACING.default) {
	return `${size}px`;
}
