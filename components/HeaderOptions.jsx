import { SearchIcon, PhotographIcon, PlayIcon,NewspaperIcon, MapIcon, DotsVerticalIcon } from '@heroicons/react/solid';
import HeaderOptionSingle from './HeaderOptionSingle.jsx'
function HeaderOptions() {
	return (
			<div className="border-b flex w-full justify-evenly text-gray-700 text-sm sm:text-base lg:justify-start lg:space-x-36 lg:pl-52">
				{/*Left*/}
				<div className="flex space-x-6">
					<HeaderOptionSingle Icon={SearchIcon} title="All" selected />
					<HeaderOptionSingle Icon={PhotographIcon} title="Images" />
					<HeaderOptionSingle Icon={PlayIcon} title="Videos" />
					<HeaderOptionSingle Icon={NewspaperIcon} title="News" />
					<HeaderOptionSingle Icon={MapIcon} title="Maps" />
					<HeaderOptionSingle Icon={DotsVerticalIcon} title="More" />
				</div>

				{/*right*/}
				<div className="flex space-x-4">
					<p className="link">Settings</p>
					<p className="link">Tools</p>
				</div>
			</div>
		);
}

export default HeaderOptions;