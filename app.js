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

const getSpec = () => {
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
            "values": getData()
        },
        "width": 130,
        "height": 40,
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

document.addEventListener('DOMContentLoaded', e => {
    console.log('DOMContentLoaded')

    const opts = {
        actions: false,
        defaultStyle: true,
    }
    document.querySelectorAll('.vis').forEach(el => {
        const spec = getSpec()
        vegaEmbed(el, spec, opts).catch(console.error)
    })
})

const app = new window.Vue({
    el: '#app',
    data: {
        view: 'portfolio',
    },
    mounted: function () {
        console.log('mounted')

        document.querySelectorAll('.loading').forEach(el => {
            el.remove()
        })
        // window.addEventListener('scroll', scrollWindow)
    },
    methods: {
        go: function (v) {
            this.view = v
        },
    }
})
