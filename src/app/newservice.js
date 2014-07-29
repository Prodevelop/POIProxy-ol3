var newService = {
  "id": "berlin_local_data_hotels",
  "format": "json",
  "apiKey": "",
  "encoding": "UTF-8",
  "SRS": "EPSG:4326",
  "categories": [
    "local_berlin_hotels"
  ],
  "requestTypes": {
    "browse": {
      "url": "http://www.berlin.de/stadtplan/gateway.ashx?a=getobjects&scaleRatio=20000&llNE=__MAXX__%2C__MAXY__&llSW=__MINX__%2C__MINY__&cs=0&id=1",
      "params": []
    },
    "search": {
      "url": "b",
      "params": []
    }
  },
  "featureTypes": {
    "browse": {
      "feature": "lon",
      "elements": {
        "name": {
          "input": "title"
        },
        "description": {
          "input": "desc"
        },
        "web": {
          "input": "link"
        },
        "image": {
          "input": ""
        },
        "address": {
          "input": ""
        },
        "phone": {
          "input": ""
        }
      },
      "lon": "lon",
      "lat": "lat"
    },
    "search": {
      "feature": "lon",
      "elements": {
        "name": {
          "input": "title"
        },
        "description": {
          "input": "desc"
        },
        "web": {
          "input": "link"
        },
        "image": {
          "input": ""
        },
        "address": {
          "input": ""
        },
        "phone": {
          "input": ""
        }
      },
      "lon": "lon",
      "lat": "lat"
    }
  }
};