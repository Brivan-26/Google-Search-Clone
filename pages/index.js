import Head from 'next/head'
import Image from 'next/image';
import Avatar from '../components/Avatar.jsx';
import Footer from '../components/Footer.jsx';
import { ViewGridIcon,SearchIcon, MicrophoneIcon } from '@heroicons/react/solid';
import {useRef} from 'react';
import {useRouter} from 'next/router';
export default function Home() {
  const router = useRouter();
  const input = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = input.current.value;
    if(!term) return;
    router.push(`/search?term=${term}`);

  }
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Google Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/*Header*/}
        <header className="flex justify-between p-4 w-full text-gray-700 text-small">
          <div className="flex space-x-4 items-center">
            <p className="link">About</p>
            <p className="link">Store</p>
          </div>
            
          <div className="flex space-x-4 items-center">
            <p className="link">Gmail</p>
            <p className="link">Images</p>
            <ViewGridIcon className="h-10 w-10 rounded-full hover:bg-gray-100 cursor-pointer p-2" />
            <Avatar url="https://scontent.fqfd1-1.fna.fbcdn.net/v/t1.6435-9/145850302_875548509863436_9089739732815159793_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=0rnt0JnhQi4AX9AmuM1&_nc_ht=scontent.fqfd1-1.fna&oh=72880a148ca513d50b144f9a83d75fc5&oe=60F404BD" />
          </div>
        </header>
      {/*Body*/}
        <form className="flex flex-col items-center mt-15 flex-grow">
          <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" height={100} width={300}/>
          <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-300 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
            <SearchIcon className="h-10 mr-3 text-gray-500"/>
            <input ref={input} type="text" className="flex-grow focus:outline-none"/>
            <MicrophoneIcon className="h-10"/>
          </div>
          <div className="mt-8 flex flex-col w-1/2 space-y-3 justify-center sm:flex-row sm:space-y-0 sm:space-x-4">
            <button onClick={search} className="btn">Google Search</button>
            <button onClick={search} className="btn">I'm feeling happy!</button>
          </div>
        </form>
      {/*Footer*/}
      <Footer />

    </div>
  )
}
