"use client";
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import { PlusCircle } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';



const page = () => {
  const {user} = useUser();
  const create =useMutation(api.documents.create)
  const onCreate = () =>{
    const promise = create({title: 'Unitled note'})

    toast.promise(promise,{
      loading: 'Creating note...',
      success: 'Note created',
      error: 'Failed to create note'
    })
  }
  return (
    <div className='h-full flex flex-col items-center justify-center space-y-2'>
      <Image src='/empty.png' alt='' width={300} height={300} className='dark:hidden' />
      <Image src='/empty-dark.png' alt='' width={300} height={300} className='hidden dark:block' />
      <h2 className='text-lg font-medium'>
        Welcome {user?.firstName}&apos;s  Motion
      </h2>
      <Button onClick={onCreate }>
        <PlusCircle className='h-4 w-4 mr-2' />
        Create a note
      </Button>

    </div>
  )
}

export default page