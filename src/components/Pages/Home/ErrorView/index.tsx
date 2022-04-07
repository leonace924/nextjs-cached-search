import React, { useEffect, useState } from 'react';
import { View, Text, Title, Loading, Paragraph } from '@components/Common';

import { useFetch } from '@hooks/useFetch';
import { BASE_URL } from '@lib/constant';

export const ErrorView = () => {
  const [apiUrl, setApiUrl] = useState('');

  useEffect(() => {
    setApiUrl(`${BASE_URL}?error=true`);
  }, []);

  const { status, data, error } = useFetch(apiUrl);

  if (error) return <Text>{error}</Text>;
  if (status === 'loading') return <Loading />;

  return (
    <View>
      <Title className="mt-6 mb-2 text-xl font-medium text-primary lg:mt-9 lg:text-2xl">
        Error Endpoint message
      </Title>
      <Paragraph>{data?.error}</Paragraph>
    </View>
  );
};
