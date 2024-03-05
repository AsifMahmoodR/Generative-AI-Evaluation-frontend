 'use client';

import MyWizard from './components/MyWized';
import Header from './components/Layout/Header';


export default function Example() {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"><MyWizard /></div>
        </main>
      </div>
    </>
  )
}
