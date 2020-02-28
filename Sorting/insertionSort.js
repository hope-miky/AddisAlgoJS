function insertionSort(source) {
    for (let i = 0; i < source.length; i++) {
        for (let j = i + 1; j < source.length; j++) {
            if (source[i] > source[j]) {
                let temp = source[i];
                source[i] = source[j];
                source[j] = temp;
            }
        }
    }
    return source;
}