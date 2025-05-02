import Chat from "@/components/chat/Chat";
import styles from "./page.module.css";
import SubscribeForm from "@/components/subscribeForm/SubscribeForm";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<SubscribeForm />
			</main>
			<section className={styles.chatContainer}>
				<Chat />
			</section>
		</div>
	);
}
