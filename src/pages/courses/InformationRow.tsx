import React from 'react'
import Text from '../../components/Text'
import { FontVariants } from '../../shared/constants';

interface TextProps {
  header: React.ReactNode;
  text: string;
}

export default function InformationRow({ header, text}: TextProps) {
  return (
    <div className="flex flex-row space-x-2">
      <Text font={FontVariants.bold}>{header}:</Text>
      <Text>{text}</Text>
    </div>
  )
}
