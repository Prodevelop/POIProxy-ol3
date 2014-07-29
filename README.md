POIProxy-ol3
============

A <a href="https://github.com/Prodevelop/POIProxy">POIProxy</a> map client using <a href="http://ol3js.org/" target="_blank">OpenLayers 3</a> and the <a href="http://boundlessgeo.com/solutions/solutions-software/software/" target="_blank">Boundless SDK</a>

The webapp is up and running <a href="https://app.prodevelop.es/poiproxy-client/" target="_blank">here</a>

##How to build a development workspace of POIProxy-ol3

***Clone this repo***

`git clone https://github.com/Prodevelop/POIProxy-ol3.git`

***Add to your PATH the bin folder***

PATH_TO_POIPROXY-OL3_DIR/opengeosuite-4.1-sdk/bin

***Start a debug server***

`suite-sdk debug PATH_TO_POIPROXY-OL3_DIR`

The application will be up and running in your browser at: http://localhost:9080

Note: You'll need to configure a proxy in order to avoid your browser 'cross-domain policy'

If you are using Apache with mod_proxy configure this proxies:

<code>
        ProxyPass            /poiproxy   https://app.prodevelop.es/poiproxy
        ProxyPassReverse     /poiproxy  https://app.prodevelop.es/poiproxy
        
        ProxyPass            /poiproxy-demo   http://localhost:9080
        ProxyPassReverse     /poiproxy-demo  http://localhost:9080

        ProxyPass            /ficontent/api   https://app.prodevelop.es/ficontent/api
        ProxyPassReverse     /ficontent/api   https://app.prodevelop.es/ficontent/api
        
        ProxyPass            /lib   http://localhost:9080/lib
        ProxyPassReverse     /lib  http://localhost:9080/lib
</code>

In this case the application will be up and running in your browser at: http://localhost/poiproxy-demo

***Package the application***

`suite-sdk package PATH_TO_POIPROXY-OL3_DIR`

This will generate a war file deployable on a servlet container (e.g. Tomcat)
