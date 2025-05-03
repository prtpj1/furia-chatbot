"use client";
import Image from "next/image";
import styles from "./chat.module.css";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";

export default function Chat() {
	const [isChatOpen, setIsChatOpen] = useState(false);
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
	const chatInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (messages.length > 0) {
			bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
		}
	}, [messages.length]);

	useEffect(() => {
		if (error && !errorAppendedRef.current) {
			const errorMsg = error.message.includes("429")
				? "Seus créditos diários acabaram. Tente novamente amanhã."
				: "Algo deu errado. Por favor, tente mais tarde.";
			append({ role: "assistant", content: errorMsg });
			errorAppendedRef.current = true;
		}
	}, [error, append]);

	useEffect(() => {
		if (isChatOpen) {
			document.addEventListener("keydown", handleKeyDownCloseChat);
		} else {
			document.removeEventListener("keydown", handleKeyDownCloseChat);
		}
		return () =>
			document.removeEventListener("keydown", handleKeyDownCloseChat);
	}, [isChatOpen]);

	useEffect(() => {
		if (isChatOpen) chatInputRef.current?.focus();
	}, [isChatOpen]);

	function handleChatToggle() {
		setIsChatOpen(!isChatOpen);
	}

	function handleCloseChat() {
		setIsChatOpen(false);
	}

	function handleKeyDownCloseChat(e: KeyboardEvent) {
		if (e.key === "Escape" && isChatOpen) handleCloseChat();
	}

	return (
		<>
			<button
				className={`${styles.chatAvatarToggle} ${isChatOpen ? styles.chatAvatarOpened : styles.chatAvatarClosed}`}
				type="button"
				onClick={handleChatToggle}
				aria-label={isChatOpen ? "Fechar chat" : "Abrir chat"}
				aria-expanded={isChatOpen}
				aria-controls="chat-section"
			>
				<Image
					src="/avatar_bust.png"
					width={112}
					height={112}
					alt=""
					aria-hidden="true"
				/>
			</button>
			<section
				className={`${styles.Chat}  ${isChatOpen ? styles.ChatOpened : styles.ChatClosed}`}
				aria-labelledby="chat-title"
			>
				<button
					className={styles.ChatCloseBtn}
					type="button"
					onClick={handleCloseChat}
					aria-label="Fechar chat"
				>
					<IoMdCloseCircleOutline size={24} />
				</button>
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
							ref={chatInputRef}
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
