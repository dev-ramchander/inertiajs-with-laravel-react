import React from 'react'
import { createInertiaApp } from '@inertiajs/react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import { createRoot } from 'react-dom/client'
import Layout from './src/layouts'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'

createInertiaApp({
    id: 'app',
    resolve: (name) => {
      const pages = import.meta.glob('./src/pages/**/*.jsx', { eager: true })
      let page = pages[`./src/pages/${name}/index.jsx`]
      page.default.layout = page.default.layout || (page => <Layout children={page} />)
      return page;
    },
    setup({ el, App, props }) {
      createRoot(el).render(<App {...props} />);
    },
});
