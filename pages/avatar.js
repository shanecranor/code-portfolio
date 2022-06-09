import Image from 'next/image'

function Avatar() {
  return <>
  <Image src="/me.png" alt="me" width="864" height="576" quality="90"/>
  </>
}

export default Avatar
