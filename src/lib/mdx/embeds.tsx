export const Spotify = (props: { src: string }) => (
  <iframe
    style={{
      borderRadius: '0.75rem',
    }}
    src={props.src}
    className="mt-6"
    width="100%"
    height="80"
    frame-border="0"
    allowFullScreen={false}
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  />
)
