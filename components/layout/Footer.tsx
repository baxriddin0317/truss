import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FooterBadge from './FooterBadge'

interface links {
  name: string;
  href: string;
}

interface Ifooter {
  id: number,
  title: string,
  links: Array<links>
}

const footerLinks = [
  {
    id: 1,
    title: "company",
    links: [
      {
        name: "about",
        href: "#"
      },
      {
        name: "careers",
        href: "#"
      },
      {
        name: "press",
        href: "#"
      },
      {
        name: "engineering blog",
        href: "#"
      }
    ]
  },
  {
    id: 2,
    title: "community",
    links: [
      {
        name: "blog",
        href: "#"
      },
      {
        name: "help centre",
        href: "#"
      },
      {
        name: "status",
        href: "#"
      },
      {
        name: "affiliate programme",
        href: "#"
      }
    ]
  }
]

const Footer = () => {
  return (
    <footer className="bg-brand-blue-back pb-7">
      <FooterBadge />
      <div className="costum-container">
        <div className="flex justify-between items-start mb-20">
          <Image src={require("../../public/Assets/logoLight.png")} alt="footer logo" />
          <ul className="text-white flex gap-x-40">
            {footerLinks.map((item: Ifooter) => (
              <li key={item.id}>
                <h2 className="text-xl font-bold capitalize mb-8">
                  {item.title}
                </h2>
                <div className="flex flex-col">
                  {item.links.map((link: links) => (
                    <Link href={link.href} key={link.name} legacyBehavior>
                      <a className="mb-6 capitalize hover:text-brand-blue-primary">
                      {link.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <Link href={'#'}>
              <Image src={require('../../public/Assets/facebook.png')} alt="sa" />
            </Link>
            <Link href={'#'}>
              <Image src={require('../../public/Assets/linkedin.png')} alt="sa" />
            </Link>
            <Link href={'#'}>
              <Image src={require('../../public/Assets/twitter.png')} alt="sa" />
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm text-white">
          ©2022 Truss. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer