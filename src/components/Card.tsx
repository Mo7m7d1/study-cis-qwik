import { component$ } from "@builder.io/qwik";
import type { CardProps } from "../../types";
import { Link } from "@builder.io/qwik-city";

export default component$(({ title, description, url }: CardProps) => {
	return (
		<div class="flex flex-col items-start px-4 py-5 w-full bg-theme shadow-xl shadow-secondary rounded-lg">
			<div>
				<h5 class="text-xl mb-2">{title}</h5>
				<p class="text-gray-200">{description}</p>
			</div>
			<div class="mt-5 mb-2">
				<Link href={url} class="btn">
					الذهاب إلى الصفحة
				</Link>
			</div>
		</div>
	);
});
