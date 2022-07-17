/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).THREE = {});
}(this, function(t8) {
    "use strict";
    const e1 = "141", i1 = 100, n1 = 300, r1 = 301, s1 = 302, a1 = 303, o1 = 304, l1 = 306, c1 = 1e3, h1 = 1001, u1 = 1002, d1 = 1003, p1 = 1004, m1 = 1005, f1 = 1006, g1 = 1007, v1 = 1008, x1 = 1009, y1 = 1012, _1 = 1014, M1 = 1015, b1 = 1016, w1 = 1020, S1 = 1023, T1 = 1026, A1 = 1027, E1 = 33776, C1 = 33777, L1 = 33778, R1 = 33779, P1 = 35840, I1 = 35841, D1 = 35842, N1 = 35843, z1 = 37492, O1 = 37496, F1 = 37808, B1 = 37809, U1 = 37810, k1 = 37811, G1 = 37812, V1 = 37813, H1 = 37814, W1 = 37815, j1 = 37816, q1 = 37817, X1 = 37818, J1 = 37819, Y1 = 37820, Z1 = 37821, K1 = 36492, Q1 = 2300, $1 = 2301, tt1 = 2302, et1 = 2400, it1 = 2401, nt1 = 2402, rt1 = 2500, st1 = 2501, at = 3e3, ot1 = 3001, lt1 = "srgb", ct1 = "srgb-linear", ht1 = 7680, ut1 = 35044, dt1 = "300 es", pt1 = 1035;
    class mt1 {
        addEventListener(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            const i = this._listeners;
            void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e);
        }
        hasEventListener(t, e) {
            if (void 0 === this._listeners) return !1;
            const i = this._listeners;
            return void 0 !== i[t] && -1 !== i[t].indexOf(e);
        }
        removeEventListener(t, e) {
            if (void 0 === this._listeners) return;
            const i = this._listeners[t];
            if (void 0 !== i) {
                const t = i.indexOf(e);
                -1 !== t && i.splice(t, 1);
            }
        }
        dispatchEvent(t) {
            if (void 0 === this._listeners) return;
            const e = this._listeners[t.type];
            if (void 0 !== e) {
                t.target = this;
                const i = e.slice(0);
                for(let e2 = 0, n = i.length; e2 < n; e2++)i[e2].call(this, t);
                t.target = null;
            }
        }
    }
    const ft1 = [];
    for(let t1 = 0; t1 < 256; t1++)ft1[t1] = (t1 < 16 ? "0" : "") + t1.toString(16);
    let gt1 = 1234567;
    const vt1 = Math.PI / 180, xt1 = 180 / Math.PI;
    function yt1() {
        const t = 4294967295 * Math.random() | 0, e = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0;
        return (ft1[255 & t] + ft1[t >> 8 & 255] + ft1[t >> 16 & 255] + ft1[t >> 24 & 255] + "-" + ft1[255 & e] + ft1[e >> 8 & 255] + "-" + ft1[e >> 16 & 15 | 64] + ft1[e >> 24 & 255] + "-" + ft1[63 & i | 128] + ft1[i >> 8 & 255] + "-" + ft1[i >> 16 & 255] + ft1[i >> 24 & 255] + ft1[255 & n] + ft1[n >> 8 & 255] + ft1[n >> 16 & 255] + ft1[n >> 24 & 255]).toLowerCase();
    }
    function _t1(t, e, i) {
        return Math.max(e, Math.min(i, t));
    }
    function Mt1(t, e) {
        return (t % e + e) % e;
    }
    function bt1(t, e, i) {
        return (1 - i) * t + i * e;
    }
    function wt1(t) {
        return 0 == (t & t - 1) && 0 !== t;
    }
    function St1(t) {
        return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
    }
    function Tt(t) {
        return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
    }
    var At1 = Object.freeze({
        __proto__: null,
        DEG2RAD: vt1,
        RAD2DEG: xt1,
        generateUUID: yt1,
        clamp: _t1,
        euclideanModulo: Mt1,
        mapLinear: function(t, e, i, n, r) {
            return n + (t - e) * (r - n) / (i - e);
        },
        inverseLerp: function(t, e, i) {
            return t !== e ? (i - t) / (e - t) : 0;
        },
        lerp: bt1,
        damp: function(t, e, i, n) {
            return bt1(t, e, 1 - Math.exp(-i * n));
        },
        pingpong: function(t, e = 1) {
            return e - Math.abs(Mt1(t, 2 * e) - e);
        },
        smoothstep: function(t, e, i) {
            return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t);
        },
        smootherstep: function(t, e, i) {
            return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10);
        },
        randInt: function(t, e) {
            return t + Math.floor(Math.random() * (e - t + 1));
        },
        randFloat: function(t, e) {
            return t + Math.random() * (e - t);
        },
        randFloatSpread: function(t) {
            return t * (.5 - Math.random());
        },
        seededRandom: function(t) {
            void 0 !== t && (gt1 = t);
            let e = gt1 += 1831565813;
            return e = Math.imul(e ^ e >>> 15, 1 | e), e ^= e + Math.imul(e ^ e >>> 7, 61 | e), ((e ^ e >>> 14) >>> 0) / 4294967296;
        },
        degToRad: function(t) {
            return t * vt1;
        },
        radToDeg: function(t) {
            return t * xt1;
        },
        isPowerOfTwo: wt1,
        ceilPowerOfTwo: St1,
        floorPowerOfTwo: Tt,
        setQuaternionFromProperEuler: function(t, e, i, n, r) {
            const s = Math.cos, a = Math.sin, o = s(i / 2), l = a(i / 2), c = s((e + n) / 2), h = a((e + n) / 2), u = s((e - n) / 2), d = a((e - n) / 2), p = s((n - e) / 2), m = a((n - e) / 2);
            switch(r){
                case "XYX":
                    t.set(o * h, l * u, l * d, o * c);
                    break;
                case "YZY":
                    t.set(l * d, o * h, l * u, o * c);
                    break;
                case "ZXZ":
                    t.set(l * u, l * d, o * h, o * c);
                    break;
                case "XZX":
                    t.set(o * h, l * m, l * p, o * c);
                    break;
                case "YXY":
                    t.set(l * p, o * h, l * m, o * c);
                    break;
                case "ZYZ":
                    t.set(l * m, l * p, o * h, o * c);
                    break;
                default:
                    console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
            }
        },
        normalize: function(t, e) {
            switch(e.constructor){
                case Float32Array:
                    return t;
                case Uint16Array:
                    return Math.round(65535 * t);
                case Uint8Array:
                    return Math.round(255 * t);
                case Int16Array:
                    return Math.round(32767 * t);
                case Int8Array:
                    return Math.round(127 * t);
                default:
                    throw new Error("Invalid component type.");
            }
        },
        denormalize: function(t, e) {
            switch(e.constructor){
                case Float32Array:
                    return t;
                case Uint16Array:
                    return t / 65535;
                case Uint8Array:
                    return t / 255;
                case Int16Array:
                    return Math.max(t / 32767, -1);
                case Int8Array:
                    return Math.max(t / 127, -1);
                default:
                    throw new Error("Invalid component type.");
            }
        }
    });
    class Et {
        constructor(t = 0, e = 0){
            this.isVector2 = !0, this.x = t, this.y = e;
        }
        get width() {
            return this.x;
        }
        set width(t) {
            this.x = t;
        }
        get height() {
            return this.y;
        }
        set height(t) {
            this.y = t;
        }
        set(t, e) {
            return this.x = t, this.y = e, this;
        }
        setScalar(t) {
            return this.x = t, this.y = t, this;
        }
        setX(t) {
            return this.x = t, this;
        }
        setY(t) {
            return this.y = t, this;
        }
        setComponent(t, e) {
            switch(t){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t);
            }
            return this;
        }
        getComponent(t) {
            switch(t){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y);
        }
        copy(t) {
            return this.x = t.x, this.y = t.y, this;
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this);
        }
        addScalar(t) {
            return this.x += t, this.y += t, this;
        }
        addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this;
        }
        addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this;
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this);
        }
        subScalar(t) {
            return this.x -= t, this.y -= t, this;
        }
        subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this;
        }
        multiply(t) {
            return this.x *= t.x, this.y *= t.y, this;
        }
        multiplyScalar(t) {
            return this.x *= t, this.y *= t, this;
        }
        divide(t) {
            return this.x /= t.x, this.y /= t.y, this;
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        applyMatrix3(t) {
            const e = this.x, i = this.y, n = t.elements;
            return this.x = n[0] * e + n[3] * i + n[6], this.y = n[1] * e + n[4] * i + n[7], this;
        }
        min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
        }
        max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
        }
        clampLength(t, e) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this;
        }
        dot(t) {
            return this.x * t.x + this.y * t.y;
        }
        cross(t) {
            return this.x * t.y - this.y * t.x;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        angle() {
            return Math.atan2(-this.y, -this.x) + Math.PI;
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
            const e = this.x - t.x, i = this.y - t.y;
            return e * e + i * i;
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
        }
        lerpVectors(t, e, i) {
            return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y;
        }
        fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t;
        }
        fromBufferAttribute(t, e, i) {
            return void 0 !== i && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this;
        }
        rotateAround(t, e) {
            const i = Math.cos(e), n = Math.sin(e), r = this.x - t.x, s = this.y - t.y;
            return this.x = r * i - s * n + t.x, this.y = r * n + s * i + t.y, this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y;
        }
    }
    class Ct1 {
        constructor(){
            this.isMatrix3 = !0, this.elements = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
        }
        set(t, e, i, n, r, s, a, o, l) {
            const c = this.elements;
            return c[0] = t, c[1] = n, c[2] = a, c[3] = e, c[4] = r, c[5] = o, c[6] = i, c[7] = s, c[8] = l, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
        }
        copy(t) {
            const e = this.elements, i = t.elements;
            return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this;
        }
        extractBasis(t, e, i) {
            return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
        }
        setFromMatrix4(t) {
            const e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
        }
        multiply(t) {
            return this.multiplyMatrices(this, t);
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
            const i = t.elements, n = e.elements, r = this.elements, s = i[0], a = i[3], o = i[6], l = i[1], c = i[4], h = i[7], u = i[2], d = i[5], p = i[8], m = n[0], f = n[3], g = n[6], v = n[1], x = n[4], y = n[7], _ = n[2], M = n[5], b = n[8];
            return r[0] = s * m + a * v + o * _, r[3] = s * f + a * x + o * M, r[6] = s * g + a * y + o * b, r[1] = l * m + c * v + h * _, r[4] = l * f + c * x + h * M, r[7] = l * g + c * y + h * b, r[2] = u * m + d * v + p * _, r[5] = u * f + d * x + p * M, r[8] = u * g + d * y + p * b, this;
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
        }
        determinant() {
            const t = this.elements, e = t[0], i = t[1], n = t[2], r = t[3], s = t[4], a = t[5], o = t[6], l = t[7], c = t[8];
            return e * s * c - e * a * l - i * r * c + i * a * o + n * r * l - n * s * o;
        }
        invert() {
            const t = this.elements, e = t[0], i = t[1], n = t[2], r = t[3], s = t[4], a = t[5], o = t[6], l = t[7], c = t[8], h = c * s - a * l, u = a * o - c * r, d = l * r - s * o, p = e * h + i * u + n * d;
            if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const m = 1 / p;
            return t[0] = h * m, t[1] = (n * l - c * i) * m, t[2] = (a * i - n * s) * m, t[3] = u * m, t[4] = (c * e - n * o) * m, t[5] = (n * r - a * e) * m, t[6] = d * m, t[7] = (i * o - l * e) * m, t[8] = (s * e - i * r) * m, this;
        }
        transpose() {
            let t;
            const e = this.elements;
            return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
        }
        getNormalMatrix(t) {
            return this.setFromMatrix4(t).invert().transpose();
        }
        transposeIntoArray(t) {
            const e = this.elements;
            return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
        }
        setUvTransform(t, e, i, n, r, s, a) {
            const o = Math.cos(r), l = Math.sin(r);
            return this.set(i * o, i * l, -i * (o * s + l * a) + s + t, -n * l, n * o, -n * (-l * s + o * a) + a + e, 0, 0, 1), this;
        }
        scale(t, e) {
            const i = this.elements;
            return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this;
        }
        rotate(t) {
            const e = Math.cos(t), i = Math.sin(t), n = this.elements, r = n[0], s = n[3], a = n[6], o = n[1], l = n[4], c = n[7];
            return n[0] = e * r + i * o, n[3] = e * s + i * l, n[6] = e * a + i * c, n[1] = -i * r + e * o, n[4] = -i * s + e * l, n[7] = -i * a + e * c, this;
        }
        translate(t, e) {
            const i = this.elements;
            return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e * i[5], i[7] += e * i[8], this;
        }
        equals(t) {
            const e = this.elements, i = t.elements;
            for(let t9 = 0; t9 < 9; t9++)if (e[t9] !== i[t9]) return !1;
            return !0;
        }
        fromArray(t, e = 0) {
            for(let i = 0; i < 9; i++)this.elements[i] = t[i + e];
            return this;
        }
        toArray(t = [], e = 0) {
            const i = this.elements;
            return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t;
        }
        clone() {
            return (new this.constructor).fromArray(this.elements);
        }
    }
    function Lt1(t) {
        for(let e = t.length - 1; e >= 0; --e)if (t[e] > 65535) return !0;
        return !1;
    }
    const Rt1 = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: Uint8ClampedArray,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    function Pt1(t, e) {
        return new Rt1[t](e);
    }
    function It(t) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", t);
    }
    function Dt1(t) {
        return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4);
    }
    function Nt1(t) {
        return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055;
    }
    const zt1 = {
        [lt1]: {
            [ct1]: Dt1
        },
        [ct1]: {
            [lt1]: Nt1
        }
    }, Ot1 = {
        legacyMode: !0,
        get workingColorSpace () {
            return ct1;
        },
        set workingColorSpace (t){
            console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
        },
        convert: function(t, e, i) {
            if (this.legacyMode || e === i || !e || !i) return t;
            if (zt1[e] && void 0 !== zt1[e][i]) {
                const n = zt1[e][i];
                return t.r = n(t.r), t.g = n(t.g), t.b = n(t.b), t;
            }
            throw new Error("Unsupported color space conversion.");
        },
        fromWorkingColorSpace: function(t, e) {
            return this.convert(t, this.workingColorSpace, e);
        },
        toWorkingColorSpace: function(t, e) {
            return this.convert(t, e, this.workingColorSpace);
        }
    }, Ft1 = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }, Bt = {
        r: 0,
        g: 0,
        b: 0
    }, Ut = {
        h: 0,
        s: 0,
        l: 0
    }, kt = {
        h: 0,
        s: 0,
        l: 0
    };
    function Gt(t, e, i) {
        return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t;
    }
    function Vt(t, e) {
        return e.r = t.r, e.g = t.g, e.b = t.b, e;
    }
    class Ht {
        constructor(t, e, i){
            return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i);
        }
        set(t) {
            return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this;
        }
        setScalar(t) {
            return this.r = t, this.g = t, this.b = t, this;
        }
        setHex(t, e = "srgb") {
            return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, Ot1.toWorkingColorSpace(this, e), this;
        }
        setRGB(t, e, i, n = "srgb-linear") {
            return this.r = t, this.g = e, this.b = i, Ot1.toWorkingColorSpace(this, n), this;
        }
        setHSL(t, e, i, n = "srgb-linear") {
            if (t = Mt1(t, 1), e = _t1(e, 0, 1), i = _t1(i, 0, 1), 0 === e) this.r = this.g = this.b = i;
            else {
                const n = i <= .5 ? i * (1 + e) : i + e - i * e, r = 2 * i - n;
                this.r = Gt(r, n, t + 1 / 3), this.g = Gt(r, n, t), this.b = Gt(r, n, t - 1 / 3);
            }
            return Ot1.toWorkingColorSpace(this, n), this;
        }
        setStyle(t, e3 = "srgb") {
            function i(e) {
                void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
            }
            let n;
            if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
                let t;
                const r = n[1], s = n[2];
                switch(r){
                    case "rgb":
                    case "rgba":
                        if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, Ot1.toWorkingColorSpace(this, e3), i(t[4]), this;
                        if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, Ot1.toWorkingColorSpace(this, e3), i(t[4]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) {
                            const n = parseFloat(t[1]) / 360, r = parseInt(t[2], 10) / 100, s = parseInt(t[3], 10) / 100;
                            return i(t[4]), this.setHSL(n, r, s, e3);
                        }
                }
            } else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
                const t = n[1], i = t.length;
                if (3 === i) return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255, this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255, this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255, Ot1.toWorkingColorSpace(this, e3), this;
                if (6 === i) return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255, this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255, this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255, Ot1.toWorkingColorSpace(this, e3), this;
            }
            return t && t.length > 0 ? this.setColorName(t, e3) : this;
        }
        setColorName(t, e = "srgb") {
            const i = Ft1[t.toLowerCase()];
            return void 0 !== i ? this.setHex(i, e) : console.warn("THREE.Color: Unknown color " + t), this;
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b);
        }
        copy(t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this;
        }
        copySRGBToLinear(t) {
            return this.r = Dt1(t.r), this.g = Dt1(t.g), this.b = Dt1(t.b), this;
        }
        copyLinearToSRGB(t) {
            return this.r = Nt1(t.r), this.g = Nt1(t.g), this.b = Nt1(t.b), this;
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this;
        }
        getHex(t = "srgb") {
            return Ot1.fromWorkingColorSpace(Vt(this, Bt), t), _t1(255 * Bt.r, 0, 255) << 16 ^ _t1(255 * Bt.g, 0, 255) << 8 ^ _t1(255 * Bt.b, 0, 255) << 0;
        }
        getHexString(t = "srgb") {
            return ("000000" + this.getHex(t).toString(16)).slice(-6);
        }
        getHSL(t, e = "srgb-linear") {
            Ot1.fromWorkingColorSpace(Vt(this, Bt), e);
            const i = Bt.r, n = Bt.g, r = Bt.b, s = Math.max(i, n, r), a = Math.min(i, n, r);
            let o, l;
            const c = (a + s) / 2;
            if (a === s) o = 0, l = 0;
            else {
                const t = s - a;
                switch(l = c <= .5 ? t / (s + a) : t / (2 - s - a), s){
                    case i:
                        o = (n - r) / t + (n < r ? 6 : 0);
                        break;
                    case n:
                        o = (r - i) / t + 2;
                        break;
                    case r:
                        o = (i - n) / t + 4;
                }
                o /= 6;
            }
            return t.h = o, t.s = l, t.l = c, t;
        }
        getRGB(t, e = "srgb-linear") {
            return Ot1.fromWorkingColorSpace(Vt(this, Bt), e), t.r = Bt.r, t.g = Bt.g, t.b = Bt.b, t;
        }
        getStyle(t = "srgb") {
            return Ot1.fromWorkingColorSpace(Vt(this, Bt), t), t !== lt1 ? `color(${t} ${Bt.r} ${Bt.g} ${Bt.b})` : `rgb(${255 * Bt.r | 0},${255 * Bt.g | 0},${255 * Bt.b | 0})`;
        }
        offsetHSL(t, e, i) {
            return this.getHSL(Ut), Ut.h += t, Ut.s += e, Ut.l += i, this.setHSL(Ut.h, Ut.s, Ut.l), this;
        }
        add(t) {
            return this.r += t.r, this.g += t.g, this.b += t.b, this;
        }
        addColors(t, e) {
            return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
        }
        addScalar(t) {
            return this.r += t, this.g += t, this.b += t, this;
        }
        sub(t) {
            return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
        }
        multiply(t) {
            return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
        }
        multiplyScalar(t) {
            return this.r *= t, this.g *= t, this.b *= t, this;
        }
        lerp(t, e) {
            return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
        }
        lerpColors(t, e, i) {
            return this.r = t.r + (e.r - t.r) * i, this.g = t.g + (e.g - t.g) * i, this.b = t.b + (e.b - t.b) * i, this;
        }
        lerpHSL(t, e) {
            this.getHSL(Ut), t.getHSL(kt);
            const i = bt1(Ut.h, kt.h, e), n = bt1(Ut.s, kt.s, e), r = bt1(Ut.l, kt.l, e);
            return this.setHSL(i, n, r), this;
        }
        equals(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b;
        }
        fromArray(t, e = 0) {
            return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
        }
        fromBufferAttribute(t, e) {
            return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), !0 === t.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this;
        }
        toJSON() {
            return this.getHex();
        }
        *[Symbol.iterator]() {
            yield this.r, yield this.g, yield this.b;
        }
    }
    let Wt;
    Ht.NAMES = Ft1;
    class jt {
        static getDataURL(t) {
            if (/^data:/i.test(t.src)) return t.src;
            if ("undefined" == typeof HTMLCanvasElement) return t.src;
            let e;
            if (t instanceof HTMLCanvasElement) e = t;
            else {
                void 0 === Wt && (Wt = It("canvas")), Wt.width = t.width, Wt.height = t.height;
                const i = Wt.getContext("2d");
                t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), e = Wt;
            }
            return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png");
        }
        static sRGBToLinear(t) {
            if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                const e = It("canvas");
                e.width = t.width, e.height = t.height;
                const i = e.getContext("2d");
                i.drawImage(t, 0, 0, t.width, t.height);
                const n = i.getImageData(0, 0, t.width, t.height), r = n.data;
                for(let t10 = 0; t10 < r.length; t10++)r[t10] = 255 * Dt1(r[t10] / 255);
                return i.putImageData(n, 0, 0), e;
            }
            if (t.data) {
                const e = t.data.slice(0);
                for(let t11 = 0; t11 < e.length; t11++)e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t11] = Math.floor(255 * Dt1(e[t11] / 255)) : e[t11] = Dt1(e[t11]);
                return {
                    data: e,
                    width: t.width,
                    height: t.height
                };
            }
            return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
        }
    }
    class qt {
        constructor(t = null){
            this.isSource = !0, this.uuid = yt1(), this.data = t, this.version = 0;
        }
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
        toJSON(t) {
            const e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
            const i = {
                uuid: this.uuid,
                url: ""
            }, n = this.data;
            if (null !== n) {
                let t;
                if (Array.isArray(n)) {
                    t = [];
                    for(let e = 0, i = n.length; e < i; e++)n[e].isDataTexture ? t.push(Xt(n[e].image)) : t.push(Xt(n[e]));
                } else t = Xt(n);
                i.url = t;
            }
            return e || (t.images[this.uuid] = i), i;
        }
    }
    function Xt(t) {
        return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? jt.getDataURL(t) : t.data ? {
            data: Array.prototype.slice.call(t.data),
            width: t.width,
            height: t.height,
            type: t.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
    }
    let Jt = 0;
    class Yt extends mt1 {
        constructor(t = Yt.DEFAULT_IMAGE, e = Yt.DEFAULT_MAPPING, i = 1001, n = 1001, r = 1006, s = 1008, a = 1023, o = 1009, l = 1, c = 3e3){
            super(), this.isTexture = !0, Object.defineProperty(this, "id", {
                value: Jt++
            }), this.uuid = yt1(), this.name = "", this.source = new qt(t), this.mipmaps = [], this.mapping = e, this.wrapS = i, this.wrapT = n, this.magFilter = r, this.minFilter = s, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = o, this.offset = new Et(0, 0), this.repeat = new Et(1, 1), this.center = new Et(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ct1, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
        }
        get image() {
            return this.source.data;
        }
        set image(t) {
            this.source.data = t;
        }
        updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
        }
        toJSON(t) {
            const e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
            const i = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                image: this.source.toJSON(t).uuid,
                mapping: this.mapping,
                repeat: [
                    this.repeat.x,
                    this.repeat.y
                ],
                offset: [
                    this.offset.x,
                    this.offset.y
                ],
                center: [
                    this.center.x,
                    this.center.y
                ],
                rotation: this.rotation,
                wrap: [
                    this.wrapS,
                    this.wrapT
                ],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            return "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), e || (t.textures[this.uuid] = i), i;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        transformUv(t) {
            if (this.mapping !== n1) return t;
            if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch(this.wrapS){
                case c1:
                    t.x = t.x - Math.floor(t.x);
                    break;
                case h1:
                    t.x = t.x < 0 ? 0 : 1;
                    break;
                case u1:
                    1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
            }
            if (t.y < 0 || t.y > 1) switch(this.wrapT){
                case c1:
                    t.y = t.y - Math.floor(t.y);
                    break;
                case h1:
                    t.y = t.y < 0 ? 0 : 1;
                    break;
                case u1:
                    1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
            }
            return this.flipY && (t.y = 1 - t.y), t;
        }
        set needsUpdate(t) {
            !0 === t && (this.version++, this.source.needsUpdate = !0);
        }
    }
    Yt.DEFAULT_IMAGE = null, Yt.DEFAULT_MAPPING = n1;
    class Zt {
        constructor(t = 0, e = 0, i = 0, n = 1){
            this.isVector4 = !0, this.x = t, this.y = e, this.z = i, this.w = n;
        }
        get width() {
            return this.z;
        }
        set width(t) {
            this.z = t;
        }
        get height() {
            return this.w;
        }
        set height(t) {
            this.w = t;
        }
        set(t, e, i, n) {
            return this.x = t, this.y = e, this.z = i, this.w = n, this;
        }
        setScalar(t) {
            return this.x = t, this.y = t, this.z = t, this.w = t, this;
        }
        setX(t) {
            return this.x = t, this;
        }
        setY(t) {
            return this.y = t, this;
        }
        setZ(t) {
            return this.z = t, this;
        }
        setW(t) {
            return this.w = t, this;
        }
        setComponent(t, e) {
            switch(t){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t);
            }
            return this;
        }
        getComponent(t) {
            switch(t){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z, this.w);
        }
        copy(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this;
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this);
        }
        addScalar(t) {
            return this.x += t, this.y += t, this.z += t, this.w += t, this;
        }
        addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
        }
        addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this);
        }
        subScalar(t) {
            return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
        }
        subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
        }
        multiply(t) {
            return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
        }
        multiplyScalar(t) {
            return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
        }
        applyMatrix4(t) {
            const e = this.x, i = this.y, n = this.z, r = this.w, s = t.elements;
            return this.x = s[0] * e + s[4] * i + s[8] * n + s[12] * r, this.y = s[1] * e + s[5] * i + s[9] * n + s[13] * r, this.z = s[2] * e + s[6] * i + s[10] * n + s[14] * r, this.w = s[3] * e + s[7] * i + s[11] * n + s[15] * r, this;
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        setAxisAngleFromQuaternion(t) {
            this.w = 2 * Math.acos(t.w);
            const e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
        }
        setAxisAngleFromRotationMatrix(t) {
            let e, i, n, r;
            const s = .01, a = .1, o = t.elements, l = o[0], c = o[4], h = o[8], u = o[1], d = o[5], p = o[9], m = o[2], f = o[6], g = o[10];
            if (Math.abs(c - u) < s && Math.abs(h - m) < s && Math.abs(p - f) < s) {
                if (Math.abs(c + u) < a && Math.abs(h + m) < a && Math.abs(p + f) < a && Math.abs(l + d + g - 3) < a) return this.set(1, 0, 0, 0), this;
                e = Math.PI;
                const t = (l + 1) / 2, o = (d + 1) / 2, v = (g + 1) / 2, x = (c + u) / 4, y = (h + m) / 4, _ = (p + f) / 4;
                return t > o && t > v ? t < s ? (i = 0, n = .707106781, r = .707106781) : (i = Math.sqrt(t), n = x / i, r = y / i) : o > v ? o < s ? (i = .707106781, n = 0, r = .707106781) : (n = Math.sqrt(o), i = x / n, r = _ / n) : v < s ? (i = .707106781, n = .707106781, r = 0) : (r = Math.sqrt(v), i = y / r, n = _ / r), this.set(i, n, r, e), this;
            }
            let v = Math.sqrt((f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c));
            return Math.abs(v) < .001 && (v = 1), this.x = (f - p) / v, this.y = (h - m) / v, this.z = (u - c) / v, this.w = Math.acos((l + d + g - 1) / 2), this;
        }
        min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
        }
        max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
        }
        clampLength(t, e) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
        }
        lerpVectors(t, e, i) {
            return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this.w = t.w + (e.w - t.w) * i, this;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
        }
        fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
        }
        fromBufferAttribute(t, e, i) {
            return void 0 !== i && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z, yield this.w;
        }
    }
    class Kt extends mt1 {
        constructor(t, e, i = {}){
            super(), this.isWebGLRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new Zt(0, 0, t, e), this.scissorTest = !1, this.viewport = new Zt(0, 0, t, e);
            const n = {
                width: t,
                height: e,
                depth: 1
            };
            this.texture = new Yt(n, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = void 0 !== i.generateMipmaps && i.generateMipmaps, this.texture.internalFormat = void 0 !== i.internalFormat ? i.internalFormat : null, this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : f1, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 !== i.stencilBuffer && i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null, this.samples = void 0 !== i.samples ? i.samples : 0;
        }
        setSize(t, e, i = 1) {
            this.width === t && this.height === e && this.depth === i || (this.width = t, this.height = e, this.depth = i, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = i, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0;
            const e = Object.assign({}, t.texture.image);
            return this.texture.source = new qt(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    class Qt extends Yt {
        constructor(t = null, e = 1, i = 1, n = 1){
            super(null), this.isDataArrayTexture = !0, this.image = {
                data: t,
                width: e,
                height: i,
                depth: n
            }, this.magFilter = d1, this.minFilter = d1, this.wrapR = h1, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    class $t extends Yt {
        constructor(t = null, e = 1, i = 1, n = 1){
            super(null), this.isData3DTexture = !0, this.image = {
                data: t,
                width: e,
                height: i,
                depth: n
            }, this.magFilter = d1, this.minFilter = d1, this.wrapR = h1, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    class te {
        constructor(t = 0, e = 0, i = 0, n = 1){
            this.isQuaternion = !0, this._x = t, this._y = e, this._z = i, this._w = n;
        }
        static slerp(t, e, i, n) {
            return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), i.slerpQuaternions(t, e, n);
        }
        static slerpFlat(t, e, i, n, r, s, a) {
            let o = i[n + 0], l = i[n + 1], c = i[n + 2], h = i[n + 3];
            const u = r[s + 0], d = r[s + 1], p = r[s + 2], m = r[s + 3];
            if (0 === a) return t[e + 0] = o, t[e + 1] = l, t[e + 2] = c, void (t[e + 3] = h);
            if (1 === a) return t[e + 0] = u, t[e + 1] = d, t[e + 2] = p, void (t[e + 3] = m);
            if (h !== m || o !== u || l !== d || c !== p) {
                let t = 1 - a;
                const e = o * u + l * d + c * p + h * m, i = e >= 0 ? 1 : -1, n = 1 - e * e;
                if (n > Number.EPSILON) {
                    const r = Math.sqrt(n), s = Math.atan2(r, e * i);
                    t = Math.sin(t * s) / r, a = Math.sin(a * s) / r;
                }
                const r = a * i;
                if (o = o * t + u * r, l = l * t + d * r, c = c * t + p * r, h = h * t + m * r, t === 1 - a) {
                    const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                    o *= t, l *= t, c *= t, h *= t;
                }
            }
            t[e] = o, t[e + 1] = l, t[e + 2] = c, t[e + 3] = h;
        }
        static multiplyQuaternionsFlat(t, e, i, n, r, s) {
            const a = i[n], o = i[n + 1], l = i[n + 2], c = i[n + 3], h = r[s], u = r[s + 1], d = r[s + 2], p = r[s + 3];
            return t[e] = a * p + c * h + o * d - l * u, t[e + 1] = o * p + c * u + l * h - a * d, t[e + 2] = l * p + c * d + a * u - o * h, t[e + 3] = c * p - a * h - o * u - l * d, t;
        }
        get x() {
            return this._x;
        }
        set x(t) {
            this._x = t, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t) {
            this._y = t, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t) {
            this._z = t, this._onChangeCallback();
        }
        get w() {
            return this._w;
        }
        set w(t) {
            this._w = t, this._onChangeCallback();
        }
        set(t, e, i, n) {
            return this._x = t, this._y = e, this._z = i, this._w = n, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._w);
        }
        copy(t) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
        }
        setFromEuler(t, e) {
            if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            const i = t._x, n = t._y, r = t._z, s = t._order, a = Math.cos, o = Math.sin, l = a(i / 2), c = a(n / 2), h = a(r / 2), u = o(i / 2), d = o(n / 2), p = o(r / 2);
            switch(s){
                case "XYZ":
                    this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "YXZ":
                    this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                    break;
                case "ZXY":
                    this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "ZYX":
                    this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                    break;
                case "YZX":
                    this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "XZY":
                    this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h + u * d * p;
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
            }
            return !1 !== e && this._onChangeCallback(), this;
        }
        setFromAxisAngle(t, e) {
            const i = e / 2, n = Math.sin(i);
            return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(i), this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t) {
            const e = t.elements, i = e[0], n = e[4], r = e[8], s = e[1], a = e[5], o = e[9], l = e[2], c = e[6], h = e[10], u = i + a + h;
            if (u > 0) {
                const t = .5 / Math.sqrt(u + 1);
                this._w = .25 / t, this._x = (c - o) * t, this._y = (r - l) * t, this._z = (s - n) * t;
            } else if (i > a && i > h) {
                const t = 2 * Math.sqrt(1 + i - a - h);
                this._w = (c - o) / t, this._x = .25 * t, this._y = (n + s) / t, this._z = (r + l) / t;
            } else if (a > h) {
                const t = 2 * Math.sqrt(1 + a - i - h);
                this._w = (r - l) / t, this._x = (n + s) / t, this._y = .25 * t, this._z = (o + c) / t;
            } else {
                const t = 2 * Math.sqrt(1 + h - i - a);
                this._w = (s - n) / t, this._x = (r + l) / t, this._y = (o + c) / t, this._z = .25 * t;
            }
            return this._onChangeCallback(), this;
        }
        setFromUnitVectors(t, e) {
            let i = t.dot(e) + 1;
            return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = i)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = i), this.normalize();
        }
        angleTo(t) {
            return 2 * Math.acos(Math.abs(_t1(this.dot(t), -1, 1)));
        }
        rotateTowards(t, e) {
            const i = this.angleTo(t);
            if (0 === i) return this;
            const n = Math.min(1, e / i);
            return this.slerp(t, n), this;
        }
        identity() {
            return this.set(0, 0, 0, 1);
        }
        invert() {
            return this.conjugate();
        }
        conjugate() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
        }
        dot(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
        }
        lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
        }
        normalize() {
            let t = this.length();
            return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t);
        }
        premultiply(t) {
            return this.multiplyQuaternions(t, this);
        }
        multiplyQuaternions(t, e) {
            const i = t._x, n = t._y, r = t._z, s = t._w, a = e._x, o = e._y, l = e._z, c = e._w;
            return this._x = i * c + s * a + n * l - r * o, this._y = n * c + s * o + r * a - i * l, this._z = r * c + s * l + i * o - n * a, this._w = s * c - i * a - n * o - r * l, this._onChangeCallback(), this;
        }
        slerp(t, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t);
            const i = this._x, n = this._y, r = this._z, s = this._w;
            let a = s * t._w + i * t._x + n * t._y + r * t._z;
            if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = s, this._x = i, this._y = n, this._z = r, this;
            const o = 1 - a * a;
            if (o <= Number.EPSILON) {
                const t = 1 - e;
                return this._w = t * s + e * this._w, this._x = t * i + e * this._x, this._y = t * n + e * this._y, this._z = t * r + e * this._z, this.normalize(), this._onChangeCallback(), this;
            }
            const l = Math.sqrt(o), c = Math.atan2(l, a), h = Math.sin((1 - e) * c) / l, u = Math.sin(e * c) / l;
            return this._w = s * h + this._w * u, this._x = i * h + this._x * u, this._y = n * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this;
        }
        slerpQuaternions(t, e, i) {
            return this.copy(t).slerp(e, i);
        }
        random() {
            const t = Math.random(), e = Math.sqrt(1 - t), i = Math.sqrt(t), n = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
            return this.set(e * Math.cos(n), i * Math.sin(r), i * Math.cos(r), e * Math.sin(n));
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
        }
        fromArray(t, e = 0) {
            return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
        }
        fromBufferAttribute(t, e) {
            return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this;
        }
        _onChange(t) {
            return this._onChangeCallback = t, this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._w;
        }
    }
    class ee {
        constructor(t = 0, e = 0, i = 0){
            this.isVector3 = !0, this.x = t, this.y = e, this.z = i;
        }
        set(t, e, i) {
            return void 0 === i && (i = this.z), this.x = t, this.y = e, this.z = i, this;
        }
        setScalar(t) {
            return this.x = t, this.y = t, this.z = t, this;
        }
        setX(t) {
            return this.x = t, this;
        }
        setY(t) {
            return this.y = t, this;
        }
        setZ(t) {
            return this.z = t, this;
        }
        setComponent(t, e) {
            switch(t){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t);
            }
            return this;
        }
        getComponent(t) {
            switch(t){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z);
        }
        copy(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this;
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this);
        }
        addScalar(t) {
            return this.x += t, this.y += t, this.z += t, this;
        }
        addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
        }
        addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this);
        }
        subScalar(t) {
            return this.x -= t, this.y -= t, this.z -= t, this;
        }
        subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this);
        }
        multiplyScalar(t) {
            return this.x *= t, this.y *= t, this.z *= t, this;
        }
        multiplyVectors(t, e) {
            return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
        }
        applyEuler(t) {
            return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(ne.setFromEuler(t));
        }
        applyAxisAngle(t, e) {
            return this.applyQuaternion(ne.setFromAxisAngle(t, e));
        }
        applyMatrix3(t) {
            const e = this.x, i = this.y, n = this.z, r = t.elements;
            return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n, this.z = r[2] * e + r[5] * i + r[8] * n, this;
        }
        applyNormalMatrix(t) {
            return this.applyMatrix3(t).normalize();
        }
        applyMatrix4(t) {
            const e = this.x, i = this.y, n = this.z, r = t.elements, s = 1 / (r[3] * e + r[7] * i + r[11] * n + r[15]);
            return this.x = (r[0] * e + r[4] * i + r[8] * n + r[12]) * s, this.y = (r[1] * e + r[5] * i + r[9] * n + r[13]) * s, this.z = (r[2] * e + r[6] * i + r[10] * n + r[14]) * s, this;
        }
        applyQuaternion(t) {
            const e = this.x, i = this.y, n = this.z, r = t.x, s = t.y, a = t.z, o = t.w, l = o * e + s * n - a * i, c = o * i + a * e - r * n, h = o * n + r * i - s * e, u = -r * e - s * i - a * n;
            return this.x = l * o + u * -r + c * -a - h * -s, this.y = c * o + u * -s + h * -r - l * -a, this.z = h * o + u * -a + l * -s - c * -r, this;
        }
        project(t) {
            return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
        }
        unproject(t) {
            return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
        }
        transformDirection(t) {
            const e = this.x, i = this.y, n = this.z, r = t.elements;
            return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n, this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize();
        }
        divide(t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
        }
        max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
        }
        clampLength(t, e) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
        }
        lerpVectors(t, e, i) {
            return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this;
        }
        cross(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t);
        }
        crossVectors(t, e) {
            const i = t.x, n = t.y, r = t.z, s = e.x, a = e.y, o = e.z;
            return this.x = n * o - r * a, this.y = r * s - i * o, this.z = i * a - n * s, this;
        }
        projectOnVector(t) {
            const e = t.lengthSq();
            if (0 === e) return this.set(0, 0, 0);
            const i = t.dot(this) / e;
            return this.copy(t).multiplyScalar(i);
        }
        projectOnPlane(t) {
            return ie.copy(this).projectOnVector(t), this.sub(ie);
        }
        reflect(t) {
            return this.sub(ie.copy(t).multiplyScalar(2 * this.dot(t)));
        }
        angleTo(t) {
            const e = Math.sqrt(this.lengthSq() * t.lengthSq());
            if (0 === e) return Math.PI / 2;
            const i = this.dot(t) / e;
            return Math.acos(_t1(i, -1, 1));
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
            const e = this.x - t.x, i = this.y - t.y, n = this.z - t.z;
            return e * e + i * i + n * n;
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
        }
        setFromSpherical(t) {
            return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
        }
        setFromSphericalCoords(t, e, i) {
            const n = Math.sin(e) * t;
            return this.x = n * Math.sin(i), this.y = Math.cos(e) * t, this.z = n * Math.cos(i), this;
        }
        setFromCylindrical(t) {
            return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
        }
        setFromCylindricalCoords(t, e, i) {
            return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this;
        }
        setFromMatrixPosition(t) {
            const e = t.elements;
            return this.x = e[12], this.y = e[13], this.z = e[14], this;
        }
        setFromMatrixScale(t) {
            const e = this.setFromMatrixColumn(t, 0).length(), i = this.setFromMatrixColumn(t, 1).length(), n = this.setFromMatrixColumn(t, 2).length();
            return this.x = e, this.y = i, this.z = n, this;
        }
        setFromMatrixColumn(t, e) {
            return this.fromArray(t.elements, 4 * e);
        }
        setFromMatrix3Column(t, e) {
            return this.fromArray(t.elements, 3 * e);
        }
        setFromEuler(t) {
            return this.x = t._x, this.y = t._y, this.z = t._z, this;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z;
        }
        fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
        }
        fromBufferAttribute(t, e, i) {
            return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
        }
        randomDirection() {
            const t = 2 * (Math.random() - .5), e = Math.random() * Math.PI * 2, i = Math.sqrt(1 - t ** 2);
            return this.x = i * Math.cos(e), this.y = i * Math.sin(e), this.z = t, this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z;
        }
    }
    const ie = new ee, ne = new te;
    class re {
        constructor(t = new ee(1 / 0, 1 / 0, 1 / 0), e = new ee(-1 / 0, -1 / 0, -1 / 0)){
            this.isBox3 = !0, this.min = t, this.max = e;
        }
        set(t, e) {
            return this.min.copy(t), this.max.copy(e), this;
        }
        setFromArray(t) {
            let e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, s = -1 / 0, a = -1 / 0;
            for(let o = 0, l = t.length; o < l; o += 3){
                const l = t[o], c = t[o + 1], h = t[o + 2];
                l < e && (e = l), c < i && (i = c), h < n && (n = h), l > r && (r = l), c > s && (s = c), h > a && (a = h);
            }
            return this.min.set(e, i, n), this.max.set(r, s, a), this;
        }
        setFromBufferAttribute(t) {
            let e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, s = -1 / 0, a = -1 / 0;
            for(let o = 0, l = t.count; o < l; o++){
                const l = t.getX(o), c = t.getY(o), h = t.getZ(o);
                l < e && (e = l), c < i && (i = c), h < n && (n = h), l > r && (r = l), c > s && (s = c), h > a && (a = h);
            }
            return this.min.set(e, i, n), this.max.set(r, s, a), this;
        }
        setFromPoints(t) {
            this.makeEmpty();
            for(let e = 0, i = t.length; e < i; e++)this.expandByPoint(t[e]);
            return this;
        }
        setFromCenterAndSize(t, e) {
            const i = ae.copy(e).multiplyScalar(.5);
            return this.min.copy(t).sub(i), this.max.copy(t).add(i), this;
        }
        setFromObject(t, e = !1) {
            return this.makeEmpty(), this.expandByObject(t, e);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this;
        }
        makeEmpty() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
        }
        getCenter(t) {
            return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
        }
        getSize(t) {
            return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
        }
        expandByPoint(t) {
            return this.min.min(t), this.max.max(t), this;
        }
        expandByVector(t) {
            return this.min.sub(t), this.max.add(t), this;
        }
        expandByScalar(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this;
        }
        expandByObject(t, e = !1) {
            t.updateWorldMatrix(!1, !1);
            const i = t.geometry;
            if (void 0 !== i) {
                if (e && null != i.attributes && void 0 !== i.attributes.position) {
                    const e = i.attributes.position;
                    for(let i3 = 0, n = e.count; i3 < n; i3++)ae.fromBufferAttribute(e, i3).applyMatrix4(t.matrixWorld), this.expandByPoint(ae);
                } else null === i.boundingBox && i.computeBoundingBox(), oe.copy(i.boundingBox), oe.applyMatrix4(t.matrixWorld), this.union(oe);
            }
            const n = t.children;
            for(let t12 = 0, i2 = n.length; t12 < i2; t12++)this.expandByObject(n[t12], e);
            return this;
        }
        containsPoint(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
        }
        containsBox(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
        }
        getParameter(t, e) {
            return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
        }
        intersectsBox(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
        }
        intersectsSphere(t) {
            return this.clampPoint(t.center, ae), ae.distanceToSquared(t.center) <= t.radius * t.radius;
        }
        intersectsPlane(t) {
            let e, i;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant;
        }
        intersectsTriangle(t) {
            if (this.isEmpty()) return !1;
            this.getCenter(me), fe.subVectors(this.max, me), le.subVectors(t.a, me), ce.subVectors(t.b, me), he.subVectors(t.c, me), ue.subVectors(ce, le), de.subVectors(he, ce), pe.subVectors(le, he);
            let e = [
                0,
                -ue.z,
                ue.y,
                0,
                -de.z,
                de.y,
                0,
                -pe.z,
                pe.y,
                ue.z,
                0,
                -ue.x,
                de.z,
                0,
                -de.x,
                pe.z,
                0,
                -pe.x,
                -ue.y,
                ue.x,
                0,
                -de.y,
                de.x,
                0,
                -pe.y,
                pe.x,
                0
            ];
            return !!xe(e, le, ce, he, fe) && (e = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], !!xe(e, le, ce, he, fe) && (ge.crossVectors(ue, de), e = [
                ge.x,
                ge.y,
                ge.z
            ], xe(e, le, ce, he, fe)));
        }
        clampPoint(t, e) {
            return e.copy(t).clamp(this.min, this.max);
        }
        distanceToPoint(t) {
            return ae.copy(t).clamp(this.min, this.max).sub(t).length();
        }
        getBoundingSphere(t) {
            return this.getCenter(t.center), t.radius = .5 * this.getSize(ae).length(), t;
        }
        intersect(t) {
            return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
        }
        union(t) {
            return this.min.min(t.min), this.max.max(t.max), this;
        }
        applyMatrix4(t) {
            return this.isEmpty() || (se[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), se[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), se[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), se[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), se[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), se[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), se[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), se[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(se)), this;
        }
        translate(t) {
            return this.min.add(t), this.max.add(t), this;
        }
        equals(t) {
            return t.min.equals(this.min) && t.max.equals(this.max);
        }
    }
    const se = [
        new ee,
        new ee,
        new ee,
        new ee,
        new ee,
        new ee,
        new ee,
        new ee
    ], ae = new ee, oe = new re, le = new ee, ce = new ee, he = new ee, ue = new ee, de = new ee, pe = new ee, me = new ee, fe = new ee, ge = new ee, ve = new ee;
    function xe(t, e, i, n, r) {
        for(let s = 0, a = t.length - 3; s <= a; s += 3){
            ve.fromArray(t, s);
            const a = r.x * Math.abs(ve.x) + r.y * Math.abs(ve.y) + r.z * Math.abs(ve.z), o = e.dot(ve), l = i.dot(ve), c = n.dot(ve);
            if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1;
        }
        return !0;
    }
    const ye = new re, _e = new ee, Me = new ee, be = new ee;
    class we {
        constructor(t = new ee, e = -1){
            this.center = t, this.radius = e;
        }
        set(t, e) {
            return this.center.copy(t), this.radius = e, this;
        }
        setFromPoints(t, e) {
            const i = this.center;
            void 0 !== e ? i.copy(e) : ye.setFromPoints(t).getCenter(i);
            let n = 0;
            for(let e4 = 0, r = t.length; e4 < r; e4++)n = Math.max(n, i.distanceToSquared(t[e4]));
            return this.radius = Math.sqrt(n), this;
        }
        copy(t) {
            return this.center.copy(t.center), this.radius = t.radius, this;
        }
        isEmpty() {
            return this.radius < 0;
        }
        makeEmpty() {
            return this.center.set(0, 0, 0), this.radius = -1, this;
        }
        containsPoint(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius;
        }
        distanceToPoint(t) {
            return t.distanceTo(this.center) - this.radius;
        }
        intersectsSphere(t) {
            const e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e;
        }
        intersectsBox(t) {
            return t.intersectsSphere(this);
        }
        intersectsPlane(t) {
            return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
        }
        clampPoint(t, e) {
            const i = this.center.distanceToSquared(t);
            return e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
        }
        getBoundingBox(t) {
            return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
        }
        applyMatrix4(t) {
            return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
        }
        translate(t) {
            return this.center.add(t), this;
        }
        expandByPoint(t) {
            be.subVectors(t, this.center);
            const e = be.lengthSq();
            if (e > this.radius * this.radius) {
                const t = Math.sqrt(e), i = .5 * (t - this.radius);
                this.center.add(be.multiplyScalar(i / t)), this.radius += i;
            }
            return this;
        }
        union(t) {
            return !0 === this.center.equals(t.center) ? Me.set(0, 0, 1).multiplyScalar(t.radius) : Me.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius), this.expandByPoint(_e.copy(t.center).add(Me)), this.expandByPoint(_e.copy(t.center).sub(Me)), this;
        }
        equals(t) {
            return t.center.equals(this.center) && t.radius === this.radius;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    const Se = new ee, Te = new ee, Ae = new ee, Ee = new ee, Ce = new ee, Le = new ee, Re = new ee;
    class Pe {
        constructor(t = new ee, e = new ee(0, 0, -1)){
            this.origin = t, this.direction = e;
        }
        set(t, e) {
            return this.origin.copy(t), this.direction.copy(e), this;
        }
        copy(t) {
            return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
        }
        at(t, e) {
            return e.copy(this.direction).multiplyScalar(t).add(this.origin);
        }
        lookAt(t) {
            return this.direction.copy(t).sub(this.origin).normalize(), this;
        }
        recast(t) {
            return this.origin.copy(this.at(t, Se)), this;
        }
        closestPointToPoint(t, e) {
            e.subVectors(t, this.origin);
            const i = e.dot(this.direction);
            return i < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(i).add(this.origin);
        }
        distanceToPoint(t) {
            return Math.sqrt(this.distanceSqToPoint(t));
        }
        distanceSqToPoint(t) {
            const e = Se.subVectors(t, this.origin).dot(this.direction);
            return e < 0 ? this.origin.distanceToSquared(t) : (Se.copy(this.direction).multiplyScalar(e).add(this.origin), Se.distanceToSquared(t));
        }
        distanceSqToSegment(t, e, i, n) {
            Te.copy(t).add(e).multiplyScalar(.5), Ae.copy(e).sub(t).normalize(), Ee.copy(this.origin).sub(Te);
            const r = .5 * t.distanceTo(e), s = -this.direction.dot(Ae), a = Ee.dot(this.direction), o = -Ee.dot(Ae), l = Ee.lengthSq(), c = Math.abs(1 - s * s);
            let h, u, d, p;
            if (c > 0) {
                if (h = s * o - a, u = s * a - o, p = r * c, h >= 0) {
                    if (u >= -p) {
                        if (u <= p) {
                            const t = 1 / c;
                            h *= t, u *= t, d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l;
                        } else u = r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
                    } else u = -r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
                } else u <= -p ? (h = Math.max(0, -(-s * r + a)), u = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(s * r + a)), u = h > 0 ? r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l);
            } else u = s > 0 ? -r : r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
            return i && i.copy(this.direction).multiplyScalar(h).add(this.origin), n && n.copy(Ae).multiplyScalar(u).add(Te), d;
        }
        intersectSphere(t, e) {
            Se.subVectors(t.center, this.origin);
            const i = Se.dot(this.direction), n = Se.dot(Se) - i * i, r = t.radius * t.radius;
            if (n > r) return null;
            const s = Math.sqrt(r - n), a = i - s, o = i + s;
            return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e);
        }
        intersectsSphere(t) {
            return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
        }
        distanceToPlane(t) {
            const e = t.normal.dot(this.direction);
            if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            const i = -(this.origin.dot(t.normal) + t.constant) / e;
            return i >= 0 ? i : null;
        }
        intersectPlane(t, e) {
            const i = this.distanceToPlane(t);
            return null === i ? null : this.at(i, e);
        }
        intersectsPlane(t) {
            const e = t.distanceToPoint(this.origin);
            if (0 === e) return !0;
            return t.normal.dot(this.direction) * e < 0;
        }
        intersectBox(t, e) {
            let i, n, r, s, a, o;
            const l = 1 / this.direction.x, c = 1 / this.direction.y, h = 1 / this.direction.z, u = this.origin;
            return l >= 0 ? (i = (t.min.x - u.x) * l, n = (t.max.x - u.x) * l) : (i = (t.max.x - u.x) * l, n = (t.min.x - u.x) * l), c >= 0 ? (r = (t.min.y - u.y) * c, s = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c, s = (t.min.y - u.y) * c), i > s || r > n ? null : ((r > i || i != i) && (i = r), (s < n || n != n) && (n = s), h >= 0 ? (a = (t.min.z - u.z) * h, o = (t.max.z - u.z) * h) : (a = (t.max.z - u.z) * h, o = (t.min.z - u.z) * h), i > o || a > n ? null : ((a > i || i != i) && (i = a), (o < n || n != n) && (n = o), n < 0 ? null : this.at(i >= 0 ? i : n, e)));
        }
        intersectsBox(t) {
            return null !== this.intersectBox(t, Se);
        }
        intersectTriangle(t, e, i, n, r) {
            Ce.subVectors(e, t), Le.subVectors(i, t), Re.crossVectors(Ce, Le);
            let s, a = this.direction.dot(Re);
            if (a > 0) {
                if (n) return null;
                s = 1;
            } else {
                if (!(a < 0)) return null;
                s = -1, a = -a;
            }
            Ee.subVectors(this.origin, t);
            const o = s * this.direction.dot(Le.crossVectors(Ee, Le));
            if (o < 0) return null;
            const l = s * this.direction.dot(Ce.cross(Ee));
            if (l < 0) return null;
            if (o + l > a) return null;
            const c = -s * Ee.dot(Re);
            return c < 0 ? null : this.at(c / a, r);
        }
        applyMatrix4(t) {
            return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
        }
        equals(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    class Ie {
        constructor(){
            this.isMatrix4 = !0, this.elements = [
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1
            ], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
        }
        set(t, e, i, n, r, s, a, o, l, c, h, u, d, p, m, f) {
            const g = this.elements;
            return g[0] = t, g[4] = e, g[8] = i, g[12] = n, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = m, g[15] = f, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
            return (new Ie).fromArray(this.elements);
        }
        copy(t) {
            const e = this.elements, i = t.elements;
            return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this;
        }
        copyPosition(t) {
            const e = this.elements, i = t.elements;
            return e[12] = i[12], e[13] = i[13], e[14] = i[14], this;
        }
        setFromMatrix3(t) {
            const e = t.elements;
            return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
        }
        extractBasis(t, e, i) {
            return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
        }
        makeBasis(t, e, i) {
            return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this;
        }
        extractRotation(t) {
            const e = this.elements, i = t.elements, n = 1 / De.setFromMatrixColumn(t, 0).length(), r = 1 / De.setFromMatrixColumn(t, 1).length(), s = 1 / De.setFromMatrixColumn(t, 2).length();
            return e[0] = i[0] * n, e[1] = i[1] * n, e[2] = i[2] * n, e[3] = 0, e[4] = i[4] * r, e[5] = i[5] * r, e[6] = i[6] * r, e[7] = 0, e[8] = i[8] * s, e[9] = i[9] * s, e[10] = i[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromEuler(t) {
            t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            const e = this.elements, i = t.x, n = t.y, r = t.z, s = Math.cos(i), a = Math.sin(i), o = Math.cos(n), l = Math.sin(n), c = Math.cos(r), h = Math.sin(r);
            if ("XYZ" === t.order) {
                const t = s * c, i = s * h, n = a * c, r = a * h;
                e[0] = o * c, e[4] = -o * h, e[8] = l, e[1] = i + n * l, e[5] = t - r * l, e[9] = -a * o, e[2] = r - t * l, e[6] = n + i * l, e[10] = s * o;
            } else if ("YXZ" === t.order) {
                const t = o * c, i = o * h, n = l * c, r = l * h;
                e[0] = t + r * a, e[4] = n * a - i, e[8] = s * l, e[1] = s * h, e[5] = s * c, e[9] = -a, e[2] = i * a - n, e[6] = r + t * a, e[10] = s * o;
            } else if ("ZXY" === t.order) {
                const t = o * c, i = o * h, n = l * c, r = l * h;
                e[0] = t - r * a, e[4] = -s * h, e[8] = n + i * a, e[1] = i + n * a, e[5] = s * c, e[9] = r - t * a, e[2] = -s * l, e[6] = a, e[10] = s * o;
            } else if ("ZYX" === t.order) {
                const t = s * c, i = s * h, n = a * c, r = a * h;
                e[0] = o * c, e[4] = n * l - i, e[8] = t * l + r, e[1] = o * h, e[5] = r * l + t, e[9] = i * l - n, e[2] = -l, e[6] = a * o, e[10] = s * o;
            } else if ("YZX" === t.order) {
                const t = s * o, i = s * l, n = a * o, r = a * l;
                e[0] = o * c, e[4] = r - t * h, e[8] = n * h + i, e[1] = h, e[5] = s * c, e[9] = -a * c, e[2] = -l * c, e[6] = i * h + n, e[10] = t - r * h;
            } else if ("XZY" === t.order) {
                const t = s * o, i = s * l, n = a * o, r = a * l;
                e[0] = o * c, e[4] = -h, e[8] = l * c, e[1] = t * h + r, e[5] = s * c, e[9] = i * h - n, e[2] = n * h - i, e[6] = a * c, e[10] = r * h + t;
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromQuaternion(t) {
            return this.compose(ze, t, Oe);
        }
        lookAt(t, e, i) {
            const n = this.elements;
            return Ue.subVectors(t, e), 0 === Ue.lengthSq() && (Ue.z = 1), Ue.normalize(), Fe.crossVectors(i, Ue), 0 === Fe.lengthSq() && (1 === Math.abs(i.z) ? Ue.x += 1e-4 : Ue.z += 1e-4, Ue.normalize(), Fe.crossVectors(i, Ue)), Fe.normalize(), Be.crossVectors(Ue, Fe), n[0] = Fe.x, n[4] = Be.x, n[8] = Ue.x, n[1] = Fe.y, n[5] = Be.y, n[9] = Ue.y, n[2] = Fe.z, n[6] = Be.z, n[10] = Ue.z, this;
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t);
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
            const i = t.elements, n = e.elements, r = this.elements, s = i[0], a = i[4], o = i[8], l = i[12], c = i[1], h = i[5], u = i[9], d = i[13], p = i[2], m = i[6], f = i[10], g = i[14], v = i[3], x = i[7], y = i[11], _ = i[15], M = n[0], b = n[4], w = n[8], S = n[12], T = n[1], A = n[5], E = n[9], C = n[13], L = n[2], R = n[6], P = n[10], I = n[14], D = n[3], N = n[7], z = n[11], O = n[15];
            return r[0] = s * M + a * T + o * L + l * D, r[4] = s * b + a * A + o * R + l * N, r[8] = s * w + a * E + o * P + l * z, r[12] = s * S + a * C + o * I + l * O, r[1] = c * M + h * T + u * L + d * D, r[5] = c * b + h * A + u * R + d * N, r[9] = c * w + h * E + u * P + d * z, r[13] = c * S + h * C + u * I + d * O, r[2] = p * M + m * T + f * L + g * D, r[6] = p * b + m * A + f * R + g * N, r[10] = p * w + m * E + f * P + g * z, r[14] = p * S + m * C + f * I + g * O, r[3] = v * M + x * T + y * L + _ * D, r[7] = v * b + x * A + y * R + _ * N, r[11] = v * w + x * E + y * P + _ * z, r[15] = v * S + x * C + y * I + _ * O, this;
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
        }
        determinant() {
            const t = this.elements, e = t[0], i = t[4], n = t[8], r = t[12], s = t[1], a = t[5], o = t[9], l = t[13], c = t[2], h = t[6], u = t[10], d = t[14];
            return t[3] * (+r * o * h - n * l * h - r * a * u + i * l * u + n * a * d - i * o * d) + t[7] * (+e * o * d - e * l * u + r * s * u - n * s * d + n * l * c - r * o * c) + t[11] * (+e * l * h - e * a * d - r * s * h + i * s * d + r * a * c - i * l * c) + t[15] * (-n * a * c - e * o * h + e * a * u + n * s * h - i * s * u + i * o * c);
        }
        transpose() {
            const t = this.elements;
            let e;
            return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
        }
        setPosition(t, e, i) {
            const n = this.elements;
            return t.isVector3 ? (n[12] = t.x, n[13] = t.y, n[14] = t.z) : (n[12] = t, n[13] = e, n[14] = i), this;
        }
        invert() {
            const t = this.elements, e = t[0], i = t[1], n = t[2], r = t[3], s = t[4], a = t[5], o = t[6], l = t[7], c = t[8], h = t[9], u = t[10], d = t[11], p = t[12], m = t[13], f = t[14], g = t[15], v = h * f * l - m * u * l + m * o * d - a * f * d - h * o * g + a * u * g, x = p * u * l - c * f * l - p * o * d + s * f * d + c * o * g - s * u * g, y = c * m * l - p * h * l + p * a * d - s * m * d - c * a * g + s * h * g, _ = p * h * o - c * m * o - p * a * u + s * m * u + c * a * f - s * h * f, M = e * v + i * x + n * y + r * _;
            if (0 === M) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const b = 1 / M;
            return t[0] = v * b, t[1] = (m * u * r - h * f * r - m * n * d + i * f * d + h * n * g - i * u * g) * b, t[2] = (a * f * r - m * o * r + m * n * l - i * f * l - a * n * g + i * o * g) * b, t[3] = (h * o * r - a * u * r - h * n * l + i * u * l + a * n * d - i * o * d) * b, t[4] = x * b, t[5] = (c * f * r - p * u * r + p * n * d - e * f * d - c * n * g + e * u * g) * b, t[6] = (p * o * r - s * f * r - p * n * l + e * f * l + s * n * g - e * o * g) * b, t[7] = (s * u * r - c * o * r + c * n * l - e * u * l - s * n * d + e * o * d) * b, t[8] = y * b, t[9] = (p * h * r - c * m * r - p * i * d + e * m * d + c * i * g - e * h * g) * b, t[10] = (s * m * r - p * a * r + p * i * l - e * m * l - s * i * g + e * a * g) * b, t[11] = (c * a * r - s * h * r - c * i * l + e * h * l + s * i * d - e * a * d) * b, t[12] = _ * b, t[13] = (c * m * n - p * h * n + p * i * u - e * m * u - c * i * f + e * h * f) * b, t[14] = (p * a * n - s * m * n - p * i * o + e * m * o + s * i * f - e * a * f) * b, t[15] = (s * h * n - c * a * n + c * i * o - e * h * o - s * i * u + e * a * u) * b, this;
        }
        scale(t) {
            const e = this.elements, i = t.x, n = t.y, r = t.z;
            return e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *= n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r, this;
        }
        getMaxScaleOnAxis() {
            const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, i, n));
        }
        makeTranslation(t, e, i) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this;
        }
        makeRotationX(t) {
            const e = Math.cos(t), i = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationY(t) {
            const e = Math.cos(t), i = Math.sin(t);
            return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationZ(t) {
            const e = Math.cos(t), i = Math.sin(t);
            return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        makeRotationAxis(t, e) {
            const i = Math.cos(e), n = Math.sin(e), r = 1 - i, s = t.x, a = t.y, o = t.z, l = r * s, c = r * a;
            return this.set(l * s + i, l * a - n * o, l * o + n * a, 0, l * a + n * o, c * a + i, c * o - n * s, 0, l * o - n * a, c * o + n * s, r * o * o + i, 0, 0, 0, 0, 1), this;
        }
        makeScale(t, e, i) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
        }
        makeShear(t, e, i, n, r, s) {
            return this.set(1, i, r, 0, t, 1, s, 0, e, n, 1, 0, 0, 0, 0, 1), this;
        }
        compose(t, e, i) {
            const n = this.elements, r = e._x, s = e._y, a = e._z, o = e._w, l = r + r, c = s + s, h = a + a, u = r * l, d = r * c, p = r * h, m = s * c, f = s * h, g = a * h, v = o * l, x = o * c, y = o * h, _ = i.x, M = i.y, b = i.z;
            return n[0] = (1 - (m + g)) * _, n[1] = (d + y) * _, n[2] = (p - x) * _, n[3] = 0, n[4] = (d - y) * M, n[5] = (1 - (u + g)) * M, n[6] = (f + v) * M, n[7] = 0, n[8] = (p + x) * b, n[9] = (f - v) * b, n[10] = (1 - (u + m)) * b, n[11] = 0, n[12] = t.x, n[13] = t.y, n[14] = t.z, n[15] = 1, this;
        }
        decompose(t, e, i) {
            const n = this.elements;
            let r = De.set(n[0], n[1], n[2]).length();
            const s = De.set(n[4], n[5], n[6]).length(), a = De.set(n[8], n[9], n[10]).length();
            this.determinant() < 0 && (r = -r), t.x = n[12], t.y = n[13], t.z = n[14], Ne.copy(this);
            const o = 1 / r, l = 1 / s, c = 1 / a;
            return Ne.elements[0] *= o, Ne.elements[1] *= o, Ne.elements[2] *= o, Ne.elements[4] *= l, Ne.elements[5] *= l, Ne.elements[6] *= l, Ne.elements[8] *= c, Ne.elements[9] *= c, Ne.elements[10] *= c, e.setFromRotationMatrix(Ne), i.x = r, i.y = s, i.z = a, this;
        }
        makePerspective(t, e, i, n, r, s) {
            void 0 === s && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            const a = this.elements, o = 2 * r / (e - t), l = 2 * r / (i - n), c = (e + t) / (e - t), h = (i + n) / (i - n), u = -(s + r) / (s - r), d = -2 * s * r / (s - r);
            return a[0] = o, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = l, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = d, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
        }
        makeOrthographic(t, e, i, n, r, s) {
            const a = this.elements, o = 1 / (e - t), l = 1 / (i - n), c = 1 / (s - r), h = (e + t) * o, u = (i + n) * l, d = (s + r) * c;
            return a[0] = 2 * o, a[4] = 0, a[8] = 0, a[12] = -h, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * c, a[14] = -d, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
        }
        equals(t) {
            const e = this.elements, i = t.elements;
            for(let t13 = 0; t13 < 16; t13++)if (e[t13] !== i[t13]) return !1;
            return !0;
        }
        fromArray(t, e = 0) {
            for(let i = 0; i < 16; i++)this.elements[i] = t[i + e];
            return this;
        }
        toArray(t = [], e = 0) {
            const i = this.elements;
            return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t;
        }
    }
    const De = new ee, Ne = new Ie, ze = new ee(0, 0, 0), Oe = new ee(1, 1, 1), Fe = new ee, Be = new ee, Ue = new ee, ke = new Ie, Ge = new te;
    class Ve {
        constructor(t = 0, e = 0, i = 0, n = Ve.DefaultOrder){
            this.isEuler = !0, this._x = t, this._y = e, this._z = i, this._order = n;
        }
        get x() {
            return this._x;
        }
        set x(t) {
            this._x = t, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t) {
            this._y = t, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t) {
            this._z = t, this._onChangeCallback();
        }
        get order() {
            return this._order;
        }
        set order(t) {
            this._order = t, this._onChangeCallback();
        }
        set(t, e, i, n = this._order) {
            return this._x = t, this._y = e, this._z = i, this._order = n, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._order);
        }
        copy(t) {
            return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t, e = this._order, i = !0) {
            const n = t.elements, r = n[0], s = n[4], a = n[8], o = n[1], l = n[5], c = n[9], h = n[2], u = n[6], d = n[10];
            switch(e){
                case "XYZ":
                    this._y = Math.asin(_t1(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u, l), this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-_t1(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r), this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(_t1(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(o, r));
                    break;
                case "ZYX":
                    this._y = Math.asin(-_t1(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-s, l));
                    break;
                case "YZX":
                    this._z = Math.asin(_t1(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, d));
                    break;
                case "XZY":
                    this._z = Math.asin(-_t1(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-c, d), this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
            }
            return this._order = e, !0 === i && this._onChangeCallback(), this;
        }
        setFromQuaternion(t, e, i) {
            return ke.makeRotationFromQuaternion(t), this.setFromRotationMatrix(ke, e, i);
        }
        setFromVector3(t, e = this._order) {
            return this.set(t.x, t.y, t.z, e);
        }
        reorder(t) {
            return Ge.setFromEuler(this), this.setFromQuaternion(Ge, t);
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
        }
        fromArray(t) {
            return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
        }
        _onChange(t) {
            return this._onChangeCallback = t, this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._order;
        }
        toVector3() {
            console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
        }
    }
    Ve.DefaultOrder = "XYZ", Ve.RotationOrders = [
        "XYZ",
        "YZX",
        "ZXY",
        "XZY",
        "YXZ",
        "ZYX"
    ];
    class He {
        constructor(){
            this.mask = 1;
        }
        set(t) {
            this.mask = (1 << t | 0) >>> 0;
        }
        enable(t) {
            this.mask |= 1 << t | 0;
        }
        enableAll() {
            this.mask = -1;
        }
        toggle(t) {
            this.mask ^= 1 << t | 0;
        }
        disable(t) {
            this.mask &= ~(1 << t | 0);
        }
        disableAll() {
            this.mask = 0;
        }
        test(t) {
            return 0 != (this.mask & t.mask);
        }
        isEnabled(t) {
            return 0 != (this.mask & (1 << t | 0));
        }
    }
    let We = 0;
    const je = new ee, qe = new te, Xe = new Ie, Je = new ee, Ye = new ee, Ze = new ee, Ke = new te, Qe = new ee(1, 0, 0), $e = new ee(0, 1, 0), ti = new ee(0, 0, 1), ei = {
        type: "added"
    }, ii = {
        type: "removed"
    };
    class ni extends mt1 {
        constructor(){
            super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
                value: We++
            }), this.uuid = yt1(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ni.DefaultUp.clone();
            const t = new ee, e = new Ve, i = new te, n = new ee(1, 1, 1);
            e._onChange(function() {
                i.setFromEuler(e, !1);
            }), i._onChange(function() {
                e.setFromQuaternion(i, void 0, !1);
            }), Object.defineProperties(this, {
                position: {
                    configurable: !0,
                    enumerable: !0,
                    value: t
                },
                rotation: {
                    configurable: !0,
                    enumerable: !0,
                    value: e
                },
                quaternion: {
                    configurable: !0,
                    enumerable: !0,
                    value: i
                },
                scale: {
                    configurable: !0,
                    enumerable: !0,
                    value: n
                },
                modelViewMatrix: {
                    value: new Ie
                },
                normalMatrix: {
                    value: new Ct1
                }
            }), this.matrix = new Ie, this.matrixWorld = new Ie, this.matrixAutoUpdate = ni.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new He, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
        }
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(t) {
            this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
        }
        applyQuaternion(t) {
            return this.quaternion.premultiply(t), this;
        }
        setRotationFromAxisAngle(t, e) {
            this.quaternion.setFromAxisAngle(t, e);
        }
        setRotationFromEuler(t) {
            this.quaternion.setFromEuler(t, !0);
        }
        setRotationFromMatrix(t) {
            this.quaternion.setFromRotationMatrix(t);
        }
        setRotationFromQuaternion(t) {
            this.quaternion.copy(t);
        }
        rotateOnAxis(t, e) {
            return qe.setFromAxisAngle(t, e), this.quaternion.multiply(qe), this;
        }
        rotateOnWorldAxis(t, e) {
            return qe.setFromAxisAngle(t, e), this.quaternion.premultiply(qe), this;
        }
        rotateX(t) {
            return this.rotateOnAxis(Qe, t);
        }
        rotateY(t) {
            return this.rotateOnAxis($e, t);
        }
        rotateZ(t) {
            return this.rotateOnAxis(ti, t);
        }
        translateOnAxis(t, e) {
            return je.copy(t).applyQuaternion(this.quaternion), this.position.add(je.multiplyScalar(e)), this;
        }
        translateX(t) {
            return this.translateOnAxis(Qe, t);
        }
        translateY(t) {
            return this.translateOnAxis($e, t);
        }
        translateZ(t) {
            return this.translateOnAxis(ti, t);
        }
        localToWorld(t) {
            return t.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(t) {
            return t.applyMatrix4(Xe.copy(this.matrixWorld).invert());
        }
        lookAt(t, e, i) {
            t.isVector3 ? Je.copy(t) : Je.set(t, e, i);
            const n = this.parent;
            this.updateWorldMatrix(!0, !1), Ye.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Xe.lookAt(Ye, Je, this.up) : Xe.lookAt(Je, Ye, this.up), this.quaternion.setFromRotationMatrix(Xe), n && (Xe.extractRotation(n.matrixWorld), qe.setFromRotationMatrix(Xe), this.quaternion.premultiply(qe.invert()));
        }
        add(t) {
            if (arguments.length > 1) {
                for(let t = 0; t < arguments.length; t++)this.add(arguments[t]);
                return this;
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(ei)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
        }
        remove(t) {
            if (arguments.length > 1) {
                for(let t = 0; t < arguments.length; t++)this.remove(arguments[t]);
                return this;
            }
            const e = this.children.indexOf(t);
            return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(ii)), this;
        }
        removeFromParent() {
            const t = this.parent;
            return null !== t && t.remove(this), this;
        }
        clear() {
            for(let t = 0; t < this.children.length; t++){
                const e = this.children[t];
                e.parent = null, e.dispatchEvent(ii);
            }
            return this.children.length = 0, this;
        }
        attach(t) {
            return this.updateWorldMatrix(!0, !1), Xe.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), Xe.multiply(t.parent.matrixWorld)), t.applyMatrix4(Xe), this.add(t), t.updateWorldMatrix(!1, !0), this;
        }
        getObjectById(t) {
            return this.getObjectByProperty("id", t);
        }
        getObjectByName(t) {
            return this.getObjectByProperty("name", t);
        }
        getObjectByProperty(t, e) {
            if (this[t] === e) return this;
            for(let i = 0, n = this.children.length; i < n; i++){
                const n = this.children[i].getObjectByProperty(t, e);
                if (void 0 !== n) return n;
            }
        }
        getWorldPosition(t) {
            return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
        }
        getWorldQuaternion(t) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ye, t, Ze), t;
        }
        getWorldScale(t) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ye, Ke, t), t;
        }
        getWorldDirection(t) {
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(e[8], e[9], e[10]).normalize();
        }
        raycast() {}
        traverse(t) {
            t(this);
            const e = this.children;
            for(let i = 0, n = e.length; i < n; i++)e[i].traverse(t);
        }
        traverseVisible(t) {
            if (!1 === this.visible) return;
            t(this);
            const e = this.children;
            for(let i = 0, n = e.length; i < n; i++)e[i].traverseVisible(t);
        }
        traverseAncestors(t) {
            const e = this.parent;
            null !== e && (t(e), e.traverseAncestors(t));
        }
        updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
        }
        updateMatrixWorld(t) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
            const e = this.children;
            for(let i = 0, n = e.length; i < n; i++)e[i].updateMatrixWorld(t);
        }
        updateWorldMatrix(t, e) {
            const i = this.parent;
            if (!0 === t && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
                const t = this.children;
                for(let e = 0, i = t.length; e < i; e++)t[e].updateWorldMatrix(!1, !0);
            }
        }
        toJSON(t14) {
            const e5 = void 0 === t14 || "string" == typeof t14, i5 = {};
            e5 && (t14 = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {},
                skeletons: {},
                animations: {},
                nodes: {}
            }, i5.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            const n4 = {};
            function r(e, i) {
                return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t14)), i.uuid;
            }
            if (n4.uuid = this.uuid, n4.type = this.type, "" !== this.name && (n4.name = this.name), !0 === this.castShadow && (n4.castShadow = !0), !0 === this.receiveShadow && (n4.receiveShadow = !0), !1 === this.visible && (n4.visible = !1), !1 === this.frustumCulled && (n4.frustumCulled = !1), 0 !== this.renderOrder && (n4.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (n4.userData = this.userData), n4.layers = this.layers.mask, n4.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (n4.matrixAutoUpdate = !1), this.isInstancedMesh && (n4.type = "InstancedMesh", n4.count = this.count, n4.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (n4.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? n4.background = this.background.toJSON() : this.background.isTexture && (n4.background = this.background.toJSON(t14).uuid)), this.environment && this.environment.isTexture && (n4.environment = this.environment.toJSON(t14).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
                n4.geometry = r(t14.geometries, this.geometry);
                const e = this.geometry.parameters;
                if (void 0 !== e && void 0 !== e.shapes) {
                    const i = e.shapes;
                    if (Array.isArray(i)) for(let e6 = 0, n = i.length; e6 < n; e6++){
                        const n = i[e6];
                        r(t14.shapes, n);
                    }
                    else r(t14.shapes, i);
                }
            }
            if (this.isSkinnedMesh && (n4.bindMode = this.bindMode, n4.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t14.skeletons, this.skeleton), n4.skeleton = this.skeleton.uuid)), void 0 !== this.material) {
                if (Array.isArray(this.material)) {
                    const e = [];
                    for(let i = 0, n2 = this.material.length; i < n2; i++)e.push(r(t14.materials, this.material[i]));
                    n4.material = e;
                } else n4.material = r(t14.materials, this.material);
            }
            if (this.children.length > 0) {
                n4.children = [];
                for(let e = 0; e < this.children.length; e++)n4.children.push(this.children[e].toJSON(t14).object);
            }
            if (this.animations.length > 0) {
                n4.animations = [];
                for(let e = 0; e < this.animations.length; e++){
                    const i = this.animations[e];
                    n4.animations.push(r(t14.animations, i));
                }
            }
            if (e5) {
                const e = s(t14.geometries), n = s(t14.materials), r = s(t14.textures), a = s(t14.images), o = s(t14.shapes), l = s(t14.skeletons), c = s(t14.animations), h = s(t14.nodes);
                e.length > 0 && (i5.geometries = e), n.length > 0 && (i5.materials = n), r.length > 0 && (i5.textures = r), a.length > 0 && (i5.images = a), o.length > 0 && (i5.shapes = o), l.length > 0 && (i5.skeletons = l), c.length > 0 && (i5.animations = c), h.length > 0 && (i5.nodes = h);
            }
            return i5.object = n4, i5;
            function s(t) {
                const e = [];
                for(const i in t){
                    const n = t[i];
                    delete n.metadata, e.push(n);
                }
                return e;
            }
        }
        clone(t) {
            return (new this.constructor).copy(this, t);
        }
        copy(t, e = !0) {
            if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e) for(let e7 = 0; e7 < t.children.length; e7++){
                const i = t.children[e7];
                this.add(i.clone());
            }
            return this;
        }
    }
    ni.DefaultUp = new ee(0, 1, 0), ni.DefaultMatrixAutoUpdate = !0;
    const ri = new ee, si = new ee, ai = new ee, oi = new ee, li = new ee, ci = new ee, hi = new ee, ui = new ee, di = new ee, pi = new ee;
    class mi {
        constructor(t = new ee, e = new ee, i = new ee){
            this.a = t, this.b = e, this.c = i;
        }
        static getNormal(t, e, i, n) {
            n.subVectors(i, e), ri.subVectors(t, e), n.cross(ri);
            const r = n.lengthSq();
            return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0);
        }
        static getBarycoord(t, e, i, n, r) {
            ri.subVectors(n, e), si.subVectors(i, e), ai.subVectors(t, e);
            const s = ri.dot(ri), a = ri.dot(si), o = ri.dot(ai), l = si.dot(si), c = si.dot(ai), h = s * l - a * a;
            if (0 === h) return r.set(-2, -1, -1);
            const u = 1 / h, d = (l * o - a * c) * u, p = (s * c - a * o) * u;
            return r.set(1 - d - p, p, d);
        }
        static containsPoint(t, e, i, n) {
            return this.getBarycoord(t, e, i, n, oi), oi.x >= 0 && oi.y >= 0 && oi.x + oi.y <= 1;
        }
        static getUV(t, e, i, n, r, s, a, o) {
            return this.getBarycoord(t, e, i, n, oi), o.set(0, 0), o.addScaledVector(r, oi.x), o.addScaledVector(s, oi.y), o.addScaledVector(a, oi.z), o;
        }
        static isFrontFacing(t, e, i, n) {
            return ri.subVectors(i, e), si.subVectors(t, e), ri.cross(si).dot(n) < 0;
        }
        set(t, e, i) {
            return this.a.copy(t), this.b.copy(e), this.c.copy(i), this;
        }
        setFromPointsAndIndices(t, e, i, n) {
            return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this;
        }
        setFromAttributeAndIndices(t, e, i, n) {
            return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, i), this.c.fromBufferAttribute(t, n), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
        }
        getArea() {
            return ri.subVectors(this.c, this.b), si.subVectors(this.a, this.b), .5 * ri.cross(si).length();
        }
        getMidpoint(t) {
            return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
        }
        getNormal(t) {
            return mi.getNormal(this.a, this.b, this.c, t);
        }
        getPlane(t) {
            return t.setFromCoplanarPoints(this.a, this.b, this.c);
        }
        getBarycoord(t, e) {
            return mi.getBarycoord(t, this.a, this.b, this.c, e);
        }
        getUV(t, e, i, n, r) {
            return mi.getUV(t, this.a, this.b, this.c, e, i, n, r);
        }
        containsPoint(t) {
            return mi.containsPoint(t, this.a, this.b, this.c);
        }
        isFrontFacing(t) {
            return mi.isFrontFacing(this.a, this.b, this.c, t);
        }
        intersectsBox(t) {
            return t.intersectsTriangle(this);
        }
        closestPointToPoint(t, e) {
            const i = this.a, n = this.b, r = this.c;
            let s, a;
            li.subVectors(n, i), ci.subVectors(r, i), ui.subVectors(t, i);
            const o = li.dot(ui), l = ci.dot(ui);
            if (o <= 0 && l <= 0) return e.copy(i);
            di.subVectors(t, n);
            const c = li.dot(di), h = ci.dot(di);
            if (c >= 0 && h <= c) return e.copy(n);
            const u = o * h - c * l;
            if (u <= 0 && o >= 0 && c <= 0) return s = o / (o - c), e.copy(i).addScaledVector(li, s);
            pi.subVectors(t, r);
            const d = li.dot(pi), p = ci.dot(pi);
            if (p >= 0 && d <= p) return e.copy(r);
            const m = d * l - o * p;
            if (m <= 0 && l >= 0 && p <= 0) return a = l / (l - p), e.copy(i).addScaledVector(ci, a);
            const f = c * p - d * h;
            if (f <= 0 && h - c >= 0 && d - p >= 0) return hi.subVectors(r, n), a = (h - c) / (h - c + (d - p)), e.copy(n).addScaledVector(hi, a);
            const g = 1 / (f + m + u);
            return s = m * g, a = u * g, e.copy(i).addScaledVector(li, s).addScaledVector(ci, a);
        }
        equals(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
        }
    }
    let fi = 0;
    class gi extends mt1 {
        constructor(){
            super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
                value: fi++
            }), this.uuid = yt1(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = i1, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ht1, this.stencilZFail = ht1, this.stencilZPass = ht1, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
        }
        get alphaTest() {
            return this._alphaTest;
        }
        set alphaTest(t) {
            this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
        }
        onBuild() {}
        onBeforeRender() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
            return this.onBeforeCompile.toString();
        }
        setValues(t) {
            if (void 0 !== t) for(const e in t){
                const i = t[e];
                if (void 0 === i) {
                    console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                    continue;
                }
                if ("shading" === e) {
                    console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === i;
                    continue;
                }
                const n = this[e];
                void 0 !== n ? n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = i : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.");
            }
        }
        toJSON(t15) {
            const e8 = void 0 === t15 || "string" == typeof t15;
            e8 && (t15 = {
                textures: {},
                images: {}
            });
            const i6 = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            function n5(t) {
                const e = [];
                for(const i in t){
                    const n = t[i];
                    delete n.metadata, e.push(n);
                }
                return e;
            }
            if (i6.uuid = this.uuid, i6.type = this.type, "" !== this.name && (i6.name = this.name), this.color && this.color.isColor && (i6.color = this.color.getHex()), void 0 !== this.roughness && (i6.roughness = this.roughness), void 0 !== this.metalness && (i6.metalness = this.metalness), void 0 !== this.sheen && (i6.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i6.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (i6.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i6.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (i6.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i6.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (i6.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i6.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (i6.shininess = this.shininess), void 0 !== this.clearcoat && (i6.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (i6.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i6.clearcoatMap = this.clearcoatMap.toJSON(t15).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i6.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t15).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i6.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t15).uuid, i6.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (i6.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (i6.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (i6.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i6.iridescenceMap = this.iridescenceMap.toJSON(t15).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i6.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t15).uuid), this.map && this.map.isTexture && (i6.map = this.map.toJSON(t15).uuid), this.matcap && this.matcap.isTexture && (i6.matcap = this.matcap.toJSON(t15).uuid), this.alphaMap && this.alphaMap.isTexture && (i6.alphaMap = this.alphaMap.toJSON(t15).uuid), this.lightMap && this.lightMap.isTexture && (i6.lightMap = this.lightMap.toJSON(t15).uuid, i6.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i6.aoMap = this.aoMap.toJSON(t15).uuid, i6.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i6.bumpMap = this.bumpMap.toJSON(t15).uuid, i6.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i6.normalMap = this.normalMap.toJSON(t15).uuid, i6.normalMapType = this.normalMapType, i6.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i6.displacementMap = this.displacementMap.toJSON(t15).uuid, i6.displacementScale = this.displacementScale, i6.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i6.roughnessMap = this.roughnessMap.toJSON(t15).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i6.metalnessMap = this.metalnessMap.toJSON(t15).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i6.emissiveMap = this.emissiveMap.toJSON(t15).uuid), this.specularMap && this.specularMap.isTexture && (i6.specularMap = this.specularMap.toJSON(t15).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i6.specularIntensityMap = this.specularIntensityMap.toJSON(t15).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i6.specularColorMap = this.specularColorMap.toJSON(t15).uuid), this.envMap && this.envMap.isTexture && (i6.envMap = this.envMap.toJSON(t15).uuid, void 0 !== this.combine && (i6.combine = this.combine)), void 0 !== this.envMapIntensity && (i6.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (i6.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (i6.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i6.gradientMap = this.gradientMap.toJSON(t15).uuid), void 0 !== this.transmission && (i6.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i6.transmissionMap = this.transmissionMap.toJSON(t15).uuid), void 0 !== this.thickness && (i6.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i6.thicknessMap = this.thicknessMap.toJSON(t15).uuid), void 0 !== this.attenuationDistance && (i6.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (i6.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (i6.size = this.size), null !== this.shadowSide && (i6.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (i6.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (i6.blending = this.blending), 0 !== this.side && (i6.side = this.side), this.vertexColors && (i6.vertexColors = !0), this.opacity < 1 && (i6.opacity = this.opacity), !0 === this.transparent && (i6.transparent = this.transparent), i6.depthFunc = this.depthFunc, i6.depthTest = this.depthTest, i6.depthWrite = this.depthWrite, i6.colorWrite = this.colorWrite, i6.stencilWrite = this.stencilWrite, i6.stencilWriteMask = this.stencilWriteMask, i6.stencilFunc = this.stencilFunc, i6.stencilRef = this.stencilRef, i6.stencilFuncMask = this.stencilFuncMask, i6.stencilFail = this.stencilFail, i6.stencilZFail = this.stencilZFail, i6.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (i6.rotation = this.rotation), !0 === this.polygonOffset && (i6.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (i6.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i6.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (i6.linewidth = this.linewidth), void 0 !== this.dashSize && (i6.dashSize = this.dashSize), void 0 !== this.gapSize && (i6.gapSize = this.gapSize), void 0 !== this.scale && (i6.scale = this.scale), !0 === this.dithering && (i6.dithering = !0), this.alphaTest > 0 && (i6.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (i6.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (i6.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (i6.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i6.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i6.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i6.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (i6.flatShading = this.flatShading), !1 === this.visible && (i6.visible = !1), !1 === this.toneMapped && (i6.toneMapped = !1), !1 === this.fog && (i6.fog = !1), "{}" !== JSON.stringify(this.userData) && (i6.userData = this.userData), e8) {
                const e = n5(t15.textures), r = n5(t15.images);
                e.length > 0 && (i6.textures = e), r.length > 0 && (i6.images = r);
            }
            return i6;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
            const e = t.clippingPlanes;
            let i = null;
            if (null !== e) {
                const t = e.length;
                i = new Array(t);
                for(let n = 0; n !== t; ++n)i[n] = e[n].clone();
            }
            return this.clippingPlanes = i, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
        get vertexTangents() {
            return console.warn("THREE." + this.type + ": .vertexTangents has been removed."), !1;
        }
        set vertexTangents(t) {
            console.warn("THREE." + this.type + ": .vertexTangents has been removed.");
        }
    }
    gi.fromType = function() {
        return null;
    };
    class vi extends gi {
        constructor(t){
            super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ht(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
        }
    }
    const xi = new ee, yi = new Et;
    class _i {
        constructor(t, e, i){
            if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === i, this.usage = ut1, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0;
        }
        onUploadCallback() {}
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
        setUsage(t) {
            return this.usage = t, this;
        }
        copy(t) {
            return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this;
        }
        copyAt(t, e, i) {
            t *= this.itemSize, i *= e.itemSize;
            for(let n = 0, r = this.itemSize; n < r; n++)this.array[t + n] = e.array[i + n];
            return this;
        }
        copyArray(t) {
            return this.array.set(t), this;
        }
        copyColorsArray(t) {
            const e = this.array;
            let i = 0;
            for(let n = 0, r = t.length; n < r; n++){
                let r = t[n];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), r = new Ht), e[i++] = r.r, e[i++] = r.g, e[i++] = r.b;
            }
            return this;
        }
        copyVector2sArray(t) {
            const e = this.array;
            let i = 0;
            for(let n = 0, r = t.length; n < r; n++){
                let r = t[n];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", n), r = new Et), e[i++] = r.x, e[i++] = r.y;
            }
            return this;
        }
        copyVector3sArray(t) {
            const e = this.array;
            let i = 0;
            for(let n = 0, r = t.length; n < r; n++){
                let r = t[n];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), r = new ee), e[i++] = r.x, e[i++] = r.y, e[i++] = r.z;
            }
            return this;
        }
        copyVector4sArray(t) {
            const e = this.array;
            let i = 0;
            for(let n = 0, r = t.length; n < r; n++){
                let r = t[n];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), r = new Zt), e[i++] = r.x, e[i++] = r.y, e[i++] = r.z, e[i++] = r.w;
            }
            return this;
        }
        applyMatrix3(t) {
            if (2 === this.itemSize) for(let e = 0, i = this.count; e < i; e++)yi.fromBufferAttribute(this, e), yi.applyMatrix3(t), this.setXY(e, yi.x, yi.y);
            else if (3 === this.itemSize) for(let e9 = 0, i7 = this.count; e9 < i7; e9++)xi.fromBufferAttribute(this, e9), xi.applyMatrix3(t), this.setXYZ(e9, xi.x, xi.y, xi.z);
            return this;
        }
        applyMatrix4(t) {
            for(let e = 0, i = this.count; e < i; e++)xi.fromBufferAttribute(this, e), xi.applyMatrix4(t), this.setXYZ(e, xi.x, xi.y, xi.z);
            return this;
        }
        applyNormalMatrix(t) {
            for(let e = 0, i = this.count; e < i; e++)xi.fromBufferAttribute(this, e), xi.applyNormalMatrix(t), this.setXYZ(e, xi.x, xi.y, xi.z);
            return this;
        }
        transformDirection(t) {
            for(let e = 0, i = this.count; e < i; e++)xi.fromBufferAttribute(this, e), xi.transformDirection(t), this.setXYZ(e, xi.x, xi.y, xi.z);
            return this;
        }
        set(t, e = 0) {
            return this.array.set(t, e), this;
        }
        getX(t) {
            return this.array[t * this.itemSize];
        }
        setX(t, e) {
            return this.array[t * this.itemSize] = e, this;
        }
        getY(t) {
            return this.array[t * this.itemSize + 1];
        }
        setY(t, e) {
            return this.array[t * this.itemSize + 1] = e, this;
        }
        getZ(t) {
            return this.array[t * this.itemSize + 2];
        }
        setZ(t, e) {
            return this.array[t * this.itemSize + 2] = e, this;
        }
        getW(t) {
            return this.array[t * this.itemSize + 3];
        }
        setW(t, e) {
            return this.array[t * this.itemSize + 3] = e, this;
        }
        setXY(t, e, i) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this;
        }
        setXYZ(t, e, i, n) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this;
        }
        setXYZW(t, e, i, n, r) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this;
        }
        onUpload(t) {
            return this.onUploadCallback = t, this;
        }
        clone() {
            return new this.constructor(this.array, this.itemSize).copy(this);
        }
        toJSON() {
            const t = {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.prototype.slice.call(this.array),
                normalized: this.normalized
            };
            return "" !== this.name && (t.name = this.name), this.usage !== ut1 && (t.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange), t;
        }
    }
    class Mi extends _i {
        constructor(t, e, i){
            super(new Uint16Array(t), e, i);
        }
    }
    class bi extends _i {
        constructor(t, e, i){
            super(new Uint32Array(t), e, i);
        }
    }
    class wi extends _i {
        constructor(t, e, i){
            super(new Float32Array(t), e, i);
        }
    }
    let Si = 0;
    const Ti = new Ie, Ai = new ni, Ei = new ee, Ci = new re, Li = new re, Ri = new ee;
    class Pi extends mt1 {
        constructor(){
            super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
                value: Si++
            }), this.uuid = yt1(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                start: 0,
                count: 1 / 0
            }, this.userData = {};
        }
        getIndex() {
            return this.index;
        }
        setIndex(t) {
            return Array.isArray(t) ? this.index = new (Lt1(t) ? bi : Mi)(t, 1) : this.index = t, this;
        }
        getAttribute(t) {
            return this.attributes[t];
        }
        setAttribute(t, e) {
            return this.attributes[t] = e, this;
        }
        deleteAttribute(t) {
            return delete this.attributes[t], this;
        }
        hasAttribute(t) {
            return void 0 !== this.attributes[t];
        }
        addGroup(t, e, i = 0) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: i
            });
        }
        clearGroups() {
            this.groups = [];
        }
        setDrawRange(t, e) {
            this.drawRange.start = t, this.drawRange.count = e;
        }
        applyMatrix4(t) {
            const e = this.attributes.position;
            void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
            const i = this.attributes.normal;
            if (void 0 !== i) {
                const e = (new Ct1).getNormalMatrix(t);
                i.applyNormalMatrix(e), i.needsUpdate = !0;
            }
            const n = this.attributes.tangent;
            return void 0 !== n && (n.transformDirection(t), n.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
        }
        applyQuaternion(t) {
            return Ti.makeRotationFromQuaternion(t), this.applyMatrix4(Ti), this;
        }
        rotateX(t) {
            return Ti.makeRotationX(t), this.applyMatrix4(Ti), this;
        }
        rotateY(t) {
            return Ti.makeRotationY(t), this.applyMatrix4(Ti), this;
        }
        rotateZ(t) {
            return Ti.makeRotationZ(t), this.applyMatrix4(Ti), this;
        }
        translate(t, e, i) {
            return Ti.makeTranslation(t, e, i), this.applyMatrix4(Ti), this;
        }
        scale(t, e, i) {
            return Ti.makeScale(t, e, i), this.applyMatrix4(Ti), this;
        }
        lookAt(t) {
            return Ai.lookAt(t), Ai.updateMatrix(), this.applyMatrix4(Ai.matrix), this;
        }
        center() {
            return this.computeBoundingBox(), this.boundingBox.getCenter(Ei).negate(), this.translate(Ei.x, Ei.y, Ei.z), this;
        }
        setFromPoints(t) {
            const e = [];
            for(let i = 0, n = t.length; i < n; i++){
                const n = t[i];
                e.push(n.x, n.y, n.z || 0);
            }
            return this.setAttribute("position", new wi(e, 3)), this;
        }
        computeBoundingBox() {
            null === this.boundingBox && (this.boundingBox = new re);
            const t = this.attributes.position, e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new ee(-1 / 0, -1 / 0, -1 / 0), new ee(1 / 0, 1 / 0, 1 / 0));
            if (void 0 !== t) {
                if (this.boundingBox.setFromBufferAttribute(t), e) for(let t16 = 0, i = e.length; t16 < i; t16++){
                    const i = e[t16];
                    Ci.setFromBufferAttribute(i), this.morphTargetsRelative ? (Ri.addVectors(this.boundingBox.min, Ci.min), this.boundingBox.expandByPoint(Ri), Ri.addVectors(this.boundingBox.max, Ci.max), this.boundingBox.expandByPoint(Ri)) : (this.boundingBox.expandByPoint(Ci.min), this.boundingBox.expandByPoint(Ci.max));
                }
            } else this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
        }
        computeBoundingSphere() {
            null === this.boundingSphere && (this.boundingSphere = new we);
            const t = this.attributes.position, e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new ee, 1 / 0);
            if (t) {
                const i = this.boundingSphere.center;
                if (Ci.setFromBufferAttribute(t), e) for(let t17 = 0, i8 = e.length; t17 < i8; t17++){
                    const i = e[t17];
                    Li.setFromBufferAttribute(i), this.morphTargetsRelative ? (Ri.addVectors(Ci.min, Li.min), Ci.expandByPoint(Ri), Ri.addVectors(Ci.max, Li.max), Ci.expandByPoint(Ri)) : (Ci.expandByPoint(Li.min), Ci.expandByPoint(Li.max));
                }
                Ci.getCenter(i);
                let n = 0;
                for(let e10 = 0, r = t.count; e10 < r; e10++)Ri.fromBufferAttribute(t, e10), n = Math.max(n, i.distanceToSquared(Ri));
                if (e) for(let r2 = 0, s = e.length; r2 < s; r2++){
                    const s = e[r2], a = this.morphTargetsRelative;
                    for(let e11 = 0, r = s.count; e11 < r; e11++)Ri.fromBufferAttribute(s, e11), a && (Ei.fromBufferAttribute(t, e11), Ri.add(Ei)), n = Math.max(n, i.distanceToSquared(Ri));
                }
                this.boundingSphere.radius = Math.sqrt(n), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
            }
        }
        computeTangents() {
            const t21 = this.index, e15 = this.attributes;
            if (null === t21 || void 0 === e15.position || void 0 === e15.normal || void 0 === e15.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            const i9 = t21.array, n = e15.position.array, r3 = e15.normal.array, s = e15.uv.array, a = n.length / 3;
            !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new _i(new Float32Array(4 * a), 4));
            const o = this.getAttribute("tangent").array, l = [], c = [];
            for(let t18 = 0; t18 < a; t18++)l[t18] = new ee, c[t18] = new ee;
            const h = new ee, u = new ee, d = new ee, p = new Et, m = new Et, f = new Et, g = new ee, v = new ee;
            function x(t, e, i) {
                h.fromArray(n, 3 * t), u.fromArray(n, 3 * e), d.fromArray(n, 3 * i), p.fromArray(s, 2 * t), m.fromArray(s, 2 * e), f.fromArray(s, 2 * i), u.sub(h), d.sub(h), m.sub(p), f.sub(p);
                const r = 1 / (m.x * f.y - f.x * m.y);
                isFinite(r) && (g.copy(u).multiplyScalar(f.y).addScaledVector(d, -m.y).multiplyScalar(r), v.copy(d).multiplyScalar(m.x).addScaledVector(u, -f.x).multiplyScalar(r), l[t].add(g), l[e].add(g), l[i].add(g), c[t].add(v), c[e].add(v), c[i].add(v));
            }
            let y = this.groups;
            0 === y.length && (y = [
                {
                    start: 0,
                    count: i9.length
                }
            ]);
            for(let t19 = 0, e13 = y.length; t19 < e13; ++t19){
                const e = y[t19], n = e.start;
                for(let t = n, r = n + e.count; t < r; t += 3)x(i9[t + 0], i9[t + 1], i9[t + 2]);
            }
            const _ = new ee, M = new ee, b = new ee, w = new ee;
            function S(t) {
                b.fromArray(r3, 3 * t), w.copy(b);
                const e = l[t];
                _.copy(e), _.sub(b.multiplyScalar(b.dot(e))).normalize(), M.crossVectors(w, e);
                const i = M.dot(c[t]) < 0 ? -1 : 1;
                o[4 * t] = _.x, o[4 * t + 1] = _.y, o[4 * t + 2] = _.z, o[4 * t + 3] = i;
            }
            for(let t20 = 0, e14 = y.length; t20 < e14; ++t20){
                const e = y[t20], n = e.start;
                for(let t = n, r = n + e.count; t < r; t += 3)S(i9[t + 0]), S(i9[t + 1]), S(i9[t + 2]);
            }
        }
        computeVertexNormals() {
            const t = this.index, e = this.getAttribute("position");
            if (void 0 !== e) {
                let i = this.getAttribute("normal");
                if (void 0 === i) i = new _i(new Float32Array(3 * e.count), 3), this.setAttribute("normal", i);
                else for(let t23 = 0, e16 = i.count; t23 < e16; t23++)i.setXYZ(t23, 0, 0, 0);
                const n = new ee, r = new ee, s = new ee, a = new ee, o = new ee, l = new ee, c = new ee, h = new ee;
                if (t) for(let u = 0, d = t.count; u < d; u += 3){
                    const d = t.getX(u + 0), p = t.getX(u + 1), m = t.getX(u + 2);
                    n.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), s.fromBufferAttribute(e, m), c.subVectors(s, r), h.subVectors(n, r), c.cross(h), a.fromBufferAttribute(i, d), o.fromBufferAttribute(i, p), l.fromBufferAttribute(i, m), a.add(c), o.add(c), l.add(c), i.setXYZ(d, a.x, a.y, a.z), i.setXYZ(p, o.x, o.y, o.z), i.setXYZ(m, l.x, l.y, l.z);
                }
                else for(let t22 = 0, a2 = e.count; t22 < a2; t22 += 3)n.fromBufferAttribute(e, t22 + 0), r.fromBufferAttribute(e, t22 + 1), s.fromBufferAttribute(e, t22 + 2), c.subVectors(s, r), h.subVectors(n, r), c.cross(h), i.setXYZ(t22 + 0, c.x, c.y, c.z), i.setXYZ(t22 + 1, c.x, c.y, c.z), i.setXYZ(t22 + 2, c.x, c.y, c.z);
                this.normalizeNormals(), i.needsUpdate = !0;
            }
        }
        merge(t, e) {
            if (!t || !t.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
            void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
            const i = this.attributes;
            for(const n in i){
                if (void 0 === t.attributes[n]) continue;
                const r = i[n].array, s = t.attributes[n], a = s.array, o = s.itemSize * e, l = Math.min(a.length, r.length - o);
                for(let t24 = 0, e17 = o; t24 < l; t24++, e17++)r[e17] = a[t24];
            }
            return this;
        }
        normalizeNormals() {
            const t = this.attributes.normal;
            for(let e = 0, i = t.count; e < i; e++)Ri.fromBufferAttribute(t, e), Ri.normalize(), t.setXYZ(e, Ri.x, Ri.y, Ri.z);
        }
        toNonIndexed() {
            function t26(t, e) {
                const i = t.array, n = t.itemSize, r = t.normalized, s = new i.constructor(e.length * n);
                let a = 0, o = 0;
                for(let r5 = 0, l = e.length; r5 < l; r5++){
                    a = t.isInterleavedBufferAttribute ? e[r5] * t.data.stride + t.offset : e[r5] * n;
                    for(let t27 = 0; t27 < n; t27++)s[o++] = i[a++];
                }
                return new _i(s, n, r);
            }
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
            const e18 = new Pi, i11 = this.index.array, n7 = this.attributes;
            for(const r6 in n7){
                const s = t26(n7[r6], i11);
                e18.setAttribute(r6, s);
            }
            const r4 = this.morphAttributes;
            for(const n6 in r4){
                const s = [], a = r4[n6];
                for(let e = 0, n = a.length; e < n; e++){
                    const n = t26(a[e], i11);
                    s.push(n);
                }
                e18.morphAttributes[n6] = s;
            }
            e18.morphTargetsRelative = this.morphTargetsRelative;
            const s2 = this.groups;
            for(let t25 = 0, i10 = s2.length; t25 < i10; t25++){
                const i = s2[t25];
                e18.addGroup(i.start, i.count, i.materialIndex);
            }
            return e18;
        }
        toJSON() {
            const t = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
                const e = this.parameters;
                for(const i in e)void 0 !== e[i] && (t[i] = e[i]);
                return t;
            }
            t.data = {
                attributes: {}
            };
            const e = this.index;
            null !== e && (t.data.index = {
                type: e.array.constructor.name,
                array: Array.prototype.slice.call(e.array)
            });
            const i = this.attributes;
            for(const e19 in i){
                const n = i[e19];
                t.data.attributes[e19] = n.toJSON(t.data);
            }
            const n = {};
            let r = !1;
            for(const e20 in this.morphAttributes){
                const i = this.morphAttributes[e20], s = [];
                for(let e = 0, n8 = i.length; e < n8; e++){
                    const n = i[e];
                    s.push(n.toJSON(t.data));
                }
                s.length > 0 && (n[e20] = s, r = !0);
            }
            r && (t.data.morphAttributes = n, t.data.morphTargetsRelative = this.morphTargetsRelative);
            const s = this.groups;
            s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
            const a = this.boundingSphere;
            return null !== a && (t.data.boundingSphere = {
                center: a.center.toArray(),
                radius: a.radius
            }), t;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
            const e = {};
            this.name = t.name;
            const i = t.index;
            null !== i && this.setIndex(i.clone(e));
            const n = t.attributes;
            for(const t28 in n){
                const i = n[t28];
                this.setAttribute(t28, i.clone(e));
            }
            const r = t.morphAttributes;
            for(const t29 in r){
                const i = [], n = r[t29];
                for(let t = 0, r7 = n.length; t < r7; t++)i.push(n[t].clone(e));
                this.morphAttributes[t29] = i;
            }
            this.morphTargetsRelative = t.morphTargetsRelative;
            const s = t.groups;
            for(let t30 = 0, e21 = s.length; t30 < e21; t30++){
                const e = s[t30];
                this.addGroup(e.start, e.count, e.materialIndex);
            }
            const a = t.boundingBox;
            null !== a && (this.boundingBox = a.clone());
            const o = t.boundingSphere;
            return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, void 0 !== t.parameters && (this.parameters = Object.assign({}, t.parameters)), this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    const Ii = new Ie, Di = new Pe, Ni = new we, zi = new ee, Oi = new ee, Fi = new ee, Bi = new ee, Ui = new ee, ki = new ee, Gi = new ee, Vi = new ee, Hi = new ee, Wi = new Et, ji = new Et, qi = new Et, Xi = new ee, Ji = new ee;
    class Yi extends ni {
        constructor(t = new Pi, e = new vi){
            super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
        }
        copy(t, e) {
            return super.copy(t, e), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this;
        }
        updateMorphTargets() {
            const t = this.geometry.morphAttributes, e = Object.keys(t);
            if (e.length > 0) {
                const i = t[e[0]];
                if (void 0 !== i) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let t = 0, e = i.length; t < e; t++){
                        const e = i[t].name || String(t);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t;
                    }
                }
            }
        }
        raycast(t, e) {
            const i = this.geometry, n = this.material, r = this.matrixWorld;
            if (void 0 === n) return;
            if (null === i.boundingSphere && i.computeBoundingSphere(), Ni.copy(i.boundingSphere), Ni.applyMatrix4(r), !1 === t.ray.intersectsSphere(Ni)) return;
            if (Ii.copy(r).invert(), Di.copy(t.ray).applyMatrix4(Ii), null !== i.boundingBox && !1 === Di.intersectsBox(i.boundingBox)) return;
            let s;
            const a = i.index, o = i.attributes.position, l = i.morphAttributes.position, c = i.morphTargetsRelative, h = i.attributes.uv, u = i.attributes.uv2, d = i.groups, p = i.drawRange;
            if (null !== a) {
                if (Array.isArray(n)) for(let i = 0, r = d.length; i < r; i++){
                    const r = d[i], m = n[r.materialIndex];
                    for(let i13 = Math.max(r.start, p.start), n9 = Math.min(a.count, Math.min(r.start + r.count, p.start + p.count)); i13 < n9; i13 += 3){
                        const n = a.getX(i13), d = a.getX(i13 + 1), p = a.getX(i13 + 2);
                        s = Zi(this, m, t, Di, o, l, c, h, u, n, d, p), s && (s.faceIndex = Math.floor(i13 / 3), s.face.materialIndex = r.materialIndex, e.push(s));
                    }
                }
                else for(let i12 = Math.max(0, p.start), r8 = Math.min(a.count, p.start + p.count); i12 < r8; i12 += 3){
                    const r = a.getX(i12), d = a.getX(i12 + 1), p = a.getX(i12 + 2);
                    s = Zi(this, n, t, Di, o, l, c, h, u, r, d, p), s && (s.faceIndex = Math.floor(i12 / 3), e.push(s));
                }
            } else if (void 0 !== o) {
                if (Array.isArray(n)) for(let i = 0, r = d.length; i < r; i++){
                    const r = d[i], a = n[r.materialIndex];
                    for(let i15 = Math.max(r.start, p.start), n11 = Math.min(o.count, Math.min(r.start + r.count, p.start + p.count)); i15 < n11; i15 += 3)s = Zi(this, a, t, Di, o, l, c, h, u, i15, i15 + 1, i15 + 2), s && (s.faceIndex = Math.floor(i15 / 3), s.face.materialIndex = r.materialIndex, e.push(s));
                }
                else for(let i14 = Math.max(0, p.start), r9 = Math.min(o.count, p.start + p.count); i14 < r9; i14 += 3)s = Zi(this, n, t, Di, o, l, c, h, u, i14, i14 + 1, i14 + 2), s && (s.faceIndex = Math.floor(i14 / 3), e.push(s));
            }
        }
    }
    function Zi(t31, e22, i16, n13, r10, s3, a3, o2, l2, c2, h, u) {
        zi.fromBufferAttribute(r10, c2), Oi.fromBufferAttribute(r10, h), Fi.fromBufferAttribute(r10, u);
        const d = t31.morphTargetInfluences;
        if (s3 && d) {
            Gi.set(0, 0, 0), Vi.set(0, 0, 0), Hi.set(0, 0, 0);
            for(let t = 0, e = s3.length; t < e; t++){
                const e = d[t], i = s3[t];
                0 !== e && (Bi.fromBufferAttribute(i, c2), Ui.fromBufferAttribute(i, h), ki.fromBufferAttribute(i, u), a3 ? (Gi.addScaledVector(Bi, e), Vi.addScaledVector(Ui, e), Hi.addScaledVector(ki, e)) : (Gi.addScaledVector(Bi.sub(zi), e), Vi.addScaledVector(Ui.sub(Oi), e), Hi.addScaledVector(ki.sub(Fi), e)));
            }
            zi.add(Gi), Oi.add(Vi), Fi.add(Hi);
        }
        t31.isSkinnedMesh && (t31.boneTransform(c2, zi), t31.boneTransform(h, Oi), t31.boneTransform(u, Fi));
        const p = function(t, e, i, n, r, s, a, o) {
            let l;
            if (l = 1 === e.side ? n.intersectTriangle(a, s, r, !0, o) : n.intersectTriangle(r, s, a, 2 !== e.side, o), null === l) return null;
            Ji.copy(o), Ji.applyMatrix4(t.matrixWorld);
            const c = i.ray.origin.distanceTo(Ji);
            return c < i.near || c > i.far ? null : {
                distance: c,
                point: Ji.clone(),
                object: t
            };
        }(t31, e22, i16, n13, zi, Oi, Fi, Xi);
        if (p) {
            o2 && (Wi.fromBufferAttribute(o2, c2), ji.fromBufferAttribute(o2, h), qi.fromBufferAttribute(o2, u), p.uv = mi.getUV(Xi, zi, Oi, Fi, Wi, ji, qi, new Et)), l2 && (Wi.fromBufferAttribute(l2, c2), ji.fromBufferAttribute(l2, h), qi.fromBufferAttribute(l2, u), p.uv2 = mi.getUV(Xi, zi, Oi, Fi, Wi, ji, qi, new Et));
            const t = {
                a: c2,
                b: h,
                c: u,
                normal: new ee,
                materialIndex: 0
            };
            mi.getNormal(zi, Oi, Fi, t.normal), p.face = t;
        }
        return p;
    }
    class Ki extends Pi {
        constructor(t33 = 1, e24 = 1, i17 = 1, n14 = 1, r11 = 1, s5 = 1){
            super(), this.type = "BoxGeometry", this.parameters = {
                width: t33,
                height: e24,
                depth: i17,
                widthSegments: n14,
                heightSegments: r11,
                depthSegments: s5
            };
            const a4 = this;
            n14 = Math.floor(n14), r11 = Math.floor(r11), s5 = Math.floor(s5);
            const o3 = [], l = [], c = [], h = [];
            let u2 = 0, d = 0;
            function p2(t, e, i, n, r, s, p, m, f, g, v) {
                const x = s / f, y = p / g, _ = s / 2, M = p / 2, b = m / 2, w = f + 1, S = g + 1;
                let T = 0, A = 0;
                const E = new ee;
                for(let s4 = 0; s4 < S; s4++){
                    const a = s4 * y - M;
                    for(let o = 0; o < w; o++){
                        const u = o * x - _;
                        E[t] = u * n, E[e] = a * r, E[i] = b, l.push(E.x, E.y, E.z), E[t] = 0, E[e] = 0, E[i] = m > 0 ? 1 : -1, c.push(E.x, E.y, E.z), h.push(o / f), h.push(1 - s4 / g), T += 1;
                    }
                }
                for(let t32 = 0; t32 < g; t32++)for(let e23 = 0; e23 < f; e23++){
                    const i = u2 + e23 + w * t32, n = u2 + e23 + w * (t32 + 1), r = u2 + (e23 + 1) + w * (t32 + 1), s = u2 + (e23 + 1) + w * t32;
                    o3.push(i, n, s), o3.push(n, r, s), A += 6;
                }
                a4.addGroup(d, A, v), d += A, u2 += T;
            }
            p2("z", "y", "x", -1, -1, i17, e24, t33, s5, r11, 0), p2("z", "y", "x", 1, -1, i17, e24, -t33, s5, r11, 1), p2("x", "z", "y", 1, 1, t33, i17, e24, n14, s5, 2), p2("x", "z", "y", 1, -1, t33, i17, -e24, n14, s5, 3), p2("x", "y", "z", 1, -1, t33, e24, i17, n14, r11, 4), p2("x", "y", "z", -1, -1, t33, e24, -i17, n14, r11, 5), this.setIndex(o3), this.setAttribute("position", new wi(l, 3)), this.setAttribute("normal", new wi(c, 3)), this.setAttribute("uv", new wi(h, 2));
        }
        static fromJSON(t) {
            return new Ki(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
        }
    }
    function Qi(t) {
        const e = {};
        for(const i in t){
            e[i] = {};
            for(const n in t[i]){
                const r = t[i][n];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[i][n] = r.clone() : Array.isArray(r) ? e[i][n] = r.slice() : e[i][n] = r;
            }
        }
        return e;
    }
    function $i(t) {
        const e = {};
        for(let i = 0; i < t.length; i++){
            const n = Qi(t[i]);
            for(const t34 in n)e[t34] = n[t34];
        }
        return e;
    }
    const tn = {
        clone: Qi,
        merge: $i
    };
    class en extends gi {
        constructor(t){
            super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
                derivatives: !1,
                fragDepth: !1,
                drawBuffers: !1,
                shaderTextureLOD: !1
            }, this.defaultAttributeValues = {
                color: [
                    1,
                    1,
                    1
                ],
                uv: [
                    0,
                    0
                ],
                uv2: [
                    0,
                    0
                ]
            }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t));
        }
        copy(t) {
            return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Qi(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            e.glslVersion = this.glslVersion, e.uniforms = {};
            for(const i in this.uniforms){
                const n = this.uniforms[i].value;
                n && n.isTexture ? e.uniforms[i] = {
                    type: "t",
                    value: n.toJSON(t).uuid
                } : n && n.isColor ? e.uniforms[i] = {
                    type: "c",
                    value: n.getHex()
                } : n && n.isVector2 ? e.uniforms[i] = {
                    type: "v2",
                    value: n.toArray()
                } : n && n.isVector3 ? e.uniforms[i] = {
                    type: "v3",
                    value: n.toArray()
                } : n && n.isVector4 ? e.uniforms[i] = {
                    type: "v4",
                    value: n.toArray()
                } : n && n.isMatrix3 ? e.uniforms[i] = {
                    type: "m3",
                    value: n.toArray()
                } : n && n.isMatrix4 ? e.uniforms[i] = {
                    type: "m4",
                    value: n.toArray()
                } : e.uniforms[i] = {
                    value: n
                };
            }
            Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
            const i18 = {};
            for(const t35 in this.extensions)!0 === this.extensions[t35] && (i18[t35] = !0);
            return Object.keys(i18).length > 0 && (e.extensions = i18), e;
        }
    }
    class nn extends ni {
        constructor(){
            super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ie, this.projectionMatrix = new Ie, this.projectionMatrixInverse = new Ie;
        }
        copy(t, e) {
            return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this;
        }
        getWorldDirection(t) {
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(-e[8], -e[9], -e[10]).normalize();
        }
        updateMatrixWorld(t) {
            super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        updateWorldMatrix(t, e) {
            super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    class rn extends nn {
        constructor(t = 50, e = 1, i = .1, n = 2e3){
            super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = i, this.far = n, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
        }
        copy(t, e) {
            return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
        }
        setFocalLength(t) {
            const e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * xt1 * Math.atan(e), this.updateProjectionMatrix();
        }
        getFocalLength() {
            const t = Math.tan(.5 * vt1 * this.fov);
            return .5 * this.getFilmHeight() / t;
        }
        getEffectiveFOV() {
            return 2 * xt1 * Math.atan(Math.tan(.5 * vt1 * this.fov) / this.zoom);
        }
        getFilmWidth() {
            return this.filmGauge * Math.min(this.aspect, 1);
        }
        getFilmHeight() {
            return this.filmGauge / Math.max(this.aspect, 1);
        }
        setViewOffset(t, e, i, n, r, s) {
            this.aspect = t / e, null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const t = this.near;
            let e = t * Math.tan(.5 * vt1 * this.fov) / this.zoom, i = 2 * e, n = this.aspect * i, r = -0.5 * n;
            const s = this.view;
            if (null !== this.view && this.view.enabled) {
                const t = s.fullWidth, a = s.fullHeight;
                r += s.offsetX * n / t, e -= s.offsetY * i / a, n *= s.width / t, i *= s.height / a;
            }
            const a = this.filmOffset;
            0 !== a && (r += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, e, e - i, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
        }
    }
    const sn = 90;
    class an extends ni {
        constructor(t, e, i){
            if (super(), this.type = "CubeCamera", !0 !== i.isWebGLCubeRenderTarget) return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
            this.renderTarget = i;
            const n = new rn(sn, 1, t, e);
            n.layers = this.layers, n.up.set(0, -1, 0), n.lookAt(new ee(1, 0, 0)), this.add(n);
            const r = new rn(sn, 1, t, e);
            r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new ee(-1, 0, 0)), this.add(r);
            const s = new rn(sn, 1, t, e);
            s.layers = this.layers, s.up.set(0, 0, 1), s.lookAt(new ee(0, 1, 0)), this.add(s);
            const a = new rn(sn, 1, t, e);
            a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new ee(0, -1, 0)), this.add(a);
            const o = new rn(sn, 1, t, e);
            o.layers = this.layers, o.up.set(0, -1, 0), o.lookAt(new ee(0, 0, 1)), this.add(o);
            const l = new rn(sn, 1, t, e);
            l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new ee(0, 0, -1)), this.add(l);
        }
        update(t, e) {
            null === this.parent && this.updateMatrixWorld();
            const i = this.renderTarget, [n, r, s, a, o, l] = this.children, c = t.getRenderTarget(), h = t.toneMapping, u = t.xr.enabled;
            t.toneMapping = 0, t.xr.enabled = !1;
            const d = i.texture.generateMipmaps;
            i.texture.generateMipmaps = !1, t.setRenderTarget(i, 0), t.render(e, n), t.setRenderTarget(i, 1), t.render(e, r), t.setRenderTarget(i, 2), t.render(e, s), t.setRenderTarget(i, 3), t.render(e, a), t.setRenderTarget(i, 4), t.render(e, o), i.texture.generateMipmaps = d, t.setRenderTarget(i, 5), t.render(e, l), t.setRenderTarget(c), t.toneMapping = h, t.xr.enabled = u, i.texture.needsPMREMUpdate = !0;
        }
    }
    class on extends Yt {
        constructor(t, e, i, n, s, a, o, l, c, h){
            super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : r1, i, n, s, a, o, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
        }
        get images() {
            return this.image;
        }
        set images(t) {
            this.image = t;
        }
    }
    class ln extends Kt {
        constructor(t, e = {}){
            super(t, t, e), this.isWebGLCubeRenderTarget = !0;
            const i = {
                width: t,
                height: t,
                depth: 1
            }, n = [
                i,
                i,
                i,
                i,
                i,
                i
            ];
            this.texture = new on(n, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : f1;
        }
        fromEquirectangularTexture(t, e) {
            this.texture.type = e.type, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
            const i = {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
                fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			"
            }, n = new Ki(5, 5, 5), r = new en({
                name: "CubemapFromEquirect",
                uniforms: Qi(i.uniforms),
                vertexShader: i.vertexShader,
                fragmentShader: i.fragmentShader,
                side: 1,
                blending: 0
            });
            r.uniforms.tEquirect.value = e;
            const s = new Yi(n, r), a = e.minFilter;
            e.minFilter === v1 && (e.minFilter = f1);
            return new an(1, 10, this).update(t, s), e.minFilter = a, s.geometry.dispose(), s.material.dispose(), this;
        }
        clear(t, e, i, n) {
            const r = t.getRenderTarget();
            for(let r12 = 0; r12 < 6; r12++)t.setRenderTarget(this, r12), t.clear(e, i, n);
            t.setRenderTarget(r);
        }
    }
    const cn = new ee, hn = new ee, un = new Ct1;
    class dn {
        constructor(t = new ee(1, 0, 0), e = 0){
            this.isPlane = !0, this.normal = t, this.constant = e;
        }
        set(t, e) {
            return this.normal.copy(t), this.constant = e, this;
        }
        setComponents(t, e, i, n) {
            return this.normal.set(t, e, i), this.constant = n, this;
        }
        setFromNormalAndCoplanarPoint(t, e) {
            return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
        }
        setFromCoplanarPoints(t, e, i) {
            const n = cn.subVectors(i, e).cross(hn.subVectors(t, e)).normalize();
            return this.setFromNormalAndCoplanarPoint(n, t), this;
        }
        copy(t) {
            return this.normal.copy(t.normal), this.constant = t.constant, this;
        }
        normalize() {
            const t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t), this.constant *= t, this;
        }
        negate() {
            return this.constant *= -1, this.normal.negate(), this;
        }
        distanceToPoint(t) {
            return this.normal.dot(t) + this.constant;
        }
        distanceToSphere(t) {
            return this.distanceToPoint(t.center) - t.radius;
        }
        projectPoint(t, e) {
            return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t);
        }
        intersectLine(t, e) {
            const i = t.delta(cn), n = this.normal.dot(i);
            if (0 === n) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
            const r = -(t.start.dot(this.normal) + this.constant) / n;
            return r < 0 || r > 1 ? null : e.copy(i).multiplyScalar(r).add(t.start);
        }
        intersectsLine(t) {
            const e = this.distanceToPoint(t.start), i = this.distanceToPoint(t.end);
            return e < 0 && i > 0 || i < 0 && e > 0;
        }
        intersectsBox(t) {
            return t.intersectsPlane(this);
        }
        intersectsSphere(t) {
            return t.intersectsPlane(this);
        }
        coplanarPoint(t) {
            return t.copy(this.normal).multiplyScalar(-this.constant);
        }
        applyMatrix4(t, e) {
            const i = e || un.getNormalMatrix(t), n = this.coplanarPoint(cn).applyMatrix4(t), r = this.normal.applyMatrix3(i).normalize();
            return this.constant = -n.dot(r), this;
        }
        translate(t) {
            return this.constant -= t.dot(this.normal), this;
        }
        equals(t) {
            return t.normal.equals(this.normal) && t.constant === this.constant;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    const pn = new we, mn = new ee;
    class fn {
        constructor(t = new dn, e = new dn, i = new dn, n = new dn, r = new dn, s = new dn){
            this.planes = [
                t,
                e,
                i,
                n,
                r,
                s
            ];
        }
        set(t, e, i, n, r, s) {
            const a = this.planes;
            return a[0].copy(t), a[1].copy(e), a[2].copy(i), a[3].copy(n), a[4].copy(r), a[5].copy(s), this;
        }
        copy(t) {
            const e = this.planes;
            for(let i = 0; i < 6; i++)e[i].copy(t.planes[i]);
            return this;
        }
        setFromProjectionMatrix(t) {
            const e = this.planes, i = t.elements, n = i[0], r = i[1], s = i[2], a = i[3], o = i[4], l = i[5], c = i[6], h = i[7], u = i[8], d = i[9], p = i[10], m = i[11], f = i[12], g = i[13], v = i[14], x = i[15];
            return e[0].setComponents(a - n, h - o, m - u, x - f).normalize(), e[1].setComponents(a + n, h + o, m + u, x + f).normalize(), e[2].setComponents(a + r, h + l, m + d, x + g).normalize(), e[3].setComponents(a - r, h - l, m - d, x - g).normalize(), e[4].setComponents(a - s, h - c, m - p, x - v).normalize(), e[5].setComponents(a + s, h + c, m + p, x + v).normalize(), this;
        }
        intersectsObject(t) {
            const e = t.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(), pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(pn);
        }
        intersectsSprite(t) {
            return pn.center.set(0, 0, 0), pn.radius = .7071067811865476, pn.applyMatrix4(t.matrixWorld), this.intersectsSphere(pn);
        }
        intersectsSphere(t) {
            const e = this.planes, i = t.center, n = -t.radius;
            for(let t36 = 0; t36 < 6; t36++){
                if (e[t36].distanceToPoint(i) < n) return !1;
            }
            return !0;
        }
        intersectsBox(t) {
            const e = this.planes;
            for(let i = 0; i < 6; i++){
                const n = e[i];
                if (mn.x = n.normal.x > 0 ? t.max.x : t.min.x, mn.y = n.normal.y > 0 ? t.max.y : t.min.y, mn.z = n.normal.z > 0 ? t.max.z : t.min.z, n.distanceToPoint(mn) < 0) return !1;
            }
            return !0;
        }
        containsPoint(t) {
            const e = this.planes;
            for(let i = 0; i < 6; i++)if (e[i].distanceToPoint(t) < 0) return !1;
            return !0;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    function gn() {
        let t37 = null, e25 = !1, i = null, n = null;
        function r(e, s) {
            i(e, s), n = t37.requestAnimationFrame(r);
        }
        return {
            start: function() {
                !0 !== e25 && null !== i && (n = t37.requestAnimationFrame(r), e25 = !0);
            },
            stop: function() {
                t37.cancelAnimationFrame(n), e25 = !1;
            },
            setAnimationLoop: function(t) {
                i = t;
            },
            setContext: function(e) {
                t37 = e;
            }
        };
    }
    function vn(t38, e26) {
        const i19 = e26.isWebGL2, n15 = new WeakMap;
        return {
            get: function(t) {
                return t.isInterleavedBufferAttribute && (t = t.data), n15.get(t);
            },
            remove: function(e) {
                e.isInterleavedBufferAttribute && (e = e.data);
                const i = n15.get(e);
                i && (t38.deleteBuffer(i.buffer), n15.delete(e));
            },
            update: function(e27, r13) {
                if (e27.isGLBufferAttribute) {
                    const t = n15.get(e27);
                    return void ((!t || t.version < e27.version) && n15.set(e27, {
                        buffer: e27.buffer,
                        type: e27.type,
                        bytesPerElement: e27.elementSize,
                        version: e27.version
                    }));
                }
                e27.isInterleavedBufferAttribute && (e27 = e27.data);
                const s6 = n15.get(e27);
                void 0 === s6 ? n15.set(e27, function(e, n) {
                    const r = e.array, s = e.usage, a = t38.createBuffer();
                    let o;
                    if (t38.bindBuffer(n, a), t38.bufferData(n, r, s), e.onUploadCallback(), r instanceof Float32Array) o = 5126;
                    else if (r instanceof Uint16Array) {
                        if (e.isFloat16BufferAttribute) {
                            if (!i19) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                            o = 5131;
                        } else o = 5123;
                    } else if (r instanceof Int16Array) o = 5122;
                    else if (r instanceof Uint32Array) o = 5125;
                    else if (r instanceof Int32Array) o = 5124;
                    else if (r instanceof Int8Array) o = 5120;
                    else if (r instanceof Uint8Array) o = 5121;
                    else {
                        if (!(r instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
                        o = 5121;
                    }
                    return {
                        buffer: a,
                        type: o,
                        bytesPerElement: r.BYTES_PER_ELEMENT,
                        version: e.version
                    };
                }(e27, r13)) : s6.version < e27.version && (!function(e, n, r) {
                    const s = n.array, a = n.updateRange;
                    t38.bindBuffer(r, e), -1 === a.count ? t38.bufferSubData(r, 0, s) : (i19 ? t38.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t38.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)), a.count = -1);
                }(s6.buffer, e27, r13), s6.version = e27.version);
            }
        };
    }
    class xn extends Pi {
        constructor(t = 1, e = 1, i = 1, n = 1){
            super(), this.type = "PlaneGeometry", this.parameters = {
                width: t,
                height: e,
                widthSegments: i,
                heightSegments: n
            };
            const r = t / 2, s = e / 2, a = Math.floor(i), o = Math.floor(n), l = a + 1, c = o + 1, h = t / a, u = e / o, d = [], p = [], m = [], f = [];
            for(let t39 = 0; t39 < c; t39++){
                const e = t39 * u - s;
                for(let i = 0; i < l; i++){
                    const n = i * h - r;
                    p.push(n, -e, 0), m.push(0, 0, 1), f.push(i / a), f.push(1 - t39 / o);
                }
            }
            for(let t40 = 0; t40 < o; t40++)for(let e28 = 0; e28 < a; e28++){
                const i = e28 + l * t40, n = e28 + l * (t40 + 1), r = e28 + 1 + l * (t40 + 1), s = e28 + 1 + l * t40;
                d.push(i, n, s), d.push(n, r, s);
            }
            this.setIndex(d), this.setAttribute("position", new wi(p, 3)), this.setAttribute("normal", new wi(m, 3)), this.setAttribute("uv", new wi(f, 2));
        }
        static fromJSON(t) {
            return new xn(t.width, t.height, t.widthSegments, t.heightSegments);
        }
    }
    const yn = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
        alphatest_fragment: "#ifdef USE_ALPHATEST\n	if ( diffuseColor.a < alphaTest ) discard;\n#endif",
        alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
        aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
        begin_vertex: "vec3 transformed = vec3( position );",
        beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
        bsdfs: "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n		float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n		float x2 = x * x;\n		float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n		return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( V * D );\n}\n#ifdef USE_IRIDESCENCE\nvec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);\n	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( V * D );\n}\n#endif\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif",
        iridescence_fragment: "#ifdef USE_IRIDESCENCE\nconst mat3 XYZ_TO_REC709 = mat3(\n		3.2404542, -0.9692660,	0.0556434,\n	 -1.5371385,	1.8760108, -0.2040259,\n	 -0.4985314,	0.0415560,	1.0572252\n);\nvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n	 vec3 sqrtF0 = sqrt( fresnel0 );\n	 return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n}\nvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n	 return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n}\nfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n	 return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n}\nvec3 evalSensitivity( float OPD, vec3 shift ) {\n	 float phase = 2.0 * PI * OPD * 1.0e-9;\n	 vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n	 vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n	 vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n	 vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );\n	 xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );\n	 xyz /= 1.0685e-7;\n	 vec3 srgb = XYZ_TO_REC709 * xyz;\n	 return srgb;\n}\nvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n	 vec3 I;\n	 float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n	 float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n	 float cosTheta2Sq = 1.0 - sinTheta2Sq;\n	 if ( cosTheta2Sq < 0.0 ) {\n			 return vec3( 1.0 );\n	 }\n	 float cosTheta2 = sqrt( cosTheta2Sq );\n	 float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n	 float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n	 float R21 = R12;\n	 float T121 = 1.0 - R12;\n	 float phi12 = 0.0;\n	 if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n	 float phi21 = PI - phi12;\n	 vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );	 vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n	 vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n	 vec3 phi23 = vec3( 0.0 );\n	 if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;\n	 if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;\n	 if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;\n	 float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n	 vec3 phi = vec3( phi21 ) + phi23;\n	 vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n	 vec3 r123 = sqrt( R123 );\n	 vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n	 vec3 C0 = R12 + Rs;\n	 I = C0;\n	 vec3 Cm = Rs - T121;\n	 for ( int m = 1; m <= 2; ++m ) {\n			 Cm *= r123;\n			 vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			 I += Cm * Sm;\n	 }\n	 return max( I, vec3( 0.0 ) );\n}\n#endif",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#pragma unroll_loop_end\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop_start\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		#pragma unroll_loop_end\n		if ( clipped ) discard;\n	#endif\n#endif",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
        color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif",
        color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	varying vec3 vColor;\n#endif",
        color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif",
        common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n	return dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define r0 1.0\n	#define v0 0.339\n	#define m0 - 2.0\n	#define r1 0.8\n	#define v1 0.276\n	#define m1 - 1.0\n	#define r4 0.4\n	#define v4 0.046\n	#define m4 2.0\n	#define r5 0.305\n	#define v5 0.016\n	#define m5 3.0\n	#define r6 0.21\n	#define v6 0.0038\n	#define m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= r1 ) {\n			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n		} else if ( roughness >= r4 ) {\n			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n		} else if ( roughness >= r5 ) {\n			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n		} else if ( roughness >= r6 ) {\n			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
        defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n	mat3 m = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n	transformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
        encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
        encodings_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
        envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",
        envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",
        envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
        envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n#endif",
        envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
        fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
        fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
        fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
        fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
        gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n	#endif\n}",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n	reflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
        lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n	vIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n#ifdef DOUBLE_SIDED\n	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n#endif\n#if NUM_POINT_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		getPointLightInfo( pointLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		getSpotLightInfo( spotLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		#ifdef DOUBLE_SIDED\n			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif",
        lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n		if ( cutoffDistance > 0.0 ) {\n			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n		}\n		return distanceFalloff;\n	#else\n		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n		}\n		return 1.0;\n	#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif",
        lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
        lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )	(0)",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	#ifdef SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULARINTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n		#endif\n		#ifdef USE_SPECULARCOLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEENCOLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEENROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n	#endif\n#endif",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(		0, 1,		0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n	#endif\n	#ifdef USE_IRIDESCENCE\n		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );\n	#else\n		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
        lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n	geometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\nfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\nif ( material.iridescenceThickness == 0.0 ) {\n	material.iridescence = 0.0;\n} else {\n	material.iridescence = saturate( material.iridescence );\n}\nif ( material.iridescence > 0.0 ) {\n	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
        lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometry.normal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
        lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif",
        map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
        map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
        map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
        map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	uniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
        morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n	#endif\n#endif",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n		uniform sampler2DArray morphTargetsTexture;\n		uniform ivec2 morphTargetsTextureSize;\n		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n			int y = texelIndex / morphTargetsTextureSize.x;\n			int x = texelIndex - y * morphTargetsTextureSize.x;\n			ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n			return texelFetch( morphTargetsTexture, morphUV, 0 );\n		}\n	#else\n		#ifndef USE_MORPHNORMALS\n			uniform float morphTargetInfluences[ 8 ];\n		#else\n			uniform float morphTargetInfluences[ 4 ];\n		#endif\n	#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n		transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n		transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n		transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n		#ifndef USE_MORPHNORMALS\n			transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n			transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n			transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n			transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n		#endif\n	#endif\n#endif",
        normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	#ifdef USE_TANGENT\n		vec3 tangent = normalize( vTangent );\n		vec3 bitangent = normalize( vBitangent );\n		#ifdef DOUBLE_SIDED\n			tangent = tangent * faceDirection;\n			bitangent = bitangent * faceDirection;\n		#endif\n		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n			mat3 vTBN = mat3( tangent, bitangent, normal );\n		#endif\n	#endif\n#endif\nvec3 geometryNormal = normal;",
        normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	#ifdef USE_TANGENT\n		normal = normalize( vTBN * mapN );\n	#else\n		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n	#endif\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
        normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
        normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
        normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n	}\n#endif",
        clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = geometryNormal;\n#endif",
        clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	#ifdef USE_TANGENT\n		clearcoatNormal = normalize( vTBN * clearcoatMapN );\n	#else\n		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n	#endif\n#endif",
        clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif",
        iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
        output_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n	return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
        project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
        dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
        dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n							f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n							f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		vec4 shadowWorldPosition;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n#endif",
        shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
        skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	uniform int boneTextureSize;\n	mat4 getBoneMatrix( const in float i ) {\n		float j = i * 4.0;\n		float x = mod( j, float( boneTextureSize ) );\n		float y = floor( j / float( boneTextureSize ) );\n		float dx = 1.0 / float( boneTextureSize );\n		float dy = 1.0 / float( boneTextureSize );\n		y = dy * ( y + 0.5 );\n		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n		mat4 bone = mat4( v1, v2, v3, v4 );\n		return bone;\n	}\n#endif",
        skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
        skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
        tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(	1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,	1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,	1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
        transmission_fragment: "#ifdef USE_TRANSMISSION\n	float transmissionAlpha = 1.0;\n	float transmissionFactor = transmission;\n	float thicknessFactor = thickness;\n	#ifdef USE_TRANSMISSIONMAP\n		transmissionFactor *= texture2D( transmissionMap, vUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		thicknessFactor *= texture2D( thicknessMap, vUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmission = getIBLVolumeRefraction(\n		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n		attenuationColor, attenuationDistance );\n	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif",
        transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		#ifdef texture2DLodEXT\n			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#else\n			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#endif\n	}\n	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( attenuationDistance == 0.0 ) {\n			return radiance;\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n		vec3 refractedRayExit = position + transmissionRay;\n		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n		vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n		refractionCoords += 1.0;\n		refractionCoords /= 2.0;\n		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n	}\n#endif",
        uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n	varying vec2 vUv;\n#endif",
        uv_pars_vertex: "#ifdef USE_UV\n	#ifdef UVS_VERTEX_ONLY\n		vec2 vUv;\n	#else\n		varying vec2 vUv;\n	#endif\n	uniform mat3 uvTransform;\n#endif",
        uv_vertex: "#ifdef USE_UV\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
        uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif",
        uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n	uniform mat3 uv2Transform;\n#endif",
        uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
        background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
        background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n	gl_FragColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n	#endif\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
        cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	vec3 vReflect = vWorldDirection;\n	#include <envmap_fragment>\n	gl_FragColor = envColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
        depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
        equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	#ifdef DOUBLE_SIDED\n		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n	#else\n		reflectedLight.indirectDiffuse += vIndirectFront;\n	#endif\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
        meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
        meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
        meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULARINTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n	#ifdef USE_SPECULARCOLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEENCOLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEENROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n	#endif\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
        shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
        sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
        sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}"
    }, _n = {
        common: {
            diffuse: {
                value: new Ht(16777215)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new Ct1
            },
            uv2Transform: {
                value: new Ct1
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            }
        },
        specularmap: {
            specularMap: {
                value: null
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            ior: {
                value: 1.5
            },
            refractionRatio: {
                value: .98
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new Et(1, 1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new Ht(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {}
                }
            },
            directionalLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {}
                }
            },
            spotLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {}
                }
            },
            pointLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            },
            ltc_1: {
                value: null
            },
            ltc_2: {
                value: null
            }
        },
        points: {
            diffuse: {
                value: new Ht(16777215)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new Ct1
            }
        },
        sprite: {
            diffuse: {
                value: new Ht(16777215)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new Et(.5, .5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new Ct1
            }
        }
    }, Mn = {
        basic: {
            uniforms: $i([
                _n.common,
                _n.specularmap,
                _n.envmap,
                _n.aomap,
                _n.lightmap,
                _n.fog
            ]),
            vertexShader: yn.meshbasic_vert,
            fragmentShader: yn.meshbasic_frag
        },
        lambert: {
            uniforms: $i([
                _n.common,
                _n.specularmap,
                _n.envmap,
                _n.aomap,
                _n.lightmap,
                _n.emissivemap,
                _n.fog,
                _n.lights,
                {
                    emissive: {
                        value: new Ht(0)
                    }
                }
            ]),
            vertexShader: yn.meshlambert_vert,
            fragmentShader: yn.meshlambert_frag
        },
        phong: {
            uniforms: $i([
                _n.common,
                _n.specularmap,
                _n.envmap,
                _n.aomap,
                _n.lightmap,
                _n.emissivemap,
                _n.bumpmap,
                _n.normalmap,
                _n.displacementmap,
                _n.fog,
                _n.lights,
                {
                    emissive: {
                        value: new Ht(0)
                    },
                    specular: {
                        value: new Ht(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }
            ]),
            vertexShader: yn.meshphong_vert,
            fragmentShader: yn.meshphong_frag
        },
        standard: {
            uniforms: $i([
                _n.common,
                _n.envmap,
                _n.aomap,
                _n.lightmap,
                _n.emissivemap,
                _n.bumpmap,
                _n.normalmap,
                _n.displacementmap,
                _n.roughnessmap,
                _n.metalnessmap,
                _n.fog,
                _n.lights,
                {
                    emissive: {
                        value: new Ht(0)
                    },
                    roughness: {
                        value: 1
                    },
                    metalness: {
                        value: 0
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: yn.meshphysical_vert,
            fragmentShader: yn.meshphysical_frag
        },
        toon: {
            uniforms: $i([
                _n.common,
                _n.aomap,
                _n.lightmap,
                _n.emissivemap,
                _n.bumpmap,
                _n.normalmap,
                _n.displacementmap,
                _n.gradientmap,
                _n.fog,
                _n.lights,
                {
                    emissive: {
                        value: new Ht(0)
                    }
                }
            ]),
            vertexShader: yn.meshtoon_vert,
            fragmentShader: yn.meshtoon_frag
        },
        matcap: {
            uniforms: $i([
                _n.common,
                _n.bumpmap,
                _n.normalmap,
                _n.displacementmap,
                _n.fog,
                {
                    matcap: {
                        value: null
                    }
                }
            ]),
            vertexShader: yn.meshmatcap_vert,
            fragmentShader: yn.meshmatcap_frag
        },
        points: {
            uniforms: $i([
                _n.points,
                _n.fog
            ]),
            vertexShader: yn.points_vert,
            fragmentShader: yn.points_frag
        },
        dashed: {
            uniforms: $i([
                _n.common,
                _n.fog,
                {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }
            ]),
            vertexShader: yn.linedashed_vert,
            fragmentShader: yn.linedashed_frag
        },
        depth: {
            uniforms: $i([
                _n.common,
                _n.displacementmap
            ]),
            vertexShader: yn.depth_vert,
            fragmentShader: yn.depth_frag
        },
        normal: {
            uniforms: $i([
                _n.common,
                _n.bumpmap,
                _n.normalmap,
                _n.displacementmap,
                {
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: yn.meshnormal_vert,
            fragmentShader: yn.meshnormal_frag
        },
        sprite: {
            uniforms: $i([
                _n.sprite,
                _n.fog
            ]),
            vertexShader: yn.sprite_vert,
            fragmentShader: yn.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new Ct1
                },
                t2D: {
                    value: null
                }
            },
            vertexShader: yn.background_vert,
            fragmentShader: yn.background_frag
        },
        cube: {
            uniforms: $i([
                _n.envmap,
                {
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: yn.cube_vert,
            fragmentShader: yn.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: yn.equirect_vert,
            fragmentShader: yn.equirect_frag
        },
        distanceRGBA: {
            uniforms: $i([
                _n.common,
                _n.displacementmap,
                {
                    referencePosition: {
                        value: new ee
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }
            ]),
            vertexShader: yn.distanceRGBA_vert,
            fragmentShader: yn.distanceRGBA_frag
        },
        shadow: {
            uniforms: $i([
                _n.lights,
                _n.fog,
                {
                    color: {
                        value: new Ht(0)
                    },
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: yn.shadow_vert,
            fragmentShader: yn.shadow_frag
        }
    };
    function bn(t41, e29, i20, n, r14, s7) {
        const a = new Ht(0);
        let o, c, h = !0 === r14 ? 0 : 1, u = null, d = 0, p = null;
        function m(t, e) {
            i20.buffers.color.setClear(t.r, t.g, t.b, e, s7);
        }
        return {
            getClearColor: function() {
                return a;
            },
            setClearColor: function(t, e = 1) {
                a.set(t), h = e, m(a, h);
            },
            getClearAlpha: function() {
                return h;
            },
            setClearAlpha: function(t) {
                h = t, m(a, h);
            },
            render: function(i21, r) {
                let s = !1, f = !0 === r.isScene ? r.background : null;
                f && f.isTexture && (f = e29.get(f));
                const g = t41.xr, v = g.getSession && g.getSession();
                v && "additive" === v.environmentBlendMode && (f = null), null === f ? m(a, h) : f && f.isColor && (m(f, 1), s = !0), (t41.autoClear || s) && t41.clear(t41.autoClearColor, t41.autoClearDepth, t41.autoClearStencil), f && (f.isCubeTexture || f.mapping === l1) ? (void 0 === c && (c = new Yi(new Ki(1, 1, 1), new en({
                    name: "BackgroundCubeMaterial",
                    uniforms: Qi(Mn.cube.uniforms),
                    vertexShader: Mn.cube.vertexShader,
                    fragmentShader: Mn.cube.fragmentShader,
                    side: 1,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(t, e, i) {
                    this.matrixWorld.copyPosition(i.matrixWorld);
                }, Object.defineProperty(c.material, "envMap", {
                    get: function() {
                        return this.uniforms.envMap.value;
                    }
                }), n.update(c)), c.material.uniforms.envMap.value = f, c.material.uniforms.flipEnvMap.value = f.isCubeTexture && !1 === f.isRenderTargetTexture ? -1 : 1, u === f && d === f.version && p === t41.toneMapping || (c.material.needsUpdate = !0, u = f, d = f.version, p = t41.toneMapping), c.layers.enableAll(), i21.unshift(c, c.geometry, c.material, 0, 0, null)) : f && f.isTexture && (void 0 === o && (o = new Yi(new xn(2, 2), new en({
                    name: "BackgroundMaterial",
                    uniforms: Qi(Mn.background.uniforms),
                    vertexShader: Mn.background.vertexShader,
                    fragmentShader: Mn.background.fragmentShader,
                    side: 0,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
                    get: function() {
                        return this.uniforms.t2D.value;
                    }
                }), n.update(o)), o.material.uniforms.t2D.value = f, !0 === f.matrixAutoUpdate && f.updateMatrix(), o.material.uniforms.uvTransform.value.copy(f.matrix), u === f && d === f.version && p === t41.toneMapping || (o.material.needsUpdate = !0, u = f, d = f.version, p = t41.toneMapping), o.layers.enableAll(), i21.unshift(o, o.geometry, o.material, 0, 0, null));
            }
        };
    }
    function wn(t43, e30, i22, n16) {
        const r15 = t43.getParameter(34921), s8 = n16.isWebGL2 ? null : e30.get("OES_vertex_array_object"), a5 = n16.isWebGL2 || null !== s8, o4 = {}, l3 = p(null);
        let c3 = l3, h2 = !1;
        function u3(e) {
            return n16.isWebGL2 ? t43.bindVertexArray(e) : s8.bindVertexArrayOES(e);
        }
        function d2(e) {
            return n16.isWebGL2 ? t43.deleteVertexArray(e) : s8.deleteVertexArrayOES(e);
        }
        function p(t) {
            const e = [], i = [], n = [];
            for(let t42 = 0; t42 < r15; t42++)e[t42] = 0, i[t42] = 0, n[t42] = 0;
            return {
                geometry: null,
                program: null,
                wireframe: !1,
                newAttributes: e,
                enabledAttributes: i,
                attributeDivisors: n,
                object: t,
                attributes: {},
                index: null
            };
        }
        function m() {
            const t = c3.newAttributes;
            for(let e = 0, i = t.length; e < i; e++)t[e] = 0;
        }
        function f(t) {
            g(t, 0);
        }
        function g(i, r) {
            const s = c3.newAttributes, a = c3.enabledAttributes, o = c3.attributeDivisors;
            if (s[i] = 1, 0 === a[i] && (t43.enableVertexAttribArray(i), a[i] = 1), o[i] !== r) (n16.isWebGL2 ? t43 : e30.get("ANGLE_instanced_arrays"))[n16.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](i, r), o[i] = r;
        }
        function v() {
            const e = c3.newAttributes, i = c3.enabledAttributes;
            for(let n = 0, r = i.length; n < r; n++)i[n] !== e[n] && (t43.disableVertexAttribArray(n), i[n] = 0);
        }
        function x(e, i, r, s, a, o) {
            !0 !== n16.isWebGL2 || 5124 !== r && 5125 !== r ? t43.vertexAttribPointer(e, i, r, s, a, o) : t43.vertexAttribIPointer(e, i, r, a, o);
        }
        function y2() {
            _2(), h2 = !0, c3 !== l3 && (c3 = l3, u3(c3.object));
        }
        function _2() {
            l3.geometry = null, l3.program = null, l3.wireframe = !1;
        }
        return {
            setup: function(r16, l4, d3, y, _) {
                let M = !1;
                if (a5) {
                    const e31 = function(e, i, r) {
                        const a = !0 === r.wireframe;
                        let l = o4[e.id];
                        void 0 === l && (l = {}, o4[e.id] = l);
                        let c = l[i.id];
                        void 0 === c && (c = {}, l[i.id] = c);
                        let h = c[a];
                        void 0 === h && (h = p(n16.isWebGL2 ? t43.createVertexArray() : s8.createVertexArrayOES()), c[a] = h);
                        return h;
                    }(y, d3, l4);
                    c3 !== e31 && (c3 = e31, u3(c3.object)), M = function(t, e, i, n) {
                        const r = c3.attributes, s = e.attributes;
                        let a = 0;
                        const o = i.getAttributes();
                        for(const e33 in o)if (o[e33].location >= 0) {
                            const i = r[e33];
                            let n = s[e33];
                            if (void 0 === n && ("instanceMatrix" === e33 && t.instanceMatrix && (n = t.instanceMatrix), "instanceColor" === e33 && t.instanceColor && (n = t.instanceColor)), void 0 === i) return !0;
                            if (i.attribute !== n) return !0;
                            if (n && i.data !== n.data) return !0;
                            a++;
                        }
                        return c3.attributesNum !== a || c3.index !== n;
                    }(r16, y, d3, _), M && function(t, e, i, n) {
                        const r = {}, s = e.attributes;
                        let a = 0;
                        const o = i.getAttributes();
                        for(const e34 in o)if (o[e34].location >= 0) {
                            let i = s[e34];
                            void 0 === i && ("instanceMatrix" === e34 && t.instanceMatrix && (i = t.instanceMatrix), "instanceColor" === e34 && t.instanceColor && (i = t.instanceColor));
                            const n = {};
                            n.attribute = i, i && i.data && (n.data = i.data), r[e34] = n, a++;
                        }
                        c3.attributes = r, c3.attributesNum = a, c3.index = n;
                    }(r16, y, d3, _);
                } else {
                    const t = !0 === l4.wireframe;
                    c3.geometry === y.id && c3.program === d3.id && c3.wireframe === t || (c3.geometry = y.id, c3.program = d3.id, c3.wireframe = t, M = !0);
                }
                null !== _ && i22.update(_, 34963), (M || h2) && (h2 = !1, function(r, s, a, o) {
                    if (!1 === n16.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e30.get("ANGLE_instanced_arrays")) return;
                    m();
                    const l = o.attributes, c = a.getAttributes(), h = s.defaultAttributeValues;
                    for(const e in c){
                        const n = c[e];
                        if (n.location >= 0) {
                            let s = l[e];
                            if (void 0 === s && ("instanceMatrix" === e && r.instanceMatrix && (s = r.instanceMatrix), "instanceColor" === e && r.instanceColor && (s = r.instanceColor)), void 0 !== s) {
                                const e = s.normalized, a = s.itemSize, l = i22.get(s);
                                if (void 0 === l) continue;
                                const c = l.buffer, h = l.type, u = l.bytesPerElement;
                                if (s.isInterleavedBufferAttribute) {
                                    const i = s.data, l = i.stride, d = s.offset;
                                    if (i.isInstancedInterleavedBuffer) {
                                        for(let t = 0; t < n.locationSize; t++)g(n.location + t, i.meshPerAttribute);
                                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = i.meshPerAttribute * i.count);
                                    } else for(let t = 0; t < n.locationSize; t++)f(n.location + t);
                                    t43.bindBuffer(34962, c);
                                    for(let t44 = 0; t44 < n.locationSize; t44++)x(n.location + t44, a / n.locationSize, h, e, l * u, (d + a / n.locationSize * t44) * u);
                                } else {
                                    if (s.isInstancedBufferAttribute) {
                                        for(let t = 0; t < n.locationSize; t++)g(n.location + t, s.meshPerAttribute);
                                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = s.meshPerAttribute * s.count);
                                    } else for(let t = 0; t < n.locationSize; t++)f(n.location + t);
                                    t43.bindBuffer(34962, c);
                                    for(let t45 = 0; t45 < n.locationSize; t45++)x(n.location + t45, a / n.locationSize, h, e, a * u, a / n.locationSize * t45 * u);
                                }
                            } else if (void 0 !== h) {
                                const i = h[e];
                                if (void 0 !== i) switch(i.length){
                                    case 2:
                                        t43.vertexAttrib2fv(n.location, i);
                                        break;
                                    case 3:
                                        t43.vertexAttrib3fv(n.location, i);
                                        break;
                                    case 4:
                                        t43.vertexAttrib4fv(n.location, i);
                                        break;
                                    default:
                                        t43.vertexAttrib1fv(n.location, i);
                                }
                            }
                        }
                    }
                    v();
                }(r16, l4, d3, y), null !== _ && t43.bindBuffer(34963, i22.get(_).buffer));
            },
            reset: y2,
            resetDefaultState: _2,
            dispose: function() {
                y2();
                for(const t in o4){
                    const e = o4[t];
                    for(const t46 in e){
                        const i = e[t46];
                        for(const t in i)d2(i[t].object), delete i[t];
                        delete e[t46];
                    }
                    delete o4[t];
                }
            },
            releaseStatesOfGeometry: function(t) {
                if (void 0 === o4[t.id]) return;
                const e = o4[t.id];
                for(const t47 in e){
                    const i = e[t47];
                    for(const t in i)d2(i[t].object), delete i[t];
                    delete e[t47];
                }
                delete o4[t.id];
            },
            releaseStatesOfProgram: function(t) {
                for(const e in o4){
                    const i = o4[e];
                    if (void 0 === i[t.id]) continue;
                    const n = i[t.id];
                    for(const t48 in n)d2(n[t48].object), delete n[t48];
                    delete i[t.id];
                }
            },
            initAttributes: m,
            enableAttribute: f,
            disableUnusedAttributes: v
        };
    }
    function Sn(t49, e35, i, n17) {
        const r = n17.isWebGL2;
        let s;
        this.setMode = function(t) {
            s = t;
        }, this.render = function(e, n) {
            t49.drawArrays(s, e, n), i.update(n, s, 1);
        }, this.renderInstances = function(n, a, o) {
            if (0 === o) return;
            let l, c;
            if (r) l = t49, c = "drawArraysInstanced";
            else if (l = e35.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            l[c](s, n, a, o), i.update(a, s, o);
        };
    }
    function Tn(t, e36, i23) {
        let n;
        function r(e) {
            if ("highp" === e) {
                if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
                e = "mediump";
            }
            return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
        }
        const s = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
        let a = void 0 !== i23.precision ? i23.precision : "highp";
        const o = r(a);
        o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
        const l = s || e36.has("WEBGL_draw_buffers"), c = !0 === i23.logarithmicDepthBuffer, h = t.getParameter(34930), u = t.getParameter(35660), d = t.getParameter(3379), p = t.getParameter(34076), m = t.getParameter(34921), f = t.getParameter(36347), g = t.getParameter(36348), v = t.getParameter(36349), x = u > 0, y = s || e36.has("OES_texture_float");
        return {
            isWebGL2: s,
            drawBuffers: l,
            getMaxAnisotropy: function() {
                if (void 0 !== n) return n;
                if (!0 === e36.has("EXT_texture_filter_anisotropic")) {
                    const i = e36.get("EXT_texture_filter_anisotropic");
                    n = t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                } else n = 0;
                return n;
            },
            getMaxPrecision: r,
            precision: a,
            logarithmicDepthBuffer: c,
            maxTextures: h,
            maxVertexTextures: u,
            maxTextureSize: d,
            maxCubemapSize: p,
            maxAttributes: m,
            maxVertexUniforms: f,
            maxVaryings: g,
            maxFragmentUniforms: v,
            vertexTextures: x,
            floatFragmentTextures: y,
            floatVertexTextures: x && y,
            maxSamples: s ? t.getParameter(36183) : 0
        };
    }
    function An(t50) {
        const e38 = this;
        let i24 = null, n18 = 0, r17 = !1, s9 = !1;
        const a6 = new dn, o5 = new Ct1, l = {
            value: null,
            needsUpdate: !1
        };
        function c4() {
            l.value !== i24 && (l.value = i24, l.needsUpdate = n18 > 0), e38.numPlanes = n18, e38.numIntersection = 0;
        }
        function h(t, i, n, r) {
            const s = null !== t ? t.length : 0;
            let c = null;
            if (0 !== s) {
                if (c = l.value, !0 !== r || null === c) {
                    const e = n + 4 * s, r = i.matrixWorldInverse;
                    o5.getNormalMatrix(r), (null === c || c.length < e) && (c = new Float32Array(e));
                    for(let e37 = 0, i25 = n; e37 !== s; ++e37, i25 += 4)a6.copy(t[e37]).applyMatrix4(r, o5), a6.normal.toArray(c, i25), c[i25 + 3] = a6.constant;
                }
                l.value = c, l.needsUpdate = !0;
            }
            return e38.numPlanes = s, e38.numIntersection = 0, c;
        }
        this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, e, s) {
            const a = 0 !== t.length || e || 0 !== n18 || r17;
            return r17 = e, i24 = h(t, s, 0), n18 = t.length, a;
        }, this.beginShadows = function() {
            s9 = !0, h(null);
        }, this.endShadows = function() {
            s9 = !1, c4();
        }, this.setState = function(e, a, o) {
            const u = e.clippingPlanes, d = e.clipIntersection, p = e.clipShadows, m = t50.get(e);
            if (!r17 || null === u || 0 === u.length || s9 && !p) s9 ? h(null) : c4();
            else {
                const t = s9 ? 0 : n18, e = 4 * t;
                let r = m.clippingState || null;
                l.value = r, r = h(u, a, e, o);
                for(let t51 = 0; t51 !== e; ++t51)r[t51] = i24[t51];
                m.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t;
            }
        };
    }
    function En(t52) {
        let e39 = new WeakMap;
        function i27(t, e) {
            return e === a1 ? t.mapping = r1 : e === o1 && (t.mapping = s1), t;
        }
        function n(t) {
            const i = t.target;
            i.removeEventListener("dispose", n);
            const r = e39.get(i);
            void 0 !== r && (e39.delete(i), r.dispose());
        }
        return {
            get: function(r) {
                if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
                    const s = r.mapping;
                    if (s === a1 || s === o1) {
                        if (e39.has(r)) return i27(e39.get(r).texture, r.mapping);
                        {
                            const s = r.image;
                            if (s && s.height > 0) {
                                const a = new ln(s.height / 2);
                                return a.fromEquirectangularTexture(t52, r), e39.set(r, a), r.addEventListener("dispose", n), i27(a.texture, r.mapping);
                            }
                            return null;
                        }
                    }
                }
                return r;
            },
            dispose: function() {
                e39 = new WeakMap;
            }
        };
    }
    Mn.physical = {
        uniforms: $i([
            Mn.standard.uniforms,
            {
                clearcoat: {
                    value: 0
                },
                clearcoatMap: {
                    value: null
                },
                clearcoatRoughness: {
                    value: 0
                },
                clearcoatRoughnessMap: {
                    value: null
                },
                clearcoatNormalScale: {
                    value: new Et(1, 1)
                },
                clearcoatNormalMap: {
                    value: null
                },
                iridescence: {
                    value: 0
                },
                iridescenceMap: {
                    value: null
                },
                iridescenceIOR: {
                    value: 1.3
                },
                iridescenceThicknessMinimum: {
                    value: 100
                },
                iridescenceThicknessMaximum: {
                    value: 400
                },
                iridescenceThicknessMap: {
                    value: null
                },
                sheen: {
                    value: 0
                },
                sheenColor: {
                    value: new Ht(0)
                },
                sheenColorMap: {
                    value: null
                },
                sheenRoughness: {
                    value: 1
                },
                sheenRoughnessMap: {
                    value: null
                },
                transmission: {
                    value: 0
                },
                transmissionMap: {
                    value: null
                },
                transmissionSamplerSize: {
                    value: new Et
                },
                transmissionSamplerMap: {
                    value: null
                },
                thickness: {
                    value: 0
                },
                thicknessMap: {
                    value: null
                },
                attenuationDistance: {
                    value: 0
                },
                attenuationColor: {
                    value: new Ht(0)
                },
                specularIntensity: {
                    value: 1
                },
                specularIntensityMap: {
                    value: null
                },
                specularColor: {
                    value: new Ht(1, 1, 1)
                },
                specularColorMap: {
                    value: null
                }
            }
        ]),
        vertexShader: yn.meshphysical_vert,
        fragmentShader: yn.meshphysical_frag
    };
    class Cn extends nn {
        constructor(t = -1, e = 1, i = 1, n = -1, r = .1, s = 2e3){
            super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = n, this.near = r, this.far = s, this.updateProjectionMatrix();
        }
        copy(t, e) {
            return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this;
        }
        setViewOffset(t, e, i, n, r, s) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, n = (this.top + this.bottom) / 2;
            let r = i - t, s = i + t, a = n + e, o = n - e;
            if (null !== this.view && this.view.enabled) {
                const t = (this.right - this.left) / this.view.fullWidth / this.zoom, e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                r += t * this.view.offsetX, s = r + t * this.view.width, a -= e * this.view.offsetY, o = a - e * this.view.height;
            }
            this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e;
        }
    }
    const Ln = [
        .125,
        .215,
        .35,
        .446,
        .526,
        .582
    ], Rn = 20, Pn = new Cn, In = new Ht;
    let Dn = null;
    const Nn = (1 + Math.sqrt(5)) / 2, zn = 1 / Nn, On = [
        new ee(1, 1, 1),
        new ee(-1, 1, 1),
        new ee(1, 1, -1),
        new ee(-1, 1, -1),
        new ee(0, Nn, zn),
        new ee(0, Nn, -zn),
        new ee(zn, 0, Nn),
        new ee(-zn, 0, Nn),
        new ee(Nn, zn, 0),
        new ee(-Nn, zn, 0)
    ];
    class Fn {
        constructor(t){
            this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
        }
        fromScene(t, e = 0, i = .1, n = 100) {
            Dn = this._renderer.getRenderTarget(), this._setSize(256);
            const r = this._allocateTargets();
            return r.depthBuffer = !0, this._sceneToCubeUV(t, i, n, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
        }
        fromEquirectangular(t, e = null) {
            return this._fromTexture(t, e);
        }
        fromCubemap(t, e = null) {
            return this._fromTexture(t, e);
        }
        compileCubemapShader() {
            null === this._cubemapMaterial && (this._cubemapMaterial = Gn(), this._compileMaterial(this._cubemapMaterial));
        }
        compileEquirectangularShader() {
            null === this._equirectMaterial && (this._equirectMaterial = kn(), this._compileMaterial(this._equirectMaterial));
        }
        dispose() {
            this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose();
        }
        _setSize(t) {
            this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
        }
        _dispose() {
            null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
            for(let t = 0; t < this._lodPlanes.length; t++)this._lodPlanes[t].dispose();
        }
        _cleanup(t) {
            this._renderer.setRenderTarget(Dn), t.scissorTest = !1, Un(t, 0, 0, t.width, t.height);
        }
        _fromTexture(t, e) {
            t.mapping === r1 || t.mapping === s1 ? this._setSize(0 === t.image.length ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Dn = this._renderer.getRenderTarget();
            const i = e || this._allocateTargets();
            return this._textureToCubeUV(t, i), this._applyPMREM(i), this._cleanup(i), i;
        }
        _allocateTargets() {
            const t53 = 3 * Math.max(this._cubeSize, 112), e40 = 4 * this._cubeSize, i28 = {
                magFilter: f1,
                minFilter: f1,
                generateMipmaps: !1,
                type: b1,
                format: S1,
                encoding: at,
                depthBuffer: !1
            }, n20 = Bn(t53, e40, i28);
            if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t53) {
                null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = Bn(t53, e40, i28);
                const { _lodMax: n19  } = this;
                ({ sizeLods: this._sizeLods , lodPlanes: this._lodPlanes , sigmas: this._sigmas  } = function(t) {
                    const e = [], i = [], n = [];
                    let r = t;
                    const s = t - 4 + 1 + Ln.length;
                    for(let a = 0; a < s; a++){
                        const s = Math.pow(2, r);
                        i.push(s);
                        let o = 1 / s;
                        a > t - 4 ? o = Ln[a - t + 4 - 1] : 0 === a && (o = 0), n.push(o);
                        const l = 1 / (s - 2), c = -l, h = 1 + l, u = [
                            c,
                            c,
                            h,
                            c,
                            h,
                            h,
                            c,
                            c,
                            h,
                            h,
                            c,
                            h
                        ], d = 6, p = 6, m = 3, f = 2, g = 1, v = new Float32Array(m * p * d), x = new Float32Array(f * p * d), y = new Float32Array(g * p * d);
                        for(let t54 = 0; t54 < d; t54++){
                            const e = t54 % 3 * 2 / 3 - 1, i = t54 > 2 ? 0 : -1, n = [
                                e,
                                i,
                                0,
                                e + 2 / 3,
                                i,
                                0,
                                e + 2 / 3,
                                i + 1,
                                0,
                                e,
                                i,
                                0,
                                e + 2 / 3,
                                i + 1,
                                0,
                                e,
                                i + 1,
                                0
                            ];
                            v.set(n, m * p * t54), x.set(u, f * p * t54);
                            const r = [
                                t54,
                                t54,
                                t54,
                                t54,
                                t54,
                                t54
                            ];
                            y.set(r, g * p * t54);
                        }
                        const _ = new Pi;
                        _.setAttribute("position", new _i(v, m)), _.setAttribute("uv", new _i(x, f)), _.setAttribute("faceIndex", new _i(y, g)), e.push(_), r > 4 && r--;
                    }
                    return {
                        lodPlanes: e,
                        sizeLods: i,
                        sigmas: n
                    };
                }(n19)), this._blurMaterial = function(t, e, i) {
                    const n = new Float32Array(Rn), r = new ee(0, 1, 0);
                    return new en({
                        name: "SphericalGaussianBlur",
                        defines: {
                            n: Rn,
                            CUBEUV_TEXEL_WIDTH: 1 / e,
                            CUBEUV_TEXEL_HEIGHT: 1 / i,
                            CUBEUV_MAX_MIP: `${t}.0`
                        },
                        uniforms: {
                            envMap: {
                                value: null
                            },
                            samples: {
                                value: 1
                            },
                            weights: {
                                value: n
                            },
                            latitudinal: {
                                value: !1
                            },
                            dTheta: {
                                value: 0
                            },
                            mipInt: {
                                value: 0
                            },
                            poleAxis: {
                                value: r
                            }
                        },
                        vertexShader: Vn(),
                        fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		",
                        blending: 0,
                        depthTest: !1,
                        depthWrite: !1
                    });
                }(n19, t53, e40);
            }
            return n20;
        }
        _compileMaterial(t) {
            const e = new Yi(this._lodPlanes[0], t);
            this._renderer.compile(e, Pn);
        }
        _sceneToCubeUV(t, e, i, n) {
            const r = new rn(90, 1, e, i), s = [
                1,
                -1,
                1,
                1,
                1,
                1
            ], a = [
                1,
                1,
                1,
                -1,
                -1,
                -1
            ], o = this._renderer, l = o.autoClear, c = o.toneMapping;
            o.getClearColor(In), o.toneMapping = 0, o.autoClear = !1;
            const h = new vi({
                name: "PMREM.Background",
                side: 1,
                depthWrite: !1,
                depthTest: !1
            }), u = new Yi(new Ki, h);
            let d = !1;
            const p = t.background;
            p ? p.isColor && (h.color.copy(p), t.background = null, d = !0) : (h.color.copy(In), d = !0);
            for(let e41 = 0; e41 < 6; e41++){
                const i = e41 % 3;
                0 === i ? (r.up.set(0, s[e41], 0), r.lookAt(a[e41], 0, 0)) : 1 === i ? (r.up.set(0, 0, s[e41]), r.lookAt(0, a[e41], 0)) : (r.up.set(0, s[e41], 0), r.lookAt(0, 0, a[e41]));
                const l = this._cubeSize;
                Un(n, i * l, e41 > 2 ? l : 0, l, l), o.setRenderTarget(n), d && o.render(u, r), o.render(t, r);
            }
            u.geometry.dispose(), u.material.dispose(), o.toneMapping = c, o.autoClear = l, t.background = p;
        }
        _textureToCubeUV(t, e) {
            const i = this._renderer, n = t.mapping === r1 || t.mapping === s1;
            n ? (null === this._cubemapMaterial && (this._cubemapMaterial = Gn()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === t.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = kn());
            const a = n ? this._cubemapMaterial : this._equirectMaterial, o = new Yi(this._lodPlanes[0], a);
            a.uniforms.envMap.value = t;
            const l = this._cubeSize;
            Un(e, 0, 0, 3 * l, 2 * l), i.setRenderTarget(e), i.render(o, Pn);
        }
        _applyPMREM(t) {
            const e = this._renderer, i = e.autoClear;
            e.autoClear = !1;
            for(let e42 = 1; e42 < this._lodPlanes.length; e42++){
                const i = Math.sqrt(this._sigmas[e42] * this._sigmas[e42] - this._sigmas[e42 - 1] * this._sigmas[e42 - 1]), n = On[(e42 - 1) % On.length];
                this._blur(t, e42 - 1, e42, i, n);
            }
            e.autoClear = i;
        }
        _blur(t, e, i, n, r) {
            const s = this._pingPongRenderTarget;
            this._halfBlur(t, s, e, i, n, "latitudinal", r), this._halfBlur(s, t, i, i, n, "longitudinal", r);
        }
        _halfBlur(t, e, i, n, r, s, a) {
            const o = this._renderer, l = this._blurMaterial;
            "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
            const c = new Yi(this._lodPlanes[n], l), h = l.uniforms, u = this._sizeLods[i] - 1, d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39, p = r / d, m = isFinite(r) ? 1 + Math.floor(3 * p) : Rn;
            m > Rn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
            const f = [];
            let g = 0;
            for(let t55 = 0; t55 < Rn; ++t55){
                const e = t55 / p, i = Math.exp(-e * e / 2);
                f.push(i), 0 === t55 ? g += i : t55 < m && (g += 2 * i);
            }
            for(let t56 = 0; t56 < f.length; t56++)f[t56] = f[t56] / g;
            h.envMap.value = t.texture, h.samples.value = m, h.weights.value = f, h.latitudinal.value = "latitudinal" === s, a && (h.poleAxis.value = a);
            const { _lodMax: v  } = this;
            h.dTheta.value = d, h.mipInt.value = v - i;
            const x = this._sizeLods[n];
            Un(e, 3 * x * (n > v - 4 ? n - v + 4 : 0), 4 * (this._cubeSize - x), 3 * x, 2 * x), o.setRenderTarget(e), o.render(c, Pn);
        }
    }
    function Bn(t, e, i) {
        const n = new Kt(t, e, i);
        return n.texture.mapping = l1, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
    }
    function Un(t, e, i, n, r) {
        t.viewport.set(e, i, n, r), t.scissor.set(e, i, n, r);
    }
    function kn() {
        return new en({
            name: "EquirectangularToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                }
            },
            vertexShader: Vn(),
            fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function Gn() {
        return new en({
            name: "CubemapToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                }
            },
            vertexShader: Vn(),
            fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function Vn() {
        return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
    }
    function Hn(t57) {
        let e43 = new WeakMap, i29 = null;
        function n21(t) {
            const i = t.target;
            i.removeEventListener("dispose", n21);
            const r = e43.get(i);
            void 0 !== r && (e43.delete(i), r.dispose());
        }
        return {
            get: function(l) {
                if (l && l.isTexture) {
                    const c = l.mapping, h = c === a1 || c === o1, u = c === r1 || c === s1;
                    if (h || u) {
                        if (l.isRenderTargetTexture && !0 === l.needsPMREMUpdate) {
                            l.needsPMREMUpdate = !1;
                            let n = e43.get(l);
                            return null === i29 && (i29 = new Fn(t57)), n = h ? i29.fromEquirectangular(l, n) : i29.fromCubemap(l, n), e43.set(l, n), n.texture;
                        }
                        if (e43.has(l)) return e43.get(l).texture;
                        {
                            const r = l.image;
                            if (h && r && r.height > 0 || u && r && function(t) {
                                let e = 0;
                                const i = 6;
                                for(let n = 0; n < i; n++)void 0 !== t[n] && e++;
                                return e === i;
                            }(r)) {
                                null === i29 && (i29 = new Fn(t57));
                                const r = h ? i29.fromEquirectangular(l) : i29.fromCubemap(l);
                                return e43.set(l, r), l.addEventListener("dispose", n21), r.texture;
                            }
                            return null;
                        }
                    }
                }
                return l;
            },
            dispose: function() {
                e43 = new WeakMap, null !== i29 && (i29.dispose(), i29 = null);
            }
        };
    }
    function Wn(t58) {
        const e44 = {};
        function i30(i) {
            if (void 0 !== e44[i]) return e44[i];
            let n;
            switch(i){
                case "WEBGL_depth_texture":
                    n = t58.getExtension("WEBGL_depth_texture") || t58.getExtension("MOZ_WEBGL_depth_texture") || t58.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    n = t58.getExtension("EXT_texture_filter_anisotropic") || t58.getExtension("MOZ_EXT_texture_filter_anisotropic") || t58.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    n = t58.getExtension("WEBGL_compressed_texture_s3tc") || t58.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t58.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    n = t58.getExtension("WEBGL_compressed_texture_pvrtc") || t58.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    n = t58.getExtension(i);
            }
            return e44[i] = n, n;
        }
        return {
            has: function(t) {
                return null !== i30(t);
            },
            init: function(t) {
                t.isWebGL2 ? i30("EXT_color_buffer_float") : (i30("WEBGL_depth_texture"), i30("OES_texture_float"), i30("OES_texture_half_float"), i30("OES_texture_half_float_linear"), i30("OES_standard_derivatives"), i30("OES_element_index_uint"), i30("OES_vertex_array_object"), i30("ANGLE_instanced_arrays")), i30("OES_texture_float_linear"), i30("EXT_color_buffer_half_float"), i30("WEBGL_multisampled_render_to_texture");
            },
            get: function(t) {
                const e = i30(t);
                return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e;
            }
        };
    }
    function jn(t60, e45, i31, n22) {
        const r18 = {}, s10 = new WeakMap;
        function a7(t) {
            const o = t.target;
            null !== o.index && e45.remove(o.index);
            for(const t59 in o.attributes)e45.remove(o.attributes[t59]);
            o.removeEventListener("dispose", a7), delete r18[o.id];
            const l = s10.get(o);
            l && (e45.remove(l), s10.delete(o)), n22.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, i31.memory.geometries--;
        }
        function o6(t) {
            const i = [], n = t.index, r = t.attributes.position;
            let a = 0;
            if (null !== n) {
                const t = n.array;
                a = n.version;
                for(let e = 0, n23 = t.length; e < n23; e += 3){
                    const n = t[e + 0], r = t[e + 1], s = t[e + 2];
                    i.push(n, r, r, s, s, n);
                }
            } else {
                const t = r.array;
                a = r.version;
                for(let e = 0, n = t.length / 3 - 1; e < n; e += 3){
                    const t = e + 0, n = e + 1, r = e + 2;
                    i.push(t, n, n, r, r, t);
                }
            }
            const o = new (Lt1(i) ? bi : Mi)(i, 1);
            o.version = a;
            const l = s10.get(t);
            l && e45.remove(l), s10.set(t, o);
        }
        return {
            get: function(t, e) {
                return !0 === r18[e.id] || (e.addEventListener("dispose", a7), r18[e.id] = !0, i31.memory.geometries++), e;
            },
            update: function(t) {
                const i = t.attributes;
                for(const t61 in i)e45.update(i[t61], 34962);
                const n = t.morphAttributes;
                for(const t62 in n){
                    const i = n[t62];
                    for(let t = 0, n24 = i.length; t < n24; t++)e45.update(i[t], 34962);
                }
            },
            getWireframeAttribute: function(t) {
                const e = s10.get(t);
                if (e) {
                    const i = t.index;
                    null !== i && e.version < i.version && o6(t);
                } else o6(t);
                return s10.get(t);
            }
        };
    }
    function qn(t63, e46, i, n25) {
        const r = n25.isWebGL2;
        let s, a, o;
        this.setMode = function(t) {
            s = t;
        }, this.setIndex = function(t) {
            a = t.type, o = t.bytesPerElement;
        }, this.render = function(e, n) {
            t63.drawElements(s, n, a, e * o), i.update(n, s, 1);
        }, this.renderInstances = function(n, l, c) {
            if (0 === c) return;
            let h, u;
            if (r) h = t63, u = "drawElementsInstanced";
            else if (h = e46.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            h[u](s, l, a, n * o, c), i.update(l, s, c);
        };
    }
    function Xn(t64) {
        const e = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        return {
            memory: {
                geometries: 0,
                textures: 0
            },
            render: e,
            programs: null,
            autoReset: !0,
            reset: function() {
                e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
            },
            update: function(t, i, n) {
                switch(e.calls++, i){
                    case 4:
                        e.triangles += n * (t / 3);
                        break;
                    case 1:
                        e.lines += n * (t / 2);
                        break;
                    case 3:
                        e.lines += n * (t - 1);
                        break;
                    case 2:
                        e.lines += n * t;
                        break;
                    case 0:
                        e.points += n * t;
                        break;
                    default:
                        console.error("THREE.WebGLInfo: Unknown draw mode:", i);
                }
            }
        };
    }
    function Jn(t, e) {
        return t[0] - e[0];
    }
    function Yn(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1]);
    }
    function Zn(t, e) {
        let i = 1;
        const n = e.isInterleavedBufferAttribute ? e.data.array : e.array;
        n instanceof Int8Array ? i = 127 : n instanceof Int16Array ? i = 32767 : n instanceof Int32Array ? i = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", n), t.divideScalar(i);
    }
    function Kn(t, e, i) {
        const n = {}, r = new Float32Array(8), s = new WeakMap, a = new Zt, o = [];
        for(let t65 = 0; t65 < 8; t65++)o[t65] = [
            t65,
            0
        ];
        return {
            update: function(l, c, h, u) {
                const d = l.morphTargetInfluences;
                if (!0 === e.isWebGL2) {
                    const p = c.morphAttributes.position || c.morphAttributes.normal || c.morphAttributes.color, m = void 0 !== p ? p.length : 0;
                    let f = s.get(c);
                    if (void 0 === f || f.count !== m) {
                        void 0 !== f && f.texture.dispose();
                        const x = void 0 !== c.morphAttributes.position, y = void 0 !== c.morphAttributes.normal, _ = void 0 !== c.morphAttributes.color, b = c.morphAttributes.position || [], w = c.morphAttributes.normal || [], S = c.morphAttributes.color || [];
                        let T = 0;
                        !0 === x && (T = 1), !0 === y && (T = 2), !0 === _ && (T = 3);
                        let A = c.attributes.position.count * T, E = 1;
                        A > e.maxTextureSize && (E = Math.ceil(A / e.maxTextureSize), A = e.maxTextureSize);
                        const C = new Float32Array(A * E * 4 * m), L = new Qt(C, A, E, m);
                        L.type = M1, L.needsUpdate = !0;
                        const R = 4 * T;
                        for(let I = 0; I < m; I++){
                            const D = b[I], N = w[I], z = S[I], O = A * E * 4 * I;
                            for(let F = 0; F < D.count; F++){
                                const B = F * R;
                                !0 === x && (a.fromBufferAttribute(D, F), !0 === D.normalized && Zn(a, D), C[O + B + 0] = a.x, C[O + B + 1] = a.y, C[O + B + 2] = a.z, C[O + B + 3] = 0), !0 === y && (a.fromBufferAttribute(N, F), !0 === N.normalized && Zn(a, N), C[O + B + 4] = a.x, C[O + B + 5] = a.y, C[O + B + 6] = a.z, C[O + B + 7] = 0), !0 === _ && (a.fromBufferAttribute(z, F), !0 === z.normalized && Zn(a, z), C[O + B + 8] = a.x, C[O + B + 9] = a.y, C[O + B + 10] = a.z, C[O + B + 11] = 4 === z.itemSize ? a.w : 1);
                            }
                        }
                        function P() {
                            L.dispose(), s.delete(c), c.removeEventListener("dispose", P);
                        }
                        f = {
                            count: m,
                            texture: L,
                            size: new Et(A, E)
                        }, s.set(c, f), c.addEventListener("dispose", P);
                    }
                    let g = 0;
                    for(let U = 0; U < d.length; U++)g += d[U];
                    const v = c.morphTargetsRelative ? 1 : 1 - g;
                    u.getUniforms().setValue(t, "morphTargetBaseInfluence", v), u.getUniforms().setValue(t, "morphTargetInfluences", d), u.getUniforms().setValue(t, "morphTargetsTexture", f.texture, i), u.getUniforms().setValue(t, "morphTargetsTextureSize", f.size);
                } else {
                    const k = void 0 === d ? 0 : d.length;
                    let G = n[c.id];
                    if (void 0 === G || G.length !== k) {
                        G = [];
                        for(let q = 0; q < k; q++)G[q] = [
                            q,
                            0
                        ];
                        n[c.id] = G;
                    }
                    for(let X = 0; X < k; X++){
                        const J = G[X];
                        J[0] = X, J[1] = d[X];
                    }
                    G.sort(Yn);
                    for(let Y = 0; Y < 8; Y++)Y < k && G[Y][1] ? (o[Y][0] = G[Y][0], o[Y][1] = G[Y][1]) : (o[Y][0] = Number.MAX_SAFE_INTEGER, o[Y][1] = 0);
                    o.sort(Jn);
                    const V = c.morphAttributes.position, H = c.morphAttributes.normal;
                    let W = 0;
                    for(let Z = 0; Z < 8; Z++){
                        const K = o[Z], Q = K[0], $ = K[1];
                        Q !== Number.MAX_SAFE_INTEGER && $ ? (V && c.getAttribute("morphTarget" + Z) !== V[Q] && c.setAttribute("morphTarget" + Z, V[Q]), H && c.getAttribute("morphNormal" + Z) !== H[Q] && c.setAttribute("morphNormal" + Z, H[Q]), r[Z] = $, W += $) : (V && !0 === c.hasAttribute("morphTarget" + Z) && c.deleteAttribute("morphTarget" + Z), H && !0 === c.hasAttribute("morphNormal" + Z) && c.deleteAttribute("morphNormal" + Z), r[Z] = 0);
                    }
                    const j = c.morphTargetsRelative ? 1 : 1 - W;
                    u.getUniforms().setValue(t, "morphTargetBaseInfluence", j), u.getUniforms().setValue(t, "morphTargetInfluences", r);
                }
            }
        };
    }
    function Qn(t66, e47, i, n) {
        let r = new WeakMap;
        function s(t) {
            const e = t.target;
            e.removeEventListener("dispose", s), i.remove(e.instanceMatrix), null !== e.instanceColor && i.remove(e.instanceColor);
        }
        return {
            update: function(t) {
                const a = n.render.frame, o = t.geometry, l = e47.get(t, o);
                return r.get(l) !== a && (e47.update(l), r.set(l, a)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s), i.update(t.instanceMatrix, 34962), null !== t.instanceColor && i.update(t.instanceColor, 34962)), l;
            },
            dispose: function() {
                r = new WeakMap;
            }
        };
    }
    const $n = new Yt, tr = new Qt, er = new $t, ir = new on, nr = [], rr = [], sr = new Float32Array(16), ar = new Float32Array(9), or = new Float32Array(4);
    function lr(t, e, i) {
        const n = t[0];
        if (n <= 0 || n > 0) return t;
        const r = e * i;
        let s = nr[r];
        if (void 0 === s && (s = new Float32Array(r), nr[r] = s), 0 !== e) {
            n.toArray(s, 0);
            for(let n26 = 1, r = 0; n26 !== e; ++n26)r += i, t[n26].toArray(s, r);
        }
        return s;
    }
    function cr(t, e) {
        if (t.length !== e.length) return !1;
        for(let i = 0, n = t.length; i < n; i++)if (t[i] !== e[i]) return !1;
        return !0;
    }
    function hr(t, e) {
        for(let i = 0, n = e.length; i < n; i++)t[i] = e[i];
    }
    function ur(t, e) {
        let i = rr[e];
        void 0 === i && (i = new Int32Array(e), rr[e] = i);
        for(let n = 0; n !== e; ++n)i[n] = t.allocateTextureUnit();
        return i;
    }
    function dr(t, e) {
        const i = this.cache;
        i[0] !== e && (t.uniform1f(this.addr, e), i[0] = e);
    }
    function pr(t, e) {
        const i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), i[0] = e.x, i[1] = e.y);
        else {
            if (cr(i, e)) return;
            t.uniform2fv(this.addr, e), hr(i, e);
        }
    }
    function mr(t, e) {
        const i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), i[0] = e.x, i[1] = e.y, i[2] = e.z);
        else if (void 0 !== e.r) i[0] === e.r && i[1] === e.g && i[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), i[0] = e.r, i[1] = e.g, i[2] = e.b);
        else {
            if (cr(i, e)) return;
            t.uniform3fv(this.addr, e), hr(i, e);
        }
    }
    function fr(t, e) {
        const i = this.cache;
        if (void 0 !== e.x) i[0] === e.x && i[1] === e.y && i[2] === e.z && i[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), i[0] = e.x, i[1] = e.y, i[2] = e.z, i[3] = e.w);
        else {
            if (cr(i, e)) return;
            t.uniform4fv(this.addr, e), hr(i, e);
        }
    }
    function gr(t, e) {
        const i = this.cache, n = e.elements;
        if (void 0 === n) {
            if (cr(i, e)) return;
            t.uniformMatrix2fv(this.addr, !1, e), hr(i, e);
        } else {
            if (cr(i, n)) return;
            or.set(n), t.uniformMatrix2fv(this.addr, !1, or), hr(i, n);
        }
    }
    function vr(t, e) {
        const i = this.cache, n = e.elements;
        if (void 0 === n) {
            if (cr(i, e)) return;
            t.uniformMatrix3fv(this.addr, !1, e), hr(i, e);
        } else {
            if (cr(i, n)) return;
            ar.set(n), t.uniformMatrix3fv(this.addr, !1, ar), hr(i, n);
        }
    }
    function xr(t, e) {
        const i = this.cache, n = e.elements;
        if (void 0 === n) {
            if (cr(i, e)) return;
            t.uniformMatrix4fv(this.addr, !1, e), hr(i, e);
        } else {
            if (cr(i, n)) return;
            sr.set(n), t.uniformMatrix4fv(this.addr, !1, sr), hr(i, n);
        }
    }
    function yr(t, e) {
        const i = this.cache;
        i[0] !== e && (t.uniform1i(this.addr, e), i[0] = e);
    }
    function _r(t, e) {
        const i = this.cache;
        cr(i, e) || (t.uniform2iv(this.addr, e), hr(i, e));
    }
    function Mr(t, e) {
        const i = this.cache;
        cr(i, e) || (t.uniform3iv(this.addr, e), hr(i, e));
    }
    function br(t, e) {
        const i = this.cache;
        cr(i, e) || (t.uniform4iv(this.addr, e), hr(i, e));
    }
    function wr(t, e) {
        const i = this.cache;
        i[0] !== e && (t.uniform1ui(this.addr, e), i[0] = e);
    }
    function Sr(t, e) {
        const i = this.cache;
        cr(i, e) || (t.uniform2uiv(this.addr, e), hr(i, e));
    }
    function Tr(t, e) {
        const i = this.cache;
        cr(i, e) || (t.uniform3uiv(this.addr, e), hr(i, e));
    }
    function Ar(t, e) {
        const i = this.cache;
        cr(i, e) || (t.uniform4uiv(this.addr, e), hr(i, e));
    }
    function Er(t, e, i) {
        const n = this.cache, r = i.allocateTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture2D(e || $n, r);
    }
    function Cr(t, e, i) {
        const n = this.cache, r = i.allocateTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture3D(e || er, r);
    }
    function Lr(t, e, i) {
        const n = this.cache, r = i.allocateTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTextureCube(e || ir, r);
    }
    function Rr(t, e, i) {
        const n = this.cache, r = i.allocateTextureUnit();
        n[0] !== r && (t.uniform1i(this.addr, r), n[0] = r), i.setTexture2DArray(e || tr, r);
    }
    function Pr(t, e) {
        t.uniform1fv(this.addr, e);
    }
    function Ir(t, e) {
        const i = lr(e, this.size, 2);
        t.uniform2fv(this.addr, i);
    }
    function Dr(t, e) {
        const i = lr(e, this.size, 3);
        t.uniform3fv(this.addr, i);
    }
    function Nr(t, e) {
        const i = lr(e, this.size, 4);
        t.uniform4fv(this.addr, i);
    }
    function zr(t, e) {
        const i = lr(e, this.size, 4);
        t.uniformMatrix2fv(this.addr, !1, i);
    }
    function Or(t, e) {
        const i = lr(e, this.size, 9);
        t.uniformMatrix3fv(this.addr, !1, i);
    }
    function Fr(t, e) {
        const i = lr(e, this.size, 16);
        t.uniformMatrix4fv(this.addr, !1, i);
    }
    function Br(t, e) {
        t.uniform1iv(this.addr, e);
    }
    function Ur(t, e) {
        t.uniform2iv(this.addr, e);
    }
    function kr(t, e) {
        t.uniform3iv(this.addr, e);
    }
    function Gr(t, e) {
        t.uniform4iv(this.addr, e);
    }
    function Vr(t, e) {
        t.uniform1uiv(this.addr, e);
    }
    function Hr(t, e) {
        t.uniform2uiv(this.addr, e);
    }
    function Wr(t, e) {
        t.uniform3uiv(this.addr, e);
    }
    function jr(t, e) {
        t.uniform4uiv(this.addr, e);
    }
    function qr(t, e, i) {
        const n = e.length, r = ur(i, n);
        t.uniform1iv(this.addr, r);
        for(let t67 = 0; t67 !== n; ++t67)i.setTexture2D(e[t67] || $n, r[t67]);
    }
    function Xr(t, e, i) {
        const n = e.length, r = ur(i, n);
        t.uniform1iv(this.addr, r);
        for(let t68 = 0; t68 !== n; ++t68)i.setTexture3D(e[t68] || er, r[t68]);
    }
    function Jr(t, e, i) {
        const n = e.length, r = ur(i, n);
        t.uniform1iv(this.addr, r);
        for(let t69 = 0; t69 !== n; ++t69)i.setTextureCube(e[t69] || ir, r[t69]);
    }
    function Yr(t, e, i) {
        const n = e.length, r = ur(i, n);
        t.uniform1iv(this.addr, r);
        for(let t70 = 0; t70 !== n; ++t70)i.setTexture2DArray(e[t70] || tr, r[t70]);
    }
    class Zr {
        constructor(t71, e, i){
            this.id = t71, this.addr = i, this.cache = [], this.setValue = function(t) {
                switch(t){
                    case 5126:
                        return dr;
                    case 35664:
                        return pr;
                    case 35665:
                        return mr;
                    case 35666:
                        return fr;
                    case 35674:
                        return gr;
                    case 35675:
                        return vr;
                    case 35676:
                        return xr;
                    case 5124:
                    case 35670:
                        return yr;
                    case 35667:
                    case 35671:
                        return _r;
                    case 35668:
                    case 35672:
                        return Mr;
                    case 35669:
                    case 35673:
                        return br;
                    case 5125:
                        return wr;
                    case 36294:
                        return Sr;
                    case 36295:
                        return Tr;
                    case 36296:
                        return Ar;
                    case 35678:
                    case 36198:
                    case 36298:
                    case 36306:
                    case 35682:
                        return Er;
                    case 35679:
                    case 36299:
                    case 36307:
                        return Cr;
                    case 35680:
                    case 36300:
                    case 36308:
                    case 36293:
                        return Lr;
                    case 36289:
                    case 36303:
                    case 36311:
                    case 36292:
                        return Rr;
                }
            }(e.type);
        }
    }
    class Kr {
        constructor(t72, e, i){
            this.id = t72, this.addr = i, this.cache = [], this.size = e.size, this.setValue = function(t) {
                switch(t){
                    case 5126:
                        return Pr;
                    case 35664:
                        return Ir;
                    case 35665:
                        return Dr;
                    case 35666:
                        return Nr;
                    case 35674:
                        return zr;
                    case 35675:
                        return Or;
                    case 35676:
                        return Fr;
                    case 5124:
                    case 35670:
                        return Br;
                    case 35667:
                    case 35671:
                        return Ur;
                    case 35668:
                    case 35672:
                        return kr;
                    case 35669:
                    case 35673:
                        return Gr;
                    case 5125:
                        return Vr;
                    case 36294:
                        return Hr;
                    case 36295:
                        return Wr;
                    case 36296:
                        return jr;
                    case 35678:
                    case 36198:
                    case 36298:
                    case 36306:
                    case 35682:
                        return qr;
                    case 35679:
                    case 36299:
                    case 36307:
                        return Xr;
                    case 35680:
                    case 36300:
                    case 36308:
                    case 36293:
                        return Jr;
                    case 36289:
                    case 36303:
                    case 36311:
                    case 36292:
                        return Yr;
                }
            }(e.type);
        }
    }
    class Qr {
        constructor(t){
            this.id = t, this.seq = [], this.map = {};
        }
        setValue(t, e, i) {
            const n = this.seq;
            for(let r = 0, s = n.length; r !== s; ++r){
                const s = n[r];
                s.setValue(t, e[s.id], i);
            }
        }
    }
    const $r = /(\w+)(\])?(\[|\.)?/g;
    function ts(t, e) {
        t.seq.push(e), t.map[e.id] = e;
    }
    function es(t, e, i) {
        const n = t.name, r = n.length;
        for($r.lastIndex = 0;;){
            const s = $r.exec(n), a = $r.lastIndex;
            let o = s[1];
            const l = "]" === s[2], c = s[3];
            if (l && (o |= 0), void 0 === c || "[" === c && a + 2 === r) {
                ts(i, void 0 === c ? new Zr(o, t, e) : new Kr(o, t, e));
                break;
            }
            {
                let t = i.map[o];
                void 0 === t && (t = new Qr(o), ts(i, t)), i = t;
            }
        }
    }
    class is {
        constructor(t, e){
            this.seq = [], this.map = {};
            const i = t.getProgramParameter(e, 35718);
            for(let n = 0; n < i; ++n){
                const i = t.getActiveUniform(e, n);
                es(i, t.getUniformLocation(e, i.name), this);
            }
        }
        setValue(t, e, i, n) {
            const r = this.map[e];
            void 0 !== r && r.setValue(t, i, n);
        }
        setOptional(t, e, i) {
            const n = e[i];
            void 0 !== n && this.setValue(t, i, n);
        }
        static upload(t, e, i, n) {
            for(let r = 0, s = e.length; r !== s; ++r){
                const s = e[r], a = i[s.id];
                !1 !== a.needsUpdate && s.setValue(t, a.value, n);
            }
        }
        static seqWithValue(t, e) {
            const i = [];
            for(let n = 0, r = t.length; n !== r; ++n){
                const r = t[n];
                r.id in e && i.push(r);
            }
            return i;
        }
    }
    function ns(t, e, i) {
        const n = t.createShader(e);
        return t.shaderSource(n, i), t.compileShader(n), n;
    }
    let rs = 0;
    function ss(t74, e48, i32) {
        const n28 = t74.getShaderParameter(e48, 35713), r19 = t74.getShaderInfoLog(e48).trim();
        if (n28 && "" === r19) return "";
        const s11 = /ERROR: 0:(\d+)/.exec(r19);
        if (s11) {
            const n27 = parseInt(s11[1]);
            return i32.toUpperCase() + "\n\n" + r19 + "\n\n" + function(t, e) {
                const i = t.split("\n"), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, i.length);
                for(let t73 = r; t73 < s; t73++){
                    const r = t73 + 1;
                    n.push(`${r === e ? ">" : " "} ${r}: ${i[t73]}`);
                }
                return n.join("\n");
            }(t74.getShaderSource(e48), n27);
        }
        return r19;
    }
    function as(t75, e) {
        const i = function(t) {
            switch(t){
                case at:
                    return [
                        "Linear",
                        "( value )"
                    ];
                case ot1:
                    return [
                        "sRGB",
                        "( value )"
                    ];
                default:
                    return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), [
                        "Linear",
                        "( value )"
                    ];
            }
        }(e);
        return "vec4 " + t75 + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }";
    }
    function os(t, e) {
        let i;
        switch(e){
            case 1:
                i = "Linear";
                break;
            case 2:
                i = "Reinhard";
                break;
            case 3:
                i = "OptimizedCineon";
                break;
            case 4:
                i = "ACESFilmic";
                break;
            case 5:
                i = "Custom";
                break;
            default:
                console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), i = "Linear";
        }
        return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }";
    }
    function ls(t) {
        return "" !== t;
    }
    function cs(t, e) {
        return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
    }
    function hs(t, e) {
        return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
    }
    const us = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function ds(t) {
        return t.replace(us, ps);
    }
    function ps(t, e) {
        const i = yn[e];
        if (void 0 === i) throw new Error("Can not resolve #include <" + e + ">");
        return ds(i);
    }
    const ms = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, fs = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
    function gs(t) {
        return t.replace(fs, xs).replace(ms, vs);
    }
    function vs(t, e, i, n) {
        return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), xs(t, e, i, n);
    }
    function xs(t, e, i, n) {
        let r = "";
        for(let t76 = parseInt(e); t76 < parseInt(i); t76++)r += n.replace(/\[\s*i\s*\]/g, "[ " + t76 + " ]").replace(/UNROLLED_LOOP_INDEX/g, t76);
        return r;
    }
    function ys(t) {
        let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
        return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e;
    }
    function _s(t77, e49, i33, n29) {
        const a8 = t77.getContext(), o = i33.defines;
        let c = i33.vertexShader, h = i33.fragmentShader;
        const u = function(t) {
            let e = "SHADOWMAP_TYPE_BASIC";
            return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e;
        }(i33), d = function(t) {
            let e = "ENVMAP_TYPE_CUBE";
            if (t.envMap) switch(t.envMapMode){
                case r1:
                case s1:
                    e = "ENVMAP_TYPE_CUBE";
                    break;
                case l1:
                    e = "ENVMAP_TYPE_CUBE_UV";
            }
            return e;
        }(i33), p = function(t) {
            let e = "ENVMAP_MODE_REFLECTION";
            t.envMap && t.envMapMode === s1 && (e = "ENVMAP_MODE_REFRACTION");
            return e;
        }(i33), m = function(t) {
            let e = "ENVMAP_BLENDING_NONE";
            if (t.envMap) switch(t.combine){
                case 0:
                    e = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case 1:
                    e = "ENVMAP_BLENDING_MIX";
                    break;
                case 2:
                    e = "ENVMAP_BLENDING_ADD";
            }
            return e;
        }(i33), f = function(t) {
            const e = t.envMapCubeUVHeight;
            if (null === e) return null;
            const i = Math.log2(e) - 2, n = 1 / e;
            return {
                texelWidth: 1 / (3 * Math.max(Math.pow(2, i), 112)),
                texelHeight: n,
                maxMip: i
            };
        }(i33), g = i33.isWebGL2 ? "" : function(t) {
            return [
                t.extensionDerivatives || t.envMapCubeUVHeight || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "",
                (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
                t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
                (t.extensionShaderTextureLOD || t.envMap || t.transmission) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
            ].filter(ls).join("\n");
        }(i33), v = function(t) {
            const e = [];
            for(const i in t){
                const n = t[i];
                !1 !== n && e.push("#define " + i + " " + n);
            }
            return e.join("\n");
        }(o), x = a8.createProgram();
        let y, _, M = i33.glslVersion ? "#version " + i33.glslVersion + "\n" : "";
        i33.isRawShaderMaterial ? (y = [
            v
        ].filter(ls).join("\n"), y.length > 0 && (y += "\n"), _ = [
            g,
            v
        ].filter(ls).join("\n"), _.length > 0 && (_ += "\n")) : (y = [
            ys(i33),
            "#define SHADER_NAME " + i33.shaderName,
            v,
            i33.instancing ? "#define USE_INSTANCING" : "",
            i33.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
            i33.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
            i33.useFog && i33.fog ? "#define USE_FOG" : "",
            i33.useFog && i33.fogExp2 ? "#define FOG_EXP2" : "",
            i33.map ? "#define USE_MAP" : "",
            i33.envMap ? "#define USE_ENVMAP" : "",
            i33.envMap ? "#define " + p : "",
            i33.lightMap ? "#define USE_LIGHTMAP" : "",
            i33.aoMap ? "#define USE_AOMAP" : "",
            i33.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            i33.bumpMap ? "#define USE_BUMPMAP" : "",
            i33.normalMap ? "#define USE_NORMALMAP" : "",
            i33.normalMap && i33.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
            i33.normalMap && i33.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
            i33.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
            i33.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
            i33.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            i33.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
            i33.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
            i33.displacementMap && i33.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
            i33.specularMap ? "#define USE_SPECULARMAP" : "",
            i33.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
            i33.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
            i33.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            i33.metalnessMap ? "#define USE_METALNESSMAP" : "",
            i33.alphaMap ? "#define USE_ALPHAMAP" : "",
            i33.transmission ? "#define USE_TRANSMISSION" : "",
            i33.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
            i33.thicknessMap ? "#define USE_THICKNESSMAP" : "",
            i33.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
            i33.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
            i33.vertexTangents ? "#define USE_TANGENT" : "",
            i33.vertexColors ? "#define USE_COLOR" : "",
            i33.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
            i33.vertexUvs ? "#define USE_UV" : "",
            i33.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
            i33.flatShading ? "#define FLAT_SHADED" : "",
            i33.skinning ? "#define USE_SKINNING" : "",
            i33.morphTargets ? "#define USE_MORPHTARGETS" : "",
            i33.morphNormals && !1 === i33.flatShading ? "#define USE_MORPHNORMALS" : "",
            i33.morphColors && i33.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
            i33.morphTargetsCount > 0 && i33.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
            i33.morphTargetsCount > 0 && i33.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + i33.morphTextureStride : "",
            i33.morphTargetsCount > 0 && i33.isWebGL2 ? "#define MORPHTARGETS_COUNT " + i33.morphTargetsCount : "",
            i33.doubleSided ? "#define DOUBLE_SIDED" : "",
            i33.flipSided ? "#define FLIP_SIDED" : "",
            i33.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            i33.shadowMapEnabled ? "#define " + u : "",
            i33.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
            i33.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            i33.logarithmicDepthBuffer && i33.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
            "uniform mat4 modelMatrix;",
            "uniform mat4 modelViewMatrix;",
            "uniform mat4 projectionMatrix;",
            "uniform mat4 viewMatrix;",
            "uniform mat3 normalMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            "#ifdef USE_INSTANCING",
            "	attribute mat4 instanceMatrix;",
            "#endif",
            "#ifdef USE_INSTANCING_COLOR",
            "	attribute vec3 instanceColor;",
            "#endif",
            "attribute vec3 position;",
            "attribute vec3 normal;",
            "attribute vec2 uv;",
            "#ifdef USE_TANGENT",
            "	attribute vec4 tangent;",
            "#endif",
            "#if defined( USE_COLOR_ALPHA )",
            "	attribute vec4 color;",
            "#elif defined( USE_COLOR )",
            "	attribute vec3 color;",
            "#endif",
            "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
            "	attribute vec3 morphTarget0;",
            "	attribute vec3 morphTarget1;",
            "	attribute vec3 morphTarget2;",
            "	attribute vec3 morphTarget3;",
            "	#ifdef USE_MORPHNORMALS",
            "		attribute vec3 morphNormal0;",
            "		attribute vec3 morphNormal1;",
            "		attribute vec3 morphNormal2;",
            "		attribute vec3 morphNormal3;",
            "	#else",
            "		attribute vec3 morphTarget4;",
            "		attribute vec3 morphTarget5;",
            "		attribute vec3 morphTarget6;",
            "		attribute vec3 morphTarget7;",
            "	#endif",
            "#endif",
            "#ifdef USE_SKINNING",
            "	attribute vec4 skinIndex;",
            "	attribute vec4 skinWeight;",
            "#endif",
            "\n"
        ].filter(ls).join("\n"), _ = [
            g,
            ys(i33),
            "#define SHADER_NAME " + i33.shaderName,
            v,
            i33.useFog && i33.fog ? "#define USE_FOG" : "",
            i33.useFog && i33.fogExp2 ? "#define FOG_EXP2" : "",
            i33.map ? "#define USE_MAP" : "",
            i33.matcap ? "#define USE_MATCAP" : "",
            i33.envMap ? "#define USE_ENVMAP" : "",
            i33.envMap ? "#define " + d : "",
            i33.envMap ? "#define " + p : "",
            i33.envMap ? "#define " + m : "",
            f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
            f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
            f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
            i33.lightMap ? "#define USE_LIGHTMAP" : "",
            i33.aoMap ? "#define USE_AOMAP" : "",
            i33.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            i33.bumpMap ? "#define USE_BUMPMAP" : "",
            i33.normalMap ? "#define USE_NORMALMAP" : "",
            i33.normalMap && i33.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
            i33.normalMap && i33.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
            i33.clearcoat ? "#define USE_CLEARCOAT" : "",
            i33.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
            i33.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
            i33.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            i33.iridescence ? "#define USE_IRIDESCENCE" : "",
            i33.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
            i33.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
            i33.specularMap ? "#define USE_SPECULARMAP" : "",
            i33.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
            i33.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
            i33.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            i33.metalnessMap ? "#define USE_METALNESSMAP" : "",
            i33.alphaMap ? "#define USE_ALPHAMAP" : "",
            i33.alphaTest ? "#define USE_ALPHATEST" : "",
            i33.sheen ? "#define USE_SHEEN" : "",
            i33.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
            i33.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
            i33.transmission ? "#define USE_TRANSMISSION" : "",
            i33.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
            i33.thicknessMap ? "#define USE_THICKNESSMAP" : "",
            i33.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
            i33.vertexTangents ? "#define USE_TANGENT" : "",
            i33.vertexColors || i33.instancingColor ? "#define USE_COLOR" : "",
            i33.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
            i33.vertexUvs ? "#define USE_UV" : "",
            i33.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
            i33.gradientMap ? "#define USE_GRADIENTMAP" : "",
            i33.flatShading ? "#define FLAT_SHADED" : "",
            i33.doubleSided ? "#define DOUBLE_SIDED" : "",
            i33.flipSided ? "#define FLIP_SIDED" : "",
            i33.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            i33.shadowMapEnabled ? "#define " + u : "",
            i33.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
            i33.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
            i33.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            i33.logarithmicDepthBuffer && i33.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
            "uniform mat4 viewMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            0 !== i33.toneMapping ? "#define TONE_MAPPING" : "",
            0 !== i33.toneMapping ? yn.tonemapping_pars_fragment : "",
            0 !== i33.toneMapping ? os("toneMapping", i33.toneMapping) : "",
            i33.dithering ? "#define DITHERING" : "",
            i33.opaque ? "#define OPAQUE" : "",
            yn.encodings_pars_fragment,
            as("linearToOutputTexel", i33.outputEncoding),
            i33.useDepthPacking ? "#define DEPTH_PACKING " + i33.depthPacking : "",
            "\n"
        ].filter(ls).join("\n")), c = ds(c), c = cs(c, i33), c = hs(c, i33), h = ds(h), h = cs(h, i33), h = hs(h, i33), c = gs(c), h = gs(h), i33.isWebGL2 && !0 !== i33.isRawShaderMaterial && (M = "#version 300 es\n", y = [
            "precision mediump sampler2DArray;",
            "#define attribute in",
            "#define varying out",
            "#define texture2D texture"
        ].join("\n") + "\n" + y, _ = [
            "#define varying in",
            i33.glslVersion === dt1 ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
            i33.glslVersion === dt1 ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth",
            "#define texture2D texture",
            "#define textureCube texture",
            "#define texture2DProj textureProj",
            "#define texture2DLodEXT textureLod",
            "#define texture2DProjLodEXT textureProjLod",
            "#define textureCubeLodEXT textureLod",
            "#define texture2DGradEXT textureGrad",
            "#define texture2DProjGradEXT textureProjGrad",
            "#define textureCubeGradEXT textureGrad"
        ].join("\n") + "\n" + _);
        const b = M + _ + h, w = ns(a8, 35633, M + y + c), S = ns(a8, 35632, b);
        if (a8.attachShader(x, w), a8.attachShader(x, S), void 0 !== i33.index0AttributeName ? a8.bindAttribLocation(x, 0, i33.index0AttributeName) : !0 === i33.morphTargets && a8.bindAttribLocation(x, 0, "position"), a8.linkProgram(x), t77.debug.checkShaderErrors) {
            const t = a8.getProgramInfoLog(x).trim(), e = a8.getShaderInfoLog(w).trim(), i = a8.getShaderInfoLog(S).trim();
            let n = !0, r = !0;
            if (!1 === a8.getProgramParameter(x, 35714)) {
                n = !1;
                const e = ss(a8, w, "vertex"), i = ss(a8, S, "fragment");
                console.error("THREE.WebGLProgram: Shader Error " + a8.getError() + " - VALIDATE_STATUS " + a8.getProgramParameter(x, 35715) + "\n\nProgram Info Log: " + t + "\n" + e + "\n" + i);
            } else "" !== t ? console.warn("THREE.WebGLProgram: Program Info Log:", t) : "" !== e && "" !== i || (r = !1);
            r && (this.diagnostics = {
                runnable: n,
                programLog: t,
                vertexShader: {
                    log: e,
                    prefix: y
                },
                fragmentShader: {
                    log: i,
                    prefix: _
                }
            });
        }
        let T, A;
        return a8.deleteShader(w), a8.deleteShader(S), this.getUniforms = function() {
            return void 0 === T && (T = new is(a8, x)), T;
        }, this.getAttributes = function() {
            return void 0 === A && (A = function(t, e) {
                const i = {}, n = t.getProgramParameter(e, 35721);
                for(let r = 0; r < n; r++){
                    const n = t.getActiveAttrib(e, r), s = n.name;
                    let a = 1;
                    35674 === n.type && (a = 2), 35675 === n.type && (a = 3), 35676 === n.type && (a = 4), i[s] = {
                        type: n.type,
                        location: t.getAttribLocation(e, s),
                        locationSize: a
                    };
                }
                return i;
            }(a8, x)), A;
        }, this.destroy = function() {
            n29.releaseStatesOfProgram(this), a8.deleteProgram(x), this.program = void 0;
        }, this.name = i33.shaderName, this.id = rs++, this.cacheKey = e49, this.usedTimes = 1, this.program = x, this.vertexShader = w, this.fragmentShader = S, this;
    }
    let Ms = 0;
    class bs {
        constructor(){
            this.shaderCache = new Map, this.materialCache = new Map;
        }
        update(t) {
            const e = t.vertexShader, i = t.fragmentShader, n = this._getShaderStage(e), r = this._getShaderStage(i), s = this._getShaderCacheForMaterial(t);
            return !1 === s.has(n) && (s.add(n), n.usedTimes++), !1 === s.has(r) && (s.add(r), r.usedTimes++), this;
        }
        remove(t) {
            const e = this.materialCache.get(t);
            for (const t78 of e)t78.usedTimes--, 0 === t78.usedTimes && this.shaderCache.delete(t78.code);
            return this.materialCache.delete(t), this;
        }
        getVertexShaderID(t) {
            return this._getShaderStage(t.vertexShader).id;
        }
        getFragmentShaderID(t) {
            return this._getShaderStage(t.fragmentShader).id;
        }
        dispose() {
            this.shaderCache.clear(), this.materialCache.clear();
        }
        _getShaderCacheForMaterial(t) {
            const e = this.materialCache;
            return !1 === e.has(t) && e.set(t, new Set), e.get(t);
        }
        _getShaderStage(t) {
            const e = this.shaderCache;
            if (!1 === e.has(t)) {
                const i = new ws(t);
                e.set(t, i);
            }
            return e.get(t);
        }
    }
    class ws {
        constructor(t){
            this.id = Ms++, this.code = t, this.usedTimes = 0;
        }
    }
    function Ss(t79, e50, i34, n30, r, s12, a) {
        const o7 = new He, c = new bs, h3 = [], u = r.isWebGL2, d = r.logarithmicDepthBuffer, p = r.vertexTextures;
        let m = r.precision;
        const f = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "toon",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        };
        return {
            getParameters: function(s, o, h, g, v) {
                const x = g.fog, y = v.geometry, _ = s.isMeshStandardMaterial ? g.environment : null, M = (s.isMeshStandardMaterial ? i34 : e50).get(s.envMap || _), b = M && M.mapping === l1 ? M.image.height : null, w = f[s.type];
                null !== s.precision && (m = r.getMaxPrecision(s.precision), m !== s.precision && console.warn("THREE.WebGLProgram.getParameters:", s.precision, "not supported, using", m, "instead."));
                const S = y.morphAttributes.position || y.morphAttributes.normal || y.morphAttributes.color, T = void 0 !== S ? S.length : 0;
                let A, E, C, L, R = 0;
                if (void 0 !== y.morphAttributes.position && (R = 1), void 0 !== y.morphAttributes.normal && (R = 2), void 0 !== y.morphAttributes.color && (R = 3), w) {
                    const t = Mn[w];
                    A = t.vertexShader, E = t.fragmentShader;
                } else A = s.vertexShader, E = s.fragmentShader, c.update(s), C = c.getVertexShaderID(s), L = c.getFragmentShaderID(s);
                const P = t79.getRenderTarget(), I = s.alphaTest > 0, D = s.clearcoat > 0, N = s.iridescence > 0;
                return {
                    isWebGL2: u,
                    shaderID: w,
                    shaderName: s.type,
                    vertexShader: A,
                    fragmentShader: E,
                    defines: s.defines,
                    customVertexShaderID: C,
                    customFragmentShaderID: L,
                    isRawShaderMaterial: !0 === s.isRawShaderMaterial,
                    glslVersion: s.glslVersion,
                    precision: m,
                    instancing: !0 === v.isInstancedMesh,
                    instancingColor: !0 === v.isInstancedMesh && null !== v.instanceColor,
                    supportsVertexTextures: p,
                    outputEncoding: null === P ? t79.outputEncoding : !0 === P.isXRRenderTarget ? P.texture.encoding : at,
                    map: !!s.map,
                    matcap: !!s.matcap,
                    envMap: !!M,
                    envMapMode: M && M.mapping,
                    envMapCubeUVHeight: b,
                    lightMap: !!s.lightMap,
                    aoMap: !!s.aoMap,
                    emissiveMap: !!s.emissiveMap,
                    bumpMap: !!s.bumpMap,
                    normalMap: !!s.normalMap,
                    objectSpaceNormalMap: 1 === s.normalMapType,
                    tangentSpaceNormalMap: 0 === s.normalMapType,
                    decodeVideoTexture: !!s.map && !0 === s.map.isVideoTexture && s.map.encoding === ot1,
                    clearcoat: D,
                    clearcoatMap: D && !!s.clearcoatMap,
                    clearcoatRoughnessMap: D && !!s.clearcoatRoughnessMap,
                    clearcoatNormalMap: D && !!s.clearcoatNormalMap,
                    iridescence: N,
                    iridescenceMap: N && !!s.iridescenceMap,
                    iridescenceThicknessMap: N && !!s.iridescenceThicknessMap,
                    displacementMap: !!s.displacementMap,
                    roughnessMap: !!s.roughnessMap,
                    metalnessMap: !!s.metalnessMap,
                    specularMap: !!s.specularMap,
                    specularIntensityMap: !!s.specularIntensityMap,
                    specularColorMap: !!s.specularColorMap,
                    opaque: !1 === s.transparent && 1 === s.blending,
                    alphaMap: !!s.alphaMap,
                    alphaTest: I,
                    gradientMap: !!s.gradientMap,
                    sheen: s.sheen > 0,
                    sheenColorMap: !!s.sheenColorMap,
                    sheenRoughnessMap: !!s.sheenRoughnessMap,
                    transmission: s.transmission > 0,
                    transmissionMap: !!s.transmissionMap,
                    thicknessMap: !!s.thicknessMap,
                    combine: s.combine,
                    vertexTangents: !!s.normalMap && !!y.attributes.tangent,
                    vertexColors: s.vertexColors,
                    vertexAlphas: !0 === s.vertexColors && !!y.attributes.color && 4 === y.attributes.color.itemSize,
                    vertexUvs: !!(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatMap || s.clearcoatRoughnessMap || s.clearcoatNormalMap || s.iridescenceMap || s.iridescenceThicknessMap || s.displacementMap || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheenColorMap || s.sheenRoughnessMap),
                    uvsVertexOnly: !(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatNormalMap || s.iridescenceMap || s.iridescenceThicknessMap || s.transmission > 0 || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheen > 0 || s.sheenColorMap || s.sheenRoughnessMap || !s.displacementMap),
                    fog: !!x,
                    useFog: !0 === s.fog,
                    fogExp2: x && x.isFogExp2,
                    flatShading: !!s.flatShading,
                    sizeAttenuation: s.sizeAttenuation,
                    logarithmicDepthBuffer: d,
                    skinning: !0 === v.isSkinnedMesh,
                    morphTargets: void 0 !== y.morphAttributes.position,
                    morphNormals: void 0 !== y.morphAttributes.normal,
                    morphColors: void 0 !== y.morphAttributes.color,
                    morphTargetsCount: T,
                    morphTextureStride: R,
                    numDirLights: o.directional.length,
                    numPointLights: o.point.length,
                    numSpotLights: o.spot.length,
                    numRectAreaLights: o.rectArea.length,
                    numHemiLights: o.hemi.length,
                    numDirLightShadows: o.directionalShadowMap.length,
                    numPointLightShadows: o.pointShadowMap.length,
                    numSpotLightShadows: o.spotShadowMap.length,
                    numClippingPlanes: a.numPlanes,
                    numClipIntersection: a.numIntersection,
                    dithering: s.dithering,
                    shadowMapEnabled: t79.shadowMap.enabled && h.length > 0,
                    shadowMapType: t79.shadowMap.type,
                    toneMapping: s.toneMapped ? t79.toneMapping : 0,
                    physicallyCorrectLights: t79.physicallyCorrectLights,
                    premultipliedAlpha: s.premultipliedAlpha,
                    doubleSided: 2 === s.side,
                    flipSided: 1 === s.side,
                    useDepthPacking: !!s.depthPacking,
                    depthPacking: s.depthPacking || 0,
                    index0AttributeName: s.index0AttributeName,
                    extensionDerivatives: s.extensions && s.extensions.derivatives,
                    extensionFragDepth: s.extensions && s.extensions.fragDepth,
                    extensionDrawBuffers: s.extensions && s.extensions.drawBuffers,
                    extensionShaderTextureLOD: s.extensions && s.extensions.shaderTextureLOD,
                    rendererExtensionFragDepth: u || n30.has("EXT_frag_depth"),
                    rendererExtensionDrawBuffers: u || n30.has("WEBGL_draw_buffers"),
                    rendererExtensionShaderTextureLod: u || n30.has("EXT_shader_texture_lod"),
                    customProgramCacheKey: s.customProgramCacheKey()
                };
            },
            getProgramCacheKey: function(e51) {
                const i = [];
                if (e51.shaderID ? i.push(e51.shaderID) : (i.push(e51.customVertexShaderID), i.push(e51.customFragmentShaderID)), void 0 !== e51.defines) for(const t80 in e51.defines)i.push(t80), i.push(e51.defines[t80]);
                return !1 === e51.isRawShaderMaterial && (!function(t, e) {
                    t.push(e.precision), t.push(e.outputEncoding), t.push(e.envMapMode), t.push(e.envMapCubeUVHeight), t.push(e.combine), t.push(e.vertexUvs), t.push(e.fogExp2), t.push(e.sizeAttenuation), t.push(e.morphTargetsCount), t.push(e.morphAttributeCount), t.push(e.numDirLights), t.push(e.numPointLights), t.push(e.numSpotLights), t.push(e.numHemiLights), t.push(e.numRectAreaLights), t.push(e.numDirLightShadows), t.push(e.numPointLightShadows), t.push(e.numSpotLightShadows), t.push(e.shadowMapType), t.push(e.toneMapping), t.push(e.numClippingPlanes), t.push(e.numClipIntersection), t.push(e.depthPacking);
                }(i, e51), function(t, e) {
                    o7.disableAll(), e.isWebGL2 && o7.enable(0);
                    e.supportsVertexTextures && o7.enable(1);
                    e.instancing && o7.enable(2);
                    e.instancingColor && o7.enable(3);
                    e.map && o7.enable(4);
                    e.matcap && o7.enable(5);
                    e.envMap && o7.enable(6);
                    e.lightMap && o7.enable(7);
                    e.aoMap && o7.enable(8);
                    e.emissiveMap && o7.enable(9);
                    e.bumpMap && o7.enable(10);
                    e.normalMap && o7.enable(11);
                    e.objectSpaceNormalMap && o7.enable(12);
                    e.tangentSpaceNormalMap && o7.enable(13);
                    e.clearcoat && o7.enable(14);
                    e.clearcoatMap && o7.enable(15);
                    e.clearcoatRoughnessMap && o7.enable(16);
                    e.clearcoatNormalMap && o7.enable(17);
                    e.iridescence && o7.enable(18);
                    e.iridescenceMap && o7.enable(19);
                    e.iridescenceThicknessMap && o7.enable(20);
                    e.displacementMap && o7.enable(21);
                    e.specularMap && o7.enable(22);
                    e.roughnessMap && o7.enable(23);
                    e.metalnessMap && o7.enable(24);
                    e.gradientMap && o7.enable(25);
                    e.alphaMap && o7.enable(26);
                    e.alphaTest && o7.enable(27);
                    e.vertexColors && o7.enable(28);
                    e.vertexAlphas && o7.enable(29);
                    e.vertexUvs && o7.enable(30);
                    e.vertexTangents && o7.enable(31);
                    e.uvsVertexOnly && o7.enable(32);
                    e.fog && o7.enable(33);
                    t.push(o7.mask), o7.disableAll(), e.useFog && o7.enable(0);
                    e.flatShading && o7.enable(1);
                    e.logarithmicDepthBuffer && o7.enable(2);
                    e.skinning && o7.enable(3);
                    e.morphTargets && o7.enable(4);
                    e.morphNormals && o7.enable(5);
                    e.morphColors && o7.enable(6);
                    e.premultipliedAlpha && o7.enable(7);
                    e.shadowMapEnabled && o7.enable(8);
                    e.physicallyCorrectLights && o7.enable(9);
                    e.doubleSided && o7.enable(10);
                    e.flipSided && o7.enable(11);
                    e.useDepthPacking && o7.enable(12);
                    e.dithering && o7.enable(13);
                    e.specularIntensityMap && o7.enable(14);
                    e.specularColorMap && o7.enable(15);
                    e.transmission && o7.enable(16);
                    e.transmissionMap && o7.enable(17);
                    e.thicknessMap && o7.enable(18);
                    e.sheen && o7.enable(19);
                    e.sheenColorMap && o7.enable(20);
                    e.sheenRoughnessMap && o7.enable(21);
                    e.decodeVideoTexture && o7.enable(22);
                    e.opaque && o7.enable(23);
                    t.push(o7.mask);
                }(i, e51), i.push(t79.outputEncoding)), i.push(e51.customProgramCacheKey), i.join();
            },
            getUniforms: function(t) {
                const e = f[t.type];
                let i;
                if (e) {
                    const t = Mn[e];
                    i = tn.clone(t.uniforms);
                } else i = t.uniforms;
                return i;
            },
            acquireProgram: function(e, i) {
                let n;
                for(let t = 0, e52 = h3.length; t < e52; t++){
                    const e = h3[t];
                    if (e.cacheKey === i) {
                        n = e, ++n.usedTimes;
                        break;
                    }
                }
                return void 0 === n && (n = new _s(t79, i, e, s12), h3.push(n)), n;
            },
            releaseProgram: function(t) {
                if (0 == --t.usedTimes) {
                    const e = h3.indexOf(t);
                    h3[e] = h3[h3.length - 1], h3.pop(), t.destroy();
                }
            },
            releaseShaderCache: function(t) {
                c.remove(t);
            },
            programs: h3,
            dispose: function() {
                c.dispose();
            }
        };
    }
    function Ts() {
        let t = new WeakMap;
        return {
            get: function(e) {
                let i = t.get(e);
                return void 0 === i && (i = {}, t.set(e, i)), i;
            },
            remove: function(e) {
                t.delete(e);
            },
            update: function(e, i, n) {
                t.get(e)[i] = n;
            },
            dispose: function() {
                t = new WeakMap;
            }
        };
    }
    function As(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id;
    }
    function Es(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id;
    }
    function Cs() {
        const t81 = [];
        let e53 = 0;
        const i35 = [], n31 = [], r20 = [];
        function s13(i, n, r, s, a, o) {
            let l = t81[e53];
            return void 0 === l ? (l = {
                id: i.id,
                object: i,
                geometry: n,
                material: r,
                groupOrder: s,
                renderOrder: i.renderOrder,
                z: a,
                group: o
            }, t81[e53] = l) : (l.id = i.id, l.object = i, l.geometry = n, l.material = r, l.groupOrder = s, l.renderOrder = i.renderOrder, l.z = a, l.group = o), e53++, l;
        }
        return {
            opaque: i35,
            transmissive: n31,
            transparent: r20,
            init: function() {
                e53 = 0, i35.length = 0, n31.length = 0, r20.length = 0;
            },
            push: function(t, e, a, o, l, c) {
                const h = s13(t, e, a, o, l, c);
                a.transmission > 0 ? n31.push(h) : !0 === a.transparent ? r20.push(h) : i35.push(h);
            },
            unshift: function(t, e, a, o, l, c) {
                const h = s13(t, e, a, o, l, c);
                a.transmission > 0 ? n31.unshift(h) : !0 === a.transparent ? r20.unshift(h) : i35.unshift(h);
            },
            finish: function() {
                for(let i = e53, n = t81.length; i < n; i++){
                    const e = t81[i];
                    if (null === e.id) break;
                    e.id = null, e.object = null, e.geometry = null, e.material = null, e.group = null;
                }
            },
            sort: function(t, e) {
                i35.length > 1 && i35.sort(t || As), n31.length > 1 && n31.sort(e || Es), r20.length > 1 && r20.sort(e || Es);
            }
        };
    }
    function Ls() {
        let t = new WeakMap;
        return {
            get: function(e, i) {
                let n;
                return !1 === t.has(e) ? (n = new Cs, t.set(e, [
                    n
                ])) : i >= t.get(e).length ? (n = new Cs, t.get(e).push(n)) : n = t.get(e)[i], n;
            },
            dispose: function() {
                t = new WeakMap;
            }
        };
    }
    function Rs() {
        const t = {};
        return {
            get: function(e) {
                if (void 0 !== t[e.id]) return t[e.id];
                let i;
                switch(e.type){
                    case "DirectionalLight":
                        i = {
                            direction: new ee,
                            color: new Ht
                        };
                        break;
                    case "SpotLight":
                        i = {
                            position: new ee,
                            direction: new ee,
                            color: new Ht,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0
                        };
                        break;
                    case "PointLight":
                        i = {
                            position: new ee,
                            color: new Ht,
                            distance: 0,
                            decay: 0
                        };
                        break;
                    case "HemisphereLight":
                        i = {
                            direction: new ee,
                            skyColor: new Ht,
                            groundColor: new Ht
                        };
                        break;
                    case "RectAreaLight":
                        i = {
                            color: new Ht,
                            position: new ee,
                            halfWidth: new ee,
                            halfHeight: new ee
                        };
                }
                return t[e.id] = i, i;
            }
        };
    }
    let Ps = 0;
    function Is(t, e) {
        return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
    }
    function Ds(t83, e54) {
        const i36 = new Rs, n32 = function() {
            const t = {};
            return {
                get: function(e) {
                    if (void 0 !== t[e.id]) return t[e.id];
                    let i;
                    switch(e.type){
                        case "DirectionalLight":
                        case "SpotLight":
                            i = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new Et
                            };
                            break;
                        case "PointLight":
                            i = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new Et,
                                shadowCameraNear: 1,
                                shadowCameraFar: 1e3
                            };
                    }
                    return t[e.id] = i, i;
                }
            };
        }(), r = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1
            },
            ambient: [
                0,
                0,
                0
            ],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadow: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
        };
        for(let t82 = 0; t82 < 9; t82++)r.probe.push(new ee);
        const s14 = new ee, a9 = new Ie, o8 = new Ie;
        return {
            setup: function(s, a) {
                let o = 0, l = 0, c = 0;
                for(let t = 0; t < 9; t++)r.probe[t].set(0, 0, 0);
                let h = 0, u = 0, d = 0, p = 0, m = 0, f = 0, g = 0, v = 0;
                s.sort(Is);
                const x = !0 !== a ? Math.PI : 1;
                for(let t84 = 0, e = s.length; t84 < e; t84++){
                    const e = s[t84], a = e.color, y = e.intensity, _ = e.distance, M = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
                    if (e.isAmbientLight) o += a.r * y * x, l += a.g * y * x, c += a.b * y * x;
                    else if (e.isLightProbe) for(let t = 0; t < 9; t++)r.probe[t].addScaledVector(e.sh.coefficients[t], y);
                    else if (e.isDirectionalLight) {
                        const t = i36.get(e);
                        if (t.color.copy(e.color).multiplyScalar(e.intensity * x), e.castShadow) {
                            const t = e.shadow, i = n32.get(e);
                            i.shadowBias = t.bias, i.shadowNormalBias = t.normalBias, i.shadowRadius = t.radius, i.shadowMapSize = t.mapSize, r.directionalShadow[h] = i, r.directionalShadowMap[h] = M, r.directionalShadowMatrix[h] = e.shadow.matrix, f++;
                        }
                        r.directional[h] = t, h++;
                    } else if (e.isSpotLight) {
                        const t = i36.get(e);
                        if (t.position.setFromMatrixPosition(e.matrixWorld), t.color.copy(a).multiplyScalar(y * x), t.distance = _, t.coneCos = Math.cos(e.angle), t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t.decay = e.decay, e.castShadow) {
                            const t = e.shadow, i = n32.get(e);
                            i.shadowBias = t.bias, i.shadowNormalBias = t.normalBias, i.shadowRadius = t.radius, i.shadowMapSize = t.mapSize, r.spotShadow[d] = i, r.spotShadowMap[d] = M, r.spotShadowMatrix[d] = e.shadow.matrix, v++;
                        }
                        r.spot[d] = t, d++;
                    } else if (e.isRectAreaLight) {
                        const t = i36.get(e);
                        t.color.copy(a).multiplyScalar(y), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), r.rectArea[p] = t, p++;
                    } else if (e.isPointLight) {
                        const t = i36.get(e);
                        if (t.color.copy(e.color).multiplyScalar(e.intensity * x), t.distance = e.distance, t.decay = e.decay, e.castShadow) {
                            const t = e.shadow, i = n32.get(e);
                            i.shadowBias = t.bias, i.shadowNormalBias = t.normalBias, i.shadowRadius = t.radius, i.shadowMapSize = t.mapSize, i.shadowCameraNear = t.camera.near, i.shadowCameraFar = t.camera.far, r.pointShadow[u] = i, r.pointShadowMap[u] = M, r.pointShadowMatrix[u] = e.shadow.matrix, g++;
                        }
                        r.point[u] = t, u++;
                    } else if (e.isHemisphereLight) {
                        const t = i36.get(e);
                        t.skyColor.copy(e.color).multiplyScalar(y * x), t.groundColor.copy(e.groundColor).multiplyScalar(y * x), r.hemi[m] = t, m++;
                    }
                }
                p > 0 && (e54.isWebGL2 || !0 === t83.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = _n.LTC_FLOAT_1, r.rectAreaLTC2 = _n.LTC_FLOAT_2) : !0 === t83.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = _n.LTC_HALF_1, r.rectAreaLTC2 = _n.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o, r.ambient[1] = l, r.ambient[2] = c;
                const y = r.hash;
                y.directionalLength === h && y.pointLength === u && y.spotLength === d && y.rectAreaLength === p && y.hemiLength === m && y.numDirectionalShadows === f && y.numPointShadows === g && y.numSpotShadows === v || (r.directional.length = h, r.spot.length = d, r.rectArea.length = p, r.point.length = u, r.hemi.length = m, r.directionalShadow.length = f, r.directionalShadowMap.length = f, r.pointShadow.length = g, r.pointShadowMap.length = g, r.spotShadow.length = v, r.spotShadowMap.length = v, r.directionalShadowMatrix.length = f, r.pointShadowMatrix.length = g, r.spotShadowMatrix.length = v, y.directionalLength = h, y.pointLength = u, y.spotLength = d, y.rectAreaLength = p, y.hemiLength = m, y.numDirectionalShadows = f, y.numPointShadows = g, y.numSpotShadows = v, r.version = Ps++);
            },
            setupView: function(t, e) {
                let i = 0, n = 0, l = 0, c = 0, h = 0;
                const u = e.matrixWorldInverse;
                for(let e55 = 0, d = t.length; e55 < d; e55++){
                    const d = t[e55];
                    if (d.isDirectionalLight) {
                        const t = r.directional[i];
                        t.direction.setFromMatrixPosition(d.matrixWorld), s14.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s14), t.direction.transformDirection(u), i++;
                    } else if (d.isSpotLight) {
                        const t = r.spot[l];
                        t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), t.direction.setFromMatrixPosition(d.matrixWorld), s14.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s14), t.direction.transformDirection(u), l++;
                    } else if (d.isRectAreaLight) {
                        const t = r.rectArea[c];
                        t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), o8.identity(), a9.copy(d.matrixWorld), a9.premultiply(u), o8.extractRotation(a9), t.halfWidth.set(.5 * d.width, 0, 0), t.halfHeight.set(0, .5 * d.height, 0), t.halfWidth.applyMatrix4(o8), t.halfHeight.applyMatrix4(o8), c++;
                    } else if (d.isPointLight) {
                        const t = r.point[n];
                        t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), n++;
                    } else if (d.isHemisphereLight) {
                        const t = r.hemi[h];
                        t.direction.setFromMatrixPosition(d.matrixWorld), t.direction.transformDirection(u), h++;
                    }
                }
            },
            state: r
        };
    }
    function Ns(t85, e) {
        const i = new Ds(t85, e), n = [], r = [];
        return {
            init: function() {
                n.length = 0, r.length = 0;
            },
            state: {
                lightsArray: n,
                shadowsArray: r,
                lights: i
            },
            setupLights: function(t) {
                i.setup(n, t);
            },
            setupLightsView: function(t) {
                i.setupView(n, t);
            },
            pushLight: function(t) {
                n.push(t);
            },
            pushShadow: function(t) {
                r.push(t);
            }
        };
    }
    function zs(t, e) {
        let i = new WeakMap;
        return {
            get: function(n, r = 0) {
                let s;
                return !1 === i.has(n) ? (s = new Ns(t, e), i.set(n, [
                    s
                ])) : r >= i.get(n).length ? (s = new Ns(t, e), i.get(n).push(s)) : s = i.get(n)[r], s;
            },
            dispose: function() {
                i = new WeakMap;
            }
        };
    }
    class Os extends gi {
        constructor(t){
            super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
        }
    }
    class Fs extends gi {
        constructor(t){
            super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new ee, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
        }
    }
    function Bs(t86, e56, i37) {
        let n33 = new fn;
        const r21 = new Et, s15 = new Et, a10 = new Zt, o9 = new Os({
            depthPacking: 3201
        }), l5 = new Fs, c5 = {}, h4 = i37.maxTextureSize, u4 = {
            0: 1,
            1: 0,
            2: 2
        }, p3 = new en({
            defines: {
                VSM_SAMPLES: 8
            },
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new Et
                },
                radius: {
                    value: 4
                }
            },
            vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
            fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
        }), m2 = p3.clone();
        m2.defines.HORIZONTAL_PASS = 1;
        const f2 = new Pi;
        f2.setAttribute("position", new _i(new Float32Array([
            -1,
            -1,
            .5,
            3,
            -1,
            .5,
            -1,
            3,
            .5
        ]), 3));
        const g = new Yi(f2, p3), v = this;
        function x(i, n) {
            const r = e56.update(g);
            p3.defines.VSM_SAMPLES !== i.blurSamples && (p3.defines.VSM_SAMPLES = i.blurSamples, m2.defines.VSM_SAMPLES = i.blurSamples, p3.needsUpdate = !0, m2.needsUpdate = !0), p3.uniforms.shadow_pass.value = i.map.texture, p3.uniforms.resolution.value = i.mapSize, p3.uniforms.radius.value = i.radius, t86.setRenderTarget(i.mapPass), t86.clear(), t86.renderBufferDirect(n, null, r, p3, g, null), m2.uniforms.shadow_pass.value = i.mapPass.texture, m2.uniforms.resolution.value = i.mapSize, m2.uniforms.radius.value = i.radius, t86.setRenderTarget(i.map), t86.clear(), t86.renderBufferDirect(n, null, r, m2, g, null);
        }
        function y(e, i, n, r, s, a) {
            let h = null;
            const d = !0 === n.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
            if (h = void 0 !== d ? d : !0 === n.isPointLight ? l5 : o9, t86.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length || i.displacementMap && 0 !== i.displacementScale || i.alphaMap && i.alphaTest > 0) {
                const t = h.uuid, e = i.uuid;
                let n = c5[t];
                void 0 === n && (n = {}, c5[t] = n);
                let r = n[e];
                void 0 === r && (r = h.clone(), n[e] = r), h = r;
            }
            return h.visible = i.visible, h.wireframe = i.wireframe, h.side = 3 === a ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : u4[i.side], h.alphaMap = i.alphaMap, h.alphaTest = i.alphaTest, h.clipShadows = i.clipShadows, h.clippingPlanes = i.clippingPlanes, h.clipIntersection = i.clipIntersection, h.displacementMap = i.displacementMap, h.displacementScale = i.displacementScale, h.displacementBias = i.displacementBias, h.wireframeLinewidth = i.wireframeLinewidth, h.linewidth = i.linewidth, !0 === n.isPointLight && !0 === h.isMeshDistanceMaterial && (h.referencePosition.setFromMatrixPosition(n.matrixWorld), h.nearDistance = r, h.farDistance = s), h;
        }
        function _(i, r, s, a, o) {
            if (!1 === i.visible) return;
            if (i.layers.test(r.layers) && (i.isMesh || i.isLine || i.isPoints) && (i.castShadow || i.receiveShadow && 3 === o) && (!i.frustumCulled || n33.intersectsObject(i))) {
                i.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, i.matrixWorld);
                const n = e56.update(i), r = i.material;
                if (Array.isArray(r)) {
                    const e = n.groups;
                    for(let l = 0, c = e.length; l < c; l++){
                        const c = e[l], h = r[c.materialIndex];
                        if (h && h.visible) {
                            const e = y(i, h, a, s.near, s.far, o);
                            t86.renderBufferDirect(s, null, n, e, i, c);
                        }
                    }
                } else if (r.visible) {
                    const e = y(i, r, a, s.near, s.far, o);
                    t86.renderBufferDirect(s, null, n, e, i, null);
                }
            }
            const l = i.children;
            for(let t = 0, e = l.length; t < e; t++)_(l[t], r, s, a, o);
        }
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(e, i, o) {
            if (!1 === v.enabled) return;
            if (!1 === v.autoUpdate && !1 === v.needsUpdate) return;
            if (0 === e.length) return;
            const l = t86.getRenderTarget(), c = t86.getActiveCubeFace(), u = t86.getActiveMipmapLevel(), p = t86.state;
            p.setBlending(0), p.buffers.color.setClear(1, 1, 1, 1), p.buffers.depth.setTest(!0), p.setScissorTest(!1);
            for(let l6 = 0, c6 = e.length; l6 < c6; l6++){
                const c = e[l6], u = c.shadow;
                if (void 0 === u) {
                    console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
                    continue;
                }
                if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
                r21.copy(u.mapSize);
                const m = u.getFrameExtents();
                if (r21.multiply(m), s15.copy(u.mapSize), (r21.x > h4 || r21.y > h4) && (r21.x > h4 && (s15.x = Math.floor(h4 / m.x), r21.x = s15.x * m.x, u.mapSize.x = s15.x), r21.y > h4 && (s15.y = Math.floor(h4 / m.y), r21.y = s15.y * m.y, u.mapSize.y = s15.y)), null !== u.map || u.isPointLightShadow || 3 !== this.type || (u.map = new Kt(r21.x, r21.y), u.map.texture.name = c.name + ".shadowMap", u.mapPass = new Kt(r21.x, r21.y), u.camera.updateProjectionMatrix()), null === u.map) {
                    const t = {
                        minFilter: d1,
                        magFilter: d1,
                        format: S1
                    };
                    u.map = new Kt(r21.x, r21.y, t), u.map.texture.name = c.name + ".shadowMap", u.camera.updateProjectionMatrix();
                }
                t86.setRenderTarget(u.map), t86.clear();
                const f = u.getViewportCount();
                for(let t = 0; t < f; t++){
                    const e = u.getViewport(t);
                    a10.set(s15.x * e.x, s15.y * e.y, s15.x * e.z, s15.y * e.w), p.viewport(a10), u.updateMatrices(c, t), n33 = u.getFrustum(), _(i, o, u.camera, c, this.type);
                }
                u.isPointLightShadow || 3 !== this.type || x(u, o), u.needsUpdate = !1;
            }
            v.needsUpdate = !1, t86.setRenderTarget(l, c, u);
        };
    }
    function Us(t87, e57, n34) {
        const r22 = n34.isWebGL2;
        const s16 = new function() {
            let e58 = !1;
            const i38 = new Zt;
            let n35 = null;
            const r = new Zt(0, 0, 0, 0);
            return {
                setMask: function(i) {
                    n35 === i || e58 || (t87.colorMask(i, i, i, i), n35 = i);
                },
                setLocked: function(t) {
                    e58 = t;
                },
                setClear: function(e, n, s, a, o) {
                    !0 === o && (e *= a, n *= a, s *= a), i38.set(e, n, s, a), !1 === r.equals(i38) && (t87.clearColor(e, n, s, a), r.copy(i38));
                },
                reset: function() {
                    e58 = !1, n35 = null, r.set(-1, 0, 0, 0);
                }
            };
        }, a11 = new function() {
            let e59 = !1, i = null, n36 = null, r = null;
            return {
                setTest: function(t) {
                    t ? U(2929) : k(2929);
                },
                setMask: function(n) {
                    i === n || e59 || (t87.depthMask(n), i = n);
                },
                setFunc: function(e) {
                    if (n36 !== e) {
                        if (e) switch(e){
                            case 0:
                                t87.depthFunc(512);
                                break;
                            case 1:
                                t87.depthFunc(519);
                                break;
                            case 2:
                                t87.depthFunc(513);
                                break;
                            case 3:
                            default:
                                t87.depthFunc(515);
                                break;
                            case 4:
                                t87.depthFunc(514);
                                break;
                            case 5:
                                t87.depthFunc(518);
                                break;
                            case 6:
                                t87.depthFunc(516);
                                break;
                            case 7:
                                t87.depthFunc(517);
                        }
                        else t87.depthFunc(515);
                        n36 = e;
                    }
                },
                setLocked: function(t) {
                    e59 = t;
                },
                setClear: function(e) {
                    r !== e && (t87.clearDepth(e), r = e);
                },
                reset: function() {
                    e59 = !1, i = null, n36 = null, r = null;
                }
            };
        }, o10 = new function() {
            let e60 = !1, i39 = null, n37 = null, r = null, s = null, a12 = null, o = null, l = null, c = null;
            return {
                setTest: function(t) {
                    e60 || (t ? U(2960) : k(2960));
                },
                setMask: function(n) {
                    i39 === n || e60 || (t87.stencilMask(n), i39 = n);
                },
                setFunc: function(e, i, a) {
                    n37 === e && r === i && s === a || (t87.stencilFunc(e, i, a), n37 = e, r = i, s = a);
                },
                setOp: function(e, i, n) {
                    a12 === e && o === i && l === n || (t87.stencilOp(e, i, n), a12 = e, o = i, l = n);
                },
                setLocked: function(t) {
                    e60 = t;
                },
                setClear: function(e) {
                    c !== e && (t87.clearStencil(e), c = e);
                },
                reset: function() {
                    e60 = !1, i39 = null, n37 = null, r = null, s = null, a12 = null, o = null, l = null, c = null;
                }
            };
        };
        let l7 = {}, c7 = {}, h = new WeakMap, u = [], d = null, p = !1, m = null, f = null, g = null, v = null, x = null, y = null, _ = null, M = !1, b = null, w = null, S = null, T = null, A = null;
        const E = t87.getParameter(35661);
        let C = !1, L = 0;
        const R = t87.getParameter(7938);
        -1 !== R.indexOf("WebGL") ? (L = parseFloat(/^WebGL (\d)/.exec(R)[1]), C = L >= 1) : -1 !== R.indexOf("OpenGL ES") && (L = parseFloat(/^OpenGL ES (\d)/.exec(R)[1]), C = L >= 2);
        let P = null, I = {};
        const D = t87.getParameter(3088), N = t87.getParameter(2978), z = (new Zt).fromArray(D), O = (new Zt).fromArray(N);
        function F(e, i, n) {
            const r = new Uint8Array(4), s = t87.createTexture();
            t87.bindTexture(e, s), t87.texParameteri(e, 10241, 9728), t87.texParameteri(e, 10240, 9728);
            for(let e61 = 0; e61 < n; e61++)t87.texImage2D(i + e61, 0, 6408, 1, 1, 0, 6408, 5121, r);
            return s;
        }
        const B = {};
        function U(e) {
            !0 !== l7[e] && (t87.enable(e), l7[e] = !0);
        }
        function k(e) {
            !1 !== l7[e] && (t87.disable(e), l7[e] = !1);
        }
        B[3553] = F(3553, 3553, 1), B[34067] = F(34067, 34069, 6), s16.setClear(0, 0, 0, 1), a11.setClear(1), o10.setClear(0), U(2929), a11.setFunc(3), W(!1), j(1), U(2884), H(0);
        const G = {
            [i1]: 32774,
            101: 32778,
            102: 32779
        };
        if (r22) G[103] = 32775, G[104] = 32776;
        else {
            const t = e57.get("EXT_blend_minmax");
            null !== t && (G[103] = t.MIN_EXT, G[104] = t.MAX_EXT);
        }
        const V = {
            200: 0,
            201: 1,
            202: 768,
            204: 770,
            210: 776,
            208: 774,
            206: 772,
            203: 769,
            205: 771,
            209: 775,
            207: 773
        };
        function H(e, n, r, s, a, o, l, c) {
            if (0 !== e) {
                if (!1 === p && (U(3042), p = !0), 5 === e) a = a || n, o = o || r, l = l || s, n === f && a === x || (t87.blendEquationSeparate(G[n], G[a]), f = n, x = a), r === g && s === v && o === y && l === _ || (t87.blendFuncSeparate(V[r], V[s], V[o], V[l]), g = r, v = s, y = o, _ = l), m = e, M = null;
                else if (e !== m || c !== M) {
                    if (f === i1 && x === i1 || (t87.blendEquation(32774), f = i1, x = i1), c) switch(e){
                        case 1:
                            t87.blendFuncSeparate(1, 771, 1, 771);
                            break;
                        case 2:
                            t87.blendFunc(1, 1);
                            break;
                        case 3:
                            t87.blendFuncSeparate(0, 769, 0, 1);
                            break;
                        case 4:
                            t87.blendFuncSeparate(0, 768, 0, 770);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e);
                    }
                    else switch(e){
                        case 1:
                            t87.blendFuncSeparate(770, 771, 1, 771);
                            break;
                        case 2:
                            t87.blendFunc(770, 1);
                            break;
                        case 3:
                            t87.blendFuncSeparate(0, 769, 0, 1);
                            break;
                        case 4:
                            t87.blendFunc(0, 768);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e);
                    }
                    g = null, v = null, y = null, _ = null, m = e, M = c;
                }
            } else !0 === p && (k(3042), p = !1);
        }
        function W(e) {
            b !== e && (e ? t87.frontFace(2304) : t87.frontFace(2305), b = e);
        }
        function j(e) {
            0 !== e ? (U(2884), e !== w && (1 === e ? t87.cullFace(1029) : 2 === e ? t87.cullFace(1028) : t87.cullFace(1032))) : k(2884), w = e;
        }
        function q(e, i, n) {
            e ? (U(32823), T === i && A === n || (t87.polygonOffset(i, n), T = i, A = n)) : k(32823);
        }
        function X(e) {
            void 0 === e && (e = 33984 + E - 1), P !== e && (t87.activeTexture(e), P = e);
        }
        return {
            buffers: {
                color: s16,
                depth: a11,
                stencil: o10
            },
            enable: U,
            disable: k,
            bindFramebuffer: function(e, i) {
                return c7[e] !== i && (t87.bindFramebuffer(e, i), c7[e] = i, r22 && (36009 === e && (c7[36160] = i), 36160 === e && (c7[36009] = i)), !0);
            },
            drawBuffers: function(i, r) {
                let s = u, a = !1;
                if (i) {
                    if (s = h.get(r), void 0 === s && (s = [], h.set(r, s)), i.isWebGLMultipleRenderTargets) {
                        const t = i.texture;
                        if (s.length !== t.length || 36064 !== s[0]) {
                            for(let e = 0, i = t.length; e < i; e++)s[e] = 36064 + e;
                            s.length = t.length, a = !0;
                        }
                    } else 36064 !== s[0] && (s[0] = 36064, a = !0);
                } else 1029 !== s[0] && (s[0] = 1029, a = !0);
                a && (n34.isWebGL2 ? t87.drawBuffers(s) : e57.get("WEBGL_draw_buffers").drawBuffersWEBGL(s));
            },
            useProgram: function(e) {
                return d !== e && (t87.useProgram(e), d = e, !0);
            },
            setBlending: H,
            setMaterial: function(t, e) {
                2 === t.side ? k(2884) : U(2884);
                let i = 1 === t.side;
                e && (i = !i), W(i), 1 === t.blending && !1 === t.transparent ? H(0) : H(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), a11.setFunc(t.depthFunc), a11.setTest(t.depthTest), a11.setMask(t.depthWrite), s16.setMask(t.colorWrite);
                const n = t.stencilWrite;
                o10.setTest(n), n && (o10.setMask(t.stencilWriteMask), o10.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), o10.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), q(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), !0 === t.alphaToCoverage ? U(32926) : k(32926);
            },
            setFlipSided: W,
            setCullFace: j,
            setLineWidth: function(e) {
                e !== S && (C && t87.lineWidth(e), S = e);
            },
            setPolygonOffset: q,
            setScissorTest: function(t) {
                t ? U(3089) : k(3089);
            },
            activeTexture: X,
            bindTexture: function(e, i) {
                null === P && X();
                let n = I[P];
                void 0 === n && (n = {
                    type: void 0,
                    texture: void 0
                }, I[P] = n), n.type === e && n.texture === i || (t87.bindTexture(e, i || B[e]), n.type = e, n.texture = i);
            },
            unbindTexture: function() {
                const e = I[P];
                void 0 !== e && void 0 !== e.type && (t87.bindTexture(e.type, null), e.type = void 0, e.texture = void 0);
            },
            compressedTexImage2D: function() {
                try {
                    t87.compressedTexImage2D.apply(t87, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            texImage2D: function() {
                try {
                    t87.texImage2D.apply(t87, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            texImage3D: function() {
                try {
                    t87.texImage3D.apply(t87, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            texStorage2D: function() {
                try {
                    t87.texStorage2D.apply(t87, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            texStorage3D: function() {
                try {
                    t87.texStorage3D.apply(t87, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            texSubImage2D: function() {
                try {
                    t87.texSubImage2D.apply(t87, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            texSubImage3D: function() {
                try {
                    t87.texSubImage3D.apply(t87, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            compressedTexSubImage2D: function() {
                try {
                    t87.compressedTexSubImage2D.apply(t87, arguments);
                } catch (t) {
                    console.error("THREE.WebGLState:", t);
                }
            },
            scissor: function(e) {
                !1 === z.equals(e) && (t87.scissor(e.x, e.y, e.z, e.w), z.copy(e));
            },
            viewport: function(e) {
                !1 === O.equals(e) && (t87.viewport(e.x, e.y, e.z, e.w), O.copy(e));
            },
            reset: function() {
                t87.disable(3042), t87.disable(2884), t87.disable(2929), t87.disable(32823), t87.disable(3089), t87.disable(2960), t87.disable(32926), t87.blendEquation(32774), t87.blendFunc(1, 0), t87.blendFuncSeparate(1, 0, 1, 0), t87.colorMask(!0, !0, !0, !0), t87.clearColor(0, 0, 0, 0), t87.depthMask(!0), t87.depthFunc(513), t87.clearDepth(1), t87.stencilMask(4294967295), t87.stencilFunc(519, 0, 4294967295), t87.stencilOp(7680, 7680, 7680), t87.clearStencil(0), t87.cullFace(1029), t87.frontFace(2305), t87.polygonOffset(0, 0), t87.activeTexture(33984), t87.bindFramebuffer(36160, null), !0 === r22 && (t87.bindFramebuffer(36009, null), t87.bindFramebuffer(36008, null)), t87.useProgram(null), t87.lineWidth(1), t87.scissor(0, 0, t87.canvas.width, t87.canvas.height), t87.viewport(0, 0, t87.canvas.width, t87.canvas.height), l7 = {}, P = null, I = {}, c7 = {}, h = new WeakMap, u = [], d = null, p = !1, m = null, f = null, g = null, v = null, x = null, y = null, _ = null, M = !1, b = null, w = null, S = null, T = null, A = null, z.set(0, 0, t87.canvas.width, t87.canvas.height), O.set(0, 0, t87.canvas.width, t87.canvas.height), s16.reset(), a11.reset(), o10.reset();
            }
        };
    }
    function ks(t89, e62, i40, n38, r23, s17, a13) {
        const o11 = r23.isWebGL2, l8 = r23.maxTextures, E2 = r23.maxCubemapSize, C = r23.maxTextureSize, L2 = r23.maxSamples, R = e62.has("WEBGL_multisampled_render_to_texture") ? e62.get("WEBGL_multisampled_render_to_texture") : null, P = /OculusBrowser/g.test(navigator.userAgent), I = new WeakMap;
        let D;
        const N = new WeakMap;
        let z = !1;
        try {
            z = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
        } catch (t88) {}
        function O(t, e) {
            return z ? new OffscreenCanvas(t, e) : It("canvas");
        }
        function F(t, e, i, n) {
            let r = 1;
            if ((t.width > n || t.height > n) && (r = n / Math.max(t.width, t.height)), r < 1 || !0 === e) {
                if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                    const n = e ? Tt : Math.floor, s = n(r * t.width), a = n(r * t.height);
                    void 0 === D && (D = O(s, a));
                    const o = i ? O(s, a) : D;
                    o.width = s, o.height = a;
                    return o.getContext("2d").drawImage(t, 0, 0, s, a), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + s + "x" + a + ")."), o;
                }
                return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t;
            }
            return t;
        }
        function B(t) {
            return wt1(t.width) && wt1(t.height);
        }
        function U(t, e) {
            return t.generateMipmaps && e && t.minFilter !== d1 && t.minFilter !== f1;
        }
        function k(e) {
            t89.generateMipmap(e);
        }
        function G(i, n, r, s, a = !1) {
            if (!1 === o11) return n;
            if (null !== i) {
                if (void 0 !== t89[i]) return t89[i];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + i + "'");
            }
            let l = n;
            return 6403 === n && (5126 === r && (l = 33326), 5131 === r && (l = 33325), 5121 === r && (l = 33321)), 33319 === n && (5126 === r && (l = 33328), 5131 === r && (l = 33327), 5121 === r && (l = 33323)), 6408 === n && (5126 === r && (l = 34836), 5131 === r && (l = 34842), 5121 === r && (l = s === ot1 && !1 === a ? 35907 : 32856), 32819 === r && (l = 32854), 32820 === r && (l = 32855)), 33325 !== l && 33326 !== l && 33327 !== l && 33328 !== l && 34842 !== l && 34836 !== l || e62.get("EXT_color_buffer_float"), l;
        }
        function V(t, e, i) {
            return !0 === U(t, i) || t.isFramebufferTexture && t.minFilter !== d1 && t.minFilter !== f1 ? Math.log2(Math.max(e.width, e.height)) + 1 : void 0 !== t.mipmaps && t.mipmaps.length > 0 ? t.mipmaps.length : t.isCompressedTexture && Array.isArray(t.image) ? e.mipmaps.length : 1;
        }
        function H(t) {
            return t === d1 || t === p1 || t === m1 ? 9728 : 9729;
        }
        function W(t90) {
            const e63 = t90.target;
            e63.removeEventListener("dispose", W), function(t) {
                const e = n38.get(t);
                if (void 0 === e.__webglInit) return;
                const i = t.source, r = N.get(i);
                if (r) {
                    const n = r[e.__cacheKey];
                    n.usedTimes--, 0 === n.usedTimes && q(t), 0 === Object.keys(r).length && N.delete(i);
                }
                n38.remove(t);
            }(e63), e63.isVideoTexture && I.delete(e63);
        }
        function j(e66) {
            const i41 = e66.target;
            i41.removeEventListener("dispose", j), function(e) {
                const i = e.texture, r = n38.get(e), s = n38.get(i);
                void 0 !== s.__webglTexture && (t89.deleteTexture(s.__webglTexture), a13.memory.textures--);
                e.depthTexture && e.depthTexture.dispose();
                if (e.isWebGLCubeRenderTarget) for(let e64 = 0; e64 < 6; e64++)t89.deleteFramebuffer(r.__webglFramebuffer[e64]), r.__webglDepthbuffer && t89.deleteRenderbuffer(r.__webglDepthbuffer[e64]);
                else {
                    if (t89.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && t89.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t89.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer) for(let e = 0; e < r.__webglColorRenderbuffer.length; e++)r.__webglColorRenderbuffer[e] && t89.deleteRenderbuffer(r.__webglColorRenderbuffer[e]);
                    r.__webglDepthRenderbuffer && t89.deleteRenderbuffer(r.__webglDepthRenderbuffer);
                }
                if (e.isWebGLMultipleRenderTargets) for(let e65 = 0, r24 = i.length; e65 < r24; e65++){
                    const r = n38.get(i[e65]);
                    r.__webglTexture && (t89.deleteTexture(r.__webglTexture), a13.memory.textures--), n38.remove(i[e65]);
                }
                n38.remove(i), n38.remove(e);
            }(i41);
        }
        function q(e) {
            const i = n38.get(e);
            t89.deleteTexture(i.__webglTexture);
            const r = e.source;
            delete N.get(r)[i.__cacheKey], a13.memory.textures--;
        }
        let X = 0;
        function J(t91, e67) {
            const r = n38.get(t91);
            if (t91.isVideoTexture && function(t) {
                const e = a13.render.frame;
                I.get(t) !== e && (I.set(t, e), t.update());
            }(t91), !1 === t91.isRenderTargetTexture && t91.version > 0 && r.__version !== t91.version) {
                const i = t91.image;
                if (null === i) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
                else {
                    if (!1 !== i.complete) return void $(r, t91, e67);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
                }
            }
            i40.activeTexture(33984 + e67), i40.bindTexture(3553, r.__webglTexture);
        }
        const Y = {
            [c1]: 10497,
            [h1]: 33071,
            [u1]: 33648
        }, Z = {
            [d1]: 9728,
            [p1]: 9984,
            [m1]: 9986,
            [f1]: 9729,
            [g1]: 9985,
            [v1]: 9987
        };
        function K(i, s, a) {
            if (a ? (t89.texParameteri(i, 10242, Y[s.wrapS]), t89.texParameteri(i, 10243, Y[s.wrapT]), 32879 !== i && 35866 !== i || t89.texParameteri(i, 32882, Y[s.wrapR]), t89.texParameteri(i, 10240, Z[s.magFilter]), t89.texParameteri(i, 10241, Z[s.minFilter])) : (t89.texParameteri(i, 10242, 33071), t89.texParameteri(i, 10243, 33071), 32879 !== i && 35866 !== i || t89.texParameteri(i, 32882, 33071), s.wrapS === h1 && s.wrapT === h1 || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t89.texParameteri(i, 10240, H(s.magFilter)), t89.texParameteri(i, 10241, H(s.minFilter)), s.minFilter !== d1 && s.minFilter !== f1 && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === e62.has("EXT_texture_filter_anisotropic")) {
                const a = e62.get("EXT_texture_filter_anisotropic");
                if (s.type === M1 && !1 === e62.has("OES_texture_float_linear")) return;
                if (!1 === o11 && s.type === b1 && !1 === e62.has("OES_texture_half_float_linear")) return;
                (s.anisotropy > 1 || n38.get(s).__currentAnisotropy) && (t89.texParameterf(i, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r23.getMaxAnisotropy())), n38.get(s).__currentAnisotropy = s.anisotropy);
            }
        }
        function Q(e68, i) {
            let n = !1;
            void 0 === e68.__webglInit && (e68.__webglInit = !0, i.addEventListener("dispose", W));
            const r = i.source;
            let s = N.get(r);
            void 0 === s && (s = {}, N.set(r, s));
            const o = function(t) {
                const e = [];
                return e.push(t.wrapS), e.push(t.wrapT), e.push(t.magFilter), e.push(t.minFilter), e.push(t.anisotropy), e.push(t.internalFormat), e.push(t.format), e.push(t.type), e.push(t.generateMipmaps), e.push(t.premultiplyAlpha), e.push(t.flipY), e.push(t.unpackAlignment), e.push(t.encoding), e.join();
            }(i);
            if (o !== e68.__cacheKey) {
                void 0 === s[o] && (s[o] = {
                    texture: t89.createTexture(),
                    usedTimes: 0
                }, a13.memory.textures++, n = !0), s[o].usedTimes++;
                const r = s[e68.__cacheKey];
                void 0 !== r && (s[e68.__cacheKey].usedTimes--, 0 === r.usedTimes && q(i)), e68.__cacheKey = o, e68.__webglTexture = s[o].texture;
            }
            return n;
        }
        function $(e, n, r) {
            let a = 3553;
            n.isDataArrayTexture && (a = 35866), n.isData3DTexture && (a = 32879);
            const l = Q(e, n), c = n.source;
            if (i40.activeTexture(33984 + r), i40.bindTexture(a, e.__webglTexture), c.version !== c.__currentVersion || !0 === l) {
                t89.pixelStorei(37440, n.flipY), t89.pixelStorei(37441, n.premultiplyAlpha), t89.pixelStorei(3317, n.unpackAlignment), t89.pixelStorei(37443, 0);
                const e = function(t) {
                    return !o11 && (t.wrapS !== h1 || t.wrapT !== h1 || t.minFilter !== d1 && t.minFilter !== f1);
                }(n) && !1 === B(n.image);
                let r = F(n.image, e, !1, C);
                r = st(n, r);
                const u = B(r) || o11, p = s17.convert(n.format, n.encoding);
                let m, g = s17.convert(n.type), v = G(n.internalFormat, p, g, n.encoding, n.isVideoTexture);
                K(a, n, u);
                const x = n.mipmaps, b = o11 && !0 !== n.isVideoTexture, E = void 0 === c.__currentVersion || !0 === l, L = V(n, r, u);
                if (n.isDepthTexture) v = 6402, o11 ? v = n.type === M1 ? 36012 : n.type === _1 ? 33190 : n.type === w1 ? 35056 : 33189 : n.type === M1 && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), n.format === T1 && 6402 === v && n.type !== y1 && n.type !== _1 && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), n.type = _1, g = s17.convert(n.type)), n.format === A1 && 6402 === v && (v = 34041, n.type !== w1 && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), n.type = w1, g = s17.convert(n.type))), E && (b ? i40.texStorage2D(3553, 1, v, r.width, r.height) : i40.texImage2D(3553, 0, v, r.width, r.height, 0, p, g, null));
                else if (n.isDataTexture) {
                    if (x.length > 0 && u) {
                        b && E && i40.texStorage2D(3553, L, v, x[0].width, x[0].height);
                        for(let t = 0, e = x.length; t < e; t++)m = x[t], b ? i40.texSubImage2D(3553, t, 0, 0, m.width, m.height, p, g, m.data) : i40.texImage2D(3553, t, v, m.width, m.height, 0, p, g, m.data);
                        n.generateMipmaps = !1;
                    } else b ? (E && i40.texStorage2D(3553, L, v, r.width, r.height), i40.texSubImage2D(3553, 0, 0, 0, r.width, r.height, p, g, r.data)) : i40.texImage2D(3553, 0, v, r.width, r.height, 0, p, g, r.data);
                } else if (n.isCompressedTexture) {
                    b && E && i40.texStorage2D(3553, L, v, x[0].width, x[0].height);
                    for(let t = 0, e = x.length; t < e; t++)m = x[t], n.format !== S1 ? null !== p ? b ? i40.compressedTexSubImage2D(3553, t, 0, 0, m.width, m.height, p, m.data) : i40.compressedTexImage2D(3553, t, v, m.width, m.height, 0, m.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : b ? i40.texSubImage2D(3553, t, 0, 0, m.width, m.height, p, g, m.data) : i40.texImage2D(3553, t, v, m.width, m.height, 0, p, g, m.data);
                } else if (n.isDataArrayTexture) b ? (E && i40.texStorage3D(35866, L, v, r.width, r.height, r.depth), i40.texSubImage3D(35866, 0, 0, 0, 0, r.width, r.height, r.depth, p, g, r.data)) : i40.texImage3D(35866, 0, v, r.width, r.height, r.depth, 0, p, g, r.data);
                else if (n.isData3DTexture) b ? (E && i40.texStorage3D(32879, L, v, r.width, r.height, r.depth), i40.texSubImage3D(32879, 0, 0, 0, 0, r.width, r.height, r.depth, p, g, r.data)) : i40.texImage3D(32879, 0, v, r.width, r.height, r.depth, 0, p, g, r.data);
                else if (n.isFramebufferTexture) {
                    if (E) {
                        if (b) i40.texStorage2D(3553, L, v, r.width, r.height);
                        else {
                            let t = r.width, e = r.height;
                            for(let n = 0; n < L; n++)i40.texImage2D(3553, n, v, t, e, 0, p, g, null), t >>= 1, e >>= 1;
                        }
                    }
                } else if (x.length > 0 && u) {
                    b && E && i40.texStorage2D(3553, L, v, x[0].width, x[0].height);
                    for(let t = 0, e = x.length; t < e; t++)m = x[t], b ? i40.texSubImage2D(3553, t, 0, 0, p, g, m) : i40.texImage2D(3553, t, v, p, g, m);
                    n.generateMipmaps = !1;
                } else b ? (E && i40.texStorage2D(3553, L, v, r.width, r.height), i40.texSubImage2D(3553, 0, 0, 0, p, g, r)) : i40.texImage2D(3553, 0, v, p, g, r);
                U(n, u) && k(a), c.__currentVersion = c.version, n.onUpdate && n.onUpdate(n);
            }
            e.__version = n.version;
        }
        function tt(e, r, a, o, l) {
            const c = s17.convert(a.format, a.encoding), h = s17.convert(a.type), u = G(a.internalFormat, c, h, a.encoding);
            n38.get(r).__hasExternalTextures || (32879 === l || 35866 === l ? i40.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null) : i40.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null)), i40.bindFramebuffer(36160, e), rt(r) ? R.framebufferTexture2DMultisampleEXT(36160, o, l, n38.get(a).__webglTexture, 0, nt(r)) : t89.framebufferTexture2D(36160, o, l, n38.get(a).__webglTexture, 0), i40.bindFramebuffer(36160, null);
        }
        function et(e, i, n) {
            if (t89.bindRenderbuffer(36161, e), i.depthBuffer && !i.stencilBuffer) {
                let r = 33189;
                if (n || rt(i)) {
                    const e = i.depthTexture;
                    e && e.isDepthTexture && (e.type === M1 ? r = 36012 : e.type === _1 && (r = 33190));
                    const n = nt(i);
                    rt(i) ? R.renderbufferStorageMultisampleEXT(36161, n, r, i.width, i.height) : t89.renderbufferStorageMultisample(36161, n, r, i.width, i.height);
                } else t89.renderbufferStorage(36161, r, i.width, i.height);
                t89.framebufferRenderbuffer(36160, 36096, 36161, e);
            } else if (i.depthBuffer && i.stencilBuffer) {
                const r = nt(i);
                n && !1 === rt(i) ? t89.renderbufferStorageMultisample(36161, r, 35056, i.width, i.height) : rt(i) ? R.renderbufferStorageMultisampleEXT(36161, r, 35056, i.width, i.height) : t89.renderbufferStorage(36161, 34041, i.width, i.height), t89.framebufferRenderbuffer(36160, 33306, 36161, e);
            } else {
                const e = !0 === i.isWebGLMultipleRenderTargets ? i.texture : [
                    i.texture
                ];
                for(let r = 0; r < e.length; r++){
                    const a = e[r], o = s17.convert(a.format, a.encoding), l = s17.convert(a.type), c = G(a.internalFormat, o, l, a.encoding), h = nt(i);
                    n && !1 === rt(i) ? t89.renderbufferStorageMultisample(36161, h, c, i.width, i.height) : rt(i) ? R.renderbufferStorageMultisampleEXT(36161, h, c, i.width, i.height) : t89.renderbufferStorage(36161, c, i.width, i.height);
                }
            }
            t89.bindRenderbuffer(36161, null);
        }
        function it(e69) {
            const r25 = n38.get(e69), s18 = !0 === e69.isWebGLCubeRenderTarget;
            if (e69.depthTexture && !r25.__autoAllocateDepthBuffer) {
                if (s18) throw new Error("target.depthTexture not supported in Cube render targets");
                !function(e, r) {
                    if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                    if (i40.bindFramebuffer(36160, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    n38.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), J(r.depthTexture, 0);
                    const s = n38.get(r.depthTexture).__webglTexture, a = nt(r);
                    if (r.depthTexture.format === T1) rt(r) ? R.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, s, 0, a) : t89.framebufferTexture2D(36160, 36096, 3553, s, 0);
                    else {
                        if (r.depthTexture.format !== A1) throw new Error("Unknown depthTexture format");
                        rt(r) ? R.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, s, 0, a) : t89.framebufferTexture2D(36160, 33306, 3553, s, 0);
                    }
                }(r25.__webglFramebuffer, e69);
            } else if (s18) {
                r25.__webglDepthbuffer = [];
                for(let n = 0; n < 6; n++)i40.bindFramebuffer(36160, r25.__webglFramebuffer[n]), r25.__webglDepthbuffer[n] = t89.createRenderbuffer(), et(r25.__webglDepthbuffer[n], e69, !1);
            } else i40.bindFramebuffer(36160, r25.__webglFramebuffer), r25.__webglDepthbuffer = t89.createRenderbuffer(), et(r25.__webglDepthbuffer, e69, !1);
            i40.bindFramebuffer(36160, null);
        }
        function nt(t) {
            return Math.min(L2, t.samples);
        }
        function rt(t) {
            const i = n38.get(t);
            return o11 && t.samples > 0 && !0 === e62.has("WEBGL_multisampled_render_to_texture") && !1 !== i.__useRenderToTexture;
        }
        function st(t, i) {
            const n = t.encoding, r = t.format, s = t.type;
            return !0 === t.isCompressedTexture || !0 === t.isVideoTexture || t.format === pt1 || n !== at && (n === ot1 ? !1 === o11 ? !0 === e62.has("EXT_sRGB") && r === S1 ? (t.format = pt1, t.minFilter = f1, t.generateMipmaps = !1) : i = jt.sRGBToLinear(i) : r === S1 && s === x1 || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", n)), i;
        }
        this.allocateTextureUnit = function() {
            const t = X;
            return t >= l8 && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + l8), X += 1, t;
        }, this.resetTextureUnits = function() {
            X = 0;
        }, this.setTexture2D = J, this.setTexture2DArray = function(t, e) {
            const r = n38.get(t);
            t.version > 0 && r.__version !== t.version ? $(r, t, e) : (i40.activeTexture(33984 + e), i40.bindTexture(35866, r.__webglTexture));
        }, this.setTexture3D = function(t, e) {
            const r = n38.get(t);
            t.version > 0 && r.__version !== t.version ? $(r, t, e) : (i40.activeTexture(33984 + e), i40.bindTexture(32879, r.__webglTexture));
        }, this.setTextureCube = function(e70, r26) {
            const a14 = n38.get(e70);
            e70.version > 0 && a14.__version !== e70.version ? function(e, n, r) {
                if (6 !== n.image.length) return;
                const a = Q(e, n), l = n.source;
                if (i40.activeTexture(33984 + r), i40.bindTexture(34067, e.__webglTexture), l.version !== l.__currentVersion || !0 === a) {
                    t89.pixelStorei(37440, n.flipY), t89.pixelStorei(37441, n.premultiplyAlpha), t89.pixelStorei(3317, n.unpackAlignment), t89.pixelStorei(37443, 0);
                    const e = n.isCompressedTexture || n.image[0].isCompressedTexture, r = n.image[0] && n.image[0].isDataTexture, c = [];
                    for(let t = 0; t < 6; t++)c[t] = e || r ? r ? n.image[t].image : n.image[t] : F(n.image[t], !1, !0, E2), c[t] = st(n, c[t]);
                    const h = c[0], u = B(h) || o11, d = s17.convert(n.format, n.encoding), p = s17.convert(n.type), m = G(n.internalFormat, d, p, n.encoding), f = o11 && !0 !== n.isVideoTexture, g = void 0 === l.__currentVersion || !0 === a;
                    let v, x = V(n, h, u);
                    if (K(34067, n, u), e) {
                        f && g && i40.texStorage2D(34067, x, m, h.width, h.height);
                        for(let t = 0; t < 6; t++){
                            v = c[t].mipmaps;
                            for(let e = 0; e < v.length; e++){
                                const r = v[e];
                                n.format !== S1 ? null !== d ? f ? i40.compressedTexSubImage2D(34069 + t, e, 0, 0, r.width, r.height, d, r.data) : i40.compressedTexImage2D(34069 + t, e, m, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : f ? i40.texSubImage2D(34069 + t, e, 0, 0, r.width, r.height, d, p, r.data) : i40.texImage2D(34069 + t, e, m, r.width, r.height, 0, d, p, r.data);
                            }
                        }
                    } else {
                        v = n.mipmaps, f && g && (v.length > 0 && x++, i40.texStorage2D(34067, x, m, c[0].width, c[0].height));
                        for(let t = 0; t < 6; t++)if (r) {
                            f ? i40.texSubImage2D(34069 + t, 0, 0, 0, c[t].width, c[t].height, d, p, c[t].data) : i40.texImage2D(34069 + t, 0, m, c[t].width, c[t].height, 0, d, p, c[t].data);
                            for(let e = 0; e < v.length; e++){
                                const n = v[e].image[t].image;
                                f ? i40.texSubImage2D(34069 + t, e + 1, 0, 0, n.width, n.height, d, p, n.data) : i40.texImage2D(34069 + t, e + 1, m, n.width, n.height, 0, d, p, n.data);
                            }
                        } else {
                            f ? i40.texSubImage2D(34069 + t, 0, 0, 0, d, p, c[t]) : i40.texImage2D(34069 + t, 0, m, d, p, c[t]);
                            for(let e = 0; e < v.length; e++){
                                const n = v[e];
                                f ? i40.texSubImage2D(34069 + t, e + 1, 0, 0, d, p, n.image[t]) : i40.texImage2D(34069 + t, e + 1, m, d, p, n.image[t]);
                            }
                        }
                    }
                    U(n, u) && k(34067), l.__currentVersion = l.version, n.onUpdate && n.onUpdate(n);
                }
                e.__version = n.version;
            }(a14, e70, r26) : (i40.activeTexture(33984 + r26), i40.bindTexture(34067, a14.__webglTexture));
        }, this.rebindTextures = function(t, e, i) {
            const r = n38.get(t);
            void 0 !== e && tt(r.__webglFramebuffer, t, t.texture, 36064, 3553), void 0 !== i && it(t);
        }, this.setupRenderTarget = function(e) {
            const l = e.texture, c = n38.get(e), h = n38.get(l);
            e.addEventListener("dispose", j), !0 !== e.isWebGLMultipleRenderTargets && (void 0 === h.__webglTexture && (h.__webglTexture = t89.createTexture()), h.__version = l.version, a13.memory.textures++);
            const u = !0 === e.isWebGLCubeRenderTarget, d = !0 === e.isWebGLMultipleRenderTargets, p = B(e) || o11;
            if (u) {
                c.__webglFramebuffer = [];
                for(let e = 0; e < 6; e++)c.__webglFramebuffer[e] = t89.createFramebuffer();
            } else {
                if (c.__webglFramebuffer = t89.createFramebuffer(), d) {
                    if (r23.drawBuffers) {
                        const i = e.texture;
                        for(let e71 = 0, r = i.length; e71 < r; e71++){
                            const r = n38.get(i[e71]);
                            void 0 === r.__webglTexture && (r.__webglTexture = t89.createTexture(), a13.memory.textures++);
                        }
                    } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
                }
                if (o11 && e.samples > 0 && !1 === rt(e)) {
                    const n = d ? l : [
                        l
                    ];
                    c.__webglMultisampledFramebuffer = t89.createFramebuffer(), c.__webglColorRenderbuffer = [], i40.bindFramebuffer(36160, c.__webglMultisampledFramebuffer);
                    for(let i = 0; i < n.length; i++){
                        const r = n[i];
                        c.__webglColorRenderbuffer[i] = t89.createRenderbuffer(), t89.bindRenderbuffer(36161, c.__webglColorRenderbuffer[i]);
                        const a = s17.convert(r.format, r.encoding), o = s17.convert(r.type), l = G(r.internalFormat, a, o, r.encoding), h = nt(e);
                        t89.renderbufferStorageMultisample(36161, h, l, e.width, e.height), t89.framebufferRenderbuffer(36160, 36064 + i, 36161, c.__webglColorRenderbuffer[i]);
                    }
                    t89.bindRenderbuffer(36161, null), e.depthBuffer && (c.__webglDepthRenderbuffer = t89.createRenderbuffer(), et(c.__webglDepthRenderbuffer, e, !0)), i40.bindFramebuffer(36160, null);
                }
            }
            if (u) {
                i40.bindTexture(34067, h.__webglTexture), K(34067, l, p);
                for(let t = 0; t < 6; t++)tt(c.__webglFramebuffer[t], e, l, 36064, 34069 + t);
                U(l, p) && k(34067), i40.unbindTexture();
            } else if (d) {
                const t = e.texture;
                for(let r = 0, s = t.length; r < s; r++){
                    const s = t[r], a = n38.get(s);
                    i40.bindTexture(3553, a.__webglTexture), K(3553, s, p), tt(c.__webglFramebuffer, e, s, 36064 + r, 3553), U(s, p) && k(3553);
                }
                i40.unbindTexture();
            } else {
                let t = 3553;
                (e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) && (o11 ? t = e.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), i40.bindTexture(t, h.__webglTexture), K(t, l, p), tt(c.__webglFramebuffer, e, l, 36064, t), U(l, p) && k(t), i40.unbindTexture();
            }
            e.depthBuffer && it(e);
        }, this.updateRenderTargetMipmap = function(t) {
            const e = B(t) || o11, r = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [
                t.texture
            ];
            for(let s = 0, a = r.length; s < a; s++){
                const a = r[s];
                if (U(a, e)) {
                    const e = t.isWebGLCubeRenderTarget ? 34067 : 3553, r = n38.get(a).__webglTexture;
                    i40.bindTexture(e, r), k(e), i40.unbindTexture();
                }
            }
        }, this.updateMultisampleRenderTarget = function(e) {
            if (o11 && e.samples > 0 && !1 === rt(e)) {
                const r = e.isWebGLMultipleRenderTargets ? e.texture : [
                    e.texture
                ], s = e.width, a = e.height;
                let o = 16384;
                const l = [], c = e.stencilBuffer ? 33306 : 36096, h = n38.get(e), u = !0 === e.isWebGLMultipleRenderTargets;
                if (u) for(let e75 = 0; e75 < r.length; e75++)i40.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), t89.framebufferRenderbuffer(36160, 36064 + e75, 36161, null), i40.bindFramebuffer(36160, h.__webglFramebuffer), t89.framebufferTexture2D(36009, 36064 + e75, 3553, null, 0);
                i40.bindFramebuffer(36008, h.__webglMultisampledFramebuffer), i40.bindFramebuffer(36009, h.__webglFramebuffer);
                for(let i = 0; i < r.length; i++){
                    l.push(36064 + i), e.depthBuffer && l.push(c);
                    const d = void 0 !== h.__ignoreDepthValues && h.__ignoreDepthValues;
                    if (!1 === d && (e.depthBuffer && (o |= 256), e.stencilBuffer && (o |= 1024)), u && t89.framebufferRenderbuffer(36008, 36064, 36161, h.__webglColorRenderbuffer[i]), !0 === d && (t89.invalidateFramebuffer(36008, [
                        c
                    ]), t89.invalidateFramebuffer(36009, [
                        c
                    ])), u) {
                        const e = n38.get(r[i]).__webglTexture;
                        t89.framebufferTexture2D(36009, 36064, 3553, e, 0);
                    }
                    t89.blitFramebuffer(0, 0, s, a, 0, 0, s, a, o, 9728), P && t89.invalidateFramebuffer(36008, l);
                }
                if (i40.bindFramebuffer(36008, null), i40.bindFramebuffer(36009, null), u) for(let e74 = 0; e74 < r.length; e74++){
                    i40.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), t89.framebufferRenderbuffer(36160, 36064 + e74, 36161, h.__webglColorRenderbuffer[e74]);
                    const s = n38.get(r[e74]).__webglTexture;
                    i40.bindFramebuffer(36160, h.__webglFramebuffer), t89.framebufferTexture2D(36009, 36064 + e74, 3553, s, 0);
                }
                i40.bindFramebuffer(36009, h.__webglMultisampledFramebuffer);
            }
        }, this.setupDepthRenderbuffer = it, this.setupFrameBufferTexture = tt, this.useMultisampledRTT = rt;
    }
    function Gs(t, e, i42) {
        const n = i42.isWebGL2;
        return {
            convert: function(i, r = null) {
                let s;
                if (i === x1) return 5121;
                if (1017 === i) return 32819;
                if (1018 === i) return 32820;
                if (1010 === i) return 5120;
                if (1011 === i) return 5122;
                if (i === y1) return 5123;
                if (1013 === i) return 5124;
                if (i === _1) return 5125;
                if (i === M1) return 5126;
                if (i === b1) return n ? 5131 : (s = e.get("OES_texture_half_float"), null !== s ? s.HALF_FLOAT_OES : null);
                if (1021 === i) return 6406;
                if (i === S1) return 6408;
                if (1024 === i) return 6409;
                if (1025 === i) return 6410;
                if (i === T1) return 6402;
                if (i === A1) return 34041;
                if (1028 === i) return 6403;
                if (1022 === i) return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
                if (i === pt1) return s = e.get("EXT_sRGB"), null !== s ? s.SRGB_ALPHA_EXT : null;
                if (1029 === i) return 36244;
                if (1030 === i) return 33319;
                if (1031 === i) return 33320;
                if (1033 === i) return 36249;
                if (i === E1 || i === C1 || i === L1 || i === R1) {
                    if (r === ot1) {
                        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === s) return null;
                        if (i === E1) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                        if (i === C1) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                        if (i === L1) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                        if (i === R1) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
                    } else {
                        if (s = e.get("WEBGL_compressed_texture_s3tc"), null === s) return null;
                        if (i === E1) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        if (i === C1) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                        if (i === L1) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                        if (i === R1) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                    }
                }
                if (i === P1 || i === I1 || i === D1 || i === N1) {
                    if (s = e.get("WEBGL_compressed_texture_pvrtc"), null === s) return null;
                    if (i === P1) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (i === I1) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (i === D1) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (i === N1) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                }
                if (36196 === i) return s = e.get("WEBGL_compressed_texture_etc1"), null !== s ? s.COMPRESSED_RGB_ETC1_WEBGL : null;
                if (i === z1 || i === O1) {
                    if (s = e.get("WEBGL_compressed_texture_etc"), null === s) return null;
                    if (i === z1) return r === ot1 ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
                    if (i === O1) return r === ot1 ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
                }
                if (i === F1 || i === B1 || i === U1 || i === k1 || i === G1 || i === V1 || i === H1 || i === W1 || i === j1 || i === q1 || i === X1 || i === J1 || i === Y1 || i === Z1) {
                    if (s = e.get("WEBGL_compressed_texture_astc"), null === s) return null;
                    if (i === F1) return r === ot1 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
                    if (i === B1) return r === ot1 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
                    if (i === U1) return r === ot1 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
                    if (i === k1) return r === ot1 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
                    if (i === G1) return r === ot1 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
                    if (i === V1) return r === ot1 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
                    if (i === H1) return r === ot1 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
                    if (i === W1) return r === ot1 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
                    if (i === j1) return r === ot1 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
                    if (i === q1) return r === ot1 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
                    if (i === X1) return r === ot1 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
                    if (i === J1) return r === ot1 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
                    if (i === Y1) return r === ot1 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
                    if (i === Z1) return r === ot1 ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
                }
                if (i === K1) {
                    if (s = e.get("EXT_texture_compression_bptc"), null === s) return null;
                    if (i === K1) return r === ot1 ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                }
                return i === w1 ? n ? 34042 : (s = e.get("WEBGL_depth_texture"), null !== s ? s.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== t[i] ? t[i] : null;
            }
        };
    }
    class Vs extends rn {
        constructor(t = []){
            super(), this.isArrayCamera = !0, this.cameras = t;
        }
    }
    class Hs extends ni {
        constructor(){
            super(), this.isGroup = !0, this.type = "Group";
        }
    }
    const Ws = {
        type: "move"
    };
    class js {
        constructor(){
            this._targetRay = null, this._grip = null, this._hand = null;
        }
        getHandSpace() {
            return null === this._hand && (this._hand = new Hs, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
                pinching: !1
            }), this._hand;
        }
        getTargetRaySpace() {
            return null === this._targetRay && (this._targetRay = new Hs, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new ee, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new ee), this._targetRay;
        }
        getGripSpace() {
            return null === this._grip && (this._grip = new Hs, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new ee, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new ee), this._grip;
        }
        dispatchEvent(t) {
            return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this;
        }
        disconnect(t) {
            return this.dispatchEvent({
                type: "disconnected",
                data: t
            }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this;
        }
        update(t, e, i) {
            let n = null, r = null, s = null;
            const a = this._targetRay, o = this._grip, l = this._hand;
            if (t && "visible-blurred" !== e.session.visibilityState) {
                if (null !== a && (n = e.getPose(t.targetRaySpace, i), null !== n && (a.matrix.fromArray(n.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), n.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(n.linearVelocity)) : a.hasLinearVelocity = !1, n.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(n.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Ws))), l && t.hand) {
                    s = !0;
                    for (const n of t.hand.values()){
                        const t = e.getJointPose(n, i);
                        if (void 0 === l.joints[n.jointName]) {
                            const t = new Hs;
                            t.matrixAutoUpdate = !1, t.visible = !1, l.joints[n.jointName] = t, l.add(t);
                        }
                        const r = l.joints[n.jointName];
                        null !== t && (r.matrix.fromArray(t.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = t.radius), r.visible = null !== t;
                    }
                    const n39 = l.joints["index-finger-tip"], r = l.joints["thumb-tip"], a = n39.position.distanceTo(r.position), o = .02, c = .005;
                    l.inputState.pinching && a > o + c ? (l.inputState.pinching = !1, this.dispatchEvent({
                        type: "pinchend",
                        handedness: t.handedness,
                        target: this
                    })) : !l.inputState.pinching && a <= o - c && (l.inputState.pinching = !0, this.dispatchEvent({
                        type: "pinchstart",
                        handedness: t.handedness,
                        target: this
                    }));
                } else null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, i), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
            }
            return null !== a && (a.visible = null !== n), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== s), this;
        }
    }
    class qs extends Yt {
        constructor(t, e, i, n, r, s, a, o, l, c){
            if ((c = void 0 !== c ? c : T1) !== T1 && c !== A1) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            void 0 === i && c === T1 && (i = _1), void 0 === i && c === A1 && (i = w1), super(null, n, r, s, a, o, c, i, l), this.isDepthTexture = !0, this.image = {
                width: t,
                height: e
            }, this.magFilter = void 0 !== a ? a : d1, this.minFilter = void 0 !== o ? o : d1, this.flipY = !1, this.generateMipmaps = !1;
        }
    }
    class Xs extends mt1 {
        constructor(t92, e76){
            super();
            const i43 = this;
            let n40 = null, r27 = 1, s19 = null, a15 = "local-floor", o12 = null, l9 = null, c8 = null, h5 = null, u5 = null, d4 = null;
            const p4 = e76.getContextAttributes();
            let m3 = null, f3 = null;
            const g2 = [], v2 = new Map, y3 = new rn;
            y3.layers.enable(1), y3.viewport = new Zt;
            const M2 = new rn;
            M2.layers.enable(2), M2.viewport = new Zt;
            const b = [
                y3,
                M2
            ], E = new Vs;
            E.layers.enable(1), E.layers.enable(2);
            let C = null, L = null;
            function R(t) {
                const e = v2.get(t.inputSource);
                void 0 !== e && e.dispatchEvent({
                    type: t.type,
                    data: t.inputSource
                });
            }
            function P() {
                n40.removeEventListener("select", R), n40.removeEventListener("selectstart", R), n40.removeEventListener("selectend", R), n40.removeEventListener("squeeze", R), n40.removeEventListener("squeezestart", R), n40.removeEventListener("squeezeend", R), n40.removeEventListener("end", P), n40.removeEventListener("inputsourceschange", I), v2.forEach(function(t, e) {
                    void 0 !== t && t.disconnect(e);
                }), v2.clear(), C = null, L = null, t92.setRenderTarget(m3), u5 = null, h5 = null, c8 = null, n40 = null, f3 = null, F.stop(), i43.isPresenting = !1, i43.dispatchEvent({
                    type: "sessionend"
                });
            }
            function I(t) {
                const e = n40.inputSources;
                for(let t93 = 0; t93 < e.length; t93++){
                    const i = "right" === e[t93].handedness ? 1 : 0;
                    v2.set(e[t93], g2[i]);
                }
                for(let e77 = 0; e77 < t.removed.length; e77++){
                    const i = t.removed[e77], n = v2.get(i);
                    n && (n.dispatchEvent({
                        type: "disconnected",
                        data: i
                    }), v2.delete(i));
                }
                for(let e78 = 0; e78 < t.added.length; e78++){
                    const i = t.added[e78], n = v2.get(i);
                    n && n.dispatchEvent({
                        type: "connected",
                        data: i
                    });
                }
            }
            this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(t) {
                let e = g2[t];
                return void 0 === e && (e = new js, g2[t] = e), e.getTargetRaySpace();
            }, this.getControllerGrip = function(t) {
                let e = g2[t];
                return void 0 === e && (e = new js, g2[t] = e), e.getGripSpace();
            }, this.getHand = function(t) {
                let e = g2[t];
                return void 0 === e && (e = new js, g2[t] = e), e.getHandSpace();
            }, this.setFramebufferScaleFactor = function(t) {
                r27 = t, !0 === i43.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
            }, this.setReferenceSpaceType = function(t) {
                a15 = t, !0 === i43.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
            }, this.getReferenceSpace = function() {
                return o12 || s19;
            }, this.setReferenceSpace = function(t) {
                o12 = t;
            }, this.getBaseLayer = function() {
                return null !== h5 ? h5 : u5;
            }, this.getBinding = function() {
                return c8;
            }, this.getFrame = function() {
                return d4;
            }, this.getSession = function() {
                return n40;
            }, this.setSession = async function(l) {
                if (n40 = l, null !== n40) {
                    if (m3 = t92.getRenderTarget(), n40.addEventListener("select", R), n40.addEventListener("selectstart", R), n40.addEventListener("selectend", R), n40.addEventListener("squeeze", R), n40.addEventListener("squeezestart", R), n40.addEventListener("squeezeend", R), n40.addEventListener("end", P), n40.addEventListener("inputsourceschange", I), !0 !== p4.xrCompatible && await e76.makeXRCompatible(), void 0 === n40.renderState.layers || !1 === t92.capabilities.isWebGL2) {
                        const i = {
                            antialias: void 0 !== n40.renderState.layers || p4.antialias,
                            alpha: p4.alpha,
                            depth: p4.depth,
                            stencil: p4.stencil,
                            framebufferScaleFactor: r27
                        };
                        u5 = new XRWebGLLayer(n40, e76, i), n40.updateRenderState({
                            baseLayer: u5
                        }), f3 = new Kt(u5.framebufferWidth, u5.framebufferHeight, {
                            format: S1,
                            type: x1,
                            encoding: t92.outputEncoding
                        });
                    } else {
                        let i = null, s = null, a = null;
                        p4.depth && (a = p4.stencil ? 35056 : 33190, i = p4.stencil ? A1 : T1, s = p4.stencil ? w1 : _1);
                        const o = {
                            colorFormat: t92.outputEncoding === ot1 ? 35907 : 32856,
                            depthFormat: a,
                            scaleFactor: r27
                        };
                        c8 = new XRWebGLBinding(n40, e76), h5 = c8.createProjectionLayer(o), n40.updateRenderState({
                            layers: [
                                h5
                            ]
                        }), f3 = new Kt(h5.textureWidth, h5.textureHeight, {
                            format: S1,
                            type: x1,
                            depthTexture: new qs(h5.textureWidth, h5.textureHeight, s, void 0, void 0, void 0, void 0, void 0, void 0, i),
                            stencilBuffer: p4.stencil,
                            encoding: t92.outputEncoding,
                            samples: p4.antialias ? 4 : 0
                        });
                        t92.properties.get(f3).__ignoreDepthValues = h5.ignoreDepthValues;
                    }
                    f3.isXRRenderTarget = !0, this.setFoveation(1), o12 = null, s19 = await n40.requestReferenceSpace(a15), F.setContext(n40), F.start(), i43.isPresenting = !0, i43.dispatchEvent({
                        type: "sessionstart"
                    });
                }
            };
            const D = new ee, N = new ee;
            function z(t, e) {
                null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert();
            }
            this.updateCamera = function(t96) {
                if (null === n40) return;
                E.near = M2.near = y3.near = t96.near, E.far = M2.far = y3.far = t96.far, C === E.near && L === E.far || (n40.updateRenderState({
                    depthNear: E.near,
                    depthFar: E.far
                }), C = E.near, L = E.far);
                const e80 = t96.parent, i44 = E.cameras;
                z(E, e80);
                for(let t94 = 0; t94 < i44.length; t94++)z(i44[t94], e80);
                E.matrixWorld.decompose(E.position, E.quaternion, E.scale), t96.position.copy(E.position), t96.quaternion.copy(E.quaternion), t96.scale.copy(E.scale), t96.matrix.copy(E.matrix), t96.matrixWorld.copy(E.matrixWorld);
                const r28 = t96.children;
                for(let t95 = 0, e79 = r28.length; t95 < e79; t95++)r28[t95].updateMatrixWorld(!0);
                2 === i44.length ? function(t, e, i) {
                    D.setFromMatrixPosition(e.matrixWorld), N.setFromMatrixPosition(i.matrixWorld);
                    const n = D.distanceTo(N), r = e.projectionMatrix.elements, s = i.projectionMatrix.elements, a = r[14] / (r[10] - 1), o = r[14] / (r[10] + 1), l = (r[9] + 1) / r[5], c = (r[9] - 1) / r[5], h = (r[8] - 1) / r[0], u = (s[8] + 1) / s[0], d = a * h, p = a * u, m = n / (-h + u), f = m * -h;
                    e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(f), t.translateZ(m), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
                    const g = a + m, v = o + m, x = d - f, y = p + (n - f), _ = l * o / v * g, M = c * o / v * g;
                    t.projectionMatrix.makePerspective(x, y, _, M, g, v);
                }(E, y3, M2) : E.projectionMatrix.copy(y3.projectionMatrix);
            }, this.getCamera = function() {
                return E;
            }, this.getFoveation = function() {
                return null !== h5 ? h5.fixedFoveation : null !== u5 ? u5.fixedFoveation : void 0;
            }, this.setFoveation = function(t) {
                null !== h5 && (h5.fixedFoveation = t), null !== u5 && void 0 !== u5.fixedFoveation && (u5.fixedFoveation = t);
            };
            let O = null;
            const F = new gn;
            F.setAnimationLoop(function(e, i) {
                if (l9 = i.getViewerPose(o12 || s19), d4 = i, null !== l9) {
                    const e = l9.views;
                    null !== u5 && (t92.setRenderTargetFramebuffer(f3, u5.framebuffer), t92.setRenderTarget(f3));
                    let i = !1;
                    e.length !== E.cameras.length && (E.cameras.length = 0, i = !0);
                    for(let n = 0; n < e.length; n++){
                        const r = e[n];
                        let s = null;
                        if (null !== u5) s = u5.getViewport(r);
                        else {
                            const e = c8.getViewSubImage(h5, r);
                            s = e.viewport, 0 === n && (t92.setRenderTargetTextures(f3, e.colorTexture, h5.ignoreDepthValues ? void 0 : e.depthStencilTexture), t92.setRenderTarget(f3));
                        }
                        let a = b[n];
                        void 0 === a && (a = new rn, a.layers.enable(n), a.viewport = new Zt, b[n] = a), a.matrix.fromArray(r.transform.matrix), a.projectionMatrix.fromArray(r.projectionMatrix), a.viewport.set(s.x, s.y, s.width, s.height), 0 === n && E.matrix.copy(a.matrix), !0 === i && E.cameras.push(a);
                    }
                }
                const r = n40.inputSources;
                for(let t = 0; t < g2.length; t++){
                    const e = r[t], n = v2.get(e);
                    void 0 !== n && n.update(e, i, o12 || s19);
                }
                O && O(e, i), d4 = null;
            }), this.setAnimationLoop = function(t) {
                O = t;
            }, this.dispose = function() {};
        }
    }
    function Js(t97, e81) {
        function i45(i, n) {
            i.opacity.value = n.opacity, n.color && i.diffuse.value.copy(n.color), n.emissive && i.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (i.map.value = n.map), n.alphaMap && (i.alphaMap.value = n.alphaMap), n.bumpMap && (i.bumpMap.value = n.bumpMap, i.bumpScale.value = n.bumpScale, 1 === n.side && (i.bumpScale.value *= -1)), n.displacementMap && (i.displacementMap.value = n.displacementMap, i.displacementScale.value = n.displacementScale, i.displacementBias.value = n.displacementBias), n.emissiveMap && (i.emissiveMap.value = n.emissiveMap), n.normalMap && (i.normalMap.value = n.normalMap, i.normalScale.value.copy(n.normalScale), 1 === n.side && i.normalScale.value.negate()), n.specularMap && (i.specularMap.value = n.specularMap), n.alphaTest > 0 && (i.alphaTest.value = n.alphaTest);
            const r = e81.get(n).envMap;
            if (r && (i.envMap.value = r, i.flipEnvMap.value = r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1, i.reflectivity.value = n.reflectivity, i.ior.value = n.ior, i.refractionRatio.value = n.refractionRatio), n.lightMap) {
                i.lightMap.value = n.lightMap;
                const e = !0 !== t97.physicallyCorrectLights ? Math.PI : 1;
                i.lightMapIntensity.value = n.lightMapIntensity * e;
            }
            let s, a;
            n.aoMap && (i.aoMap.value = n.aoMap, i.aoMapIntensity.value = n.aoMapIntensity), n.map ? s = n.map : n.specularMap ? s = n.specularMap : n.displacementMap ? s = n.displacementMap : n.normalMap ? s = n.normalMap : n.bumpMap ? s = n.bumpMap : n.roughnessMap ? s = n.roughnessMap : n.metalnessMap ? s = n.metalnessMap : n.alphaMap ? s = n.alphaMap : n.emissiveMap ? s = n.emissiveMap : n.clearcoatMap ? s = n.clearcoatMap : n.clearcoatNormalMap ? s = n.clearcoatNormalMap : n.clearcoatRoughnessMap ? s = n.clearcoatRoughnessMap : n.iridescenceMap ? s = n.iridescenceMap : n.iridescenceThicknessMap ? s = n.iridescenceThicknessMap : n.specularIntensityMap ? s = n.specularIntensityMap : n.specularColorMap ? s = n.specularColorMap : n.transmissionMap ? s = n.transmissionMap : n.thicknessMap ? s = n.thicknessMap : n.sheenColorMap ? s = n.sheenColorMap : n.sheenRoughnessMap && (s = n.sheenRoughnessMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), i.uvTransform.value.copy(s.matrix)), n.aoMap ? a = n.aoMap : n.lightMap && (a = n.lightMap), void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), i.uv2Transform.value.copy(a.matrix));
        }
        return {
            refreshFogUniforms: function(t, e) {
                t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density);
            },
            refreshMaterialUniforms: function(t98, n41, r29, s, a) {
                n41.isMeshBasicMaterial || n41.isMeshLambertMaterial ? i45(t98, n41) : n41.isMeshToonMaterial ? (i45(t98, n41), function(t, e) {
                    e.gradientMap && (t.gradientMap.value = e.gradientMap);
                }(t98, n41)) : n41.isMeshPhongMaterial ? (i45(t98, n41), function(t, e) {
                    t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4);
                }(t98, n41)) : n41.isMeshStandardMaterial ? (i45(t98, n41), function(t, i) {
                    t.roughness.value = i.roughness, t.metalness.value = i.metalness, i.roughnessMap && (t.roughnessMap.value = i.roughnessMap);
                    i.metalnessMap && (t.metalnessMap.value = i.metalnessMap);
                    e81.get(i).envMap && (t.envMapIntensity.value = i.envMapIntensity);
                }(t98, n41), n41.isMeshPhysicalMaterial && function(t, e, i) {
                    t.ior.value = e.ior, e.sheen > 0 && (t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen), t.sheenRoughness.value = e.sheenRoughness, e.sheenColorMap && (t.sheenColorMap.value = e.sheenColorMap), e.sheenRoughnessMap && (t.sheenRoughnessMap.value = e.sheenRoughnessMap));
                    e.clearcoat > 0 && (t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap), e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap), e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate()));
                    e.iridescence > 0 && (t.iridescence.value = e.iridescence, t.iridescenceIOR.value = e.iridescenceIOR, t.iridescenceThicknessMinimum.value = e.iridescenceThicknessRange[0], t.iridescenceThicknessMaximum.value = e.iridescenceThicknessRange[1], e.iridescenceMap && (t.iridescenceMap.value = e.iridescenceMap), e.iridescenceThicknessMap && (t.iridescenceThicknessMap.value = e.iridescenceThicknessMap));
                    e.transmission > 0 && (t.transmission.value = e.transmission, t.transmissionSamplerMap.value = i.texture, t.transmissionSamplerSize.value.set(i.width, i.height), e.transmissionMap && (t.transmissionMap.value = e.transmissionMap), t.thickness.value = e.thickness, e.thicknessMap && (t.thicknessMap.value = e.thicknessMap), t.attenuationDistance.value = e.attenuationDistance, t.attenuationColor.value.copy(e.attenuationColor));
                    t.specularIntensity.value = e.specularIntensity, t.specularColor.value.copy(e.specularColor), e.specularIntensityMap && (t.specularIntensityMap.value = e.specularIntensityMap);
                    e.specularColorMap && (t.specularColorMap.value = e.specularColorMap);
                }(t98, n41, a)) : n41.isMeshMatcapMaterial ? (i45(t98, n41), function(t, e) {
                    e.matcap && (t.matcap.value = e.matcap);
                }(t98, n41)) : n41.isMeshDepthMaterial ? i45(t98, n41) : n41.isMeshDistanceMaterial ? (i45(t98, n41), function(t, e) {
                    t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance;
                }(t98, n41)) : n41.isMeshNormalMaterial ? i45(t98, n41) : n41.isLineBasicMaterial ? (function(t, e) {
                    t.diffuse.value.copy(e.color), t.opacity.value = e.opacity;
                }(t98, n41), n41.isLineDashedMaterial && function(t, e) {
                    t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale;
                }(t98, n41)) : n41.isPointsMaterial ? function(t, e, i, n) {
                    t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * i, t.scale.value = .5 * n, e.map && (t.map.value = e.map);
                    e.alphaMap && (t.alphaMap.value = e.alphaMap);
                    e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
                    let r;
                    e.map ? r = e.map : e.alphaMap && (r = e.alphaMap);
                    void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix));
                }(t98, n41, r29, s) : n41.isSpriteMaterial ? function(t, e) {
                    t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map);
                    e.alphaMap && (t.alphaMap.value = e.alphaMap);
                    e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
                    let i;
                    e.map ? i = e.map : e.alphaMap && (i = e.alphaMap);
                    void 0 !== i && (!0 === i.matrixAutoUpdate && i.updateMatrix(), t.uvTransform.value.copy(i.matrix));
                }(t98, n41) : n41.isShadowMaterial ? (t98.color.value.copy(n41.color), t98.opacity.value = n41.opacity) : n41.isShaderMaterial && (n41.uniformsNeedUpdate = !1);
            }
        };
    }
    function Ys(t99 = {}) {
        this.isWebGLRenderer = !0;
        const e82 = void 0 !== t99.canvas ? t99.canvas : function() {
            const t = It("canvas");
            return t.style.display = "block", t;
        }(), i46 = void 0 !== t99.context ? t99.context : null, n42 = void 0 === t99.depth || t99.depth, r30 = void 0 === t99.stencil || t99.stencil, s20 = void 0 !== t99.antialias && t99.antialias, a16 = void 0 === t99.premultipliedAlpha || t99.premultipliedAlpha, o13 = void 0 !== t99.preserveDrawingBuffer && t99.preserveDrawingBuffer, l10 = void 0 !== t99.powerPreference ? t99.powerPreference : "default", c9 = void 0 !== t99.failIfMajorPerformanceCaveat && t99.failIfMajorPerformanceCaveat;
        let h6;
        h6 = null !== i46 ? i46.getContextAttributes().alpha : void 0 !== t99.alpha && t99.alpha;
        let u6 = null, d5 = null;
        const p5 = [], m4 = [];
        this.domElement = e82, this.debug = {
            checkShaderErrors: !0
        }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = at, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1, Object.defineProperties(this, {
            gammaFactor: {
                get: function() {
                    return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2;
                },
                set: function() {
                    console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
                }
            }
        });
        const f = this;
        let g3 = !1, y4 = 0, _3 = 0, w = null, T = -1, A = null;
        const E3 = new Zt, C2 = new Zt;
        let L3 = null, R2 = e82.width, P = e82.height, I = 1, D2 = null, N2 = null;
        const z2 = new Zt(0, 0, R2, P), O = new Zt(0, 0, R2, P);
        let F = !1;
        const B = new fn;
        let U = !1, k = !1, G = null;
        const V = new Ie, H = new Et, W = new ee, j = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };
        function q() {
            return null === w ? I : 1;
        }
        let X, J, Y, Z, K, Q, $, tt, et, it, nt, rt, st, ot, lt, ct, ht, ut, dt, pt, mt, ft, gt, vt = i46;
        function xt(t, i) {
            for(let n = 0; n < t.length; n++){
                const r = t[n], s = e82.getContext(r, i);
                if (null !== s) return s;
            }
            return null;
        }
        try {
            const t = {
                alpha: !0,
                depth: n42,
                stencil: r30,
                antialias: s20,
                premultipliedAlpha: a16,
                preserveDrawingBuffer: o13,
                powerPreference: l10,
                failIfMajorPerformanceCaveat: c9
            };
            if ("setAttribute" in e82 && e82.setAttribute("data-engine", "three.js r141"), e82.addEventListener("webglcontextlost", Mt, !1), e82.addEventListener("webglcontextrestored", bt, !1), e82.addEventListener("webglcontextcreationerror", wt, !1), null === vt) {
                const e = [
                    "webgl2",
                    "webgl",
                    "experimental-webgl"
                ];
                if (!0 === f.isWebGL1Renderer && e.shift(), vt = xt(e, t), null === vt) throw xt(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
            }
            void 0 === vt.getShaderPrecisionFormat && (vt.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                };
            });
        } catch (t100) {
            throw console.error("THREE.WebGLRenderer: " + t100.message), t100;
        }
        function yt() {
            X = new Wn(vt), J = new Tn(vt, X, t99), X.init(J), ft = new Gs(vt, X, J), Y = new Us(vt, X, J), Z = new Xn(vt), K = new Ts, Q = new ks(vt, X, Y, K, J, ft, Z), $ = new En(f), tt = new Hn(f), et = new vn(vt, J), gt = new wn(vt, X, et, J), it = new jn(vt, et, Z, gt), nt = new Qn(vt, it, et, Z), dt = new Kn(vt, J, Q), ct = new An(K), rt = new Ss(f, $, tt, X, J, gt, ct), st = new Js(f, K), ot = new Ls, lt = new zs(X, J), ut = new bn(f, $, Y, nt, h6, a16), ht = new Bs(f, nt, J), pt = new Sn(vt, X, Z, J), mt = new qn(vt, X, Z, J), Z.programs = rt.programs, f.capabilities = J, f.extensions = X, f.properties = K, f.renderLists = ot, f.shadowMap = ht, f.state = Y, f.info = Z;
        }
        yt();
        const _t = new Xs(f, vt);
        function Mt(t) {
            t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), g3 = !0;
        }
        function bt() {
            console.log("THREE.WebGLRenderer: Context Restored."), g3 = !1;
            const t = Z.autoReset, e = ht.enabled, i = ht.autoUpdate, n = ht.needsUpdate, r = ht.type;
            yt(), Z.autoReset = t, ht.enabled = e, ht.autoUpdate = i, ht.needsUpdate = n, ht.type = r;
        }
        function wt(t) {
            console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", t.statusMessage);
        }
        function St(t101) {
            const e83 = t101.target;
            e83.removeEventListener("dispose", St), function(t102) {
                (function(t103) {
                    const e = K.get(t103).programs;
                    void 0 !== e && (e.forEach(function(t) {
                        rt.releaseProgram(t);
                    }), t103.isShaderMaterial && rt.releaseShaderCache(t103));
                })(t102), K.remove(t102);
            }(e83);
        }
        this.xr = _t, this.getContext = function() {
            return vt;
        }, this.getContextAttributes = function() {
            return vt.getContextAttributes();
        }, this.forceContextLoss = function() {
            const t = X.get("WEBGL_lose_context");
            t && t.loseContext();
        }, this.forceContextRestore = function() {
            const t = X.get("WEBGL_lose_context");
            t && t.restoreContext();
        }, this.getPixelRatio = function() {
            return I;
        }, this.setPixelRatio = function(t) {
            void 0 !== t && (I = t, this.setSize(R2, P, !1));
        }, this.getSize = function(t) {
            return t.set(R2, P);
        }, this.setSize = function(t, i, n) {
            _t.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (R2 = t, P = i, e82.width = Math.floor(t * I), e82.height = Math.floor(i * I), !1 !== n && (e82.style.width = t + "px", e82.style.height = i + "px"), this.setViewport(0, 0, t, i));
        }, this.getDrawingBufferSize = function(t) {
            return t.set(R2 * I, P * I).floor();
        }, this.setDrawingBufferSize = function(t, i, n) {
            R2 = t, P = i, I = n, e82.width = Math.floor(t * n), e82.height = Math.floor(i * n), this.setViewport(0, 0, t, i);
        }, this.getCurrentViewport = function(t) {
            return t.copy(E3);
        }, this.getViewport = function(t) {
            return t.copy(z2);
        }, this.setViewport = function(t, e, i, n) {
            t.isVector4 ? z2.set(t.x, t.y, t.z, t.w) : z2.set(t, e, i, n), Y.viewport(E3.copy(z2).multiplyScalar(I).floor());
        }, this.getScissor = function(t) {
            return t.copy(O);
        }, this.setScissor = function(t, e, i, n) {
            t.isVector4 ? O.set(t.x, t.y, t.z, t.w) : O.set(t, e, i, n), Y.scissor(C2.copy(O).multiplyScalar(I).floor());
        }, this.getScissorTest = function() {
            return F;
        }, this.setScissorTest = function(t) {
            Y.setScissorTest(F = t);
        }, this.setOpaqueSort = function(t) {
            D2 = t;
        }, this.setTransparentSort = function(t) {
            N2 = t;
        }, this.getClearColor = function(t) {
            return t.copy(ut.getClearColor());
        }, this.setClearColor = function() {
            ut.setClearColor.apply(ut, arguments);
        }, this.getClearAlpha = function() {
            return ut.getClearAlpha();
        }, this.setClearAlpha = function() {
            ut.setClearAlpha.apply(ut, arguments);
        }, this.clear = function(t = !0, e = !0, i = !0) {
            let n = 0;
            t && (n |= 16384), e && (n |= 256), i && (n |= 1024), vt.clear(n);
        }, this.clearColor = function() {
            this.clear(!0, !1, !1);
        }, this.clearDepth = function() {
            this.clear(!1, !0, !1);
        }, this.clearStencil = function() {
            this.clear(!1, !1, !0);
        }, this.dispose = function() {
            e82.removeEventListener("webglcontextlost", Mt, !1), e82.removeEventListener("webglcontextrestored", bt, !1), e82.removeEventListener("webglcontextcreationerror", wt, !1), ot.dispose(), lt.dispose(), K.dispose(), $.dispose(), tt.dispose(), nt.dispose(), gt.dispose(), rt.dispose(), _t.dispose(), _t.removeEventListener("sessionstart", Ct), _t.removeEventListener("sessionend", Lt), G && (G.dispose(), G = null), Rt.stop();
        }, this.renderBufferDirect = function(t104, e84, i47, n43, r31, s21) {
            null === e84 && (e84 = j);
            const a17 = r31.isMesh && r31.matrixWorld.determinant() < 0, o14 = function(t, e, i, n, r) {
                !0 !== e.isScene && (e = j);
                Q.resetTextureUnits();
                const s = e.fog, a = n.isMeshStandardMaterial ? e.environment : null, o = null === w ? f.outputEncoding : !0 === w.isXRRenderTarget ? w.texture.encoding : at, l = (n.isMeshStandardMaterial ? tt : $).get(n.envMap || a), c = !0 === n.vertexColors && !!i.attributes.color && 4 === i.attributes.color.itemSize, h = !!n.normalMap && !!i.attributes.tangent, u = !!i.morphAttributes.position, p = !!i.morphAttributes.normal, m = !!i.morphAttributes.color, g = n.toneMapped ? f.toneMapping : 0, v = i.morphAttributes.position || i.morphAttributes.normal || i.morphAttributes.color, x = void 0 !== v ? v.length : 0, y = K.get(n), _ = d5.state.lights;
                if (!0 === U && (!0 === k || t !== A)) {
                    const e = t === A && n.id === T;
                    ct.setState(n, t, e);
                }
                let M = !1;
                n.version === y.__version ? y.needsLights && y.lightsStateVersion !== _.state.version || y.outputEncoding !== o || r.isInstancedMesh && !1 === y.instancing ? M = !0 : r.isInstancedMesh || !0 !== y.instancing ? r.isSkinnedMesh && !1 === y.skinning ? M = !0 : r.isSkinnedMesh || !0 !== y.skinning ? y.envMap !== l || !0 === n.fog && y.fog !== s ? M = !0 : void 0 === y.numClippingPlanes || y.numClippingPlanes === ct.numPlanes && y.numIntersection === ct.numIntersection ? (y.vertexAlphas !== c || y.vertexTangents !== h || y.morphTargets !== u || y.morphNormals !== p || y.morphColors !== m || y.toneMapping !== g || !0 === J.isWebGL2 && y.morphTargetsCount !== x) && (M = !0) : M = !0 : M = !0 : M = !0 : (M = !0, y.__version = n.version);
                let b = y.currentProgram;
                !0 === M && (b = Ot(n, e, r));
                let S = !1, E = !1, C = !1;
                const L = b.getUniforms(), R = y.uniforms;
                Y.useProgram(b.program) && (S = !0, E = !0, C = !0);
                n.id !== T && (T = n.id, E = !0);
                if (S || A !== t) {
                    if (L.setValue(vt, "projectionMatrix", t.projectionMatrix), J.logarithmicDepthBuffer && L.setValue(vt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), A !== t && (A = t, E = !0, C = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
                        const e = L.map.cameraPosition;
                        void 0 !== e && e.setValue(vt, W.setFromMatrixPosition(t.matrixWorld));
                    }
                    (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && L.setValue(vt, "isOrthographic", !0 === t.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || r.isSkinnedMesh) && L.setValue(vt, "viewMatrix", t.matrixWorldInverse);
                }
                if (r.isSkinnedMesh) {
                    L.setOptional(vt, r, "bindMatrix"), L.setOptional(vt, r, "bindMatrixInverse");
                    const t = r.skeleton;
                    t && (J.floatVertexTextures ? (null === t.boneTexture && t.computeBoneTexture(), L.setValue(vt, "boneTexture", t.boneTexture, Q), L.setValue(vt, "boneTextureSize", t.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
                }
                const D = i.morphAttributes;
                (void 0 !== D.position || void 0 !== D.normal || void 0 !== D.color && !0 === J.isWebGL2) && dt.update(r, i, n, b);
                (E || y.receiveShadow !== r.receiveShadow) && (y.receiveShadow = r.receiveShadow, L.setValue(vt, "receiveShadow", r.receiveShadow));
                E && (L.setValue(vt, "toneMappingExposure", f.toneMappingExposure), y.needsLights && (z = C, (N = R).ambientLightColor.needsUpdate = z, N.lightProbe.needsUpdate = z, N.directionalLights.needsUpdate = z, N.directionalLightShadows.needsUpdate = z, N.pointLights.needsUpdate = z, N.pointLightShadows.needsUpdate = z, N.spotLights.needsUpdate = z, N.spotLightShadows.needsUpdate = z, N.rectAreaLights.needsUpdate = z, N.hemisphereLights.needsUpdate = z), s && !0 === n.fog && st.refreshFogUniforms(R, s), st.refreshMaterialUniforms(R, n, I, P, G), is.upload(vt, y.uniformsList, R, Q));
                var N, z;
                n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (is.upload(vt, y.uniformsList, R, Q), n.uniformsNeedUpdate = !1);
                n.isSpriteMaterial && L.setValue(vt, "center", r.center);
                return L.setValue(vt, "modelViewMatrix", r.modelViewMatrix), L.setValue(vt, "normalMatrix", r.normalMatrix), L.setValue(vt, "modelMatrix", r.matrixWorld), b;
            }(t104, e84, i47, n43, r31);
            Y.setMaterial(n43, a17);
            let l11 = i47.index;
            const c10 = i47.attributes.position;
            if (null === l11) {
                if (void 0 === c10 || 0 === c10.count) return;
            } else if (0 === l11.count) return;
            let h7, u7 = 1;
            !0 === n43.wireframe && (l11 = it.getWireframeAttribute(i47), u7 = 2), gt.setup(r31, n43, o14, i47, l11);
            let p6 = pt;
            null !== l11 && (h7 = et.get(l11), p6 = mt, p6.setIndex(h7));
            const m5 = null !== l11 ? l11.count : c10.count, g4 = i47.drawRange.start * u7, v3 = i47.drawRange.count * u7, x2 = null !== s21 ? s21.start * u7 : 0, y5 = null !== s21 ? s21.count * u7 : 1 / 0, _4 = Math.max(g4, x2), M3 = Math.min(m5, g4 + v3, x2 + y5) - 1, b2 = Math.max(0, M3 - _4 + 1);
            if (0 !== b2) {
                if (r31.isMesh) !0 === n43.wireframe ? (Y.setLineWidth(n43.wireframeLinewidth * q()), p6.setMode(1)) : p6.setMode(4);
                else if (r31.isLine) {
                    let t = n43.linewidth;
                    void 0 === t && (t = 1), Y.setLineWidth(t * q()), r31.isLineSegments ? p6.setMode(1) : r31.isLineLoop ? p6.setMode(2) : p6.setMode(3);
                } else r31.isPoints ? p6.setMode(0) : r31.isSprite && p6.setMode(4);
                if (r31.isInstancedMesh) p6.renderInstances(_4, b2, r31.count);
                else if (i47.isInstancedBufferGeometry) {
                    const t = Math.min(i47.instanceCount, i47._maxInstanceCount);
                    p6.renderInstances(_4, b2, t);
                } else p6.render(_4, b2);
            }
        }, this.compile = function(t105, e85) {
            d5 = lt.get(t105), d5.init(), m4.push(d5), t105.traverseVisible(function(t) {
                t.isLight && t.layers.test(e85.layers) && (d5.pushLight(t), t.castShadow && d5.pushShadow(t));
            }), d5.setupLights(f.physicallyCorrectLights), t105.traverse(function(e) {
                const i = e.material;
                if (i) {
                    if (Array.isArray(i)) for(let n = 0; n < i.length; n++)Ot(i[n], t105, e);
                    else Ot(i, t105, e);
                }
            }), m4.pop(), d5 = null;
        };
        let At = null;
        function Ct() {
            Rt.stop();
        }
        function Lt() {
            Rt.start();
        }
        const Rt = new gn;
        function Pt(t, e, i, n) {
            if (!1 === t.visible) return;
            if (t.layers.test(e.layers)) {
                if (t.isGroup) i = t.renderOrder;
                else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
                else if (t.isLight) d5.pushLight(t), t.castShadow && d5.pushShadow(t);
                else if (t.isSprite) {
                    if (!t.frustumCulled || B.intersectsSprite(t)) {
                        n && W.setFromMatrixPosition(t.matrixWorld).applyMatrix4(V);
                        const e = nt.update(t), r = t.material;
                        r.visible && u6.push(t, e, r, i, W.z, null);
                    }
                } else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== Z.render.frame && (t.skeleton.update(), t.skeleton.frame = Z.render.frame), !t.frustumCulled || B.intersectsObject(t))) {
                    n && W.setFromMatrixPosition(t.matrixWorld).applyMatrix4(V);
                    const e = nt.update(t), r = t.material;
                    if (Array.isArray(r)) {
                        const n = e.groups;
                        for(let s = 0, a = n.length; s < a; s++){
                            const a = n[s], o = r[a.materialIndex];
                            o && o.visible && u6.push(t, e, o, i, W.z, a);
                        }
                    } else r.visible && u6.push(t, e, r, i, W.z, null);
                }
            }
            const r = t.children;
            for(let t106 = 0, s = r.length; t106 < s; t106++)Pt(r[t106], e, i, n);
        }
        function Dt(t107, e86, i48, n44) {
            const r32 = t107.opaque, a18 = t107.transmissive, o = t107.transparent;
            d5.setupLightsView(i48), a18.length > 0 && function(t, e, i) {
                const n = J.isWebGL2;
                null === G && (G = new Kt(1, 1, {
                    generateMipmaps: !0,
                    type: X.has("EXT_color_buffer_half_float") ? b1 : x1,
                    minFilter: v1,
                    samples: n && !0 === s20 ? 4 : 0
                }));
                f.getDrawingBufferSize(H), n ? G.setSize(H.x, H.y) : G.setSize(Tt(H.x), Tt(H.y));
                const r = f.getRenderTarget();
                f.setRenderTarget(G), f.clear();
                const a = f.toneMapping;
                f.toneMapping = 0, Nt(t, e, i), f.toneMapping = a, Q.updateMultisampleRenderTarget(G), Q.updateRenderTargetMipmap(G), f.setRenderTarget(r);
            }(r32, e86, i48), n44 && Y.viewport(E3.copy(n44)), r32.length > 0 && Nt(r32, e86, i48), a18.length > 0 && Nt(a18, e86, i48), o.length > 0 && Nt(o, e86, i48), Y.buffers.depth.setTest(!0), Y.buffers.depth.setMask(!0), Y.buffers.color.setMask(!0), Y.setPolygonOffset(!1);
        }
        function Nt(t, e, i) {
            const n = !0 === e.isScene ? e.overrideMaterial : null;
            for(let r = 0, s = t.length; r < s; r++){
                const s = t[r], a = s.object, o = s.geometry, l = null === n ? s.material : n, c = s.group;
                a.layers.test(i.layers) && zt(a, e, i, o, l, c);
            }
        }
        function zt(t, e, i, n, r, s) {
            t.onBeforeRender(f, e, i, n, r, s), t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), r.onBeforeRender(f, e, i, n, t, s), !0 === r.transparent && 2 === r.side ? (r.side = 1, r.needsUpdate = !0, f.renderBufferDirect(i, e, n, r, t, s), r.side = 0, r.needsUpdate = !0, f.renderBufferDirect(i, e, n, r, t, s), r.side = 2) : f.renderBufferDirect(i, e, n, r, t, s), t.onAfterRender(f, e, i, n, r, s);
        }
        function Ot(t108, e, i) {
            !0 !== e.isScene && (e = j);
            const n = K.get(t108), r = d5.state.lights, s = d5.state.shadowsArray, a = r.state.version, o = rt.getParameters(t108, r.state, s, e, i), l = rt.getProgramCacheKey(o);
            let c = n.programs;
            n.environment = t108.isMeshStandardMaterial ? e.environment : null, n.fog = e.fog, n.envMap = (t108.isMeshStandardMaterial ? tt : $).get(t108.envMap || n.environment), void 0 === c && (t108.addEventListener("dispose", St), c = new Map, n.programs = c);
            let h = c.get(l);
            if (void 0 !== h) {
                if (n.currentProgram === h && n.lightsStateVersion === a) return Ft(t108, o), h;
            } else o.uniforms = rt.getUniforms(t108), t108.onBuild(i, o, f), t108.onBeforeCompile(o, f), h = rt.acquireProgram(o, l), c.set(l, h), n.uniforms = o.uniforms;
            const u = n.uniforms;
            (t108.isShaderMaterial || t108.isRawShaderMaterial) && !0 !== t108.clipping || (u.clippingPlanes = ct.uniform), Ft(t108, o), n.needsLights = function(t) {
                return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights;
            }(t108), n.lightsStateVersion = a, n.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotShadowMatrix.value = r.state.spotShadowMatrix, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix);
            const p = h.getUniforms(), m = is.seqWithValue(p.seq, u);
            return n.currentProgram = h, n.uniformsList = m, h;
        }
        function Ft(t, e) {
            const i = K.get(t);
            i.outputEncoding = e.outputEncoding, i.instancing = e.instancing, i.skinning = e.skinning, i.morphTargets = e.morphTargets, i.morphNormals = e.morphNormals, i.morphColors = e.morphColors, i.morphTargetsCount = e.morphTargetsCount, i.numClippingPlanes = e.numClippingPlanes, i.numIntersection = e.numClipIntersection, i.vertexAlphas = e.vertexAlphas, i.vertexTangents = e.vertexTangents, i.toneMapping = e.toneMapping;
        }
        Rt.setAnimationLoop(function(t) {
            At && At(t);
        }), "undefined" != typeof self && Rt.setContext(self), this.setAnimationLoop = function(t) {
            At = t, _t.setAnimationLoop(t), null === t ? Rt.stop() : Rt.start();
        }, _t.addEventListener("sessionstart", Ct), _t.addEventListener("sessionend", Lt), this.render = function(t, e) {
            if (void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            if (!0 === g3) return;
            !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), !0 === _t.enabled && !0 === _t.isPresenting && (!0 === _t.cameraAutoUpdate && _t.updateCamera(e), e = _t.getCamera()), !0 === t.isScene && t.onBeforeRender(f, t, e, w), d5 = lt.get(t, m4.length), d5.init(), m4.push(d5), V.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), B.setFromProjectionMatrix(V), k = this.localClippingEnabled, U = ct.init(this.clippingPlanes, k, e), u6 = ot.get(t, p5.length), u6.init(), p5.push(u6), Pt(t, e, 0, f.sortObjects), u6.finish(), !0 === f.sortObjects && u6.sort(D2, N2), !0 === U && ct.beginShadows();
            const i = d5.state.shadowsArray;
            if (ht.render(i, t, e), !0 === U && ct.endShadows(), !0 === this.info.autoReset && this.info.reset(), ut.render(u6, t), d5.setupLights(f.physicallyCorrectLights), e.isArrayCamera) {
                const i = e.cameras;
                for(let e87 = 0, n = i.length; e87 < n; e87++){
                    const n = i[e87];
                    Dt(u6, t, n, n.viewport);
                }
            } else Dt(u6, t, e);
            null !== w && (Q.updateMultisampleRenderTarget(w), Q.updateRenderTargetMipmap(w)), !0 === t.isScene && t.onAfterRender(f, t, e), gt.resetDefaultState(), T = -1, A = null, m4.pop(), d5 = m4.length > 0 ? m4[m4.length - 1] : null, p5.pop(), u6 = p5.length > 0 ? p5[p5.length - 1] : null;
        }, this.getActiveCubeFace = function() {
            return y4;
        }, this.getActiveMipmapLevel = function() {
            return _3;
        }, this.getRenderTarget = function() {
            return w;
        }, this.setRenderTargetTextures = function(t, e, i) {
            K.get(t.texture).__webglTexture = e, K.get(t.depthTexture).__webglTexture = i;
            const n = K.get(t);
            n.__hasExternalTextures = !0, n.__hasExternalTextures && (n.__autoAllocateDepthBuffer = void 0 === i, n.__autoAllocateDepthBuffer || !0 === X.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), n.__useRenderToTexture = !1));
        }, this.setRenderTargetFramebuffer = function(t, e) {
            const i = K.get(t);
            i.__webglFramebuffer = e, i.__useDefaultFramebuffer = void 0 === e;
        }, this.setRenderTarget = function(t, e = 0, i = 0) {
            w = t, y4 = e, _3 = i;
            let n = !0;
            if (t) {
                const e = K.get(t);
                void 0 !== e.__useDefaultFramebuffer ? (Y.bindFramebuffer(36160, null), n = !1) : void 0 === e.__webglFramebuffer ? Q.setupRenderTarget(t) : e.__hasExternalTextures && Q.rebindTextures(t, K.get(t.texture).__webglTexture, K.get(t.depthTexture).__webglTexture);
            }
            let r = null, s = !1, a = !1;
            if (t) {
                const i = t.texture;
                (i.isData3DTexture || i.isDataArrayTexture) && (a = !0);
                const n = K.get(t).__webglFramebuffer;
                t.isWebGLCubeRenderTarget ? (r = n[e], s = !0) : r = J.isWebGL2 && t.samples > 0 && !1 === Q.useMultisampledRTT(t) ? K.get(t).__webglMultisampledFramebuffer : n, E3.copy(t.viewport), C2.copy(t.scissor), L3 = t.scissorTest;
            } else E3.copy(z2).multiplyScalar(I).floor(), C2.copy(O).multiplyScalar(I).floor(), L3 = F;
            if (Y.bindFramebuffer(36160, r) && J.drawBuffers && n && Y.drawBuffers(t, r), Y.viewport(E3), Y.scissor(C2), Y.setScissorTest(L3), s) {
                const n = K.get(t.texture);
                vt.framebufferTexture2D(36160, 36064, 34069 + e, n.__webglTexture, i);
            } else if (a) {
                const n = K.get(t.texture), r = e || 0;
                vt.framebufferTextureLayer(36160, 36064, n.__webglTexture, i || 0, r);
            }
            T = -1;
        }, this.readRenderTargetPixels = function(t, e, i, n, r, s, a) {
            if (!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            let o = K.get(t).__webglFramebuffer;
            if (t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o) {
                Y.bindFramebuffer(36160, o);
                try {
                    const a = t.texture, o = a.format, l = a.type;
                    if (o !== S1 && ft.convert(o) !== vt.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    const c = l === b1 && (X.has("EXT_color_buffer_half_float") || J.isWebGL2 && X.has("EXT_color_buffer_float"));
                    if (!(l === x1 || ft.convert(l) === vt.getParameter(35738) || l === M1 && (J.isWebGL2 || X.has("OES_texture_float") || X.has("WEBGL_color_buffer_float")) || c)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    e >= 0 && e <= t.width - n && i >= 0 && i <= t.height - r && vt.readPixels(e, i, n, r, ft.convert(o), ft.convert(l), s);
                } finally{
                    const t = null !== w ? K.get(w).__webglFramebuffer : null;
                    Y.bindFramebuffer(36160, t);
                }
            }
        }, this.copyFramebufferToTexture = function(t, e, i = 0) {
            const n = Math.pow(2, -i), r = Math.floor(e.image.width * n), s = Math.floor(e.image.height * n);
            Q.setTexture2D(e, 0), vt.copyTexSubImage2D(3553, i, 0, 0, t.x, t.y, r, s), Y.unbindTexture();
        }, this.copyTextureToTexture = function(t, e, i, n = 0) {
            const r = e.image.width, s = e.image.height, a = ft.convert(i.format), o = ft.convert(i.type);
            Q.setTexture2D(i, 0), vt.pixelStorei(37440, i.flipY), vt.pixelStorei(37441, i.premultiplyAlpha), vt.pixelStorei(3317, i.unpackAlignment), e.isDataTexture ? vt.texSubImage2D(3553, n, t.x, t.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? vt.compressedTexSubImage2D(3553, n, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : vt.texSubImage2D(3553, n, t.x, t.y, a, o, e.image), 0 === n && i.generateMipmaps && vt.generateMipmap(3553), Y.unbindTexture();
        }, this.copyTextureToTexture3D = function(t, e, i, n, r = 0) {
            if (f.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
            const s = t.max.x - t.min.x + 1, a = t.max.y - t.min.y + 1, o = t.max.z - t.min.z + 1, l = ft.convert(n.format), c = ft.convert(n.type);
            let h;
            if (n.isData3DTexture) Q.setTexture3D(n, 0), h = 32879;
            else {
                if (!n.isDataArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                Q.setTexture2DArray(n, 0), h = 35866;
            }
            vt.pixelStorei(37440, n.flipY), vt.pixelStorei(37441, n.premultiplyAlpha), vt.pixelStorei(3317, n.unpackAlignment);
            const u = vt.getParameter(3314), d = vt.getParameter(32878), p = vt.getParameter(3316), m = vt.getParameter(3315), g = vt.getParameter(32877), v = i.isCompressedTexture ? i.mipmaps[0] : i.image;
            vt.pixelStorei(3314, v.width), vt.pixelStorei(32878, v.height), vt.pixelStorei(3316, t.min.x), vt.pixelStorei(3315, t.min.y), vt.pixelStorei(32877, t.min.z), i.isDataTexture || i.isData3DTexture ? vt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, v.data) : i.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), vt.compressedTexSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, v.data)) : vt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, v), vt.pixelStorei(3314, u), vt.pixelStorei(32878, d), vt.pixelStorei(3316, p), vt.pixelStorei(3315, m), vt.pixelStorei(32877, g), 0 === r && n.generateMipmaps && vt.generateMipmap(h), Y.unbindTexture();
        }, this.initTexture = function(t) {
            Q.setTexture2D(t, 0), Y.unbindTexture();
        }, this.resetState = function() {
            y4 = 0, _3 = 0, w = null, Y.reset(), gt.reset();
        }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
        }));
    }
    class Zs extends Ys {
    }
    Zs.prototype.isWebGL1Renderer = !0;
    class Ks {
        constructor(t, e = 25e-5){
            this.isFogExp2 = !0, this.name = "", this.color = new Ht(t), this.density = e;
        }
        clone() {
            return new Ks(this.color, this.density);
        }
        toJSON() {
            return {
                type: "FogExp2",
                color: this.color.getHex(),
                density: this.density
            };
        }
    }
    class Qs {
        constructor(t, e = 1, i = 1e3){
            this.isFog = !0, this.name = "", this.color = new Ht(t), this.near = e, this.far = i;
        }
        clone() {
            return new Qs(this.color, this.near, this.far);
        }
        toJSON() {
            return {
                type: "Fog",
                color: this.color.getHex(),
                near: this.near,
                far: this.far
            };
        }
    }
    class $s extends ni {
        constructor(){
            super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }));
        }
        copy(t, e) {
            return super.copy(t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return null !== this.fog && (e.object.fog = this.fog.toJSON()), e;
        }
    }
    class ta {
        constructor(t, e){
            this.isInterleavedBuffer = !0, this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = ut1, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0, this.uuid = yt1();
        }
        onUploadCallback() {}
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
        setUsage(t) {
            return this.usage = t, this;
        }
        copy(t) {
            return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
        }
        copyAt(t, e, i) {
            t *= this.stride, i *= e.stride;
            for(let n = 0, r = this.stride; n < r; n++)this.array[t + n] = e.array[i + n];
            return this;
        }
        set(t, e = 0) {
            return this.array.set(t, e), this;
        }
        clone(t) {
            void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = yt1()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
            const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), i = new this.constructor(e, this.stride);
            return i.setUsage(this.usage), i;
        }
        onUpload(t) {
            return this.onUploadCallback = t, this;
        }
        toJSON(t) {
            return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = yt1()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
                uuid: this.uuid,
                buffer: this.array.buffer._uuid,
                type: this.array.constructor.name,
                stride: this.stride
            };
        }
    }
    const ea = new ee;
    class ia {
        constructor(t, e, i, n = !1){
            this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = e, this.offset = i, this.normalized = !0 === n;
        }
        get count() {
            return this.data.count;
        }
        get array() {
            return this.data.array;
        }
        set needsUpdate(t) {
            this.data.needsUpdate = t;
        }
        applyMatrix4(t) {
            for(let e = 0, i = this.data.count; e < i; e++)ea.fromBufferAttribute(this, e), ea.applyMatrix4(t), this.setXYZ(e, ea.x, ea.y, ea.z);
            return this;
        }
        applyNormalMatrix(t) {
            for(let e = 0, i = this.count; e < i; e++)ea.fromBufferAttribute(this, e), ea.applyNormalMatrix(t), this.setXYZ(e, ea.x, ea.y, ea.z);
            return this;
        }
        transformDirection(t) {
            for(let e = 0, i = this.count; e < i; e++)ea.fromBufferAttribute(this, e), ea.transformDirection(t), this.setXYZ(e, ea.x, ea.y, ea.z);
            return this;
        }
        setX(t, e) {
            return this.data.array[t * this.data.stride + this.offset] = e, this;
        }
        setY(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e, this;
        }
        setZ(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e, this;
        }
        setW(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e, this;
        }
        getX(t) {
            return this.data.array[t * this.data.stride + this.offset];
        }
        getY(t) {
            return this.data.array[t * this.data.stride + this.offset + 1];
        }
        getZ(t) {
            return this.data.array[t * this.data.stride + this.offset + 2];
        }
        getW(t) {
            return this.data.array[t * this.data.stride + this.offset + 3];
        }
        setXY(t, e, i) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this;
        }
        setXYZ(t, e, i, n) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this;
        }
        setXYZW(t, e, i, n, r) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this;
        }
        clone(t) {
            if (void 0 === t) {
                console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
                const t = [];
                for(let e = 0; e < this.count; e++){
                    const i = e * this.data.stride + this.offset;
                    for(let e88 = 0; e88 < this.itemSize; e88++)t.push(this.data.array[i + e88]);
                }
                return new _i(new this.array.constructor(t), this.itemSize, this.normalized);
            }
            return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new ia(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
        }
        toJSON(t) {
            if (void 0 === t) {
                console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
                const t = [];
                for(let e = 0; e < this.count; e++){
                    const i = e * this.data.stride + this.offset;
                    for(let e89 = 0; e89 < this.itemSize; e89++)t.push(this.data.array[i + e89]);
                }
                return {
                    itemSize: this.itemSize,
                    type: this.array.constructor.name,
                    array: t,
                    normalized: this.normalized
                };
            }
            return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
                isInterleavedBufferAttribute: !0,
                itemSize: this.itemSize,
                data: this.data.uuid,
                offset: this.offset,
                normalized: this.normalized
            };
        }
    }
    class na extends gi {
        constructor(t){
            super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new Ht(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
        }
    }
    let ra;
    const sa = new ee, aa = new ee, oa = new ee, la = new Et, ca = new Et, ha = new Ie, ua = new ee, da = new ee, pa = new ee, ma = new Et, fa = new Et, ga = new Et;
    class va extends ni {
        constructor(t){
            if (super(), this.isSprite = !0, this.type = "Sprite", void 0 === ra) {
                ra = new Pi;
                const t = new Float32Array([
                    -0.5,
                    -0.5,
                    0,
                    0,
                    0,
                    .5,
                    -0.5,
                    0,
                    1,
                    0,
                    .5,
                    .5,
                    0,
                    1,
                    1,
                    -0.5,
                    .5,
                    0,
                    0,
                    1
                ]), e = new ta(t, 5);
                ra.setIndex([
                    0,
                    1,
                    2,
                    0,
                    2,
                    3
                ]), ra.setAttribute("position", new ia(e, 3, 0, !1)), ra.setAttribute("uv", new ia(e, 2, 3, !1));
            }
            this.geometry = ra, this.material = void 0 !== t ? t : new na, this.center = new Et(.5, .5);
        }
        raycast(t, e) {
            null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), aa.setFromMatrixScale(this.matrixWorld), ha.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), oa.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && aa.multiplyScalar(-oa.z);
            const i = this.material.rotation;
            let n, r;
            0 !== i && (r = Math.cos(i), n = Math.sin(i));
            const s = this.center;
            xa(ua.set(-0.5, -0.5, 0), oa, s, aa, n, r), xa(da.set(.5, -0.5, 0), oa, s, aa, n, r), xa(pa.set(.5, .5, 0), oa, s, aa, n, r), ma.set(0, 0), fa.set(1, 0), ga.set(1, 1);
            let a = t.ray.intersectTriangle(ua, da, pa, !1, sa);
            if (null === a && (xa(da.set(-0.5, .5, 0), oa, s, aa, n, r), fa.set(0, 1), a = t.ray.intersectTriangle(ua, pa, da, !1, sa), null === a)) return;
            const o = t.ray.origin.distanceTo(sa);
            o < t.near || o > t.far || e.push({
                distance: o,
                point: sa.clone(),
                uv: mi.getUV(sa, ua, da, pa, ma, fa, ga, new Et),
                face: null,
                object: this
            });
        }
        copy(t, e) {
            return super.copy(t, e), void 0 !== t.center && this.center.copy(t.center), this.material = t.material, this;
        }
    }
    function xa(t, e, i, n, r, s) {
        la.subVectors(t, i).addScalar(.5).multiply(n), void 0 !== r ? (ca.x = s * la.x - r * la.y, ca.y = r * la.x + s * la.y) : ca.copy(la), t.copy(e), t.x += ca.x, t.y += ca.y, t.applyMatrix4(ha);
    }
    const ya = new ee, _a = new ee;
    class Ma extends ni {
        constructor(){
            super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
                levels: {
                    enumerable: !0,
                    value: []
                },
                isLOD: {
                    value: !0
                }
            }), this.autoUpdate = !0;
        }
        copy(t) {
            super.copy(t, !1);
            const e = t.levels;
            for(let t109 = 0, i = e.length; t109 < i; t109++){
                const i = e[t109];
                this.addLevel(i.object.clone(), i.distance);
            }
            return this.autoUpdate = t.autoUpdate, this;
        }
        addLevel(t, e = 0) {
            e = Math.abs(e);
            const i = this.levels;
            let n;
            for(n = 0; n < i.length && !(e < i[n].distance); n++);
            return i.splice(n, 0, {
                distance: e,
                object: t
            }), this.add(t), this;
        }
        getCurrentLevel() {
            return this._currentLevel;
        }
        getObjectForDistance(t) {
            const e = this.levels;
            if (e.length > 0) {
                let i, n;
                for(i = 1, n = e.length; i < n && !(t < e[i].distance); i++);
                return e[i - 1].object;
            }
            return null;
        }
        raycast(t, e) {
            if (this.levels.length > 0) {
                ya.setFromMatrixPosition(this.matrixWorld);
                const i = t.ray.origin.distanceTo(ya);
                this.getObjectForDistance(i).raycast(t, e);
            }
        }
        update(t) {
            const e = this.levels;
            if (e.length > 1) {
                ya.setFromMatrixPosition(t.matrixWorld), _a.setFromMatrixPosition(this.matrixWorld);
                const i = ya.distanceTo(_a) / t.zoom;
                let n, r;
                for(e[0].object.visible = !0, n = 1, r = e.length; n < r && i >= e[n].distance; n++)e[n - 1].object.visible = !1, e[n].object.visible = !0;
                for(this._currentLevel = n - 1; n < r; n++)e[n].object.visible = !1;
            }
        }
        toJSON(t) {
            const e = super.toJSON(t);
            !1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = [];
            const i = this.levels;
            for(let t110 = 0, n = i.length; t110 < n; t110++){
                const n = i[t110];
                e.object.levels.push({
                    object: n.object.uuid,
                    distance: n.distance
                });
            }
            return e;
        }
    }
    const ba = new ee, wa = new Zt, Sa = new Zt, Ta = new ee, Aa = new Ie;
    class Ea extends Yi {
        constructor(t, e){
            super(t, e), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ie, this.bindMatrixInverse = new Ie;
        }
        copy(t, e) {
            return super.copy(t, e), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this;
        }
        bind(t, e) {
            this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
        }
        pose() {
            this.skeleton.pose();
        }
        normalizeSkinWeights() {
            const t = new Zt, e = this.geometry.attributes.skinWeight;
            for(let i = 0, n = e.count; i < n; i++){
                t.fromBufferAttribute(e, i);
                const n = 1 / t.manhattanLength();
                n !== 1 / 0 ? t.multiplyScalar(n) : t.set(1, 0, 0, 0), e.setXYZW(i, t.x, t.y, t.z, t.w);
            }
        }
        updateMatrixWorld(t) {
            super.updateMatrixWorld(t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
        }
        boneTransform(t, e) {
            const i = this.skeleton, n = this.geometry;
            wa.fromBufferAttribute(n.attributes.skinIndex, t), Sa.fromBufferAttribute(n.attributes.skinWeight, t), ba.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
            for(let t111 = 0; t111 < 4; t111++){
                const n = Sa.getComponent(t111);
                if (0 !== n) {
                    const r = wa.getComponent(t111);
                    Aa.multiplyMatrices(i.bones[r].matrixWorld, i.boneInverses[r]), e.addScaledVector(Ta.copy(ba).applyMatrix4(Aa), n);
                }
            }
            return e.applyMatrix4(this.bindMatrixInverse);
        }
    }
    class Ca extends ni {
        constructor(){
            super(), this.isBone = !0, this.type = "Bone";
        }
    }
    class La extends Yt {
        constructor(t = null, e = 1, i = 1, n, r, s, a, o, l = 1003, c = 1003, h, u){
            super(null, s, a, o, l, c, n, r, h, u), this.isDataTexture = !0, this.image = {
                data: t,
                width: e,
                height: i
            }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    const Ra = new Ie, Pa = new Ie;
    class Ia {
        constructor(t = [], e = []){
            this.uuid = yt1(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
        }
        init() {
            const t = this.bones, e = this.boneInverses;
            if (this.boneMatrices = new Float32Array(16 * t.length), 0 === e.length) this.calculateInverses();
            else if (t.length !== e.length) {
                console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
                for(let t = 0, e = this.bones.length; t < e; t++)this.boneInverses.push(new Ie);
            }
        }
        calculateInverses() {
            this.boneInverses.length = 0;
            for(let t = 0, e = this.bones.length; t < e; t++){
                const e = new Ie;
                this.bones[t] && e.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(e);
            }
        }
        pose() {
            for(let t = 0, e = this.bones.length; t < e; t++){
                const e = this.bones[t];
                e && e.matrixWorld.copy(this.boneInverses[t]).invert();
            }
            for(let t112 = 0, e90 = this.bones.length; t112 < e90; t112++){
                const e = this.bones[t112];
                e && (e.parent && e.parent.isBone ? (e.matrix.copy(e.parent.matrixWorld).invert(), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale));
            }
        }
        update() {
            const t = this.bones, e = this.boneInverses, i = this.boneMatrices, n = this.boneTexture;
            for(let n45 = 0, r = t.length; n45 < r; n45++){
                const r = t[n45] ? t[n45].matrixWorld : Pa;
                Ra.multiplyMatrices(r, e[n45]), Ra.toArray(i, 16 * n45);
            }
            null !== n && (n.needsUpdate = !0);
        }
        clone() {
            return new Ia(this.bones, this.boneInverses);
        }
        computeBoneTexture() {
            let t = Math.sqrt(4 * this.bones.length);
            t = St1(t), t = Math.max(t, 4);
            const e = new Float32Array(t * t * 4);
            e.set(this.boneMatrices);
            const i = new La(e, t, t, S1, M1);
            return i.needsUpdate = !0, this.boneMatrices = e, this.boneTexture = i, this.boneTextureSize = t, this;
        }
        getBoneByName(t) {
            for(let e = 0, i = this.bones.length; e < i; e++){
                const i = this.bones[e];
                if (i.name === t) return i;
            }
        }
        dispose() {
            null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null);
        }
        fromJSON(t, e) {
            this.uuid = t.uuid;
            for(let i = 0, n = t.bones.length; i < n; i++){
                const n = t.bones[i];
                let r = e[n];
                void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", n), r = new Ca), this.bones.push(r), this.boneInverses.push((new Ie).fromArray(t.boneInverses[i]));
            }
            return this.init(), this;
        }
        toJSON() {
            const t = {
                metadata: {
                    version: 4.5,
                    type: "Skeleton",
                    generator: "Skeleton.toJSON"
                },
                bones: [],
                boneInverses: []
            };
            t.uuid = this.uuid;
            const e = this.bones, i = this.boneInverses;
            for(let n = 0, r = e.length; n < r; n++){
                const r = e[n];
                t.bones.push(r.uuid);
                const s = i[n];
                t.boneInverses.push(s.toArray());
            }
            return t;
        }
    }
    class Da extends _i {
        constructor(t, e, i, n = 1){
            "number" == typeof i && (n = i, i = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(t, e, i), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = n;
        }
        copy(t) {
            return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t;
        }
    }
    const Na = new Ie, za = new Ie, Oa = [], Fa = new Yi;
    class Ba extends Yi {
        constructor(t, e, i){
            super(t, e), this.isInstancedMesh = !0, this.instanceMatrix = new Da(new Float32Array(16 * i), 16), this.instanceColor = null, this.count = i, this.frustumCulled = !1;
        }
        copy(t, e) {
            return super.copy(t, e), this.instanceMatrix.copy(t.instanceMatrix), null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, this;
        }
        getColorAt(t, e) {
            e.fromArray(this.instanceColor.array, 3 * t);
        }
        getMatrixAt(t, e) {
            e.fromArray(this.instanceMatrix.array, 16 * t);
        }
        raycast(t, e) {
            const i = this.matrixWorld, n = this.count;
            if (Fa.geometry = this.geometry, Fa.material = this.material, void 0 !== Fa.material) for(let r = 0; r < n; r++){
                this.getMatrixAt(r, Na), za.multiplyMatrices(i, Na), Fa.matrixWorld = za, Fa.raycast(t, Oa);
                for(let t113 = 0, i49 = Oa.length; t113 < i49; t113++){
                    const i = Oa[t113];
                    i.instanceId = r, i.object = this, e.push(i);
                }
                Oa.length = 0;
            }
        }
        setColorAt(t, e) {
            null === this.instanceColor && (this.instanceColor = new Da(new Float32Array(3 * this.instanceMatrix.count), 3)), e.toArray(this.instanceColor.array, 3 * t);
        }
        setMatrixAt(t, e) {
            e.toArray(this.instanceMatrix.array, 16 * t);
        }
        updateMorphTargets() {}
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    class Ua extends gi {
        constructor(t){
            super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Ht(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
        }
    }
    const ka = new ee, Ga = new ee, Va = new Ie, Ha = new Pe, Wa = new we;
    class ja extends ni {
        constructor(t = new Pi, e = new Ua){
            super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets();
        }
        copy(t, e) {
            return super.copy(t, e), this.material = t.material, this.geometry = t.geometry, this;
        }
        computeLineDistances() {
            const t = this.geometry;
            if (null === t.index) {
                const e = t.attributes.position, i = [
                    0
                ];
                for(let t114 = 1, n = e.count; t114 < n; t114++)ka.fromBufferAttribute(e, t114 - 1), Ga.fromBufferAttribute(e, t114), i[t114] = i[t114 - 1], i[t114] += ka.distanceTo(Ga);
                t.setAttribute("lineDistance", new wi(i, 1));
            } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            return this;
        }
        raycast(t, e) {
            const i = this.geometry, n = this.matrixWorld, r = t.params.Line.threshold, s = i.drawRange;
            if (null === i.boundingSphere && i.computeBoundingSphere(), Wa.copy(i.boundingSphere), Wa.applyMatrix4(n), Wa.radius += r, !1 === t.ray.intersectsSphere(Wa)) return;
            Va.copy(n).invert(), Ha.copy(t.ray).applyMatrix4(Va);
            const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = new ee, c = new ee, h = new ee, u = new ee, d = this.isLineSegments ? 2 : 1, p = i.index, m = i.attributes.position;
            if (null !== p) for(let i50 = Math.max(0, s.start), n46 = Math.min(p.count, s.start + s.count) - 1; i50 < n46; i50 += d){
                const n = p.getX(i50), r = p.getX(i50 + 1);
                l.fromBufferAttribute(m, n), c.fromBufferAttribute(m, r);
                if (Ha.distanceSqToSegment(l, c, u, h) > o) continue;
                u.applyMatrix4(this.matrixWorld);
                const s = t.ray.origin.distanceTo(u);
                s < t.near || s > t.far || e.push({
                    distance: s,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: i50,
                    face: null,
                    faceIndex: null,
                    object: this
                });
            }
            else for(let i51 = Math.max(0, s.start), n47 = Math.min(m.count, s.start + s.count) - 1; i51 < n47; i51 += d){
                l.fromBufferAttribute(m, i51), c.fromBufferAttribute(m, i51 + 1);
                if (Ha.distanceSqToSegment(l, c, u, h) > o) continue;
                u.applyMatrix4(this.matrixWorld);
                const n = t.ray.origin.distanceTo(u);
                n < t.near || n > t.far || e.push({
                    distance: n,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: i51,
                    face: null,
                    faceIndex: null,
                    object: this
                });
            }
        }
        updateMorphTargets() {
            const t = this.geometry.morphAttributes, e = Object.keys(t);
            if (e.length > 0) {
                const i = t[e[0]];
                if (void 0 !== i) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let t = 0, e = i.length; t < e; t++){
                        const e = i[t].name || String(t);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t;
                    }
                }
            }
        }
    }
    const qa = new ee, Xa = new ee;
    class Ja extends ja {
        constructor(t, e){
            super(t, e), this.isLineSegments = !0, this.type = "LineSegments";
        }
        computeLineDistances() {
            const t = this.geometry;
            if (null === t.index) {
                const e = t.attributes.position, i = [];
                for(let t115 = 0, n = e.count; t115 < n; t115 += 2)qa.fromBufferAttribute(e, t115), Xa.fromBufferAttribute(e, t115 + 1), i[t115] = 0 === t115 ? 0 : i[t115 - 1], i[t115 + 1] = i[t115] + qa.distanceTo(Xa);
                t.setAttribute("lineDistance", new wi(i, 1));
            } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            return this;
        }
    }
    class Ya extends ja {
        constructor(t, e){
            super(t, e), this.isLineLoop = !0, this.type = "LineLoop";
        }
    }
    class Za extends gi {
        constructor(t){
            super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Ht(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
        }
    }
    const Ka = new Ie, Qa = new Pe, $a = new we, to = new ee;
    class eo extends ni {
        constructor(t = new Pi, e = new Za){
            super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets();
        }
        copy(t, e) {
            return super.copy(t, e), this.material = t.material, this.geometry = t.geometry, this;
        }
        raycast(t, e) {
            const i = this.geometry, n = this.matrixWorld, r = t.params.Points.threshold, s = i.drawRange;
            if (null === i.boundingSphere && i.computeBoundingSphere(), $a.copy(i.boundingSphere), $a.applyMatrix4(n), $a.radius += r, !1 === t.ray.intersectsSphere($a)) return;
            Ka.copy(n).invert(), Qa.copy(t.ray).applyMatrix4(Ka);
            const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = i.index, c = i.attributes.position;
            if (null !== l) for(let i52 = Math.max(0, s.start), r33 = Math.min(l.count, s.start + s.count); i52 < r33; i52++){
                const r = l.getX(i52);
                to.fromBufferAttribute(c, r), io(to, r, o, n, t, e, this);
            }
            else for(let i53 = Math.max(0, s.start), r34 = Math.min(c.count, s.start + s.count); i53 < r34; i53++)to.fromBufferAttribute(c, i53), io(to, i53, o, n, t, e, this);
        }
        updateMorphTargets() {
            const t = this.geometry.morphAttributes, e = Object.keys(t);
            if (e.length > 0) {
                const i = t[e[0]];
                if (void 0 !== i) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let t = 0, e = i.length; t < e; t++){
                        const e = i[t].name || String(t);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t;
                    }
                }
            }
        }
    }
    function io(t, e, i, n, r, s, a) {
        const o = Qa.distanceSqToPoint(t);
        if (o < i) {
            const i = new ee;
            Qa.closestPointToPoint(t, i), i.applyMatrix4(n);
            const l = r.ray.origin.distanceTo(i);
            if (l < r.near || l > r.far) return;
            s.push({
                distance: l,
                distanceToRay: Math.sqrt(o),
                point: i,
                index: e,
                face: null,
                object: a
            });
        }
    }
    class no extends Yt {
        constructor(t, e, i, n, r, s, a, o, l, c, h, u){
            super(null, s, a, o, l, c, n, r, h, u), this.isCompressedTexture = !0, this.image = {
                width: e,
                height: i
            }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1;
        }
    }
    class ro {
        constructor(){
            this.type = "Curve", this.arcLengthDivisions = 200;
        }
        getPoint() {
            return console.warn("THREE.Curve: .getPoint() not implemented."), null;
        }
        getPointAt(t, e) {
            const i = this.getUtoTmapping(t);
            return this.getPoint(i, e);
        }
        getPoints(t = 5) {
            const e = [];
            for(let i = 0; i <= t; i++)e.push(this.getPoint(i / t));
            return e;
        }
        getSpacedPoints(t = 5) {
            const e = [];
            for(let i = 0; i <= t; i++)e.push(this.getPointAt(i / t));
            return e;
        }
        getLength() {
            const t = this.getLengths();
            return t[t.length - 1];
        }
        getLengths(t = this.arcLengthDivisions) {
            if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            const e = [];
            let i, n = this.getPoint(0), r = 0;
            e.push(0);
            for(let s = 1; s <= t; s++)i = this.getPoint(s / t), r += i.distanceTo(n), e.push(r), n = i;
            return this.cacheArcLengths = e, e;
        }
        updateArcLengths() {
            this.needsUpdate = !0, this.getLengths();
        }
        getUtoTmapping(t, e) {
            const i = this.getLengths();
            let n = 0;
            const r = i.length;
            let s;
            s = e || t * i[r - 1];
            let a, o = 0, l = r - 1;
            for(; o <= l;)if (n = Math.floor(o + (l - o) / 2), a = i[n] - s, a < 0) o = n + 1;
            else {
                if (!(a > 0)) {
                    l = n;
                    break;
                }
                l = n - 1;
            }
            if (n = l, i[n] === s) return n / (r - 1);
            const c = i[n];
            return (n + (s - c) / (i[n + 1] - c)) / (r - 1);
        }
        getTangent(t, e) {
            const i = 1e-4;
            let n = t - i, r = t + i;
            n < 0 && (n = 0), r > 1 && (r = 1);
            const s = this.getPoint(n), a = this.getPoint(r), o = e || (s.isVector2 ? new Et : new ee);
            return o.copy(a).sub(s).normalize(), o;
        }
        getTangentAt(t, e) {
            const i = this.getUtoTmapping(t);
            return this.getTangent(i, e);
        }
        computeFrenetFrames(t, e) {
            const i = new ee, n = [], r = [], s = [], a = new ee, o = new Ie;
            for(let e91 = 0; e91 <= t; e91++){
                const i = e91 / t;
                n[e91] = this.getTangentAt(i, new ee);
            }
            r[0] = new ee, s[0] = new ee;
            let l = Number.MAX_VALUE;
            const c = Math.abs(n[0].x), h = Math.abs(n[0].y), u = Math.abs(n[0].z);
            c <= l && (l = c, i.set(1, 0, 0)), h <= l && (l = h, i.set(0, 1, 0)), u <= l && i.set(0, 0, 1), a.crossVectors(n[0], i).normalize(), r[0].crossVectors(n[0], a), s[0].crossVectors(n[0], r[0]);
            for(let e92 = 1; e92 <= t; e92++){
                if (r[e92] = r[e92 - 1].clone(), s[e92] = s[e92 - 1].clone(), a.crossVectors(n[e92 - 1], n[e92]), a.length() > Number.EPSILON) {
                    a.normalize();
                    const t = Math.acos(_t1(n[e92 - 1].dot(n[e92]), -1, 1));
                    r[e92].applyMatrix4(o.makeRotationAxis(a, t));
                }
                s[e92].crossVectors(n[e92], r[e92]);
            }
            if (!0 === e) {
                let e = Math.acos(_t1(r[0].dot(r[t]), -1, 1));
                e /= t, n[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e);
                for(let i = 1; i <= t; i++)r[i].applyMatrix4(o.makeRotationAxis(n[i], e * i)), s[i].crossVectors(n[i], r[i]);
            }
            return {
                tangents: n,
                normals: r,
                binormals: s
            };
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions, this;
        }
        toJSON() {
            const t = {
                metadata: {
                    version: 4.5,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
        }
        fromJSON(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions, this;
        }
    }
    class so extends ro {
        constructor(t = 0, e = 0, i = 1, n = 1, r = 0, s = 2 * Math.PI, a = !1, o = 0){
            super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = i, this.yRadius = n, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o;
        }
        getPoint(t, e) {
            const i = e || new Et, n = 2 * Math.PI;
            let r = this.aEndAngle - this.aStartAngle;
            const s = Math.abs(r) < Number.EPSILON;
            for(; r < 0;)r += n;
            for(; r > n;)r -= n;
            r < Number.EPSILON && (r = s ? 0 : n), !0 !== this.aClockwise || s || (r === n ? r = -n : r -= n);
            const a = this.aStartAngle + t * r;
            let o = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a);
            if (0 !== this.aRotation) {
                const t = Math.cos(this.aRotation), e = Math.sin(this.aRotation), i = o - this.aX, n = l - this.aY;
                o = i * t - n * e + this.aX, l = i * e + n * t + this.aY;
            }
            return i.set(o, l);
        }
        copy(t) {
            return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
        }
    }
    class ao extends so {
        constructor(t, e, i, n, r, s){
            super(t, e, i, i, n, r, s), this.isArcCurve = !0, this.type = "ArcCurve";
        }
    }
    function oo() {
        let t116 = 0, e93 = 0, i54 = 0, n48 = 0;
        function r35(r, s, a, o) {
            t116 = r, e93 = a, i54 = -3 * r + 3 * s - 2 * a - o, n48 = 2 * r - 2 * s + a + o;
        }
        return {
            initCatmullRom: function(t, e, i, n, s) {
                r35(e, i, s * (i - t), s * (n - e));
            },
            initNonuniformCatmullRom: function(t, e, i, n, s, a, o) {
                let l = (e - t) / s - (i - t) / (s + a) + (i - e) / a, c = (i - e) / a - (n - e) / (a + o) + (n - i) / o;
                l *= a, c *= a, r35(e, i, l, c);
            },
            calc: function(r) {
                const s = r * r;
                return t116 + e93 * r + i54 * s + n48 * (s * r);
            }
        };
    }
    const lo = new ee, co = new oo, ho = new oo, uo = new oo;
    class po extends ro {
        constructor(t = [], e = !1, i = "centripetal", n = .5){
            super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = i, this.tension = n;
        }
        getPoint(t, e = new ee) {
            const i = e, n = this.points, r = n.length, s = (r - (this.closed ? 0 : 1)) * t;
            let a, o, l = Math.floor(s), c = s - l;
            this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2, c = 1), this.closed || l > 0 ? a = n[(l - 1) % r] : (lo.subVectors(n[0], n[1]).add(n[0]), a = lo);
            const h = n[l % r], u = n[(l + 1) % r];
            if (this.closed || l + 2 < r ? o = n[(l + 2) % r] : (lo.subVectors(n[r - 1], n[r - 2]).add(n[r - 1]), o = lo), "centripetal" === this.curveType || "chordal" === this.curveType) {
                const t = "chordal" === this.curveType ? .5 : .25;
                let e = Math.pow(a.distanceToSquared(h), t), i = Math.pow(h.distanceToSquared(u), t), n = Math.pow(u.distanceToSquared(o), t);
                i < 1e-4 && (i = 1), e < 1e-4 && (e = i), n < 1e-4 && (n = i), co.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, i, n), ho.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, i, n), uo.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, i, n);
            } else "catmullrom" === this.curveType && (co.initCatmullRom(a.x, h.x, u.x, o.x, this.tension), ho.initCatmullRom(a.y, h.y, u.y, o.y, this.tension), uo.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
            return i.set(co.calc(c), ho.calc(c), uo.calc(c)), i;
        }
        copy(t) {
            super.copy(t), this.points = [];
            for(let e = 0, i = t.points.length; e < i; e++){
                const i = t.points[e];
                this.points.push(i.clone());
            }
            return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
        }
        toJSON() {
            const t = super.toJSON();
            t.points = [];
            for(let e = 0, i = this.points.length; e < i; e++){
                const i = this.points[e];
                t.points.push(i.toArray());
            }
            return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
        }
        fromJSON(t) {
            super.fromJSON(t), this.points = [];
            for(let e = 0, i = t.points.length; e < i; e++){
                const i = t.points[e];
                this.points.push((new ee).fromArray(i));
            }
            return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
        }
    }
    function mo(t, e, i, n, r) {
        const s = .5 * (n - e), a = .5 * (r - i), o = t * t;
        return (2 * i - 2 * n + s + a) * (t * o) + (-3 * i + 3 * n - 2 * s - a) * o + s * t + i;
    }
    function fo(t117, e94, i55, n) {
        return function(t, e) {
            const i = 1 - t;
            return i * i * e;
        }(t117, e94) + function(t, e) {
            return 2 * (1 - t) * t * e;
        }(t117, i55) + function(t, e) {
            return t * t * e;
        }(t117, n);
    }
    function go(t118, e95, i56, n, r) {
        return function(t, e) {
            const i = 1 - t;
            return i * i * i * e;
        }(t118, e95) + function(t, e) {
            const i = 1 - t;
            return 3 * i * i * t * e;
        }(t118, i56) + function(t, e) {
            return 3 * (1 - t) * t * t * e;
        }(t118, n) + function(t, e) {
            return t * t * t * e;
        }(t118, r);
    }
    class vo extends ro {
        constructor(t = new Et, e = new Et, i = new Et, n = new Et){
            super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = n;
        }
        getPoint(t, e = new Et) {
            const i = e, n = this.v0, r = this.v1, s = this.v2, a = this.v3;
            return i.set(go(t, n.x, r.x, s.x, a.x), go(t, n.y, r.y, s.y, a.y)), i;
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
        }
    }
    class xo extends ro {
        constructor(t = new ee, e = new ee, i = new ee, n = new ee){
            super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = n;
        }
        getPoint(t, e = new ee) {
            const i = e, n = this.v0, r = this.v1, s = this.v2, a = this.v3;
            return i.set(go(t, n.x, r.x, s.x, a.x), go(t, n.y, r.y, s.y, a.y), go(t, n.z, r.z, s.z, a.z)), i;
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
        }
    }
    class yo extends ro {
        constructor(t = new Et, e = new Et){
            super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t, this.v2 = e;
        }
        getPoint(t, e = new Et) {
            const i = e;
            return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i;
        }
        getPointAt(t, e) {
            return this.getPoint(t, e);
        }
        getTangent(t, e) {
            const i = e || new Et;
            return i.copy(this.v2).sub(this.v1).normalize(), i;
        }
        copy(t) {
            return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
        }
    }
    class _o extends ro {
        constructor(t = new ee, e = new ee){
            super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t, this.v2 = e;
        }
        getPoint(t, e = new ee) {
            const i = e;
            return 1 === t ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i;
        }
        getPointAt(t, e) {
            return this.getPoint(t, e);
        }
        copy(t) {
            return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
        }
    }
    class Mo extends ro {
        constructor(t = new Et, e = new Et, i = new Et){
            super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = i;
        }
        getPoint(t, e = new Et) {
            const i = e, n = this.v0, r = this.v1, s = this.v2;
            return i.set(fo(t, n.x, r.x, s.x), fo(t, n.y, r.y, s.y)), i;
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
        }
    }
    class bo extends ro {
        constructor(t = new ee, e = new ee, i = new ee){
            super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = i;
        }
        getPoint(t, e = new ee) {
            const i = e, n = this.v0, r = this.v1, s = this.v2;
            return i.set(fo(t, n.x, r.x, s.x), fo(t, n.y, r.y, s.y), fo(t, n.z, r.z, s.z)), i;
        }
        copy(t) {
            return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
        }
    }
    class wo extends ro {
        constructor(t = []){
            super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = t;
        }
        getPoint(t, e = new Et) {
            const i = e, n = this.points, r = (n.length - 1) * t, s = Math.floor(r), a = r - s, o = n[0 === s ? s : s - 1], l = n[s], c = n[s > n.length - 2 ? n.length - 1 : s + 1], h = n[s > n.length - 3 ? n.length - 1 : s + 2];
            return i.set(mo(a, o.x, l.x, c.x, h.x), mo(a, o.y, l.y, c.y, h.y)), i;
        }
        copy(t) {
            super.copy(t), this.points = [];
            for(let e = 0, i = t.points.length; e < i; e++){
                const i = t.points[e];
                this.points.push(i.clone());
            }
            return this;
        }
        toJSON() {
            const t = super.toJSON();
            t.points = [];
            for(let e = 0, i = this.points.length; e < i; e++){
                const i = this.points[e];
                t.points.push(i.toArray());
            }
            return t;
        }
        fromJSON(t) {
            super.fromJSON(t), this.points = [];
            for(let e = 0, i = t.points.length; e < i; e++){
                const i = t.points[e];
                this.points.push((new Et).fromArray(i));
            }
            return this;
        }
    }
    var So = Object.freeze({
        __proto__: null,
        ArcCurve: ao,
        CatmullRomCurve3: po,
        CubicBezierCurve: vo,
        CubicBezierCurve3: xo,
        EllipseCurve: so,
        LineCurve: yo,
        LineCurve3: _o,
        QuadraticBezierCurve: Mo,
        QuadraticBezierCurve3: bo,
        SplineCurve: wo
    });
    class To extends ro {
        constructor(){
            super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
        }
        add(t) {
            this.curves.push(t);
        }
        closePath() {
            const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new yo(e, t));
        }
        getPoint(t, e) {
            const i = t * this.getLength(), n = this.getCurveLengths();
            let r = 0;
            for(; r < n.length;){
                if (n[r] >= i) {
                    const t = n[r] - i, s = this.curves[r], a = s.getLength(), o = 0 === a ? 0 : 1 - t / a;
                    return s.getPointAt(o, e);
                }
                r++;
            }
            return null;
        }
        getLength() {
            const t = this.getCurveLengths();
            return t[t.length - 1];
        }
        updateArcLengths() {
            this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
        }
        getCurveLengths() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            const t = [];
            let e = 0;
            for(let i = 0, n = this.curves.length; i < n; i++)e += this.curves[i].getLength(), t.push(e);
            return this.cacheLengths = t, t;
        }
        getSpacedPoints(t = 40) {
            const e = [];
            for(let i = 0; i <= t; i++)e.push(this.getPoint(i / t));
            return this.autoClose && e.push(e[0]), e;
        }
        getPoints(t = 12) {
            const e = [];
            let i;
            for(let n = 0, r = this.curves; n < r.length; n++){
                const s = r[n], a = s.isEllipseCurve ? 2 * t : s.isLineCurve || s.isLineCurve3 ? 1 : s.isSplineCurve ? t * s.points.length : t, o = s.getPoints(a);
                for(let t119 = 0; t119 < o.length; t119++){
                    const n = o[t119];
                    i && i.equals(n) || (e.push(n), i = n);
                }
            }
            return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
        }
        copy(t) {
            super.copy(t), this.curves = [];
            for(let e = 0, i = t.curves.length; e < i; e++){
                const i = t.curves[e];
                this.curves.push(i.clone());
            }
            return this.autoClose = t.autoClose, this;
        }
        toJSON() {
            const t = super.toJSON();
            t.autoClose = this.autoClose, t.curves = [];
            for(let e = 0, i = this.curves.length; e < i; e++){
                const i = this.curves[e];
                t.curves.push(i.toJSON());
            }
            return t;
        }
        fromJSON(t) {
            super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
            for(let e = 0, i = t.curves.length; e < i; e++){
                const i = t.curves[e];
                this.curves.push((new So[i.type]).fromJSON(i));
            }
            return this;
        }
    }
    class Ao extends To {
        constructor(t){
            super(), this.type = "Path", this.currentPoint = new Et, t && this.setFromPoints(t);
        }
        setFromPoints(t) {
            this.moveTo(t[0].x, t[0].y);
            for(let e = 1, i = t.length; e < i; e++)this.lineTo(t[e].x, t[e].y);
            return this;
        }
        moveTo(t, e) {
            return this.currentPoint.set(t, e), this;
        }
        lineTo(t, e) {
            const i = new yo(this.currentPoint.clone(), new Et(t, e));
            return this.curves.push(i), this.currentPoint.set(t, e), this;
        }
        quadraticCurveTo(t, e, i, n) {
            const r = new Mo(this.currentPoint.clone(), new Et(t, e), new Et(i, n));
            return this.curves.push(r), this.currentPoint.set(i, n), this;
        }
        bezierCurveTo(t, e, i, n, r, s) {
            const a = new vo(this.currentPoint.clone(), new Et(t, e), new Et(i, n), new Et(r, s));
            return this.curves.push(a), this.currentPoint.set(r, s), this;
        }
        splineThru(t) {
            const e = [
                this.currentPoint.clone()
            ].concat(t), i = new wo(e);
            return this.curves.push(i), this.currentPoint.copy(t[t.length - 1]), this;
        }
        arc(t, e, i, n, r, s) {
            const a = this.currentPoint.x, o = this.currentPoint.y;
            return this.absarc(t + a, e + o, i, n, r, s), this;
        }
        absarc(t, e, i, n, r, s) {
            return this.absellipse(t, e, i, i, n, r, s), this;
        }
        ellipse(t, e, i, n, r, s, a, o) {
            const l = this.currentPoint.x, c = this.currentPoint.y;
            return this.absellipse(t + l, e + c, i, n, r, s, a, o), this;
        }
        absellipse(t, e, i, n, r, s, a, o) {
            const l = new so(t, e, i, n, r, s, a, o);
            if (this.curves.length > 0) {
                const t = l.getPoint(0);
                t.equals(this.currentPoint) || this.lineTo(t.x, t.y);
            }
            this.curves.push(l);
            const c = l.getPoint(1);
            return this.currentPoint.copy(c), this;
        }
        copy(t) {
            return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
        }
        toJSON() {
            const t = super.toJSON();
            return t.currentPoint = this.currentPoint.toArray(), t;
        }
        fromJSON(t) {
            return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
        }
    }
    class Eo extends Pi {
        constructor(t = [
            new Et(0, .5),
            new Et(.5, 0),
            new Et(0, -0.5)
        ], e = 12, i = 0, n = 2 * Math.PI){
            super(), this.type = "LatheGeometry", this.parameters = {
                points: t,
                segments: e,
                phiStart: i,
                phiLength: n
            }, e = Math.floor(e), n = _t1(n, 0, 2 * Math.PI);
            const r = [], s = [], a = [], o = [], l = [], c = 1 / e, h = new ee, u = new Et, d = new ee, p = new ee, m = new ee;
            let f = 0, g = 0;
            for(let e96 = 0; e96 <= t.length - 1; e96++)switch(e96){
                case 0:
                    f = t[e96 + 1].x - t[e96].x, g = t[e96 + 1].y - t[e96].y, d.x = 1 * g, d.y = -f, d.z = 0 * g, m.copy(d), d.normalize(), o.push(d.x, d.y, d.z);
                    break;
                case t.length - 1:
                    o.push(m.x, m.y, m.z);
                    break;
                default:
                    f = t[e96 + 1].x - t[e96].x, g = t[e96 + 1].y - t[e96].y, d.x = 1 * g, d.y = -f, d.z = 0 * g, p.copy(d), d.x += m.x, d.y += m.y, d.z += m.z, d.normalize(), o.push(d.x, d.y, d.z), m.copy(p);
            }
            for(let r36 = 0; r36 <= e; r36++){
                const d = i + r36 * c * n, p = Math.sin(d), m = Math.cos(d);
                for(let i58 = 0; i58 <= t.length - 1; i58++){
                    h.x = t[i58].x * p, h.y = t[i58].y, h.z = t[i58].x * m, s.push(h.x, h.y, h.z), u.x = r36 / e, u.y = i58 / (t.length - 1), a.push(u.x, u.y);
                    const n = o[3 * i58 + 0] * p, c = o[3 * i58 + 1], d = o[3 * i58 + 0] * m;
                    l.push(n, c, d);
                }
            }
            for(let i57 = 0; i57 < e; i57++)for(let e97 = 0; e97 < t.length - 1; e97++){
                const n = e97 + i57 * t.length, s = n, a = n + t.length, o = n + t.length + 1, l = n + 1;
                r.push(s, a, l), r.push(o, l, a);
            }
            this.setIndex(r), this.setAttribute("position", new wi(s, 3)), this.setAttribute("uv", new wi(a, 2)), this.setAttribute("normal", new wi(l, 3));
        }
        static fromJSON(t) {
            return new Eo(t.points, t.segments, t.phiStart, t.phiLength);
        }
    }
    class Co extends Eo {
        constructor(t = 1, e = 1, i = 4, n = 8){
            const r = new Ao;
            r.absarc(0, -e / 2, t, 1.5 * Math.PI, 0), r.absarc(0, e / 2, t, 0, .5 * Math.PI), super(r.getPoints(i), n), this.type = "CapsuleGeometry", this.parameters = {
                radius: t,
                height: e,
                capSegments: i,
                radialSegments: n
            };
        }
        static fromJSON(t) {
            return new Co(t.radius, t.length, t.capSegments, t.radialSegments);
        }
    }
    class Lo extends Pi {
        constructor(t = 1, e = 8, i = 0, n = 2 * Math.PI){
            super(), this.type = "CircleGeometry", this.parameters = {
                radius: t,
                segments: e,
                thetaStart: i,
                thetaLength: n
            }, e = Math.max(3, e);
            const r = [], s = [], a = [], o = [], l = new ee, c = new Et;
            s.push(0, 0, 0), a.push(0, 0, 1), o.push(.5, .5);
            for(let r37 = 0, h = 3; r37 <= e; r37++, h += 3){
                const u = i + r37 / e * n;
                l.x = t * Math.cos(u), l.y = t * Math.sin(u), s.push(l.x, l.y, l.z), a.push(0, 0, 1), c.x = (s[h] / t + 1) / 2, c.y = (s[h + 1] / t + 1) / 2, o.push(c.x, c.y);
            }
            for(let t120 = 1; t120 <= e; t120++)r.push(t120, t120 + 1, 0);
            this.setIndex(r), this.setAttribute("position", new wi(s, 3)), this.setAttribute("normal", new wi(a, 3)), this.setAttribute("uv", new wi(o, 2));
        }
        static fromJSON(t) {
            return new Lo(t.radius, t.segments, t.thetaStart, t.thetaLength);
        }
    }
    class Ro extends Pi {
        constructor(t = 1, e98 = 1, i59 = 1, n49 = 8, r38 = 1, s22 = !1, a = 0, o = 2 * Math.PI){
            super(), this.type = "CylinderGeometry", this.parameters = {
                radiusTop: t,
                radiusBottom: e98,
                height: i59,
                radialSegments: n49,
                heightSegments: r38,
                openEnded: s22,
                thetaStart: a,
                thetaLength: o
            };
            const l12 = this;
            n49 = Math.floor(n49), r38 = Math.floor(r38);
            const c11 = [], h = [], u = [], d = [];
            let p = 0;
            const m6 = [], f = i59 / 2;
            let g5 = 0;
            function v4(i) {
                const r = p, s = new Et, m = new ee;
                let v = 0;
                const x = !0 === i ? t : e98, y = !0 === i ? 1 : -1;
                for(let t123 = 1; t123 <= n49; t123++)h.push(0, f * y, 0), u.push(0, y, 0), d.push(.5, .5), p++;
                const _ = p;
                for(let t121 = 0; t121 <= n49; t121++){
                    const e = t121 / n49 * o + a, i = Math.cos(e), r = Math.sin(e);
                    m.x = x * r, m.y = f * y, m.z = x * i, h.push(m.x, m.y, m.z), u.push(0, y, 0), s.x = .5 * i + .5, s.y = .5 * r * y + .5, d.push(s.x, s.y), p++;
                }
                for(let t122 = 0; t122 < n49; t122++){
                    const e = r + t122, n = _ + t122;
                    !0 === i ? c11.push(n, n + 1, e) : c11.push(n + 1, n, e), v += 3;
                }
                l12.addGroup(g5, v, !0 === i ? 1 : 2), g5 += v;
            }
            !function() {
                const s = new ee, v = new ee;
                let x = 0;
                const y = (e98 - t) / i59;
                for(let l = 0; l <= r38; l++){
                    const c = [], g = l / r38, x = g * (e98 - t) + t;
                    for(let t125 = 0; t125 <= n49; t125++){
                        const e = t125 / n49, r = e * o + a, l = Math.sin(r), m = Math.cos(r);
                        v.x = x * l, v.y = -g * i59 + f, v.z = x * m, h.push(v.x, v.y, v.z), s.set(l, y, m).normalize(), u.push(s.x, s.y, s.z), d.push(e, 1 - g), c.push(p++);
                    }
                    m6.push(c);
                }
                for(let t124 = 0; t124 < n49; t124++)for(let e = 0; e < r38; e++){
                    const i = m6[e][t124], n = m6[e + 1][t124], r = m6[e + 1][t124 + 1], s = m6[e][t124 + 1];
                    c11.push(i, n, s), c11.push(n, r, s), x += 6;
                }
                l12.addGroup(g5, x, 0), g5 += x;
            }(), !1 === s22 && (t > 0 && v4(!0), e98 > 0 && v4(!1)), this.setIndex(c11), this.setAttribute("position", new wi(h, 3)), this.setAttribute("normal", new wi(u, 3)), this.setAttribute("uv", new wi(d, 2));
        }
        static fromJSON(t) {
            return new Ro(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
        }
    }
    class Po extends Ro {
        constructor(t = 1, e = 1, i = 8, n = 1, r = !1, s = 0, a = 2 * Math.PI){
            super(0, t, e, i, n, r, s, a), this.type = "ConeGeometry", this.parameters = {
                radius: t,
                height: e,
                radialSegments: i,
                heightSegments: n,
                openEnded: r,
                thetaStart: s,
                thetaLength: a
            };
        }
        static fromJSON(t) {
            return new Po(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
        }
    }
    class Io extends Pi {
        constructor(t128 = [], e100 = [], i60 = 1, n51 = 0){
            super(), this.type = "PolyhedronGeometry", this.parameters = {
                vertices: t128,
                indices: e100,
                radius: i60,
                detail: n51
            };
            const r39 = [], s23 = [];
            function a19(t, e, i, n) {
                const r = n + 1, s = [];
                for(let n50 = 0; n50 <= r; n50++){
                    s[n50] = [];
                    const a = t.clone().lerp(i, n50 / r), o = e.clone().lerp(i, n50 / r), l = r - n50;
                    for(let t129 = 0; t129 <= l; t129++)s[n50][t129] = 0 === t129 && n50 === r ? a : a.clone().lerp(o, t129 / l);
                }
                for(let t127 = 0; t127 < r; t127++)for(let e99 = 0; e99 < 2 * (r - t127) - 1; e99++){
                    const i = Math.floor(e99 / 2);
                    e99 % 2 == 0 ? (o15(s[t127][i + 1]), o15(s[t127 + 1][i]), o15(s[t127][i])) : (o15(s[t127][i + 1]), o15(s[t127 + 1][i + 1]), o15(s[t127 + 1][i]));
                }
            }
            function o15(t) {
                r39.push(t.x, t.y, t.z);
            }
            function l13(e, i) {
                const n = 3 * e;
                i.x = t128[n + 0], i.y = t128[n + 1], i.z = t128[n + 2];
            }
            function c(t, e, i, n) {
                n < 0 && 1 === t.x && (s23[e] = t.x - 1), 0 === i.x && 0 === i.z && (s23[e] = n / 2 / Math.PI + .5);
            }
            function h(t) {
                return Math.atan2(t.z, -t.x);
            }
            !function(t) {
                const i = new ee, n = new ee, r = new ee;
                for(let s = 0; s < e100.length; s += 3)l13(e100[s + 0], i), l13(e100[s + 1], n), l13(e100[s + 2], r), a19(i, n, r, t);
            }(n51), function(t) {
                const e = new ee;
                for(let i = 0; i < r39.length; i += 3)e.x = r39[i + 0], e.y = r39[i + 1], e.z = r39[i + 2], e.normalize().multiplyScalar(t), r39[i + 0] = e.x, r39[i + 1] = e.y, r39[i + 2] = e.z;
            }(i60), function() {
                const t130 = new ee;
                for(let i61 = 0; i61 < r39.length; i61 += 3){
                    t130.x = r39[i61 + 0], t130.y = r39[i61 + 1], t130.z = r39[i61 + 2];
                    const n = h(t130) / 2 / Math.PI + .5, a = (e101 = t130, Math.atan2(-e101.y, Math.sqrt(e101.x * e101.x + e101.z * e101.z)) / Math.PI + .5);
                    s23.push(n, 1 - a);
                }
                var e101;
                (function() {
                    const t = new ee, e = new ee, i = new ee, n = new ee, a = new Et, o = new Et, l = new Et;
                    for(let u = 0, d = 0; u < r39.length; u += 9, d += 6){
                        t.set(r39[u + 0], r39[u + 1], r39[u + 2]), e.set(r39[u + 3], r39[u + 4], r39[u + 5]), i.set(r39[u + 6], r39[u + 7], r39[u + 8]), a.set(s23[d + 0], s23[d + 1]), o.set(s23[d + 2], s23[d + 3]), l.set(s23[d + 4], s23[d + 5]), n.copy(t).add(e).add(i).divideScalar(3);
                        const p = h(n);
                        c(a, d + 0, t, p), c(o, d + 2, e, p), c(l, d + 4, i, p);
                    }
                })(), function() {
                    for(let t = 0; t < s23.length; t += 6){
                        const e = s23[t + 0], i = s23[t + 2], n = s23[t + 4], r = Math.max(e, i, n), a = Math.min(e, i, n);
                        r > .9 && a < .1 && (e < .2 && (s23[t + 0] += 1), i < .2 && (s23[t + 2] += 1), n < .2 && (s23[t + 4] += 1));
                    }
                }();
            }(), this.setAttribute("position", new wi(r39, 3)), this.setAttribute("normal", new wi(r39.slice(), 3)), this.setAttribute("uv", new wi(s23, 2)), 0 === n51 ? this.computeVertexNormals() : this.normalizeNormals();
        }
        static fromJSON(t) {
            return new Io(t.vertices, t.indices, t.radius, t.details);
        }
    }
    class Do extends Io {
        constructor(t = 1, e = 0){
            const i = (1 + Math.sqrt(5)) / 2, n = 1 / i;
            super([
                -1,
                -1,
                -1,
                -1,
                -1,
                1,
                -1,
                1,
                -1,
                -1,
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                1,
                1,
                -1,
                1,
                1,
                1,
                0,
                -n,
                -i,
                0,
                -n,
                i,
                0,
                n,
                -i,
                0,
                n,
                i,
                -n,
                -i,
                0,
                -n,
                i,
                0,
                n,
                -i,
                0,
                n,
                i,
                0,
                -i,
                0,
                -n,
                i,
                0,
                -n,
                -i,
                0,
                n,
                i,
                0,
                n
            ], [
                3,
                11,
                7,
                3,
                7,
                15,
                3,
                15,
                13,
                7,
                19,
                17,
                7,
                17,
                6,
                7,
                6,
                15,
                17,
                4,
                8,
                17,
                8,
                10,
                17,
                10,
                6,
                8,
                0,
                16,
                8,
                16,
                2,
                8,
                2,
                10,
                0,
                12,
                1,
                0,
                1,
                18,
                0,
                18,
                16,
                6,
                10,
                2,
                6,
                2,
                13,
                6,
                13,
                15,
                2,
                16,
                18,
                2,
                18,
                3,
                2,
                3,
                13,
                18,
                1,
                9,
                18,
                9,
                11,
                18,
                11,
                3,
                4,
                14,
                12,
                4,
                12,
                0,
                4,
                0,
                8,
                11,
                9,
                5,
                11,
                5,
                19,
                11,
                19,
                7,
                19,
                5,
                14,
                19,
                14,
                4,
                19,
                4,
                17,
                1,
                12,
                14,
                1,
                14,
                5,
                1,
                5,
                9
            ], t, e), this.type = "DodecahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            };
        }
        static fromJSON(t) {
            return new Do(t.radius, t.detail);
        }
    }
    const No = new ee, zo = new ee, Oo = new ee, Fo = new mi;
    class Bo extends Pi {
        constructor(t = null, e = 1){
            if (super(), this.type = "EdgesGeometry", this.parameters = {
                geometry: t,
                thresholdAngle: e
            }, null !== t) {
                const i = 4, n = Math.pow(10, i), r = Math.cos(vt1 * e), s = t.getIndex(), a = t.getAttribute("position"), o = s ? s.count : a.count, l = [
                    0,
                    0,
                    0
                ], c = [
                    "a",
                    "b",
                    "c"
                ], h = new Array(3), u = {}, d = [];
                for(let t132 = 0; t132 < o; t132 += 3){
                    s ? (l[0] = s.getX(t132), l[1] = s.getX(t132 + 1), l[2] = s.getX(t132 + 2)) : (l[0] = t132, l[1] = t132 + 1, l[2] = t132 + 2);
                    const { a: e , b: i , c: o  } = Fo;
                    if (e.fromBufferAttribute(a, l[0]), i.fromBufferAttribute(a, l[1]), o.fromBufferAttribute(a, l[2]), Fo.getNormal(Oo), h[0] = `${Math.round(e.x * n)},${Math.round(e.y * n)},${Math.round(e.z * n)}`, h[1] = `${Math.round(i.x * n)},${Math.round(i.y * n)},${Math.round(i.z * n)}`, h[2] = `${Math.round(o.x * n)},${Math.round(o.y * n)},${Math.round(o.z * n)}`, h[0] !== h[1] && h[1] !== h[2] && h[2] !== h[0]) for(let t = 0; t < 3; t++){
                        const e = (t + 1) % 3, i = h[t], n = h[e], s = Fo[c[t]], a = Fo[c[e]], o = `${i}_${n}`, p = `${n}_${i}`;
                        p in u && u[p] ? (Oo.dot(u[p].normal) <= r && (d.push(s.x, s.y, s.z), d.push(a.x, a.y, a.z)), u[p] = null) : o in u || (u[o] = {
                            index0: l[t],
                            index1: l[e],
                            normal: Oo.clone()
                        });
                    }
                }
                for(const t131 in u)if (u[t131]) {
                    const { index0: e , index1: i  } = u[t131];
                    No.fromBufferAttribute(a, e), zo.fromBufferAttribute(a, i), d.push(No.x, No.y, No.z), d.push(zo.x, zo.y, zo.z);
                }
                this.setAttribute("position", new wi(d, 3));
            }
        }
    }
    class Uo extends Ao {
        constructor(t){
            super(t), this.uuid = yt1(), this.type = "Shape", this.holes = [];
        }
        getPointsHoles(t) {
            const e = [];
            for(let i = 0, n = this.holes.length; i < n; i++)e[i] = this.holes[i].getPoints(t);
            return e;
        }
        extractPoints(t) {
            return {
                shape: this.getPoints(t),
                holes: this.getPointsHoles(t)
            };
        }
        copy(t) {
            super.copy(t), this.holes = [];
            for(let e = 0, i = t.holes.length; e < i; e++){
                const i = t.holes[e];
                this.holes.push(i.clone());
            }
            return this;
        }
        toJSON() {
            const t = super.toJSON();
            t.uuid = this.uuid, t.holes = [];
            for(let e = 0, i = this.holes.length; e < i; e++){
                const i = this.holes[e];
                t.holes.push(i.toJSON());
            }
            return t;
        }
        fromJSON(t) {
            super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
            for(let e = 0, i = t.holes.length; e < i; e++){
                const i = t.holes[e];
                this.holes.push((new Ao).fromJSON(i));
            }
            return this;
        }
    }
    const ko = function(t133, e102, i62 = 2) {
        const n52 = e102 && e102.length, r40 = n52 ? e102[0] * i62 : t133.length;
        let s24 = Go(t133, 0, r40, i62, !0);
        const a20 = [];
        if (!s24 || s24.next === s24.prev) return a20;
        let o16, l14, c12, h, u, d, p;
        if (n52 && (s24 = function(t, e, i, n) {
            const r = [];
            let s, a, o, l, c;
            for(s = 0, a = e.length; s < a; s++)o = e[s] * n, l = s < a - 1 ? e[s + 1] * n : t.length, c = Go(t, o, l, n, !1), c === c.next && (c.steiner = !0), r.push(Qo(c));
            for(r.sort(Jo), s = 0; s < r.length; s++)Yo(r[s], i), i = Vo(i, i.next);
            return i;
        }(t133, e102, s24, i62)), t133.length > 80 * i62) {
            o16 = c12 = t133[0], l14 = h = t133[1];
            for(let e = i62; e < r40; e += i62)u = t133[e], d = t133[e + 1], u < o16 && (o16 = u), d < l14 && (l14 = d), u > c12 && (c12 = u), d > h && (h = d);
            p = Math.max(c12 - o16, h - l14), p = 0 !== p ? 1 / p : 0;
        }
        return Ho(s24, a20, i62, o16, l14, p), a20;
    };
    function Go(t134, e103, i63, n53, r41) {
        let s25, a21;
        if (r41 === function(t, e, i, n) {
            let r = 0;
            for(let s = e, a = i - n; s < i; s += n)r += (t[a] - t[s]) * (t[s + 1] + t[a + 1]), a = s;
            return r;
        }(t134, e103, i63, n53) > 0) for(s25 = e103; s25 < i63; s25 += n53)a21 = ll(s25, t134[s25], t134[s25 + 1], a21);
        else for(s25 = i63 - n53; s25 >= e103; s25 -= n53)a21 = ll(s25, t134[s25], t134[s25 + 1], a21);
        return a21 && il(a21, a21.next) && (cl(a21), a21 = a21.next), a21;
    }
    function Vo(t, e) {
        if (!t) return t;
        e || (e = t);
        let i, n = t;
        do if (i = !1, n.steiner || !il(n, n.next) && 0 !== el(n.prev, n, n.next)) n = n.next;
        else {
            if (cl(n), n = e = n.prev, n === n.next) break;
            i = !0;
        }
        while (i || n !== e);
        return e;
    }
    function Ho(t135, e104, i64, n54, r42, s26, a22) {
        if (!t135) return;
        !a22 && s26 && function(t136, e105, i65, n55) {
            let r43 = t136;
            do null === r43.z && (r43.z = Ko(r43.x, r43.y, e105, i65, n55)), r43.prevZ = r43.prev, r43.nextZ = r43.next, r43 = r43.next;
            while (r43 !== t136);
            r43.prevZ.nextZ = null, r43.prevZ = null, function(t) {
                let e, i, n, r, s, a, o, l, c = 1;
                do {
                    for(i = t, t = null, s = null, a = 0; i;){
                        for(a++, n = i, o = 0, e = 0; e < c && (o++, n = n.nextZ, n); e++);
                        for(l = c; o > 0 || l > 0 && n;)0 !== o && (0 === l || !n || i.z <= n.z) ? (r = i, i = i.nextZ, o--) : (r = n, n = n.nextZ, l--), s ? s.nextZ = r : t = r, r.prevZ = s, s = r;
                        i = n;
                    }
                    s.nextZ = null, c *= 2;
                }while (a > 1);
            }(r43);
        }(t135, n54, r42, s26);
        let o17, l15, c13 = t135;
        for(; t135.prev !== t135.next;)if (o17 = t135.prev, l15 = t135.next, s26 ? jo(t135, n54, r42, s26) : Wo(t135)) e104.push(o17.i / i64), e104.push(t135.i / i64), e104.push(l15.i / i64), cl(t135), t135 = l15.next, c13 = l15.next;
        else if ((t135 = l15) === c13) {
            a22 ? 1 === a22 ? Ho(t135 = qo(Vo(t135), e104, i64), e104, i64, n54, r42, s26, 2) : 2 === a22 && Xo(t135, e104, i64, n54, r42, s26) : Ho(Vo(t135), e104, i64, n54, r42, s26, 1);
            break;
        }
    }
    function Wo(t) {
        const e = t.prev, i = t, n = t.next;
        if (el(e, i, n) >= 0) return !1;
        let r = t.next.next;
        for(; r !== t.prev;){
            if ($o(e.x, e.y, i.x, i.y, n.x, n.y, r.x, r.y) && el(r.prev, r, r.next) >= 0) return !1;
            r = r.next;
        }
        return !0;
    }
    function jo(t, e, i, n) {
        const r = t.prev, s = t, a = t.next;
        if (el(r, s, a) >= 0) return !1;
        const o = r.x < s.x ? r.x < a.x ? r.x : a.x : s.x < a.x ? s.x : a.x, l = r.y < s.y ? r.y < a.y ? r.y : a.y : s.y < a.y ? s.y : a.y, c = r.x > s.x ? r.x > a.x ? r.x : a.x : s.x > a.x ? s.x : a.x, h = r.y > s.y ? r.y > a.y ? r.y : a.y : s.y > a.y ? s.y : a.y, u = Ko(o, l, e, i, n), d = Ko(c, h, e, i, n);
        let p = t.prevZ, m = t.nextZ;
        for(; p && p.z >= u && m && m.z <= d;){
            if (p !== t.prev && p !== t.next && $o(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && el(p.prev, p, p.next) >= 0) return !1;
            if (p = p.prevZ, m !== t.prev && m !== t.next && $o(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && el(m.prev, m, m.next) >= 0) return !1;
            m = m.nextZ;
        }
        for(; p && p.z >= u;){
            if (p !== t.prev && p !== t.next && $o(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) && el(p.prev, p, p.next) >= 0) return !1;
            p = p.prevZ;
        }
        for(; m && m.z <= d;){
            if (m !== t.prev && m !== t.next && $o(r.x, r.y, s.x, s.y, a.x, a.y, m.x, m.y) && el(m.prev, m, m.next) >= 0) return !1;
            m = m.nextZ;
        }
        return !0;
    }
    function qo(t, e, i) {
        let n = t;
        do {
            const r = n.prev, s = n.next.next;
            !il(r, s) && nl(r, n, n.next, s) && al(r, s) && al(s, r) && (e.push(r.i / i), e.push(n.i / i), e.push(s.i / i), cl(n), cl(n.next), n = t = s), n = n.next;
        }while (n !== t);
        return Vo(n);
    }
    function Xo(t, e, i, n, r, s) {
        let a = t;
        do {
            let t = a.next.next;
            for(; t !== a.prev;){
                if (a.i !== t.i && tl(a, t)) {
                    let o = ol(a, t);
                    return a = Vo(a, a.next), o = Vo(o, o.next), Ho(a, e, i, n, r, s), void Ho(o, e, i, n, r, s);
                }
                t = t.next;
            }
            a = a.next;
        }while (a !== t);
    }
    function Jo(t, e) {
        return t.x - e.x;
    }
    function Yo(t137, e106) {
        if (e106 = function(t, e) {
            let i = e;
            const n = t.x, r = t.y;
            let s, a = -1 / 0;
            do {
                if (r <= i.y && r >= i.next.y && i.next.y !== i.y) {
                    const t = i.x + (r - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                    if (t <= n && t > a) {
                        if (a = t, t === n) {
                            if (r === i.y) return i;
                            if (r === i.next.y) return i.next;
                        }
                        s = i.x < i.next.x ? i : i.next;
                    }
                }
                i = i.next;
            }while (i !== e);
            if (!s) return null;
            if (n === a) return s;
            const o = s, l = s.x, c = s.y;
            let h, u = 1 / 0;
            i = s;
            do n >= i.x && i.x >= l && n !== i.x && $o(r < c ? n : a, r, l, c, r < c ? a : n, r, i.x, i.y) && (h = Math.abs(r - i.y) / (n - i.x), al(i, t) && (h < u || h === u && (i.x > s.x || i.x === s.x && Zo(s, i))) && (s = i, u = h)), i = i.next;
            while (i !== o);
            return s;
        }(t137, e106), e106) {
            const i = ol(e106, t137);
            Vo(e106, e106.next), Vo(i, i.next);
        }
    }
    function Zo(t, e) {
        return el(t.prev, t, e.prev) < 0 && el(e.next, t, t.next) < 0;
    }
    function Ko(t, e, i, n, r) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
    }
    function Qo(t) {
        let e = t, i = t;
        do (e.x < i.x || e.x === i.x && e.y < i.y) && (i = e), e = e.next;
        while (e !== t);
        return i;
    }
    function $o(t, e, i, n, r, s, a, o) {
        return (r - a) * (e - o) - (t - a) * (s - o) >= 0 && (t - a) * (n - o) - (i - a) * (e - o) >= 0 && (i - a) * (s - o) - (r - a) * (n - o) >= 0;
    }
    function tl(t138, e107) {
        return t138.next.i !== e107.i && t138.prev.i !== e107.i && !function(t, e) {
            let i = t;
            do {
                if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && nl(i, i.next, t, e)) return !0;
                i = i.next;
            }while (i !== t);
            return !1;
        }(t138, e107) && (al(t138, e107) && al(e107, t138) && function(t, e) {
            let i = t, n = !1;
            const r = (t.x + e.x) / 2, s = (t.y + e.y) / 2;
            do i.y > s != i.next.y > s && i.next.y !== i.y && r < (i.next.x - i.x) * (s - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next;
            while (i !== t);
            return n;
        }(t138, e107) && (el(t138.prev, t138, e107.prev) || el(t138, e107.prev, e107)) || il(t138, e107) && el(t138.prev, t138, t138.next) > 0 && el(e107.prev, e107, e107.next) > 0);
    }
    function el(t, e, i) {
        return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y);
    }
    function il(t, e) {
        return t.x === e.x && t.y === e.y;
    }
    function nl(t, e, i, n) {
        const r = sl(el(t, e, i)), s = sl(el(t, e, n)), a = sl(el(i, n, t)), o = sl(el(i, n, e));
        return r !== s && a !== o || !(0 !== r || !rl(t, i, e)) || !(0 !== s || !rl(t, n, e)) || !(0 !== a || !rl(i, t, n)) || !(0 !== o || !rl(i, e, n));
    }
    function rl(t, e, i) {
        return e.x <= Math.max(t.x, i.x) && e.x >= Math.min(t.x, i.x) && e.y <= Math.max(t.y, i.y) && e.y >= Math.min(t.y, i.y);
    }
    function sl(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0;
    }
    function al(t, e) {
        return el(t.prev, t, t.next) < 0 ? el(t, e, t.next) >= 0 && el(t, t.prev, e) >= 0 : el(t, e, t.prev) < 0 || el(t, t.next, e) < 0;
    }
    function ol(t, e) {
        const i = new hl(t.i, t.x, t.y), n = new hl(e.i, e.x, e.y), r = t.next, s = e.prev;
        return t.next = e, e.prev = t, i.next = r, r.prev = i, n.next = i, i.prev = n, s.next = n, n.prev = s, n;
    }
    function ll(t, e, i, n) {
        const r = new hl(t, e, i);
        return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r;
    }
    function cl(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ);
    }
    function hl(t, e, i) {
        this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
    }
    class ul {
        static area(t) {
            const e = t.length;
            let i = 0;
            for(let n = e - 1, r = 0; r < e; n = r++)i += t[n].x * t[r].y - t[r].x * t[n].y;
            return .5 * i;
        }
        static isClockWise(t) {
            return ul.area(t) < 0;
        }
        static triangulateShape(t, e) {
            const i = [], n = [], r = [];
            dl(t), pl(i, t);
            let s = t.length;
            e.forEach(dl);
            for(let t139 = 0; t139 < e.length; t139++)n.push(s), s += e[t139].length, pl(i, e[t139]);
            const a = ko(i, n);
            for(let t140 = 0; t140 < a.length; t140 += 3)r.push(a.slice(t140, t140 + 3));
            return r;
        }
    }
    function dl(t) {
        const e = t.length;
        e > 2 && t[e - 1].equals(t[0]) && t.pop();
    }
    function pl(t, e) {
        for(let i = 0; i < e.length; i++)t.push(e[i].x), t.push(e[i].y);
    }
    class ml extends Pi {
        constructor(t148 = new Uo([
            new Et(.5, .5),
            new Et(-0.5, .5),
            new Et(-0.5, -0.5),
            new Et(.5, -0.5)
        ]), e113 = {}){
            super(), this.type = "ExtrudeGeometry", this.parameters = {
                shapes: t148,
                options: e113
            }, t148 = Array.isArray(t148) ? t148 : [
                t148
            ];
            const i67 = this, n56 = [], r44 = [];
            for(let e108 = 0, i66 = t148.length; e108 < i66; e108++)s27(t148[e108]);
            function s27(t149) {
                const s28 = [], a23 = void 0 !== e113.curveSegments ? e113.curveSegments : 12, o18 = void 0 !== e113.steps ? e113.steps : 1;
                let l16 = void 0 !== e113.depth ? e113.depth : 1, c14 = void 0 === e113.bevelEnabled || e113.bevelEnabled, h8 = void 0 !== e113.bevelThickness ? e113.bevelThickness : .2, u8 = void 0 !== e113.bevelSize ? e113.bevelSize : h8 - .1, d6 = void 0 !== e113.bevelOffset ? e113.bevelOffset : 0, p7 = void 0 !== e113.bevelSegments ? e113.bevelSegments : 3;
                const m7 = e113.extrudePath, f4 = void 0 !== e113.UVGenerator ? e113.UVGenerator : fl;
                void 0 !== e113.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), l16 = e113.amount);
                let g6, v, x, y, _, M = !1;
                m7 && (g6 = m7.getSpacedPoints(o18), M = !0, c14 = !1, v = m7.computeFrenetFrames(o18, !1), x = new ee, y = new ee, _ = new ee), c14 || (p7 = 0, h8 = 0, u8 = 0, d6 = 0);
                const b = t149.extractPoints(a23);
                let w = b.shape;
                const S = b.holes;
                if (!ul.isClockWise(w)) {
                    w = w.reverse();
                    for(let t = 0, e = S.length; t < e; t++){
                        const e = S[t];
                        ul.isClockWise(e) && (S[t] = e.reverse());
                    }
                }
                const T = ul.triangulateShape(w, S), A = w;
                for(let t141 = 0, e112 = S.length; t141 < e112; t141++){
                    const e = S[t141];
                    w = w.concat(e);
                }
                function E(t, e, i) {
                    return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(i).add(t);
                }
                const C = w.length, L = T.length;
                function R(t, e, i) {
                    let n, r, s;
                    const a = t.x - e.x, o = t.y - e.y, l = i.x - t.x, c = i.y - t.y, h = a * a + o * o, u = a * c - o * l;
                    if (Math.abs(u) > Number.EPSILON) {
                        const u = Math.sqrt(h), d = Math.sqrt(l * l + c * c), p = e.x - o / u, m = e.y + a / u, f = ((i.x - c / d - p) * c - (i.y + l / d - m) * l) / (a * c - o * l);
                        n = p + a * f - t.x, r = m + o * f - t.y;
                        const g = n * n + r * r;
                        if (g <= 2) return new Et(n, r);
                        s = Math.sqrt(g / 2);
                    } else {
                        let t = !1;
                        a > Number.EPSILON ? l > Number.EPSILON && (t = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (t = !0) : Math.sign(o) === Math.sign(c) && (t = !0), t ? (n = -o, r = a, s = Math.sqrt(h)) : (n = a, r = o, s = Math.sqrt(h / 2));
                    }
                    return new Et(n / s, r / s);
                }
                const P = [];
                for(let t142 = 0, e109 = A.length, i68 = e109 - 1, n57 = t142 + 1; t142 < e109; t142++, i68++, n57++)i68 === e109 && (i68 = 0), n57 === e109 && (n57 = 0), P[t142] = R(A[t142], A[i68], A[n57]);
                const I = [];
                let D, N = P.concat();
                for(let t143 = 0, e110 = S.length; t143 < e110; t143++){
                    const e = S[t143];
                    D = [];
                    for(let t = 0, i = e.length, n = i - 1, r = t + 1; t < i; t++, n++, r++)n === i && (n = 0), r === i && (r = 0), D[t] = R(e[t], e[n], e[r]);
                    I.push(D), N = N.concat(D);
                }
                for(let t144 = 0; t144 < p7; t144++){
                    const e = t144 / p7, i = h8 * Math.cos(e * Math.PI / 2), n = u8 * Math.sin(e * Math.PI / 2) + d6;
                    for(let t = 0, e114 = A.length; t < e114; t++){
                        const e = E(A[t], P[t], n);
                        F(e.x, e.y, -i);
                    }
                    for(let t150 = 0, e115 = S.length; t150 < e115; t150++){
                        const e = S[t150];
                        D = I[t150];
                        for(let t = 0, r = e.length; t < r; t++){
                            const r = E(e[t], D[t], n);
                            F(r.x, r.y, -i);
                        }
                    }
                }
                const z = u8 + d6;
                for(let t145 = 0; t145 < C; t145++){
                    const e = c14 ? E(w[t145], N[t145], z) : w[t145];
                    M ? (y.copy(v.normals[0]).multiplyScalar(e.x), x.copy(v.binormals[0]).multiplyScalar(e.y), _.copy(g6[0]).add(y).add(x), F(_.x, _.y, _.z)) : F(e.x, e.y, 0);
                }
                for(let t146 = 1; t146 <= o18; t146++)for(let e111 = 0; e111 < C; e111++){
                    const i = c14 ? E(w[e111], N[e111], z) : w[e111];
                    M ? (y.copy(v.normals[t146]).multiplyScalar(i.x), x.copy(v.binormals[t146]).multiplyScalar(i.y), _.copy(g6[t146]).add(y).add(x), F(_.x, _.y, _.z)) : F(i.x, i.y, l16 / o18 * t146);
                }
                for(let t147 = p7 - 1; t147 >= 0; t147--){
                    const e = t147 / p7, i = h8 * Math.cos(e * Math.PI / 2), n = u8 * Math.sin(e * Math.PI / 2) + d6;
                    for(let t = 0, e116 = A.length; t < e116; t++){
                        const e = E(A[t], P[t], n);
                        F(e.x, e.y, l16 + i);
                    }
                    for(let t151 = 0, e117 = S.length; t151 < e117; t151++){
                        const e = S[t151];
                        D = I[t151];
                        for(let t = 0, r = e.length; t < r; t++){
                            const r = E(e[t], D[t], n);
                            M ? F(r.x, r.y + g6[o18 - 1].y, g6[o18 - 1].x + i) : F(r.x, r.y, l16 + i);
                        }
                    }
                }
                function O(t, e) {
                    let i = t.length;
                    for(; --i >= 0;){
                        const n = i;
                        let r = i - 1;
                        r < 0 && (r = t.length - 1);
                        for(let t152 = 0, i69 = o18 + 2 * p7; t152 < i69; t152++){
                            const i = C * t152, s = C * (t152 + 1);
                            U(e + n + i, e + r + i, e + r + s, e + n + s);
                        }
                    }
                }
                function F(t, e, i) {
                    s28.push(t), s28.push(e), s28.push(i);
                }
                function B(t, e, r) {
                    k(t), k(e), k(r);
                    const s = n56.length / 3, a = f4.generateTopUV(i67, n56, s - 3, s - 2, s - 1);
                    G(a[0]), G(a[1]), G(a[2]);
                }
                function U(t, e, r, s) {
                    k(t), k(e), k(s), k(e), k(r), k(s);
                    const a = n56.length / 3, o = f4.generateSideWallUV(i67, n56, a - 6, a - 3, a - 2, a - 1);
                    G(o[0]), G(o[1]), G(o[3]), G(o[1]), G(o[2]), G(o[3]);
                }
                function k(t) {
                    n56.push(s28[3 * t + 0]), n56.push(s28[3 * t + 1]), n56.push(s28[3 * t + 2]);
                }
                function G(t) {
                    r44.push(t.x), r44.push(t.y);
                }
                !function() {
                    const t = n56.length / 3;
                    if (c14) {
                        let t = 0, e = C * t;
                        for(let t153 = 0; t153 < L; t153++){
                            const i = T[t153];
                            B(i[2] + e, i[1] + e, i[0] + e);
                        }
                        t = o18 + 2 * p7, e = C * t;
                        for(let t154 = 0; t154 < L; t154++){
                            const i = T[t154];
                            B(i[0] + e, i[1] + e, i[2] + e);
                        }
                    } else {
                        for(let t = 0; t < L; t++){
                            const e = T[t];
                            B(e[2], e[1], e[0]);
                        }
                        for(let t155 = 0; t155 < L; t155++){
                            const e = T[t155];
                            B(e[0] + C * o18, e[1] + C * o18, e[2] + C * o18);
                        }
                    }
                    i67.addGroup(t, n56.length / 3 - t, 0);
                }(), function() {
                    const t = n56.length / 3;
                    let e = 0;
                    O(A, e), e += A.length;
                    for(let t156 = 0, i = S.length; t156 < i; t156++){
                        const i = S[t156];
                        O(i, e), e += i.length;
                    }
                    i67.addGroup(t, n56.length / 3 - t, 1);
                }();
            }
            this.setAttribute("position", new wi(n56, 3)), this.setAttribute("uv", new wi(r44, 2)), this.computeVertexNormals();
        }
        toJSON() {
            const t157 = super.toJSON();
            return function(t, e, i) {
                if (i.shapes = [], Array.isArray(t)) for(let e118 = 0, n = t.length; e118 < n; e118++){
                    const n = t[e118];
                    i.shapes.push(n.uuid);
                }
                else i.shapes.push(t.uuid);
                i.options = Object.assign({}, e), void 0 !== e.extrudePath && (i.options.extrudePath = e.extrudePath.toJSON());
                return i;
            }(this.parameters.shapes, this.parameters.options, t157);
        }
        static fromJSON(t, e) {
            const i = [];
            for(let n = 0, r = t.shapes.length; n < r; n++){
                const r = e[t.shapes[n]];
                i.push(r);
            }
            const n58 = t.options.extrudePath;
            return void 0 !== n58 && (t.options.extrudePath = (new So[n58.type]).fromJSON(n58)), new ml(i, t.options);
        }
    }
    const fl = {
        generateTopUV: function(t, e, i, n, r) {
            const s = e[3 * i], a = e[3 * i + 1], o = e[3 * n], l = e[3 * n + 1], c = e[3 * r], h = e[3 * r + 1];
            return [
                new Et(s, a),
                new Et(o, l),
                new Et(c, h)
            ];
        },
        generateSideWallUV: function(t, e, i, n, r, s) {
            const a = e[3 * i], o = e[3 * i + 1], l = e[3 * i + 2], c = e[3 * n], h = e[3 * n + 1], u = e[3 * n + 2], d = e[3 * r], p = e[3 * r + 1], m = e[3 * r + 2], f = e[3 * s], g = e[3 * s + 1], v = e[3 * s + 2];
            return Math.abs(o - h) < Math.abs(a - c) ? [
                new Et(a, 1 - l),
                new Et(c, 1 - u),
                new Et(d, 1 - m),
                new Et(f, 1 - v)
            ] : [
                new Et(o, 1 - l),
                new Et(h, 1 - u),
                new Et(p, 1 - m),
                new Et(g, 1 - v)
            ];
        }
    };
    class gl extends Io {
        constructor(t = 1, e = 0){
            const i = (1 + Math.sqrt(5)) / 2;
            super([
                -1,
                i,
                0,
                1,
                i,
                0,
                -1,
                -i,
                0,
                1,
                -i,
                0,
                0,
                -1,
                i,
                0,
                1,
                i,
                0,
                -1,
                -i,
                0,
                1,
                -i,
                i,
                0,
                -1,
                i,
                0,
                1,
                -i,
                0,
                -1,
                -i,
                0,
                1
            ], [
                0,
                11,
                5,
                0,
                5,
                1,
                0,
                1,
                7,
                0,
                7,
                10,
                0,
                10,
                11,
                1,
                5,
                9,
                5,
                11,
                4,
                11,
                10,
                2,
                10,
                7,
                6,
                7,
                1,
                8,
                3,
                9,
                4,
                3,
                4,
                2,
                3,
                2,
                6,
                3,
                6,
                8,
                3,
                8,
                9,
                4,
                9,
                5,
                2,
                4,
                11,
                6,
                2,
                10,
                8,
                6,
                7,
                9,
                8,
                1
            ], t, e), this.type = "IcosahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            };
        }
        static fromJSON(t) {
            return new gl(t.radius, t.detail);
        }
    }
    class vl extends Io {
        constructor(t = 1, e = 0){
            super([
                1,
                0,
                0,
                -1,
                0,
                0,
                0,
                1,
                0,
                0,
                -1,
                0,
                0,
                0,
                1,
                0,
                0,
                -1
            ], [
                0,
                2,
                4,
                0,
                4,
                3,
                0,
                3,
                5,
                0,
                5,
                2,
                1,
                2,
                5,
                1,
                5,
                3,
                1,
                3,
                4,
                1,
                4,
                2
            ], t, e), this.type = "OctahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            };
        }
        static fromJSON(t) {
            return new vl(t.radius, t.detail);
        }
    }
    class xl extends Pi {
        constructor(t = .5, e = 1, i = 8, n = 1, r = 0, s = 2 * Math.PI){
            super(), this.type = "RingGeometry", this.parameters = {
                innerRadius: t,
                outerRadius: e,
                thetaSegments: i,
                phiSegments: n,
                thetaStart: r,
                thetaLength: s
            }, i = Math.max(3, i);
            const a = [], o = [], l = [], c = [];
            let h = t;
            const u = (e - t) / (n = Math.max(1, n)), d = new ee, p = new Et;
            for(let t158 = 0; t158 <= n; t158++){
                for(let t = 0; t <= i; t++){
                    const n = r + t / i * s;
                    d.x = h * Math.cos(n), d.y = h * Math.sin(n), o.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (d.x / e + 1) / 2, p.y = (d.y / e + 1) / 2, c.push(p.x, p.y);
                }
                h += u;
            }
            for(let t159 = 0; t159 < n; t159++){
                const e = t159 * (i + 1);
                for(let t = 0; t < i; t++){
                    const n = t + e, r = n, s = n + i + 1, o = n + i + 2, l = n + 1;
                    a.push(r, s, l), a.push(s, o, l);
                }
            }
            this.setIndex(a), this.setAttribute("position", new wi(o, 3)), this.setAttribute("normal", new wi(l, 3)), this.setAttribute("uv", new wi(c, 2));
        }
        static fromJSON(t) {
            return new xl(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
        }
    }
    class yl extends Pi {
        constructor(t164 = new Uo([
            new Et(0, .5),
            new Et(-0.5, -0.5),
            new Et(.5, -0.5)
        ]), e124 = 12){
            super(), this.type = "ShapeGeometry", this.parameters = {
                shapes: t164,
                curveSegments: e124
            };
            const i = [], n59 = [], r45 = [], s29 = [];
            let a24 = 0, o = 0;
            if (!1 === Array.isArray(t164)) l17(t164);
            else for(let e119 = 0; e119 < t164.length; e119++)l17(t164[e119]), this.addGroup(a24, o, e119), a24 += o, o = 0;
            function l17(t) {
                const a = n59.length / 3, l = t.extractPoints(e124);
                let c = l.shape;
                const h = l.holes;
                !1 === ul.isClockWise(c) && (c = c.reverse());
                for(let t160 = 0, e123 = h.length; t160 < e123; t160++){
                    const e = h[t160];
                    !0 === ul.isClockWise(e) && (h[t160] = e.reverse());
                }
                const u = ul.triangulateShape(c, h);
                for(let t161 = 0, e120 = h.length; t161 < e120; t161++){
                    const e = h[t161];
                    c = c.concat(e);
                }
                for(let t162 = 0, e121 = c.length; t162 < e121; t162++){
                    const e = c[t162];
                    n59.push(e.x, e.y, 0), r45.push(0, 0, 1), s29.push(e.x, e.y);
                }
                for(let t163 = 0, e122 = u.length; t163 < e122; t163++){
                    const e = u[t163], n = e[0] + a, r = e[1] + a, s = e[2] + a;
                    i.push(n, r, s), o += 3;
                }
            }
            this.setIndex(i), this.setAttribute("position", new wi(n59, 3)), this.setAttribute("normal", new wi(r45, 3)), this.setAttribute("uv", new wi(s29, 2));
        }
        toJSON() {
            const t165 = super.toJSON();
            return function(t, e) {
                if (e.shapes = [], Array.isArray(t)) for(let i = 0, n = t.length; i < n; i++){
                    const n = t[i];
                    e.shapes.push(n.uuid);
                }
                else e.shapes.push(t.uuid);
                return e;
            }(this.parameters.shapes, t165);
        }
        static fromJSON(t, e) {
            const i = [];
            for(let n = 0, r = t.shapes.length; n < r; n++){
                const r = e[t.shapes[n]];
                i.push(r);
            }
            return new yl(i, t.curveSegments);
        }
    }
    class _l extends Pi {
        constructor(t = 1, e = 32, i = 16, n = 0, r = 2 * Math.PI, s = 0, a = Math.PI){
            super(), this.type = "SphereGeometry", this.parameters = {
                radius: t,
                widthSegments: e,
                heightSegments: i,
                phiStart: n,
                phiLength: r,
                thetaStart: s,
                thetaLength: a
            }, e = Math.max(3, Math.floor(e)), i = Math.max(2, Math.floor(i));
            const o = Math.min(s + a, Math.PI);
            let l = 0;
            const c = [], h = new ee, u = new ee, d = [], p = [], m = [], f = [];
            for(let d7 = 0; d7 <= i; d7++){
                const g = [], v = d7 / i;
                let x = 0;
                0 == d7 && 0 == s ? x = .5 / e : d7 == i && o == Math.PI && (x = -0.5 / e);
                for(let i70 = 0; i70 <= e; i70++){
                    const o = i70 / e;
                    h.x = -t * Math.cos(n + o * r) * Math.sin(s + v * a), h.y = t * Math.cos(s + v * a), h.z = t * Math.sin(n + o * r) * Math.sin(s + v * a), p.push(h.x, h.y, h.z), u.copy(h).normalize(), m.push(u.x, u.y, u.z), f.push(o + x, 1 - v), g.push(l++);
                }
                c.push(g);
            }
            for(let t166 = 0; t166 < i; t166++)for(let n60 = 0; n60 < e; n60++){
                const e = c[t166][n60 + 1], r = c[t166][n60], a = c[t166 + 1][n60], l = c[t166 + 1][n60 + 1];
                (0 !== t166 || s > 0) && d.push(e, r, l), (t166 !== i - 1 || o < Math.PI) && d.push(r, a, l);
            }
            this.setIndex(d), this.setAttribute("position", new wi(p, 3)), this.setAttribute("normal", new wi(m, 3)), this.setAttribute("uv", new wi(f, 2));
        }
        static fromJSON(t) {
            return new _l(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
        }
    }
    class Ml extends Io {
        constructor(t = 1, e = 0){
            super([
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                -1,
                1,
                -1,
                -1
            ], [
                2,
                1,
                0,
                0,
                3,
                2,
                1,
                3,
                0,
                2,
                3,
                1
            ], t, e), this.type = "TetrahedronGeometry", this.parameters = {
                radius: t,
                detail: e
            };
        }
        static fromJSON(t) {
            return new Ml(t.radius, t.detail);
        }
    }
    class bl extends Pi {
        constructor(t = 1, e = .4, i = 8, n = 6, r = 2 * Math.PI){
            super(), this.type = "TorusGeometry", this.parameters = {
                radius: t,
                tube: e,
                radialSegments: i,
                tubularSegments: n,
                arc: r
            }, i = Math.floor(i), n = Math.floor(n);
            const s = [], a = [], o = [], l = [], c = new ee, h = new ee, u = new ee;
            for(let s30 = 0; s30 <= i; s30++)for(let d = 0; d <= n; d++){
                const p = d / n * r, m = s30 / i * Math.PI * 2;
                h.x = (t + e * Math.cos(m)) * Math.cos(p), h.y = (t + e * Math.cos(m)) * Math.sin(p), h.z = e * Math.sin(m), a.push(h.x, h.y, h.z), c.x = t * Math.cos(p), c.y = t * Math.sin(p), u.subVectors(h, c).normalize(), o.push(u.x, u.y, u.z), l.push(d / n), l.push(s30 / i);
            }
            for(let t167 = 1; t167 <= i; t167++)for(let e125 = 1; e125 <= n; e125++){
                const i = (n + 1) * t167 + e125 - 1, r = (n + 1) * (t167 - 1) + e125 - 1, a = (n + 1) * (t167 - 1) + e125, o = (n + 1) * t167 + e125;
                s.push(i, r, o), s.push(r, a, o);
            }
            this.setIndex(s), this.setAttribute("position", new wi(a, 3)), this.setAttribute("normal", new wi(o, 3)), this.setAttribute("uv", new wi(l, 2));
        }
        static fromJSON(t) {
            return new bl(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
        }
    }
    class wl extends Pi {
        constructor(t170 = 1, e127 = .4, i71 = 64, n61 = 8, r46 = 2, s31 = 3){
            super(), this.type = "TorusKnotGeometry", this.parameters = {
                radius: t170,
                tube: e127,
                tubularSegments: i71,
                radialSegments: n61,
                p: r46,
                q: s31
            }, i71 = Math.floor(i71), n61 = Math.floor(n61);
            const a26 = [], o19 = [], l18 = [], c = [], h = new ee, u = new ee, d = new ee, p = new ee, m = new ee, f = new ee, g = new ee;
            for(let a25 = 0; a25 <= i71; ++a25){
                const x = a25 / i71 * r46 * Math.PI * 2;
                v(x, r46, s31, t170, d), v(x + .01, r46, s31, t170, p), f.subVectors(p, d), g.addVectors(p, d), m.crossVectors(f, g), g.crossVectors(m, f), m.normalize(), g.normalize();
                for(let t169 = 0; t169 <= n61; ++t169){
                    const r = t169 / n61 * Math.PI * 2, s = -e127 * Math.cos(r), p = e127 * Math.sin(r);
                    h.x = d.x + (s * g.x + p * m.x), h.y = d.y + (s * g.y + p * m.y), h.z = d.z + (s * g.z + p * m.z), o19.push(h.x, h.y, h.z), u.subVectors(h, d).normalize(), l18.push(u.x, u.y, u.z), c.push(a25 / i71), c.push(t169 / n61);
                }
            }
            for(let t168 = 1; t168 <= i71; t168++)for(let e126 = 1; e126 <= n61; e126++){
                const i = (n61 + 1) * (t168 - 1) + (e126 - 1), r = (n61 + 1) * t168 + (e126 - 1), s = (n61 + 1) * t168 + e126, o = (n61 + 1) * (t168 - 1) + e126;
                a26.push(i, r, o), a26.push(r, s, o);
            }
            function v(t, e, i, n, r) {
                const s = Math.cos(t), a = Math.sin(t), o = i / e * t, l = Math.cos(o);
                r.x = n * (2 + l) * .5 * s, r.y = n * (2 + l) * a * .5, r.z = n * Math.sin(o) * .5;
            }
            this.setIndex(a26), this.setAttribute("position", new wi(o19, 3)), this.setAttribute("normal", new wi(l18, 3)), this.setAttribute("uv", new wi(c, 2));
        }
        static fromJSON(t) {
            return new wl(t.radius, t.tube, t.tubularSegments, t.radialSegments, t.p, t.q);
        }
    }
    class Sl extends Pi {
        constructor(t172 = new bo(new ee(-1, -1, 0), new ee(-1, 1, 0), new ee(1, 1, 0)), e128 = 64, i72 = 1, n = 8, r47 = !1){
            super(), this.type = "TubeGeometry", this.parameters = {
                path: t172,
                tubularSegments: e128,
                radius: i72,
                radialSegments: n,
                closed: r47
            };
            const s32 = t172.computeFrenetFrames(e128, r47);
            this.tangents = s32.tangents, this.normals = s32.normals, this.binormals = s32.binormals;
            const a27 = new ee, o = new ee, l19 = new Et;
            let c = new ee;
            const h = [], u = [], d8 = [], p = [];
            function m(r) {
                c = t172.getPointAt(r / e128, c);
                const l = s32.normals[r], d = s32.binormals[r];
                for(let t171 = 0; t171 <= n; t171++){
                    const e = t171 / n * Math.PI * 2, r = Math.sin(e), s = -Math.cos(e);
                    o.x = s * l.x + r * d.x, o.y = s * l.y + r * d.y, o.z = s * l.z + r * d.z, o.normalize(), u.push(o.x, o.y, o.z), a27.x = c.x + i72 * o.x, a27.y = c.y + i72 * o.y, a27.z = c.z + i72 * o.z, h.push(a27.x, a27.y, a27.z);
                }
            }
            !function() {
                for(let t173 = 0; t173 < e128; t173++)m(t173);
                m(!1 === r47 ? e128 : 0), function() {
                    for(let t = 0; t <= e128; t++)for(let i = 0; i <= n; i++)l19.x = t / e128, l19.y = i / n, d8.push(l19.x, l19.y);
                }(), function() {
                    for(let t = 1; t <= e128; t++)for(let e = 1; e <= n; e++){
                        const i = (n + 1) * (t - 1) + (e - 1), r = (n + 1) * t + (e - 1), s = (n + 1) * t + e, a = (n + 1) * (t - 1) + e;
                        p.push(i, r, a), p.push(r, s, a);
                    }
                }();
            }(), this.setIndex(p), this.setAttribute("position", new wi(h, 3)), this.setAttribute("normal", new wi(u, 3)), this.setAttribute("uv", new wi(d8, 2));
        }
        toJSON() {
            const t = super.toJSON();
            return t.path = this.parameters.path.toJSON(), t;
        }
        static fromJSON(t) {
            return new Sl((new So[t.path.type]).fromJSON(t.path), t.tubularSegments, t.radius, t.radialSegments, t.closed);
        }
    }
    class Tl extends Pi {
        constructor(t = null){
            if (super(), this.type = "WireframeGeometry", this.parameters = {
                geometry: t
            }, null !== t) {
                const e = [], i = new Set, n = new ee, r = new ee;
                if (null !== t.index) {
                    const s = t.attributes.position, a = t.index;
                    let o = t.groups;
                    0 === o.length && (o = [
                        {
                            start: 0,
                            count: a.count,
                            materialIndex: 0
                        }
                    ]);
                    for(let t174 = 0, l = o.length; t174 < l; ++t174){
                        const l = o[t174], c = l.start;
                        for(let t = c, o21 = c + l.count; t < o21; t += 3)for(let o20 = 0; o20 < 3; o20++){
                            const l = a.getX(t + o20), c = a.getX(t + (o20 + 1) % 3);
                            n.fromBufferAttribute(s, l), r.fromBufferAttribute(s, c), !0 === Al(n, r, i) && (e.push(n.x, n.y, n.z), e.push(r.x, r.y, r.z));
                        }
                    }
                } else {
                    const s = t.attributes.position;
                    for(let t176 = 0, a = s.count / 3; t176 < a; t176++)for(let a28 = 0; a28 < 3; a28++){
                        const o = 3 * t176 + a28, l = 3 * t176 + (a28 + 1) % 3;
                        n.fromBufferAttribute(s, o), r.fromBufferAttribute(s, l), !0 === Al(n, r, i) && (e.push(n.x, n.y, n.z), e.push(r.x, r.y, r.z));
                    }
                }
                this.setAttribute("position", new wi(e, 3));
            }
        }
    }
    function Al(t, e, i) {
        const n = `${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`, r = `${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;
        return !0 !== i.has(n) && !0 !== i.has(r) && (i.add(n), i.add(r), !0);
    }
    var El = Object.freeze({
        __proto__: null,
        BoxGeometry: Ki,
        BoxBufferGeometry: Ki,
        CapsuleGeometry: Co,
        CapsuleBufferGeometry: Co,
        CircleGeometry: Lo,
        CircleBufferGeometry: Lo,
        ConeGeometry: Po,
        ConeBufferGeometry: Po,
        CylinderGeometry: Ro,
        CylinderBufferGeometry: Ro,
        DodecahedronGeometry: Do,
        DodecahedronBufferGeometry: Do,
        EdgesGeometry: Bo,
        ExtrudeGeometry: ml,
        ExtrudeBufferGeometry: ml,
        IcosahedronGeometry: gl,
        IcosahedronBufferGeometry: gl,
        LatheGeometry: Eo,
        LatheBufferGeometry: Eo,
        OctahedronGeometry: vl,
        OctahedronBufferGeometry: vl,
        PlaneGeometry: xn,
        PlaneBufferGeometry: xn,
        PolyhedronGeometry: Io,
        PolyhedronBufferGeometry: Io,
        RingGeometry: xl,
        RingBufferGeometry: xl,
        ShapeGeometry: yl,
        ShapeBufferGeometry: yl,
        SphereGeometry: _l,
        SphereBufferGeometry: _l,
        TetrahedronGeometry: Ml,
        TetrahedronBufferGeometry: Ml,
        TorusGeometry: bl,
        TorusBufferGeometry: bl,
        TorusKnotGeometry: wl,
        TorusKnotBufferGeometry: wl,
        TubeGeometry: Sl,
        TubeBufferGeometry: Sl,
        WireframeGeometry: Tl
    });
    class Cl extends gi {
        constructor(t){
            super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new Ht(0), this.transparent = !0, this.fog = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.fog = t.fog, this;
        }
    }
    class Ll extends en {
        constructor(t){
            super(t), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
        }
    }
    class Rl extends gi {
        constructor(t){
            super(), this.isMeshStandardMaterial = !0, this.defines = {
                STANDARD: ""
            }, this.type = "MeshStandardMaterial", this.color = new Ht(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ht(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Et(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.defines = {
                STANDARD: ""
            }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
        }
    }
    class Pl extends Rl {
        constructor(t178){
            super(), this.isMeshPhysicalMaterial = !0, this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Et(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
                get: function() {
                    return _t1(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
                },
                set: function(t) {
                    this.ior = (1 + .4 * t) / (1 - .4 * t);
                }
            }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [
                100,
                400
            ], this.iridescenceThicknessMap = null, this.sheenColor = new Ht(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationColor = new Ht(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Ht(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(t178);
        }
        get sheen() {
            return this._sheen;
        }
        set sheen(t) {
            this._sheen > 0 != t > 0 && this.version++, this._sheen = t;
        }
        get clearcoat() {
            return this._clearcoat;
        }
        set clearcoat(t) {
            this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t;
        }
        get iridescence() {
            return this._iridescence;
        }
        set iridescence(t) {
            this._iridescence > 0 != t > 0 && this.version++, this._iridescence = t;
        }
        get transmission() {
            return this._transmission;
        }
        set transmission(t) {
            this._transmission > 0 != t > 0 && this.version++, this._transmission = t;
        }
        copy(t) {
            return super.copy(t), this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.ior = t.ior, this.iridescence = t.iridescence, this.iridescenceMap = t.iridescenceMap, this.iridescenceIOR = t.iridescenceIOR, this.iridescenceThicknessRange = [
                ...t.iridescenceThicknessRange
            ], this.iridescenceThicknessMap = t.iridescenceThicknessMap, this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this;
        }
    }
    class Il extends gi {
        constructor(t){
            super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new Ht(16777215), this.specular = new Ht(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ht(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Et(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
        }
    }
    class Dl extends gi {
        constructor(t){
            super(), this.isMeshToonMaterial = !0, this.defines = {
                TOON: ""
            }, this.type = "MeshToonMaterial", this.color = new Ht(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ht(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Et(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
        }
    }
    class Nl extends gi {
        constructor(t){
            super(), this.isMeshNormalMaterial = !0, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Et(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.flatShading = t.flatShading, this;
        }
    }
    class zl extends gi {
        constructor(t){
            super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new Ht(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ht(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
        }
    }
    class Ol extends gi {
        constructor(t){
            super(), this.isMeshMatcapMaterial = !0, this.defines = {
                MATCAP: ""
            }, this.type = "MeshMatcapMaterial", this.color = new Ht(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Et(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.defines = {
                MATCAP: ""
            }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.flatShading = t.flatShading, this.fog = t.fog, this;
        }
    }
    class Fl extends Ua {
        constructor(t){
            super(), this.isLineDashedMaterial = !0, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this;
        }
    }
    const Bl = {
        ShadowMaterial: Cl,
        SpriteMaterial: na,
        RawShaderMaterial: Ll,
        ShaderMaterial: en,
        PointsMaterial: Za,
        MeshPhysicalMaterial: Pl,
        MeshStandardMaterial: Rl,
        MeshPhongMaterial: Il,
        MeshToonMaterial: Dl,
        MeshNormalMaterial: Nl,
        MeshLambertMaterial: zl,
        MeshDepthMaterial: Os,
        MeshDistanceMaterial: Fs,
        MeshBasicMaterial: vi,
        MeshMatcapMaterial: Ol,
        LineDashedMaterial: Fl,
        LineBasicMaterial: Ua,
        Material: gi
    };
    gi.fromType = function(t) {
        return new Bl[t];
    };
    const Ul = {
        arraySlice: function(t, e, i) {
            return Ul.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i);
        },
        convertArray: function(t, e, i) {
            return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t);
        },
        isTypedArray: function(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView);
        },
        getKeyframeOrder: function(t) {
            const e129 = t.length, i73 = new Array(e129);
            for(let t179 = 0; t179 !== e129; ++t179)i73[t179] = t179;
            return i73.sort(function(e, i) {
                return t[e] - t[i];
            }), i73;
        },
        sortedArray: function(t, e, i) {
            const n = t.length, r = new t.constructor(n);
            for(let s = 0, a = 0; a !== n; ++s){
                const n = i[s] * e;
                for(let i74 = 0; i74 !== e; ++i74)r[a++] = t[n + i74];
            }
            return r;
        },
        flattenJSON: function(t, e, i, n) {
            let r = 1, s = t[0];
            for(; void 0 !== s && void 0 === s[n];)s = t[r++];
            if (void 0 === s) return;
            let a = s[n];
            if (void 0 !== a) {
                if (Array.isArray(a)) do a = s[n], void 0 !== a && (e.push(s.time), i.push.apply(i, a)), s = t[r++];
                while (void 0 !== s);
                else if (void 0 !== a.toArray) do a = s[n], void 0 !== a && (e.push(s.time), a.toArray(i, i.length)), s = t[r++];
                while (void 0 !== s);
                else do a = s[n], void 0 !== a && (e.push(s.time), i.push(a)), s = t[r++];
                while (void 0 !== s);
            }
        },
        subclip: function(t, e, i, n, r = 30) {
            const s = t.clone();
            s.name = e;
            const a = [];
            for(let t180 = 0; t180 < s.tracks.length; ++t180){
                const e = s.tracks[t180], o = e.getValueSize(), l = [], c = [];
                for(let t = 0; t < e.times.length; ++t){
                    const s = e.times[t] * r;
                    if (!(s < i || s >= n)) {
                        l.push(e.times[t]);
                        for(let i = 0; i < o; ++i)c.push(e.values[t * o + i]);
                    }
                }
                0 !== l.length && (e.times = Ul.convertArray(l, e.times.constructor), e.values = Ul.convertArray(c, e.values.constructor), a.push(e));
            }
            s.tracks = a;
            let o = 1 / 0;
            for(let t181 = 0; t181 < s.tracks.length; ++t181)o > s.tracks[t181].times[0] && (o = s.tracks[t181].times[0]);
            for(let t182 = 0; t182 < s.tracks.length; ++t182)s.tracks[t182].shift(-1 * o);
            return s.resetDuration(), s;
        },
        makeClipAdditive: function(t184, e = 0, i = t184, n = 30) {
            n <= 0 && (n = 30);
            const r = i.tracks.length, s = e / n;
            for(let e130 = 0; e130 < r; ++e130){
                const n = i.tracks[e130], r = n.ValueTypeName;
                if ("bool" === r || "string" === r) continue;
                const a = t184.tracks.find(function(t) {
                    return t.name === n.name && t.ValueTypeName === r;
                });
                if (void 0 === a) continue;
                let o = 0;
                const l = n.getValueSize();
                n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
                let c = 0;
                const h = a.getValueSize();
                a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
                const u = n.times.length - 1;
                let d;
                if (s <= n.times[0]) {
                    const t = o, e = l - o;
                    d = Ul.arraySlice(n.values, t, e);
                } else if (s >= n.times[u]) {
                    const t = u * l + o, e = t + l - o;
                    d = Ul.arraySlice(n.values, t, e);
                } else {
                    const t = n.createInterpolant(), e = o, i = l - o;
                    t.evaluate(s), d = Ul.arraySlice(t.resultBuffer, e, i);
                }
                if ("quaternion" === r) (new te).fromArray(d).normalize().conjugate().toArray(d);
                const p = a.times.length;
                for(let t183 = 0; t183 < p; ++t183){
                    const e = t183 * h + c;
                    if ("quaternion" === r) te.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
                    else {
                        const t = h - 2 * c;
                        for(let i = 0; i < t; ++i)a.values[e + i] -= d[i];
                    }
                }
            }
            return t184.blendMode = st1, t184;
        }
    };
    class kl {
        constructor(t, e, i, n){
            this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i, this.settings = null, this.DefaultSettings_ = {};
        }
        evaluate(t) {
            const e = this.parameterPositions;
            let i = this._cachedIndex, n = e[i], r = e[i - 1];
            t: {
                e: {
                    let s;
                    i: {
                        n: if (!(t < n)) {
                            for(let s33 = i + 2;;){
                                if (void 0 === n) {
                                    if (t < r) break n;
                                    return i = e.length, this._cachedIndex = i, this.copySampleValue_(i - 1);
                                }
                                if (i === s33) break;
                                if (r = n, n = e[++i], t < n) break e;
                            }
                            s = e.length;
                            break i;
                        }
                        if (t >= r) break t;
                        {
                            const a = e[1];
                            t < a && (i = 2, r = a);
                            for(let s35 = i - 2;;){
                                if (void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
                                if (i === s35) break;
                                if (n = r, r = e[--i - 1], t >= r) break e;
                            }
                            s = i, i = 0;
                        }
                    }
                    for(; i < s;){
                        const n = i + s >>> 1;
                        t < e[n] ? s = n : i = n + 1;
                    }
                    if (n = e[i], r = e[i - 1], void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
                    if (void 0 === n) return i = e.length, this._cachedIndex = i, this.copySampleValue_(i - 1);
                }
                this._cachedIndex = i, this.intervalChanged_(i, r, n);
            }
            return this.interpolate_(i, r, t, n);
        }
        getSettings_() {
            return this.settings || this.DefaultSettings_;
        }
        copySampleValue_(t) {
            const e = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = t * n;
            for(let t185 = 0; t185 !== n; ++t185)e[t185] = i[r + t185];
            return e;
        }
        interpolate_() {
            throw new Error("call to abstract method");
        }
        intervalChanged_() {}
    }
    class Gl extends kl {
        constructor(t, e, i, n){
            super(t, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
                endingStart: et1,
                endingEnd: et1
            };
        }
        intervalChanged_(t, e, i) {
            const n = this.parameterPositions;
            let r = t - 2, s = t + 1, a = n[r], o = n[s];
            if (void 0 === a) switch(this.getSettings_().endingStart){
                case it1:
                    r = t, a = 2 * e - i;
                    break;
                case nt1:
                    r = n.length - 2, a = e + n[r] - n[r + 1];
                    break;
                default:
                    r = t, a = i;
            }
            if (void 0 === o) switch(this.getSettings_().endingEnd){
                case it1:
                    s = t, o = 2 * i - e;
                    break;
                case nt1:
                    s = 1, o = i + n[1] - n[0];
                    break;
                default:
                    s = t - 1, o = e;
            }
            const l = .5 * (i - e), c = this.valueSize;
            this._weightPrev = l / (e - a), this._weightNext = l / (o - i), this._offsetPrev = r * c, this._offsetNext = s * c;
        }
        interpolate_(t, e, i, n) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t * a, l = o - a, c = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, d = this._weightNext, p = (i - e) / (n - e), m = p * p, f = m * p, g = -u * f + 2 * u * m - u * p, v = (1 + u) * f + (-1.5 - 2 * u) * m + (-0.5 + u) * p + 1, x = (-1 - d) * f + (1.5 + d) * m + .5 * p, y = d * f - d * m;
            for(let t186 = 0; t186 !== a; ++t186)r[t186] = g * s[c + t186] + v * s[l + t186] + x * s[o + t186] + y * s[h + t186];
            return r;
        }
    }
    class Vl extends kl {
        constructor(t, e, i, n){
            super(t, e, i, n);
        }
        interpolate_(t, e, i, n) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t * a, l = o - a, c = (i - e) / (n - e), h = 1 - c;
            for(let t187 = 0; t187 !== a; ++t187)r[t187] = s[l + t187] * h + s[o + t187] * c;
            return r;
        }
    }
    class Hl extends kl {
        constructor(t, e, i, n){
            super(t, e, i, n);
        }
        interpolate_(t) {
            return this.copySampleValue_(t - 1);
        }
    }
    class Wl {
        constructor(t, e, i, n){
            if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
            if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
            this.name = t, this.times = Ul.convertArray(e, this.TimeBufferType), this.values = Ul.convertArray(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation);
        }
        static toJSON(t) {
            const e = t.constructor;
            let i;
            if (e.toJSON !== this.toJSON) i = e.toJSON(t);
            else {
                i = {
                    name: t.name,
                    times: Ul.convertArray(t.times, Array),
                    values: Ul.convertArray(t.values, Array)
                };
                const e = t.getInterpolation();
                e !== t.DefaultInterpolation && (i.interpolation = e);
            }
            return i.type = t.ValueTypeName, i;
        }
        InterpolantFactoryMethodDiscrete(t) {
            return new Hl(this.times, this.values, this.getValueSize(), t);
        }
        InterpolantFactoryMethodLinear(t) {
            return new Vl(this.times, this.values, this.getValueSize(), t);
        }
        InterpolantFactoryMethodSmooth(t) {
            return new Gl(this.times, this.values, this.getValueSize(), t);
        }
        setInterpolation(t) {
            let e;
            switch(t){
                case Q1:
                    e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case $1:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case tt1:
                    e = this.InterpolantFactoryMethodSmooth;
            }
            if (void 0 === e) {
                const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t === this.DefaultInterpolation) throw new Error(e);
                    this.setInterpolation(this.DefaultInterpolation);
                }
                return console.warn("THREE.KeyframeTrack:", e), this;
            }
            return this.createInterpolant = e, this;
        }
        getInterpolation() {
            switch(this.createInterpolant){
                case this.InterpolantFactoryMethodDiscrete:
                    return Q1;
                case this.InterpolantFactoryMethodLinear:
                    return $1;
                case this.InterpolantFactoryMethodSmooth:
                    return tt1;
            }
        }
        getValueSize() {
            return this.values.length / this.times.length;
        }
        shift(t) {
            if (0 !== t) {
                const e = this.times;
                for(let i = 0, n = e.length; i !== n; ++i)e[i] += t;
            }
            return this;
        }
        scale(t) {
            if (1 !== t) {
                const e = this.times;
                for(let i = 0, n = e.length; i !== n; ++i)e[i] *= t;
            }
            return this;
        }
        trim(t, e) {
            const i = this.times, n = i.length;
            let r = 0, s = n - 1;
            for(; r !== n && i[r] < t;)++r;
            for(; -1 !== s && i[s] > e;)--s;
            if (++s, 0 !== r || s !== n) {
                r >= s && (s = Math.max(s, 1), r = s - 1);
                const t = this.getValueSize();
                this.times = Ul.arraySlice(i, r, s), this.values = Ul.arraySlice(this.values, r * t, s * t);
            }
            return this;
        }
        validate() {
            let t = !0;
            const e = this.getValueSize();
            e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
            const i = this.times, n = this.values, r = i.length;
            0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
            let s = null;
            for(let e131 = 0; e131 !== r; e131++){
                const n = i[e131];
                if ("number" == typeof n && isNaN(n)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e131, n), t = !1;
                    break;
                }
                if (null !== s && s > n) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, e131, n, s), t = !1;
                    break;
                }
                s = n;
            }
            if (void 0 !== n && Ul.isTypedArray(n)) for(let e132 = 0, i75 = n.length; e132 !== i75; ++e132){
                const i = n[e132];
                if (isNaN(i)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e132, i), t = !1;
                    break;
                }
            }
            return t;
        }
        optimize() {
            const t = Ul.arraySlice(this.times), e = Ul.arraySlice(this.values), i = this.getValueSize(), n = this.getInterpolation() === tt1, r = t.length - 1;
            let s = 1;
            for(let a = 1; a < r; ++a){
                let r = !1;
                const o = t[a];
                if (o !== t[a + 1] && (1 !== a || o !== t[0])) {
                    if (n) r = !0;
                    else {
                        const t = a * i, n = t - i, s = t + i;
                        for(let a29 = 0; a29 !== i; ++a29){
                            const i = e[t + a29];
                            if (i !== e[n + a29] || i !== e[s + a29]) {
                                r = !0;
                                break;
                            }
                        }
                    }
                }
                if (r) {
                    if (a !== s) {
                        t[s] = t[a];
                        const n = a * i, r = s * i;
                        for(let t188 = 0; t188 !== i; ++t188)e[r + t188] = e[n + t188];
                    }
                    ++s;
                }
            }
            if (r > 0) {
                t[s] = t[r];
                for(let t191 = r * i, n = s * i, a = 0; a !== i; ++a)e[n + a] = e[t191 + a];
                ++s;
            }
            return s !== t.length ? (this.times = Ul.arraySlice(t, 0, s), this.values = Ul.arraySlice(e, 0, s * i)) : (this.times = t, this.values = e), this;
        }
        clone() {
            const t = Ul.arraySlice(this.times, 0), e = Ul.arraySlice(this.values, 0), i = new this.constructor(this.name, t, e);
            return i.createInterpolant = this.createInterpolant, i;
        }
    }
    Wl.prototype.TimeBufferType = Float32Array, Wl.prototype.ValueBufferType = Float32Array, Wl.prototype.DefaultInterpolation = $1;
    class jl extends Wl {
    }
    jl.prototype.ValueTypeName = "bool", jl.prototype.ValueBufferType = Array, jl.prototype.DefaultInterpolation = Q1, jl.prototype.InterpolantFactoryMethodLinear = void 0, jl.prototype.InterpolantFactoryMethodSmooth = void 0;
    class ql extends Wl {
    }
    ql.prototype.ValueTypeName = "color";
    class Xl extends Wl {
    }
    Xl.prototype.ValueTypeName = "number";
    class Jl extends kl {
        constructor(t, e, i, n){
            super(t, e, i, n);
        }
        interpolate_(t, e, i, n) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = (i - e) / (n - e);
            let l = t * a;
            for(let t192 = l + a; l !== t192; l += 4)te.slerpFlat(r, 0, s, l - a, s, l, o);
            return r;
        }
    }
    class Yl extends Wl {
        InterpolantFactoryMethodLinear(t) {
            return new Jl(this.times, this.values, this.getValueSize(), t);
        }
    }
    Yl.prototype.ValueTypeName = "quaternion", Yl.prototype.DefaultInterpolation = $1, Yl.prototype.InterpolantFactoryMethodSmooth = void 0;
    class Zl extends Wl {
    }
    Zl.prototype.ValueTypeName = "string", Zl.prototype.ValueBufferType = Array, Zl.prototype.DefaultInterpolation = Q1, Zl.prototype.InterpolantFactoryMethodLinear = void 0, Zl.prototype.InterpolantFactoryMethodSmooth = void 0;
    class Kl extends Wl {
    }
    Kl.prototype.ValueTypeName = "vector";
    class Ql {
        constructor(t, e = -1, i, n = 2500){
            this.name = t, this.tracks = i, this.duration = e, this.blendMode = n, this.uuid = yt1(), this.duration < 0 && this.resetDuration();
        }
        static parse(t) {
            const e = [], i = t.tracks, n = 1 / (t.fps || 1);
            for(let t193 = 0, r = i.length; t193 !== r; ++t193)e.push($l(i[t193]).scale(n));
            const r48 = new this(t.name, t.duration, e, t.blendMode);
            return r48.uuid = t.uuid, r48;
        }
        static toJSON(t) {
            const e = [], i = t.tracks, n = {
                name: t.name,
                duration: t.duration,
                tracks: e,
                uuid: t.uuid,
                blendMode: t.blendMode
            };
            for(let t194 = 0, n62 = i.length; t194 !== n62; ++t194)e.push(Wl.toJSON(i[t194]));
            return n;
        }
        static CreateFromMorphTargetSequence(t, e, i, n) {
            const r = e.length, s = [];
            for(let t195 = 0; t195 < r; t195++){
                let a = [], o = [];
                a.push((t195 + r - 1) % r, t195, (t195 + 1) % r), o.push(0, 1, 0);
                const l = Ul.getKeyframeOrder(a);
                a = Ul.sortedArray(a, 1, l), o = Ul.sortedArray(o, 1, l), n || 0 !== a[0] || (a.push(r), o.push(o[0])), s.push(new Xl(".morphTargetInfluences[" + e[t195].name + "]", a, o).scale(1 / i));
            }
            return new this(t, -1, s);
        }
        static findByName(t, e) {
            let i = t;
            if (!Array.isArray(t)) {
                const e = t;
                i = e.geometry && e.geometry.animations || e.animations;
            }
            for(let t196 = 0; t196 < i.length; t196++)if (i[t196].name === e) return i[t196];
            return null;
        }
        static CreateClipsFromMorphTargetSequences(t, e, i) {
            const n = {}, r = /^([\w-]*?)([\d]+)$/;
            for(let e133 = 0, i76 = t.length; e133 < i76; e133++){
                const i = t[e133], s = i.name.match(r);
                if (s && s.length > 1) {
                    const t = s[1];
                    let e = n[t];
                    e || (n[t] = e = []), e.push(i);
                }
            }
            const s = [];
            for(const t197 in n)s.push(this.CreateFromMorphTargetSequence(t197, n[t197], e, i));
            return s;
        }
        static parseAnimation(t199, e134) {
            if (!t199) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
            const i77 = function(t, e, i, n, r) {
                if (0 !== i.length) {
                    const s = [], a = [];
                    Ul.flattenJSON(i, s, a, n), 0 !== s.length && r.push(new t(e, s, a));
                }
            }, n63 = [], r49 = t199.name || "default", s37 = t199.fps || 30, a32 = t199.blendMode;
            let o = t199.length || -1;
            const l = t199.hierarchy || [];
            for(let t198 = 0; t198 < l.length; t198++){
                const r = l[t198].keys;
                if (r && 0 !== r.length) {
                    if (r[0].morphTargets) {
                        const t = {};
                        let e;
                        for(e = 0; e < r.length; e++)if (r[e].morphTargets) for(let i = 0; i < r[e].morphTargets.length; i++)t[r[e].morphTargets[i]] = -1;
                        for(const i78 in t){
                            const t = [], s = [];
                            for(let n = 0; n !== r[e].morphTargets.length; ++n){
                                const n = r[e];
                                t.push(n.time), s.push(n.morphTarget === i78 ? 1 : 0);
                            }
                            n63.push(new Xl(".morphTargetInfluence[" + i78 + "]", t, s));
                        }
                        o = t.length * s37;
                    } else {
                        const s = ".bones[" + e134[t198].name + "]";
                        i77(Kl, s + ".position", r, "pos", n63), i77(Yl, s + ".quaternion", r, "rot", n63), i77(Kl, s + ".scale", r, "scl", n63);
                    }
                }
            }
            if (0 === n63.length) return null;
            return new this(r49, o, n63, a32);
        }
        resetDuration() {
            let t = 0;
            for(let e = 0, i = this.tracks.length; e !== i; ++e){
                const i = this.tracks[e];
                t = Math.max(t, i.times[i.times.length - 1]);
            }
            return this.duration = t, this;
        }
        trim() {
            for(let t = 0; t < this.tracks.length; t++)this.tracks[t].trim(0, this.duration);
            return this;
        }
        validate() {
            let t = !0;
            for(let e = 0; e < this.tracks.length; e++)t = t && this.tracks[e].validate();
            return t;
        }
        optimize() {
            for(let t = 0; t < this.tracks.length; t++)this.tracks[t].optimize();
            return this;
        }
        clone() {
            const t = [];
            for(let e = 0; e < this.tracks.length; e++)t.push(this.tracks[e].clone());
            return new this.constructor(this.name, this.duration, t, this.blendMode);
        }
        toJSON() {
            return this.constructor.toJSON(this);
        }
    }
    function $l(t200) {
        if (void 0 === t200.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
        const e = function(t) {
            switch(t.toLowerCase()){
                case "scalar":
                case "double":
                case "float":
                case "number":
                case "integer":
                    return Xl;
                case "vector":
                case "vector2":
                case "vector3":
                case "vector4":
                    return Kl;
                case "color":
                    return ql;
                case "quaternion":
                    return Yl;
                case "bool":
                case "boolean":
                    return jl;
                case "string":
                    return Zl;
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
        }(t200.type);
        if (void 0 === t200.times) {
            const e = [], i = [];
            Ul.flattenJSON(t200.keys, e, i, "value"), t200.times = e, t200.values = i;
        }
        return void 0 !== e.parse ? e.parse(t200) : new e(t200.name, t200.times, t200.values, t200.interpolation);
    }
    const tc = {
        enabled: !1,
        files: {},
        add: function(t, e) {
            !1 !== this.enabled && (this.files[t] = e);
        },
        get: function(t) {
            if (!1 !== this.enabled) return this.files[t];
        },
        remove: function(t) {
            delete this.files[t];
        },
        clear: function() {
            this.files = {};
        }
    };
    class ec {
        constructor(t201, e135, i79){
            const n64 = this;
            let r, s = !1, a = 0, o = 0;
            const l = [];
            this.onStart = void 0, this.onLoad = t201, this.onProgress = e135, this.onError = i79, this.itemStart = function(t) {
                o++, !1 === s && void 0 !== n64.onStart && n64.onStart(t, a, o), s = !0;
            }, this.itemEnd = function(t) {
                a++, void 0 !== n64.onProgress && n64.onProgress(t, a, o), a === o && (s = !1, void 0 !== n64.onLoad && n64.onLoad());
            }, this.itemError = function(t) {
                void 0 !== n64.onError && n64.onError(t);
            }, this.resolveURL = function(t) {
                return r ? r(t) : t;
            }, this.setURLModifier = function(t) {
                return r = t, this;
            }, this.addHandler = function(t, e) {
                return l.push(t, e), this;
            }, this.removeHandler = function(t) {
                const e = l.indexOf(t);
                return -1 !== e && l.splice(e, 2), this;
            }, this.getHandler = function(t) {
                for(let e = 0, i = l.length; e < i; e += 2){
                    const i = l[e], n = l[e + 1];
                    if (i.global && (i.lastIndex = 0), i.test(t)) return n;
                }
                return null;
            };
        }
    }
    const ic = new ec;
    class nc {
        constructor(t){
            this.manager = void 0 !== t ? t : ic, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
        }
        load() {}
        loadAsync(t, e) {
            const i = this;
            return new Promise(function(n, r) {
                i.load(t, n, e, r);
            });
        }
        parse() {}
        setCrossOrigin(t) {
            return this.crossOrigin = t, this;
        }
        setWithCredentials(t) {
            return this.withCredentials = t, this;
        }
        setPath(t) {
            return this.path = t, this;
        }
        setResourcePath(t) {
            return this.resourcePath = t, this;
        }
        setRequestHeader(t) {
            return this.requestHeader = t, this;
        }
    }
    const rc = {};
    class sc extends nc {
        constructor(t){
            super(t);
        }
        load(t202, e136, i80, n65) {
            void 0 === t202 && (t202 = ""), void 0 !== this.path && (t202 = this.path + t202), t202 = this.manager.resolveURL(t202);
            const r50 = tc.get(t202);
            if (void 0 !== r50) return this.manager.itemStart(t202), setTimeout(()=>{
                e136 && e136(r50), this.manager.itemEnd(t202);
            }, 0), r50;
            if (void 0 !== rc[t202]) return void rc[t202].push({
                onLoad: e136,
                onProgress: i80,
                onError: n65
            });
            rc[t202] = [], rc[t202].push({
                onLoad: e136,
                onProgress: i80,
                onError: n65
            });
            const s38 = new Request(t202, {
                headers: new Headers(this.requestHeader),
                credentials: this.withCredentials ? "include" : "same-origin"
            }), a33 = this.mimeType, o22 = this.responseType;
            fetch(s38).then((e137)=>{
                if (200 === e137.status || 0 === e137.status) {
                    if (0 === e137.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), "undefined" == typeof ReadableStream || void 0 === e137.body || void 0 === e137.body.getReader) return e137;
                    const i = rc[t202], n66 = e137.body.getReader(), r51 = e137.headers.get("Content-Length"), s = r51 ? parseInt(r51) : 0, a = 0 !== s;
                    let o = 0;
                    const l = new ReadableStream({
                        start (t203) {
                            !function e138() {
                                n66.read().then(({ done: n , value: r  })=>{
                                    if (n) t203.close();
                                    else {
                                        o += r.byteLength;
                                        const n = new ProgressEvent("progress", {
                                            lengthComputable: a,
                                            loaded: o,
                                            total: s
                                        });
                                        for(let t = 0, e = i.length; t < e; t++){
                                            const e = i[t];
                                            e.onProgress && e.onProgress(n);
                                        }
                                        t203.enqueue(r), e138();
                                    }
                                });
                            }();
                        }
                    });
                    return new Response(l);
                }
                throw Error(`fetch for "${e137.url}" responded with ${e137.status}: ${e137.statusText}`);
            }).then((t204)=>{
                switch(o22){
                    case "arraybuffer":
                        return t204.arrayBuffer();
                    case "blob":
                        return t204.blob();
                    case "document":
                        return t204.text().then((t)=>(new DOMParser).parseFromString(t, a33));
                    case "json":
                        return t204.json();
                    default:
                        if (void 0 === a33) return t204.text();
                        {
                            const e = /charset="?([^;"\s]*)"?/i.exec(a33), i = e && e[1] ? e[1].toLowerCase() : void 0, n = new TextDecoder(i);
                            return t204.arrayBuffer().then((t)=>n.decode(t));
                        }
                }
            }).then((e)=>{
                tc.add(t202, e);
                const i = rc[t202];
                delete rc[t202];
                for(let t = 0, n = i.length; t < n; t++){
                    const n = i[t];
                    n.onLoad && n.onLoad(e);
                }
            }).catch((e)=>{
                const i = rc[t202];
                if (void 0 === i) throw this.manager.itemError(t202), e;
                delete rc[t202];
                for(let t = 0, n = i.length; t < n; t++){
                    const n = i[t];
                    n.onError && n.onError(e);
                }
                this.manager.itemError(t202);
            }).finally(()=>{
                this.manager.itemEnd(t202);
            }), this.manager.itemStart(t202);
        }
        setResponseType(t) {
            return this.responseType = t, this;
        }
        setMimeType(t) {
            return this.mimeType = t, this;
        }
    }
    class ac extends nc {
        constructor(t){
            super(t);
        }
        load(t, e139, i, n) {
            void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
            const r = this, s = tc.get(t);
            if (void 0 !== s) return r.manager.itemStart(t), setTimeout(function() {
                e139 && e139(s), r.manager.itemEnd(t);
            }, 0), s;
            const a = It("img");
            function o() {
                c(), tc.add(t, this), e139 && e139(this), r.manager.itemEnd(t);
            }
            function l(e) {
                c(), n && n(e), r.manager.itemError(t), r.manager.itemEnd(t);
            }
            function c() {
                a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1);
            }
            return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), "data:" !== t.slice(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t), a.src = t, a;
        }
    }
    class oc extends ni {
        constructor(t, e = 1){
            super(), this.isLight = !0, this.type = "Light", this.color = new Ht(t), this.intensity = e;
        }
        dispose() {}
        copy(t, e) {
            return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e;
        }
    }
    class lc extends oc {
        constructor(t, e, i){
            super(t, i), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(ni.DefaultUp), this.updateMatrix(), this.groundColor = new Ht(e);
        }
        copy(t, e) {
            return super.copy(t, e), this.groundColor.copy(t.groundColor), this;
        }
    }
    const cc = new Ie, hc = new ee, uc = new ee;
    class dc {
        constructor(t){
            this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Et(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ie, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new fn, this._frameExtents = new Et(1, 1), this._viewportCount = 1, this._viewports = [
                new Zt(0, 0, 1, 1)
            ];
        }
        getViewportCount() {
            return this._viewportCount;
        }
        getFrustum() {
            return this._frustum;
        }
        updateMatrices(t) {
            const e = this.camera, i = this.matrix;
            hc.setFromMatrixPosition(t.matrixWorld), e.position.copy(hc), uc.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(uc), e.updateMatrixWorld(), cc.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(cc), i.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), i.multiply(e.projectionMatrix), i.multiply(e.matrixWorldInverse);
        }
        getViewport(t) {
            return this._viewports[t];
        }
        getFrameExtents() {
            return this._frameExtents;
        }
        dispose() {
            this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
        }
        copy(t) {
            return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        toJSON() {
            const t = {};
            return 0 !== this.bias && (t.bias = this.bias), 0 !== this.normalBias && (t.normalBias = this.normalBias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t;
        }
    }
    class pc extends dc {
        constructor(){
            super(new rn(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
        }
        updateMatrices(t) {
            const e = this.camera, i = 2 * xt1 * t.angle * this.focus, n = this.mapSize.width / this.mapSize.height, r = t.distance || e.far;
            i === e.fov && n === e.aspect && r === e.far || (e.fov = i, e.aspect = n, e.far = r, e.updateProjectionMatrix()), super.updateMatrices(t);
        }
        copy(t) {
            return super.copy(t), this.focus = t.focus, this;
        }
    }
    class mc extends oc {
        constructor(t, e, i = 0, n = Math.PI / 3, r = 0, s = 1){
            super(t, e), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(ni.DefaultUp), this.updateMatrix(), this.target = new ni, this.distance = i, this.angle = n, this.penumbra = r, this.decay = s, this.shadow = new pc;
        }
        get power() {
            return this.intensity * Math.PI;
        }
        set power(t) {
            this.intensity = t / Math.PI;
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t, e) {
            return super.copy(t, e), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
        }
    }
    const fc = new Ie, gc = new ee, vc = new ee;
    class xc extends dc {
        constructor(){
            super(new rn(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Et(4, 2), this._viewportCount = 6, this._viewports = [
                new Zt(2, 1, 1, 1),
                new Zt(0, 1, 1, 1),
                new Zt(3, 1, 1, 1),
                new Zt(1, 1, 1, 1),
                new Zt(3, 0, 1, 1),
                new Zt(1, 0, 1, 1)
            ], this._cubeDirections = [
                new ee(1, 0, 0),
                new ee(-1, 0, 0),
                new ee(0, 0, 1),
                new ee(0, 0, -1),
                new ee(0, 1, 0),
                new ee(0, -1, 0)
            ], this._cubeUps = [
                new ee(0, 1, 0),
                new ee(0, 1, 0),
                new ee(0, 1, 0),
                new ee(0, 1, 0),
                new ee(0, 0, 1),
                new ee(0, 0, -1)
            ];
        }
        updateMatrices(t, e = 0) {
            const i = this.camera, n = this.matrix, r = t.distance || i.far;
            r !== i.far && (i.far = r, i.updateProjectionMatrix()), gc.setFromMatrixPosition(t.matrixWorld), i.position.copy(gc), vc.copy(i.position), vc.add(this._cubeDirections[e]), i.up.copy(this._cubeUps[e]), i.lookAt(vc), i.updateMatrixWorld(), n.makeTranslation(-gc.x, -gc.y, -gc.z), fc.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), this._frustum.setFromProjectionMatrix(fc);
        }
    }
    class yc extends oc {
        constructor(t, e, i = 0, n = 1){
            super(t, e), this.isPointLight = !0, this.type = "PointLight", this.distance = i, this.decay = n, this.shadow = new xc;
        }
        get power() {
            return 4 * this.intensity * Math.PI;
        }
        set power(t) {
            this.intensity = t / (4 * Math.PI);
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t, e) {
            return super.copy(t, e), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this;
        }
    }
    class _c extends dc {
        constructor(){
            super(new Cn(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0;
        }
    }
    class Mc extends oc {
        constructor(t, e){
            super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(ni.DefaultUp), this.updateMatrix(), this.target = new ni, this.shadow = new _c;
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t) {
            return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
        }
    }
    class bc extends oc {
        constructor(t, e){
            super(t, e), this.isAmbientLight = !0, this.type = "AmbientLight";
        }
    }
    class wc extends oc {
        constructor(t, e, i = 10, n = 10){
            super(t, e), this.isRectAreaLight = !0, this.type = "RectAreaLight", this.width = i, this.height = n;
        }
        get power() {
            return this.intensity * this.width * this.height * Math.PI;
        }
        set power(t) {
            this.intensity = t / (this.width * this.height * Math.PI);
        }
        copy(t) {
            return super.copy(t), this.width = t.width, this.height = t.height, this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.width = this.width, e.object.height = this.height, e;
        }
    }
    class Sc {
        constructor(){
            this.isSphericalHarmonics3 = !0, this.coefficients = [];
            for(let t = 0; t < 9; t++)this.coefficients.push(new ee);
        }
        set(t) {
            for(let e = 0; e < 9; e++)this.coefficients[e].copy(t[e]);
            return this;
        }
        zero() {
            for(let t = 0; t < 9; t++)this.coefficients[t].set(0, 0, 0);
            return this;
        }
        getAt(t, e) {
            const i = t.x, n = t.y, r = t.z, s = this.coefficients;
            return e.copy(s[0]).multiplyScalar(.282095), e.addScaledVector(s[1], .488603 * n), e.addScaledVector(s[2], .488603 * r), e.addScaledVector(s[3], .488603 * i), e.addScaledVector(s[4], i * n * 1.092548), e.addScaledVector(s[5], n * r * 1.092548), e.addScaledVector(s[6], .315392 * (3 * r * r - 1)), e.addScaledVector(s[7], i * r * 1.092548), e.addScaledVector(s[8], .546274 * (i * i - n * n)), e;
        }
        getIrradianceAt(t, e) {
            const i = t.x, n = t.y, r = t.z, s = this.coefficients;
            return e.copy(s[0]).multiplyScalar(.886227), e.addScaledVector(s[1], 1.023328 * n), e.addScaledVector(s[2], 1.023328 * r), e.addScaledVector(s[3], 1.023328 * i), e.addScaledVector(s[4], .858086 * i * n), e.addScaledVector(s[5], .858086 * n * r), e.addScaledVector(s[6], .743125 * r * r - .247708), e.addScaledVector(s[7], .858086 * i * r), e.addScaledVector(s[8], .429043 * (i * i - n * n)), e;
        }
        add(t) {
            for(let e = 0; e < 9; e++)this.coefficients[e].add(t.coefficients[e]);
            return this;
        }
        addScaledSH(t, e) {
            for(let i = 0; i < 9; i++)this.coefficients[i].addScaledVector(t.coefficients[i], e);
            return this;
        }
        scale(t) {
            for(let e = 0; e < 9; e++)this.coefficients[e].multiplyScalar(t);
            return this;
        }
        lerp(t, e) {
            for(let i = 0; i < 9; i++)this.coefficients[i].lerp(t.coefficients[i], e);
            return this;
        }
        equals(t) {
            for(let e = 0; e < 9; e++)if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
            return !0;
        }
        copy(t) {
            return this.set(t.coefficients);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        fromArray(t, e = 0) {
            const i = this.coefficients;
            for(let n = 0; n < 9; n++)i[n].fromArray(t, e + 3 * n);
            return this;
        }
        toArray(t = [], e = 0) {
            const i = this.coefficients;
            for(let n = 0; n < 9; n++)i[n].toArray(t, e + 3 * n);
            return t;
        }
        static getBasisAt(t, e) {
            const i = t.x, n = t.y, r = t.z;
            e[0] = .282095, e[1] = .488603 * n, e[2] = .488603 * r, e[3] = .488603 * i, e[4] = 1.092548 * i * n, e[5] = 1.092548 * n * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * i * r, e[8] = .546274 * (i * i - n * n);
        }
    }
    class Tc extends oc {
        constructor(t = new Sc, e = 1){
            super(void 0, e), this.isLightProbe = !0, this.sh = t;
        }
        copy(t) {
            return super.copy(t), this.sh.copy(t.sh), this;
        }
        fromJSON(t) {
            return this.intensity = t.intensity, this.sh.fromArray(t.sh), this;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.sh = this.sh.toArray(), e;
        }
    }
    class Ac extends nc {
        constructor(t){
            super(t), this.textures = {};
        }
        load(t, e140, i81, n) {
            const r = this, s = new sc(r.manager);
            s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, function(i) {
                try {
                    e140(r.parse(JSON.parse(i)));
                } catch (e) {
                    n ? n(e) : console.error(e), r.manager.itemError(t);
                }
            }, i81, n);
        }
        parse(t205) {
            const e = this.textures;
            function i(t) {
                return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t];
            }
            const n = gi.fromType(t205.type);
            if (void 0 !== t205.uuid && (n.uuid = t205.uuid), void 0 !== t205.name && (n.name = t205.name), void 0 !== t205.color && void 0 !== n.color && n.color.setHex(t205.color), void 0 !== t205.roughness && (n.roughness = t205.roughness), void 0 !== t205.metalness && (n.metalness = t205.metalness), void 0 !== t205.sheen && (n.sheen = t205.sheen), void 0 !== t205.sheenColor && (n.sheenColor = (new Ht).setHex(t205.sheenColor)), void 0 !== t205.sheenRoughness && (n.sheenRoughness = t205.sheenRoughness), void 0 !== t205.emissive && void 0 !== n.emissive && n.emissive.setHex(t205.emissive), void 0 !== t205.specular && void 0 !== n.specular && n.specular.setHex(t205.specular), void 0 !== t205.specularIntensity && (n.specularIntensity = t205.specularIntensity), void 0 !== t205.specularColor && void 0 !== n.specularColor && n.specularColor.setHex(t205.specularColor), void 0 !== t205.shininess && (n.shininess = t205.shininess), void 0 !== t205.clearcoat && (n.clearcoat = t205.clearcoat), void 0 !== t205.clearcoatRoughness && (n.clearcoatRoughness = t205.clearcoatRoughness), void 0 !== t205.iridescence && (n.iridescence = t205.iridescence), void 0 !== t205.iridescenceIOR && (n.iridescenceIOR = t205.iridescenceIOR), void 0 !== t205.iridescenceThicknessRange && (n.iridescenceThicknessRange = t205.iridescenceThicknessRange), void 0 !== t205.transmission && (n.transmission = t205.transmission), void 0 !== t205.thickness && (n.thickness = t205.thickness), void 0 !== t205.attenuationDistance && (n.attenuationDistance = t205.attenuationDistance), void 0 !== t205.attenuationColor && void 0 !== n.attenuationColor && n.attenuationColor.setHex(t205.attenuationColor), void 0 !== t205.fog && (n.fog = t205.fog), void 0 !== t205.flatShading && (n.flatShading = t205.flatShading), void 0 !== t205.blending && (n.blending = t205.blending), void 0 !== t205.combine && (n.combine = t205.combine), void 0 !== t205.side && (n.side = t205.side), void 0 !== t205.shadowSide && (n.shadowSide = t205.shadowSide), void 0 !== t205.opacity && (n.opacity = t205.opacity), void 0 !== t205.transparent && (n.transparent = t205.transparent), void 0 !== t205.alphaTest && (n.alphaTest = t205.alphaTest), void 0 !== t205.depthTest && (n.depthTest = t205.depthTest), void 0 !== t205.depthWrite && (n.depthWrite = t205.depthWrite), void 0 !== t205.colorWrite && (n.colorWrite = t205.colorWrite), void 0 !== t205.stencilWrite && (n.stencilWrite = t205.stencilWrite), void 0 !== t205.stencilWriteMask && (n.stencilWriteMask = t205.stencilWriteMask), void 0 !== t205.stencilFunc && (n.stencilFunc = t205.stencilFunc), void 0 !== t205.stencilRef && (n.stencilRef = t205.stencilRef), void 0 !== t205.stencilFuncMask && (n.stencilFuncMask = t205.stencilFuncMask), void 0 !== t205.stencilFail && (n.stencilFail = t205.stencilFail), void 0 !== t205.stencilZFail && (n.stencilZFail = t205.stencilZFail), void 0 !== t205.stencilZPass && (n.stencilZPass = t205.stencilZPass), void 0 !== t205.wireframe && (n.wireframe = t205.wireframe), void 0 !== t205.wireframeLinewidth && (n.wireframeLinewidth = t205.wireframeLinewidth), void 0 !== t205.wireframeLinecap && (n.wireframeLinecap = t205.wireframeLinecap), void 0 !== t205.wireframeLinejoin && (n.wireframeLinejoin = t205.wireframeLinejoin), void 0 !== t205.rotation && (n.rotation = t205.rotation), 1 !== t205.linewidth && (n.linewidth = t205.linewidth), void 0 !== t205.dashSize && (n.dashSize = t205.dashSize), void 0 !== t205.gapSize && (n.gapSize = t205.gapSize), void 0 !== t205.scale && (n.scale = t205.scale), void 0 !== t205.polygonOffset && (n.polygonOffset = t205.polygonOffset), void 0 !== t205.polygonOffsetFactor && (n.polygonOffsetFactor = t205.polygonOffsetFactor), void 0 !== t205.polygonOffsetUnits && (n.polygonOffsetUnits = t205.polygonOffsetUnits), void 0 !== t205.dithering && (n.dithering = t205.dithering), void 0 !== t205.alphaToCoverage && (n.alphaToCoverage = t205.alphaToCoverage), void 0 !== t205.premultipliedAlpha && (n.premultipliedAlpha = t205.premultipliedAlpha), void 0 !== t205.visible && (n.visible = t205.visible), void 0 !== t205.toneMapped && (n.toneMapped = t205.toneMapped), void 0 !== t205.userData && (n.userData = t205.userData), void 0 !== t205.vertexColors && ("number" == typeof t205.vertexColors ? n.vertexColors = t205.vertexColors > 0 : n.vertexColors = t205.vertexColors), void 0 !== t205.uniforms) for(const e141 in t205.uniforms){
                const r = t205.uniforms[e141];
                switch(n.uniforms[e141] = {}, r.type){
                    case "t":
                        n.uniforms[e141].value = i(r.value);
                        break;
                    case "c":
                        n.uniforms[e141].value = (new Ht).setHex(r.value);
                        break;
                    case "v2":
                        n.uniforms[e141].value = (new Et).fromArray(r.value);
                        break;
                    case "v3":
                        n.uniforms[e141].value = (new ee).fromArray(r.value);
                        break;
                    case "v4":
                        n.uniforms[e141].value = (new Zt).fromArray(r.value);
                        break;
                    case "m3":
                        n.uniforms[e141].value = (new Ct1).fromArray(r.value);
                        break;
                    case "m4":
                        n.uniforms[e141].value = (new Ie).fromArray(r.value);
                        break;
                    default:
                        n.uniforms[e141].value = r.value;
                }
            }
            if (void 0 !== t205.defines && (n.defines = t205.defines), void 0 !== t205.vertexShader && (n.vertexShader = t205.vertexShader), void 0 !== t205.fragmentShader && (n.fragmentShader = t205.fragmentShader), void 0 !== t205.extensions) for(const e142 in t205.extensions)n.extensions[e142] = t205.extensions[e142];
            if (void 0 !== t205.shading && (n.flatShading = 1 === t205.shading), void 0 !== t205.size && (n.size = t205.size), void 0 !== t205.sizeAttenuation && (n.sizeAttenuation = t205.sizeAttenuation), void 0 !== t205.map && (n.map = i(t205.map)), void 0 !== t205.matcap && (n.matcap = i(t205.matcap)), void 0 !== t205.alphaMap && (n.alphaMap = i(t205.alphaMap)), void 0 !== t205.bumpMap && (n.bumpMap = i(t205.bumpMap)), void 0 !== t205.bumpScale && (n.bumpScale = t205.bumpScale), void 0 !== t205.normalMap && (n.normalMap = i(t205.normalMap)), void 0 !== t205.normalMapType && (n.normalMapType = t205.normalMapType), void 0 !== t205.normalScale) {
                let e = t205.normalScale;
                !1 === Array.isArray(e) && (e = [
                    e,
                    e
                ]), n.normalScale = (new Et).fromArray(e);
            }
            return void 0 !== t205.displacementMap && (n.displacementMap = i(t205.displacementMap)), void 0 !== t205.displacementScale && (n.displacementScale = t205.displacementScale), void 0 !== t205.displacementBias && (n.displacementBias = t205.displacementBias), void 0 !== t205.roughnessMap && (n.roughnessMap = i(t205.roughnessMap)), void 0 !== t205.metalnessMap && (n.metalnessMap = i(t205.metalnessMap)), void 0 !== t205.emissiveMap && (n.emissiveMap = i(t205.emissiveMap)), void 0 !== t205.emissiveIntensity && (n.emissiveIntensity = t205.emissiveIntensity), void 0 !== t205.specularMap && (n.specularMap = i(t205.specularMap)), void 0 !== t205.specularIntensityMap && (n.specularIntensityMap = i(t205.specularIntensityMap)), void 0 !== t205.specularColorMap && (n.specularColorMap = i(t205.specularColorMap)), void 0 !== t205.envMap && (n.envMap = i(t205.envMap)), void 0 !== t205.envMapIntensity && (n.envMapIntensity = t205.envMapIntensity), void 0 !== t205.reflectivity && (n.reflectivity = t205.reflectivity), void 0 !== t205.refractionRatio && (n.refractionRatio = t205.refractionRatio), void 0 !== t205.lightMap && (n.lightMap = i(t205.lightMap)), void 0 !== t205.lightMapIntensity && (n.lightMapIntensity = t205.lightMapIntensity), void 0 !== t205.aoMap && (n.aoMap = i(t205.aoMap)), void 0 !== t205.aoMapIntensity && (n.aoMapIntensity = t205.aoMapIntensity), void 0 !== t205.gradientMap && (n.gradientMap = i(t205.gradientMap)), void 0 !== t205.clearcoatMap && (n.clearcoatMap = i(t205.clearcoatMap)), void 0 !== t205.clearcoatRoughnessMap && (n.clearcoatRoughnessMap = i(t205.clearcoatRoughnessMap)), void 0 !== t205.clearcoatNormalMap && (n.clearcoatNormalMap = i(t205.clearcoatNormalMap)), void 0 !== t205.clearcoatNormalScale && (n.clearcoatNormalScale = (new Et).fromArray(t205.clearcoatNormalScale)), void 0 !== t205.iridescenceMap && (n.iridescenceMap = i(t205.iridescenceMap)), void 0 !== t205.iridescenceThicknessMap && (n.iridescenceThicknessMap = i(t205.iridescenceThicknessMap)), void 0 !== t205.transmissionMap && (n.transmissionMap = i(t205.transmissionMap)), void 0 !== t205.thicknessMap && (n.thicknessMap = i(t205.thicknessMap)), void 0 !== t205.sheenColorMap && (n.sheenColorMap = i(t205.sheenColorMap)), void 0 !== t205.sheenRoughnessMap && (n.sheenRoughnessMap = i(t205.sheenRoughnessMap)), n;
        }
        setTextures(t) {
            return this.textures = t, this;
        }
    }
    class Ec {
        static decodeText(t) {
            if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
            let e = "";
            for(let i = 0, n = t.length; i < n; i++)e += String.fromCharCode(t[i]);
            try {
                return decodeURIComponent(escape(e));
            } catch (t206) {
                return e;
            }
        }
        static extractUrlBase(t) {
            const e = t.lastIndexOf("/");
            return -1 === e ? "./" : t.slice(0, e + 1);
        }
        static resolveURL(t, e) {
            return "string" != typeof t || "" === t ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t);
        }
    }
    class Cc extends Pi {
        constructor(){
            super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
        }
        copy(t) {
            return super.copy(t), this.instanceCount = t.instanceCount, this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        toJSON() {
            const t = super.toJSON(this);
            return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t;
        }
    }
    class Lc extends nc {
        constructor(t){
            super(t);
        }
        load(t, e143, i82, n) {
            const r = this, s = new sc(r.manager);
            s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, function(i) {
                try {
                    e143(r.parse(JSON.parse(i)));
                } catch (e) {
                    n ? n(e) : console.error(e), r.manager.itemError(t);
                }
            }, i82, n);
        }
        parse(t208) {
            const e147 = {}, i = {};
            function n68(t209, n69) {
                if (void 0 !== e147[n69]) return e147[n69];
                const r54 = t209.interleavedBuffers[n69], s = function(t, e) {
                    if (void 0 !== i[e]) return i[e];
                    const n = t.arrayBuffers[e], r = new Uint32Array(n).buffer;
                    return i[e] = r, r;
                }(t209, r54.buffer), a = Pt1(r54.type, s), o = new ta(a, r54.stride);
                return o.uuid = r54.uuid, e147[n69] = o, o;
            }
            const r53 = t208.isInstancedBufferGeometry ? new Cc : new Pi, s39 = t208.data.index;
            if (void 0 !== s39) {
                const t = Pt1(s39.type, s39.array);
                r53.setIndex(new _i(t, 1));
            }
            const a34 = t208.data.attributes;
            for(const e144 in a34){
                const i = a34[e144];
                let s;
                if (i.isInterleavedBufferAttribute) {
                    const e = n68(t208.data, i.data);
                    s = new ia(e, i.itemSize, i.offset, i.normalized);
                } else {
                    const t = Pt1(i.type, i.array);
                    s = new (i.isInstancedBufferAttribute ? Da : _i)(t, i.itemSize, i.normalized);
                }
                void 0 !== i.name && (s.name = i.name), void 0 !== i.usage && s.setUsage(i.usage), void 0 !== i.updateRange && (s.updateRange.offset = i.updateRange.offset, s.updateRange.count = i.updateRange.count), r53.setAttribute(e144, s);
            }
            const o23 = t208.data.morphAttributes;
            if (o23) for(const e145 in o23){
                const i = o23[e145], s = [];
                for(let e = 0, r = i.length; e < r; e++){
                    const r = i[e];
                    let a;
                    if (r.isInterleavedBufferAttribute) {
                        const e = n68(t208.data, r.data);
                        a = new ia(e, r.itemSize, r.offset, r.normalized);
                    } else {
                        const t = Pt1(r.type, r.array);
                        a = new _i(t, r.itemSize, r.normalized);
                    }
                    void 0 !== r.name && (a.name = r.name), s.push(a);
                }
                r53.morphAttributes[e145] = s;
            }
            t208.data.morphTargetsRelative && (r53.morphTargetsRelative = !0);
            const l = t208.data.groups || t208.data.drawcalls || t208.data.offsets;
            if (void 0 !== l) for(let t207 = 0, e146 = l.length; t207 !== e146; ++t207){
                const e = l[t207];
                r53.addGroup(e.start, e.count, e.materialIndex);
            }
            const c = t208.data.boundingSphere;
            if (void 0 !== c) {
                const t = new ee;
                void 0 !== c.center && t.fromArray(c.center), r53.boundingSphere = new we(t, c.radius);
            }
            return t208.name && (r53.name = t208.name), t208.userData && (r53.userData = t208.userData), r53;
        }
    }
    const Rc = {
        UVMapping: n1,
        CubeReflectionMapping: r1,
        CubeRefractionMapping: s1,
        EquirectangularReflectionMapping: a1,
        EquirectangularRefractionMapping: o1,
        CubeUVReflectionMapping: l1
    }, Pc = {
        RepeatWrapping: c1,
        ClampToEdgeWrapping: h1,
        MirroredRepeatWrapping: u1
    }, Ic = {
        NearestFilter: d1,
        NearestMipmapNearestFilter: p1,
        NearestMipmapLinearFilter: m1,
        LinearFilter: f1,
        LinearMipmapNearestFilter: g1,
        LinearMipmapLinearFilter: v1
    };
    let Dc;
    const Nc = {
        getContext: function() {
            return void 0 === Dc && (Dc = new (window.AudioContext || window.webkitAudioContext)), Dc;
        },
        setContext: function(t) {
            Dc = t;
        }
    };
    const zc = new Ie, Oc = new Ie, Fc = new Ie;
    class Bc {
        constructor(t = !0){
            this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
        }
        start() {
            this.startTime = Uc(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
        }
        stop() {
            this.getElapsedTime(), this.running = !1, this.autoStart = !1;
        }
        getElapsedTime() {
            return this.getDelta(), this.elapsedTime;
        }
        getDelta() {
            let t = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                const e = Uc();
                t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t;
            }
            return t;
        }
    }
    function Uc() {
        return ("undefined" == typeof performance ? Date : performance).now();
    }
    const kc = new ee, Gc = new te, Vc = new ee, Hc = new ee;
    class Wc extends ni {
        constructor(t){
            super(), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
        }
        getOutput() {
            return this.gain;
        }
        setNodeSource(t) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this;
        }
        setMediaElementSource(t) {
            return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this;
        }
        setMediaStreamSource(t) {
            return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this;
        }
        setBuffer(t) {
            return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this;
        }
        play(t = 0) {
            if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
            if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
            this._startedAt = this.context.currentTime + t;
            const e = this.context.createBufferSource();
            return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
        }
        pause() {
            if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        stop() {
            if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        connect() {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for(let t = 1, e = this.filters.length; t < e; t++)this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput());
            } else this.source.connect(this.getOutput());
            return this._connected = !0, this;
        }
        disconnect() {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for(let t = 1, e = this.filters.length; t < e; t++)this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput());
            } else this.source.disconnect(this.getOutput());
            return this._connected = !1, this;
        }
        getFilters() {
            return this.filters;
        }
        setFilters(t) {
            return t || (t = []), !0 === this._connected ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this;
        }
        setDetune(t) {
            if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this;
        }
        getDetune() {
            return this.detune;
        }
        getFilter() {
            return this.getFilters()[0];
        }
        setFilter(t) {
            return this.setFilters(t ? [
                t
            ] : []);
        }
        setPlaybackRate(t) {
            if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        getPlaybackRate() {
            return this.playbackRate;
        }
        onEnded() {
            this.isPlaying = !1;
        }
        getLoop() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
        }
        setLoop(t) {
            if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        setLoopStart(t) {
            return this.loopStart = t, this;
        }
        setLoopEnd(t) {
            return this.loopEnd = t, this;
        }
        getVolume() {
            return this.gain.gain.value;
        }
        setVolume(t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this;
        }
    }
    const jc = new ee, qc = new te, Xc = new ee, Jc = new ee;
    class Yc {
        constructor(t, e, i){
            let n, r, s;
            switch(this.binding = t, this.valueSize = i, e){
                case "quaternion":
                    n = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * i), this._workIndex = 5;
                    break;
                case "string":
                case "bool":
                    n = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(5 * i);
                    break;
                default:
                    n = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * i);
            }
            this._mixBufferRegion = n, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
        }
        accumulate(t, e) {
            const i = this.buffer, n = this.valueSize, r = t * n + n;
            let s = this.cumulativeWeight;
            if (0 === s) {
                for(let t = 0; t !== n; ++t)i[r + t] = i[t];
                s = e;
            } else {
                s += e;
                const t = e / s;
                this._mixBufferRegion(i, r, 0, t, n);
            }
            this.cumulativeWeight = s;
        }
        accumulateAdditive(t) {
            const e = this.buffer, i = this.valueSize, n = i * this._addIndex;
            0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, n, 0, t, i), this.cumulativeWeightAdditive += t;
        }
        apply(t) {
            const e = this.valueSize, i = this.buffer, n = t * e + e, r = this.cumulativeWeight, s = this.cumulativeWeightAdditive, a = this.binding;
            if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
                const t = e * this._origIndex;
                this._mixBufferRegion(i, n, t, 1 - r, e);
            }
            s > 0 && this._mixBufferRegionAdditive(i, n, this._addIndex * e, 1, e);
            for(let t210 = e, r55 = e + e; t210 !== r55; ++t210)if (i[t210] !== i[t210 + e]) {
                a.setValue(i, n);
                break;
            }
        }
        saveOriginalState() {
            const t = this.binding, e = this.buffer, i = this.valueSize, n = i * this._origIndex;
            t.getValue(e, n);
            for(let t211 = i, r = n; t211 !== r; ++t211)e[t211] = e[n + t211 % i];
            this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
        }
        restoreOriginalState() {
            const t = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t);
        }
        _setAdditiveIdentityNumeric() {
            const t = this._addIndex * this.valueSize, e = t + this.valueSize;
            for(let i = t; i < e; i++)this.buffer[i] = 0;
        }
        _setAdditiveIdentityQuaternion() {
            this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
        }
        _setAdditiveIdentityOther() {
            const t = this._origIndex * this.valueSize, e = this._addIndex * this.valueSize;
            for(let i = 0; i < this.valueSize; i++)this.buffer[e + i] = this.buffer[t + i];
        }
        _select(t, e, i, n, r) {
            if (n >= .5) for(let n70 = 0; n70 !== r; ++n70)t[e + n70] = t[i + n70];
        }
        _slerp(t, e, i, n) {
            te.slerpFlat(t, e, t, e, t, i, n);
        }
        _slerpAdditive(t, e, i, n, r) {
            const s = this._workIndex * r;
            te.multiplyQuaternionsFlat(t, s, t, e, t, i), te.slerpFlat(t, e, t, e, t, s, n);
        }
        _lerp(t, e, i, n, r) {
            const s = 1 - n;
            for(let a = 0; a !== r; ++a){
                const r = e + a;
                t[r] = t[r] * s + t[i + a] * n;
            }
        }
        _lerpAdditive(t, e, i, n, r) {
            for(let s = 0; s !== r; ++s){
                const r = e + s;
                t[r] = t[r] + t[i + s] * n;
            }
        }
    }
    const Zc = "\\[\\]\\.:\\/", Kc = new RegExp("[\\[\\]\\.:\\/]", "g"), Qc = "[^\\[\\]\\.:\\/]", $c = "[^" + Zc.replace("\\.", "") + "]", th = /((?:WC+[\/:])*)/.source.replace("WC", Qc), eh = /(WCOD+)?/.source.replace("WCOD", $c), ih = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Qc), nh = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Qc), rh = new RegExp("^" + th + eh + ih + nh + "$"), sh = [
        "material",
        "materials",
        "bones"
    ];
    class ah {
        constructor(t, e, i){
            this.path = e, this.parsedPath = i || ah.parseTrackName(e), this.node = ah.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
        }
        static create(t, e, i) {
            return t && t.isAnimationObjectGroup ? new ah.Composite(t, e, i) : new ah(t, e, i);
        }
        static sanitizeNodeName(t) {
            return t.replace(/\s/g, "_").replace(Kc, "");
        }
        static parseTrackName(t) {
            const e = rh.exec(t);
            if (null === e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
            const i = {
                nodeName: e[2],
                objectName: e[3],
                objectIndex: e[4],
                propertyName: e[5],
                propertyIndex: e[6]
            }, n = i.nodeName && i.nodeName.lastIndexOf(".");
            if (void 0 !== n && -1 !== n) {
                const t = i.nodeName.substring(n + 1);
                -1 !== sh.indexOf(t) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = t);
            }
            if (null === i.propertyName || 0 === i.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
            return i;
        }
        static findNode(t212, e) {
            if (void 0 === e || "" === e || "." === e || -1 === e || e === t212.name || e === t212.uuid) return t212;
            if (t212.skeleton) {
                const i = t212.skeleton.getBoneByName(e);
                if (void 0 !== i) return i;
            }
            if (t212.children) {
                const i = function(t) {
                    for(let n = 0; n < t.length; n++){
                        const r = t[n];
                        if (r.name === e || r.uuid === e) return r;
                        const s = i(r.children);
                        if (s) return s;
                    }
                    return null;
                }, n71 = i(t212.children);
                if (n71) return n71;
            }
            return null;
        }
        _getValue_unavailable() {}
        _setValue_unavailable() {}
        _getValue_direct(t, e) {
            t[e] = this.targetObject[this.propertyName];
        }
        _getValue_array(t, e) {
            const i = this.resolvedProperty;
            for(let n = 0, r = i.length; n !== r; ++n)t[e++] = i[n];
        }
        _getValue_arrayElement(t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex];
        }
        _getValue_toArray(t, e) {
            this.resolvedProperty.toArray(t, e);
        }
        _setValue_direct(t, e) {
            this.targetObject[this.propertyName] = t[e];
        }
        _setValue_direct_setNeedsUpdate(t, e) {
            this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0;
        }
        _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
            this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_array(t, e) {
            const i = this.resolvedProperty;
            for(let n = 0, r = i.length; n !== r; ++n)i[n] = t[e++];
        }
        _setValue_array_setNeedsUpdate(t, e) {
            const i = this.resolvedProperty;
            for(let n = 0, r = i.length; n !== r; ++n)i[n] = t[e++];
            this.targetObject.needsUpdate = !0;
        }
        _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
            const i = this.resolvedProperty;
            for(let n = 0, r = i.length; n !== r; ++n)i[n] = t[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_arrayElement(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e];
        }
        _setValue_arrayElement_setNeedsUpdate(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0;
        }
        _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_fromArray(t, e) {
            this.resolvedProperty.fromArray(t, e);
        }
        _setValue_fromArray_setNeedsUpdate(t, e) {
            this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0;
        }
        _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
            this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _getValue_unbound(t, e) {
            this.bind(), this.getValue(t, e);
        }
        _setValue_unbound(t, e) {
            this.bind(), this.setValue(t, e);
        }
        bind() {
            let t = this.node;
            const e = this.parsedPath, i = e.objectName, n = e.propertyName;
            let r = e.propertyIndex;
            if (t || (t = ah.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
            if (i) {
                let n = e.objectIndex;
                switch(i){
                    case "materials":
                        if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                        if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                        t = t.material.materials;
                        break;
                    case "bones":
                        if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                        t = t.skeleton.bones;
                        for(let e148 = 0; e148 < t.length; e148++)if (t[e148].name === n) {
                            n = e148;
                            break;
                        }
                        break;
                    default:
                        if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                        t = t[i];
                }
                if (void 0 !== n) {
                    if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                    t = t[n];
                }
            }
            const s = t[n];
            if (void 0 === s) {
                const i = e.nodeName;
                return void console.error("THREE.PropertyBinding: Trying to update property for track: " + i + "." + n + " but it wasn't found.", t);
            }
            let a = this.Versioning.None;
            this.targetObject = t, void 0 !== t.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
            let o = this.BindingType.Direct;
            if (void 0 !== r) {
                if ("morphTargetInfluences" === n) {
                    if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                    if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                    void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r]);
                }
                o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r;
            } else void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = n;
            this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a];
        }
        unbind() {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
        }
    }
    ah.Composite = class {
        constructor(t, e, i){
            const n = i || ah.parseTrackName(e);
            this._targetGroup = t, this._bindings = t.subscribe_(e, n);
        }
        getValue(t, e) {
            this.bind();
            const i = this._targetGroup.nCachedObjects_, n = this._bindings[i];
            void 0 !== n && n.getValue(t, e);
        }
        setValue(t, e) {
            const i = this._bindings;
            for(let n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n)i[n].setValue(t, e);
        }
        bind() {
            const t = this._bindings;
            for(let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e)t[e].bind();
        }
        unbind() {
            const t = this._bindings;
            for(let e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e)t[e].unbind();
        }
    }, ah.prototype.BindingType = {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3
    }, ah.prototype.Versioning = {
        None: 0,
        NeedsUpdate: 1,
        MatrixWorldNeedsUpdate: 2
    }, ah.prototype.GetterByBindingType = [
        ah.prototype._getValue_direct,
        ah.prototype._getValue_array,
        ah.prototype._getValue_arrayElement,
        ah.prototype._getValue_toArray
    ], ah.prototype.SetterByBindingTypeAndVersioning = [
        [
            ah.prototype._setValue_direct,
            ah.prototype._setValue_direct_setNeedsUpdate,
            ah.prototype._setValue_direct_setMatrixWorldNeedsUpdate
        ],
        [
            ah.prototype._setValue_array,
            ah.prototype._setValue_array_setNeedsUpdate,
            ah.prototype._setValue_array_setMatrixWorldNeedsUpdate
        ],
        [
            ah.prototype._setValue_arrayElement,
            ah.prototype._setValue_arrayElement_setNeedsUpdate,
            ah.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
        ],
        [
            ah.prototype._setValue_fromArray,
            ah.prototype._setValue_fromArray_setNeedsUpdate,
            ah.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
        ]
    ];
    class oh {
        constructor(t, e, i = null, n = e.blendMode){
            this._mixer = t, this._clip = e, this._localRoot = i, this.blendMode = n;
            const r = e.tracks, s = r.length, a = new Array(s), o = {
                endingStart: et1,
                endingEnd: et1
            };
            for(let t213 = 0; t213 !== s; ++t213){
                const e = r[t213].createInterpolant(null);
                a[t213] = e, e.settings = o;
            }
            this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
        }
        play() {
            return this._mixer._activateAction(this), this;
        }
        stop() {
            return this._mixer._deactivateAction(this), this.reset();
        }
        reset() {
            return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
        }
        isRunning() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this);
        }
        isScheduled() {
            return this._mixer._isActiveAction(this);
        }
        startAt(t) {
            return this._startTime = t, this;
        }
        setLoop(t, e) {
            return this.loop = t, this.repetitions = e, this;
        }
        setEffectiveWeight(t) {
            return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading();
        }
        getEffectiveWeight() {
            return this._effectiveWeight;
        }
        fadeIn(t) {
            return this._scheduleFading(t, 0, 1);
        }
        fadeOut(t) {
            return this._scheduleFading(t, 1, 0);
        }
        crossFadeFrom(t, e, i) {
            if (t.fadeOut(e), this.fadeIn(e), i) {
                const i = this._clip.duration, n = t._clip.duration, r = n / i, s = i / n;
                t.warp(1, r, e), this.warp(s, 1, e);
            }
            return this;
        }
        crossFadeTo(t, e, i) {
            return t.crossFadeFrom(this, e, i);
        }
        stopFading() {
            const t = this._weightInterpolant;
            return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
        }
        setEffectiveTimeScale(t) {
            return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping();
        }
        getEffectiveTimeScale() {
            return this._effectiveTimeScale;
        }
        setDuration(t) {
            return this.timeScale = this._clip.duration / t, this.stopWarping();
        }
        syncWith(t) {
            return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping();
        }
        halt(t) {
            return this.warp(this._effectiveTimeScale, 0, t);
        }
        warp(t, e, i) {
            const n = this._mixer, r = n.time, s = this.timeScale;
            let a = this._timeScaleInterpolant;
            null === a && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a);
            const o = a.parameterPositions, l = a.sampleValues;
            return o[0] = r, o[1] = r + i, l[0] = t / s, l[1] = e / s, this;
        }
        stopWarping() {
            const t = this._timeScaleInterpolant;
            return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
        }
        getMixer() {
            return this._mixer;
        }
        getClip() {
            return this._clip;
        }
        getRoot() {
            return this._localRoot || this._mixer._root;
        }
        _update(t, e, i, n) {
            if (!this.enabled) return void this._updateWeight(t);
            const r = this._startTime;
            if (null !== r) {
                const n = (t - r) * i;
                if (n < 0 || 0 === i) return;
                this._startTime = null, e = i * n;
            }
            e *= this._updateTimeScale(t);
            const s = this._updateTime(e), a = this._updateWeight(t);
            if (a > 0) {
                const t = this._interpolants, e = this._propertyBindings;
                if (this.blendMode === st1) for(let i = 0, n73 = t.length; i !== n73; ++i)t[i].evaluate(s), e[i].accumulateAdditive(a);
                else for(let i83 = 0, r = t.length; i83 !== r; ++i83)t[i83].evaluate(s), e[i83].accumulate(n, a);
            }
        }
        _updateWeight(t) {
            let e = 0;
            if (this.enabled) {
                e = this.weight;
                const i = this._weightInterpolant;
                if (null !== i) {
                    const n = i.evaluate(t)[0];
                    e *= n, t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1));
                }
            }
            return this._effectiveWeight = e, e;
        }
        _updateTimeScale(t) {
            let e = 0;
            if (!this.paused) {
                e = this.timeScale;
                const i = this._timeScaleInterpolant;
                if (null !== i) e *= i.evaluate(t)[0], t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e);
            }
            return this._effectiveTimeScale = e, e;
        }
        _updateTime(t) {
            const e = this._clip.duration, i = this.loop;
            let n = this.time + t, r = this._loopCount;
            const s = 2202 === i;
            if (0 === t) return -1 === r ? n : s && 1 == (1 & r) ? e - n : n;
            if (2200 === i) {
                -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                t: {
                    if (n >= e) n = e;
                    else {
                        if (!(n < 0)) {
                            this.time = n;
                            break t;
                        }
                        n = 0;
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = n, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t < 0 ? -1 : 1
                    });
                }
            } else {
                if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), n >= e || n < 0) {
                    const i = Math.floor(n / e);
                    n -= e * i, r += Math.abs(i);
                    const a = this.repetitions - r;
                    if (a <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, n = t > 0 ? e : 0, this.time = n, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t > 0 ? 1 : -1
                    });
                    else {
                        if (1 === a) {
                            const e = t < 0;
                            this._setEndings(e, !e, s);
                        } else this._setEndings(!1, !1, s);
                        this._loopCount = r, this.time = n, this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: i
                        });
                    }
                } else this.time = n;
                if (s && 1 == (1 & r)) return e - n;
            }
            return n;
        }
        _setEndings(t, e, i) {
            const n = this._interpolantSettings;
            i ? (n.endingStart = it1, n.endingEnd = it1) : (n.endingStart = t ? this.zeroSlopeAtStart ? it1 : et1 : nt1, n.endingEnd = e ? this.zeroSlopeAtEnd ? it1 : et1 : nt1);
        }
        _scheduleFading(t, e, i) {
            const n = this._mixer, r = n.time;
            let s = this._weightInterpolant;
            null === s && (s = n._lendControlInterpolant(), this._weightInterpolant = s);
            const a = s.parameterPositions, o = s.sampleValues;
            return a[0] = r, o[0] = e, a[1] = r + t, o[1] = i, this;
        }
    }
    const lh = new Float32Array(1);
    class ch {
        constructor(t){
            "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t;
        }
        clone() {
            return new ch(void 0 === this.value.clone ? this.value : this.value.clone());
        }
    }
    function hh(t, e) {
        return t.distance - e.distance;
    }
    function uh(t, e, i, n) {
        if (t.layers.test(e.layers) && t.raycast(e, i), !0 === n) {
            const n = t.children;
            for(let t214 = 0, r = n.length; t214 < r; t214++)uh(n[t214], e, i, !0);
        }
    }
    const dh = new Et;
    const ph = new ee, mh = new ee;
    const fh = new ee;
    const gh = new ee, vh = new Ie, xh = new Ie;
    function yh(t) {
        const e = [];
        !0 === t.isBone && e.push(t);
        for(let i = 0; i < t.children.length; i++)e.push.apply(e, yh(t.children[i]));
        return e;
    }
    const _h = new ee, Mh = new Ht, bh = new Ht;
    const wh = new ee, Sh = new ee, Th = new ee;
    const Ah = new ee, Eh = new nn;
    function Ch(t, e, i, n, r, s, a) {
        Ah.set(r, s, a).unproject(n);
        const o = e[t];
        if (void 0 !== o) {
            const t = i.getAttribute("position");
            for(let e = 0, i84 = o.length; e < i84; e++)t.setXYZ(o[e], Ah.x, Ah.y, Ah.z);
        }
    }
    const Lh = new re;
    const Rh = new ee;
    let Ph, Ih;
    const Dh = new ArrayBuffer(4), Nh = new Float32Array(Dh), zh = new Uint32Array(Dh), Oh = new Uint32Array(512), Fh = new Uint32Array(512);
    for(let t2 = 0; t2 < 256; ++t2){
        const e = t2 - 127;
        e < -27 ? (Oh[t2] = 0, Oh[256 | t2] = 32768, Fh[t2] = 24, Fh[256 | t2] = 24) : e < -14 ? (Oh[t2] = 1024 >> -e - 14, Oh[256 | t2] = 1024 >> -e - 14 | 32768, Fh[t2] = -e - 1, Fh[256 | t2] = -e - 1) : e <= 15 ? (Oh[t2] = e + 15 << 10, Oh[256 | t2] = e + 15 << 10 | 32768, Fh[t2] = 13, Fh[256 | t2] = 13) : e < 128 ? (Oh[t2] = 31744, Oh[256 | t2] = 64512, Fh[t2] = 24, Fh[256 | t2] = 24) : (Oh[t2] = 31744, Oh[256 | t2] = 64512, Fh[t2] = 13, Fh[256 | t2] = 13);
    }
    const Bh = new Uint32Array(2048), Uh = new Uint32Array(64), kh = new Uint32Array(64);
    for(let t3 = 1; t3 < 1024; ++t3){
        let e = t3 << 13, i = 0;
        for(; 0 == (8388608 & e);)e <<= 1, i -= 8388608;
        e &= -8388609, i += 947912704, Bh[t3] = e | i;
    }
    for(let t4 = 1024; t4 < 2048; ++t4)Bh[t4] = 939524096 + (t4 - 1024 << 13);
    for(let t5 = 1; t5 < 31; ++t5)Uh[t5] = t5 << 23;
    Uh[31] = 1199570944, Uh[32] = 2147483648;
    for(let t6 = 33; t6 < 63; ++t6)Uh[t6] = 2147483648 + (t6 - 32 << 23);
    Uh[63] = 3347054592;
    for(let t7 = 1; t7 < 64; ++t7)32 !== t7 && (kh[t7] = 1024);
    "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: e1
        }
    })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = e1), t8.ACESFilmicToneMapping = 4, t8.AddEquation = i1, t8.AddOperation = 2, t8.AdditiveAnimationBlendMode = st1, t8.AdditiveBlending = 2, t8.AlphaFormat = 1021, t8.AlwaysDepth = 1, t8.AlwaysStencilFunc = 519, t8.AmbientLight = bc, t8.AmbientLightProbe = class extends Tc {
        constructor(t, e = 1){
            super(void 0, e), this.isAmbientLightProbe = !0;
            const i = (new Ht).set(t);
            this.sh.coefficients[0].set(i.r, i.g, i.b).multiplyScalar(2 * Math.sqrt(Math.PI));
        }
    }, t8.AnimationClip = Ql, t8.AnimationLoader = class extends nc {
        constructor(t){
            super(t);
        }
        load(t, e149, i85, n) {
            const r = this, s = new sc(this.manager);
            s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, function(i) {
                try {
                    e149(r.parse(JSON.parse(i)));
                } catch (e) {
                    n ? n(e) : console.error(e), r.manager.itemError(t);
                }
            }, i85, n);
        }
        parse(t) {
            const e = [];
            for(let i = 0; i < t.length; i++){
                const n = Ql.parse(t[i]);
                e.push(n);
            }
            return e;
        }
    }, t8.AnimationMixer = class extends mt1 {
        constructor(t){
            super(), this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
        }
        _bindAction(t, e) {
            const i = t._localRoot || this._root, n = t._clip.tracks, r = n.length, s = t._propertyBindings, a = t._interpolants, o = i.uuid, l = this._bindingsByRootAndName;
            let c = l[o];
            void 0 === c && (c = {}, l[o] = c);
            for(let t215 = 0; t215 !== r; ++t215){
                const r = n[t215], l = r.name;
                let h = c[l];
                if (void 0 !== h) ++h.referenceCount, s[t215] = h;
                else {
                    if (h = s[t215], void 0 !== h) {
                        null === h._cacheIndex && (++h.referenceCount, this._addInactiveBinding(h, o, l));
                        continue;
                    }
                    const n = e && e._propertyBindings[t215].binding.parsedPath;
                    h = new Yc(ah.create(i, l, n), r.ValueTypeName, r.getValueSize()), ++h.referenceCount, this._addInactiveBinding(h, o, l), s[t215] = h;
                }
                a[t215].resultBuffer = h.buffer;
            }
        }
        _activateAction(t) {
            if (!this._isActiveAction(t)) {
                if (null === t._cacheIndex) {
                    const e = (t._localRoot || this._root).uuid, i = t._clip.uuid, n = this._actionsByClip[i];
                    this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e);
                }
                const e = t._propertyBindings;
                for(let t216 = 0, i = e.length; t216 !== i; ++t216){
                    const i = e[t216];
                    0 == i.useCount++ && (this._lendBinding(i), i.saveOriginalState());
                }
                this._lendAction(t);
            }
        }
        _deactivateAction(t) {
            if (this._isActiveAction(t)) {
                const e = t._propertyBindings;
                for(let t217 = 0, i = e.length; t217 !== i; ++t217){
                    const i = e[t217];
                    0 == --i.useCount && (i.restoreOriginalState(), this._takeBackBinding(i));
                }
                this._takeBackAction(t);
            }
        }
        _initMemoryManager() {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            const t = this;
            this.stats = {
                actions: {
                    get total () {
                        return t._actions.length;
                    },
                    get inUse () {
                        return t._nActiveActions;
                    }
                },
                bindings: {
                    get total () {
                        return t._bindings.length;
                    },
                    get inUse () {
                        return t._nActiveBindings;
                    }
                },
                controlInterpolants: {
                    get total () {
                        return t._controlInterpolants.length;
                    },
                    get inUse () {
                        return t._nActiveControlInterpolants;
                    }
                }
            };
        }
        _isActiveAction(t) {
            const e = t._cacheIndex;
            return null !== e && e < this._nActiveActions;
        }
        _addInactiveAction(t, e, i) {
            const n = this._actions, r = this._actionsByClip;
            let s = r[e];
            if (void 0 === s) s = {
                knownActions: [
                    t
                ],
                actionByRoot: {}
            }, t._byClipCacheIndex = 0, r[e] = s;
            else {
                const e = s.knownActions;
                t._byClipCacheIndex = e.length, e.push(t);
            }
            t._cacheIndex = n.length, n.push(t), s.actionByRoot[i] = t;
        }
        _removeInactiveAction(t) {
            const e = this._actions, i = e[e.length - 1], n = t._cacheIndex;
            i._cacheIndex = n, e[n] = i, e.pop(), t._cacheIndex = null;
            const r = t._clip.uuid, s = this._actionsByClip, a = s[r], o = a.knownActions, l = o[o.length - 1], c = t._byClipCacheIndex;
            l._byClipCacheIndex = c, o[c] = l, o.pop(), t._byClipCacheIndex = null;
            delete a.actionByRoot[(t._localRoot || this._root).uuid], 0 === o.length && delete s[r], this._removeInactiveBindingsForAction(t);
        }
        _removeInactiveBindingsForAction(t) {
            const e = t._propertyBindings;
            for(let t218 = 0, i = e.length; t218 !== i; ++t218){
                const i = e[t218];
                0 == --i.referenceCount && this._removeInactiveBinding(i);
            }
        }
        _lendAction(t) {
            const e = this._actions, i = t._cacheIndex, n = this._nActiveActions++, r = e[n];
            t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r;
        }
        _takeBackAction(t) {
            const e = this._actions, i = t._cacheIndex, n = --this._nActiveActions, r = e[n];
            t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r;
        }
        _addInactiveBinding(t, e, i) {
            const n = this._bindingsByRootAndName, r = this._bindings;
            let s = n[e];
            void 0 === s && (s = {}, n[e] = s), s[i] = t, t._cacheIndex = r.length, r.push(t);
        }
        _removeInactiveBinding(t) {
            const e = this._bindings, i = t.binding, n = i.rootNode.uuid, r = i.path, s = this._bindingsByRootAndName, a = s[n], o = e[e.length - 1], l = t._cacheIndex;
            o._cacheIndex = l, e[l] = o, e.pop(), delete a[r], 0 === Object.keys(a).length && delete s[n];
        }
        _lendBinding(t) {
            const e = this._bindings, i = t._cacheIndex, n = this._nActiveBindings++, r = e[n];
            t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r;
        }
        _takeBackBinding(t) {
            const e = this._bindings, i = t._cacheIndex, n = --this._nActiveBindings, r = e[n];
            t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r;
        }
        _lendControlInterpolant() {
            const t = this._controlInterpolants, e = this._nActiveControlInterpolants++;
            let i = t[e];
            return void 0 === i && (i = new Vl(new Float32Array(2), new Float32Array(2), 1, lh), i.__cacheIndex = e, t[e] = i), i;
        }
        _takeBackControlInterpolant(t) {
            const e = this._controlInterpolants, i = t.__cacheIndex, n = --this._nActiveControlInterpolants, r = e[n];
            t.__cacheIndex = n, e[n] = t, r.__cacheIndex = i, e[i] = r;
        }
        clipAction(t, e, i) {
            const n = e || this._root, r = n.uuid;
            let s = "string" == typeof t ? Ql.findByName(n, t) : t;
            const a = null !== s ? s.uuid : t, o = this._actionsByClip[a];
            let l = null;
            if (void 0 === i && (i = null !== s ? s.blendMode : rt1), void 0 !== o) {
                const t = o.actionByRoot[r];
                if (void 0 !== t && t.blendMode === i) return t;
                l = o.knownActions[0], null === s && (s = l._clip);
            }
            if (null === s) return null;
            const c = new oh(this, s, e, i);
            return this._bindAction(c, l), this._addInactiveAction(c, a, r), c;
        }
        existingAction(t, e) {
            const i = e || this._root, n = i.uuid, r = "string" == typeof t ? Ql.findByName(i, t) : t, s = r ? r.uuid : t, a = this._actionsByClip[s];
            return void 0 !== a && a.actionByRoot[n] || null;
        }
        stopAllAction() {
            const t = this._actions;
            for(let e = this._nActiveActions - 1; e >= 0; --e)t[e].stop();
            return this;
        }
        update(t) {
            t *= this.timeScale;
            const e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign(t), s = this._accuIndex ^= 1;
            for(let a = 0; a !== i; ++a)e[a]._update(n, t, r, s);
            const a35 = this._bindings, o = this._nActiveBindings;
            for(let t219 = 0; t219 !== o; ++t219)a35[t219].apply(s);
            return this;
        }
        setTime(t) {
            this.time = 0;
            for(let t220 = 0; t220 < this._actions.length; t220++)this._actions[t220].time = 0;
            return this.update(t);
        }
        getRoot() {
            return this._root;
        }
        uncacheClip(t) {
            const e = this._actions, i = t.uuid, n = this._actionsByClip, r = n[i];
            if (void 0 !== r) {
                const t = r.knownActions;
                for(let i86 = 0, n74 = t.length; i86 !== n74; ++i86){
                    const n = t[i86];
                    this._deactivateAction(n);
                    const r = n._cacheIndex, s = e[e.length - 1];
                    n._cacheIndex = null, n._byClipCacheIndex = null, s._cacheIndex = r, e[r] = s, e.pop(), this._removeInactiveBindingsForAction(n);
                }
                delete n[i];
            }
        }
        uncacheRoot(t) {
            const e = t.uuid, i = this._actionsByClip;
            for(const t221 in i){
                const n = i[t221].actionByRoot[e];
                void 0 !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
            }
            const n = this._bindingsByRootAndName[e];
            if (void 0 !== n) for(const t222 in n){
                const e = n[t222];
                e.restoreOriginalState(), this._removeInactiveBinding(e);
            }
        }
        uncacheAction(t, e) {
            const i = this.existingAction(t, e);
            null !== i && (this._deactivateAction(i), this._removeInactiveAction(i));
        }
    }, t8.AnimationObjectGroup = class {
        constructor(){
            this.isAnimationObjectGroup = !0, this.uuid = yt1(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
            const t = {};
            this._indicesByUUID = t;
            for(let e = 0, i = arguments.length; e !== i; ++e)t[arguments[e].uuid] = e;
            this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
            const e150 = this;
            this.stats = {
                objects: {
                    get total () {
                        return e150._objects.length;
                    },
                    get inUse () {
                        return this.total - e150.nCachedObjects_;
                    }
                },
                get bindingsPerObject () {
                    return e150._bindings.length;
                }
            };
        }
        add() {
            const t = this._objects, e = this._indicesByUUID, i = this._paths, n = this._parsedPaths, r = this._bindings, s = r.length;
            let a, o = t.length, l = this.nCachedObjects_;
            for(let c = 0, h = arguments.length; c !== h; ++c){
                const h = arguments[c], u = h.uuid;
                let d = e[u];
                if (void 0 === d) {
                    d = o++, e[u] = d, t.push(h);
                    for(let t223 = 0, e151 = s; t223 !== e151; ++t223)r[t223].push(new ah(h, i[t223], n[t223]));
                } else if (d < l) {
                    a = t[d];
                    const o = --l, c = t[o];
                    e[c.uuid] = d, t[d] = c, e[u] = o, t[o] = h;
                    for(let t225 = 0, e153 = s; t225 !== e153; ++t225){
                        const e = r[t225], s = e[o];
                        let a = e[d];
                        e[d] = s, void 0 === a && (a = new ah(h, i[t225], n[t225])), e[o] = a;
                    }
                } else t[d] !== a && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
            }
            this.nCachedObjects_ = l;
        }
        remove() {
            const t = this._objects, e = this._indicesByUUID, i = this._bindings, n = i.length;
            let r = this.nCachedObjects_;
            for(let s = 0, a = arguments.length; s !== a; ++s){
                const a = arguments[s], o = a.uuid, l = e[o];
                if (void 0 !== l && l >= r) {
                    const s = r++, c = t[s];
                    e[c.uuid] = l, t[l] = c, e[o] = s, t[s] = a;
                    for(let t227 = 0, e155 = n; t227 !== e155; ++t227){
                        const e = i[t227], n = e[s], r = e[l];
                        e[l] = n, e[s] = r;
                    }
                }
            }
            this.nCachedObjects_ = r;
        }
        uncache() {
            const t = this._objects, e = this._indicesByUUID, i = this._bindings, n = i.length;
            let r = this.nCachedObjects_, s = t.length;
            for(let a = 0, o = arguments.length; a !== o; ++a){
                const o = arguments[a].uuid, l = e[o];
                if (void 0 !== l) {
                    if (delete e[o], l < r) {
                        const a = --r, o = t[a], c = --s, h = t[c];
                        e[o.uuid] = l, t[l] = o, e[h.uuid] = a, t[a] = h, t.pop();
                        for(let t229 = 0, e157 = n; t229 !== e157; ++t229){
                            const e = i[t229], n = e[a], r = e[c];
                            e[l] = n, e[a] = r, e.pop();
                        }
                    } else {
                        const r = --s, a = t[r];
                        r > 0 && (e[a.uuid] = l), t[l] = a, t.pop();
                        for(let t232 = 0, e160 = n; t232 !== e160; ++t232){
                            const e = i[t232];
                            e[l] = e[r], e.pop();
                        }
                    }
                }
            }
            this.nCachedObjects_ = r;
        }
        subscribe_(t, e) {
            const i = this._bindingsIndicesByPath;
            let n = i[t];
            const r = this._bindings;
            if (void 0 !== n) return r[n];
            const s = this._paths, a = this._parsedPaths, o = this._objects, l = o.length, c = this.nCachedObjects_, h = new Array(l);
            n = r.length, i[t] = n, s.push(t), a.push(e), r.push(h);
            for(let i87 = c, n75 = o.length; i87 !== n75; ++i87){
                const n = o[i87];
                h[i87] = new ah(n, t, e);
            }
            return h;
        }
        unsubscribe_(t) {
            const e = this._bindingsIndicesByPath, i = e[t];
            if (void 0 !== i) {
                const n = this._paths, r = this._parsedPaths, s = this._bindings, a = s.length - 1, o = s[a];
                e[t[a]] = i, s[i] = o, s.pop(), r[i] = r[a], r.pop(), n[i] = n[a], n.pop();
            }
        }
    }, t8.AnimationUtils = Ul, t8.ArcCurve = ao, t8.ArrayCamera = Vs, t8.ArrowHelper = class extends ni {
        constructor(t = new ee(0, 0, 1), e = new ee(0, 0, 0), i = 1, n = 16776960, r = .2 * i, s = .2 * r){
            super(), this.type = "ArrowHelper", void 0 === Ph && (Ph = new Pi, Ph.setAttribute("position", new wi([
                0,
                0,
                0,
                0,
                1,
                0
            ], 3)), Ih = new Ro(0, .5, 1, 5, 1), Ih.translate(0, -0.5, 0)), this.position.copy(e), this.line = new ja(Ph, new Ua({
                color: n,
                toneMapped: !1
            })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Yi(Ih, new vi({
                color: n,
                toneMapped: !1
            })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(i, r, s);
        }
        setDirection(t) {
            if (t.y > .99999) this.quaternion.set(0, 0, 0, 1);
            else if (t.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
            else {
                Rh.set(t.z, 0, -t.x).normalize();
                const e = Math.acos(t.y);
                this.quaternion.setFromAxisAngle(Rh, e);
            }
        }
        setLength(t, e = .2 * t, i = .2 * e) {
            this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone.updateMatrix();
        }
        setColor(t) {
            this.line.material.color.set(t), this.cone.material.color.set(t);
        }
        copy(t) {
            return super.copy(t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this;
        }
    }, t8.Audio = Wc, t8.AudioAnalyser = class {
        constructor(t, e = 2048){
            this.analyser = t.context.createAnalyser(), this.analyser.fftSize = e, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser);
        }
        getFrequencyData() {
            return this.analyser.getByteFrequencyData(this.data), this.data;
        }
        getAverageFrequency() {
            let t = 0;
            const e = this.getFrequencyData();
            for(let i = 0; i < e.length; i++)t += e[i];
            return t / e.length;
        }
    }, t8.AudioContext = Nc, t8.AudioListener = class extends ni {
        constructor(){
            super(), this.type = "AudioListener", this.context = Nc.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new Bc;
        }
        getInput() {
            return this.gain;
        }
        removeFilter() {
            return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
        }
        getFilter() {
            return this.filter;
        }
        setFilter(t) {
            return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
        }
        getMasterVolume() {
            return this.gain.gain.value;
        }
        setMasterVolume(t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this;
        }
        updateMatrixWorld(t) {
            super.updateMatrixWorld(t);
            const e = this.context.listener, i = this.up;
            if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(kc, Gc, Vc), Hc.set(0, 0, -1).applyQuaternion(Gc), e.positionX) {
                const t = this.context.currentTime + this.timeDelta;
                e.positionX.linearRampToValueAtTime(kc.x, t), e.positionY.linearRampToValueAtTime(kc.y, t), e.positionZ.linearRampToValueAtTime(kc.z, t), e.forwardX.linearRampToValueAtTime(Hc.x, t), e.forwardY.linearRampToValueAtTime(Hc.y, t), e.forwardZ.linearRampToValueAtTime(Hc.z, t), e.upX.linearRampToValueAtTime(i.x, t), e.upY.linearRampToValueAtTime(i.y, t), e.upZ.linearRampToValueAtTime(i.z, t);
            } else e.setPosition(kc.x, kc.y, kc.z), e.setOrientation(Hc.x, Hc.y, Hc.z, i.x, i.y, i.z);
        }
    }, t8.AudioLoader = class extends nc {
        constructor(t){
            super(t);
        }
        load(t235, e163, i88, n) {
            const r = this, s = new sc(this.manager);
            s.setResponseType("arraybuffer"), s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t235, function(i) {
                try {
                    const t236 = i.slice(0);
                    Nc.getContext().decodeAudioData(t236, function(t) {
                        e163(t);
                    });
                } catch (e) {
                    n ? n(e) : console.error(e), r.manager.itemError(t235);
                }
            }, i88, n);
        }
    }, t8.AxesHelper = class extends Ja {
        constructor(t = 1){
            const e = [
                0,
                0,
                0,
                t,
                0,
                0,
                0,
                0,
                0,
                0,
                t,
                0,
                0,
                0,
                0,
                0,
                0,
                t
            ], i = new Pi;
            i.setAttribute("position", new wi(e, 3)), i.setAttribute("color", new wi([
                1,
                0,
                0,
                1,
                .6,
                0,
                0,
                1,
                0,
                .6,
                1,
                0,
                0,
                0,
                1,
                0,
                .6,
                1
            ], 3));
            super(i, new Ua({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "AxesHelper";
        }
        setColors(t, e, i) {
            const n = new Ht, r = this.geometry.attributes.color.array;
            return n.set(t), n.toArray(r, 0), n.toArray(r, 3), n.set(e), n.toArray(r, 6), n.toArray(r, 9), n.set(i), n.toArray(r, 12), n.toArray(r, 15), this.geometry.attributes.color.needsUpdate = !0, this;
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t8.BackSide = 1, t8.BasicDepthPacking = 3200, t8.BasicShadowMap = 0, t8.Bone = Ca, t8.BooleanKeyframeTrack = jl, t8.Box2 = class {
        constructor(t = new Et(1 / 0, 1 / 0), e = new Et(-1 / 0, -1 / 0)){
            this.isBox2 = !0, this.min = t, this.max = e;
        }
        set(t, e) {
            return this.min.copy(t), this.max.copy(e), this;
        }
        setFromPoints(t) {
            this.makeEmpty();
            for(let e = 0, i = t.length; e < i; e++)this.expandByPoint(t[e]);
            return this;
        }
        setFromCenterAndSize(t, e) {
            const i = dh.copy(e).multiplyScalar(.5);
            return this.min.copy(t).sub(i), this.max.copy(t).add(i), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this;
        }
        makeEmpty() {
            return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y;
        }
        getCenter(t) {
            return this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
        }
        getSize(t) {
            return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min);
        }
        expandByPoint(t) {
            return this.min.min(t), this.max.max(t), this;
        }
        expandByVector(t) {
            return this.min.sub(t), this.max.add(t), this;
        }
        expandByScalar(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this;
        }
        containsPoint(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y);
        }
        containsBox(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y;
        }
        getParameter(t, e) {
            return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y));
        }
        intersectsBox(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y);
        }
        clampPoint(t, e) {
            return e.copy(t).clamp(this.min, this.max);
        }
        distanceToPoint(t) {
            return dh.copy(t).clamp(this.min, this.max).sub(t).length();
        }
        intersect(t) {
            return this.min.max(t.min), this.max.min(t.max), this;
        }
        union(t) {
            return this.min.min(t.min), this.max.max(t.max), this;
        }
        translate(t) {
            return this.min.add(t), this.max.add(t), this;
        }
        equals(t) {
            return t.min.equals(this.min) && t.max.equals(this.max);
        }
    }, t8.Box3 = re, t8.Box3Helper = class extends Ja {
        constructor(t, e = 16776960){
            const i = new Uint16Array([
                0,
                1,
                1,
                2,
                2,
                3,
                3,
                0,
                4,
                5,
                5,
                6,
                6,
                7,
                7,
                4,
                0,
                4,
                1,
                5,
                2,
                6,
                3,
                7
            ]), n = new Pi;
            n.setIndex(new _i(i, 1)), n.setAttribute("position", new wi([
                1,
                1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                -1,
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                -1,
                -1,
                -1,
                1,
                -1,
                -1
            ], 3)), super(n, new Ua({
                color: e,
                toneMapped: !1
            })), this.box = t, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
        }
        updateMatrixWorld(t) {
            const e = this.box;
            e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), super.updateMatrixWorld(t));
        }
    }, t8.BoxBufferGeometry = Ki, t8.BoxGeometry = Ki, t8.BoxHelper = class extends Ja {
        constructor(t, e = 16776960){
            const i = new Uint16Array([
                0,
                1,
                1,
                2,
                2,
                3,
                3,
                0,
                4,
                5,
                5,
                6,
                6,
                7,
                7,
                4,
                0,
                4,
                1,
                5,
                2,
                6,
                3,
                7
            ]), n = new Float32Array(24), r = new Pi;
            r.setIndex(new _i(i, 1)), r.setAttribute("position", new _i(n, 3)), super(r, new Ua({
                color: e,
                toneMapped: !1
            })), this.object = t, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
        }
        update(t) {
            if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && Lh.setFromObject(this.object), Lh.isEmpty()) return;
            const e = Lh.min, i = Lh.max, n = this.geometry.attributes.position, r = n.array;
            r[0] = i.x, r[1] = i.y, r[2] = i.z, r[3] = e.x, r[4] = i.y, r[5] = i.z, r[6] = e.x, r[7] = e.y, r[8] = i.z, r[9] = i.x, r[10] = e.y, r[11] = i.z, r[12] = i.x, r[13] = i.y, r[14] = e.z, r[15] = e.x, r[16] = i.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = i.x, r[22] = e.y, r[23] = e.z, n.needsUpdate = !0, this.geometry.computeBoundingSphere();
        }
        setFromObject(t) {
            return this.object = t, this.update(), this;
        }
        copy(t, e) {
            return super.copy(t, e), this.object = t.object, this;
        }
    }, t8.BufferAttribute = _i, t8.BufferGeometry = Pi, t8.BufferGeometryLoader = Lc, t8.ByteType = 1010, t8.Cache = tc, t8.Camera = nn, t8.CameraHelper = class extends Ja {
        constructor(t238){
            const e164 = new Pi, i89 = new Ua({
                color: 16777215,
                vertexColors: !0,
                toneMapped: !1
            }), n = [], r = [], s = {}, a = new Ht(16755200), o = new Ht(16711680), l = new Ht(43775), c = new Ht(16777215), h = new Ht(3355443);
            function u(t, e, i) {
                d(t, i), d(e, i);
            }
            function d(t, e) {
                n.push(0, 0, 0), r.push(e.r, e.g, e.b), void 0 === s[t] && (s[t] = []), s[t].push(n.length / 3 - 1);
            }
            u("n1", "n2", a), u("n2", "n4", a), u("n4", "n3", a), u("n3", "n1", a), u("f1", "f2", a), u("f2", "f4", a), u("f4", "f3", a), u("f3", "f1", a), u("n1", "f1", a), u("n2", "f2", a), u("n3", "f3", a), u("n4", "f4", a), u("p", "n1", o), u("p", "n2", o), u("p", "n3", o), u("p", "n4", o), u("u1", "u2", l), u("u2", "u3", l), u("u3", "u1", l), u("c", "t", c), u("p", "c", h), u("cn1", "cn2", h), u("cn3", "cn4", h), u("cf1", "cf2", h), u("cf3", "cf4", h), e164.setAttribute("position", new wi(n, 3)), e164.setAttribute("color", new wi(r, 3)), super(e164, i89), this.type = "CameraHelper", this.camera = t238, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t238.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update();
        }
        update() {
            const t = this.geometry, e = this.pointMap;
            Eh.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), Ch("c", e, t, Eh, 0, 0, -1), Ch("t", e, t, Eh, 0, 0, 1), Ch("n1", e, t, Eh, -1, -1, -1), Ch("n2", e, t, Eh, 1, -1, -1), Ch("n3", e, t, Eh, -1, 1, -1), Ch("n4", e, t, Eh, 1, 1, -1), Ch("f1", e, t, Eh, -1, -1, 1), Ch("f2", e, t, Eh, 1, -1, 1), Ch("f3", e, t, Eh, -1, 1, 1), Ch("f4", e, t, Eh, 1, 1, 1), Ch("u1", e, t, Eh, .7, 1.1, -1), Ch("u2", e, t, Eh, -0.7, 1.1, -1), Ch("u3", e, t, Eh, 0, 2, -1), Ch("cf1", e, t, Eh, -1, 0, 1), Ch("cf2", e, t, Eh, 1, 0, 1), Ch("cf3", e, t, Eh, 0, -1, 1), Ch("cf4", e, t, Eh, 0, 1, 1), Ch("cn1", e, t, Eh, -1, 0, -1), Ch("cn2", e, t, Eh, 1, 0, -1), Ch("cn3", e, t, Eh, 0, -1, -1), Ch("cn4", e, t, Eh, 0, 1, -1), t.getAttribute("position").needsUpdate = !0;
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t8.CanvasTexture = class extends Yt {
        constructor(t, e, i, n, r, s, a, o, l){
            super(t, e, i, n, r, s, a, o, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
        }
    }, t8.CapsuleBufferGeometry = Co, t8.CapsuleGeometry = Co, t8.CatmullRomCurve3 = po, t8.CineonToneMapping = 3, t8.CircleBufferGeometry = Lo, t8.CircleGeometry = Lo, t8.ClampToEdgeWrapping = h1, t8.Clock = Bc, t8.Color = Ht, t8.ColorKeyframeTrack = ql, t8.ColorManagement = Ot1, t8.CompressedTexture = no, t8.CompressedTextureLoader = class extends nc {
        constructor(t){
            super(t);
        }
        load(t239, e166, i91, n) {
            const r = this, s = [], a = new no, o = new sc(this.manager);
            o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(r.withCredentials);
            let l = 0;
            function c15(c) {
                o.load(t239[c], function(t) {
                    const i = r.parse(t, !0);
                    s[c] = {
                        width: i.width,
                        height: i.height,
                        format: i.format,
                        mipmaps: i.mipmaps
                    }, l += 1, 6 === l && (1 === i.mipmapCount && (a.minFilter = f1), a.image = s, a.format = i.format, a.needsUpdate = !0, e166 && e166(a));
                }, i91, n);
            }
            if (Array.isArray(t239)) for(let e165 = 0, i90 = t239.length; e165 < i90; ++e165)c15(e165);
            else o.load(t239, function(t) {
                const i = r.parse(t, !0);
                if (i.isCubemap) {
                    const t = i.mipmaps.length / i.mipmapCount;
                    for(let e = 0; e < t; e++){
                        s[e] = {
                            mipmaps: []
                        };
                        for(let t = 0; t < i.mipmapCount; t++)s[e].mipmaps.push(i.mipmaps[e * i.mipmapCount + t]), s[e].format = i.format, s[e].width = i.width, s[e].height = i.height;
                    }
                    a.image = s;
                } else a.image.width = i.width, a.image.height = i.height, a.mipmaps = i.mipmaps;
                1 === i.mipmapCount && (a.minFilter = f1), a.format = i.format, a.needsUpdate = !0, e166 && e166(a);
            }, i91, n);
            return a;
        }
    }, t8.ConeBufferGeometry = Po, t8.ConeGeometry = Po, t8.CubeCamera = an, t8.CubeReflectionMapping = r1, t8.CubeRefractionMapping = s1, t8.CubeTexture = on, t8.CubeTextureLoader = class extends nc {
        constructor(t){
            super(t);
        }
        load(t240, e, i92, n) {
            const r = new on, s = new ac(this.manager);
            s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
            let a = 0;
            function o(i) {
                s.load(t240[i], function(t) {
                    r.images[i] = t, a++, 6 === a && (r.needsUpdate = !0, e && e(r));
                }, void 0, n);
            }
            for(let e167 = 0; e167 < t240.length; ++e167)o(e167);
            return r;
        }
    }, t8.CubeUVReflectionMapping = l1, t8.CubicBezierCurve = vo, t8.CubicBezierCurve3 = xo, t8.CubicInterpolant = Gl, t8.CullFaceBack = 1, t8.CullFaceFront = 2, t8.CullFaceFrontBack = 3, t8.CullFaceNone = 0, t8.Curve = ro, t8.CurvePath = To, t8.CustomBlending = 5, t8.CustomToneMapping = 5, t8.CylinderBufferGeometry = Ro, t8.CylinderGeometry = Ro, t8.Cylindrical = class {
        constructor(t = 1, e = 0, i = 0){
            return this.radius = t, this.theta = e, this.y = i, this;
        }
        set(t, e, i) {
            return this.radius = t, this.theta = e, this.y = i, this;
        }
        copy(t) {
            return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this;
        }
        setFromVector3(t) {
            return this.setFromCartesianCoords(t.x, t.y, t.z);
        }
        setFromCartesianCoords(t, e, i) {
            return this.radius = Math.sqrt(t * t + i * i), this.theta = Math.atan2(t, i), this.y = e, this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }, t8.Data3DTexture = $t, t8.DataArrayTexture = Qt, t8.DataTexture = La, t8.DataTexture2DArray = class extends Qt {
        constructor(t, e, i, n){
            console.warn("THREE.DataTexture2DArray has been renamed to DataArrayTexture."), super(t, e, i, n);
        }
    }, t8.DataTexture3D = class extends $t {
        constructor(t, e, i, n){
            console.warn("THREE.DataTexture3D has been renamed to Data3DTexture."), super(t, e, i, n);
        }
    }, t8.DataTextureLoader = class extends nc {
        constructor(t){
            super(t);
        }
        load(t241, e, i93, n) {
            const r = this, s = new La, a = new sc(this.manager);
            return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(r.withCredentials), a.load(t241, function(t) {
                const i = r.parse(t);
                i && (void 0 !== i.image ? s.image = i.image : void 0 !== i.data && (s.image.width = i.width, s.image.height = i.height, s.image.data = i.data), s.wrapS = void 0 !== i.wrapS ? i.wrapS : h1, s.wrapT = void 0 !== i.wrapT ? i.wrapT : h1, s.magFilter = void 0 !== i.magFilter ? i.magFilter : f1, s.minFilter = void 0 !== i.minFilter ? i.minFilter : f1, s.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.encoding && (s.encoding = i.encoding), void 0 !== i.flipY && (s.flipY = i.flipY), void 0 !== i.format && (s.format = i.format), void 0 !== i.type && (s.type = i.type), void 0 !== i.mipmaps && (s.mipmaps = i.mipmaps, s.minFilter = v1), 1 === i.mipmapCount && (s.minFilter = f1), void 0 !== i.generateMipmaps && (s.generateMipmaps = i.generateMipmaps), s.needsUpdate = !0, e && e(s, i));
            }, i93, n), s;
        }
    }, t8.DataUtils = class {
        static toHalfFloat(t) {
            Math.abs(t) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), t = _t1(t, -65504, 65504), Nh[0] = t;
            const e = zh[0], i = e >> 23 & 511;
            return Oh[i] + ((8388607 & e) >> Fh[i]);
        }
        static fromHalfFloat(t) {
            const e = t >> 10;
            return zh[0] = Bh[kh[e] + (1023 & t)] + Uh[e], Nh[0];
        }
    }, t8.DecrementStencilOp = 7683, t8.DecrementWrapStencilOp = 34056, t8.DefaultLoadingManager = ic, t8.DepthFormat = T1, t8.DepthStencilFormat = A1, t8.DepthTexture = qs, t8.DirectionalLight = Mc, t8.DirectionalLightHelper = class extends ni {
        constructor(t, e, i){
            super(), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, void 0 === e && (e = 1);
            let n = new Pi;
            n.setAttribute("position", new wi([
                -e,
                e,
                0,
                e,
                e,
                0,
                e,
                -e,
                0,
                -e,
                -e,
                0,
                -e,
                e,
                0
            ], 3));
            const r = new Ua({
                fog: !1,
                toneMapped: !1
            });
            this.lightPlane = new ja(n, r), this.add(this.lightPlane), n = new Pi, n.setAttribute("position", new wi([
                0,
                0,
                0,
                0,
                0,
                1
            ], 3)), this.targetLine = new ja(n, r), this.add(this.targetLine), this.update();
        }
        dispose() {
            this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
        }
        update() {
            wh.setFromMatrixPosition(this.light.matrixWorld), Sh.setFromMatrixPosition(this.light.target.matrixWorld), Th.subVectors(Sh, wh), this.lightPlane.lookAt(Sh), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Sh), this.targetLine.scale.z = Th.length();
        }
    }, t8.DiscreteInterpolant = Hl, t8.DodecahedronBufferGeometry = Do, t8.DodecahedronGeometry = Do, t8.DoubleSide = 2, t8.DstAlphaFactor = 206, t8.DstColorFactor = 208, t8.DynamicCopyUsage = 35050, t8.DynamicDrawUsage = 35048, t8.DynamicReadUsage = 35049, t8.EdgesGeometry = Bo, t8.EllipseCurve = so, t8.EqualDepth = 4, t8.EqualStencilFunc = 514, t8.EquirectangularReflectionMapping = a1, t8.EquirectangularRefractionMapping = o1, t8.Euler = Ve, t8.EventDispatcher = mt1, t8.ExtrudeBufferGeometry = ml, t8.ExtrudeGeometry = ml, t8.FileLoader = sc, t8.FlatShading = 1, t8.Float16BufferAttribute = class extends _i {
        constructor(t, e, i){
            super(new Uint16Array(t), e, i), this.isFloat16BufferAttribute = !0;
        }
    }, t8.Float32BufferAttribute = wi, t8.Float64BufferAttribute = class extends _i {
        constructor(t, e, i){
            super(new Float64Array(t), e, i);
        }
    }, t8.FloatType = M1, t8.Fog = Qs, t8.FogExp2 = Ks, t8.Font = function() {
        console.error("THREE.Font has been moved to /examples/jsm/loaders/FontLoader.js");
    }, t8.FontLoader = function() {
        console.error("THREE.FontLoader has been moved to /examples/jsm/loaders/FontLoader.js");
    }, t8.FramebufferTexture = class extends Yt {
        constructor(t, e, i){
            super({
                width: t,
                height: e
            }), this.isFramebufferTexture = !0, this.format = i, this.magFilter = d1, this.minFilter = d1, this.generateMipmaps = !1, this.needsUpdate = !0;
        }
    }, t8.FrontSide = 0, t8.Frustum = fn, t8.GLBufferAttribute = class {
        constructor(t, e, i, n, r){
            this.isGLBufferAttribute = !0, this.buffer = t, this.type = e, this.itemSize = i, this.elementSize = n, this.count = r, this.version = 0;
        }
        set needsUpdate(t) {
            !0 === t && this.version++;
        }
        setBuffer(t) {
            return this.buffer = t, this;
        }
        setType(t, e) {
            return this.type = t, this.elementSize = e, this;
        }
        setItemSize(t) {
            return this.itemSize = t, this;
        }
        setCount(t) {
            return this.count = t, this;
        }
    }, t8.GLSL1 = "100", t8.GLSL3 = dt1, t8.GreaterDepth = 6, t8.GreaterEqualDepth = 5, t8.GreaterEqualStencilFunc = 518, t8.GreaterStencilFunc = 516, t8.GridHelper = class extends Ja {
        constructor(t = 10, e = 10, i = 4473924, n = 8947848){
            i = new Ht(i), n = new Ht(n);
            const r = e / 2, s = t / e, a = t / 2, o = [], l = [];
            for(let t242 = 0, c = 0, h = -a; t242 <= e; t242++, h += s){
                o.push(-a, 0, h, a, 0, h), o.push(h, 0, -a, h, 0, a);
                const e = t242 === r ? i : n;
                e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3;
            }
            const c16 = new Pi;
            c16.setAttribute("position", new wi(o, 3)), c16.setAttribute("color", new wi(l, 3));
            super(c16, new Ua({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "GridHelper";
        }
    }, t8.Group = Hs, t8.HalfFloatType = b1, t8.HemisphereLight = lc, t8.HemisphereLightHelper = class extends ni {
        constructor(t, e, i){
            super(), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i;
            const n = new vl(e);
            n.rotateY(.5 * Math.PI), this.material = new vi({
                wireframe: !0,
                fog: !1,
                toneMapped: !1
            }), void 0 === this.color && (this.material.vertexColors = !0);
            const r = n.getAttribute("position"), s = new Float32Array(3 * r.count);
            n.setAttribute("color", new _i(s, 3)), this.add(new Yi(n, this.material)), this.update();
        }
        dispose() {
            this.children[0].geometry.dispose(), this.children[0].material.dispose();
        }
        update() {
            const t = this.children[0];
            if (void 0 !== this.color) this.material.color.set(this.color);
            else {
                const e = t.geometry.getAttribute("color");
                Mh.copy(this.light.color), bh.copy(this.light.groundColor);
                for(let t243 = 0, i = e.count; t243 < i; t243++){
                    const n = t243 < i / 2 ? Mh : bh;
                    e.setXYZ(t243, n.r, n.g, n.b);
                }
                e.needsUpdate = !0;
            }
            t.lookAt(_h.setFromMatrixPosition(this.light.matrixWorld).negate());
        }
    }, t8.HemisphereLightProbe = class extends Tc {
        constructor(t, e, i = 1){
            super(void 0, i), this.isHemisphereLightProbe = !0;
            const n = (new Ht).set(t), r = (new Ht).set(e), s = new ee(n.r, n.g, n.b), a = new ee(r.r, r.g, r.b), o = Math.sqrt(Math.PI), l = o * Math.sqrt(.75);
            this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o), this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l);
        }
    }, t8.IcosahedronBufferGeometry = gl, t8.IcosahedronGeometry = gl, t8.ImageBitmapLoader = class extends nc {
        constructor(t){
            super(t), this.isImageBitmapLoader = !0, "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
                premultiplyAlpha: "none"
            };
        }
        setOptions(t) {
            return this.options = t, this;
        }
        load(t244, e168, i94, n) {
            void 0 === t244 && (t244 = ""), void 0 !== this.path && (t244 = this.path + t244), t244 = this.manager.resolveURL(t244);
            const r = this, s = tc.get(t244);
            if (void 0 !== s) return r.manager.itemStart(t244), setTimeout(function() {
                e168 && e168(s), r.manager.itemEnd(t244);
            }, 0), s;
            const a = {};
            a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", a.headers = this.requestHeader, fetch(t244, a).then(function(t) {
                return t.blob();
            }).then(function(t) {
                return createImageBitmap(t, Object.assign(r.options, {
                    colorSpaceConversion: "none"
                }));
            }).then(function(i) {
                tc.add(t244, i), e168 && e168(i), r.manager.itemEnd(t244);
            }).catch(function(e) {
                n && n(e), r.manager.itemError(t244), r.manager.itemEnd(t244);
            }), r.manager.itemStart(t244);
        }
    }, t8.ImageLoader = ac, t8.ImageUtils = jt, t8.ImmediateRenderObject = function() {
        console.error("THREE.ImmediateRenderObject has been removed.");
    }, t8.IncrementStencilOp = 7682, t8.IncrementWrapStencilOp = 34055, t8.InstancedBufferAttribute = Da, t8.InstancedBufferGeometry = Cc, t8.InstancedInterleavedBuffer = class extends ta {
        constructor(t, e, i = 1){
            super(t, e), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = i;
        }
        copy(t) {
            return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
        }
        clone(t) {
            const e = super.clone(t);
            return e.meshPerAttribute = this.meshPerAttribute, e;
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e;
        }
    }, t8.InstancedMesh = Ba, t8.Int16BufferAttribute = class extends _i {
        constructor(t, e, i){
            super(new Int16Array(t), e, i);
        }
    }, t8.Int32BufferAttribute = class extends _i {
        constructor(t, e, i){
            super(new Int32Array(t), e, i);
        }
    }, t8.Int8BufferAttribute = class extends _i {
        constructor(t, e, i){
            super(new Int8Array(t), e, i);
        }
    }, t8.IntType = 1013, t8.InterleavedBuffer = ta, t8.InterleavedBufferAttribute = ia, t8.Interpolant = kl, t8.InterpolateDiscrete = Q1, t8.InterpolateLinear = $1, t8.InterpolateSmooth = tt1, t8.InvertStencilOp = 5386, t8.KeepStencilOp = ht1, t8.KeyframeTrack = Wl, t8.LOD = Ma, t8.LatheBufferGeometry = Eo, t8.LatheGeometry = Eo, t8.Layers = He, t8.LessDepth = 2, t8.LessEqualDepth = 3, t8.LessEqualStencilFunc = 515, t8.LessStencilFunc = 513, t8.Light = oc, t8.LightProbe = Tc, t8.Line = ja, t8.Line3 = class {
        constructor(t = new ee, e = new ee){
            this.start = t, this.end = e;
        }
        set(t, e) {
            return this.start.copy(t), this.end.copy(e), this;
        }
        copy(t) {
            return this.start.copy(t.start), this.end.copy(t.end), this;
        }
        getCenter(t) {
            return t.addVectors(this.start, this.end).multiplyScalar(.5);
        }
        delta(t) {
            return t.subVectors(this.end, this.start);
        }
        distanceSq() {
            return this.start.distanceToSquared(this.end);
        }
        distance() {
            return this.start.distanceTo(this.end);
        }
        at(t, e) {
            return this.delta(e).multiplyScalar(t).add(this.start);
        }
        closestPointToPointParameter(t, e) {
            ph.subVectors(t, this.start), mh.subVectors(this.end, this.start);
            const i = mh.dot(mh);
            let n = mh.dot(ph) / i;
            return e && (n = _t1(n, 0, 1)), n;
        }
        closestPointToPoint(t, e, i) {
            const n = this.closestPointToPointParameter(t, e);
            return this.delta(i).multiplyScalar(n).add(this.start);
        }
        applyMatrix4(t) {
            return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
        }
        equals(t) {
            return t.start.equals(this.start) && t.end.equals(this.end);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }, t8.LineBasicMaterial = Ua, t8.LineCurve = yo, t8.LineCurve3 = _o, t8.LineDashedMaterial = Fl, t8.LineLoop = Ya, t8.LineSegments = Ja, t8.LinearEncoding = at, t8.LinearFilter = f1, t8.LinearInterpolant = Vl, t8.LinearMipMapLinearFilter = 1008, t8.LinearMipMapNearestFilter = 1007, t8.LinearMipmapLinearFilter = v1, t8.LinearMipmapNearestFilter = g1, t8.LinearSRGBColorSpace = ct1, t8.LinearToneMapping = 1, t8.Loader = nc, t8.LoaderUtils = Ec, t8.LoadingManager = ec, t8.LoopOnce = 2200, t8.LoopPingPong = 2202, t8.LoopRepeat = 2201, t8.LuminanceAlphaFormat = 1025, t8.LuminanceFormat = 1024, t8.MOUSE = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2
    }, t8.Material = gi, t8.MaterialLoader = Ac, t8.MathUtils = At1, t8.Matrix3 = Ct1, t8.Matrix4 = Ie, t8.MaxEquation = 104, t8.Mesh = Yi, t8.MeshBasicMaterial = vi, t8.MeshDepthMaterial = Os, t8.MeshDistanceMaterial = Fs, t8.MeshLambertMaterial = zl, t8.MeshMatcapMaterial = Ol, t8.MeshNormalMaterial = Nl, t8.MeshPhongMaterial = Il, t8.MeshPhysicalMaterial = Pl, t8.MeshStandardMaterial = Rl, t8.MeshToonMaterial = Dl, t8.MinEquation = 103, t8.MirroredRepeatWrapping = u1, t8.MixOperation = 1, t8.MultiplyBlending = 4, t8.MultiplyOperation = 0, t8.NearestFilter = d1, t8.NearestMipMapLinearFilter = 1005, t8.NearestMipMapNearestFilter = 1004, t8.NearestMipmapLinearFilter = m1, t8.NearestMipmapNearestFilter = p1, t8.NeverDepth = 0, t8.NeverStencilFunc = 512, t8.NoBlending = 0, t8.NoColorSpace = "", t8.NoToneMapping = 0, t8.NormalAnimationBlendMode = rt1, t8.NormalBlending = 1, t8.NotEqualDepth = 7, t8.NotEqualStencilFunc = 517, t8.NumberKeyframeTrack = Xl, t8.Object3D = ni, t8.ObjectLoader = class extends nc {
        constructor(t){
            super(t);
        }
        load(t, e169, i95, n) {
            const r = this, s40 = "" === this.path ? Ec.extractUrlBase(t) : this.path;
            this.resourcePath = this.resourcePath || s40;
            const a36 = new sc(this.manager);
            a36.setPath(this.path), a36.setRequestHeader(this.requestHeader), a36.setWithCredentials(this.withCredentials), a36.load(t, function(i) {
                let s = null;
                try {
                    s = JSON.parse(i);
                } catch (e) {
                    return void 0 !== n && n(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message);
                }
                const a = s.metadata;
                void 0 !== a && void 0 !== a.type && "geometry" !== a.type.toLowerCase() ? r.parse(s, e169) : console.error("THREE.ObjectLoader: Can't load " + t);
            }, i95, n);
        }
        async loadAsync(t, e) {
            const i = "" === this.path ? Ec.extractUrlBase(t) : this.path;
            this.resourcePath = this.resourcePath || i;
            const n = new sc(this.manager);
            n.setPath(this.path), n.setRequestHeader(this.requestHeader), n.setWithCredentials(this.withCredentials);
            const r = await n.loadAsync(t, e), s = JSON.parse(r), a = s.metadata;
            if (void 0 === a || void 0 === a.type || "geometry" === a.type.toLowerCase()) throw new Error("THREE.ObjectLoader: Can't load " + t);
            return await this.parseAsync(s);
        }
        parse(t, e) {
            const i = this.parseAnimations(t.animations), n = this.parseShapes(t.shapes), r = this.parseGeometries(t.geometries, n), s = this.parseImages(t.images, function() {
                void 0 !== e && e(l);
            }), a = this.parseTextures(t.textures, s), o = this.parseMaterials(t.materials, a), l = this.parseObject(t.object, r, o, a, i), c = this.parseSkeletons(t.skeletons, l);
            if (this.bindSkeletons(l, c), void 0 !== e) {
                let t = !1;
                for(const e170 in s)if (s[e170].data instanceof HTMLImageElement) {
                    t = !0;
                    break;
                }
                !1 === t && e(l);
            }
            return l;
        }
        async parseAsync(t) {
            const e = this.parseAnimations(t.animations), i = this.parseShapes(t.shapes), n = this.parseGeometries(t.geometries, i), r = await this.parseImagesAsync(t.images), s = this.parseTextures(t.textures, r), a = this.parseMaterials(t.materials, s), o = this.parseObject(t.object, n, a, s, e), l = this.parseSkeletons(t.skeletons, o);
            return this.bindSkeletons(o, l), o;
        }
        parseShapes(t) {
            const e = {};
            if (void 0 !== t) for(let i = 0, n = t.length; i < n; i++){
                const n = (new Uo).fromJSON(t[i]);
                e[n.uuid] = n;
            }
            return e;
        }
        parseSkeletons(t245, e) {
            const i = {}, n = {};
            if (e.traverse(function(t) {
                t.isBone && (n[t.uuid] = t);
            }), void 0 !== t245) for(let e171 = 0, r = t245.length; e171 < r; e171++){
                const r = (new Ia).fromJSON(t245[e171], n);
                i[r.uuid] = r;
            }
            return i;
        }
        parseGeometries(t, e) {
            const i = {};
            if (void 0 !== t) {
                const n = new Lc;
                for(let r = 0, s = t.length; r < s; r++){
                    let s;
                    const a = t[r];
                    switch(a.type){
                        case "BufferGeometry":
                        case "InstancedBufferGeometry":
                            s = n.parse(a);
                            break;
                        case "Geometry":
                            console.error("THREE.ObjectLoader: The legacy Geometry type is no longer supported.");
                            break;
                        default:
                            a.type in El ? s = El[a.type].fromJSON(a, e) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${a.type}"`);
                    }
                    s.uuid = a.uuid, void 0 !== a.name && (s.name = a.name), !0 === s.isBufferGeometry && void 0 !== a.userData && (s.userData = a.userData), i[a.uuid] = s;
                }
            }
            return i;
        }
        parseMaterials(t, e) {
            const i = {}, n = {};
            if (void 0 !== t) {
                const r = new Ac;
                r.setTextures(e);
                for(let e172 = 0, s = t.length; e172 < s; e172++){
                    const s = t[e172];
                    if ("MultiMaterial" === s.type) {
                        const t = [];
                        for(let e = 0; e < s.materials.length; e++){
                            const n = s.materials[e];
                            void 0 === i[n.uuid] && (i[n.uuid] = r.parse(n)), t.push(i[n.uuid]);
                        }
                        n[s.uuid] = t;
                    } else void 0 === i[s.uuid] && (i[s.uuid] = r.parse(s)), n[s.uuid] = i[s.uuid];
                }
            }
            return n;
        }
        parseAnimations(t) {
            const e = {};
            if (void 0 !== t) for(let i = 0; i < t.length; i++){
                const n = t[i], r = Ql.parse(n);
                e[r.uuid] = r;
            }
            return e;
        }
        parseImages(t246, e173) {
            const i = this, n = {};
            let r;
            function s(t247) {
                if ("string" == typeof t247) {
                    const e = t247;
                    return function(t) {
                        return i.manager.itemStart(t), r.load(t, function() {
                            i.manager.itemEnd(t);
                        }, void 0, function() {
                            i.manager.itemError(t), i.manager.itemEnd(t);
                        });
                    }(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e) ? e : i.resourcePath + e);
                }
                return t247.data ? {
                    data: Pt1(t247.type, t247.data),
                    width: t247.width,
                    height: t247.height
                } : null;
            }
            if (void 0 !== t246 && t246.length > 0) {
                const i = new ec(e173);
                r = new ac(i), r.setCrossOrigin(this.crossOrigin);
                for(let e = 0, i96 = t246.length; e < i96; e++){
                    const i = t246[e], r = i.url;
                    if (Array.isArray(r)) {
                        const t = [];
                        for(let e = 0, i97 = r.length; e < i97; e++){
                            const i = s(r[e]);
                            null !== i && (i instanceof HTMLImageElement ? t.push(i) : t.push(new La(i.data, i.width, i.height)));
                        }
                        n[i.uuid] = new qt(t);
                    } else {
                        const t = s(i.url);
                        n[i.uuid] = new qt(t);
                    }
                }
            }
            return n;
        }
        async parseImagesAsync(t248) {
            const e = this, i98 = {};
            let n;
            async function r56(t) {
                if ("string" == typeof t) {
                    const i = t, r = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(i) ? i : e.resourcePath + i;
                    return await n.loadAsync(r);
                }
                return t.data ? {
                    data: Pt1(t.type, t.data),
                    width: t.width,
                    height: t.height
                } : null;
            }
            if (void 0 !== t248 && t248.length > 0) {
                n = new ac(this.manager), n.setCrossOrigin(this.crossOrigin);
                for(let e = 0, n76 = t248.length; e < n76; e++){
                    const n = t248[e], s = n.url;
                    if (Array.isArray(s)) {
                        const t = [];
                        for(let e = 0, i = s.length; e < i; e++){
                            const i = s[e], n = await r56(i);
                            null !== n && (n instanceof HTMLImageElement ? t.push(n) : t.push(new La(n.data, n.width, n.height)));
                        }
                        i98[n.uuid] = new qt(t);
                    } else {
                        const t = await r56(n.url);
                        i98[n.uuid] = new qt(t);
                    }
                }
            }
            return i98;
        }
        parseTextures(t249, e174) {
            function i(t, e) {
                return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t]);
            }
            const n = {};
            if (void 0 !== t249) for(let r = 0, s = t249.length; r < s; r++){
                const s = t249[r];
                void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e174[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                const a = e174[s.image], o = a.data;
                let l;
                Array.isArray(o) ? (l = new on, 6 === o.length && (l.needsUpdate = !0)) : (l = o && o.data ? new La : new Yt, o && (l.needsUpdate = !0)), l.source = a, l.uuid = s.uuid, void 0 !== s.name && (l.name = s.name), void 0 !== s.mapping && (l.mapping = i(s.mapping, Rc)), void 0 !== s.offset && l.offset.fromArray(s.offset), void 0 !== s.repeat && l.repeat.fromArray(s.repeat), void 0 !== s.center && l.center.fromArray(s.center), void 0 !== s.rotation && (l.rotation = s.rotation), void 0 !== s.wrap && (l.wrapS = i(s.wrap[0], Pc), l.wrapT = i(s.wrap[1], Pc)), void 0 !== s.format && (l.format = s.format), void 0 !== s.type && (l.type = s.type), void 0 !== s.encoding && (l.encoding = s.encoding), void 0 !== s.minFilter && (l.minFilter = i(s.minFilter, Ic)), void 0 !== s.magFilter && (l.magFilter = i(s.magFilter, Ic)), void 0 !== s.anisotropy && (l.anisotropy = s.anisotropy), void 0 !== s.flipY && (l.flipY = s.flipY), void 0 !== s.premultiplyAlpha && (l.premultiplyAlpha = s.premultiplyAlpha), void 0 !== s.unpackAlignment && (l.unpackAlignment = s.unpackAlignment), void 0 !== s.userData && (l.userData = s.userData), n[s.uuid] = l;
            }
            return n;
        }
        parseObject(t250, e176, i, n78, r57) {
            let s, a, o;
            function l(t) {
                return void 0 === e176[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), e176[t];
            }
            function c(t) {
                if (void 0 !== t) {
                    if (Array.isArray(t)) {
                        const e = [];
                        for(let n = 0, r = t.length; n < r; n++){
                            const r = t[n];
                            void 0 === i[r] && console.warn("THREE.ObjectLoader: Undefined material", r), e.push(i[r]);
                        }
                        return e;
                    }
                    return void 0 === i[t] && console.warn("THREE.ObjectLoader: Undefined material", t), i[t];
                }
            }
            function h(t) {
                return void 0 === n78[t] && console.warn("THREE.ObjectLoader: Undefined texture", t), n78[t];
            }
            switch(t250.type){
                case "Scene":
                    s = new $s, void 0 !== t250.background && (Number.isInteger(t250.background) ? s.background = new Ht(t250.background) : s.background = h(t250.background)), void 0 !== t250.environment && (s.environment = h(t250.environment)), void 0 !== t250.fog && ("Fog" === t250.fog.type ? s.fog = new Qs(t250.fog.color, t250.fog.near, t250.fog.far) : "FogExp2" === t250.fog.type && (s.fog = new Ks(t250.fog.color, t250.fog.density)));
                    break;
                case "PerspectiveCamera":
                    s = new rn(t250.fov, t250.aspect, t250.near, t250.far), void 0 !== t250.focus && (s.focus = t250.focus), void 0 !== t250.zoom && (s.zoom = t250.zoom), void 0 !== t250.filmGauge && (s.filmGauge = t250.filmGauge), void 0 !== t250.filmOffset && (s.filmOffset = t250.filmOffset), void 0 !== t250.view && (s.view = Object.assign({}, t250.view));
                    break;
                case "OrthographicCamera":
                    s = new Cn(t250.left, t250.right, t250.top, t250.bottom, t250.near, t250.far), void 0 !== t250.zoom && (s.zoom = t250.zoom), void 0 !== t250.view && (s.view = Object.assign({}, t250.view));
                    break;
                case "AmbientLight":
                    s = new bc(t250.color, t250.intensity);
                    break;
                case "DirectionalLight":
                    s = new Mc(t250.color, t250.intensity);
                    break;
                case "PointLight":
                    s = new yc(t250.color, t250.intensity, t250.distance, t250.decay);
                    break;
                case "RectAreaLight":
                    s = new wc(t250.color, t250.intensity, t250.width, t250.height);
                    break;
                case "SpotLight":
                    s = new mc(t250.color, t250.intensity, t250.distance, t250.angle, t250.penumbra, t250.decay);
                    break;
                case "HemisphereLight":
                    s = new lc(t250.color, t250.groundColor, t250.intensity);
                    break;
                case "LightProbe":
                    s = (new Tc).fromJSON(t250);
                    break;
                case "SkinnedMesh":
                    a = l(t250.geometry), o = c(t250.material), s = new Ea(a, o), void 0 !== t250.bindMode && (s.bindMode = t250.bindMode), void 0 !== t250.bindMatrix && s.bindMatrix.fromArray(t250.bindMatrix), void 0 !== t250.skeleton && (s.skeleton = t250.skeleton);
                    break;
                case "Mesh":
                    a = l(t250.geometry), o = c(t250.material), s = new Yi(a, o);
                    break;
                case "InstancedMesh":
                    a = l(t250.geometry), o = c(t250.material);
                    const e175 = t250.count, i99 = t250.instanceMatrix, n77 = t250.instanceColor;
                    s = new Ba(a, o, e175), s.instanceMatrix = new Da(new Float32Array(i99.array), 16), void 0 !== n77 && (s.instanceColor = new Da(new Float32Array(n77.array), n77.itemSize));
                    break;
                case "LOD":
                    s = new Ma;
                    break;
                case "Line":
                    s = new ja(l(t250.geometry), c(t250.material));
                    break;
                case "LineLoop":
                    s = new Ya(l(t250.geometry), c(t250.material));
                    break;
                case "LineSegments":
                    s = new Ja(l(t250.geometry), c(t250.material));
                    break;
                case "PointCloud":
                case "Points":
                    s = new eo(l(t250.geometry), c(t250.material));
                    break;
                case "Sprite":
                    s = new va(c(t250.material));
                    break;
                case "Group":
                    s = new Hs;
                    break;
                case "Bone":
                    s = new Ca;
                    break;
                default:
                    s = new ni;
            }
            if (s.uuid = t250.uuid, void 0 !== t250.name && (s.name = t250.name), void 0 !== t250.matrix ? (s.matrix.fromArray(t250.matrix), void 0 !== t250.matrixAutoUpdate && (s.matrixAutoUpdate = t250.matrixAutoUpdate), s.matrixAutoUpdate && s.matrix.decompose(s.position, s.quaternion, s.scale)) : (void 0 !== t250.position && s.position.fromArray(t250.position), void 0 !== t250.rotation && s.rotation.fromArray(t250.rotation), void 0 !== t250.quaternion && s.quaternion.fromArray(t250.quaternion), void 0 !== t250.scale && s.scale.fromArray(t250.scale)), void 0 !== t250.castShadow && (s.castShadow = t250.castShadow), void 0 !== t250.receiveShadow && (s.receiveShadow = t250.receiveShadow), t250.shadow && (void 0 !== t250.shadow.bias && (s.shadow.bias = t250.shadow.bias), void 0 !== t250.shadow.normalBias && (s.shadow.normalBias = t250.shadow.normalBias), void 0 !== t250.shadow.radius && (s.shadow.radius = t250.shadow.radius), void 0 !== t250.shadow.mapSize && s.shadow.mapSize.fromArray(t250.shadow.mapSize), void 0 !== t250.shadow.camera && (s.shadow.camera = this.parseObject(t250.shadow.camera))), void 0 !== t250.visible && (s.visible = t250.visible), void 0 !== t250.frustumCulled && (s.frustumCulled = t250.frustumCulled), void 0 !== t250.renderOrder && (s.renderOrder = t250.renderOrder), void 0 !== t250.userData && (s.userData = t250.userData), void 0 !== t250.layers && (s.layers.mask = t250.layers), void 0 !== t250.children) {
                const a = t250.children;
                for(let t = 0; t < a.length; t++)s.add(this.parseObject(a[t], e176, i, n78, r57));
            }
            if (void 0 !== t250.animations) {
                const e = t250.animations;
                for(let t = 0; t < e.length; t++){
                    const i = e[t];
                    s.animations.push(r57[i]);
                }
            }
            if ("LOD" === t250.type) {
                void 0 !== t250.autoUpdate && (s.autoUpdate = t250.autoUpdate);
                const e = t250.levels;
                for(let t = 0; t < e.length; t++){
                    const i = e[t], n = s.getObjectByProperty("uuid", i.object);
                    void 0 !== n && s.addLevel(n, i.distance);
                }
            }
            return s;
        }
        bindSkeletons(t251, e) {
            0 !== Object.keys(e).length && t251.traverse(function(t) {
                if (!0 === t.isSkinnedMesh && void 0 !== t.skeleton) {
                    const i = e[t.skeleton];
                    void 0 === i ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", t.skeleton) : t.bind(i, t.bindMatrix);
                }
            });
        }
        setTexturePath(t) {
            return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(t);
        }
    }, t8.ObjectSpaceNormalMap = 1, t8.OctahedronBufferGeometry = vl, t8.OctahedronGeometry = vl, t8.OneFactor = 201, t8.OneMinusDstAlphaFactor = 207, t8.OneMinusDstColorFactor = 209, t8.OneMinusSrcAlphaFactor = 205, t8.OneMinusSrcColorFactor = 203, t8.OrthographicCamera = Cn, t8.PCFShadowMap = 1, t8.PCFSoftShadowMap = 2, t8.PMREMGenerator = Fn, t8.ParametricGeometry = class extends Pi {
        constructor(){
            console.error("THREE.ParametricGeometry has been moved to /examples/jsm/geometries/ParametricGeometry.js"), super();
        }
    }, t8.Path = Ao, t8.PerspectiveCamera = rn, t8.Plane = dn, t8.PlaneBufferGeometry = xn, t8.PlaneGeometry = xn, t8.PlaneHelper = class extends ja {
        constructor(t, e = 1, i = 16776960){
            const n = i, r = new Pi;
            r.setAttribute("position", new wi([
                1,
                -1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                -1,
                1,
                1,
                1,
                1,
                0,
                0,
                1,
                0,
                0,
                0
            ], 3)), r.computeBoundingSphere(), super(r, new Ua({
                color: n,
                toneMapped: !1
            })), this.type = "PlaneHelper", this.plane = t, this.size = e;
            const s = new Pi;
            s.setAttribute("position", new wi([
                1,
                1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                -1,
                1
            ], 3)), s.computeBoundingSphere(), this.add(new Yi(s, new vi({
                color: n,
                opacity: .2,
                transparent: !0,
                depthWrite: !1,
                toneMapped: !1
            })));
        }
        updateMatrixWorld(t) {
            let e = -this.plane.constant;
            Math.abs(e) < 1e-8 && (e = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, e), this.children[0].material.side = e < 0 ? 1 : 0, this.lookAt(this.plane.normal), super.updateMatrixWorld(t);
        }
    }, t8.PointLight = yc, t8.PointLightHelper = class extends Yi {
        constructor(t, e, i){
            super(new _l(e, 4, 2), new vi({
                wireframe: !0,
                fog: !1,
                toneMapped: !1
            })), this.light = t, this.light.updateMatrixWorld(), this.color = i, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
        update() {
            void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
        }
    }, t8.Points = eo, t8.PointsMaterial = Za, t8.PolarGridHelper = class extends Ja {
        constructor(t = 10, e = 16, i = 8, n = 64, r = 4473924, s = 8947848){
            r = new Ht(r), s = new Ht(s);
            const a = [], o = [];
            for(let i100 = 0; i100 <= e; i100++){
                const n = i100 / e * (2 * Math.PI), l = Math.sin(n) * t, c = Math.cos(n) * t;
                a.push(0, 0, 0), a.push(l, 0, c);
                const h = 1 & i100 ? r : s;
                o.push(h.r, h.g, h.b), o.push(h.r, h.g, h.b);
            }
            for(let e177 = 0; e177 <= i; e177++){
                const l = 1 & e177 ? r : s, c = t - t / i * e177;
                for(let t252 = 0; t252 < n; t252++){
                    let e = t252 / n * (2 * Math.PI), i = Math.sin(e) * c, r = Math.cos(e) * c;
                    a.push(i, 0, r), o.push(l.r, l.g, l.b), e = (t252 + 1) / n * (2 * Math.PI), i = Math.sin(e) * c, r = Math.cos(e) * c, a.push(i, 0, r), o.push(l.r, l.g, l.b);
                }
            }
            const l = new Pi;
            l.setAttribute("position", new wi(a, 3)), l.setAttribute("color", new wi(o, 3));
            super(l, new Ua({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "PolarGridHelper";
        }
    }, t8.PolyhedronBufferGeometry = Io, t8.PolyhedronGeometry = Io, t8.PositionalAudio = class extends Wc {
        constructor(t){
            super(t), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
        }
        disconnect() {
            super.disconnect(), this.panner.disconnect(this.gain);
        }
        getOutput() {
            return this.panner;
        }
        getRefDistance() {
            return this.panner.refDistance;
        }
        setRefDistance(t) {
            return this.panner.refDistance = t, this;
        }
        getRolloffFactor() {
            return this.panner.rolloffFactor;
        }
        setRolloffFactor(t) {
            return this.panner.rolloffFactor = t, this;
        }
        getDistanceModel() {
            return this.panner.distanceModel;
        }
        setDistanceModel(t) {
            return this.panner.distanceModel = t, this;
        }
        getMaxDistance() {
            return this.panner.maxDistance;
        }
        setMaxDistance(t) {
            return this.panner.maxDistance = t, this;
        }
        setDirectionalCone(t, e, i) {
            return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = i, this;
        }
        updateMatrixWorld(t) {
            if (super.updateMatrixWorld(t), !0 === this.hasPlaybackControl && !1 === this.isPlaying) return;
            this.matrixWorld.decompose(jc, qc, Xc), Jc.set(0, 0, 1).applyQuaternion(qc);
            const e = this.panner;
            if (e.positionX) {
                const t = this.context.currentTime + this.listener.timeDelta;
                e.positionX.linearRampToValueAtTime(jc.x, t), e.positionY.linearRampToValueAtTime(jc.y, t), e.positionZ.linearRampToValueAtTime(jc.z, t), e.orientationX.linearRampToValueAtTime(Jc.x, t), e.orientationY.linearRampToValueAtTime(Jc.y, t), e.orientationZ.linearRampToValueAtTime(Jc.z, t);
            } else e.setPosition(jc.x, jc.y, jc.z), e.setOrientation(Jc.x, Jc.y, Jc.z);
        }
    }, t8.PropertyBinding = ah, t8.PropertyMixer = Yc, t8.QuadraticBezierCurve = Mo, t8.QuadraticBezierCurve3 = bo, t8.Quaternion = te, t8.QuaternionKeyframeTrack = Yl, t8.QuaternionLinearInterpolant = Jl, t8.REVISION = e1, t8.RGBADepthPacking = 3201, t8.RGBAFormat = S1, t8.RGBAIntegerFormat = 1033, t8.RGBA_ASTC_10x10_Format = J1, t8.RGBA_ASTC_10x5_Format = j1, t8.RGBA_ASTC_10x6_Format = q1, t8.RGBA_ASTC_10x8_Format = X1, t8.RGBA_ASTC_12x10_Format = Y1, t8.RGBA_ASTC_12x12_Format = Z1, t8.RGBA_ASTC_4x4_Format = F1, t8.RGBA_ASTC_5x4_Format = B1, t8.RGBA_ASTC_5x5_Format = U1, t8.RGBA_ASTC_6x5_Format = k1, t8.RGBA_ASTC_6x6_Format = G1, t8.RGBA_ASTC_8x5_Format = V1, t8.RGBA_ASTC_8x6_Format = H1, t8.RGBA_ASTC_8x8_Format = W1, t8.RGBA_BPTC_Format = K1, t8.RGBA_ETC2_EAC_Format = O1, t8.RGBA_PVRTC_2BPPV1_Format = N1, t8.RGBA_PVRTC_4BPPV1_Format = D1, t8.RGBA_S3TC_DXT1_Format = C1, t8.RGBA_S3TC_DXT3_Format = L1, t8.RGBA_S3TC_DXT5_Format = R1, t8.RGBFormat = 1022, t8.RGB_ETC1_Format = 36196, t8.RGB_ETC2_Format = z1, t8.RGB_PVRTC_2BPPV1_Format = I1, t8.RGB_PVRTC_4BPPV1_Format = P1, t8.RGB_S3TC_DXT1_Format = E1, t8.RGFormat = 1030, t8.RGIntegerFormat = 1031, t8.RawShaderMaterial = Ll, t8.Ray = Pe, t8.Raycaster = class {
        constructor(t, e, i = 0, n = 1 / 0){
            this.ray = new Pe(t, e), this.near = i, this.far = n, this.camera = null, this.layers = new He, this.params = {
                Mesh: {},
                Line: {
                    threshold: 1
                },
                LOD: {},
                Points: {
                    threshold: 1
                },
                Sprite: {}
            };
        }
        set(t, e) {
            this.ray.set(t, e);
        }
        setFromCamera(t, e) {
            e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
        }
        intersectObject(t, e = !0, i = []) {
            return uh(t, this, i, e), i.sort(hh), i;
        }
        intersectObjects(t, e = !0, i = []) {
            for(let n = 0, r = t.length; n < r; n++)uh(t[n], this, i, e);
            return i.sort(hh), i;
        }
    }, t8.RectAreaLight = wc, t8.RedFormat = 1028, t8.RedIntegerFormat = 1029, t8.ReinhardToneMapping = 2, t8.RepeatWrapping = c1, t8.ReplaceStencilOp = 7681, t8.ReverseSubtractEquation = 102, t8.RingBufferGeometry = xl, t8.RingGeometry = xl, t8.SRGBColorSpace = lt1, t8.Scene = $s, t8.ShaderChunk = yn, t8.ShaderLib = Mn, t8.ShaderMaterial = en, t8.ShadowMaterial = Cl, t8.Shape = Uo, t8.ShapeBufferGeometry = yl, t8.ShapeGeometry = yl, t8.ShapePath = class {
        constructor(){
            this.type = "ShapePath", this.color = new Ht, this.subPaths = [], this.currentPath = null;
        }
        moveTo(t, e) {
            return this.currentPath = new Ao, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this;
        }
        lineTo(t, e) {
            return this.currentPath.lineTo(t, e), this;
        }
        quadraticCurveTo(t, e, i, n) {
            return this.currentPath.quadraticCurveTo(t, e, i, n), this;
        }
        bezierCurveTo(t, e, i, n, r, s) {
            return this.currentPath.bezierCurveTo(t, e, i, n, r, s), this;
        }
        splineThru(t) {
            return this.currentPath.splineThru(t), this;
        }
        toShapes(t254, e180) {
            function i102(t) {
                const e = [];
                for(let i = 0, n = t.length; i < n; i++){
                    const n = t[i], r = new Uo;
                    r.curves = n.curves, e.push(r);
                }
                return e;
            }
            function n79(t, e) {
                const i = e.length;
                let n = !1;
                for(let r = i - 1, s = 0; s < i; r = s++){
                    let i = e[r], a = e[s], o = a.x - i.x, l = a.y - i.y;
                    if (Math.abs(l) > Number.EPSILON) {
                        if (l < 0 && (i = e[s], o = -o, a = e[r], l = -l), t.y < i.y || t.y > a.y) continue;
                        if (t.y === i.y) {
                            if (t.x === i.x) return !0;
                        } else {
                            const e = l * (t.x - i.x) - o * (t.y - i.y);
                            if (0 === e) return !0;
                            if (e < 0) continue;
                            n = !n;
                        }
                    } else {
                        if (t.y !== i.y) continue;
                        if (a.x <= t.x && t.x <= i.x || i.x <= t.x && t.x <= a.x) return !0;
                    }
                }
                return n;
            }
            const r58 = ul.isClockWise, s41 = this.subPaths;
            if (0 === s41.length) return [];
            if (!0 === e180) return i102(s41);
            let a37, o24, l20;
            const c = [];
            if (1 === s41.length) return o24 = s41[0], l20 = new Uo, l20.curves = o24.curves, c.push(l20), c;
            let h = !r58(s41[0].getPoints());
            h = t254 ? !h : h;
            const u = [], d = [];
            let p, m, f = [], g = 0;
            d[g] = void 0, f[g] = [];
            for(let e178 = 0, i101 = s41.length; e178 < i101; e178++)o24 = s41[e178], p = o24.getPoints(), a37 = r58(p), a37 = t254 ? !a37 : a37, a37 ? (!h && d[g] && g++, d[g] = {
                s: new Uo,
                p: p
            }, d[g].s.curves = o24.curves, h && g++, f[g] = []) : f[g].push({
                h: o24,
                p: p[0]
            });
            if (!d[0]) return i102(s41);
            if (d.length > 1) {
                let t = !1, e = 0;
                for(let t255 = 0, e181 = d.length; t255 < e181; t255++)u[t255] = [];
                for(let i = 0, r = d.length; i < r; i++){
                    const r = f[i];
                    for(let s = 0; s < r.length; s++){
                        const a = r[s];
                        let o = !0;
                        for(let r59 = 0; r59 < d.length; r59++)n79(a.p, d[r59].p) && (i !== r59 && e++, o ? (o = !1, u[r59].push(a)) : t = !0);
                        o && u[i].push(a);
                    }
                }
                e > 0 && !1 === t && (f = u);
            }
            for(let t253 = 0, e179 = d.length; t253 < e179; t253++){
                l20 = d[t253].s, c.push(l20), m = f[t253];
                for(let t = 0, e = m.length; t < e; t++)l20.holes.push(m[t].h);
            }
            return c;
        }
    }, t8.ShapeUtils = ul, t8.ShortType = 1011, t8.Skeleton = Ia, t8.SkeletonHelper = class extends Ja {
        constructor(t){
            const e = yh(t), i = new Pi, n = [], r = [], s = new Ht(0, 0, 1), a = new Ht(0, 1, 0);
            for(let t256 = 0; t256 < e.length; t256++){
                const i = e[t256];
                i.parent && i.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(a.r, a.g, a.b));
            }
            i.setAttribute("position", new wi(n, 3)), i.setAttribute("color", new wi(r, 3));
            super(i, new Ua({
                vertexColors: !0,
                depthTest: !1,
                depthWrite: !1,
                toneMapped: !1,
                transparent: !0
            })), this.isSkeletonHelper = !0, this.type = "SkeletonHelper", this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1;
        }
        updateMatrixWorld(t) {
            const e = this.bones, i = this.geometry, n = i.getAttribute("position");
            xh.copy(this.root.matrixWorld).invert();
            for(let t257 = 0, i103 = 0; t257 < e.length; t257++){
                const r = e[t257];
                r.parent && r.parent.isBone && (vh.multiplyMatrices(xh, r.matrixWorld), gh.setFromMatrixPosition(vh), n.setXYZ(i103, gh.x, gh.y, gh.z), vh.multiplyMatrices(xh, r.parent.matrixWorld), gh.setFromMatrixPosition(vh), n.setXYZ(i103 + 1, gh.x, gh.y, gh.z), i103 += 2);
            }
            i.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(t);
        }
    }, t8.SkinnedMesh = Ea, t8.SmoothShading = 2, t8.Source = qt, t8.Sphere = we, t8.SphereBufferGeometry = _l, t8.SphereGeometry = _l, t8.Spherical = class {
        constructor(t = 1, e = 0, i = 0){
            return this.radius = t, this.phi = e, this.theta = i, this;
        }
        set(t, e, i) {
            return this.radius = t, this.phi = e, this.theta = i, this;
        }
        copy(t) {
            return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
        }
        makeSafe() {
            const t = 1e-6;
            return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this;
        }
        setFromVector3(t) {
            return this.setFromCartesianCoords(t.x, t.y, t.z);
        }
        setFromCartesianCoords(t, e, i) {
            return this.radius = Math.sqrt(t * t + e * e + i * i), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, i), this.phi = Math.acos(_t1(e / this.radius, -1, 1))), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }, t8.SphericalHarmonics3 = Sc, t8.SplineCurve = wo, t8.SpotLight = mc, t8.SpotLightHelper = class extends ni {
        constructor(t, e){
            super(), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e;
            const i = new Pi, n = [
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1,
                0,
                1,
                0,
                0,
                0,
                -1,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                1,
                0,
                0,
                0,
                0,
                -1,
                1
            ];
            for(let t258 = 0, e182 = 1, i104 = 32; t258 < i104; t258++, e182++){
                const r = t258 / i104 * Math.PI * 2, s = e182 / i104 * Math.PI * 2;
                n.push(Math.cos(r), Math.sin(r), 1, Math.cos(s), Math.sin(s), 1);
            }
            i.setAttribute("position", new wi(n, 3));
            const r = new Ua({
                fog: !1,
                toneMapped: !1
            });
            this.cone = new Ja(i, r), this.add(this.cone), this.update();
        }
        dispose() {
            this.cone.geometry.dispose(), this.cone.material.dispose();
        }
        update() {
            this.light.updateMatrixWorld();
            const t = this.light.distance ? this.light.distance : 1e3, e = t * Math.tan(this.light.angle);
            this.cone.scale.set(e, e, t), fh.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(fh), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
        }
    }, t8.Sprite = va, t8.SpriteMaterial = na, t8.SrcAlphaFactor = 204, t8.SrcAlphaSaturateFactor = 210, t8.SrcColorFactor = 202, t8.StaticCopyUsage = 35046, t8.StaticDrawUsage = ut1, t8.StaticReadUsage = 35045, t8.StereoCamera = class {
        constructor(){
            this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new rn, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new rn, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
                focus: null,
                fov: null,
                aspect: null,
                near: null,
                far: null,
                zoom: null,
                eyeSep: null
            };
        }
        update(t) {
            const e = this._cache;
            if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
                e.focus = t.focus, e.fov = t.fov, e.aspect = t.aspect * this.aspect, e.near = t.near, e.far = t.far, e.zoom = t.zoom, e.eyeSep = this.eyeSep, Fc.copy(t.projectionMatrix);
                const i = e.eyeSep / 2, n = i * e.near / e.focus, r = e.near * Math.tan(vt1 * e.fov * .5) / e.zoom;
                let s, a;
                Oc.elements[12] = -i, zc.elements[12] = i, s = -r * e.aspect + n, a = r * e.aspect + n, Fc.elements[0] = 2 * e.near / (a - s), Fc.elements[8] = (a + s) / (a - s), this.cameraL.projectionMatrix.copy(Fc), s = -r * e.aspect - n, a = r * e.aspect - n, Fc.elements[0] = 2 * e.near / (a - s), Fc.elements[8] = (a + s) / (a - s), this.cameraR.projectionMatrix.copy(Fc);
            }
            this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Oc), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(zc);
        }
    }, t8.StreamCopyUsage = 35042, t8.StreamDrawUsage = 35040, t8.StreamReadUsage = 35041, t8.StringKeyframeTrack = Zl, t8.SubtractEquation = 101, t8.SubtractiveBlending = 3, t8.TOUCH = {
        ROTATE: 0,
        PAN: 1,
        DOLLY_PAN: 2,
        DOLLY_ROTATE: 3
    }, t8.TangentSpaceNormalMap = 0, t8.TetrahedronBufferGeometry = Ml, t8.TetrahedronGeometry = Ml, t8.TextGeometry = class extends Pi {
        constructor(){
            console.error("THREE.TextGeometry has been moved to /examples/jsm/geometries/TextGeometry.js"), super();
        }
    }, t8.Texture = Yt, t8.TextureLoader = class extends nc {
        constructor(t){
            super(t);
        }
        load(t259, e, i, n) {
            const r = new Yt, s = new ac(this.manager);
            return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t259, function(t) {
                r.image = t, r.needsUpdate = !0, void 0 !== e && e(r);
            }, i, n), r;
        }
    }, t8.TorusBufferGeometry = bl, t8.TorusGeometry = bl, t8.TorusKnotBufferGeometry = wl, t8.TorusKnotGeometry = wl, t8.Triangle = mi, t8.TriangleFanDrawMode = 2, t8.TriangleStripDrawMode = 1, t8.TrianglesDrawMode = 0, t8.TubeBufferGeometry = Sl, t8.TubeGeometry = Sl, t8.UVMapping = n1, t8.Uint16BufferAttribute = Mi, t8.Uint32BufferAttribute = bi, t8.Uint8BufferAttribute = class extends _i {
        constructor(t, e, i){
            super(new Uint8Array(t), e, i);
        }
    }, t8.Uint8ClampedBufferAttribute = class extends _i {
        constructor(t, e, i){
            super(new Uint8ClampedArray(t), e, i);
        }
    }, t8.Uniform = ch, t8.UniformsLib = _n, t8.UniformsUtils = tn, t8.UnsignedByteType = x1, t8.UnsignedInt248Type = w1, t8.UnsignedIntType = _1, t8.UnsignedShort4444Type = 1017, t8.UnsignedShort5551Type = 1018, t8.UnsignedShortType = y1, t8.VSMShadowMap = 3, t8.Vector2 = Et, t8.Vector3 = ee, t8.Vector4 = Zt, t8.VectorKeyframeTrack = Kl, t8.VideoTexture = class extends Yt {
        constructor(t, e183, i, n, r, s, a, o, l){
            super(t, e183, i, n, r, s, a, o, l), this.isVideoTexture = !0, this.minFilter = void 0 !== s ? s : f1, this.magFilter = void 0 !== r ? r : f1, this.generateMipmaps = !1;
            const c = this;
            "requestVideoFrameCallback" in t && t.requestVideoFrameCallback(function e() {
                c.needsUpdate = !0, t.requestVideoFrameCallback(e);
            });
        }
        clone() {
            return new this.constructor(this.image).copy(this);
        }
        update() {
            const t = this.image;
            !1 === "requestVideoFrameCallback" in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
        }
    }, t8.WebGL1Renderer = Zs, t8.WebGL3DRenderTarget = class extends Kt {
        constructor(t, e, i){
            super(t, e), this.isWebGL3DRenderTarget = !0, this.depth = i, this.texture = new $t(null, t, e, i), this.texture.isRenderTargetTexture = !0;
        }
    }, t8.WebGLArrayRenderTarget = class extends Kt {
        constructor(t, e, i){
            super(t, e), this.isWebGLArrayRenderTarget = !0, this.depth = i, this.texture = new Qt(null, t, e, i), this.texture.isRenderTargetTexture = !0;
        }
    }, t8.WebGLCubeRenderTarget = ln, t8.WebGLMultipleRenderTargets = class extends Kt {
        constructor(t, e, i, n = {}){
            super(t, e, n), this.isWebGLMultipleRenderTargets = !0;
            const r = this.texture;
            this.texture = [];
            for(let t260 = 0; t260 < i; t260++)this.texture[t260] = r.clone(), this.texture[t260].isRenderTargetTexture = !0;
        }
        setSize(t, e, i = 1) {
            if (this.width !== t || this.height !== e || this.depth !== i) {
                this.width = t, this.height = e, this.depth = i;
                for(let n = 0, r = this.texture.length; n < r; n++)this.texture[n].image.width = t, this.texture[n].image.height = e, this.texture[n].image.depth = i;
                this.dispose();
            }
            return this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e), this;
        }
        copy(t) {
            this.dispose(), this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()), this.texture.length = 0;
            for(let e = 0, i = t.texture.length; e < i; e++)this.texture[e] = t.texture[e].clone(), this.texture[e].isRenderTargetTexture = !0;
            return this;
        }
    }, t8.WebGLMultisampleRenderTarget = class extends Kt {
        constructor(t, e, i){
            console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'), super(t, e, i), this.samples = 4;
        }
    }, t8.WebGLRenderTarget = Kt, t8.WebGLRenderer = Ys, t8.WebGLUtils = Gs, t8.WireframeGeometry = Tl, t8.WrapAroundEnding = nt1, t8.ZeroCurvatureEnding = et1, t8.ZeroFactor = 200, t8.ZeroSlopeEnding = it1, t8.ZeroStencilOp = 0, t8._SRGBAFormat = pt1, t8.sRGBEncoding = ot1, Object.defineProperty(t8, "__esModule", {
        value: !0
    });
});

//# sourceMappingURL=index.5871dc7d.js.map
