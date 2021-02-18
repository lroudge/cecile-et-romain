import styles from "../../../../styles/us.module.css";

export const Us = () => {
	return (
		<div>
			<h1>Notre Histoire</h1>
			<section className={styles.timeline}>
				<ul>
					<li>
						{/* <img
							src="https://lh3.googleusercontent.com/pw/ACtC-3f7bpY5VRaNQqW0K5NzTa2hJK_iMTmJkZIZtRBzwQHUbNuTka3viIqxDNyWM5uNagMc3MbcAbVDzQN2davH9S7hAzBTxiH8x_S4f3MGpgi1F_A-UmrMVnSTy0P2gb6LxNTzaQc4eggEsrA6HGwZ7-AF=w962-h1442-no?authuser=0"
							className={styles.picture}
						/> */}
						<div>
							<time>06/11/2016</time>
							<br />
							On se rencontre au Café Charbon à Paris
						</div>
					</li>
					<li>
						<div>
							<time>01/12/2016</time>
							<br />
							Cécile commence à vivre chez Romain, car après tout,
							elle s’y sent très bien
						</div>
					</li>
					<li>
						<div>
							<time>08/03/2017</time>
							<br />
							Premier achat commun : La Nintendo Switch. On aime
							les jeux vidéos ou on les aime pas !
						</div>
					</li>
					<li>
						<div>
							<time>23/05/2017</time>
							<br />
							Premières vacances ensemble : Direction l’Andalousie
							!
						</div>
					</li>
					<li>
						<div>
							<time>15/10/2017</time>
							<br />
							On prend enfin un vrai appart ensemble
						</div>
					</li>
					<li>
						<div>
							<time>29/03/2018</time>
							<br />
							On se PACS ! C’est la suite logique de l’aventure
							(et ça facilite les déclarations d’impôts)
						</div>
					</li>
					<li>
						<div>
							<time>19/08/2018</time>
							<br />
							Les cartons sont faits, les bagages sont pliés, les
							visas sont imprimés : On s’envole pour les US !
						</div>
					</li>
					<li>
						<div>
							<time>05/10/2018</time>
							<br />
							Après 6 semaines intenses, on est enfin bien
							installés à San Francisco !
						</div>
					</li>
					<li>
						<div>
							<time>02/12/2018</time>
							<br />
							Suite aux problèmes de visa de Cécile, on décide de
							se fiancer en secret sur une plage à Santa Monica
						</div>
					</li>
					<li>
						<div>
							<time>06/12/2018</time>
							<br />
							On se marie légalement en toute intimité au City
							Hall de San Francisco. L’histoire raconte qu’on est
							allés bruncher après.
						</div>
					</li>
					<li>
						<div>
							<time>04/02/2019</time>
							<br />
							Cécile commence à travailler chez Ubisoft et on
							devient l’un des couples de la boite.
						</div>
					</li>
					<li>
						<div>
							<time>02/07/2019</time>
							<br />
							Pendant notre road trip dans les grands parcs
							américains, on parle de se remarier avec nos
							proches.
						</div>
					</li>
					<li>
						<div>
							<time>07/12/2019</time>
							<br />
							Un an et un jour après notre mariage américain,
							Romain fait la vraie demande en mariage en haut d’un
							volcan à Hawaii
						</div>
					</li>
					<li>
						<div>
							<time>28/08/2021</time>
							<br />
							C’est le jour du mariage !
						</div>
					</li>
				</ul>
			</section>
		</div>
	);
};
