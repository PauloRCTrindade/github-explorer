import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
	name:'Unform',
	description:'Formns in React',
	link:'https://github.com/unform/unform'
}


export function RepositoryList(){
 
	return (
		<section className="repositoryList">
			<h1>Lista de Repositórios</h1>

			<ul>
				<RepositoryItem repository={repository}/>
				<RepositoryItem repository={repository} />
				<RepositoryItem repository={repository}/>
				<RepositoryItem repository={repository}/>
			</ul>
		</section>
	);
}