const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/samplegame/Build',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
            onProxyRes: (proxyRes, req, res) => {
                const filePath = req.url.split('?')[0];
                if (filePath.endsWith('.js')) {
                    proxyRes.headers['Content-Type'] = 'application/javascript';
                } else if (filePath.endsWith('.wasm')) {
                    proxyRes.headers['Content-Type'] = 'application/wasm';
                } else if (filePath.endsWith('.data')) {
                    proxyRes.headers['Content-Type'] = 'application/octet-stream';
                }
                if (filePath.endsWith('.gz')) {
                    proxyRes.headers['Content-Encoding'] = 'gzip';
                }
            }
        })
    );
};
