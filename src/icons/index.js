import SvgIcon from '@/components/SvgIcon'

// webpack require
const svgRequired = require.context('./svg', false, /\.svg$/)
svgRequired.keys().forEach(item => svgRequired(item));

export default (app) => {
    app.component('svg-icon', SvgIcon)
}