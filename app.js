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
    return [
        { "year": 2001, "value": 2, "series": 1 },
        { "year": 2002, "value": 2, "series": 1 },
        { "year": 2003, "value": 2, "series": 1 },
        { "year": 2004, "value": 2, "series": 1 },
        { "year": 2005, "value": 2, "series": 1 },
        { "year": 2006, "value": 2, "series": 1 },
        { "year": 2007, "value": 4, "series": 1 },
        { "year": 2008, "value": 1, "series": 1 },
        { "year": 2009, "value": 4, "series": 1 },

        { "year": 2001, "value": 3, "series": 2 },
        { "year": 2002, "value": 2, "series": 2 },
        { "year": 2003, "value": 3, "series": 2 },
        { "year": 2004, "value": 3, "series": 2 },
        { "year": 2005, "value": 1, "series": 2 },
        { "year": 2006, "value": 1, "series": 2 },
        { "year": 2007, "value": 3, "series": 2 },
        { "year": 2008, "value": 4, "series": 2 },
        { "year": 2009, "value": 5, "series": 2 }
    ]
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
        "width": 343,
        "height": 100,
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
        view: 'home',
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
