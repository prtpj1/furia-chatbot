"use client";
import Image from "next/image";
import styles from "./chat.module.css";
import { FaTelegramPlane } from "react-icons/fa";
import { useChat } from "@ai-sdk/react";
import { useEffect, useRef } from "react";

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit, error, append } =
		useChat({
			initialMessages: [
				{
					id: "1",
					role: "assistant",
					content:
						"RAAAAAAWWR!\nFuriosinha, a maior fã do FURIA, na área!!\n\nSe tem alguma dúvida sobre o nosso time, manda que eu tô aqui pra responder com a garra da pantera!",
				},
			],
			api: "/api/chat",
		});

	const bottomRef = useRef<HTMLDivElement>(null);
	const errorAppendedRef = useRef(false);

	useEffect(() => {
		// if (messages.length > 0) {
		bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
		// }
	}, [messages]);

	useEffect(() => {
		if (error && !errorAppendedRef.current) {
			const errorMsg = error.message.includes("429")
				? "Seus créditos diários acabaram. Tente novamente amanhã."
				: "Algo deu errado. Por favor, tente mais tarde.";
			append({ role: "assistant", content: errorMsg });
			errorAppendedRef.current = true;
		}
	}, [error, append]);

	return (
		<>
			<section className={styles.Chat} aria-labelledby="chat-title">
				<figure className={styles.ChatAvatar}>
					<Image
						src="/avatar_bust.png"
						width={112}
						height={112}
						alt=""
						role="presentation"
						aria-hidden="true"
					/>
				</figure>
				<header className={styles.ChatHeader}>
					<h1 className={styles.ChatTitle} id="chat-title">
						<span>Chat com a</span>
						<span>Furiosinha</span>
					</h1>
				</header>
				<main
					className={styles.ChatContent}
					role="log"
					aria-live="polite"
					aria-relevant="additions"
				>
					{messages.map((message) => (
						<div
							className={`${styles.ChatMsgContainer} ${
								message.role === "user" ? styles.ChatMsgUser : ""
							}`}
							key={message.id}
						>
							{message.role === "assistant" && (
								<div className={`${styles.Avatar} ${styles.AvatarAI}`}>
									<Image
										src="/chat-avatar-ai.png"
										width={50}
										height={50}
										alt="Avatar da Furiosinha"
									/>
								</div>
							)}
							{message.role === "user" && (
								<div className={`${styles.Avatar} ${styles.AvatarUser}`}>
									<Image
										src="/chat-avatar-user.png"
										width={50}
										height={50}
										alt="Avatar do usuário"
									/>
								</div>
							)}
							<p>{message.content}</p>
						</div>
					))}
					<div ref={bottomRef} />
				</main>
				<footer className={styles.ChatFooter}>
					<form className={styles.ChatForm} onSubmit={handleSubmit}>
						<label
							htmlFor="chat-message-input"
							className={styles.visuallyHidden}
						>
							Digite sua mensagem
						</label>
						<input
							className={styles.ChatInputMsg}
							id="chat-message-input"
							type="text"
							placeholder="Digite sua mensagem"
							value={input}
							onChange={handleInputChange}
							autoComplete="off"
						/>
						<button
							className={styles.ChatBtnSubmit}
							type="submit"
							aria-label="Enviar mensagem"
						>
							<FaTelegramPlane className={styles.ChatBtnIcon} size={28} />
						</button>
					</form>
				</footer>
			</section>
		</>
	);
}
