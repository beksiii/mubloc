import EventsHero from '@/components/sections/EventsHero'
import EventsSeries from '@/components/sections/EventsSeries'
import FeaturedEventBanner from '@/components/sections/FeaturedEventBanner'

export default function EventsPage() {
  return (
    <>
      <EventsHero
        mainTitle='EVENTS'
        gradientTitle='MUBLOC'
        gradientFirst={true}
        subtitle='A series of creative events that shape the journey of MUBLOC.'
      />

      <FeaturedEventBanner />
      <EventsSeries />

      {/* Section berikutnya (cards MUBLOC – NALAR – Main Event) */}
      {/* <EventsList /> */}
    </>
  )
}
