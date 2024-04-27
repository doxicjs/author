import * as Popover from '@radix-ui/react-popover'
import { dxText } from '@/lib/dx/text'
import { cn } from '@/lib/utils'
import Button from '@/lib/ui/button'
import { ChevronDown, Play, Menu } from 'lucide-react'

type TSpotifyProps = {
  id: string
  className?: string
}

const Spotify = ({ id, className }: TSpotifyProps) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <Button
        className={cn('w-max gap-3', className)}
        color="primary"
        variant="text"
      >
        Playlist <Menu size={15} />
      </Button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content asChild sideOffset={5} align="end">
        <figure className="backdrop-blur border-neutral-a6 p-3 border bg-neutral-a3 rounded-xl overflow-hidden w-full">
          <iframe
            style={{
              borderRadius: '0.75rem',
            }}
            src={`https://open.spotify.com/embed/playlist/${id}?utm_source=generator`}
            className="[&:not(:first-child)]:mt-6"
            width="359"
            height="152"
            frame-border="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <figcaption className="mt-2">
            <p className={dxText('helper-01', cn('text-neutral-12'))}>
              Playlist of the day:{' '}
              <a
                href={`https://open.spotify.com/playlist/${id}`}
                className={dxText(
                  'body-compact-02',
                  cn(
                    'text-primary-11 hover:text-primary-12 after:content-["_↗"]'
                  )
                )}
              >
                Open Spotify
              </a>
            </p>
          </figcaption>
        </figure>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
)

export default Spotify
