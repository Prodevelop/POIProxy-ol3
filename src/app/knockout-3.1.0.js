// Knockout JavaScript library v3.1.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)
(function() {
    (function(p) {
        var A = this || (0, eval)("this"),
            w = A.document,
            K = A.navigator,
            t = A.jQuery,
            C = A.JSON;
        (function(p) {
            "function" === typeof require && "object" === typeof exports && "object" === typeof module ? p(module.exports || exports) : "function" === typeof define && define.amd ? define(["exports"], p) : p(A.ko = {})
        })(function(z) {
            function G(a, c) {
                return null === a || typeof a in M ? a === c : !1
            }
            function N(a, c) {
                var d;
                return function() {
                    d || (d = setTimeout(function() {
                        d = p;
                        a()
                    }, c))
                }
            }
            function O(a, c) {
                var d;
                return function() {
                    clearTimeout(d);
                    d = setTimeout(a, c)
                }
            }
            function H(b, c, d, e) {
                a.d[b] = {
                    init: function(b, h, g, k, l) {
                        var n, r;
                        a.ba(function() {
                            var g = a.a.c(h()),
                                k = !d !== !g,
                                s = !r;
                            if (s || c || k !== n) s && a.ca.fa() && (r = a.a.lb(a.e.childNodes(b), !0)), k ? (s || a.e.U(b, a.a.lb(r)), a.gb(e ? e(l, g) : l, b)) : a.e.da(b), n = k
                        }, null, {
                            G: b
                        });
                        return {
                            controlsDescendantBindings: !0
                        }
                    }
                };
                a.g.aa[b] = !1;
                a.e.Q[b] = !0
            }
            var a = "undefined" !== typeof z ? z : {};
            a.b = function(b, c) {
                for (var d = b.split("."), e = a, f = 0; f < d.length - 1; f++) e = e[d[f]];
                e[d[d.length - 1]] = c
            };
            a.s = function(a, c, d) {
                a[c] = d
            };
            a.version = "3.1.0";
            a.b("version", a.version);
            a.a = function() {
                function b(a, b) {
                    for (var c in a) a.hasOwnProperty(c) && b(c, a[c])
                }
                function c(a, b) {
                    if (b) for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                    return a
                }
                function d(a, b) {
                    a.__proto__ = b;
                    return a
                }
                var e = {
                    __proto__: []
                }
                instanceof Array,
                    f = {},
                    h = {};
                f[K && /Firefox\/2/i.test(K.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
                f.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
                b(f, function(a, b) {
                    if (b.length) for (var c = 0, d = b.length; c < d; c++) h[b[c]] = a
                });
                var g = {
                    propertychange: !0
                },
                    k = w &&
                    function() {
                        for (var a = 3, b = w.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];);
                        return 4 < a ? a : p
                    }();
                return {
                    mb: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                    r: function(a, b) {
                        for (var c = 0, d = a.length; c < d; c++) b(a[c], c)
                    },
                    l: function(a, b) {
                        if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b);
                        for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
                        return -1
                    },
                    hb: function(a, b, c) {
                        for (var d = 0, e = a.length; d < e; d++) if (b.call(c, a[d], d)) return a[d];
                        return null
                    },
                    ma: function(b, c) {
                        var d = a.a.l(b, c);
                        0 < d ? b.splice(d, 1) : 0 === d && b.shift()
                    },
                    ib: function(b) {
                        b = b || [];
                        for (var c = [], d = 0, e = b.length; d < e; d++) 0 > a.a.l(c, b[d]) && c.push(b[d]);
                        return c
                    },
                    ya: function(a, b) {
                        a = a || [];
                        for (var c = [], d = 0, e = a.length; d < e; d++) c.push(b(a[d], d));
                        return c
                    },
                    la: function(a, b) {
                        a = a || [];
                        for (var c = [], d = 0, e = a.length; d < e; d++) b(a[d], d) && c.push(a[d]);
                        return c
                    },
                    $: function(a, b) {
                        if (b instanceof Array) a.push.apply(a, b);
                        else
                        for (var c = 0, d = b.length; c < d; c++) a.push(b[c]);
                        return a
                    },
                    Y: function(b, c, d) {
                        var e = a.a.l(a.a.Sa(b), c);
                        0 > e ? d && b.push(c) : d || b.splice(e, 1)
                    },
                    na: e,
                    extend: c,
                    ra: d,
                    sa: e ? d : c,
                    A: b,
                    Oa: function(a, b) {
                        if (!a) return a;
                        var c = {},
                            d;
                        for (d in a) a.hasOwnProperty(d) && (c[d] = b(a[d], d, a));
                        return c
                    },
                    Fa: function(b) {
                        for (; b.firstChild;) a.removeNode(b.firstChild)
                    },
                    ec: function(b) {
                        b = a.a.R(b);
                        for (var c = w.createElement("div"), d = 0, e = b.length; d < e; d++) c.appendChild(a.M(b[d]));
                        return c
                    },
                    lb: function(b, c) {
                        for (var d = 0, e = b.length, g = []; d < e; d++) {
                            var k = b[d].cloneNode(!0);
                            g.push(c ? a.M(k) : k)
                        }
                        return g
                    },
                    U: function(b, c) {
                        a.a.Fa(b);
                        if (c) for (var d = 0, e = c.length; d < e; d++) b.appendChild(c[d])
                    },
                    Bb: function(b, c) {
                        var d = b.nodeType ? [b] : b;
                        if (0 < d.length) {
                            for (var e = d[0], g = e.parentNode, k = 0, h = c.length; k < h; k++) g.insertBefore(c[k], e);
                            k = 0;
                            for (h = d.length; k < h; k++) a.removeNode(d[k])
                        }
                    },
                    ea: function(a, b) {
                        if (a.length) {
                            for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;) a.shift();
                            if (1 < a.length) {
                                var c = a[0],
                                    d = a[a.length - 1];
                                for (a.length = 0; c !== d;) if (a.push(c), c = c.nextSibling, !c) return;
                                a.push(d)
                            }
                        }
                        return a
                    },
                    Db: function(a, b) {
                        7 > k ? a.setAttribute("selected", b) : a.selected = b
                    },
                    ta: function(a) {
                        return null === a || a === p ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                    },
                    oc: function(b, c) {
                        for (var d = [], e = (b || "").split(c), g = 0, k = e.length; g < k; g++) {
                            var h = a.a.ta(e[g]);
                            "" !== h && d.push(h)
                        }
                        return d
                    },
                    kc: function(a, b) {
                        a = a || "";
                        return b.length > a.length ? !1 : a.substring(0, b.length) === b
                    },
                    Sb: function(a, b) {
                        if (a === b) return !0;
                        if (11 === a.nodeType) return !1;
                        if (b.contains) return b.contains(3 === a.nodeType ? a.parentNode : a);
                        if (b.compareDocumentPosition) return 16 == (b.compareDocumentPosition(a) & 16);
                        for (; a && a != b;) a = a.parentNode;
                        return !!a
                    },
                    Ea: function(b) {
                        return a.a.Sb(b, b.ownerDocument.documentElement)
                    },
                    eb: function(b) {
                        return !!a.a.hb(b, a.a.Ea)
                    },
                    B: function(a) {
                        return a && a.tagName && a.tagName.toLowerCase()
                    },
                    q: function(b, c, d) {
                        var e = k && g[c];
                        if (!e && t) t(b).bind(c, d);
                        else if (e || "function" != typeof b.addEventListener) if ("undefined" != typeof b.attachEvent) {
                            var h = function(a) {
                                d.call(b, a)
                            },
                                f = "on" + c;
                            b.attachEvent(f, h);
                            a.a.u.ja(b, function() {
                                b.detachEvent(f, h)
                            })
                        } else
                        throw Error("Browser doesn't support addEventListener or attachEvent");
                        else b.addEventListener(c, d, !1)
                    },
                    ha: function(b, c) {
                        if (!b || !b.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                        var d;
                        "input" === a.a.B(b) && b.type && "click" == c.toLowerCase() ? (d = b.type, d = "checkbox" == d || "radio" == d) : d = !1;
                        if (t && !d) t(b).trigger(c);
                        else if ("function" == typeof w.createEvent) if ("function" == typeof b.dispatchEvent) d = w.createEvent(h[c] || "HTMLEvents"), d.initEvent(c, !0, !0, A, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d);
                        else
                        throw Error("The supplied element doesn't support dispatchEvent");
                        else if (d && b.click) b.click();
                        else if ("undefined" != typeof b.fireEvent) b.fireEvent("on" + c);
                        else
                        throw Error("Browser doesn't support triggering events");
                    },
                    c: function(b) {
                        return a.v(b) ? b() : b
                    },
                    Sa: function(b) {
                        return a.v(b) ? b.o() : b
                    },
                    ua: function(b, c, d) {
                        if (c) {
                            var e = /\S+/g,
                                g = b.className.match(e) || [];
                            a.a.r(c.match(e), function(b) {
                                a.a.Y(g, b, d)
                            });
                            b.className = g.join(" ")
                        }
                    },
                    Xa: function(b, c) {
                        var d = a.a.c(c);
                        if (null === d || d === p) d = "";
                        var e = a.e.firstChild(b);
                        !e || 3 != e.nodeType || a.e.nextSibling(e) ? a.e.U(b, [b.ownerDocument.createTextNode(d)]) : e.data = d;
                        a.a.Vb(b)
                    },
                    Cb: function(a, b) {
                        a.name = b;
                        if (7 >= k) try {
                            a.mergeAttributes(w.createElement("<input name='" + a.name + "'/>"), !1)
                        } catch (c) {}
                    },
                    Vb: function(a) {
                        9 <= k && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom))
                    },
                    Tb: function(a) {
                        if (k) {
                            var b = a.style.width;
                            a.style.width = 0;
                            a.style.width = b
                        }
                    },
                    ic: function(b, c) {
                        b = a.a.c(b);
                        c = a.a.c(c);
                        for (var d = [], e = b; e <= c; e++) d.push(e);
                        return d
                    },
                    R: function(a) {
                        for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c]);
                        return b
                    },
                    mc: 6 === k,
                    nc: 7 === k,
                    oa: k,
                    ob: function(b, c) {
                        for (var d = a.a.R(b.getElementsByTagName("input")).concat(a.a.R(b.getElementsByTagName("textarea"))), e = "string" == typeof c ?
                        function(a) {
                            return a.name === c
                        } : function(a) {
                            return c.test(a.name)
                        }, g = [], k = d.length - 1; 0 <= k; k--) e(d[k]) && g.push(d[k]);
                        return g
                    },
                    fc: function(b) {
                        return "string" == typeof b && (b = a.a.ta(b)) ? C && C.parse ? C.parse(b) : (new Function("return " + b))() : null
                    },
                    Ya: function(b, c, d) {
                        if (!C || !C.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                        return C.stringify(a.a.c(b), c, d)
                    },
                    gc: function(c, d, e) {
                        e = e || {};
                        var g = e.params || {},
                            k = e.includeFields || this.mb,
                            h = c;
                        if ("object" == typeof c && "form" === a.a.B(c)) for (var h = c.action, f = k.length - 1; 0 <= f; f--) for (var u = a.a.ob(c, k[f]), D = u.length - 1; 0 <= D; D--) g[u[D].name] =
                        u[D].value;
                        d = a.a.c(d);
                        var y = w.createElement("form");
                        y.style.display = "none";
                        y.action = h;
                        y.method = "post";
                        for (var p in d) c = w.createElement("input"), c.name = p, c.value = a.a.Ya(a.a.c(d[p])), y.appendChild(c);
                        b(g, function(a, b) {
                            var c = w.createElement("input");
                            c.name = a;
                            c.value = b;
                            y.appendChild(c)
                        });
                        w.body.appendChild(y);
                        e.submitter ? e.submitter(y) : y.submit();
                        setTimeout(function() {
                            y.parentNode.removeChild(y)
                        }, 0)
                    }
                }
            }();
            a.b("utils", a.a);
            a.b("utils.arrayForEach", a.a.r);
            a.b("utils.arrayFirst", a.a.hb);
            a.b("utils.arrayFilter", a.a.la);
            a.b("utils.arrayGetDistinctValues", a.a.ib);
            a.b("utils.arrayIndexOf", a.a.l);
            a.b("utils.arrayMap", a.a.ya);
            a.b("utils.arrayPushAll", a.a.$);
            a.b("utils.arrayRemoveItem", a.a.ma);
            a.b("utils.extend", a.a.extend);
            a.b("utils.fieldsIncludedWithJsonPost", a.a.mb);
            a.b("utils.getFormFields", a.a.ob);
            a.b("utils.peekObservable", a.a.Sa);
            a.b("utils.postJson", a.a.gc);
            a.b("utils.parseJson", a.a.fc);
            a.b("utils.registerEventHandler", a.a.q);
            a.b("utils.stringifyJson", a.a.Ya);
            a.b("utils.range", a.a.ic);
            a.b("utils.toggleDomNodeCssClass", a.a.ua);
            a.b("utils.triggerEvent", a.a.ha);
            a.b("utils.unwrapObservable", a.a.c);
            a.b("utils.objectForEach", a.a.A);
            a.b("utils.addOrRemoveItem", a.a.Y);
            a.b("unwrap", a.a.c);
            Function.prototype.bind || (Function.prototype.bind = function(a) {
                var c = this,
                    d = Array.prototype.slice.call(arguments);
                a = d.shift();
                return function() {
                    return c.apply(a, d.concat(Array.prototype.slice.call(arguments)))
                }
            });
            a.a.f = new
            function() {
                function a(b, h) {
                    var g = b[d];
                    if (!g || "null" === g || !e[g]) {
                        if (!h) return p;
                        g = b[d] = "ko" + c++;
                        e[g] = {}
                    }
                    return e[g]
                }
                var c = 0,
                    d = "__ko__" + (new Date).getTime(),
                    e = {};
                return {
                    get: function(c, d) {
                        var e = a(c, !1);
                        return e === p ? p : e[d]
                    },
                    set: function(c, d, e) {
                        if (e !== p || a(c, !1) !== p) a(c, !0)[d] = e
                    },
                    clear: function(a) {
                        var b = a[d];
                        return b ? (delete e[b], a[d] = null, !0) : !1
                    },
                    L: function() {
                        return c+++d
                    }
                }
            };
            a.b("utils.domData", a.a.f);
            a.b("utils.domData.clear", a.a.f.clear);
            a.a.u = new
            function() {
                function b(b, c) {
                    var e = a.a.f.get(b, d);
                    e === p && c && (e = [], a.a.f.set(b, d, e));
                    return e
                }
                function c(d) {
                    var e = b(d, !1);
                    if (e) for (var e = e.slice(0), k = 0; k < e.length; k++) e[k](d);
                    a.a.f.clear(d);
                    a.a.u.cleanExternalData(d);
                    if (f[d.nodeType]) for (e = d.firstChild; d = e;) e = d.nextSibling, 8 === d.nodeType && c(d)
                }
                var d = a.a.f.L(),
                    e = {
                        1: !0,
                        8: !0,
                        9: !0
                    },
                    f = {
                        1: !0,
                        9: !0
                    };
                return {
                    ja: function(a, c) {
                        if ("function" != typeof c) throw Error("Callback must be a function");
                        b(a, !0).push(c)
                    },
                    Ab: function(c, e) {
                        var k = b(c, !1);
                        k && (a.a.ma(k, e), 0 == k.length && a.a.f.set(c, d, p))
                    },
                    M: function(b) {
                        if (e[b.nodeType] && (c(b), f[b.nodeType])) {
                            var d = [];
                            a.a.$(d, b.getElementsByTagName("*"));
                            for (var k = 0, l = d.length; k < l; k++) c(d[k])
                        }
                        return b
                    },
                    removeNode: function(b) {
                        a.M(b);
                        b.parentNode && b.parentNode.removeChild(b)
                    },
                    cleanExternalData: function(a) {
                        t && "function" == typeof t.cleanData && t.cleanData([a])
                    }
                }
            };
            a.M = a.a.u.M;
            a.removeNode = a.a.u.removeNode;
            a.b("cleanNode", a.M);
            a.b("removeNode", a.removeNode);
            a.b("utils.domNodeDisposal", a.a.u);
            a.b("utils.domNodeDisposal.addDisposeCallback", a.a.u.ja);
            a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.u.Ab);
            (function() {
                a.a.Qa = function(b) {
                    var c;
                    if (t) if (t.parseHTML) c = t.parseHTML(b) || [];
                    else {
                        if ((c = t.clean([b])) && c[0]) {
                            for (b = c[0]; b.parentNode && 11 !== b.parentNode.nodeType;) b = b.parentNode;
                            b.parentNode && b.parentNode.removeChild(b)
                        }
                    } else {
                        var d = a.a.ta(b).toLowerCase();
                        c = w.createElement("div");
                        d = d.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !d.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!d.indexOf("<td") || !d.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""];
                        b = "ignored<div>" + d[1] + b + d[2] + "</div>";
                        for ("function" == typeof A.innerShiv ? c.appendChild(A.innerShiv(b)) : c.innerHTML = b; d[0]--;) c = c.lastChild;
                        c = a.a.R(c.lastChild.childNodes)
                    }
                    return c
                };
                a.a.Va = function(b, c) {
                    a.a.Fa(b);
                    c = a.a.c(c);
                    if (null !== c && c !== p) if ("string" != typeof c && (c = c.toString()), t) t(b).html(c);
                    else
                    for (var d = a.a.Qa(c), e = 0; e < d.length; e++) b.appendChild(d[e])
                }
            })();
            a.b("utils.parseHtmlFragment", a.a.Qa);
            a.b("utils.setHtml", a.a.Va);
            a.w = function() {
                function b(c, e) {
                    if (c) if (8 == c.nodeType) {
                        var f = a.w.xb(c.nodeValue);
                        null != f && e.push({
                            Rb: c,
                            cc: f
                        })
                    } else if (1 == c.nodeType) for (var f = 0, h = c.childNodes, g = h.length; f < g; f++) b(h[f], e)
                }
                var c = {};
                return {
                    Na: function(a) {
                        if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()");
                        var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                        c[b] = a;
                        return "\x3c!--[ko_memo:" + b + "]--\x3e"
                    },
                    Hb: function(a, b) {
                        var f = c[a];
                        if (f === p) throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.");
                        try {
                            return f.apply(null, b || []), !0
                        } finally {
                            delete c[a]
                        }
                    },
                    Ib: function(c, e) {
                        var f = [];
                        b(c, f);
                        for (var h = 0, g = f.length; h < g; h++) {
                            var k = f[h].Rb,
                                l = [k];
                            e && a.a.$(l, e);
                            a.w.Hb(f[h].cc, l);
                            k.nodeValue = "";
                            k.parentNode && k.parentNode.removeChild(k)
                        }
                    },
                    xb: function(a) {
                        return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null
                    }
                }
            }();
            a.b("memoization", a.w);
            a.b("memoization.memoize", a.w.Na);
            a.b("memoization.unmemoize", a.w.Hb);
            a.b("memoization.parseMemoText", a.w.xb);
            a.b("memoization.unmemoizeDomNodeAndDescendants", a.w.Ib);
            a.Ga = {
                throttle: function(b, c) {
                    b.throttleEvaluation = c;
                    var d = null;
                    return a.h({
                        read: b,
                        write: function(a) {
                            clearTimeout(d);
                            d = setTimeout(function() {
                                b(a)
                            }, c)
                        }
                    })
                },
                rateLimit: function(a, c) {
                    var d, e, f;
                    "number" == typeof c ? d = c : (d = c.timeout, e = c.method);
                    f = "notifyWhenChangesStop" == e ? O : N;
                    a.Ma(function(a) {
                        return f(a, d)
                    })
                },
                notify: function(a, c) {
                    a.equalityComparer = "always" == c ? null : G
                }
            };
            var M = {
                undefined: 1,
                "boolean": 1,
                number: 1,
                string: 1
            };
            a.b("extenders", a.Ga);
            a.Fb = function(b, c, d) {
                this.target = b;
                this.za = c;
                this.Qb = d;
                this.sb = !1;
                a.s(this, "dispose", this.F)
            };
            a.Fb.prototype.F = function() {
                this.sb = !0;
                this.Qb()
            };
            a.N = function() {
                a.a.sa(this, a.N.fn);
                this.H = {}
            };
            var F = "change";
            z = {
                V: function(b, c, d) {
                    var e = this;
                    d = d || F;
                    var f = new a.Fb(e, c ? b.bind(c) : b, function() {
                        a.a.ma(e.H[d], f)
                    });
                    e.o && e.o();
                    e.H[d] || (e.H[d] = []);
                    e.H[d].push(f);
                    return f
                },
                notifySubscribers: function(b, c) {
                    c = c || F;
                    if (this.qb(c)) try {
                        a.k.jb();
                        for (var d = this.H[c].slice(0), e = 0, f; f = d[e]; ++e) f.sb || f.za(b)
                    } finally {
                        a.k.end()
                    }
                },
                Ma: function(b) {
                    var c = this,
                        d = a.v(c),
                        e, f, h;
                    c.ia || (c.ia = c.notifySubscribers, c.notifySubscribers = function(a, b) {
                        b && b !== F ? "beforeChange" === b ? c.bb(a) : c.ia(a, b) : c.cb(a)
                    });
                    var g = b(function() {
                        d && h === c && (h = c());
                        e = !1;
                        c.Ka(f, h) && c.ia(f = h)
                    });
                    c.cb = function(a) {
                        e = !0;
                        h = a;
                        g()
                    };
                    c.bb = function(a) {
                        e || (f = a, c.ia(a, "beforeChange"))
                    }
                },
                qb: function(a) {
                    return this.H[a] && this.H[a].length
                },
                Wb: function() {
                    var b = 0;
                    a.a.A(this.H, function(a, d) {
                        b += d.length
                    });
                    return b
                },
                Ka: function(a, c) {
                    return !this.equalityComparer || !this.equalityComparer(a, c)
                },
                extend: function(b) {
                    var c = this;
                    b && a.a.A(b, function(b, e) {
                        var f = a.Ga[b];
                        "function" == typeof f && (c = f(c, e) || c)
                    });
                    return c
                }
            };
            a.s(z, "subscribe", z.V);
            a.s(z, "extend", z.extend);
            a.s(z, "getSubscriptionsCount", z.Wb);
            a.a.na && a.a.ra(z, Function.prototype);
            a.N.fn = z;
            a.tb = function(a) {
                return null != a && "function" == typeof a.V && "function" == typeof a.notifySubscribers
            };
            a.b("subscribable", a.N);
            a.b("isSubscribable", a.tb);
            a.ca = a.k = function() {
                function b(a) {
                    d.push(e);
                    e = a
                }
                function c() {
                    e = d.pop()
                }
                var d = [],
                    e, f = 0;
                return {
                    jb: b,
                    end: c,
                    zb: function(b) {
                        if (e) {
                            if (!a.tb(b)) throw Error("Only subscribable things can act as dependencies");
                            e.za(b, b.Kb || (b.Kb = ++f))
                        }
                    },
                    t: function(a, d, e) {
                        try {
                            return b(), a.apply(d, e || [])
                        } finally {
                            c()
                        }
                    },
                    fa: function() {
                        if (e) return e.ba.fa()
                    },
                    pa: function() {
                        if (e) return e.pa
                    }
                }
            }();
            a.b("computedContext", a.ca);
            a.b("computedContext.getDependenciesCount", a.ca.fa);
            a.b("computedContext.isInitial", a.ca.pa);
            a.m = function(b) {
                function c() {
                    if (0 < arguments.length) return c.Ka(d, arguments[0]) && (c.P(), d = arguments[0], c.O()), this;
                    a.k.zb(c);
                    return d
                }
                var d = b;
                a.N.call(c);
                a.a.sa(c, a.m.fn);
                c.o = function() {
                    return d
                };
                c.O = function() {
                    c.notifySubscribers(d)
                };
                c.P = function() {
                    c.notifySubscribers(d, "beforeChange")
                };
                a.s(c, "peek", c.o);
                a.s(c, "valueHasMutated", c.O);
                a.s(c, "valueWillMutate", c.P);
                return c
            };
            a.m.fn = {
                equalityComparer: G
            };
            var E = a.m.hc = "__ko_proto__";
            a.m.fn[E] = a.m;
            a.a.na && a.a.ra(a.m.fn, a.N.fn);
            a.Ha = function(b, c) {
                return null === b || b === p || b[E] === p ? !1 : b[E] === c ? !0 : a.Ha(b[E], c)
            };
            a.v = function(b) {
                return a.Ha(b, a.m)
            };
            a.ub = function(b) {
                return "function" == typeof b && b[E] === a.m || "function" == typeof b && b[E] === a.h && b.Yb ? !0 : !1
            };
            a.b("observable", a.m);
            a.b("isObservable", a.v);
            a.b("isWriteableObservable", a.ub);
            a.T = function(b) {
                b = b || [];
                if ("object" != typeof b || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                b = a.m(b);
                a.a.sa(b, a.T.fn);
                return b.extend({
                    trackArrayChanges: !0
                })
            };
            a.T.fn = {
                remove: function(b) {
                    for (var c = this.o(), d = [], e = "function" != typeof b || a.v(b) ?
                    function(a) {
                        return a === b
                    } : b, f = 0; f < c.length; f++) {
                        var h = c[f];
                        e(h) && (0 === d.length && this.P(), d.push(h), c.splice(f, 1), f--)
                    }
                    d.length && this.O();
                    return d
                },
                removeAll: function(b) {
                    if (b === p) {
                        var c = this.o(),
                            d = c.slice(0);
                        this.P();
                        c.splice(0, c.length);
                        this.O();
                        return d
                    }
                    return b ? this.remove(function(c) {
                        return 0 <= a.a.l(b, c)
                    }) : []
                },
                destroy: function(b) {
                    var c = this.o(),
                        d = "function" != typeof b || a.v(b) ?
                        function(a) {
                            return a === b
                        } : b;
                    this.P();
                    for (var e = c.length - 1; 0 <= e; e--) d(c[e]) && (c[e]._destroy = !0);
                    this.O()
                },
                destroyAll: function(b) {
                    return b === p ? this.destroy(function() {
                        return !0
                    }) : b ? this.destroy(function(c) {
                        return 0 <= a.a.l(b, c)
                    }) : []
                },
                indexOf: function(b) {
                    var c = this();
                    return a.a.l(c, b)
                },
                replace: function(a, c) {
                    var d = this.indexOf(a);
                    0 <= d && (this.P(), this.o()[d] = c, this.O())
                }
            };
            a.a.r("pop push reverse shift sort splice unshift".split(" "), function(b) {
                a.T.fn[b] = function() {
                    var a = this.o();
                    this.P();
                    this.kb(a, b, arguments);
                    a = a[b].apply(a, arguments);
                    this.O();
                    return a
                }
            });
            a.a.r(["slice"], function(b) {
                a.T.fn[b] = function() {
                    var a = this();
                    return a[b].apply(a, arguments)
                }
            });
            a.a.na && a.a.ra(a.T.fn, a.m.fn);
            a.b("observableArray", a.T);
            var I = "arrayChange";
            a.Ga.trackArrayChanges = function(b) {
                function c() {
                    if (!d) {
                        d = !0;
                        var c = b.notifySubscribers;
                        b.notifySubscribers = function(a, b) {
                            b && b !== F || ++f;
                            return c.apply(this, arguments)
                        };
                        var k = [].concat(b.o() || []);
                        e = null;
                        b.V(function(c) {
                            c = [].concat(c || []);
                            if (b.qb(I)) {
                                var d;
                                if (!e || 1 < f) e = a.a.Aa(k, c, {
                                    sparse: !0
                                });
                                d = e;
                                d.length && b.notifySubscribers(d, I)
                            }
                            k = c;
                            e = null;
                            f = 0
                        })
                    }
                }
                if (!b.kb) {
                    var d = !1,
                        e = null,
                        f = 0,
                        h = b.V;
                    b.V = b.subscribe = function(a, b, d) {
                        d === I && c();
                        return h.apply(this, arguments)
                    };
                    b.kb = function(b, c, l) {
                        function h(a, b, c) {
                            return r[r.length] = {
                                status: a,
                                value: b,
                                index: c
                            }
                        }
                        if (d && !f) {
                            var r = [],
                                m = b.length,
                                q = l.length,
                                s = 0;
                            switch (c) {
                            case "push":
                                s = m;
                            case "unshift":
                                for (c = 0; c < q; c++) h("added", l[c], s + c);
                                break;
                            case "pop":
                                s = m - 1;
                            case "shift":
                                m && h("deleted", b[s], s);
                                break;
                            case "splice":
                                c = Math.min(Math.max(0, 0 > l[0] ? m + l[0] : l[0]), m);
                                for (var m = 1 === q ? m : Math.min(c + (l[1] || 0), m), q = c + q - 2, s = Math.max(m, q), B = [], u = [], D = 2; c < s; ++c, ++D) c < m && u.push(h("deleted", b[c], c)), c < q && B.push(h("added", l[D], c));
                                a.a.nb(u, B);
                                break;
                            default:
                                return
                            }
                            e = r
                        }
                    }
                }
            };
            a.ba = a.h = function(b, c, d) {
                function e() {
                    q = !0;
                    a.a.A(v, function(a, b) {
                        b.F()
                    });
                    v = {};
                    x = 0;
                    n = !1
                }
                function f() {
                    var a = g.throttleEvaluation;
                    a && 0 <= a ? (clearTimeout(t), t = setTimeout(h, a)) : g.wa ? g.wa() : h()
                }
                function h() {
                    if (!r && !q) {
                        if (y && y()) {
                            if (!m) {
                                p();
                                return
                            }
                        } else m = !1;
                        r = !0;
                        try {
                            var b = v,
                                d = x;
                            a.k.jb({
                                za: function(a, c) {
                                    q || (d && b[c] ? (v[c] = b[c], ++x, delete b[c], --d) : v[c] || (v[c] = a.V(f), ++x))
                                },
                                ba: g,
                                pa: !x
                            });
                            v = {};
                            x = 0;
                            try {
                                var e = c ? s.call(c) : s()
                            } finally {
                                a.k.end(), d && a.a.A(b, function(a, b) {
                                    b.F()
                                }), n = !1
                            }
                            g.Ka(l, e) && (g.notifySubscribers(l, "beforeChange"), l = e, g.wa && !g.throttleEvaluation || g.notifySubscribers(l))
                        } finally {
                            r = !1
                        }
                        x || p()
                    }
                }
                function g() {
                    if (0 < arguments.length) {
                        if ("function" === typeof B) B.apply(c, arguments);
                        else
                        throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                        return this
                    }
                    n && h();
                    a.k.zb(g);
                    return l
                }
                function k() {
                    return n || 0 < x
                }
                var l, n = !0,
                    r = !1,
                    m = !1,
                    q = !1,
                    s = b;
                s && "object" == typeof s ? (d = s, s = d.read) : (d = d || {}, s || (s = d.read));
                if ("function" != typeof s) throw Error("Pass a function that returns the value of the ko.computed");
                var B = d.write,
                    u = d.disposeWhenNodeIsRemoved || d.G || null,
                    D = d.disposeWhen || d.Da,
                    y = D,
                    p = e,
                    v = {},
                    x = 0,
                    t = null;
                c || (c = d.owner);
                a.N.call(g);
                a.a.sa(g, a.h.fn);
                g.o = function() {
                    n && !x && h();
                    return l
                };
                g.fa = function() {
                    return x
                };
                g.Yb = "function" === typeof d.write;
                g.F = function() {
                    p()
                };
                g.ga = k;
                var w = g.Ma;
                g.Ma = function(a) {
                    w.call(g, a);
                    g.wa = function() {
                        g.bb(l);
                        n = !0;
                        g.cb(g)
                    }
                };
                a.s(g, "peek", g.o);
                a.s(g, "dispose", g.F);
                a.s(g, "isActive", g.ga);
                a.s(g, "getDependenciesCount", g.fa);
                u && (m = !0, u.nodeType && (y = function() {
                    return !a.a.Ea(u) || D && D()
                }));
                !0 !== d.deferEvaluation && h();
                u && k() && u.nodeType && (p = function() {
                    a.a.u.Ab(u, p);
                    e()
                }, a.a.u.ja(u, p));
                return g
            };
            a.$b = function(b) {
                return a.Ha(b, a.h)
            };
            z = a.m.hc;
            a.h[z] = a.m;
            a.h.fn = {
                equalityComparer: G
            };
            a.h.fn[z] = a.h;
            a.a.na && a.a.ra(a.h.fn, a.N.fn);
            a.b("dependentObservable", a.h);
            a.b("computed", a.h);
            a.b("isComputed", a.$b);
            (function() {
                function b(a, f, h) {
                    h = h || new d;
                    a = f(a);
                    if ("object" != typeof a || null === a || a === p || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean) return a;
                    var g = a instanceof Array ? [] : {};
                    h.save(a, g);
                    c(a, function(c) {
                        var d = f(a[c]);
                        switch (typeof d) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "function":
                            g[c] = d;
                            break;
                        case "object":
                        case "undefined":
                            var n = h.get(d);
                            g[c] = n !== p ? n : b(d, f, h)
                        }
                    });
                    return g
                }
                function c(a, b) {
                    if (a instanceof Array) {
                        for (var c =
                        0; c < a.length; c++) b(c);
                        "function" == typeof a.toJSON && b("toJSON")
                    } else
                    for (c in a) b(c)
                }
                function d() {
                    this.keys = [];
                    this.ab = []
                }
                a.Gb = function(c) {
                    if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                    return b(c, function(b) {
                        for (var c = 0; a.v(b) && 10 > c; c++) b = b();
                        return b
                    })
                };
                a.toJSON = function(b, c, d) {
                    b = a.Gb(b);
                    return a.a.Ya(b, c, d)
                };
                d.prototype = {
                    save: function(b, c) {
                        var d = a.a.l(this.keys, b);
                        0 <= d ? this.ab[d] = c : (this.keys.push(b), this.ab.push(c))
                    },
                    get: function(b) {
                        b = a.a.l(this.keys, b);
                        return 0 <= b ? this.ab[b] : p
                    }
                }
            })();
            a.b("toJS", a.Gb);
            a.b("toJSON", a.toJSON);
            (function() {
                a.i = {
                    p: function(b) {
                        switch (a.a.B(b)) {
                        case "option":
                            return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.f.get(b, a.d.options.Pa) : 7 >= a.a.oa ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
                        case "select":
                            return 0 <= b.selectedIndex ? a.i.p(b.options[b.selectedIndex]) : p;
                        default:
                            return b.value
                        }
                    },
                    X: function(b, c, d) {
                        switch (a.a.B(b)) {
                        case "option":
                            switch (typeof c) {
                            case "string":
                                a.a.f.set(b, a.d.options.Pa, p);
                                "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__;
                                b.value = c;
                                break;
                            default:
                                a.a.f.set(b, a.d.options.Pa, c), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" === typeof c ? c : ""
                            }
                            break;
                        case "select":
                            if ("" === c || null === c) c = p;
                            for (var e = -1, f = 0, h = b.options.length, g; f < h; ++f) if (g = a.i.p(b.options[f]), g == c || "" == g && c === p) {
                                e = f;
                                break
                            }
                            if (d || 0 <= e || c === p && 1 < b.size) b.selectedIndex = e;
                            break;
                        default:
                            if (null === c || c === p) c = "";
                            b.value = c
                        }
                    }
                }
            })();
            a.b("selectExtensions", a.i);
            a.b("selectExtensions.readValue", a.i.p);
            a.b("selectExtensions.writeValue", a.i.X);
            a.g = function() {
                function b(b) {
                    b = a.a.ta(b);
                    123 === b.charCodeAt(0) && (b = b.slice(1, -1));
                    var c = [],
                        d = b.match(e),
                        g, m, q = 0;
                    if (d) {
                        d.push(",");
                        for (var s = 0, B; B = d[s]; ++s) {
                            var u = B.charCodeAt(0);
                            if (44 === u) {
                                if (0 >= q) {
                                    g && c.push(m ? {
                                        key: g,
                                        value: m.join("")
                                    } : {
                                        unknown: g
                                    });
                                    g = m = q = 0;
                                    continue
                                }
                            } else if (58 === u) {
                                if (!m) continue
                            } else if (47 === u && s && 1 < B.length)(u = d[s - 1].match(f)) && !h[u[0]] && (b = b.substr(b.indexOf(B) + 1), d = b.match(e), d.push(","), s = -1, B = "/");
                            else if (40 === u || 123 === u || 91 === u)++q;
                            else if (41 === u || 125 === u || 93 === u)--q;
                            else if (!g && !m) {
                                g = 34 === u || 39 === u ? B.slice(1, -1) : B;
                                continue
                            }
                            m ? m.push(B) : m = [B]
                        }
                    }
                    return c
                }
                var c = ["true", "false", "null", "undefined"],
                    d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                    e = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"),
                    f = /[\])"'A-Za-z0-9_$]+$/,
                    h = {
                        "in": 1,
                        "return": 1,
                        "typeof": 1
                    },
                    g = {};
                return {
                    aa: [],
                    W: g,
                    Ra: b,
                    qa: function(e, l) {
                        function f(b, e) {
                            var l, k = a.getBindingHandler(b);
                            if (k && k.preprocess ? e = k.preprocess(e, b, f) : 1) {
                                if (k = g[b]) l = e, 0 <= a.a.l(c, l) ? l = !1 : (k = l.match(d), l = null === k ? !1 : k[1] ? "Object(" + k[1] + ")" + k[2] : l), k = l;
                                k && m.push("'" + b + "':function(_z){" + l + "=_z}");
                                q && (e = "function(){return " + e + " }");
                                h.push("'" + b + "':" + e)
                            }
                        }
                        l = l || {};
                        var h = [],
                            m = [],
                            q = l.valueAccessors,
                            s = "string" === typeof e ? b(e) : e;
                        a.a.r(s, function(a) {
                            f(a.key || a.unknown, a.value)
                        });
                        m.length && f("_ko_property_writers", "{" + m.join(",") + " }");
                        return h.join(",")
                    },
                    bc: function(a, b) {
                        for (var c = 0; c < a.length; c++) if (a[c].key == b) return !0;
                        return !1
                    },
                    va: function(b, c, d, e, g) {
                        if (b && a.v(b))!a.ub(b) || g && b.o() === e || b(e);
                        else if ((b = c.get("_ko_property_writers")) && b[d]) b[d](e)
                    }
                }
            }();
            a.b("expressionRewriting", a.g);
            a.b("expressionRewriting.bindingRewriteValidators", a.g.aa);
            a.b("expressionRewriting.parseObjectLiteral", a.g.Ra);
            a.b("expressionRewriting.preProcessBindings", a.g.qa);
            a.b("expressionRewriting._twoWayBindings", a.g.W);
            a.b("jsonExpressionRewriting", a.g);
            a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.g.qa);
            (function() {
                function b(a) {
                    return 8 == a.nodeType && h.test(f ? a.text : a.nodeValue)
                }
                function c(a) {
                    return 8 == a.nodeType && g.test(f ? a.text : a.nodeValue)
                }
                function d(a, d) {
                    for (var e = a, g = 1, k = []; e = e.nextSibling;) {
                        if (c(e) && (g--, 0 === g)) return k;
                        k.push(e);
                        b(e) && g++
                    }
                    if (!d) throw Error("Cannot find closing comment tag to match: " + a.nodeValue);
                    return null
                }
                function e(a, b) {
                    var c = d(a, b);
                    return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null
                }
                var f = w && "\x3c!--test--\x3e" === w.createComment("test").text,
                    h = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                    g = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
                    k = {
                        ul: !0,
                        ol: !0
                    };
                a.e = {
                    Q: {},
                    childNodes: function(a) {
                        return b(a) ? d(a) : a.childNodes
                    },
                    da: function(c) {
                        if (b(c)) {
                            c = a.e.childNodes(c);
                            for (var d = 0, e = c.length; d < e; d++) a.removeNode(c[d])
                        } else a.a.Fa(c)
                    },
                    U: function(c, d) {
                        if (b(c)) {
                            a.e.da(c);
                            for (var e = c.nextSibling, g = 0, k = d.length; g < k; g++) e.parentNode.insertBefore(d[g], e)
                        } else a.a.U(c, d)
                    },
                    yb: function(a, c) {
                        b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c)
                    },
                    rb: function(c, d, e) {
                        e ? b(c) ? c.parentNode.insertBefore(d, e.nextSibling) : e.nextSibling ? c.insertBefore(d, e.nextSibling) : c.appendChild(d) : a.e.yb(c, d)
                    },
                    firstChild: function(a) {
                        return b(a) ? !a.nextSibling || c(a.nextSibling) ? null : a.nextSibling : a.firstChild
                    },
                    nextSibling: function(a) {
                        b(a) && (a = e(a));
                        return a.nextSibling && c(a.nextSibling) ? null : a.nextSibling
                    },
                    Xb: b,
                    lc: function(a) {
                        return (a = (f ? a.text : a.nodeValue).match(h)) ? a[1] : null
                    },
                    wb: function(d) {
                        if (k[a.a.B(d)]) {
                            var g = d.firstChild;
                            if (g) {
                                do
                                if (1 === g.nodeType) {
                                    var f;
                                    f = g.firstChild;
                                    var h = null;
                                    if (f) {
                                        do
                                        if (h) h.push(f);
                                        else if (b(f)) {
                                            var q = e(f, !0);
                                            q ? f = q : h = [f]
                                        } else c(f) && (h = [f]);
                                        while (f = f.nextSibling)
                                    }
                                    if (f = h) for (h = g.nextSibling, q = 0; q < f.length; q++) h ? d.insertBefore(f[q], h) : d.appendChild(f[q])
                                }
                                while (g = g.nextSibling)
                            }
                        }
                    }
                }
            })();
            a.b("virtualElements", a.e);
            a.b("virtualElements.allowedBindings", a.e.Q);
            a.b("virtualElements.emptyNode", a.e.da);
            a.b("virtualElements.insertAfter", a.e.rb);
            a.b("virtualElements.prepend", a.e.yb);
            a.b("virtualElements.setDomNodeChildren", a.e.U);
            (function() {
                a.J = function() {
                    this.Nb = {}
                };
                a.a.extend(a.J.prototype, {
                    nodeHasBindings: function(b) {
                        switch (b.nodeType) {
                        case 1:
                            return null != b.getAttribute("data-bind");
                        case 8:
                            return a.e.Xb(b);
                        default:
                            return !1
                        }
                    },
                    getBindings: function(a, c) {
                        var d = this.getBindingsString(a, c);
                        return d ? this.parseBindingsString(d, c, a) : null
                    },
                    getBindingAccessors: function(a, c) {
                        var d = this.getBindingsString(a, c);
                        return d ? this.parseBindingsString(d, c, a, {
                            valueAccessors: !0
                        }) : null
                    },
                    getBindingsString: function(b) {
                        switch (b.nodeType) {
                        case 1:
                            return b.getAttribute("data-bind");
                        case 8:
                            return a.e.lc(b);
                        default:
                            return null
                        }
                    },
                    parseBindingsString: function(b, c, d, e) {
                        try {
                            var f = this.Nb,
                                h = b + (e && e.valueAccessors || ""),
                                g;
                            if (!(g = f[h])) {
                                var k, l = "with($context){with($data||{}){return{" + a.g.qa(b, e) + "}}}";
                                k = new Function("$context", "$element", l);
                                g = f[h] = k
                            }
                            return g(c, d)
                        } catch (n) {
                            throw n.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + n.message, n;
                        }
                    }
                });
                a.J.instance = new a.J
            })();
            a.b("bindingProvider", a.J);
            (function() {
                function b(a) {
                    return function() {
                        return a
                    }
                }
                function c(a) {
                    return a()
                }

                function d(b) {
                    return a.a.Oa(a.k.t(b), function(a, c) {
                        return function() {
                            return b()[c]
                        }
                    })
                }
                function e(a, b) {
                    return d(this.getBindings.bind(this, a, b))
                }
                function f(b, c, d) {
                    var e, g = a.e.firstChild(c),
                        k = a.J.instance,
                        f = k.preprocessNode;
                    if (f) {
                        for (; e = g;) g = a.e.nextSibling(e), f.call(k, e);
                        g = a.e.firstChild(c)
                    }
                    for (; e = g;) g = a.e.nextSibling(e), h(b, e, d)
                }
                function h(b, c, d) {
                    var e = !0,
                        g = 1 === c.nodeType;
                    g && a.e.wb(c);
                    if (g && d || a.J.instance.nodeHasBindings(c)) e = k(c, null, b, d).shouldBindDescendants;
                    e && !n[a.a.B(c)] && f(b, c, !g)
                }
                function g(b) {
                    var c = [],
                        d = {},
                        e = [];
                    a.a.A(b, function y(g) {
                        if (!d[g]) {
                            var k = a.getBindingHandler(g);
                            k && (k.after && (e.push(g), a.a.r(k.after, function(c) {
                                if (b[c]) {
                                    if (-1 !== a.a.l(e, c)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + e.join(", "));
                                    y(c)
                                }
                            }), e.length--), c.push({
                                key: g,
                                pb: k
                            }));
                            d[g] = !0
                        }
                    });
                    return c
                }
                function k(b, d, k, f) {
                    var h = a.a.f.get(b, r);
                    if (!d) {
                        if (h) throw Error("You cannot apply bindings multiple times to the same element.");
                        a.a.f.set(b, r, !0)
                    }!h && f && a.Eb(b, k);
                    var l;
                    if (d && "function" !== typeof d) l = d;
                    else {
                        var n = a.J.instance,
                            m = n.getBindingAccessors || e,
                            x = a.h(function() {
                                (l = d ? d(k, b) : m.call(n, b, k)) && k.D && k.D();
                                return l
                            }, null, {
                                G: b
                            });
                        l && x.ga() || (x = null)
                    }
                    var t;
                    if (l) {
                        var w = x ?
                        function(a) {
                            return function() {
                                return c(x()[a])
                            }
                        } : function(a) {
                            return l[a]
                        },
                            z = function() {
                                return a.a.Oa(x ? x() : l, c)
                            };
                        z.get = function(a) {
                            return l[a] && c(w(a))
                        };
                        z.has = function(a) {
                            return a in l
                        };
                        f = g(l);
                        a.a.r(f, function(c) {
                            var d = c.pb.init,
                                e = c.pb.update,
                                g = c.key;
                            if (8 === b.nodeType && !a.e.Q[g]) throw Error("The binding '" + g + "' cannot be used with virtual elements");
                            try {
                                "function" == typeof d && a.k.t(function() {
                                    var a = d(b, w(g), z, k.$data, k);
                                    if (a && a.controlsDescendantBindings) {
                                        if (t !== p) throw Error("Multiple bindings (" + t + " and " + g + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                        t = g
                                    }
                                }), "function" == typeof e && a.h(function() {
                                    e(b, w(g), z, k.$data, k)
                                }, null, {
                                    G: b
                                })
                            } catch (f) {
                                throw f.message = 'Unable to process binding "' + g + ": " + l[g] + '"\nMessage: ' + f.message, f;
                            }
                        })
                    }
                    return {
                        shouldBindDescendants: t === p
                    }
                }

                function l(b) {
                    return b && b instanceof a.I ? b : new a.I(b)
                }
                a.d = {};
                var n = {
                    script: !0
                };
                a.getBindingHandler = function(b) {
                    return a.d[b]
                };
                a.I = function(b, c, d, e) {
                    var g = this,
                        k = "function" == typeof b && !a.v(b),
                        f, h = a.h(function() {
                            var f = k ? b() : b,
                                l = a.a.c(f);
                            c ? (c.D && c.D(), a.a.extend(g, c), h && (g.D = h)) : (g.$parents = [], g.$root = l, g.ko = a);
                            g.$rawData = f;
                            g.$data = l;
                            d && (g[d] = l);
                            e && e(g, c, l);
                            return g.$data
                        }, null, {
                            Da: function() {
                                return f && !a.a.eb(f)
                            },
                            G: !0
                        });
                    h.ga() && (g.D = h, h.equalityComparer = null, f = [], h.Jb = function(b) {
                        f.push(b);
                        a.a.u.ja(b, function(b) {
                            a.a.ma(f, b);
                            f.length || (h.F(), g.D = h = p)
                        })
                    })
                };
                a.I.prototype.createChildContext = function(b, c, d) {
                    return new a.I(b, this, c, function(a, b) {
                        a.$parentContext = b;
                        a.$parent = b.$data;
                        a.$parents = (b.$parents || []).slice(0);
                        a.$parents.unshift(a.$parent);
                        d && d(a)
                    })
                };
                a.I.prototype.extend = function(b) {
                    return new a.I(this.D || this.$data, this, null, function(c, d) {
                        c.$rawData = d.$rawData;
                        a.a.extend(c, "function" == typeof b ? b() : b)
                    })
                };
                var r = a.a.f.L(),
                    m = a.a.f.L();
                a.Eb = function(b, c) {
                    if (2 == arguments.length) a.a.f.set(b, m, c), c.D && c.D.Jb(b);
                    else
                    return a.a.f.get(b, m)
                };
                a.xa = function(b, c, d) {
                    1 === b.nodeType && a.e.wb(b);
                    return k(b, c, l(d), !0)
                };
                a.Lb = function(c, e, g) {
                    g = l(g);
                    return a.xa(c, "function" === typeof e ? d(e.bind(null, g, c)) : a.a.Oa(e, b), g)
                };
                a.gb = function(a, b) {
                    1 !== b.nodeType && 8 !== b.nodeType || f(l(a), b, !0)
                };
                a.fb = function(a, b) {
                    !t && A.jQuery && (t = A.jQuery);
                    if (b && 1 !== b.nodeType && 8 !== b.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                    b = b || A.document.body;
                    h(l(a), b, !0)
                };
                a.Ca = function(b) {
                    switch (b.nodeType) {
                    case 1:
                    case 8:
                        var c = a.Eb(b);
                        if (c) return c;
                        if (b.parentNode) return a.Ca(b.parentNode)
                    }
                    return p
                };
                a.Pb = function(b) {
                    return (b = a.Ca(b)) ? b.$data : p
                };
                a.b("bindingHandlers", a.d);
                a.b("applyBindings", a.fb);
                a.b("applyBindingsToDescendants", a.gb);
                a.b("applyBindingAccessorsToNode", a.xa);
                a.b("applyBindingsToNode", a.Lb);
                a.b("contextFor", a.Ca);
                a.b("dataFor", a.Pb)
            })();
            var L = {
                "class": "className",
                "for": "htmlFor"
            };
            a.d.attr = {
                update: function(b, c) {
                    var d = a.a.c(c()) || {};
                    a.a.A(d, function(c, d) {
                        d = a.a.c(d);
                        var h = !1 === d || null === d || d === p;
                        h && b.removeAttribute(c);
                        8 >= a.a.oa && c in L ? (c = L[c], h ? b.removeAttribute(c) : b[c] = d) : h || b.setAttribute(c, d.toString());
                        "name" === c && a.a.Cb(b, h ? "" : d.toString())
                    })
                }
            };
            (function() {
                a.d.checked = {
                    after: ["value", "attr"],
                    init: function(b, c, d) {
                        function e() {
                            return d.has("checkedValue") ? a.a.c(d.get("checkedValue")) : b.value
                        }
                        function f() {
                            var g = b.checked,
                                f = r ? e() : g;
                            if (!a.ca.pa() && (!k || g)) {
                                var h = a.k.t(c);
                                l ? n !== f ? (g && (a.a.Y(h, f, !0), a.a.Y(h, n, !1)), n = f) : a.a.Y(h, f, g) : a.g.va(h, d, "checked", f, !0)
                            }
                        }
                        function h() {
                            var d = a.a.c(c());
                            b.checked = l ? 0 <= a.a.l(d, e()) : g ? d : e() === d
                        }
                        var g = "checkbox" == b.type,
                            k = "radio" == b.type;
                        if (g || k) {
                            var l = g && a.a.c(c()) instanceof Array,
                                n = l ? e() : p,
                                r = k || l;
                            k && !b.name && a.d.uniqueName.init(b, function() {
                                return !0
                            });
                            a.ba(f, null, {
                                G: b
                            });
                            a.a.q(b, "click", f);
                            a.ba(h, null, {
                                G: b
                            })
                        }
                    }
                };
                a.g.W.checked = !0;
                a.d.checkedValue = {
                    update: function(b, c) {
                        b.value = a.a.c(c())
                    }
                }
            })();
            a.d.css = {
                update: function(b, c) {
                    var d = a.a.c(c());
                    "object" == typeof d ? a.a.A(d, function(c, d) {
                        d = a.a.c(d);
                        a.a.ua(b, c, d)
                    }) : (d = String(d || ""), a.a.ua(b, b.__ko__cssValue, !1), b.__ko__cssValue = d, a.a.ua(b, d, !0))
                }
            };
            a.d.enable = {
                update: function(b, c) {
                    var d = a.a.c(c());
                    d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = !0)
                }
            };
            a.d.disable = {
                update: function(b, c) {
                    a.d.enable.update(b, function() {
                        return !a.a.c(c())
                    })
                }
            };
            a.d.event = {
                init: function(b, c, d, e, f) {
                    var h = c() || {};
                    a.a.A(h, function(g) {
                        "string" == typeof g && a.a.q(b, g, function(b) {
                            var h, n = c()[g];
                            if (n) {
                                try {
                                    var r = a.a.R(arguments);
                                    e = f.$data;
                                    r.unshift(e);
                                    h = n.apply(e, r)
                                } finally {
                                    !0 !== h && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
                                }!1 === d.get(g + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation())
                            }
                        })
                    })
                }
            };
            a.d.foreach = {
                vb: function(b) {
                    return function() {
                        var c = b(),
                            d = a.a.Sa(c);
                        if (!d || "number" == typeof d.length) return {
                            foreach: c,
                            templateEngine: a.K.Ja
                        };
                        a.a.c(c);
                        return {
                            foreach: d.data,
                            as: d.as,
                            includeDestroyed: d.includeDestroyed,
                            afterAdd: d.afterAdd,
                            beforeRemove: d.beforeRemove,
                            afterRender: d.afterRender,
                            beforeMove: d.beforeMove,
                            afterMove: d.afterMove,
                            templateEngine: a.K.Ja
                        }
                    }
                },
                init: function(b, c) {
                    return a.d.template.init(b, a.d.foreach.vb(c))
                },
                update: function(b, c, d, e, f) {
                    return a.d.template.update(b, a.d.foreach.vb(c), d, e, f)
                }
            };
            a.g.aa.foreach = !1;
            a.e.Q.foreach = !0;
            a.d.hasfocus = {
                init: function(b, c, d) {
                    function e(e) {
                        b.__ko_hasfocusUpdating = !0;
                        var k = b.ownerDocument;
                        if ("activeElement" in k) {
                            var f;
                            try {
                                f = k.activeElement
                            } catch (h) {
                                f = k.body
                            }
                            e = f === b
                        }
                        k = c();
                        a.g.va(k, d, "hasfocus", e, !0);
                        b.__ko_hasfocusLastValue = e;
                        b.__ko_hasfocusUpdating = !1
                    }
                    var f = e.bind(null, !0),
                        h = e.bind(null, !1);
                    a.a.q(b, "focus", f);
                    a.a.q(b, "focusin", f);
                    a.a.q(b, "blur", h);
                    a.a.q(b, "focusout", h)
                },
                update: function(b, c) {
                    var d = !! a.a.c(c());
                    b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(), a.k.t(a.a.ha, null, [b, d ? "focusin" : "focusout"]))
                }
            };
            a.g.W.hasfocus = !0;
            a.d.hasFocus = a.d.hasfocus;
            a.g.W.hasFocus = !0;
            a.d.html = {
                init: function() {
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function(b, c) {
                    a.a.Va(b, c())
                }
            };
            H("if");
            H("ifnot", !1, !0);
            H("with", !0, !1, function(a, c) {
                return a.createChildContext(c)
            });
            var J = {};
            a.d.options = {
                init: function(b) {
                    if ("select" !== a.a.B(b)) throw Error("options binding applies only to SELECT elements");
                    for (; 0 < b.length;) b.remove(0);
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function(b, c, d) {
                    function e() {
                        return a.a.la(b.options, function(a) {
                            return a.selected
                        })
                    }
                    function f(a, b, c) {
                        var d = typeof b;
                        return "function" == d ? b(a) : "string" == d ? a[b] : c
                    }
                    function h(c, d) {
                        if (r.length) {
                            var e = 0 <= a.a.l(r, a.i.p(d[0]));
                            a.a.Db(d[0], e);
                            m && !e && a.k.t(a.a.ha, null, [b, "change"])
                        }
                    }
                    var g = 0 != b.length && b.multiple ? b.scrollTop : null,
                        k = a.a.c(c()),
                        l = d.get("optionsIncludeDestroyed");
                    c = {};
                    var n, r;
                    r = b.multiple ? a.a.ya(e(), a.i.p) : 0 <= b.selectedIndex ? [a.i.p(b.options[b.selectedIndex])] : [];
                    k && ("undefined" == typeof k.length && (k = [k]), n = a.a.la(k, function(b) {
                        return l || b === p || null === b || !a.a.c(b._destroy)
                    }), d.has("optionsCaption") && (k = a.a.c(d.get("optionsCaption")), null !== k && k !== p && n.unshift(J)));
                    var m = !1;
                    c.beforeRemove = function(a) {
                        b.removeChild(a)
                    };
                    k = h;
                    d.has("optionsAfterRender") && (k = function(b, c) {
                        h(0, c);
                        a.k.t(d.get("optionsAfterRender"), null, [c[0], b !== J ? b : p])
                    });
                    a.a.Ua(b, n, function(c, e, g) {
                        g.length && (r = g[0].selected ? [a.i.p(g[0])] : [], m = !0);
                        e = b.ownerDocument.createElement("option");
                        c === J ? (a.a.Xa(e, d.get("optionsCaption")), a.i.X(e, p)) : (g = f(c, d.get("optionsValue"), c), a.i.X(e, a.a.c(g)), c = f(c, d.get("optionsText"), g), a.a.Xa(e, c));
                        return [e]
                    }, c, k);
                    a.k.t(function() {
                        d.get("valueAllowUnset") && d.has("value") ? a.i.X(b, a.a.c(d.get("value")), !0) : (b.multiple ? r.length && e().length < r.length : r.length && 0 <= b.selectedIndex ? a.i.p(b.options[b.selectedIndex]) !== r[0] : r.length || 0 <= b.selectedIndex) && a.a.ha(b, "change")
                    });
                    a.a.Tb(b);
                    g && 20 < Math.abs(g - b.scrollTop) && (b.scrollTop = g)
                }
            };
            a.d.options.Pa = a.a.f.L();
            a.d.selectedOptions = {
                after: ["options", "foreach"],
                init: function(b, c, d) {
                    a.a.q(b, "change", function() {
                        var e = c(),
                            f = [];
                        a.a.r(b.getElementsByTagName("option"), function(b) {
                            b.selected && f.push(a.i.p(b))
                        });
                        a.g.va(e, d, "selectedOptions", f)
                    })
                },
                update: function(b, c) {
                    if ("select" != a.a.B(b)) throw Error("values binding applies only to SELECT elements");
                    var d = a.a.c(c());
                    d && "number" == typeof d.length && a.a.r(b.getElementsByTagName("option"), function(b) {
                        var c =
                        0 <= a.a.l(d, a.i.p(b));
                        a.a.Db(b, c)
                    })
                }
            };
            a.g.W.selectedOptions = !0;
            a.d.style = {
                update: function(b, c) {
                    var d = a.a.c(c() || {});
                    a.a.A(d, function(c, d) {
                        d = a.a.c(d);
                        b.style[c] = d || ""
                    })
                }
            };
            a.d.submit = {
                init: function(b, c, d, e, f) {
                    if ("function" != typeof c()) throw Error("The value for a submit binding must be a function");
                    a.a.q(b, "submit", function(a) {
                        var d, e = c();
                        try {
                            d = e.call(f.$data, b)
                        } finally {
                            !0 !== d && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                        }
                    })
                }
            };
            a.d.text = {
                init: function() {
                    return {
                        controlsDescendantBindings: !0
                    }
                },
                update: function(b, c) {
                    a.a.Xa(b, c())
                }
            };
            a.e.Q.text = !0;
            a.d.uniqueName = {
                init: function(b, c) {
                    if (c()) {
                        var d = "ko_unique_" + ++a.d.uniqueName.Ob;
                        a.a.Cb(b, d)
                    }
                }
            };
            a.d.uniqueName.Ob = 0;
            a.d.value = {
                after: ["options", "foreach"],
                init: function(b, c, d) {
                    function e() {
                        g = !1;
                        var e = c(),
                            f = a.i.p(b);
                        a.g.va(e, d, "value", f)
                    }
                    var f = ["change"],
                        h = d.get("valueUpdate"),
                        g = !1;
                    h && ("string" == typeof h && (h = [h]), a.a.$(f, h), f = a.a.ib(f));
                    !a.a.oa || "input" != b.tagName.toLowerCase() || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.l(f, "propertychange") || (a.a.q(b, "propertychange", function() {
                        g = !0
                    }), a.a.q(b, "focus", function() {
                        g = !1
                    }), a.a.q(b, "blur", function() {
                        g && e()
                    }));
                    a.a.r(f, function(c) {
                        var d = e;
                        a.a.kc(c, "after") && (d = function() {
                            setTimeout(e, 0)
                        }, c = c.substring(5));
                        a.a.q(b, c, d)
                    })
                },
                update: function(b, c, d) {
                    var e = a.a.c(c());
                    c = a.i.p(b);
                    if (e !== c) if ("select" === a.a.B(b)) {
                        var f = d.get("valueAllowUnset");
                        d = function() {
                            a.i.X(b, e, f)
                        };
                        d();
                        f || e === a.i.p(b) ? setTimeout(d, 0) : a.k.t(a.a.ha, null, [b, "change"])
                    } else a.i.X(b, e)
                }
            };
            a.g.W.value = !0;
            a.d.visible = {
                update: function(b, c) {
                    var d = a.a.c(c()),
                        e = "none" != b.style.display;
                    d && !e ? b.style.display = "" : !d && e && (b.style.display = "none")
                }
            };
            (function(b) {
                a.d[b] = {
                    init: function(c, d, e, f, h) {
                        return a.d.event.init.call(this, c, function() {
                            var a = {};
                            a[b] = d();
                            return a
                        }, e, f, h)
                    }
                }
            })("click");
            a.C = function() {};
            a.C.prototype.renderTemplateSource = function() {
                throw Error("Override renderTemplateSource");
            };
            a.C.prototype.createJavaScriptEvaluatorBlock = function() {
                throw Error("Override createJavaScriptEvaluatorBlock");
            };
            a.C.prototype.makeTemplateSource =

            function(b, c) {
                if ("string" == typeof b) {
                    c = c || w;
                    var d = c.getElementById(b);
                    if (!d) throw Error("Cannot find template with ID " + b);
                    return new a.n.j(d)
                }
                if (1 == b.nodeType || 8 == b.nodeType) return new a.n.Z(b);
                throw Error("Unknown template type: " + b);
            };
            a.C.prototype.renderTemplate = function(a, c, d, e) {
                a = this.makeTemplateSource(a, e);
                return this.renderTemplateSource(a, c, d)
            };
            a.C.prototype.isTemplateRewritten = function(a, c) {
                return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, c).data("isRewritten")
            };
            a.C.prototype.rewriteTemplate =

            function(a, c, d) {
                a = this.makeTemplateSource(a, d);
                c = c(a.text());
                a.text(c);
                a.data("isRewritten", !0)
            };
            a.b("templateEngine", a.C);
            a.Za = function() {
                function b(b, c, d, g) {
                    b = a.g.Ra(b);
                    for (var k = a.g.aa, l = 0; l < b.length; l++) {
                        var n = b[l].key;
                        if (k.hasOwnProperty(n)) {
                            var r = k[n];
                            if ("function" === typeof r) {
                                if (n = r(b[l].value)) throw Error(n);
                            } else if (!r) throw Error("This template engine does not support the '" + n + "' binding within its templates");
                        }
                    }
                    d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.g.qa(b, {
                        valueAccessors: !0
                    }) + " } })()},'" + d.toLowerCase() + "')";
                    return g.createJavaScriptEvaluatorBlock(d) + c
                }
                var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                    d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                return {
                    Ub: function(b, c, d) {
                        c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function(b) {
                            return a.Za.dc(b, c)
                        }, d)
                    },
                    dc: function(a, f) {
                        return a.replace(c, function(a, c, d, e, n) {
                            return b(n, c, d, f)
                        }).replace(d, function(a, c) {
                            return b(c, "\x3c!-- ko --\x3e", "#comment", f)
                        })
                    },
                    Mb: function(b, c) {
                        return a.w.Na(function(d, g) {
                            var k = d.nextSibling;
                            k && k.nodeName.toLowerCase() === c && a.xa(k, b, g)
                        })
                    }
                }
            }();
            a.b("__tr_ambtns", a.Za.Mb);
            (function() {
                a.n = {};
                a.n.j = function(a) {
                    this.j = a
                };
                a.n.j.prototype.text = function() {
                    var b = a.a.B(this.j),
                        b = "script" === b ? "text" : "textarea" === b ? "value" : "innerHTML";
                    if (0 == arguments.length) return this.j[b];
                    var c = arguments[0];
                    "innerHTML" === b ? a.a.Va(this.j, c) : this.j[b] = c
                };
                var b = a.a.f.L() + "_";
                a.n.j.prototype.data = function(c) {
                    if (1 === arguments.length) return a.a.f.get(this.j, b + c);
                    a.a.f.set(this.j, b + c, arguments[1])
                };
                var c = a.a.f.L();
                a.n.Z = function(a) {
                    this.j = a
                };
                a.n.Z.prototype = new a.n.j;
                a.n.Z.prototype.text = function() {
                    if (0 == arguments.length) {
                        var b = a.a.f.get(this.j, c) || {};
                        b.$a === p && b.Ba && (b.$a = b.Ba.innerHTML);
                        return b.$a
                    }
                    a.a.f.set(this.j, c, {
                        $a: arguments[0]
                    })
                };
                a.n.j.prototype.nodes = function() {
                    if (0 == arguments.length) return (a.a.f.get(this.j, c) || {}).Ba;
                    a.a.f.set(this.j, c, {
                        Ba: arguments[0]
                    })
                };
                a.b("templateSources", a.n);
                a.b("templateSources.domElement", a.n.j);
                a.b("templateSources.anonymousTemplate", a.n.Z)
            })();
            (function() {
                function b(b, c, d) {
                    var e;
                    for (c = a.e.nextSibling(c); b && (e = b) !== c;) b = a.e.nextSibling(e), d(e, b)
                }
                function c(c, d) {
                    if (c.length) {
                        var e = c[0],
                            f = c[c.length - 1],
                            h = e.parentNode,
                            m = a.J.instance,
                            q = m.preprocessNode;
                        if (q) {
                            b(e, f, function(a, b) {
                                var c = a.previousSibling,
                                    d = q.call(m, a);
                                d && (a === e && (e = d[0] || b), a === f && (f = d[d.length - 1] || c))
                            });
                            c.length = 0;
                            if (!e) return;
                            e === f ? c.push(e) : (c.push(e, f), a.a.ea(c, h))
                        }
                        b(e, f, function(b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.fb(d, b)
                        });
                        b(e, f, function(b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.w.Ib(b, [d])
                        });
                        a.a.ea(c, h)
                    }
                }
                function d(a) {
                    return a.nodeType ? a : 0 < a.length ? a[0] : null
                }
                function e(b, e, h, n, r) {
                    r = r || {};
                    var m = b && d(b),
                        m = m && m.ownerDocument,
                        q = r.templateEngine || f;
                    a.Za.Ub(h, q, m);
                    h = q.renderTemplate(h, n, r, m);
                    if ("number" != typeof h.length || 0 < h.length && "number" != typeof h[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
                    m = !1;
                    switch (e) {
                    case "replaceChildren":
                        a.e.U(b, h);
                        m = !0;
                        break;
                    case "replaceNode":
                        a.a.Bb(b, h);
                        m = !0;
                        break;
                    case "ignoreTargetNode":
                        break;
                    default:
                        throw Error("Unknown renderMode: " + e);
                    }
                    m && (c(h, n), r.afterRender && a.k.t(r.afterRender, null, [h, n.$data]));
                    return h
                }
                var f;
                a.Wa = function(b) {
                    if (b != p && !(b instanceof a.C)) throw Error("templateEngine must inherit from ko.templateEngine");
                    f = b
                };
                a.Ta = function(b, c, h, n, r) {
                    h = h || {};
                    if ((h.templateEngine || f) == p) throw Error("Set a template engine before calling renderTemplate");
                    r = r || "replaceChildren";
                    if (n) {
                        var m = d(n);
                        return a.h(function() {
                            var f = c && c instanceof a.I ? c : new a.I(a.a.c(c)),
                                p = a.v(b) ? b() : "function" == typeof b ? b(f.$data, f) : b,
                                f = e(n, r, p, f, h);
                            "replaceNode" == r && (n = f, m = d(n))
                        }, null, {
                            Da: function() {
                                return !m || !a.a.Ea(m)
                            },
                            G: m && "replaceNode" == r ? m.parentNode : m
                        })
                    }
                    return a.w.Na(function(d) {
                        a.Ta(b, c, h, d, "replaceNode")
                    })
                };
                a.jc = function(b, d, f, h, r) {
                    function m(a, b) {
                        c(b, s);
                        f.afterRender && f.afterRender(b, a)
                    }
                    function q(a, c) {
                        s = r.createChildContext(a, f.as, function(a) {
                            a.$index = c
                        });
                        var d = "function" == typeof b ? b(a, s) : b;
                        return e(null, "ignoreTargetNode", d, s, f)
                    }
                    var s;
                    return a.h(function() {
                        var b = a.a.c(d) || [];
                        "undefined" == typeof b.length && (b = [b]);
                        b = a.a.la(b, function(b) {
                            return f.includeDestroyed || b === p || null === b || !a.a.c(b._destroy)
                        });
                        a.k.t(a.a.Ua, null, [h, b, q, f, m])
                    }, null, {
                        G: h
                    })
                };
                var h = a.a.f.L();
                a.d.template = {
                    init: function(b, c) {
                        var d = a.a.c(c());
                        "string" == typeof d || d.name ? a.e.da(b) : (d = a.e.childNodes(b), d = a.a.ec(d), (new a.n.Z(b)).nodes(d));
                        return {
                            controlsDescendantBindings: !0
                        }
                    },
                    update: function(b, c, d, e, f) {
                        var m = c(),
                            q;
                        c = a.a.c(m);
                        d = !0;
                        e = null;
                        "string" == typeof c ? c = {} : (m = c.name, "if" in c && (d = a.a.c(c["if"])), d && "ifnot" in c && (d = !a.a.c(c.ifnot)), q = a.a.c(c.data));
                        "foreach" in c ? e = a.jc(m || b, d && c.foreach || [], c, b, f) : d ? (f = "data" in c ? f.createChildContext(q, c.as) : f, e = a.Ta(m || b, f, c, b)) : a.e.da(b);
                        f = e;
                        (q = a.a.f.get(b, h)) && "function" == typeof q.F && q.F();
                        a.a.f.set(b, h, f && f.ga() ? f : p)
                    }
                };
                a.g.aa.template = function(b) {
                    b = a.g.Ra(b);
                    return 1 == b.length && b[0].unknown || a.g.bc(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                };
                a.e.Q.template = !0
            })();
            a.b("setTemplateEngine", a.Wa);
            a.b("renderTemplate", a.Ta);
            a.a.nb = function(a, c, d) {
                if (a.length && c.length) {
                    var e, f, h, g, k;
                    for (e =
                    f = 0;
                    (!d || e < d) && (g = a[f]); ++f) {
                        for (h = 0; k = c[h]; ++h) if (g.value === k.value) {
                            g.moved = k.index;
                            k.moved = g.index;
                            c.splice(h, 1);
                            e = h = 0;
                            break
                        }
                        e += h
                    }
                }
            };
            a.a.Aa = function() {
                function b(b, d, e, f, h) {
                    var g = Math.min,
                        k = Math.max,
                        l = [],
                        n, p = b.length,
                        m, q = d.length,
                        s = q - p || 1,
                        t = p + q + 1,
                        u, w, y;
                    for (n = 0; n <= p; n++) for (w = u, l.push(u = []), y = g(q, n + s), m = k(0, n - 1); m <= y; m++) u[m] = m ? n ? b[n - 1] === d[m - 1] ? w[m - 1] : g(w[m] || t, u[m - 1] || t) + 1 : m + 1 : n + 1;
                    g = [];
                    k = [];
                    s = [];
                    n = p;
                    for (m = q; n || m;) q = l[n][m] - 1, m && q === l[n][m - 1] ? k.push(g[g.length] = {
                        status: e,
                        value: d[--m],
                        index: m
                    }) : n && q === l[n - 1][m] ? s.push(g[g.length] = {
                        status: f,
                        value: b[--n],
                        index: n
                    }) : (--m, --n, h.sparse || g.push({
                        status: "retained",
                        value: d[m]
                    }));
                    a.a.nb(k, s, 10 * p);
                    return g.reverse()
                }
                return function(a, d, e) {
                    e = "boolean" === typeof e ? {
                        dontLimitMoves: e
                    } : e || {};
                    a = a || [];
                    d = d || [];
                    return a.length <= d.length ? b(a, d, "added", "deleted", e) : b(d, a, "deleted", "added", e)
                }
            }();
            a.b("utils.compareArrays", a.a.Aa);
            (function() {
                function b(b, c, f, h, g) {
                    var k = [],
                        l = a.h(function() {
                            var l = c(f, g, a.a.ea(k, b)) || [];
                            0 < k.length && (a.a.Bb(k, l), h && a.k.t(h, null, [f, l, g]));
                            k.length = 0;
                            a.a.$(k, l)
                        }, null, {
                            G: b,
                            Da: function() {
                                return !a.a.eb(k)
                            }
                        });
                    return {
                        S: k,
                        h: l.ga() ? l : p
                    }
                }
                var c = a.a.f.L();
                a.a.Ua = function(d, e, f, h, g) {
                    function k(b, c) {
                        v = r[c];
                        u !== c && (z[b] = v);
                        v.Ia(u++);
                        a.a.ea(v.S, d);
                        s.push(v);
                        y.push(v)
                    }
                    function l(b, c) {
                        if (b) for (var d = 0, e = c.length; d < e; d++) c[d] && a.a.r(c[d].S, function(a) {
                            b(a, d, c[d].ka)
                        })
                    }
                    e = e || [];
                    h = h || {};
                    var n = a.a.f.get(d, c) === p,
                        r = a.a.f.get(d, c) || [],
                        m = a.a.ya(r, function(a) {
                            return a.ka
                        }),
                        q = a.a.Aa(m, e, h.dontLimitMoves),
                        s = [],
                        t = 0,
                        u = 0,
                        w = [],
                        y = [];
                    e = [];
                    for (var z = [], m = [], v, x = 0, A, C; A = q[x]; x++) switch (C = A.moved, A.status) {
                    case "deleted":
                        C === p && (v = r[t], v.h && v.h.F(), w.push.apply(w, a.a.ea(v.S, d)), h.beforeRemove && (e[x] = v, y.push(v)));
                        t++;
                        break;
                    case "retained":
                        k(x, t++);
                        break;
                    case "added":
                        C !== p ? k(x, C) : (v = {
                            ka: A.value,
                            Ia: a.m(u++)
                        }, s.push(v), y.push(v), n || (m[x] = v))
                    }
                    l(h.beforeMove, z);
                    a.a.r(w, h.beforeRemove ? a.M : a.removeNode);
                    for (var x = 0, n = a.e.firstChild(d), E; v = y[x]; x++) {
                        v.S || a.a.extend(v, b(d, f, v.ka, g, v.Ia));
                        for (t = 0; q = v.S[t]; n = q.nextSibling, E = q, t++) q !== n && a.e.rb(d, q, E);
                        !v.Zb && g && (g(v.ka, v.S, v.Ia), v.Zb = !0)
                    }
                    l(h.beforeRemove, e);
                    l(h.afterMove, z);
                    l(h.afterAdd, m);
                    a.a.f.set(d, c, s)
                }
            })();
            a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Ua);
            a.K = function() {
                this.allowTemplateRewriting = !1
            };
            a.K.prototype = new a.C;
            a.K.prototype.renderTemplateSource = function(b) {
                var c = (9 > a.a.oa ? 0 : b.nodes) ? b.nodes() : null;
                if (c) return a.a.R(c.cloneNode(!0).childNodes);
                b = b.text();
                return a.a.Qa(b)
            };
            a.K.Ja = new a.K;
            a.Wa(a.K.Ja);
            a.b("nativeTemplateEngine", a.K);
            (function() {
                a.La = function() {
                    var a = this.ac = function() {
                        if (!t || !t.tmpl) return 0;
                        try {
                            if (0 <= t.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2
                        } catch (a) {}
                        return 1
                    }();
                    this.renderTemplateSource = function(b, e, f) {
                        f = f || {};
                        if (2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                        var h = b.data("precompiled");
                        h || (h = b.text() || "", h = t.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b.data("precompiled", h));
                        b = [e.$data];
                        e = t.extend({
                            koBindingContext: e
                        }, f.templateOptions);
                        e = t.tmpl(h, b, e);
                        e.appendTo(w.createElement("div"));
                        t.fragments = {};
                        return e
                    };
                    this.createJavaScriptEvaluatorBlock = function(a) {
                        return "{{ko_code ((function() { return " + a + " })()) }}"
                    };
                    this.addTemplate = function(a, b) {
                        w.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>")
                    };
                    0 < a && (t.tmpl.tag.ko_code = {
                        open: "__.push($1 || '');"
                    }, t.tmpl.tag.ko_with = {
                        open: "with($1) {",
                        close: "} "
                    })
                };
                a.La.prototype = new a.C;
                var b = new a.La;
                0 < b.ac && a.Wa(b);
                a.b("jqueryTmplTemplateEngine", a.La)
            })()
        })
    })();
})();