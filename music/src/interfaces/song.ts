interface Song {
    duration: string
    id: number
    url: string
    title: string
    src: string
    album: {
        cover_medium:string
        id: number
        title: string
    }
  }
  
  export default Song