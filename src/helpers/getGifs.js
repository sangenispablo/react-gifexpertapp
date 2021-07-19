export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=4XxSCOtuW7pwshxkhXa7oI64EzynasrJ`
    const resp = await fetch(url);
    const {data} = await resp.json();

    return data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });
}