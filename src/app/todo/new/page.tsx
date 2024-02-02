import { BackwardIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
  'use server'

  const todo = data.get('todo')?.valueOf() as string;
  if (!todo) {
    throw new Error('Invalid Todo');
  }

  await prisma.todo.create({ data: { title: todo } });
  redirect('/todo');
}

export default function NewTodo() {
  return (
    <>
      <Navbar />
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Create New Todos</h1>
      </header>
      
      <form action={createTodo} className="flex gap-2 flex-col">
        <input type="text" id="todo" name="todo" className="bg-transparent border border-slate-100 p-2 rounded"/>
        <div className="flex gap-4 justify-end">
          <Button>
            <Link href="/todo">Cancel</Link>
          </Button>
          <Button type="submit">Create</Button>
        </div>
      </form>
    </>
  );
}