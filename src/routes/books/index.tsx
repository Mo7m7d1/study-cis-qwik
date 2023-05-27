import { component$, useStore } from "@builder.io/qwik";
import jsonBooks from "../../utils/subjects.json";
import { BookCard } from "~/components";

export default component$(() => {
	const books = useStore(jsonBooks);
	return (
		<div class="text-white flex flex-col items-center mt-14 lg:mt-28 mx-4">
			<h1 class="text-4xl font-semibold mb-8 text-gray-200">قائمة المقررات</h1>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10 w-full">
				{books.map((book) => (
					<BookCard key={book.id} title={book.title} link={book.link} />
				))}
			</div>
		</div>
	);
});
