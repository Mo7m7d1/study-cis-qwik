import { $, component$, useSignal, useStore, useTask$ } from "@builder.io/qwik";
import {
	Answers,
	NextButton,
	ProgressBar,
	Question,
	QuestionProgress,
	Result,
} from "~/components/examComponents";

import jsonQuestions from "../../../utils/examQuestion.json";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import type { questionType } from "../../../../types";

export default component$(() => {
	const nav = useNavigate();
	const location = useLocation();

	const { subject } = location.params;
	const numberOfQuestions = location.url.searchParams.get("numberOfQuestions");

	const subjectQuestions = useStore(() =>
		jsonQuestions
			.filter((question) => question.subject === subject)
			.sort(() => Math.random() - 0.5)
			.slice(0, parseInt(numberOfQuestions || "10"))
	);

	const currentQuestionIndex = useSignal(0);
	const selectedOptionIndex = useSignal(-1);

	const score = useSignal(0);
	const showResult = useSignal(false);
	const showAnswersModal = useSignal(false);

	const wrongAnswers = useStore<questionType[]>([]);
	const selectedOptions = useStore<number[]>([]);

	const initialTime = 45;
	const timer = useSignal(initialTime);

	const handleOptionClick = $((optionIndex: number) => {
		if (optionIndex !== undefined) selectedOptionIndex.value = optionIndex;
	});

	const handleRestartClick = $(() => {
		currentQuestionIndex.value = 0;
		selectedOptionIndex.value = -1;
		score.value = 0;
		showResult.value = false;
		timer.value = initialTime;
	});

	const handleMenuClick = $(() => {
		currentQuestionIndex.value = 0;
		selectedOptionIndex.value = -1;
		score.value = 0;
		showResult.value = false;
		nav("/exams");
	});

	const onAnswersClick = $(() => {
		// if (wrongAnswers.length === 0) return;
		console.log(showAnswersModal.value);

		showAnswersModal.value = true;
	});

	const handleNextClick = $(() => {
		if (
			selectedOptionIndex.value ===
			subjectQuestions[currentQuestionIndex.value].correct_answer
		) {
			score.value++;
		} else {
			wrongAnswers.push(subjectQuestions[currentQuestionIndex.value]);
			selectedOptions.push(selectedOptionIndex.value);
		}

		if (currentQuestionIndex.value < subjectQuestions.length - 1) {
			currentQuestionIndex.value++;
			timer.value = initialTime;
		} else {
			showResult.value = true;
		}
		selectedOptionIndex.value = -1;
	});

	useTask$(({ track }) => {
		track(() => timer.value);
		if (timer.value < 0) {
			handleNextClick();
		} else {
			setTimeout(() => {
				timer.value--;
			}, 1000);
		}
	});

	return (
		<div class="flex justify-center items-center h-[80vh]">
			{subjectQuestions.length > 0 ? (
				<>
					{!showResult.value ? (
						<div class="bg-theme shadow-lg shadow-secondary rounded-lg text-white mx-4 mt-14 lg:w-[700px]">
							<ProgressBar timer={timer.value} initialTime={initialTime} />
							<QuestionProgress
								currentQuestionIndex={currentQuestionIndex.value + 1}
								questionsLength={subjectQuestions.length}
							/>
							<div class="m-6">
								<Question
									questions={subjectQuestions}
									currentQuestionIndex={currentQuestionIndex.value}
									selectedOptionIndex={selectedOptionIndex.value}
									handleOptionClick={handleOptionClick}
								/>
								<NextButton
									isLastQuestion={
										currentQuestionIndex.value === subjectQuestions.length - 1
									}
									disabled={selectedOptionIndex.value === -1}
									onClick={handleNextClick}
								/>
							</div>
						</div>
					) : (
						<>
							{showAnswersModal.value && (
								<div class="fixed inset-0 flex items-center justify-center">
									<div class="bg-transparent w-full min-w-full max-w-full md:w-[50%] md:min-w-[50%] md:max-w-[50%]">
										<div class="relative">
											<button
												class="absolute top-2 right-2 text-lg md:hidden text-gray-500"
												onClick$={() => (showAnswersModal.value = false)}
											>
												x
											</button>
											<Answers
												questions={wrongAnswers}
												selectedOptions={selectedOptions}
											/>
										</div>
									</div>
								</div>
							)}
						</>
					)}
					{showResult.value && (
						<Result
							score={score.value}
							totalQuestions={subjectQuestions.length}
							onRestart={handleRestartClick}
							onMenu={handleMenuClick}
							onAnswers={onAnswersClick}
						/>
					)}
				</>
			) : (
				<div class="text-2xl text-center bg-yellow-500 p-4 rounded-xl text-gray-800">
					...Soon
				</div>
			)}
		</div>
	);
});
