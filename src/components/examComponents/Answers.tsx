import Question from "./Question";
import NextButton from "./NextButton";
import type { questionType } from "../../../types";
import { $, component$, useSignal } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export type AnswersProps = {
	questions: questionType[];
	selectedOptions: number[];
};

export default component$(({ questions, selectedOptions }: AnswersProps) => {
	const currentQuestionIndex = useSignal<number>(0);
	const nav = useNavigate();

	const handleNextClick = $(() => {
		if (currentQuestionIndex.value < questions.length - 1) {
			currentQuestionIndex.value++;
		}

		if (currentQuestionIndex.value === questions.length - 1) nav("/exams");
	});

	return (
		<div class="flex justify-center items-center h-[80vh]">
			<div class="bg-theme shadow-lg shadow-secondary rounded-lg">
				<div class="m-6">
					<Question
						questions={questions}
						currentQuestionIndex={currentQuestionIndex.value}
						correctOptionIndex={
							questions[currentQuestionIndex.value].correct_answer
						}
						selectedOptionIndex={selectedOptions[currentQuestionIndex.value]}
						handleOptionClick={$(() => {})}
					/>
					<NextButton
						isLastQuestion={currentQuestionIndex.value === questions.length - 1}
						disabled={false}
						onClick={handleNextClick}
					/>
				</div>
			</div>
		</div>
	);
});
