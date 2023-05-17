(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [592], {
        65987: function(t) {
            "use strict";
            var e = {
                single_source_shortest_paths: function(t, n, r) {
                    var o, i, u, a, s, l, f, c = {},
                        h = {};
                    h[n] = 0;
                    var g = e.PriorityQueue.make();
                    for (g.push(n, 0); !g.empty();)
                        for (u in i = (o = g.pop()).value, a = o.cost, s = t[i] || {}) s.hasOwnProperty(u) && (l = a + s[u], f = h[u], (void 0 === h[u] || f > l) && (h[u] = l, g.push(u, l), c[u] = i));
                    if (void 0 !== r && void 0 === h[r]) throw Error(["Could not find a path from ", n, " to ", r, "."].join(""));
                    return c
                },
                extract_shortest_path_from_predecessor_list: function(t, e) {
                    for (var n = [], r = e; r;) n.push(r), t[r], r = t[r];
                    return n.reverse(), n
                },
                find_path: function(t, n, r) {
                    var o = e.single_source_shortest_paths(t, n, r);
                    return e.extract_shortest_path_from_predecessor_list(o, r)
                },
                PriorityQueue: {
                    make: function(t) {
                        var n, r = e.PriorityQueue,
                            o = {};
                        for (n in t = t || {}, r) r.hasOwnProperty(n) && (o[n] = r[n]);
                        return o.queue = [], o.sorter = t.sorter || r.default_sorter, o
                    },
                    default_sorter: function(t, e) {
                        return t.cost - e.cost
                    },
                    push: function(t, e) {
                        this.queue.push({
                            value: t,
                            cost: e
                        }), this.queue.sort(this.sorter)
                    },
                    pop: function() {
                        return this.queue.shift()
                    },
                    empty: function() {
                        return 0 === this.queue.length
                    }
                }
            };
            t.exports = e
        },
        62378: function(t) {
            "use strict";
            t.exports = function(t) {
                for (var e = [], n = t.length, r = 0; r < n; r++) {
                    var o = t.charCodeAt(r);
                    if (o >= 55296 && o <= 56319 && n > r + 1) {
                        var i = t.charCodeAt(r + 1);
                        i >= 56320 && i <= 57343 && (o = (o - 55296) * 1024 + i - 56320 + 65536, r += 1)
                    }
                    if (o < 128) {
                        e.push(o);
                        continue
                    }
                    if (o < 2048) {
                        e.push(o >> 6 | 192), e.push(63 & o | 128);
                        continue
                    }
                    if (o < 55296 || o >= 57344 && o < 65536) {
                        e.push(o >> 12 | 224), e.push(o >> 6 & 63 | 128), e.push(63 & o | 128);
                        continue
                    }
                    if (o >= 65536 && o <= 1114111) {
                        e.push(o >> 18 | 240), e.push(o >> 12 & 63 | 128), e.push(o >> 6 & 63 | 128), e.push(63 & o | 128);
                        continue
                    }
                    e.push(239, 191, 189)
                }
                return new Uint8Array(e).buffer
            }
        },
        92592: function(t, e, n) {
            let r = n(47138),
                o = n(95115),
                i = n(6907),
                u = n(93776);

            function a(t, e, n, i, u) {
                let a = [].slice.call(arguments, 1),
                    s = a.length,
                    l = "function" == typeof a[s - 1];
                if (!l && !r()) throw Error("Callback required as last argument");
                if (l) {
                    if (s < 2) throw Error("Too few arguments provided");
                    2 === s ? (u = n, n = e, e = i = void 0) : 3 === s && (e.getContext && void 0 === u ? (u = i, i = void 0) : (u = i, i = n, n = e, e = void 0))
                } else {
                    if (s < 1) throw Error("Too few arguments provided");
                    return 1 === s ? (n = e, e = i = void 0) : 2 !== s || e.getContext || (i = n, n = e, e = void 0), new Promise(function(r, u) {
                        try {
                            let a = o.create(n, i);
                            r(t(a, e, i))
                        } catch (s) {
                            u(s)
                        }
                    })
                }
                try {
                    let f = o.create(n, i);
                    u(null, t(f, e, i))
                } catch (c) {
                    u(c)
                }
            }
            e.create = o.create, e.toCanvas = a.bind(null, i.render), e.toDataURL = a.bind(null, i.renderToDataURL), e.toString = a.bind(null, function(t, e, n) {
                return u.render(t, n)
            })
        },
        47138: function(t) {
            t.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        21845: function(t, e, n) {
            let r = n(10242).getSymbolSize;
            e.getRowColCoords = function(t) {
                if (1 === t) return [];
                let e = Math.floor(t / 7) + 2,
                    n = r(t),
                    o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * e - 2)),
                    i = [n - 7];
                for (let u = 1; u < e - 1; u++) i[u] = i[u - 1] - o;
                return i.push(6), i.reverse()
            }, e.getPositions = function(t) {
                let n = [],
                    r = e.getRowColCoords(t),
                    o = r.length;
                for (let i = 0; i < o; i++)
                    for (let u = 0; u < o; u++)(0 !== i || 0 !== u) && (0 !== i || u !== o - 1) && (i !== o - 1 || 0 !== u) && n.push([r[i], r[u]]);
                return n
            }
        },
        8260: function(t, e, n) {
            let r = n(76910),
                o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function i(t) {
                this.mode = r.ALPHANUMERIC, this.data = t
            }
            i.getBitsLength = function(t) {
                return 11 * Math.floor(t / 2) + 6 * (t % 2)
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(t) {
                let e;
                for (e = 0; e + 2 <= this.data.length; e += 2) {
                    let n = 45 * o.indexOf(this.data[e]);
                    n += o.indexOf(this.data[e + 1]), t.put(n, 11)
                }
                this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6)
            }, t.exports = i
        },
        97245: function(t) {
            function e() {
                this.buffer = [], this.length = 0
            }
            e.prototype = {
                get: function(t) {
                    return (this.buffer[Math.floor(t / 8)] >>> 7 - t % 8 & 1) == 1
                },
                put: function(t, e) {
                    for (let n = 0; n < e; n++) this.putBit((t >>> e - n - 1 & 1) == 1)
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(t) {
                    let e = Math.floor(this.length / 8);
                    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
                }
            }, t.exports = e
        },
        73280: function(t) {
            function e(t) {
                if (!t || t < 1) throw Error("BitMatrix size must be defined and greater than 0");
                this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t)
            }
            e.prototype.set = function(t, e, n, r) {
                let o = t * this.size + e;
                this.data[o] = n, r && (this.reservedBit[o] = !0)
            }, e.prototype.get = function(t, e) {
                return this.data[t * this.size + e]
            }, e.prototype.xor = function(t, e, n) {
                this.data[t * this.size + e] ^= n
            }, e.prototype.isReserved = function(t, e) {
                return this.reservedBit[t * this.size + e]
            }, t.exports = e
        },
        43424: function(t, e, n) {
            let r = n(62378),
                o = n(76910);

            function i(t) {
                this.mode = o.BYTE, "string" == typeof t && (t = r(t)), this.data = new Uint8Array(t)
            }
            i.getBitsLength = function(t) {
                return 8 * t
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(t) {
                for (let e = 0, n = this.data.length; e < n; e++) t.put(this.data[e], 8)
            }, t.exports = i
        },
        35393: function(t, e, n) {
            let r = n(64908),
                o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            e.getBlocksCount = function(t, e) {
                switch (e) {
                    case r.L:
                        return o[(t - 1) * 4 + 0];
                    case r.M:
                        return o[(t - 1) * 4 + 1];
                    case r.Q:
                        return o[(t - 1) * 4 + 2];
                    case r.H:
                        return o[(t - 1) * 4 + 3];
                    default:
                        return
                }
            }, e.getTotalCodewordsCount = function(t, e) {
                switch (e) {
                    case r.L:
                        return i[(t - 1) * 4 + 0];
                    case r.M:
                        return i[(t - 1) * 4 + 1];
                    case r.Q:
                        return i[(t - 1) * 4 + 2];
                    case r.H:
                        return i[(t - 1) * 4 + 3];
                    default:
                        return
                }
            }
        },
        64908: function(t, e) {
            e.L = {
                bit: 1
            }, e.M = {
                bit: 0
            }, e.Q = {
                bit: 3
            }, e.H = {
                bit: 2
            }, e.isValid = function(t) {
                return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4
            }, e.from = function(t, n) {
                if (e.isValid(t)) return t;
                try {
                    return function(t) {
                        if ("string" != typeof t) throw Error("Param is not a string");
                        let n = t.toLowerCase();
                        switch (n) {
                            case "l":
                            case "low":
                                return e.L;
                            case "m":
                            case "medium":
                                return e.M;
                            case "q":
                            case "quartile":
                                return e.Q;
                            case "h":
                            case "high":
                                return e.H;
                            default:
                                throw Error("Unknown EC Level: " + t)
                        }
                    }(t)
                } catch (r) {
                    return n
                }
            }
        },
        76526: function(t, e, n) {
            let r = n(10242).getSymbolSize;
            e.getPositions = function(t) {
                let e = r(t);
                return [
                    [0, 0],
                    [e - 7, 0],
                    [0, e - 7]
                ]
            }
        },
        61642: function(t, e, n) {
            let r = n(10242),
                o = r.getBCHDigit(1335);
            e.getEncodedBits = function(t, e) {
                let n = t.bit << 3 | e,
                    i = n << 10;
                for (; r.getBCHDigit(i) - o >= 0;) i ^= 1335 << r.getBCHDigit(i) - o;
                return (n << 10 | i) ^ 21522
            }
        },
        69729: function(t, e) {
            let n = new Uint8Array(512),
                r = new Uint8Array(256);
            ! function() {
                let t = 1;
                for (let e = 0; e < 255; e++) n[e] = t, r[t] = e, 256 & (t <<= 1) && (t ^= 285);
                for (let o = 255; o < 512; o++) n[o] = n[o - 255]
            }(), e.log = function(t) {
                if (t < 1) throw Error("log(" + t + ")");
                return r[t]
            }, e.exp = function(t) {
                return n[t]
            }, e.mul = function(t, e) {
                return 0 === t || 0 === e ? 0 : n[r[t] + r[e]]
            }
        },
        35442: function(t, e, n) {
            let r = n(76910),
                o = n(10242);

            function i(t) {
                this.mode = r.KANJI, this.data = t
            }
            i.getBitsLength = function(t) {
                return 13 * t
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(t) {
                let e;
                for (e = 0; e < this.data.length; e++) {
                    let n = o.toSJIS(this.data[e]);
                    if (n >= 33088 && n <= 40956) n -= 33088;
                    else if (n >= 57408 && n <= 60351) n -= 49472;
                    else throw Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                    n = (n >>> 8 & 255) * 192 + (255 & n), t.put(n, 13)
                }
            }, t.exports = i
        },
        27126: function(t, e) {
            e.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            let n = {
                N1: 3,
                N2: 3,
                N3: 40,
                N4: 10
            };
            e.isValid = function(t) {
                return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7
            }, e.from = function(t) {
                return e.isValid(t) ? parseInt(t, 10) : void 0
            }, e.getPenaltyN1 = function(t) {
                let e = t.size,
                    r = 0,
                    o = 0,
                    i = 0,
                    u = null,
                    a = null;
                for (let s = 0; s < e; s++) {
                    o = i = 0, u = a = null;
                    for (let l = 0; l < e; l++) {
                        let f = t.get(s, l);
                        f === u ? o++ : (o >= 5 && (r += n.N1 + (o - 5)), u = f, o = 1), (f = t.get(l, s)) === a ? i++ : (i >= 5 && (r += n.N1 + (i - 5)), a = f, i = 1)
                    }
                    o >= 5 && (r += n.N1 + (o - 5)), i >= 5 && (r += n.N1 + (i - 5))
                }
                return r
            }, e.getPenaltyN2 = function(t) {
                let e = t.size,
                    r = 0;
                for (let o = 0; o < e - 1; o++)
                    for (let i = 0; i < e - 1; i++) {
                        let u = t.get(o, i) + t.get(o, i + 1) + t.get(o + 1, i) + t.get(o + 1, i + 1);
                        (4 === u || 0 === u) && r++
                    }
                return r * n.N2
            }, e.getPenaltyN3 = function(t) {
                let e = t.size,
                    r = 0,
                    o = 0,
                    i = 0;
                for (let u = 0; u < e; u++) {
                    o = i = 0;
                    for (let a = 0; a < e; a++) o = o << 1 & 2047 | t.get(u, a), a >= 10 && (1488 === o || 93 === o) && r++, i = i << 1 & 2047 | t.get(a, u), a >= 10 && (1488 === i || 93 === i) && r++
                }
                return r * n.N3
            }, e.getPenaltyN4 = function(t) {
                let e = 0,
                    r = t.data.length;
                for (let o = 0; o < r; o++) e += t.data[o];
                let i = Math.abs(Math.ceil(100 * e / r / 5) - 10);
                return i * n.N4
            }, e.applyMask = function(t, n) {
                let r = n.size;
                for (let o = 0; o < r; o++)
                    for (let i = 0; i < r; i++) n.isReserved(i, o) || n.xor(i, o, function(t, n, r) {
                        switch (t) {
                            case e.Patterns.PATTERN000:
                                return (n + r) % 2 == 0;
                            case e.Patterns.PATTERN001:
                                return n % 2 == 0;
                            case e.Patterns.PATTERN010:
                                return r % 3 == 0;
                            case e.Patterns.PATTERN011:
                                return (n + r) % 3 == 0;
                            case e.Patterns.PATTERN100:
                                return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                            case e.Patterns.PATTERN101:
                                return n * r % 2 + n * r % 3 == 0;
                            case e.Patterns.PATTERN110:
                                return (n * r % 2 + n * r % 3) % 2 == 0;
                            case e.Patterns.PATTERN111:
                                return (n * r % 3 + (n + r) % 2) % 2 == 0;
                            default:
                                throw Error("bad maskPattern:" + t)
                        }
                    }(t, i, o))
            }, e.getBestMask = function(t, n) {
                let r = Object.keys(e.Patterns).length,
                    o = 0,
                    i = 1 / 0;
                for (let u = 0; u < r; u++) {
                    n(u), e.applyMask(u, t);
                    let a = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
                    e.applyMask(u, t), a < i && (i = a, o = u)
                }
                return o
            }
        },
        76910: function(t, e, n) {
            let r = n(43114),
                o = n(7007);
            e.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, e.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, e.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, e.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, e.MIXED = {
                bit: -1
            }, e.getCharCountIndicator = function(t, e) {
                if (!t.ccBits) throw Error("Invalid mode: " + t);
                if (!r.isValid(e)) throw Error("Invalid version: " + e);
                return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2]
            }, e.getBestModeForData = function(t) {
                return o.testNumeric(t) ? e.NUMERIC : o.testAlphanumeric(t) ? e.ALPHANUMERIC : o.testKanji(t) ? e.KANJI : e.BYTE
            }, e.toString = function(t) {
                if (t && t.id) return t.id;
                throw Error("Invalid mode")
            }, e.isValid = function(t) {
                return t && t.bit && t.ccBits
            }, e.from = function(t, n) {
                if (e.isValid(t)) return t;
                try {
                    return function(t) {
                        if ("string" != typeof t) throw Error("Param is not a string");
                        let n = t.toLowerCase();
                        switch (n) {
                            case "numeric":
                                return e.NUMERIC;
                            case "alphanumeric":
                                return e.ALPHANUMERIC;
                            case "kanji":
                                return e.KANJI;
                            case "byte":
                                return e.BYTE;
                            default:
                                throw Error("Unknown mode: " + t)
                        }
                    }(t)
                } catch (r) {
                    return n
                }
            }
        },
        41085: function(t, e, n) {
            let r = n(76910);

            function o(t) {
                this.mode = r.NUMERIC, this.data = t.toString()
            }
            o.getBitsLength = function(t) {
                return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(t) {
                let e, n;
                for (e = 0; e + 3 <= this.data.length; e += 3) n = parseInt(this.data.substr(e, 3), 10), t.put(n, 10);
                let r = this.data.length - e;
                r > 0 && (n = parseInt(this.data.substr(e), 10), t.put(n, 3 * r + 1))
            }, t.exports = o
        },
        26143: function(t, e, n) {
            let r = n(69729);
            e.mul = function(t, e) {
                let n = new Uint8Array(t.length + e.length - 1);
                for (let o = 0; o < t.length; o++)
                    for (let i = 0; i < e.length; i++) n[o + i] ^= r.mul(t[o], e[i]);
                return n
            }, e.mod = function(t, e) {
                let n = new Uint8Array(t);
                for (; n.length - e.length >= 0;) {
                    let o = n[0];
                    for (let i = 0; i < e.length; i++) n[i] ^= r.mul(e[i], o);
                    let u = 0;
                    for (; u < n.length && 0 === n[u];) u++;
                    n = n.slice(u)
                }
                return n
            }, e.generateECPolynomial = function(t) {
                let n = new Uint8Array([1]);
                for (let o = 0; o < t; o++) n = e.mul(n, new Uint8Array([1, r.exp(o)]));
                return n
            }
        },
        95115: function(t, e, n) {
            let r = n(10242),
                o = n(64908),
                i = n(97245),
                u = n(73280),
                a = n(21845),
                s = n(76526),
                l = n(27126),
                f = n(35393),
                c = n(52882),
                h = n(23103),
                g = n(61642),
                d = n(76910),
                p = n(16130);

            function m(t, e, n) {
                let r, o;
                let i = t.size,
                    u = g.getEncodedBits(e, n);
                for (r = 0; r < 15; r++) o = (u >> r & 1) == 1, r < 6 ? t.set(r, 8, o, !0) : r < 8 ? t.set(r + 1, 8, o, !0) : t.set(i - 15 + r, 8, o, !0), r < 8 ? t.set(8, i - r - 1, o, !0) : r < 9 ? t.set(8, 15 - r - 1 + 1, o, !0) : t.set(8, 15 - r - 1, o, !0);
                t.set(i - 8, 8, 1, !0)
            }
            e.create = function(t, e) {
                let n, g;
                if (void 0 === t || "" === t) throw Error("No input text");
                let E = o.M;
                return void 0 !== e && (E = o.from(e.errorCorrectionLevel, o.M), n = h.from(e.version), g = l.from(e.maskPattern), e.toSJISFunc && r.setToSJISFunction(e.toSJISFunc)),
                    function(t, e, n, o) {
                        let g;
                        if (Array.isArray(t)) g = p.fromArray(t);
                        else if ("string" == typeof t) {
                            let E = e;
                            if (!E) {
                                let y = p.rawSplit(t);
                                E = h.getBestVersionForData(y, n)
                            }
                            g = p.fromString(t, E || 40)
                        } else throw Error("Invalid data");
                        let w = h.getBestVersionForData(g, n);
                        if (!w) throw Error("The amount of data is too big to be stored in a QR Code");
                        if (e) {
                            if (e < w) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + w + ".\n")
                        } else e = w;
                        let A = function(t, e, n) {
                                let o = new i;
                                n.forEach(function(e) {
                                    o.put(e.mode.bit, 4), o.put(e.getLength(), d.getCharCountIndicator(e.mode, t)), e.write(o)
                                });
                                let u = r.getSymbolTotalCodewords(t),
                                    a = f.getTotalCodewordsCount(t, e),
                                    s = (u - a) * 8;
                                for (o.getLengthInBits() + 4 <= s && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(0);
                                let l = (s - o.getLengthInBits()) / 8;
                                for (let h = 0; h < l; h++) o.put(h % 2 ? 17 : 236, 8);
                                return function(t, e, n) {
                                    let o, i;
                                    let u = r.getSymbolTotalCodewords(e),
                                        a = f.getTotalCodewordsCount(e, n),
                                        s = f.getBlocksCount(e, n),
                                        l = s - u % s,
                                        h = Math.floor((u - a) / s),
                                        g = h + 1,
                                        d = Math.floor(u / s) - h,
                                        p = new c(d),
                                        m = 0,
                                        E = Array(s),
                                        y = Array(s),
                                        w = 0,
                                        A = new Uint8Array(t.buffer);
                                    for (let C = 0; C < s; C++) {
                                        let N = C < l ? h : g;
                                        E[C] = A.slice(m, m + N), y[C] = p.encode(E[C]), m += N, w = Math.max(w, N)
                                    }
                                    let B = new Uint8Array(u),
                                        I = 0;
                                    for (o = 0; o < w; o++)
                                        for (i = 0; i < s; i++) o < E[i].length && (B[I++] = E[i][o]);
                                    for (o = 0; o < d; o++)
                                        for (i = 0; i < s; i++) B[I++] = y[i][o];
                                    return B
                                }(o, t, e)
                            }(e, n, g),
                            C = r.getSymbolSize(e),
                            N = new u(C);
                        return function(t, e) {
                                let n = t.size,
                                    r = s.getPositions(e);
                                for (let o = 0; o < r.length; o++) {
                                    let i = r[o][0],
                                        u = r[o][1];
                                    for (let a = -1; a <= 7; a++)
                                        if (!(i + a <= -1) && !(n <= i + a))
                                            for (let l = -1; l <= 7; l++) u + l <= -1 || n <= u + l || (a >= 0 && a <= 6 && (0 === l || 6 === l) || l >= 0 && l <= 6 && (0 === a || 6 === a) || a >= 2 && a <= 4 && l >= 2 && l <= 4 ? t.set(i + a, u + l, !0, !0) : t.set(i + a, u + l, !1, !0))
                                }
                            }(N, e),
                            function(t) {
                                let e = t.size;
                                for (let n = 8; n < e - 8; n++) {
                                    let r = n % 2 == 0;
                                    t.set(n, 6, r, !0), t.set(6, n, r, !0)
                                }
                            }(N),
                            function(t, e) {
                                let n = a.getPositions(e);
                                for (let r = 0; r < n.length; r++) {
                                    let o = n[r][0],
                                        i = n[r][1];
                                    for (let u = -2; u <= 2; u++)
                                        for (let s = -2; s <= 2; s++) - 2 === u || 2 === u || -2 === s || 2 === s || 0 === u && 0 === s ? t.set(o + u, i + s, !0, !0) : t.set(o + u, i + s, !1, !0)
                                }
                            }(N, e), m(N, n, 0), e >= 7 && function(t, e) {
                                let n, r, o;
                                let i = t.size,
                                    u = h.getEncodedBits(e);
                                for (let a = 0; a < 18; a++) n = Math.floor(a / 3), r = a % 3 + i - 8 - 3, o = (u >> a & 1) == 1, t.set(n, r, o, !0), t.set(r, n, o, !0)
                            }(N, e),
                            function(t, e) {
                                let n = t.size,
                                    r = -1,
                                    o = n - 1,
                                    i = 7,
                                    u = 0;
                                for (let a = n - 1; a > 0; a -= 2)
                                    for (6 === a && a--;;) {
                                        for (let s = 0; s < 2; s++)
                                            if (!t.isReserved(o, a - s)) {
                                                let l = !1;
                                                u < e.length && (l = (e[u] >>> i & 1) == 1), t.set(o, a - s, l), -1 == --i && (u++, i = 7)
                                            }
                                        if ((o += r) < 0 || n <= o) {
                                            o -= r, r = -r;
                                            break
                                        }
                                    }
                            }(N, A), isNaN(o) && (o = l.getBestMask(N, m.bind(null, N, n))), l.applyMask(o, N), m(N, n, o), {
                                modules: N,
                                version: e,
                                errorCorrectionLevel: n,
                                maskPattern: o,
                                segments: g
                            }
                    }(t, n, E, g)
            }
        },
        52882: function(t, e, n) {
            let r = n(26143);

            function o(t) {
                this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree)
            }
            o.prototype.initialize = function(t) {
                this.degree = t, this.genPoly = r.generateECPolynomial(this.degree)
            }, o.prototype.encode = function(t) {
                if (!this.genPoly) throw Error("Encoder not initialized");
                let e = new Uint8Array(t.length + this.degree);
                e.set(t);
                let n = r.mod(e, this.genPoly),
                    o = this.degree - n.length;
                if (o > 0) {
                    let i = new Uint8Array(this.degree);
                    return i.set(n, o), i
                }
                return n
            }, t.exports = o
        },
        7007: function(t, e) {
            let n = "[0-9]+",
                r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
            r = r.replace(/u/g, "\\u");
            let o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + r + ")(?:.|[\r\n]))+";
            e.KANJI = RegExp(r, "g"), e.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), e.BYTE = RegExp(o, "g"), e.NUMERIC = RegExp(n, "g"), e.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g");
            let i = RegExp("^" + r + "$"),
                u = RegExp("^" + n + "$"),
                a = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            e.testKanji = function(t) {
                return i.test(t)
            }, e.testNumeric = function(t) {
                return u.test(t)
            }, e.testAlphanumeric = function(t) {
                return a.test(t)
            }
        },
        16130: function(t, e, n) {
            let r = n(76910),
                o = n(41085),
                i = n(8260),
                u = n(43424),
                a = n(35442),
                s = n(7007),
                l = n(10242),
                f = n(65987);

            function c(t) {
                return unescape(encodeURIComponent(t)).length
            }

            function h(t, e, n) {
                let r;
                let o = [];
                for (; null !== (r = t.exec(n));) o.push({
                    data: r[0],
                    index: r.index,
                    mode: e,
                    length: r[0].length
                });
                return o
            }

            function g(t) {
                let e, n;
                let o = h(s.NUMERIC, r.NUMERIC, t),
                    i = h(s.ALPHANUMERIC, r.ALPHANUMERIC, t);
                l.isKanjiModeEnabled() ? (e = h(s.BYTE, r.BYTE, t), n = h(s.KANJI, r.KANJI, t)) : (e = h(s.BYTE_KANJI, r.BYTE, t), n = []);
                let u = o.concat(i, e, n);
                return u.sort(function(t, e) {
                    return t.index - e.index
                }).map(function(t) {
                    return {
                        data: t.data,
                        mode: t.mode,
                        length: t.length
                    }
                })
            }

            function d(t, e) {
                switch (e) {
                    case r.NUMERIC:
                        return o.getBitsLength(t);
                    case r.ALPHANUMERIC:
                        return i.getBitsLength(t);
                    case r.KANJI:
                        return a.getBitsLength(t);
                    case r.BYTE:
                        return u.getBitsLength(t)
                }
            }

            function p(t, e) {
                let n;
                let s = r.getBestModeForData(t);
                if ((n = r.from(e, s)) !== r.BYTE && n.bit < s.bit) throw Error('"' + t + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(s));
                switch (n !== r.KANJI || l.isKanjiModeEnabled() || (n = r.BYTE), n) {
                    case r.NUMERIC:
                        return new o(t);
                    case r.ALPHANUMERIC:
                        return new i(t);
                    case r.KANJI:
                        return new a(t);
                    case r.BYTE:
                        return new u(t)
                }
            }
            e.fromArray = function(t) {
                return t.reduce(function(t, e) {
                    return "string" == typeof e ? t.push(p(e, null)) : e.data && t.push(p(e.data, e.mode)), t
                }, [])
            }, e.fromString = function(t, n) {
                let o = g(t, l.isKanjiModeEnabled()),
                    i = function(t) {
                        let e = [];
                        for (let n = 0; n < t.length; n++) {
                            let o = t[n];
                            switch (o.mode) {
                                case r.NUMERIC:
                                    e.push([o, {
                                        data: o.data,
                                        mode: r.ALPHANUMERIC,
                                        length: o.length
                                    }, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case r.ALPHANUMERIC:
                                    e.push([o, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case r.KANJI:
                                    e.push([o, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: c(o.data)
                                    }]);
                                    break;
                                case r.BYTE:
                                    e.push([{
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: c(o.data)
                                    }])
                            }
                        }
                        return e
                    }(o),
                    u = function(t, e) {
                        let n = {},
                            o = {
                                start: {}
                            },
                            i = ["start"];
                        for (let u = 0; u < t.length; u++) {
                            let a = t[u],
                                s = [];
                            for (let l = 0; l < a.length; l++) {
                                let f = a[l],
                                    c = "" + u + l;
                                s.push(c), n[c] = {
                                    node: f,
                                    lastCount: 0
                                }, o[c] = {};
                                for (let h = 0; h < i.length; h++) {
                                    let g = i[h];
                                    n[g] && n[g].node.mode === f.mode ? (o[g][c] = d(n[g].lastCount + f.length, f.mode) - d(n[g].lastCount, f.mode), n[g].lastCount += f.length) : (n[g] && (n[g].lastCount = f.length), o[g][c] = d(f.length, f.mode) + 4 + r.getCharCountIndicator(f.mode, e))
                                }
                            }
                            i = s
                        }
                        for (let p = 0; p < i.length; p++) o[i[p]].end = 0;
                        return {
                            map: o,
                            table: n
                        }
                    }(i, n),
                    a = f.find_path(u.map, "start", "end"),
                    s = [];
                for (let h = 1; h < a.length - 1; h++) s.push(u.table[a[h]].node);
                return e.fromArray(s.reduce(function(t, e) {
                    let n = t.length - 1 >= 0 ? t[t.length - 1] : null;
                    return n && n.mode === e.mode ? (t[t.length - 1].data += e.data, t) : (t.push(e), t)
                }, []))
            }, e.rawSplit = function(t) {
                return e.fromArray(g(t, l.isKanjiModeEnabled()))
            }
        },
        10242: function(t, e) {
            let n;
            let r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            e.getSymbolSize = function(t) {
                if (!t) throw Error('"version" cannot be null or undefined');
                if (t < 1 || t > 40) throw Error('"version" should be in range from 1 to 40');
                return 4 * t + 17
            }, e.getSymbolTotalCodewords = function(t) {
                return r[t]
            }, e.getBCHDigit = function(t) {
                let e = 0;
                for (; 0 !== t;) e++, t >>>= 1;
                return e
            }, e.setToSJISFunction = function(t) {
                if ("function" != typeof t) throw Error('"toSJISFunc" is not a valid function.');
                n = t
            }, e.isKanjiModeEnabled = function() {
                return void 0 !== n
            }, e.toSJIS = function(t) {
                return n(t)
            }
        },
        43114: function(t, e) {
            e.isValid = function(t) {
                return !isNaN(t) && t >= 1 && t <= 40
            }
        },
        23103: function(t, e, n) {
            let r = n(10242),
                o = n(35393),
                i = n(64908),
                u = n(76910),
                a = n(43114),
                s = r.getBCHDigit(7973);

            function l(t, e) {
                return u.getCharCountIndicator(t, e) + 4
            }
            e.from = function(t, e) {
                return a.isValid(t) ? parseInt(t, 10) : e
            }, e.getCapacity = function(t, e, n) {
                if (!a.isValid(t)) throw Error("Invalid QR Code version");
                void 0 === n && (n = u.BYTE);
                let i = r.getSymbolTotalCodewords(t),
                    s = o.getTotalCodewordsCount(t, e),
                    f = (i - s) * 8;
                if (n === u.MIXED) return f;
                let c = f - l(n, t);
                switch (n) {
                    case u.NUMERIC:
                        return Math.floor(c / 10 * 3);
                    case u.ALPHANUMERIC:
                        return Math.floor(c / 11 * 2);
                    case u.KANJI:
                        return Math.floor(c / 13);
                    case u.BYTE:
                    default:
                        return Math.floor(c / 8)
                }
            }, e.getBestVersionForData = function(t, n) {
                let r;
                let o = i.from(n, i.M);
                if (Array.isArray(t)) {
                    if (t.length > 1) return function(t, n) {
                        for (let r = 1; r <= 40; r++) {
                            let o = function(t, e) {
                                let n = 0;
                                return t.forEach(function(t) {
                                    let r = l(t.mode, e);
                                    n += r + t.getBitsLength()
                                }), n
                            }(t, r);
                            if (o <= e.getCapacity(r, n, u.MIXED)) return r
                        }
                    }(t, o);
                    if (0 === t.length) return 1;
                    r = t[0]
                } else r = t;
                return function(t, n, r) {
                    for (let o = 1; o <= 40; o++)
                        if (n <= e.getCapacity(o, r, t)) return o
                }(r.mode, r.getLength(), o)
            }, e.getEncodedBits = function(t) {
                if (!a.isValid(t) || t < 7) throw Error("Invalid QR Code version");
                let e = t << 12;
                for (; r.getBCHDigit(e) - s >= 0;) e ^= 7973 << r.getBCHDigit(e) - s;
                return t << 12 | e
            }
        },
        6907: function(t, e, n) {
            let r = n(89653);
            e.render = function(t, e, n) {
                var o;
                let i = n,
                    u = e;
                void 0 !== i || e && e.getContext || (i = e, e = void 0), e || (u = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (t) {
                        throw Error("You need to specify a canvas element")
                    }
                }()), i = r.getOptions(i);
                let a = r.getImageWidth(t.modules.size, i),
                    s = u.getContext("2d"),
                    l = s.createImageData(a, a);
                return r.qrToImageData(l.data, t, i), o = u, s.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = a, o.width = a, o.style.height = a + "px", o.style.width = a + "px", s.putImageData(l, 0, 0), u
            }, e.renderToDataURL = function(t, n, r) {
                let o = r;
                void 0 !== o || n && n.getContext || (o = n, n = void 0), o || (o = {});
                let i = e.render(t, n, o),
                    u = o.type || "image/png",
                    a = o.rendererOpts || {};
                return i.toDataURL(u, a.quality)
            }
        },
        93776: function(t, e, n) {
            let r = n(89653);

            function o(t, e) {
                let n = t.a / 255,
                    r = e + '="' + t.hex + '"';
                return n < 1 ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
            }

            function i(t, e, n) {
                let r = t + e;
                return void 0 !== n && (r += " " + n), r
            }
            e.render = function(t, e, n) {
                let u = r.getOptions(e),
                    a = t.modules.size,
                    s = t.modules.data,
                    l = a + 2 * u.margin,
                    f = u.color.light.a ? "<path " + o(u.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "",
                    c = "<path " + o(u.color.dark, "stroke") + ' d="' + function(t, e, n) {
                        let r = "",
                            o = 0,
                            u = !1,
                            a = 0;
                        for (let s = 0; s < t.length; s++) {
                            let l = Math.floor(s % e),
                                f = Math.floor(s / e);
                            l || u || (u = !0), t[s] ? (a++, s > 0 && l > 0 && t[s - 1] || (r += u ? i("M", l + n, .5 + f + n) : i("m", o, 0), o = 0, u = !1), l + 1 < e && t[s + 1] || (r += i("h", a), a = 0)) : o++
                        }
                        return r
                    }(s, a, u.margin) + '"/>',
                    h = u.width ? 'width="' + u.width + '" height="' + u.width + '" ' : "",
                    g = '<svg xmlns="http://www.w3.org/2000/svg" ' + h + ('viewBox="0 0 ' + l) + " " + l + '" shape-rendering="crispEdges">' + f + c + "</svg>\n";
                return "function" == typeof n && n(null, g), g
            }
        },
        89653: function(t, e) {
            function n(t) {
                if ("number" == typeof t && (t = t.toString()), "string" != typeof t) throw Error("Color should be defined as hex string");
                let e = t.slice().replace("#", "").split("");
                if (e.length < 3 || 5 === e.length || e.length > 8) throw Error("Invalid hex color: " + t);
                (3 === e.length || 4 === e.length) && (e = Array.prototype.concat.apply([], e.map(function(t) {
                    return [t, t]
                }))), 6 === e.length && e.push("F", "F");
                let n = parseInt(e.join(""), 16);
                return {
                    r: n >> 24 & 255,
                    g: n >> 16 & 255,
                    b: n >> 8 & 255,
                    a: 255 & n,
                    hex: "#" + e.slice(0, 6).join("")
                }
            }
            e.getOptions = function(t) {
                t || (t = {}), t.color || (t.color = {});
                let e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
                    r = t.width && t.width >= 21 ? t.width : void 0,
                    o = t.scale || 4;
                return {
                    width: r,
                    scale: r ? 4 : o,
                    margin: e,
                    color: {
                        dark: n(t.color.dark || "#000000ff"),
                        light: n(t.color.light || "#ffffffff")
                    },
                    type: t.type,
                    rendererOpts: t.rendererOpts || {}
                }
            }, e.getScale = function(t, e) {
                return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale
            }, e.getImageWidth = function(t, n) {
                let r = e.getScale(t, n);
                return Math.floor((t + 2 * n.margin) * r)
            }, e.qrToImageData = function(t, n, r) {
                let o = n.modules.size,
                    i = n.modules.data,
                    u = e.getScale(o, r),
                    a = Math.floor((o + 2 * r.margin) * u),
                    s = r.margin * u,
                    l = [r.color.light, r.color.dark];
                for (let f = 0; f < a; f++)
                    for (let c = 0; c < a; c++) {
                        let h = (f * a + c) * 4,
                            g = r.color.light;
                        if (f >= s && c >= s && f < a - s && c < a - s) {
                            let d = Math.floor((f - s) / u),
                                p = Math.floor((c - s) / u);
                            g = l[i[d * o + p] ? 1 : 0]
                        }
                        t[h++] = g.r, t[h++] = g.g, t[h++] = g.b, t[h] = g.a
                    }
            }
        }
    }
]);