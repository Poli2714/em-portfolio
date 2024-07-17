'use client';

import { CheckIcon, ClipboardIcon } from 'lucide-react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-tomorrow.css';
import { useEffect, useRef, useState } from 'react';

import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/shadcn';
import { toast } from 'sonner';

type CodeBlockProps = {
  code: string;
  language: string;
};

function CodeBlock({ code, language }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    const copyTimeout = setTimeout(() => setIsCopied(false), 4000);
    return () => clearTimeout(copyTimeout);
  }, [isCopied]);

  const copy = async () => {
    setIsCopied(true);
    try {
      if (codeRef.current) {
        await navigator.clipboard.writeText(codeRef.current.textContent!);
        toast.success('Copied to clipboard');
      }
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  return (
    <div className='rounded-md bg-code'>
      <div className='flex items-center justify-between px-4 pt-2'>
        <p className='text-background dark:text-foreground'>Typescript</p>
        {isCopied ? (
          <Button className='p-1.5' size={null} variant='ghost'>
            <CheckIcon
              className='text-background dark:text-foreground'
              size={16}
            />
          </Button>
        ) : (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className='p-1.5'
                  onClick={copy}
                  size={null}
                  variant='ghost'
                >
                  <ClipboardIcon
                    className='text-background dark:text-foreground'
                    size={16}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent className='border-none bg-foreground text-background dark:bg-highlight'>
                <p>Copy</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <pre className='m-0 rounded-b-md bg-code p-4' ref={codeRef}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

export default CodeBlock;
