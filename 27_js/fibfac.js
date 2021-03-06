// Team Adjective Nouns :: Noakai Aronesty, Kevin Cao
// SoftDev pd0
// K27 -- Basic functions in JavaScript
// 2022-02-05
// --------------------------------------------------


// as a duo...
// pair programming style,
// implement a fact and fib fxn


//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.

function fact(n) {
    if (n == 1) {
        return n
    }
    else return n * fact(n - 1)
}

function helpy(first, second, remain) {
    if (remain == 0) return second
    else if (remain == 1) return first
    else return helpy(second, (first + second), (remain - 1))
}

function fib(n) {
    return helpy(1, 1, (n))
}

function gcd(a, b) {
    if (a == b) return a
    else if (a > b) return gcd((a - b), b)
    else return gcd(a, (b - a))
}
