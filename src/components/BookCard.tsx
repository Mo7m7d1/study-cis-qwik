import { component$ } from "@builder.io/qwik";
import type { BookCardProps } from "../../types";

export default component$(({ title, link }: BookCardProps) => {
	return (
		<div class="bg-theme shadow-xl shadow-secondary text-white p-7 rounded-lg w-full">
			<h2 class="text-lg font-semibold mb-6">{title}</h2>
			<a href={link} target="_blank" class="btn">
				تحميل
			</a>
		</div>
	);
});
