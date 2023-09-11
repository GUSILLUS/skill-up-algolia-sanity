import { Paper } from '@mui/material';
import { Hits, Pagination } from 'react-instantsearch';

import { HitsItem } from '../hits-item';

export const AlgoliaList = () => (
  <Paper
    className="flex flex-col w-full md:w-3/4 md:mx-auto p-3 md:p-8 shadow-2xl mb-8 gap-3"
    sx={{ boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)' }}
  >
    <Hits
      classNames={{
        root: 'w-full',
        list: 'flex flex-col gap-5',
      }}
      hitComponent={({ hit }) => <HitsItem hit={hit} />}
    />

    <Pagination
      classNames={{
        list: 'flex gap-3 w-full p-2 bg-transparent justify-center',
        item: 'bg-blue-700 rounded-full p-1 flex items-center justify-center w-10 h-10',
        link: 'text-white text-xl flex justify-center w-full h-full font-medium no-underline',
      }}
    />
  </Paper>
);
