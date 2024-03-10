import { Roboto, Roboto_Condensed } from "next/font/google";

export const roboto = Roboto({
	subsets: ["latin", "latin-ext"],
	weight: ["100", "300", "400", "500", "700", "900"],
});

export const roboto2 = Roboto_Condensed({
	subsets: ["latin", "latin-ext"],
	weight: ["300", "400", "700"],
});

export const fonts = {
	heading: roboto2.style.fontFamily,
	body: roboto.style.fontFamily,
};
