import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/redirect/$target/via-beforeLoad')({
  beforeLoad: ({ params: { target }, search: { reloadDocument } }) => {
    switch (target) {
      case 'internal':
        throw redirect({ to: '/posts', reloadDocument })
      case 'external':
        throw redirect({ href: 'http://example.com' })
    }
  },
  component: () => <div>{Route.fullPath}</div>,
})
