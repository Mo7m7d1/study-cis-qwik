import { component$ } from "@builder.io/qwik";
import { Card } from "~/components";

export default component$(() => {
	return (
		<div class="text-white flex flex-col items-center h-[70vh] mt-14 lg:mt-28 w-full">
			<h1 class="text-4xl font-semibold mb-8 text-gray-300">
				مرحباً بك في{" "}
				<span class="bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text">
					ذاكرلي
				</span>
			</h1>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-5 w-full px-6">
				<Card
					title="المقررات"
					url="/books"
					description="قائمة بالمقررات التي يمكنك الاطلاع عليها وتنزيلها"
				/>
				<Card
					title="الأسئلة"
					url="/questions"
					description="مجموعة من الاسئلة للمراجعة"
				/>
				<Card
					title="اختبار"
					url="/exams"
					description="أداة لإجراء اختبارات مهمة للتقييم والممارسة"
				/>
			</div>
		</div>
	);
});
