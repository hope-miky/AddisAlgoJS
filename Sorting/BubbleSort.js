function bubblesort(source) {
    let left = 0;
    let right = 1;
    let temp = 0;
    if (source.length == 0) {
        return null
    } else if (source.length == 1) {
        return source
    } else {
        for (let i = source.length; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (source[j] > source[j + 1]) {
                    temp = source[j];
                    source[j] = source[j + 1];
                    source[j + 1] = temp;
                }

            }
        }

        return source;
    }
}


function swap(left, right) {
    return right, left;
}


console.log(bubblesort([]))