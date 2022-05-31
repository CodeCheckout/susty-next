import httpProxyMiddleware from 'next-http-proxy-middleware'

export default (req, res) =>
    httpProxyMiddleware(req, res, {
        // You can use the `http-proxy` option
        target: `${
            process.env.LOCAL_SERVER_URL ||
            'https://susty-server-backend.herokuapp.com/api'
        }`,
        // In addition, you can use the `pathRewrite` option provided by `next-http-proxy`
        pathRewrite: [
            {
                patternStr: '^/api',
                replaceStr: '',
            },
        ],
    })
