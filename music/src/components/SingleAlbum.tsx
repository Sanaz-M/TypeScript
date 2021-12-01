import Song from '../interfaces/song'

interface SongDetailProps {
    song: Song
  }

const SingleAlbum = ({ song }: SongDetailProps) => {
    return (
        <div className="music-card mx-2 text-white">
        <div className="media d-flex">
          <img
            src={song.album.cover_medium}
            className="mr-3 img-fluid img1"
            alt="cover"
          />
          <div className="media-body bodyHover d-flex align-self-center">
            <h6>{song.title}</h6>
          </div>
        </div>
      </div>
      )
}
export default SingleAlbum;