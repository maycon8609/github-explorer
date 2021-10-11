import './styles.scss';

export function RepositoryItem({ repository }) {
   return (
      <li>
         <strong>{repository.name}</strong>
         <p>{repository.description}</p>

         <a href={repository.url}>Acessar repositório</a>
      </li>
   );
};