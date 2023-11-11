import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from './ui/button'
import { CardProps } from '@/utils/constants'

// Icons
import { FaXTwitter } from 'react-icons/fa6'
import { AiFillMail } from 'react-icons/ai'
import { BsDiscord, BsGithub } from 'react-icons/bs'

export default function Contact({ title }: CardProps) {
  return (
    <div className='flex items-center justify-center'>
      <Card className='w-[500px]'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <div className='flex flex-col justify-between'>
          <div className='flex'>
            <Button size='full' className='py-6 text-3xl'>
              <FaXTwitter />
            </Button>
            <Button size='full' className='py-6 text-3xl'>
              <BsGithub />
            </Button>
            <Button size='full' className='py-6 text-3xl'>
              <BsDiscord />
            </Button>
          </div>
          <div>
            <Button size='full' className='py-6 text-3xl'>
              <AiFillMail />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}