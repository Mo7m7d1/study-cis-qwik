import { component$ } from "@builder.io/qwik";
import type { QuestionProgressProps } from "../../../types";

export default component$(
	({ currentQuestionIndex, questionsLength }: QuestionProgressProps) => {
		return (
			<div class="text-gray-600 text-sm float-right">
				<span class="text-yellow-500">{currentQuestionIndex}</span> /{" "}
				{questionsLength}
			</div>
		);
	}
);
