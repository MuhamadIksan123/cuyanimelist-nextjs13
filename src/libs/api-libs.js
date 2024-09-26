export const getAnimeResponse = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const anime = await response.json();
    return anime;
}

export const getNestedAnimeResponse = async(resource, objectPropery) => {
    const response = await getAnimeResponse(resource);
    return response.data.flatMap((item) => item[objectPropery]);
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1); // 10 .. ~~ == math.floor
    const last = first + gap; // 15

    const response = {
        data: data.slice(first, last)
    }

    return response;
}