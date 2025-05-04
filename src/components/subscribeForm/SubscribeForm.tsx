"use client";
import Link from "next/link";
import styles from "./subscribeForm.module.css";
import { useEffect, useRef, type FC } from "react";

export default function SubscribeForm() {
	const nameInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		nameInputRef.current?.focus();
	}, []);

	return (
		<form className={styles.formContainer} aria-labelledby="subscribe-title">
			<h1 className={styles.formTitle} id="subscribe-title">
				SEJA FURIA
			</h1>
			<fieldset className={styles.formInputContainer}>
				<legend className={styles.visuallyHidden}>Dados para inscrição</legend>
				<div className={styles.formInputWrapper}>
					<label className={styles.visuallyHidden} htmlFor="name">
						Nome
					</label>
					<input
						className={styles.formInput}
						type="text"
						id="name"
						name="name"
						// ref={nameInputRef}
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
				<legend className={styles.visuallyHidden}>Ações do formulário</legend>
				<button className={`${styles.btn} ${styles.btnSubmit}`} type="submit">
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
	);
}
