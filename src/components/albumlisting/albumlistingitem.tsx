interface AlbumlistingItemProps {
    album: {userId: number, id: number, title: string };
}

const AlbumlistingItem: React.FC<AlbumlistingItemProps> = ( { album } ) => {
    return (
        <div className="bg-gray-800 p-4 rounded relative">
          {/* <!-- Image and Play Button --> */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/150"
              alt="Album"
              className="w-full rounded mb-2"
            />
            <button className="absolute bottom-2 right-2 bg-green-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-300">
              <span className="material-icons text-white"> play_arrow </span>
            </button>
          </div>

          {/* <!-- Album Details --> */}
          <div className="text-left">
            <h3 className="text-md font-bold mb-1 text-white"> {album.title} </h3>
            <p className="text-sm mb-2 text-gray-400">By Singer</p>
            <p className="text-sm mb-2 text-green-200">$9.99</p>

            {/* <!-- Add to Cart Icon --> */}
            <a
              href="#"
              className="inline-flex items-center text-green-400 hover:text-green-300"
            >
              <span className="material-icons"> shopping_cart </span>
              <span className="ml-1">Add to Cart</span>
            </a>
          </div>
        </div>
    );
}

export default AlbumlistingItem;