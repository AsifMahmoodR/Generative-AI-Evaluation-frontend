 'use client';

import MyWizard from './components/MyWized';
import Header from './components/Layout/Header';


export default function Example() {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <main className='mx-auto max-w-1xl py-4 px-4'>
          <MyWizard />
        </main>
      </div>
    </>
  )
}
