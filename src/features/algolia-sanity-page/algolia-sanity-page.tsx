import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { Configure, InstantSearch, SearchBox, SearchBoxProps } from 'react-instantsearch';

import { algoliaClient, indexName } from '../../shared/services/algolia-search/algoliaSearch';
import { AlgoliaFiltersList } from '../algolia-filters-list';
import { AlgoliaList } from '../algolia-list';

export const AlgoliaSanityPage = () => {
  const queryHook: SearchBoxProps['queryHook'] = (query, setQuery) => {
    setQuery(query);
  };

  return (
    <div className="flex flex-col justify-center">
      <InstantSearch indexName={indexName} searchClient={algoliaClient}>
        <Configure analytics={false} hitsPerPage={4} />
        <SearchBox
          autoFocus
          placeholder="Search..."
          queryHook={queryHook}
          submitIconComponent={({ classNames }) => <SearchIcon className={classNames.submitIcon} />}
          resetIconComponent={({ classNames }) => <SearchOffIcon className={classNames.submitIcon} />}
          classNames={{
            root: 'p-3 shadow-sm flex justify-center items-center',
            form: 'relative w-full md:w-1/2',
            input:
              'block w-full pl-9 pr-3 py-2 bg-white border border-slate-300 placeholder-slate-400 outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md focus:ring-1 text-base',
            submit:
              'absolute top-[2%] right-[2%] bg-white outline-none border-none flex justify-center items-center h-[40px] p-0',
            reset:
              'absolute top-[2%] right-[14%] md:right-[10%] xl:right-[6%] bg-transparent outline-none border-none flex justify-center items-center h-[40px] p-0',
            submitIcon: 'bg-transparent',
          }}
        />

        <AlgoliaFiltersList />

        <AlgoliaList />
      </InstantSearch>
    </div>
  );
};
