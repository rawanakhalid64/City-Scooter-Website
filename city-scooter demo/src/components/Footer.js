import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <footer className="w-full border-t-2 border-solid border-dark dark:text-light dark:border-light font-medium text-lg sm:text-base ">
        <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
            <span>{new Date().getFullYear()}<span className="text-2xl px-1 text-bold">&copy; </span> كل الحقوق محفوظه</span>
            <div className="flex items-center lg:py-2">
            <Link href="/"> نحن<span className="text-primary dark:text-primaryDark text-2xl px-1"> &#9825; </span> معك</Link>
            </div>
            <Link href="/">say hello</Link>
        </Layout>
    </footer>
    </>
  )
}

export default Footer