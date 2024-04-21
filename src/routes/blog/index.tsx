import { dxText } from '~/lib/dx/text'

export default function Blog() {
  return (
    <main class="w-full mx-auto grow max-w-[64ch] py-12">
      <h1 class={dxText('heading-07', 'mt-2')}>Issue 2</h1>

      <figure>
        <iframe
          title="Spotify Playlist Embed"
          style="border-radius:12px"
          src="https://open.spotify.com/embed/playlist/1NRcZIuac3CcB8lKzmdmoh?utm_source=generator"
          width="100%"
          height="80"
          allowfullscreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          class="mt-6"
        ></iframe>
        <figcaption class={dxText('label-01', 'text-neutral-11 mt-5')}>
          Playlist of the day:{' '}
          <a
            href="https://open.spotify.com/playlist/1NRcZIuac3CcB8lKzmdmoh"
            class={dxText('body-compact-02', 'text-primary-11')}
          >
            Open Spotify
          </a>
        </figcaption>
      </figure>

      <p class={dxText('fluid-paragraph-01', 'text-neutral-12 mt-6')}>
        Welcome to my devlog where I'll go through my thought process of dealing
        with day to day dev problems.
      </p>

      <h2 class={dxText('heading-04', 'mt-11')}>On automations</h2>
      <i class={dxText('body-02', 'text-primary-12')}>Humans make mistakes</i>

      <blockquote
        class={dxText(
          'body-01',
          'rounded text-primary-12 border-l-3 border-primary-6 bg-primary-3 p-4 my-6'
        )}
      >
        Automations are essential for a sustainable development environment. I'm
        always trying to keep consistency when it comes to file naming,
        structuring and all that. Automated file creations are so far saving a
        lot of time and resource.
      </blockquote>

      <p class={dxText('body-02', 'text-neutral-11 mt-6')}>
        Feeling great after setting up Obsidian.md templates successfully. First
        setup I created was the template using an Obsidian plugin called
        `Templater`. Purpose of this template was to help me embed YAML
        frontmatter (smartly) and increment issue numbers (assign ids) with just
        a click.
      </p>

      <p class={dxText('body-02', 'text-neutral-11 mt-6')}>
        This document was in fact created with the said template.
      </p>

      <h3 class={dxText('heading-03', 'text-neutral-12 mt-10')}>
        Disadvantages
      </h3>
      <i class={dxText('body-02', 'text-primary-12')}>
        Ah, there's the catch...
      </i>

      <blockquote
        class={dxText(
          'body-01',
          'rounded text-primary-12 border-l-3 border-primary-6 bg-primary-3 p-4 my-6'
        )}
      >
        All software needs an update at some point
      </blockquote>

      <p class={dxText('body-02', 'text-neutral-11 mt-6')}>
        First of all, automations may or may not depend on other software. When
        that software version *expires* there's the worry of checking if the
        version update breaks your automation. Not only do you have to worry
        about keeping your own environment up-to-date but also keep track of
        your automation files.
      </p>

      <p class={dxText('body-02', 'text-neutral-11 mt-6')}>
        Secondly, you either have to write an automation that is hard to break
        (has validations) or write an automation so small that you can rewrite
        it back.
      </p>

      <h3 class={dxText('heading-03', 'text-neutral-12 mt-10')}>Solution?</h3>
      <i class={dxText('body-02', 'text-primary-12')}>There's always a way</i>

      <p class={dxText('body-02', 'text-neutral-11 mt-6')}>
        Currently, I'm thinking of a way to create automations in a modular way.
        Small components, small functions that is easy to rewrite and helps
        composing such automations easier.
      </p>

      <h2 class={dxText('heading-04', 'mt-11')}>Words before I...</h2>
      <i class={dxText('body-02', 'text-primary-12')}>
        Use the document for daily note taking
      </i>

      <h2 class={dxText('heading-04', 'mt-11')}>Notes of the day</h2>

      <p class={dxText('body-02', 'text-neutral-11 mt-6')}>
        Didn't find time to note.
      </p>
    </main>
  )
}
