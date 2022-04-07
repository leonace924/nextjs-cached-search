import React from 'react';
import { View, Loading } from '@components/Common';
import { GodCard } from '@components/Pages/Home';

import { GodDto } from '@types';

type GodListProps = {
  data: GodDto[];
};

export const GodList = ({ data }: GodListProps) => {
  return (
    <View className="grid gap-4 mt-6 md:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-8">
      {data.length ? (
        data.map((god: GodDto) => <GodCard god={god} key={god.name} />)
      ) : (
        <Loading />
      )}
    </View>
  );
};
