const http = require('http');
const https = require('https');

const api_fetch = (url) => {
    return new Promise((resolve, reject) => {
        let method = url.split(':')[0].trim().toLowerCase() == 'http' ? http : https;

        method.get(url, (apiRes) => {
            let str = '';

            apiRes.on('data', (chunk) => {
                str += chunk;
            });

            apiRes.on('end', () => {
                try {
                    console.log(url);
                    let data = JSON.parse(str);
                    resolve(data);
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
};

module.exports = { api_fetch };





