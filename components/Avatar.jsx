function Avatar({url, className}) {
	return <img 
			src={url}
			alt ="profile image"
			className={`h-10 rounded-full w-10 cursor-pointer transition duration=150 transform hover:scale-110 ${className}`}
	/>
}

export default Avatar;