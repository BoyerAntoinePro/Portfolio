import styles from './page.module.scss';

export default function HomePage() {
	return (
		<body>
			<main>
				<div className={styles.temp}>Antoine BOYER, Developpeur full stack </div>
				<div className={styles.temp}>
					PEtit descriptif : Depuis 6 ans je trvailé en tant que développeur blabla je monte en
					compétences blabla
				</div>
				<h2 className={styles.temp}>Projets: </h2>
				<div className={styles.temp}>
					<h3>Ouais DBI</h3>
					<p>Description du projet comment jai bossé ect</p> <div>Stack technique</div>Image de
					présentation du projet{' '}
				</div>
				<div className={styles.temp}>
					<h3>Ouais DBI</h3>
					<p>Description du projet comment jai bossé ect</p> <div>Stack technique</div>Image de
					présentation du projet{' '}
				</div>
				<div className={styles.temp}>
					<h3>Ouais DBI</h3>
					<p>Description du projet comment jai bossé ect</p> <div>Stack technique</div>Image de
					présentation du projet{' '}
				</div>

				<div>
					<h2>Compétences</h2>
					Liste des compétences??
				</div>
				<div>
					<h2>interêts</h2>
					<p>Liste de plein de double image avec les chose que j'aime </p>
				</div>
			</main>
			<footer>Antoine BOYER, developper fullstack (même trucs de couleurs que le header)</footer>
		</body>
	);
}
