import React, { FormEvent, useEffect, useState } from 'react';
import { FiChevronRight, FiAlertTriangle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Title, Form, Repositories, Error } from './styles';
import logoImg from '../../assets/logo.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputErro] = useState('');
  const [repoitories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repoitories),
    );
  }, [repoitories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputErro('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repoitories, repository]);
      setNewRepo('');
      setInputErro('');
    } catch (err) {
      setInputErro('Erro na busca por esse repositório');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Logo github" />
      <Title>
        <h1>Explore os repositórios no Github</h1>
      </Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repósitorio"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && (
        <Error>
          {inputError} <FiAlertTriangle />{' '}
        </Error>
      )}
      <Repositories>
        {repoitories.map((repository) => (
          <Link
            to={`/repositories/${repository.full_name}`}
            key={repository.full_name}
            href="teste"
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
