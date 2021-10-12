import "./styles.scss";

export type IRepositoryItem = {
  id: number;
  name: string;
  description: string;
  url: string;
};

type IRepositoryItemProps = {
  repository: IRepositoryItem;
};

export function RepositoryItem({ repository }: IRepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.url}>Acessar repositório</a>
    </li>
  );
}
