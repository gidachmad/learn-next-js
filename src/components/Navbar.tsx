'use client'

import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar({ returnHome = false }: { returnHome?: boolean }) {
  const router = useRouter()

  return (
    <>
      {returnHome ? (
        <Button className="mb-4 p-0">
          <Link className="flex gap-2 items-center py-2 px-4" href='/'>
            <ArrowLeftCircleIcon className="h-5 w-5"/>
            Back
          </Link>
        </Button>
      ) : (
        <Button className="mb-4 p-0">
          <span className="flex gap-2 items-center py-2 px-4" onClick={router.back}>
            <ArrowLeftCircleIcon className="h-5 w-5"/>
            Back
          </span>
        </Button>
      )}
    </>
  )
}