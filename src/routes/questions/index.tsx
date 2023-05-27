import { component$ } from "@builder.io/qwik";
import subjects from "../../utils/subjects.json";
import { SubjectCard } from "~/components";

export default component$(() => {
	return (
		<div class="text-white flex flex-col items-center mt-14 lg:mt-28 mx-4 my-10">
			<h1 class="text-4xl font-semibold mb-8 text-gray-200">اختر المادة</h1>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
				{subjects.map((subject) => (
					<SubjectCard
						key={subject.id}
						subject={subject.title}
						link={`${subject.title}`}
					/>
				))}
			</div>
		</div>
	);
});
