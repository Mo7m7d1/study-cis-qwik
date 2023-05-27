import { component$, useSignal } from "@builder.io/qwik";
import type { QuestionCardProps } from "../../types";

export default component$(({ question, answer }: QuestionCardProps) => {
	const isOpen = useSignal(false);
	return (
		<div class="md:w-[70%] w-full" dir="ltr">
			<div class="mx-6 bg-theme shadow-lg rounded-lg p-7">
				<div class="flex justify-between items-center">
					<span class="text-sm font-medium">{question}</span>
					<button
						class="btn text-sm"
						onClick$={() => (isOpen.value = !isOpen.value)}
					>
						الإجابة
					</button>
				</div>
				<div class={`${isOpen.value ? "block" : "hidden"}`}>
					<div class="bg-theme text-white">
						<div class="p-2">
							<p class="text-yellow-100">{answer}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
