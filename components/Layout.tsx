import React, { ReactNode } from 'react'
import Head from 'next/head'
import { useState } from 'react'
import Sidebar from './Sidebar'
import { MenuIcon } from '@heroicons/react/outline'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const sidebarOpenHandler = (open: boolean) => {
    setSidebarOpen(open);
  }
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={sidebarOpenHandler}></Sidebar>
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 p-10">
          {children}
        </main>
      </div >
      <div id="modal-root"></div>
    </div >
  )
}

export default Layout
