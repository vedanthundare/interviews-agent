<<<<<<< HEAD
import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
=======
>>>>>>> fe80aff24bd8bb19c6b3a8b302794939ce2d8848
import React from 'react'

const Page = () => {
  return (
<<<<<<< HEAD
    <>
    <section className='card-cta'>
      <div className='flex flex-col gap-6 max-w-lg'>
        <h2>Get Interview Ready with Ai-Powered Practice & Feedback</h2>
        <p className='text-lg'> Practice on real Interview Questions and get Real Feedback</p>
        <Button asChild className='btn-primary max-sm:w-full'>
          <Link href="/interview">Start an Interview</Link>
        </Button>
      </div>
      <Image src="/robot.png" alt='robo-dude' width={400} height={400} className='max-sm:hidden'/>
    </section>

    <section className='flex flex-col gap-6 mt-8'>
      <h2>Your Interview's</h2>
      <div className='interviews-section'>
        {dummyInterviews.map((interview) =>(
          <InterviewCard {...interview} key={interview.id}/>
        ))}
        <p>You havent taken ant interview yet</p>
      </div>

    </section>

    <section className='flex flex-col gap-6 mt-8'>
      <h2>Take an interview</h2>
      <div className='interviews-section'>
      {dummyInterviews.map((interview) =>(
          <InterviewCard {...interview} />
        ))}
      </div>

    </section>
    </>
=======
    <div>Home Page</div>
>>>>>>> fe80aff24bd8bb19c6b3a8b302794939ce2d8848
  )
}

export default Page