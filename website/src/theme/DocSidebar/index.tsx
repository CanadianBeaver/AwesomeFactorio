import React, {type ReactNode} from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import type DocSidebarType from '@theme/DocSidebar';
import type {WrapperProps} from '@docusaurus/types';
import AdBlockSide from '@site/src/components/AdBlockSide';

type Props = WrapperProps<typeof DocSidebarType>;

export default function DocSidebarWrapper(props: Props): ReactNode {
  return (
    <>
      <DocSidebar {...props} />
      <AdBlockSide />
    </>
  );
}
