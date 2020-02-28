function linearSearch(source, pivot) {
    let indx = [];
    for (let i = 0; i < source.length; i++) {
        if (source[i] == pivot) {
            indx.push(i);
        }
    }
    if (!indx.length)
        return null;
    else return indx;
}