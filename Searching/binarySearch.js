function midFinder(first, last) {
    return first + ((last - first) / 2);
}

function binarySearch(source, pivot) {
    let first = 0;
    let last = source.length - 1
    let mid = midFinder(first, last);

    while (pivot != source[mid]) {
        if (pivot > source[mid]) {
            first = mid + 1;
            mid = midFinder(first, last);
        } else if (pivot < source[mid]) {
            last = mid - 1;
            mid = midFinder(first, last);
        }
        if (first == last)
            return null
    }
    return mid;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))