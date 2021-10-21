const path = require('path')
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
})

module.exports = withMDX({
    webpack(config, options) {
        return config
    },
    module: {
        rules: [
            {
                test: /.(vert|frag)$/,
                use: 'raw-loader',
                include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/
            }
        ]
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', "ts", "tsx"]
})