import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "~/components";

export default component$(() => {
	return (
		<>
			<Header />
			<Slot />
		</>
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
