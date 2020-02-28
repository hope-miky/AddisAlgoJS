function merge(source1, source2) {
    let p1 = p2 = 0;
    let final = [];

    while ((p1 < source1.length) && (p2 < source2.length)) {
        if (source1[p1] < source2[p2]) {
            final.push(source1[p1]);
            p1 += 1;
        } else {
            final.push(source2[p2]);
            p2 += 1;
        }

    }

    final += source1.slice(pi) + source2.slice(p2);
}

function main(source) {
    if (source.length <= 1)
        return source
    if (source.length == 2)
        return withValue2(source);

    let mid = source.length / 2;
    return merge(mergeSort(source.slice(0, mid),
        mergeSort(source.slice(mid))))

}

function withValue2(source) {
    if (source[0] > source[1]) {
        let temp = source[0];
        source[0] = source[1];
        source[1] = temp;
    }
    return source;
}

function mergeSort(source) {

}