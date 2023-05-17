"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [962], {
        2962: function(e, t, o) {
            o.d(t, {
                PB: function() {
                    return c
                }
            });
            var a = o(9008),
                r = o.n(a),
                n = o(67294);

            function p() {
                return (p = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = {
                    templateTitle: "",
                    noindex: !1,
                    nofollow: !1,
                    defaultOpenGraphImageWidth: 0,
                    defaultOpenGraphImageHeight: 0,
                    defaultOpenGraphVideoWidth: 0,
                    defaultOpenGraphVideoHeight: 0
                },
                l = function(e, t, o) {
                    void 0 === t && (t = []);
                    var a = void 0 === o ? {} : o,
                        r = a.defaultWidth,
                        p = a.defaultHeight;
                    return t.reduce(function(t, o, a) {
                        return t.push(n.createElement("meta", {
                            key: "og:" + e + ":0" + a,
                            property: "og:" + e,
                            content: o.url
                        })), o.alt && t.push(n.createElement("meta", {
                            key: "og:" + e + ":alt0" + a,
                            property: "og:" + e + ":alt",
                            content: o.alt
                        })), o.secureUrl && t.push(n.createElement("meta", {
                            key: "og:" + e + ":secure_url0" + a,
                            property: "og:" + e + ":secure_url",
                            content: o.secureUrl.toString()
                        })), o.type && t.push(n.createElement("meta", {
                            key: "og:" + e + ":type0" + a,
                            property: "og:" + e + ":type",
                            content: o.type.toString()
                        })), o.width ? t.push(n.createElement("meta", {
                            key: "og:" + e + ":width0" + a,
                            property: "og:" + e + ":width",
                            content: o.width.toString()
                        })) : r && t.push(n.createElement("meta", {
                            key: "og:" + e + ":width0" + a,
                            property: "og:" + e + ":width",
                            content: r.toString()
                        })), o.height ? t.push(n.createElement("meta", {
                            key: "og:" + e + ":height" + a,
                            property: "og:" + e + ":height",
                            content: o.height.toString()
                        })) : p && t.push(n.createElement("meta", {
                            key: "og:" + e + ":height" + a,
                            property: "og:" + e + ":height",
                            content: p.toString()
                        })), t
                    }, [])
                },
                h = function(e) {
                    var t, o, a, r, h, c = [];
                    e.titleTemplate && (i.templateTitle = e.titleTemplate);
                    var s = "";
                    e.title ? (s = e.title, i.templateTitle && (s = i.templateTitle.replace(/%s/g, function() {
                        return s
                    }))) : e.defaultTitle && (s = e.defaultTitle), s && c.push(n.createElement("title", {
                        key: "title"
                    }, s));
                    var d = e.noindex || i.noindex || e.dangerouslySetAllPagesToNoIndex,
                        m = e.nofollow || i.nofollow || e.dangerouslySetAllPagesToNoFollow,
                        u = "";
                    if (e.robotsProps) {
                        var g = e.robotsProps,
                            f = g.nosnippet,
                            y = g.maxSnippet,
                            G = g.maxImagePreview,
                            k = g.maxVideoPreview,
                            v = g.noarchive,
                            E = g.noimageindex,
                            b = g.notranslate,
                            w = g.unavailableAfter;
                        u = (f ? ",nosnippet" : "") + (y ? ",max-snippet:" + y : "") + (G ? ",max-image-preview:" + G : "") + (v ? ",noarchive" : "") + (w ? ",unavailable_after:" + w : "") + (E ? ",noimageindex" : "") + (k ? ",max-video-preview:" + k : "") + (b ? ",notranslate" : "")
                    }
                    if (d || m ? (e.dangerouslySetAllPagesToNoIndex && (i.noindex = !0), e.dangerouslySetAllPagesToNoFollow && (i.nofollow = !0), c.push(n.createElement("meta", {
                            key: "robots",
                            name: "robots",
                            content: (d ? "noindex" : "index") + "," + (m ? "nofollow" : "follow") + u
                        }))) : c.push(n.createElement("meta", {
                            key: "robots",
                            name: "robots",
                            content: "index,follow" + u
                        })), e.description && c.push(n.createElement("meta", {
                            key: "description",
                            name: "description",
                            content: e.description
                        })), e.mobileAlternate && c.push(n.createElement("link", {
                            rel: "alternate",
                            key: "mobileAlternate",
                            media: e.mobileAlternate.media,
                            href: e.mobileAlternate.href
                        })), e.languageAlternates && e.languageAlternates.length > 0 && e.languageAlternates.forEach(function(e) {
                            c.push(n.createElement("link", {
                                rel: "alternate",
                                key: "languageAlternate-" + e.hrefLang,
                                hrefLang: e.hrefLang,
                                href: e.href
                            }))
                        }), e.twitter && (e.twitter.cardType && c.push(n.createElement("meta", {
                            key: "twitter:card",
                            name: "twitter:card",
                            content: e.twitter.cardType
                        })), e.twitter.site && c.push(n.createElement("meta", {
                            key: "twitter:site",
                            name: "twitter:site",
                            content: e.twitter.site
                        })), e.twitter.handle && c.push(n.createElement("meta", {
                            key: "twitter:creator",
                            name: "twitter:creator",
                            content: e.twitter.handle
                        }))), e.facebook && e.facebook.appId && c.push(n.createElement("meta", {
                            key: "fb:app_id",
                            property: "fb:app_id",
                            content: e.facebook.appId
                        })), (null != (t = e.openGraph) && t.title || s) && c.push(n.createElement("meta", {
                            key: "og:title",
                            property: "og:title",
                            content: (null == (r = e.openGraph) ? void 0 : r.title) || s
                        })), (null != (o = e.openGraph) && o.description || e.description) && c.push(n.createElement("meta", {
                            key: "og:description",
                            property: "og:description",
                            content: (null == (h = e.openGraph) ? void 0 : h.description) || e.description
                        })), e.openGraph) {
                        if ((e.openGraph.url || e.canonical) && c.push(n.createElement("meta", {
                                key: "og:url",
                                property: "og:url",
                                content: e.openGraph.url || e.canonical
                            })), e.openGraph.type) {
                            var T = e.openGraph.type.toLowerCase();
                            c.push(n.createElement("meta", {
                                key: "og:type",
                                property: "og:type",
                                content: T
                            })), "profile" === T && e.openGraph.profile ? (e.openGraph.profile.firstName && c.push(n.createElement("meta", {
                                key: "profile:first_name",
                                property: "profile:first_name",
                                content: e.openGraph.profile.firstName
                            })), e.openGraph.profile.lastName && c.push(n.createElement("meta", {
                                key: "profile:last_name",
                                property: "profile:last_name",
                                content: e.openGraph.profile.lastName
                            })), e.openGraph.profile.username && c.push(n.createElement("meta", {
                                key: "profile:username",
                                property: "profile:username",
                                content: e.openGraph.profile.username
                            })), e.openGraph.profile.gender && c.push(n.createElement("meta", {
                                key: "profile:gender",
                                property: "profile:gender",
                                content: e.openGraph.profile.gender
                            }))) : "book" === T && e.openGraph.book ? (e.openGraph.book.authors && e.openGraph.book.authors.length && e.openGraph.book.authors.forEach(function(e, t) {
                                c.push(n.createElement("meta", {
                                    key: "book:author:0" + t,
                                    property: "book:author",
                                    content: e
                                }))
                            }), e.openGraph.book.isbn && c.push(n.createElement("meta", {
                                key: "book:isbn",
                                property: "book:isbn",
                                content: e.openGraph.book.isbn
                            })), e.openGraph.book.releaseDate && c.push(n.createElement("meta", {
                                key: "book:release_date",
                                property: "book:release_date",
                                content: e.openGraph.book.releaseDate
                            })), e.openGraph.book.tags && e.openGraph.book.tags.length && e.openGraph.book.tags.forEach(function(e, t) {
                                c.push(n.createElement("meta", {
                                    key: "book:tag:0" + t,
                                    property: "book:tag",
                                    content: e
                                }))
                            })) : "article" === T && e.openGraph.article ? (e.openGraph.article.publishedTime && c.push(n.createElement("meta", {
                                key: "article:published_time",
                                property: "article:published_time",
                                content: e.openGraph.article.publishedTime
                            })), e.openGraph.article.modifiedTime && c.push(n.createElement("meta", {
                                key: "article:modified_time",
                                property: "article:modified_time",
                                content: e.openGraph.article.modifiedTime
                            })), e.openGraph.article.expirationTime && c.push(n.createElement("meta", {
                                key: "article:expiration_time",
                                property: "article:expiration_time",
                                content: e.openGraph.article.expirationTime
                            })), e.openGraph.article.authors && e.openGraph.article.authors.length && e.openGraph.article.authors.forEach(function(e, t) {
                                c.push(n.createElement("meta", {
                                    key: "article:author:0" + t,
                                    property: "article:author",
                                    content: e
                                }))
                            }), e.openGraph.article.section && c.push(n.createElement("meta", {
                                key: "article:section",
                                property: "article:section",
                                content: e.openGraph.article.section
                            })), e.openGraph.article.tags && e.openGraph.article.tags.length && e.openGraph.article.tags.forEach(function(e, t) {
                                c.push(n.createElement("meta", {
                                    key: "article:tag:0" + t,
                                    property: "article:tag",
                                    content: e
                                }))
                            })) : ("video.movie" === T || "video.episode" === T || "video.tv_show" === T || "video.other" === T) && e.openGraph.video && (e.openGraph.video.actors && e.openGraph.video.actors.length && e.openGraph.video.actors.forEach(function(e, t) {
                                e.profile && c.push(n.createElement("meta", {
                                    key: "video:actor:0" + t,
                                    property: "video:actor",
                                    content: e.profile
                                })), e.role && c.push(n.createElement("meta", {
                                    key: "video:actor:role:0" + t,
                                    property: "video:actor:role",
                                    content: e.role
                                }))
                            }), e.openGraph.video.directors && e.openGraph.video.directors.length && e.openGraph.video.directors.forEach(function(e, t) {
                                c.push(n.createElement("meta", {
                                    key: "video:director:0" + t,
                                    property: "video:director",
                                    content: e
                                }))
                            }), e.openGraph.video.writers && e.openGraph.video.writers.length && e.openGraph.video.writers.forEach(function(e, t) {
                                c.push(n.createElement("meta", {
                                    key: "video:writer:0" + t,
                                    property: "video:writer",
                                    content: e
                                }))
                            }), e.openGraph.video.duration && c.push(n.createElement("meta", {
                                key: "video:duration",
                                property: "video:duration",
                                content: e.openGraph.video.duration.toString()
                            })), e.openGraph.video.releaseDate && c.push(n.createElement("meta", {
                                key: "video:release_date",
                                property: "video:release_date",
                                content: e.openGraph.video.releaseDate
                            })), e.openGraph.video.tags && e.openGraph.video.tags.length && e.openGraph.video.tags.forEach(function(e, t) {
                                c.push(n.createElement("meta", {
                                    key: "video:tag:0" + t,
                                    property: "video:tag",
                                    content: e
                                }))
                            }), e.openGraph.video.series && c.push(n.createElement("meta", {
                                key: "video:series",
                                property: "video:series",
                                content: e.openGraph.video.series
                            })))
                        }
                        e.defaultOpenGraphImageWidth && (i.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth), e.defaultOpenGraphImageHeight && (i.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight), e.openGraph.images && e.openGraph.images.length && c.push.apply(c, l("image", e.openGraph.images, {
                            defaultWidth: i.defaultOpenGraphImageWidth,
                            defaultHeight: i.defaultOpenGraphImageHeight
                        })), e.defaultOpenGraphVideoWidth && (i.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth), e.defaultOpenGraphVideoHeight && (i.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight), e.openGraph.videos && e.openGraph.videos.length && c.push.apply(c, l("video", e.openGraph.videos, {
                            defaultWidth: i.defaultOpenGraphVideoWidth,
                            defaultHeight: i.defaultOpenGraphVideoHeight
                        })), e.openGraph.locale && c.push(n.createElement("meta", {
                            key: "og:locale",
                            property: "og:locale",
                            content: e.openGraph.locale
                        })), e.openGraph.site_name && c.push(n.createElement("meta", {
                            key: "og:site_name",
                            property: "og:site_name",
                            content: e.openGraph.site_name
                        }))
                    }
                    return e.canonical && c.push(n.createElement("link", {
                        rel: "canonical",
                        href: e.canonical,
                        key: "canonical"
                    })), e.additionalMetaTags && e.additionalMetaTags.length > 0 && e.additionalMetaTags.forEach(function(e) {
                        var t, o, a;
                        c.push(n.createElement("meta", p({
                            key: "meta:" + (null != (t = null != (o = null != (a = e.keyOverride) ? a : e.name) ? o : e.property) ? t : e.httpEquiv)
                        }, e)))
                    }), null != (a = e.additionalLinkTags) && a.length && e.additionalLinkTags.forEach(function(e) {
                        var t;
                        c.push(n.createElement("link", p({
                            key: "link" + (null != (t = e.keyOverride) ? t : e.href) + e.rel
                        }, e)))
                    }), c
                };
            n.Component;
            var c = function(e) {
                var t;

                function o() {
                    return e.apply(this, arguments) || this
                }
                return (t = o).prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e, o.prototype.render = function() {
                    var e = this.props,
                        t = e.title,
                        o = e.noindex,
                        a = e.nofollow,
                        p = e.robotsProps,
                        i = e.description,
                        l = e.canonical,
                        c = e.openGraph,
                        s = e.facebook,
                        d = e.twitter,
                        m = e.additionalMetaTags,
                        u = e.titleTemplate,
                        g = e.defaultTitle,
                        f = e.mobileAlternate,
                        y = e.languageAlternates,
                        G = e.additionalLinkTags;
                    return n.createElement(r(), null, h({
                        title: t,
                        noindex: void 0 !== o && o,
                        nofollow: a,
                        robotsProps: p,
                        description: i,
                        canonical: l,
                        facebook: s,
                        openGraph: c,
                        additionalMetaTags: m,
                        twitter: d,
                        titleTemplate: u,
                        defaultTitle: g,
                        mobileAlternate: f,
                        languageAlternates: y,
                        additionalLinkTags: G
                    }))
                }, o
            }(n.Component);
            RegExp("[" + Object.keys(Object.freeze({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&apos;"
            })).join("") + "]", "g")
        }
    }
]);