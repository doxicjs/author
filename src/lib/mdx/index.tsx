// CUSTOM
import * as React from 'react'
import { Spotify } from './embeds'
import { dxText } from '../dx/text'
import { cn } from '../utils'
import Button from '../ui/button'
import { Copy } from 'lucide-react'

export const components = {
  a: ({
    className,
    href,
    ...props
  }: React.HTMLAttributes<HTMLAnchorElement> & { href?: string }) => (
    <a
      className={dxText(
        'body-compact-02',
        cn(
          'text-primary-11 hover:text-primary-9',
          className,
          href && href.startsWith('http') && 'after:content-["_↗"]'
        )
      )}
      href={href}
      {...props}
    />
  ),
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={dxText('heading-07', cn('text-neutral-12', className))}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={dxText('heading-04', cn('text-neutral-12 mt-11', className))}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={dxText('heading-03', cn('text-neutral-12 mt-10', className))}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={dxText(
        'heading-02',
        cn('text-neutral-12 mt-7 [&+p]:!mt-0', className)
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={dxText(
        'body-02',
        cn('text-neutral-a11 [&:not(:first-child)]:mt-6', className)
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        'mt-6 overflow-x-auto rounded border p-5 [&_code]:bg-transparent [&_code]:px-0 astro-code relative',
        className
      )}
      {...props}
    >
      <Button
        data-is-copy
        className="absolute"
        variant="neutral"
        size="icon"
        style={{
          top: 12,
          right: 12,
        }}
      >
        <Copy size={15} />
      </Button>
      {children}
    </pre>
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={dxText('code-01', cn('px-3 bg-neutral-3 rounded', className))}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={dxText(
        'body-02',
        cn('mt-6 ml-5 list-inside list-disc text-neutral-a11', className)
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        'my-6 ml-5 list-inside list-decimal text-neutral-a11',
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn('', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        'rounded text-primary-12 border-l-3 border-primary-6 bg-primary-3 p-4 mt-6',
        className
      )}
      {...props}
    />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  Fluid: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <p
      className={dxText(
        'fluid-paragraph-01',
        cn('text-neutral-12 [&:not(:first-child)]:mt-6', className)
      )}
      {...props}
    />
  ),
  SubTitle: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <div role="doc-subtitle">
      <p
        className={dxText('body-01', cn('text-primary-11', className))}
        {...props}
      />
    </div>
  ),
  Caption: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <div className="mt-2">
      <p
        className={dxText('helper-01', cn('text-neutral-11', className))}
        {...props}
      />
    </div>
  ),
  Spotify: Spotify,
}
