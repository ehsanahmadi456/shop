function shorten(title) {
    const splite = title.split(" ");
    const shortedTitle = `${splite[0]} ${splite[1]}`
    return shortedTitle;
}

export { shorten };