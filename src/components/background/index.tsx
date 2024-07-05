import { Canvas } from '@react-three/fiber'
import { CameraControls, Cloud, Sky } from '@react-three/drei'

const Background = () => {
  return (
    <>
      <img
        src="/ghibli.jpg"
        className="w-full absolute object-cover object-bottom h-full -z-10"
        style={{
          top: 0,
          left: 0,
        }}
      />
    </>
  )
}

export default Background
