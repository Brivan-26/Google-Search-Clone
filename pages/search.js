import Head from 'next/head';
import Header from '../components/Header.jsx';
import Avatar from '../components/Avatar.jsx';
import {API_KEY, CONTEXT_KEY} from '../keys';
import Response from '../Resonse';
import {useRouter} from 'next/router';
import SearchResult from '../components/SearchResult.jsx';
function Search({results}) {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>{router.query.term} - Google clone search</title>
				<meta name="description" content="Google Clone" />
        		<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<SearchResult results={results}/>
		</div>
		)
}
export default Search;

export async function getServerSideProps(context){
	const useDummyData = false;
	const startIndex = context.query.start || "0";

	const data = useDummyData ? Response:  await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
		).then((response) => response.json());

	return {
		props:{
			results:data,
		},

	};
}