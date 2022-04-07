import React from 'react';
import { View, Loading, Paragraph } from '@components/Common';
import { GodCard } from '@components/Pages/Home';

import { GodDto } from '@types';

type GodListProps = {
  data: GodDto[];
  isFetched: boolean;
};

export const GodList = ({ data, isFetched }: GodListProps) => {
  if (!data.length)
    return isFetched ? (
      <Paragraph className="mt-6 text-xl text-center text-secondary">
        No results
      </Paragraph>
    ) : (
      <Loading />
    );

  return (
    <View className="grid gap-4 mt-6 md:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-8">
      {data.map((god: GodDto) => (
        <GodCard god={god} key={god.name} />
      ))}
    </View>
  );
};
