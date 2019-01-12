import { black } from "styles/color";

const BASE_FONT_SIZE = 16;
export const WEIGHTS = {
	bold: "700",
	regular: "400",
};
const BASE_FONT_WEIGHT = WEIGHTS.regular;

function pxToRem(px) {
	return `${px / BASE_FONT_SIZE}rem`;
}

export function getFontStyle({
	size = BASE_FONT_SIZE,
	weight = BASE_FONT_WEIGHT,
} = {}) {
	return `
    font-size: ${pxToRem(size)};
    font-weight: ${weight};
  `;
}

export function getDefaultFontStyle() {
	return `
    color: ${black({ luminosity: 20 })};
    font-family: sans-serif;
    font-size: ${BASE_FONT_SIZE}px;
    font-weight: ${BASE_FONT_WEIGHT};
  `;
}
