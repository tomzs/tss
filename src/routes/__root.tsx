import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-[#28282B] flex flex-col">
      <div className="flex gap-2 p-2">
        <Link to="/" className="[&.active]:font-bold text-gray-200">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold text-gray-200">
          Lazy load page
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
})
