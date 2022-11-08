// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const getFiles = (dir, files_) => {
    files_ = files_ || [];
    const files = fs.readdirSync(dir);
    for (const i in files) {
        const name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
};

const files1 = getFiles('./src/components');
const files2 = getFiles('./src/styles');

const files = [...files1, ...files2];

const regex = /'(\w*:)?(\w*)(-)?(\w*)?(-)?(\w*)?'/g;

const safelist = [];
const safelistSet = new Set();

files.forEach((file) => {
    if (file.endsWith('-cva.ts')) {
        const contents = fs.readFileSync(file, 'utf8');

        const matches = contents.match(regex);
        console.log(matches);
        if (matches) {
            matches.forEach((match) => {
                safelistSet.add(match);
            });
        }
    }
});

safelistSet.forEach((item) => {
    safelist.push(item);
});

fs.writeFileSync(
    './public/safelist.txt',
    safelist.join('\n').replace(/'/g, ''),
    'utf8',
);
