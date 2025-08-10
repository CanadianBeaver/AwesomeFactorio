import React, {type ReactNode} from 'react';
import TOC from '@theme-original/TOC';
import type TOCType from '@theme/TOC';
import type {WrapperProps} from '@docusaurus/types';
import AdBlockSide from '@site/src/components/AdBlockSide';

type Props = WrapperProps<typeof TOCType>;

export default function TOCWrapper(props: Props): ReactNode {
  return (
    <>
      <TOC {...props} />
      <AdBlockSide />
    </>
  );
}
