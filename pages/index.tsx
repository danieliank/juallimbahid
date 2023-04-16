/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="snap-y snap-proximity overflow-y-scroll h-screen">
      {/* Header Start */}
      <nav className="navbar bg-base-100 snap-start fixed z-50">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Juallimbah.id</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Header End */}
      <div>
        {/* Hero Start */}
        <section
          className="hero min-h-screen flex snap-start"
          id="home"
          style={{
            backgroundImage: `url(/edited_hero_bg.png)`,
          }}
        >
          <div className="ml-[5%] mr-[30%] text-white font-extrabold text-5xl md:text-6xl 2xl:text-7xl">
            <br />
            MEMBANTU PERMASALAHAN LIMBAH KERTAS YANG MENUMPUK ! <br></br>
            <Link href={"https://wa.me/6281224147030/"}>
              <button className="btn bg-gray-900">Contact Us!</button>
            </Link>
          </div>
          <div className="ml-[30%] mr-[20%]"></div>
        </section>
        {/* Hero End */}
        {/* About Start */}
        <section className="h-screen snap-start p-32" id="about">
          <h2 className="text-5xl font-bold items text-center mb-10">
            About Juallimbah.id
          </h2>
          <div className="flex flex-wrap lg:flex-nowrap">
            <Image
              className="m-10"
              src="/about_photo.jpg"
              alt="About Image"
              width={750}
              height={500}
            ></Image>
            <p className="m-10 text-3xl bg-green-400 p-10 rounded-xl">
              Juallimbah.id merupakan perusahaan yang bergerak di bidang
              pengumpulan dan pengelolaan limbah daur ulang, khususnya limbah
              kardus & kertas bekas.
              <br />
              <br />
              Kenapa Juallimbah.id?
              <br />
              1. Mengurangi limbah kertas
              <br />
              2. Limbah menjadi rupiah
              <br />
              3. Membersihkan lingkungan kerja
            </p>
          </div>
        </section>
        {/* About End */}
        {/* Contact Start */}
        <section
          className="h-screen flex justify-center snap-start pt-96"
          id="contact"
        >
          <Link href={"https://wa.me/6281224147030/"}>
            <button className="btn btn-wide bg-gray-900">Contact Us!</button>
          </Link>
        </section>
        {/* Contact End */}
      </div>
      {/* Footer */}
      <footer className="footer p-10 bg-base-200 text-base-content snap-start">
        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            Daniel Ian Kurniawan
            <br />
            All rights reserved.
          </p>
        </div>
        <div>
          <span className="footer-title">Pages</span>
        </div>
        <div>
          <span className="footer-title"></span>
          <Link className="link link-hover" href="#home">
            Home
          </Link>
        </div>
        <div>
          <span className="footer-title"></span>
          <Link className="link link-hover" href="#about">
            About
          </Link>
        </div>
        <div>
          <span className="footer-title"></span>
          <Link className="link link-hover" href="#contact">
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
}
