import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { SubjectCardType } from "../../types";

export default component$(({ subject, link, btnText }: SubjectCardType) => {
	const numberOfQuestions = useSignal<number>(10);
	const pageLink = !btnText
		? link
		: `${link}?numberOfQuestions=${numberOfQuestions.value}`;

	return (
		<div class="bg-theme shadow-xl shadow-secondary text-white p-7 rounded-lg">
			<h2 class="text-lg font-semibold mb-6">{subject}</h2>
			<div class="flex justify-between items-center">
				<Link href={pageLink} class="btn">
					{btnText ? btnText : "عرض الاسئلة"}
				</Link>
				{btnText && (
					<select
						value={numberOfQuestions.value}
						onChange$={(e) =>
							(numberOfQuestions.value = parseInt(e.target.value))
						}
						class="w-14 bg-theme border border-gray-700 rounded-md focus:outline-none selection:bg-transparent"
						title="عدد الاسئلة"
					>
						<option value={5}>5</option>
						<option value={10}>10</option>
						<option value={15}>15</option>
						<option value={30}>30</option>
					</select>
				)}
			</div>
		</div>
	);
});
