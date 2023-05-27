import { component$ } from "@builder.io/qwik";
import type { NextButtonProps } from "../../../types";

export default component$(
	({ isLastQuestion, disabled, onClick }: NextButtonProps) => {
		return (
			<div class="flex justify-start mt-6">
				<button
					onClick$={onClick}
					disabled={disabled}
					class="btn disabled:bg-yellow-400/50"
				>
					{isLastQuestion ? "انهي الاختبار" : "السؤال التالي"}
				</button>
			</div>
		);
	}
);
