import Image from "next/image";
import styles from "./header.module.css";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { BsTwitch } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
	return (
		<header className={styles.header}>
			<figure className={styles.logo}>
				<Image src="/furia_logo.png" alt="Furia Logo" width={50} height={50} />
			</figure>
			<nav className={styles.navMenu}>
				<ul>
					<li>
						<Link
							href="https://www.instagram.com/furia.apparel/"
							target="_blank"
						>
							<FiInstagram
								className={`${styles.icon} ${styles.iconInstagram}`}
							/>
						</Link>
					</li>
					<li>
						<Link href="https://www.tiktok.com/@furia" target="_blank">
							<AiOutlineTikTok
								className={`${styles.icon} ${styles.iconTikTok}`}
							/>
						</Link>
					</li>
					<li>
						<Link href="https://www.twitch.tv/furiatv" target="_blank">
							<BsTwitch className={`${styles.icon} ${styles.iconTwitch}`} />
						</Link>
					</li>
					<li>
						<Link href="https://www.youtube.com/furiagg" target="_blank">
							<IoLogoYoutube
								className={`${styles.icon} ${styles.iconYoutube}`}
							/>
						</Link>
					</li>
					<li>
						<Link href="https://x.com/furia" target="_blank">
							<FaXTwitter className={`${styles.icon} ${styles.iconTwitter}`} />
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
