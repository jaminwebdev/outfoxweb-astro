<script>
  import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
  } from 'svelte-vertical-timeline';
</script>

<section id="aboutTimeline" class="my-[125px]">
  <h2 class="text-center mb-6">Our Journey So Far</h2>
  <div class="hidden md:block">
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent slot="opposite-content">
          <p>June 2017</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={'background-color: rgb(40, 196, 172);'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div class="p-5 rounded-xl bg-body-color-secondary grid gap-2 text-left">
            <h3>Foxcraft Studios</h3>
            <p class="text-primary">Where it all started</p>
            <p>
              In 2017 we founded as Foxcraft Studios, primarily focused on delivering performant
              WordPress websites to small and medium sized businesses. With a portfolio of
              non-profits and small businesses alike, we quickly grew to 20+ clients in our first
              year.
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent slot="opposite-content">
          <p>July 2019</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={'background-color: rgb(40, 196, 172);'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div class="p-5 rounded-xl bg-body-color-secondary grid gap-2 text-left">
            <h3>Moving out to Cali</h3>
            <p class="text-primary">Having fun in the 🌞</p>
            <p>
              While still operating as lean as possible (we were still a 2 person team), we moved
              our business out to CA where we continued to grow.
            </p>
            <p>And then the pandemic hit...</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent slot="opposite-content">
          <p>May 2020-Nov 2021</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={'background-color: rgb(40, 196, 172);'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div class="p-5 rounded-xl bg-body-color-secondary grid gap-2 text-left">
            <h3>The Lockdown</h3>
            <p class="text-primary">Still fun, less 🌞</p>
            <p>
              As the world pivoted, so did we, focusing on offering affordable headless WordPress
              sites built in NextJS and other platforms.
            </p>
            <p>
              Despite the hardships, our portfolio grew, managing to top over 100 clients served in
              the last 4 years.
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent slot="opposite-content">
          <p>2021-2024</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={'background-color: rgb(40, 196, 172);'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div class="p-5 rounded-xl bg-body-color-secondary grid gap-2 text-left">
            <h3>The Seattle Years</h3>
            <p class="text-primary">The west coast adventures continue</p>
            <p>
              Relocating to the PNW has another local community to reach out to and help expand
              their online presence. Our portfolio is now 150+ clients served and counting.
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </div>

  <div class="block md:hidden timeline-container">
    <Timeline position="right">
      <TimelineItem>
        <TimelineOppositeContent slot="opposite-content">
          <p>June 2017</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={'background-color: rgb(40, 196, 172);'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div class="p-5 rounded-xl bg-body-color-secondary grid gap-2 text-left">
            <h3>Foxcraft Studios</h3>
            <p class="text-primary">Where it all started</p>
            <p>
              In 2017 we founded as Foxcraft Studios, primarily focused on delivering performant
              WordPress websites to small and medium sized businesses. With a portfolio of
              non-profits and small businesses alike, we quickly grew to 20+ clients in our first
              year.
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent slot="opposite-content">
          <p>July 2019</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={'background-color: rgb(40, 196, 172);'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div class="p-5 rounded-xl bg-body-color-secondary grid gap-2 text-left">
            <h3>Moving out to Cali</h3>
            <p class="text-primary">Having fun in the 🌞</p>
            <p>
              While still operating as lean as possible (we were still a 2 person team), we moved
              our business out to CA where we continued to grow.
            </p>
            <p>And then the pandemic hit...</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent slot="opposite-content">
          <p>May 2020-Nov 2021</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={'background-color: rgb(40, 196, 172);'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div class="p-5 rounded-xl bg-body-color-secondary grid gap-2 text-left">
            <h3>The Lockdown</h3>
            <p class="text-primary">Still fun, less 🌞</p>
            <p>
              As the world pivoted, so did we, focusing on offering affordable headless WordPress
              sites built in NextJS and other platforms.
            </p>
            <p>
              Despite the hardships, our portfolio grew, managing to top over 100 clients served in
              the last 4 years.
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent slot="opposite-content">
          <p>2021-2024</p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={'background-color: rgb(40, 196, 172);'} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div class="p-5 rounded-xl bg-body-color-secondary grid gap-2 text-left">
            <h3>The Seattle Years</h3>
            <p class="text-primary">The west coast adventures continue</p>
            <p>
              Relocating to the PNW has another local community to reach out to and help expand
              their online presence. Our portfolio is now 150+ clients served and counting.
            </p>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </div>
</section>
