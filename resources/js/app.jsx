import React from 'react'
import { createInertiaApp } from '@inertiajs/react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import { createRoot } from 'react-dom/client'
// import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'

createInertiaApp({
    id: 'app',
    resolve: (name) => {
      const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
      return pages[`./Pages/${name}.jsx`]  
    },
    // resolve: (name) => resolvePageComponent(`./pages/${name}.jsx`,import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
      createRoot(el).render(<App {...props} />)
    },
})
