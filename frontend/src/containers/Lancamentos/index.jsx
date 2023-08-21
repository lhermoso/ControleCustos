import React, { useEffect, useState } from 'react';

import { useGetEntriesQuery } from '../../redux/api/lancamentoApi';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Lancamentos() {
  const [dados, setDados] = useState([]);
  const { data, isSuccess, isFetching } = useGetEntriesQuery();

  const monthNames = {
    1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Abr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Set', 10: 'Out', 11: 'Nov', 12: 'Dez',
  };
  const formatDate = (date) => {
    const formatted = new Date(date);
    return `${formatted.getDate()}/${monthNames[formatted.getMonth() + 1]}/${formatted.getFullYear()}`;
  };

  useEffect(() => {
    if (isSuccess && !isFetching) {
      setDados(data?.results);
    }
  }, [isSuccess, isFetching]);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-white">Lancamentos</h1>
          <p className="mt-2 text-sm text-gray-50">
            Uma lista dos lancamentos do meu controle de custos.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Adicionar Lancamento
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Data
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Tipo
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Descricao
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Valor
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Grupo
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Editar</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {dados?.map((lancamento) => (
                    <tr key={lancamento.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {formatDate(lancamento.date)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{lancamento.side === 'C' ? 'CRÉDITO' : 'DÉBITO' }</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{lancamento.description}</td>
                      <td className={classNames(lancamento.side === 'C' ? 'text-green-500' : 'text-red-500', 'whitespace-nowrap px-3 py-4 text-sm ')}>{`R$${lancamento.value * (lancamento.side === 'C' ? 1 : -1)}`}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{lancamento?.group?.name || ''}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button type="button" className="text-indigo-600 hover:text-indigo-900">
                          Editar
                          <span className="sr-only">
                            ,
                            {lancamento.description}
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
