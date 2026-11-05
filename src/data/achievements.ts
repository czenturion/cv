import mobileRobotics from '@/assets/achievements/mobile-robotics.mp4'
import robotBiathlon from '@/assets/achievements/robot-biathlon.mp4'

export type Achievement = {
  title: string
  event: string
  details: string[]
  video: string
  videoLabel: string
}

export const achievements: Achievement[] = [
  {
    title: 'Mobile Robotics · 2nd place',
    event: 'NSU Open University Championship (WorldSkills standards) · Novosibirsk, 2018',
    details: [
      'Remote-controlled robot over Wi-Fi: joystick control, driving by camera view',
      'The claw picks up billiard balls; the camera reads a QR code above each pocket to check which color it accepts',
      'I programmed the controller on NI myRIO in LabVIEW: converted physical values into PWM signals for the motors',
    ],
    video: mobileRobotics,
    videoLabel: 'Robot with a claw drives around the competition arena',
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
