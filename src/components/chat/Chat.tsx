"use client";
import Image from "next/image";
import styles from "./chat.module.css";
import { FaTelegramPlane } from "react-icons/fa";
import { useChat } from "@ai-sdk/react";
import { useEffect, useRef } from "react";
export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		initialMessages: [
			{
				id: "1",
				role: "assistant",
				content:
					"Grrr! Cheguei! A maior fã do FURIA!\n Se tem alguma dúvida sobre o nosso time, manda que eu tô aqui pra responder com a garra da pantera!",
			},
		],
		api: "/api/chat",
	});

	const bottomRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (messages.length > 0) {
			bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
		}
	}, [messages.length]);

	return (
		<>
			<div className={styles.Chat}>
				<div className={styles.ChatAvatar}>
					<Image
						src="/avatar_bust.png"
						width={112}
						height={112}
						alt="Avatar da Furiosinha"
					/>
				</div>
				<div className={styles.ChatHeader}>
					<h1 className={styles.ChatTitle}>
						<p>Chat com a</p>
						<p>Furiosinha</p>
					</h1>
				</div>
				<div className={styles.ChatContent}>
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
										alt="Avatar"
									/>
								</div>
							)}
							{message.role === "user" && (
								<div className={`${styles.Avatar} ${styles.AvatarUser}`}>
									<Image
										src="/chat-avatar-user.png"
										width={50}
										height={50}
										alt="Avatar"
									/>
								</div>
							)}
							<p>{message.content}</p>
						</div>
					))}
					<div ref={bottomRef} />
				</div>
				<div className={styles.ChatFooter}>
					<form className={styles.ChatForm} onSubmit={handleSubmit}>
						<input
							className={styles.ChatInputMsg}
							type="text"
							placeholder="Digite sua mensagem"
							value={input}
							onChange={handleInputChange}
						/>
						<button className={styles.ChatBtnSubmit} type="submit">
							<FaTelegramPlane className={styles.ChatBtnIcon} size={28} />
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
