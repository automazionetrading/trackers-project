import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h3>HOME PAGE</h3>
      <p>Build your tracker is a free tool to produce a printable tracker for your projects and habits. </p>
      <p>It is a simple way to keep track of your progress and keep track of your goals. </p>
      <p>Here yoy can <Link href="/build">Build Your Own</Link></p>
      <p>See <Link href="/inspiration">some Inspirations</Link></p>
      <p>Find some useful theory in the <Link href="/resources">resources area</Link></p>
      <p>Learn more about <Link href="/about">the creator</Link></p>
    </main>
  )
}