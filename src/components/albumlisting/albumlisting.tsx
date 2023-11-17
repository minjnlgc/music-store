import AlbumlistingItem from "./albumlistingitem";

interface AlbumListingProps {
    heading?: string;
    listing?: { userId: number; id: number; title: string }[] | null;
}

const Albumlisting: React.FC<AlbumListingProps> = ({ heading = "Listing heading", listing = null }) => {
    if (!listing || listing.length === 0) {
        return <div>No item provided</div>
    }

    return (
        <section className="mb-12">
          <h2 className="text-3xl text-green-400 mb-4">{heading}</h2>
          <div className="grid grid-cols-5 gap-4">
            {
                listing.map((a, i) => {
                    return <AlbumlistingItem album={a} key={i}/>
                })
            }
            
          </div>
        </section>
      );
}

export default Albumlisting;