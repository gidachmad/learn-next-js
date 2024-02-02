import Button from "@/components/Button";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { TodoItem } from "@/components/TodoItem";
import prisma from "@/lib/prisma";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: number, done: boolean) {
  'use server'

  await prisma.todo.update({ where: { id }, data: { done } });
}

export default async function Todo() {
  const todos = await getTodos();

  return (
    <>
      <Navbar returnHome />
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Todos</h1>
        <Button >
          <Link href="/todo/new">New Todo</Link>
        </Button>
      </header>
      
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.title} done={todo.done} toggleTodoDone={toggleTodo} />
        ))}
      </ul>
    </>
  )
}