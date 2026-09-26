"use cilent"
import Archive from '@/components/Pressscompo/Archieves'
import Media from '@/components/Pressscompo/Media'
import News from '@/components/Pressscompo/News'
import PressHero from '@/components/Pressscompo/Presshero'
import Releases from '@/components/Pressscompo/Releases'
import Video from '@/components/Pressscompo/Videos'

export default function page() {
  return (
    <div>
      <PressHero />
      <Releases />
      <Archive/>
      <Media/>
      <Video/>
      <News/>
    </div>
  )
}
