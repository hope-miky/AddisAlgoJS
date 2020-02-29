function heapify(source, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < source.length && source[l] > source[largest]) {
        largest = l;
        //heapify(source, l);
    } else if (r < source.length && source[r] > source[largest]) {
        largest = r;
        //heapify(source, r);
    }

    if (largest != i) {
        [source[largest], source[i]] = swap(source[largest], source[i])
        heapify(source, largest);
    }
    return source;
}

function heapSort(source) {
    for (let i = 0; i < source.length / 2 - 1; i++) {
        source = heapify(source, i)
    }
    return source;
}

function swap(source1, source2) {
    return [source2, source1];
}

console.log(heapSort([6, 5, 3, 1, 8, 7, 2, 4]))