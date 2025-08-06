import React from 'react'
import Conferencetracks from '../../shared/components/Conferencetracks/Conferencetracks'
import Helmetcomponent from '../../component/Helmetcomponent'

export default function Conferencetrackspage() {
  return (
    <>
      <Helmetcomponent title="Conference Tracks - International Conference on Computing, Networking, and Data Science" canonical="https://iccnds.com/conferenceTracks" />
      <Conferencetracks />
    </>
  )
}
