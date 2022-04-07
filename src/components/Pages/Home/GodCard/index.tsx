import React from 'react';
import { View, Title, Paragraph } from '@components/Common';

import { convertCapitalize } from '@utils/convertCapitalize';
import { GodDto } from '@types';

type GodCardProps = {
  god: GodDto;
};

export const GodCard = ({ god }: GodCardProps) => {
  return (
    <View className="p-6 bg-white rounded-md shadow-md lg:p-8">
      <Title as="h3" className="mb-2 text-2xl font-medium text-secondary">
        {convertCapitalize(god.name)}
      </Title>
      <Paragraph className="text-secondary">
        {convertCapitalize(god.superpower)}
      </Paragraph>
      <Paragraph className="text-secondary">{god.end_of_an_era}</Paragraph>
    </View>
  );
};
