"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [333], {
        2248: function(e, r, t) {
            t.d(r, {
                _: function() {
                    return s
                }
            });
            var a = t(85893);

            function s(e) {
                return (0, a.jsx)("svg", {
                    width: "11",
                    height: "6",
                    viewBox: "0 0 11 6",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.6635 0.336517C10.9719 0.644826 10.9719 1.14469 10.6635 1.453L6.45302 5.66353C6.14471 5.97184 5.64484 5.97184 5.33653 5.66353L1.12601 1.453C0.817699 1.14469 0.817699 0.644826 1.12601 0.336517C1.43432 0.0282085 1.93418 0.0282085 2.24249 0.336517L5.89478 3.9888L9.54706 0.336517C9.85537 0.0282085 10.3552 0.0282085 10.6635 0.336517Z",
                        fill: "currentColor"
                    })
                })
            }
        },
        75364: function(e, r, t) {
            t.d(r, {
                s: function() {
                    return m
                }
            });
            var a = t(85893),
                s = t(67294),
                n = t(11163),
                l = t(94184),
                i = t.n(l),
                o = t(11171),
                c = t(89414),
                d = t(48785),
                h = t(2248),
                u = t(19035);

            function m(e) {
                let {
                    name: r,
                    icon: t,
                    href: l,
                    dropdownItems: m,
                    isActive: f
                } = e, x = (0, n.useRouter)(), {
                    query: {
                        layout: g
                    },
                    pathname: b
                } = x, [p, w] = (0, s.useState)(!1), [v, {
                    height: j
                }] = (0, c.Z)(), k = m && m.some(e => e.href === b);
                return (0, s.useEffect)(() => {
                    k && w(!0)
                }, []), (0, a.jsx)("div", {
                    className: "mb-2 min-h-[48px] list-none last:mb-0",
                    children: (null == m ? void 0 : m.length) ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            className: i()("relative flex h-12 cursor-pointer items-center justify-between whitespace-nowrap  rounded-lg px-4 text-sm transition-all", k ? "text-white" : "text-gray-500 hover:text-brand dark:hover:text-white"),
                            onClick: () => w(!p),
                            children: [(0, a.jsxs)("span", {
                                className: "z-[1] flex items-center ltr:mr-3 rtl:ml-3",
                                children: [(0, a.jsx)("span", {
                                    className: i()("ltr:mr-3 rtl:ml-3"),
                                    children: t
                                }), r]
                            }), (0, a.jsx)("span", {
                                className: "z-[1] transition-transform duration-200 ".concat(p ? "rotate-180" : ""),
                                children: (0, a.jsx)(h._, {})
                            }), k && (0, a.jsx)(o.E.span, {
                                className: "absolute bottom-0 left-0 right-0 h-full w-full rounded-lg bg-brand shadow-large",
                                layoutId: "menu-item-active-indicator"
                            })]
                        }), (0, a.jsx)("div", {
                            style: {
                                height: p ? j : 0
                            },
                            className: "ease-[cubic-bezier(0.33, 1, 0.68, 1)] overflow-hidden transition-all duration-[350ms]",
                            children: (0, a.jsx)("ul", {
                                ref: v,
                                children: m.map((e, r) => (0, a.jsx)("li", {
                                    className: "first:pt-2",
                                    children: (0, a.jsx)(d.Z, {
                                        href: {
                                            pathname: e.href,
                                            ...g !== u.O.MODERN && void 0 !== g && {
                                                query: {
                                                    layout: g
                                                }
                                            }
                                        },
                                        className: "flex items-center rounded-lg p-3 text-sm text-gray-500 transition-all before:h-1 before:w-1 before:rounded-full before:bg-gray-500 hover:text-brand ltr:pl-6 before:ltr:mr-5 rtl:pr-6 before:rtl:ml-5 dark:hover:text-white",
                                        activeClassName: "!text-brand dark:!text-white dark:before:!bg-white before:!bg-brand before:!w-2 before:!h-2 before:-ml-0.5 before:ltr:!mr-[18px] before:rtl:!ml-[18px] !font-medium",
                                        children: e.name
                                    })
                                }, r))
                            })
                        })]
                    }) : (0, a.jsxs)(d.Z, {
                        href: {
                            pathname: l,
                            ...g !== u.O.MODERN && void 0 !== g && {
                                query: {
                                    layout: g
                                }
                            }
                        },
                        className: i()("relative flex h-12 items-center whitespace-nowrap rounded-lg px-4 text-sm text-gray-500 transition-all hover:text-brand dark:hover:text-white", {
                            "bg-brand": f
                        }),
                        activeClassName: "!text-white",
                        children: [(0, a.jsx)("span", {
                            className: i()("relative z-[1] duration-100 before:absolute before:-right-3 before:top-[50%] before:h-1 before:w-1 before:-translate-y-2/4 before:rounded-full before:bg-none ltr:mr-3 rtl:ml-3", {
                                "text-white": f
                            }),
                            children: t
                        }), (0, a.jsxs)("span", {
                            className: "relative z-[1] ",
                            children: [" ", r]
                        }), l === b && (0, a.jsx)(o.E.span, {
                            className: "absolute bottom-0 left-0 right-0 h-full w-full rounded-lg bg-brand shadow-large",
                            layoutId: "menu-item-active-indicator"
                        })]
                    })
                })
            }
        },
        36545: function(e, r, t) {
            t.d(r, {
                Z: function() {
                    return n
                }
            });
            var a = t(85893),
                s = t(16598);

            function n(e) {
                let {
                    isOpen: r,
                    ...t
                } = e;
                return (0, a.jsx)(s.Z, {
                    "aria-label": "Hamburger",
                    shape: "circle",
                    ...t,
                    children: (0, a.jsxs)("svg", {
                        className: "sm:w-auo h-auto w-6",
                        width: "30",
                        height: "30",
                        viewBox: "0 0 100 100",
                        children: [(0, a.jsx)("path", {
                            className: "ease-[cubic-bezier(0.4, 0, 0.2, 1)] transition-[stroke-dasharray,stroke-dashoffset] duration-[600ms]",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "6",
                            strokeLinecap: "round",
                            strokeDasharray: r ? "90 207" : "60 207",
                            strokeDashoffset: r ? "-134" : "0",
                            d: "M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                        }), (0, a.jsx)("path", {
                            className: "ease-[cubic-bezier(0.4, 0, 0.2, 1)] transition-[stroke-dasharray,stroke-dashoffset] duration-[600ms]",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "6",
                            strokeLinecap: "round",
                            strokeDasharray: r ? "1 60" : "60 60",
                            strokeDashoffset: r ? "-30" : "0",
                            d: "M 20,50 H 80"
                        }), (0, a.jsx)("path", {
                            className: "ease-[cubic-bezier(0.4, 0, 0.2, 1)] transition-[stroke-dasharray,stroke-dashoffset] duration-[600ms]",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "6",
                            strokeLinecap: "round",
                            strokeDasharray: r ? "90 207" : "60 207",
                            strokeDashoffset: r ? "-134" : "0",
                            d: "M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                        })]
                    })
                })
            }
        },
        48785: function(e, r, t) {
            var a = t(85893),
                s = t(11163),
                n = t(94184),
                l = t.n(n),
                i = t(72095);
            let o = e => {
                let {
                    href: r,
                    className: t,
                    activeClassName: n = "active",
                    ...o
                } = e, {
                    pathname: c
                } = (0, s.useRouter)(), d = "object" == typeof r ? r.pathname : r;
                return (0, a.jsx)(i.Z, {
                    href: r,
                    className: l()(t, {
                        [n]: c === d
                    }),
                    ...o
                })
            };
            r.Z = o
        },
        64792: function(e, r, t) {
            t.d(r, {
                Z: function() {
                    return i
                }
            });
            var a = t(85893),
                s = t(82921),
                n = {
                    src: "/_next/static/media/logo.e391102a.png",
                    height: 512,
                    width: 512,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA00lEQVR42mM4F2TIKGjjyshACJyOcpBvcbXPn+doOPmAm3b0Sms1Y7DEmTAjyd1uGkf3O6n83eCo/X+ZhfL/Cbpy/6vkRf/XSPDHMGzzMm3oiIv5XxUb92+1tervdmXh33kKsj+qTA3+51uaHmOY4m6/tCwt439BZs73bjuz34125r/TnZ3+e9nY/bcwMW9gqHJ1cq0ODPjfEOD3P9fC7L+mufV/C0OzX9Z6xkuCVbUEwe5INDezzbEyrwmysp7jpG+UHmpsKs1ACFiZWrG46hszAgD0B0jss+ZGagAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 8
                };
            let l = e => (0, a.jsx)("div", {
                className: "flex cursor-pointer outline-none",
                ...e,
                children: (0, a.jsx)("span", {
                    className: "relative flex overflow-hidden",
                    children: (0, a.jsx)(s.Z, {
                        src: n,
                        alt: "Kennel",
                        priority: !0,
                        width: 28
                    })
                })
            });
            var i = l
        },
        33830: function(e, r, t) {
            t.d(r, {
                Z: function() {
                    return c
                }
            });
            var a = t(85893),
                s = t(11163),
                n = t(82921),
                l = t(72095),
                i = t(87507),
                o = t(19035);

            function c() {
                let e = (0, s.useRouter)(),
                    {
                        query: {
                            layout: r
                        }
                    } = e;
                return (0, a.jsx)(l.Z, {
                    href: {
                        pathname: i.Z.home,
                        ...r !== o.O.MODERN && void 0 !== r && {
                            query: {
                                layout: r
                            }
                        }
                    },
                    className: "flex w-28 outline-none sm:w-32 4xl:w-36",
                    children: (0, a.jsxs)("span", {
                        className: "relative flex items-center gap-2 overflow-hidden",
                        children: [(0, a.jsx)(n.Z, {
                            src: "/logo.png",
                            alt: "Kennel",
                            height: 45,
                            width: 45,
                            priority: !0
                        }), (0, a.jsx)("span", {
                            className: "text-xl uppercase",
                            children: "Kennel"
                        })]
                    })
                })
            }
        },
        87507: function(e, r) {
            r.Z = {
                home: "/",
                locks: "/locks",
                create: "/create"
            }
        },
        75748: function(e, r, t) {
            t.d(r, {
                Z: function() {
                    return v
                }
            });
            var a = t(85893),
                s = t(67294),
                n = t(11163),
                l = t(69077),
                i = t(50555),
                o = t(86501),
                c = t(94184),
                d = t.n(c),
                h = t(64792),
                u = t(13347),
                m = t(36545),
                f = t(43534),
                x = t(80275),
                g = t(87507),
                b = t(35079),
                p = t(11355);

            function w() {
                let e = (0, s.useRef)(""),
                    {
                        chain: r
                    } = (0, l.LN)(),
                    {
                        chains: t,
                        error: n,
                        isError: c,
                        isLoading: d,
                        isSuccess: h,
                        switchNetwork: u
                    } = (0, l.g0)();
                return (0, s.useLayoutEffect)(() => {
                    if (d && e.current) return;
                    let t = e.current;
                    if (d) {
                        let a = o.Am.loading("Switching network...");
                        e.current = a
                    }
                    c && (o.Am.error((null == n ? void 0 : n.message) || "Something went wrong", {
                        id: t
                    }), e.current = ""), h && (o.Am.success("Switched to ".concat(null == r ? void 0 : r.name), {
                        id: t
                    }), e.current = "")
                }, [n, c, d, h, null == r ? void 0 : r.name]), (0, a.jsxs)("div", {
                    className: "relative order-last flex shrink-0 items-center gap-4 sm:gap-6 lg:gap-8",
                    children: [!!t.length && (0, a.jsx)("div", {
                        className: "relative w-full lg:w-auto",
                        children: (0, a.jsxs)(b.R, {
                            value: r,
                            onChange: e => null == u ? void 0 : u(e.id),
                            children: [(0, a.jsx)(b.R.Button, {
                                className: "flex h-11 w-full items-center justify-between rounded-lg bg-gray-100 px-4 text-sm text-gray-900 dark:bg-light-dark dark:text-white md:w-36 lg:w-40 xl:w-48",
                                children: null == r ? void 0 : r.name
                            }), (0, a.jsx)(p.u, {
                                as: s.Fragment,
                                enter: "ease-out duration-200",
                                enterFrom: "opacity-0 translate-y-2",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100 -translate-y-0",
                                leaveTo: "opacity-0 translate-y-2",
                                children: (0, a.jsx)(b.R.Options, {
                                    className: "absolute right-0 z-20 mt-2 w-full min-w-[150px] origin-top-right rounded-lg bg-white p-3 px-1.5 shadow-large shadow-gray-400/10 dark:bg-[rgba(0,0,0,0.5)] dark:shadow-gray-900 dark:backdrop-blur",
                                    children: t.map(e => (0, a.jsx)(b.R.Option, {
                                        value: e,
                                        children: r => {
                                            let {
                                                selected: t
                                            } = r;
                                            return (0, a.jsx)("div", {
                                                className: "block cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-gray-900 transition dark:text-white  ".concat(t ? "my-1 bg-gray-100 dark:bg-gray-700" : "hover:bg-gray-50 dark:hover:bg-gray-700"),
                                                children: e.name
                                            })
                                        }
                                    }, e.id))
                                })
                            })]
                        })
                    }), (0, a.jsx)("div", {
                        className: "inline-block lg:hidden",
                        children: (0, a.jsx)(i.tn, {
                            icon: "hide"
                        })
                    }), (0, a.jsx)("div", {
                        className: "hidden lg:inline-block",
                        children: (0, a.jsx)(i.tn, {
                            icon: "hide",
                            balance: "show"
                        })
                    })]
                })
            }

            function v(e) {
                let {
                    className: r
                } = e, t = (0, n.useRouter)(), s = (0, f.t)(), {
                    openDrawer: l
                } = (0, x.y)(), i = (0, u.Z)();
                return (0, a.jsx)("nav", {
                    className: d()("sticky top-0 z-30 h-16 w-full transition-all duration-300 ltr:right-0 rtl:left-0 sm:h-20 3xl:h-24", (s && i.y) > 2 ? "bg-gradient-to-b from-white to-white/80 shadow-card backdrop-blur dark:from-dark dark:to-dark/80" : "", r),
                    children: (0, a.jsxs)("div", {
                        className: "flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 3xl:px-10",
                        children: [(0, a.jsxs)("div", {
                            className: "flex items-center",
                            children: [(0, a.jsx)("div", {
                                onClick: () => t.push(g.Z.home),
                                className: "flex items-center xl:hidden",
                                children: (0, a.jsx)(h.Z, {})
                            }), (0, a.jsx)("div", {
                                className: "mx-2 block sm:mx-4 xl:hidden",
                                children: (0, a.jsx)(m.Z, {
                                    isOpen: !1,
                                    variant: "transparent",
                                    onClick: () => l("DASHBOARD_SIDEBAR"),
                                    className: "dark:text-white"
                                })
                            })]
                        }), (0, a.jsx)(w, {})]
                    })
                })
            }
        },
        63413: function(e, r, t) {
            t.d(r, {
                p: function() {
                    return l
                }
            });
            var a = t(85893),
                s = t(81872),
                n = t(87507);
            let l = [{
                name: "Dashboard",
                icon: (0, a.jsx)(s.qHm, {}),
                href: n.Z.home
            }, {
                name: "View Locks",
                icon: (0, a.jsx)(s.hez, {}),
                href: n.Z.locks
            }, {
                name: "Create Lock",
                icon: (0, a.jsx)(s.OqY, {}),
                href: n.Z.create
            }]
        }
    }
]);