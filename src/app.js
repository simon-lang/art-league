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

const getBigData = () => {
    const a = _.range(0, 19).map(i => ({
        year: 2000 + i,
        value: _.random(1, 300),
        series: 1,
    }))
    const b = _.range(0, 19).map(i => ({
        year: 2000 + i,
        value: _.random(1, 400),
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

const Home = {
    template: require('./home.html'),
    data: () => {
        return {
            artists: [
                ['Anri Sala', 45974, 389226, '05/04/2018'],
                ['Helen Marten', 46504, 438464, '06/04/2018'],
                ['Ryan Gander', 47939, 377680, '07/04/2018'],
                ['Andrea Zittel', 51718, 411401, '08/04/2018'],
                ['Pierre Huyghe', 47837, 374527, '09/04/2018'],
                ['Annette Messager', 50451, 397528, '10/04/2018'],
                ['Tobor Robak', 47797, 434827, '11/04/2018'],
                ['Ai Weiwei', 51006, 384454, '12/04/2018'],
            ]
        }
    }
}
const Portfolio = { template: require('./portfolio.html') }
const Profile = { template: require('./profile.html') }
const Calculator = {
    template: require('./calculator.html'),
    data: () => {
        return {
            value: ''
        }
    },
    methods: {
        add: function(n) {
            this.value += n
        }
    }
}

window.Vue.directive('vis', {
    inserted: function(el) {
        const spec = getSpec(getData())
        const opts = {
            actions: false,
            defaultStyle: true,
        }
        vegaEmbed(el, spec, opts).catch(console.error)
    }
})

window.Vue.directive('bigVis', {
    inserted: function(el) {
        const spec = getSpec(getBigData(), 500, 200)
        const opts = {
            actions: false,
            defaultStyle: true,
        }
        vegaEmbed(el, spec, opts).catch(console.error)
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
    data: {
        // view: 'portfolio',
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
