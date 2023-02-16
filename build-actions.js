#!/usr/bin/env node

const fs = require('fs');
const { exec } = require('child_process');

const template = fs.readFileSync('.github/workflows/templates/generic-template.yml.template', {
    encoding: 'utf8',
    flag: 'r+',
});

const options = fs.readFileSync('versions.txt', {
        encoding: 'utf8',
        flag: 'r+',
    })
    .split("\n")
    .filter(l => l != null && l.trim() != "" && !l.startsWith('//'))
    .map(line => line.trim().split(" "))
    .reduce((prev, curr) => [...prev, {
        tec: curr[0],
        server: curr[1],
        phpVersion: curr[2],
        repo: curr[3],
    }], []);

options
    .forEach(op => {
        let temp = template;
        Object.keys(op).forEach(k => temp = temp.replace(new RegExp(`!!${k}!!`, 'g'), op[k]));
        fs.writeFileSync(`.github/workflows/${op.tec}${op.phpVersion}-${op.server}.yml`, temp);
    });

exec('git add .github/workflows/*.yml');

console.info('Finished!')
