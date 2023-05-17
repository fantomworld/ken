(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [627], {
        39600: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/pair/[address]", function() {
                return r(65840)
            }])
        },
        2248: function(e, t, r) {
            "use strict";
            r.d(t, {
                _: function() {
                    return l
                }
            });
            var n = r(85893);

            function l(e) {
                return (0, n.jsx)("svg", {
                    width: "11",
                    height: "6",
                    viewBox: "0 0 11 6",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.6635 0.336517C10.9719 0.644826 10.9719 1.14469 10.6635 1.453L6.45302 5.66353C6.14471 5.97184 5.64484 5.97184 5.33653 5.66353L1.12601 1.453C0.817699 1.14469 0.817699 0.644826 1.12601 0.336517C1.43432 0.0282085 1.93418 0.0282085 2.24249 0.336517L5.89478 3.9888L9.54706 0.336517C9.85537 0.0282085 10.3552 0.0282085 10.6635 0.336517Z",
                        fill: "currentColor"
                    })
                })
            }
        },
        2891: function(e, t, r) {
            "use strict";
            r.d(t, {
                S: function() {
                    return l
                }
            });
            var n = r(85893);

            function l(e) {
                return (0, n.jsx)("svg", {
                    viewBox: "0 0 18 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, n.jsx)("path", {
                        d: "M5.28033 1.28033C5.57322 0.987437 5.57322 0.512563 5.28033 0.21967C4.98744 -0.0732233 4.51256 -0.0732233 4.21967 0.21967L0.21967 4.21967C0.0732233 4.36612 0 4.55806 0 4.75C0 4.85169 0.0202391 4.94866 0.0569091 5.03709C0.0935089 5.12555 0.147763 5.20842 0.21967 5.28033L4.21967 9.28033C4.51256 9.57322 4.98744 9.57322 5.28033 9.28033C5.57322 8.98744 5.57322 8.51256 5.28033 8.21967L2.56066 5.5H17.25C17.6642 5.5 18 5.16421 18 4.75C18 4.33579 17.6642 4 17.25 4H2.56066L5.28033 1.28033Z",
                        fill: "currentColor"
                    })
                })
            }
        },
        17357: function(e, t, r) {
            "use strict";
            r.d(t, {
                R: function() {
                    return l
                }
            });
            var n = r(85893);

            function l(e) {
                return (0, n.jsx)("svg", {
                    viewBox: "0 0 18 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, n.jsx)("path", {
                        d: "M12.7197 1.28033C12.4268 0.987437 12.4268 0.512563 12.7197 0.21967C13.0126 -0.0732233 13.4874 -0.0732233 13.7803 0.21967L17.7803 4.21967C17.9268 4.36612 18 4.55806 18 4.75C18 4.85169 17.9798 4.94866 17.9431 5.03709C17.9065 5.12555 17.8522 5.20842 17.7803 5.28033L13.7803 9.28033C13.4874 9.57322 13.0126 9.57322 12.7197 9.28033C12.4268 8.98744 12.4268 8.51256 12.7197 8.21967L15.4393 5.5H0.75C0.335787 5.5 0 5.16421 0 4.75C0 4.33579 0.335787 4 0.75 4H15.4393L12.7197 1.28033Z",
                        fill: "currentColor"
                    })
                })
            }
        },
        48785: function(e, t, r) {
            "use strict";
            var n = r(85893),
                l = r(11163),
                s = r(94184),
                i = r.n(s),
                a = r(72095);
            let o = e => {
                let {
                    href: t,
                    className: r,
                    activeClassName: s = "active",
                    ...o
                } = e, {
                    pathname: d
                } = (0, l.useRouter)(), c = "object" == typeof t ? t.pathname : t;
                return (0, n.jsx)(a.Z, {
                    href: t,
                    className: i()(r, {
                        [s]: d === c
                    }),
                    ...o
                })
            };
            t.Z = o
        },
        78614: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return p
                }
            });
            var n = r(85893),
                l = r(67294),
                s = r(5152),
                i = r.n(s),
                a = r(11163),
                o = r(11544),
                d = r(11171);
            r(94184);
            var c = r(87507);
            r(48785);
            var u = r(2097),
                m = r(43534);
            i()(() => r.e(260).then(r.bind(r, 44260)), {
                loadableGenerated: {
                    webpack: () => [44260]
                }
            });
            let f = [{
                name: "Swap",
                value: c.Z.swap
            }, {
                name: "Liquidity",
                value: c.Z.liquidity
            }, {
                name: "Vote",
                value: c.Z.vote
            }];

            function p(e) {
                let {
                    children: t
                } = e, r = (0, a.useRouter)();
                (0, m.t)(), (0, u.G)();
                let s = f.findIndex(e => e.value === r.pathname),
                    [i, c] = (0, l.useState)(f[0]);
                return (0, l.useEffect)(() => {
                    c(f[s])
                }, [s]), (0, n.jsx)("div", {
                    className: "pt-8 text-sm xl:pt-10",
                    children: (0, n.jsx)("div", {
                        className: "mx-auto w-full max-w-lg rounded-lg bg-white p-5 pt-4 shadow-card dark:bg-light-dark xs:p-6 xs:pt-5",
                        children: (0, n.jsx)(o.M, {
                            mode: "wait",
                            children: (0, n.jsx)(d.E.div, {
                                initial: "exit",
                                animate: "enter",
                                exit: "exit",
                                variants: function() {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "spring",
                                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5,
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 60;
                                    return {
                                        enter: {
                                            y: 0,
                                            opacity: 1,
                                            transition: {
                                                type: e,
                                                duration: t
                                            }
                                        },
                                        exit: {
                                            y: r,
                                            opacity: 0,
                                            transition: {
                                                type: e,
                                                duration: t
                                            }
                                        }
                                    }
                                }("easeIn", .25),
                                children: t
                            })
                        })
                    })
                })
            }
        },
        59988: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = r(85893),
                l = r(94184),
                s = r.n(l);

            function i(e) {
                let {
                    label: t,
                    value: r,
                    className: l
                } = e;
                return (0, n.jsxs)("div", {
                    className: s()("flex items-center justify-between dark:text-gray-300", l),
                    children: [(0, n.jsx)("span", {
                        className: "font-medium",
                        children: t
                    }), (0, n.jsx)("span", {
                        children: r || "_ _"
                    })]
                })
            }
        },
        87507: function(e, t) {
            "use strict";
            t.Z = {
                home: "/",
                locks: "/locks",
                create: "/create"
            }
        },
        2097: function(e, t, r) {
            "use strict";
            r.d(t, {
                G: function() {
                    return l
                }
            });
            var n = r(1558);
            let l = (0, n.Z)({
                xs: 480,
                sm: 640,
                md: 768,
                lg: 1024,
                xl: 1280,
                "2xl": 1440,
                "3xl": 1780,
                "4xl": 2160
            })
        },
        62476: function(e, t, r) {
            "use strict";
            r.d(t, {
                Q: function() {
                    return s
                }
            });
            var n = r(73161),
                l = r(31407);
            let s = () => {
                var e;
                let {
                    chain: t = l.RJ
                } = (0, n.Hy)();
                return null === (e = t.blockExplorers) || void 0 === e ? void 0 : e.default.url
            }
        },
        82805: function(e, t, r) {
            "use strict";
            r.d(t, {
                W: function() {
                    return a
                },
                h: function() {
                    return i
                }
            });
            var n = r(70794),
                l = r(92077),
                s = r.n(l);
            let i = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++) r[l - 1] = arguments[l];
                    return new n.Z(e).toFormat(...r)
                },
                a = e => e > 999999 ? s()(e).format("0.0a") : i(e, 3)
        },
        8578: function(e, t, r) {
            "use strict";
            r.d(t, {
                g: function() {
                    return n
                }
            });
            let n = (e, t) => Math.round(100 - ((e || 0) - (t || 0)) / (e || 0) * 100) || 0
        },
        65840: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return B
                }
            });
            var n = r(85893),
                l = r(67294),
                s = r(2962),
                i = r(81872),
                a = r(2585),
                o = r(86501),
                d = r(73161),
                c = r(56371),
                u = r(59988),
                m = r(78614),
                f = r(82837),
                p = r(90840),
                v = r(47818),
                x = r(44589),
                h = r(79521),
                g = r(30381),
                k = r.n(g),
                b = r(16598),
                y = r(90305),
                w = r(2248),
                j = r(17357),
                N = r(2891),
                C = r(8578),
                E = r(82805);
            let P = [{
                    Header: "Amount",
                    accessor: "amount",
                    minWidth: 220,
                    maxWidth: 280
                }, {
                    Header: "Status",
                    accessor: "status",
                    minWidth: 100,
                    maxWidth: 180
                }, {
                    Header: "Unlock Date",
                    accessor: "unlockDate",
                    minWidth: 200,
                    maxWidth: 300
                }, {
                    Header: "Unlock",
                    accessor: "unlock",
                    minWidth: 200,
                    maxWidth: 300
                }],
                L = e => {
                    let t = k().unix,
                        r = Number(k()().valueOf().toString().slice(0, 10)),
                        l = r >= Number(null == e ? void 0 : e.unlockTime),
                        s = t(Number(e.unlockTime)).format("MMM Do YY, h:mm A"),
                        a = t(Number(e.unlockTime)).fromNow();
                    return {
                        amount: "".concat((0, E.W)(e.formatted.tokenAmount), " (").concat((0, C.g)(+e.token.totalSupply.formatted, e.formatted.tokenAmount), "%)"),
                        status: (0, n.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, n.jsx)("span", {
                                children: l ? "Unlocked" : "Locked"
                            }), " ", l ? (0, n.jsx)(i.VuA, {}) : (0, n.jsx)(i.OqY, {})]
                        }),
                        unlockDate: s,
                        unlock: a
                    }
                };

            function Z(e) {
                let {
                    locks: t = []
                } = e, r = l.useMemo(() => t.map(L), [t]), s = l.useMemo(() => P, []), {
                    getTableProps: i,
                    getTableBodyProps: a,
                    canPreviousPage: o,
                    canNextPage: d,
                    pageOptions: c,
                    state: u,
                    headerGroups: m,
                    page: f,
                    nextPage: p,
                    previousPage: v,
                    prepareRow: x
                } = (0, h.useTable)({
                    columns: s,
                    data: r,
                    initialState: {
                        pageSize: 5
                    }
                }, h.useSortBy, h.useResizeColumns, h.useFlexLayout, h.usePagination), {
                    pageIndex: g
                } = u;
                return (0, n.jsxs)("div", {
                    className: "",
                    children: [(0, n.jsx)("div", {
                        className: "-mx-0.5 dark:[&_.os-scrollbar_.os-scrollbar-track_.os-scrollbar-handle:before]:!bg-white/50",
                        children: (0, n.jsx)(y.Z, {
                            style: {
                                width: "100%"
                            },
                            autoHide: "never",
                            className: "",
                            children: (0, n.jsx)("div", {
                                className: "px-0.5",
                                children: (0, n.jsxs)("table", { ...i(),
                                    className: "transaction-table w-full border-separate border-0",
                                    children: [(0, n.jsx)("thead", {
                                        className: "text-sm text-gray-500 dark:text-gray-300",
                                        children: m.map((e, t) => (0, l.createElement)("tr", { ...e.getHeaderGroupProps(),
                                            key: t
                                        }, e.headers.map((e, t) => (0, l.createElement)("th", { ...e.getHeaderProps(e.getSortByToggleProps()),
                                            key: t,
                                            className: "group bg-white px-2 py-5 font-normal first:rounded-l-lg last:rounded-r-lg ltr:first:pl-8 ltr:last:pr-8 rtl:first:pr-8 rtl:last:pl-8 dark:bg-light-dark md:px-4"
                                        }, (0, n.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [e.render("Header"), e.canResize && (0, n.jsx)("div", { ...e.getResizerProps(),
                                                className: "resizer ".concat(e.isResizing ? "isResizing" : "")
                                            }), (0, n.jsx)("span", {
                                                className: "ltr:ml-1 rtl:mr-1",
                                                children: e.isSorted ? e.isSortedDesc ? (0, n.jsx)(w._, {}) : (0, n.jsx)(w._, {
                                                    className: "rotate-180"
                                                }) : (0, n.jsx)(w._, {
                                                    className: "rotate-180 opacity-0 transition group-hover:opacity-50"
                                                })
                                            })]
                                        })))))
                                    }), (0, n.jsx)("tbody", { ...a(),
                                        className: "text-xs font-medium text-gray-900 dark:text-white 3xl:text-sm",
                                        children: f.map((e, t) => (x(e), (0, l.createElement)("tr", { ...e.getRowProps(),
                                            key: t,
                                            className: "mb-3 items-center rounded-lg bg-white shadow-card last:mb-0 dark:bg-light-dark"
                                        }, e.cells.map((e, t) => (0, l.createElement)("td", { ...e.getCellProps(),
                                            key: t,
                                            className: "px-2 py-4 tracking-[1px] ltr:first:pl-4 ltr:last:pr-4 rtl:first:pr-8 rtl:last:pl-8 md:px-4 md:py-6 md:ltr:first:pl-8 md:ltr:last:pr-8 3xl:py-5"
                                        }, e.render("Cell"))))))
                                    })]
                                })
                            })
                        })
                    }), (0, n.jsx)("div", {
                        className: "mt-3 flex items-center justify-center rounded-lg bg-white px-5 py-4 text-sm shadow-card dark:bg-light-dark lg:py-6",
                        children: (0, n.jsxs)("div", {
                            className: "flex items-center gap-5",
                            children: [(0, n.jsx)(b.Z, {
                                onClick: () => v(),
                                disabled: !o,
                                title: "Previous",
                                shape: "circle",
                                variant: "transparent",
                                size: "small",
                                className: "text-gray-700 disabled:text-gray-400 dark:text-white disabled:dark:text-gray-400",
                                children: (0, n.jsx)(N.S, {
                                    className: "h-auto w-4 rtl:rotate-180"
                                })
                            }), (0, n.jsxs)("div", {
                                children: ["Page", " ", (0, n.jsxs)("strong", {
                                    className: "font-semibold",
                                    children: [g + 1, " of ", c.length]
                                }), " "]
                            }), (0, n.jsx)(b.Z, {
                                onClick: () => p(),
                                disabled: !d,
                                title: "Next",
                                shape: "circle",
                                variant: "transparent",
                                size: "small",
                                className: "text-gray-700 disabled:text-gray-400 dark:text-white disabled:dark:text-gray-400",
                                children: (0, n.jsx)(j.R, {
                                    className: "h-auto w-4 rtl:rotate-180 "
                                })
                            })]
                        })
                    })]
                })
            }
            var S = r(72095),
                R = r(62476),
                _ = r(21478);
            let z = e => {
                var t, r, f, h, g, k, b, y, w, j, N, P, L, z, B, M, W, H, O, A, T, I;
                let {
                    address: U,
                    chainId: Y
                } = e;
                Y && (Y = +Y);
                let q = (0, l.useRef)(!1),
                    [D, F] = (0, l.useState)(!0),
                    [$, G] = (0, l.useState)(),
                    [Q, J] = (0, l.useState)([]);
                return (0, l.useLayoutEffect)(() => {
                    q.current || (q.current = !0, (async () => {
                        if (!U || !(0, c.isAddress)(U)) {
                            o.ZP.error("Invalid pair address");
                            return
                        }
                        let e = o.ZP.loading("Loading...");
                        try {
                            var t, r;
                            F(!0);
                            let [n, l, [s, i]] = await Promise.all([(0, d.EC)({
                                address: U,
                                chainId: Y
                            }), (0, p._)(U, Y), (0, d.JH)({
                                contracts: [{
                                    address: U,
                                    abi: d.em,
                                    functionName: "balanceOf",
                                    args: [(0, v.x)().address],
                                    chainId: Y
                                }, { ...(0, v.x)(),
                                    functionName: "getDepositsByTokenAddress",
                                    args: [U],
                                    chainId: Y
                                }]
                            })]);
                            if (n = (0, _.n)(n), !l.isLiquidityPool || !l.token0 || !l.token1) throw Error("Can't find pair! Please double check the pair address");
                            let a = {
                                    abi: d.em,
                                    functionName: "balanceOf",
                                    args: [n.address],
                                    chainId: Y
                                },
                                [
                                    [u, m]
                                ] = await Promise.all([(0, d.JH)({
                                    contracts: [{ ...a,
                                        address: l.token0.address
                                    }, { ...a,
                                        address: l.token1.address
                                    }]
                                })]),
                                f = (await Promise.all(i.map(x.Y))).reverse();
                            s = +(0, c.formatUnits)(s.toString(), n.decimals);
                            let h = {
                                token0: +(0, c.formatUnits)(u.toString(), l.token0.decimals),
                                token1: +(0, c.formatUnits)(m.toString(), l.token1.decimals)
                            };
                            G({
                                token: n,
                                pair: l,
                                balance: s,
                                tokenBalance: h
                            }), J(f), o.ZP.success("".concat(null === (t = l.token0) || void 0 === t ? void 0 : t.symbol, "/").concat(null === (r = l.token1) || void 0 === r ? void 0 : r.symbol, " LP"), {
                                id: e
                            })
                        } catch (g) {
                            o.ZP.error((null == g ? void 0 : g.message) || "An error has occurred while finding pair", {
                                id: e
                            })
                        } finally {
                            F(!1)
                        }
                    })())
                }, [U, Y]), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(s.PB, {
                        title: "Pair"
                    }), !D && !!Q.length && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)(m.Z, {
                            children: [(0, n.jsxs)("div", {
                                className: "mb-5 border-b border-dashed border-gray-200 pb-5 dark:border-gray-800 xs:mb-7 xs:pb-6",
                                children: [(0, n.jsx)("div", {
                                    className: "text-center text-gray-300",
                                    children: (0, n.jsxs)("span", {
                                        className: "",
                                        children: [null == $ ? void 0 : $.token.name, " (", null == $ ? void 0 : $.token.symbol, ") LP"]
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: "mt-5 grid grid-cols-2 gap-2 py-3 dark:text-gray-300",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex flex-col gap-2",
                                        children: [(0, n.jsx)("h4", {
                                            className: "",
                                            children: null == $ ? void 0 : null === (t = $.pair) || void 0 === t ? void 0 : null === (r = t.token0) || void 0 === r ? void 0 : r.symbol
                                        }), (0, n.jsxs)(S.Z, {
                                            href: "".concat((0, R.Q)(), "/address/").concat(null == $ ? void 0 : null === (f = $.pair) || void 0 === f ? void 0 : null === (h = f.token0) || void 0 === h ? void 0 : h.address),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [null == $ ? void 0 : null === (g = $.pair) || void 0 === g ? void 0 : null === (k = g.token0) || void 0 === k ? void 0 : k.address.slice(0, 6), "...", null == $ ? void 0 : null === (b = $.pair) || void 0 === b ? void 0 : null === (y = b.token0) || void 0 === y ? void 0 : y.address.slice(-4)]
                                        }), (0, n.jsxs)("div", {
                                            className: "flex items-center gap-2 text-sm",
                                            children: [(0, n.jsx)(i.OqY, {}), (0, E.W)((Number(null == $ ? void 0 : $.tokenBalance.token0) || 0) * ((0, C.g)(Number(null == $ ? void 0 : $.token.totalSupply.formatted), Number(null == $ ? void 0 : $.balance)) || 0) / 100)]
                                        }), (0, n.jsxs)("div", {
                                            className: "flex items-center gap-2 text-sm",
                                            children: [(0, n.jsx)(a.aZy, {}), (0, E.W)(Number(null == $ ? void 0 : $.tokenBalance.token0)), " (", (0, C.g)(Number(null == $ ? void 0 : null === (w = $.pair) || void 0 === w ? void 0 : null === (j = w.token0) || void 0 === j ? void 0 : j.totalSupply.formatted), Number(null == $ ? void 0 : $.tokenBalance.token0)), "%)"]
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "flex flex-col items-end gap-2",
                                        children: [(0, n.jsx)("h4", {
                                            className: "",
                                            children: null == $ ? void 0 : null === (N = $.pair) || void 0 === N ? void 0 : null === (P = N.token1) || void 0 === P ? void 0 : P.symbol
                                        }), (0, n.jsxs)(S.Z, {
                                            href: "".concat((0, R.Q)(), "/address/").concat(null == $ ? void 0 : null === (L = $.pair) || void 0 === L ? void 0 : null === (z = L.token1) || void 0 === z ? void 0 : z.address),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [null == $ ? void 0 : null === (B = $.pair) || void 0 === B ? void 0 : null === (M = B.token1) || void 0 === M ? void 0 : M.address.slice(0, 6), "...", null == $ ? void 0 : null === (W = $.pair) || void 0 === W ? void 0 : null === (H = W.token1) || void 0 === H ? void 0 : H.address.slice(-4)]
                                        }), (0, n.jsxs)("div", {
                                            className: "flex items-center gap-2 text-sm",
                                            children: [(0, E.W)((Number(null == $ ? void 0 : $.tokenBalance.token1) || 0) * ((0, C.g)(Number(null == $ ? void 0 : $.token.totalSupply.formatted), Number(null == $ ? void 0 : $.balance)) || 0) / 100), (0, n.jsx)(i.OqY, {})]
                                        }), (0, n.jsxs)("div", {
                                            className: "flex items-center gap-2 text-sm",
                                            children: [(0, E.W)(Number(null == $ ? void 0 : $.tokenBalance.token1)), " (", (0, C.g)(Number(null == $ ? void 0 : null === (O = $.pair) || void 0 === O ? void 0 : null === (A = O.token1) || void 0 === A ? void 0 : A.totalSupply.formatted), Number(null == $ ? void 0 : $.tokenBalance.token1)), "%)", (0, n.jsx)(a.aZy, {})]
                                        })]
                                    })]
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "flex flex-col gap-4 xs:gap-[18px]",
                                children: [(0, n.jsx)(u.Z, {
                                    label: "Pair",
                                    value: (0, n.jsxs)(S.Z, {
                                        href: "".concat((0, R.Q)(), "/address/").concat(null == $ ? void 0 : $.token.address),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: [null == $ ? void 0 : $.token.address.slice(0, 5), "...", null == $ ? void 0 : $.token.address.slice(-4)]
                                    })
                                }), (0, n.jsx)(u.Z, {
                                    label: "Locked",
                                    value: "".concat((0, C.g)(Number(null == $ ? void 0 : $.token.totalSupply.formatted), Number(null == $ ? void 0 : $.balance)), "%")
                                }), (0, n.jsx)(u.Z, {
                                    label: "Total LP tokens",
                                    value: (0, E.h)(null == $ ? void 0 : null === (T = $.token) || void 0 === T ? void 0 : null === (I = T.totalSupply) || void 0 === I ? void 0 : I.formatted, 3)
                                }), (0, n.jsx)(u.Z, {
                                    label: "Total locked LP",
                                    value: (0, E.h)(null == $ ? void 0 : $.balance, 3)
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: "mt-6 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-12",
                            children: (0, n.jsx)("div", {
                                className: "col-span-full col-start-1",
                                children: (0, n.jsx)(Z, {
                                    locks: Q
                                })
                            })
                        })]
                    })]
                })
            };
            z.getLayout = function(e) {
                return (0, n.jsx)(f.Z, {
                    children: e
                })
            }, z.getInitialProps = async e => {
                let {
                    query: t
                } = e, {
                    address: r,
                    chainId: n
                } = t;
                return {
                    address: r,
                    chainId: n
                }
            };
            var B = z
        },
        1558: function(e, t, r) {
            "use strict";
            var n = r(67294),
                l = r(88387);
            t.Z = function(e) {
                return void 0 === e && (e = {
                        laptopL: 1440,
                        laptop: 1024,
                        tablet: 768
                    }),
                    function() {
                        var t = n.useState(l.isBrowser ? window.innerWidth : 0),
                            r = t[0],
                            s = t[1];
                        n.useEffect(function() {
                            var e = function() {
                                s(window.innerWidth)
                            };
                            return e(), l.on(window, "resize", e),
                                function() {
                                    l.off(window, "resize", e)
                                }
                        });
                        var i = n.useMemo(function() {
                            return Object.entries(e).sort(function(e, t) {
                                return e[1] >= t[1] ? 1 : -1
                            })
                        }, [e]);
                        return i.reduce(function(e, t) {
                            var n = t[0];
                            return r >= t[1] ? n : e
                        }, i[0][0])
                    }
            }
        },
        88387: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isNavigator = t.isBrowser = t.off = t.on = t.noop = void 0, t.noop = function() {}, t.on = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                e && e.addEventListener && e.addEventListener.apply(e, t)
            }, t.off = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                e && e.removeEventListener && e.removeEventListener.apply(e, t)
            }, t.isBrowser = "undefined" != typeof window, t.isNavigator = "undefined" != typeof navigator
        },
        11544: function(e, t, r) {
            "use strict";
            r.d(t, {
                M: function() {
                    return g
                }
            });
            var n = r(67294),
                l = r(49304),
                s = r(6337),
                i = r(4454),
                a = r(240),
                o = r(96681);
            class d extends n.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let r = this.props.sizeRef.current;
                        r.height = t.offsetHeight || 0, r.width = t.offsetWidth || 0, r.top = t.offsetTop, r.left = t.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function c({
                children: e,
                isPresent: t
            }) {
                let r = (0, n.useId)(),
                    l = (0, n.useRef)(null),
                    s = (0, n.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    });
                return (0, n.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: n,
                        top: i,
                        left: a
                    } = s.current;
                    if (t || !l.current || !e || !n) return;
                    l.current.dataset.motionPopId = r;
                    let o = document.createElement("style");
                    return document.head.appendChild(o), o.sheet && o.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${i}px !important;
            left: ${a}px !important;
          }
        `), () => {
                        document.head.removeChild(o)
                    }
                }, [t]), n.createElement(d, {
                    isPresent: t,
                    childRef: l,
                    sizeRef: s
                }, n.cloneElement(e, {
                    ref: l
                }))
            }
            let u = ({
                children: e,
                initial: t,
                isPresent: r,
                onExitComplete: l,
                custom: s,
                presenceAffectsLayout: i,
                mode: d
            }) => {
                let u = (0, o.h)(m),
                    f = (0, n.useId)(),
                    p = (0, n.useMemo)(() => ({
                        id: f,
                        initial: t,
                        isPresent: r,
                        custom: s,
                        onExitComplete: e => {
                            for (let t of (u.set(e, !0), u.values()))
                                if (!t) return;
                            l && l()
                        },
                        register: e => (u.set(e, !1), () => u.delete(e))
                    }), i ? void 0 : [r]);
                return (0, n.useMemo)(() => {
                    u.forEach((e, t) => u.set(t, !1))
                }, [r]), n.useEffect(() => {
                    r || u.size || !l || l()
                }, [r]), "popLayout" === d && (e = n.createElement(c, {
                    isPresent: r
                }, e)), n.createElement(a.O.Provider, {
                    value: p
                }, e)
            };

            function m() {
                return new Map
            }
            var f = r(25364),
                p = r(58868),
                v = r(65411),
                x = r(16034);
            let h = e => e.key || "",
                g = ({
                    children: e,
                    custom: t,
                    initial: r = !0,
                    onExitComplete: a,
                    exitBeforeEnter: o,
                    presenceAffectsLayout: d = !0,
                    mode: c = "sync"
                }) => {
                    o && (c = "wait", (0, x.O)(!1, "Replace exitBeforeEnter with mode='wait'"));
                    let [m] = (0, s.N)(), g = (0, n.useContext)(f.p).forceRender;
                    g && (m = g);
                    let k = (0, i.t)(),
                        b = function(e) {
                            let t = [];
                            return n.Children.forEach(e, e => {
                                (0, n.isValidElement)(e) && t.push(e)
                            }), t
                        }(e),
                        y = b,
                        w = new Set,
                        j = (0, n.useRef)(y),
                        N = (0, n.useRef)(new Map).current,
                        C = (0, n.useRef)(!0);
                    if ((0, p.L)(() => {
                            C.current = !1,
                                function(e, t) {
                                    e.forEach(e => {
                                        let r = h(e);
                                        t.set(r, e)
                                    })
                                }(b, N), j.current = y
                        }), (0, v.z)(() => {
                            C.current = !0, N.clear(), w.clear()
                        }), C.current) return n.createElement(n.Fragment, null, y.map(e => n.createElement(u, {
                        key: h(e),
                        isPresent: !0,
                        initial: !!r && void 0,
                        presenceAffectsLayout: d,
                        mode: c
                    }, e)));
                    y = [...y];
                    let E = j.current.map(h),
                        P = b.map(h),
                        L = E.length;
                    for (let Z = 0; Z < L; Z++) {
                        let S = E[Z]; - 1 === P.indexOf(S) && w.add(S)
                    }
                    return "wait" === c && w.size && (y = []), w.forEach(e => {
                        if (-1 !== P.indexOf(e)) return;
                        let r = N.get(e);
                        if (!r) return;
                        let l = E.indexOf(e),
                            s = () => {
                                N.delete(e), w.delete(e);
                                let t = j.current.findIndex(t => t.key === e);
                                if (j.current.splice(t, 1), !w.size) {
                                    if (j.current = b, !1 === k.current) return;
                                    m(), a && a()
                                }
                            };
                        y.splice(l, 0, n.createElement(u, {
                            key: h(r),
                            isPresent: !1,
                            onExitComplete: s,
                            custom: t,
                            presenceAffectsLayout: d,
                            mode: c
                        }, r))
                    }), y = y.map(e => {
                        let t = e.key;
                        return w.has(t) ? e : n.createElement(u, {
                            key: h(e),
                            isPresent: !0,
                            presenceAffectsLayout: d,
                            mode: c
                        }, e)
                    }), "production" !== l.O && "wait" === c && y.length > 1 && console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'), n.createElement(n.Fragment, null, w.size ? y : y.map(e => (0, n.cloneElement)(e)))
                }
        },
        6337: function(e, t, r) {
            "use strict";
            r.d(t, {
                N: function() {
                    return i
                }
            });
            var n = r(54735),
                l = r(67294),
                s = r(4454);

            function i() {
                let e = (0, s.t)(),
                    [t, r] = (0, l.useState)(0),
                    i = (0, l.useCallback)(() => {
                        e.current && r(t + 1)
                    }, [t]),
                    a = (0, l.useCallback)(() => n.ZP.postRender(i), [i]);
                return [a, t]
            }
        },
        4454: function(e, t, r) {
            "use strict";
            r.d(t, {
                t: function() {
                    return s
                }
            });
            var n = r(67294),
                l = r(58868);

            function s() {
                let e = (0, n.useRef)(!1);
                return (0, l.L)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
        }
    },
    function(e) {
        e.O(0, [994, 980, 171, 664, 962, 794, 499, 918, 774, 888, 179], function() {
            return e(e.s = 39600)
        }), _N_E = e.O()
    }
]);