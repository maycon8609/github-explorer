import { useState, useEffect, useCallback } from "react";

import { IRepositoryItem, RepositoryItem } from "../RepositoryItem";

import { listUserRepositories } from "../../services/listUserRepositories";

import "./styles.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState<IRepositoryItem[]>([]);

  const fetchData = useCallback(async (): Promise<void> => {
    const { data } = await listUserRepositories("maycon8609");

    const normalizedData = data.map((repo): IRepositoryItem => {
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
      };
    });

    setRepositories(normalizedData);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      {repositories && (
        <ul>
          {repositories.map((repo) => {
            return <RepositoryItem key={repo.id} repository={repo} />;
          })}
        </ul>
      )}
    </section>
  );
}
