export const getMovieImg = (path) => {
    return path ?
        `${process.env.REACT_APP_API_IMG}${path}` :
        `${process.env.PUBLIC_URL}/placeholder.jpg`;
};