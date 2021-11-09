import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useEffect,useState } from "react";

export function RepositoryList(){
	const [repositories,Setrepositories] = useState([]);

	useEffect((() => {
		fetch('https://api.github.com/orgs/rocketseat/repos').then(response => response.json()).then(data => Setrepositories(data))
	}),[]);
 
	return (
		<section className="repositoryList">
			<h1>Lista de Repositórios</h1>

			<ul>
				{repositories.map(repository =><RepositoryItem repository={repository}/>)}
			</ul>
		</section>
	);
}