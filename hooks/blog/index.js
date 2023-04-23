
export async function blogFetcher(url) {
    const res = await fetch(url, {
        // headers: {
        //     Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        //     Accept: 'application/vnd.github+json'
        // },
        method: "GET",
    });

    const data = await res.json();

    return data;
}

