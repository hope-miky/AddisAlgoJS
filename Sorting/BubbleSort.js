function bubblesort(source) {
    if ((source.length == 0) || (source.length == 1)) {
        return source
    } else {
        for (let i = source.length; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (source[j] > source[j + 1]) {
                    [source[j], source[j + 1]] = [source[j + 1], source[j]]
                }
            }
        }

        return source;
    }
}





console.log(bubblesort_stepwise([5, 4, 8, 7, 9, 2, 6]))