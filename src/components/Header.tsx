import { component$, useSignal } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
	const openNav = useSignal<boolean>(false);
	const location = useLocation();

	const isActive = (path: string) =>
		location.url.pathname.includes(decodeURI(path));

	const navItemClasses = (page: string) =>
		`hover:text-yellow-400 transition-all duration-150 ${
			isActive(page) ? "text-yellow-400" : "text-white"
		}`;

	return (
		<nav class="bg-theme border border-gray-800 shadow-2xl sticky top-0 z-50">
			<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link href="/" class="flex items-center">
					<span class="self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text">
						ذاكرلي
					</span>
				</Link>
				<button
					class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-secondary"
					onClick$={() => {
						openNav.value = !openNav.value;
					}}
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-6 h-6"
						fill="yellow"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
				<div
					class={`w-full md:block md:w-auto ${
						openNav.value ? "block" : "hidden"
					}`}
				>
					<div class="flex flex-col justify-center items-center md:flex-row gap-4 shadow-lg">
						<Link href="/books" class={navItemClasses("/books")}>
							المقررات
						</Link>
						<Link href="/questions" class={navItemClasses("/questions")}>
							الأسئلة
						</Link>
						<Link href="/exams" class={navItemClasses("/exams")}>
							الاختبار
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
});
