import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
				<main>
					<nav>
						<Link href="/">Home</Link>
						<Link href="/">Projets</Link>
						<Link href="/">Projets Hors dev</Link>

						<Link href="/notes">MOI</Link>
						<Link href="/notes">Contact</Link>
					</nav>
					{children}
				</main>
			</body>
		</html>
	);
}
