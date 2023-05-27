import { component$ } from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import type { DocumentHead } from "@builder.io/qwik-city";

import "./global.css";

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Dont remove the `<head>` and `<body>` elements.
	 */

	return (
		<QwikCityProvider>
			<head>
				<meta charSet="utf-8" />
				<RouterHead />
			</head>
			<body lang="ar" dir="rtl">
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCityProvider>
	);
});

export const head: DocumentHead = {
	title: "ذاكرلي",
	meta: [
		{
			name: "description",
			content: "تطبيق ويب يساعد الطلبة على المذاكرة",
		},
	],
};
