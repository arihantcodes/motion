"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Heading = () => {
  return (
 <div className="max-w-3xl space-y-4">
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
      Your Ideas ,Documents,& plans.Unified
        Welcome to the <span className="underline">Motion</span>
    </h1>
    <h3 className="text-base sm:tetx-xl md:text-2xl font-medium">
      Motion is a simple and easy to use tool that allows you to manage your
      documents, ideas, and plans in one place. It's a great way to keep track
      of everything you need to do, and it's perfect for individuals and teams
      alike.
    </h3>
    <Button>Enter Motion
      <ArrowRight className="h-4 w-4 ml-2"/>
    </Button>
 </div>
  )
}

export default Heading