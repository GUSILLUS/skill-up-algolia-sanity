/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RefinementList } from 'react-instantsearch';

export const AlgoliaFiltersList = () => {
  // @ts-ignore
  const transformItems = items => {
    // @ts-ignore
    return items.map(item => ({
      ...item,
      count: ` - ${item.count}`,
    }));
  };

  return (
    <RefinementList
      attribute="tags"
      classNames={{
        list: 'flex gap-4 justify-center p-4',
        item: 'shadow-xl border-2 border-slate-200 border-solid rounded-full p-1 w-28 h-14 flex items-center justify-center font-medium',
        label: 'text-white text-xl text-blue-500 capitalize',
      }}
      transformItems={transformItems}
    />
  );
};
