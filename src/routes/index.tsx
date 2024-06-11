import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex items-center justify-center p-2 grow">
      <h1 className="inline-block text-5xl font-black md:text-6xl lg:text-8xl">
        <span
          className=" text-balance
            inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500
            underline-offset-[.5rem] md:underline-offset-[1rem] decoration-gray-200 dark:decoration-gray-800
            mb-2 uppercase [letter-spacing:-.05em]
            "
        >
          TSS - TanStack Starter
        </span>
      </h1>
    </div>
  )
}
