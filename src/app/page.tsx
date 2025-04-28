import Chat from "@/components/chat/Chat";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<div className={styles.main}>
				<h1>SEJA FURIA</h1>
			</div>
			<section className={styles.chatContainer}>
				<Chat />
			</section>
		</div>
	);
}
