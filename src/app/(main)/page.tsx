import AboutPreview from '@/components/sections/AboutPreview'
import Hero from '@/components/sections/Hero'
import UpcomingEvents from '@/components/sections/UpcomingEvents'
import PartnersShowcase from '@/components/sections/PartnersShowcase'
import FinalCTA from '@/components/sections/FinalCta'
import Stats from '@/components/sections/Stats'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <UpcomingEvents />
      <PartnersShowcase />
      <FinalCTA />
    </>
  )
}
