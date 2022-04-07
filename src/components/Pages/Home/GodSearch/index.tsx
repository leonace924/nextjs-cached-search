import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Loading } from '@components/Common';
import { SearchBar, GodList } from '@components/Pages/Home';

import { useFetch } from '@hooks/useFetch';
import { BASE_URL } from '@lib/constant';

export const GodSearch = () => {
  const [query, setQuery] = useState('');
  const [apiUrl, setApiUrl] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const query = e.target.search.value;
    if (!query) return;
    setQuery(query);
  }, []);

  useEffect(() => {
    setApiUrl(`${BASE_URL}?search=${query}`);
  }, [query]);

  const { status, data, error } = useFetch(apiUrl);

  if (error) return <Text>{error}</Text>;
  if (status === 'loading') return <Loading />;

  return (
    <View>
      <SearchBar handleSubmit={handleSubmit} />
      <GodList data={data.ancients ?? data} />
    </View>
  );
};
