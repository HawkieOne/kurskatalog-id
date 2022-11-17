import React from 'react'
import Text from './Text'
import { FontVariants } from '../shared/constants';
import { TextVariant } from '../shared/interfaces';

interface TextProps {
  header: React.ReactNode;
  text: TextVariant;
}

export default function InformationRow({ header, text}: TextProps) {
  return (
    <div className="flex flex-row space-x-2">
      <Text font={FontVariants.bold}>{header}:</Text>
      <Text>{text}</Text>
    </div>
  )
}