export function RepositoryItem(props){
	return (
		<li>
			<strong>{props.repository?.name ?? 'Default'}</strong>
			<p>{props.repository?.descriptiion ?? 'Default'}</p>
			<a href={props.repository?.link}>Acessar Repositório</a>

		</li>
	);
}