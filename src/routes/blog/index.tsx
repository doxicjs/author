import Text from '~/lib/Text/Text'
// import { toggleTheme } from '~/scripts/themify'

export default function Blog() {
  return (
    <main class="w-full mx-auto grow max-w-[64ch] py-12">
      {/* <button
        onClick={toggleTheme}
        class="p-[1px] text-body-compact-02 shadow shadow-primary-3 text-primary-12"
        style={{
          'border-radius': '3px',
          background:
            'repeating-linear-gradient(to right, var(--accent-a7), var(--accent-9), var(--accent-a7));',
          'background-size': '200% 200%',
          animation: 'gradient 3s ease-in-out infinite',
        }}
      >
        <div
          class="px-4 py-3 bg-primary-3 rounded"
          style={{
            'border-radius': '2px',
          }}
        >
          Toggle Theme
        </div>
      </button> */}
      <Text as="h1" variant="heading-07">
        Issue 2
      </Text>

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
        <Text as="figcaption" variant="label-01" class="text-neutral-11 mt-5">
          Playlist of the day:{' '}
          <Text
            as="a"
            href="https://open.spotify.com/playlist/1NRcZIuac3CcB8lKzmdmoh"
            class="text-primary-11"
            variant="body-compact-02"
          >
            Open Spotify
          </Text>
        </Text>
      </figure>

      <Text as="p" variant="fluid-paragraph-01" class="text-neutral-12 mt-6">
        Welcome to my devlog where I'll go through my thought process of dealing
        with day to day dev problems.
      </Text>

      <Text as="h2" variant="heading-04" class="mt-11">
        On automations
      </Text>
      <Text as="i" variant="body-02" class="text-primary-12">
        Humans make mistakes
      </Text>

      <Text
        as="blockquote"
        class="rounded text-primary-12 border-l-3 border-primary-6 bg-primary-3 p-4 my-6"
        variant="body-01"
      >
        Automations are essential for a sustainable development environment. I'm
        always trying to keep consistency when it comes to file naming,
        structuring and all that. Automated file creations are so far saving a
        lot of time and resource.
      </Text>

      <Text as="p" variant="body-02" class="text-neutral-11 mt-6">
        Feeling great after setting up Obsidian.md templates successfully. First
        setup I created was the template using an Obsidian plugin called
        `Templater`. Purpose of this template was to help me embed YAML
        frontmatter (smartly) and increment issue numbers (assign ids) with just
        a click.
      </Text>

      <Text as="p" variant="body-02" class="text-neutral-11 mt-6">
        This document was in fact created with the said template.
      </Text>

      <Text as="h3" variant="heading-03" class="text-neutral-12 mt-10">
        Disadvantages
      </Text>
      <Text as="i" variant="body-02" class="text-primary-12">
        Ah, there's the catch...
      </Text>

      <Text
        as="blockquote"
        class="rounded text-primary-12 border-l-3 border-primary-6 bg-primary-3 p-4 my-6"
        variant="body-01"
      >
        All software needs an update at some point
      </Text>

      <Text as="p" variant="body-02" class="text-neutral-11 mt-6">
        First of all, automations may or may not depend on other software. When
        that software version *expires* there's the worry of checking if the
        version update breaks your automation. Not only do you have to worry
        about keeping your own environment up-to-date but also keep track of
        your automation files.
      </Text>

      <Text as="p" variant="body-02" class="text-neutral-11 mt-6">
        Secondly, you either have to write an automation that is hard to break
        (has validations) or write an automation so small that you can rewrite
        it back.
      </Text>

      <Text as="h3" variant="heading-03" class="text-neutral-12 mt-10">
        Solution?
      </Text>
      <Text as="i" variant="body-02" class="text-primary-12">
        There's always a way
      </Text>

      <Text as="p" variant="body-02" class="text-neutral-11 mt-6">
        Currently, I'm thinking of a way to create automations in a modular way.
        Small components, small functions that is easy to rewrite and helps
        composing such automations easier.
      </Text>

      <Text as="h2" variant="heading-04" class="mt-11">
        Words before I...
      </Text>
      <Text as="i" variant="body-02" class="text-primary-12">
        Use the document for daily note taking
      </Text>

      <Text as="h2" variant="heading-04" class="mt-11">
        Notes of the day
      </Text>

      <Text as="p" variant="body-02" class="text-neutral-11 mt-6">
        Didn't find time to note.
      </Text>
    </main>
  )
}
