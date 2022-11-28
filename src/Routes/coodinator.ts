export const goToHome = (navigate: (arg0: string) => void) => {
    navigate('/')
}

export const goToAlbum = (navigate: (arg0: string) => void, id: string) => {
    navigate(`/album/${id}`)
}