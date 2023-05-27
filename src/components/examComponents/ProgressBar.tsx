import { component$ } from "@builder.io/qwik";
import type { ProgressProps } from "../../../types";

export default component$(({ initialTime, timer }: ProgressProps) => {
	return (
		<div class="relative h-3 overflow-hidden bg-secondary rounded-t-md">
			<div
				class="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-yellow-500 to-gray-500 transition-all duration-1000 ease-linear"
				style={{
					width: `${((initialTime - timer) / initialTime) * 100}%`,
				}}
			></div>
		</div>
	);
});
