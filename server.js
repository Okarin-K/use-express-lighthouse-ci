const {createApp} = require('@lhci/server');
const express = require('express');

console.log('Starting server...');

(async () => {
    const app = express();
    const {app: lhciApp} = await createApp({
        storage: {
            storageMethod: 'sql',
            sqlDirect: 'mysql',
            sqlConnectionUrl: 'mysql://root:rootPassword@127.0.0.1/lighthouse'
        }
    });

    app.use(lhciApp);
    app.use(express.json({limit: '100mb'}));
    app.listen('8000', () => console.log('Listening to server...'));
})();
