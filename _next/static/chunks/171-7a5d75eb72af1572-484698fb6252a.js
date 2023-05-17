"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [171], {
        24394: function(t, e, n) {
            n.d(e, {
                K: function() {
                    return i
                },
                k: function() {
                    return r
                }
            });
            var i = function() {},
                r = function() {}
        },
        25364: function(t, e, n) {
            n.d(e, {
                p: function() {
                    return r
                }
            });
            var i = n(67294);
            let r = (0, i.createContext)({})
        },
        240: function(t, e, n) {
            n.d(e, {
                O: function() {
                    return r
                }
            });
            var i = n(67294);
            let r = (0, i.createContext)(null)
        },
        11171: function(t, e, n) {
            n.d(e, {
                E: function() {
                    return r7
                }
            });
            var i, r, o, a, s, l = n(67294);
            let u = (0, l.createContext)({
                    transformPagePoint: t => t,
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                h = (0, l.createContext)({});
            var c = n(240),
                d = n(58868);
            let p = (0, l.createContext)({
                strict: !1
            });

            function f(t) {
                return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function m(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function v(t) {
                return "object" == typeof t && "function" == typeof t.start
            }
            let g = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

            function y(t) {
                return v(t.animate) || g.some(e => m(t[e]))
            }

            function x(t) {
                return Boolean(y(t) || t.variants)
            }

            function b(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let w = t => ({
                    isEnabled: e => t.some(t => !!e[t])
                }),
                A = {
                    measureLayout: w(["layout", "layoutId", "drag"]),
                    animation: w(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
                    exit: w(["exit"]),
                    drag: w(["drag", "dragControls"]),
                    focus: w(["whileFocus"]),
                    hover: w(["whileHover", "onHoverStart", "onHoverEnd"]),
                    tap: w(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                    pan: w(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
                    inView: w(["whileInView", "onViewportEnter", "onViewportLeave"])
                };
            var P = n(11741),
                S = n(96681);
            let T = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                },
                V = 1;
            var E = n(25364);
            class C extends l.Component {
                getSnapshotBeforeUpdate() {
                    let {
                        visualElement: t,
                        props: e
                    } = this.props;
                    return t && t.setProps(e), null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }
            let M = (0, l.createContext)({}),
                R = Symbol.for("motionComponentSymbol"),
                k = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

            function L(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (k.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1
            }
            let O = {},
                j = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                D = new Set(j);

            function F(t, {
                layout: e,
                layoutId: n
            }) {
                return D.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!O[t] || "opacity" === t)
            }
            let B = t => !!(null == t ? void 0 : t.getVelocity),
                U = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                I = (t, e) => j.indexOf(t) - j.indexOf(e);

            function $(t) {
                return t.startsWith("--")
            }
            let N = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                z = (t, e) => n => Math.max(Math.min(n, e), t),
                W = t => t % 1 ? Number(t.toFixed(5)) : t,
                Y = /(-)?([\d]*\.?[\d])+/g,
                H = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                X = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function Z(t) {
                return "string" == typeof t
            }
            let q = t => ({
                    test: e => Z(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                G = q("deg"),
                K = q("%"),
                _ = q("px"),
                J = q("vh"),
                Q = q("vw"),
                tt = Object.assign(Object.assign({}, K), {
                    parse: t => K.parse(t) / 100,
                    transform: t => K.transform(100 * t)
                }),
                te = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                tn = Object.assign(Object.assign({}, te), {
                    transform: z(0, 1)
                }),
                ti = Object.assign(Object.assign({}, te), {
                    default: 1
                }),
                tr = { ...te,
                    transform: Math.round
                },
                to = {
                    borderWidth: _,
                    borderTopWidth: _,
                    borderRightWidth: _,
                    borderBottomWidth: _,
                    borderLeftWidth: _,
                    borderRadius: _,
                    radius: _,
                    borderTopLeftRadius: _,
                    borderTopRightRadius: _,
                    borderBottomRightRadius: _,
                    borderBottomLeftRadius: _,
                    width: _,
                    maxWidth: _,
                    height: _,
                    maxHeight: _,
                    size: _,
                    top: _,
                    right: _,
                    bottom: _,
                    left: _,
                    padding: _,
                    paddingTop: _,
                    paddingRight: _,
                    paddingBottom: _,
                    paddingLeft: _,
                    margin: _,
                    marginTop: _,
                    marginRight: _,
                    marginBottom: _,
                    marginLeft: _,
                    rotate: G,
                    rotateX: G,
                    rotateY: G,
                    rotateZ: G,
                    scale: ti,
                    scaleX: ti,
                    scaleY: ti,
                    scaleZ: ti,
                    skew: G,
                    skewX: G,
                    skewY: G,
                    distance: _,
                    translateX: _,
                    translateY: _,
                    translateZ: _,
                    x: _,
                    y: _,
                    z: _,
                    perspective: _,
                    transformPerspective: _,
                    opacity: tn,
                    originX: tt,
                    originY: tt,
                    originZ: _,
                    zIndex: tr,
                    fillOpacity: tn,
                    strokeOpacity: tn,
                    numOctaves: tr
                };

            function ta(t, e, n, i) {
                let {
                    style: r,
                    vars: o,
                    transform: a,
                    transformKeys: s,
                    transformOrigin: l
                } = t;
                s.length = 0;
                let u = !1,
                    h = !1,
                    c = !0;
                for (let d in e) {
                    let p = e[d];
                    if ($(d)) {
                        o[d] = p;
                        continue
                    }
                    let f = to[d],
                        m = N(p, f);
                    if (D.has(d)) {
                        if (u = !0, a[d] = m, s.push(d), !c) continue;
                        p !== (f.default || 0) && (c = !1)
                    } else d.startsWith("origin") ? (h = !0, l[d] = m) : r[d] = m
                }
                if (u || i ? r.transform = function({
                        transform: t,
                        transformKeys: e
                    }, {
                        enableHardwareAcceleration: n = !0,
                        allowTransformNone: i = !0
                    }, r, o) {
                        let a = "";
                        for (let s of (e.sort(I), e)) a += `${U[s]||s}(${t[s]}) `;
                        return n && !t.z && (a += "translateZ(0)"), a = a.trim(), o ? a = o(t, r ? "" : a) : i && r && (a = "none"), a
                    }(t, n, c, i) : !e.transform && r.transform && (r.transform = "none"), h) {
                    let {
                        originX: v = "50%",
                        originY: g = "50%",
                        originZ: y = 0
                    } = l;
                    r.transformOrigin = `${v} ${g} ${y}`
                }
            }
            let ts = () => ({
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {}
            });

            function tl(t, e, n) {
                for (let i in e) B(e[i]) || F(i, n) || (t[i] = e[i])
            }

            function tu(t, e, n) {
                let i = {},
                    r = function(t, e, n) {
                        let i = t.style || {},
                            r = {};
                        return tl(r, i, t), Object.assign(r, function({
                            transformTemplate: t
                        }, e, n) {
                            return (0, l.useMemo)(() => {
                                let i = ts();
                                return ta(i, e, {
                                    enableHardwareAcceleration: !n
                                }, t), Object.assign({}, i.vars, i.style)
                            }, [e])
                        }(t, e, n)), t.transformValues ? t.transformValues(r) : r
                    }(t, e, n);
                return t.drag && !1 !== t.dragListener && (i.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), i.style = r, i
            }
            let th = new Set(["initial", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

            function tc(t) {
                return th.has(t)
            }
            let td = t => !tc(t);
            try {
                (i = require("@emotion/is-prop-valid").default) && (td = t => t.startsWith("on") ? !tc(t) : i(t))
            } catch (tp) {}

            function tf(t, e, n) {
                return "string" == typeof t ? t : _.transform(e + n * t)
            }
            let tm = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                tv = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function tg(t, {
                attrX: e,
                attrY: n,
                originX: i,
                originY: r,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: s = 0,
                ...l
            }, u, h) {
                ta(t, l, u, h), t.attrs = t.style, t.style = {};
                let {
                    attrs: c,
                    style: d,
                    dimensions: p
                } = t;
                c.transform && (p && (d.transform = c.transform), delete c.transform), p && (void 0 !== i || void 0 !== r || d.transform) && (d.transformOrigin = function(t, e, n) {
                    let i = tf(e, t.x, t.width),
                        r = tf(n, t.y, t.height);
                    return `${i} ${r}`
                }(p, void 0 !== i ? i : .5, void 0 !== r ? r : .5)), void 0 !== e && (c.x = e), void 0 !== n && (c.y = n), void 0 !== o && function(t, e, n = 1, i = 0, r = !0) {
                    t.pathLength = 1;
                    let o = r ? tm : tv;
                    t[o.offset] = _.transform(-i);
                    let a = _.transform(e),
                        s = _.transform(n);
                    t[o.array] = `${a} ${s}`
                }(c, o, a, s, !1)
            }
            let ty = () => ({ ...ts(),
                attrs: {}
            });

            function tx(t, e) {
                let n = (0, l.useMemo)(() => {
                    let n = ty();
                    return tg(n, e, {
                        enableHardwareAcceleration: !1
                    }, t.transformTemplate), { ...n.attrs,
                        style: { ...n.style
                        }
                    }
                }, [e]);
                if (t.style) {
                    let i = {};
                    tl(i, t.style, t), n.style = { ...i,
                        ...n.style
                    }
                }
                return n
            }
            let tb = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

            function tw(t, {
                style: e,
                vars: n
            }, i, r) {
                for (let o in Object.assign(t.style, e, r && r.getProjectionStyles(i)), n) t.style.setProperty(o, n[o])
            }
            let tA = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

            function tP(t, e, n, i) {
                for (let r in tw(t, e, void 0, i), e.attrs) t.setAttribute(tA.has(r) ? r : tb(r), e.attrs[r])
            }

            function tS(t) {
                let {
                    style: e
                } = t, n = {};
                for (let i in e)(B(e[i]) || F(i, t)) && (n[i] = e[i]);
                return n
            }

            function tT(t) {
                let e = tS(t);
                for (let n in t)
                    if (B(t[n])) {
                        let i = "x" === n || "y" === n ? "attr" + n.toUpperCase() : n;
                        e[i] = t[n]
                    }
                return e
            }

            function tV(t, e, n, i = {}, r = {}) {
                return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)), e
            }
            let tE = t => Array.isArray(t),
                tC = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
                tM = t => tE(t) ? t[t.length - 1] || 0 : t;

            function tR(t) {
                let e = B(t) ? t.get() : t;
                return tC(e) ? e.toValue() : e
            }
            let tk = t => (e, n) => {
                    let i = (0, l.useContext)(h),
                        r = (0, l.useContext)(c.O),
                        o = () => (function({
                            scrapeMotionValuesFromProps: t,
                            createRenderState: e,
                            onMount: n
                        }, i, r, o) {
                            let a = {
                                latestValues: function(t, e, n, i) {
                                    let r = {},
                                        o = i(t);
                                    for (let a in o) r[a] = tR(o[a]);
                                    let {
                                        initial: s,
                                        animate: l
                                    } = t, u = y(t), h = x(t);
                                    e && h && !u && !1 !== t.inherit && (void 0 === s && (s = e.initial), void 0 === l && (l = e.animate));
                                    let c = !!n && !1 === n.initial;
                                    c = c || !1 === s;
                                    let d = c ? l : s;
                                    if (d && "boolean" != typeof d && !v(d)) {
                                        let p = Array.isArray(d) ? d : [d];
                                        p.forEach(e => {
                                            let n = tV(t, e);
                                            if (!n) return;
                                            let {
                                                transitionEnd: i,
                                                transition: o,
                                                ...a
                                            } = n;
                                            for (let s in a) {
                                                let l = a[s];
                                                if (Array.isArray(l)) {
                                                    let u = c ? l.length - 1 : 0;
                                                    l = l[u]
                                                }
                                                null !== l && (r[s] = l)
                                            }
                                            for (let h in i) r[h] = i[h]
                                        })
                                    }
                                    return r
                                }(i, r, o, t),
                                renderState: e()
                            };
                            return n && (a.mount = t => n(i, t, a)), a
                        })(t, e, i, r);
                    return n ? o() : (0, S.h)(o)
                },
                tL = {
                    useVisualState: tk({
                        scrapeMotionValuesFromProps: tT,
                        createRenderState: ty,
                        onMount: (t, e, {
                            renderState: n,
                            latestValues: i
                        }) => {
                            try {
                                n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                            } catch (r) {
                                n.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            tg(n, i, {
                                enableHardwareAcceleration: !1
                            }, t.transformTemplate), tP(e, n)
                        }
                    })
                },
                tO = {
                    useVisualState: tk({
                        scrapeMotionValuesFromProps: tS,
                        createRenderState: ts
                    })
                };

            function tj(t, e, n, i = {
                passive: !0
            }) {
                return t.addEventListener(e, n, i), () => t.removeEventListener(e, n)
            }

            function tD(t, e, n, i) {
                (0, l.useEffect)(() => {
                    let r = t.current;
                    if (n && r) return tj(r, e, n, i)
                }, [t, e, n, i])
            }

            function tF(t) {
                return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
            }

            function tB(t) {
                let e = !!t.touches;
                return e
            }(r = a || (a = {})).Animate = "animate", r.Hover = "whileHover", r.Tap = "whileTap", r.Drag = "whileDrag", r.Focus = "whileFocus", r.InView = "whileInView", r.Exit = "exit";
            let tU = {
                pageX: 0,
                pageY: 0
            };

            function tI(t, e = "page") {
                return {
                    point: tB(t) ? function(t, e = "page") {
                        let n = t.touches[0] || t.changedTouches[0],
                            i = n || tU;
                        return {
                            x: i[e + "X"],
                            y: i[e + "Y"]
                        }
                    }(t, e) : function(t, e = "page") {
                        return {
                            x: t[e + "X"],
                            y: t[e + "Y"]
                        }
                    }(t, e)
                }
            }
            let t$ = (t, e = !1) => {
                    let n = e => t(e, tI(e));
                    return e ? t => {
                        let e = t instanceof MouseEvent,
                            i = !e || e && 0 === t.button;
                        i && n(t)
                    } : n
                },
                tN = () => P.j && null === window.onpointerdown,
                tz = () => P.j && null === window.ontouchstart,
                tW = () => P.j && null === window.onmousedown,
                tY = {
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointercancel: "mousecancel",
                    pointerover: "mouseover",
                    pointerout: "mouseout",
                    pointerenter: "mouseenter",
                    pointerleave: "mouseleave"
                },
                tH = {
                    pointerdown: "touchstart",
                    pointermove: "touchmove",
                    pointerup: "touchend",
                    pointercancel: "touchcancel"
                };

            function tX(t) {
                if (tN());
                else if (tz()) return tH[t];
                else if (tW()) return tY[t];
                return t
            }

            function tZ(t, e, n, i) {
                return tj(t, tX(e), t$(n, "pointerdown" === e), i)
            }

            function tq(t, e, n, i) {
                return tD(t, tX(e), n && t$(n, "pointerdown" === e), i)
            }

            function tG(t) {
                let e = null;
                return () => {
                    let n = () => {
                        e = null
                    };
                    return null === e && (e = t, n)
                }
            }
            let tK = tG("dragHorizontal"),
                t_ = tG("dragVertical");

            function tJ(t) {
                let e = !1;
                if ("y" === t) e = t_();
                else if ("x" === t) e = tK();
                else {
                    let n = tK(),
                        i = t_();
                    n && i ? e = () => {
                        n(), i()
                    } : (n && n(), i && i())
                }
                return e
            }

            function tQ() {
                let t = tJ(!0);
                return !t || (t(), !1)
            }

            function t0(t, e, n) {
                return (i, r) => {
                    !(!tF(i) || tQ()) && (t.animationState && t.animationState.setActive(a.Hover, e), n && n(i, r))
                }
            }
            let t1 = (t, e) => !!e && (t === e || t1(t, e.parentElement));
            var t5 = n(65411);
            let t2 = (t, e) => n => e(t(n)),
                t3 = (...t) => t.reduce(t2);
            var t4 = n(49304),
                t6 = n(16034);
            let t9 = new WeakMap,
                t7 = new WeakMap,
                t8 = t => {
                    let e = t9.get(t.target);
                    e && e(t)
                },
                et = t => {
                    t.forEach(t8)
                },
                ee = {
                    some: 0,
                    all: 1
                };

            function en(t, e, n, {
                root: i,
                margin: r,
                amount: o = "some",
                once: s
            }) {
                (0, l.useEffect)(() => {
                    if (!t) return;
                    let l = {
                            root: null == i ? void 0 : i.current,
                            rootMargin: r,
                            threshold: "number" == typeof o ? o : ee[o]
                        },
                        u = t => {
                            let {
                                isIntersecting: i
                            } = t;
                            if (e.isInView === i || (e.isInView = i, s && !i && e.hasEnteredView)) return;
                            i && (e.hasEnteredView = !0), n.animationState && n.animationState.setActive(a.InView, i);
                            let r = n.getProps(),
                                o = i ? r.onViewportEnter : r.onViewportLeave;
                            o && o(t)
                        };
                    return function(t, e, n) {
                        let i = function({
                            root: t,
                            ...e
                        }) {
                            let n = t || document;
                            t7.has(n) || t7.set(n, {});
                            let i = t7.get(n),
                                r = JSON.stringify(e);
                            return i[r] || (i[r] = new IntersectionObserver(et, {
                                root: t,
                                ...e
                            })), i[r]
                        }(e);
                        return t9.set(t, n), i.observe(t), () => {
                            t9.delete(t), i.unobserve(t)
                        }
                    }(n.getInstance(), l, u)
                }, [t, i, r, o])
            }

            function ei(t, e, n, {
                fallback: i = !0
            }) {
                (0, l.useEffect)(() => {
                    t && i && ("production" !== t4.O && (0, t6.O)(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(() => {
                        e.hasEnteredView = !0;
                        let {
                            onViewportEnter: t
                        } = n.getProps();
                        t && t(null), n.animationState && n.animationState.setActive(a.InView, !0)
                    }))
                }, [t])
            }
            let er = t => e => (t(e), null),
                eo = {
                    inView: er(function({
                        visualElement: t,
                        whileInView: e,
                        onViewportEnter: n,
                        onViewportLeave: i,
                        viewport: r = {}
                    }) {
                        let o = (0, l.useRef)({
                                hasEnteredView: !1,
                                isInView: !1
                            }),
                            a = Boolean(e || n || i);
                        r.once && o.current.hasEnteredView && (a = !1);
                        let s = "undefined" == typeof IntersectionObserver ? ei : en;
                        s(a, o.current, t, r)
                    }),
                    tap: er(function({
                        onTap: t,
                        onTapStart: e,
                        onTapCancel: n,
                        whileTap: i,
                        visualElement: r
                    }) {
                        let o = (0, l.useRef)(!1),
                            s = (0, l.useRef)(null),
                            u = {
                                passive: !(e || t || n || f)
                            };

                        function h() {
                            s.current && s.current(), s.current = null
                        }

                        function c() {
                            return h(), o.current = !1, r.animationState && r.animationState.setActive(a.Tap, !1), !tQ()
                        }

                        function d(e, i) {
                            c() && (t1(r.getInstance(), e.target) ? t && t(e, i) : n && n(e, i))
                        }

                        function p(t, e) {
                            c() && n && n(t, e)
                        }

                        function f(t, n) {
                            h(), !o.current && (o.current = !0, s.current = t3(tZ(window, "pointerup", d, u), tZ(window, "pointercancel", p, u)), r.animationState && r.animationState.setActive(a.Tap, !0), e && e(t, n))
                        }
                        tq(r, "pointerdown", t || e || n || i ? f : void 0, u), (0, t5.z)(h)
                    }),
                    focus: er(function({
                        whileFocus: t,
                        visualElement: e
                    }) {
                        let {
                            animationState: n
                        } = e, i = () => {
                            n && n.setActive(a.Focus, !0)
                        }, r = () => {
                            n && n.setActive(a.Focus, !1)
                        };
                        tD(e, "focus", t ? i : void 0), tD(e, "blur", t ? r : void 0)
                    }),
                    hover: er(function({
                        onHoverStart: t,
                        onHoverEnd: e,
                        whileHover: n,
                        visualElement: i
                    }) {
                        tq(i, "pointerenter", t || n ? t0(i, !0, t) : void 0, {
                            passive: !t
                        }), tq(i, "pointerleave", e || n ? t0(i, !1, e) : void 0, {
                            passive: !e
                        })
                    })
                };

            function ea() {
                let t = (0, l.useContext)(c.O);
                if (null === t) return [!0, null];
                let {
                    isPresent: e,
                    onExitComplete: n,
                    register: i
                } = t, r = (0, l.useId)();
                (0, l.useEffect)(() => i(r), []);
                let o = () => n && n(r);
                return !e && n ? [!1, o] : [!0]
            }

            function es(t, e) {
                if (!Array.isArray(e)) return !1;
                let n = e.length;
                if (n !== t.length) return !1;
                for (let i = 0; i < n; i++)
                    if (e[i] !== t[i]) return !1;
                return !0
            }

            function el(t, e) {
                var n = {};
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && 0 > e.indexOf(i) && (n[i] = t[i]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                    for (var r = 0, i = Object.getOwnPropertySymbols(t); r < i.length; r++) 0 > e.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]]);
                return n
            }
            var eu = n(24394);
            let eh = (t, e, n) => Math.min(Math.max(n, t), e);

            function ec(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let ed = ["duration", "bounce"],
                ep = ["stiffness", "damping", "mass"];

            function ef(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function em(t) {
                var {
                    from: e = 0,
                    to: n = 1,
                    restSpeed: i = 2,
                    restDelta: r
                } = t, o = el(t, ["from", "to", "restSpeed", "restDelta"]);
                let a = {
                        done: !1,
                        value: e
                    },
                    {
                        stiffness: s,
                        damping: l,
                        mass: u,
                        velocity: h,
                        duration: c,
                        isResolvedFromDuration: d
                    } = function(t) {
                        let e = Object.assign({
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1
                        }, t);
                        if (!ef(t, ep) && ef(t, ed)) {
                            let n = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: n = 0,
                                mass: i = 1
                            }) {
                                let r, o;
                                (0, eu.K)(t <= 1e4, "Spring duration must be 10 seconds or less");
                                let a = 1 - e;
                                a = eh(.05, 1, a), t = eh(.01, 10, t / 1e3), a < 1 ? (r = e => {
                                    let i = e * a,
                                        r = i * t,
                                        o = ec(e, a);
                                    return .001 - (i - n) / o * Math.exp(-r)
                                }, o = e => {
                                    let i = e * a,
                                        o = i * t,
                                        s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                                        l = ec(Math.pow(e, 2), a),
                                        u = -r(e) + .001 > 0 ? -1 : 1;
                                    return u * ((o * n + n - s) * Math.exp(-o)) / l
                                }) : (r = e => {
                                    let i = Math.exp(-e * t),
                                        r = (e - n) * t + 1;
                                    return -.001 + i * r
                                }, o = e => {
                                    let i = Math.exp(-e * t),
                                        r = (n - e) * (t * t);
                                    return i * r
                                });
                                let s = 5 / t,
                                    l = function(t, e, n) {
                                        let i = n;
                                        for (let r = 1; r < 12; r++) i -= t(i) / e(i);
                                        return i
                                    }(r, o, s);
                                if (t *= 1e3, isNaN(l)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                }; {
                                    let u = Math.pow(l, 2) * i;
                                    return {
                                        stiffness: u,
                                        damping: 2 * a * Math.sqrt(i * u),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = Object.assign(Object.assign(Object.assign({}, e), n), {
                                velocity: 0,
                                mass: 1
                            })).isResolvedFromDuration = !0
                        }
                        return e
                    }(o),
                    p = ev,
                    f = ev;

                function m() {
                    let t = h ? -(h / 1e3) : 0,
                        i = n - e,
                        o = l / (2 * Math.sqrt(s * u)),
                        a = Math.sqrt(s / u) / 1e3;
                    if (void 0 === r && (r = Math.min(Math.abs(n - e) / 100, .4)), o < 1) {
                        let c = ec(a, o);
                        p = e => n - Math.exp(-o * a * e) * ((t + o * a * i) / c * Math.sin(c * e) + i * Math.cos(c * e)), f = e => {
                            let n = Math.exp(-o * a * e);
                            return o * a * n * (Math.sin(c * e) * (t + o * a * i) / c + i * Math.cos(c * e)) - n * (Math.cos(c * e) * (t + o * a * i) - c * i * Math.sin(c * e))
                        }
                    } else if (1 === o) p = e => n - Math.exp(-a * e) * (i + (t + a * i) * e);
                    else {
                        let d = a * Math.sqrt(o * o - 1);
                        p = e => {
                            let r = Math.min(d * e, 300);
                            return n - Math.exp(-o * a * e) * ((t + o * a * i) * Math.sinh(r) + d * i * Math.cosh(r)) / d
                        }
                    }
                }
                return m(), {
                    next: t => {
                        let e = p(t);
                        if (d) a.done = t >= c;
                        else {
                            let o = 1e3 * f(t),
                                s = Math.abs(n - e) <= r;
                            a.done = Math.abs(o) <= i && s
                        }
                        return a.value = a.done ? n : e, a
                    },
                    flipTarget: () => {
                        h = -h, [e, n] = [n, e], m()
                    }
                }
            }
            em.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
            let ev = t => 0,
                eg = (t, e, n) => {
                    let i = e - t;
                    return 0 === i ? 1 : (n - t) / i
                },
                ey = (t, e, n) => -n * t + n * e + t,
                ex = (t, e) => n => Boolean(Z(n) && X.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
                eb = (t, e, n) => i => {
                    if (!Z(i)) return i;
                    let [r, o, a, s] = i.match(Y);
                    return {
                        [t]: parseFloat(r),
                        [e]: parseFloat(o),
                        [n]: parseFloat(a),
                        alpha: void 0 !== s ? parseFloat(s) : 1
                    }
                },
                ew = z(0, 255),
                eA = Object.assign(Object.assign({}, te), {
                    transform: t => Math.round(ew(t))
                }),
                eP = {
                    test: ex("rgb", "red"),
                    parse: eb("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: n,
                        alpha: i = 1
                    }) => "rgba(" + eA.transform(t) + ", " + eA.transform(e) + ", " + eA.transform(n) + ", " + W(tn.transform(i)) + ")"
                },
                eS = {
                    test: ex("#"),
                    parse: function(t) {
                        let e = "",
                            n = "",
                            i = "",
                            r = "";
                        return t.length > 5 ? (e = t.substr(1, 2), n = t.substr(3, 2), i = t.substr(5, 2), r = t.substr(7, 2)) : (e = t.substr(1, 1), n = t.substr(2, 1), i = t.substr(3, 1), r = t.substr(4, 1), e += e, n += n, i += i, r += r), {
                            red: parseInt(e, 16),
                            green: parseInt(n, 16),
                            blue: parseInt(i, 16),
                            alpha: r ? parseInt(r, 16) / 255 : 1
                        }
                    },
                    transform: eP.transform
                },
                eT = {
                    test: ex("hsl", "hue"),
                    parse: eb("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: n,
                        alpha: i = 1
                    }) => "hsla(" + Math.round(t) + ", " + K.transform(W(e)) + ", " + K.transform(W(n)) + ", " + W(tn.transform(i)) + ")"
                };

            function eV(t, e, n) {
                return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? t + (e - t) * 6 * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
            }

            function eE({
                hue: t,
                saturation: e,
                lightness: n,
                alpha: i
            }) {
                t /= 360, n /= 100;
                let r = 0,
                    o = 0,
                    a = 0;
                if (e /= 100) {
                    let s = n < .5 ? n * (1 + e) : n + e - n * e,
                        l = 2 * n - s;
                    r = eV(l, s, t + 1 / 3), o = eV(l, s, t), a = eV(l, s, t - 1 / 3)
                } else r = o = a = n;
                return {
                    red: Math.round(255 * r),
                    green: Math.round(255 * o),
                    blue: Math.round(255 * a),
                    alpha: i
                }
            }
            let eC = (t, e, n) => {
                    let i = t * t;
                    return Math.sqrt(Math.max(0, n * (e * e - i) + i))
                },
                eM = [eS, eP, eT],
                eR = t => eM.find(e => e.test(t)),
                ek = t => `'${t}' is not an animatable color. Use the equivalent color code instead.`,
                eL = (t, e) => {
                    let n = eR(t),
                        i = eR(e);
                    (0, eu.k)(!!n, ek(t)), (0, eu.k)(!!i, ek(e));
                    let r = n.parse(t),
                        o = i.parse(e);
                    n === eT && (r = eE(r), n = eP), i === eT && (o = eE(o), i = eP);
                    let a = Object.assign({}, r);
                    return t => {
                        for (let e in a) "alpha" !== e && (a[e] = eC(r[e], o[e], t));
                        return a.alpha = ey(r.alpha, o.alpha, t), n.transform(a)
                    }
                },
                eO = {
                    test: t => eP.test(t) || eS.test(t) || eT.test(t),
                    parse: t => eP.test(t) ? eP.parse(t) : eT.test(t) ? eT.parse(t) : eS.parse(t),
                    transform: t => Z(t) ? t : t.hasOwnProperty("red") ? eP.transform(t) : eT.transform(t)
                },
                ej = "${c}",
                eD = "${n}";

            function eF(t) {
                "number" == typeof t && (t = `${t}`);
                let e = [],
                    n = 0,
                    i = t.match(H);
                i && (n = i.length, t = t.replace(H, ej), e.push(...i.map(eO.parse)));
                let r = t.match(Y);
                return r && (t = t.replace(Y, eD), e.push(...r.map(te.parse))), {
                    values: e,
                    numColors: n,
                    tokenised: t
                }
            }

            function eB(t) {
                return eF(t).values
            }

            function eU(t) {
                let {
                    values: e,
                    numColors: n,
                    tokenised: i
                } = eF(t), r = e.length;
                return t => {
                    let e = i;
                    for (let o = 0; o < r; o++) e = e.replace(o < n ? ej : eD, o < n ? eO.transform(t[o]) : W(t[o]));
                    return e
                }
            }
            let eI = t => "number" == typeof t ? 0 : t,
                e$ = {
                    test: function(t) {
                        var e, n, i, r;
                        return isNaN(t) && Z(t) && (null !== (n = null === (e = t.match(Y)) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) + (null !== (r = null === (i = t.match(H)) || void 0 === i ? void 0 : i.length) && void 0 !== r ? r : 0) > 0
                    },
                    parse: eB,
                    createTransformer: eU,
                    getAnimatableNone: function(t) {
                        let e = eB(t),
                            n = eU(t);
                        return n(e.map(eI))
                    }
                },
                eN = t => "number" == typeof t;

            function ez(t, e) {
                return eN(t) ? n => ey(t, e, n) : eO.test(t) ? eL(t, e) : eX(t, e)
            }
            let eW = (t, e) => {
                    let n = [...t],
                        i = n.length,
                        r = t.map((t, n) => ez(t, e[n]));
                    return t => {
                        for (let e = 0; e < i; e++) n[e] = r[e](t);
                        return n
                    }
                },
                eY = (t, e) => {
                    let n = Object.assign(Object.assign({}, t), e),
                        i = {};
                    for (let r in n) void 0 !== t[r] && void 0 !== e[r] && (i[r] = ez(t[r], e[r]));
                    return t => {
                        for (let e in i) n[e] = i[e](t);
                        return n
                    }
                };

            function eH(t) {
                let e = e$.parse(t),
                    n = e.length,
                    i = 0,
                    r = 0,
                    o = 0;
                for (let a = 0; a < n; a++) i || "number" == typeof e[a] ? i++ : void 0 !== e[a].hue ? o++ : r++;
                return {
                    parsed: e,
                    numNumbers: i,
                    numRGB: r,
                    numHSL: o
                }
            }
            let eX = (t, e) => {
                    let n = e$.createTransformer(e),
                        i = eH(t),
                        r = eH(e),
                        o = i.numHSL === r.numHSL && i.numRGB === r.numRGB && i.numNumbers >= r.numNumbers;
                    return o ? t3(eW(i.parsed, r.parsed), n) : ((0, eu.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?e:t}`)
                },
                eZ = (t, e) => n => ey(t, e, n);

            function eq(t, e, {
                clamp: n = !0,
                ease: i,
                mixer: r
            } = {}) {
                let o = t.length;
                (0, eu.k)(o === e.length, "Both input and output ranges must be the same length"), (0, eu.k)(!i || !Array.isArray(i) || i.length === o - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[o - 1] && (t = [].concat(t), e = [].concat(e), t.reverse(), e.reverse());
                let a = function(t, e, n) {
                        var i;
                        let r = [],
                            o = n || ("number" == typeof(i = t[0]) ? eZ : "string" == typeof i ? eO.test(i) ? eL : eX : Array.isArray(i) ? eW : "object" == typeof i ? eY : void 0),
                            a = t.length - 1;
                        for (let s = 0; s < a; s++) {
                            let l = o(t[s], t[s + 1]);
                            if (e) {
                                let u = Array.isArray(e) ? e[s] : e;
                                l = t3(u, l)
                            }
                            r.push(l)
                        }
                        return r
                    }(e, i, r),
                    s = 2 === o ? function([t, e], [n]) {
                        return i => n(eg(t, e, i))
                    }(t, a) : function(t, e) {
                        let n = t.length,
                            i = n - 1;
                        return r => {
                            let o = 0,
                                a = !1;
                            if (r <= t[0] ? a = !0 : r >= t[i] && (o = i - 1, a = !0), !a) {
                                let s = 1;
                                for (; s < n && !(t[s] > r) && s !== i; s++);
                                o = s - 1
                            }
                            let l = eg(t[o], t[o + 1], r);
                            return e[o](l)
                        }
                    }(t, a);
                return n ? e => s(eh(t[0], t[o - 1], e)) : s
            }
            let eG = t => e => 1 - t(1 - e),
                eK = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                e_ = t => e => e * e * ((t + 1) * e - t),
                eJ = 4 / 11,
                eQ = 8 / 11,
                e0 = t => t,
                e1 = t => Math.pow(t, 2),
                e5 = eG(e1),
                e2 = eK(e1),
                e3 = t => 1 - Math.sin(Math.acos(t)),
                e4 = eG(e3),
                e6 = eK(e4),
                e9 = e_(1.525),
                e7 = eG(e9),
                e8 = eK(e9),
                nt = (t => {
                    let e = e_(1.525);
                    return t => (t *= 2) < 1 ? .5 * e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })(0),
                ne = 4356 / 361,
                nn = 35442 / 1805,
                ni = 16061 / 1805,
                nr = t => {
                    if (1 === t || 0 === t) return t;
                    let e = t * t;
                    return t < eJ ? 7.5625 * e : t < eQ ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? ne * e - nn * t + ni : 10.8 * t * t - 20.52 * t + 10.72
                },
                no = eG(nr),
                na = t => t < .5 ? .5 * (1 - nr(1 - 2 * t)) : .5 * nr(2 * t - 1) + .5;

            function ns({
                from: t = 0,
                to: e = 1,
                ease: n,
                offset: i,
                duration: r = 300
            }) {
                let o = {
                        done: !1,
                        value: t
                    },
                    a = Array.isArray(e) ? e : [t, e],
                    s = (i && i.length === a.length ? i : function(t) {
                        let e = t.length;
                        return t.map((t, n) => 0 !== n ? n / (e - 1) : 0)
                    }(a)).map(t => t * r);

                function l() {
                    return eq(s, a, {
                        ease: Array.isArray(n) ? n : a.map(() => n || e2).splice(0, a.length - 1)
                    })
                }
                let u = l();
                return {
                    next: t => (o.value = u(t), o.done = t >= r, o),
                    flipTarget: () => {
                        a.reverse(), u = l()
                    }
                }
            }
            let nl = {
                keyframes: ns,
                spring: em,
                decay: function({
                    velocity: t = 0,
                    from: e = 0,
                    power: n = .8,
                    timeConstant: i = 350,
                    restDelta: r = .5,
                    modifyTarget: o
                }) {
                    let a = {
                            done: !1,
                            value: e
                        },
                        s = n * t,
                        l = e + s,
                        u = void 0 === o ? l : o(l);
                    return u !== l && (s = u - e), {
                        next: t => {
                            let e = -s * Math.exp(-t / i);
                            return a.done = !(e > r || e < -r), a.value = a.done ? u : u + e, a
                        },
                        flipTarget: () => {}
                    }
                }
            };
            var nu = n(54735);

            function nh(t, e, n = 0) {
                return t - e - n
            }
            let nc = t => {
                let e = ({
                    delta: e
                }) => t(e);
                return {
                    start: () => nu.ZP.update(e, !0),
                    stop: () => nu.qY.update(e)
                }
            };

            function nd(t) {
                let e, n, i;
                var r, {
                        from: o,
                        autoplay: a = !0,
                        driver: s = nc,
                        elapsed: l = 0,
                        repeat: u = 0,
                        repeatType: h = "loop",
                        repeatDelay: c = 0,
                        onPlay: d,
                        onStop: p,
                        onComplete: f,
                        onRepeat: m,
                        onUpdate: v
                    } = t,
                    g = el(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
                let {
                    to: y
                } = g, x = 0, b = g.duration, w = !1, A = !0, P = function(t) {
                    if (Array.isArray(t.to)) return ns;
                    if (nl[t.type]) return nl[t.type];
                    let e = new Set(Object.keys(t));
                    if (e.has("ease") || e.has("duration") && !e.has("dampingRatio"));
                    else if (e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta")) return em;
                    return ns
                }(g);
                (null === (r = P.needsInterpolation) || void 0 === r ? void 0 : r.call(P, o, y)) && (i = eq([0, 100], [o, y], {
                    clamp: !1
                }), o = 0, y = 100);
                let S = P(Object.assign(Object.assign({}, g), {
                    from: o,
                    to: y
                }));
                return a && (null == d || d(), (e = s(function(t) {
                    if (A || (t = -t), l += t, !w) {
                        let r = S.next(Math.max(0, l));
                        n = r.value, i && (n = i(n)), w = A ? r.done : l <= 0
                    }
                    if (null == v || v(n), w) {
                        if (0 === x && (null != b || (b = l)), x < u) {
                            var o, a;
                            o = l, a = b, (A ? o >= a + c : o <= -c) && (x++, "reverse" === h ? l = function(t, e, n = 0, i = !0) {
                                return i ? nh(e + -t, e, n) : e - (t - e) + n
                            }(l, b, c, A = x % 2 == 0) : (l = nh(l, b, c), "mirror" === h && S.flipTarget()), w = !1, m && m())
                        } else e.stop(), f && f()
                    }
                })).start()), {
                    stop: () => {
                        null == p || p(), e.stop()
                    }
                }
            }
            let np = t => 1e3 * t,
                nf = (t, e) => 1 - 3 * e + 3 * t,
                nm = (t, e) => 3 * e - 6 * t,
                nv = t => 3 * t,
                ng = (t, e, n) => ((nf(e, n) * t + nm(e, n)) * t + nv(e)) * t,
                ny = (t, e, n) => 3 * nf(e, n) * t * t + 2 * nm(e, n) * t + nv(e),
                nx = {
                    linear: e0,
                    easeIn: e1,
                    easeInOut: e2,
                    easeOut: e5,
                    circIn: e3,
                    circInOut: e6,
                    circOut: e4,
                    backIn: e9,
                    backInOut: e8,
                    backOut: e7,
                    anticipate: nt,
                    bounceIn: no,
                    bounceInOut: na,
                    bounceOut: nr
                },
                nb = t => {
                    if (Array.isArray(t)) {
                        (0, eu.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, n, i, r] = t;
                        return function(t, e, n, i) {
                            if (t === e && n === i) return e0;
                            let r = new Float32Array(11);
                            for (let o = 0; o < 11; ++o) r[o] = ng(.1 * o, t, n);
                            return o => 0 === o || 1 === o ? o : ng(function(e) {
                                let i = 0,
                                    o = 1;
                                for (; 10 !== o && r[o] <= e; ++o) i += .1;
                                --o;
                                let a = (e - r[o]) / (r[o + 1] - r[o]),
                                    s = i + .1 * a,
                                    l = ny(s, t, n);
                                return l >= .001 ? function(t, e, n, i) {
                                    for (let r = 0; r < 8; ++r) {
                                        let o = ny(e, n, i);
                                        if (0 === o) break;
                                        let a = ng(e, n, i) - t;
                                        e -= a / o
                                    }
                                    return e
                                }(e, s, t, n) : 0 === l ? s : function(t, e, n, i, r) {
                                    let o, a;
                                    let s = 0;
                                    do(o = ng(a = e + (n - e) / 2, i, r) - t) > 0 ? n = a : e = a; while (Math.abs(o) > 1e-7 && ++s < 10);
                                    return a
                                }(e, i, i + .1, t, n)
                            }(o), e, i)
                        }(e, n, i, r)
                    }
                    return "string" == typeof t ? ((0, eu.k)(void 0 !== nx[t], `Invalid easing type '${t}'`), nx[t]) : t
                },
                nw = t => Array.isArray(t) && "number" != typeof t[0],
                nA = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && e$.test(e) && !e.startsWith("url(")),
                nP = () => ({
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                }),
                nS = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                nT = () => ({
                    type: "keyframes",
                    ease: "linear",
                    duration: .3
                }),
                nV = t => ({
                    type: "keyframes",
                    duration: .8,
                    values: t
                }),
                nE = {
                    x: nP,
                    y: nP,
                    z: nP,
                    rotate: nP,
                    rotateX: nP,
                    rotateY: nP,
                    rotateZ: nP,
                    scaleX: nS,
                    scaleY: nS,
                    scale: nS,
                    opacity: nT,
                    backgroundColor: nT,
                    color: nT,
                    default: nS
                },
                nC = (t, e) => ({
                    to: e,
                    ...(tE(e) ? nV : nE[t] || nE.default)(e)
                }),
                nM = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function nR(t) {
                let [e, n] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [i] = n.match(Y) || [];
                if (!i) return t;
                let r = n.replace(i, ""),
                    o = nM.has(e) ? 1 : 0;
                return i !== n && (o *= 100), e + "(" + o + r + ")"
            }
            let nk = /([a-z-]*)\(.*?\)/g,
                nL = Object.assign(Object.assign({}, e$), {
                    getAnimatableNone: t => {
                        let e = t.match(nk);
                        return e ? e.map(nR).join(" ") : t
                    }
                }),
                nO = { ...to,
                    color: eO,
                    backgroundColor: eO,
                    outlineColor: eO,
                    fill: eO,
                    stroke: eO,
                    borderColor: eO,
                    borderTopColor: eO,
                    borderRightColor: eO,
                    borderBottomColor: eO,
                    borderLeftColor: eO,
                    filter: nL,
                    WebkitFilter: nL
                },
                nj = t => nO[t];

            function nD(t, e) {
                var n;
                let i = nj(t);
                return i !== nL && (i = e$), null === (n = i.getAnimatableNone) || void 0 === n ? void 0 : n.call(i, e)
            }
            let nF = {
                    current: !1
                },
                nB = !1;

            function nU(t) {
                return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
            }

            function nI(t) {
                return "number" == typeof t ? 0 : nD("", t)
            }

            function n$(t, e) {
                return t[e] || t.default || t
            }

            function nN(t, e, n, i = {}) {
                return nF.current && (i = {
                    type: !1
                }), e.start(r => {
                    let o, a;
                    let s = function(t, e, n, i, r) {
                            let o = n$(i, t) || {},
                                a = void 0 !== o.from ? o.from : e.get(),
                                s = nA(t, n);
                            "none" === a && s && "string" == typeof n ? a = nD(t, n) : nU(a) && "string" == typeof n ? a = nI(n) : !Array.isArray(n) && nU(n) && "string" == typeof a && (n = nI(a));
                            let l = nA(t, a);
                            return (0, eu.K)(l === s, `You are trying to animate ${t} from "${a}" to "${n}". ${a} is not an animatable value - to enable this animation set ${a} to a value animatable to ${n} via the \`style\` property.`), l && s && !1 !== o.type ? function() {
                                var i, s;
                                let l = {
                                    from: a,
                                    to: n,
                                    velocity: e.getVelocity(),
                                    onComplete: r,
                                    onUpdate: t => e.set(t)
                                };
                                return "inertia" === o.type || "decay" === o.type ? function({
                                    from: t = 0,
                                    velocity: e = 0,
                                    min: n,
                                    max: i,
                                    power: r = .8,
                                    timeConstant: o = 750,
                                    bounceStiffness: a = 500,
                                    bounceDamping: s = 10,
                                    restDelta: l = 1,
                                    modifyTarget: u,
                                    driver: h,
                                    onUpdate: c,
                                    onComplete: d,
                                    onStop: p
                                }) {
                                    let f;

                                    function m(t) {
                                        return void 0 !== n && t < n || void 0 !== i && t > i
                                    }

                                    function v(t) {
                                        return void 0 === n ? i : void 0 === i ? n : Math.abs(n - t) < Math.abs(i - t) ? n : i
                                    }

                                    function g(t) {
                                        null == f || f.stop(), f = nd(Object.assign(Object.assign({}, t), {
                                            driver: h,
                                            onUpdate: e => {
                                                var n;
                                                null == c || c(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                                            },
                                            onComplete: d,
                                            onStop: p
                                        }))
                                    }

                                    function y(t) {
                                        g(Object.assign({
                                            type: "spring",
                                            stiffness: a,
                                            damping: s,
                                            restDelta: l
                                        }, t))
                                    }
                                    if (m(t)) y({
                                        from: t,
                                        velocity: e,
                                        to: v(t)
                                    });
                                    else {
                                        let x, b, w = r * e + t;
                                        void 0 !== u && (w = u(w));
                                        let A = v(w),
                                            P = A === n ? -1 : 1,
                                            S = t => {
                                                var n;
                                                x = b, b = t, e = (n = (0, nu.$B)().delta) ? (t - x) * (1e3 / n) : 0, (1 === P && t > A || -1 === P && t < A) && y({
                                                    from: t,
                                                    to: A,
                                                    velocity: e
                                                })
                                            };
                                        g({
                                            type: "decay",
                                            from: t,
                                            velocity: e,
                                            timeConstant: o,
                                            power: r,
                                            restDelta: l,
                                            modifyTarget: u,
                                            onUpdate: m(w) ? S : void 0
                                        })
                                    }
                                    return {
                                        stop: () => null == f ? void 0 : f.stop()
                                    }
                                }({ ...l,
                                    ...o
                                }) : nd({ ...(i = o, Array.isArray(l.to) && void 0 === i.duration && (i.duration = .8), Array.isArray((s = l).to) && null === s.to[0] && (s.to = [...s.to], s.to[0] = s.from), ! function({
                                        when: t,
                                        delay: e,
                                        delayChildren: n,
                                        staggerChildren: i,
                                        staggerDirection: r,
                                        repeat: o,
                                        repeatType: a,
                                        repeatDelay: s,
                                        from: l,
                                        ...u
                                    }) {
                                        return !!Object.keys(u).length
                                    }(i) && (i = { ...i,
                                        ...nC(t, l.to)
                                    }), { ...l,
                                        ... function({
                                            ease: t,
                                            times: e,
                                            yoyo: n,
                                            flip: i,
                                            loop: r,
                                            ...o
                                        }) {
                                            let a = { ...o
                                            };
                                            return e && (a.offset = e), o.duration && (a.duration = np(o.duration)), o.repeatDelay && (a.repeatDelay = np(o.repeatDelay)), t && (a.ease = nw(t) ? t.map(nb) : nb(t)), "tween" === o.type && (a.type = "keyframes"), (n || r || i) && ((0, eu.K)(!nB, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), nB = !0, n ? a.repeatType = "reverse" : r ? a.repeatType = "loop" : i && (a.repeatType = "mirror"), a.repeat = r || n || i || o.repeat), "spring" !== o.type && (a.type = "keyframes"), a
                                        }(i)
                                    }),
                                    onUpdate: t => {
                                        l.onUpdate(t), o.onUpdate && o.onUpdate(t)
                                    },
                                    onComplete: () => {
                                        l.onComplete(), o.onComplete && o.onComplete()
                                    }
                                })
                            } : function() {
                                let t = tM(n);
                                return e.set(t), r(), o.onUpdate && o.onUpdate(t), o.onComplete && o.onComplete(), {
                                    stop: () => {}
                                }
                            }
                        }(t, e, n, i, r),
                        l = function(t, e) {
                            var n, i;
                            let r = n$(t, e) || {};
                            return null !== (i = null !== (n = r.delay) && void 0 !== n ? n : t.delay) && void 0 !== i ? i : 0
                        }(i, t),
                        u = () => a = s();
                    return l ? o = window.setTimeout(u, np(l)) : u(), () => {
                        clearTimeout(o), a && a.stop()
                    }
                })
            }
            let nz = t => /^\-?\d*\.?\d+$/.test(t),
                nW = t => /^0[^.\s]+$/.test(t);

            function nY(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function nH(t, e) {
                let n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            }
            class nX {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return nY(this.subscriptions, t), () => nH(this.subscriptions, t)
                }
                notify(t, e, n) {
                    let i = this.subscriptions.length;
                    if (i) {
                        if (1 === i) this.subscriptions[0](t, e, n);
                        else
                            for (let r = 0; r < i; r++) {
                                let o = this.subscriptions[r];
                                o && o(t, e, n)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
            let nZ = t => !isNaN(parseFloat(t));
            class nq {
                constructor(t) {
                    this.version = "7.3.6", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new nX, this.velocityUpdateSubscribers = new nX, this.renderSubscribers = new nX, this.canTrackVelocity = !1, this.updateAndNotify = (t, e = !0) => {
                        this.prev = this.current, this.current = t;
                        let {
                            delta: n,
                            timestamp: i
                        } = (0, nu.$B)();
                        this.lastUpdated !== i && (this.timeDelta = n, this.lastUpdated = i, nu.ZP.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.updateSubscribers.notify(this.current), this.velocityUpdateSubscribers.getSize() && this.velocityUpdateSubscribers.notify(this.getVelocity()), e && this.renderSubscribers.notify(this.current)
                    }, this.scheduleVelocityCheck = () => nu.ZP.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: t
                    }) => {
                        t !== this.lastUpdated && (this.prev = this.current, this.velocityUpdateSubscribers.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = nZ(this.current)
                }
                onChange(t) {
                    return this.updateSubscribers.add(t)
                }
                clearListeners() {
                    this.updateSubscribers.clear()
                }
                onRenderRequest(t) {
                    return t(this.get()), this.renderSubscribers.add(t)
                }
                attach(t) {
                    this.passiveEffect = t
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                get() {
                    return this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    var t, e;
                    return this.canTrackVelocity ? (t = parseFloat(this.current) - parseFloat(this.prev), (e = this.timeDelta) ? t * (1e3 / e) : 0) : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.stopAnimation = t(e)
                    }).then(() => this.clearAnimation())
                }
                stop() {
                    this.stopAnimation && this.stopAnimation(), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.stopAnimation
                }
                clearAnimation() {
                    this.stopAnimation = null
                }
                destroy() {
                    this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
                }
            }

            function nG(t) {
                return new nq(t)
            }
            let nK = t => e => e.test(t),
                n_ = [te, _, K, G, Q, J, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                nJ = t => n_.find(nK(t)),
                nQ = [...n_, eO, e$],
                n0 = t => nQ.find(nK(t));

            function n1(t, e, n) {
                let i = t.getProps();
                return tV(i, e, void 0 !== n ? n : i.custom, function(t) {
                    let e = {};
                    return t.forEachValue((t, n) => e[n] = t.get()), e
                }(t), function(t) {
                    let e = {};
                    return t.forEachValue((t, n) => e[n] = t.getVelocity()), e
                }(t))
            }

            function n5(t) {
                return Boolean(B(t) && t.add)
            }

            function n2(t, e, n = {}) {
                var i;
                let r = n1(t, e, n.custom),
                    {
                        transition: o = t.getDefaultTransition() || {}
                    } = r || {};
                n.transitionOverride && (o = n.transitionOverride);
                let a = r ? () => n3(t, r, n) : () => Promise.resolve(),
                    s = (null === (i = t.variantChildren) || void 0 === i ? void 0 : i.size) ? (i = 0) => {
                        let {
                            delayChildren: r = 0,
                            staggerChildren: a,
                            staggerDirection: s
                        } = o;
                        return function(t, e, n = 0, i = 0, r = 1, o) {
                            let a = [],
                                s = (t.variantChildren.size - 1) * i,
                                l = 1 === r ? (t = 0) => t * i : (t = 0) => s - t * i;
                            return Array.from(t.variantChildren).sort(n4).forEach((t, i) => {
                                a.push(n2(t, e, { ...o,
                                    delay: n + l(i)
                                }).then(() => t.notifyAnimationComplete(e)))
                            }), Promise.all(a)
                        }(t, e, r + i, a, s, n)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = o;
                if (!l) return Promise.all([a(), s(n.delay)]); {
                    let [u, h] = "beforeChildren" === l ? [a, s] : [s, a];
                    return u().then(h)
                }
            }

            function n3(t, e, {
                delay: n = 0,
                transitionOverride: i,
                type: r
            } = {}) {
                var o;
                let {
                    transition: a = t.getDefaultTransition(),
                    transitionEnd: s,
                    ...l
                } = t.makeTargetAnimatable(e), u = t.getValue("willChange");
                i && (a = i);
                let h = [],
                    c = r && (null === (o = t.animationState) || void 0 === o ? void 0 : o.getState()[r]);
                for (let d in l) {
                    let p = t.getValue(d),
                        f = l[d];
                    if (!p || void 0 === f || c && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, n) {
                            let i = t.hasOwnProperty(n) && !0 !== e[n];
                            return e[n] = !1, i
                        }(c, d)) continue;
                    let m = {
                        delay: n,
                        ...a
                    };
                    t.shouldReduceMotion && D.has(d) && (m = { ...m,
                        type: !1,
                        delay: 0
                    });
                    let v = nN(d, p, f, m);
                    n5(u) && (u.add(d), v = v.then(() => u.remove(d))), h.push(v)
                }
                return Promise.all(h).then(() => {
                    s && function(t, e) {
                        let n = n1(t, e),
                            {
                                transitionEnd: i = {},
                                transition: r = {},
                                ...o
                            } = n ? t.makeTargetAnimatable(n, !1) : {};
                        for (let a in o = { ...o,
                                ...i
                            }) {
                            var s;
                            let l = tM(o[a]);
                            s = a, t.hasValue(s) ? t.getValue(s).set(l) : t.addValue(s, nG(l))
                        }
                    }(t, s)
                })
            }

            function n4(t, e) {
                return t.sortNodePosition(e)
            }
            let n6 = [a.Animate, a.InView, a.Focus, a.Hover, a.Tap, a.Drag, a.Exit],
                n9 = [...n6].reverse(),
                n7 = n6.length;

            function n8(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let it = {
                    animation: er(({
                        visualElement: t,
                        animate: e
                    }) => {
                        t.animationState || (t.animationState = function(t) {
                            let e = e => Promise.all(e.map(({
                                    animation: e,
                                    options: n
                                }) => (function(t, e, n = {}) {
                                    let i;
                                    if (t.notifyAnimationStart(e), Array.isArray(e)) {
                                        let r = e.map(e => n2(t, e, n));
                                        i = Promise.all(r)
                                    } else if ("string" == typeof e) i = n2(t, e, n);
                                    else {
                                        let o = "function" == typeof e ? n1(t, e, n.custom) : e;
                                        i = n3(t, o, n)
                                    }
                                    return i.then(() => t.notifyAnimationComplete(e))
                                })(t, e, n))),
                                n = {
                                    [a.Animate]: n8(!0),
                                    [a.InView]: n8(),
                                    [a.Hover]: n8(),
                                    [a.Tap]: n8(),
                                    [a.Drag]: n8(),
                                    [a.Focus]: n8(),
                                    [a.Exit]: n8()
                                },
                                i = !0,
                                r = (e, n) => {
                                    let i = n1(t, n);
                                    if (i) {
                                        let {
                                            transition: r,
                                            transitionEnd: o,
                                            ...a
                                        } = i;
                                        e = { ...e,
                                            ...a,
                                            ...o
                                        }
                                    }
                                    return e
                                };

                            function o(o, a) {
                                var s, l;
                                let u = t.getProps(),
                                    h = t.getVariantContext(!0) || {},
                                    c = [],
                                    d = new Set,
                                    p = {},
                                    f = 1 / 0;
                                for (let g = 0; g < n7; g++) {
                                    let y = n9[g],
                                        x = n[y],
                                        b = null !== (s = u[y]) && void 0 !== s ? s : h[y],
                                        w = m(b),
                                        A = y === a ? x.isActive : null;
                                    !1 === A && (f = g);
                                    let P = b === h[y] && b !== u[y] && w;
                                    if (P && i && t.manuallyAnimateOnMount && (P = !1), x.protectedKeys = { ...p
                                        }, !x.isActive && null === A || !b && !x.prevProp || v(b) || "boolean" == typeof b) continue;
                                    let S = (l = x.prevProp, "string" == typeof b ? b !== l : !!Array.isArray(b) && !es(b, l)),
                                        T = S || y === a && x.isActive && !P && w || g > f && w,
                                        V = Array.isArray(b) ? b : [b],
                                        E = V.reduce(r, {});
                                    !1 === A && (E = {});
                                    let {
                                        prevResolvedValues: C = {}
                                    } = x, M = { ...C,
                                        ...E
                                    }, R = t => {
                                        T = !0, d.delete(t), x.needsAnimating[t] = !0
                                    };
                                    for (let k in M) {
                                        let L = E[k],
                                            O = C[k];
                                        p.hasOwnProperty(k) || (L !== O ? tE(L) && tE(O) ? !es(L, O) || S ? R(k) : x.protectedKeys[k] = !0 : void 0 !== L ? R(k) : d.add(k) : void 0 !== L && d.has(k) ? R(k) : x.protectedKeys[k] = !0)
                                    }
                                    x.prevProp = b, x.prevResolvedValues = E, x.isActive && (p = { ...p,
                                        ...E
                                    }), i && t.blockInitialAnimation && (T = !1), T && !P && c.push(...V.map(t => ({
                                        animation: t,
                                        options: {
                                            type: y,
                                            ...o
                                        }
                                    })))
                                }
                                if (d.size) {
                                    let j = {};
                                    d.forEach(e => {
                                        let n = t.getBaseTarget(e);
                                        void 0 !== n && (j[e] = n)
                                    }), c.push({
                                        animation: j
                                    })
                                }
                                let D = Boolean(c.length);
                                return i && !1 === u.initial && !t.manuallyAnimateOnMount && (D = !1), i = !1, D ? e(c) : Promise.resolve()
                            }
                            return {
                                animateChanges: o,
                                setActive: function(e, i, r) {
                                    var a;
                                    if (n[e].isActive === i) return Promise.resolve();
                                    null === (a = t.variantChildren) || void 0 === a || a.forEach(t => {
                                        var n;
                                        return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, i)
                                    }), n[e].isActive = i;
                                    let s = o(r, e);
                                    for (let l in n) n[l].protectedKeys = {};
                                    return s
                                },
                                setAnimateFunction: function(n) {
                                    e = n(t)
                                },
                                getState: () => n
                            }
                        }(t)), v(e) && (0, l.useEffect)(() => e.subscribe(t), [e])
                    }),
                    exit: er(t => {
                        let {
                            custom: e,
                            visualElement: n
                        } = t, [i, r] = ea(), o = (0, l.useContext)(c.O);
                        (0, l.useEffect)(() => {
                            n.isPresent = i;
                            let t = n.animationState && n.animationState.setActive(a.Exit, !i, {
                                custom: o && o.custom || e
                            });
                            t && !i && t.then(r)
                        }, [i])
                    })
                },
                ie = t => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
                ii = t => ie(t) && t.hasOwnProperty("z"),
                ir = (t, e) => Math.abs(t - e);

            function io(t, e) {
                if (eN(t) && eN(e)) return ir(t, e);
                if (ie(t) && ie(e)) {
                    let n = ir(t.x, e.x),
                        i = ir(t.y, e.y),
                        r = ii(t) && ii(e) ? ir(t.z, e.z) : 0;
                    return Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2) + Math.pow(r, 2))
                }
            }
            class ia {
                constructor(t, e, {
                    transformPagePoint: n
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = iu(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                n = io(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !n) return;
                            let {
                                point: i
                            } = t, {
                                timestamp: r
                            } = (0, nu.$B)();
                            this.history.push({ ...i,
                                timestamp: r
                            });
                            let {
                                onStart: o,
                                onMove: a
                            } = this.handlers;
                            e || (o && o(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            if (this.lastMoveEvent = t, this.lastMoveEventInfo = is(e, this.transformPagePoint), tF(t) && 0 === t.buttons) {
                                this.handlePointerUp(t, e);
                                return
                            }
                            nu.ZP.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: n,
                                onSessionEnd: i
                            } = this.handlers, r = iu(is(e, this.transformPagePoint), this.history);
                            this.startEvent && n && n(t, r), i && i(t, r)
                        }, tB(t) && t.touches.length > 1) return;
                    this.handlers = e, this.transformPagePoint = n;
                    let i = tI(t),
                        r = is(i, this.transformPagePoint),
                        {
                            point: o
                        } = r,
                        {
                            timestamp: a
                        } = (0, nu.$B)();
                    this.history = [{ ...o,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: s
                    } = e;
                    s && s(t, iu(r, this.history)), this.removeListeners = t3(tZ(window, "pointermove", this.handlePointerMove), tZ(window, "pointerup", this.handlePointerUp), tZ(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), nu.qY.update(this.updatePoint)
                }
            }

            function is(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function il(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function iu({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: il(t, ih(e)),
                    offset: il(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let n = t.length - 1,
                            i = null,
                            r = ih(t);
                        for (; n >= 0 && (i = t[n], !(r.timestamp - i.timestamp > np(.1)));) n--;
                        if (!i) return {
                            x: 0,
                            y: 0
                        };
                        let o = (r.timestamp - i.timestamp) / 1e3;
                        if (0 === o) return {
                            x: 0,
                            y: 0
                        };
                        let a = {
                            x: (r.x - i.x) / o,
                            y: (r.y - i.y) / o
                        };
                        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
                    }(e, 0)
                }
            }

            function ih(t) {
                return t[t.length - 1]
            }

            function ic(t) {
                return t.max - t.min
            }

            function id(t, e = 0, n = .01) {
                return io(t, e) < n
            }

            function ip(t, e, n, i = .5) {
                t.origin = i, t.originPoint = ey(e.min, e.max, t.origin), t.scale = ic(n) / ic(e), (id(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = ey(n.min, n.max, t.origin) - t.originPoint, (id(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function im(t, e, n, i) {
                ip(t.x, e.x, n.x, null == i ? void 0 : i.originX), ip(t.y, e.y, n.y, null == i ? void 0 : i.originY)
            }

            function iv(t, e, n) {
                t.min = n.min + e.min, t.max = t.min + ic(e)
            }

            function ig(t, e, n) {
                t.min = e.min - n.min, t.max = t.min + ic(e)
            }

            function iy(t, e, n) {
                ig(t.x, e.x, n.x), ig(t.y, e.y, n.y)
            }

            function ix(t, e, n) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
                }
            }

            function ib(t, e) {
                let n = e.min - t.min,
                    i = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), {
                    min: n,
                    max: i
                }
            }

            function iw(t, e, n) {
                return {
                    min: iA(t, e),
                    max: iA(t, n)
                }
            }

            function iA(t, e) {
                var n;
                return "number" == typeof t ? t : null !== (n = t[e]) && void 0 !== n ? n : 0
            }
            let iP = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                iS = () => ({
                    x: iP(),
                    y: iP()
                }),
                iT = () => ({
                    min: 0,
                    max: 0
                }),
                iV = () => ({
                    x: iT(),
                    y: iT()
                });

            function iE(t) {
                return [t("x"), t("y")]
            }

            function iC({
                top: t,
                left: e,
                right: n,
                bottom: i
            }) {
                return {
                    x: {
                        min: e,
                        max: n
                    },
                    y: {
                        min: t,
                        max: i
                    }
                }
            }

            function iM(t) {
                return void 0 === t || 1 === t
            }

            function iR({
                scale: t,
                scaleX: e,
                scaleY: n
            }) {
                return !iM(t) || !iM(e) || !iM(n)
            }

            function ik(t) {
                var e, n;
                return iR(t) || (e = t.x) && "0%" !== e || (n = t.y) && "0%" !== n || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function iL(t, e, n, i, r) {
                return void 0 !== r && (t = i + r * (t - i)), i + n * (t - i) + e
            }

            function iO(t, e = 0, n = 1, i, r) {
                t.min = iL(t.min, e, n, i, r), t.max = iL(t.max, e, n, i, r)
            }

            function ij(t, {
                x: e,
                y: n
            }) {
                iO(t.x, e.translate, e.scale, e.originPoint), iO(t.y, n.translate, n.scale, n.originPoint)
            }

            function iD(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function iF(t, e, [n, i, r]) {
                let o = void 0 !== e[r] ? e[r] : .5,
                    a = ey(t.min, t.max, o);
                iO(t, e[n], e[i], a, e.scale)
            }
            let iB = ["x", "scaleX", "originX"],
                iU = ["y", "scaleY", "originY"];

            function iI(t, e) {
                iF(t.x, e, iB), iF(t.y, e, iU)
            }

            function i$(t, e) {
                return iC(function(t, e) {
                    if (!e) return t;
                    let n = e({
                            x: t.left,
                            y: t.top
                        }),
                        i = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: n.y,
                        left: n.x,
                        bottom: i.y,
                        right: i.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let iN = new WeakMap;
            class iz {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = iV(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    if (!1 === this.visualElement.isPresent) return;
                    let n = t => {
                            this.stopAnimation(), e && this.snapToCursor(tI(t, "page").point)
                        },
                        i = (t, e) => {
                            var n;
                            let {
                                drag: i,
                                dragPropagation: r,
                                onDragStart: o
                            } = this.getProps();
                            (!i || r || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = tJ(i), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), iE(t => {
                                var e, n;
                                let i = this.getAxisMotionValue(t).get() || 0;
                                if (K.test(i)) {
                                    let r = null === (n = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.actual[t];
                                    if (r) {
                                        let o = ic(r);
                                        i = o * (parseFloat(i) / 100)
                                    }
                                }
                                this.originPoint[t] = i
                            }), null == o || o(t, e), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(a.Drag, !0))
                        },
                        r = (t, e) => {
                            let {
                                dragPropagation: n,
                                dragDirectionLock: i,
                                onDirectionLock: r,
                                onDrag: o
                            } = this.getProps();
                            if (!n && !this.openGlobalLock) return;
                            let {
                                offset: a
                            } = e;
                            if (i && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let n = null;
                                    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
                                }(a), null !== this.currentDirection && (null == r || r(this.currentDirection));
                                return
                            }
                            this.updateAxis("x", e.point, a), this.updateAxis("y", e.point, a), this.visualElement.syncRender(), null == o || o(t, e)
                        },
                        o = (t, e) => this.stop(t, e);
                    this.panSession = new ia(t, {
                        onSessionStart: n,
                        onStart: i,
                        onMove: r,
                        onSessionEnd: o
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    })
                }
                stop(t, e) {
                    let n = this.isDragging;
                    if (this.cancel(), !n) return;
                    let {
                        velocity: i
                    } = e;
                    this.startAnimation(i);
                    let {
                        onDragEnd: r
                    } = this.getProps();
                    null == r || r(t, e)
                }
                cancel() {
                    var t, e;
                    this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0;
                    let {
                        dragPropagation: n
                    } = this.getProps();
                    !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(a.Drag, !1)
                }
                updateAxis(t, e, n) {
                    let {
                        drag: i
                    } = this.getProps();
                    if (!n || !iW(t, i, this.currentDirection)) return;
                    let r = this.getAxisMotionValue(t),
                        o = this.originPoint[t] + n[t];
                    this.constraints && this.constraints[t] && (o = function(t, {
                        min: e,
                        max: n
                    }, i) {
                        return void 0 !== e && t < e ? t = i ? ey(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? ey(n, t, i.max) : Math.min(t, n)), t
                    }(o, this.constraints[t], this.elastic[t])), r.set(o)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), {
                        layout: n
                    } = this.visualElement.projection || {}, i = this.constraints;
                    t && f(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = function(t, {
                        top: e,
                        left: n,
                        bottom: i,
                        right: r
                    }) {
                        return {
                            x: ix(t.x, n, r),
                            y: ix(t.y, e, i)
                        }
                    }(n.actual, t) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: iw(t, "left", "right"),
                            y: iw(t, "top", "bottom")
                        }
                    }(e), i !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && iE(t => {
                        this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let n = {};
                            return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
                        }(n.actual[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: n
                    } = this.getProps();
                    if (!e || !f(e)) return !1;
                    let i = e.current;
                    (0, eu.k)(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: r
                    } = this.visualElement;
                    if (!r || !r.layout) return !1;
                    let o = function(t, e, n) {
                            let i = i$(t, n),
                                {
                                    scroll: r
                                } = e;
                            return r && (iD(i.x, r.x), iD(i.y, r.y)), i
                        }(i, r.root, this.visualElement.getTransformPagePoint()),
                        a = {
                            x: ib((t = r.layout.actual).x, o.x),
                            y: ib(t.y, o.y)
                        };
                    if (n) {
                        let s = n(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(a));
                        this.hasMutatedConstraints = !!s, s && (a = iC(s))
                    }
                    return a
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: n,
                        dragElastic: i,
                        dragTransition: r,
                        dragSnapToOrigin: o,
                        onDragTransitionEnd: a
                    } = this.getProps(), s = this.constraints || {}, l = iE(a => {
                        var l;
                        if (!iW(a, e, this.currentDirection)) return;
                        let u = null !== (l = null == s ? void 0 : s[a]) && void 0 !== l ? l : {};
                        o && (u = {
                            min: 0,
                            max: 0
                        });
                        let h = {
                            type: "inertia",
                            velocity: n ? t[a] : 0,
                            bounceStiffness: i ? 200 : 1e6,
                            bounceDamping: i ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...r,
                            ...u
                        };
                        return this.startAxisValueAnimation(a, h)
                    });
                    return Promise.all(l).then(a)
                }
                startAxisValueAnimation(t, e) {
                    let n = this.getAxisMotionValue(t);
                    return nN(t, n, 0, e)
                }
                stopAnimation() {
                    iE(t => this.getAxisMotionValue(t).stop())
                }
                getAxisMotionValue(t) {
                    var e, n;
                    let i = "_drag" + t.toUpperCase(),
                        r = this.visualElement.getProps()[i];
                    return r || this.visualElement.getValue(t, null !== (n = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== n ? n : 0)
                }
                snapToCursor(t) {
                    iE(e => {
                        let {
                            drag: n
                        } = this.getProps();
                        if (!iW(e, n, this.currentDirection)) return;
                        let {
                            projection: i
                        } = this.visualElement, r = this.getAxisMotionValue(e);
                        if (i && i.layout) {
                            let {
                                min: o,
                                max: a
                            } = i.layout.actual[e];
                            r.set(t[e] - ey(o, a, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    var t;
                    let {
                        drag: e,
                        dragConstraints: n
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!f(n) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let r = {
                        x: 0,
                        y: 0
                    };
                    iE(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e) {
                            let n = e.get();
                            r[t] = function(t, e) {
                                let n = .5,
                                    i = ic(t),
                                    r = ic(e);
                                return r > i ? n = eg(e.min, e.max - i, t.min) : i > r && (n = eg(t.min, t.max - r, e.min)), eh(0, 1, n)
                            }({
                                min: n,
                                max: n
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: o
                    } = this.visualElement.getProps();
                    this.visualElement.getInstance().style.transform = o ? o({}, "") : "none", null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout(), this.resolveConstraints(), iE(t => {
                        if (!iW(t, e, null)) return;
                        let n = this.getAxisMotionValue(t),
                            {
                                min: i,
                                max: o
                            } = this.constraints[t];
                        n.set(ey(i, o, r[t]))
                    })
                }
                addListeners() {
                    var t;
                    iN.set(this.visualElement, this);
                    let e = this.visualElement.getInstance(),
                        n = tZ(e, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: n = !0
                            } = this.getProps();
                            e && n && this.start(t)
                        }),
                        i = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            f(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: r
                        } = this.visualElement,
                        o = r.addEventListener("measure", i);
                    r && !r.layout && (null === (t = r.root) || void 0 === t || t.updateScroll(), r.updateLayout()), i();
                    let a = tj(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = r.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (iE(e => {
                                let n = this.getAxisMotionValue(e);
                                n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
                            }), this.visualElement.syncRender())
                        });
                    return () => {
                        a(), n(), o(), null == s || s()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: n = !1,
                            dragPropagation: i = !1,
                            dragConstraints: r = !1,
                            dragElastic: o = .35,
                            dragMomentum: a = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: n,
                        dragPropagation: i,
                        dragConstraints: r,
                        dragElastic: o,
                        dragMomentum: a
                    }
                }
            }

            function iW(t, e, n) {
                return (!0 === e || e === t) && (null === n || n === t)
            }
            let iY = {
                    pan: er(function({
                        onPan: t,
                        onPanStart: e,
                        onPanEnd: n,
                        onPanSessionStart: i,
                        visualElement: r
                    }) {
                        let o = (0, l.useRef)(null),
                            {
                                transformPagePoint: a
                            } = (0, l.useContext)(u),
                            s = {
                                onSessionStart: i,
                                onStart: e,
                                onMove: t,
                                onEnd: (t, e) => {
                                    o.current = null, n && n(t, e)
                                }
                            };
                        (0, l.useEffect)(() => {
                            null !== o.current && o.current.updateHandlers(s)
                        }), tq(r, "pointerdown", (t || e || n || i) && function(t) {
                            o.current = new ia(t, s, {
                                transformPagePoint: a
                            })
                        }), (0, t5.z)(() => o.current && o.current.end())
                    }),
                    drag: er(function(t) {
                        let {
                            dragControls: e,
                            visualElement: n
                        } = t, i = (0, S.h)(() => new iz(n));
                        (0, l.useEffect)(() => e && e.subscribe(i), [i, e]), (0, l.useEffect)(() => i.addListeners(), [i])
                    })
                },
                iH = {
                    current: null
                },
                iX = {
                    current: !1
                },
                iZ = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount"],
                iq = Object.keys(A),
                iG = iq.length,
                iK = ({
                    treeType: t = "",
                    build: e,
                    getBaseTarget: n,
                    makeTargetAnimatable: i,
                    measureViewportBox: r,
                    render: o,
                    readValueFromInstance: a,
                    removeValueFromRenderState: s,
                    sortNodePosition: u,
                    scrapeMotionValuesFromProps: h
                }) => ({
                    parent: c,
                    props: d,
                    presenceId: p,
                    blockInitialAnimation: v,
                    visualState: g,
                    reducedMotionConfig: b
                }, w = {}) => {
                    let S, T, V = !1,
                        {
                            latestValues: E,
                            renderState: C
                        } = g,
                        M = function() {
                            let t = iZ.map(() => new nX),
                                e = {},
                                n = {
                                    clearAllListeners: () => t.forEach(t => t.clear()),
                                    updatePropListeners: t => {
                                        iZ.forEach(i => {
                                            var r;
                                            let o = "on" + i,
                                                a = t[o];
                                            null === (r = e[i]) || void 0 === r || r.call(e), a && (e[i] = n[o](a))
                                        })
                                    }
                                };
                            return t.forEach((t, e) => {
                                n["on" + iZ[e]] = e => t.add(e), n["notify" + iZ[e]] = (...e) => t.notify(...e)
                            }), n
                        }(),
                        R = new Map,
                        k = new Map,
                        L = {},
                        O = { ...E
                        };

                    function j() {
                        S && V && (D(), o(S, C, d.style, H.projection))
                    }

                    function D() {
                        e(H, C, E, w, d)
                    }

                    function F() {
                        M.notifyUpdate(E)
                    }

                    function U(t, e) {
                        let n = e.onChange(e => {
                                E[t] = e, d.onUpdate && nu.ZP.update(F, !1, !0)
                            }),
                            i = e.onRenderRequest(H.scheduleRender);
                        k.set(t, () => {
                            n(), i()
                        })
                    }
                    let {
                        willChange: I,
                        ...$
                    } = h(d);
                    for (let N in $) {
                        let z = $[N];
                        void 0 !== E[N] && B(z) && (z.set(E[N], !1), n5(I) && I.add(N))
                    }
                    let W = y(d),
                        Y = x(d),
                        H = {
                            treeType: t,
                            current: null,
                            depth: c ? c.depth + 1 : 0,
                            parent: c,
                            children: new Set,
                            presenceId: p,
                            shouldReduceMotion: null,
                            variantChildren: Y ? new Set : void 0,
                            isVisible: void 0,
                            manuallyAnimateOnMount: Boolean(null == c ? void 0 : c.isMounted()),
                            blockInitialAnimation: v,
                            isMounted: () => Boolean(S),
                            mount(t) {
                                V = !0, S = H.current = t, H.projection && H.projection.mount(t), Y && c && !W && (T = null == c ? void 0 : c.addVariantChild(H)), R.forEach((t, e) => U(e, t)), iX.current || function() {
                                    if (iX.current = !0, P.j) {
                                        if (window.matchMedia) {
                                            let t = window.matchMedia("(prefers-reduced-motion)"),
                                                e = () => iH.current = t.matches;
                                            t.addListener(e), e()
                                        } else iH.current = !1
                                    }
                                }(), H.shouldReduceMotion = "never" !== b && ("always" === b || iH.current), null == c || c.children.add(H), H.setProps(d)
                            },
                            unmount() {
                                var t;
                                null === (t = H.projection) || void 0 === t || t.unmount(), nu.qY.update(F), nu.qY.render(j), k.forEach(t => t()), null == T || T(), null == c || c.children.delete(H), M.clearAllListeners(), S = void 0, V = !1
                            },
                            loadFeatures(t, e, n, i, r, o) {
                                let a = [];
                                "production" !== t4.O && n && e && (0, eu.k)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
                                for (let s = 0; s < iG; s++) {
                                    let u = iq[s],
                                        {
                                            isEnabled: h,
                                            Component: d
                                        } = A[u];
                                    h(t) && d && a.push((0, l.createElement)(d, {
                                        key: u,
                                        ...t,
                                        visualElement: H
                                    }))
                                }
                                if (!H.projection && r) {
                                    H.projection = new r(i, H.getLatestValues(), c && c.projection);
                                    let {
                                        layoutId: p,
                                        layout: m,
                                        drag: v,
                                        dragConstraints: g,
                                        layoutScroll: y
                                    } = t;
                                    H.projection.setOptions({
                                        layoutId: p,
                                        layout: m,
                                        alwaysMeasureLayout: Boolean(v) || g && f(g),
                                        visualElement: H,
                                        scheduleRender: () => H.scheduleRender(),
                                        animationType: "string" == typeof m ? m : "both",
                                        initialPromotionConfig: o,
                                        layoutScroll: y
                                    })
                                }
                                return a
                            },
                            addVariantChild(t) {
                                var e;
                                let n = H.getClosestVariantNode();
                                if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t), () => n.variantChildren.delete(t)
                            },
                            sortNodePosition: e => u && t === e.treeType ? u(H.getInstance(), e.getInstance()) : 0,
                            getClosestVariantNode: () => Y ? H : null == c ? void 0 : c.getClosestVariantNode(),
                            getLayoutId: () => d.layoutId,
                            getInstance: () => S,
                            getStaticValue: t => E[t],
                            setStaticValue: (t, e) => E[t] = e,
                            getLatestValues: () => E,
                            setVisibility(t) {
                                H.isVisible !== t && (H.isVisible = t, H.scheduleRender())
                            },
                            makeTargetAnimatable: (t, e = !0) => i(H, t, d, e),
                            measureViewportBox: () => r(S, d),
                            addValue(t, e) {
                                H.hasValue(t) && H.removeValue(t), R.set(t, e), E[t] = e.get(), U(t, e)
                            },
                            removeValue(t) {
                                var e;
                                R.delete(t), null === (e = k.get(t)) || void 0 === e || e(), k.delete(t), delete E[t], s(t, C)
                            },
                            hasValue: t => R.has(t),
                            getValue(t, e) {
                                let n = R.get(t);
                                return void 0 === n && void 0 !== e && (n = nG(e), H.addValue(t, n)), n
                            },
                            forEachValue: t => R.forEach(t),
                            readValue: t => void 0 !== E[t] ? E[t] : a(S, t, w),
                            setBaseTarget(t, e) {
                                O[t] = e
                            },
                            getBaseTarget(t) {
                                if (n) {
                                    let e = n(d, t);
                                    if (void 0 !== e && !B(e)) return e
                                }
                                return O[t]
                            },
                            ...M,
                            build: () => (D(), C),
                            scheduleRender() {
                                nu.ZP.render(j, !1, !0)
                            },
                            syncRender: j,
                            setProps(t) {
                                (t.transformTemplate || d.transformTemplate) && H.scheduleRender(), d = t, M.updatePropListeners(t), L = function(t, e, n) {
                                    let {
                                        willChange: i
                                    } = e;
                                    for (let r in e) {
                                        let o = e[r],
                                            a = n[r];
                                        if (B(o)) t.addValue(r, o), n5(i) && i.add(r);
                                        else if (B(a)) t.addValue(r, nG(o)), n5(i) && i.remove(r);
                                        else if (a !== o) {
                                            if (t.hasValue(r)) {
                                                let s = t.getValue(r);
                                                s.hasAnimated || s.set(o)
                                            } else {
                                                let l = t.getStaticValue(r);
                                                t.addValue(r, nG(void 0 !== l ? l : o))
                                            }
                                        }
                                    }
                                    for (let u in n) void 0 === e[u] && t.removeValue(u);
                                    return e
                                }(H, h(d), L)
                            },
                            getProps: () => d,
                            getVariant: t => {
                                var e;
                                return null === (e = d.variants) || void 0 === e ? void 0 : e[t]
                            },
                            getDefaultTransition: () => d.transition,
                            getTransformPagePoint: () => d.transformPagePoint,
                            getVariantContext(t = !1) {
                                if (t) return null == c ? void 0 : c.getVariantContext();
                                if (!W) {
                                    let e = (null == c ? void 0 : c.getVariantContext()) || {};
                                    return void 0 !== d.initial && (e.initial = d.initial), e
                                }
                                let n = {};
                                for (let i = 0; i < iJ; i++) {
                                    let r = i_[i],
                                        o = d[r];
                                    (m(o) || !1 === o) && (n[r] = o)
                                }
                                return n
                            }
                        };
                    return H
                },
                i_ = ["initial", ...n6],
                iJ = i_.length;

            function iQ(t) {
                return "string" == typeof t && t.startsWith("var(--")
            }
            let i0 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function i1(t, e, n = 1) {
                (0, eu.k)(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                let [i, r] = function(t) {
                    let e = i0.exec(t);
                    if (!e) return [, ];
                    let [, n, i] = e;
                    return [n, i]
                }(t);
                if (!i) return;
                let o = window.getComputedStyle(e).getPropertyValue(i);
                return o ? o.trim() : iQ(r) ? i1(r, e, n + 1) : r
            }
            let i5 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                i2 = t => i5.has(t),
                i3 = t => Object.keys(t).some(i2),
                i4 = (t, e) => {
                    t.set(e, !1), t.set(e)
                },
                i6 = t => t === te || t === _;
            (o = s || (s = {})).width = "width", o.height = "height", o.left = "left", o.right = "right", o.top = "top", o.bottom = "bottom";
            let i9 = (t, e) => parseFloat(t.split(", ")[e]),
                i7 = (t, e) => (n, {
                    transform: i
                }) => {
                    if ("none" === i || !i) return 0;
                    let r = i.match(/^matrix3d\((.+)\)$/);
                    if (r) return i9(r[1], e); {
                        let o = i.match(/^matrix\((.+)\)$/);
                        return o ? i9(o[1], t) : 0
                    }
                },
                i8 = new Set(["x", "y", "z"]),
                rt = j.filter(t => !i8.has(t)),
                re = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: n = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: n = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: i7(4, 13),
                    y: i7(5, 14)
                },
                rn = (t, e, n) => {
                    let i = e.measureViewportBox(),
                        r = e.getInstance(),
                        o = getComputedStyle(r),
                        {
                            display: a
                        } = o,
                        s = {};
                    "none" === a && e.setStaticValue("display", t.display || "block"), n.forEach(t => {
                        s[t] = re[t](i, o)
                    }), e.syncRender();
                    let l = e.measureViewportBox();
                    return n.forEach(n => {
                        let i = e.getValue(n);
                        i4(i, s[n]), t[n] = re[n](l, o)
                    }), t
                },
                ri = (t, e, n = {}, i = {}) => {
                    e = { ...e
                    }, i = { ...i
                    };
                    let r = Object.keys(e).filter(i2),
                        o = [],
                        a = !1,
                        s = [];
                    if (r.forEach(r => {
                            let l;
                            let u = t.getValue(r);
                            if (!t.hasValue(r)) return;
                            let h = n[r],
                                c = nJ(h),
                                d = e[r];
                            if (tE(d)) {
                                let p = d.length,
                                    f = null === d[0] ? 1 : 0;
                                c = nJ(h = d[f]);
                                for (let m = f; m < p; m++) l ? (0, eu.k)(nJ(d[m]) === l, "All keyframes must be of the same type") : (l = nJ(d[m]), (0, eu.k)(l === c || i6(c) && i6(l), "Keyframes must be of the same dimension as the current value"))
                            } else l = nJ(d);
                            if (c !== l) {
                                if (i6(c) && i6(l)) {
                                    let v = u.get();
                                    "string" == typeof v && u.set(parseFloat(v)), "string" == typeof d ? e[r] = parseFloat(d) : Array.isArray(d) && l === _ && (e[r] = d.map(parseFloat))
                                } else(null == c ? void 0 : c.transform) && (null == l ? void 0 : l.transform) && (0 === h || 0 === d) ? 0 === h ? u.set(l.transform(h)) : e[r] = c.transform(d) : (a || (o = function(t) {
                                    let e = [];
                                    return rt.forEach(n => {
                                        let i = t.getValue(n);
                                        void 0 !== i && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0))
                                    }), e.length && t.syncRender(), e
                                }(t), a = !0), s.push(r), i[r] = void 0 !== i[r] ? i[r] : e[r], i4(u, d))
                            }
                        }), !s.length) return {
                        target: e,
                        transitionEnd: i
                    }; {
                        let l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
                            u = rn(e, t, s);
                        return o.length && o.forEach(([e, n]) => {
                            t.getValue(e).set(n)
                        }), t.syncRender(), P.j && null !== l && window.scrollTo({
                            top: l
                        }), {
                            target: u,
                            transitionEnd: i
                        }
                    }
                },
                rr = (t, e, n, i) => {
                    var r, o;
                    let a = function(t, { ...e
                    }, n) {
                        let i = t.getInstance();
                        if (!(i instanceof Element)) return {
                            target: e,
                            transitionEnd: n
                        };
                        for (let r in n && (n = { ...n
                            }), t.forEachValue(t => {
                                let e = t.get();
                                if (!iQ(e)) return;
                                let n = i1(e, i);
                                n && t.set(n)
                            }), e) {
                            let o = e[r];
                            if (!iQ(o)) continue;
                            let a = i1(o, i);
                            a && (e[r] = a, n && void 0 === n[r] && (n[r] = o))
                        }
                        return {
                            target: e,
                            transitionEnd: n
                        }
                    }(t, e, i);
                    return e = a.target, i = a.transitionEnd, r = e, o = i, i3(r) ? ri(t, r, n, o) : {
                        target: r,
                        transitionEnd: o
                    }
                },
                ro = {
                    treeType: "dom",
                    readValueFromInstance(t, e) {
                        if (D.has(e)) {
                            let n = nj(e);
                            return n && n.default || 0
                        } {
                            let i = window.getComputedStyle(t),
                                r = ($(e) ? i.getPropertyValue(e) : i[e]) || 0;
                            return "string" == typeof r ? r.trim() : r
                        }
                    },
                    sortNodePosition: (t, e) => 2 & t.compareDocumentPosition(e) ? 1 : -1,
                    getBaseTarget(t, e) {
                        var n;
                        return null === (n = t.style) || void 0 === n ? void 0 : n[e]
                    },
                    measureViewportBox: (t, {
                        transformPagePoint: e
                    }) => i$(t, e),
                    resetTransform(t, e, n) {
                        let {
                            transformTemplate: i
                        } = n;
                        e.style.transform = i ? i({}, "") : "none", t.scheduleRender()
                    },
                    restoreTransform(t, e) {
                        t.style.transform = e.style.transform
                    },
                    removeValueFromRenderState(t, {
                        vars: e,
                        style: n
                    }) {
                        delete e[t], delete n[t]
                    },
                    makeTargetAnimatable(t, {
                        transition: e,
                        transitionEnd: n,
                        ...i
                    }, {
                        transformValues: r
                    }, o = !0) {
                        let a = function(t, e, n) {
                            var i;
                            let r = {};
                            for (let o in t) {
                                let a = function(t, e) {
                                    if (!e) return;
                                    let n = e[t] || e.default || e;
                                    return n.from
                                }(o, e);
                                r[o] = void 0 !== a ? a : null === (i = n.getValue(o)) || void 0 === i ? void 0 : i.get()
                            }
                            return r
                        }(i, e || {}, t);
                        if (r && (n && (n = r(n)), i && (i = r(i)), a && (a = r(a))), o) {
                            ! function(t, e, n) {
                                var i, r;
                                let o = Object.keys(e).filter(e => !t.hasValue(e)),
                                    a = o.length;
                                if (a)
                                    for (let s = 0; s < a; s++) {
                                        let l = o[s],
                                            u = e[l],
                                            h = null;
                                        Array.isArray(u) && (h = u[0]), null === h && (h = null !== (r = null !== (i = n[l]) && void 0 !== i ? i : t.readValue(l)) && void 0 !== r ? r : e[l]), null != h && ("string" == typeof h && (nz(h) || nW(h)) ? h = parseFloat(h) : !n0(h) && e$.test(u) && (h = nD(l, u)), t.addValue(l, nG(h)), void 0 === n[l] && (n[l] = h), t.setBaseTarget(l, h))
                                    }
                            }(t, i, a);
                            let s = rr(t, i, a, n);
                            n = s.transitionEnd, i = s.target
                        }
                        return {
                            transition: e,
                            transitionEnd: n,
                            ...i
                        }
                    },
                    scrapeMotionValuesFromProps: tS,
                    build(t, e, n, i, r) {
                        void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? "visible" : "hidden"), ta(e, n, i, r.transformTemplate)
                    },
                    render: tw
                },
                ra = iK(ro),
                rs = iK({ ...ro,
                    getBaseTarget: (t, e) => t[e],
                    readValueFromInstance(t, e) {
                        var n;
                        return D.has(e) ? (null === (n = nj(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = tA.has(e) ? e : tb(e), t.getAttribute(e))
                    },
                    scrapeMotionValuesFromProps: tT,
                    build(t, e, n, i, r) {
                        tg(e, n, i, r.transformTemplate)
                    },
                    render: tP
                }),
                rl = (t, e) => L(t) ? rs(e, {
                    enableHardwareAcceleration: !1
                }) : ra(e, {
                    enableHardwareAcceleration: !0
                });

            function ru(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let rh = {
                    correct: (t, e) => {
                        if (!e.target) return t;
                        if ("string" == typeof t) {
                            if (!_.test(t)) return t;
                            t = parseFloat(t)
                        }
                        let n = ru(t, e.target.x),
                            i = ru(t, e.target.y);
                        return `${n}% ${i}%`
                    }
                },
                rc = "_$css",
                rd = {
                    correct: (t, {
                        treeScale: e,
                        projectionDelta: n
                    }) => {
                        let i = t,
                            r = t.includes("var("),
                            o = [];
                        r && (t = t.replace(i0, t => (o.push(t), rc)));
                        let a = e$.parse(t);
                        if (a.length > 5) return i;
                        let s = e$.createTransformer(t),
                            l = "number" != typeof a[0] ? 1 : 0,
                            u = n.x.scale * e.x,
                            h = n.y.scale * e.y;
                        a[0 + l] /= u, a[1 + l] /= h;
                        let c = ey(u, h, .5);
                        "number" == typeof a[2 + l] && (a[2 + l] /= c), "number" == typeof a[3 + l] && (a[3 + l] /= c);
                        let d = s(a);
                        if (r) {
                            let p = 0;
                            d = d.replace(rc, () => {
                                let t = o[p];
                                return p++, t
                            })
                        }
                        return d
                    }
                };
            class rp extends l.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: n,
                        layoutId: i
                    } = this.props, {
                        projection: r
                    } = t;
                    Object.assign(O, rf), r && (e.group && e.group.add(r), n && n.register && i && n.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), r.setOptions({ ...r.options,
                        onExitComplete: () => this.safeToRemove()
                    })), T.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: n,
                        drag: i,
                        isPresent: r
                    } = this.props, o = n.projection;
                    return o && (o.isPresent = r, i || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? o.promote() : o.relegate() || nu.ZP.postRender(() => {
                        var t;
                        (null === (t = o.getStack()) || void 0 === t ? void 0 : t.members.length) || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: n
                    } = this.props, {
                        projection: i
                    } = t;
                    i && (i.scheduleCheckAfterUnmount(), (null == e ? void 0 : e.group) && e.group.remove(i), (null == n ? void 0 : n.deregister) && n.deregister(i))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    null == t || t()
                }
                render() {
                    return null
                }
            }
            let rf = {
                    borderRadius: { ...rh,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: rh,
                    borderTopRightRadius: rh,
                    borderBottomLeftRadius: rh,
                    borderBottomRightRadius: rh,
                    boxShadow: rd
                },
                rm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                rv = rm.length,
                rg = t => "string" == typeof t ? parseFloat(t) : t,
                ry = t => "number" == typeof t || _.test(t);

            function rx(t, e) {
                var n;
                return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius
            }
            let rb = rA(0, .5, e4),
                rw = rA(.5, .95, e0);

            function rA(t, e, n) {
                return i => i < t ? 0 : i > e ? 1 : n(eg(t, e, i))
            }

            function rP(t, e) {
                t.min = e.min, t.max = e.max
            }

            function rS(t, e) {
                rP(t.x, e.x), rP(t.y, e.y)
            }

            function rT(t, e, n, i, r) {
                return t -= e, t = i + 1 / n * (t - i), void 0 !== r && (t = i + 1 / r * (t - i)), t
            }

            function rV(t, e, [n, i, r], o, a) {
                ! function(t, e = 0, n = 1, i = .5, r, o = t, a = t) {
                    if (K.test(e)) {
                        e = parseFloat(e);
                        let s = ey(a.min, a.max, e / 100);
                        e = s - a.min
                    }
                    if ("number" != typeof e) return;
                    let l = ey(o.min, o.max, i);
                    t === o && (l -= e), t.min = rT(t.min, e, n, l, r), t.max = rT(t.max, e, n, l, r)
                }(t, e[n], e[i], e[r], e.scale, o, a)
            }
            let rE = ["x", "scaleX", "originX"],
                rC = ["y", "scaleY", "originY"];

            function rM(t, e, n, i) {
                rV(t.x, e, rE, null == n ? void 0 : n.x, null == i ? void 0 : i.x), rV(t.y, e, rC, null == n ? void 0 : n.y, null == i ? void 0 : i.y)
            }

            function rR(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function rk(t) {
                return rR(t.x) && rR(t.y)
            }

            function rL(t, e) {
                return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
            }

            function rO(t) {
                return ic(t.x) / ic(t.y)
            }
            class rj {
                constructor() {
                    this.members = []
                }
                add(t) {
                    nY(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (nH(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let e = this.members[this.members.length - 1];
                        e && this.promote(e)
                    }
                }
                relegate(t) {
                    let e;
                    let n = this.members.findIndex(e => t === e);
                    if (0 === n) return !1;
                    for (let i = n; i >= 0; i--) {
                        let r = this.members[i];
                        if (!1 !== r.isPresent) {
                            e = r;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    var n;
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues, t.snapshot.isShared = !0), (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0);
                        let {
                            crossfade: r
                        } = t.options;
                        !1 === r && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        var e, n, i, r, o;
                        null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (o = null === (i = t.resumingFrom) || void 0 === i ? void 0 : (r = i.options).onExitComplete) || void 0 === o || o.call(r)
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function rD(t, e, n) {
                let i = t.x.translate / e.x,
                    r = t.y.translate / e.y,
                    o = `translate3d(${i}px, ${r}px, 0) `;
                if (o += `scale(${1/e.x}, ${1/e.y}) `, n) {
                    let {
                        rotate: a,
                        rotateX: s,
                        rotateY: l
                    } = n;
                    a && (o += `rotate(${a}deg) `), s && (o += `rotateX(${s}deg) `), l && (o += `rotateY(${l}deg) `)
                }
                let u = t.x.scale * e.x,
                    h = t.y.scale * e.y;
                return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" == (o += `scale(${u}, ${h})`) ? "none" : o
            }
            let rF = (t, e) => t.depth - e.depth;
            class rB {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    nY(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    nH(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(rF), this.isDirty = !1, this.children.forEach(t)
                }
            }
            let rU = ["", "X", "Y", "Z"];

            function rI({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: n,
                checkIsScrollRoot: i,
                resetTransform: r
            }) {
                return class {
                    constructor(t, n = {}, i = null == e ? void 0 : e()) {
                        this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.nodes.forEach(rX), this.nodes.forEach(rZ)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.id = t, this.latestValues = n, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
                        for (let r = 0; r < this.path.length; r++) this.path[r].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new rB)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new nX), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let n = this.eventHandlers.get(t);
                        null == n || n.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    registerPotentialNode(t, e) {
                        this.potentialNodes.set(t, e)
                    }
                    mount(e, n = !1) {
                        var i;
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: r,
                            layout: o,
                            visualElement: a
                        } = this.options;
                        if (a && !a.getInstance() && a.mount(e), this.root.nodes.add(this), null === (i = this.parent) || void 0 === i || i.children.add(this), this.id && this.root.potentialNodes.delete(this.id), n && (o || r) && (this.isLayoutDirty = !0), t) {
                            let s;
                            let l = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, clearTimeout(s), s = window.setTimeout(l, 250), T.hasAnimatedSinceResize && (T.hasAnimatedSinceResize = !1, this.nodes.forEach(rH))
                            })
                        }
                        r && this.root.registerSharedNode(r, this), !1 !== this.options.animate && a && (r || o) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: n,
                            layout: i
                        }) => {
                            var r, o, s, l, u;
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let h = null !== (o = null !== (r = this.options.transition) && void 0 !== r ? r : a.getDefaultTransition()) && void 0 !== o ? o : rQ,
                                {
                                    onLayoutAnimationStart: c,
                                    onLayoutAnimationComplete: d
                                } = a.getProps(),
                                p = !this.targetLayout || !rL(this.targetLayout, i) || n,
                                f = !e && n;
                            if ((null === (s = this.resumeFrom) || void 0 === s ? void 0 : s.instance) || f || e && (p || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, f);
                                let m = { ...n$(h, "layout"),
                                    onPlay: c,
                                    onComplete: d
                                };
                                a.shouldReduceMotion && (m.delay = 0, m.type = !1), this.startAnimation(m)
                            } else e || 0 !== this.animationProgress || this.finishAnimation(), this.isLead() && (null === (u = (l = this.options).onExitComplete) || void 0 === u || u.call(l));
                            this.targetLayout = i
                        })
                    }
                    unmount() {
                        var t, e;
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, nu.qY.preRender(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        var t;
                        return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
                    }
                    startUpdate() {
                        var t;
                        this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(rq))
                    }
                    willUpdate(t = !0) {
                        var e, n, i;
                        if (this.root.isUpdateBlocked()) {
                            null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e);
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let r = 0; r < this.path.length; r++) {
                            let o = this.path[r];
                            o.shouldResetTransform = !0, o.updateScroll()
                        }
                        let {
                            layoutId: a,
                            layout: s
                        } = this.options;
                        if (void 0 === a && !s) return;
                        let l = null === (i = this.options.visualElement) || void 0 === i ? void 0 : i.getProps().transformTemplate;
                        this.prevTransformTemplateValue = null == l ? void 0 : l(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    didUpdate() {
                        let t = this.isUpdateBlocked();
                        if (t) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(rW);
                            return
                        }
                        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(r0), this.potentialNodes.clear()), this.nodes.forEach(rY), this.nodes.forEach(r$), this.nodes.forEach(rN), this.clearAllSnapshots(), nu.iW.update(), nu.iW.preRender(), nu.iW.render())
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(rz), this.sharedNodes.forEach(rG)
                    }
                    scheduleUpdateProjection() {
                        nu.ZP.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        nu.ZP.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        if (this.snapshot || !this.instance) return;
                        let t = this.measure(),
                            e = this.removeTransform(this.removeElementScroll(t));
                        r5(e), this.snapshot = {
                            measured: t,
                            layout: e,
                            latestValues: {}
                        }
                    }
                    updateLayout() {
                        var t;
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let e = 0; e < this.path.length; e++) {
                                let n = this.path[e];
                                n.updateScroll()
                            }
                        let i = this.measure();
                        r5(i);
                        let r = this.layout;
                        this.layout = {
                            measured: i,
                            actual: this.removeElementScroll(i)
                        }, this.layoutCorrected = iV(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), null === (t = this.options.visualElement) || void 0 === t || t.notifyLayoutMeasure(this.layout.actual, null == r ? void 0 : r.actual)
                    }
                    updateScroll() {
                        this.options.layoutScroll && this.instance && (this.isScrollRoot = i(this.instance), this.scroll = n(this.instance))
                    }
                    resetTransform() {
                        var t;
                        if (!r) return;
                        let e = this.isLayoutDirty || this.shouldResetTransform,
                            n = this.projectionDelta && !rk(this.projectionDelta),
                            i = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
                            o = null == i ? void 0 : i(this.latestValues, ""),
                            a = o !== this.prevTransformTemplateValue;
                        e && (n || ik(this.latestValues) || a) && (r(this.instance, o), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return iV();
                        let e = t.measureViewportBox(),
                            {
                                scroll: n
                            } = this.root;
                        return n && (iD(e.x, n.x), iD(e.y, n.y)), e
                    }
                    removeElementScroll(t) {
                        let e = iV();
                        rS(e, t);
                        for (let n = 0; n < this.path.length; n++) {
                            let i = this.path[n],
                                {
                                    scroll: r,
                                    options: o,
                                    isScrollRoot: a
                                } = i;
                            if (i !== this.root && r && o.layoutScroll) {
                                if (a) {
                                    rS(e, t);
                                    let {
                                        scroll: s
                                    } = this.root;
                                    s && (iD(e.x, -s.x), iD(e.y, -s.y))
                                }
                                iD(e.x, r.x), iD(e.y, r.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let n = iV();
                        rS(n, t);
                        for (let i = 0; i < this.path.length; i++) {
                            let r = this.path[i];
                            !e && r.options.layoutScroll && r.scroll && r !== r.root && iI(n, {
                                x: -r.scroll.x,
                                y: -r.scroll.y
                            }), ik(r.latestValues) && iI(n, r.latestValues)
                        }
                        return ik(this.latestValues) && iI(n, this.latestValues), n
                    }
                    removeTransform(t) {
                        var e;
                        let n = iV();
                        rS(n, t);
                        for (let i = 0; i < this.path.length; i++) {
                            let r = this.path[i];
                            if (!r.instance || !ik(r.latestValues)) continue;
                            iR(r.latestValues) && r.updateSnapshot();
                            let o = iV(),
                                a = r.measure();
                            rS(o, a), rM(n, r.latestValues, null === (e = r.snapshot) || void 0 === e ? void 0 : e.layout, o)
                        }
                        return ik(this.latestValues) && rM(n, this.latestValues), n
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection()
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    resolveTargetDelta() {
                        var t, e, n, i;
                        let {
                            layout: r,
                            layoutId: o
                        } = this.options;
                        this.layout && (r || o) && (!this.targetDelta && !this.relativeTarget && (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = iV(), this.relativeTargetOrigin = iV(), iy(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), rS(this.relativeTarget, this.relativeTargetOrigin))), (this.relativeTarget || this.targetDelta) && ((this.target || (this.target = iV(), this.targetWithTransforms = iV()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target)) ? (e = this.target, n = this.relativeTarget, i = this.relativeParent.target, iv(e.x, n.x, i.x), iv(e.y, n.y, i.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : rS(this.target, this.layout.actual), ij(this.target, this.targetDelta)) : rS(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = iV(), this.relativeTargetOrigin = iV(), iy(this.relativeTargetOrigin, this.target, this.relativeParent.target), rS(this.relativeTarget, this.relativeTargetOrigin)))))
                    }
                    getClosestProjectingParent() {
                        if (!(!this.parent || ik(this.parent.latestValues))) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    calcProjection() {
                        var t;
                        let {
                            layout: e,
                            layoutId: n
                        } = this.options;
                        if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(e || n)) return;
                        let i = this.getLead();
                        rS(this.layoutCorrected, this.layout.actual),
                            function(t, e, n, i = !1) {
                                var r, o;
                                let a, s;
                                let l = n.length;
                                if (l) {
                                    e.x = e.y = 1;
                                    for (let u = 0; u < l; u++) s = (a = n[u]).projectionDelta, (null === (o = null === (r = a.instance) || void 0 === r ? void 0 : r.style) || void 0 === o ? void 0 : o.display) !== "contents" && (i && a.options.layoutScroll && a.scroll && a !== a.root && iI(t, {
                                        x: -a.scroll.x,
                                        y: -a.scroll.y
                                    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, ij(t, s)), i && ik(a.latestValues) && iI(t, a.latestValues))
                                }
                            }(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== i);
                        let {
                            target: r
                        } = i;
                        if (!r) return;
                        this.projectionDelta || (this.projectionDelta = iS(), this.projectionDeltaWithTransform = iS());
                        let o = this.treeScale.x,
                            a = this.treeScale.y,
                            s = this.projectionTransform;
                        im(this.projectionDelta, this.layoutCorrected, r, this.latestValues), this.projectionTransform = rD(this.projectionDelta, this.treeScale), (this.projectionTransform !== s || this.treeScale.x !== o || this.treeScale.y !== a) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", r))
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        var e, n, i;
                        null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e), t && (null === (i = this.getStack()) || void 0 === i || i.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        var n;
                        let i = this.snapshot,
                            r = (null == i ? void 0 : i.latestValues) || {},
                            o = { ...this.latestValues
                            },
                            a = iS();
                        this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
                        let s = iV(),
                            l = null == i ? void 0 : i.isShared,
                            u = 1 >= ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0),
                            h = Boolean(l && !u && !0 === this.options.crossfade && !this.path.some(rJ));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            var n, i, c;
                            let d = e / 1e3;
                            rK(a.x, t.x, d), rK(a.y, t.y, d), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (iy(s, this.layout.actual, this.relativeParent.layout.actual), i = this.relativeTarget, c = this.relativeTargetOrigin, r_(i.x, c.x, s.x, d), r_(i.y, c.y, s.y, d)), l && (this.animationValues = o, function(t, e, n, i, r, o) {
                                var a, s, l, u;
                                r ? (t.opacity = ey(0, null !== (a = n.opacity) && void 0 !== a ? a : 1, rb(i)), t.opacityExit = ey(null !== (s = e.opacity) && void 0 !== s ? s : 1, 0, rw(i))) : o && (t.opacity = ey(null !== (l = e.opacity) && void 0 !== l ? l : 1, null !== (u = n.opacity) && void 0 !== u ? u : 1, i));
                                for (let h = 0; h < rv; h++) {
                                    let c = `border${rm[h]}Radius`,
                                        d = rx(e, c),
                                        p = rx(n, c);
                                    if (void 0 === d && void 0 === p) continue;
                                    d || (d = 0), p || (p = 0);
                                    let f = 0 === d || 0 === p || ry(d) === ry(p);
                                    f ? (t[c] = Math.max(ey(rg(d), rg(p), i), 0), (K.test(p) || K.test(d)) && (t[c] += "%")) : t[c] = p
                                }(e.rotate || n.rotate) && (t.rotate = ey(e.rotate || 0, n.rotate || 0, i))
                            }(o, r, this.latestValues, d, h, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = d
                        }, this.mixTargetDelta(0)
                    }
                    startAnimation(t) {
                        var e, n;
                        this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (nu.qY.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = nu.ZP.update(() => {
                            T.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, n = {}) {
                                let i = B(t) ? t : nG(t);
                                return nN("", i, 1e3, n), {
                                    stop: () => i.stop(),
                                    isAnimating: () => i.isAnimating()
                                }
                            }(0, 0, { ...t,
                                onUpdate: e => {
                                    var n;
                                    this.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                                },
                                onComplete: () => {
                                    var e;
                                    null === (e = t.onComplete) || void 0 === e || e.call(t), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        var t;
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        var t;
                        this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: n,
                                layout: i,
                                latestValues: r
                            } = t;
                        if (e && n && i) {
                            if (this !== t && this.layout && i && r2(this.options.animationType, this.layout.actual, i.actual)) {
                                n = this.target || iV();
                                let o = ic(this.layout.actual.x);
                                n.x.min = t.target.x.min, n.x.max = n.x.min + o;
                                let a = ic(this.layout.actual.y);
                                n.y.min = t.target.y.min, n.y.max = n.y.min + a
                            }
                            rS(e, n), iI(e, r), im(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                        }
                    }
                    registerSharedNode(t, e) {
                        var n, i, r;
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new rj);
                        let o = this.sharedNodes.get(t);
                        o.add(e), e.promote({
                            transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                            preserveFollowOpacity: null === (r = null === (i = e.options.initialPromotionConfig) || void 0 === i ? void 0 : i.shouldPreserveFollowOpacity) || void 0 === r ? void 0 : r.call(i, e)
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: n
                    } = {}) {
                        let i = this.getStack();
                        i && i.promote(this, n), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            n = {};
                        for (let i = 0; i < rU.length; i++) {
                            let r = rU[i],
                                o = "rotate" + r;
                            t.getStaticValue(o) && (e = !0, n[o] = t.getStaticValue(o), t.setStaticValue(o, 0))
                        }
                        if (e) {
                            for (let a in null == t || t.syncRender(), n) t.setStaticValue(a, n[a]);
                            t.scheduleRender()
                        }
                    }
                    getProjectionStyles(t = {}) {
                        var e, n, i;
                        let r = {};
                        if (!this.instance || this.isSVG) return r;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        r.visibility = "";
                        let o = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
                        if (this.needsReset) return this.needsReset = !1, r.opacity = "", r.pointerEvents = tR(t.pointerEvents) || "", r.transform = o ? o(this.latestValues, "") : "none", r;
                        let a = this.getLead();
                        if (!this.projectionDelta || !this.layout || !a.target) {
                            let s = {};
                            return this.options.layoutId && (s.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, s.pointerEvents = tR(t.pointerEvents) || ""), this.hasProjected && !ik(this.latestValues) && (s.transform = o ? o({}, "") : "none", this.hasProjected = !1), s
                        }
                        let l = a.animationValues || a.latestValues;
                        this.applyTransformsToTarget(), r.transform = rD(this.projectionDeltaWithTransform, this.treeScale, l), o && (r.transform = o(l, r.transform));
                        let {
                            x: u,
                            y: h
                        } = this.projectionDelta;
                        for (let c in r.transformOrigin = `${100*u.origin}% ${100*h.origin}% 0`, a.animationValues ? r.opacity = a === this ? null !== (i = null !== (n = l.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : l.opacityExit : r.opacity = a === this ? void 0 !== l.opacity ? l.opacity : "" : void 0 !== l.opacityExit ? l.opacityExit : 0, O) {
                            if (void 0 === l[c]) continue;
                            let {
                                correct: d,
                                applyTo: p
                            } = O[c], f = d(l[c], a);
                            if (p) {
                                let m = p.length;
                                for (let v = 0; v < m; v++) r[p[v]] = f
                            } else r[c] = f
                        }
                        return this.options.layoutId && (r.pointerEvents = a === this ? tR(t.pointerEvents) || "" : "none"), r
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(rW), this.root.sharedNodes.clear()
                    }
                }
            }

            function r$(t) {
                t.updateLayout()
            }

            function rN(t) {
                var e, n, i;
                let r = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
                    let {
                        actual: o,
                        measured: a
                    } = t.layout, {
                        animationType: s
                    } = t.options;
                    "size" === s ? iE(t => {
                        let e = r.isShared ? r.measured[t] : r.layout[t],
                            n = ic(e);
                        e.min = o[t].min, e.max = e.min + n
                    }) : r2(s, r.layout, o) && iE(t => {
                        let e = r.isShared ? r.measured[t] : r.layout[t],
                            n = ic(o[t]);
                        e.max = e.min + n
                    });
                    let l = iS();
                    im(l, o, r.layout);
                    let u = iS();
                    r.isShared ? im(u, t.applyTransform(a, !0), r.measured) : im(u, o, r.layout);
                    let h = !rk(l),
                        c = !1;
                    if (!t.resumeFrom && (t.relativeParent = t.getClosestProjectingParent(), t.relativeParent && !t.relativeParent.resumeFrom)) {
                        let {
                            snapshot: d,
                            layout: p
                        } = t.relativeParent;
                        if (d && p) {
                            let f = iV();
                            iy(f, r.layout, d.layout);
                            let m = iV();
                            iy(m, o, p.actual), rL(f, m) || (c = !0)
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: o,
                        snapshot: r,
                        delta: u,
                        layoutDelta: l,
                        hasLayoutChanged: h,
                        hasRelativeTargetChanged: c
                    })
                } else t.isLead() && (null === (i = (n = t.options).onExitComplete) || void 0 === i || i.call(n));
                t.options.transition = void 0
            }

            function rz(t) {
                t.clearSnapshot()
            }

            function rW(t) {
                t.clearMeasurements()
            }

            function rY(t) {
                let {
                    visualElement: e
                } = t.options;
                (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notifyBeforeLayoutMeasure(), t.resetTransform()
            }

            function rH(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
            }

            function rX(t) {
                t.resolveTargetDelta()
            }

            function rZ(t) {
                t.calcProjection()
            }

            function rq(t) {
                t.resetRotation()
            }

            function rG(t) {
                t.removeLeadSnapshot()
            }

            function rK(t, e, n) {
                t.translate = ey(e.translate, 0, n), t.scale = ey(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function r_(t, e, n, i) {
                t.min = ey(e.min, n.min, i), t.max = ey(e.max, n.max, i)
            }

            function rJ(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let rQ = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function r0(t, e) {
                let n = t.root;
                for (let i = t.path.length - 1; i >= 0; i--)
                    if (Boolean(t.path[i].instance)) {
                        n = t.path[i];
                        break
                    }
                let r = n && n !== t.root ? n.instance : document,
                    o = r.querySelector(`[data-projection-id="${e}"]`);
                o && t.mount(o, !0)
            }

            function r1(t) {
                t.min = Math.round(t.min), t.max = Math.round(t.max)
            }

            function r5(t) {
                r1(t.x), r1(t.y)
            }

            function r2(t, e, n) {
                return "position" === t || "preserve-aspect" === t && ! function(t, e, n = .1) {
                    return io(t, e) <= n
                }(rO(e), rO(n), .2)
            }
            let r3 = rI({
                    attachResizeListener: (t, e) => tj(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                r4 = {
                    current: void 0
                },
                r6 = rI({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!r4.current) {
                            let t = new r3(0, {});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), r4.current = t
                        }
                        return r4.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
                }),
                r9 = { ...it,
                    ...eo,
                    ...iY,
                    measureLayout: function(t) {
                        let [e, n] = ea(), i = (0, l.useContext)(E.p);
                        return l.createElement(rp, { ...t,
                            layoutGroup: i,
                            switchLayoutGroup: (0, l.useContext)(M),
                            isPresent: e,
                            safeToRemove: n
                        })
                    }
                },
                r7 = function(t) {
                    function e(e, n = {}) {
                        return function({
                            preloadedFeatures: t,
                            createVisualElement: e,
                            projectionNodeConstructor: n,
                            useRender: i,
                            useVisualState: r,
                            Component: o
                        }) {
                            t && function(t) {
                                for (let e in t) "projectionNodeConstructor" === e ? A.projectionNodeConstructor = t[e] : A[e].Component = t[e]
                            }(t);
                            let a = (0, l.forwardRef)(function(a, s) {
                                var v, g;
                                let x = { ...(0, l.useContext)(u),
                                        ...a,
                                        layoutId: function({
                                            layoutId: t
                                        }) {
                                            let e = (0, l.useContext)(E.p).id;
                                            return e && void 0 !== t ? e + "-" + t : t
                                        }(a)
                                    },
                                    {
                                        isStatic: w
                                    } = x,
                                    R = null,
                                    k = function(t) {
                                        let {
                                            initial: e,
                                            animate: n
                                        } = function(t, e) {
                                            if (y(t)) {
                                                let {
                                                    initial: n,
                                                    animate: i
                                                } = t;
                                                return {
                                                    initial: !1 === n || m(n) ? n : void 0,
                                                    animate: m(i) ? i : void 0
                                                }
                                            }
                                            return !1 !== t.inherit ? e : {}
                                        }(t, (0, l.useContext)(h));
                                        return (0, l.useMemo)(() => ({
                                            initial: e,
                                            animate: n
                                        }), [b(e), b(n)])
                                    }(a),
                                    L = w ? void 0 : (0, S.h)(() => {
                                        if (T.hasEverUpdated) return V++
                                    }),
                                    O = r(a, w);
                                if (!w && P.j) {
                                    k.visualElement = function(t, e, n, i) {
                                        let r = (0, l.useContext)(h).visualElement,
                                            o = (0, l.useContext)(p),
                                            a = (0, l.useContext)(c.O),
                                            s = (0, l.useContext)(u).reducedMotion,
                                            f = (0, l.useRef)(void 0);
                                        i = i || o.renderer, !f.current && i && (f.current = i(t, {
                                            visualState: e,
                                            parent: r,
                                            props: n,
                                            presenceId: a ? a.id : void 0,
                                            blockInitialAnimation: !!a && !1 === a.initial,
                                            reducedMotionConfig: s
                                        }));
                                        let m = f.current;
                                        return (0, d.L)(() => {
                                            m && m.syncRender()
                                        }), (0, l.useEffect)(() => {
                                            m && m.animationState && m.animationState.animateChanges()
                                        }), (0, d.L)(() => () => m && m.notifyUnmount(), []), m
                                    }(o, O, x, e);
                                    let j = (0, l.useContext)(p).strict,
                                        D = (0, l.useContext)(M);
                                    k.visualElement && (R = k.visualElement.loadFeatures(x, j, t, L, n || A.projectionNodeConstructor, D))
                                }
                                return l.createElement(C, {
                                    visualElement: k.visualElement,
                                    props: x
                                }, R, l.createElement(h.Provider, {
                                    value: k
                                }, i(o, a, L, (v = k.visualElement, g = s, (0, l.useCallback)(t => {
                                    t && O.mount && O.mount(t), v && (t ? v.mount(t) : v.unmount()), g && ("function" == typeof g ? g(t) : f(g) && (g.current = t))
                                }, [v])), O, w, k.visualElement)))
                            });
                            return a[R] = o, a
                        }(t(e, n))
                    }
                    if ("undefined" == typeof Proxy) return e;
                    let n = new Map;
                    return new Proxy(e, {
                        get: (t, i) => (n.has(i) || n.set(i, e(i)), n.get(i))
                    })
                }((t, e) => (function(t, {
                    forwardMotionProps: e = !1
                }, n, i, r) {
                    let o = L(t) ? tL : tO;
                    return { ...o,
                        preloadedFeatures: n,
                        useRender: function(t = !1) {
                            let e = (e, n, i, r, {
                                latestValues: o
                            }, a) => {
                                let s = L(e) ? tx : tu,
                                    u = s(n, o, a),
                                    h = function(t, e, n) {
                                        let i = {};
                                        for (let r in t)(td(r) || !0 === n && tc(r) || !e && !tc(r) || t.draggable && r.startsWith("onDrag")) && (i[r] = t[r]);
                                        return i
                                    }(n, "string" == typeof e, t),
                                    c = { ...h,
                                        ...u,
                                        ref: r
                                    };
                                return i && (c["data-projection-id"] = i), (0, l.createElement)(e, c)
                            };
                            return e
                        }(e),
                        createVisualElement: i,
                        projectionNodeConstructor: r,
                        Component: t
                    }
                })(t, e, r9, rl, r6))
        },
        11741: function(t, e, n) {
            n.d(e, {
                j: function() {
                    return i
                }
            });
            let i = "undefined" != typeof document
        },
        49304: function(t, e, n) {
            n.d(e, {
                O: function() {
                    return r
                }
            });
            var i = n(83454);
            let r = (void 0 === i || i.env, "production")
        },
        96681: function(t, e, n) {
            n.d(e, {
                h: function() {
                    return r
                }
            });
            var i = n(67294);

            function r(t) {
                let e = (0, i.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        58868: function(t, e, n) {
            n.d(e, {
                L: function() {
                    return o
                }
            });
            var i = n(67294),
                r = n(11741);
            let o = r.j ? i.useLayoutEffect : i.useEffect
        },
        65411: function(t, e, n) {
            n.d(e, {
                z: function() {
                    return r
                }
            });
            var i = n(67294);

            function r(t) {
                return (0, i.useEffect)(() => () => t(), [])
            }
        },
        16034: function(t, e, n) {
            n.d(e, {
                O: function() {
                    return r
                }
            });
            let i = new Set;

            function r(t, e, n) {
                t || i.has(e) || (console.warn(e), n && console.warn(n), i.add(e))
            }
        },
        54735: function(t, e, n) {
            n.d(e, {
                qY: function() {
                    return p
                },
                ZP: function() {
                    return x
                },
                iW: function() {
                    return f
                },
                $B: function() {
                    return y
                }
            });
            let i = 1 / 60 * 1e3,
                r = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
                o = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout(() => t(r()), i),
                a = !0,
                s = !1,
                l = !1,
                u = {
                    delta: 0,
                    timestamp: 0
                },
                h = ["read", "update", "preRender", "render", "postRender"],
                c = h.reduce((t, e) => (t[e] = function(t) {
                    let e = [],
                        n = [],
                        i = 0,
                        r = !1,
                        o = !1,
                        a = new WeakSet,
                        s = {
                            schedule: (t, o = !1, s = !1) => {
                                let l = s && r,
                                    u = l ? e : n;
                                return o && a.add(t), -1 === u.indexOf(t) && (u.push(t), l && r && (i = e.length)), t
                            },
                            cancel: t => {
                                let e = n.indexOf(t); - 1 !== e && n.splice(e, 1), a.delete(t)
                            },
                            process: l => {
                                if (r) {
                                    o = !0;
                                    return
                                }
                                if (r = !0, [e, n] = [n, e], n.length = 0, i = e.length)
                                    for (let u = 0; u < i; u++) {
                                        let h = e[u];
                                        h(l), a.has(h) && (s.schedule(h), t())
                                    }
                                r = !1, o && (o = !1, s.process(l))
                            }
                        };
                    return s
                }(() => s = !0), t), {}),
                d = h.reduce((t, e) => {
                    let n = c[e];
                    return t[e] = (t, e = !1, i = !1) => (s || g(), n.schedule(t, e, i)), t
                }, {}),
                p = h.reduce((t, e) => (t[e] = c[e].cancel, t), {}),
                f = h.reduce((t, e) => (t[e] = () => c[e].process(u), t), {}),
                m = t => c[t].process(u),
                v = t => {
                    s = !1, u.delta = a ? i : Math.max(Math.min(t - u.timestamp, 40), 1), u.timestamp = t, l = !0, h.forEach(m), l = !1, s && (a = !1, o(v))
                },
                g = () => {
                    s = !0, a = !0, l || o(v)
                },
                y = () => u;
            var x = d
        }
    }
]);