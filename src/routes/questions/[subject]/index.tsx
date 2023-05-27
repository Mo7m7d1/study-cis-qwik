import { useLocation } from "@builder.io/qwik-city";
import questions from "../../../utils/questions.json";
import { QuestionCard } from "~/components";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
	const subject = decodeURI(useLocation().url.pathname.split("/")[2]);
	const subjectQuestions = questions.filter(
		(question) => question.subject === subject
	);

	return (
		<div class="text-white flex flex-col items-center h-[80vh] mt-8">
			<h1 class="text-3xl font-semibold mb-8 text-gray-300">
				اسئلة مادة <span class="text-yellow-500">{subject}</span>
			</h1>
			<div class="grid grid-cols-1 justify-items-center gap-4 w-full pb-4">
				{subjectQuestions.map((question) => (
					<QuestionCard
						key={question.id}
						question={question.question}
						answer={question.answer}
					/>
				))}
			</div>
		</div>
	);
});
