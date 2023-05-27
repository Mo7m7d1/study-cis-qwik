import type { QRL } from "@builder.io/qwik";

export type QuestionPageProps = {
	params: {
		id: string;
	};
};

export type CardProps = {
	title: string;
	description: string;
	url: string;
};

export type BookCardProps = {
	title: string;
	link: string;
};

export type QuestionCardProps = {
	question: string;
	answer: string;
};

export type SubjectCardType = {
	id?: number;
	subject: string;
	link: string;
	btnText?: string;
};

export type NextButtonProps = {
	isLastQuestion: boolean;
	disabled: boolean;
	onClick: QRL<() => void>;
};

export type questionType = {
	id?: number;
	subject: string;
	question: string;
	correct_answer: number;
	choices: string[];
};

export type questionProps = {
	currentQuestionIndex: number;
	questions: questionType[];
	selectedOptionIndex: number;
	correctOptionIndex?: number;
	handleOptionClick: QRL<(index?: number) => void>;
};

export type ResultsProps = {
	score: number;
	totalQuestions: number;
	onRestart: QRL<() => void>;
	onMenu: QRL<() => void>;
	onAnswers: QRL<() => void>;
};

export type ProgressProps = {
	initialTime: number;
	timer: number;
};

export type QuestionProgressProps = {
	currentQuestionIndex: number;
	questionsLength: number;
};
