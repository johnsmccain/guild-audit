
const applyIntlFormatPatch = function Pe(e) {
    function t(d, n) {
        return typeof n == "bigint" ? `${n}n` : n instanceof Date ? n.getTime() : n
    }

    function r(...d) {
        let n = JSON.stringify(d, t),
            c = 0;
        for (let u = 0; u < n.length; u++) c += n.charCodeAt(u), c += c << 10, c ^= c >> 6;
        return c += c << 3, c ^= c >> 11, c += c << 15, c >>> 0
    }

    function o(d, n, c) {
        let u = d[n];
        if (typeof u < "u") return u;
        let f = c();
        return d[n] = f, f
    }

    function a(d) {
        return {
            ...d
        }
    }
    let s = Date.prototype.toLocaleString,
        l = Date.prototype.toLocaleDateString;
    s && (Date.prototype.toLocaleString = function (n, c) {
        let u = r(this, n, c);
        return o(e.Date.toLocaleString, u, () => s.call(this, n, c))
    }), l && (Date.prototype.toLocaleDateString = function (n, c) {
        let u = r(this, n, c);
        return o(e.Date.toLocaleDateString, u, () => l.call(this, n, c))
    });
    let i = Object.getOwnPropertyDescriptors(Intl.DateTimeFormat.prototype).format.get,
        m = Intl.DateTimeFormat.prototype.formatRange,
        h = Intl.DateTimeFormat.prototype.formatToParts,
        p = Intl.DateTimeFormat.prototype.formatRangeToParts;

    function y(d) {
        let n = d.resolvedOptions(),
            c = {
                locale: n.locale,
                calendar: n.calendar,
                numberingSystem: n.numberingSystem,
                timeZone: n.timeZone,
                hour12: n.hour12,
                weekday: n.weekday,
                era: n.era,
                year: n.year,
                month: n.month,
                day: n.day,
                hour: n.hour,
                minute: n.minute,
                second: n.second,
                timeZoneName: n.timeZoneName
            };
        for (let u in n) u in c || (c[u] = n[u]);
        return c
    }
    i && Object.defineProperty(Intl.DateTimeFormat.prototype, "format", {
        get() {
            function d(n) {
                let c = y(this),
                    u = r(n, c);
                return o(e.DateTimeFormat.format, u, () => i.call(this)(n))
            }
            return d.bind(this)
        }
    }), m && (Intl.DateTimeFormat.prototype.formatRange = function (n, c) {
        let u = y(this),
            f = r(n, c, u);
        return o(e.DateTimeFormat.formatRange, f, () => m.call(this, n, c))
    }), h && (Intl.DateTimeFormat.prototype.formatToParts = function (n) {
        let c = y(this),
            u = r(n, c);
        return o(e.DateTimeFormat.formatToParts, u, () => h.call(this, n)).map(a)
    }), p && (Intl.DateTimeFormat.prototype.formatRangeToParts = function (n, c) {
        let u = y(this),
            f = r(n, c, u);
        return o(e.DateTimeFormat.formatRangeToParts, f, () => p.call(this, n, c)).map(a)
    });
    let T = Number.prototype.toLocaleString;
    T && (Number.prototype.toLocaleString = function (n, c) {
        let u = r(this, n, c);
        return o(e.Number.toLocaleString, u, () => T.call(this, n, c))
    });
    let P = Object.getOwnPropertyDescriptors(Intl.NumberFormat.prototype).format.get,
        x = Intl.NumberFormat.prototype.formatRange,
        S = Intl.NumberFormat.prototype.formatToParts,
        M = Intl.NumberFormat.prototype.formatRangeToParts;

    function I(d) {
        let n = d.resolvedOptions(),
            c = {
                locale: n.locale,
                numberingSystem: n.numberingSystem,
                style: n.style,
                currency: n.currency,
                currencyDisplay: n.currencyDisplay,
                currencySign: n.currencySign,
                unit: n.unit,
                unitDisplay: n.unitDisplay,
                minimumIntegerDigits: n.minimumIntegerDigits,
                minimumFractionDigits: n.minimumFractionDigits,
                maximumFractionDigits: n.maximumFractionDigits,
                minimumSignificantDigits: n.minimumSignificantDigits,
                maximumSignificantDigits: n.maximumSignificantDigits,
                useGrouping: n.useGrouping === !0 ? "auto" : n.useGrouping,
                notation: n.notation,
                compactDisplay: n.compactDisplay,
                signDisplay: n.signDisplay,
                roundingIncrement: n.roundingIncrement ?? 1,
                roundingMode: n.roundingMode ?? "halfExpand",
                roundingPriority: n.roundingPriority ?? "auto",
                trailingZeroDisplay: n.trailingZeroDisplay ?? "auto"
            };
        for (let u in n) u in c || (c[u] = n[u]);
        return c
    }
    P && Object.defineProperty(Intl.NumberFormat.prototype, "format", {
        get() {
            function d(n) {
                let c = I(this),
                    u = r(n, c);
                return o(e.NumberFormat.format, u, () => P.call(this)(n))
            }
            return d.bind(this)
        }
    }), x && (Intl.NumberFormat.prototype.formatRange = function (n, c) {
        let u = I(this),
            f = r(n, c, u);
        return o(e.NumberFormat.formatRange, f, () => x.call(this, n, c))
    }), S && (Intl.NumberFormat.prototype.formatToParts = function (n) {
        let c = I(this),
            u = r(n, c);
        return o(e.NumberFormat.formatToParts, u, () => S.call(this, n)).map(a)
    }), M && (Intl.NumberFormat.prototype.formatRangeToParts = function (n, c) {
        let u = I(this),
            f = r(n, c, u);
        return o(e.NumberFormat.formatRangeToParts, f, () => M.call(this, n, c)).map(a)
    })
};
const formatCache = {
    "Date": {
        "toLocaleString": {},
        "toLocaleDateString": {}
    },
    "DateTimeFormat": {
        "format": {},
        "formatRange": {},
        "formatToParts": {},
        "formatRangeToParts": {}
    },
    "Number": {
        "toLocaleString": {
            "400328497": "0"
        }
    },
    "NumberFormat": {
        "format": {},
        "formatRange": {},
        "formatToParts": {},
        "formatRangeToParts": {}
    }
};
applyIntlFormatPatch(formatCache);
