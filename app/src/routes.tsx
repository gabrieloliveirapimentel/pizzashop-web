import { Route, Routes } from 'react-router'

import { AuthLayout } from './pages/__layouts/auth'
import { AppLayout } from './pages/__layouts/app'

import { Dashboard } from './pages/app/dashboard/dashboard'
import { Orders } from './pages/app/orders/orders'

import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { PageNotFound } from './pages/404'

export function Router() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
