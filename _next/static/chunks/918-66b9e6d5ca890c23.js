"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [918, 95], {
        72095: function(e, t, n) {
            var a = n(85893),
                i = n(41664),
                s = n.n(i);
            let p = e => {
                let { ...t
                } = e;
                return (0, a.jsx)(s(), { ...t
                })
            };
            t.Z = p
        },
        47818: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return s
                }
            });
            var a = n(2044),
                i = [{
                    inputs: [],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "string",
                        name: "message",
                        type: "string"
                    }],
                    name: "Log",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    }],
                    name: "LogBytes",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "previousOwner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "OwnershipTransferred",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "tokenAddress",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "unlockTime",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "depositId",
                        type: "uint256"
                    }],
                    name: "TokensLocked",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "tokenAddress",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "receiver",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "TokensWithdrawn",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "lockId",
                        type: "uint256"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "receiver",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "TransferLockOwnership",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "allDepositIds",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "depositId",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "depositsByTokenAddress",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "depositsByWithdrawalAddress",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "ethFee",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getAllDepositIds",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "",
                        type: "uint256[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_id",
                        type: "uint256"
                    }],
                    name: "getDepositDetails",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_tokenAddress",
                        type: "address"
                    }],
                    name: "getDepositsByTokenAddress",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "",
                        type: "uint256[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_withdrawalAddress",
                        type: "address"
                    }],
                    name: "getDepositsByWithdrawalAddress",
                    outputs: [{
                        internalType: "uint256[]",
                        name: "",
                        type: "uint256[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_tokenAddress",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_walletAddress",
                        type: "address"
                    }],
                    name: "getTokenBalanceByAddress",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_tokenAddress",
                        type: "address"
                    }],
                    name: "getTotalTokenBalance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_tokenAddress",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "_unlockTime",
                        type: "uint256"
                    }, {
                        internalType: "bool",
                        name: "_feeInEth",
                        type: "bool"
                    }],
                    name: "lockTokens",
                    outputs: [{
                        internalType: "uint256",
                        name: "_id",
                        type: "uint256"
                    }],
                    stateMutability: "payable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "lockedToken",
                    outputs: [{
                        internalType: "address",
                        name: "tokenAddress",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "withdrawalAddress",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenAmount",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "withdrawn",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "unlockTime",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "lpFeePercent",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "fee",
                        type: "uint256"
                    }],
                    name: "setEthFee",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address payable",
                        name: "_address",
                        type: "address"
                    }],
                    name: "setFeeWithdrawalAddress",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "percent",
                        type: "uint256"
                    }],
                    name: "setLpFee",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalEthFees",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_id",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "_newWithdrawalAddress",
                        type: "address"
                    }],
                    name: "transferLockOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "walletTokenBalance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "withdrawFees",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_id",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "withdrawTokens",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }];
            let s = () => {
                let e = (0, a.L)();
                return {
                    chainId: e,
                    address: ({
                        1: "0x3c32384c72fec2C2E22Eb1Edc3634CE49dd6D528",
                        9117: "0x25d4e7fe624FcC6E7F0b52D142F40c9ACEcF039a",
                        42161: "0x25d4e7fe624FcC6E7F0b52D142F40c9ACEcF039a",
                        324: "0x25d4e7fe624FcC6E7F0b52D142F40c9ACEcF039a",
                        5: "0xAC8574A18788531e0753Ee6202e4fC172a42C067",
                        917: "0x0000000000000000000000000000000000000000"
                    })[e],
                    abi: i
                }
            }
        },
        82837: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return T
                }
            });
            var a = n(85893),
                i = n(5152),
                s = n.n(i),
                p = n(48578),
                u = n(19035),
                y = n(99542),
                r = n(43534);
            let d = s()(() => Promise.all([n.e(994), n.e(171), n.e(99), n.e(332), n.e(225)]).then(n.bind(n, 62225)), {
                    loadableGenerated: {
                        webpack: () => [62225]
                    },
                    loading: () => (0, a.jsx)(c, {})
                }),
                l = s()(() => Promise.all([n.e(994), n.e(171), n.e(99), n.e(333), n.e(584)]).then(n.bind(n, 42454)), {
                    loadableGenerated: {
                        webpack: () => [42454]
                    },
                    loading: () => (0, a.jsx)(c, {})
                }),
                o = s()(() => Promise.all([n.e(994), n.e(171), n.e(99), n.e(323), n.e(333), n.e(1)]).then(n.bind(n, 26001)), {
                    loadableGenerated: {
                        webpack: () => [26001]
                    },
                    loading: () => (0, a.jsx)(c, {})
                }),
                m = s()(() => Promise.all([n.e(994), n.e(171), n.e(99), n.e(333), n.e(378)]).then(n.bind(n, 45935)), {
                    loadableGenerated: {
                        webpack: () => [45935]
                    },
                    loading: () => (0, a.jsx)(c, {})
                });

            function c() {
                return (0, a.jsx)("div", {
                    className: "fixed z-50 grid h-full w-full place-content-center",
                    children: (0, a.jsx)(y.Z, {
                        variant: "blink"
                    })
                })
            }

            function T(e) {
                let {
                    children: t,
                    contentClassName: n
                } = e, i = (0, r.t)(), {
                    layout: s
                } = (0, p.$)();
                return i ? s === u.O.MINIMAL ? (0, a.jsx)(d, {
                    children: t
                }) : s === u.O.RETRO ? (0, a.jsx)(o, {
                    contentClassName: n,
                    children: t
                }) : s === u.O.CLASSIC ? (0, a.jsx)(l, {
                    contentClassName: n,
                    children: t
                }) : (0, a.jsx)(m, {
                    contentClassName: n,
                    children: t
                }) : null
            }
        },
        43534: function(e, t, n) {
            n.d(t, {
                t: function() {
                    return i
                }
            });
            var a = n(67294);

            function i() {
                let [e, t] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => t(!0), []), e
            }
        },
        21478: function(e, t, n) {
            n.d(t, {
                n: function() {
                    return i
                }
            });
            var a = n(56371);
            let i = e => ({ ...e,
                totalSupply: { ...e.totalSupply,
                    formatted: (0, a.formatUnits)(e.totalSupply.value.toString(), e.decimals)
                }
            })
        },
        2044: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return s
                }
            });
            var a = n(73161),
                i = n(31407);
            let s = () => {
                let {
                    chain: e = i.RJ
                } = (0, a.Hy)();
                return e.id
            }
        },
        44589: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return y
                }
            });
            var a = n(56371),
                i = n(73161),
                s = n(47818),
                p = n(90840),
                u = n(21478);
            let y = async e => {
                let t = await (0, i.a4)({ ...(0, s.x)(),
                        functionName: "getDepositDetails",
                        args: [e]
                    }),
                    [n, y, r, d, l] = t,
                    [o, m] = await Promise.all([(0, i.EC)({
                        address: n
                    }), (0, p._)(n)]),
                    c = e => (0, a.formatUnits)(e.toString(), o.decimals);
                return {
                    id: parseFloat(e.toString()),
                    token: (0, u.n)(o),
                    withdrawalAddress: y,
                    tokenAmount: r,
                    withdrawn: d,
                    unlockTime: l,
                    formatted: {
                        tokenAmount: +c(r),
                        withdrawn: +c(d),
                        balance: +c(r) - +c(d)
                    },
                    pair: m
                }
            }
        },
        90840: function(e, t, n) {
            n.d(t, {
                _: function() {
                    return u
                }
            });
            var a = n(73161),
                i = n(56371),
                s = [{
                    inputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount0",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount1",
                        type: "uint256"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "Burn",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount0",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount1",
                        type: "uint256"
                    }],
                    name: "Mint",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount0In",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount1In",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount0Out",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount1Out",
                        type: "uint256"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "Swap",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint112",
                        name: "reserve0",
                        type: "uint112"
                    }, {
                        indexed: !1,
                        internalType: "uint112",
                        name: "reserve1",
                        type: "uint112"
                    }],
                    name: "Sync",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Transfer",
                    type: "event"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "DOMAIN_SEPARATOR",
                    outputs: [{
                        internalType: "bytes32",
                        name: "",
                        type: "bytes32"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "MINIMUM_LIQUIDITY",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "PERMIT_TYPEHASH",
                    outputs: [{
                        internalType: "bytes32",
                        name: "",
                        type: "bytes32"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "burn",
                    outputs: [{
                        internalType: "uint256",
                        name: "amount0",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amount1",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        internalType: "uint8",
                        name: "",
                        type: "uint8"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "factory",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "getReserves",
                    outputs: [{
                        internalType: "uint112",
                        name: "_reserve0",
                        type: "uint112"
                    }, {
                        internalType: "uint112",
                        name: "_reserve1",
                        type: "uint112"
                    }, {
                        internalType: "uint32",
                        name: "_blockTimestampLast",
                        type: "uint32"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "_token0",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "_token1",
                        type: "address"
                    }],
                    name: "initialize",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "kLast",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "mint",
                    outputs: [{
                        internalType: "uint256",
                        name: "liquidity",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "name",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "nonces",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "deadline",
                        type: "uint256"
                    }, {
                        internalType: "uint8",
                        name: "v",
                        type: "uint8"
                    }, {
                        internalType: "bytes32",
                        name: "r",
                        type: "bytes32"
                    }, {
                        internalType: "bytes32",
                        name: "s",
                        type: "bytes32"
                    }],
                    name: "permit",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "price0CumulativeLast",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "price1CumulativeLast",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "skim",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "uint256",
                        name: "amount0Out",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "amount1Out",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    }],
                    name: "swap",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [],
                    name: "sync",
                    outputs: [],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "token0",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "token1",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    constant: !1,
                    inputs: [{
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }],
                p = n(21478);
            let u = async (e, t) => {
                if (!e) throw Error("Address is not defined");
                if (!(0, i.isAddress)(e)) throw Error("Invalid address");
                try {
                    let n = {
                            address: e,
                            abi: s,
                            chainId: t
                        },
                        u = await (0, a.JH)({
                            contracts: [{ ...n,
                                functionName: "token0"
                            }, { ...n,
                                functionName: "token1"
                            }]
                        }),
                        y = await Promise.allSettled([(0, a.EC)({
                            address: u[0],
                            chainId: t
                        }), (0, a.EC)({
                            address: u[1],
                            chainId: t
                        })]);
                    if ("fulfilled" === y[0].status && "fulfilled" === y[1].status) return {
                        token0: (0, p.n)(y[0].value),
                        token1: (0, p.n)(y[1].value),
                        isLiquidityPool: !0
                    };
                    throw Error("Something went wrong")
                } catch (d) {
                    try {
                        return {
                            token0: void 0,
                            token1: void 0,
                            isLiquidityPool: !1
                        }
                    } catch (r) {
                        throw console.log("getPair", r), Error(null == r ? void 0 : r.message)
                    }
                }
            }
        }
    }
]);