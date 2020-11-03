console.log(__filename);
console.log(__dirname);

console.log(process.argv);
console.log(process.pid);
console.log(process.platform);
console.log(process.versions);
console.log(process.stdout.write('my first node app \n'))
process.on('exit', () => {
    console.log('exit')
})

console.log(process.cwd());

setTimeout(() => process.exit(), 2000);


