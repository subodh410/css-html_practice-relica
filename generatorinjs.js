function* generator1() {
    let i = 1
    while (i < 3) {
        yield i;
        i++
    }

}
const foo = generator1();
console.log(foo.next());
console.log(foo.next());
console.log(foo.next());
console.log(foo.next());