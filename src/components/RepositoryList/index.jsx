import { useState, useEffect, useCallback } from 'react';
import { listUserRepositories } from '../../services/listUserRepositories';

import { RepositoryItem } from '../RepositoryItem';

import './styles.scss';

export function RepositoryList() {
   const [repositories, setRepositories] = useState([]);

   const fetchData = useCallback(async () => {
      const { data } = await listUserRepositories('maycon8609');

      const normalizedData = data.map((repo) => {
         return {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            url: repo.html_url
         }
      });

      setRepositories(normalizedData);
   });

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <section className="repository-list">
         <h1>Lista de repositórios</h1>

         {repositories && (
            <ul>
               {repositories.map((repo) => {
                  return <RepositoryItem key={repo.id} repository={repo} />
               })}
            </ul>
         )}
      </section>
   );
};