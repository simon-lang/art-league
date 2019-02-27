const getData = () => {
    const a = _.range(0, 9).map(i => ({
        year: 2000 + i,
        value: _.random(1, 4),
        series: 1,
    }))
    const b = _.range(0, 9).map(i => ({
        year: 2000 + i,
        value: _.random(1, 4),
        series: 2,
    }))
    return a.concat(b)
}
const getSpec = (values, width = 130, height = 40) => {
    return {
        "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
        "description": "Google's stock price over time.",
        "config": {
            "style": {
                "cell": {
                    "stroke": "transparent"
                }
            }
        },
        "data": {
            values
        },
        width,
        height,
        "mark": "line",
        "encoding": {
            "x": {
                "field": "year",
                "type": "ordinal",
                "axis": null
            },
            "y": {
                "field": "value",
                "type": "quantitative",
                "axis": null
            },
            "color": {
                "field": "series",
                "type": "quantitative",
                "legend": null,
                scale: { range: ['#20324A', '#777'] }
            }
        }
    }
}
const artists = [
    ['Anri Sala', 45974, 389226, '05/04/2018'],
    ['Helen Marten', 46504, 438464, '06/04/2018'],
    ['Ryan Gander', 47939, 377680, '07/04/2018'],
    ['Andrea Zittel', 51718, 411401, '08/04/2018'],
    ['Pierre Huyghe', 47837, 374527, '09/04/2018'],
    ['Annette Messager', 50451, 397528, '10/04/2018'],
    ['Tabor Robak', 47797, 434827, '11/04/2018'],
    ['Ai Weiwei', 51006, 384454, '12/04/2018'],
]
const Home = {
    template: require('./home.html'),
    data: () => {
        return {
            artists
        }
    }
}
const Profile = { template: require('./profile.html') }
const Portfolio = {
    template: require('./portfolio.html'),
    data: () => {
        return {
            artists
        }
    },
    methods: {
        add: function () {
            this.artists.push(['Jase', 1337])
        },
        remove: function (i) {
            this.artists = [
                ...this.artists.slice(0, i)
            ]
        },
    }
}
const Calculator = {
    template: require('./calculator.html'),
    data: () => {
        return {
            value: ''
        }
    },
    methods: {
        add: function (n) {
            this.value += n
        }
    }
}
const Chart = {
    template: `<img src="chart.svg">`,
}
window.Vue.directive('vis', {
    inserted: function (el) {
        const spec = getSpec(getData())
        const opts = {
            actions: false,
            defaultStyle: true,
        }
        vegaEmbed(el, spec, opts).catch(console.error)
    }
})
window.Vue.directive('bigVis', {
    inserted: function (el) {
        const getBigVisSpec = () => ({
            "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
            "data": {
                "url": "data.json"
            },
            "vconcat": [
                {
                    "autosize": "fit",
                    "width": el.clientWidth,
                    "height": 9 / 16 * el.clientWidth,
                    "mark": {
                        "type": "line"
                    },
                    "encoding": {
                        "x": {
                            "field": "label",
                            "type": "temporal",
                            "timeUnit": "year",
                            "axis": {
                                tickOpacity: 0.1,
                                "title": "Year"
                            }
                        },
                        "y": {
                            "field": "value",
                            "type": "quantitative",
                            "axis": {
                                tickOpacity: 0.1,
                                "title": "Value"
                            }
                        },
                        "color": {
                            "field": "color",
                            "type": "nominal",
                            "axis": {
                                "title": "Institution Name"
                            },
                            "scale": {
                                "range": {
                                    "scheme": "blues"
                                }
                            },
                            "legend": null
                        }
                    }
                }
            ],
            "config": {
                "title": {
                    "color": "#fff"
                },
                "style": {
                    "guide-label": {
                        "fill": "#fff"
                    },
                    "guide-title": {
                        "fill": "#fff"
                    }
                },
                "axis": {
                    "domainColor": "#fff",
                    "gridColor": "#aaa",
                    "tickColor": "#fff"
                }
            }
        })
        const opts = {
            actions: false,
            defaultStyle: true,
            renderer: 'svg'
        }
        const render = () => {
            const spec = getBigVisSpec()
            vegaEmbed(el, spec, opts).catch(console.error)
        }
        window.addEventListener('resize', _.debounce(render, 100))
        render()
    }
})
const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/profile', component: Profile },
    { path: '/calculator', component: Calculator },
]
const router = new VueRouter({ routes })
const app = new window.Vue({
    router,
    components: {
        Portfolio
    },
    mounted: function () {
        console.log('mounted')
        // window.addEventListener('scroll', scrollWindow)
    },
    methods: {
        go: function (path) {
            this.$router.push(path)
        },
    }
}).$mount('#app')
