import Image from 'next/image';
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import {useRef} from 'react';
import {useRouter} from 'next/router';
import Avatar from '../components/Avatar.jsx';
import HeaderOptions from '../components/HeaderOptions.jsx';
function Header(){
	const router = useRouter();
	const input = useRef(null);

	const search = (e) => {
		e.preventDefault();
		const term = input.current.value;
		if(!term) return;
		router.push(`/search?term=${term}`);
	}
	return (
			<header className="sticky top-0 bg-white">
				<div className="flex items-center p-6 w-full">
					<Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
					 height={40} width={120} className="cursor-pointer"
					 onClick={()=> router.push("/")}
					 />
					 <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
					 	<input className="focus:outline-none flex-grow w-full item" ref={input} type="text" />
					 	<XIcon className="h-6 cursor-pointer transition duration-100 transform hover:scale-125" onClick={()=> input.current.value =""}/>
					 	<MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
					 	<SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>
					 	<button onClick={search} hidden>Search</button>
					 </form>
					<Avatar className="ml-auto" url="https://scontent.fqfd1-1.fna.fbcdn.net/v/t1.6435-9/145850302_875548509863436_9089739732815159793_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=0rnt0JnhQi4AX9AmuM1&_nc_ht=scontent.fqfd1-1.fna&oh=72880a148ca513d50b144f9a83d75fc5&oe=60F404BD" />

				</div>
				<HeaderOptions />
			</header>
		)
}

export default Header;