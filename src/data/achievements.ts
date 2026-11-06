import mobileRobotics from '@/assets/achievements/mobile-robotics.mp4'
import robotBiathlon from '@/assets/achievements/robot-biathlon.mp4'

export type Achievement = {
  title: string
  event: string
  details: string[]
  video: string
  videoLabel: string
  code?: string
}

export const achievements: Achievement[] = [
  {
    title: 'Mobile Robotics · 2nd place',
    event: 'NSU Open University Championship (WorldSkills standards) · Novosibirsk, 2018',
    details: [
      'Remote-controlled robot: joystick over Wi-Fi, driving by live camera view. The claw picks up billiard balls; a QR code above each pocket tells which color it accepts',
      'With our physics professor, I built the motion model (wheel radius, track width) so the robot drives set distances and turns precisely',
      'Set up the Wi-Fi link and video stream; at the venue we scanned channel load to pick the cleanest one',
      'Stack: NI myRIO-1900, LabVIEW, FPGA',
    ],
    video: mobileRobotics,
    videoLabel: 'Diploma and medal, then the robot with a claw drives around the competition arena',
    code: 'https://github.com/czenturion/wsr-mobile-robotics',
  },
  {
    title: 'Robot Biathlon · 3rd place',
    event: 'University robotics competition · Novosibirsk, 2017',
    details: [
      'Line-following robot: side sensors keep it on the black line, at the crossing it parks and shoots',
      'I designed and built the robot from LEGO Mindstorms EV3; my teammate programmed it',
    ],
    video: robotBiathlon,
    videoLabel: 'LEGO EV3 robot parks and shoots at the target',
  },
]
