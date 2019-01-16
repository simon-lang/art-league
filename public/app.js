const spec = {
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
        "values": [
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

document.addEventListener('DOMContentLoaded', e => {
    console.log('DOMContentLoaded')

    const opts = {
        actions: false,
        defaultStyle: true,
    }
    vegaEmbed('#vis', spec, opts).then(function (result) {
        console.log(result.view)
    }).catch(console.error)
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
