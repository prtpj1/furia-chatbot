import Chat from "@/components/chat/Chat";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<form
					className={styles.formContainer}
					aria-label="Formulário de inscrição"
				>
					<h1 className={styles.formTitle} id="subscribe-title">
						SEJA FURIA
					</h1>
					<fieldset className={styles.formInputContainer}>
						<legend className={styles.visuallyHidden}>
							Dados para inscrição
						</legend>
						<div className={styles.formInputWrapper}>
							<label className={styles.visuallyHidden} htmlFor="name">
								Nome
							</label>
							<input
								className={styles.formInput}
								type="text"
								id="name"
								name="name"
								placeholder="Nome"
								required
							/>
						</div>
						<div className={styles.formInputWrapper}>
							<label className={styles.visuallyHidden} htmlFor="email">
								Email
							</label>
							<input
								className={styles.formInput}
								type="email"
								id="email"
								name="email"
								placeholder="Email"
								required
							/>
						</div>
					</fieldset>
					<fieldset className={styles.formBtnContainer}>
						<legend className={styles.visuallyHidden}>
							Ações do formulário
						</legend>
						<button
							className={`${styles.btn} ${styles.btnSubmit}`}
							type="submit"
						>
							INSCREVA-SE
						</button>
						<Link
							className={`${styles.btn} ${styles.btnWebsite}`}
							href="https://www.furia.gg/"
							target="_blank"
							rel="noreferrer"
						>
							Visite nosso site
						</Link>
					</fieldset>
				</form>
			</main>
			<section className={styles.chatContainer}>
				<Chat />
			</section>
		</div>
	);
}
