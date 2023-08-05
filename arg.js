function extract(argv) {
    const patternArg = argv.findIndex(arg => !!arg.match('--filter=(.*)'));
    const countArg = argv.indexOf('--count');
    return {
        pattern: (patternArg > -1) ? argv[patternArg].split('=')[1] : undefined,
        count: countArg > -1
    }
}

module.exports = {extract}