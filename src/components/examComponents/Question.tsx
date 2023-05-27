import { $, component$ } from "@builder.io/qwik";
import type { questionProps } from "../../../types";

export default component$(
	({
		currentQuestionIndex,
		questions,
		selectedOptionIndex,
		handleOptionClick,
		correctOptionIndex,
	}: questionProps) => {
		return (
			<div
				class="flex flex-col justify-center items-center space-y-6"
				dir="ltr"
			>
				<h2 class="text-xl font-bold text-gray-200 text-center mb-2">
					{questions[currentQuestionIndex].question}
				</h2>
				<div class="w-full space-y-4">
					{questions[currentQuestionIndex].choices.map((option, index) => (
						<div
							key={index}
							class={`py-4 px-8 rounded-md cursor-pointer flex items-center justify-between text-gray-200 bg-zinc-700/60 shadow-xl shadow-secondary border border-secondary hover:bg-theme focus:bg-secondary focus:outline-none transition-all duration-150 ${
								selectedOptionIndex === index
									? "bg-gradient-to-tr from-gray-600 to-yellow-400"
									: ""
							}
						${
							correctOptionIndex === index
								? "bg-gradient-to-r from-green-400 to-green-300"
								: ""
						}
						`}
							onClick$={$(() => handleOptionClick(index))}
						>
							<span class="text-gray-100">{option}</span>
						</div>
					))}
				</div>
			</div>
		);
	}
);
