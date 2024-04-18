export default function Blog() {
  return (
    <main class="w-full mx-auto grow max-w-[64ch] py-12 text-neutral-200">
      <h1 class="text-heading-07 text-neutral-50">Issue 2</h1>

      <figure>
        <iframe
          style="border-radius:12px"
          src="https://open.spotify.com/embed/playlist/1NRcZIuac3CcB8lKzmdmoh?utm_source=generator"
          width="100%"
          height="80"
          allowfullscreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          class="mt-6"
        ></iframe>
        <figcaption class="text-neutral-50 text-label-01 mt-5">
          Playlist of the day:{' '}
          <a href="https://open.spotify.com/playlist/1NRcZIuac3CcB8lKzmdmoh">
            Open Spotify
          </a>
        </figcaption>
      </figure>

      <p class="text-fluid-para-01 mt-6">Welcome to jskhan.dx</p>

      <h2 class="text-heading-04 text-neutral-50 mt-11">On automations</h2>
      <i class="block text-neutral-50 text-body-02">Humans make mistakes</i>

      <blockquote class="text-body-01 border-l-[3px] pl-4 my-6 text-neutral-50">
        Automations are essential for a sustainable development environment. I'm
        always trying to keep consistency when it comes to file naming,
        structuring and all that. Automated file creations are so far saving a
        lot of time and resource.
      </blockquote>

      <p class="text-body-02 mt-6">
        Feeling great after setting up Obsidian.md templates successfully. First
        setup I created was the template using an Obsidian plugin called
        `Templater`. Purpose of this template was to help me embed YAML
        frontmatter (smartly) and increment issue numbers (assign ids) with just
        a click.
      </p>

      <p class="text-body-02 mt-6">
        This document was in fact created with the said template.
      </p>

      <h3 class="text-heading-03 text-neutral-50 mt-10">Disadvantages</h3>
      <i class="block text-neutral-50 text-body-02">Ah, there's the catch...</i>

      <blockquote class="text-body-01 border-l-[3px] pl-4 my-6 text-neutral-50">
        All software needs an update at some point
      </blockquote>

      <p class="text-body-02 mt-6">
        First of all, automations may or may not depend on other software. When
        that software version *expires* there's the worry of checking if the
        version update breaks your automation. Not only do you have to worry
        about keeping your own environment up-to-date but also keep track of
        your automation files.
      </p>

      <p class="text-body-02 mt-6">
        Secondly, you either have to write an automation that is hard to break
        (has validations) or write an automation so small that you can rewrite
        it back.
      </p>

      <h3 class="text-heading-03 text-neutral-50 mt-10">Solution?</h3>
      <i class="block text-neutral-50 text-body-02">There's always a way</i>

      <p class="text-body-02 mt-6">
        Currently, I'm thinking of a way to create automations in a modular way.
        Small components, small functions that is easy to rewrite and helps
        composing such automations easier.
      </p>

      <h2 class="text-heading-04 text-neutral-50 mt-11">Words before I...</h2>
      <i class="block text-neutral-50 text-body-02">
        Use the document for daily note taking
      </i>

      <h2 class="text-heading-04 text-neutral-50 mt-11">Notes of the day</h2>
      <p class="text-body-02 mt-6">Didn't find time to note.</p>
    </main>
  )
}
