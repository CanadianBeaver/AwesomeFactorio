import React from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import type CodeBlockType from '@theme/CodeBlock';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof CodeBlockType>;

export default function CodeBlockWrapper(props: Props): JSX.Element {
  const defaultTitle = props.className?.toString() === "language-blueprint" ? "blueprint" : "";
  return (
    <>
      <CodeBlock {...props} title={defaultTitle} />
    </>
  );
}
