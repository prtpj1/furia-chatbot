import Image from "next/image";
import styles from "./chat.module.css";
import { IoSend } from "react-icons/io5";
export default function Chat() {
	return (
		<>
			<div className={styles.Chat}>
				<div className={styles.ChatHeader}>
					<h1 className={styles.ChatTitle}>Furia Chatbot</h1>
				</div>
				<div className={styles.ChatContent}>
					<div className={styles.ChatMsgContainer}>
						<div className={styles.Avatar}>
							<Image
								src="/furia_logo.png"
								width={50}
								height={50}
								alt="Avatar"
							/>
						</div>
						<p>
							<span>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
								aspernatur voluptas error animi maiores, commodi consequatur
								natus tempora aliquam perferendis odit iure dignissimos
								blanditiis repudiandae ab harum. Consequatur, deserunt quo.
							</span>
						</p>
					</div>
					<div className={styles.ChatMsgContainer}>
						<p>
							<span>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
								aspernatur voluptas error animi maiores, commodi consequatur
								natus tempora aliquam perferendis odit iure dignissimos
								blanditiis repudiandae ab harum. Consequatur, deserunt quo.
							</span>
						</p>
						<div className={styles.Avatar}>
							<Image
								src="/furia_logo.png"
								width={50}
								height={50}
								alt="Avatar"
							/>
						</div>
					</div>
					<div className={styles.ChatMsgContainer}>
						<div className={styles.Avatar}>
							<Image
								src="/furia_logo.png"
								width={50}
								height={50}
								alt="Avatar"
							/>
						</div>
						<p>
							<span>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
								aspernatur voluptas error animi maiores, commodi consequatur
								natus tempora aliquam perferendis odit iure dignissimos
								blanditiis repudiandae ab harum. Consequatur, deserunt quo.
							</span>
						</p>
					</div>
				</div>
				<div className={styles.ChatFooter}>
					<form className={styles.ChatForm}>
						<input
							className={styles.ChatInputMsg}
							type="text"
							placeholder="Digite sua mensagem"
						/>
						<button className={styles.ChatBtnSubmit} type="submit">
							<IoSend className={styles.ChatBtnIcon} size={28} />
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
