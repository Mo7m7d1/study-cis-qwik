import { component$ } from "@builder.io/qwik";
import type { ResultsProps } from "../../../types";

export default component$(
	({ score, totalQuestions, onRestart, onMenu, onAnswers }: ResultsProps) => {
		return (
			<div class="flex justify-center items-center flex-col bg-theme shadow-lg shadow-secondary rounded-md p-6 text-gray-100">
				<h2 class="mb-4 text-lg">
					نتيجتك <span class="text-yellow-600 text-xl font-bold">{score}</span>{" "}
					من{" "}
					<span class="text-red-500 text-xl font-bold">{totalQuestions}</span>
				</h2>
				<div class="flex flex-row gap-4">
					<button onClick$={onRestart} class="btn">
						إعادة الاختبار
					</button>
					<button onClick$={onMenu} class="btn">
						القائمة الرئيسية
					</button>
				</div>
				{score < totalQuestions && (
					<div class="w-full h-4 mt-6">
						<button onClick$={onAnswers} class="btn">
							اجابات الأسئلة
						</button>
					</div>
				)}
			</div>
		);
	}
);
