function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    /* your code here */
    var counter = 0;
    return function () {
        /* your code here */

        var loadedDie = list[counter];
        counter += 1;
        return loadedDie

    }

}



var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6