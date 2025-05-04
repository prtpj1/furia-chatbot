"use client";
import Image from "next/image";
import styles from "./header.module.css";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { BsTwitch } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";

import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function handleOpenMenu() {
		setIsMenuOpen(!isMenuOpen);
	}
	return (
		<header className={`${styles.header}`}>
			<Link href="/">
				<Image src="/furia_logo.png" alt="Furia Logo" width={50} height={50} />
			</Link>
			<nav
				className={`${styles.navMenu}  ${isMenuOpen ? styles.navMenuOpened : ""}`}
				id="social-media-nav"
				aria-hidden={!isMenuOpen}
				aria-label="Menu de navegação"
			>
				<button
					className={styles.menuButton}
					type="button"
					onClick={handleOpenMenu}
					aria-controls="social-media-nav"
					aria-label="Fechar menu"
					aria-expanded={isMenuOpen}
				>
					<IoMdCloseCircleOutline />
				</button>
				<ul>
					<li>
						<Link
							className={styles.linkSocialMedia}
							href="https://www.instagram.com/furia.apparel/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FiInstagram className={`${styles.icon}`} />
							Instagram
						</Link>
					</li>
					<li>
						<Link
							className={styles.linkSocialMedia}
							href="https://www.tiktok.com/@furia"
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiOutlineTikTok className={`${styles.icon}`} />
							TikTok
						</Link>
					</li>
					<li>
						<Link
							className={styles.linkSocialMedia}
							href="https://www.twitch.tv/furiatv"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsTwitch className={`${styles.icon}`} />
							Twitch
						</Link>
					</li>
					<li>
						<Link
							className={styles.linkSocialMedia}
							href="https://www.youtube.com/furiagg"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IoLogoYoutube className={`${styles.icon}`} />
							Youtube
						</Link>
					</li>
					<li>
						<Link
							className={styles.linkSocialMedia}
							href="https://x.com/furia"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaXTwitter className={`${styles.icon}`} />
							Twitter
						</Link>
					</li>
				</ul>
			</nav>
			{!isMenuOpen && (
				<button
					className={styles.menuButton}
					type="button"
					onClick={handleOpenMenu}
					aria-label="Abrir menu"
					aria-expanded={isMenuOpen}
				>
					<LuMenu />
				</button>
			)}
		</header>
	);
}
