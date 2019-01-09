document.addEventListener('DOMContentLoaded', e => {
    console.log('ok')

    const opts = {
        actions: false,
        defaultStyle: true,
    }
    const spec = {
        "$schema": "https://vega.github.io/schema/vega-lite/3.0.0-rc6.json",
        "data": {
            "values": [
                {
                    "label": "2003",
                    "value": 1585,
                    "key": "pub_year",
                    "text": "2003 (1,585)"
                },
                {
                    "label": "2006",
                    "value": 1520,
                    "key": "pub_year",
                    "text": "2006 (1,520)"
                },
                {
                    "label": "2005",
                    "value": 1417,
                    "key": "pub_year",
                    "text": "2005 (1,417)"
                },
                {
                    "label": "2006",
                    "value": 1417,
                    "key": "pub_year",
                    "text": "2005 (1,417)"
                },
                {
                    "label": "2007",
                    "value": 1417,
                    "key": "pub_year",
                    "text": "2005 (1,417)"
                },
                {
                    "label": "2008",
                    "value": 1417,
                    "key": "pub_year",
                    "text": "2005 (1,417)"
                }
            ]
        },
        "mark": {
            "type": "line",
            "color": "#cc3233",
        },
        "width": 380,
        "height": 100,
        "encoding": {
            "x": {
                "field": "label",
                "type": "temporal",
                "axis": {
                    "title": null
                }
            },
            "y": {
                "field": "value",
                "type": "quantitative",
                "axis": {
                    "title": null
                }
            }
        },
        "selection": {
            "brush": {
                "encodings": [
                    "x"
                ],
                "type": "interval",
                "on": "[mousedown, window:mouseup] > window:mousemove!",
                "translate": "[mousedown, window:mouseup] > window:mousemove!",
                "zoom": "wheel!",
                "mark": {
                    "fill": "#333",
                    "fillOpacity": 0.125,
                    "stroke": "white"
                },
                "resolve": "global"
            }
        }
    }

    // vegaEmbed('#vis1', spec, opts).then(function (result) {
    //     console.log(result.view)
    // }).catch(console.error)
})
