var Jo = Object.defineProperty;
var Qo = (h, e, t) => e in h ? Jo(h, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[e] = t;
var or = (h, e, t) => (Qo(h, typeof e != "symbol" ? e + "" : e, t), t);
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ys = "143";
const Jt = "srgb", wn = "srgb-linear";
const ar = "300 es";
class Jn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, o = i.length; s < o; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const it = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], ss = Math.PI / 180, Ws = 180 / Math.PI;
function fi() {
  const h = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (it[h & 255] + it[h >> 8 & 255] + it[h >> 16 & 255] + it[h >> 24 & 255] + "-" + it[e & 255] + it[e >> 8 & 255] + "-" + it[e >> 16 & 15 | 64] + it[e >> 24 & 255] + "-" + it[t & 63 | 128] + it[t >> 8 & 255] + "-" + it[t >> 16 & 255] + it[t >> 24 & 255] + it[n & 255] + it[n >> 8 & 255] + it[n >> 16 & 255] + it[n >> 24 & 255]).toLowerCase();
}
function _t(h, e, t) {
  return Math.max(e, Math.min(t, h));
}
function ea(h, e) {
  return (h % e + e) % e;
}
function rs(h, e, t) {
  return (1 - t) * h + t * e;
}
function lr(h) {
  return (h & h - 1) === 0 && h !== 0;
}
function Vs(h) {
  return Math.pow(2, Math.floor(Math.log(h) / Math.LN2));
}
class Ce {
  constructor(e = 0, t = 0) {
    Ce.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
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
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
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
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, o = this.y - e.y;
    return this.x = s * n - o * i + e.x, this.y = s * i + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class St {
  constructor() {
    St.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, s, o, r, a, l) {
    const u = this.elements;
    return u[0] = e, u[1] = i, u[2] = r, u[3] = t, u[4] = s, u[5] = a, u[6] = n, u[7] = o, u[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], r = n[3], a = n[6], l = n[1], u = n[4], d = n[7], c = n[2], m = n[5], g = n[8], p = i[0], f = i[3], v = i[6], _ = i[1], b = i[4], x = i[7], M = i[2], S = i[5], C = i[8];
    return s[0] = o * p + r * _ + a * M, s[3] = o * f + r * b + a * S, s[6] = o * v + r * x + a * C, s[1] = l * p + u * _ + d * M, s[4] = l * f + u * b + d * S, s[7] = l * v + u * x + d * C, s[2] = c * p + m * _ + g * M, s[5] = c * f + m * b + g * S, s[8] = c * v + m * x + g * C, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], r = e[5], a = e[6], l = e[7], u = e[8];
    return t * o * u - t * r * l - n * s * u + n * r * a + i * s * l - i * o * a;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], r = e[5], a = e[6], l = e[7], u = e[8], d = u * o - r * l, c = r * a - u * s, m = l * s - o * a, g = t * d + n * c + i * m;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / g;
    return e[0] = d * p, e[1] = (i * l - u * n) * p, e[2] = (r * n - i * o) * p, e[3] = c * p, e[4] = (u * t - i * a) * p, e[5] = (i * s - r * t) * p, e[6] = m * p, e[7] = (n * a - l * t) * p, e[8] = (o * t - n * s) * p, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, o, r) {
    const a = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * a,
      n * l,
      -n * (a * o + l * r) + o + e,
      -i * l,
      i * a,
      -i * (-l * o + a * r) + r + t,
      0,
      0,
      1
    ), this;
  }
  scale(e, t) {
    const n = this.elements;
    return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this;
  }
  rotate(e) {
    const t = Math.cos(e), n = Math.sin(e), i = this.elements, s = i[0], o = i[3], r = i[6], a = i[1], l = i[4], u = i[7];
    return i[0] = t * s + n * a, i[3] = t * o + n * l, i[6] = t * r + n * u, i[1] = -n * s + t * a, i[4] = -n * o + t * l, i[7] = -n * r + t * u, this;
  }
  translate(e, t) {
    const n = this.elements;
    return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
function go(h) {
  for (let e = h.length - 1; e >= 0; --e)
    if (h[e] > 65535)
      return !0;
  return !1;
}
function Zi(h) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", h);
}
function bn(h) {
  return h < 0.04045 ? h * 0.0773993808 : Math.pow(h * 0.9478672986 + 0.0521327014, 2.4);
}
function Xi(h) {
  return h < 31308e-7 ? h * 12.92 : 1.055 * Math.pow(h, 0.41666) - 0.055;
}
const os = {
  [Jt]: { [wn]: bn },
  [wn]: { [Jt]: Xi }
}, Tt = {
  legacyMode: !0,
  get workingColorSpace() {
    return wn;
  },
  set workingColorSpace(h) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(h, e, t) {
    if (this.legacyMode || e === t || !e || !t)
      return h;
    if (os[e] && os[e][t] !== void 0) {
      const n = os[e][t];
      return h.r = n(h.r), h.g = n(h.g), h.b = n(h.b), h;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(h, e) {
    return this.convert(h, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(h, e) {
    return this.convert(h, e, this.workingColorSpace);
  }
}, _o = {
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
}, Ke = { r: 0, g: 0, b: 0 }, At = { h: 0, s: 0, l: 0 }, vi = { h: 0, s: 0, l: 0 };
function as(h, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? h + (e - h) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? h + (e - h) * 6 * (2 / 3 - t) : h;
}
function xi(h, e) {
  return e.r = h.r, e.g = h.g, e.b = h.b, e;
}
class Ae {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Jt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Tt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = wn) {
    return this.r = e, this.g = t, this.b = n, Tt.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = wn) {
    if (e = ea(e, 1), t = _t(t, 0, 1), n = _t(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = as(o, s, e + 1 / 3), this.g = as(o, s, e), this.b = as(o, s, e - 1 / 3);
    }
    return Tt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Jt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
      let s;
      const o = i[1], r = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
            return this.r = Math.min(255, parseInt(s[1], 10)) / 255, this.g = Math.min(255, parseInt(s[2], 10)) / 255, this.b = Math.min(255, parseInt(s[3], 10)) / 255, Tt.toWorkingColorSpace(this, t), n(s[4]), this;
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
            return this.r = Math.min(100, parseInt(s[1], 10)) / 100, this.g = Math.min(100, parseInt(s[2], 10)) / 100, this.b = Math.min(100, parseInt(s[3], 10)) / 100, Tt.toWorkingColorSpace(this, t), n(s[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
            const a = parseFloat(s[1]) / 360, l = parseInt(s[2], 10) / 100, u = parseInt(s[3], 10) / 100;
            return n(s[4]), this.setHSL(a, l, u, t);
          }
          break;
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], o = s.length;
      if (o === 3)
        return this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255, this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255, this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255, Tt.toWorkingColorSpace(this, t), this;
      if (o === 6)
        return this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255, this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255, this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255, Tt.toWorkingColorSpace(this, t), this;
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = Jt) {
    const n = _o[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = bn(e.r), this.g = bn(e.g), this.b = bn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Xi(e.r), this.g = Xi(e.g), this.b = Xi(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Jt) {
    return Tt.fromWorkingColorSpace(xi(this, Ke), e), _t(Ke.r * 255, 0, 255) << 16 ^ _t(Ke.g * 255, 0, 255) << 8 ^ _t(Ke.b * 255, 0, 255) << 0;
  }
  getHexString(e = Jt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = wn) {
    Tt.fromWorkingColorSpace(xi(this, Ke), t);
    const n = Ke.r, i = Ke.g, s = Ke.b, o = Math.max(n, i, s), r = Math.min(n, i, s);
    let a, l;
    const u = (r + o) / 2;
    if (r === o)
      a = 0, l = 0;
    else {
      const d = o - r;
      switch (l = u <= 0.5 ? d / (o + r) : d / (2 - o - r), o) {
        case n:
          a = (i - s) / d + (i < s ? 6 : 0);
          break;
        case i:
          a = (s - n) / d + 2;
          break;
        case s:
          a = (n - i) / d + 4;
          break;
      }
      a /= 6;
    }
    return e.h = a, e.s = l, e.l = u, e;
  }
  getRGB(e, t = wn) {
    return Tt.fromWorkingColorSpace(xi(this, Ke), t), e.r = Ke.r, e.g = Ke.g, e.b = Ke.b, e;
  }
  getStyle(e = Jt) {
    return Tt.fromWorkingColorSpace(xi(this, Ke), e), e !== Jt ? `color(${e} ${Ke.r} ${Ke.g} ${Ke.b})` : `rgb(${Ke.r * 255 | 0},${Ke.g * 255 | 0},${Ke.b * 255 | 0})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(At), At.h += e, At.s += t, At.l += n, this.setHSL(At.h, At.s, At.l), this;
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(At), e.getHSL(vi);
    const n = rs(At.h, vi.h, t), i = rs(At.s, vi.s, t), s = rs(At.l, vi.l, t);
    return this.setHSL(n, i, s), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), e.normalized === !0 && (this.r /= 255, this.g /= 255, this.b /= 255), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
Ae.NAMES = _o;
let Fn;
class vo {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Fn === void 0 && (Fn = Zi("canvas")), Fn.width = e.width, Fn.height = e.height;
      const n = Fn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Fn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Zi("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let o = 0; o < s.length; o++)
        s[o] = bn(s[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(bn(t[n] / 255) * 255) : t[n] = bn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class xo {
  constructor(e = null) {
    this.isSource = !0, this.uuid = fi(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let o = 0, r = i.length; o < r; o++)
          i[o].isDataTexture ? s.push(ls(i[o].image)) : s.push(ls(i[o]));
      } else
        s = ls(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function ls(h) {
  return typeof HTMLImageElement < "u" && h instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && h instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && h instanceof ImageBitmap ? vo.getDataURL(h) : h.data ? {
    data: Array.from(h.data),
    width: h.width,
    height: h.height,
    type: h.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let ta = 0;
class vt extends Jn {
  constructor(e = vt.DEFAULT_IMAGE, t = vt.DEFAULT_MAPPING, n = 1001, i = 1001, s = 1006, o = 1008, r = 1023, a = 1009, l = 1, u = 3e3) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: ta++ }), this.uuid = fi(), this.name = "", this.source = new xo(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = o, this.anisotropy = l, this.format = r, this.internalFormat = null, this.type = a, this.offset = new Ce(0, 0), this.repeat = new Ce(1, 1), this.center = new Ce(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new St(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
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
    return JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== 300)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
vt.DEFAULT_IMAGE = null;
vt.DEFAULT_MAPPING = 300;
class Ge {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Ge.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * s, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * s, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const a = e.elements, l = a[0], u = a[4], d = a[8], c = a[1], m = a[5], g = a[9], p = a[2], f = a[6], v = a[10];
    if (Math.abs(u - c) < 0.01 && Math.abs(d - p) < 0.01 && Math.abs(g - f) < 0.01) {
      if (Math.abs(u + c) < 0.1 && Math.abs(d + p) < 0.1 && Math.abs(g + f) < 0.1 && Math.abs(l + m + v - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (l + 1) / 2, x = (m + 1) / 2, M = (v + 1) / 2, S = (u + c) / 4, C = (d + p) / 4, y = (g + f) / 4;
      return b > x && b > M ? b < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(b), i = S / n, s = C / n) : x > M ? x < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(x), n = S / i, s = y / i) : M < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(M), n = C / s, i = y / s), this.set(n, i, s, t), this;
    }
    let _ = Math.sqrt((f - g) * (f - g) + (d - p) * (d - p) + (c - u) * (c - u));
    return Math.abs(_) < 1e-3 && (_ = 1), this.x = (f - g) / _, this.y = (d - p) / _, this.z = (c - u) / _, this.w = Math.acos((l + m + v - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
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
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
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
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Tn extends Jn {
  constructor(e, t, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ge(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ge(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    this.texture = new vt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : 1006, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new xo(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class yo extends vt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class na extends vt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class pi {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, o, r) {
    let a = n[i + 0], l = n[i + 1], u = n[i + 2], d = n[i + 3];
    const c = s[o + 0], m = s[o + 1], g = s[o + 2], p = s[o + 3];
    if (r === 0) {
      e[t + 0] = a, e[t + 1] = l, e[t + 2] = u, e[t + 3] = d;
      return;
    }
    if (r === 1) {
      e[t + 0] = c, e[t + 1] = m, e[t + 2] = g, e[t + 3] = p;
      return;
    }
    if (d !== p || a !== c || l !== m || u !== g) {
      let f = 1 - r;
      const v = a * c + l * m + u * g + d * p, _ = v >= 0 ? 1 : -1, b = 1 - v * v;
      if (b > Number.EPSILON) {
        const M = Math.sqrt(b), S = Math.atan2(M, v * _);
        f = Math.sin(f * S) / M, r = Math.sin(r * S) / M;
      }
      const x = r * _;
      if (a = a * f + c * x, l = l * f + m * x, u = u * f + g * x, d = d * f + p * x, f === 1 - r) {
        const M = 1 / Math.sqrt(a * a + l * l + u * u + d * d);
        a *= M, l *= M, u *= M, d *= M;
      }
    }
    e[t] = a, e[t + 1] = l, e[t + 2] = u, e[t + 3] = d;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, o) {
    const r = n[i], a = n[i + 1], l = n[i + 2], u = n[i + 3], d = s[o], c = s[o + 1], m = s[o + 2], g = s[o + 3];
    return e[t] = r * g + u * d + a * m - l * c, e[t + 1] = a * g + u * c + l * d - r * m, e[t + 2] = l * g + u * m + r * c - a * d, e[t + 3] = u * g - r * d - a * c - l * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    if (!(e && e.isEuler))
      throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
    const n = e._x, i = e._y, s = e._z, o = e._order, r = Math.cos, a = Math.sin, l = r(n / 2), u = r(i / 2), d = r(s / 2), c = a(n / 2), m = a(i / 2), g = a(s / 2);
    switch (o) {
      case "XYZ":
        this._x = c * u * d + l * m * g, this._y = l * m * d - c * u * g, this._z = l * u * g + c * m * d, this._w = l * u * d - c * m * g;
        break;
      case "YXZ":
        this._x = c * u * d + l * m * g, this._y = l * m * d - c * u * g, this._z = l * u * g - c * m * d, this._w = l * u * d + c * m * g;
        break;
      case "ZXY":
        this._x = c * u * d - l * m * g, this._y = l * m * d + c * u * g, this._z = l * u * g + c * m * d, this._w = l * u * d - c * m * g;
        break;
      case "ZYX":
        this._x = c * u * d - l * m * g, this._y = l * m * d + c * u * g, this._z = l * u * g - c * m * d, this._w = l * u * d + c * m * g;
        break;
      case "YZX":
        this._x = c * u * d + l * m * g, this._y = l * m * d + c * u * g, this._z = l * u * g - c * m * d, this._w = l * u * d - c * m * g;
        break;
      case "XZY":
        this._x = c * u * d - l * m * g, this._y = l * m * d - c * u * g, this._z = l * u * g + c * m * d, this._w = l * u * d + c * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], o = t[1], r = t[5], a = t[9], l = t[2], u = t[6], d = t[10], c = n + r + d;
    if (c > 0) {
      const m = 0.5 / Math.sqrt(c + 1);
      this._w = 0.25 / m, this._x = (u - a) * m, this._y = (s - l) * m, this._z = (o - i) * m;
    } else if (n > r && n > d) {
      const m = 2 * Math.sqrt(1 + n - r - d);
      this._w = (u - a) / m, this._x = 0.25 * m, this._y = (i + o) / m, this._z = (s + l) / m;
    } else if (r > d) {
      const m = 2 * Math.sqrt(1 + r - n - d);
      this._w = (s - l) / m, this._x = (i + o) / m, this._y = 0.25 * m, this._z = (a + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + d - n - r);
      this._w = (o - i) / m, this._x = (s + l) / m, this._y = (a + u) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(_t(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
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
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, o = e._w, r = t._x, a = t._y, l = t._z, u = t._w;
    return this._x = n * u + o * r + i * l - s * a, this._y = i * u + o * a + s * r - n * l, this._z = s * u + o * l + n * a - i * r, this._w = o * u - n * r - i * a - s * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, i = this._y, s = this._z, o = this._w;
    let r = o * e._w + n * e._x + i * e._y + s * e._z;
    if (r < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, r = -r) : this.copy(e), r >= 1)
      return this._w = o, this._x = n, this._y = i, this._z = s, this;
    const a = 1 - r * r;
    if (a <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * o + t * this._w, this._x = m * n + t * this._x, this._y = m * i + t * this._y, this._z = m * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const l = Math.sqrt(a), u = Math.atan2(l, r), d = Math.sin((1 - t) * u) / l, c = Math.sin(t * u) / l;
    return this._w = o * d + this._w * c, this._x = n * d + this._x * c, this._y = i * d + this._y * c, this._z = s * d + this._z * c, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class B {
  constructor(e = 0, t = 0, n = 0) {
    B.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(cr.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(cr.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, o = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * o, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, o = e.y, r = e.z, a = e.w, l = a * t + o * i - r * n, u = a * n + r * t - s * i, d = a * i + s * n - o * t, c = -s * t - o * n - r * i;
    return this.x = l * a + c * -s + u * -r - d * -o, this.y = u * a + c * -o + d * -s - l * -r, this.z = d * a + c * -r + l * -o - u * -s, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
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
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
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
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, o = t.x, r = t.y, a = t.z;
    return this.x = i * a - s * r, this.y = s * o - n * a, this.z = n * r - i * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return cs.copy(this).projectOnVector(e), this.sub(cs);
  }
  reflect(e) {
    return this.sub(cs.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(_t(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const cs = /* @__PURE__ */ new B(), cr = /* @__PURE__ */ new pi();
class mi {
  constructor(e = new B(1 / 0, 1 / 0, 1 / 0), t = new B(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, o = -1 / 0, r = -1 / 0;
    for (let a = 0, l = e.length; a < l; a += 3) {
      const u = e[a], d = e[a + 1], c = e[a + 2];
      u < t && (t = u), d < n && (n = d), c < i && (i = c), u > s && (s = u), d > o && (o = d), c > r && (r = c);
    }
    return this.min.set(t, n, i), this.max.set(s, o, r), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, o = -1 / 0, r = -1 / 0;
    for (let a = 0, l = e.count; a < l; a++) {
      const u = e.getX(a), d = e.getY(a), c = e.getZ(a);
      u < t && (t = u), d < n && (n = d), c < i && (i = c), u > s && (s = u), d > o && (o = d), c > r && (r = c);
    }
    return this.min.set(t, n, i), this.max.set(s, o, r), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = fn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const s = n.attributes.position;
        for (let o = 0, r = s.count; o < r; o++)
          fn.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld), this.expandByPoint(fn);
      } else
        n.boundingBox === null && n.computeBoundingBox(), hs.copy(n.boundingBox), hs.applyMatrix4(e.matrixWorld), this.union(hs);
    const i = e.children;
    for (let s = 0, o = i.length; s < o; s++)
      this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, fn), fn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ii), yi.subVectors(this.max, ii), Dn.subVectors(e.a, ii), Pn.subVectors(e.b, ii), In.subVectors(e.c, ii), nn.subVectors(Pn, Dn), sn.subVectors(In, Pn), pn.subVectors(Dn, In);
    let t = [
      0,
      -nn.z,
      nn.y,
      0,
      -sn.z,
      sn.y,
      0,
      -pn.z,
      pn.y,
      nn.z,
      0,
      -nn.x,
      sn.z,
      0,
      -sn.x,
      pn.z,
      0,
      -pn.x,
      -nn.y,
      nn.x,
      0,
      -sn.y,
      sn.x,
      0,
      -pn.y,
      pn.x,
      0
    ];
    return !us(t, Dn, Pn, In, yi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !us(t, Dn, Pn, In, yi)) ? !1 : (wi.crossVectors(nn, sn), t = [wi.x, wi.y, wi.z], us(t, Dn, Pn, In, yi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return fn.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return this.getCenter(e.center), e.radius = this.getSize(fn).length() * 0.5, e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Wt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Wt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Wt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Wt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Wt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Wt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Wt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Wt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Wt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Wt = [
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B()
], fn = /* @__PURE__ */ new B(), hs = /* @__PURE__ */ new mi(), Dn = /* @__PURE__ */ new B(), Pn = /* @__PURE__ */ new B(), In = /* @__PURE__ */ new B(), nn = /* @__PURE__ */ new B(), sn = /* @__PURE__ */ new B(), pn = /* @__PURE__ */ new B(), ii = /* @__PURE__ */ new B(), yi = /* @__PURE__ */ new B(), wi = /* @__PURE__ */ new B(), mn = /* @__PURE__ */ new B();
function us(h, e, t, n, i) {
  for (let s = 0, o = h.length - 3; s <= o; s += 3) {
    mn.fromArray(h, s);
    const r = i.x * Math.abs(mn.x) + i.y * Math.abs(mn.y) + i.z * Math.abs(mn.z), a = e.dot(mn), l = t.dot(mn), u = n.dot(mn);
    if (Math.max(-Math.max(a, l, u), Math.min(a, l, u)) > r)
      return !1;
  }
  return !0;
}
const ia = /* @__PURE__ */ new mi(), hr = /* @__PURE__ */ new B(), bi = /* @__PURE__ */ new B(), ds = /* @__PURE__ */ new B();
class Zn {
  constructor(e = new B(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : ia.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, o = e.length; s < o; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    ds.subVectors(e, this.center);
    const t = ds.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.add(ds.multiplyScalar(i / n)), this.radius += i;
    }
    return this;
  }
  union(e) {
    return this.center.equals(e.center) === !0 ? bi.set(0, 0, 1).multiplyScalar(e.radius) : bi.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(hr.copy(e.center).add(bi)), this.expandByPoint(hr.copy(e.center).sub(bi)), this;
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Vt = /* @__PURE__ */ new B(), fs = /* @__PURE__ */ new B(), Mi = /* @__PURE__ */ new B(), rn = /* @__PURE__ */ new B(), ps = /* @__PURE__ */ new B(), Si = /* @__PURE__ */ new B(), ms = /* @__PURE__ */ new B();
class wo {
  constructor(e = new B(), t = new B(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Vt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Vt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Vt.copy(this.direction).multiplyScalar(t).add(this.origin), Vt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    fs.copy(e).add(t).multiplyScalar(0.5), Mi.copy(t).sub(e).normalize(), rn.copy(this.origin).sub(fs);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(Mi), r = rn.dot(this.direction), a = -rn.dot(Mi), l = rn.lengthSq(), u = Math.abs(1 - o * o);
    let d, c, m, g;
    if (u > 0)
      if (d = o * a - r, c = o * r - a, g = s * u, d >= 0)
        if (c >= -g)
          if (c <= g) {
            const p = 1 / u;
            d *= p, c *= p, m = d * (d + o * c + 2 * r) + c * (o * d + c + 2 * a) + l;
          } else
            c = s, d = Math.max(0, -(o * c + r)), m = -d * d + c * (c + 2 * a) + l;
        else
          c = -s, d = Math.max(0, -(o * c + r)), m = -d * d + c * (c + 2 * a) + l;
      else
        c <= -g ? (d = Math.max(0, -(-o * s + r)), c = d > 0 ? -s : Math.min(Math.max(-s, -a), s), m = -d * d + c * (c + 2 * a) + l) : c <= g ? (d = 0, c = Math.min(Math.max(-s, -a), s), m = c * (c + 2 * a) + l) : (d = Math.max(0, -(o * s + r)), c = d > 0 ? s : Math.min(Math.max(-s, -a), s), m = -d * d + c * (c + 2 * a) + l);
    else
      c = o > 0 ? -s : s, d = Math.max(0, -(o * c + r)), m = -d * d + c * (c + 2 * a) + l;
    return n && n.copy(this.direction).multiplyScalar(d).add(this.origin), i && i.copy(Mi).multiplyScalar(c).add(fs), m;
  }
  intersectSphere(e, t) {
    Vt.subVectors(e.center, this.origin);
    const n = Vt.dot(this.direction), i = Vt.dot(Vt) - n * n, s = e.radius * e.radius;
    if (i > s)
      return null;
    const o = Math.sqrt(s - i), r = n - o, a = n + o;
    return r < 0 && a < 0 ? null : r < 0 ? this.at(a, t) : this.at(r, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, o, r, a;
    const l = 1 / this.direction.x, u = 1 / this.direction.y, d = 1 / this.direction.z, c = this.origin;
    return l >= 0 ? (n = (e.min.x - c.x) * l, i = (e.max.x - c.x) * l) : (n = (e.max.x - c.x) * l, i = (e.min.x - c.x) * l), u >= 0 ? (s = (e.min.y - c.y) * u, o = (e.max.y - c.y) * u) : (s = (e.max.y - c.y) * u, o = (e.min.y - c.y) * u), n > o || s > i || ((s > n || n !== n) && (n = s), (o < i || i !== i) && (i = o), d >= 0 ? (r = (e.min.z - c.z) * d, a = (e.max.z - c.z) * d) : (r = (e.max.z - c.z) * d, a = (e.min.z - c.z) * d), n > a || r > i) || ((r > n || n !== n) && (n = r), (a < i || i !== i) && (i = a), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Vt) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    ps.subVectors(t, e), Si.subVectors(n, e), ms.crossVectors(ps, Si);
    let o = this.direction.dot(ms), r;
    if (o > 0) {
      if (i)
        return null;
      r = 1;
    } else if (o < 0)
      r = -1, o = -o;
    else
      return null;
    rn.subVectors(this.origin, e);
    const a = r * this.direction.dot(Si.crossVectors(rn, Si));
    if (a < 0)
      return null;
    const l = r * this.direction.dot(ps.cross(rn));
    if (l < 0 || a + l > o)
      return null;
    const u = -r * rn.dot(ms);
    return u < 0 ? null : this.at(u / o, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Xe {
  constructor() {
    Xe.prototype.isMatrix4 = !0, this.elements = [
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
    ];
  }
  set(e, t, n, i, s, o, r, a, l, u, d, c, m, g, p, f) {
    const v = this.elements;
    return v[0] = e, v[4] = t, v[8] = n, v[12] = i, v[1] = s, v[5] = o, v[9] = r, v[13] = a, v[2] = l, v[6] = u, v[10] = d, v[14] = c, v[3] = m, v[7] = g, v[11] = p, v[15] = f, this;
  }
  identity() {
    return this.set(
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
    ), this;
  }
  clone() {
    return new Xe().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / zn.setFromMatrixColumn(e, 0).length(), s = 1 / zn.setFromMatrixColumn(e, 1).length(), o = 1 / zn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, o = Math.cos(n), r = Math.sin(n), a = Math.cos(i), l = Math.sin(i), u = Math.cos(s), d = Math.sin(s);
    if (e.order === "XYZ") {
      const c = o * u, m = o * d, g = r * u, p = r * d;
      t[0] = a * u, t[4] = -a * d, t[8] = l, t[1] = m + g * l, t[5] = c - p * l, t[9] = -r * a, t[2] = p - c * l, t[6] = g + m * l, t[10] = o * a;
    } else if (e.order === "YXZ") {
      const c = a * u, m = a * d, g = l * u, p = l * d;
      t[0] = c + p * r, t[4] = g * r - m, t[8] = o * l, t[1] = o * d, t[5] = o * u, t[9] = -r, t[2] = m * r - g, t[6] = p + c * r, t[10] = o * a;
    } else if (e.order === "ZXY") {
      const c = a * u, m = a * d, g = l * u, p = l * d;
      t[0] = c - p * r, t[4] = -o * d, t[8] = g + m * r, t[1] = m + g * r, t[5] = o * u, t[9] = p - c * r, t[2] = -o * l, t[6] = r, t[10] = o * a;
    } else if (e.order === "ZYX") {
      const c = o * u, m = o * d, g = r * u, p = r * d;
      t[0] = a * u, t[4] = g * l - m, t[8] = c * l + p, t[1] = a * d, t[5] = p * l + c, t[9] = m * l - g, t[2] = -l, t[6] = r * a, t[10] = o * a;
    } else if (e.order === "YZX") {
      const c = o * a, m = o * l, g = r * a, p = r * l;
      t[0] = a * u, t[4] = p - c * d, t[8] = g * d + m, t[1] = d, t[5] = o * u, t[9] = -r * u, t[2] = -l * u, t[6] = m * d + g, t[10] = c - p * d;
    } else if (e.order === "XZY") {
      const c = o * a, m = o * l, g = r * a, p = r * l;
      t[0] = a * u, t[4] = -d, t[8] = l * u, t[1] = c * d + p, t[5] = o * u, t[9] = m * d - g, t[2] = g * d - m, t[6] = r * u, t[10] = p * d + c;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(sa, e, ra);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return mt.subVectors(e, t), mt.lengthSq() === 0 && (mt.z = 1), mt.normalize(), on.crossVectors(n, mt), on.lengthSq() === 0 && (Math.abs(n.z) === 1 ? mt.x += 1e-4 : mt.z += 1e-4, mt.normalize(), on.crossVectors(n, mt)), on.normalize(), Ei.crossVectors(mt, on), i[0] = on.x, i[4] = Ei.x, i[8] = mt.x, i[1] = on.y, i[5] = Ei.y, i[9] = mt.y, i[2] = on.z, i[6] = Ei.z, i[10] = mt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], r = n[4], a = n[8], l = n[12], u = n[1], d = n[5], c = n[9], m = n[13], g = n[2], p = n[6], f = n[10], v = n[14], _ = n[3], b = n[7], x = n[11], M = n[15], S = i[0], C = i[4], y = i[8], A = i[12], P = i[1], z = i[5], H = i[9], D = i[13], L = i[2], I = i[6], F = i[10], q = i[14], U = i[3], O = i[7], k = i[11], J = i[15];
    return s[0] = o * S + r * P + a * L + l * U, s[4] = o * C + r * z + a * I + l * O, s[8] = o * y + r * H + a * F + l * k, s[12] = o * A + r * D + a * q + l * J, s[1] = u * S + d * P + c * L + m * U, s[5] = u * C + d * z + c * I + m * O, s[9] = u * y + d * H + c * F + m * k, s[13] = u * A + d * D + c * q + m * J, s[2] = g * S + p * P + f * L + v * U, s[6] = g * C + p * z + f * I + v * O, s[10] = g * y + p * H + f * F + v * k, s[14] = g * A + p * D + f * q + v * J, s[3] = _ * S + b * P + x * L + M * U, s[7] = _ * C + b * z + x * I + M * O, s[11] = _ * y + b * H + x * F + M * k, s[15] = _ * A + b * D + x * q + M * J, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], o = e[1], r = e[5], a = e[9], l = e[13], u = e[2], d = e[6], c = e[10], m = e[14], g = e[3], p = e[7], f = e[11], v = e[15];
    return g * (+s * a * d - i * l * d - s * r * c + n * l * c + i * r * m - n * a * m) + p * (+t * a * m - t * l * c + s * o * c - i * o * m + i * l * u - s * a * u) + f * (+t * l * d - t * r * m - s * o * d + n * o * m + s * r * u - n * l * u) + v * (-i * r * u - t * a * d + t * r * c + i * o * d - n * o * c + n * a * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], r = e[5], a = e[6], l = e[7], u = e[8], d = e[9], c = e[10], m = e[11], g = e[12], p = e[13], f = e[14], v = e[15], _ = d * f * l - p * c * l + p * a * m - r * f * m - d * a * v + r * c * v, b = g * c * l - u * f * l - g * a * m + o * f * m + u * a * v - o * c * v, x = u * p * l - g * d * l + g * r * m - o * p * m - u * r * v + o * d * v, M = g * d * a - u * p * a - g * r * c + o * p * c + u * r * f - o * d * f, S = t * _ + n * b + i * x + s * M;
    if (S === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / S;
    return e[0] = _ * C, e[1] = (p * c * s - d * f * s - p * i * m + n * f * m + d * i * v - n * c * v) * C, e[2] = (r * f * s - p * a * s + p * i * l - n * f * l - r * i * v + n * a * v) * C, e[3] = (d * a * s - r * c * s - d * i * l + n * c * l + r * i * m - n * a * m) * C, e[4] = b * C, e[5] = (u * f * s - g * c * s + g * i * m - t * f * m - u * i * v + t * c * v) * C, e[6] = (g * a * s - o * f * s - g * i * l + t * f * l + o * i * v - t * a * v) * C, e[7] = (o * c * s - u * a * s + u * i * l - t * c * l - o * i * m + t * a * m) * C, e[8] = x * C, e[9] = (g * d * s - u * p * s - g * n * m + t * p * m + u * n * v - t * d * v) * C, e[10] = (o * p * s - g * r * s + g * n * l - t * p * l - o * n * v + t * r * v) * C, e[11] = (u * r * s - o * d * s - u * n * l + t * d * l + o * n * m - t * r * m) * C, e[12] = M * C, e[13] = (u * p * i - g * d * i + g * n * c - t * p * c - u * n * f + t * d * f) * C, e[14] = (g * r * i - o * p * i - g * n * a + t * p * a + o * n * f - t * r * f) * C, e[15] = (o * d * i - u * r * i + u * n * a - t * d * a - o * n * c + t * r * c) * C, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
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
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, o = e.x, r = e.y, a = e.z, l = s * o, u = s * r;
    return this.set(
      l * o + n,
      l * r - i * a,
      l * a + i * r,
      0,
      l * r + i * a,
      u * r + n,
      u * a - i * o,
      0,
      l * a - i * r,
      u * a + i * o,
      s * a * a + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, s, o) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      o,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, o = t._y, r = t._z, a = t._w, l = s + s, u = o + o, d = r + r, c = s * l, m = s * u, g = s * d, p = o * u, f = o * d, v = r * d, _ = a * l, b = a * u, x = a * d, M = n.x, S = n.y, C = n.z;
    return i[0] = (1 - (p + v)) * M, i[1] = (m + x) * M, i[2] = (g - b) * M, i[3] = 0, i[4] = (m - x) * S, i[5] = (1 - (c + v)) * S, i[6] = (f + _) * S, i[7] = 0, i[8] = (g + b) * C, i[9] = (f - _) * C, i[10] = (1 - (c + p)) * C, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = zn.set(i[0], i[1], i[2]).length();
    const o = zn.set(i[4], i[5], i[6]).length(), r = zn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], Ct.copy(this);
    const l = 1 / s, u = 1 / o, d = 1 / r;
    return Ct.elements[0] *= l, Ct.elements[1] *= l, Ct.elements[2] *= l, Ct.elements[4] *= u, Ct.elements[5] *= u, Ct.elements[6] *= u, Ct.elements[8] *= d, Ct.elements[9] *= d, Ct.elements[10] *= d, t.setFromRotationMatrix(Ct), n.x = s, n.y = o, n.z = r, this;
  }
  makePerspective(e, t, n, i, s, o) {
    const r = this.elements, a = 2 * s / (t - e), l = 2 * s / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i), c = -(o + s) / (o - s), m = -2 * o * s / (o - s);
    return r[0] = a, r[4] = 0, r[8] = u, r[12] = 0, r[1] = 0, r[5] = l, r[9] = d, r[13] = 0, r[2] = 0, r[6] = 0, r[10] = c, r[14] = m, r[3] = 0, r[7] = 0, r[11] = -1, r[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, o) {
    const r = this.elements, a = 1 / (t - e), l = 1 / (n - i), u = 1 / (o - s), d = (t + e) * a, c = (n + i) * l, m = (o + s) * u;
    return r[0] = 2 * a, r[4] = 0, r[8] = 0, r[12] = -d, r[1] = 0, r[5] = 2 * l, r[9] = 0, r[13] = -c, r[2] = 0, r[6] = 0, r[10] = -2 * u, r[14] = -m, r[3] = 0, r[7] = 0, r[11] = 0, r[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const zn = /* @__PURE__ */ new B(), Ct = /* @__PURE__ */ new Xe(), sa = /* @__PURE__ */ new B(0, 0, 0), ra = /* @__PURE__ */ new B(1, 1, 1), on = /* @__PURE__ */ new B(), Ei = /* @__PURE__ */ new B(), mt = /* @__PURE__ */ new B(), ur = /* @__PURE__ */ new Xe(), dr = /* @__PURE__ */ new pi();
class gi {
  constructor(e = 0, t = 0, n = 0, i = gi.DefaultOrder) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, s = i[0], o = i[4], r = i[8], a = i[1], l = i[5], u = i[9], d = i[2], c = i[6], m = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(_t(r, -1, 1)), Math.abs(r) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(c, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-_t(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(r, m), this._z = Math.atan2(a, l)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(_t(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._y = Math.atan2(-d, m), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(a, s));
        break;
      case "ZYX":
        this._y = Math.asin(-_t(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(c, m), this._z = Math.atan2(a, s)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(_t(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(r, m));
        break;
      case "XZY":
        this._z = Math.asin(-_t(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(c, l), this._y = Math.atan2(r, s)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return ur.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ur, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return dr.setFromEuler(this), this.setFromQuaternion(dr, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
  }
}
gi.DefaultOrder = "XYZ";
gi.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class bo {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let oa = 0;
const fr = /* @__PURE__ */ new B(), Bn = /* @__PURE__ */ new pi(), Ht = /* @__PURE__ */ new Xe(), Ti = /* @__PURE__ */ new B(), si = /* @__PURE__ */ new B(), aa = /* @__PURE__ */ new B(), la = /* @__PURE__ */ new pi(), pr = /* @__PURE__ */ new B(1, 0, 0), mr = /* @__PURE__ */ new B(0, 1, 0), gr = /* @__PURE__ */ new B(0, 0, 1), ca = { type: "added" }, _r = { type: "removed" };
class ot extends Jn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: oa++ }), this.uuid = fi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ot.DefaultUp.clone();
    const e = new B(), t = new gi(), n = new pi(), i = new B(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(o), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Xe()
      },
      normalMatrix: {
        value: new St()
      }
    }), this.matrix = new Xe(), this.matrixWorld = new Xe(), this.matrixAutoUpdate = ot.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new bo(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Bn.setFromAxisAngle(e, t), this.quaternion.multiply(Bn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Bn.setFromAxisAngle(e, t), this.quaternion.premultiply(Bn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(pr, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(mr, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(gr, e);
  }
  translateOnAxis(e, t) {
    return fr.copy(e).applyQuaternion(this.quaternion), this.position.add(fr.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(pr, e);
  }
  translateY(e) {
    return this.translateOnAxis(mr, e);
  }
  translateZ(e) {
    return this.translateOnAxis(gr, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(Ht.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ti.copy(e) : Ti.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), si.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ht.lookAt(si, Ti, this.up) : Ht.lookAt(Ti, si, this.up), this.quaternion.setFromRotationMatrix(Ht), i && (Ht.extractRotation(i.matrixWorld), Bn.setFromRotationMatrix(Ht), this.quaternion.premultiply(Bn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(ca)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(_r)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(_r);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Ht.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Ht.multiply(e.parent.matrixWorld)), e.applyMatrix4(Ht), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0)
        return o;
    }
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(si, e, aa), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(si, la, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let s = 0, o = i.length; s < o; s++)
        i[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function s(r, a) {
      return r[a.uuid] === void 0 && (r[a.uuid] = a.toJSON(e)), a.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const r = this.geometry.parameters;
      if (r !== void 0 && r.shapes !== void 0) {
        const a = r.shapes;
        if (Array.isArray(a))
          for (let l = 0, u = a.length; l < u; l++) {
            const d = a[l];
            s(e.shapes, d);
          }
        else
          s(e.shapes, a);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const r = [];
        for (let a = 0, l = this.material.length; a < l; a++)
          r.push(s(e.materials, this.material[a]));
        i.material = r;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let r = 0; r < this.children.length; r++)
        i.children.push(this.children[r].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let r = 0; r < this.animations.length; r++) {
        const a = this.animations[r];
        i.animations.push(s(e.animations, a));
      }
    }
    if (t) {
      const r = o(e.geometries), a = o(e.materials), l = o(e.textures), u = o(e.images), d = o(e.shapes), c = o(e.skeletons), m = o(e.animations), g = o(e.nodes);
      r.length > 0 && (n.geometries = r), a.length > 0 && (n.materials = a), l.length > 0 && (n.textures = l), u.length > 0 && (n.images = u), d.length > 0 && (n.shapes = d), c.length > 0 && (n.skeletons = c), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function o(r) {
      const a = [];
      for (const l in r) {
        const u = r[l];
        delete u.metadata, a.push(u);
      }
      return a;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
ot.DefaultUp = /* @__PURE__ */ new B(0, 1, 0);
ot.DefaultMatrixAutoUpdate = !0;
const Lt = /* @__PURE__ */ new B(), qt = /* @__PURE__ */ new B(), gs = /* @__PURE__ */ new B(), Xt = /* @__PURE__ */ new B(), Nn = /* @__PURE__ */ new B(), On = /* @__PURE__ */ new B(), vr = /* @__PURE__ */ new B(), _s = /* @__PURE__ */ new B(), vs = /* @__PURE__ */ new B(), xs = /* @__PURE__ */ new B();
class Qt {
  constructor(e = new B(), t = new B(), n = new B()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Lt.subVectors(e, t), i.cross(Lt);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    Lt.subVectors(i, t), qt.subVectors(n, t), gs.subVectors(e, t);
    const o = Lt.dot(Lt), r = Lt.dot(qt), a = Lt.dot(gs), l = qt.dot(qt), u = qt.dot(gs), d = o * l - r * r;
    if (d === 0)
      return s.set(-2, -1, -1);
    const c = 1 / d, m = (l * a - r * u) * c, g = (o * u - r * a) * c;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Xt), Xt.x >= 0 && Xt.y >= 0 && Xt.x + Xt.y <= 1;
  }
  static getUV(e, t, n, i, s, o, r, a) {
    return this.getBarycoord(e, t, n, i, Xt), a.set(0, 0), a.addScaledVector(s, Xt.x), a.addScaledVector(o, Xt.y), a.addScaledVector(r, Xt.z), a;
  }
  static isFrontFacing(e, t, n, i) {
    return Lt.subVectors(n, t), qt.subVectors(e, t), Lt.cross(qt).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Lt.subVectors(this.c, this.b), qt.subVectors(this.a, this.b), Lt.cross(qt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Qt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Qt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return Qt.getUV(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return Qt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Qt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let o, r;
    Nn.subVectors(i, n), On.subVectors(s, n), _s.subVectors(e, n);
    const a = Nn.dot(_s), l = On.dot(_s);
    if (a <= 0 && l <= 0)
      return t.copy(n);
    vs.subVectors(e, i);
    const u = Nn.dot(vs), d = On.dot(vs);
    if (u >= 0 && d <= u)
      return t.copy(i);
    const c = a * d - u * l;
    if (c <= 0 && a >= 0 && u <= 0)
      return o = a / (a - u), t.copy(n).addScaledVector(Nn, o);
    xs.subVectors(e, s);
    const m = Nn.dot(xs), g = On.dot(xs);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const p = m * l - a * g;
    if (p <= 0 && l >= 0 && g <= 0)
      return r = l / (l - g), t.copy(n).addScaledVector(On, r);
    const f = u * g - m * d;
    if (f <= 0 && d - u >= 0 && m - g >= 0)
      return vr.subVectors(s, i), r = (d - u) / (d - u + (m - g)), t.copy(i).addScaledVector(vr, r);
    const v = 1 / (f + p + c);
    return o = p * v, r = c * v, t.copy(n).addScaledVector(Nn, o).addScaledVector(On, r);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let ha = 0;
class un extends Jn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: ha++ }), this.uuid = fi(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        if (t === "shading") {
          console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === 1;
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
    function i(s) {
      const o = [];
      for (const r in s) {
        const a = s[r];
        delete a.metadata, o.push(a);
      }
      return o;
    }
    if (t) {
      const s = i(e.textures), o = i(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class $s extends un {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ae(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Ye = /* @__PURE__ */ new B(), Ai = /* @__PURE__ */ new Ce();
class Dt {
  constructor(e, t, n) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  copyColorsArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let o = e[i];
      o === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), o = new Ae()), t[n++] = o.r, t[n++] = o.g, t[n++] = o.b;
    }
    return this;
  }
  copyVector2sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let o = e[i];
      o === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), o = new Ce()), t[n++] = o.x, t[n++] = o.y;
    }
    return this;
  }
  copyVector3sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let o = e[i];
      o === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), o = new B()), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z;
    }
    return this;
  }
  copyVector4sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let o = e[i];
      o === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), o = new Ge()), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z, t[n++] = o.w;
    }
    return this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Ai.fromBufferAttribute(this, t), Ai.applyMatrix3(e), this.setXY(t, Ai.x, Ai.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Ye.fromBufferAttribute(this, t), Ye.applyMatrix3(e), this.setXYZ(t, Ye.x, Ye.y, Ye.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ye.fromBufferAttribute(this, t), Ye.applyMatrix4(e), this.setXYZ(t, Ye.x, Ye.y, Ye.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ye.fromBufferAttribute(this, t), Ye.applyNormalMatrix(e), this.setXYZ(t, Ye.x, Ye.y, Ye.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ye.fromBufferAttribute(this, t), Ye.transformDirection(e), this.setXYZ(t, Ye.x, Ye.y, Ye.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    return this.array[e * this.itemSize];
  }
  setX(e, t) {
    return this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    return this.array[e * this.itemSize + 1];
  }
  setY(e, t) {
    return this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    return this.array[e * this.itemSize + 2];
  }
  setZ(e, t) {
    return this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    return this.array[e * this.itemSize + 3];
  }
  setW(e, t) {
    return this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
}
class Mo extends Dt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class So extends Dt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class rt extends Dt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let ua = 0;
const bt = /* @__PURE__ */ new Xe(), ys = /* @__PURE__ */ new ot(), Un = /* @__PURE__ */ new B(), gt = /* @__PURE__ */ new mi(), ri = /* @__PURE__ */ new mi(), et = /* @__PURE__ */ new B();
class Et extends Jn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: ua++ }), this.uuid = fi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (go(e) ? So : Mo)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new St().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return bt.makeRotationFromQuaternion(e), this.applyMatrix4(bt), this;
  }
  rotateX(e) {
    return bt.makeRotationX(e), this.applyMatrix4(bt), this;
  }
  rotateY(e) {
    return bt.makeRotationY(e), this.applyMatrix4(bt), this;
  }
  rotateZ(e) {
    return bt.makeRotationZ(e), this.applyMatrix4(bt), this;
  }
  translate(e, t, n) {
    return bt.makeTranslation(e, t, n), this.applyMatrix4(bt), this;
  }
  scale(e, t, n) {
    return bt.makeScale(e, t, n), this.applyMatrix4(bt), this;
  }
  lookAt(e) {
    return ys.lookAt(e), ys.updateMatrix(), this.applyMatrix4(ys.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Un).negate(), this.translate(Un.x, Un.y, Un.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new rt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new mi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new B(-1 / 0, -1 / 0, -1 / 0),
        new B(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          gt.setFromBufferAttribute(s), this.morphTargetsRelative ? (et.addVectors(this.boundingBox.min, gt.min), this.boundingBox.expandByPoint(et), et.addVectors(this.boundingBox.max, gt.max), this.boundingBox.expandByPoint(et)) : (this.boundingBox.expandByPoint(gt.min), this.boundingBox.expandByPoint(gt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Zn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new B(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (gt.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const r = t[s];
          ri.setFromBufferAttribute(r), this.morphTargetsRelative ? (et.addVectors(gt.min, ri.min), gt.expandByPoint(et), et.addVectors(gt.max, ri.max), gt.expandByPoint(et)) : (gt.expandByPoint(ri.min), gt.expandByPoint(ri.max));
        }
      gt.getCenter(n);
      let i = 0;
      for (let s = 0, o = e.count; s < o; s++)
        et.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(et));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const r = t[s], a = this.morphTargetsRelative;
          for (let l = 0, u = r.count; l < u; l++)
            et.fromBufferAttribute(r, l), a && (Un.fromBufferAttribute(e, l), et.add(Un)), i = Math.max(i, n.distanceToSquared(et));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, s = t.normal.array, o = t.uv.array, r = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Dt(new Float32Array(4 * r), 4));
    const a = this.getAttribute("tangent").array, l = [], u = [];
    for (let P = 0; P < r; P++)
      l[P] = new B(), u[P] = new B();
    const d = new B(), c = new B(), m = new B(), g = new Ce(), p = new Ce(), f = new Ce(), v = new B(), _ = new B();
    function b(P, z, H) {
      d.fromArray(i, P * 3), c.fromArray(i, z * 3), m.fromArray(i, H * 3), g.fromArray(o, P * 2), p.fromArray(o, z * 2), f.fromArray(o, H * 2), c.sub(d), m.sub(d), p.sub(g), f.sub(g);
      const D = 1 / (p.x * f.y - f.x * p.y);
      !isFinite(D) || (v.copy(c).multiplyScalar(f.y).addScaledVector(m, -p.y).multiplyScalar(D), _.copy(m).multiplyScalar(p.x).addScaledVector(c, -f.x).multiplyScalar(D), l[P].add(v), l[z].add(v), l[H].add(v), u[P].add(_), u[z].add(_), u[H].add(_));
    }
    let x = this.groups;
    x.length === 0 && (x = [{
      start: 0,
      count: n.length
    }]);
    for (let P = 0, z = x.length; P < z; ++P) {
      const H = x[P], D = H.start, L = H.count;
      for (let I = D, F = D + L; I < F; I += 3)
        b(
          n[I + 0],
          n[I + 1],
          n[I + 2]
        );
    }
    const M = new B(), S = new B(), C = new B(), y = new B();
    function A(P) {
      C.fromArray(s, P * 3), y.copy(C);
      const z = l[P];
      M.copy(z), M.sub(C.multiplyScalar(C.dot(z))).normalize(), S.crossVectors(y, z);
      const D = S.dot(u[P]) < 0 ? -1 : 1;
      a[P * 4] = M.x, a[P * 4 + 1] = M.y, a[P * 4 + 2] = M.z, a[P * 4 + 3] = D;
    }
    for (let P = 0, z = x.length; P < z; ++P) {
      const H = x[P], D = H.start, L = H.count;
      for (let I = D, F = D + L; I < F; I += 3)
        A(n[I + 0]), A(n[I + 1]), A(n[I + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Dt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let c = 0, m = n.count; c < m; c++)
          n.setXYZ(c, 0, 0, 0);
      const i = new B(), s = new B(), o = new B(), r = new B(), a = new B(), l = new B(), u = new B(), d = new B();
      if (e)
        for (let c = 0, m = e.count; c < m; c += 3) {
          const g = e.getX(c + 0), p = e.getX(c + 1), f = e.getX(c + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, p), o.fromBufferAttribute(t, f), u.subVectors(o, s), d.subVectors(i, s), u.cross(d), r.fromBufferAttribute(n, g), a.fromBufferAttribute(n, p), l.fromBufferAttribute(n, f), r.add(u), a.add(u), l.add(u), n.setXYZ(g, r.x, r.y, r.z), n.setXYZ(p, a.x, a.y, a.z), n.setXYZ(f, l.x, l.y, l.z);
        }
      else
        for (let c = 0, m = t.count; c < m; c += 3)
          i.fromBufferAttribute(t, c + 0), s.fromBufferAttribute(t, c + 1), o.fromBufferAttribute(t, c + 2), u.subVectors(o, s), d.subVectors(i, s), u.cross(d), n.setXYZ(c + 0, u.x, u.y, u.z), n.setXYZ(c + 1, u.x, u.y, u.z), n.setXYZ(c + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  merge(e, t) {
    if (!(e && e.isBufferGeometry)) {
      console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
      return;
    }
    t === void 0 && (t = 0, console.warn(
      "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
    ));
    const n = this.attributes;
    for (const i in n) {
      if (e.attributes[i] === void 0)
        continue;
      const o = n[i].array, r = e.attributes[i], a = r.array, l = r.itemSize * t, u = Math.min(a.length, o.length - l);
      for (let d = 0, c = l; d < u; d++, c++)
        o[c] = a[d];
    }
    return this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      et.fromBufferAttribute(e, t), et.normalize(), e.setXYZ(t, et.x, et.y, et.z);
  }
  toNonIndexed() {
    function e(r, a) {
      const l = r.array, u = r.itemSize, d = r.normalized, c = new l.constructor(a.length * u);
      let m = 0, g = 0;
      for (let p = 0, f = a.length; p < f; p++) {
        r.isInterleavedBufferAttribute ? m = a[p] * r.data.stride + r.offset : m = a[p] * u;
        for (let v = 0; v < u; v++)
          c[g++] = l[m++];
      }
      return new Dt(c, u, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Et(), n = this.index.array, i = this.attributes;
    for (const r in i) {
      const a = i[r], l = e(a, n);
      t.setAttribute(r, l);
    }
    const s = this.morphAttributes;
    for (const r in s) {
      const a = [], l = s[r];
      for (let u = 0, d = l.length; u < d; u++) {
        const c = l[u], m = e(c, n);
        a.push(m);
      }
      t.morphAttributes[r] = a;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let r = 0, a = o.length; r < a; r++) {
      const l = o[r];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const a = this.parameters;
      for (const l in a)
        a[l] !== void 0 && (e[l] = a[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const a in n) {
      const l = n[a];
      e.data.attributes[a] = l.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const a in this.morphAttributes) {
      const l = this.morphAttributes[a], u = [];
      for (let d = 0, c = l.length; d < c; d++) {
        const m = l[d];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && (i[a] = u, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const r = this.boundingSphere;
    return r !== null && (e.data.boundingSphere = {
      center: r.center.toArray(),
      radius: r.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const u = i[l];
      this.setAttribute(l, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const u = [], d = s[l];
      for (let c = 0, m = d.length; c < m; c++)
        u.push(d[c].clone(t));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, u = o.length; l < u; l++) {
      const d = o[l];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const r = e.boundingBox;
    r !== null && (this.boundingBox = r.clone());
    const a = e.boundingSphere;
    return a !== null && (this.boundingSphere = a.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const xr = /* @__PURE__ */ new Xe(), Gn = /* @__PURE__ */ new wo(), ws = /* @__PURE__ */ new Zn(), an = /* @__PURE__ */ new B(), ln = /* @__PURE__ */ new B(), cn = /* @__PURE__ */ new B(), bs = /* @__PURE__ */ new B(), Ms = /* @__PURE__ */ new B(), Ss = /* @__PURE__ */ new B(), Ci = /* @__PURE__ */ new B(), Li = /* @__PURE__ */ new B(), Ri = /* @__PURE__ */ new B(), Fi = /* @__PURE__ */ new Ce(), Di = /* @__PURE__ */ new Ce(), Pi = /* @__PURE__ */ new Ce(), Es = /* @__PURE__ */ new B(), Ii = /* @__PURE__ */ new B();
class ke extends ot {
  constructor(e = new Et(), t = new $s()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const r = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = s;
        }
      }
    }
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), ws.copy(n.boundingSphere), ws.applyMatrix4(s), e.ray.intersectsSphere(ws) === !1) || (xr.copy(s).invert(), Gn.copy(e.ray).applyMatrix4(xr), n.boundingBox !== null && Gn.intersectsBox(n.boundingBox) === !1))
      return;
    let o;
    const r = n.index, a = n.attributes.position, l = n.morphAttributes.position, u = n.morphTargetsRelative, d = n.attributes.uv, c = n.attributes.uv2, m = n.groups, g = n.drawRange;
    if (r !== null)
      if (Array.isArray(i))
        for (let p = 0, f = m.length; p < f; p++) {
          const v = m[p], _ = i[v.materialIndex], b = Math.max(v.start, g.start), x = Math.min(r.count, Math.min(v.start + v.count, g.start + g.count));
          for (let M = b, S = x; M < S; M += 3) {
            const C = r.getX(M), y = r.getX(M + 1), A = r.getX(M + 2);
            o = zi(this, _, e, Gn, a, l, u, d, c, C, y, A), o && (o.faceIndex = Math.floor(M / 3), o.face.materialIndex = v.materialIndex, t.push(o));
          }
        }
      else {
        const p = Math.max(0, g.start), f = Math.min(r.count, g.start + g.count);
        for (let v = p, _ = f; v < _; v += 3) {
          const b = r.getX(v), x = r.getX(v + 1), M = r.getX(v + 2);
          o = zi(this, i, e, Gn, a, l, u, d, c, b, x, M), o && (o.faceIndex = Math.floor(v / 3), t.push(o));
        }
      }
    else if (a !== void 0)
      if (Array.isArray(i))
        for (let p = 0, f = m.length; p < f; p++) {
          const v = m[p], _ = i[v.materialIndex], b = Math.max(v.start, g.start), x = Math.min(a.count, Math.min(v.start + v.count, g.start + g.count));
          for (let M = b, S = x; M < S; M += 3) {
            const C = M, y = M + 1, A = M + 2;
            o = zi(this, _, e, Gn, a, l, u, d, c, C, y, A), o && (o.faceIndex = Math.floor(M / 3), o.face.materialIndex = v.materialIndex, t.push(o));
          }
        }
      else {
        const p = Math.max(0, g.start), f = Math.min(a.count, g.start + g.count);
        for (let v = p, _ = f; v < _; v += 3) {
          const b = v, x = v + 1, M = v + 2;
          o = zi(this, i, e, Gn, a, l, u, d, c, b, x, M), o && (o.faceIndex = Math.floor(v / 3), t.push(o));
        }
      }
  }
}
function da(h, e, t, n, i, s, o, r) {
  let a;
  if (e.side === 1 ? a = n.intersectTriangle(o, s, i, !0, r) : a = n.intersectTriangle(i, s, o, e.side !== 2, r), a === null)
    return null;
  Ii.copy(r), Ii.applyMatrix4(h.matrixWorld);
  const l = t.ray.origin.distanceTo(Ii);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Ii.clone(),
    object: h
  };
}
function zi(h, e, t, n, i, s, o, r, a, l, u, d) {
  an.fromBufferAttribute(i, l), ln.fromBufferAttribute(i, u), cn.fromBufferAttribute(i, d);
  const c = h.morphTargetInfluences;
  if (s && c) {
    Ci.set(0, 0, 0), Li.set(0, 0, 0), Ri.set(0, 0, 0);
    for (let g = 0, p = s.length; g < p; g++) {
      const f = c[g], v = s[g];
      f !== 0 && (bs.fromBufferAttribute(v, l), Ms.fromBufferAttribute(v, u), Ss.fromBufferAttribute(v, d), o ? (Ci.addScaledVector(bs, f), Li.addScaledVector(Ms, f), Ri.addScaledVector(Ss, f)) : (Ci.addScaledVector(bs.sub(an), f), Li.addScaledVector(Ms.sub(ln), f), Ri.addScaledVector(Ss.sub(cn), f)));
    }
    an.add(Ci), ln.add(Li), cn.add(Ri);
  }
  h.isSkinnedMesh && (h.boneTransform(l, an), h.boneTransform(u, ln), h.boneTransform(d, cn));
  const m = da(h, e, t, n, an, ln, cn, Es);
  if (m) {
    r && (Fi.fromBufferAttribute(r, l), Di.fromBufferAttribute(r, u), Pi.fromBufferAttribute(r, d), m.uv = Qt.getUV(Es, an, ln, cn, Fi, Di, Pi, new Ce())), a && (Fi.fromBufferAttribute(a, l), Di.fromBufferAttribute(a, u), Pi.fromBufferAttribute(a, d), m.uv2 = Qt.getUV(Es, an, ln, cn, Fi, Di, Pi, new Ce()));
    const g = {
      a: l,
      b: u,
      c: d,
      normal: new B(),
      materialIndex: 0
    };
    Qt.getNormal(an, ln, cn, g.normal), m.face = g;
  }
  return m;
}
class Qn extends Et {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: o
    };
    const r = this;
    i = Math.floor(i), s = Math.floor(s), o = Math.floor(o);
    const a = [], l = [], u = [], d = [];
    let c = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, s, 0), g("z", "y", "x", 1, -1, n, t, -e, o, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, o, 2), g("x", "z", "y", 1, -1, e, n, -t, i, o, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(a), this.setAttribute("position", new rt(l, 3)), this.setAttribute("normal", new rt(u, 3)), this.setAttribute("uv", new rt(d, 2));
    function g(p, f, v, _, b, x, M, S, C, y, A) {
      const P = x / C, z = M / y, H = x / 2, D = M / 2, L = S / 2, I = C + 1, F = y + 1;
      let q = 0, U = 0;
      const O = new B();
      for (let k = 0; k < F; k++) {
        const J = k * z - D;
        for (let V = 0; V < I; V++) {
          const ee = V * P - H;
          O[p] = ee * _, O[f] = J * b, O[v] = L, l.push(O.x, O.y, O.z), O[p] = 0, O[f] = 0, O[v] = S > 0 ? 1 : -1, u.push(O.x, O.y, O.z), d.push(V / C), d.push(1 - k / y), q += 1;
        }
      }
      for (let k = 0; k < y; k++)
        for (let J = 0; J < C; J++) {
          const V = c + J + I * k, ee = c + J + I * (k + 1), ce = c + (J + 1) + I * (k + 1), ge = c + (J + 1) + I * k;
          a.push(V, ee, ge), a.push(ee, ce, ge), U += 6;
        }
      r.addGroup(m, U, A), m += U, c += q;
    }
  }
  static fromJSON(e) {
    return new Qn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Kn(h) {
  const e = {};
  for (const t in h) {
    e[t] = {};
    for (const n in h[t]) {
      const i = h[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function st(h) {
  const e = {};
  for (let t = 0; t < h.length; t++) {
    const n = Kn(h[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function fa(h) {
  const e = [];
  for (let t = 0; t < h.length; t++)
    e.push(h[t].clone());
  return e;
}
const pa = { clone: Kn, merge: st };
var ma = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, ga = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class An extends un {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = ma, this.fragmentShader = ga, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && (e.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e));
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Kn(e.uniforms), this.uniformsGroups = fa(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture ? t.uniforms[i] = {
        type: "t",
        value: o.toJSON(e).uuid
      } : o && o.isColor ? t.uniforms[i] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: o.toArray()
      } : t.uniforms[i] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Eo extends ot {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Xe(), this.projectionMatrix = new Xe(), this.projectionMatrixInverse = new Xe();
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class dt extends Eo {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Ws * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(ss * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Ws * 2 * Math.atan(
      Math.tan(ss * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, s, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(ss * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const a = o.fullWidth, l = o.fullHeight;
      s += o.offsetX * i / a, t -= o.offsetY * n / l, i *= o.width / a, n *= o.height / l;
    }
    const r = this.filmOffset;
    r !== 0 && (s += e * r / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const kn = 90, Wn = 1;
class _a extends ot {
  constructor(e, t, n) {
    if (super(), this.type = "CubeCamera", n.isWebGLCubeRenderTarget !== !0) {
      console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
      return;
    }
    this.renderTarget = n;
    const i = new dt(kn, Wn, e, t);
    i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new B(1, 0, 0)), this.add(i);
    const s = new dt(kn, Wn, e, t);
    s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new B(-1, 0, 0)), this.add(s);
    const o = new dt(kn, Wn, e, t);
    o.layers = this.layers, o.up.set(0, 0, 1), o.lookAt(new B(0, 1, 0)), this.add(o);
    const r = new dt(kn, Wn, e, t);
    r.layers = this.layers, r.up.set(0, 0, -1), r.lookAt(new B(0, -1, 0)), this.add(r);
    const a = new dt(kn, Wn, e, t);
    a.layers = this.layers, a.up.set(0, -1, 0), a.lookAt(new B(0, 0, 1)), this.add(a);
    const l = new dt(kn, Wn, e, t);
    l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new B(0, 0, -1)), this.add(l);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, s, o, r, a, l] = this.children, u = e.getRenderTarget(), d = e.toneMapping, c = e.xr.enabled;
    e.toneMapping = 0, e.xr.enabled = !1;
    const m = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, r), e.setRenderTarget(n, 4), e.render(t, a), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(u), e.toneMapping = d, e.xr.enabled = c, n.texture.needsPMREMUpdate = !0;
  }
}
class To extends vt {
  constructor(e, t, n, i, s, o, r, a, l, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : 301, super(e, t, n, i, s, o, r, a, l, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class va extends Tn {
  constructor(e, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new To(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    }, i = new Qn(5, 5, 5), s = new An({
      name: "CubemapFromEquirect",
      uniforms: Kn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const o = new ke(i, s), r = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new _a(1, 10, this).update(e, o), t.minFilter = r, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const Ts = /* @__PURE__ */ new B(), xa = /* @__PURE__ */ new B(), ya = /* @__PURE__ */ new St();
class _n {
  constructor(e = new B(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Ts.subVectors(n, t).cross(xa.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(Ts), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || ya.getNormalMatrix(e), i = this.coplanarPoint(Ts).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Vn = /* @__PURE__ */ new Zn(), Bi = /* @__PURE__ */ new B();
class Zs {
  constructor(e = new _n(), t = new _n(), n = new _n(), i = new _n(), s = new _n(), o = new _n()) {
    this.planes = [e, t, n, i, s, o];
  }
  set(e, t, n, i, s, o) {
    const r = this.planes;
    return r[0].copy(e), r[1].copy(t), r[2].copy(n), r[3].copy(i), r[4].copy(s), r[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes, n = e.elements, i = n[0], s = n[1], o = n[2], r = n[3], a = n[4], l = n[5], u = n[6], d = n[7], c = n[8], m = n[9], g = n[10], p = n[11], f = n[12], v = n[13], _ = n[14], b = n[15];
    return t[0].setComponents(r - i, d - a, p - c, b - f).normalize(), t[1].setComponents(r + i, d + a, p + c, b + f).normalize(), t[2].setComponents(r + s, d + l, p + m, b + v).normalize(), t[3].setComponents(r - s, d - l, p - m, b - v).normalize(), t[4].setComponents(r - o, d - u, p - g, b - _).normalize(), t[5].setComponents(r + o, d + u, p + g, b + _).normalize(), this;
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Vn);
  }
  intersectsSprite(e) {
    return Vn.center.set(0, 0, 0), Vn.radius = 0.7071067811865476, Vn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Vn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Bi.x = i.normal.x > 0 ? e.max.x : e.min.x, Bi.y = i.normal.y > 0 ? e.max.y : e.min.y, Bi.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Bi) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Ao() {
  let h = null, e = !1, t = null, n = null;
  function i(s, o) {
    t(s, o), n = h.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = h.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      h.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      h = s;
    }
  };
}
function wa(h, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, u) {
    const d = l.array, c = l.usage, m = h.createBuffer();
    h.bindBuffer(u, m), h.bufferData(u, d, c), l.onUploadCallback();
    let g;
    if (d instanceof Float32Array)
      g = 5126;
    else if (d instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          g = 5131;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = 5123;
    else if (d instanceof Int16Array)
      g = 5122;
    else if (d instanceof Uint32Array)
      g = 5125;
    else if (d instanceof Int32Array)
      g = 5124;
    else if (d instanceof Int8Array)
      g = 5120;
    else if (d instanceof Uint8Array)
      g = 5121;
    else if (d instanceof Uint8ClampedArray)
      g = 5121;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + d);
    return {
      buffer: m,
      type: g,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function s(l, u, d) {
    const c = u.array, m = u.updateRange;
    h.bindBuffer(d, l), m.count === -1 ? h.bufferSubData(d, 0, c) : (t ? h.bufferSubData(
      d,
      m.offset * c.BYTES_PER_ELEMENT,
      c,
      m.offset,
      m.count
    ) : h.bufferSubData(
      d,
      m.offset * c.BYTES_PER_ELEMENT,
      c.subarray(m.offset, m.offset + m.count)
    ), m.count = -1);
  }
  function o(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function r(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    u && (h.deleteBuffer(u.buffer), n.delete(l));
  }
  function a(l, u) {
    if (l.isGLBufferAttribute) {
      const c = n.get(l);
      (!c || c.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const d = n.get(l);
    d === void 0 ? n.set(l, i(l, u)) : d.version < l.version && (s(d.buffer, l, u), d.version = l.version);
  }
  return {
    get: o,
    remove: r,
    update: a
  };
}
class Ji extends Et {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, o = t / 2, r = Math.floor(n), a = Math.floor(i), l = r + 1, u = a + 1, d = e / r, c = t / a, m = [], g = [], p = [], f = [];
    for (let v = 0; v < u; v++) {
      const _ = v * c - o;
      for (let b = 0; b < l; b++) {
        const x = b * d - s;
        g.push(x, -_, 0), p.push(0, 0, 1), f.push(b / r), f.push(1 - v / a);
      }
    }
    for (let v = 0; v < a; v++)
      for (let _ = 0; _ < r; _++) {
        const b = _ + l * v, x = _ + l * (v + 1), M = _ + 1 + l * (v + 1), S = _ + 1 + l * v;
        m.push(b, x, S), m.push(x, M, S);
      }
    this.setIndex(m), this.setAttribute("position", new rt(g, 3)), this.setAttribute("normal", new rt(p, 3)), this.setAttribute("uv", new rt(f, 2));
  }
  static fromJSON(e) {
    return new Ji(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var ba = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, Ma = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Sa = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Ea = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Ta = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Aa = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Ca = "vec3 transformed = vec3( position );", La = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Ra = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`, Fa = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Da = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Pa = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, Ia = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, za = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Ba = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Na = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Oa = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Ua = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Ga = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, ka = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, Wa = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Va = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Ha = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, qa = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, Xa = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, ja = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Ya = "gl_FragColor = linearToOutputTexel( gl_FragColor );", $a = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Za = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Ka = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Ja = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Qa = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, el = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, tl = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, nl = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, il = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, sl = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, rl = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`, ol = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, al = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, ll = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`, cl = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, hl = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, ul = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, dl = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`, fl = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, pl = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`, ml = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, gl = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, _l = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, vl = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, xl = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, yl = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, wl = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, bl = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Ml = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Sl = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, El = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Tl = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Al = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Cl = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Ll = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Rl = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Fl = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Dl = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Pl = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, Il = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, zl = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Bl = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Nl = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ol = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Ul = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, Gl = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, kl = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, Wl = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, Vl = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Hl = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, ql = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, Xl = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, jl = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Yl = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, $l = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Zl = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Kl = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Jl = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, Ql = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, ec = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`, tc = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, nc = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, ic = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, sc = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, rc = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, oc = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, ac = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, lc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, cc = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, hc = `#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`, uc = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, dc = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, fc = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, pc = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, mc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, gc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, _c = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, vc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const xc = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, yc = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, wc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, bc = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Mc = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Sc = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, Ec = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Tc = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Ac = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Cc = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Lc = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Rc = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Fc = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Dc = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Pc = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Ic = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, zc = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Bc = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Nc = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Oc = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Uc = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Gc = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, kc = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Wc = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Vc = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Hc = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, qc = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Xc = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, jc = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Yc = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, $c = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Zc = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Te = {
  alphamap_fragment: ba,
  alphamap_pars_fragment: Ma,
  alphatest_fragment: Sa,
  alphatest_pars_fragment: Ea,
  aomap_fragment: Ta,
  aomap_pars_fragment: Aa,
  begin_vertex: Ca,
  beginnormal_vertex: La,
  bsdfs: Ra,
  iridescence_fragment: Fa,
  bumpmap_pars_fragment: Da,
  clipping_planes_fragment: Pa,
  clipping_planes_pars_fragment: Ia,
  clipping_planes_pars_vertex: za,
  clipping_planes_vertex: Ba,
  color_fragment: Na,
  color_pars_fragment: Oa,
  color_pars_vertex: Ua,
  color_vertex: Ga,
  common: ka,
  cube_uv_reflection_fragment: Wa,
  defaultnormal_vertex: Va,
  displacementmap_pars_vertex: Ha,
  displacementmap_vertex: qa,
  emissivemap_fragment: Xa,
  emissivemap_pars_fragment: ja,
  encodings_fragment: Ya,
  encodings_pars_fragment: $a,
  envmap_fragment: Za,
  envmap_common_pars_fragment: Ka,
  envmap_pars_fragment: Ja,
  envmap_pars_vertex: Qa,
  envmap_physical_pars_fragment: hl,
  envmap_vertex: el,
  fog_vertex: tl,
  fog_pars_vertex: nl,
  fog_fragment: il,
  fog_pars_fragment: sl,
  gradientmap_pars_fragment: rl,
  lightmap_fragment: ol,
  lightmap_pars_fragment: al,
  lights_lambert_vertex: ll,
  lights_pars_begin: cl,
  lights_toon_fragment: ul,
  lights_toon_pars_fragment: dl,
  lights_phong_fragment: fl,
  lights_phong_pars_fragment: pl,
  lights_physical_fragment: ml,
  lights_physical_pars_fragment: gl,
  lights_fragment_begin: _l,
  lights_fragment_maps: vl,
  lights_fragment_end: xl,
  logdepthbuf_fragment: yl,
  logdepthbuf_pars_fragment: wl,
  logdepthbuf_pars_vertex: bl,
  logdepthbuf_vertex: Ml,
  map_fragment: Sl,
  map_pars_fragment: El,
  map_particle_fragment: Tl,
  map_particle_pars_fragment: Al,
  metalnessmap_fragment: Cl,
  metalnessmap_pars_fragment: Ll,
  morphcolor_vertex: Rl,
  morphnormal_vertex: Fl,
  morphtarget_pars_vertex: Dl,
  morphtarget_vertex: Pl,
  normal_fragment_begin: Il,
  normal_fragment_maps: zl,
  normal_pars_fragment: Bl,
  normal_pars_vertex: Nl,
  normal_vertex: Ol,
  normalmap_pars_fragment: Ul,
  clearcoat_normal_fragment_begin: Gl,
  clearcoat_normal_fragment_maps: kl,
  clearcoat_pars_fragment: Wl,
  iridescence_pars_fragment: Vl,
  output_fragment: Hl,
  packing: ql,
  premultiplied_alpha_fragment: Xl,
  project_vertex: jl,
  dithering_fragment: Yl,
  dithering_pars_fragment: $l,
  roughnessmap_fragment: Zl,
  roughnessmap_pars_fragment: Kl,
  shadowmap_pars_fragment: Jl,
  shadowmap_pars_vertex: Ql,
  shadowmap_vertex: ec,
  shadowmask_pars_fragment: tc,
  skinbase_vertex: nc,
  skinning_pars_vertex: ic,
  skinning_vertex: sc,
  skinnormal_vertex: rc,
  specularmap_fragment: oc,
  specularmap_pars_fragment: ac,
  tonemapping_fragment: lc,
  tonemapping_pars_fragment: cc,
  transmission_fragment: hc,
  transmission_pars_fragment: uc,
  uv_pars_fragment: dc,
  uv_pars_vertex: fc,
  uv_vertex: pc,
  uv2_pars_fragment: mc,
  uv2_pars_vertex: gc,
  uv2_vertex: _c,
  worldpos_vertex: vc,
  background_vert: xc,
  background_frag: yc,
  cube_vert: wc,
  cube_frag: bc,
  depth_vert: Mc,
  depth_frag: Sc,
  distanceRGBA_vert: Ec,
  distanceRGBA_frag: Tc,
  equirect_vert: Ac,
  equirect_frag: Cc,
  linedashed_vert: Lc,
  linedashed_frag: Rc,
  meshbasic_vert: Fc,
  meshbasic_frag: Dc,
  meshlambert_vert: Pc,
  meshlambert_frag: Ic,
  meshmatcap_vert: zc,
  meshmatcap_frag: Bc,
  meshnormal_vert: Nc,
  meshnormal_frag: Oc,
  meshphong_vert: Uc,
  meshphong_frag: Gc,
  meshphysical_vert: kc,
  meshphysical_frag: Wc,
  meshtoon_vert: Vc,
  meshtoon_frag: Hc,
  points_vert: qc,
  points_frag: Xc,
  shadow_vert: jc,
  shadow_frag: Yc,
  sprite_vert: $c,
  sprite_frag: Zc
}, ne = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ae(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: /* @__PURE__ */ new St() },
    uv2Transform: { value: /* @__PURE__ */ new St() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    ior: { value: 1.5 },
    refractionRatio: { value: 0.98 }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: /* @__PURE__ */ new Ce(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ae(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotShadowMap: { value: [] },
    spotShadowMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Ae(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new St() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ae(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Ce(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new St() }
  }
}, Ut = {
  basic: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.fog
    ]),
    vertexShader: Te.meshbasic_vert,
    fragmentShader: Te.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ae(0) }
      }
    ]),
    vertexShader: Te.meshlambert_vert,
    fragmentShader: Te.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ae(0) },
        specular: { value: /* @__PURE__ */ new Ae(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Te.meshphong_vert,
    fragmentShader: Te.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.roughnessmap,
      ne.metalnessmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ae(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Te.meshphysical_vert,
    fragmentShader: Te.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.gradientmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ae(0) }
      }
    ]),
    vertexShader: Te.meshtoon_vert,
    fragmentShader: Te.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Te.meshmatcap_vert,
    fragmentShader: Te.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ st([
      ne.points,
      ne.fog
    ]),
    vertexShader: Te.points_vert,
    fragmentShader: Te.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Te.linedashed_vert,
    fragmentShader: Te.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.displacementmap
    ]),
    vertexShader: Te.depth_vert,
    fragmentShader: Te.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Te.meshnormal_vert,
    fragmentShader: Te.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ st([
      ne.sprite,
      ne.fog
    ]),
    vertexShader: Te.sprite_vert,
    fragmentShader: Te.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new St() },
      t2D: { value: null }
    },
    vertexShader: Te.background_vert,
    fragmentShader: Te.background_frag
  },
  cube: {
    uniforms: /* @__PURE__ */ st([
      ne.envmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Te.cube_vert,
    fragmentShader: Te.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Te.equirect_vert,
    fragmentShader: Te.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new B() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Te.distanceRGBA_vert,
    fragmentShader: Te.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ st([
      ne.lights,
      ne.fog,
      {
        color: { value: /* @__PURE__ */ new Ae(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Te.shadow_vert,
    fragmentShader: Te.shadow_frag
  }
};
Ut.physical = {
  uniforms: /* @__PURE__ */ st([
    Ut.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Ce(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ae(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Ce() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ae(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: /* @__PURE__ */ new Ae(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: Te.meshphysical_vert,
  fragmentShader: Te.meshphysical_frag
};
function Kc(h, e, t, n, i, s) {
  const o = new Ae(0);
  let r = i === !0 ? 0 : 1, a, l, u = null, d = 0, c = null;
  function m(p, f) {
    let v = !1, _ = f.isScene === !0 ? f.background : null;
    _ && _.isTexture && (_ = e.get(_));
    const b = h.xr, x = b.getSession && b.getSession();
    x && x.environmentBlendMode === "additive" && (_ = null), _ === null ? g(o, r) : _ && _.isColor && (g(_, 1), v = !0), (h.autoClear || v) && h.clear(h.autoClearColor, h.autoClearDepth, h.autoClearStencil), _ && (_.isCubeTexture || _.mapping === 306) ? (l === void 0 && (l = new ke(
      new Qn(1, 1, 1),
      new An({
        name: "BackgroundCubeMaterial",
        uniforms: Kn(Ut.cube.uniforms),
        vertexShader: Ut.cube.vertexShader,
        fragmentShader: Ut.cube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(M, S, C) {
      this.matrixWorld.copyPosition(C.matrixWorld);
    }, Object.defineProperty(l.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), n.update(l)), l.material.uniforms.envMap.value = _, l.material.uniforms.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, (u !== _ || d !== _.version || c !== h.toneMapping) && (l.material.needsUpdate = !0, u = _, d = _.version, c = h.toneMapping), l.layers.enableAll(), p.unshift(l, l.geometry, l.material, 0, 0, null)) : _ && _.isTexture && (a === void 0 && (a = new ke(
      new Ji(2, 2),
      new An({
        name: "BackgroundMaterial",
        uniforms: Kn(Ut.background.uniforms),
        vertexShader: Ut.background.vertexShader,
        fragmentShader: Ut.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), a.geometry.deleteAttribute("normal"), Object.defineProperty(a.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), n.update(a)), a.material.uniforms.t2D.value = _, _.matrixAutoUpdate === !0 && _.updateMatrix(), a.material.uniforms.uvTransform.value.copy(_.matrix), (u !== _ || d !== _.version || c !== h.toneMapping) && (a.material.needsUpdate = !0, u = _, d = _.version, c = h.toneMapping), a.layers.enableAll(), p.unshift(a, a.geometry, a.material, 0, 0, null));
  }
  function g(p, f) {
    t.buffers.color.setClear(p.r, p.g, p.b, f, s);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(p, f = 1) {
      o.set(p), r = f, g(o, r);
    },
    getClearAlpha: function() {
      return r;
    },
    setClearAlpha: function(p) {
      r = p, g(o, r);
    },
    render: m
  };
}
function Jc(h, e, t, n) {
  const i = h.getParameter(34921), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, r = {}, a = f(null);
  let l = a, u = !1;
  function d(L, I, F, q, U) {
    let O = !1;
    if (o) {
      const k = p(q, F, I);
      l !== k && (l = k, m(l.object)), O = v(L, q, F, U), O && _(L, q, F, U);
    } else {
      const k = I.wireframe === !0;
      (l.geometry !== q.id || l.program !== F.id || l.wireframe !== k) && (l.geometry = q.id, l.program = F.id, l.wireframe = k, O = !0);
    }
    U !== null && t.update(U, 34963), (O || u) && (u = !1, y(L, I, F, q), U !== null && h.bindBuffer(34963, t.get(U).buffer));
  }
  function c() {
    return n.isWebGL2 ? h.createVertexArray() : s.createVertexArrayOES();
  }
  function m(L) {
    return n.isWebGL2 ? h.bindVertexArray(L) : s.bindVertexArrayOES(L);
  }
  function g(L) {
    return n.isWebGL2 ? h.deleteVertexArray(L) : s.deleteVertexArrayOES(L);
  }
  function p(L, I, F) {
    const q = F.wireframe === !0;
    let U = r[L.id];
    U === void 0 && (U = {}, r[L.id] = U);
    let O = U[I.id];
    O === void 0 && (O = {}, U[I.id] = O);
    let k = O[q];
    return k === void 0 && (k = f(c()), O[q] = k), k;
  }
  function f(L) {
    const I = [], F = [], q = [];
    for (let U = 0; U < i; U++)
      I[U] = 0, F[U] = 0, q[U] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: I,
      enabledAttributes: F,
      attributeDivisors: q,
      object: L,
      attributes: {},
      index: null
    };
  }
  function v(L, I, F, q) {
    const U = l.attributes, O = I.attributes;
    let k = 0;
    const J = F.getAttributes();
    for (const V in J)
      if (J[V].location >= 0) {
        const ce = U[V];
        let ge = O[V];
        if (ge === void 0 && (V === "instanceMatrix" && L.instanceMatrix && (ge = L.instanceMatrix), V === "instanceColor" && L.instanceColor && (ge = L.instanceColor)), ce === void 0 || ce.attribute !== ge || ge && ce.data !== ge.data)
          return !0;
        k++;
      }
    return l.attributesNum !== k || l.index !== q;
  }
  function _(L, I, F, q) {
    const U = {}, O = I.attributes;
    let k = 0;
    const J = F.getAttributes();
    for (const V in J)
      if (J[V].location >= 0) {
        let ce = O[V];
        ce === void 0 && (V === "instanceMatrix" && L.instanceMatrix && (ce = L.instanceMatrix), V === "instanceColor" && L.instanceColor && (ce = L.instanceColor));
        const ge = {};
        ge.attribute = ce, ce && ce.data && (ge.data = ce.data), U[V] = ge, k++;
      }
    l.attributes = U, l.attributesNum = k, l.index = q;
  }
  function b() {
    const L = l.newAttributes;
    for (let I = 0, F = L.length; I < F; I++)
      L[I] = 0;
  }
  function x(L) {
    M(L, 0);
  }
  function M(L, I) {
    const F = l.newAttributes, q = l.enabledAttributes, U = l.attributeDivisors;
    F[L] = 1, q[L] === 0 && (h.enableVertexAttribArray(L), q[L] = 1), U[L] !== I && ((n.isWebGL2 ? h : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](L, I), U[L] = I);
  }
  function S() {
    const L = l.newAttributes, I = l.enabledAttributes;
    for (let F = 0, q = I.length; F < q; F++)
      I[F] !== L[F] && (h.disableVertexAttribArray(F), I[F] = 0);
  }
  function C(L, I, F, q, U, O) {
    n.isWebGL2 === !0 && (F === 5124 || F === 5125) ? h.vertexAttribIPointer(L, I, F, U, O) : h.vertexAttribPointer(L, I, F, q, U, O);
  }
  function y(L, I, F, q) {
    if (n.isWebGL2 === !1 && (L.isInstancedMesh || q.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    b();
    const U = q.attributes, O = F.getAttributes(), k = I.defaultAttributeValues;
    for (const J in O) {
      const V = O[J];
      if (V.location >= 0) {
        let ee = U[J];
        if (ee === void 0 && (J === "instanceMatrix" && L.instanceMatrix && (ee = L.instanceMatrix), J === "instanceColor" && L.instanceColor && (ee = L.instanceColor)), ee !== void 0) {
          const ce = ee.normalized, ge = ee.itemSize, Z = t.get(ee);
          if (Z === void 0)
            continue;
          const De = Z.buffer, ve = Z.type, xe = Z.bytesPerElement;
          if (ee.isInterleavedBufferAttribute) {
            const ue = ee.data, Oe = ue.stride, Ee = ee.offset;
            if (ue.isInstancedInterleavedBuffer) {
              for (let me = 0; me < V.locationSize; me++)
                M(V.location + me, ue.meshPerAttribute);
              L.isInstancedMesh !== !0 && q._maxInstanceCount === void 0 && (q._maxInstanceCount = ue.meshPerAttribute * ue.count);
            } else
              for (let me = 0; me < V.locationSize; me++)
                x(V.location + me);
            h.bindBuffer(34962, De);
            for (let me = 0; me < V.locationSize; me++)
              C(
                V.location + me,
                ge / V.locationSize,
                ve,
                ce,
                Oe * xe,
                (Ee + ge / V.locationSize * me) * xe
              );
          } else {
            if (ee.isInstancedBufferAttribute) {
              for (let ue = 0; ue < V.locationSize; ue++)
                M(V.location + ue, ee.meshPerAttribute);
              L.isInstancedMesh !== !0 && q._maxInstanceCount === void 0 && (q._maxInstanceCount = ee.meshPerAttribute * ee.count);
            } else
              for (let ue = 0; ue < V.locationSize; ue++)
                x(V.location + ue);
            h.bindBuffer(34962, De);
            for (let ue = 0; ue < V.locationSize; ue++)
              C(
                V.location + ue,
                ge / V.locationSize,
                ve,
                ce,
                ge * xe,
                ge / V.locationSize * ue * xe
              );
          }
        } else if (k !== void 0) {
          const ce = k[J];
          if (ce !== void 0)
            switch (ce.length) {
              case 2:
                h.vertexAttrib2fv(V.location, ce);
                break;
              case 3:
                h.vertexAttrib3fv(V.location, ce);
                break;
              case 4:
                h.vertexAttrib4fv(V.location, ce);
                break;
              default:
                h.vertexAttrib1fv(V.location, ce);
            }
        }
      }
    }
    S();
  }
  function A() {
    H();
    for (const L in r) {
      const I = r[L];
      for (const F in I) {
        const q = I[F];
        for (const U in q)
          g(q[U].object), delete q[U];
        delete I[F];
      }
      delete r[L];
    }
  }
  function P(L) {
    if (r[L.id] === void 0)
      return;
    const I = r[L.id];
    for (const F in I) {
      const q = I[F];
      for (const U in q)
        g(q[U].object), delete q[U];
      delete I[F];
    }
    delete r[L.id];
  }
  function z(L) {
    for (const I in r) {
      const F = r[I];
      if (F[L.id] === void 0)
        continue;
      const q = F[L.id];
      for (const U in q)
        g(q[U].object), delete q[U];
      delete F[L.id];
    }
  }
  function H() {
    D(), u = !0, l !== a && (l = a, m(l.object));
  }
  function D() {
    a.geometry = null, a.program = null, a.wireframe = !1;
  }
  return {
    setup: d,
    reset: H,
    resetDefaultState: D,
    dispose: A,
    releaseStatesOfGeometry: P,
    releaseStatesOfProgram: z,
    initAttributes: b,
    enableAttribute: x,
    disableUnusedAttributes: S
  };
}
function Qc(h, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(l) {
    s = l;
  }
  function r(l, u) {
    h.drawArrays(s, l, u), t.update(u, s, 1);
  }
  function a(l, u, d) {
    if (d === 0)
      return;
    let c, m;
    if (i)
      c = h, m = "drawArraysInstanced";
    else if (c = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", c === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    c[m](s, l, u, d), t.update(u, s, d);
  }
  this.setMode = o, this.render = r, this.renderInstances = a;
}
function eh(h, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const C = e.get("EXT_texture_filter_anisotropic");
      n = h.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(C) {
    if (C === "highp") {
      if (h.getShaderPrecisionFormat(35633, 36338).precision > 0 && h.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      C = "mediump";
    }
    return C === "mediump" && h.getShaderPrecisionFormat(35633, 36337).precision > 0 && h.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && h instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && h instanceof WebGL2ComputeRenderingContext;
  let r = t.precision !== void 0 ? t.precision : "highp";
  const a = s(r);
  a !== r && (console.warn("THREE.WebGLRenderer:", r, "not supported, using", a, "instead."), r = a);
  const l = o || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, d = h.getParameter(34930), c = h.getParameter(35660), m = h.getParameter(3379), g = h.getParameter(34076), p = h.getParameter(34921), f = h.getParameter(36347), v = h.getParameter(36348), _ = h.getParameter(36349), b = c > 0, x = o || e.has("OES_texture_float"), M = b && x, S = o ? h.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: r,
    logarithmicDepthBuffer: u,
    maxTextures: d,
    maxVertexTextures: c,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: p,
    maxVertexUniforms: f,
    maxVaryings: v,
    maxFragmentUniforms: _,
    vertexTextures: b,
    floatFragmentTextures: x,
    floatVertexTextures: M,
    maxSamples: S
  };
}
function th(h) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const o = new _n(), r = new St(), a = { value: null, needsUpdate: !1 };
  this.uniform = a, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, c, m) {
    const g = d.length !== 0 || c || n !== 0 || i;
    return i = c, t = u(d, m, 0), n = d.length, g;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1, l();
  }, this.setState = function(d, c, m) {
    const g = d.clippingPlanes, p = d.clipIntersection, f = d.clipShadows, v = h.get(d);
    if (!i || g === null || g.length === 0 || s && !f)
      s ? u(null) : l();
    else {
      const _ = s ? 0 : n, b = _ * 4;
      let x = v.clippingState || null;
      a.value = x, x = u(g, c, b, m);
      for (let M = 0; M !== b; ++M)
        x[M] = t[M];
      v.clippingState = x, this.numIntersection = p ? this.numPlanes : 0, this.numPlanes += _;
    }
  };
  function l() {
    a.value !== t && (a.value = t, a.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(d, c, m, g) {
    const p = d !== null ? d.length : 0;
    let f = null;
    if (p !== 0) {
      if (f = a.value, g !== !0 || f === null) {
        const v = m + p * 4, _ = c.matrixWorldInverse;
        r.getNormalMatrix(_), (f === null || f.length < v) && (f = new Float32Array(v));
        for (let b = 0, x = m; b !== p; ++b, x += 4)
          o.copy(d[b]).applyMatrix4(_, r), o.normal.toArray(f, x), f[x + 3] = o.constant;
      }
      a.value = f, a.needsUpdate = !0;
    }
    return e.numPlanes = p, e.numIntersection = 0, f;
  }
}
function nh(h) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, r) {
    return r === 303 ? o.mapping = 301 : r === 304 && (o.mapping = 302), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const r = o.mapping;
      if (r === 303 || r === 304)
        if (e.has(o)) {
          const a = e.get(o).texture;
          return t(a, o.mapping);
        } else {
          const a = o.image;
          if (a && a.height > 0) {
            const l = new va(a.height / 2);
            return l.fromEquirectangularTexture(h, o), e.set(o, l), o.addEventListener("dispose", i), t(l.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function i(o) {
    const r = o.target;
    r.removeEventListener("dispose", i);
    const a = e.get(r);
    a !== void 0 && (e.delete(r), a.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class ih extends Eo {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, o = n + e, r = i + t, a = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, o = s + l * this.view.width, r -= u * this.view.offsetY, a = r - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, r, a, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Yn = 4, yr = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], xn = 20, As = /* @__PURE__ */ new ih(), wr = /* @__PURE__ */ new Ae();
let Cs = null;
const vn = (1 + Math.sqrt(5)) / 2, Hn = 1 / vn, br = [
  /* @__PURE__ */ new B(1, 1, 1),
  /* @__PURE__ */ new B(-1, 1, 1),
  /* @__PURE__ */ new B(1, 1, -1),
  /* @__PURE__ */ new B(-1, 1, -1),
  /* @__PURE__ */ new B(0, vn, Hn),
  /* @__PURE__ */ new B(0, vn, -Hn),
  /* @__PURE__ */ new B(Hn, 0, vn),
  /* @__PURE__ */ new B(-Hn, 0, vn),
  /* @__PURE__ */ new B(vn, Hn, 0),
  /* @__PURE__ */ new B(-vn, Hn, 0)
];
class Hs {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    Cs = this._renderer.getRenderTarget(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Er(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Sr(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Cs), e.scissorTest = !1, Ni(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Cs = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: 1006,
      minFilter: 1006,
      generateMipmaps: !1,
      type: 1016,
      format: 1023,
      encoding: 3e3,
      depthBuffer: !1
    }, i = Mr(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Mr(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = sh(s)), this._blurMaterial = rh(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new ke(this._lodPlanes[0], e);
    this._renderer.compile(t, As);
  }
  _sceneToCubeUV(e, t, n, i) {
    const r = new dt(90, 1, t, n), a = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], u = this._renderer, d = u.autoClear, c = u.toneMapping;
    u.getClearColor(wr), u.toneMapping = 0, u.autoClear = !1;
    const m = new $s({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    }), g = new ke(new Qn(), m);
    let p = !1;
    const f = e.background;
    f ? f.isColor && (m.color.copy(f), e.background = null, p = !0) : (m.color.copy(wr), p = !0);
    for (let v = 0; v < 6; v++) {
      const _ = v % 3;
      _ === 0 ? (r.up.set(0, a[v], 0), r.lookAt(l[v], 0, 0)) : _ === 1 ? (r.up.set(0, 0, a[v]), r.lookAt(0, l[v], 0)) : (r.up.set(0, a[v], 0), r.lookAt(0, 0, l[v]));
      const b = this._cubeSize;
      Ni(i, _ * b, v > 2 ? b : 0, b, b), u.setRenderTarget(i), p && u.render(g, r), u.render(e, r);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = c, u.autoClear = d, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === 301 || e.mapping === 302;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Er()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Sr());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, o = new ke(this._lodPlanes[0], s), r = s.uniforms;
    r.envMap.value = e;
    const a = this._cubeSize;
    Ni(t, 0, 0, 3 * a, 2 * a), n.setRenderTarget(t), n.render(o, As);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), o = br[(i - 1) % br.length];
      this._blur(e, i - 1, i, s, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      o,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, o, r) {
    const a = this._renderer, l = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, d = new ke(this._lodPlanes[i], l), c = l.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * xn - 1), p = s / g, f = isFinite(s) ? 1 + Math.floor(u * p) : xn;
    f > xn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${xn}`);
    const v = [];
    let _ = 0;
    for (let C = 0; C < xn; ++C) {
      const y = C / p, A = Math.exp(-y * y / 2);
      v.push(A), C === 0 ? _ += A : C < f && (_ += 2 * A);
    }
    for (let C = 0; C < v.length; C++)
      v[C] = v[C] / _;
    c.envMap.value = e.texture, c.samples.value = f, c.weights.value = v, c.latitudinal.value = o === "latitudinal", r && (c.poleAxis.value = r);
    const { _lodMax: b } = this;
    c.dTheta.value = g, c.mipInt.value = b - n;
    const x = this._sizeLods[i], M = 3 * x * (i > b - Yn ? i - b + Yn : 0), S = 4 * (this._cubeSize - x);
    Ni(t, M, S, 3 * x, 2 * x), a.setRenderTarget(t), a.render(d, As);
  }
}
function sh(h) {
  const e = [], t = [], n = [];
  let i = h;
  const s = h - Yn + 1 + yr.length;
  for (let o = 0; o < s; o++) {
    const r = Math.pow(2, i);
    t.push(r);
    let a = 1 / r;
    o > h - Yn ? a = yr[o - h + Yn - 1] : o === 0 && (a = 0), n.push(a);
    const l = 1 / (r - 2), u = -l, d = 1 + l, c = [u, u, d, u, d, d, u, u, d, d, u, d], m = 6, g = 6, p = 3, f = 2, v = 1, _ = new Float32Array(p * g * m), b = new Float32Array(f * g * m), x = new Float32Array(v * g * m);
    for (let S = 0; S < m; S++) {
      const C = S % 3 * 2 / 3 - 1, y = S > 2 ? 0 : -1, A = [
        C,
        y,
        0,
        C + 2 / 3,
        y,
        0,
        C + 2 / 3,
        y + 1,
        0,
        C,
        y,
        0,
        C + 2 / 3,
        y + 1,
        0,
        C,
        y + 1,
        0
      ];
      _.set(A, p * g * S), b.set(c, f * g * S);
      const P = [S, S, S, S, S, S];
      x.set(P, v * g * S);
    }
    const M = new Et();
    M.setAttribute("position", new Dt(_, p)), M.setAttribute("uv", new Dt(b, f)), M.setAttribute("faceIndex", new Dt(x, v)), e.push(M), i > Yn && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Mr(h, e, t) {
  const n = new Tn(h, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Ni(h, e, t, n, i) {
  h.viewport.set(e, t, n, i), h.scissor.set(e, t, n, i);
}
function rh(h, e, t) {
  const n = new Float32Array(xn), i = new B(0, 1, 0);
  return new An({
    name: "SphericalGaussianBlur",
    defines: {
      n: xn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${h}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: Ks(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Sr() {
  return new An({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Ks(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Er() {
  return new An({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Ks(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ks() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function oh(h) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(r) {
    if (r && r.isTexture) {
      const a = r.mapping, l = a === 303 || a === 304, u = a === 301 || a === 302;
      if (l || u)
        if (r.isRenderTargetTexture && r.needsPMREMUpdate === !0) {
          r.needsPMREMUpdate = !1;
          let d = e.get(r);
          return t === null && (t = new Hs(h)), d = l ? t.fromEquirectangular(r, d) : t.fromCubemap(r, d), e.set(r, d), d.texture;
        } else {
          if (e.has(r))
            return e.get(r).texture;
          {
            const d = r.image;
            if (l && d && d.height > 0 || u && d && i(d)) {
              t === null && (t = new Hs(h));
              const c = l ? t.fromEquirectangular(r) : t.fromCubemap(r);
              return e.set(r, c), r.addEventListener("dispose", s), c.texture;
            } else
              return null;
          }
        }
    }
    return r;
  }
  function i(r) {
    let a = 0;
    const l = 6;
    for (let u = 0; u < l; u++)
      r[u] !== void 0 && a++;
    return a === l;
  }
  function s(r) {
    const a = r.target;
    a.removeEventListener("dispose", s);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function ah(h) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = h.getExtension("WEBGL_depth_texture") || h.getExtension("MOZ_WEBGL_depth_texture") || h.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = h.getExtension("EXT_texture_filter_anisotropic") || h.getExtension("MOZ_EXT_texture_filter_anisotropic") || h.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = h.getExtension("WEBGL_compressed_texture_s3tc") || h.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || h.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = h.getExtension("WEBGL_compressed_texture_pvrtc") || h.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = h.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function lh(h, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function o(d) {
    const c = d.target;
    c.index !== null && e.remove(c.index);
    for (const g in c.attributes)
      e.remove(c.attributes[g]);
    c.removeEventListener("dispose", o), delete i[c.id];
    const m = s.get(c);
    m && (e.remove(m), s.delete(c)), n.releaseStatesOfGeometry(c), c.isInstancedBufferGeometry === !0 && delete c._maxInstanceCount, t.memory.geometries--;
  }
  function r(d, c) {
    return i[c.id] === !0 || (c.addEventListener("dispose", o), i[c.id] = !0, t.memory.geometries++), c;
  }
  function a(d) {
    const c = d.attributes;
    for (const g in c)
      e.update(c[g], 34962);
    const m = d.morphAttributes;
    for (const g in m) {
      const p = m[g];
      for (let f = 0, v = p.length; f < v; f++)
        e.update(p[f], 34962);
    }
  }
  function l(d) {
    const c = [], m = d.index, g = d.attributes.position;
    let p = 0;
    if (m !== null) {
      const _ = m.array;
      p = m.version;
      for (let b = 0, x = _.length; b < x; b += 3) {
        const M = _[b + 0], S = _[b + 1], C = _[b + 2];
        c.push(M, S, S, C, C, M);
      }
    } else {
      const _ = g.array;
      p = g.version;
      for (let b = 0, x = _.length / 3 - 1; b < x; b += 3) {
        const M = b + 0, S = b + 1, C = b + 2;
        c.push(M, S, S, C, C, M);
      }
    }
    const f = new (go(c) ? So : Mo)(c, 1);
    f.version = p;
    const v = s.get(d);
    v && e.remove(v), s.set(d, f);
  }
  function u(d) {
    const c = s.get(d);
    if (c) {
      const m = d.index;
      m !== null && c.version < m.version && l(d);
    } else
      l(d);
    return s.get(d);
  }
  return {
    get: r,
    update: a,
    getWireframeAttribute: u
  };
}
function ch(h, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(c) {
    s = c;
  }
  let r, a;
  function l(c) {
    r = c.type, a = c.bytesPerElement;
  }
  function u(c, m) {
    h.drawElements(s, m, r, c * a), t.update(m, s, 1);
  }
  function d(c, m, g) {
    if (g === 0)
      return;
    let p, f;
    if (i)
      p = h, f = "drawElementsInstanced";
    else if (p = e.get("ANGLE_instanced_arrays"), f = "drawElementsInstancedANGLE", p === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    p[f](s, m, r, c * a, g), t.update(m, s, g);
  }
  this.setMode = o, this.setIndex = l, this.render = u, this.renderInstances = d;
}
function hh(h) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, o, r) {
    switch (t.calls++, o) {
      case 4:
        t.triangles += r * (s / 3);
        break;
      case 1:
        t.lines += r * (s / 2);
        break;
      case 3:
        t.lines += r * (s - 1);
        break;
      case 2:
        t.lines += r * s;
        break;
      case 0:
        t.points += r * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function uh(h, e) {
  return h[0] - e[0];
}
function dh(h, e) {
  return Math.abs(e[1]) - Math.abs(h[1]);
}
function Ls(h, e) {
  let t = 1;
  const n = e.isInterleavedBufferAttribute ? e.data.array : e.array;
  n instanceof Int8Array ? t = 127 : n instanceof Uint8Array ? t = 255 : n instanceof Uint16Array ? t = 65535 : n instanceof Int16Array ? t = 32767 : n instanceof Int32Array ? t = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", n), h.divideScalar(t);
}
function fh(h, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), o = new Ge(), r = [];
  for (let l = 0; l < 8; l++)
    r[l] = [l, 0];
  function a(l, u, d, c) {
    const m = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, p = g !== void 0 ? g.length : 0;
      let f = s.get(u);
      if (f === void 0 || f.count !== p) {
        let I = function() {
          D.dispose(), s.delete(u), u.removeEventListener("dispose", I);
        };
        f !== void 0 && f.texture.dispose();
        const b = u.morphAttributes.position !== void 0, x = u.morphAttributes.normal !== void 0, M = u.morphAttributes.color !== void 0, S = u.morphAttributes.position || [], C = u.morphAttributes.normal || [], y = u.morphAttributes.color || [];
        let A = 0;
        b === !0 && (A = 1), x === !0 && (A = 2), M === !0 && (A = 3);
        let P = u.attributes.position.count * A, z = 1;
        P > e.maxTextureSize && (z = Math.ceil(P / e.maxTextureSize), P = e.maxTextureSize);
        const H = new Float32Array(P * z * 4 * p), D = new yo(H, P, z, p);
        D.type = 1015, D.needsUpdate = !0;
        const L = A * 4;
        for (let F = 0; F < p; F++) {
          const q = S[F], U = C[F], O = y[F], k = P * z * 4 * F;
          for (let J = 0; J < q.count; J++) {
            const V = J * L;
            b === !0 && (o.fromBufferAttribute(q, J), q.normalized === !0 && Ls(o, q), H[k + V + 0] = o.x, H[k + V + 1] = o.y, H[k + V + 2] = o.z, H[k + V + 3] = 0), x === !0 && (o.fromBufferAttribute(U, J), U.normalized === !0 && Ls(o, U), H[k + V + 4] = o.x, H[k + V + 5] = o.y, H[k + V + 6] = o.z, H[k + V + 7] = 0), M === !0 && (o.fromBufferAttribute(O, J), O.normalized === !0 && Ls(o, O), H[k + V + 8] = o.x, H[k + V + 9] = o.y, H[k + V + 10] = o.z, H[k + V + 11] = O.itemSize === 4 ? o.w : 1);
          }
        }
        f = {
          count: p,
          texture: D,
          size: new Ce(P, z)
        }, s.set(u, f), u.addEventListener("dispose", I);
      }
      let v = 0;
      for (let b = 0; b < m.length; b++)
        v += m[b];
      const _ = u.morphTargetsRelative ? 1 : 1 - v;
      c.getUniforms().setValue(h, "morphTargetBaseInfluence", _), c.getUniforms().setValue(h, "morphTargetInfluences", m), c.getUniforms().setValue(h, "morphTargetsTexture", f.texture, t), c.getUniforms().setValue(h, "morphTargetsTextureSize", f.size);
    } else {
      const g = m === void 0 ? 0 : m.length;
      let p = n[u.id];
      if (p === void 0 || p.length !== g) {
        p = [];
        for (let x = 0; x < g; x++)
          p[x] = [x, 0];
        n[u.id] = p;
      }
      for (let x = 0; x < g; x++) {
        const M = p[x];
        M[0] = x, M[1] = m[x];
      }
      p.sort(dh);
      for (let x = 0; x < 8; x++)
        x < g && p[x][1] ? (r[x][0] = p[x][0], r[x][1] = p[x][1]) : (r[x][0] = Number.MAX_SAFE_INTEGER, r[x][1] = 0);
      r.sort(uh);
      const f = u.morphAttributes.position, v = u.morphAttributes.normal;
      let _ = 0;
      for (let x = 0; x < 8; x++) {
        const M = r[x], S = M[0], C = M[1];
        S !== Number.MAX_SAFE_INTEGER && C ? (f && u.getAttribute("morphTarget" + x) !== f[S] && u.setAttribute("morphTarget" + x, f[S]), v && u.getAttribute("morphNormal" + x) !== v[S] && u.setAttribute("morphNormal" + x, v[S]), i[x] = C, _ += C) : (f && u.hasAttribute("morphTarget" + x) === !0 && u.deleteAttribute("morphTarget" + x), v && u.hasAttribute("morphNormal" + x) === !0 && u.deleteAttribute("morphNormal" + x), i[x] = 0);
      }
      const b = u.morphTargetsRelative ? 1 : 1 - _;
      c.getUniforms().setValue(h, "morphTargetBaseInfluence", b), c.getUniforms().setValue(h, "morphTargetInfluences", i);
    }
  }
  return {
    update: a
  };
}
function ph(h, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(a) {
    const l = n.render.frame, u = a.geometry, d = e.get(a, u);
    return i.get(d) !== l && (e.update(d), i.set(d, l)), a.isInstancedMesh && (a.hasEventListener("dispose", r) === !1 && a.addEventListener("dispose", r), t.update(a.instanceMatrix, 34962), a.instanceColor !== null && t.update(a.instanceColor, 34962)), d;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function r(a) {
    const l = a.target;
    l.removeEventListener("dispose", r), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
const Co = /* @__PURE__ */ new vt(), Lo = /* @__PURE__ */ new yo(), Ro = /* @__PURE__ */ new na(), Fo = /* @__PURE__ */ new To(), Tr = [], Ar = [], Cr = new Float32Array(16), Lr = new Float32Array(9), Rr = new Float32Array(4);
function ei(h, e, t) {
  const n = h[0];
  if (n <= 0 || n > 0)
    return h;
  const i = e * t;
  let s = Tr[i];
  if (s === void 0 && (s = new Float32Array(i), Tr[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, r = 0; o !== e; ++o)
      r += t, h[o].toArray(s, r);
  }
  return s;
}
function ct(h, e) {
  if (h.length !== e.length)
    return !1;
  for (let t = 0, n = h.length; t < n; t++)
    if (h[t] !== e[t])
      return !1;
  return !0;
}
function ht(h, e) {
  for (let t = 0, n = e.length; t < n; t++)
    h[t] = e[t];
}
function Qi(h, e) {
  let t = Ar[e];
  t === void 0 && (t = new Int32Array(e), Ar[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = h.allocateTextureUnit();
  return t;
}
function mh(h, e) {
  const t = this.cache;
  t[0] !== e && (h.uniform1f(this.addr, e), t[0] = e);
}
function gh(h, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (h.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ct(t, e))
      return;
    h.uniform2fv(this.addr, e), ht(t, e);
  }
}
function _h(h, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (h.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (h.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ct(t, e))
      return;
    h.uniform3fv(this.addr, e), ht(t, e);
  }
}
function vh(h, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (h.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ct(t, e))
      return;
    h.uniform4fv(this.addr, e), ht(t, e);
  }
}
function xh(h, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ct(t, e))
      return;
    h.uniformMatrix2fv(this.addr, !1, e), ht(t, e);
  } else {
    if (ct(t, n))
      return;
    Rr.set(n), h.uniformMatrix2fv(this.addr, !1, Rr), ht(t, n);
  }
}
function yh(h, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ct(t, e))
      return;
    h.uniformMatrix3fv(this.addr, !1, e), ht(t, e);
  } else {
    if (ct(t, n))
      return;
    Lr.set(n), h.uniformMatrix3fv(this.addr, !1, Lr), ht(t, n);
  }
}
function wh(h, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ct(t, e))
      return;
    h.uniformMatrix4fv(this.addr, !1, e), ht(t, e);
  } else {
    if (ct(t, n))
      return;
    Cr.set(n), h.uniformMatrix4fv(this.addr, !1, Cr), ht(t, n);
  }
}
function bh(h, e) {
  const t = this.cache;
  t[0] !== e && (h.uniform1i(this.addr, e), t[0] = e);
}
function Mh(h, e) {
  const t = this.cache;
  ct(t, e) || (h.uniform2iv(this.addr, e), ht(t, e));
}
function Sh(h, e) {
  const t = this.cache;
  ct(t, e) || (h.uniform3iv(this.addr, e), ht(t, e));
}
function Eh(h, e) {
  const t = this.cache;
  ct(t, e) || (h.uniform4iv(this.addr, e), ht(t, e));
}
function Th(h, e) {
  const t = this.cache;
  t[0] !== e && (h.uniform1ui(this.addr, e), t[0] = e);
}
function Ah(h, e) {
  const t = this.cache;
  ct(t, e) || (h.uniform2uiv(this.addr, e), ht(t, e));
}
function Ch(h, e) {
  const t = this.cache;
  ct(t, e) || (h.uniform3uiv(this.addr, e), ht(t, e));
}
function Lh(h, e) {
  const t = this.cache;
  ct(t, e) || (h.uniform4uiv(this.addr, e), ht(t, e));
}
function Rh(h, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (h.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || Co, i);
}
function Fh(h, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (h.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Ro, i);
}
function Dh(h, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (h.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Fo, i);
}
function Ph(h, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (h.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Lo, i);
}
function Ih(h) {
  switch (h) {
    case 5126:
      return mh;
    case 35664:
      return gh;
    case 35665:
      return _h;
    case 35666:
      return vh;
    case 35674:
      return xh;
    case 35675:
      return yh;
    case 35676:
      return wh;
    case 5124:
    case 35670:
      return bh;
    case 35667:
    case 35671:
      return Mh;
    case 35668:
    case 35672:
      return Sh;
    case 35669:
    case 35673:
      return Eh;
    case 5125:
      return Th;
    case 36294:
      return Ah;
    case 36295:
      return Ch;
    case 36296:
      return Lh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Rh;
    case 35679:
    case 36299:
    case 36307:
      return Fh;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Dh;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Ph;
  }
}
function zh(h, e) {
  h.uniform1fv(this.addr, e);
}
function Bh(h, e) {
  const t = ei(e, this.size, 2);
  h.uniform2fv(this.addr, t);
}
function Nh(h, e) {
  const t = ei(e, this.size, 3);
  h.uniform3fv(this.addr, t);
}
function Oh(h, e) {
  const t = ei(e, this.size, 4);
  h.uniform4fv(this.addr, t);
}
function Uh(h, e) {
  const t = ei(e, this.size, 4);
  h.uniformMatrix2fv(this.addr, !1, t);
}
function Gh(h, e) {
  const t = ei(e, this.size, 9);
  h.uniformMatrix3fv(this.addr, !1, t);
}
function kh(h, e) {
  const t = ei(e, this.size, 16);
  h.uniformMatrix4fv(this.addr, !1, t);
}
function Wh(h, e) {
  h.uniform1iv(this.addr, e);
}
function Vh(h, e) {
  h.uniform2iv(this.addr, e);
}
function Hh(h, e) {
  h.uniform3iv(this.addr, e);
}
function qh(h, e) {
  h.uniform4iv(this.addr, e);
}
function Xh(h, e) {
  h.uniform1uiv(this.addr, e);
}
function jh(h, e) {
  h.uniform2uiv(this.addr, e);
}
function Yh(h, e) {
  h.uniform3uiv(this.addr, e);
}
function $h(h, e) {
  h.uniform4uiv(this.addr, e);
}
function Zh(h, e, t) {
  const n = e.length, i = Qi(t, n);
  h.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s)
    t.setTexture2D(e[s] || Co, i[s]);
}
function Kh(h, e, t) {
  const n = e.length, i = Qi(t, n);
  h.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s)
    t.setTexture3D(e[s] || Ro, i[s]);
}
function Jh(h, e, t) {
  const n = e.length, i = Qi(t, n);
  h.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s)
    t.setTextureCube(e[s] || Fo, i[s]);
}
function Qh(h, e, t) {
  const n = e.length, i = Qi(t, n);
  h.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s)
    t.setTexture2DArray(e[s] || Lo, i[s]);
}
function eu(h) {
  switch (h) {
    case 5126:
      return zh;
    case 35664:
      return Bh;
    case 35665:
      return Nh;
    case 35666:
      return Oh;
    case 35674:
      return Uh;
    case 35675:
      return Gh;
    case 35676:
      return kh;
    case 5124:
    case 35670:
      return Wh;
    case 35667:
    case 35671:
      return Vh;
    case 35668:
    case 35672:
      return Hh;
    case 35669:
    case 35673:
      return qh;
    case 5125:
      return Xh;
    case 36294:
      return jh;
    case 36295:
      return Yh;
    case 36296:
      return $h;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Zh;
    case 35679:
    case 36299:
    case 36307:
      return Kh;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Jh;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Qh;
  }
}
class tu {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = Ih(t.type);
  }
}
class nu {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = eu(t.type);
  }
}
class iu {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, o = i.length; s !== o; ++s) {
      const r = i[s];
      r.setValue(e, t[r.id], n);
    }
  }
}
const Rs = /(\w+)(\])?(\[|\.)?/g;
function Fr(h, e) {
  h.seq.push(e), h.map[e.id] = e;
}
function su(h, e, t) {
  const n = h.name, i = n.length;
  for (Rs.lastIndex = 0; ; ) {
    const s = Rs.exec(n), o = Rs.lastIndex;
    let r = s[1];
    const a = s[2] === "]", l = s[3];
    if (a && (r = r | 0), l === void 0 || l === "[" && o + 2 === i) {
      Fr(t, l === void 0 ? new tu(r, h, e) : new nu(r, h, e));
      break;
    } else {
      let d = t.map[r];
      d === void 0 && (d = new iu(r), Fr(t, d)), t = d;
    }
  }
}
class ji {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), o = e.getUniformLocation(t, s.name);
      su(s, o, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const r = t[s], a = n[r.id];
      a.needsUpdate !== !1 && r.setValue(e, a.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function Dr(h, e, t) {
  const n = h.createShader(e);
  return h.shaderSource(n, t), h.compileShader(n), n;
}
let ru = 0;
function ou(h, e) {
  const t = h.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = i; o < s; o++) {
    const r = o + 1;
    n.push(`${r === e ? ">" : " "} ${r}: ${t[o]}`);
  }
  return n.join(`
`);
}
function au(h) {
  switch (h) {
    case 3e3:
      return ["Linear", "( value )"];
    case 3001:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", h), ["Linear", "( value )"];
  }
}
function Pr(h, e, t) {
  const n = h.getShaderParameter(e, 35713), i = h.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + ou(h.getShaderSource(e), o);
  } else
    return i;
}
function lu(h, e) {
  const t = au(e);
  return "vec4 " + h + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function cu(h, e) {
  let t;
  switch (e) {
    case 1:
      t = "Linear";
      break;
    case 2:
      t = "Reinhard";
      break;
    case 3:
      t = "OptimizedCineon";
      break;
    case 4:
      t = "ACESFilmic";
      break;
    case 5:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + h + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function hu(h) {
  return [
    h.extensionDerivatives || !!h.envMapCubeUVHeight || h.bumpMap || h.tangentSpaceNormalMap || h.clearcoatNormalMap || h.flatShading || h.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (h.extensionFragDepth || h.logarithmicDepthBuffer) && h.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    h.extensionDrawBuffers && h.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (h.extensionShaderTextureLOD || h.envMap || h.transmission) && h.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(di).join(`
`);
}
function uu(h) {
  const e = [];
  for (const t in h) {
    const n = h[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function du(h, e) {
  const t = {}, n = h.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const s = h.getActiveAttrib(e, i), o = s.name;
    let r = 1;
    s.type === 35674 && (r = 2), s.type === 35675 && (r = 3), s.type === 35676 && (r = 4), t[o] = {
      type: s.type,
      location: h.getAttribLocation(e, o),
      locationSize: r
    };
  }
  return t;
}
function di(h) {
  return h !== "";
}
function Ir(h, e) {
  return h.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function zr(h, e) {
  return h.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const fu = /^[ \t]*#include +<([\w\d./]+)>/gm;
function qs(h) {
  return h.replace(fu, pu);
}
function pu(h, e) {
  const t = Te[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return qs(t);
}
const mu = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, gu = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Br(h) {
  return h.replace(gu, Do).replace(mu, _u);
}
function _u(h, e, t, n) {
  return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Do(h, e, t, n);
}
function Do(h, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function Nr(h) {
  let e = "precision " + h.precision + ` float;
precision ` + h.precision + " int;";
  return h.precision === "highp" ? e += `
#define HIGH_PRECISION` : h.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : h.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function vu(h) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return h.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : h.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : h.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function xu(h) {
  let e = "ENVMAP_TYPE_CUBE";
  if (h.envMap)
    switch (h.envMapMode) {
      case 301:
      case 302:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function yu(h) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (h.envMap)
    switch (h.envMapMode) {
      case 302:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function wu(h) {
  let e = "ENVMAP_BLENDING_NONE";
  if (h.envMap)
    switch (h.combine) {
      case 0:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function bu(h) {
  const e = h.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Mu(h, e, t, n) {
  const i = h.getContext(), s = t.defines;
  let o = t.vertexShader, r = t.fragmentShader;
  const a = vu(t), l = xu(t), u = yu(t), d = wu(t), c = bu(t), m = t.isWebGL2 ? "" : hu(t), g = uu(s), p = i.createProgram();
  let f, v, _ = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (f = [
    g
  ].filter(di).join(`
`), f.length > 0 && (f += `
`), v = [
    m,
    g
  ].filter(di).join(`
`), v.length > 0 && (v += `
`)) : (f = [
    Nr(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + a : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
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
    `
`
  ].filter(di).join(`
`), v = [
    m,
    Nr(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + d : "",
    c ? "#define CUBEUV_TEXEL_WIDTH " + c.texelWidth : "",
    c ? "#define CUBEUV_TEXEL_HEIGHT " + c.texelHeight : "",
    c ? "#define CUBEUV_MAX_MIP " + c.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + a : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    t.toneMapping !== 0 ? Te.tonemapping_pars_fragment : "",
    t.toneMapping !== 0 ? cu("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Te.encodings_pars_fragment,
    lu("linearToOutputTexel", t.outputEncoding),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(di).join(`
`)), o = qs(o), o = Ir(o, t), o = zr(o, t), r = qs(r), r = Ir(r, t), r = zr(r, t), o = Br(o), r = Br(r), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (_ = `#version 300 es
`, f = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + f, v = [
    "#define varying in",
    t.glslVersion === ar ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === ar ? "" : "#define gl_FragColor pc_fragColor",
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
  ].join(`
`) + `
` + v);
  const b = _ + f + o, x = _ + v + r, M = Dr(i, 35633, b), S = Dr(i, 35632, x);
  if (i.attachShader(p, M), i.attachShader(p, S), t.index0AttributeName !== void 0 ? i.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"), i.linkProgram(p), h.debug.checkShaderErrors) {
    const A = i.getProgramInfoLog(p).trim(), P = i.getShaderInfoLog(M).trim(), z = i.getShaderInfoLog(S).trim();
    let H = !0, D = !0;
    if (i.getProgramParameter(p, 35714) === !1) {
      H = !1;
      const L = Pr(i, M, "vertex"), I = Pr(i, S, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(p, 35715) + `

Program Info Log: ` + A + `
` + L + `
` + I
      );
    } else
      A !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", A) : (P === "" || z === "") && (D = !1);
    D && (this.diagnostics = {
      runnable: H,
      programLog: A,
      vertexShader: {
        log: P,
        prefix: f
      },
      fragmentShader: {
        log: z,
        prefix: v
      }
    });
  }
  i.deleteShader(M), i.deleteShader(S);
  let C;
  this.getUniforms = function() {
    return C === void 0 && (C = new ji(i, p)), C;
  };
  let y;
  return this.getAttributes = function() {
    return y === void 0 && (y = du(i, p)), y;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(p), this.program = void 0;
  }, this.name = t.shaderName, this.id = ru++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = M, this.fragmentShader = S, this;
}
let Su = 0;
class Eu {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    return t.has(e) === !1 && t.set(e, /* @__PURE__ */ new Set()), t.get(e);
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    if (t.has(e) === !1) {
      const n = new Tu(e);
      t.set(e, n);
    }
    return t.get(e);
  }
}
class Tu {
  constructor(e) {
    this.id = Su++, this.code = e, this.usedTimes = 0;
  }
}
function Au(h, e, t, n, i, s, o) {
  const r = new bo(), a = new Eu(), l = [], u = i.isWebGL2, d = i.logarithmicDepthBuffer, c = i.vertexTextures;
  let m = i.precision;
  const g = {
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
  function p(y, A, P, z, H) {
    const D = z.fog, L = H.geometry, I = y.isMeshStandardMaterial ? z.environment : null, F = (y.isMeshStandardMaterial ? t : e).get(y.envMap || I), q = !!F && F.mapping === 306 ? F.image.height : null, U = g[y.type];
    y.precision !== null && (m = i.getMaxPrecision(y.precision), m !== y.precision && console.warn("THREE.WebGLProgram.getParameters:", y.precision, "not supported, using", m, "instead."));
    const O = L.morphAttributes.position || L.morphAttributes.normal || L.morphAttributes.color, k = O !== void 0 ? O.length : 0;
    let J = 0;
    L.morphAttributes.position !== void 0 && (J = 1), L.morphAttributes.normal !== void 0 && (J = 2), L.morphAttributes.color !== void 0 && (J = 3);
    let V, ee, ce, ge;
    if (U) {
      const Oe = Ut[U];
      V = Oe.vertexShader, ee = Oe.fragmentShader;
    } else
      V = y.vertexShader, ee = y.fragmentShader, a.update(y), ce = a.getVertexShaderID(y), ge = a.getFragmentShaderID(y);
    const Z = h.getRenderTarget(), De = y.alphaTest > 0, ve = y.clearcoat > 0, xe = y.iridescence > 0;
    return {
      isWebGL2: u,
      shaderID: U,
      shaderName: y.type,
      vertexShader: V,
      fragmentShader: ee,
      defines: y.defines,
      customVertexShaderID: ce,
      customFragmentShaderID: ge,
      isRawShaderMaterial: y.isRawShaderMaterial === !0,
      glslVersion: y.glslVersion,
      precision: m,
      instancing: H.isInstancedMesh === !0,
      instancingColor: H.isInstancedMesh === !0 && H.instanceColor !== null,
      supportsVertexTextures: c,
      outputEncoding: Z === null ? h.outputEncoding : Z.isXRRenderTarget === !0 ? Z.texture.encoding : 3e3,
      map: !!y.map,
      matcap: !!y.matcap,
      envMap: !!F,
      envMapMode: F && F.mapping,
      envMapCubeUVHeight: q,
      lightMap: !!y.lightMap,
      aoMap: !!y.aoMap,
      emissiveMap: !!y.emissiveMap,
      bumpMap: !!y.bumpMap,
      normalMap: !!y.normalMap,
      objectSpaceNormalMap: y.normalMapType === 1,
      tangentSpaceNormalMap: y.normalMapType === 0,
      decodeVideoTexture: !!y.map && y.map.isVideoTexture === !0 && y.map.encoding === 3001,
      clearcoat: ve,
      clearcoatMap: ve && !!y.clearcoatMap,
      clearcoatRoughnessMap: ve && !!y.clearcoatRoughnessMap,
      clearcoatNormalMap: ve && !!y.clearcoatNormalMap,
      iridescence: xe,
      iridescenceMap: xe && !!y.iridescenceMap,
      iridescenceThicknessMap: xe && !!y.iridescenceThicknessMap,
      displacementMap: !!y.displacementMap,
      roughnessMap: !!y.roughnessMap,
      metalnessMap: !!y.metalnessMap,
      specularMap: !!y.specularMap,
      specularIntensityMap: !!y.specularIntensityMap,
      specularColorMap: !!y.specularColorMap,
      opaque: y.transparent === !1 && y.blending === 1,
      alphaMap: !!y.alphaMap,
      alphaTest: De,
      gradientMap: !!y.gradientMap,
      sheen: y.sheen > 0,
      sheenColorMap: !!y.sheenColorMap,
      sheenRoughnessMap: !!y.sheenRoughnessMap,
      transmission: y.transmission > 0,
      transmissionMap: !!y.transmissionMap,
      thicknessMap: !!y.thicknessMap,
      combine: y.combine,
      vertexTangents: !!y.normalMap && !!L.attributes.tangent,
      vertexColors: y.vertexColors,
      vertexAlphas: y.vertexColors === !0 && !!L.attributes.color && L.attributes.color.itemSize === 4,
      vertexUvs: !!y.map || !!y.bumpMap || !!y.normalMap || !!y.specularMap || !!y.alphaMap || !!y.emissiveMap || !!y.roughnessMap || !!y.metalnessMap || !!y.clearcoatMap || !!y.clearcoatRoughnessMap || !!y.clearcoatNormalMap || !!y.iridescenceMap || !!y.iridescenceThicknessMap || !!y.displacementMap || !!y.transmissionMap || !!y.thicknessMap || !!y.specularIntensityMap || !!y.specularColorMap || !!y.sheenColorMap || !!y.sheenRoughnessMap,
      uvsVertexOnly: !(!!y.map || !!y.bumpMap || !!y.normalMap || !!y.specularMap || !!y.alphaMap || !!y.emissiveMap || !!y.roughnessMap || !!y.metalnessMap || !!y.clearcoatNormalMap || !!y.iridescenceMap || !!y.iridescenceThicknessMap || y.transmission > 0 || !!y.transmissionMap || !!y.thicknessMap || !!y.specularIntensityMap || !!y.specularColorMap || y.sheen > 0 || !!y.sheenColorMap || !!y.sheenRoughnessMap) && !!y.displacementMap,
      fog: !!D,
      useFog: y.fog === !0,
      fogExp2: D && D.isFogExp2,
      flatShading: !!y.flatShading,
      sizeAttenuation: y.sizeAttenuation,
      logarithmicDepthBuffer: d,
      skinning: H.isSkinnedMesh === !0,
      morphTargets: L.morphAttributes.position !== void 0,
      morphNormals: L.morphAttributes.normal !== void 0,
      morphColors: L.morphAttributes.color !== void 0,
      morphTargetsCount: k,
      morphTextureStride: J,
      numDirLights: A.directional.length,
      numPointLights: A.point.length,
      numSpotLights: A.spot.length,
      numRectAreaLights: A.rectArea.length,
      numHemiLights: A.hemi.length,
      numDirLightShadows: A.directionalShadowMap.length,
      numPointLightShadows: A.pointShadowMap.length,
      numSpotLightShadows: A.spotShadowMap.length,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: y.dithering,
      shadowMapEnabled: h.shadowMap.enabled && P.length > 0,
      shadowMapType: h.shadowMap.type,
      toneMapping: y.toneMapped ? h.toneMapping : 0,
      physicallyCorrectLights: h.physicallyCorrectLights,
      premultipliedAlpha: y.premultipliedAlpha,
      doubleSided: y.side === 2,
      flipSided: y.side === 1,
      useDepthPacking: !!y.depthPacking,
      depthPacking: y.depthPacking || 0,
      index0AttributeName: y.index0AttributeName,
      extensionDerivatives: y.extensions && y.extensions.derivatives,
      extensionFragDepth: y.extensions && y.extensions.fragDepth,
      extensionDrawBuffers: y.extensions && y.extensions.drawBuffers,
      extensionShaderTextureLOD: y.extensions && y.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: y.customProgramCacheKey()
    };
  }
  function f(y) {
    const A = [];
    if (y.shaderID ? A.push(y.shaderID) : (A.push(y.customVertexShaderID), A.push(y.customFragmentShaderID)), y.defines !== void 0)
      for (const P in y.defines)
        A.push(P), A.push(y.defines[P]);
    return y.isRawShaderMaterial === !1 && (v(A, y), _(A, y), A.push(h.outputEncoding)), A.push(y.customProgramCacheKey), A.join();
  }
  function v(y, A) {
    y.push(A.precision), y.push(A.outputEncoding), y.push(A.envMapMode), y.push(A.envMapCubeUVHeight), y.push(A.combine), y.push(A.vertexUvs), y.push(A.fogExp2), y.push(A.sizeAttenuation), y.push(A.morphTargetsCount), y.push(A.morphAttributeCount), y.push(A.numDirLights), y.push(A.numPointLights), y.push(A.numSpotLights), y.push(A.numHemiLights), y.push(A.numRectAreaLights), y.push(A.numDirLightShadows), y.push(A.numPointLightShadows), y.push(A.numSpotLightShadows), y.push(A.shadowMapType), y.push(A.toneMapping), y.push(A.numClippingPlanes), y.push(A.numClipIntersection), y.push(A.depthPacking);
  }
  function _(y, A) {
    r.disableAll(), A.isWebGL2 && r.enable(0), A.supportsVertexTextures && r.enable(1), A.instancing && r.enable(2), A.instancingColor && r.enable(3), A.map && r.enable(4), A.matcap && r.enable(5), A.envMap && r.enable(6), A.lightMap && r.enable(7), A.aoMap && r.enable(8), A.emissiveMap && r.enable(9), A.bumpMap && r.enable(10), A.normalMap && r.enable(11), A.objectSpaceNormalMap && r.enable(12), A.tangentSpaceNormalMap && r.enable(13), A.clearcoat && r.enable(14), A.clearcoatMap && r.enable(15), A.clearcoatRoughnessMap && r.enable(16), A.clearcoatNormalMap && r.enable(17), A.iridescence && r.enable(18), A.iridescenceMap && r.enable(19), A.iridescenceThicknessMap && r.enable(20), A.displacementMap && r.enable(21), A.specularMap && r.enable(22), A.roughnessMap && r.enable(23), A.metalnessMap && r.enable(24), A.gradientMap && r.enable(25), A.alphaMap && r.enable(26), A.alphaTest && r.enable(27), A.vertexColors && r.enable(28), A.vertexAlphas && r.enable(29), A.vertexUvs && r.enable(30), A.vertexTangents && r.enable(31), A.uvsVertexOnly && r.enable(32), A.fog && r.enable(33), y.push(r.mask), r.disableAll(), A.useFog && r.enable(0), A.flatShading && r.enable(1), A.logarithmicDepthBuffer && r.enable(2), A.skinning && r.enable(3), A.morphTargets && r.enable(4), A.morphNormals && r.enable(5), A.morphColors && r.enable(6), A.premultipliedAlpha && r.enable(7), A.shadowMapEnabled && r.enable(8), A.physicallyCorrectLights && r.enable(9), A.doubleSided && r.enable(10), A.flipSided && r.enable(11), A.useDepthPacking && r.enable(12), A.dithering && r.enable(13), A.specularIntensityMap && r.enable(14), A.specularColorMap && r.enable(15), A.transmission && r.enable(16), A.transmissionMap && r.enable(17), A.thicknessMap && r.enable(18), A.sheen && r.enable(19), A.sheenColorMap && r.enable(20), A.sheenRoughnessMap && r.enable(21), A.decodeVideoTexture && r.enable(22), A.opaque && r.enable(23), y.push(r.mask);
  }
  function b(y) {
    const A = g[y.type];
    let P;
    if (A) {
      const z = Ut[A];
      P = pa.clone(z.uniforms);
    } else
      P = y.uniforms;
    return P;
  }
  function x(y, A) {
    let P;
    for (let z = 0, H = l.length; z < H; z++) {
      const D = l[z];
      if (D.cacheKey === A) {
        P = D, ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && (P = new Mu(h, A, y, s), l.push(P)), P;
  }
  function M(y) {
    if (--y.usedTimes === 0) {
      const A = l.indexOf(y);
      l[A] = l[l.length - 1], l.pop(), y.destroy();
    }
  }
  function S(y) {
    a.remove(y);
  }
  function C() {
    a.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: f,
    getUniforms: b,
    acquireProgram: x,
    releaseProgram: M,
    releaseShaderCache: S,
    programs: l,
    dispose: C
  };
}
function Cu() {
  let h = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let o = h.get(s);
    return o === void 0 && (o = {}, h.set(s, o)), o;
  }
  function t(s) {
    h.delete(s);
  }
  function n(s, o, r) {
    h.get(s)[o] = r;
  }
  function i() {
    h = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function Lu(h, e) {
  return h.groupOrder !== e.groupOrder ? h.groupOrder - e.groupOrder : h.renderOrder !== e.renderOrder ? h.renderOrder - e.renderOrder : h.material.id !== e.material.id ? h.material.id - e.material.id : h.z !== e.z ? h.z - e.z : h.id - e.id;
}
function Or(h, e) {
  return h.groupOrder !== e.groupOrder ? h.groupOrder - e.groupOrder : h.renderOrder !== e.renderOrder ? h.renderOrder - e.renderOrder : h.z !== e.z ? e.z - h.z : h.id - e.id;
}
function Ur() {
  const h = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function o(d, c, m, g, p, f) {
    let v = h[e];
    return v === void 0 ? (v = {
      id: d.id,
      object: d,
      geometry: c,
      material: m,
      groupOrder: g,
      renderOrder: d.renderOrder,
      z: p,
      group: f
    }, h[e] = v) : (v.id = d.id, v.object = d, v.geometry = c, v.material = m, v.groupOrder = g, v.renderOrder = d.renderOrder, v.z = p, v.group = f), e++, v;
  }
  function r(d, c, m, g, p, f) {
    const v = o(d, c, m, g, p, f);
    m.transmission > 0 ? n.push(v) : m.transparent === !0 ? i.push(v) : t.push(v);
  }
  function a(d, c, m, g, p, f) {
    const v = o(d, c, m, g, p, f);
    m.transmission > 0 ? n.unshift(v) : m.transparent === !0 ? i.unshift(v) : t.unshift(v);
  }
  function l(d, c) {
    t.length > 1 && t.sort(d || Lu), n.length > 1 && n.sort(c || Or), i.length > 1 && i.sort(c || Or);
  }
  function u() {
    for (let d = e, c = h.length; d < c; d++) {
      const m = h[d];
      if (m.id === null)
        break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: r,
    unshift: a,
    finish: u,
    sort: l
  };
}
function Ru() {
  let h = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    let s;
    return h.has(n) === !1 ? (s = new Ur(), h.set(n, [s])) : i >= h.get(n).length ? (s = new Ur(), h.get(n).push(s)) : s = h.get(n)[i], s;
  }
  function t() {
    h = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Fu() {
  const h = {};
  return {
    get: function(e) {
      if (h[e.id] !== void 0)
        return h[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new B(),
            color: new Ae()
          };
          break;
        case "SpotLight":
          t = {
            position: new B(),
            direction: new B(),
            color: new Ae(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new B(),
            color: new Ae(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new B(),
            skyColor: new Ae(),
            groundColor: new Ae()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ae(),
            position: new B(),
            halfWidth: new B(),
            halfHeight: new B()
          };
          break;
      }
      return h[e.id] = t, t;
    }
  };
}
function Du() {
  const h = {};
  return {
    get: function(e) {
      if (h[e.id] !== void 0)
        return h[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return h[e.id] = t, t;
    }
  };
}
let Pu = 0;
function Iu(h, e) {
  return (e.castShadow ? 1 : 0) - (h.castShadow ? 1 : 0);
}
function zu(h, e) {
  const t = new Fu(), n = Du(), i = {
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
    ambient: [0, 0, 0],
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
  for (let u = 0; u < 9; u++)
    i.probe.push(new B());
  const s = new B(), o = new Xe(), r = new Xe();
  function a(u, d) {
    let c = 0, m = 0, g = 0;
    for (let A = 0; A < 9; A++)
      i.probe[A].set(0, 0, 0);
    let p = 0, f = 0, v = 0, _ = 0, b = 0, x = 0, M = 0, S = 0;
    u.sort(Iu);
    const C = d !== !0 ? Math.PI : 1;
    for (let A = 0, P = u.length; A < P; A++) {
      const z = u[A], H = z.color, D = z.intensity, L = z.distance, I = z.shadow && z.shadow.map ? z.shadow.map.texture : null;
      if (z.isAmbientLight)
        c += H.r * D * C, m += H.g * D * C, g += H.b * D * C;
      else if (z.isLightProbe)
        for (let F = 0; F < 9; F++)
          i.probe[F].addScaledVector(z.sh.coefficients[F], D);
      else if (z.isDirectionalLight) {
        const F = t.get(z);
        if (F.color.copy(z.color).multiplyScalar(z.intensity * C), z.castShadow) {
          const q = z.shadow, U = n.get(z);
          U.shadowBias = q.bias, U.shadowNormalBias = q.normalBias, U.shadowRadius = q.radius, U.shadowMapSize = q.mapSize, i.directionalShadow[p] = U, i.directionalShadowMap[p] = I, i.directionalShadowMatrix[p] = z.shadow.matrix, x++;
        }
        i.directional[p] = F, p++;
      } else if (z.isSpotLight) {
        const F = t.get(z);
        if (F.position.setFromMatrixPosition(z.matrixWorld), F.color.copy(H).multiplyScalar(D * C), F.distance = L, F.coneCos = Math.cos(z.angle), F.penumbraCos = Math.cos(z.angle * (1 - z.penumbra)), F.decay = z.decay, z.castShadow) {
          const q = z.shadow, U = n.get(z);
          U.shadowBias = q.bias, U.shadowNormalBias = q.normalBias, U.shadowRadius = q.radius, U.shadowMapSize = q.mapSize, i.spotShadow[v] = U, i.spotShadowMap[v] = I, i.spotShadowMatrix[v] = z.shadow.matrix, S++;
        }
        i.spot[v] = F, v++;
      } else if (z.isRectAreaLight) {
        const F = t.get(z);
        F.color.copy(H).multiplyScalar(D), F.halfWidth.set(z.width * 0.5, 0, 0), F.halfHeight.set(0, z.height * 0.5, 0), i.rectArea[_] = F, _++;
      } else if (z.isPointLight) {
        const F = t.get(z);
        if (F.color.copy(z.color).multiplyScalar(z.intensity * C), F.distance = z.distance, F.decay = z.decay, z.castShadow) {
          const q = z.shadow, U = n.get(z);
          U.shadowBias = q.bias, U.shadowNormalBias = q.normalBias, U.shadowRadius = q.radius, U.shadowMapSize = q.mapSize, U.shadowCameraNear = q.camera.near, U.shadowCameraFar = q.camera.far, i.pointShadow[f] = U, i.pointShadowMap[f] = I, i.pointShadowMatrix[f] = z.shadow.matrix, M++;
        }
        i.point[f] = F, f++;
      } else if (z.isHemisphereLight) {
        const F = t.get(z);
        F.skyColor.copy(z.color).multiplyScalar(D * C), F.groundColor.copy(z.groundColor).multiplyScalar(D * C), i.hemi[b] = F, b++;
      }
    }
    _ > 0 && (e.isWebGL2 || h.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ne.LTC_FLOAT_1, i.rectAreaLTC2 = ne.LTC_FLOAT_2) : h.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ne.LTC_HALF_1, i.rectAreaLTC2 = ne.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = c, i.ambient[1] = m, i.ambient[2] = g;
    const y = i.hash;
    (y.directionalLength !== p || y.pointLength !== f || y.spotLength !== v || y.rectAreaLength !== _ || y.hemiLength !== b || y.numDirectionalShadows !== x || y.numPointShadows !== M || y.numSpotShadows !== S) && (i.directional.length = p, i.spot.length = v, i.rectArea.length = _, i.point.length = f, i.hemi.length = b, i.directionalShadow.length = x, i.directionalShadowMap.length = x, i.pointShadow.length = M, i.pointShadowMap.length = M, i.spotShadow.length = S, i.spotShadowMap.length = S, i.directionalShadowMatrix.length = x, i.pointShadowMatrix.length = M, i.spotShadowMatrix.length = S, y.directionalLength = p, y.pointLength = f, y.spotLength = v, y.rectAreaLength = _, y.hemiLength = b, y.numDirectionalShadows = x, y.numPointShadows = M, y.numSpotShadows = S, i.version = Pu++);
  }
  function l(u, d) {
    let c = 0, m = 0, g = 0, p = 0, f = 0;
    const v = d.matrixWorldInverse;
    for (let _ = 0, b = u.length; _ < b; _++) {
      const x = u[_];
      if (x.isDirectionalLight) {
        const M = i.directional[c];
        M.direction.setFromMatrixPosition(x.matrixWorld), s.setFromMatrixPosition(x.target.matrixWorld), M.direction.sub(s), M.direction.transformDirection(v), c++;
      } else if (x.isSpotLight) {
        const M = i.spot[g];
        M.position.setFromMatrixPosition(x.matrixWorld), M.position.applyMatrix4(v), M.direction.setFromMatrixPosition(x.matrixWorld), s.setFromMatrixPosition(x.target.matrixWorld), M.direction.sub(s), M.direction.transformDirection(v), g++;
      } else if (x.isRectAreaLight) {
        const M = i.rectArea[p];
        M.position.setFromMatrixPosition(x.matrixWorld), M.position.applyMatrix4(v), r.identity(), o.copy(x.matrixWorld), o.premultiply(v), r.extractRotation(o), M.halfWidth.set(x.width * 0.5, 0, 0), M.halfHeight.set(0, x.height * 0.5, 0), M.halfWidth.applyMatrix4(r), M.halfHeight.applyMatrix4(r), p++;
      } else if (x.isPointLight) {
        const M = i.point[m];
        M.position.setFromMatrixPosition(x.matrixWorld), M.position.applyMatrix4(v), m++;
      } else if (x.isHemisphereLight) {
        const M = i.hemi[f];
        M.direction.setFromMatrixPosition(x.matrixWorld), M.direction.transformDirection(v), f++;
      }
    }
  }
  return {
    setup: a,
    setupView: l,
    state: i
  };
}
function Gr(h, e) {
  const t = new zu(h, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function o(d) {
    n.push(d);
  }
  function r(d) {
    i.push(d);
  }
  function a(d) {
    t.setup(n, d);
  }
  function l(d) {
    t.setupView(n, d);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: a,
    setupLightsView: l,
    pushLight: o,
    pushShadow: r
  };
}
function Bu(h, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, o = 0) {
    let r;
    return t.has(s) === !1 ? (r = new Gr(h, e), t.set(s, [r])) : o >= t.get(s).length ? (r = new Gr(h, e), t.get(s).push(r)) : r = t.get(s)[o], r;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class Nu extends un {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Ou extends un {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new B(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Uu = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Gu = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function ku(h, e, t) {
  let n = new Zs();
  const i = new Ce(), s = new Ce(), o = new Ge(), r = new Nu({ depthPacking: 3201 }), a = new Ou(), l = {}, u = t.maxTextureSize, d = { 0: 1, 1: 0, 2: 2 }, c = new An({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Ce() },
      radius: { value: 4 }
    },
    vertexShader: Uu,
    fragmentShader: Gu
  }), m = c.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Et();
  g.setAttribute(
    "position",
    new Dt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const p = new ke(g, c), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(x, M, S) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || x.length === 0)
      return;
    const C = h.getRenderTarget(), y = h.getActiveCubeFace(), A = h.getActiveMipmapLevel(), P = h.state;
    P.setBlending(0), P.buffers.color.setClear(1, 1, 1, 1), P.buffers.depth.setTest(!0), P.setScissorTest(!1);
    for (let z = 0, H = x.length; z < H; z++) {
      const D = x[z], L = D.shadow;
      if (L === void 0) {
        console.warn("THREE.WebGLShadowMap:", D, "has no shadow.");
        continue;
      }
      if (L.autoUpdate === !1 && L.needsUpdate === !1)
        continue;
      i.copy(L.mapSize);
      const I = L.getFrameExtents();
      if (i.multiply(I), s.copy(L.mapSize), (i.x > u || i.y > u) && (i.x > u && (s.x = Math.floor(u / I.x), i.x = s.x * I.x, L.mapSize.x = s.x), i.y > u && (s.y = Math.floor(u / I.y), i.y = s.y * I.y, L.mapSize.y = s.y)), L.map === null) {
        const q = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        L.map = new Tn(i.x, i.y, q), L.map.texture.name = D.name + ".shadowMap", L.camera.updateProjectionMatrix();
      }
      h.setRenderTarget(L.map), h.clear();
      const F = L.getViewportCount();
      for (let q = 0; q < F; q++) {
        const U = L.getViewport(q);
        o.set(
          s.x * U.x,
          s.y * U.y,
          s.x * U.z,
          s.y * U.w
        ), P.viewport(o), L.updateMatrices(D, q), n = L.getFrustum(), b(M, S, L.camera, D, this.type);
      }
      L.isPointLightShadow !== !0 && this.type === 3 && v(L, S), L.needsUpdate = !1;
    }
    f.needsUpdate = !1, h.setRenderTarget(C, y, A);
  };
  function v(x, M) {
    const S = e.update(p);
    c.defines.VSM_SAMPLES !== x.blurSamples && (c.defines.VSM_SAMPLES = x.blurSamples, m.defines.VSM_SAMPLES = x.blurSamples, c.needsUpdate = !0, m.needsUpdate = !0), x.mapPass === null && (x.mapPass = new Tn(i.x, i.y)), c.uniforms.shadow_pass.value = x.map.texture, c.uniforms.resolution.value = x.mapSize, c.uniforms.radius.value = x.radius, h.setRenderTarget(x.mapPass), h.clear(), h.renderBufferDirect(M, null, S, c, p, null), m.uniforms.shadow_pass.value = x.mapPass.texture, m.uniforms.resolution.value = x.mapSize, m.uniforms.radius.value = x.radius, h.setRenderTarget(x.map), h.clear(), h.renderBufferDirect(M, null, S, m, p, null);
  }
  function _(x, M, S, C, y, A) {
    let P = null;
    const z = S.isPointLight === !0 ? x.customDistanceMaterial : x.customDepthMaterial;
    if (z !== void 0 ? P = z : P = S.isPointLight === !0 ? a : r, h.localClippingEnabled && M.clipShadows === !0 && Array.isArray(M.clippingPlanes) && M.clippingPlanes.length !== 0 || M.displacementMap && M.displacementScale !== 0 || M.alphaMap && M.alphaTest > 0) {
      const H = P.uuid, D = M.uuid;
      let L = l[H];
      L === void 0 && (L = {}, l[H] = L);
      let I = L[D];
      I === void 0 && (I = P.clone(), L[D] = I), P = I;
    }
    return P.visible = M.visible, P.wireframe = M.wireframe, A === 3 ? P.side = M.shadowSide !== null ? M.shadowSide : M.side : P.side = M.shadowSide !== null ? M.shadowSide : d[M.side], P.alphaMap = M.alphaMap, P.alphaTest = M.alphaTest, P.clipShadows = M.clipShadows, P.clippingPlanes = M.clippingPlanes, P.clipIntersection = M.clipIntersection, P.displacementMap = M.displacementMap, P.displacementScale = M.displacementScale, P.displacementBias = M.displacementBias, P.wireframeLinewidth = M.wireframeLinewidth, P.linewidth = M.linewidth, S.isPointLight === !0 && P.isMeshDistanceMaterial === !0 && (P.referencePosition.setFromMatrixPosition(S.matrixWorld), P.nearDistance = C, P.farDistance = y), P;
  }
  function b(x, M, S, C, y) {
    if (x.visible === !1)
      return;
    if (x.layers.test(M.layers) && (x.isMesh || x.isLine || x.isPoints) && (x.castShadow || x.receiveShadow && y === 3) && (!x.frustumCulled || n.intersectsObject(x))) {
      x.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse, x.matrixWorld);
      const z = e.update(x), H = x.material;
      if (Array.isArray(H)) {
        const D = z.groups;
        for (let L = 0, I = D.length; L < I; L++) {
          const F = D[L], q = H[F.materialIndex];
          if (q && q.visible) {
            const U = _(x, q, C, S.near, S.far, y);
            h.renderBufferDirect(S, null, z, U, x, F);
          }
        }
      } else if (H.visible) {
        const D = _(x, H, C, S.near, S.far, y);
        h.renderBufferDirect(S, null, z, D, x, null);
      }
    }
    const P = x.children;
    for (let z = 0, H = P.length; z < H; z++)
      b(P[z], M, S, C, y);
  }
}
function Wu(h, e, t) {
  const n = t.isWebGL2;
  function i() {
    let N = !1;
    const ae = new Ge();
    let Y = null;
    const oe = new Ge(0, 0, 0, 0);
    return {
      setMask: function(se) {
        Y !== se && !N && (h.colorMask(se, se, se, se), Y = se);
      },
      setLocked: function(se) {
        N = se;
      },
      setClear: function(se, Re, Qe, qe, en) {
        en === !0 && (se *= qe, Re *= qe, Qe *= qe), ae.set(se, Re, Qe, qe), oe.equals(ae) === !1 && (h.clearColor(se, Re, Qe, qe), oe.copy(ae));
      },
      reset: function() {
        N = !1, Y = null, oe.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let N = !1, ae = null, Y = null, oe = null;
    return {
      setTest: function(se) {
        se ? De(2929) : ve(2929);
      },
      setMask: function(se) {
        ae !== se && !N && (h.depthMask(se), ae = se);
      },
      setFunc: function(se) {
        if (Y !== se) {
          if (se)
            switch (se) {
              case 0:
                h.depthFunc(512);
                break;
              case 1:
                h.depthFunc(519);
                break;
              case 2:
                h.depthFunc(513);
                break;
              case 3:
                h.depthFunc(515);
                break;
              case 4:
                h.depthFunc(514);
                break;
              case 5:
                h.depthFunc(518);
                break;
              case 6:
                h.depthFunc(516);
                break;
              case 7:
                h.depthFunc(517);
                break;
              default:
                h.depthFunc(515);
            }
          else
            h.depthFunc(515);
          Y = se;
        }
      },
      setLocked: function(se) {
        N = se;
      },
      setClear: function(se) {
        oe !== se && (h.clearDepth(se), oe = se);
      },
      reset: function() {
        N = !1, ae = null, Y = null, oe = null;
      }
    };
  }
  function o() {
    let N = !1, ae = null, Y = null, oe = null, se = null, Re = null, Qe = null, qe = null, en = null;
    return {
      setTest: function(We) {
        N || (We ? De(2960) : ve(2960));
      },
      setMask: function(We) {
        ae !== We && !N && (h.stencilMask(We), ae = We);
      },
      setFunc: function(We, kt, yt) {
        (Y !== We || oe !== kt || se !== yt) && (h.stencilFunc(We, kt, yt), Y = We, oe = kt, se = yt);
      },
      setOp: function(We, kt, yt) {
        (Re !== We || Qe !== kt || qe !== yt) && (h.stencilOp(We, kt, yt), Re = We, Qe = kt, qe = yt);
      },
      setLocked: function(We) {
        N = We;
      },
      setClear: function(We) {
        en !== We && (h.clearStencil(We), en = We);
      },
      reset: function() {
        N = !1, ae = null, Y = null, oe = null, se = null, Re = null, Qe = null, qe = null, en = null;
      }
    };
  }
  const r = new i(), a = new s(), l = new o(), u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
  let c = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), p = [], f = null, v = !1, _ = null, b = null, x = null, M = null, S = null, C = null, y = null, A = !1, P = null, z = null, H = null, D = null, L = null;
  const I = h.getParameter(35661);
  let F = !1, q = 0;
  const U = h.getParameter(7938);
  U.indexOf("WebGL") !== -1 ? (q = parseFloat(/^WebGL (\d)/.exec(U)[1]), F = q >= 1) : U.indexOf("OpenGL ES") !== -1 && (q = parseFloat(/^OpenGL ES (\d)/.exec(U)[1]), F = q >= 2);
  let O = null, k = {};
  const J = h.getParameter(3088), V = h.getParameter(2978), ee = new Ge().fromArray(J), ce = new Ge().fromArray(V);
  function ge(N, ae, Y) {
    const oe = new Uint8Array(4), se = h.createTexture();
    h.bindTexture(N, se), h.texParameteri(N, 10241, 9728), h.texParameteri(N, 10240, 9728);
    for (let Re = 0; Re < Y; Re++)
      h.texImage2D(ae + Re, 0, 6408, 1, 1, 0, 6408, 5121, oe);
    return se;
  }
  const Z = {};
  Z[3553] = ge(3553, 3553, 1), Z[34067] = ge(34067, 34069, 6), r.setClear(0, 0, 0, 1), a.setClear(1), l.setClear(0), De(2929), a.setFunc(3), at(!1), Pt(1), De(2884), tt(0);
  function De(N) {
    c[N] !== !0 && (h.enable(N), c[N] = !0);
  }
  function ve(N) {
    c[N] !== !1 && (h.disable(N), c[N] = !1);
  }
  function xe(N, ae) {
    return m[N] !== ae ? (h.bindFramebuffer(N, ae), m[N] = ae, n && (N === 36009 && (m[36160] = ae), N === 36160 && (m[36009] = ae)), !0) : !1;
  }
  function ue(N, ae) {
    let Y = p, oe = !1;
    if (N)
      if (Y = g.get(ae), Y === void 0 && (Y = [], g.set(ae, Y)), N.isWebGLMultipleRenderTargets) {
        const se = N.texture;
        if (Y.length !== se.length || Y[0] !== 36064) {
          for (let Re = 0, Qe = se.length; Re < Qe; Re++)
            Y[Re] = 36064 + Re;
          Y.length = se.length, oe = !0;
        }
      } else
        Y[0] !== 36064 && (Y[0] = 36064, oe = !0);
    else
      Y[0] !== 1029 && (Y[0] = 1029, oe = !0);
    oe && (t.isWebGL2 ? h.drawBuffers(Y) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y));
  }
  function Oe(N) {
    return f !== N ? (h.useProgram(N), f = N, !0) : !1;
  }
  const Ee = {
    [100]: 32774,
    [101]: 32778,
    [102]: 32779
  };
  if (n)
    Ee[103] = 32775, Ee[104] = 32776;
  else {
    const N = e.get("EXT_blend_minmax");
    N !== null && (Ee[103] = N.MIN_EXT, Ee[104] = N.MAX_EXT);
  }
  const me = {
    [200]: 0,
    [201]: 1,
    [202]: 768,
    [204]: 770,
    [210]: 776,
    [208]: 774,
    [206]: 772,
    [203]: 769,
    [205]: 771,
    [209]: 775,
    [207]: 773
  };
  function tt(N, ae, Y, oe, se, Re, Qe, qe) {
    if (N === 0) {
      v === !0 && (ve(3042), v = !1);
      return;
    }
    if (v === !1 && (De(3042), v = !0), N !== 5) {
      if (N !== _ || qe !== A) {
        if ((b !== 100 || S !== 100) && (h.blendEquation(32774), b = 100, S = 100), qe)
          switch (N) {
            case 1:
              h.blendFuncSeparate(1, 771, 1, 771);
              break;
            case 2:
              h.blendFunc(1, 1);
              break;
            case 3:
              h.blendFuncSeparate(0, 769, 0, 1);
              break;
            case 4:
              h.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", N);
              break;
          }
        else
          switch (N) {
            case 1:
              h.blendFuncSeparate(770, 771, 1, 771);
              break;
            case 2:
              h.blendFunc(770, 1);
              break;
            case 3:
              h.blendFuncSeparate(0, 769, 0, 1);
              break;
            case 4:
              h.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", N);
              break;
          }
        x = null, M = null, C = null, y = null, _ = N, A = qe;
      }
      return;
    }
    se = se || ae, Re = Re || Y, Qe = Qe || oe, (ae !== b || se !== S) && (h.blendEquationSeparate(Ee[ae], Ee[se]), b = ae, S = se), (Y !== x || oe !== M || Re !== C || Qe !== y) && (h.blendFuncSeparate(me[Y], me[oe], me[Re], me[Qe]), x = Y, M = oe, C = Re, y = Qe), _ = N, A = null;
  }
  function ft(N, ae) {
    N.side === 2 ? ve(2884) : De(2884);
    let Y = N.side === 1;
    ae && (Y = !Y), at(Y), N.blending === 1 && N.transparent === !1 ? tt(0) : tt(N.blending, N.blendEquation, N.blendSrc, N.blendDst, N.blendEquationAlpha, N.blendSrcAlpha, N.blendDstAlpha, N.premultipliedAlpha), a.setFunc(N.depthFunc), a.setTest(N.depthTest), a.setMask(N.depthWrite), r.setMask(N.colorWrite);
    const oe = N.stencilWrite;
    l.setTest(oe), oe && (l.setMask(N.stencilWriteMask), l.setFunc(N.stencilFunc, N.stencilRef, N.stencilFuncMask), l.setOp(N.stencilFail, N.stencilZFail, N.stencilZPass)), Ne(N.polygonOffset, N.polygonOffsetFactor, N.polygonOffsetUnits), N.alphaToCoverage === !0 ? De(32926) : ve(32926);
  }
  function at(N) {
    P !== N && (N ? h.frontFace(2304) : h.frontFace(2305), P = N);
  }
  function Pt(N) {
    N !== 0 ? (De(2884), N !== z && (N === 1 ? h.cullFace(1029) : N === 2 ? h.cullFace(1028) : h.cullFace(1032))) : ve(2884), z = N;
  }
  function nt(N) {
    N !== H && (F && h.lineWidth(N), H = N);
  }
  function Ne(N, ae, Y) {
    N ? (De(32823), (D !== ae || L !== Y) && (h.polygonOffset(ae, Y), D = ae, L = Y)) : ve(32823);
  }
  function Gt(N) {
    N ? De(3089) : ve(3089);
  }
  function It(N) {
    N === void 0 && (N = 33984 + I - 1), O !== N && (h.activeTexture(N), O = N);
  }
  function R(N, ae) {
    O === null && It();
    let Y = k[O];
    Y === void 0 && (Y = { type: void 0, texture: void 0 }, k[O] = Y), (Y.type !== N || Y.texture !== ae) && (h.bindTexture(N, ae || Z[N]), Y.type = N, Y.texture = ae);
  }
  function E() {
    const N = k[O];
    N !== void 0 && N.type !== void 0 && (h.bindTexture(N.type, null), N.type = void 0, N.texture = void 0);
  }
  function $() {
    try {
      h.compressedTexImage2D.apply(h, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function Q() {
    try {
      h.texSubImage2D.apply(h, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function te() {
    try {
      h.texSubImage3D.apply(h, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function re() {
    try {
      h.compressedTexSubImage2D.apply(h, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function ye() {
    try {
      h.texStorage2D.apply(h, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function j() {
    try {
      h.texStorage3D.apply(h, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function pe() {
    try {
      h.texImage2D.apply(h, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function he() {
    try {
      h.texImage3D.apply(h, arguments);
    } catch (N) {
      console.error("THREE.WebGLState:", N);
    }
  }
  function fe(N) {
    ee.equals(N) === !1 && (h.scissor(N.x, N.y, N.z, N.w), ee.copy(N));
  }
  function de(N) {
    ce.equals(N) === !1 && (h.viewport(N.x, N.y, N.z, N.w), ce.copy(N));
  }
  function be(N, ae) {
    let Y = d.get(ae);
    Y === void 0 && (Y = /* @__PURE__ */ new WeakMap(), d.set(ae, Y));
    let oe = Y.get(N);
    oe === void 0 && (oe = h.getUniformBlockIndex(ae, N.name), Y.set(N, oe));
  }
  function Ie(N, ae) {
    const oe = d.get(ae).get(N);
    u.get(N) !== oe && (h.uniformBlockBinding(ae, oe, N.__bindingPointIndex), u.set(N, oe));
  }
  function He() {
    h.disable(3042), h.disable(2884), h.disable(2929), h.disable(32823), h.disable(3089), h.disable(2960), h.disable(32926), h.blendEquation(32774), h.blendFunc(1, 0), h.blendFuncSeparate(1, 0, 1, 0), h.colorMask(!0, !0, !0, !0), h.clearColor(0, 0, 0, 0), h.depthMask(!0), h.depthFunc(513), h.clearDepth(1), h.stencilMask(4294967295), h.stencilFunc(519, 0, 4294967295), h.stencilOp(7680, 7680, 7680), h.clearStencil(0), h.cullFace(1029), h.frontFace(2305), h.polygonOffset(0, 0), h.activeTexture(33984), h.bindFramebuffer(36160, null), n === !0 && (h.bindFramebuffer(36009, null), h.bindFramebuffer(36008, null)), h.useProgram(null), h.lineWidth(1), h.scissor(0, 0, h.canvas.width, h.canvas.height), h.viewport(0, 0, h.canvas.width, h.canvas.height), c = {}, O = null, k = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), p = [], f = null, v = !1, _ = null, b = null, x = null, M = null, S = null, C = null, y = null, A = !1, P = null, z = null, H = null, D = null, L = null, ee.set(0, 0, h.canvas.width, h.canvas.height), ce.set(0, 0, h.canvas.width, h.canvas.height), r.reset(), a.reset(), l.reset();
  }
  return {
    buffers: {
      color: r,
      depth: a,
      stencil: l
    },
    enable: De,
    disable: ve,
    bindFramebuffer: xe,
    drawBuffers: ue,
    useProgram: Oe,
    setBlending: tt,
    setMaterial: ft,
    setFlipSided: at,
    setCullFace: Pt,
    setLineWidth: nt,
    setPolygonOffset: Ne,
    setScissorTest: Gt,
    activeTexture: It,
    bindTexture: R,
    unbindTexture: E,
    compressedTexImage2D: $,
    texImage2D: pe,
    texImage3D: he,
    updateUBOMapping: be,
    uniformBlockBinding: Ie,
    texStorage2D: ye,
    texStorage3D: j,
    texSubImage2D: Q,
    texSubImage3D: te,
    compressedTexSubImage2D: re,
    scissor: fe,
    viewport: de,
    reset: He
  };
}
function Vu(h, e, t, n, i, s, o) {
  const r = i.isWebGL2, a = i.maxTextures, l = i.maxCubemapSize, u = i.maxTextureSize, d = i.maxSamples, c = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let p;
  const f = /* @__PURE__ */ new WeakMap();
  let v = !1;
  try {
    v = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(R, E) {
    return v ? new OffscreenCanvas(R, E) : Zi("canvas");
  }
  function b(R, E, $, Q) {
    let te = 1;
    if ((R.width > Q || R.height > Q) && (te = Q / Math.max(R.width, R.height)), te < 1 || E === !0)
      if (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && R instanceof ImageBitmap) {
        const re = E ? Vs : Math.floor, ye = re(te * R.width), j = re(te * R.height);
        p === void 0 && (p = _(ye, j));
        const pe = $ ? _(ye, j) : p;
        return pe.width = ye, pe.height = j, pe.getContext("2d").drawImage(R, 0, 0, ye, j), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + R.width + "x" + R.height + ") to (" + ye + "x" + j + ")."), pe;
      } else
        return "data" in R && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + R.width + "x" + R.height + ")."), R;
    return R;
  }
  function x(R) {
    return lr(R.width) && lr(R.height);
  }
  function M(R) {
    return r ? !1 : R.wrapS !== 1001 || R.wrapT !== 1001 || R.minFilter !== 1003 && R.minFilter !== 1006;
  }
  function S(R, E) {
    return R.generateMipmaps && E && R.minFilter !== 1003 && R.minFilter !== 1006;
  }
  function C(R) {
    h.generateMipmap(R);
  }
  function y(R, E, $, Q, te = !1) {
    if (r === !1)
      return E;
    if (R !== null) {
      if (h[R] !== void 0)
        return h[R];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + R + "'");
    }
    let re = E;
    return E === 6403 && ($ === 5126 && (re = 33326), $ === 5131 && (re = 33325), $ === 5121 && (re = 33321)), E === 33319 && ($ === 5126 && (re = 33328), $ === 5131 && (re = 33327), $ === 5121 && (re = 33323)), E === 6408 && ($ === 5126 && (re = 34836), $ === 5131 && (re = 34842), $ === 5121 && (re = Q === 3001 && te === !1 ? 35907 : 32856), $ === 32819 && (re = 32854), $ === 32820 && (re = 32855)), (re === 33325 || re === 33326 || re === 33327 || re === 33328 || re === 34842 || re === 34836) && e.get("EXT_color_buffer_float"), re;
  }
  function A(R, E, $) {
    return S(R, $) === !0 || R.isFramebufferTexture && R.minFilter !== 1003 && R.minFilter !== 1006 ? Math.log2(Math.max(E.width, E.height)) + 1 : R.mipmaps !== void 0 && R.mipmaps.length > 0 ? R.mipmaps.length : R.isCompressedTexture && Array.isArray(R.image) ? E.mipmaps.length : 1;
  }
  function P(R) {
    return R === 1003 || R === 1004 || R === 1005 ? 9728 : 9729;
  }
  function z(R) {
    const E = R.target;
    E.removeEventListener("dispose", z), D(E), E.isVideoTexture && g.delete(E);
  }
  function H(R) {
    const E = R.target;
    E.removeEventListener("dispose", H), I(E);
  }
  function D(R) {
    const E = n.get(R);
    if (E.__webglInit === void 0)
      return;
    const $ = R.source, Q = f.get($);
    if (Q) {
      const te = Q[E.__cacheKey];
      te.usedTimes--, te.usedTimes === 0 && L(R), Object.keys(Q).length === 0 && f.delete($);
    }
    n.remove(R);
  }
  function L(R) {
    const E = n.get(R);
    h.deleteTexture(E.__webglTexture);
    const $ = R.source, Q = f.get($);
    delete Q[E.__cacheKey], o.memory.textures--;
  }
  function I(R) {
    const E = R.texture, $ = n.get(R), Q = n.get(E);
    if (Q.__webglTexture !== void 0 && (h.deleteTexture(Q.__webglTexture), o.memory.textures--), R.depthTexture && R.depthTexture.dispose(), R.isWebGLCubeRenderTarget)
      for (let te = 0; te < 6; te++)
        h.deleteFramebuffer($.__webglFramebuffer[te]), $.__webglDepthbuffer && h.deleteRenderbuffer($.__webglDepthbuffer[te]);
    else {
      if (h.deleteFramebuffer($.__webglFramebuffer), $.__webglDepthbuffer && h.deleteRenderbuffer($.__webglDepthbuffer), $.__webglMultisampledFramebuffer && h.deleteFramebuffer($.__webglMultisampledFramebuffer), $.__webglColorRenderbuffer)
        for (let te = 0; te < $.__webglColorRenderbuffer.length; te++)
          $.__webglColorRenderbuffer[te] && h.deleteRenderbuffer($.__webglColorRenderbuffer[te]);
      $.__webglDepthRenderbuffer && h.deleteRenderbuffer($.__webglDepthRenderbuffer);
    }
    if (R.isWebGLMultipleRenderTargets)
      for (let te = 0, re = E.length; te < re; te++) {
        const ye = n.get(E[te]);
        ye.__webglTexture && (h.deleteTexture(ye.__webglTexture), o.memory.textures--), n.remove(E[te]);
      }
    n.remove(E), n.remove(R);
  }
  let F = 0;
  function q() {
    F = 0;
  }
  function U() {
    const R = F;
    return R >= a && console.warn("THREE.WebGLTextures: Trying to use " + R + " texture units while this GPU supports only " + a), F += 1, R;
  }
  function O(R) {
    const E = [];
    return E.push(R.wrapS), E.push(R.wrapT), E.push(R.magFilter), E.push(R.minFilter), E.push(R.anisotropy), E.push(R.internalFormat), E.push(R.format), E.push(R.type), E.push(R.generateMipmaps), E.push(R.premultiplyAlpha), E.push(R.flipY), E.push(R.unpackAlignment), E.push(R.encoding), E.join();
  }
  function k(R, E) {
    const $ = n.get(R);
    if (R.isVideoTexture && Gt(R), R.isRenderTargetTexture === !1 && R.version > 0 && $.__version !== R.version) {
      const Q = R.image;
      if (Q === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Q.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ve($, R, E);
        return;
      }
    }
    t.activeTexture(33984 + E), t.bindTexture(3553, $.__webglTexture);
  }
  function J(R, E) {
    const $ = n.get(R);
    if (R.version > 0 && $.__version !== R.version) {
      ve($, R, E);
      return;
    }
    t.activeTexture(33984 + E), t.bindTexture(35866, $.__webglTexture);
  }
  function V(R, E) {
    const $ = n.get(R);
    if (R.version > 0 && $.__version !== R.version) {
      ve($, R, E);
      return;
    }
    t.activeTexture(33984 + E), t.bindTexture(32879, $.__webglTexture);
  }
  function ee(R, E) {
    const $ = n.get(R);
    if (R.version > 0 && $.__version !== R.version) {
      xe($, R, E);
      return;
    }
    t.activeTexture(33984 + E), t.bindTexture(34067, $.__webglTexture);
  }
  const ce = {
    [1e3]: 10497,
    [1001]: 33071,
    [1002]: 33648
  }, ge = {
    [1003]: 9728,
    [1004]: 9984,
    [1005]: 9986,
    [1006]: 9729,
    [1007]: 9985,
    [1008]: 9987
  };
  function Z(R, E, $) {
    if ($ ? (h.texParameteri(R, 10242, ce[E.wrapS]), h.texParameteri(R, 10243, ce[E.wrapT]), (R === 32879 || R === 35866) && h.texParameteri(R, 32882, ce[E.wrapR]), h.texParameteri(R, 10240, ge[E.magFilter]), h.texParameteri(R, 10241, ge[E.minFilter])) : (h.texParameteri(R, 10242, 33071), h.texParameteri(R, 10243, 33071), (R === 32879 || R === 35866) && h.texParameteri(R, 32882, 33071), (E.wrapS !== 1001 || E.wrapT !== 1001) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), h.texParameteri(R, 10240, P(E.magFilter)), h.texParameteri(R, 10241, P(E.minFilter)), E.minFilter !== 1003 && E.minFilter !== 1006 && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const Q = e.get("EXT_texture_filter_anisotropic");
      if (E.type === 1015 && e.has("OES_texture_float_linear") === !1 || r === !1 && E.type === 1016 && e.has("OES_texture_half_float_linear") === !1)
        return;
      (E.anisotropy > 1 || n.get(E).__currentAnisotropy) && (h.texParameterf(R, Q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(E.anisotropy, i.getMaxAnisotropy())), n.get(E).__currentAnisotropy = E.anisotropy);
    }
  }
  function De(R, E) {
    let $ = !1;
    R.__webglInit === void 0 && (R.__webglInit = !0, E.addEventListener("dispose", z));
    const Q = E.source;
    let te = f.get(Q);
    te === void 0 && (te = {}, f.set(Q, te));
    const re = O(E);
    if (re !== R.__cacheKey) {
      te[re] === void 0 && (te[re] = {
        texture: h.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, $ = !0), te[re].usedTimes++;
      const ye = te[R.__cacheKey];
      ye !== void 0 && (te[R.__cacheKey].usedTimes--, ye.usedTimes === 0 && L(E)), R.__cacheKey = re, R.__webglTexture = te[re].texture;
    }
    return $;
  }
  function ve(R, E, $) {
    let Q = 3553;
    E.isDataArrayTexture && (Q = 35866), E.isData3DTexture && (Q = 32879);
    const te = De(R, E), re = E.source;
    if (t.activeTexture(33984 + $), t.bindTexture(Q, R.__webglTexture), re.version !== re.__currentVersion || te === !0) {
      h.pixelStorei(37440, E.flipY), h.pixelStorei(37441, E.premultiplyAlpha), h.pixelStorei(3317, E.unpackAlignment), h.pixelStorei(37443, 0);
      const ye = M(E) && x(E.image) === !1;
      let j = b(E.image, ye, !1, u);
      j = It(E, j);
      const pe = x(j) || r, he = s.convert(E.format, E.encoding);
      let fe = s.convert(E.type), de = y(E.internalFormat, he, fe, E.encoding, E.isVideoTexture);
      Z(Q, E, pe);
      let be;
      const Ie = E.mipmaps, He = r && E.isVideoTexture !== !0, N = re.__currentVersion === void 0 || te === !0, ae = A(E, j, pe);
      if (E.isDepthTexture)
        de = 6402, r ? E.type === 1015 ? de = 36012 : E.type === 1014 ? de = 33190 : E.type === 1020 ? de = 35056 : de = 33189 : E.type === 1015 && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), E.format === 1026 && de === 6402 && E.type !== 1012 && E.type !== 1014 && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), E.type = 1014, fe = s.convert(E.type)), E.format === 1027 && de === 6402 && (de = 34041, E.type !== 1020 && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), E.type = 1020, fe = s.convert(E.type))), N && (He ? t.texStorage2D(3553, 1, de, j.width, j.height) : t.texImage2D(3553, 0, de, j.width, j.height, 0, he, fe, null));
      else if (E.isDataTexture)
        if (Ie.length > 0 && pe) {
          He && N && t.texStorage2D(3553, ae, de, Ie[0].width, Ie[0].height);
          for (let Y = 0, oe = Ie.length; Y < oe; Y++)
            be = Ie[Y], He ? t.texSubImage2D(3553, Y, 0, 0, be.width, be.height, he, fe, be.data) : t.texImage2D(3553, Y, de, be.width, be.height, 0, he, fe, be.data);
          E.generateMipmaps = !1;
        } else
          He ? (N && t.texStorage2D(3553, ae, de, j.width, j.height), t.texSubImage2D(3553, 0, 0, 0, j.width, j.height, he, fe, j.data)) : t.texImage2D(3553, 0, de, j.width, j.height, 0, he, fe, j.data);
      else if (E.isCompressedTexture) {
        He && N && t.texStorage2D(3553, ae, de, Ie[0].width, Ie[0].height);
        for (let Y = 0, oe = Ie.length; Y < oe; Y++)
          be = Ie[Y], E.format !== 1023 ? he !== null ? He ? t.compressedTexSubImage2D(3553, Y, 0, 0, be.width, be.height, he, be.data) : t.compressedTexImage2D(3553, Y, de, be.width, be.height, 0, be.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : He ? t.texSubImage2D(3553, Y, 0, 0, be.width, be.height, he, fe, be.data) : t.texImage2D(3553, Y, de, be.width, be.height, 0, he, fe, be.data);
      } else if (E.isDataArrayTexture)
        He ? (N && t.texStorage3D(35866, ae, de, j.width, j.height, j.depth), t.texSubImage3D(35866, 0, 0, 0, 0, j.width, j.height, j.depth, he, fe, j.data)) : t.texImage3D(35866, 0, de, j.width, j.height, j.depth, 0, he, fe, j.data);
      else if (E.isData3DTexture)
        He ? (N && t.texStorage3D(32879, ae, de, j.width, j.height, j.depth), t.texSubImage3D(32879, 0, 0, 0, 0, j.width, j.height, j.depth, he, fe, j.data)) : t.texImage3D(32879, 0, de, j.width, j.height, j.depth, 0, he, fe, j.data);
      else if (E.isFramebufferTexture) {
        if (N)
          if (He)
            t.texStorage2D(3553, ae, de, j.width, j.height);
          else {
            let Y = j.width, oe = j.height;
            for (let se = 0; se < ae; se++)
              t.texImage2D(3553, se, de, Y, oe, 0, he, fe, null), Y >>= 1, oe >>= 1;
          }
      } else if (Ie.length > 0 && pe) {
        He && N && t.texStorage2D(3553, ae, de, Ie[0].width, Ie[0].height);
        for (let Y = 0, oe = Ie.length; Y < oe; Y++)
          be = Ie[Y], He ? t.texSubImage2D(3553, Y, 0, 0, he, fe, be) : t.texImage2D(3553, Y, de, he, fe, be);
        E.generateMipmaps = !1;
      } else
        He ? (N && t.texStorage2D(3553, ae, de, j.width, j.height), t.texSubImage2D(3553, 0, 0, 0, he, fe, j)) : t.texImage2D(3553, 0, de, he, fe, j);
      S(E, pe) && C(Q), re.__currentVersion = re.version, E.onUpdate && E.onUpdate(E);
    }
    R.__version = E.version;
  }
  function xe(R, E, $) {
    if (E.image.length !== 6)
      return;
    const Q = De(R, E), te = E.source;
    if (t.activeTexture(33984 + $), t.bindTexture(34067, R.__webglTexture), te.version !== te.__currentVersion || Q === !0) {
      h.pixelStorei(37440, E.flipY), h.pixelStorei(37441, E.premultiplyAlpha), h.pixelStorei(3317, E.unpackAlignment), h.pixelStorei(37443, 0);
      const re = E.isCompressedTexture || E.image[0].isCompressedTexture, ye = E.image[0] && E.image[0].isDataTexture, j = [];
      for (let Y = 0; Y < 6; Y++)
        !re && !ye ? j[Y] = b(E.image[Y], !1, !0, l) : j[Y] = ye ? E.image[Y].image : E.image[Y], j[Y] = It(E, j[Y]);
      const pe = j[0], he = x(pe) || r, fe = s.convert(E.format, E.encoding), de = s.convert(E.type), be = y(E.internalFormat, fe, de, E.encoding), Ie = r && E.isVideoTexture !== !0, He = te.__currentVersion === void 0 || Q === !0;
      let N = A(E, pe, he);
      Z(34067, E, he);
      let ae;
      if (re) {
        Ie && He && t.texStorage2D(34067, N, be, pe.width, pe.height);
        for (let Y = 0; Y < 6; Y++) {
          ae = j[Y].mipmaps;
          for (let oe = 0; oe < ae.length; oe++) {
            const se = ae[oe];
            E.format !== 1023 ? fe !== null ? Ie ? t.compressedTexSubImage2D(34069 + Y, oe, 0, 0, se.width, se.height, fe, se.data) : t.compressedTexImage2D(34069 + Y, oe, be, se.width, se.height, 0, se.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ie ? t.texSubImage2D(34069 + Y, oe, 0, 0, se.width, se.height, fe, de, se.data) : t.texImage2D(34069 + Y, oe, be, se.width, se.height, 0, fe, de, se.data);
          }
        }
      } else {
        ae = E.mipmaps, Ie && He && (ae.length > 0 && N++, t.texStorage2D(34067, N, be, j[0].width, j[0].height));
        for (let Y = 0; Y < 6; Y++)
          if (ye) {
            Ie ? t.texSubImage2D(34069 + Y, 0, 0, 0, j[Y].width, j[Y].height, fe, de, j[Y].data) : t.texImage2D(34069 + Y, 0, be, j[Y].width, j[Y].height, 0, fe, de, j[Y].data);
            for (let oe = 0; oe < ae.length; oe++) {
              const Re = ae[oe].image[Y].image;
              Ie ? t.texSubImage2D(34069 + Y, oe + 1, 0, 0, Re.width, Re.height, fe, de, Re.data) : t.texImage2D(34069 + Y, oe + 1, be, Re.width, Re.height, 0, fe, de, Re.data);
            }
          } else {
            Ie ? t.texSubImage2D(34069 + Y, 0, 0, 0, fe, de, j[Y]) : t.texImage2D(34069 + Y, 0, be, fe, de, j[Y]);
            for (let oe = 0; oe < ae.length; oe++) {
              const se = ae[oe];
              Ie ? t.texSubImage2D(34069 + Y, oe + 1, 0, 0, fe, de, se.image[Y]) : t.texImage2D(34069 + Y, oe + 1, be, fe, de, se.image[Y]);
            }
          }
      }
      S(E, he) && C(34067), te.__currentVersion = te.version, E.onUpdate && E.onUpdate(E);
    }
    R.__version = E.version;
  }
  function ue(R, E, $, Q, te) {
    const re = s.convert($.format, $.encoding), ye = s.convert($.type), j = y($.internalFormat, re, ye, $.encoding);
    n.get(E).__hasExternalTextures || (te === 32879 || te === 35866 ? t.texImage3D(te, 0, j, E.width, E.height, E.depth, 0, re, ye, null) : t.texImage2D(te, 0, j, E.width, E.height, 0, re, ye, null)), t.bindFramebuffer(36160, R), Ne(E) ? c.framebufferTexture2DMultisampleEXT(36160, Q, te, n.get($).__webglTexture, 0, nt(E)) : h.framebufferTexture2D(36160, Q, te, n.get($).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function Oe(R, E, $) {
    if (h.bindRenderbuffer(36161, R), E.depthBuffer && !E.stencilBuffer) {
      let Q = 33189;
      if ($ || Ne(E)) {
        const te = E.depthTexture;
        te && te.isDepthTexture && (te.type === 1015 ? Q = 36012 : te.type === 1014 && (Q = 33190));
        const re = nt(E);
        Ne(E) ? c.renderbufferStorageMultisampleEXT(36161, re, Q, E.width, E.height) : h.renderbufferStorageMultisample(36161, re, Q, E.width, E.height);
      } else
        h.renderbufferStorage(36161, Q, E.width, E.height);
      h.framebufferRenderbuffer(36160, 36096, 36161, R);
    } else if (E.depthBuffer && E.stencilBuffer) {
      const Q = nt(E);
      $ && Ne(E) === !1 ? h.renderbufferStorageMultisample(36161, Q, 35056, E.width, E.height) : Ne(E) ? c.renderbufferStorageMultisampleEXT(36161, Q, 35056, E.width, E.height) : h.renderbufferStorage(36161, 34041, E.width, E.height), h.framebufferRenderbuffer(36160, 33306, 36161, R);
    } else {
      const Q = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture];
      for (let te = 0; te < Q.length; te++) {
        const re = Q[te], ye = s.convert(re.format, re.encoding), j = s.convert(re.type), pe = y(re.internalFormat, ye, j, re.encoding), he = nt(E);
        $ && Ne(E) === !1 ? h.renderbufferStorageMultisample(36161, he, pe, E.width, E.height) : Ne(E) ? c.renderbufferStorageMultisampleEXT(36161, he, pe, E.width, E.height) : h.renderbufferStorage(36161, pe, E.width, E.height);
      }
    }
    h.bindRenderbuffer(36161, null);
  }
  function Ee(R, E) {
    if (E && E.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(36160, R), !(E.depthTexture && E.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(E.depthTexture).__webglTexture || E.depthTexture.image.width !== E.width || E.depthTexture.image.height !== E.height) && (E.depthTexture.image.width = E.width, E.depthTexture.image.height = E.height, E.depthTexture.needsUpdate = !0), k(E.depthTexture, 0);
    const Q = n.get(E.depthTexture).__webglTexture, te = nt(E);
    if (E.depthTexture.format === 1026)
      Ne(E) ? c.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, Q, 0, te) : h.framebufferTexture2D(36160, 36096, 3553, Q, 0);
    else if (E.depthTexture.format === 1027)
      Ne(E) ? c.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, Q, 0, te) : h.framebufferTexture2D(36160, 33306, 3553, Q, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function me(R) {
    const E = n.get(R), $ = R.isWebGLCubeRenderTarget === !0;
    if (R.depthTexture && !E.__autoAllocateDepthBuffer) {
      if ($)
        throw new Error("target.depthTexture not supported in Cube render targets");
      Ee(E.__webglFramebuffer, R);
    } else if ($) {
      E.__webglDepthbuffer = [];
      for (let Q = 0; Q < 6; Q++)
        t.bindFramebuffer(36160, E.__webglFramebuffer[Q]), E.__webglDepthbuffer[Q] = h.createRenderbuffer(), Oe(E.__webglDepthbuffer[Q], R, !1);
    } else
      t.bindFramebuffer(36160, E.__webglFramebuffer), E.__webglDepthbuffer = h.createRenderbuffer(), Oe(E.__webglDepthbuffer, R, !1);
    t.bindFramebuffer(36160, null);
  }
  function tt(R, E, $) {
    const Q = n.get(R);
    E !== void 0 && ue(Q.__webglFramebuffer, R, R.texture, 36064, 3553), $ !== void 0 && me(R);
  }
  function ft(R) {
    const E = R.texture, $ = n.get(R), Q = n.get(E);
    R.addEventListener("dispose", H), R.isWebGLMultipleRenderTargets !== !0 && (Q.__webglTexture === void 0 && (Q.__webglTexture = h.createTexture()), Q.__version = E.version, o.memory.textures++);
    const te = R.isWebGLCubeRenderTarget === !0, re = R.isWebGLMultipleRenderTargets === !0, ye = x(R) || r;
    if (te) {
      $.__webglFramebuffer = [];
      for (let j = 0; j < 6; j++)
        $.__webglFramebuffer[j] = h.createFramebuffer();
    } else {
      if ($.__webglFramebuffer = h.createFramebuffer(), re)
        if (i.drawBuffers) {
          const j = R.texture;
          for (let pe = 0, he = j.length; pe < he; pe++) {
            const fe = n.get(j[pe]);
            fe.__webglTexture === void 0 && (fe.__webglTexture = h.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (r && R.samples > 0 && Ne(R) === !1) {
        const j = re ? E : [E];
        $.__webglMultisampledFramebuffer = h.createFramebuffer(), $.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, $.__webglMultisampledFramebuffer);
        for (let pe = 0; pe < j.length; pe++) {
          const he = j[pe];
          $.__webglColorRenderbuffer[pe] = h.createRenderbuffer(), h.bindRenderbuffer(36161, $.__webglColorRenderbuffer[pe]);
          const fe = s.convert(he.format, he.encoding), de = s.convert(he.type), be = y(he.internalFormat, fe, de, he.encoding), Ie = nt(R);
          h.renderbufferStorageMultisample(36161, Ie, be, R.width, R.height), h.framebufferRenderbuffer(36160, 36064 + pe, 36161, $.__webglColorRenderbuffer[pe]);
        }
        h.bindRenderbuffer(36161, null), R.depthBuffer && ($.__webglDepthRenderbuffer = h.createRenderbuffer(), Oe($.__webglDepthRenderbuffer, R, !0)), t.bindFramebuffer(36160, null);
      }
    }
    if (te) {
      t.bindTexture(34067, Q.__webglTexture), Z(34067, E, ye);
      for (let j = 0; j < 6; j++)
        ue($.__webglFramebuffer[j], R, E, 36064, 34069 + j);
      S(E, ye) && C(34067), t.unbindTexture();
    } else if (re) {
      const j = R.texture;
      for (let pe = 0, he = j.length; pe < he; pe++) {
        const fe = j[pe], de = n.get(fe);
        t.bindTexture(3553, de.__webglTexture), Z(3553, fe, ye), ue($.__webglFramebuffer, R, fe, 36064 + pe, 3553), S(fe, ye) && C(3553);
      }
      t.unbindTexture();
    } else {
      let j = 3553;
      (R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) && (r ? j = R.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(j, Q.__webglTexture), Z(j, E, ye), ue($.__webglFramebuffer, R, E, 36064, j), S(E, ye) && C(j), t.unbindTexture();
    }
    R.depthBuffer && me(R);
  }
  function at(R) {
    const E = x(R) || r, $ = R.isWebGLMultipleRenderTargets === !0 ? R.texture : [R.texture];
    for (let Q = 0, te = $.length; Q < te; Q++) {
      const re = $[Q];
      if (S(re, E)) {
        const ye = R.isWebGLCubeRenderTarget ? 34067 : 3553, j = n.get(re).__webglTexture;
        t.bindTexture(ye, j), C(ye), t.unbindTexture();
      }
    }
  }
  function Pt(R) {
    if (r && R.samples > 0 && Ne(R) === !1) {
      const E = R.isWebGLMultipleRenderTargets ? R.texture : [R.texture], $ = R.width, Q = R.height;
      let te = 16384;
      const re = [], ye = R.stencilBuffer ? 33306 : 36096, j = n.get(R), pe = R.isWebGLMultipleRenderTargets === !0;
      if (pe)
        for (let he = 0; he < E.length; he++)
          t.bindFramebuffer(36160, j.__webglMultisampledFramebuffer), h.framebufferRenderbuffer(36160, 36064 + he, 36161, null), t.bindFramebuffer(36160, j.__webglFramebuffer), h.framebufferTexture2D(36009, 36064 + he, 3553, null, 0);
      t.bindFramebuffer(36008, j.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, j.__webglFramebuffer);
      for (let he = 0; he < E.length; he++) {
        re.push(36064 + he), R.depthBuffer && re.push(ye);
        const fe = j.__ignoreDepthValues !== void 0 ? j.__ignoreDepthValues : !1;
        if (fe === !1 && (R.depthBuffer && (te |= 256), R.stencilBuffer && (te |= 1024)), pe && h.framebufferRenderbuffer(36008, 36064, 36161, j.__webglColorRenderbuffer[he]), fe === !0 && (h.invalidateFramebuffer(36008, [ye]), h.invalidateFramebuffer(36009, [ye])), pe) {
          const de = n.get(E[he]).__webglTexture;
          h.framebufferTexture2D(36009, 36064, 3553, de, 0);
        }
        h.blitFramebuffer(0, 0, $, Q, 0, 0, $, Q, te, 9728), m && h.invalidateFramebuffer(36008, re);
      }
      if (t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), pe)
        for (let he = 0; he < E.length; he++) {
          t.bindFramebuffer(36160, j.__webglMultisampledFramebuffer), h.framebufferRenderbuffer(36160, 36064 + he, 36161, j.__webglColorRenderbuffer[he]);
          const fe = n.get(E[he]).__webglTexture;
          t.bindFramebuffer(36160, j.__webglFramebuffer), h.framebufferTexture2D(36009, 36064 + he, 3553, fe, 0);
        }
      t.bindFramebuffer(36009, j.__webglMultisampledFramebuffer);
    }
  }
  function nt(R) {
    return Math.min(d, R.samples);
  }
  function Ne(R) {
    const E = n.get(R);
    return r && R.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && E.__useRenderToTexture !== !1;
  }
  function Gt(R) {
    const E = o.render.frame;
    g.get(R) !== E && (g.set(R, E), R.update());
  }
  function It(R, E) {
    const $ = R.encoding, Q = R.format, te = R.type;
    return R.isCompressedTexture === !0 || R.isVideoTexture === !0 || R.format === 1035 || $ !== 3e3 && ($ === 3001 ? r === !1 ? e.has("EXT_sRGB") === !0 && Q === 1023 ? (R.format = 1035, R.minFilter = 1006, R.generateMipmaps = !1) : E = vo.sRGBToLinear(E) : (Q !== 1023 || te !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", $)), E;
  }
  this.allocateTextureUnit = U, this.resetTextureUnits = q, this.setTexture2D = k, this.setTexture2DArray = J, this.setTexture3D = V, this.setTextureCube = ee, this.rebindTextures = tt, this.setupRenderTarget = ft, this.updateRenderTargetMipmap = at, this.updateMultisampleRenderTarget = Pt, this.setupDepthRenderbuffer = me, this.setupFrameBufferTexture = ue, this.useMultisampledRTT = Ne;
}
function Hu(h, e, t) {
  const n = t.isWebGL2;
  function i(s, o = null) {
    let r;
    if (s === 1009)
      return 5121;
    if (s === 1017)
      return 32819;
    if (s === 1018)
      return 32820;
    if (s === 1010)
      return 5120;
    if (s === 1011)
      return 5122;
    if (s === 1012)
      return 5123;
    if (s === 1013)
      return 5124;
    if (s === 1014)
      return 5125;
    if (s === 1015)
      return 5126;
    if (s === 1016)
      return n ? 5131 : (r = e.get("OES_texture_half_float"), r !== null ? r.HALF_FLOAT_OES : null);
    if (s === 1021)
      return 6406;
    if (s === 1023)
      return 6408;
    if (s === 1024)
      return 6409;
    if (s === 1025)
      return 6410;
    if (s === 1026)
      return 6402;
    if (s === 1027)
      return 34041;
    if (s === 1028)
      return 6403;
    if (s === 1022)
      return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
    if (s === 1035)
      return r = e.get("EXT_sRGB"), r !== null ? r.SRGB_ALPHA_EXT : null;
    if (s === 1029)
      return 36244;
    if (s === 1030)
      return 33319;
    if (s === 1031)
      return 33320;
    if (s === 1033)
      return 36249;
    if (s === 33776 || s === 33777 || s === 33778 || s === 33779)
      if (o === 3001)
        if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
          if (s === 33776)
            return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === 33777)
            return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === 33778)
            return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === 33779)
            return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
        if (s === 33776)
          return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === 33777)
          return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === 33778)
          return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === 33779)
          return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === 35840 || s === 35841 || s === 35842 || s === 35843)
      if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
        if (s === 35840)
          return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === 35841)
          return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === 35842)
          return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === 35843)
          return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === 36196)
      return r = e.get("WEBGL_compressed_texture_etc1"), r !== null ? r.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === 37492 || s === 37496)
      if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
        if (s === 37492)
          return o === 3001 ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (s === 37496)
          return o === 3001 ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === 37808 || s === 37809 || s === 37810 || s === 37811 || s === 37812 || s === 37813 || s === 37814 || s === 37815 || s === 37816 || s === 37817 || s === 37818 || s === 37819 || s === 37820 || s === 37821)
      if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (s === 37808)
          return o === 3001 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === 37809)
          return o === 3001 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === 37810)
          return o === 3001 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === 37811)
          return o === 3001 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === 37812)
          return o === 3001 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === 37813)
          return o === 3001 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === 37814)
          return o === 3001 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === 37815)
          return o === 3001 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === 37816)
          return o === 3001 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === 37817)
          return o === 3001 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === 37818)
          return o === 3001 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === 37819)
          return o === 3001 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === 37820)
          return o === 3001 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === 37821)
          return o === 3001 ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === 36492)
      if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
        if (s === 36492)
          return o === 3001 ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    return s === 1020 ? n ? 34042 : (r = e.get("WEBGL_depth_texture"), r !== null ? r.UNSIGNED_INT_24_8_WEBGL : null) : h[s] !== void 0 ? h[s] : null;
  }
  return { convert: i };
}
class qu extends dt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Oi extends ot {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Xu = { type: "move" };
class Fs {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Oi(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Oi(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new B(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new B()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Oi(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new B(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new B()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, o = null;
    const r = this._targetRay, a = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        o = !0;
        for (const p of e.hand.values()) {
          const f = t.getJointPose(p, n);
          if (l.joints[p.jointName] === void 0) {
            const _ = new Oi();
            _.matrixAutoUpdate = !1, _.visible = !1, l.joints[p.jointName] = _, l.add(_);
          }
          const v = l.joints[p.jointName];
          f !== null && (v.matrix.fromArray(f.transform.matrix), v.matrix.decompose(v.position, v.rotation, v.scale), v.jointRadius = f.radius), v.visible = f !== null;
        }
        const u = l.joints["index-finger-tip"], d = l.joints["thumb-tip"], c = u.position.distanceTo(d.position), m = 0.02, g = 5e-3;
        l.inputState.pinching && c > m + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && c <= m - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        a !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (a.matrix.fromArray(s.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), s.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(s.linearVelocity)) : a.hasLinearVelocity = !1, s.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(s.angularVelocity)) : a.hasAngularVelocity = !1));
      r !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (r.matrix.fromArray(i.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), i.linearVelocity ? (r.hasLinearVelocity = !0, r.linearVelocity.copy(i.linearVelocity)) : r.hasLinearVelocity = !1, i.angularVelocity ? (r.hasAngularVelocity = !0, r.angularVelocity.copy(i.angularVelocity)) : r.hasAngularVelocity = !1, this.dispatchEvent(Xu)));
    }
    return r !== null && (r.visible = i !== null), a !== null && (a.visible = s !== null), l !== null && (l.visible = o !== null), this;
  }
}
class ju extends vt {
  constructor(e, t, n, i, s, o, r, a, l, u) {
    if (u = u !== void 0 ? u : 1026, u !== 1026 && u !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === 1026 && (n = 1014), n === void 0 && u === 1027 && (n = 1020), super(null, i, s, o, r, a, u, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = r !== void 0 ? r : 1003, this.minFilter = a !== void 0 ? a : 1003, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class Yu extends Jn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, o = null, r = "local-floor", a = null, l = null, u = null, d = null, c = null, m = null;
    const g = t.getContextAttributes();
    let p = null, f = null;
    const v = [], _ = [], b = new dt();
    b.layers.enable(1), b.viewport = new Ge();
    const x = new dt();
    x.layers.enable(2), x.viewport = new Ge();
    const M = [b, x], S = new qu();
    S.layers.enable(1), S.layers.enable(2);
    let C = null, y = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(O) {
      let k = v[O];
      return k === void 0 && (k = new Fs(), v[O] = k), k.getTargetRaySpace();
    }, this.getControllerGrip = function(O) {
      let k = v[O];
      return k === void 0 && (k = new Fs(), v[O] = k), k.getGripSpace();
    }, this.getHand = function(O) {
      let k = v[O];
      return k === void 0 && (k = new Fs(), v[O] = k), k.getHandSpace();
    };
    function A(O) {
      const k = _.indexOf(O.inputSource);
      if (k === -1)
        return;
      const J = v[k];
      J !== void 0 && J.dispatchEvent({ type: O.type, data: O.inputSource });
    }
    function P() {
      i.removeEventListener("select", A), i.removeEventListener("selectstart", A), i.removeEventListener("selectend", A), i.removeEventListener("squeeze", A), i.removeEventListener("squeezestart", A), i.removeEventListener("squeezeend", A), i.removeEventListener("end", P), i.removeEventListener("inputsourceschange", z);
      for (let O = 0; O < v.length; O++) {
        const k = _[O];
        k !== null && (_[O] = null, v[O].disconnect(k));
      }
      C = null, y = null, e.setRenderTarget(p), c = null, d = null, u = null, i = null, f = null, U.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(O) {
      s = O, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(O) {
      r = O, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return a || o;
    }, this.setReferenceSpace = function(O) {
      a = O;
    }, this.getBaseLayer = function() {
      return d !== null ? d : c;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(O) {
      if (i = O, i !== null) {
        if (p = e.getRenderTarget(), i.addEventListener("select", A), i.addEventListener("selectstart", A), i.addEventListener("selectend", A), i.addEventListener("squeeze", A), i.addEventListener("squeezestart", A), i.addEventListener("squeezeend", A), i.addEventListener("end", P), i.addEventListener("inputsourceschange", z), g.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const k = {
            antialias: i.renderState.layers === void 0 ? g.antialias : !0,
            alpha: g.alpha,
            depth: g.depth,
            stencil: g.stencil,
            framebufferScaleFactor: s
          };
          c = new XRWebGLLayer(i, t, k), i.updateRenderState({ baseLayer: c }), f = new Tn(
            c.framebufferWidth,
            c.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              encoding: e.outputEncoding
            }
          );
        } else {
          let k = null, J = null, V = null;
          g.depth && (V = g.stencil ? 35056 : 33190, k = g.stencil ? 1027 : 1026, J = g.stencil ? 1020 : 1014);
          const ee = {
            colorFormat: 32856,
            depthFormat: V,
            scaleFactor: s
          };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(ee), i.updateRenderState({ layers: [d] }), f = new Tn(
            d.textureWidth,
            d.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new ju(d.textureWidth, d.textureHeight, J, void 0, void 0, void 0, void 0, void 0, void 0, k),
              stencilBuffer: g.stencil,
              encoding: e.outputEncoding,
              samples: g.antialias ? 4 : 0
            }
          );
          const ce = e.properties.get(f);
          ce.__ignoreDepthValues = d.ignoreDepthValues;
        }
        f.isXRRenderTarget = !0, this.setFoveation(1), a = null, o = await i.requestReferenceSpace(r), U.setContext(i), U.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function z(O) {
      for (let k = 0; k < O.removed.length; k++) {
        const J = O.removed[k], V = _.indexOf(J);
        V >= 0 && (_[V] = null, v[V].dispatchEvent({ type: "disconnected", data: J }));
      }
      for (let k = 0; k < O.added.length; k++) {
        const J = O.added[k];
        let V = _.indexOf(J);
        if (V === -1) {
          for (let ce = 0; ce < v.length; ce++)
            if (ce >= _.length) {
              _.push(J), V = ce;
              break;
            } else if (_[ce] === null) {
              _[ce] = J, V = ce;
              break;
            }
          if (V === -1)
            break;
        }
        const ee = v[V];
        ee && ee.dispatchEvent({ type: "connected", data: J });
      }
    }
    const H = new B(), D = new B();
    function L(O, k, J) {
      H.setFromMatrixPosition(k.matrixWorld), D.setFromMatrixPosition(J.matrixWorld);
      const V = H.distanceTo(D), ee = k.projectionMatrix.elements, ce = J.projectionMatrix.elements, ge = ee[14] / (ee[10] - 1), Z = ee[14] / (ee[10] + 1), De = (ee[9] + 1) / ee[5], ve = (ee[9] - 1) / ee[5], xe = (ee[8] - 1) / ee[0], ue = (ce[8] + 1) / ce[0], Oe = ge * xe, Ee = ge * ue, me = V / (-xe + ue), tt = me * -xe;
      k.matrixWorld.decompose(O.position, O.quaternion, O.scale), O.translateX(tt), O.translateZ(me), O.matrixWorld.compose(O.position, O.quaternion, O.scale), O.matrixWorldInverse.copy(O.matrixWorld).invert();
      const ft = ge + me, at = Z + me, Pt = Oe - tt, nt = Ee + (V - tt), Ne = De * Z / at * ft, Gt = ve * Z / at * ft;
      O.projectionMatrix.makePerspective(Pt, nt, Ne, Gt, ft, at);
    }
    function I(O, k) {
      k === null ? O.matrixWorld.copy(O.matrix) : O.matrixWorld.multiplyMatrices(k.matrixWorld, O.matrix), O.matrixWorldInverse.copy(O.matrixWorld).invert();
    }
    this.updateCamera = function(O) {
      if (i === null)
        return;
      S.near = x.near = b.near = O.near, S.far = x.far = b.far = O.far, (C !== S.near || y !== S.far) && (i.updateRenderState({
        depthNear: S.near,
        depthFar: S.far
      }), C = S.near, y = S.far);
      const k = O.parent, J = S.cameras;
      I(S, k);
      for (let ee = 0; ee < J.length; ee++)
        I(J[ee], k);
      S.matrixWorld.decompose(S.position, S.quaternion, S.scale), O.position.copy(S.position), O.quaternion.copy(S.quaternion), O.scale.copy(S.scale), O.matrix.copy(S.matrix), O.matrixWorld.copy(S.matrixWorld);
      const V = O.children;
      for (let ee = 0, ce = V.length; ee < ce; ee++)
        V[ee].updateMatrixWorld(!0);
      J.length === 2 ? L(S, b, x) : S.projectionMatrix.copy(b.projectionMatrix);
    }, this.getCamera = function() {
      return S;
    }, this.getFoveation = function() {
      if (d !== null)
        return d.fixedFoveation;
      if (c !== null)
        return c.fixedFoveation;
    }, this.setFoveation = function(O) {
      d !== null && (d.fixedFoveation = O), c !== null && c.fixedFoveation !== void 0 && (c.fixedFoveation = O);
    };
    let F = null;
    function q(O, k) {
      if (l = k.getViewerPose(a || o), m = k, l !== null) {
        const J = l.views;
        c !== null && (e.setRenderTargetFramebuffer(f, c.framebuffer), e.setRenderTarget(f));
        let V = !1;
        J.length !== S.cameras.length && (S.cameras.length = 0, V = !0);
        for (let ee = 0; ee < J.length; ee++) {
          const ce = J[ee];
          let ge = null;
          if (c !== null)
            ge = c.getViewport(ce);
          else {
            const De = u.getViewSubImage(d, ce);
            ge = De.viewport, ee === 0 && (e.setRenderTargetTextures(
              f,
              De.colorTexture,
              d.ignoreDepthValues ? void 0 : De.depthStencilTexture
            ), e.setRenderTarget(f));
          }
          let Z = M[ee];
          Z === void 0 && (Z = new dt(), Z.layers.enable(ee), Z.viewport = new Ge(), M[ee] = Z), Z.matrix.fromArray(ce.transform.matrix), Z.projectionMatrix.fromArray(ce.projectionMatrix), Z.viewport.set(ge.x, ge.y, ge.width, ge.height), ee === 0 && S.matrix.copy(Z.matrix), V === !0 && S.cameras.push(Z);
        }
      }
      for (let J = 0; J < v.length; J++) {
        const V = _[J], ee = v[J];
        V !== null && ee !== void 0 && ee.update(V, k, a || o);
      }
      F && F(O, k), m = null;
    }
    const U = new Ao();
    U.setAnimationLoop(q), this.setAnimationLoop = function(O) {
      F = O;
    }, this.dispose = function() {
    };
  }
}
function $u(h, e) {
  function t(p, f) {
    p.fogColor.value.copy(f.color), f.isFog ? (p.fogNear.value = f.near, p.fogFar.value = f.far) : f.isFogExp2 && (p.fogDensity.value = f.density);
  }
  function n(p, f, v, _, b) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? i(p, f) : f.isMeshToonMaterial ? (i(p, f), u(p, f)) : f.isMeshPhongMaterial ? (i(p, f), l(p, f)) : f.isMeshStandardMaterial ? (i(p, f), d(p, f), f.isMeshPhysicalMaterial && c(p, f, b)) : f.isMeshMatcapMaterial ? (i(p, f), m(p, f)) : f.isMeshDepthMaterial ? i(p, f) : f.isMeshDistanceMaterial ? (i(p, f), g(p, f)) : f.isMeshNormalMaterial ? i(p, f) : f.isLineBasicMaterial ? (s(p, f), f.isLineDashedMaterial && o(p, f)) : f.isPointsMaterial ? r(p, f, v, _) : f.isSpriteMaterial ? a(p, f) : f.isShadowMaterial ? (p.color.value.copy(f.color), p.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function i(p, f) {
    p.opacity.value = f.opacity, f.color && p.diffuse.value.copy(f.color), f.emissive && p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.bumpMap && (p.bumpMap.value = f.bumpMap, p.bumpScale.value = f.bumpScale, f.side === 1 && (p.bumpScale.value *= -1)), f.displacementMap && (p.displacementMap.value = f.displacementMap, p.displacementScale.value = f.displacementScale, p.displacementBias.value = f.displacementBias), f.emissiveMap && (p.emissiveMap.value = f.emissiveMap), f.normalMap && (p.normalMap.value = f.normalMap, p.normalScale.value.copy(f.normalScale), f.side === 1 && p.normalScale.value.negate()), f.specularMap && (p.specularMap.value = f.specularMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    const v = e.get(f).envMap;
    if (v && (p.envMap.value = v, p.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = f.reflectivity, p.ior.value = f.ior, p.refractionRatio.value = f.refractionRatio), f.lightMap) {
      p.lightMap.value = f.lightMap;
      const x = h.physicallyCorrectLights !== !0 ? Math.PI : 1;
      p.lightMapIntensity.value = f.lightMapIntensity * x;
    }
    f.aoMap && (p.aoMap.value = f.aoMap, p.aoMapIntensity.value = f.aoMapIntensity);
    let _;
    f.map ? _ = f.map : f.specularMap ? _ = f.specularMap : f.displacementMap ? _ = f.displacementMap : f.normalMap ? _ = f.normalMap : f.bumpMap ? _ = f.bumpMap : f.roughnessMap ? _ = f.roughnessMap : f.metalnessMap ? _ = f.metalnessMap : f.alphaMap ? _ = f.alphaMap : f.emissiveMap ? _ = f.emissiveMap : f.clearcoatMap ? _ = f.clearcoatMap : f.clearcoatNormalMap ? _ = f.clearcoatNormalMap : f.clearcoatRoughnessMap ? _ = f.clearcoatRoughnessMap : f.iridescenceMap ? _ = f.iridescenceMap : f.iridescenceThicknessMap ? _ = f.iridescenceThicknessMap : f.specularIntensityMap ? _ = f.specularIntensityMap : f.specularColorMap ? _ = f.specularColorMap : f.transmissionMap ? _ = f.transmissionMap : f.thicknessMap ? _ = f.thicknessMap : f.sheenColorMap ? _ = f.sheenColorMap : f.sheenRoughnessMap && (_ = f.sheenRoughnessMap), _ !== void 0 && (_.isWebGLRenderTarget && (_ = _.texture), _.matrixAutoUpdate === !0 && _.updateMatrix(), p.uvTransform.value.copy(_.matrix));
    let b;
    f.aoMap ? b = f.aoMap : f.lightMap && (b = f.lightMap), b !== void 0 && (b.isWebGLRenderTarget && (b = b.texture), b.matrixAutoUpdate === !0 && b.updateMatrix(), p.uv2Transform.value.copy(b.matrix));
  }
  function s(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity;
  }
  function o(p, f) {
    p.dashSize.value = f.dashSize, p.totalSize.value = f.dashSize + f.gapSize, p.scale.value = f.scale;
  }
  function r(p, f, v, _) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.size.value = f.size * v, p.scale.value = _ * 0.5, f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let b;
    f.map ? b = f.map : f.alphaMap && (b = f.alphaMap), b !== void 0 && (b.matrixAutoUpdate === !0 && b.updateMatrix(), p.uvTransform.value.copy(b.matrix));
  }
  function a(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.rotation.value = f.rotation, f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let v;
    f.map ? v = f.map : f.alphaMap && (v = f.alphaMap), v !== void 0 && (v.matrixAutoUpdate === !0 && v.updateMatrix(), p.uvTransform.value.copy(v.matrix));
  }
  function l(p, f) {
    p.specular.value.copy(f.specular), p.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function u(p, f) {
    f.gradientMap && (p.gradientMap.value = f.gradientMap);
  }
  function d(p, f) {
    p.roughness.value = f.roughness, p.metalness.value = f.metalness, f.roughnessMap && (p.roughnessMap.value = f.roughnessMap), f.metalnessMap && (p.metalnessMap.value = f.metalnessMap), e.get(f).envMap && (p.envMapIntensity.value = f.envMapIntensity);
  }
  function c(p, f, v) {
    p.ior.value = f.ior, f.sheen > 0 && (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), p.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (p.sheenColorMap.value = f.sheenColorMap), f.sheenRoughnessMap && (p.sheenRoughnessMap.value = f.sheenRoughnessMap)), f.clearcoat > 0 && (p.clearcoat.value = f.clearcoat, p.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (p.clearcoatMap.value = f.clearcoatMap), f.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap), f.clearcoatNormalMap && (p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), p.clearcoatNormalMap.value = f.clearcoatNormalMap, f.side === 1 && p.clearcoatNormalScale.value.negate())), f.iridescence > 0 && (p.iridescence.value = f.iridescence, p.iridescenceIOR.value = f.iridescenceIOR, p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (p.iridescenceMap.value = f.iridescenceMap), f.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = f.iridescenceThicknessMap)), f.transmission > 0 && (p.transmission.value = f.transmission, p.transmissionSamplerMap.value = v.texture, p.transmissionSamplerSize.value.set(v.width, v.height), f.transmissionMap && (p.transmissionMap.value = f.transmissionMap), p.thickness.value = f.thickness, f.thicknessMap && (p.thicknessMap.value = f.thicknessMap), p.attenuationDistance.value = f.attenuationDistance, p.attenuationColor.value.copy(f.attenuationColor)), p.specularIntensity.value = f.specularIntensity, p.specularColor.value.copy(f.specularColor), f.specularIntensityMap && (p.specularIntensityMap.value = f.specularIntensityMap), f.specularColorMap && (p.specularColorMap.value = f.specularColorMap);
  }
  function m(p, f) {
    f.matcap && (p.matcap.value = f.matcap);
  }
  function g(p, f) {
    p.referencePosition.value.copy(f.referencePosition), p.nearDistance.value = f.nearDistance, p.farDistance.value = f.farDistance;
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n
  };
}
function Zu(h, e, t, n) {
  let i = {}, s = {}, o = [];
  const r = t.isWebGL2 ? h.getParameter(35375) : 0;
  function a(_, b) {
    const x = b.program;
    n.uniformBlockBinding(_, x);
  }
  function l(_, b) {
    let x = i[_.id];
    x === void 0 && (g(_), x = u(_), i[_.id] = x, _.addEventListener("dispose", f));
    const M = b.program;
    n.updateUBOMapping(_, M);
    const S = e.render.frame;
    s[_.id] !== S && (c(_), s[_.id] = S);
  }
  function u(_) {
    const b = d();
    _.__bindingPointIndex = b;
    const x = h.createBuffer(), M = _.__size, S = _.usage;
    return h.bindBuffer(35345, x), h.bufferData(35345, M, S), h.bindBuffer(35345, null), h.bindBufferBase(35345, b, x), x;
  }
  function d() {
    for (let _ = 0; _ < r; _++)
      if (o.indexOf(_) === -1)
        return o.push(_), _;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function c(_) {
    const b = i[_.id], x = _.uniforms, M = _.__cache;
    h.bindBuffer(35345, b);
    for (let S = 0, C = x.length; S < C; S++) {
      const y = x[S];
      if (m(y, S, M) === !0) {
        const A = y.value, P = y.__offset;
        typeof A == "number" ? (y.__data[0] = A, h.bufferSubData(35345, P, y.__data)) : (y.value.isMatrix3 ? (y.__data[0] = y.value.elements[0], y.__data[1] = y.value.elements[1], y.__data[2] = y.value.elements[2], y.__data[3] = y.value.elements[0], y.__data[4] = y.value.elements[3], y.__data[5] = y.value.elements[4], y.__data[6] = y.value.elements[5], y.__data[7] = y.value.elements[0], y.__data[8] = y.value.elements[6], y.__data[9] = y.value.elements[7], y.__data[10] = y.value.elements[8], y.__data[11] = y.value.elements[0]) : A.toArray(y.__data), h.bufferSubData(35345, P, y.__data));
      }
    }
    h.bindBuffer(35345, null);
  }
  function m(_, b, x) {
    const M = _.value;
    if (x[b] === void 0)
      return typeof M == "number" ? x[b] = M : x[b] = M.clone(), !0;
    if (typeof M == "number") {
      if (x[b] !== M)
        return x[b] = M, !0;
    } else {
      const S = x[b];
      if (S.equals(M) === !1)
        return S.copy(M), !0;
    }
    return !1;
  }
  function g(_) {
    const b = _.uniforms;
    let x = 0;
    const M = 16;
    let S = 0;
    for (let C = 0, y = b.length; C < y; C++) {
      const A = b[C], P = p(A);
      if (A.__data = new Float32Array(P.storage / Float32Array.BYTES_PER_ELEMENT), A.__offset = x, C > 0) {
        S = x % M;
        const z = M - S;
        S !== 0 && z - P.boundary < 0 && (x += M - S, A.__offset = x);
      }
      x += P.storage;
    }
    return S = x % M, S > 0 && (x += M - S), _.__size = x, _.__cache = {}, this;
  }
  function p(_) {
    const b = _.value, x = {
      boundary: 0,
      storage: 0
    };
    return typeof b == "number" ? (x.boundary = 4, x.storage = 4) : b.isVector2 ? (x.boundary = 8, x.storage = 8) : b.isVector3 || b.isColor ? (x.boundary = 16, x.storage = 12) : b.isVector4 ? (x.boundary = 16, x.storage = 16) : b.isMatrix3 ? (x.boundary = 48, x.storage = 48) : b.isMatrix4 ? (x.boundary = 64, x.storage = 64) : b.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", b), x;
  }
  function f(_) {
    const b = _.target;
    b.removeEventListener("dispose", f);
    const x = o.indexOf(b.__bindingPointIndex);
    o.splice(x, 1), h.deleteBuffer(i[b.id]), delete i[b.id], delete s[b.id];
  }
  function v() {
    for (const _ in i)
      h.deleteBuffer(i[_]);
    o = [], i = {}, s = {};
  }
  return {
    bind: a,
    update: l,
    dispose: v
  };
}
function Ku() {
  const h = Zi("canvas");
  return h.style.display = "block", h;
}
function Po(h = {}) {
  this.isWebGLRenderer = !0;
  const e = h.canvas !== void 0 ? h.canvas : Ku(), t = h.context !== void 0 ? h.context : null, n = h.depth !== void 0 ? h.depth : !0, i = h.stencil !== void 0 ? h.stencil : !0, s = h.antialias !== void 0 ? h.antialias : !1, o = h.premultipliedAlpha !== void 0 ? h.premultipliedAlpha : !0, r = h.preserveDrawingBuffer !== void 0 ? h.preserveDrawingBuffer : !1, a = h.powerPreference !== void 0 ? h.powerPreference : "default", l = h.failIfMajorPerformanceCaveat !== void 0 ? h.failIfMajorPerformanceCaveat : !1;
  let u;
  t !== null ? u = t.getContextAttributes().alpha : u = h.alpha !== void 0 ? h.alpha : !1;
  let d = null, c = null;
  const m = [], g = [];
  this.domElement = e, this.debug = {
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = 3e3, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1, Object.defineProperties(this, {
    gammaFactor: {
      get: function() {
        return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2;
      },
      set: function() {
        console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
      }
    }
  });
  const p = this;
  let f = !1, v = 0, _ = 0, b = null, x = -1, M = null;
  const S = new Ge(), C = new Ge();
  let y = null, A = e.width, P = e.height, z = 1, H = null, D = null;
  const L = new Ge(0, 0, A, P), I = new Ge(0, 0, A, P);
  let F = !1;
  const q = new Zs();
  let U = !1, O = !1, k = null;
  const J = new Xe(), V = new Ce(), ee = new B(), ce = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function ge() {
    return b === null ? z : 1;
  }
  let Z = t;
  function De(T, G) {
    for (let X = 0; X < T.length; X++) {
      const W = T[X], K = e.getContext(W, G);
      if (K !== null)
        return K;
    }
    return null;
  }
  try {
    const T = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: s,
      premultipliedAlpha: o,
      preserveDrawingBuffer: r,
      powerPreference: a,
      failIfMajorPerformanceCaveat: l
    };
    if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Ys}`), e.addEventListener("webglcontextlost", be, !1), e.addEventListener("webglcontextrestored", Ie, !1), e.addEventListener("webglcontextcreationerror", He, !1), Z === null) {
      const G = ["webgl2", "webgl", "experimental-webgl"];
      if (p.isWebGL1Renderer === !0 && G.shift(), Z = De(G, T), Z === null)
        throw De(G) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    Z.getShaderPrecisionFormat === void 0 && (Z.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (T) {
    throw console.error("THREE.WebGLRenderer: " + T.message), T;
  }
  let ve, xe, ue, Oe, Ee, me, tt, ft, at, Pt, nt, Ne, Gt, It, R, E, $, Q, te, re, ye, j, pe, he;
  function fe() {
    ve = new ah(Z), xe = new eh(Z, ve, h), ve.init(xe), j = new Hu(Z, ve, xe), ue = new Wu(Z, ve, xe), Oe = new hh(), Ee = new Cu(), me = new Vu(Z, ve, ue, Ee, xe, j, Oe), tt = new nh(p), ft = new oh(p), at = new wa(Z, xe), pe = new Jc(Z, ve, at, xe), Pt = new lh(Z, at, Oe, pe), nt = new ph(Z, Pt, at, Oe), te = new fh(Z, xe, me), E = new th(Ee), Ne = new Au(p, tt, ft, ve, xe, pe, E), Gt = new $u(p, Ee), It = new Ru(), R = new Bu(ve, xe), Q = new Kc(p, tt, ue, nt, u, o), $ = new ku(p, nt, xe), he = new Zu(Z, Oe, xe, ue), re = new Qc(Z, ve, Oe, xe), ye = new ch(Z, ve, Oe, xe), Oe.programs = Ne.programs, p.capabilities = xe, p.extensions = ve, p.properties = Ee, p.renderLists = It, p.shadowMap = $, p.state = ue, p.info = Oe;
  }
  fe();
  const de = new Yu(p, Z);
  this.xr = de, this.getContext = function() {
    return Z;
  }, this.getContextAttributes = function() {
    return Z.getContextAttributes();
  }, this.forceContextLoss = function() {
    const T = ve.get("WEBGL_lose_context");
    T && T.loseContext();
  }, this.forceContextRestore = function() {
    const T = ve.get("WEBGL_lose_context");
    T && T.restoreContext();
  }, this.getPixelRatio = function() {
    return z;
  }, this.setPixelRatio = function(T) {
    T !== void 0 && (z = T, this.setSize(A, P, !1));
  }, this.getSize = function(T) {
    return T.set(A, P);
  }, this.setSize = function(T, G, X) {
    if (de.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    A = T, P = G, e.width = Math.floor(T * z), e.height = Math.floor(G * z), X !== !1 && (e.style.width = T + "px", e.style.height = G + "px"), this.setViewport(0, 0, T, G);
  }, this.getDrawingBufferSize = function(T) {
    return T.set(A * z, P * z).floor();
  }, this.setDrawingBufferSize = function(T, G, X) {
    A = T, P = G, z = X, e.width = Math.floor(T * X), e.height = Math.floor(G * X), this.setViewport(0, 0, T, G);
  }, this.getCurrentViewport = function(T) {
    return T.copy(S);
  }, this.getViewport = function(T) {
    return T.copy(L);
  }, this.setViewport = function(T, G, X, W) {
    T.isVector4 ? L.set(T.x, T.y, T.z, T.w) : L.set(T, G, X, W), ue.viewport(S.copy(L).multiplyScalar(z).floor());
  }, this.getScissor = function(T) {
    return T.copy(I);
  }, this.setScissor = function(T, G, X, W) {
    T.isVector4 ? I.set(T.x, T.y, T.z, T.w) : I.set(T, G, X, W), ue.scissor(C.copy(I).multiplyScalar(z).floor());
  }, this.getScissorTest = function() {
    return F;
  }, this.setScissorTest = function(T) {
    ue.setScissorTest(F = T);
  }, this.setOpaqueSort = function(T) {
    H = T;
  }, this.setTransparentSort = function(T) {
    D = T;
  }, this.getClearColor = function(T) {
    return T.copy(Q.getClearColor());
  }, this.setClearColor = function() {
    Q.setClearColor.apply(Q, arguments);
  }, this.getClearAlpha = function() {
    return Q.getClearAlpha();
  }, this.setClearAlpha = function() {
    Q.setClearAlpha.apply(Q, arguments);
  }, this.clear = function(T = !0, G = !0, X = !0) {
    let W = 0;
    T && (W |= 16384), G && (W |= 256), X && (W |= 1024), Z.clear(W);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    e.removeEventListener("webglcontextlost", be, !1), e.removeEventListener("webglcontextrestored", Ie, !1), e.removeEventListener("webglcontextcreationerror", He, !1), It.dispose(), R.dispose(), Ee.dispose(), tt.dispose(), ft.dispose(), nt.dispose(), pe.dispose(), he.dispose(), Ne.dispose(), de.dispose(), de.removeEventListener("sessionstart", Re), de.removeEventListener("sessionend", Qe), k && (k.dispose(), k = null), qe.stop();
  };
  function be(T) {
    T.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), f = !0;
  }
  function Ie() {
    console.log("THREE.WebGLRenderer: Context Restored."), f = !1;
    const T = Oe.autoReset, G = $.enabled, X = $.autoUpdate, W = $.needsUpdate, K = $.type;
    fe(), Oe.autoReset = T, $.enabled = G, $.autoUpdate = X, $.needsUpdate = W, $.type = K;
  }
  function He(T) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", T.statusMessage);
  }
  function N(T) {
    const G = T.target;
    G.removeEventListener("dispose", N), ae(G);
  }
  function ae(T) {
    Y(T), Ee.remove(T);
  }
  function Y(T) {
    const G = Ee.get(T).programs;
    G !== void 0 && (G.forEach(function(X) {
      Ne.releaseProgram(X);
    }), T.isShaderMaterial && Ne.releaseShaderCache(T));
  }
  this.renderBufferDirect = function(T, G, X, W, K, _e) {
    G === null && (G = ce);
    const we = K.isMesh && K.matrixWorld.determinant() < 0, Se = Yo(T, G, X, W, K);
    ue.setMaterial(W, we);
    let Me = X.index;
    const Be = X.attributes.position;
    if (Me === null) {
      if (Be === void 0 || Be.count === 0)
        return;
    } else if (Me.count === 0)
      return;
    let Le = 1;
    W.wireframe === !0 && (Me = Pt.getWireframeAttribute(X), Le = 2), pe.setup(K, W, Se, X, Me);
    let Fe, Ve = re;
    Me !== null && (Fe = at.get(Me), Ve = ye, Ve.setIndex(Fe));
    const dn = Me !== null ? Me.count : Be.count, Cn = X.drawRange.start * Le, Ln = X.drawRange.count * Le, zt = _e !== null ? _e.start * Le : 0, ze = _e !== null ? _e.count * Le : 1 / 0, Rn = Math.max(Cn, zt), je = Math.min(dn, Cn + Ln, zt + ze) - 1, wt = Math.max(0, je - Rn + 1);
    if (wt !== 0) {
      if (K.isMesh)
        W.wireframe === !0 ? (ue.setLineWidth(W.wireframeLinewidth * ge()), Ve.setMode(1)) : Ve.setMode(4);
      else if (K.isLine) {
        let tn = W.linewidth;
        tn === void 0 && (tn = 1), ue.setLineWidth(tn * ge()), K.isLineSegments ? Ve.setMode(1) : K.isLineLoop ? Ve.setMode(2) : Ve.setMode(3);
      } else
        K.isPoints ? Ve.setMode(0) : K.isSprite && Ve.setMode(4);
      if (K.isInstancedMesh)
        Ve.renderInstances(Rn, wt, K.count);
      else if (X.isInstancedBufferGeometry) {
        const tn = Math.min(X.instanceCount, X._maxInstanceCount);
        Ve.renderInstances(Rn, wt, tn);
      } else
        Ve.render(Rn, wt);
    }
  }, this.compile = function(T, G) {
    c = R.get(T), c.init(), g.push(c), T.traverseVisible(function(X) {
      X.isLight && X.layers.test(G.layers) && (c.pushLight(X), X.castShadow && c.pushShadow(X));
    }), c.setupLights(p.physicallyCorrectLights), T.traverse(function(X) {
      const W = X.material;
      if (W)
        if (Array.isArray(W))
          for (let K = 0; K < W.length; K++) {
            const _e = W[K];
            es(_e, T, X);
          }
        else
          es(W, T, X);
    }), g.pop(), c = null;
  };
  let oe = null;
  function se(T) {
    oe && oe(T);
  }
  function Re() {
    qe.stop();
  }
  function Qe() {
    qe.start();
  }
  const qe = new Ao();
  qe.setAnimationLoop(se), typeof self < "u" && qe.setContext(self), this.setAnimationLoop = function(T) {
    oe = T, de.setAnimationLoop(T), T === null ? qe.stop() : qe.start();
  }, de.addEventListener("sessionstart", Re), de.addEventListener("sessionend", Qe), this.render = function(T, G) {
    if (G !== void 0 && G.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (f === !0)
      return;
    T.autoUpdate === !0 && T.updateMatrixWorld(), G.parent === null && G.updateMatrixWorld(), de.enabled === !0 && de.isPresenting === !0 && (de.cameraAutoUpdate === !0 && de.updateCamera(G), G = de.getCamera()), T.isScene === !0 && T.onBeforeRender(p, T, G, b), c = R.get(T, g.length), c.init(), g.push(c), J.multiplyMatrices(G.projectionMatrix, G.matrixWorldInverse), q.setFromProjectionMatrix(J), O = this.localClippingEnabled, U = E.init(this.clippingPlanes, O, G), d = It.get(T, m.length), d.init(), m.push(d), en(T, G, 0, p.sortObjects), d.finish(), p.sortObjects === !0 && d.sort(H, D), U === !0 && E.beginShadows();
    const X = c.state.shadowsArray;
    if ($.render(X, T, G), U === !0 && E.endShadows(), this.info.autoReset === !0 && this.info.reset(), Q.render(d, T), c.setupLights(p.physicallyCorrectLights), G.isArrayCamera) {
      const W = G.cameras;
      for (let K = 0, _e = W.length; K < _e; K++) {
        const we = W[K];
        We(d, T, we, we.viewport);
      }
    } else
      We(d, T, G);
    b !== null && (me.updateMultisampleRenderTarget(b), me.updateRenderTargetMipmap(b)), T.isScene === !0 && T.onAfterRender(p, T, G), pe.resetDefaultState(), x = -1, M = null, g.pop(), g.length > 0 ? c = g[g.length - 1] : c = null, m.pop(), m.length > 0 ? d = m[m.length - 1] : d = null;
  };
  function en(T, G, X, W) {
    if (T.visible === !1)
      return;
    if (T.layers.test(G.layers)) {
      if (T.isGroup)
        X = T.renderOrder;
      else if (T.isLOD)
        T.autoUpdate === !0 && T.update(G);
      else if (T.isLight)
        c.pushLight(T), T.castShadow && c.pushShadow(T);
      else if (T.isSprite) {
        if (!T.frustumCulled || q.intersectsSprite(T)) {
          W && ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);
          const we = nt.update(T), Se = T.material;
          Se.visible && d.push(T, we, Se, X, ee.z, null);
        }
      } else if ((T.isMesh || T.isLine || T.isPoints) && (T.isSkinnedMesh && T.skeleton.frame !== Oe.render.frame && (T.skeleton.update(), T.skeleton.frame = Oe.render.frame), !T.frustumCulled || q.intersectsObject(T))) {
        W && ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);
        const we = nt.update(T), Se = T.material;
        if (Array.isArray(Se)) {
          const Me = we.groups;
          for (let Be = 0, Le = Me.length; Be < Le; Be++) {
            const Fe = Me[Be], Ve = Se[Fe.materialIndex];
            Ve && Ve.visible && d.push(T, we, Ve, X, ee.z, Fe);
          }
        } else
          Se.visible && d.push(T, we, Se, X, ee.z, null);
      }
    }
    const _e = T.children;
    for (let we = 0, Se = _e.length; we < Se; we++)
      en(_e[we], G, X, W);
  }
  function We(T, G, X, W) {
    const K = T.opaque, _e = T.transmissive, we = T.transparent;
    c.setupLightsView(X), _e.length > 0 && kt(K, G, X), W && ue.viewport(S.copy(W)), K.length > 0 && yt(K, G, X), _e.length > 0 && yt(_e, G, X), we.length > 0 && yt(we, G, X), ue.buffers.depth.setTest(!0), ue.buffers.depth.setMask(!0), ue.buffers.color.setMask(!0), ue.setPolygonOffset(!1);
  }
  function kt(T, G, X) {
    const W = xe.isWebGL2;
    k === null && (k = new Tn(1, 1, {
      generateMipmaps: !0,
      type: ve.has("EXT_color_buffer_half_float") ? 1016 : 1009,
      minFilter: 1008,
      samples: W && s === !0 ? 4 : 0
    })), p.getDrawingBufferSize(V), W ? k.setSize(V.x, V.y) : k.setSize(Vs(V.x), Vs(V.y));
    const K = p.getRenderTarget();
    p.setRenderTarget(k), p.clear();
    const _e = p.toneMapping;
    p.toneMapping = 0, yt(T, G, X), p.toneMapping = _e, me.updateMultisampleRenderTarget(k), me.updateRenderTargetMipmap(k), p.setRenderTarget(K);
  }
  function yt(T, G, X) {
    const W = G.isScene === !0 ? G.overrideMaterial : null;
    for (let K = 0, _e = T.length; K < _e; K++) {
      const we = T[K], Se = we.object, Me = we.geometry, Be = W === null ? we.material : W, Le = we.group;
      Se.layers.test(X.layers) && jo(Se, G, X, Me, Be, Le);
    }
  }
  function jo(T, G, X, W, K, _e) {
    T.onBeforeRender(p, G, X, W, K, _e), T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse, T.matrixWorld), T.normalMatrix.getNormalMatrix(T.modelViewMatrix), K.onBeforeRender(p, G, X, W, T, _e), K.transparent === !0 && K.side === 2 ? (K.side = 1, K.needsUpdate = !0, p.renderBufferDirect(X, G, W, K, T, _e), K.side = 0, K.needsUpdate = !0, p.renderBufferDirect(X, G, W, K, T, _e), K.side = 2) : p.renderBufferDirect(X, G, W, K, T, _e), T.onAfterRender(p, G, X, W, K, _e);
  }
  function es(T, G, X) {
    G.isScene !== !0 && (G = ce);
    const W = Ee.get(T), K = c.state.lights, _e = c.state.shadowsArray, we = K.state.version, Se = Ne.getParameters(T, K.state, _e, G, X), Me = Ne.getProgramCacheKey(Se);
    let Be = W.programs;
    W.environment = T.isMeshStandardMaterial ? G.environment : null, W.fog = G.fog, W.envMap = (T.isMeshStandardMaterial ? ft : tt).get(T.envMap || W.environment), Be === void 0 && (T.addEventListener("dispose", N), Be = /* @__PURE__ */ new Map(), W.programs = Be);
    let Le = Be.get(Me);
    if (Le !== void 0) {
      if (W.currentProgram === Le && W.lightsStateVersion === we)
        return sr(T, Se), Le;
    } else
      Se.uniforms = Ne.getUniforms(T), T.onBuild(X, Se, p), T.onBeforeCompile(Se, p), Le = Ne.acquireProgram(Se, Me), Be.set(Me, Le), W.uniforms = Se.uniforms;
    const Fe = W.uniforms;
    (!T.isShaderMaterial && !T.isRawShaderMaterial || T.clipping === !0) && (Fe.clippingPlanes = E.uniform), sr(T, Se), W.needsLights = Zo(T), W.lightsStateVersion = we, W.needsLights && (Fe.ambientLightColor.value = K.state.ambient, Fe.lightProbe.value = K.state.probe, Fe.directionalLights.value = K.state.directional, Fe.directionalLightShadows.value = K.state.directionalShadow, Fe.spotLights.value = K.state.spot, Fe.spotLightShadows.value = K.state.spotShadow, Fe.rectAreaLights.value = K.state.rectArea, Fe.ltc_1.value = K.state.rectAreaLTC1, Fe.ltc_2.value = K.state.rectAreaLTC2, Fe.pointLights.value = K.state.point, Fe.pointLightShadows.value = K.state.pointShadow, Fe.hemisphereLights.value = K.state.hemi, Fe.directionalShadowMap.value = K.state.directionalShadowMap, Fe.directionalShadowMatrix.value = K.state.directionalShadowMatrix, Fe.spotShadowMap.value = K.state.spotShadowMap, Fe.spotShadowMatrix.value = K.state.spotShadowMatrix, Fe.pointShadowMap.value = K.state.pointShadowMap, Fe.pointShadowMatrix.value = K.state.pointShadowMatrix);
    const Ve = Le.getUniforms(), dn = ji.seqWithValue(Ve.seq, Fe);
    return W.currentProgram = Le, W.uniformsList = dn, Le;
  }
  function sr(T, G) {
    const X = Ee.get(T);
    X.outputEncoding = G.outputEncoding, X.instancing = G.instancing, X.skinning = G.skinning, X.morphTargets = G.morphTargets, X.morphNormals = G.morphNormals, X.morphColors = G.morphColors, X.morphTargetsCount = G.morphTargetsCount, X.numClippingPlanes = G.numClippingPlanes, X.numIntersection = G.numClipIntersection, X.vertexAlphas = G.vertexAlphas, X.vertexTangents = G.vertexTangents, X.toneMapping = G.toneMapping;
  }
  function Yo(T, G, X, W, K) {
    G.isScene !== !0 && (G = ce), me.resetTextureUnits();
    const _e = G.fog, we = W.isMeshStandardMaterial ? G.environment : null, Se = b === null ? p.outputEncoding : b.isXRRenderTarget === !0 ? b.texture.encoding : 3e3, Me = (W.isMeshStandardMaterial ? ft : tt).get(W.envMap || we), Be = W.vertexColors === !0 && !!X.attributes.color && X.attributes.color.itemSize === 4, Le = !!W.normalMap && !!X.attributes.tangent, Fe = !!X.morphAttributes.position, Ve = !!X.morphAttributes.normal, dn = !!X.morphAttributes.color, Cn = W.toneMapped ? p.toneMapping : 0, Ln = X.morphAttributes.position || X.morphAttributes.normal || X.morphAttributes.color, zt = Ln !== void 0 ? Ln.length : 0, ze = Ee.get(W), Rn = c.state.lights;
    if (U === !0 && (O === !0 || T !== M)) {
      const pt = T === M && W.id === x;
      E.setState(W, T, pt);
    }
    let je = !1;
    W.version === ze.__version ? (ze.needsLights && ze.lightsStateVersion !== Rn.state.version || ze.outputEncoding !== Se || K.isInstancedMesh && ze.instancing === !1 || !K.isInstancedMesh && ze.instancing === !0 || K.isSkinnedMesh && ze.skinning === !1 || !K.isSkinnedMesh && ze.skinning === !0 || ze.envMap !== Me || W.fog === !0 && ze.fog !== _e || ze.numClippingPlanes !== void 0 && (ze.numClippingPlanes !== E.numPlanes || ze.numIntersection !== E.numIntersection) || ze.vertexAlphas !== Be || ze.vertexTangents !== Le || ze.morphTargets !== Fe || ze.morphNormals !== Ve || ze.morphColors !== dn || ze.toneMapping !== Cn || xe.isWebGL2 === !0 && ze.morphTargetsCount !== zt) && (je = !0) : (je = !0, ze.__version = W.version);
    let wt = ze.currentProgram;
    je === !0 && (wt = es(W, G, K));
    let tn = !1, ti = !1, ts = !1;
    const lt = wt.getUniforms(), ni = ze.uniforms;
    if (ue.useProgram(wt.program) && (tn = !0, ti = !0, ts = !0), W.id !== x && (x = W.id, ti = !0), tn || M !== T) {
      if (lt.setValue(Z, "projectionMatrix", T.projectionMatrix), xe.logarithmicDepthBuffer && lt.setValue(
        Z,
        "logDepthBufFC",
        2 / (Math.log(T.far + 1) / Math.LN2)
      ), M !== T && (M = T, ti = !0, ts = !0), W.isShaderMaterial || W.isMeshPhongMaterial || W.isMeshToonMaterial || W.isMeshStandardMaterial || W.envMap) {
        const pt = lt.map.cameraPosition;
        pt !== void 0 && pt.setValue(
          Z,
          ee.setFromMatrixPosition(T.matrixWorld)
        );
      }
      (W.isMeshPhongMaterial || W.isMeshToonMaterial || W.isMeshLambertMaterial || W.isMeshBasicMaterial || W.isMeshStandardMaterial || W.isShaderMaterial) && lt.setValue(Z, "isOrthographic", T.isOrthographicCamera === !0), (W.isMeshPhongMaterial || W.isMeshToonMaterial || W.isMeshLambertMaterial || W.isMeshBasicMaterial || W.isMeshStandardMaterial || W.isShaderMaterial || W.isShadowMaterial || K.isSkinnedMesh) && lt.setValue(Z, "viewMatrix", T.matrixWorldInverse);
    }
    if (K.isSkinnedMesh) {
      lt.setOptional(Z, K, "bindMatrix"), lt.setOptional(Z, K, "bindMatrixInverse");
      const pt = K.skeleton;
      pt && (xe.floatVertexTextures ? (pt.boneTexture === null && pt.computeBoneTexture(), lt.setValue(Z, "boneTexture", pt.boneTexture, me), lt.setValue(Z, "boneTextureSize", pt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const ns = X.morphAttributes;
    if ((ns.position !== void 0 || ns.normal !== void 0 || ns.color !== void 0 && xe.isWebGL2 === !0) && te.update(K, X, W, wt), (ti || ze.receiveShadow !== K.receiveShadow) && (ze.receiveShadow = K.receiveShadow, lt.setValue(Z, "receiveShadow", K.receiveShadow)), ti && (lt.setValue(Z, "toneMappingExposure", p.toneMappingExposure), ze.needsLights && $o(ni, ts), _e && W.fog === !0 && Gt.refreshFogUniforms(ni, _e), Gt.refreshMaterialUniforms(ni, W, z, P, k), ji.upload(Z, ze.uniformsList, ni, me)), W.isShaderMaterial && W.uniformsNeedUpdate === !0 && (ji.upload(Z, ze.uniformsList, ni, me), W.uniformsNeedUpdate = !1), W.isSpriteMaterial && lt.setValue(Z, "center", K.center), lt.setValue(Z, "modelViewMatrix", K.modelViewMatrix), lt.setValue(Z, "normalMatrix", K.normalMatrix), lt.setValue(Z, "modelMatrix", K.matrixWorld), W.isShaderMaterial || W.isRawShaderMaterial) {
      const pt = W.uniformsGroups;
      for (let is = 0, Ko = pt.length; is < Ko; is++)
        if (xe.isWebGL2) {
          const rr = pt[is];
          he.update(rr, wt), he.bind(rr, wt);
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return wt;
  }
  function $o(T, G) {
    T.ambientLightColor.needsUpdate = G, T.lightProbe.needsUpdate = G, T.directionalLights.needsUpdate = G, T.directionalLightShadows.needsUpdate = G, T.pointLights.needsUpdate = G, T.pointLightShadows.needsUpdate = G, T.spotLights.needsUpdate = G, T.spotLightShadows.needsUpdate = G, T.rectAreaLights.needsUpdate = G, T.hemisphereLights.needsUpdate = G;
  }
  function Zo(T) {
    return T.isMeshLambertMaterial || T.isMeshToonMaterial || T.isMeshPhongMaterial || T.isMeshStandardMaterial || T.isShadowMaterial || T.isShaderMaterial && T.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return v;
  }, this.getActiveMipmapLevel = function() {
    return _;
  }, this.getRenderTarget = function() {
    return b;
  }, this.setRenderTargetTextures = function(T, G, X) {
    Ee.get(T.texture).__webglTexture = G, Ee.get(T.depthTexture).__webglTexture = X;
    const W = Ee.get(T);
    W.__hasExternalTextures = !0, W.__hasExternalTextures && (W.__autoAllocateDepthBuffer = X === void 0, W.__autoAllocateDepthBuffer || ve.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), W.__useRenderToTexture = !1));
  }, this.setRenderTargetFramebuffer = function(T, G) {
    const X = Ee.get(T);
    X.__webglFramebuffer = G, X.__useDefaultFramebuffer = G === void 0;
  }, this.setRenderTarget = function(T, G = 0, X = 0) {
    b = T, v = G, _ = X;
    let W = !0;
    if (T) {
      const Me = Ee.get(T);
      Me.__useDefaultFramebuffer !== void 0 ? (ue.bindFramebuffer(36160, null), W = !1) : Me.__webglFramebuffer === void 0 ? me.setupRenderTarget(T) : Me.__hasExternalTextures && me.rebindTextures(T, Ee.get(T.texture).__webglTexture, Ee.get(T.depthTexture).__webglTexture);
    }
    let K = null, _e = !1, we = !1;
    if (T) {
      const Me = T.texture;
      (Me.isData3DTexture || Me.isDataArrayTexture) && (we = !0);
      const Be = Ee.get(T).__webglFramebuffer;
      T.isWebGLCubeRenderTarget ? (K = Be[G], _e = !0) : xe.isWebGL2 && T.samples > 0 && me.useMultisampledRTT(T) === !1 ? K = Ee.get(T).__webglMultisampledFramebuffer : K = Be, S.copy(T.viewport), C.copy(T.scissor), y = T.scissorTest;
    } else
      S.copy(L).multiplyScalar(z).floor(), C.copy(I).multiplyScalar(z).floor(), y = F;
    if (ue.bindFramebuffer(36160, K) && xe.drawBuffers && W && ue.drawBuffers(T, K), ue.viewport(S), ue.scissor(C), ue.setScissorTest(y), _e) {
      const Me = Ee.get(T.texture);
      Z.framebufferTexture2D(36160, 36064, 34069 + G, Me.__webglTexture, X);
    } else if (we) {
      const Me = Ee.get(T.texture), Be = G || 0;
      Z.framebufferTextureLayer(36160, 36064, Me.__webglTexture, X || 0, Be);
    }
    x = -1;
  }, this.readRenderTargetPixels = function(T, G, X, W, K, _e, we) {
    if (!(T && T.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let Se = Ee.get(T).__webglFramebuffer;
    if (T.isWebGLCubeRenderTarget && we !== void 0 && (Se = Se[we]), Se) {
      ue.bindFramebuffer(36160, Se);
      try {
        const Me = T.texture, Be = Me.format, Le = Me.type;
        if (Be !== 1023 && j.convert(Be) !== Z.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const Fe = Le === 1016 && (ve.has("EXT_color_buffer_half_float") || xe.isWebGL2 && ve.has("EXT_color_buffer_float"));
        if (Le !== 1009 && j.convert(Le) !== Z.getParameter(35738) && !(Le === 1015 && (xe.isWebGL2 || ve.has("OES_texture_float") || ve.has("WEBGL_color_buffer_float"))) && !Fe) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        G >= 0 && G <= T.width - W && X >= 0 && X <= T.height - K && Z.readPixels(G, X, W, K, j.convert(Be), j.convert(Le), _e);
      } finally {
        const Me = b !== null ? Ee.get(b).__webglFramebuffer : null;
        ue.bindFramebuffer(36160, Me);
      }
    }
  }, this.copyFramebufferToTexture = function(T, G, X = 0) {
    const W = Math.pow(2, -X), K = Math.floor(G.image.width * W), _e = Math.floor(G.image.height * W);
    me.setTexture2D(G, 0), Z.copyTexSubImage2D(3553, X, 0, 0, T.x, T.y, K, _e), ue.unbindTexture();
  }, this.copyTextureToTexture = function(T, G, X, W = 0) {
    const K = G.image.width, _e = G.image.height, we = j.convert(X.format), Se = j.convert(X.type);
    me.setTexture2D(X, 0), Z.pixelStorei(37440, X.flipY), Z.pixelStorei(37441, X.premultiplyAlpha), Z.pixelStorei(3317, X.unpackAlignment), G.isDataTexture ? Z.texSubImage2D(3553, W, T.x, T.y, K, _e, we, Se, G.image.data) : G.isCompressedTexture ? Z.compressedTexSubImage2D(3553, W, T.x, T.y, G.mipmaps[0].width, G.mipmaps[0].height, we, G.mipmaps[0].data) : Z.texSubImage2D(3553, W, T.x, T.y, we, Se, G.image), W === 0 && X.generateMipmaps && Z.generateMipmap(3553), ue.unbindTexture();
  }, this.copyTextureToTexture3D = function(T, G, X, W, K = 0) {
    if (p.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const _e = T.max.x - T.min.x + 1, we = T.max.y - T.min.y + 1, Se = T.max.z - T.min.z + 1, Me = j.convert(W.format), Be = j.convert(W.type);
    let Le;
    if (W.isData3DTexture)
      me.setTexture3D(W, 0), Le = 32879;
    else if (W.isDataArrayTexture)
      me.setTexture2DArray(W, 0), Le = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    Z.pixelStorei(37440, W.flipY), Z.pixelStorei(37441, W.premultiplyAlpha), Z.pixelStorei(3317, W.unpackAlignment);
    const Fe = Z.getParameter(3314), Ve = Z.getParameter(32878), dn = Z.getParameter(3316), Cn = Z.getParameter(3315), Ln = Z.getParameter(32877), zt = X.isCompressedTexture ? X.mipmaps[0] : X.image;
    Z.pixelStorei(3314, zt.width), Z.pixelStorei(32878, zt.height), Z.pixelStorei(3316, T.min.x), Z.pixelStorei(3315, T.min.y), Z.pixelStorei(32877, T.min.z), X.isDataTexture || X.isData3DTexture ? Z.texSubImage3D(Le, K, G.x, G.y, G.z, _e, we, Se, Me, Be, zt.data) : X.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), Z.compressedTexSubImage3D(Le, K, G.x, G.y, G.z, _e, we, Se, Me, zt.data)) : Z.texSubImage3D(Le, K, G.x, G.y, G.z, _e, we, Se, Me, Be, zt), Z.pixelStorei(3314, Fe), Z.pixelStorei(32878, Ve), Z.pixelStorei(3316, dn), Z.pixelStorei(3315, Cn), Z.pixelStorei(32877, Ln), K === 0 && W.generateMipmaps && Z.generateMipmap(Le), ue.unbindTexture();
  }, this.initTexture = function(T) {
    T.isCubeTexture ? me.setTextureCube(T, 0) : T.isData3DTexture ? me.setTexture3D(T, 0) : T.isDataArrayTexture ? me.setTexture2DArray(T, 0) : me.setTexture2D(T, 0), ue.unbindTexture();
  }, this.resetState = function() {
    v = 0, _ = 0, b = null, ue.reset(), pe.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class Ju extends Po {
}
Ju.prototype.isWebGL1Renderer = !0;
class Io extends ot {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), t;
  }
}
class zo extends un {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Ae(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const kr = /* @__PURE__ */ new Xe(), Xs = /* @__PURE__ */ new wo(), Ui = /* @__PURE__ */ new Zn(), Gi = /* @__PURE__ */ new B();
class Qu extends ot {
  constructor(e = new Et(), t = new zo()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ui.copy(n.boundingSphere), Ui.applyMatrix4(i), Ui.radius += s, e.ray.intersectsSphere(Ui) === !1)
      return;
    kr.copy(i).invert(), Xs.copy(e.ray).applyMatrix4(kr);
    const r = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), a = r * r, l = n.index, d = n.attributes.position;
    if (l !== null) {
      const c = Math.max(0, o.start), m = Math.min(l.count, o.start + o.count);
      for (let g = c, p = m; g < p; g++) {
        const f = l.getX(g);
        Gi.fromBufferAttribute(d, f), Wr(Gi, f, a, i, e, t, this);
      }
    } else {
      const c = Math.max(0, o.start), m = Math.min(d.count, o.start + o.count);
      for (let g = c, p = m; g < p; g++)
        Gi.fromBufferAttribute(d, g), Wr(Gi, g, a, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = i.length; s < o; s++) {
          const r = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = s;
        }
      }
    }
  }
}
function Wr(h, e, t, n, i, s, o) {
  const r = Xs.distanceSqToPoint(h);
  if (r < t) {
    const a = new B();
    Xs.closestPointToPoint(h, a), a.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(a);
    if (l < i.near || l > i.far)
      return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(r),
      point: a,
      index: e,
      face: null,
      object: o
    });
  }
}
class Yi extends vt {
  constructor(e, t, n, i, s, o, r, a, l) {
    super(e, t, n, i, s, o, r, a, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class Js extends Et {
  constructor(e = 1, t = 1, n = 1, i = 8, s = 1, o = !1, r = 0, a = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: i,
      heightSegments: s,
      openEnded: o,
      thetaStart: r,
      thetaLength: a
    };
    const l = this;
    i = Math.floor(i), s = Math.floor(s);
    const u = [], d = [], c = [], m = [];
    let g = 0;
    const p = [], f = n / 2;
    let v = 0;
    _(), o === !1 && (e > 0 && b(!0), t > 0 && b(!1)), this.setIndex(u), this.setAttribute("position", new rt(d, 3)), this.setAttribute("normal", new rt(c, 3)), this.setAttribute("uv", new rt(m, 2));
    function _() {
      const x = new B(), M = new B();
      let S = 0;
      const C = (t - e) / n;
      for (let y = 0; y <= s; y++) {
        const A = [], P = y / s, z = P * (t - e) + e;
        for (let H = 0; H <= i; H++) {
          const D = H / i, L = D * a + r, I = Math.sin(L), F = Math.cos(L);
          M.x = z * I, M.y = -P * n + f, M.z = z * F, d.push(M.x, M.y, M.z), x.set(I, C, F).normalize(), c.push(x.x, x.y, x.z), m.push(D, 1 - P), A.push(g++);
        }
        p.push(A);
      }
      for (let y = 0; y < i; y++)
        for (let A = 0; A < s; A++) {
          const P = p[A][y], z = p[A + 1][y], H = p[A + 1][y + 1], D = p[A][y + 1];
          u.push(P, z, D), u.push(z, H, D), S += 6;
        }
      l.addGroup(v, S, 0), v += S;
    }
    function b(x) {
      const M = g, S = new Ce(), C = new B();
      let y = 0;
      const A = x === !0 ? e : t, P = x === !0 ? 1 : -1;
      for (let H = 1; H <= i; H++)
        d.push(0, f * P, 0), c.push(0, P, 0), m.push(0.5, 0.5), g++;
      const z = g;
      for (let H = 0; H <= i; H++) {
        const L = H / i * a + r, I = Math.cos(L), F = Math.sin(L);
        C.x = A * F, C.y = f * P, C.z = A * I, d.push(C.x, C.y, C.z), c.push(0, P, 0), S.x = I * 0.5 + 0.5, S.y = F * 0.5 * P + 0.5, m.push(S.x, S.y), g++;
      }
      for (let H = 0; H < i; H++) {
        const D = M + H, L = z + H;
        x === !0 ? u.push(L, L + 1, D) : u.push(L + 1, L, D), y += 3;
      }
      l.addGroup(v, y, x === !0 ? 1 : 2), v += y;
    }
  }
  static fromJSON(e) {
    return new Js(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class ed extends un {
  constructor(e) {
    super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new Ae(0), this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
  }
}
class js extends un {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Ae(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ae(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Ce(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class td extends un {
  constructor(e) {
    super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new Ae(16777215), this.specular = new Ae(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ae(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Ce(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Qs extends ot {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ae(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
class nd extends Qs {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(ot.DefaultUp), this.updateMatrix(), this.groundColor = new Ae(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const Vr = /* @__PURE__ */ new Xe(), Hr = /* @__PURE__ */ new B(), qr = /* @__PURE__ */ new B();
class Bo {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ce(512, 512), this.map = null, this.mapPass = null, this.matrix = new Xe(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Zs(), this._frameExtents = new Ce(1, 1), this._viewportCount = 1, this._viewports = [
      new Ge(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Hr.setFromMatrixPosition(e.matrixWorld), t.position.copy(Hr), qr.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(qr), t.updateMatrixWorld(), Vr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Vr), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class id extends Bo {
  constructor() {
    super(new dt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Ws * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class sd extends Qs {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, o = 1) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(ot.DefaultUp), this.updateMatrix(), this.target = new ot(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = o, this.shadow = new id();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const Xr = /* @__PURE__ */ new Xe(), oi = /* @__PURE__ */ new B(), Ds = /* @__PURE__ */ new B();
class rd extends Bo {
  constructor() {
    super(new dt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Ce(4, 2), this._viewportCount = 6, this._viewports = [
      new Ge(2, 1, 1, 1),
      new Ge(0, 1, 1, 1),
      new Ge(3, 1, 1, 1),
      new Ge(1, 1, 1, 1),
      new Ge(3, 0, 1, 1),
      new Ge(1, 0, 1, 1)
    ], this._cubeDirections = [
      new B(1, 0, 0),
      new B(-1, 0, 0),
      new B(0, 0, 1),
      new B(0, 0, -1),
      new B(0, 1, 0),
      new B(0, -1, 0)
    ], this._cubeUps = [
      new B(0, 1, 0),
      new B(0, 1, 0),
      new B(0, 1, 0),
      new B(0, 1, 0),
      new B(0, 0, 1),
      new B(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), oi.setFromMatrixPosition(e.matrixWorld), n.position.copy(oi), Ds.copy(n.position), Ds.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Ds), n.updateMatrixWorld(), i.makeTranslation(-oi.x, -oi.y, -oi.z), Xr.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Xr);
  }
}
class od extends Qs {
  constructor(e, t, n = 0, i = 1) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new rd();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Ys
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ys);
class Ft {
  constructor(e) {
    e === void 0 && (e = [0, 0, 0, 0, 0, 0, 0, 0, 0]), this.elements = e;
  }
  identity() {
    const e = this.elements;
    e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1;
  }
  setZero() {
    const e = this.elements;
    e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 0;
  }
  setTrace(e) {
    const t = this.elements;
    t[0] = e.x, t[4] = e.y, t[8] = e.z;
  }
  getTrace(e) {
    e === void 0 && (e = new w());
    const t = this.elements;
    return e.x = t[0], e.y = t[4], e.z = t[8], e;
  }
  vmult(e, t) {
    t === void 0 && (t = new w());
    const n = this.elements, i = e.x, s = e.y, o = e.z;
    return t.x = n[0] * i + n[1] * s + n[2] * o, t.y = n[3] * i + n[4] * s + n[5] * o, t.z = n[6] * i + n[7] * s + n[8] * o, t;
  }
  smult(e) {
    for (let t = 0; t < this.elements.length; t++)
      this.elements[t] *= e;
  }
  mmult(e, t) {
    t === void 0 && (t = new Ft());
    const n = this.elements, i = e.elements, s = t.elements, o = n[0], r = n[1], a = n[2], l = n[3], u = n[4], d = n[5], c = n[6], m = n[7], g = n[8], p = i[0], f = i[1], v = i[2], _ = i[3], b = i[4], x = i[5], M = i[6], S = i[7], C = i[8];
    return s[0] = o * p + r * _ + a * M, s[1] = o * f + r * b + a * S, s[2] = o * v + r * x + a * C, s[3] = l * p + u * _ + d * M, s[4] = l * f + u * b + d * S, s[5] = l * v + u * x + d * C, s[6] = c * p + m * _ + g * M, s[7] = c * f + m * b + g * S, s[8] = c * v + m * x + g * C, t;
  }
  scale(e, t) {
    t === void 0 && (t = new Ft());
    const n = this.elements, i = t.elements;
    for (let s = 0; s !== 3; s++)
      i[3 * s + 0] = e.x * n[3 * s + 0], i[3 * s + 1] = e.y * n[3 * s + 1], i[3 * s + 2] = e.z * n[3 * s + 2];
    return t;
  }
  solve(e, t) {
    t === void 0 && (t = new w());
    const n = 3, i = 4, s = [];
    let o, r;
    for (o = 0; o < n * i; o++)
      s.push(0);
    for (o = 0; o < 3; o++)
      for (r = 0; r < 3; r++)
        s[o + i * r] = this.elements[o + 3 * r];
    s[3 + 4 * 0] = e.x, s[3 + 4 * 1] = e.y, s[3 + 4 * 2] = e.z;
    let a = 3;
    const l = a;
    let u;
    const d = 4;
    let c;
    do {
      if (o = l - a, s[o + i * o] === 0) {
        for (r = o + 1; r < l; r++)
          if (s[o + i * r] !== 0) {
            u = d;
            do
              c = d - u, s[c + i * o] += s[c + i * r];
            while (--u);
            break;
          }
      }
      if (s[o + i * o] !== 0)
        for (r = o + 1; r < l; r++) {
          const m = s[o + i * r] / s[o + i * o];
          u = d;
          do
            c = d - u, s[c + i * r] = c <= o ? 0 : s[c + i * r] - s[c + i * o] * m;
          while (--u);
        }
    } while (--a);
    if (t.z = s[2 * i + 3] / s[2 * i + 2], t.y = (s[1 * i + 3] - s[1 * i + 2] * t.z) / s[1 * i + 1], t.x = (s[0 * i + 3] - s[0 * i + 2] * t.z - s[0 * i + 1] * t.y) / s[0 * i + 0], isNaN(t.x) || isNaN(t.y) || isNaN(t.z) || t.x === 1 / 0 || t.y === 1 / 0 || t.z === 1 / 0)
      throw `Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;
    return t;
  }
  e(e, t, n) {
    if (n === void 0)
      return this.elements[t + 3 * e];
    this.elements[t + 3 * e] = n;
  }
  copy(e) {
    for (let t = 0; t < e.elements.length; t++)
      this.elements[t] = e.elements[t];
    return this;
  }
  toString() {
    let e = "";
    const t = ",";
    for (let n = 0; n < 9; n++)
      e += this.elements[n] + t;
    return e;
  }
  reverse(e) {
    e === void 0 && (e = new Ft());
    const t = 3, n = 6, i = ad;
    let s, o;
    for (s = 0; s < 3; s++)
      for (o = 0; o < 3; o++)
        i[s + n * o] = this.elements[s + 3 * o];
    i[3 + 6 * 0] = 1, i[3 + 6 * 1] = 0, i[3 + 6 * 2] = 0, i[4 + 6 * 0] = 0, i[4 + 6 * 1] = 1, i[4 + 6 * 2] = 0, i[5 + 6 * 0] = 0, i[5 + 6 * 1] = 0, i[5 + 6 * 2] = 1;
    let r = 3;
    const a = r;
    let l;
    const u = n;
    let d;
    do {
      if (s = a - r, i[s + n * s] === 0) {
        for (o = s + 1; o < a; o++)
          if (i[s + n * o] !== 0) {
            l = u;
            do
              d = u - l, i[d + n * s] += i[d + n * o];
            while (--l);
            break;
          }
      }
      if (i[s + n * s] !== 0)
        for (o = s + 1; o < a; o++) {
          const c = i[s + n * o] / i[s + n * s];
          l = u;
          do
            d = u - l, i[d + n * o] = d <= s ? 0 : i[d + n * o] - i[d + n * s] * c;
          while (--l);
        }
    } while (--r);
    s = 2;
    do {
      o = s - 1;
      do {
        const c = i[s + n * o] / i[s + n * s];
        l = n;
        do
          d = n - l, i[d + n * o] = i[d + n * o] - i[d + n * s] * c;
        while (--l);
      } while (o--);
    } while (--s);
    s = 2;
    do {
      const c = 1 / i[s + n * s];
      l = n;
      do
        d = n - l, i[d + n * s] = i[d + n * s] * c;
      while (--l);
    } while (s--);
    s = 2;
    do {
      o = 2;
      do {
        if (d = i[t + o + n * s], isNaN(d) || d === 1 / 0)
          throw `Could not reverse! A=[${this.toString()}]`;
        e.e(s, o, d);
      } while (o--);
    } while (s--);
    return e;
  }
  setRotationFromQuaternion(e) {
    const t = e.x, n = e.y, i = e.z, s = e.w, o = t + t, r = n + n, a = i + i, l = t * o, u = t * r, d = t * a, c = n * r, m = n * a, g = i * a, p = s * o, f = s * r, v = s * a, _ = this.elements;
    return _[3 * 0 + 0] = 1 - (c + g), _[3 * 0 + 1] = u - v, _[3 * 0 + 2] = d + f, _[3 * 1 + 0] = u + v, _[3 * 1 + 1] = 1 - (l + g), _[3 * 1 + 2] = m - p, _[3 * 2 + 0] = d - f, _[3 * 2 + 1] = m + p, _[3 * 2 + 2] = 1 - (l + c), this;
  }
  transpose(e) {
    e === void 0 && (e = new Ft());
    const t = this.elements, n = e.elements;
    let i;
    return n[0] = t[0], n[4] = t[4], n[8] = t[8], i = t[1], n[1] = t[3], n[3] = i, i = t[2], n[2] = t[6], n[6] = i, i = t[5], n[5] = t[7], n[7] = i, e;
  }
}
const ad = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
class w {
  constructor(e, t, n) {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0), this.x = e, this.y = t, this.z = n;
  }
  cross(e, t) {
    t === void 0 && (t = new w());
    const n = e.x, i = e.y, s = e.z, o = this.x, r = this.y, a = this.z;
    return t.x = r * s - a * i, t.y = a * n - o * s, t.z = o * i - r * n, t;
  }
  set(e, t, n) {
    return this.x = e, this.y = t, this.z = n, this;
  }
  setZero() {
    this.x = this.y = this.z = 0;
  }
  vadd(e, t) {
    if (t)
      t.x = e.x + this.x, t.y = e.y + this.y, t.z = e.z + this.z;
    else
      return new w(this.x + e.x, this.y + e.y, this.z + e.z);
  }
  vsub(e, t) {
    if (t)
      t.x = this.x - e.x, t.y = this.y - e.y, t.z = this.z - e.z;
    else
      return new w(this.x - e.x, this.y - e.y, this.z - e.z);
  }
  crossmat() {
    return new Ft([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0]);
  }
  normalize() {
    const e = this.x, t = this.y, n = this.z, i = Math.sqrt(e * e + t * t + n * n);
    if (i > 0) {
      const s = 1 / i;
      this.x *= s, this.y *= s, this.z *= s;
    } else
      this.x = 0, this.y = 0, this.z = 0;
    return i;
  }
  unit(e) {
    e === void 0 && (e = new w());
    const t = this.x, n = this.y, i = this.z;
    let s = Math.sqrt(t * t + n * n + i * i);
    return s > 0 ? (s = 1 / s, e.x = t * s, e.y = n * s, e.z = i * s) : (e.x = 1, e.y = 0, e.z = 0), e;
  }
  length() {
    const e = this.x, t = this.y, n = this.z;
    return Math.sqrt(e * e + t * t + n * n);
  }
  lengthSquared() {
    return this.dot(this);
  }
  distanceTo(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, o = e.y, r = e.z;
    return Math.sqrt((s - t) * (s - t) + (o - n) * (o - n) + (r - i) * (r - i));
  }
  distanceSquared(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, o = e.y, r = e.z;
    return (s - t) * (s - t) + (o - n) * (o - n) + (r - i) * (r - i);
  }
  scale(e, t) {
    t === void 0 && (t = new w());
    const n = this.x, i = this.y, s = this.z;
    return t.x = e * n, t.y = e * i, t.z = e * s, t;
  }
  vmul(e, t) {
    return t === void 0 && (t = new w()), t.x = e.x * this.x, t.y = e.y * this.y, t.z = e.z * this.z, t;
  }
  addScaledVector(e, t, n) {
    return n === void 0 && (n = new w()), n.x = this.x + e * t.x, n.y = this.y + e * t.y, n.z = this.z + e * t.z, n;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  isZero() {
    return this.x === 0 && this.y === 0 && this.z === 0;
  }
  negate(e) {
    return e === void 0 && (e = new w()), e.x = -this.x, e.y = -this.y, e.z = -this.z, e;
  }
  tangents(e, t) {
    const n = this.length();
    if (n > 0) {
      const i = ld, s = 1 / n;
      i.set(this.x * s, this.y * s, this.z * s);
      const o = cd;
      Math.abs(i.x) < 0.9 ? (o.set(1, 0, 0), i.cross(o, e)) : (o.set(0, 1, 0), i.cross(o, e)), i.cross(e, t);
    } else
      e.set(1, 0, 0), t.set(0, 1, 0);
  }
  toString() {
    return `${this.x},${this.y},${this.z}`;
  }
  toArray() {
    return [this.x, this.y, this.z];
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  lerp(e, t, n) {
    const i = this.x, s = this.y, o = this.z;
    n.x = i + (e.x - i) * t, n.y = s + (e.y - s) * t, n.z = o + (e.z - o) * t;
  }
  almostEquals(e, t) {
    return t === void 0 && (t = 1e-6), !(Math.abs(this.x - e.x) > t || Math.abs(this.y - e.y) > t || Math.abs(this.z - e.z) > t);
  }
  almostZero(e) {
    return e === void 0 && (e = 1e-6), !(Math.abs(this.x) > e || Math.abs(this.y) > e || Math.abs(this.z) > e);
  }
  isAntiparallelTo(e, t) {
    return this.negate(jr), jr.almostEquals(e, t);
  }
  clone() {
    return new w(this.x, this.y, this.z);
  }
}
w.ZERO = new w(0, 0, 0);
w.UNIT_X = new w(1, 0, 0);
w.UNIT_Y = new w(0, 1, 0);
w.UNIT_Z = new w(0, 0, 1);
const ld = new w(), cd = new w(), jr = new w();
class xt {
  constructor(e) {
    e === void 0 && (e = {}), this.lowerBound = new w(), this.upperBound = new w(), e.lowerBound && this.lowerBound.copy(e.lowerBound), e.upperBound && this.upperBound.copy(e.upperBound);
  }
  setFromPoints(e, t, n, i) {
    const s = this.lowerBound, o = this.upperBound, r = n;
    s.copy(e[0]), r && r.vmult(s, s), o.copy(s);
    for (let a = 1; a < e.length; a++) {
      let l = e[a];
      r && (r.vmult(l, Yr), l = Yr), l.x > o.x && (o.x = l.x), l.x < s.x && (s.x = l.x), l.y > o.y && (o.y = l.y), l.y < s.y && (s.y = l.y), l.z > o.z && (o.z = l.z), l.z < s.z && (s.z = l.z);
    }
    return t && (t.vadd(s, s), t.vadd(o, o)), i && (s.x -= i, s.y -= i, s.z -= i, o.x += i, o.y += i, o.z += i), this;
  }
  copy(e) {
    return this.lowerBound.copy(e.lowerBound), this.upperBound.copy(e.upperBound), this;
  }
  clone() {
    return new xt().copy(this);
  }
  extend(e) {
    this.lowerBound.x = Math.min(this.lowerBound.x, e.lowerBound.x), this.upperBound.x = Math.max(this.upperBound.x, e.upperBound.x), this.lowerBound.y = Math.min(this.lowerBound.y, e.lowerBound.y), this.upperBound.y = Math.max(this.upperBound.y, e.upperBound.y), this.lowerBound.z = Math.min(this.lowerBound.z, e.lowerBound.z), this.upperBound.z = Math.max(this.upperBound.z, e.upperBound.z);
  }
  overlaps(e) {
    const t = this.lowerBound, n = this.upperBound, i = e.lowerBound, s = e.upperBound, o = i.x <= n.x && n.x <= s.x || t.x <= s.x && s.x <= n.x, r = i.y <= n.y && n.y <= s.y || t.y <= s.y && s.y <= n.y, a = i.z <= n.z && n.z <= s.z || t.z <= s.z && s.z <= n.z;
    return o && r && a;
  }
  volume() {
    const e = this.lowerBound, t = this.upperBound;
    return (t.x - e.x) * (t.y - e.y) * (t.z - e.z);
  }
  contains(e) {
    const t = this.lowerBound, n = this.upperBound, i = e.lowerBound, s = e.upperBound;
    return t.x <= i.x && n.x >= s.x && t.y <= i.y && n.y >= s.y && t.z <= i.z && n.z >= s.z;
  }
  getCorners(e, t, n, i, s, o, r, a) {
    const l = this.lowerBound, u = this.upperBound;
    e.copy(l), t.set(u.x, l.y, l.z), n.set(u.x, u.y, l.z), i.set(l.x, u.y, u.z), s.set(u.x, l.y, u.z), o.set(l.x, u.y, l.z), r.set(l.x, l.y, u.z), a.copy(u);
  }
  toLocalFrame(e, t) {
    const n = $r, i = n[0], s = n[1], o = n[2], r = n[3], a = n[4], l = n[5], u = n[6], d = n[7];
    this.getCorners(i, s, o, r, a, l, u, d);
    for (let c = 0; c !== 8; c++) {
      const m = n[c];
      e.pointToLocal(m, m);
    }
    return t.setFromPoints(n);
  }
  toWorldFrame(e, t) {
    const n = $r, i = n[0], s = n[1], o = n[2], r = n[3], a = n[4], l = n[5], u = n[6], d = n[7];
    this.getCorners(i, s, o, r, a, l, u, d);
    for (let c = 0; c !== 8; c++) {
      const m = n[c];
      e.pointToWorld(m, m);
    }
    return t.setFromPoints(n);
  }
  overlapsRay(e) {
    const {
      direction: t,
      from: n
    } = e, i = 1 / t.x, s = 1 / t.y, o = 1 / t.z, r = (this.lowerBound.x - n.x) * i, a = (this.upperBound.x - n.x) * i, l = (this.lowerBound.y - n.y) * s, u = (this.upperBound.y - n.y) * s, d = (this.lowerBound.z - n.z) * o, c = (this.upperBound.z - n.z) * o, m = Math.max(Math.max(Math.min(r, a), Math.min(l, u)), Math.min(d, c)), g = Math.min(Math.min(Math.max(r, a), Math.max(l, u)), Math.max(d, c));
    return !(g < 0 || m > g);
  }
}
const Yr = new w(), $r = [new w(), new w(), new w(), new w(), new w(), new w(), new w(), new w()];
class Zr {
  constructor() {
    this.matrix = [];
  }
  get(e, t) {
    let {
      index: n
    } = e, {
      index: i
    } = t;
    if (i > n) {
      const s = i;
      i = n, n = s;
    }
    return this.matrix[(n * (n + 1) >> 1) + i - 1];
  }
  set(e, t, n) {
    let {
      index: i
    } = e, {
      index: s
    } = t;
    if (s > i) {
      const o = s;
      s = i, i = o;
    }
    this.matrix[(i * (i + 1) >> 1) + s - 1] = n ? 1 : 0;
  }
  reset() {
    for (let e = 0, t = this.matrix.length; e !== t; e++)
      this.matrix[e] = 0;
  }
  setNumObjects(e) {
    this.matrix.length = e * (e - 1) >> 1;
  }
}
class No {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    return n[e] === void 0 && (n[e] = []), n[e].includes(t) || n[e].push(t), this;
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return !!(n[e] !== void 0 && n[e].includes(t));
  }
  hasAnyEventListener(e) {
    return this._listeners === void 0 ? !1 : this._listeners[e] !== void 0;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return this;
    const n = this._listeners;
    if (n[e] === void 0)
      return this;
    const i = n[e].indexOf(t);
    return i !== -1 && n[e].splice(i, 1), this;
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return this;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      for (let i = 0, s = n.length; i < s; i++)
        n[i].call(this, e);
    }
    return this;
  }
}
class Ze {
  constructor(e, t, n, i) {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0), i === void 0 && (i = 1), this.x = e, this.y = t, this.z = n, this.w = i;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  toString() {
    return `${this.x},${this.y},${this.z},${this.w}`;
  }
  toArray() {
    return [this.x, this.y, this.z, this.w];
  }
  setFromAxisAngle(e, t) {
    const n = Math.sin(t * 0.5);
    return this.x = e.x * n, this.y = e.y * n, this.z = e.z * n, this.w = Math.cos(t * 0.5), this;
  }
  toAxisAngle(e) {
    e === void 0 && (e = new w()), this.normalize();
    const t = 2 * Math.acos(this.w), n = Math.sqrt(1 - this.w * this.w);
    return n < 1e-3 ? (e.x = this.x, e.y = this.y, e.z = this.z) : (e.x = this.x / n, e.y = this.y / n, e.z = this.z / n), [e, t];
  }
  setFromVectors(e, t) {
    if (e.isAntiparallelTo(t)) {
      const n = hd, i = ud;
      e.tangents(n, i), this.setFromAxisAngle(n, Math.PI);
    } else {
      const n = e.cross(t);
      this.x = n.x, this.y = n.y, this.z = n.z, this.w = Math.sqrt(e.length() ** 2 * t.length() ** 2) + e.dot(t), this.normalize();
    }
    return this;
  }
  mult(e, t) {
    t === void 0 && (t = new Ze());
    const n = this.x, i = this.y, s = this.z, o = this.w, r = e.x, a = e.y, l = e.z, u = e.w;
    return t.x = n * u + o * r + i * l - s * a, t.y = i * u + o * a + s * r - n * l, t.z = s * u + o * l + n * a - i * r, t.w = o * u - n * r - i * a - s * l, t;
  }
  inverse(e) {
    e === void 0 && (e = new Ze());
    const t = this.x, n = this.y, i = this.z, s = this.w;
    this.conjugate(e);
    const o = 1 / (t * t + n * n + i * i + s * s);
    return e.x *= o, e.y *= o, e.z *= o, e.w *= o, e;
  }
  conjugate(e) {
    return e === void 0 && (e = new Ze()), e.x = -this.x, e.y = -this.y, e.z = -this.z, e.w = this.w, e;
  }
  normalize() {
    let e = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    return e === 0 ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (e = 1 / e, this.x *= e, this.y *= e, this.z *= e, this.w *= e), this;
  }
  normalizeFast() {
    const e = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
    return e === 0 ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (this.x *= e, this.y *= e, this.z *= e, this.w *= e), this;
  }
  vmult(e, t) {
    t === void 0 && (t = new w());
    const n = e.x, i = e.y, s = e.z, o = this.x, r = this.y, a = this.z, l = this.w, u = l * n + r * s - a * i, d = l * i + a * n - o * s, c = l * s + o * i - r * n, m = -o * n - r * i - a * s;
    return t.x = u * l + m * -o + d * -a - c * -r, t.y = d * l + m * -r + c * -o - u * -a, t.z = c * l + m * -a + u * -r - d * -o, t;
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w, this;
  }
  toEuler(e, t) {
    t === void 0 && (t = "YZX");
    let n, i, s;
    const o = this.x, r = this.y, a = this.z, l = this.w;
    switch (t) {
      case "YZX":
        const u = o * r + a * l;
        if (u > 0.499 && (n = 2 * Math.atan2(o, l), i = Math.PI / 2, s = 0), u < -0.499 && (n = -2 * Math.atan2(o, l), i = -Math.PI / 2, s = 0), n === void 0) {
          const d = o * o, c = r * r, m = a * a;
          n = Math.atan2(2 * r * l - 2 * o * a, 1 - 2 * c - 2 * m), i = Math.asin(2 * u), s = Math.atan2(2 * o * l - 2 * r * a, 1 - 2 * d - 2 * m);
        }
        break;
      default:
        throw new Error(`Euler order ${t} not supported yet.`);
    }
    e.y = n, e.z = i, e.x = s;
  }
  setFromEuler(e, t, n, i) {
    i === void 0 && (i = "XYZ");
    const s = Math.cos(e / 2), o = Math.cos(t / 2), r = Math.cos(n / 2), a = Math.sin(e / 2), l = Math.sin(t / 2), u = Math.sin(n / 2);
    return i === "XYZ" ? (this.x = a * o * r + s * l * u, this.y = s * l * r - a * o * u, this.z = s * o * u + a * l * r, this.w = s * o * r - a * l * u) : i === "YXZ" ? (this.x = a * o * r + s * l * u, this.y = s * l * r - a * o * u, this.z = s * o * u - a * l * r, this.w = s * o * r + a * l * u) : i === "ZXY" ? (this.x = a * o * r - s * l * u, this.y = s * l * r + a * o * u, this.z = s * o * u + a * l * r, this.w = s * o * r - a * l * u) : i === "ZYX" ? (this.x = a * o * r - s * l * u, this.y = s * l * r + a * o * u, this.z = s * o * u - a * l * r, this.w = s * o * r + a * l * u) : i === "YZX" ? (this.x = a * o * r + s * l * u, this.y = s * l * r + a * o * u, this.z = s * o * u - a * l * r, this.w = s * o * r - a * l * u) : i === "XZY" && (this.x = a * o * r - s * l * u, this.y = s * l * r - a * o * u, this.z = s * o * u + a * l * r, this.w = s * o * r + a * l * u), this;
  }
  clone() {
    return new Ze(this.x, this.y, this.z, this.w);
  }
  slerp(e, t, n) {
    n === void 0 && (n = new Ze());
    const i = this.x, s = this.y, o = this.z, r = this.w;
    let a = e.x, l = e.y, u = e.z, d = e.w, c, m, g, p, f;
    return m = i * a + s * l + o * u + r * d, m < 0 && (m = -m, a = -a, l = -l, u = -u, d = -d), 1 - m > 1e-6 ? (c = Math.acos(m), g = Math.sin(c), p = Math.sin((1 - t) * c) / g, f = Math.sin(t * c) / g) : (p = 1 - t, f = t), n.x = p * i + f * a, n.y = p * s + f * l, n.z = p * o + f * u, n.w = p * r + f * d, n;
  }
  integrate(e, t, n, i) {
    i === void 0 && (i = new Ze());
    const s = e.x * n.x, o = e.y * n.y, r = e.z * n.z, a = this.x, l = this.y, u = this.z, d = this.w, c = t * 0.5;
    return i.x += c * (s * d + o * u - r * l), i.y += c * (o * d + r * a - s * u), i.z += c * (r * d + s * l - o * a), i.w += c * (-s * a - o * l - r * u), i;
  }
}
const hd = new w(), ud = new w(), dd = {
  SPHERE: 1,
  PLANE: 2,
  BOX: 4,
  COMPOUND: 8,
  CONVEXPOLYHEDRON: 16,
  HEIGHTFIELD: 32,
  PARTICLE: 64,
  CYLINDER: 128,
  TRIMESH: 256
};
class le {
  constructor(e) {
    e === void 0 && (e = {}), this.id = le.idCounter++, this.type = e.type || 0, this.boundingSphereRadius = 0, this.collisionResponse = e.collisionResponse ? e.collisionResponse : !0, this.collisionFilterGroup = e.collisionFilterGroup !== void 0 ? e.collisionFilterGroup : 1, this.collisionFilterMask = e.collisionFilterMask !== void 0 ? e.collisionFilterMask : -1, this.material = e.material ? e.material : null, this.body = null;
  }
  updateBoundingSphereRadius() {
    throw `computeBoundingSphereRadius() not implemented for shape type ${this.type}`;
  }
  volume() {
    throw `volume() not implemented for shape type ${this.type}`;
  }
  calculateLocalInertia(e, t) {
    throw `calculateLocalInertia() not implemented for shape type ${this.type}`;
  }
  calculateWorldAABB(e, t, n, i) {
    throw `calculateWorldAABB() not implemented for shape type ${this.type}`;
  }
}
le.idCounter = 0;
le.types = dd;
class Pe {
  constructor(e) {
    e === void 0 && (e = {}), this.position = new w(), this.quaternion = new Ze(), e.position && this.position.copy(e.position), e.quaternion && this.quaternion.copy(e.quaternion);
  }
  pointToLocal(e, t) {
    return Pe.pointToLocalFrame(this.position, this.quaternion, e, t);
  }
  pointToWorld(e, t) {
    return Pe.pointToWorldFrame(this.position, this.quaternion, e, t);
  }
  vectorToWorldFrame(e, t) {
    return t === void 0 && (t = new w()), this.quaternion.vmult(e, t), t;
  }
  static pointToLocalFrame(e, t, n, i) {
    return i === void 0 && (i = new w()), n.vsub(e, i), t.conjugate(Kr), Kr.vmult(i, i), i;
  }
  static pointToWorldFrame(e, t, n, i) {
    return i === void 0 && (i = new w()), t.vmult(n, i), i.vadd(e, i), i;
  }
  static vectorToWorldFrame(e, t, n) {
    return n === void 0 && (n = new w()), e.vmult(t, n), n;
  }
  static vectorToLocalFrame(e, t, n, i) {
    return i === void 0 && (i = new w()), t.w *= -1, t.vmult(n, i), t.w *= -1, i;
  }
}
const Kr = new Ze();
class Mn extends le {
  constructor(e) {
    e === void 0 && (e = {});
    const {
      vertices: t = [],
      faces: n = [],
      normals: i = [],
      axes: s,
      boundingSphereRadius: o
    } = e;
    super({
      type: le.types.CONVEXPOLYHEDRON
    }), this.vertices = t, this.faces = n, this.faceNormals = i, this.faceNormals.length === 0 && this.computeNormals(), o ? this.boundingSphereRadius = o : this.updateBoundingSphereRadius(), this.worldVertices = [], this.worldVerticesNeedsUpdate = !0, this.worldFaceNormals = [], this.worldFaceNormalsNeedsUpdate = !0, this.uniqueAxes = s ? s.slice() : null, this.uniqueEdges = [], this.computeEdges();
  }
  computeEdges() {
    const e = this.faces, t = this.vertices, n = this.uniqueEdges;
    n.length = 0;
    const i = new w();
    for (let s = 0; s !== e.length; s++) {
      const o = e[s], r = o.length;
      for (let a = 0; a !== r; a++) {
        const l = (a + 1) % r;
        t[o[a]].vsub(t[o[l]], i), i.normalize();
        let u = !1;
        for (let d = 0; d !== n.length; d++)
          if (n[d].almostEquals(i) || n[d].almostEquals(i)) {
            u = !0;
            break;
          }
        u || n.push(i.clone());
      }
    }
  }
  computeNormals() {
    this.faceNormals.length = this.faces.length;
    for (let e = 0; e < this.faces.length; e++) {
      for (let i = 0; i < this.faces[e].length; i++)
        if (!this.vertices[this.faces[e][i]])
          throw new Error(`Vertex ${this.faces[e][i]} not found!`);
      const t = this.faceNormals[e] || new w();
      this.getFaceNormal(e, t), t.negate(t), this.faceNormals[e] = t;
      const n = this.vertices[this.faces[e][0]];
      if (t.dot(n) < 0) {
        console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);
        for (let i = 0; i < this.faces[e].length; i++)
          console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`);
      }
    }
  }
  getFaceNormal(e, t) {
    const n = this.faces[e], i = this.vertices[n[0]], s = this.vertices[n[1]], o = this.vertices[n[2]];
    Mn.computeNormal(i, s, o, t);
  }
  static computeNormal(e, t, n, i) {
    const s = new w(), o = new w();
    t.vsub(e, o), n.vsub(t, s), s.cross(o, i), i.isZero() || i.normalize();
  }
  clipAgainstHull(e, t, n, i, s, o, r, a, l) {
    const u = new w();
    let d = -1, c = -Number.MAX_VALUE;
    for (let g = 0; g < n.faces.length; g++) {
      u.copy(n.faceNormals[g]), s.vmult(u, u);
      const p = u.dot(o);
      p > c && (c = p, d = g);
    }
    const m = [];
    for (let g = 0; g < n.faces[d].length; g++) {
      const p = n.vertices[n.faces[d][g]], f = new w();
      f.copy(p), s.vmult(f, f), i.vadd(f, f), m.push(f);
    }
    d >= 0 && this.clipFaceAgainstHull(o, e, t, m, r, a, l);
  }
  findSeparatingAxis(e, t, n, i, s, o, r, a) {
    const l = new w(), u = new w(), d = new w(), c = new w(), m = new w(), g = new w();
    let p = Number.MAX_VALUE;
    const f = this;
    if (f.uniqueAxes)
      for (let v = 0; v !== f.uniqueAxes.length; v++) {
        n.vmult(f.uniqueAxes[v], l);
        const _ = f.testSepAxis(l, e, t, n, i, s);
        if (_ === !1)
          return !1;
        _ < p && (p = _, o.copy(l));
      }
    else {
      const v = r ? r.length : f.faces.length;
      for (let _ = 0; _ < v; _++) {
        const b = r ? r[_] : _;
        l.copy(f.faceNormals[b]), n.vmult(l, l);
        const x = f.testSepAxis(l, e, t, n, i, s);
        if (x === !1)
          return !1;
        x < p && (p = x, o.copy(l));
      }
    }
    if (e.uniqueAxes)
      for (let v = 0; v !== e.uniqueAxes.length; v++) {
        s.vmult(e.uniqueAxes[v], u);
        const _ = f.testSepAxis(u, e, t, n, i, s);
        if (_ === !1)
          return !1;
        _ < p && (p = _, o.copy(u));
      }
    else {
      const v = a ? a.length : e.faces.length;
      for (let _ = 0; _ < v; _++) {
        const b = a ? a[_] : _;
        u.copy(e.faceNormals[b]), s.vmult(u, u);
        const x = f.testSepAxis(u, e, t, n, i, s);
        if (x === !1)
          return !1;
        x < p && (p = x, o.copy(u));
      }
    }
    for (let v = 0; v !== f.uniqueEdges.length; v++) {
      n.vmult(f.uniqueEdges[v], c);
      for (let _ = 0; _ !== e.uniqueEdges.length; _++)
        if (s.vmult(e.uniqueEdges[_], m), c.cross(m, g), !g.almostZero()) {
          g.normalize();
          const b = f.testSepAxis(g, e, t, n, i, s);
          if (b === !1)
            return !1;
          b < p && (p = b, o.copy(g));
        }
    }
    return i.vsub(t, d), d.dot(o) > 0 && o.negate(o), !0;
  }
  testSepAxis(e, t, n, i, s, o) {
    const r = this;
    Mn.project(r, e, n, i, Ps), Mn.project(t, e, s, o, Is);
    const a = Ps[0], l = Ps[1], u = Is[0], d = Is[1];
    if (a < d || u < l)
      return !1;
    const c = a - d, m = u - l;
    return c < m ? c : m;
  }
  calculateLocalInertia(e, t) {
    const n = new w(), i = new w();
    this.computeLocalAABB(i, n);
    const s = n.x - i.x, o = n.y - i.y, r = n.z - i.z;
    t.x = 1 / 12 * e * (2 * o * 2 * o + 2 * r * 2 * r), t.y = 1 / 12 * e * (2 * s * 2 * s + 2 * r * 2 * r), t.z = 1 / 12 * e * (2 * o * 2 * o + 2 * s * 2 * s);
  }
  getPlaneConstantOfFace(e) {
    const t = this.faces[e], n = this.faceNormals[e], i = this.vertices[t[0]];
    return -n.dot(i);
  }
  clipFaceAgainstHull(e, t, n, i, s, o, r) {
    const a = new w(), l = new w(), u = new w(), d = new w(), c = new w(), m = new w(), g = new w(), p = new w(), f = this, v = [], _ = i, b = v;
    let x = -1, M = Number.MAX_VALUE;
    for (let P = 0; P < f.faces.length; P++) {
      a.copy(f.faceNormals[P]), n.vmult(a, a);
      const z = a.dot(e);
      z < M && (M = z, x = P);
    }
    if (x < 0)
      return;
    const S = f.faces[x];
    S.connectedFaces = [];
    for (let P = 0; P < f.faces.length; P++)
      for (let z = 0; z < f.faces[P].length; z++)
        S.indexOf(f.faces[P][z]) !== -1 && P !== x && S.connectedFaces.indexOf(P) === -1 && S.connectedFaces.push(P);
    const C = S.length;
    for (let P = 0; P < C; P++) {
      const z = f.vertices[S[P]], H = f.vertices[S[(P + 1) % C]];
      z.vsub(H, l), u.copy(l), n.vmult(u, u), t.vadd(u, u), d.copy(this.faceNormals[x]), n.vmult(d, d), t.vadd(d, d), u.cross(d, c), c.negate(c), m.copy(z), n.vmult(m, m), t.vadd(m, m);
      const D = S.connectedFaces[P];
      g.copy(this.faceNormals[D]);
      const L = this.getPlaneConstantOfFace(D);
      p.copy(g), n.vmult(p, p);
      const I = L - p.dot(t);
      for (this.clipFaceAgainstPlane(_, b, p, I); _.length; )
        _.shift();
      for (; b.length; )
        _.push(b.shift());
    }
    g.copy(this.faceNormals[x]);
    const y = this.getPlaneConstantOfFace(x);
    p.copy(g), n.vmult(p, p);
    const A = y - p.dot(t);
    for (let P = 0; P < _.length; P++) {
      let z = p.dot(_[P]) + A;
      if (z <= s && (console.log(`clamped: depth=${z} to minDist=${s}`), z = s), z <= o) {
        const H = _[P];
        if (z <= 1e-6) {
          const D = {
            point: H,
            normal: p,
            depth: z
          };
          r.push(D);
        }
      }
    }
  }
  clipFaceAgainstPlane(e, t, n, i) {
    let s, o;
    const r = e.length;
    if (r < 2)
      return t;
    let a = e[e.length - 1], l = e[0];
    s = n.dot(a) + i;
    for (let u = 0; u < r; u++) {
      if (l = e[u], o = n.dot(l) + i, s < 0)
        if (o < 0) {
          const d = new w();
          d.copy(l), t.push(d);
        } else {
          const d = new w();
          a.lerp(l, s / (s - o), d), t.push(d);
        }
      else if (o < 0) {
        const d = new w();
        a.lerp(l, s / (s - o), d), t.push(d), t.push(l);
      }
      a = l, s = o;
    }
    return t;
  }
  computeWorldVertices(e, t) {
    for (; this.worldVertices.length < this.vertices.length; )
      this.worldVertices.push(new w());
    const n = this.vertices, i = this.worldVertices;
    for (let s = 0; s !== this.vertices.length; s++)
      t.vmult(n[s], i[s]), e.vadd(i[s], i[s]);
    this.worldVerticesNeedsUpdate = !1;
  }
  computeLocalAABB(e, t) {
    const n = this.vertices;
    e.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), t.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
    for (let i = 0; i < this.vertices.length; i++) {
      const s = n[i];
      s.x < e.x ? e.x = s.x : s.x > t.x && (t.x = s.x), s.y < e.y ? e.y = s.y : s.y > t.y && (t.y = s.y), s.z < e.z ? e.z = s.z : s.z > t.z && (t.z = s.z);
    }
  }
  computeWorldFaceNormals(e) {
    const t = this.faceNormals.length;
    for (; this.worldFaceNormals.length < t; )
      this.worldFaceNormals.push(new w());
    const n = this.faceNormals, i = this.worldFaceNormals;
    for (let s = 0; s !== t; s++)
      e.vmult(n[s], i[s]);
    this.worldFaceNormalsNeedsUpdate = !1;
  }
  updateBoundingSphereRadius() {
    let e = 0;
    const t = this.vertices;
    for (let n = 0; n !== t.length; n++) {
      const i = t[n].lengthSquared();
      i > e && (e = i);
    }
    this.boundingSphereRadius = Math.sqrt(e);
  }
  calculateWorldAABB(e, t, n, i) {
    const s = this.vertices;
    let o, r, a, l, u, d, c = new w();
    for (let m = 0; m < s.length; m++) {
      c.copy(s[m]), t.vmult(c, c), e.vadd(c, c);
      const g = c;
      (o === void 0 || g.x < o) && (o = g.x), (l === void 0 || g.x > l) && (l = g.x), (r === void 0 || g.y < r) && (r = g.y), (u === void 0 || g.y > u) && (u = g.y), (a === void 0 || g.z < a) && (a = g.z), (d === void 0 || g.z > d) && (d = g.z);
    }
    n.set(o, r, a), i.set(l, u, d);
  }
  volume() {
    return 4 * Math.PI * this.boundingSphereRadius / 3;
  }
  getAveragePointLocal(e) {
    e === void 0 && (e = new w());
    const t = this.vertices;
    for (let n = 0; n < t.length; n++)
      e.vadd(t[n], e);
    return e.scale(1 / t.length, e), e;
  }
  transformAllPoints(e, t) {
    const n = this.vertices.length, i = this.vertices;
    if (t) {
      for (let s = 0; s < n; s++) {
        const o = i[s];
        t.vmult(o, o);
      }
      for (let s = 0; s < this.faceNormals.length; s++) {
        const o = this.faceNormals[s];
        t.vmult(o, o);
      }
    }
    if (e)
      for (let s = 0; s < n; s++) {
        const o = i[s];
        o.vadd(e, o);
      }
  }
  pointIsInside(e) {
    const t = this.vertices, n = this.faces, i = this.faceNormals, s = null, o = new w();
    this.getAveragePointLocal(o);
    for (let r = 0; r < this.faces.length; r++) {
      let a = i[r];
      const l = t[n[r][0]], u = new w();
      e.vsub(l, u);
      const d = a.dot(u), c = new w();
      o.vsub(l, c);
      const m = a.dot(c);
      if (d < 0 && m > 0 || d > 0 && m < 0)
        return !1;
    }
    return s ? 1 : -1;
  }
  static project(e, t, n, i, s) {
    const o = e.vertices.length, r = fd;
    let a = 0, l = 0;
    const u = pd, d = e.vertices;
    u.setZero(), Pe.vectorToLocalFrame(n, i, t, r), Pe.pointToLocalFrame(n, i, u, u);
    const c = u.dot(r);
    l = a = d[0].dot(r);
    for (let m = 1; m < o; m++) {
      const g = d[m].dot(r);
      g > a && (a = g), g < l && (l = g);
    }
    if (l -= c, a -= c, l > a) {
      const m = l;
      l = a, a = m;
    }
    s[0] = a, s[1] = l;
  }
}
const Ps = [], Is = [];
new w();
const fd = new w(), pd = new w();
class er extends le {
  constructor(e) {
    super({
      type: le.types.BOX
    }), this.halfExtents = e, this.convexPolyhedronRepresentation = null, this.updateConvexPolyhedronRepresentation(), this.updateBoundingSphereRadius();
  }
  updateConvexPolyhedronRepresentation() {
    const e = this.halfExtents.x, t = this.halfExtents.y, n = this.halfExtents.z, i = w, s = [new i(-e, -t, -n), new i(e, -t, -n), new i(e, t, -n), new i(-e, t, -n), new i(-e, -t, n), new i(e, -t, n), new i(e, t, n), new i(-e, t, n)], o = [
      [3, 2, 1, 0],
      [4, 5, 6, 7],
      [5, 4, 0, 1],
      [2, 3, 7, 6],
      [0, 4, 7, 3],
      [1, 2, 6, 5]
    ], r = [new i(0, 0, 1), new i(0, 1, 0), new i(1, 0, 0)], a = new Mn({
      vertices: s,
      faces: o,
      axes: r
    });
    this.convexPolyhedronRepresentation = a, a.material = this.material;
  }
  calculateLocalInertia(e, t) {
    return t === void 0 && (t = new w()), er.calculateInertia(this.halfExtents, e, t), t;
  }
  static calculateInertia(e, t, n) {
    const i = e;
    n.x = 1 / 12 * t * (2 * i.y * 2 * i.y + 2 * i.z * 2 * i.z), n.y = 1 / 12 * t * (2 * i.x * 2 * i.x + 2 * i.z * 2 * i.z), n.z = 1 / 12 * t * (2 * i.y * 2 * i.y + 2 * i.x * 2 * i.x);
  }
  getSideNormals(e, t) {
    const n = e, i = this.halfExtents;
    if (n[0].set(i.x, 0, 0), n[1].set(0, i.y, 0), n[2].set(0, 0, i.z), n[3].set(-i.x, 0, 0), n[4].set(0, -i.y, 0), n[5].set(0, 0, -i.z), t !== void 0)
      for (let s = 0; s !== n.length; s++)
        t.vmult(n[s], n[s]);
    return n;
  }
  volume() {
    return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
  }
  updateBoundingSphereRadius() {
    this.boundingSphereRadius = this.halfExtents.length();
  }
  forEachWorldCorner(e, t, n) {
    const i = this.halfExtents, s = [[i.x, i.y, i.z], [-i.x, i.y, i.z], [-i.x, -i.y, i.z], [-i.x, -i.y, -i.z], [i.x, -i.y, -i.z], [i.x, i.y, -i.z], [-i.x, i.y, -i.z], [i.x, -i.y, i.z]];
    for (let o = 0; o < s.length; o++)
      hn.set(s[o][0], s[o][1], s[o][2]), t.vmult(hn, hn), e.vadd(hn, hn), n(hn.x, hn.y, hn.z);
  }
  calculateWorldAABB(e, t, n, i) {
    const s = this.halfExtents;
    Bt[0].set(s.x, s.y, s.z), Bt[1].set(-s.x, s.y, s.z), Bt[2].set(-s.x, -s.y, s.z), Bt[3].set(-s.x, -s.y, -s.z), Bt[4].set(s.x, -s.y, -s.z), Bt[5].set(s.x, s.y, -s.z), Bt[6].set(-s.x, s.y, -s.z), Bt[7].set(s.x, -s.y, s.z);
    const o = Bt[0];
    t.vmult(o, o), e.vadd(o, o), i.copy(o), n.copy(o);
    for (let r = 1; r < 8; r++) {
      const a = Bt[r];
      t.vmult(a, a), e.vadd(a, a);
      const l = a.x, u = a.y, d = a.z;
      l > i.x && (i.x = l), u > i.y && (i.y = u), d > i.z && (i.z = d), l < n.x && (n.x = l), u < n.y && (n.y = u), d < n.z && (n.z = d);
    }
  }
}
const hn = new w(), Bt = [new w(), new w(), new w(), new w(), new w(), new w(), new w(), new w()], tr = {
  DYNAMIC: 1,
  STATIC: 2,
  KINEMATIC: 4
}, nr = {
  AWAKE: 0,
  SLEEPY: 1,
  SLEEPING: 2
};
class ie extends No {
  constructor(e) {
    e === void 0 && (e = {}), super(), this.id = ie.idCounter++, this.index = -1, this.world = null, this.vlambda = new w(), this.collisionFilterGroup = typeof e.collisionFilterGroup == "number" ? e.collisionFilterGroup : 1, this.collisionFilterMask = typeof e.collisionFilterMask == "number" ? e.collisionFilterMask : -1, this.collisionResponse = typeof e.collisionResponse == "boolean" ? e.collisionResponse : !0, this.position = new w(), this.previousPosition = new w(), this.interpolatedPosition = new w(), this.initPosition = new w(), e.position && (this.position.copy(e.position), this.previousPosition.copy(e.position), this.interpolatedPosition.copy(e.position), this.initPosition.copy(e.position)), this.velocity = new w(), e.velocity && this.velocity.copy(e.velocity), this.initVelocity = new w(), this.force = new w();
    const t = typeof e.mass == "number" ? e.mass : 0;
    this.mass = t, this.invMass = t > 0 ? 1 / t : 0, this.material = e.material || null, this.linearDamping = typeof e.linearDamping == "number" ? e.linearDamping : 0.01, this.type = t <= 0 ? ie.STATIC : ie.DYNAMIC, typeof e.type == typeof ie.STATIC && (this.type = e.type), this.allowSleep = typeof e.allowSleep < "u" ? e.allowSleep : !0, this.sleepState = ie.AWAKE, this.sleepSpeedLimit = typeof e.sleepSpeedLimit < "u" ? e.sleepSpeedLimit : 0.1, this.sleepTimeLimit = typeof e.sleepTimeLimit < "u" ? e.sleepTimeLimit : 1, this.timeLastSleepy = 0, this.wakeUpAfterNarrowphase = !1, this.torque = new w(), this.quaternion = new Ze(), this.initQuaternion = new Ze(), this.previousQuaternion = new Ze(), this.interpolatedQuaternion = new Ze(), e.quaternion && (this.quaternion.copy(e.quaternion), this.initQuaternion.copy(e.quaternion), this.previousQuaternion.copy(e.quaternion), this.interpolatedQuaternion.copy(e.quaternion)), this.angularVelocity = new w(), e.angularVelocity && this.angularVelocity.copy(e.angularVelocity), this.initAngularVelocity = new w(), this.shapes = [], this.shapeOffsets = [], this.shapeOrientations = [], this.inertia = new w(), this.invInertia = new w(), this.invInertiaWorld = new Ft(), this.invMassSolve = 0, this.invInertiaSolve = new w(), this.invInertiaWorldSolve = new Ft(), this.fixedRotation = typeof e.fixedRotation < "u" ? e.fixedRotation : !1, this.angularDamping = typeof e.angularDamping < "u" ? e.angularDamping : 0.01, this.linearFactor = new w(1, 1, 1), e.linearFactor && this.linearFactor.copy(e.linearFactor), this.angularFactor = new w(1, 1, 1), e.angularFactor && this.angularFactor.copy(e.angularFactor), this.aabb = new xt(), this.aabbNeedsUpdate = !0, this.boundingRadius = 0, this.wlambda = new w(), this.isTrigger = Boolean(e.isTrigger), e.shape && this.addShape(e.shape), this.updateMassProperties();
  }
  wakeUp() {
    const e = this.sleepState;
    this.sleepState = ie.AWAKE, this.wakeUpAfterNarrowphase = !1, e === ie.SLEEPING && this.dispatchEvent(ie.wakeupEvent);
  }
  sleep() {
    this.sleepState = ie.SLEEPING, this.velocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0), this.wakeUpAfterNarrowphase = !1;
  }
  sleepTick(e) {
    if (this.allowSleep) {
      const t = this.sleepState, n = this.velocity.lengthSquared() + this.angularVelocity.lengthSquared(), i = this.sleepSpeedLimit ** 2;
      t === ie.AWAKE && n < i ? (this.sleepState = ie.SLEEPY, this.timeLastSleepy = e, this.dispatchEvent(ie.sleepyEvent)) : t === ie.SLEEPY && n > i ? this.wakeUp() : t === ie.SLEEPY && e - this.timeLastSleepy > this.sleepTimeLimit && (this.sleep(), this.dispatchEvent(ie.sleepEvent));
    }
  }
  updateSolveMassProperties() {
    this.sleepState === ie.SLEEPING || this.type === ie.KINEMATIC ? (this.invMassSolve = 0, this.invInertiaSolve.setZero(), this.invInertiaWorldSolve.setZero()) : (this.invMassSolve = this.invMass, this.invInertiaSolve.copy(this.invInertia), this.invInertiaWorldSolve.copy(this.invInertiaWorld));
  }
  pointToLocalFrame(e, t) {
    return t === void 0 && (t = new w()), e.vsub(this.position, t), this.quaternion.conjugate().vmult(t, t), t;
  }
  vectorToLocalFrame(e, t) {
    return t === void 0 && (t = new w()), this.quaternion.conjugate().vmult(e, t), t;
  }
  pointToWorldFrame(e, t) {
    return t === void 0 && (t = new w()), this.quaternion.vmult(e, t), t.vadd(this.position, t), t;
  }
  vectorToWorldFrame(e, t) {
    return t === void 0 && (t = new w()), this.quaternion.vmult(e, t), t;
  }
  addShape(e, t, n) {
    const i = new w(), s = new Ze();
    return t && i.copy(t), n && s.copy(n), this.shapes.push(e), this.shapeOffsets.push(i), this.shapeOrientations.push(s), this.updateMassProperties(), this.updateBoundingRadius(), this.aabbNeedsUpdate = !0, e.body = this, this;
  }
  removeShape(e) {
    const t = this.shapes.indexOf(e);
    return t === -1 ? (console.warn("Shape does not belong to the body"), this) : (this.shapes.splice(t, 1), this.shapeOffsets.splice(t, 1), this.shapeOrientations.splice(t, 1), this.updateMassProperties(), this.updateBoundingRadius(), this.aabbNeedsUpdate = !0, e.body = null, this);
  }
  updateBoundingRadius() {
    const e = this.shapes, t = this.shapeOffsets, n = e.length;
    let i = 0;
    for (let s = 0; s !== n; s++) {
      const o = e[s];
      o.updateBoundingSphereRadius();
      const r = t[s].length(), a = o.boundingSphereRadius;
      r + a > i && (i = r + a);
    }
    this.boundingRadius = i;
  }
  updateAABB() {
    const e = this.shapes, t = this.shapeOffsets, n = this.shapeOrientations, i = e.length, s = md, o = gd, r = this.quaternion, a = this.aabb, l = _d;
    for (let u = 0; u !== i; u++) {
      const d = e[u];
      r.vmult(t[u], s), s.vadd(this.position, s), r.mult(n[u], o), d.calculateWorldAABB(s, o, l.lowerBound, l.upperBound), u === 0 ? a.copy(l) : a.extend(l);
    }
    this.aabbNeedsUpdate = !1;
  }
  updateInertiaWorld(e) {
    const t = this.invInertia;
    if (!(t.x === t.y && t.y === t.z && !e)) {
      const n = vd, i = xd;
      n.setRotationFromQuaternion(this.quaternion), n.transpose(i), n.scale(t, n), n.mmult(i, this.invInertiaWorld);
    }
  }
  applyForce(e, t) {
    if (t === void 0 && (t = new w()), this.type !== ie.DYNAMIC)
      return;
    this.sleepState === ie.SLEEPING && this.wakeUp();
    const n = wd;
    t.cross(e, n), this.force.vadd(e, this.force), this.torque.vadd(n, this.torque);
  }
  applyLocalForce(e, t) {
    if (t === void 0 && (t = new w()), this.type !== ie.DYNAMIC)
      return;
    const n = bd, i = Md;
    this.vectorToWorldFrame(e, n), this.vectorToWorldFrame(t, i), this.applyForce(n, i);
  }
  applyTorque(e) {
    this.type === ie.DYNAMIC && (this.sleepState === ie.SLEEPING && this.wakeUp(), this.torque.vadd(e, this.torque));
  }
  applyImpulse(e, t) {
    if (t === void 0 && (t = new w()), this.type !== ie.DYNAMIC)
      return;
    this.sleepState === ie.SLEEPING && this.wakeUp();
    const n = t, i = Sd;
    i.copy(e), i.scale(this.invMass, i), this.velocity.vadd(i, this.velocity);
    const s = Ed;
    n.cross(e, s), this.invInertiaWorld.vmult(s, s), this.angularVelocity.vadd(s, this.angularVelocity);
  }
  applyLocalImpulse(e, t) {
    if (t === void 0 && (t = new w()), this.type !== ie.DYNAMIC)
      return;
    const n = Td, i = Ad;
    this.vectorToWorldFrame(e, n), this.vectorToWorldFrame(t, i), this.applyImpulse(n, i);
  }
  updateMassProperties() {
    const e = Cd;
    this.invMass = this.mass > 0 ? 1 / this.mass : 0;
    const t = this.inertia, n = this.fixedRotation;
    this.updateAABB(), e.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2), er.calculateInertia(e, this.mass, t), this.invInertia.set(t.x > 0 && !n ? 1 / t.x : 0, t.y > 0 && !n ? 1 / t.y : 0, t.z > 0 && !n ? 1 / t.z : 0), this.updateInertiaWorld(!0);
  }
  getVelocityAtWorldPoint(e, t) {
    const n = new w();
    return e.vsub(this.position, n), this.angularVelocity.cross(n, t), this.velocity.vadd(t, t), t;
  }
  integrate(e, t, n) {
    if (this.previousPosition.copy(this.position), this.previousQuaternion.copy(this.quaternion), !(this.type === ie.DYNAMIC || this.type === ie.KINEMATIC) || this.sleepState === ie.SLEEPING)
      return;
    const i = this.velocity, s = this.angularVelocity, o = this.position, r = this.force, a = this.torque, l = this.quaternion, u = this.invMass, d = this.invInertiaWorld, c = this.linearFactor, m = u * e;
    i.x += r.x * m * c.x, i.y += r.y * m * c.y, i.z += r.z * m * c.z;
    const g = d.elements, p = this.angularFactor, f = a.x * p.x, v = a.y * p.y, _ = a.z * p.z;
    s.x += e * (g[0] * f + g[1] * v + g[2] * _), s.y += e * (g[3] * f + g[4] * v + g[5] * _), s.z += e * (g[6] * f + g[7] * v + g[8] * _), o.x += i.x * e, o.y += i.y * e, o.z += i.z * e, l.integrate(this.angularVelocity, e, this.angularFactor, l), t && (n ? l.normalizeFast() : l.normalize()), this.aabbNeedsUpdate = !0, this.updateInertiaWorld();
  }
}
ie.idCounter = 0;
ie.COLLIDE_EVENT_NAME = "collide";
ie.DYNAMIC = tr.DYNAMIC;
ie.STATIC = tr.STATIC;
ie.KINEMATIC = tr.KINEMATIC;
ie.AWAKE = nr.AWAKE;
ie.SLEEPY = nr.SLEEPY;
ie.SLEEPING = nr.SLEEPING;
ie.wakeupEvent = {
  type: "wakeup"
};
ie.sleepyEvent = {
  type: "sleepy"
};
ie.sleepEvent = {
  type: "sleep"
};
const md = new w(), gd = new Ze(), _d = new xt(), vd = new Ft(), xd = new Ft(), yd = new Ft(), wd = new w(), bd = new w(), Md = new w(), Sd = new w(), Ed = new w(), Td = new w(), Ad = new w(), Cd = new w();
class Ld {
  constructor() {
    this.world = null, this.useBoundingBoxes = !1, this.dirty = !0;
  }
  collisionPairs(e, t, n) {
    throw new Error("collisionPairs not implemented for this BroadPhase class!");
  }
  needBroadphaseCollision(e, t) {
    return !((e.collisionFilterGroup & t.collisionFilterMask) === 0 || (t.collisionFilterGroup & e.collisionFilterMask) === 0 || ((e.type & ie.STATIC) !== 0 || e.sleepState === ie.SLEEPING) && ((t.type & ie.STATIC) !== 0 || t.sleepState === ie.SLEEPING));
  }
  intersectionTest(e, t, n, i) {
    this.useBoundingBoxes ? this.doBoundingBoxBroadphase(e, t, n, i) : this.doBoundingSphereBroadphase(e, t, n, i);
  }
  doBoundingSphereBroadphase(e, t, n, i) {
    const s = Rd;
    t.position.vsub(e.position, s);
    const o = (e.boundingRadius + t.boundingRadius) ** 2;
    s.lengthSquared() < o && (n.push(e), i.push(t));
  }
  doBoundingBoxBroadphase(e, t, n, i) {
    e.aabbNeedsUpdate && e.updateAABB(), t.aabbNeedsUpdate && t.updateAABB(), e.aabb.overlaps(t.aabb) && (n.push(e), i.push(t));
  }
  makePairsUnique(e, t) {
    const n = Fd, i = Dd, s = Pd, o = e.length;
    for (let r = 0; r !== o; r++)
      i[r] = e[r], s[r] = t[r];
    e.length = 0, t.length = 0;
    for (let r = 0; r !== o; r++) {
      const a = i[r].id, l = s[r].id, u = a < l ? `${a},${l}` : `${l},${a}`;
      n[u] = r, n.keys.push(u);
    }
    for (let r = 0; r !== n.keys.length; r++) {
      const a = n.keys.pop(), l = n[a];
      e.push(i[l]), t.push(s[l]), delete n[a];
    }
  }
  setWorld(e) {
  }
  static boundingSphereCheck(e, t) {
    const n = new w();
    e.position.vsub(t.position, n);
    const i = e.shapes[0], s = t.shapes[0];
    return Math.pow(i.boundingSphereRadius + s.boundingSphereRadius, 2) > n.lengthSquared();
  }
  aabbQuery(e, t, n) {
    return console.warn(".aabbQuery is not implemented in this Broadphase subclass."), [];
  }
}
const Rd = new w();
new w();
new Ze();
new w();
const Fd = {
  keys: []
}, Dd = [], Pd = [];
new w();
new w();
new w();
class Oo extends Ld {
  constructor() {
    super();
  }
  collisionPairs(e, t, n) {
    const i = e.bodies, s = i.length;
    let o, r;
    for (let a = 0; a !== s; a++)
      for (let l = 0; l !== a; l++)
        o = i[a], r = i[l], this.needBroadphaseCollision(o, r) && this.intersectionTest(o, r, t, n);
  }
  aabbQuery(e, t, n) {
    n === void 0 && (n = []);
    for (let i = 0; i < e.bodies.length; i++) {
      const s = e.bodies[i];
      s.aabbNeedsUpdate && s.updateAABB(), s.aabb.overlaps(t) && n.push(s);
    }
    return n;
  }
}
class Ki {
  constructor() {
    this.rayFromWorld = new w(), this.rayToWorld = new w(), this.hitNormalWorld = new w(), this.hitPointWorld = new w(), this.hasHit = !1, this.shape = null, this.body = null, this.hitFaceIndex = -1, this.distance = -1, this.shouldStop = !1;
  }
  reset() {
    this.rayFromWorld.setZero(), this.rayToWorld.setZero(), this.hitNormalWorld.setZero(), this.hitPointWorld.setZero(), this.hasHit = !1, this.shape = null, this.body = null, this.hitFaceIndex = -1, this.distance = -1, this.shouldStop = !1;
  }
  abort() {
    this.shouldStop = !0;
  }
  set(e, t, n, i, s, o, r) {
    this.rayFromWorld.copy(e), this.rayToWorld.copy(t), this.hitNormalWorld.copy(n), this.hitPointWorld.copy(i), this.shape = s, this.body = o, this.distance = r;
  }
}
let Uo, Go, ko, Wo, Vo, Ho, qo;
const ir = {
  CLOSEST: 1,
  ANY: 2,
  ALL: 4
};
Uo = le.types.SPHERE;
Go = le.types.PLANE;
ko = le.types.BOX;
Wo = le.types.CYLINDER;
Vo = le.types.CONVEXPOLYHEDRON;
Ho = le.types.HEIGHTFIELD;
qo = le.types.TRIMESH;
class $e {
  get [Uo]() {
    return this._intersectSphere;
  }
  get [Go]() {
    return this._intersectPlane;
  }
  get [ko]() {
    return this._intersectBox;
  }
  get [Wo]() {
    return this._intersectConvex;
  }
  get [Vo]() {
    return this._intersectConvex;
  }
  get [Ho]() {
    return this._intersectHeightfield;
  }
  get [qo]() {
    return this._intersectTrimesh;
  }
  constructor(e, t) {
    e === void 0 && (e = new w()), t === void 0 && (t = new w()), this.from = e.clone(), this.to = t.clone(), this.direction = new w(), this.precision = 1e-4, this.checkCollisionResponse = !0, this.skipBackfaces = !1, this.collisionFilterMask = -1, this.collisionFilterGroup = -1, this.mode = $e.ANY, this.result = new Ki(), this.hasHit = !1, this.callback = (n) => {
    };
  }
  intersectWorld(e, t) {
    return this.mode = t.mode || $e.ANY, this.result = t.result || new Ki(), this.skipBackfaces = !!t.skipBackfaces, this.collisionFilterMask = typeof t.collisionFilterMask < "u" ? t.collisionFilterMask : -1, this.collisionFilterGroup = typeof t.collisionFilterGroup < "u" ? t.collisionFilterGroup : -1, this.checkCollisionResponse = typeof t.checkCollisionResponse < "u" ? t.checkCollisionResponse : !0, t.from && this.from.copy(t.from), t.to && this.to.copy(t.to), this.callback = t.callback || (() => {
    }), this.hasHit = !1, this.result.reset(), this.updateDirection(), this.getAABB(Jr), zs.length = 0, e.broadphase.aabbQuery(e, Jr, zs), this.intersectBodies(zs), this.hasHit;
  }
  intersectBody(e, t) {
    t && (this.result = t, this.updateDirection());
    const n = this.checkCollisionResponse;
    if (n && !e.collisionResponse || (this.collisionFilterGroup & e.collisionFilterMask) === 0 || (e.collisionFilterGroup & this.collisionFilterMask) === 0)
      return;
    const i = Id, s = zd;
    for (let o = 0, r = e.shapes.length; o < r; o++) {
      const a = e.shapes[o];
      if (!(n && !a.collisionResponse) && (e.quaternion.mult(e.shapeOrientations[o], s), e.quaternion.vmult(e.shapeOffsets[o], i), i.vadd(e.position, i), this.intersectShape(a, s, i, e), this.result.shouldStop))
        break;
    }
  }
  intersectBodies(e, t) {
    t && (this.result = t, this.updateDirection());
    for (let n = 0, i = e.length; !this.result.shouldStop && n < i; n++)
      this.intersectBody(e[n]);
  }
  updateDirection() {
    this.to.vsub(this.from, this.direction), this.direction.normalize();
  }
  intersectShape(e, t, n, i) {
    const s = this.from;
    if ($d(s, this.direction, n) > e.boundingSphereRadius)
      return;
    const r = this[e.type];
    r && r.call(this, e, t, n, i, e);
  }
  _intersectBox(e, t, n, i, s) {
    return this._intersectConvex(e.convexPolyhedronRepresentation, t, n, i, s);
  }
  _intersectPlane(e, t, n, i, s) {
    const o = this.from, r = this.to, a = this.direction, l = new w(0, 0, 1);
    t.vmult(l, l);
    const u = new w();
    o.vsub(n, u);
    const d = u.dot(l);
    r.vsub(n, u);
    const c = u.dot(l);
    if (d * c > 0 || o.distanceTo(r) < d)
      return;
    const m = l.dot(a);
    if (Math.abs(m) < this.precision)
      return;
    const g = new w(), p = new w(), f = new w();
    o.vsub(n, g);
    const v = -l.dot(g) / m;
    a.scale(v, p), o.vadd(p, f), this.reportIntersection(l, f, s, i, -1);
  }
  getAABB(e) {
    const {
      lowerBound: t,
      upperBound: n
    } = e, i = this.to, s = this.from;
    t.x = Math.min(i.x, s.x), t.y = Math.min(i.y, s.y), t.z = Math.min(i.z, s.z), n.x = Math.max(i.x, s.x), n.y = Math.max(i.y, s.y), n.z = Math.max(i.z, s.z);
  }
  _intersectHeightfield(e, t, n, i, s) {
    e.data, e.elementSize;
    const o = Bd;
    o.from.copy(this.from), o.to.copy(this.to), Pe.pointToLocalFrame(n, t, o.from, o.from), Pe.pointToLocalFrame(n, t, o.to, o.to), o.updateDirection();
    const r = Nd;
    let a, l, u, d;
    a = l = 0, u = d = e.data.length - 1;
    const c = new xt();
    o.getAABB(c), e.getIndexOfPosition(c.lowerBound.x, c.lowerBound.y, r, !0), a = Math.max(a, r[0]), l = Math.max(l, r[1]), e.getIndexOfPosition(c.upperBound.x, c.upperBound.y, r, !0), u = Math.min(u, r[0] + 1), d = Math.min(d, r[1] + 1);
    for (let m = a; m < u; m++)
      for (let g = l; g < d; g++) {
        if (this.result.shouldStop)
          return;
        if (e.getAabbAtIndex(m, g, c), !!c.overlapsRay(o)) {
          if (e.getConvexTrianglePillar(m, g, !1), Pe.pointToWorldFrame(n, t, e.pillarOffset, ki), this._intersectConvex(e.pillarConvex, t, ki, i, s, Qr), this.result.shouldStop)
            return;
          e.getConvexTrianglePillar(m, g, !0), Pe.pointToWorldFrame(n, t, e.pillarOffset, ki), this._intersectConvex(e.pillarConvex, t, ki, i, s, Qr);
        }
      }
  }
  _intersectSphere(e, t, n, i, s) {
    const o = this.from, r = this.to, a = e.radius, l = (r.x - o.x) ** 2 + (r.y - o.y) ** 2 + (r.z - o.z) ** 2, u = 2 * ((r.x - o.x) * (o.x - n.x) + (r.y - o.y) * (o.y - n.y) + (r.z - o.z) * (o.z - n.z)), d = (o.x - n.x) ** 2 + (o.y - n.y) ** 2 + (o.z - n.z) ** 2 - a ** 2, c = u ** 2 - 4 * l * d, m = Od, g = Ud;
    if (!(c < 0))
      if (c === 0)
        o.lerp(r, c, m), m.vsub(n, g), g.normalize(), this.reportIntersection(g, m, s, i, -1);
      else {
        const p = (-u - Math.sqrt(c)) / (2 * l), f = (-u + Math.sqrt(c)) / (2 * l);
        if (p >= 0 && p <= 1 && (o.lerp(r, p, m), m.vsub(n, g), g.normalize(), this.reportIntersection(g, m, s, i, -1)), this.result.shouldStop)
          return;
        f >= 0 && f <= 1 && (o.lerp(r, f, m), m.vsub(n, g), g.normalize(), this.reportIntersection(g, m, s, i, -1));
      }
  }
  _intersectConvex(e, t, n, i, s, o) {
    const r = Gd, a = eo, l = o && o.faceList || null, u = e.faces, d = e.vertices, c = e.faceNormals, m = this.direction, g = this.from, p = this.to, f = g.distanceTo(p), v = l ? l.length : u.length, _ = this.result;
    for (let b = 0; !_.shouldStop && b < v; b++) {
      const x = l ? l[b] : b, M = u[x], S = c[x], C = t, y = n;
      a.copy(d[M[0]]), C.vmult(a, a), a.vadd(y, a), a.vsub(g, a), C.vmult(S, r);
      const A = m.dot(r);
      if (Math.abs(A) < this.precision)
        continue;
      const P = r.dot(a) / A;
      if (!(P < 0)) {
        m.scale(P, ut), ut.vadd(g, ut), Rt.copy(d[M[0]]), C.vmult(Rt, Rt), y.vadd(Rt, Rt);
        for (let z = 1; !_.shouldStop && z < M.length - 1; z++) {
          Nt.copy(d[M[z]]), Ot.copy(d[M[z + 1]]), C.vmult(Nt, Nt), C.vmult(Ot, Ot), y.vadd(Nt, Nt), y.vadd(Ot, Ot);
          const H = ut.distanceTo(g);
          !($e.pointInTriangle(ut, Rt, Nt, Ot) || $e.pointInTriangle(ut, Nt, Rt, Ot)) || H > f || this.reportIntersection(r, ut, s, i, x);
        }
      }
    }
  }
  _intersectTrimesh(e, t, n, i, s, o) {
    const r = kd, a = jd, l = Yd, u = eo, d = Wd, c = Vd, m = Hd, g = Xd, p = qd, f = e.indices;
    e.vertices;
    const v = this.from, _ = this.to, b = this.direction;
    l.position.copy(n), l.quaternion.copy(t), Pe.vectorToLocalFrame(n, t, b, d), Pe.pointToLocalFrame(n, t, v, c), Pe.pointToLocalFrame(n, t, _, m), m.x *= e.scale.x, m.y *= e.scale.y, m.z *= e.scale.z, c.x *= e.scale.x, c.y *= e.scale.y, c.z *= e.scale.z, m.vsub(c, d), d.normalize();
    const x = c.distanceSquared(m);
    e.tree.rayQuery(this, l, a);
    for (let M = 0, S = a.length; !this.result.shouldStop && M !== S; M++) {
      const C = a[M];
      e.getNormal(C, r), e.getVertex(f[C * 3], Rt), Rt.vsub(c, u);
      const y = d.dot(r), A = r.dot(u) / y;
      if (A < 0)
        continue;
      d.scale(A, ut), ut.vadd(c, ut), e.getVertex(f[C * 3 + 1], Nt), e.getVertex(f[C * 3 + 2], Ot);
      const P = ut.distanceSquared(c);
      !($e.pointInTriangle(ut, Nt, Rt, Ot) || $e.pointInTriangle(ut, Rt, Nt, Ot)) || P > x || (Pe.vectorToWorldFrame(t, r, p), Pe.pointToWorldFrame(n, t, ut, g), this.reportIntersection(p, g, s, i, C));
    }
    a.length = 0;
  }
  reportIntersection(e, t, n, i, s) {
    const o = this.from, r = this.to, a = o.distanceTo(t), l = this.result;
    if (!(this.skipBackfaces && e.dot(this.direction) > 0))
      switch (l.hitFaceIndex = typeof s < "u" ? s : -1, this.mode) {
        case $e.ALL:
          this.hasHit = !0, l.set(o, r, e, t, n, i, a), l.hasHit = !0, this.callback(l);
          break;
        case $e.CLOSEST:
          (a < l.distance || !l.hasHit) && (this.hasHit = !0, l.hasHit = !0, l.set(o, r, e, t, n, i, a));
          break;
        case $e.ANY:
          this.hasHit = !0, l.hasHit = !0, l.set(o, r, e, t, n, i, a), l.shouldStop = !0;
          break;
      }
  }
  static pointInTriangle(e, t, n, i) {
    i.vsub(t, yn), n.vsub(t, ai), e.vsub(t, Bs);
    const s = yn.dot(yn), o = yn.dot(ai), r = yn.dot(Bs), a = ai.dot(ai), l = ai.dot(Bs);
    let u, d;
    return (u = a * r - o * l) >= 0 && (d = s * l - o * r) >= 0 && u + d < s * a - o * o;
  }
}
$e.CLOSEST = ir.CLOSEST;
$e.ANY = ir.ANY;
$e.ALL = ir.ALL;
const Jr = new xt(), zs = [], ai = new w(), Bs = new w(), Id = new w(), zd = new Ze(), ut = new w(), Rt = new w(), Nt = new w(), Ot = new w();
new w();
new Ki();
const Qr = {
  faceList: [0]
}, ki = new w(), Bd = new $e(), Nd = [], Od = new w(), Ud = new w(), Gd = new w();
new w();
new w();
const eo = new w(), kd = new w(), Wd = new w(), Vd = new w(), Hd = new w(), qd = new w(), Xd = new w();
new xt();
const jd = [], Yd = new Pe(), yn = new w(), Wi = new w();
function $d(h, e, t) {
  t.vsub(h, yn);
  const n = yn.dot(e);
  return e.scale(n, Wi), Wi.vadd(h, Wi), t.distanceTo(Wi);
}
class Zd {
  static defaults(e, t) {
    e === void 0 && (e = {});
    for (let n in t)
      n in e || (e[n] = t[n]);
    return e;
  }
}
class to {
  constructor() {
    this.spatial = new w(), this.rotational = new w();
  }
  multiplyElement(e) {
    return e.spatial.dot(this.spatial) + e.rotational.dot(this.rotational);
  }
  multiplyVectors(e, t) {
    return e.dot(this.spatial) + t.dot(this.rotational);
  }
}
class _i {
  constructor(e, t, n, i) {
    n === void 0 && (n = -1e6), i === void 0 && (i = 1e6), this.id = _i.idCounter++, this.minForce = n, this.maxForce = i, this.bi = e, this.bj = t, this.a = 0, this.b = 0, this.eps = 0, this.jacobianElementA = new to(), this.jacobianElementB = new to(), this.enabled = !0, this.multiplier = 0, this.setSpookParams(1e7, 4, 1 / 60);
  }
  setSpookParams(e, t, n) {
    const i = t, s = e, o = n;
    this.a = 4 / (o * (1 + 4 * i)), this.b = 4 * i / (1 + 4 * i), this.eps = 4 / (o * o * s * (1 + 4 * i));
  }
  computeB(e, t, n) {
    const i = this.computeGW(), s = this.computeGq(), o = this.computeGiMf();
    return -s * e - i * t - o * n;
  }
  computeGq() {
    const e = this.jacobianElementA, t = this.jacobianElementB, n = this.bi, i = this.bj, s = n.position, o = i.position;
    return e.spatial.dot(s) + t.spatial.dot(o);
  }
  computeGW() {
    const e = this.jacobianElementA, t = this.jacobianElementB, n = this.bi, i = this.bj, s = n.velocity, o = i.velocity, r = n.angularVelocity, a = i.angularVelocity;
    return e.multiplyVectors(s, r) + t.multiplyVectors(o, a);
  }
  computeGWlambda() {
    const e = this.jacobianElementA, t = this.jacobianElementB, n = this.bi, i = this.bj, s = n.vlambda, o = i.vlambda, r = n.wlambda, a = i.wlambda;
    return e.multiplyVectors(s, r) + t.multiplyVectors(o, a);
  }
  computeGiMf() {
    const e = this.jacobianElementA, t = this.jacobianElementB, n = this.bi, i = this.bj, s = n.force, o = n.torque, r = i.force, a = i.torque, l = n.invMassSolve, u = i.invMassSolve;
    return s.scale(l, no), r.scale(u, io), n.invInertiaWorldSolve.vmult(o, so), i.invInertiaWorldSolve.vmult(a, ro), e.multiplyVectors(no, so) + t.multiplyVectors(io, ro);
  }
  computeGiMGt() {
    const e = this.jacobianElementA, t = this.jacobianElementB, n = this.bi, i = this.bj, s = n.invMassSolve, o = i.invMassSolve, r = n.invInertiaWorldSolve, a = i.invInertiaWorldSolve;
    let l = s + o;
    return r.vmult(e.rotational, Vi), l += Vi.dot(e.rotational), a.vmult(t.rotational, Vi), l += Vi.dot(t.rotational), l;
  }
  addToWlambda(e) {
    const t = this.jacobianElementA, n = this.jacobianElementB, i = this.bi, s = this.bj, o = Kd;
    i.vlambda.addScaledVector(i.invMassSolve * e, t.spatial, i.vlambda), s.vlambda.addScaledVector(s.invMassSolve * e, n.spatial, s.vlambda), i.invInertiaWorldSolve.vmult(t.rotational, o), i.wlambda.addScaledVector(e, o, i.wlambda), s.invInertiaWorldSolve.vmult(n.rotational, o), s.wlambda.addScaledVector(e, o, s.wlambda);
  }
  computeC() {
    return this.computeGiMGt() + this.eps;
  }
}
_i.idCounter = 0;
const no = new w(), io = new w(), so = new w(), ro = new w(), Vi = new w(), Kd = new w();
class Jd extends _i {
  constructor(e, t, n) {
    n === void 0 && (n = 1e6), super(e, t, 0, n), this.restitution = 0, this.ri = new w(), this.rj = new w(), this.ni = new w();
  }
  computeB(e) {
    const t = this.a, n = this.b, i = this.bi, s = this.bj, o = this.ri, r = this.rj, a = Qd, l = ef, u = i.velocity, d = i.angularVelocity;
    i.force, i.torque;
    const c = s.velocity, m = s.angularVelocity;
    s.force, s.torque;
    const g = tf, p = this.jacobianElementA, f = this.jacobianElementB, v = this.ni;
    o.cross(v, a), r.cross(v, l), v.negate(p.spatial), a.negate(p.rotational), f.spatial.copy(v), f.rotational.copy(l), g.copy(s.position), g.vadd(r, g), g.vsub(i.position, g), g.vsub(o, g);
    const _ = v.dot(g), b = this.restitution + 1, x = b * c.dot(v) - b * u.dot(v) + m.dot(l) - d.dot(a), M = this.computeGiMf();
    return -_ * t - x * n - e * M;
  }
  getImpactVelocityAlongNormal() {
    const e = nf, t = sf, n = rf, i = of, s = af;
    return this.bi.position.vadd(this.ri, n), this.bj.position.vadd(this.rj, i), this.bi.getVelocityAtWorldPoint(n, e), this.bj.getVelocityAtWorldPoint(i, t), e.vsub(t, s), this.ni.dot(s);
  }
}
const Qd = new w(), ef = new w(), tf = new w(), nf = new w(), sf = new w(), rf = new w(), of = new w(), af = new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
class oo extends _i {
  constructor(e, t, n) {
    super(e, t, -n, n), this.ri = new w(), this.rj = new w(), this.t = new w();
  }
  computeB(e) {
    this.a;
    const t = this.b;
    this.bi, this.bj;
    const n = this.ri, i = this.rj, s = lf, o = cf, r = this.t;
    n.cross(r, s), i.cross(r, o);
    const a = this.jacobianElementA, l = this.jacobianElementB;
    r.negate(a.spatial), s.negate(a.rotational), l.spatial.copy(r), l.rotational.copy(o);
    const u = this.computeGW(), d = this.computeGiMf();
    return -u * t - e * d;
  }
}
const lf = new w(), cf = new w();
class Sn {
  constructor(e, t, n) {
    n = Zd.defaults(n, {
      friction: 0.3,
      restitution: 0.3,
      contactEquationStiffness: 1e7,
      contactEquationRelaxation: 3,
      frictionEquationStiffness: 1e7,
      frictionEquationRelaxation: 3
    }), this.id = Sn.idCounter++, this.materials = [e, t], this.friction = n.friction, this.restitution = n.restitution, this.contactEquationStiffness = n.contactEquationStiffness, this.contactEquationRelaxation = n.contactEquationRelaxation, this.frictionEquationStiffness = n.frictionEquationStiffness, this.frictionEquationRelaxation = n.frictionEquationRelaxation;
  }
}
Sn.idCounter = 0;
class En {
  constructor(e) {
    e === void 0 && (e = {});
    let t = "";
    typeof e == "string" && (t = e, e = {}), this.name = t, this.id = En.idCounter++, this.friction = typeof e.friction < "u" ? e.friction : -1, this.restitution = typeof e.restitution < "u" ? e.restitution : -1;
  }
}
En.idCounter = 0;
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new $e();
new w();
new w();
new w();
new w(1, 0, 0), new w(0, 1, 0), new w(0, 0, 1);
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
class hf extends Mn {
  constructor(e, t, n, i) {
    if (e === void 0 && (e = 1), t === void 0 && (t = 1), n === void 0 && (n = 1), i === void 0 && (i = 8), e < 0)
      throw new Error("The cylinder radiusTop cannot be negative.");
    if (t < 0)
      throw new Error("The cylinder radiusBottom cannot be negative.");
    const s = i, o = [], r = [], a = [], l = [], u = [], d = Math.cos, c = Math.sin;
    o.push(new w(-t * c(0), -n * 0.5, t * d(0))), l.push(0), o.push(new w(-e * c(0), n * 0.5, e * d(0))), u.push(1);
    for (let g = 0; g < s; g++) {
      const p = 2 * Math.PI / s * (g + 1), f = 2 * Math.PI / s * (g + 0.5);
      g < s - 1 ? (o.push(new w(-t * c(p), -n * 0.5, t * d(p))), l.push(2 * g + 2), o.push(new w(-e * c(p), n * 0.5, e * d(p))), u.push(2 * g + 3), a.push([2 * g, 2 * g + 1, 2 * g + 3, 2 * g + 2])) : a.push([2 * g, 2 * g + 1, 1, 0]), (s % 2 === 1 || g < s / 2) && r.push(new w(-c(f), 0, d(f)));
    }
    a.push(l), r.push(new w(0, 1, 0));
    const m = [];
    for (let g = 0; g < u.length; g++)
      m.push(u[u.length - g - 1]);
    a.push(m), super({
      vertices: o,
      faces: a,
      axes: r
    }), this.type = le.types.CYLINDER, this.radiusTop = e, this.radiusBottom = t, this.height = n, this.numSegments = i;
  }
}
class li extends le {
  constructor() {
    super({
      type: le.types.PLANE
    }), this.worldNormal = new w(), this.worldNormalNeedsUpdate = !0, this.boundingSphereRadius = Number.MAX_VALUE;
  }
  computeWorldNormal(e) {
    const t = this.worldNormal;
    t.set(0, 0, 1), e.vmult(t, t), this.worldNormalNeedsUpdate = !1;
  }
  calculateLocalInertia(e, t) {
    return t === void 0 && (t = new w()), t;
  }
  volume() {
    return Number.MAX_VALUE;
  }
  calculateWorldAABB(e, t, n, i) {
    jt.set(0, 0, 1), t.vmult(jt, jt);
    const s = Number.MAX_VALUE;
    n.set(-s, -s, -s), i.set(s, s, s), jt.x === 1 ? i.x = e.x : jt.x === -1 && (n.x = e.x), jt.y === 1 ? i.y = e.y : jt.y === -1 && (n.y = e.y), jt.z === 1 ? i.z = e.z : jt.z === -1 && (n.z = e.z);
  }
  updateBoundingSphereRadius() {
    this.boundingSphereRadius = Number.MAX_VALUE;
  }
}
const jt = new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new xt();
new w();
new xt();
new w();
new w();
new w();
new w();
new w();
new w();
new w();
new xt();
new w();
new Pe();
new xt();
class uf {
  constructor() {
    this.equations = [];
  }
  solve(e, t) {
    return 0;
  }
  addEquation(e) {
    e.enabled && !e.bi.isTrigger && !e.bj.isTrigger && this.equations.push(e);
  }
  removeEquation(e) {
    const t = this.equations, n = t.indexOf(e);
    n !== -1 && t.splice(n, 1);
  }
  removeAllEquations() {
    this.equations.length = 0;
  }
}
class df extends uf {
  constructor() {
    super(), this.iterations = 10, this.tolerance = 1e-7;
  }
  solve(e, t) {
    let n = 0;
    const i = this.iterations, s = this.tolerance * this.tolerance, o = this.equations, r = o.length, a = t.bodies, l = a.length, u = e;
    let d, c, m, g, p, f;
    if (r !== 0)
      for (let x = 0; x !== l; x++)
        a[x].updateSolveMassProperties();
    const v = pf, _ = mf, b = ff;
    v.length = r, _.length = r, b.length = r;
    for (let x = 0; x !== r; x++) {
      const M = o[x];
      b[x] = 0, _[x] = M.computeB(u), v[x] = 1 / M.computeC();
    }
    if (r !== 0) {
      for (let S = 0; S !== l; S++) {
        const C = a[S], y = C.vlambda, A = C.wlambda;
        y.set(0, 0, 0), A.set(0, 0, 0);
      }
      for (n = 0; n !== i; n++) {
        g = 0;
        for (let S = 0; S !== r; S++) {
          const C = o[S];
          d = _[S], c = v[S], f = b[S], p = C.computeGWlambda(), m = c * (d - p - C.eps * f), f + m < C.minForce ? m = C.minForce - f : f + m > C.maxForce && (m = C.maxForce - f), b[S] += m, g += m > 0 ? m : -m, C.addToWlambda(m);
        }
        if (g * g < s)
          break;
      }
      for (let S = 0; S !== l; S++) {
        const C = a[S], y = C.velocity, A = C.angularVelocity;
        C.vlambda.vmul(C.linearFactor, C.vlambda), y.vadd(C.vlambda, y), C.wlambda.vmul(C.angularFactor, C.wlambda), A.vadd(C.wlambda, A);
      }
      let x = o.length;
      const M = 1 / u;
      for (; x--; )
        o[x].multiplier = b[x] * M;
    }
    return n;
  }
}
const ff = [], pf = [], mf = [];
ie.STATIC;
class gf {
  constructor() {
    this.objects = [], this.type = Object;
  }
  release() {
    const e = arguments.length;
    for (let t = 0; t !== e; t++)
      this.objects.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
    return this;
  }
  get() {
    return this.objects.length === 0 ? this.constructObject() : this.objects.pop();
  }
  constructObject() {
    throw new Error("constructObject() not implemented in this Pool subclass yet!");
  }
  resize(e) {
    const t = this.objects;
    for (; t.length > e; )
      t.pop();
    for (; t.length < e; )
      t.push(this.constructObject());
    return this;
  }
}
class _f extends gf {
  constructor() {
    super(...arguments), this.type = w;
  }
  constructObject() {
    return new w();
  }
}
const Ue = {
  sphereSphere: le.types.SPHERE,
  spherePlane: le.types.SPHERE | le.types.PLANE,
  boxBox: le.types.BOX | le.types.BOX,
  sphereBox: le.types.SPHERE | le.types.BOX,
  planeBox: le.types.PLANE | le.types.BOX,
  convexConvex: le.types.CONVEXPOLYHEDRON,
  sphereConvex: le.types.SPHERE | le.types.CONVEXPOLYHEDRON,
  planeConvex: le.types.PLANE | le.types.CONVEXPOLYHEDRON,
  boxConvex: le.types.BOX | le.types.CONVEXPOLYHEDRON,
  sphereHeightfield: le.types.SPHERE | le.types.HEIGHTFIELD,
  boxHeightfield: le.types.BOX | le.types.HEIGHTFIELD,
  convexHeightfield: le.types.CONVEXPOLYHEDRON | le.types.HEIGHTFIELD,
  sphereParticle: le.types.PARTICLE | le.types.SPHERE,
  planeParticle: le.types.PLANE | le.types.PARTICLE,
  boxParticle: le.types.BOX | le.types.PARTICLE,
  convexParticle: le.types.PARTICLE | le.types.CONVEXPOLYHEDRON,
  cylinderCylinder: le.types.CYLINDER,
  sphereCylinder: le.types.SPHERE | le.types.CYLINDER,
  planeCylinder: le.types.PLANE | le.types.CYLINDER,
  boxCylinder: le.types.BOX | le.types.CYLINDER,
  convexCylinder: le.types.CONVEXPOLYHEDRON | le.types.CYLINDER,
  heightfieldCylinder: le.types.HEIGHTFIELD | le.types.CYLINDER,
  particleCylinder: le.types.PARTICLE | le.types.CYLINDER,
  sphereTrimesh: le.types.SPHERE | le.types.TRIMESH,
  planeTrimesh: le.types.PLANE | le.types.TRIMESH
};
class vf {
  get [Ue.sphereSphere]() {
    return this.sphereSphere;
  }
  get [Ue.spherePlane]() {
    return this.spherePlane;
  }
  get [Ue.boxBox]() {
    return this.boxBox;
  }
  get [Ue.sphereBox]() {
    return this.sphereBox;
  }
  get [Ue.planeBox]() {
    return this.planeBox;
  }
  get [Ue.convexConvex]() {
    return this.convexConvex;
  }
  get [Ue.sphereConvex]() {
    return this.sphereConvex;
  }
  get [Ue.planeConvex]() {
    return this.planeConvex;
  }
  get [Ue.boxConvex]() {
    return this.boxConvex;
  }
  get [Ue.sphereHeightfield]() {
    return this.sphereHeightfield;
  }
  get [Ue.boxHeightfield]() {
    return this.boxHeightfield;
  }
  get [Ue.convexHeightfield]() {
    return this.convexHeightfield;
  }
  get [Ue.sphereParticle]() {
    return this.sphereParticle;
  }
  get [Ue.planeParticle]() {
    return this.planeParticle;
  }
  get [Ue.boxParticle]() {
    return this.boxParticle;
  }
  get [Ue.convexParticle]() {
    return this.convexParticle;
  }
  get [Ue.cylinderCylinder]() {
    return this.convexConvex;
  }
  get [Ue.sphereCylinder]() {
    return this.sphereConvex;
  }
  get [Ue.planeCylinder]() {
    return this.planeConvex;
  }
  get [Ue.boxCylinder]() {
    return this.boxConvex;
  }
  get [Ue.convexCylinder]() {
    return this.convexConvex;
  }
  get [Ue.heightfieldCylinder]() {
    return this.heightfieldCylinder;
  }
  get [Ue.particleCylinder]() {
    return this.particleCylinder;
  }
  get [Ue.sphereTrimesh]() {
    return this.sphereTrimesh;
  }
  get [Ue.planeTrimesh]() {
    return this.planeTrimesh;
  }
  constructor(e) {
    this.contactPointPool = [], this.frictionEquationPool = [], this.result = [], this.frictionResult = [], this.v3pool = new _f(), this.world = e, this.currentContactMaterial = e.defaultContactMaterial, this.enableFrictionReduction = !1;
  }
  createContactEquation(e, t, n, i, s, o) {
    let r;
    this.contactPointPool.length ? (r = this.contactPointPool.pop(), r.bi = e, r.bj = t) : r = new Jd(e, t), r.enabled = e.collisionResponse && t.collisionResponse && n.collisionResponse && i.collisionResponse;
    const a = this.currentContactMaterial;
    r.restitution = a.restitution, r.setSpookParams(a.contactEquationStiffness, a.contactEquationRelaxation, this.world.dt);
    const l = n.material || e.material, u = i.material || t.material;
    return l && u && l.restitution >= 0 && u.restitution >= 0 && (r.restitution = l.restitution * u.restitution), r.si = s || n, r.sj = o || i, r;
  }
  createFrictionEquationsFromContact(e, t) {
    const n = e.bi, i = e.bj, s = e.si, o = e.sj, r = this.world, a = this.currentContactMaterial;
    let l = a.friction;
    const u = s.material || n.material, d = o.material || i.material;
    if (u && d && u.friction >= 0 && d.friction >= 0 && (l = u.friction * d.friction), l > 0) {
      const c = l * (r.frictionGravity || r.gravity).length();
      let m = n.invMass + i.invMass;
      m > 0 && (m = 1 / m);
      const g = this.frictionEquationPool, p = g.length ? g.pop() : new oo(n, i, c * m), f = g.length ? g.pop() : new oo(n, i, c * m);
      return p.bi = f.bi = n, p.bj = f.bj = i, p.minForce = f.minForce = -c * m, p.maxForce = f.maxForce = c * m, p.ri.copy(e.ri), p.rj.copy(e.rj), f.ri.copy(e.ri), f.rj.copy(e.rj), e.ni.tangents(p.t, f.t), p.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, r.dt), f.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, r.dt), p.enabled = f.enabled = e.enabled, t.push(p, f), !0;
    }
    return !1;
  }
  createFrictionFromAverage(e) {
    let t = this.result[this.result.length - 1];
    if (!this.createFrictionEquationsFromContact(t, this.frictionResult) || e === 1)
      return;
    const n = this.frictionResult[this.frictionResult.length - 2], i = this.frictionResult[this.frictionResult.length - 1];
    gn.setZero(), qn.setZero(), Xn.setZero();
    const s = t.bi;
    t.bj;
    for (let r = 0; r !== e; r++)
      t = this.result[this.result.length - 1 - r], t.bi !== s ? (gn.vadd(t.ni, gn), qn.vadd(t.ri, qn), Xn.vadd(t.rj, Xn)) : (gn.vsub(t.ni, gn), qn.vadd(t.rj, qn), Xn.vadd(t.ri, Xn));
    const o = 1 / e;
    qn.scale(o, n.ri), Xn.scale(o, n.rj), i.ri.copy(n.ri), i.rj.copy(n.rj), gn.normalize(), gn.tangents(n.t, i.t);
  }
  getContacts(e, t, n, i, s, o, r) {
    this.contactPointPool = s, this.frictionEquationPool = r, this.result = i, this.frictionResult = o;
    const a = wf, l = bf, u = xf, d = yf;
    for (let c = 0, m = e.length; c !== m; c++) {
      const g = e[c], p = t[c];
      let f = null;
      g.material && p.material && (f = n.getContactMaterial(g.material, p.material) || null);
      const v = g.type & ie.KINEMATIC && p.type & ie.STATIC || g.type & ie.STATIC && p.type & ie.KINEMATIC || g.type & ie.KINEMATIC && p.type & ie.KINEMATIC;
      for (let _ = 0; _ < g.shapes.length; _++) {
        g.quaternion.mult(g.shapeOrientations[_], a), g.quaternion.vmult(g.shapeOffsets[_], u), u.vadd(g.position, u);
        const b = g.shapes[_];
        for (let x = 0; x < p.shapes.length; x++) {
          p.quaternion.mult(p.shapeOrientations[x], l), p.quaternion.vmult(p.shapeOffsets[x], d), d.vadd(p.position, d);
          const M = p.shapes[x];
          if (!(b.collisionFilterMask & M.collisionFilterGroup && M.collisionFilterMask & b.collisionFilterGroup) || u.distanceTo(d) > b.boundingSphereRadius + M.boundingSphereRadius)
            continue;
          let S = null;
          b.material && M.material && (S = n.getContactMaterial(b.material, M.material) || null), this.currentContactMaterial = S || f || n.defaultContactMaterial;
          const C = b.type | M.type, y = this[C];
          if (y) {
            let A = !1;
            b.type < M.type ? A = y.call(this, b, M, u, d, a, l, g, p, b, M, v) : A = y.call(this, M, b, d, u, l, a, p, g, b, M, v), A && v && (n.shapeOverlapKeeper.set(b.id, M.id), n.bodyOverlapKeeper.set(g.id, p.id));
          }
        }
      }
    }
  }
  sphereSphere(e, t, n, i, s, o, r, a, l, u, d) {
    if (d)
      return n.distanceSquared(i) < (e.radius + t.radius) ** 2;
    const c = this.createContactEquation(r, a, e, t, l, u);
    i.vsub(n, c.ni), c.ni.normalize(), c.ri.copy(c.ni), c.rj.copy(c.ni), c.ri.scale(e.radius, c.ri), c.rj.scale(-t.radius, c.rj), c.ri.vadd(n, c.ri), c.ri.vsub(r.position, c.ri), c.rj.vadd(i, c.rj), c.rj.vsub(a.position, c.rj), this.result.push(c), this.createFrictionEquationsFromContact(c, this.frictionResult);
  }
  spherePlane(e, t, n, i, s, o, r, a, l, u, d) {
    const c = this.createContactEquation(r, a, e, t, l, u);
    if (c.ni.set(0, 0, 1), o.vmult(c.ni, c.ni), c.ni.negate(c.ni), c.ni.normalize(), c.ni.scale(e.radius, c.ri), n.vsub(i, Hi), c.ni.scale(c.ni.dot(Hi), ao), Hi.vsub(ao, c.rj), -Hi.dot(c.ni) <= e.radius) {
      if (d)
        return !0;
      const m = c.ri, g = c.rj;
      m.vadd(n, m), m.vsub(r.position, m), g.vadd(i, g), g.vsub(a.position, g), this.result.push(c), this.createFrictionEquationsFromContact(c, this.frictionResult);
    }
  }
  boxBox(e, t, n, i, s, o, r, a, l, u, d) {
    return e.convexPolyhedronRepresentation.material = e.material, t.convexPolyhedronRepresentation.material = t.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, this.convexConvex(e.convexPolyhedronRepresentation, t.convexPolyhedronRepresentation, n, i, s, o, r, a, e, t, d);
  }
  sphereBox(e, t, n, i, s, o, r, a, l, u, d) {
    const c = this.v3pool, m = Yf;
    n.vsub(i, qi), t.getSideNormals(m, o);
    const g = e.radius;
    let p = !1;
    const f = Zf, v = Kf, _ = Jf;
    let b = null, x = 0, M = 0, S = 0, C = null;
    for (let F = 0, q = m.length; F !== q && p === !1; F++) {
      const U = qf;
      U.copy(m[F]);
      const O = U.length();
      U.normalize();
      const k = qi.dot(U);
      if (k < O + g && k > 0) {
        const J = Xf, V = jf;
        J.copy(m[(F + 1) % 3]), V.copy(m[(F + 2) % 3]);
        const ee = J.length(), ce = V.length();
        J.normalize(), V.normalize();
        const ge = qi.dot(J), Z = qi.dot(V);
        if (ge < ee && ge > -ee && Z < ce && Z > -ce) {
          const De = Math.abs(k - O - g);
          if ((C === null || De < C) && (C = De, M = ge, S = Z, b = O, f.copy(U), v.copy(J), _.copy(V), x++, d))
            return !0;
        }
      }
    }
    if (x) {
      p = !0;
      const F = this.createContactEquation(r, a, e, t, l, u);
      f.scale(-g, F.ri), F.ni.copy(f), F.ni.negate(F.ni), f.scale(b, f), v.scale(M, v), f.vadd(v, f), _.scale(S, _), f.vadd(_, F.rj), F.ri.vadd(n, F.ri), F.ri.vsub(r.position, F.ri), F.rj.vadd(i, F.rj), F.rj.vsub(a.position, F.rj), this.result.push(F), this.createFrictionEquationsFromContact(F, this.frictionResult);
    }
    let y = c.get();
    const A = $f;
    for (let F = 0; F !== 2 && !p; F++)
      for (let q = 0; q !== 2 && !p; q++)
        for (let U = 0; U !== 2 && !p; U++)
          if (y.set(0, 0, 0), F ? y.vadd(m[0], y) : y.vsub(m[0], y), q ? y.vadd(m[1], y) : y.vsub(m[1], y), U ? y.vadd(m[2], y) : y.vsub(m[2], y), i.vadd(y, A), A.vsub(n, A), A.lengthSquared() < g * g) {
            if (d)
              return !0;
            p = !0;
            const O = this.createContactEquation(r, a, e, t, l, u);
            O.ri.copy(A), O.ri.normalize(), O.ni.copy(O.ri), O.ri.scale(g, O.ri), O.rj.copy(y), O.ri.vadd(n, O.ri), O.ri.vsub(r.position, O.ri), O.rj.vadd(i, O.rj), O.rj.vsub(a.position, O.rj), this.result.push(O), this.createFrictionEquationsFromContact(O, this.frictionResult);
          }
    c.release(y), y = null;
    const P = c.get(), z = c.get(), H = c.get(), D = c.get(), L = c.get(), I = m.length;
    for (let F = 0; F !== I && !p; F++)
      for (let q = 0; q !== I && !p; q++)
        if (F % 3 !== q % 3) {
          m[q].cross(m[F], P), P.normalize(), m[F].vadd(m[q], z), H.copy(n), H.vsub(z, H), H.vsub(i, H);
          const U = H.dot(P);
          P.scale(U, D);
          let O = 0;
          for (; O === F % 3 || O === q % 3; )
            O++;
          L.copy(n), L.vsub(D, L), L.vsub(z, L), L.vsub(i, L);
          const k = Math.abs(U), J = L.length();
          if (k < m[O].length() && J < g) {
            if (d)
              return !0;
            p = !0;
            const V = this.createContactEquation(r, a, e, t, l, u);
            z.vadd(D, V.rj), V.rj.copy(V.rj), L.negate(V.ni), V.ni.normalize(), V.ri.copy(V.rj), V.ri.vadd(i, V.ri), V.ri.vsub(n, V.ri), V.ri.normalize(), V.ri.scale(g, V.ri), V.ri.vadd(n, V.ri), V.ri.vsub(r.position, V.ri), V.rj.vadd(i, V.rj), V.rj.vsub(a.position, V.rj), this.result.push(V), this.createFrictionEquationsFromContact(V, this.frictionResult);
          }
        }
    c.release(P, z, H, D, L);
  }
  planeBox(e, t, n, i, s, o, r, a, l, u, d) {
    return t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, t.convexPolyhedronRepresentation.id = t.id, this.planeConvex(e, t.convexPolyhedronRepresentation, n, i, s, o, r, a, e, t, d);
  }
  convexConvex(e, t, n, i, s, o, r, a, l, u, d, c, m) {
    const g = fp;
    if (!(n.distanceTo(i) > e.boundingSphereRadius + t.boundingSphereRadius) && e.findSeparatingAxis(t, n, s, i, o, g, c, m)) {
      const p = [], f = pp;
      e.clipAgainstHull(n, s, t, i, o, g, -100, 100, p);
      let v = 0;
      for (let _ = 0; _ !== p.length; _++) {
        if (d)
          return !0;
        const b = this.createContactEquation(r, a, e, t, l, u), x = b.ri, M = b.rj;
        g.negate(b.ni), p[_].normal.negate(f), f.scale(p[_].depth, f), p[_].point.vadd(f, x), M.copy(p[_].point), x.vsub(n, x), M.vsub(i, M), x.vadd(n, x), x.vsub(r.position, x), M.vadd(i, M), M.vsub(a.position, M), this.result.push(b), v++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(b, this.frictionResult);
      }
      this.enableFrictionReduction && v && this.createFrictionFromAverage(v);
    }
  }
  sphereConvex(e, t, n, i, s, o, r, a, l, u, d) {
    const c = this.v3pool;
    n.vsub(i, Qf);
    const m = t.faceNormals, g = t.faces, p = t.vertices, f = e.radius;
    let v = !1;
    for (let _ = 0; _ !== p.length; _++) {
      const b = p[_], x = ip;
      o.vmult(b, x), i.vadd(x, x);
      const M = np;
      if (x.vsub(n, M), M.lengthSquared() < f * f) {
        if (d)
          return !0;
        v = !0;
        const S = this.createContactEquation(r, a, e, t, l, u);
        S.ri.copy(M), S.ri.normalize(), S.ni.copy(S.ri), S.ri.scale(f, S.ri), x.vsub(i, S.rj), S.ri.vadd(n, S.ri), S.ri.vsub(r.position, S.ri), S.rj.vadd(i, S.rj), S.rj.vsub(a.position, S.rj), this.result.push(S), this.createFrictionEquationsFromContact(S, this.frictionResult);
        return;
      }
    }
    for (let _ = 0, b = g.length; _ !== b && v === !1; _++) {
      const x = m[_], M = g[_], S = sp;
      o.vmult(x, S);
      const C = rp;
      o.vmult(p[M[0]], C), C.vadd(i, C);
      const y = op;
      S.scale(-f, y), n.vadd(y, y);
      const A = ap;
      y.vsub(C, A);
      const P = A.dot(S), z = lp;
      if (n.vsub(C, z), P < 0 && z.dot(S) > 0) {
        const H = [];
        for (let D = 0, L = M.length; D !== L; D++) {
          const I = c.get();
          o.vmult(p[M[D]], I), i.vadd(I, I), H.push(I);
        }
        if (Hf(H, S, n)) {
          if (d)
            return !0;
          v = !0;
          const D = this.createContactEquation(r, a, e, t, l, u);
          S.scale(-f, D.ri), S.negate(D.ni);
          const L = c.get();
          S.scale(-P, L);
          const I = c.get();
          S.scale(-f, I), n.vsub(i, D.rj), D.rj.vadd(I, D.rj), D.rj.vadd(L, D.rj), D.rj.vadd(i, D.rj), D.rj.vsub(a.position, D.rj), D.ri.vadd(n, D.ri), D.ri.vsub(r.position, D.ri), c.release(L), c.release(I), this.result.push(D), this.createFrictionEquationsFromContact(D, this.frictionResult);
          for (let F = 0, q = H.length; F !== q; F++)
            c.release(H[F]);
          return;
        } else
          for (let D = 0; D !== M.length; D++) {
            const L = c.get(), I = c.get();
            o.vmult(p[M[(D + 1) % M.length]], L), o.vmult(p[M[(D + 2) % M.length]], I), i.vadd(L, L), i.vadd(I, I);
            const F = ep;
            I.vsub(L, F);
            const q = tp;
            F.unit(q);
            const U = c.get(), O = c.get();
            n.vsub(L, O);
            const k = O.dot(q);
            q.scale(k, U), U.vadd(L, U);
            const J = c.get();
            if (U.vsub(n, J), k > 0 && k * k < F.lengthSquared() && J.lengthSquared() < f * f) {
              if (d)
                return !0;
              const V = this.createContactEquation(r, a, e, t, l, u);
              U.vsub(i, V.rj), U.vsub(n, V.ni), V.ni.normalize(), V.ni.scale(f, V.ri), V.rj.vadd(i, V.rj), V.rj.vsub(a.position, V.rj), V.ri.vadd(n, V.ri), V.ri.vsub(r.position, V.ri), this.result.push(V), this.createFrictionEquationsFromContact(V, this.frictionResult);
              for (let ee = 0, ce = H.length; ee !== ce; ee++)
                c.release(H[ee]);
              c.release(L), c.release(I), c.release(U), c.release(J), c.release(O);
              return;
            }
            c.release(L), c.release(I), c.release(U), c.release(J), c.release(O);
          }
        for (let D = 0, L = H.length; D !== L; D++)
          c.release(H[D]);
      }
    }
  }
  planeConvex(e, t, n, i, s, o, r, a, l, u, d) {
    const c = cp, m = hp;
    m.set(0, 0, 1), s.vmult(m, m);
    let g = 0;
    const p = up;
    for (let f = 0; f !== t.vertices.length; f++)
      if (c.copy(t.vertices[f]), o.vmult(c, c), i.vadd(c, c), c.vsub(n, p), m.dot(p) <= 0) {
        if (d)
          return !0;
        const _ = this.createContactEquation(r, a, e, t, l, u), b = dp;
        m.scale(m.dot(p), b), c.vsub(b, b), b.vsub(n, _.ri), _.ni.copy(m), c.vsub(i, _.rj), _.ri.vadd(n, _.ri), _.ri.vsub(r.position, _.ri), _.rj.vadd(i, _.rj), _.rj.vsub(a.position, _.rj), this.result.push(_), g++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(_, this.frictionResult);
      }
    this.enableFrictionReduction && g && this.createFrictionFromAverage(g);
  }
  boxConvex(e, t, n, i, s, o, r, a, l, u, d) {
    return e.convexPolyhedronRepresentation.material = e.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, this.convexConvex(e.convexPolyhedronRepresentation, t, n, i, s, o, r, a, e, t, d);
  }
  sphereHeightfield(e, t, n, i, s, o, r, a, l, u, d) {
    const c = t.data, m = e.radius, g = t.elementSize, p = Tp, f = Ep;
    Pe.pointToLocalFrame(i, o, n, f);
    let v = Math.floor((f.x - m) / g) - 1, _ = Math.ceil((f.x + m) / g) + 1, b = Math.floor((f.y - m) / g) - 1, x = Math.ceil((f.y + m) / g) + 1;
    if (_ < 0 || x < 0 || v > c.length || b > c[0].length)
      return;
    v < 0 && (v = 0), _ < 0 && (_ = 0), b < 0 && (b = 0), x < 0 && (x = 0), v >= c.length && (v = c.length - 1), _ >= c.length && (_ = c.length - 1), x >= c[0].length && (x = c[0].length - 1), b >= c[0].length && (b = c[0].length - 1);
    const M = [];
    t.getRectMinMax(v, b, _, x, M);
    const S = M[0], C = M[1];
    if (f.z - m > C || f.z + m < S)
      return;
    const y = this.result;
    for (let A = v; A < _; A++)
      for (let P = b; P < x; P++) {
        const z = y.length;
        let H = !1;
        if (t.getConvexTrianglePillar(A, P, !1), Pe.pointToWorldFrame(i, o, t.pillarOffset, p), n.distanceTo(p) < t.pillarConvex.boundingSphereRadius + e.boundingSphereRadius && (H = this.sphereConvex(e, t.pillarConvex, n, p, s, o, r, a, e, t, d)), d && H || (t.getConvexTrianglePillar(A, P, !0), Pe.pointToWorldFrame(i, o, t.pillarOffset, p), n.distanceTo(p) < t.pillarConvex.boundingSphereRadius + e.boundingSphereRadius && (H = this.sphereConvex(e, t.pillarConvex, n, p, s, o, r, a, e, t, d)), d && H))
          return !0;
        if (y.length - z > 2)
          return;
      }
  }
  boxHeightfield(e, t, n, i, s, o, r, a, l, u, d) {
    return e.convexPolyhedronRepresentation.material = e.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, this.convexHeightfield(e.convexPolyhedronRepresentation, t, n, i, s, o, r, a, e, t, d);
  }
  convexHeightfield(e, t, n, i, s, o, r, a, l, u, d) {
    const c = t.data, m = t.elementSize, g = e.boundingSphereRadius, p = Mp, f = Sp, v = bp;
    Pe.pointToLocalFrame(i, o, n, v);
    let _ = Math.floor((v.x - g) / m) - 1, b = Math.ceil((v.x + g) / m) + 1, x = Math.floor((v.y - g) / m) - 1, M = Math.ceil((v.y + g) / m) + 1;
    if (b < 0 || M < 0 || _ > c.length || x > c[0].length)
      return;
    _ < 0 && (_ = 0), b < 0 && (b = 0), x < 0 && (x = 0), M < 0 && (M = 0), _ >= c.length && (_ = c.length - 1), b >= c.length && (b = c.length - 1), M >= c[0].length && (M = c[0].length - 1), x >= c[0].length && (x = c[0].length - 1);
    const S = [];
    t.getRectMinMax(_, x, b, M, S);
    const C = S[0], y = S[1];
    if (!(v.z - g > y || v.z + g < C))
      for (let A = _; A < b; A++)
        for (let P = x; P < M; P++) {
          let z = !1;
          if (t.getConvexTrianglePillar(A, P, !1), Pe.pointToWorldFrame(i, o, t.pillarOffset, p), n.distanceTo(p) < t.pillarConvex.boundingSphereRadius + e.boundingSphereRadius && (z = this.convexConvex(e, t.pillarConvex, n, p, s, o, r, a, null, null, d, f, null)), d && z || (t.getConvexTrianglePillar(A, P, !0), Pe.pointToWorldFrame(i, o, t.pillarOffset, p), n.distanceTo(p) < t.pillarConvex.boundingSphereRadius + e.boundingSphereRadius && (z = this.convexConvex(e, t.pillarConvex, n, p, s, o, r, a, null, null, d, f, null)), d && z))
            return !0;
        }
  }
  sphereParticle(e, t, n, i, s, o, r, a, l, u, d) {
    const c = vp;
    if (c.set(0, 0, 1), i.vsub(n, c), c.lengthSquared() <= e.radius * e.radius) {
      if (d)
        return !0;
      const g = this.createContactEquation(a, r, t, e, l, u);
      c.normalize(), g.rj.copy(c), g.rj.scale(e.radius, g.rj), g.ni.copy(c), g.ni.negate(g.ni), g.ri.set(0, 0, 0), this.result.push(g), this.createFrictionEquationsFromContact(g, this.frictionResult);
    }
  }
  planeParticle(e, t, n, i, s, o, r, a, l, u, d) {
    const c = mp;
    c.set(0, 0, 1), r.quaternion.vmult(c, c);
    const m = gp;
    if (i.vsub(r.position, m), c.dot(m) <= 0) {
      if (d)
        return !0;
      const p = this.createContactEquation(a, r, t, e, l, u);
      p.ni.copy(c), p.ni.negate(p.ni), p.ri.set(0, 0, 0);
      const f = _p;
      c.scale(c.dot(i), f), i.vsub(f, f), p.rj.copy(f), this.result.push(p), this.createFrictionEquationsFromContact(p, this.frictionResult);
    }
  }
  boxParticle(e, t, n, i, s, o, r, a, l, u, d) {
    return e.convexPolyhedronRepresentation.material = e.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, this.convexParticle(e.convexPolyhedronRepresentation, t, n, i, s, o, r, a, e, t, d);
  }
  convexParticle(e, t, n, i, s, o, r, a, l, u, d) {
    let c = -1;
    const m = yp, g = wp;
    let p = null;
    const f = xp;
    if (f.copy(i), f.vsub(n, f), s.conjugate(lo), lo.vmult(f, f), e.pointIsInside(f)) {
      e.worldVerticesNeedsUpdate && e.computeWorldVertices(n, s), e.worldFaceNormalsNeedsUpdate && e.computeWorldFaceNormals(s);
      for (let v = 0, _ = e.faces.length; v !== _; v++) {
        const b = [e.worldVertices[e.faces[v][0]]], x = e.worldFaceNormals[v];
        i.vsub(b[0], co);
        const M = -x.dot(co);
        if (p === null || Math.abs(M) < Math.abs(p)) {
          if (d)
            return !0;
          p = M, c = v, m.copy(x);
        }
      }
      if (c !== -1) {
        const v = this.createContactEquation(a, r, t, e, l, u);
        m.scale(p, g), g.vadd(i, g), g.vsub(n, g), v.rj.copy(g), m.negate(v.ni), v.ri.set(0, 0, 0);
        const _ = v.ri, b = v.rj;
        _.vadd(i, _), _.vsub(a.position, _), b.vadd(n, b), b.vsub(r.position, b), this.result.push(v), this.createFrictionEquationsFromContact(v, this.frictionResult);
      } else
        console.warn("Point found inside convex, but did not find penetrating face!");
    }
  }
  heightfieldCylinder(e, t, n, i, s, o, r, a, l, u, d) {
    return this.convexHeightfield(t, e, i, n, o, s, a, r, l, u, d);
  }
  particleCylinder(e, t, n, i, s, o, r, a, l, u, d) {
    return this.convexParticle(t, e, i, n, o, s, a, r, l, u, d);
  }
  sphereTrimesh(e, t, n, i, s, o, r, a, l, u, d) {
    const c = Rf, m = Ff, g = Df, p = Pf, f = If, v = zf, _ = Uf, b = Lf, x = Af, M = Gf;
    Pe.pointToLocalFrame(i, o, n, f);
    const S = e.radius;
    _.lowerBound.set(f.x - S, f.y - S, f.z - S), _.upperBound.set(f.x + S, f.y + S, f.z + S), t.getTrianglesInAABB(_, M);
    const C = Cf, y = e.radius * e.radius;
    for (let D = 0; D < M.length; D++)
      for (let L = 0; L < 3; L++)
        if (t.getVertex(t.indices[M[D] * 3 + L], C), C.vsub(f, x), x.lengthSquared() <= y) {
          if (b.copy(C), Pe.pointToWorldFrame(i, o, b, C), C.vsub(n, x), d)
            return !0;
          let I = this.createContactEquation(r, a, e, t, l, u);
          I.ni.copy(x), I.ni.normalize(), I.ri.copy(I.ni), I.ri.scale(e.radius, I.ri), I.ri.vadd(n, I.ri), I.ri.vsub(r.position, I.ri), I.rj.copy(C), I.rj.vsub(a.position, I.rj), this.result.push(I), this.createFrictionEquationsFromContact(I, this.frictionResult);
        }
    for (let D = 0; D < M.length; D++)
      for (let L = 0; L < 3; L++) {
        t.getVertex(t.indices[M[D] * 3 + L], c), t.getVertex(t.indices[M[D] * 3 + (L + 1) % 3], m), m.vsub(c, g), f.vsub(m, v);
        const I = v.dot(g);
        f.vsub(c, v);
        let F = v.dot(g);
        if (F > 0 && I < 0 && (f.vsub(c, v), p.copy(g), p.normalize(), F = v.dot(p), p.scale(F, v), v.vadd(c, v), v.distanceTo(f) < e.radius)) {
          if (d)
            return !0;
          const U = this.createContactEquation(r, a, e, t, l, u);
          v.vsub(f, U.ni), U.ni.normalize(), U.ni.scale(e.radius, U.ri), U.ri.vadd(n, U.ri), U.ri.vsub(r.position, U.ri), Pe.pointToWorldFrame(i, o, v, v), v.vsub(a.position, U.rj), Pe.vectorToWorldFrame(o, U.ni, U.ni), Pe.vectorToWorldFrame(o, U.ri, U.ri), this.result.push(U), this.createFrictionEquationsFromContact(U, this.frictionResult);
        }
      }
    const A = Bf, P = Nf, z = Of, H = Tf;
    for (let D = 0, L = M.length; D !== L; D++) {
      t.getTriangleVertices(M[D], A, P, z), t.getNormal(M[D], H), f.vsub(A, v);
      let I = v.dot(H);
      if (H.scale(I, v), f.vsub(v, v), I = v.distanceTo(f), $e.pointInTriangle(v, A, P, z) && I < e.radius) {
        if (d)
          return !0;
        let F = this.createContactEquation(r, a, e, t, l, u);
        v.vsub(f, F.ni), F.ni.normalize(), F.ni.scale(e.radius, F.ri), F.ri.vadd(n, F.ri), F.ri.vsub(r.position, F.ri), Pe.pointToWorldFrame(i, o, v, v), v.vsub(a.position, F.rj), Pe.vectorToWorldFrame(o, F.ni, F.ni), Pe.vectorToWorldFrame(o, F.ri, F.ri), this.result.push(F), this.createFrictionEquationsFromContact(F, this.frictionResult);
      }
    }
    M.length = 0;
  }
  planeTrimesh(e, t, n, i, s, o, r, a, l, u, d) {
    const c = new w(), m = Mf;
    m.set(0, 0, 1), s.vmult(m, m);
    for (let g = 0; g < t.vertices.length / 3; g++) {
      t.getVertex(g, c);
      const p = new w();
      p.copy(c), Pe.pointToWorldFrame(i, o, p, c);
      const f = Sf;
      if (c.vsub(n, f), m.dot(f) <= 0) {
        if (d)
          return !0;
        const _ = this.createContactEquation(r, a, e, t, l, u);
        _.ni.copy(m);
        const b = Ef;
        m.scale(f.dot(m), b), c.vsub(b, b), _.ri.copy(b), _.ri.vsub(r.position, _.ri), _.rj.copy(c), _.rj.vsub(a.position, _.rj), this.result.push(_), this.createFrictionEquationsFromContact(_, this.frictionResult);
      }
    }
  }
}
const gn = new w(), qn = new w(), Xn = new w(), xf = new w(), yf = new w(), wf = new Ze(), bf = new Ze(), Mf = new w(), Sf = new w(), Ef = new w(), Tf = new w(), Af = new w();
new w();
const Cf = new w(), Lf = new w(), Rf = new w(), Ff = new w(), Df = new w(), Pf = new w(), If = new w(), zf = new w(), Bf = new w(), Nf = new w(), Of = new w(), Uf = new xt(), Gf = [], Hi = new w(), ao = new w(), kf = new w(), Wf = new w(), Vf = new w();
function Hf(h, e, t) {
  let n = null;
  const i = h.length;
  for (let s = 0; s !== i; s++) {
    const o = h[s], r = kf;
    h[(s + 1) % i].vsub(o, r);
    const a = Wf;
    r.cross(e, a);
    const l = Vf;
    t.vsub(o, l);
    const u = a.dot(l);
    if (n === null || u > 0 && n === !0 || u <= 0 && n === !1) {
      n === null && (n = u > 0);
      continue;
    } else
      return !1;
  }
  return !0;
}
const qi = new w(), qf = new w(), Xf = new w(), jf = new w(), Yf = [new w(), new w(), new w(), new w(), new w(), new w()], $f = new w(), Zf = new w(), Kf = new w(), Jf = new w(), Qf = new w(), ep = new w(), tp = new w(), np = new w(), ip = new w(), sp = new w(), rp = new w(), op = new w(), ap = new w(), lp = new w();
new w();
new w();
const cp = new w(), hp = new w(), up = new w(), dp = new w(), fp = new w(), pp = new w(), mp = new w(), gp = new w(), _p = new w(), vp = new w(), lo = new Ze(), xp = new w();
new w();
const yp = new w(), co = new w(), wp = new w(), bp = new w(), Mp = new w(), Sp = [0], Ep = new w(), Tp = new w();
class ho {
  constructor() {
    this.current = [], this.previous = [];
  }
  getKey(e, t) {
    if (t < e) {
      const n = t;
      t = e, e = n;
    }
    return e << 16 | t;
  }
  set(e, t) {
    const n = this.getKey(e, t), i = this.current;
    let s = 0;
    for (; n > i[s]; )
      s++;
    if (n !== i[s]) {
      for (let o = i.length - 1; o >= s; o--)
        i[o + 1] = i[o];
      i[s] = n;
    }
  }
  tick() {
    const e = this.current;
    this.current = this.previous, this.previous = e, this.current.length = 0;
  }
  getDiff(e, t) {
    const n = this.current, i = this.previous, s = n.length, o = i.length;
    let r = 0;
    for (let a = 0; a < s; a++) {
      let l = !1;
      const u = n[a];
      for (; u > i[r]; )
        r++;
      l = u === i[r], l || uo(e, u);
    }
    r = 0;
    for (let a = 0; a < o; a++) {
      let l = !1;
      const u = i[a];
      for (; u > n[r]; )
        r++;
      l = n[r] === u, l || uo(t, u);
    }
  }
}
function uo(h, e) {
  h.push((e & 4294901760) >> 16, e & 65535);
}
const Ns = (h, e) => h < e ? `${h}-${e}` : `${e}-${h}`;
class Ap {
  constructor() {
    this.data = {
      keys: []
    };
  }
  get(e, t) {
    const n = Ns(e, t);
    return this.data[n];
  }
  set(e, t, n) {
    const i = Ns(e, t);
    this.get(e, t) || this.data.keys.push(i), this.data[i] = n;
  }
  delete(e, t) {
    const n = Ns(e, t), i = this.data.keys.indexOf(n);
    i !== -1 && this.data.keys.splice(i, 1), delete this.data[n];
  }
  reset() {
    const e = this.data, t = e.keys;
    for (; t.length > 0; ) {
      const n = t.pop();
      delete e[n];
    }
  }
}
class Cp extends No {
  constructor(e) {
    e === void 0 && (e = {}), super(), this.dt = -1, this.allowSleep = !!e.allowSleep, this.contacts = [], this.frictionEquations = [], this.quatNormalizeSkip = e.quatNormalizeSkip !== void 0 ? e.quatNormalizeSkip : 0, this.quatNormalizeFast = e.quatNormalizeFast !== void 0 ? e.quatNormalizeFast : !1, this.time = 0, this.stepnumber = 0, this.default_dt = 1 / 60, this.nextId = 0, this.gravity = new w(), e.gravity && this.gravity.copy(e.gravity), e.frictionGravity && (this.frictionGravity = new w(), this.frictionGravity.copy(e.frictionGravity)), this.broadphase = e.broadphase !== void 0 ? e.broadphase : new Oo(), this.bodies = [], this.hasActiveBodies = !1, this.solver = e.solver !== void 0 ? e.solver : new df(), this.constraints = [], this.narrowphase = new vf(this), this.collisionMatrix = new Zr(), this.collisionMatrixPrevious = new Zr(), this.bodyOverlapKeeper = new ho(), this.shapeOverlapKeeper = new ho(), this.contactmaterials = [], this.contactMaterialTable = new Ap(), this.defaultMaterial = new En("default"), this.defaultContactMaterial = new Sn(this.defaultMaterial, this.defaultMaterial, {
      friction: 0.3,
      restitution: 0
    }), this.doProfiling = !1, this.profile = {
      solve: 0,
      makeContactConstraints: 0,
      broadphase: 0,
      integrate: 0,
      narrowphase: 0
    }, this.accumulator = 0, this.subsystems = [], this.addBodyEvent = {
      type: "addBody",
      body: null
    }, this.removeBodyEvent = {
      type: "removeBody",
      body: null
    }, this.idToBodyMap = {}, this.broadphase.setWorld(this);
  }
  getContactMaterial(e, t) {
    return this.contactMaterialTable.get(e.id, t.id);
  }
  collisionMatrixTick() {
    const e = this.collisionMatrixPrevious;
    this.collisionMatrixPrevious = this.collisionMatrix, this.collisionMatrix = e, this.collisionMatrix.reset(), this.bodyOverlapKeeper.tick(), this.shapeOverlapKeeper.tick();
  }
  addConstraint(e) {
    this.constraints.push(e);
  }
  removeConstraint(e) {
    const t = this.constraints.indexOf(e);
    t !== -1 && this.constraints.splice(t, 1);
  }
  rayTest(e, t, n) {
    n instanceof Ki ? this.raycastClosest(e, t, {
      skipBackfaces: !0
    }, n) : this.raycastAll(e, t, {
      skipBackfaces: !0
    }, n);
  }
  raycastAll(e, t, n, i) {
    return n === void 0 && (n = {}), n.mode = $e.ALL, n.from = e, n.to = t, n.callback = i, Os.intersectWorld(this, n);
  }
  raycastAny(e, t, n, i) {
    return n === void 0 && (n = {}), n.mode = $e.ANY, n.from = e, n.to = t, n.result = i, Os.intersectWorld(this, n);
  }
  raycastClosest(e, t, n, i) {
    return n === void 0 && (n = {}), n.mode = $e.CLOSEST, n.from = e, n.to = t, n.result = i, Os.intersectWorld(this, n);
  }
  addBody(e) {
    this.bodies.includes(e) || (e.index = this.bodies.length, this.bodies.push(e), e.world = this, e.initPosition.copy(e.position), e.initVelocity.copy(e.velocity), e.timeLastSleepy = this.time, e instanceof ie && (e.initAngularVelocity.copy(e.angularVelocity), e.initQuaternion.copy(e.quaternion)), this.collisionMatrix.setNumObjects(this.bodies.length), this.addBodyEvent.body = e, this.idToBodyMap[e.id] = e, this.dispatchEvent(this.addBodyEvent));
  }
  removeBody(e) {
    e.world = null;
    const t = this.bodies.length - 1, n = this.bodies, i = n.indexOf(e);
    if (i !== -1) {
      n.splice(i, 1);
      for (let s = 0; s !== n.length; s++)
        n[s].index = s;
      this.collisionMatrix.setNumObjects(t), this.removeBodyEvent.body = e, delete this.idToBodyMap[e.id], this.dispatchEvent(this.removeBodyEvent);
    }
  }
  getBodyById(e) {
    return this.idToBodyMap[e];
  }
  getShapeById(e) {
    const t = this.bodies;
    for (let n = 0; n < t.length; n++) {
      const i = t[n].shapes;
      for (let s = 0; s < i.length; s++) {
        const o = i[s];
        if (o.id === e)
          return o;
      }
    }
    return null;
  }
  addContactMaterial(e) {
    this.contactmaterials.push(e), this.contactMaterialTable.set(e.materials[0].id, e.materials[1].id, e);
  }
  removeContactMaterial(e) {
    const t = this.contactmaterials.indexOf(e);
    t !== -1 && (this.contactmaterials.splice(t, 1), this.contactMaterialTable.delete(e.materials[0].id, e.materials[1].id));
  }
  fixedStep(e, t) {
    e === void 0 && (e = 1 / 60), t === void 0 && (t = 10);
    const n = Je.now() / 1e3;
    if (!this.lastCallTime)
      this.step(e, void 0, t);
    else {
      const i = n - this.lastCallTime;
      this.step(e, i, t);
    }
    this.lastCallTime = n;
  }
  step(e, t, n) {
    if (n === void 0 && (n = 10), t === void 0)
      this.internalStep(e), this.time += e;
    else {
      this.accumulator += t;
      const i = Je.now();
      let s = 0;
      for (; this.accumulator >= e && s < n && (this.internalStep(e), this.accumulator -= e, s++, !(Je.now() - i > e * 1e3)); )
        ;
      this.accumulator = this.accumulator % e;
      const o = this.accumulator / e;
      for (let r = 0; r !== this.bodies.length; r++) {
        const a = this.bodies[r];
        a.previousPosition.lerp(a.position, o, a.interpolatedPosition), a.previousQuaternion.slerp(a.quaternion, o, a.interpolatedQuaternion), a.previousQuaternion.normalize();
      }
      this.time += t;
    }
  }
  internalStep(e) {
    this.dt = e;
    const t = this.contacts, n = Pp, i = Ip, s = this.bodies.length, o = this.bodies, r = this.solver, a = this.gravity, l = this.doProfiling, u = this.profile, d = ie.DYNAMIC;
    let c = -1 / 0;
    const m = this.constraints, g = Dp;
    a.length();
    const p = a.x, f = a.y, v = a.z;
    let _ = 0;
    for (l && (c = Je.now()), _ = 0; _ !== s; _++) {
      const D = o[_];
      if (D.type === d) {
        const L = D.force, I = D.mass;
        L.x += I * p, L.y += I * f, L.z += I * v;
      }
    }
    for (let D = 0, L = this.subsystems.length; D !== L; D++)
      this.subsystems[D].update();
    l && (c = Je.now()), n.length = 0, i.length = 0, this.broadphase.collisionPairs(this, n, i), l && (u.broadphase = Je.now() - c);
    let b = m.length;
    for (_ = 0; _ !== b; _++) {
      const D = m[_];
      if (!D.collideConnected)
        for (let L = n.length - 1; L >= 0; L -= 1)
          (D.bodyA === n[L] && D.bodyB === i[L] || D.bodyB === n[L] && D.bodyA === i[L]) && (n.splice(L, 1), i.splice(L, 1));
    }
    this.collisionMatrixTick(), l && (c = Je.now());
    const x = Fp, M = t.length;
    for (_ = 0; _ !== M; _++)
      x.push(t[_]);
    t.length = 0;
    const S = this.frictionEquations.length;
    for (_ = 0; _ !== S; _++)
      g.push(this.frictionEquations[_]);
    for (this.frictionEquations.length = 0, this.narrowphase.getContacts(
      n,
      i,
      this,
      t,
      x,
      this.frictionEquations,
      g
    ), l && (u.narrowphase = Je.now() - c), l && (c = Je.now()), _ = 0; _ < this.frictionEquations.length; _++)
      r.addEquation(this.frictionEquations[_]);
    const C = t.length;
    for (let D = 0; D !== C; D++) {
      const L = t[D], I = L.bi, F = L.bj, q = L.si, U = L.sj;
      let O;
      if (I.material && F.material ? O = this.getContactMaterial(I.material, F.material) || this.defaultContactMaterial : O = this.defaultContactMaterial, O.friction, I.material && F.material && (I.material.friction >= 0 && F.material.friction >= 0 && I.material.friction * F.material.friction, I.material.restitution >= 0 && F.material.restitution >= 0 && (L.restitution = I.material.restitution * F.material.restitution)), r.addEquation(L), I.allowSleep && I.type === ie.DYNAMIC && I.sleepState === ie.SLEEPING && F.sleepState === ie.AWAKE && F.type !== ie.STATIC) {
        const k = F.velocity.lengthSquared() + F.angularVelocity.lengthSquared(), J = F.sleepSpeedLimit ** 2;
        k >= J * 2 && (I.wakeUpAfterNarrowphase = !0);
      }
      if (F.allowSleep && F.type === ie.DYNAMIC && F.sleepState === ie.SLEEPING && I.sleepState === ie.AWAKE && I.type !== ie.STATIC) {
        const k = I.velocity.lengthSquared() + I.angularVelocity.lengthSquared(), J = I.sleepSpeedLimit ** 2;
        k >= J * 2 && (F.wakeUpAfterNarrowphase = !0);
      }
      this.collisionMatrix.set(I, F, !0), this.collisionMatrixPrevious.get(I, F) || (ci.body = F, ci.contact = L, I.dispatchEvent(ci), ci.body = I, F.dispatchEvent(ci)), this.bodyOverlapKeeper.set(I.id, F.id), this.shapeOverlapKeeper.set(q.id, U.id);
    }
    for (this.emitContactEvents(), l && (u.makeContactConstraints = Je.now() - c, c = Je.now()), _ = 0; _ !== s; _++) {
      const D = o[_];
      D.wakeUpAfterNarrowphase && (D.wakeUp(), D.wakeUpAfterNarrowphase = !1);
    }
    for (b = m.length, _ = 0; _ !== b; _++) {
      const D = m[_];
      D.update();
      for (let L = 0, I = D.equations.length; L !== I; L++) {
        const F = D.equations[L];
        r.addEquation(F);
      }
    }
    r.solve(e, this), l && (u.solve = Je.now() - c), r.removeAllEquations();
    const y = Math.pow;
    for (_ = 0; _ !== s; _++) {
      const D = o[_];
      if (D.type & d) {
        const L = y(1 - D.linearDamping, e), I = D.velocity;
        I.scale(L, I);
        const F = D.angularVelocity;
        if (F) {
          const q = y(1 - D.angularDamping, e);
          F.scale(q, F);
        }
      }
    }
    this.dispatchEvent(Rp), l && (c = Je.now());
    const P = this.stepnumber % (this.quatNormalizeSkip + 1) === 0, z = this.quatNormalizeFast;
    for (_ = 0; _ !== s; _++)
      o[_].integrate(e, P, z);
    this.clearForces(), this.broadphase.dirty = !0, l && (u.integrate = Je.now() - c), this.stepnumber += 1, this.dispatchEvent(Lp);
    let H = !0;
    if (this.allowSleep)
      for (H = !1, _ = 0; _ !== s; _++) {
        const D = o[_];
        D.sleepTick(this.time), D.sleepState !== ie.SLEEPING && (H = !0);
      }
    this.hasActiveBodies = H;
  }
  emitContactEvents() {
    const e = this.hasAnyEventListener("beginContact"), t = this.hasAnyEventListener("endContact");
    if ((e || t) && this.bodyOverlapKeeper.getDiff(Yt, $t), e) {
      for (let s = 0, o = Yt.length; s < o; s += 2)
        hi.bodyA = this.getBodyById(Yt[s]), hi.bodyB = this.getBodyById(Yt[s + 1]), this.dispatchEvent(hi);
      hi.bodyA = hi.bodyB = null;
    }
    if (t) {
      for (let s = 0, o = $t.length; s < o; s += 2)
        ui.bodyA = this.getBodyById($t[s]), ui.bodyB = this.getBodyById($t[s + 1]), this.dispatchEvent(ui);
      ui.bodyA = ui.bodyB = null;
    }
    Yt.length = $t.length = 0;
    const n = this.hasAnyEventListener("beginShapeContact"), i = this.hasAnyEventListener("endShapeContact");
    if ((n || i) && this.shapeOverlapKeeper.getDiff(Yt, $t), n) {
      for (let s = 0, o = Yt.length; s < o; s += 2) {
        const r = this.getShapeById(Yt[s]), a = this.getShapeById(Yt[s + 1]);
        Zt.shapeA = r, Zt.shapeB = a, r && (Zt.bodyA = r.body), a && (Zt.bodyB = a.body), this.dispatchEvent(Zt);
      }
      Zt.bodyA = Zt.bodyB = Zt.shapeA = Zt.shapeB = null;
    }
    if (i) {
      for (let s = 0, o = $t.length; s < o; s += 2) {
        const r = this.getShapeById($t[s]), a = this.getShapeById($t[s + 1]);
        Kt.shapeA = r, Kt.shapeB = a, r && (Kt.bodyA = r.body), a && (Kt.bodyB = a.body), this.dispatchEvent(Kt);
      }
      Kt.bodyA = Kt.bodyB = Kt.shapeA = Kt.shapeB = null;
    }
  }
  clearForces() {
    const e = this.bodies, t = e.length;
    for (let n = 0; n !== t; n++) {
      const i = e[n];
      i.force, i.torque, i.force.set(0, 0, 0), i.torque.set(0, 0, 0);
    }
  }
}
new xt();
const Os = new $e(), Je = globalThis.performance || {};
if (!Je.now) {
  let h = Date.now();
  Je.timing && Je.timing.navigationStart && (h = Je.timing.navigationStart), Je.now = () => Date.now() - h;
}
new w();
const Lp = {
  type: "postStep"
}, Rp = {
  type: "preStep"
}, ci = {
  type: ie.COLLIDE_EVENT_NAME,
  body: null,
  contact: null
}, Fp = [], Dp = [], Pp = [], Ip = [], Yt = [], $t = [], hi = {
  type: "beginContact",
  bodyA: null,
  bodyB: null
}, ui = {
  type: "endContact",
  bodyA: null,
  bodyB: null
}, Zt = {
  type: "beginShapeContact",
  bodyA: null,
  bodyB: null,
  shapeA: null,
  shapeB: null
}, Kt = {
  type: "endShapeContact",
  bodyA: null,
  bodyB: null,
  shapeA: null,
  shapeB: null
};
class fo {
  constructor(e) {
    typeof e == "object" && (e = e.notation), this.set = [], this.setkeys = [], this.setid = 0, this.groups = [], this.totalDice = 0, this.op = "", this.constant = null, this.result = [], this.error = !1, this.boost = 1, this.notation = "", this.vectors = [], (!e || e == "0") && (this.error = !0), this.parseNotation(e);
  }
  parseNotation(e) {
    if (e) {
      let c = e.split("!").length - 1 || 0;
      c > 0 && (this.boost = Math.min(Math.max(c, 0), 3) * 4), e = e.split("!").join(""), e = e.split(" ").join("");
      let m = e.split("(").length - 1, g = e.split(")").length - 1;
      m != g && (this.error = !0);
    }
    const t = this.notation.length > 0 ? "+" : "";
    this.notation += t + e;
    let n = e.split("@"), i = n[0], s = new RegExp(/(\+|\-|\*|\/|\%|\^|){0,1}()(\d*)([a-z]+\d+|[a-z]+|)(?:\{([a-z]+)(.*?|)\}|)()/, "i"), o = new RegExp(/(\b)*(\-\d+|\d+)(\b)*/, "gi"), r, a = 0, l = 30, u = 0, d = 0;
    for (; !this.error && i.length > 0 && (r = s.exec(i)) !== null && a < l; ) {
      a++, i = i.substring(r[0].length);
      let c = r[1], m = r[2] && r[2].length > 0, g = r[3], p = r[4], f = r[5] || "", v = r[6] || "", _ = r[7] && r[7].length > 0, b = !0;
      m && (u += r[2].length), v = v.split(","), (!v || v.length < 1) && (v = ""), v.shift(), a == 1 && i.length == 0 && !p && c && g ? (p = "d20", this.op = c, this.constant = parseInt(g), g = 1) : a > 1 && i.length == 0 && !p && (this.op = c, this.constant = parseInt(g), b = !1), b && this.addSet(g, p, d, u, f, v, c), _ && (u -= r[7].length, d += r[7].length);
    }
    !this.error && n[1] && (r = n[1].match(o)) !== null && this.result.push(...r);
  }
  stringify(e = !0) {
    let t = "";
    if (this.set.length < 1)
      return t;
    for (let n = 0; n < this.set.length; n++) {
      let i = this.set[n];
      t += n > 0 && i.op ? i.op : "", t += i.num + i.type, i.func && (t += "{", t += i.func ? i.func : "", t += i.args ? "," + (Array.isArray(i.args) ? i.args.join(",") : i.args) : "", t += "}");
    }
    return t += this.constant ? this.op + "" + Math.abs(this.constant) : "", e && this.result && this.result.length > 0 && (t += "@" + this.result.join(",")), this.boost > 1 && (t += "!".repeat(this.boost / 4)), t;
  }
  addSet(e, t, n = 0, i = 0, s = "", o = "", r = "+") {
    e = Math.abs(parseInt(e || 1));
    let a = r + "" + t + n + i + s + o, l = this.setkeys[a] != null, u = {};
    l && (u = this.set[this.setkeys[a] - 1]), e > 0 && (u.num = l ? e + u.num : e, u.type = t, u.sid = this.setid, u.gid = n, u.glvl = i, s && (u.func = s), o && (u.args = o), r && (u.op = r), l ? this.set[this.setkeys[a] - 1] = u : this.setkeys[a] = this.set.push(u)), l || ++this.setid;
  }
  static mergeNotation(e, t) {
    return {
      ...e,
      constant: e.constant + t.constant,
      notation: e.notation + "+" + t.notation,
      set: [
        ...e.set,
        ...t.set
      ],
      totalDice: e.vectors.length + t.vectors.length,
      vectors: [
        ...e.vectors,
        ...t.vectors
      ]
    };
  }
}
const Us = {
  d2: {
    name: "d2",
    labels: ["1", "2"],
    values: [1, 2],
    inertia: 8,
    mass: 400,
    scale: 0.9,
    system: "dweird"
  },
  dc: {
    type: "d2",
    name: "Coin",
    labels: [
      "textures/silvercoin/tail.png",
      "textures/silvercoin/heads.png"
    ],
    setBumpMaps: [
      "textures/silvercoin/tail_bump.png",
      "textures/silvercoin/heads_bump.png"
    ],
    values: [0, 1],
    inertia: 8,
    mass: 400,
    scale: 0.9,
    colorset: "coin_silver"
  },
  d1: {
    name: "One-sided Dice",
    type: "d6",
    labels: ["1"],
    values: [1, 1],
    scale: 0.9,
    system: "dweird"
  },
  d3: {
    name: "Three-Sided Dice",
    type: "d6",
    labels: ["1", "2", "3"],
    values: [1, 3],
    scale: 0.9,
    system: "dweird"
  },
  df: {
    name: "Fudge Dice",
    type: "d6",
    labels: ["-", "0", "+"],
    values: [-1, 1],
    scale: 0.9,
    system: "dweird"
  },
  d4: {
    name: "Four-Sided Dice",
    labels: ["1", "2", "3", "4"],
    values: [1, 4],
    inertia: 5,
    scale: 1.2
  },
  d6: {
    name: "Six-Sided Dice (Numbers)",
    labels: ["1", "2", "3", "4", "5", "6"],
    values: [1, 6],
    scale: 0.9
  },
  dpip: {
    name: "Six-Sided Dice (Pips)",
    type: "d6",
    labels: [
      `   
 \u2B24 
   `,
      `\u2B24  
   
  \u2B24`,
      `\u2B24  
 \u2B24 
  \u2B24`,
      `\u2B24 \u2B24
   
\u2B24 \u2B24`,
      `\u2B24 \u2B24
 \u2B24 
\u2B24 \u2B24`,
      `\u2B24 \u2B24
\u2B24 \u2B24
\u2B24 \u2B24`
    ],
    values: [1, 6],
    scale: 0.9,
    font: "monospace"
  },
  dsex: {
    name: "Sex-Sided Emoji Dice",
    type: "d6",
    labels: ["\u{1F346}", "\u{1F351}", "\u{1F44C}", "\u{1F4A6}", "\u{1F64F}", "\u{1F4A5}"],
    values: [1, 6],
    scale: 0.9,
    display: "labels",
    system: "dweird"
  },
  dpoker: {
    name: "Poker Dice (9-Ace)",
    type: "d6",
    labels: ["A", "9", "10", "J", "Q", "K"],
    values: [1, 6],
    scale: 0.9,
    display: "labels",
    system: "dweird",
    font: "Times New Roman"
  },
  dspanpoker: {
    name: "Spanish Poker Dice (7-Ace)",
    type: "d8",
    labels: ["A", "7", "8", "9", "10", "J", "Q", "K"],
    values: [1, 8],
    display: "labels",
    system: "dweird",
    font: "Times New Roman"
  },
  disotope: {
    name: "Radioactive Twelve-Sided Dice",
    type: "d12",
    labels: ["", "", "", "", "", "", "", "", "", "", "", "\u2622\uFE0F"],
    values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    mass: 350,
    inertia: 8,
    scale: 0.9,
    system: "dweird"
  },
  dsuit: {
    name: "Four-Suited Dice",
    type: "d4",
    labels: ["\u2660\uFE0F", "\u2665\uFE0F", "\u2666\uFE0F", "\u2663\uFE0F"],
    values: [1, 4],
    inertia: 5,
    scale: 1.2,
    display: "labels",
    system: "dweird"
  },
  d8: {
    name: "Eight-Sided Dice",
    labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
    values: [1, 8]
  },
  d10: {
    name: "Ten-Sided Dice (Single Digit)",
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    values: [1, 10],
    mass: 350,
    inertia: 9,
    scale: 0.9
  },
  d100: {
    name: "Ten-Sided Dice (Tens Digit)",
    type: "d10",
    labels: ["10", "20", "30", "40", "50", "60", "70", "80", "90", "00"],
    values: [10, 100, 10],
    mass: 350,
    inertia: 9,
    scale: 0.9
  },
  d12: {
    name: "Twelve-Sided Dice",
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    values: [1, 12],
    mass: 350,
    inertia: 8,
    scale: 0.9
  },
  d20: {
    name: "Twenty-Sided Dice",
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
    values: [1, 20],
    mass: 400,
    inertia: 6
  },
  dabi: {
    name: "Star Wars RPG: Ability Dice",
    type: "d8",
    labels: ["s", "a", `s
a`, `s
s`, "a", "s", `a
a`, ""],
    values: [1, 8],
    font: "SWRPG-Symbol-Regular",
    color: "#00FF00",
    colorset: "swrpg_abi",
    display: "labels",
    system: "swrpg"
  },
  ddif: {
    name: "Star Wars RPG: Difficulty Dice",
    type: "d8",
    labels: ["t", "f", `f
t`, "t", "", `t
t`, `f
f`, "t"],
    values: [1, 8],
    font: "SWRPG-Symbol-Regular",
    color: "#8000FC",
    colorset: "swrpg_dif",
    display: "labels",
    system: "swrpg"
  },
  dpro: {
    name: "Star Wars RPG: Proficiency Dice",
    type: "d12",
    labels: [`a
a`, "a", `a
a`, "x", "s", `s
a`, "s", `s
a`, `s
s`, `s
a`, `s
s`, ""],
    values: [1, 12],
    mass: 350,
    inertia: 8,
    scale: 0.9,
    font: "SWRPG-Symbol-Regular",
    color: "#FFFF00",
    colorset: "swrpg_pro",
    display: "labels",
    system: "swrpg"
  },
  dcha: {
    name: "Star Wars RPG: Challenge Dice",
    type: "d12",
    labels: [`t
t`, "t", `t
t`, "t", `t
f`, "f", `t
f`, "f", `f
f`, "y", `f
f`, ""],
    values: [1, 12],
    mass: 350,
    inertia: 8,
    scale: 0.9,
    font: "SWRPG-Symbol-Regular",
    color: "#FF0000",
    colorset: "swrpg_cha",
    display: "labels",
    system: "swrpg"
  },
  dfor: {
    name: "Star Wars RPG: Force Dice",
    type: "d12",
    labels: ["z", `Z
Z`, "z", `Z
Z`, "z", `Z
Z`, "z", "Z", "z", "Z", "z", `z
z`],
    values: [1, 12],
    mass: 350,
    inertia: 8,
    scale: 0.9,
    font: "SWRPG-Symbol-Regular",
    color: "#FFFFFF",
    colorset: "swrpg_for",
    display: "labels",
    system: "swrpg"
  },
  dboo: {
    name: "Star Wars RPG: Boost Dice",
    type: "d6",
    labels: [`s  
  a`, `a  
  a`, "s", "a", "", ""],
    values: [1, 6],
    scale: 0.9,
    font: "SWRPG-Symbol-Regular",
    color: "#00FFFF",
    colorset: "swrpg_boo",
    display: "labels",
    system: "swrpg"
  },
  dset: {
    name: "Star Wars RPG: Setback Dice",
    type: "d6",
    labels: ["", "t", "f"],
    values: [1, 3],
    scale: 0.9,
    font: "SWRPG-Symbol-Regular",
    color: "#111111",
    colorset: "swrpg_set",
    display: "labels",
    system: "swrpg"
  },
  swar: {
    name: "Star Wars Armada: Red Attack Dice",
    type: "d8",
    labels: ["F", "F", `F
F`, "E", "E", "G", "", ""],
    values: [1, 8],
    font: "Armada-Symbol-Regular",
    color: "#FF0000",
    colorset: "swa_red",
    display: "labels",
    system: "swarmada"
  },
  swab: {
    name: "Star Wars Armada: Blue Attack Dice",
    type: "d8",
    labels: ["F", "F", "F", "F", "E", "E", "G", "G"],
    values: [1, 8],
    font: "Armada-Symbol-Regular",
    color: "#0000FF",
    colorset: "swa_blue",
    display: "labels",
    system: "swarmada"
  },
  swak: {
    name: "Star Wars Armada: Black Attack Dice",
    type: "d8",
    labels: ["F", "F", "F", "F", `F
E`, `F
E`, "", ""],
    values: [1, 8],
    font: "Armada-Symbol-Regular",
    color: "#111111",
    colorset: "swa_black",
    display: "labels",
    system: "swarmada"
  },
  xwatk: {
    name: "Star Wars X-Wing: Red Attack Dice",
    type: "d8",
    labels: ["c", "d", "d", "d", "f", "f", "", ""],
    values: [1, 8],
    font: "XWing-Symbol-Regular",
    color: "#FF0000",
    colorset: "xwing_red",
    display: "labels",
    system: "xwing"
  },
  xwdef: {
    name: "Star Wars X-Wing: Green Defense Dice",
    type: "d8",
    labels: ["e", "e", "e", "f", "f", "", "", ""],
    values: [1, 8],
    font: "XWing-Symbol-Regular",
    color: "#00FF00",
    colorset: "xwing_green",
    display: "labels",
    system: "xwing"
  },
  swlar: {
    name: "Star Wars Legion: Red Attack Dice",
    type: "d8",
    labels: ["h", "h", "h", "h", "h", "c", "o", ""],
    values: [1, 8],
    font: "Legion-Symbol-Regular",
    color: "#FF0000",
    colorset: "swl_atkred",
    display: "labels",
    system: "legion"
  },
  swlab: {
    name: "Star Wars Legion: Black Attack Dice",
    type: "d8",
    labels: ["h", "h", "h", "", "", "c", "o", ""],
    values: [1, 8],
    font: "Legion-Symbol-Regular",
    color: "#111111",
    colorset: "swl_atkblack",
    display: "labels",
    system: "legion"
  },
  swlaw: {
    name: "Star Wars Legion: White Attack Dice",
    type: "d8",
    labels: ["h", "", "", "", "", "c", "o", ""],
    values: [1, 8],
    font: "Legion-Symbol-Regular",
    color: "#FFFFFF",
    colorset: "swl_atkwhite",
    display: "labels",
    system: "legion"
  },
  swldr: {
    name: "Star Wars Legion: Red Defense Dice",
    type: "d6",
    labels: ["s", "s", "s", "d", "", ""],
    values: [1, 6],
    scale: 0.9,
    font: "Legion-Symbol-Regular",
    color: "#FF0000",
    colorset: "swl_defred",
    display: "labels",
    system: "legion"
  },
  swldw: {
    name: "Star Wars Legion: White Defense Dice",
    type: "d6",
    labels: ["s", "", "", "d", "", ""],
    values: [1, 6],
    scale: 0.9,
    font: "Legion-Symbol-Regular",
    color: "#FFFFFF",
    colorset: "swl_defwhite",
    display: "labels",
    system: "legion"
  }
}, Mt = {
  d4: {
    vertices: [[1, 1, 1], [-1, -1, 1], [-1, 1, -1], [1, -1, -1]],
    faces: [[1, 0, 2, 1], [0, 1, 3, 2], [0, 3, 2, 3], [1, 2, 3, 4]]
  },
  d6: {
    vertices: [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]],
    faces: [[0, 3, 2, 1, 1], [1, 2, 6, 5, 2], [0, 1, 5, 4, 3], [3, 7, 6, 2, 4], [0, 4, 7, 3, 5], [4, 5, 6, 7, 6]]
  },
  d8: {
    vertices: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]],
    faces: [[0, 2, 4, 1], [0, 4, 3, 2], [0, 3, 5, 3], [0, 5, 2, 4], [1, 3, 4, 5], [1, 4, 2, 6], [1, 2, 5, 7], [1, 5, 3, 8]]
  },
  d10: {
    vertices: [[1, 0, -0.105], [0.809, 0.5877, 0.105], [0.309, 0.951, -0.105], [-0.309, 0.951, 0.105], [-0.809, 0.5877, -0.105], [-1, 0, 0.105], [-0.809, -0.587, -0.105], [-0.309, -0.951, 0.105], [0.309, -0.951, -0.105], [0.809, -0.5877, 0.105], [0, 0, -1], [0, 0, 1]],
    faces: [[5, 6, 7, 11, 0], [4, 3, 2, 10, 1], [1, 2, 3, 11, 2], [0, 9, 8, 10, 3], [7, 8, 9, 11, 4], [8, 7, 6, 10, 5], [9, 0, 1, 11, 6], [2, 1, 0, 10, 7], [3, 4, 5, 11, 8], [6, 5, 4, 10, 9]]
  },
  d12: {
    vertices: [[0, 0.618, 1.618], [0, 0.618, -1.618], [0, -0.618, 1.618], [0, -0.618, -1.618], [1.618, 0, 0.618], [1.618, 0, -0.618], [-1.618, 0, 0.618], [-1.618, 0, -0.618], [0.618, 1.618, 0], [0.618, -1.618, 0], [-0.618, 1.618, 0], [-0.618, -1.618, 0], [1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1], [-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1]],
    faces: [[2, 14, 4, 12, 0, 1], [15, 9, 11, 19, 3, 2], [16, 10, 17, 7, 6, 3], [6, 7, 19, 11, 18, 4], [6, 18, 2, 0, 16, 5], [18, 11, 9, 14, 2, 6], [1, 17, 10, 8, 13, 7], [1, 13, 5, 15, 3, 8], [13, 8, 12, 4, 5, 9], [5, 4, 14, 9, 15, 10], [0, 12, 8, 10, 16, 11], [3, 19, 7, 17, 1, 12]]
  },
  d20: {
    vertices: [[-1, 1.618, 0], [1, 1.618, 0], [-1, -1.618, 0], [1, -1.618, 0], [0, -1, 1.618], [0, 1, 1.618], [0, -1, -1.618], [0, 1, -1.618], [1.618, 0, -1], [1.618, 0, 1], [-1.618, 0, -1], [-1.618, 0, 1]],
    faces: [[0, 11, 5, 1], [0, 5, 1, 2], [0, 1, 7, 3], [0, 7, 10, 4], [0, 10, 11, 5], [1, 5, 9, 6], [5, 11, 4, 7], [11, 10, 2, 8], [10, 7, 6, 9], [7, 1, 8, 10], [3, 9, 4, 11], [3, 4, 2, 12], [3, 2, 6, 13], [3, 6, 8, 14], [3, 8, 9, 15], [4, 9, 5, 16], [2, 4, 11, 17], [6, 2, 10, 18], [8, 6, 7, 19], [9, 8, 1, 20]]
  }
}, zp = {
  name: "",
  scale: 1,
  font: "Arial",
  color: "",
  labels: [],
  valueMap: [],
  values: [],
  normals: [],
  mass: 300,
  inertia: 13,
  geometry: null,
  display: "values",
  system: "d20"
};
class Bp {
  constructor(e) {
    if (!Us.hasOwnProperty(e))
      return console.error("dice type unavailable");
    Object.assign(this, zp, Us[e]), this.shape = Us[e].type || e, this.type = e, this.setLabels(this.labels), this.setValues(this.values[0], this.values[1], this.values[2]), this.setValueMap(this.valueMap), this.bumpMaps && this.setBumpMaps(this.bumpMaps);
  }
  setValues(e = 1, t = 20, n = 1) {
    this.values = this.range(e, t, n);
  }
  setValueMap(e) {
    for (let t = 0; t < this.values.length; t++) {
      let n = this.values[t];
      e[n] != null && (this.valueMap[n] = e[n]);
    }
  }
  registerFaces(e, t = "labels") {
    let n;
    if (t == "labels" ? n = this.labels : n = this.normals, n.unshift(""), ["d2", "d10"].includes(this.shape) || n.unshift(""), this.shape == "d4") {
      let i = e[0], s = e[1], o = e[2], r = e[3];
      this.labels = [
        [[], [0, 0, 0], [s, r, o], [i, o, r], [s, i, r], [i, s, o]],
        [[], [0, 0, 0], [s, o, r], [o, i, r], [s, r, i], [o, s, i]],
        [[], [0, 0, 0], [r, o, s], [o, r, i], [r, s, i], [o, i, s]],
        [[], [0, 0, 0], [r, s, o], [i, r, o], [r, i, s], [i, o, s]]
      ];
    } else
      Array.prototype.push.apply(n, e);
  }
  setLabels(e) {
    this.loadTextures(e, this.registerFaces.bind(this), "labels");
  }
  setBumpMaps(e) {
    this.loadTextures(e, this.registerFaces.bind(this), "bump");
  }
  loadTextures(e, t, n) {
    let i = 0, s = e.length, o = /\.(PNG|JPG|GIF|WEBP)$/i, r = Array(e.length), a = !1;
    for (let l = 0; l < s; l++) {
      if (e[l] == "" || !e[l].match(o)) {
        r[l] = e[l], ++i;
        continue;
      }
      a = !0, r[l] = new Image(), r[l].onload = function() {
        ++i >= s && t(r, n);
      }, r[l].src = e[l];
    }
    a || t(r, n);
  }
  range(e, t, n = 1) {
    for (var i = [e], s = e; s < t; )
      i.push(s += n || 1);
    return i;
  }
}
const Gs = {
  none: {
    name: "Plastic"
  },
  perfectmetal: {
    name: "Perfect Metal",
    color: 14540253,
    roughness: 0,
    metalness: 1,
    envMapIntensity: 1
  },
  metal: {
    name: "Metal",
    color: 14540253,
    roughness: 0.5,
    metalness: 0.6,
    envMapIntensity: 1
  },
  wood: {
    name: "Wood",
    color: 14540253,
    roughness: 0.9,
    metalness: 0,
    envMapIntensity: 1
  },
  glass: {
    name: "Glass",
    color: 14540253,
    roughness: 0.1,
    metalness: 0,
    envMapIntensity: 1
  }
}, Np = {
  baseScale: 100,
  bumpMapping: !0
}, $n = class {
  constructor(e) {
    this.geometries = {}, this.materials_cache = {}, this.cache_hits = 0, this.cache_misses = 0, this.label_color = "", this.dice_color = "", this.edge_color = "", this.label_outline = "", this.dice_texture = "", this.dice_material = "", this.material_options = {
      specular: 16777215,
      color: 11908533,
      shininess: 5,
      flatShading: !0
    }, Object.assign(this, Np, e);
  }
  updateConfig(e = {}) {
    Object.assign(this, e), e.scale && this.scaleGeometry();
  }
  setBumpMapping(e) {
    this.bumpMapping = e, this.materials_cache = {};
  }
  labelledPreset(e, t) {
    if (!Array.isArray(t) || !t.length || e.shape === "d4")
      return e;
    const n = ["d2", "d10"].includes(e.shape) ? [""] : ["", ""];
    return Object.assign(Object.create(Object.getPrototypeOf(e)), e, { labels: [...n, ...t] });
  }
  create(e, t, n = null) {
    let i = this.get(e);
    if (!i)
      return null;
    const s = this.labelledPreset(i, n);
    let o = this.geometries[e];
    if (o || (o = this.createGeometry(i.shape, i.scale * this.baseScale), this.geometries[e] = o), !o)
      return null;
    this.setMaterialInfo();
    let r = new ke(o, this.createMaterials(s, this.baseScale / 2, 1));
    switch (r.result = [], r.shape = i.shape, r.rerolls = 0, r.resultReason = "natural", r.mass = i.mass, r.getFaceValue = function() {
      let a = this.resultReason, l = new B(0, 0, this.shape == "d4" ? -1 : 1), u, d = Math.PI * 2, c = this.geometry.getAttribute("normal").array;
      for (let _ = 0, b = this.geometry.groups.length; _ < b; ++_) {
        let x = this.geometry.groups[_];
        if (x.materialIndex == 0)
          continue;
        let M = _ * 9, C = new B(c[M], c[M + 1], c[M + 2]).clone().applyQuaternion(this.body.quaternion).angleTo(l);
        C < d && (d = C, u = x);
      }
      let m = u.materialIndex - 1, g = 2;
      const p = $n.dice[this.notation.type];
      if (this.shape == "d4") {
        let _ = m - 1 == 0 ? 5 : m;
        return { value: m, label: p.labels[m - 1][_][0], reason: a };
      }
      ["d10", "d2"].includes(this.shape) && (m += 1, g -= 1);
      let f = p.values[(m - 1) % p.values.length], v = p.labels[(m - 1) % (p.labels.length - 2) + g];
      return { value: f, label: v, reason: a };
    }, r.storeRolledValue = function(a) {
      this.resultReason = a || this.resultReason, this.result.push(this.getFaceValue());
    }, r.getLastValue = function() {
      return !this.result || this.result.length < 1 ? { value: void 0, label: "", reason: "" } : this.result[this.result.length - 1];
    }, r.ignoreLastValue = function(a) {
      let l = this.getLastValue();
      l.value !== void 0 && (l.ignore = a, this.setLastValue(l));
    }, r.setLastValue = function(a) {
      if (!(!this.result || this.result.length < 1) && !(!a || a.length < 1))
        return this.result[this.result.length - 1] = a;
    }, i.color && (r.material[0].color = new Ae(i.color), r.material[0].emissive = new Ae(i.color), r.material[0].emissiveIntensity = 1, r.material[0].needsUpdate = !0), i.values.length) {
      case 1:
        return this.fixmaterials(r, 1);
      case 2:
        return this.fixmaterials(r, 2);
      case 3:
        return this.fixmaterials(r, 3);
      default:
        return r;
    }
  }
  get(e) {
    let t;
    return $n.dice.hasOwnProperty(e) ? t = $n.dice[e] : (t = new Bp(e), $n.dice[e] = t), t;
  }
  getGeometry(e) {
    return this.geometries[e];
  }
  scaleGeometry() {
  }
  createMaterials(e, t, n, i = !0, s = 0) {
    var u, d, c;
    let o = [], r = e.labels;
    e.shape == "d4" && (r = e.labels[s], t = this.baseScale / 2, n = this.baseScale * 2);
    for (var a = 0; a < r.length; ++a) {
      var l;
      this.dice_material != "none" ? (l = new js(Gs[this.dice_material]), l.envMapIntensity = ((d = (u = Gs[this.dice_material]) == null ? void 0 : u.envMapIntensity) != null ? d : 1) * (this.shine || 0)) : l = new td(this.material_options);
      let m;
      if (a == 0) {
        let g = { name: "none" };
        this.dice_texture_rand.composite != "source-over" && (g = this.dice_texture_rand), m = this.createTextMaterial(e, r, a, t, n, g, this.label_color_rand, this.label_outline_rand, this.edge_color_rand, i), l.map = m.composite;
      } else {
        m = this.createTextMaterial(e, r, a, t, n, this.dice_texture_rand, this.label_color_rand, this.label_outline_rand, this.dice_color_rand, i), l.map = m.composite;
        const g = ((c = Gs[this.dice_material]) == null ? void 0 : c.metalness) || 0;
        if (this.label_glow > 0 && g > 0 && m.glow && l.emissive && (l.emissiveMap = m.glow, l.emissive = new Ae(16777215), l.emissiveIntensity = this.label_glow * g), this.bumpMapping) {
          {
            let p = 0.75;
            t > 35 && (p = 1), t > 40 && (p = 2.5), t > 45 && (p = 4), l.bumpScale = p;
          }
          m.bump && (l.bumpMap = m.bump), e.shape != "d4" && e.normals[a] && (l.bumpMap = new vt(e.normals[a]), l.bumpScale = 4, l.bumpMap.needsUpdate = !0);
        }
      }
      l.opacity = 1, l.transparent = !0, l.depthTest = !1, l.needUpdate = !0, o.push(l);
    }
    return o;
  }
  createTextMaterial(e, t, n, i, s, o, r, a, l, u) {
    if (t[n] === void 0)
      return null;
    o = o || this.dice_texture_rand, r = r || this.label_color_rand, a = a || this.label_outline_rand, l = l || this.dice_color_rand, u = u == null ? !0 : u;
    let d = t[n], c = !1, m = d;
    d instanceof HTMLImageElement ? m = d.src : d instanceof Array && d.forEach((z) => {
      m += z.src;
    });
    let g = e.type + m + n + o.name + r + a + l;
    if (e.shape == "d4" && (g = e.type + m + o.name + r + a + l), u && this.materials_cache[g] != null)
      return this.cache_hits++, this.materials_cache[g];
    let p = document.createElement("canvas"), f = p.getContext("2d", { alpha: !0 });
    f.globalAlpha = 0, f.clearRect(0, 0, p.width, p.height);
    let v = document.createElement("canvas"), _ = v.getContext("2d", { alpha: !0 });
    _.globalAlpha = 0, _.clearRect(0, 0, v.width, v.height);
    let b = document.createElement("canvas"), x = b.getContext("2d", { alpha: !1 }), M;
    if (e.shape == "d4" ? M = this.calc_texture_size(i + s) * 4 : M = this.calc_texture_size(i + i * 2 * s) * 4, p.width = p.height = M, v.width = v.height = M, b.width = b.height = M, x.fillStyle = "#000000", x.fillRect(0, 0, M, M), f.fillStyle = l, f.fillRect(0, 0, p.width, p.height), _.fillStyle = "#FFFFFF", _.fillRect(0, 0, v.width, v.height), o.texture && o.name != "" && o.name != "none" ? (f.globalCompositeOperation = o.composite || "source-over", f.drawImage(o.texture, 0, 0, p.width, p.height), f.globalCompositeOperation = "source-over", o.bump && (_.globalCompositeOperation = "source-over", _.drawImage(o.bump, 0, 0, p.width, p.height))) : f.globalCompositeOperation = "source-over", f.globalCompositeOperation = "source-over", f.textAlign = "center", f.textBaseline = "middle", _.textAlign = "center", _.textBaseline = "middle", x.textAlign = "center", x.textBaseline = "middle", e.shape != "d4") {
      let H = {
        d8: { even: -7.5, odd: -127.5 },
        d10: { all: -6 },
        d12: { all: 5 },
        d20: { all: -7.5 }
      }[e.shape];
      if (H) {
        let D;
        if (H.hasOwnProperty("all") ? D = H.all : n > 0 && n % 2 != 0 ? D = H.odd : D = H.even, D && D != 0) {
          var S = p.width / 2, C = p.height / 2;
          f.translate(S, C), f.rotate(D * (Math.PI / 180)), f.translate(-S, -C), _.translate(S, C), _.rotate(D * (Math.PI / 180)), _.translate(-S, -C), x.translate(S, C), x.rotate(D * (Math.PI / 180)), x.translate(-S, -C);
        }
      }
      if (d instanceof HTMLImageElement)
        c = !0, f.drawImage(d, 0, 0, d.width, d.height, 0, 0, p.width, p.height);
      else {
        let D = M / (1 + 2 * s), L = p.height / 2 + 10, I = p.width / 2;
        e.shape == "d10" ? (D = D * 0.75, L = L * 1.15 - 10) : e.shape == "d20" && (I = I * 0.98), f.font = D + "pt " + e.font, _.font = D + "pt " + e.font, x.font = D + "pt " + e.font;
        let F = f.measureText("M").width * 1.4, q = d.split(`
`);
        q.length > 1 && (D = D / q.length, f.font = D + "pt " + e.font, _.font = D + "pt " + e.font, x.font = D + "pt " + e.font, F = f.measureText("M").width * 1.2, L -= F * q.length / 2);
        for (let U = 0, O = q.length; U < O; U++) {
          let k = q[U].trim();
          a != "none" && a != l && (f.strokeStyle = a, f.lineWidth = 5, f.strokeText(q[U], I, L), _.strokeStyle = "#000000", _.lineWidth = 5, _.strokeText(q[U], I, L), (k == "6" || k == "9") && (f.strokeText("  .", I, L), _.strokeText("  .", I, L))), f.fillStyle = r, f.fillText(q[U], I, L), _.fillStyle = "#000000", _.fillText(q[U], I, L), x.fillStyle = r, x.fillText(q[U], I, L), (k == "6" || k == "9") && (f.fillText("  .", I, L), _.fillText("  .", I, L), x.fillText("  .", I, L)), L += F * 1.5;
        }
      }
    } else {
      var S = p.width / 2, C = p.height / 2;
      f.font = M / 128 * 24 + "pt " + e.font, _.font = M / 128 * 24 + "pt " + e.font, x.font = M / 128 * 24 + "pt " + e.font;
      for (let D = 0; D < d.length; D++) {
        if (d[D] instanceof HTMLImageElement) {
          let L = d[D].width / p.width;
          f.drawImage(d[D], 0, 0, d[D].width, d[D].height, 100 / L, 25 / L, 60 / L, 60 / L);
        } else
          a != "none" && a != l && (f.strokeStyle = a, f.lineWidth = 5, f.strokeText(d[D], S, C - M * 0.3), _.strokeStyle = "#000000", _.lineWidth = 5, _.strokeText(d[D], S, C - M * 0.3)), f.fillStyle = r, f.fillText(d[D], S, C - M * 0.3), _.fillStyle = "#000000", _.fillText(d[D], S, C - M * 0.3), x.fillStyle = r, x.fillText(d[D], S, C - M * 0.3);
        f.translate(S, C), f.rotate(Math.PI * 2 / 3), f.translate(-S, -C), _.translate(S, C), _.rotate(Math.PI * 2 / 3), _.translate(-S, -C), x.translate(S, C), x.rotate(Math.PI * 2 / 3), x.translate(-S, -C);
      }
    }
    var y = new Yi(p), A;
    c ? A = null : A = new Yi(v);
    var P = new Yi(b);
    return u && (this.cache_misses++, this.materials_cache[g] = { composite: y, bump: A, glow: P }), { composite: y, bump: A, glow: P };
  }
  applyColorSet(e) {
    var t;
    this.colordata = e, this.label_color = e.foreground, this.dice_color = e.background, this.label_outline = e.outline, this.dice_texture = e.texture, this.dice_material = ((t = e == null ? void 0 : e.texture) == null ? void 0 : t.material) || "none", this.edge_color = e.hasOwnProperty("edge") ? e.edge : e.background;
  }
  setMaterialInfo(e = "") {
    let t = this.colordata, n = this.dice_texture, i = this.dice_material;
    if (this.dice_color_rand = "", this.label_color_rand = "", this.label_outline_rand = "", this.dice_texture_rand = "", this.dice_material_rand = "", this.edge_color_rand = "", Array.isArray(this.dice_color)) {
      var s = Math.floor(Math.random() * this.dice_color.length);
      Array.isArray(this.label_color) && this.label_color.length == this.dice_color.length && (this.label_color_rand = this.label_color[s], Array.isArray(this.label_outline) && this.label_outline.length == this.label_color.length && (this.label_outline_rand = this.label_outline[s])), Array.isArray(this.dice_texture) && this.dice_texture.length == this.dice_color.length && (this.dice_texture_rand = this.dice_texture[s], this.dice_material_rand = this.dice_texture_rand.material), Array.isArray(this.edge_color) && this.edge_color.length == this.dice_color.length && (this.edge_color_rand = this.edge_color[s]), this.dice_color_rand = this.dice_color[s];
    } else
      this.dice_color_rand = this.dice_color;
    if (this.edge_color_rand == "")
      if (Array.isArray(this.edge_color)) {
        var s = Math.floor(Math.random() * this.edge_color.length);
        this.edge_color_rand = this.edge_color[s];
      } else
        this.edge_color_rand = this.edge_color;
    if (this.label_color_rand == "" && Array.isArray(this.label_color)) {
      var s = this.label_color[Math.floor(Math.random() * this.label_color.length)];
      Array.isArray(this.label_outline) && this.label_outline.length == this.label_color.length && (this.label_outline_rand = this.label_outline[s]), this.label_color_rand = this.label_color[s];
    } else
      this.label_color_rand == "" && (this.label_color_rand = this.label_color);
    if (this.label_outline_rand == "" && Array.isArray(this.label_outline)) {
      var s = this.label_outline[Math.floor(Math.random() * this.label_outline.length)];
      this.label_outline_rand = this.label_outline[s];
    } else
      this.label_outline_rand == "" && (this.label_outline_rand = this.label_outline);
    this.dice_texture_rand == "" && Array.isArray(this.dice_texture) ? (this.dice_texture_rand = this.dice_texture[Math.floor(Math.random() * this.dice_texture.length)], this.dice_material_rand = this.dice_texture_rand.material || this.dice_material) : this.dice_texture_rand == "" && (this.dice_texture_rand = this.dice_texture, this.dice_material_rand = this.dice_texture_rand.material || this.dice_material), this.dice_material_rand == "" && Array.isArray(this.dice_material) ? this.dice_material_rand = this.dice_material[Math.floor(Math.random() * this.dice_material.length)] : this.dice_material_rand == "" && (this.dice_material_rand = this.dice_material), this.colordata && this.colordata.id != t.id && this.applyColorSet(t, n, i);
  }
  calc_texture_size(e) {
    return Math.pow(2, Math.floor(Math.log(e) / Math.log(2)));
  }
  createGeometry(e, t, n = !1) {
    const i = n ? "create_shape" : "create_geom";
    switch (e) {
      case "d2":
        var s = new Js(1 * t, 1 * t, 0.1 * t, 32);
        return s.cannon_shape = new hf(1 * t, 1 * t, 0.1 * t, 8), s;
      case "d4":
        return this[i](Mt.d4.vertices, Mt.d4.faces, t, -0.1, Math.PI * 7 / 6, 0.96);
      case "d6":
        return this[i](Mt.d6.vertices, Mt.d6.faces, t, 0.1, Math.PI / 4, 0.96);
      case "d8":
        return this[i](Mt.d8.vertices, Mt.d8.faces, t, 0, -Math.PI / 4 / 2, 0.965);
      case "d10":
        return this[i](Mt.d10.vertices, Mt.d10.faces, t, 0.3, Math.PI, 0.945);
      case "d12":
        return this[i](Mt.d12.vertices, Mt.d12.faces, t, 0.2, -Math.PI / 4 / 2, 0.968);
      case "d20":
        return this[i](Mt.d20.vertices, Mt.d20.faces, t, -0.2, -Math.PI / 4 / 2, 0.955);
      default:
        return console.error(`Geometry for ${e} is not available`), null;
    }
  }
  fixmaterials(e, t) {
    for (let i = 0, s = e.geometry.groups.length; i < s; ++i) {
      var n = e.geometry.groups[i].materialIndex - 2;
      if (n < t)
        continue;
      let o = n % t;
      e.geometry.groups[i].materialIndex = o + 2;
    }
    return e.geometry.elementsNeedUpdate = !0, e;
  }
  create_shape(e, t, n) {
    for (var i = new Array(e.length), s = 0; s < e.length; ++s)
      i[s] = new B().fromArray(e[s]).normalize();
    for (var o = new Array(e.length), r = new Array(t.length), s = 0; s < i.length; ++s) {
      var a = i[s];
      o[s] = new w(a.x * n, a.y * n, a.z * n);
    }
    for (var s = 0; s < t.length; ++s)
      r[s] = t[s].slice(0, t[s].length - 1);
    return new Mn({ vertices: o, faces: r });
  }
  make_geom(e, t, n, i, s) {
    let o = new Et();
    for (let g = 0; g < e.length; ++g)
      e[g] = e[g].multiplyScalar(n);
    let r = [];
    const a = [], l = [], u = new B(), d = new B();
    let c, m = 0;
    for (let g = 0; g < t.length; ++g) {
      let p = t[g], f = p.length - 1, v = Math.PI * 2 / f;
      c = p[f] + 1;
      for (let b = 0; b < f - 2; ++b)
        r.push(...e[p[0]].toArray()), r.push(...e[p[b + 1]].toArray()), r.push(...e[p[b + 2]].toArray()), u.subVectors(e[p[b + 2]], e[p[b + 1]]), d.subVectors(e[p[0]], e[p[b + 1]]), u.cross(d), u.normalize(), a.push(...u.toArray()), a.push(...u.toArray()), a.push(...u.toArray()), l.push((Math.cos(s) + 1 + i) / 2 / (1 + i), (Math.sin(s) + 1 + i) / 2 / (1 + i)), l.push((Math.cos(v * (b + 1) + s) + 1 + i) / 2 / (1 + i), (Math.sin(v * (b + 1) + s) + 1 + i) / 2 / (1 + i)), l.push((Math.cos(v * (b + 2) + s) + 1 + i) / 2 / (1 + i), (Math.sin(v * (b + 2) + s) + 1 + i) / 2 / (1 + i));
      let _ = (f - 2) * 3;
      for (let b = 0; b < _ / 3; b++)
        o.addGroup(m, 3, c), m += 3;
    }
    return o.setAttribute("position", new rt(r, 3)), o.setAttribute("normal", new rt(a, 3)), o.setAttribute("uv", new rt(l, 2)), o.boundingSphere = new Zn(new B(), n), o;
  }
  make_d10_geom(e, t, n, i, s) {
    let o = new Et();
    for (let b = 0; b < e.length; ++b)
      e[b] = e[b].multiplyScalar(n);
    let r = [];
    const a = [], l = [], u = new B(), d = new B();
    let c, m = 0;
    for (let b = 0; b < t.length; ++b) {
      let x = t[b], M = x.length - 1, S = Math.PI * 2 / M;
      c = x[M] + 1;
      var g = 0.65, p = 0.85, f = 1 - 1 * p, v = 1 - 0.895 / 1.105 * p, _ = 1;
      for (let y = 0; y < M - 2; ++y)
        r.push(...e[x[0]].toArray()), r.push(...e[x[y + 1]].toArray()), r.push(...e[x[y + 2]].toArray()), u.subVectors(e[x[y + 2]], e[x[y + 1]]), d.subVectors(e[x[0]], e[x[y + 1]]), u.cross(d), u.normalize(), a.push(...u.toArray()), a.push(...u.toArray()), a.push(...u.toArray()), t[b][t[b].length - 1] == -1 || y >= 2 ? (l.push((Math.cos(s) + 1 + i) / 2 / (1 + i), (Math.sin(s) + 1 + i) / 2 / (1 + i)), l.push((Math.cos(S * (y + 1) + s) + 1 + i) / 2 / (1 + i), (Math.sin(S * (y + 1) + s) + 1 + i) / 2 / (1 + i)), l.push((Math.cos(S * (y + 2) + s) + 1 + i) / 2 / (1 + i), (Math.sin(S * (y + 2) + s) + 1 + i) / 2 / (1 + i))) : y == 0 ? (l.push(0.5 - g / 2, v), l.push(0.5, f), l.push(0.5 + g / 2, v)) : y == 1 && (l.push(0.5 - g / 2, v), l.push(0.5 + g / 2, v), l.push(0.5, _));
      let C = (M - 2) * 3;
      for (let y = 0; y < C / 3; y++)
        o.addGroup(m, 3, c), m += 3;
    }
    return o.setAttribute("position", new rt(r, 3)), o.setAttribute("normal", new rt(a, 3)), o.setAttribute("uv", new rt(l, 2)), o.boundingSphere = new Zn(new B(), n), o;
  }
  chamfer_geom(e, t, n) {
    for (var i = [], s = [], o = new Array(e.length), r = 0; r < e.length; ++r)
      o[r] = [];
    for (var r = 0; r < t.length; ++r) {
      for (var a = t[r], l = a.length - 1, u = new B(), d = new Array(l), c = 0; c < l; ++c) {
        var m = e[a[c]].clone();
        u.add(m), o[a[c]].push(d[c] = i.push(m) - 1);
      }
      u.divideScalar(l);
      for (var c = 0; c < l; ++c) {
        var m = i[d[c]];
        m.subVectors(m, u).multiplyScalar(n).addVectors(m, u);
      }
      d.push(a[l]), s.push(d);
    }
    for (var r = 0; r < t.length - 1; ++r)
      for (var c = r + 1; c < t.length; ++c) {
        for (var g = [], p = -1, f = 0; f < t[r].length - 1; ++f) {
          var v = t[c].indexOf(t[r][f]);
          v >= 0 && v < t[c].length - 1 && (p >= 0 && f != p + 1 ? g.unshift([r, f], [c, v]) : g.push([r, f], [c, v]), p = f);
        }
        g.length == 4 && s.push([
          s[g[0][0]][g[0][1]],
          s[g[1][0]][g[1][1]],
          s[g[3][0]][g[3][1]],
          s[g[2][0]][g[2][1]],
          -1
        ]);
      }
    for (var r = 0; r < o.length; ++r) {
      for (var _ = o[r], d = [_[0]], b = _.length - 1; b; ) {
        for (var f = t.length; f < s.length; ++f) {
          var x = s[f].indexOf(d[d.length - 1]);
          if (x >= 0 && x < 4) {
            --x == -1 && (x = 3);
            var M = s[f][x];
            if (_.indexOf(M) >= 0) {
              d.push(M);
              break;
            }
          }
        }
        --b;
      }
      d.push(-1), s.push(d);
    }
    return { vectors: i, faces: s };
  }
  create_geom(e, t, n, i, s, o) {
    for (var r = new Array(e.length), a = 0; a < e.length; ++a)
      r[a] = new B().fromArray(e[a]).normalize();
    var l = this.chamfer_geom(r, t, o);
    if (t.length != 10)
      var u = this.make_geom(l.vectors, l.faces, n, i, s);
    else
      var u = this.make_d10_geom(l.vectors, l.faces, n, i, s);
    return u.cannon_shape = this.create_shape(e, t, n), u.name = "d" + t.length, u;
  }
};
let $i = $n;
or($i, "dice", {});
const ks = {
  cloudy: {
    name: "Clouds (Transparent)",
    composite: "destination-in",
    source: "textures/cloudy.webp",
    source_bump: "textures/cloudy.alt.webp"
  },
  cloudy_2: {
    name: "Clouds",
    composite: "multiply",
    source: "textures/cloudy.alt.webp",
    source_bump: "textures/cloudy.alt.webp"
  },
  fire: {
    name: "Fire",
    composite: "multiply",
    source: "textures/fire.webp",
    source_bump: "textures/fire.webp",
    material: "metal"
  },
  marble: {
    name: "Marble",
    composite: "multiply",
    source: "textures/marble.webp",
    source_bump: "",
    material: "glass"
  },
  water: {
    name: "Water",
    composite: "destination-in",
    source: "textures/water.webp",
    source_bump: "textures/water.webp",
    material: "glass"
  },
  ice: {
    name: "Ice",
    composite: "destination-in",
    source: "textures/ice.webp",
    source_bump: "textures/ice.webp",
    material: "glass"
  },
  paper: {
    name: "Paper",
    composite: "multiply",
    source: "textures/paper.webp",
    source_bump: "textures/paper-bump.webp",
    material: "wood"
  },
  speckles: {
    name: "Speckles",
    composite: "multiply",
    source: "textures/speckles.webp",
    source_bump: "textures/speckles.webp",
    material: "none"
  },
  glitter: {
    name: "Glitter",
    composite: "multiply",
    source: "textures/glitter.webp",
    source_bump: "textures/glitter-bump.webp",
    material: "none"
  },
  glitter_2: {
    name: "Glitter (Transparent)",
    composite: "destination-in",
    source: "textures/glitter-alpha.webp",
    source_bump: "",
    material: "none"
  },
  stars: {
    name: "Stars",
    composite: "multiply",
    source: "textures/stars.webp",
    source_bump: "textures/stars.webp",
    material: "none"
  },
  stainedglass: {
    name: "Stained Glass",
    composite: "multiply",
    source: "textures/stainedglass.webp",
    source_bump: "textures/stainedglass-bump.webp",
    material: "glass"
  },
  wood: {
    name: "Wood",
    composite: "multiply",
    source: "textures/wood.webp",
    source_bump: "textures/wood.webp",
    material: "wood"
  },
  stone: {
    name: "Stone",
    composite: "multiply",
    source: "textures/stone.webp",
    source_bump: "textures/stone.webp",
    material: "wood"
  },
  metal: {
    name: "Stainless Steel",
    composite: "multiply",
    source: "textures/metal.webp",
    source_bump: "textures/metal-bump.webp",
    material: "metal"
  },
  skulls: {
    name: "Skulls",
    composite: "multiply",
    source: "textures/skulls.webp",
    source_bump: "textures/skulls.webp"
  },
  leopard: {
    name: "Leopard",
    composite: "multiply",
    source: "textures/leopard.webp",
    source_bump: "textures/leopard.webp",
    material: "wood"
  },
  tiger: {
    name: "Tiger",
    composite: "multiply",
    source: "textures/tiger.webp",
    source_bump: "textures/tiger.webp",
    material: "wood"
  },
  cheetah: {
    name: "Cheetah",
    composite: "multiply",
    source: "textures/cheetah.webp",
    source_bump: "textures/cheetah.webp",
    material: "wood"
  },
  dragon: {
    name: "Dragon",
    composite: "multiply",
    source: "textures/dragon.webp",
    source_bump: "textures/dragon-bump.webp",
    material: "none"
  },
  lizard: {
    name: "Lizard",
    composite: "multiply",
    source: "textures/lizard.webp",
    source_bump: "textures/lizard.webp",
    material: "none"
  },
  bird: {
    name: "Bird",
    composite: "multiply",
    source: "textures/feather.webp",
    source_bump: "textures/feather-bump.webp",
    material: "wood"
  },
  astral: {
    name: "Astral Sea",
    composite: "multiply",
    source: "textures/astral.webp",
    source_bump: "textures/stars.webp",
    material: "none"
  },
  acleaf: {
    name: "AC Leaf",
    composite: "multiply",
    source: "textures/acleaf.webp",
    source_bump: "textures/acleaf.webp",
    material: "none"
  },
  thecage: {
    name: "Nicholas Cage",
    composite: "multiply",
    source: "textures/thecage.webp",
    source_bump: "",
    material: "metal"
  },
  isabelle: {
    name: "Isabelle",
    composite: "source-over",
    source: "textures/isabelle.webp",
    source_bump: "",
    material: "none"
  },
  bronze01: {
    name: "bronze01",
    composite: "difference",
    source: "textures/bronze01.webp",
    source_bump: "",
    material: "metal"
  },
  bronze02: {
    name: "bronze02",
    composite: "difference",
    source: "textures/bronze02.webp",
    source_bump: "",
    material: "metal"
  },
  bronze03: {
    name: "bronze03",
    composite: "difference",
    source: "textures/bronze03.webp",
    source_bump: "",
    material: "metal"
  },
  bronze03a: {
    name: "bronze03a",
    composite: "difference",
    source: "textures/bronze03a.webp",
    source_bump: "",
    material: "metal"
  },
  bronze03b: {
    name: "bronze03b",
    composite: "difference",
    source: "textures/bronze03b.webp",
    source_bump: "",
    material: "metal"
  },
  bronze04: {
    name: "bronze04",
    composite: "difference",
    source: "textures/bronze04.webp",
    source_bump: "",
    material: "metal"
  },
  none: {
    name: "none",
    composite: "source-over",
    source: "",
    source_bump: "",
    material: ""
  },
  "": {
    name: "~ Preset ~",
    composite: "source-over",
    source: "",
    source_bump: "",
    material: ""
  }
}, po = {
  coin_default: {
    name: "Gold Coin",
    description: "Gold Dragonhead Coin",
    category: "Other",
    foreground: "#f6c928",
    background: "#f6c928",
    outline: "none",
    texture: "metal"
  },
  coin_silver: {
    name: "Silver Coin",
    description: "Gold Dragonhead Coin",
    category: "Other",
    foreground: "#f6c928",
    background: "#f6c928",
    outline: "none",
    texture: "metal"
  },
  radiant: {
    name: "Radiant",
    category: "Damage Types",
    foreground: "#F9B333",
    background: "#FFFFFF",
    outline: "",
    texture: "paper",
    description: "Radiant"
  },
  fire: {
    name: "Fire",
    category: "Damage Types",
    foreground: "#f8d84f",
    background: ["#f8d84f", "#f9b02d", "#f43c04", "#910200", "#4c1009"],
    outline: "black",
    texture: "fire",
    description: "Fire"
  },
  ice: {
    name: "Ice",
    category: "Damage Types",
    foreground: "#60E9FF",
    background: ["#214fa3", "#3c6ac1", "#253f70", "#0b56e2", "#09317a"],
    outline: "black",
    texture: "ice",
    description: "Ice"
  },
  poison: {
    name: "Poison",
    category: "Damage Types",
    foreground: "#D6A8FF",
    background: ["#313866", "#504099", "#66409e", "#934fc3", "#c949fc"],
    outline: "black",
    texture: "cloudy",
    description: "Poison"
  },
  acid: {
    name: "Acid",
    category: "Damage Types",
    foreground: "#A9FF70",
    background: ["#a6ff00", "#83b625", "#5ace04", "#69f006", "#b0f006", "#93bc25"],
    outline: "black",
    texture: "marble",
    description: "Acid"
  },
  thunder: {
    name: "Thunder",
    category: "Damage Types",
    foreground: "#FFC500",
    background: "#7D7D7D",
    outline: "black",
    texture: "cloudy",
    description: "Thunder"
  },
  lightning: {
    name: "Lightning",
    category: "Damage Types",
    foreground: "#FFC500",
    background: ["#f17105", "#f3ca40", "#eddea4", "#df9a57", "#dea54b"],
    outline: "#7D7D7D",
    texture: "ice",
    description: "Lightning"
  },
  air: {
    name: "Air",
    category: "Damage Types",
    foreground: "#ffffff",
    background: ["#d0e5ea", "#c3dee5", "#a4ccd6", "#8dafb7", "#80a4ad"],
    outline: "black",
    texture: "cloudy",
    description: "Air"
  },
  water: {
    name: "Water",
    category: "Damage Types",
    foreground: "#60E9FF",
    background: ["#87b8c4", "#77a6b2", "#6b98a3", "#5b8691", "#4b757f"],
    outline: "black",
    texture: "water",
    description: "Water"
  },
  earth: {
    name: "Earth",
    category: "Damage Types",
    foreground: "#6C9943",
    background: ["#346804", "#184200", "#527f22", "#3a1d04", "#56341a", "#331c17", "#5a352a", "#302210"],
    outline: "black",
    texture: "speckles",
    description: "Earth"
  },
  force: {
    name: "Force",
    category: "Damage Types",
    foreground: "white",
    background: ["#FF97FF", "#FF68FF", "#C651C6"],
    outline: "#570000",
    texture: "stars",
    description: "Force"
  },
  psychic: {
    name: "Psychic",
    category: "Damage Types",
    foreground: "#D6A8FF",
    background: ["#313866", "#504099", "#66409E", "#934FC3", "#C949FC", "#313866"],
    outline: "black",
    texture: "speckles",
    description: "Psychic"
  },
  necrotic: {
    name: "Necrotic",
    category: "Damage Types",
    foreground: "#ffffff",
    background: "#6F0000",
    outline: "black",
    texture: "skulls",
    description: "Necrotic"
  },
  breebaby: {
    name: "Pastel Sunset",
    category: "Custom Sets",
    foreground: ["#5E175E", "#564A5E", "#45455E", "#3D5A5E", "#1E595E", "#5E3F3D", "#5E1E29", "#283C5E", "#25295E"],
    background: ["#FE89CF", "#DFD4F2", "#C2C2E8", "#CCE7FA", "#A1D9FC", "#F3C3C2", "#EB8993", "#8EA1D2", "#7477AD"],
    outline: "white",
    texture: "marble",
    description: "Pastel Sunset, for Breyanna"
  },
  pinkdreams: {
    name: "Pink Dreams",
    category: "Custom Sets",
    foreground: "white",
    background: ["#ff007c", "#df73ff", "#f400a1", "#df00ff", "#ff33cc"],
    outline: "#570000",
    texture: "skulls",
    description: "Pink Dreams, for Ethan"
  },
  inspired: {
    name: "Inspired",
    category: "Custom Sets",
    foreground: "#FFD800",
    background: "#C4C4B6",
    outline: "#8E8E86",
    texture: "none",
    description: "Inspired, for Austin"
  },
  bloodmoon: {
    name: "Blood Moon",
    category: "Custom Sets",
    foreground: "#CDB800",
    background: "#6F0000",
    outline: "black",
    texture: "marble",
    description: "Blood Moon, for Jared"
  },
  starynight: {
    name: "Stary Night",
    category: "Custom Sets",
    foreground: "#4F708F",
    background: ["#091636", "#233660", "#4F708F", "#8597AD", "#E2E2E2"],
    outline: "white",
    texture: "speckles",
    description: "Stary Night, for Mai"
  },
  glitterparty: {
    name: "Glitter Party",
    category: "Custom Sets",
    foreground: "white",
    background: ["#FFB5F5", "#7FC9FF", "#A17FFF"],
    outline: "none",
    texture: "glitter",
    description: "Glitter Party, for Austin"
  },
  astralsea: {
    name: "Astral Sea",
    category: "Custom Sets",
    foreground: "#565656",
    background: "white",
    outline: "none",
    texture: "astral",
    description: "The Astral Sea, for Austin"
  },
  bronze: {
    name: "Thylean Bronze",
    description: "Thylean Bronze by @SpencerThayer",
    category: "Custom Sets",
    foreground: ["#FF9159", "#FFB066", "#FFBF59", "#FFD059"],
    background: ["#705206", "#7A4E06", "#643100", "#7A2D06"],
    outline: ["#3D2D03", "#472D04", "#301700", "#471A04"],
    edge: ["#FF5D0D", "#FF7B00", "#FFA20D", "#FFBA0D"],
    texture: ["bronze01", "bronze02", "bronze03", "bronze03a", "bronze03b", "bronze04"]
  },
  dragons: {
    name: "Here be Dragons",
    category: "Custom Sets",
    foreground: "#FFFFFF",
    background: ["#B80000", "#4D5A5A", "#5BB8FF", "#7E934E", "#FFFFFF", "#F6ED7C", "#7797A3", "#A78437", "#862C1A", "#FFDF8A"],
    outline: "black",
    texture: ["dragon", "lizard"],
    description: "Here be Dragons"
  },
  birdup: {
    name: "Bird Up",
    category: "Custom Sets",
    foreground: "#FFFFFF",
    background: ["#F11602", "#FFC000", "#6EC832", "#0094BC", "#05608D", "#FEABB3", "#F75680", "#F3F0DF", "#C7A57F"],
    outline: "black",
    texture: "bird",
    description: "Bird Up!"
  },
  tigerking: {
    name: "Tiger King",
    category: "Other",
    foreground: "#ffffff",
    background: "#FFCC40",
    outline: "black",
    texture: ["leopard", "tiger", "cheetah"],
    description: "Leopard Print"
  },
  covid: {
    name: "COViD",
    category: "Other",
    foreground: "#A9FF70",
    background: ["#a6ff00", "#83b625", "#5ace04", "#69f006", "#b0f006", "#93bc25"],
    outline: "black",
    texture: "fire",
    description: "Covid-19"
  },
  acleaf: {
    name: "Animal Crossing",
    category: "Other",
    foreground: "#00FF00",
    background: "#07540A",
    outline: "black",
    texture: "acleaf",
    description: "Animal Crossing Leaf"
  },
  isabelle: {
    name: "Isabelle",
    category: "Other",
    foreground: "white",
    background: "#FEE5CC",
    outline: "black",
    texture: "isabelle",
    description: "Isabelle"
  },
  thecage: {
    name: "Nicholas Cage",
    category: "Other",
    foreground: "#ffffff",
    background: "#ffffff",
    outline: "black",
    texture: "thecage",
    description: "Nicholas Cage"
  },
  test: {
    name: "Test",
    category: "Colors",
    foreground: ["#00FF00", "#0000FF", "#FF0000"],
    background: ["#FF0000", "#00FF00", "#0000FF"],
    outline: "black",
    texture: "none",
    description: "Test"
  },
  rainbow: {
    name: "Rainblow",
    category: "Colors",
    foreground: ["#FF5959", "#FFA74F", "#FFFF56", "#59FF59", "#2374FF", "#00FFFF", "#FF59FF"],
    background: ["#900000", "#CE3900", "#BCBC00", "#00B500", "#00008E", "#008282", "#A500A5"],
    outline: "black",
    texture: "none",
    description: "Rainblow"
  },
  black: {
    name: "Black",
    category: "Colors",
    foreground: "#ffffff",
    background: "#000000",
    outline: "black",
    texture: "none",
    description: "Black"
  },
  white: {
    name: "White",
    category: "Colors",
    foreground: "#000000",
    background: "#FFFFFF",
    outline: "#FFFFFF",
    texture: "none",
    description: "White"
  },
  swrpg_abi: {
    name: "Star Wars RPG - Ability",
    category: "Star Wars\u2122 RPG",
    foreground: "#00FF00",
    background: ["#3D9238", "#52B848", "#5EAC56", "#9ECB9A"],
    outline: "#000000",
    texture: "cloudy_2",
    description: "Star Wars\u2122 RPG Ability Dice"
  },
  swrpg_pro: {
    name: "Star Wars RPG - Proficiency",
    category: "Star Wars\u2122 RPG",
    foreground: "#FFFF00",
    background: ["#CABB1C", "#F9E33B", "#FFE900", "#F0E49D"],
    outline: "#000000",
    texture: "paper",
    description: "Star Wars\u2122 RPG Proficiency Dice"
  },
  swrpg_dif: {
    name: "Star Wars RPG - Difficulty",
    category: "Star Wars\u2122 RPG",
    foreground: "#8000FC",
    background: ["#39165F", "#664B84", "#50247E", "#745F88"],
    outline: "#000000",
    texture: "cloudy_2",
    description: "Star Wars\u2122 RPG Difficulty Dice"
  },
  swrpg_cha: {
    name: "Star Wars RPG - Challenge",
    category: "Star Wars\u2122 RPG",
    foreground: "#FF0000",
    background: ["#A91F32", "#EB4254", "#E51836", "#BA3645"],
    outline: "#000000",
    texture: "paper",
    description: "Star Wars\u2122 RPG Challenge Dice"
  },
  swrpg_boo: {
    name: "Star Wars RPG - Boost",
    category: "Star Wars\u2122 RPG",
    foreground: "#00FFFF",
    background: ["#4B9DC6", "#689FC4", "#85CFF2", "#8FC0D8"],
    outline: "#000000",
    texture: "glitter",
    description: "Star Wars\u2122 RPG Boost Dice"
  },
  swrpg_set: {
    name: "Star Wars RPG - Setback",
    category: "Star Wars\u2122 RPG",
    foreground: "#111111",
    background: ["#252223", "#241F21", "#282828", "#111111"],
    outline: "#ffffff",
    texture: "glitter",
    description: "Star Wars\u2122 RPG Setback Dice"
  },
  swrpg_for: {
    name: "Star Wars RPG - Force",
    category: "Star Wars\u2122 RPG",
    foreground: "#000000",
    background: ["#F3F3F3", "#D3D3D3", "#BABABA", "#FFFFFF"],
    outline: "#FFFFFF",
    texture: "stars",
    description: "Star Wars\u2122 RPG Force Dice"
  },
  swa_red: {
    name: "Armada Attack - Red",
    category: "Star Wars\u2122 Armada",
    foreground: "#ffffff",
    background: ["#440D19", "#8A1425", "#C72336", "#C04551"],
    outline: "none",
    texture: "stainedglass",
    description: "Star Wars\u2122 Armada Red Attack Dice"
  },
  swa_blue: {
    name: "Armada Attack - Blue",
    category: "Star Wars\u2122 Armada",
    foreground: "#ffffff",
    background: ["#212642", "#28286E", "#2B348C", "#3D4BB5", "#5D64AB"],
    outline: "none",
    texture: "stainedglass",
    description: "Star Wars\u2122 Armada Blue Attack Dice"
  },
  swa_black: {
    name: "Armada Attack - Black",
    category: "Star Wars\u2122 Armada",
    foreground: "#ffffff",
    background: ["#252223", "#241F21", "#282828", "#111111"],
    outline: "none",
    texture: "stainedglass",
    description: "Star Wars\u2122 Armada Black Attack Dice"
  },
  xwing_red: {
    name: "X-Wing Attack - Red",
    category: "Star Wars\u2122 X-Wing",
    foreground: "#ffffff",
    background: ["#440D19", "#8A1425", "#C72336", "#C04551"],
    outline: "none",
    texture: "stars",
    description: "Star Wars\u2122 X-Wing Red Attack Dice"
  },
  xwing_green: {
    name: "X-Wing Attack - Green",
    category: "Star Wars\u2122 X-Wing",
    foreground: "#ffffff",
    background: ["#3D9238", "#52B848", "#5EAC56", "#9ECB9A"],
    outline: "none",
    texture: "stars",
    description: "Star Wars\u2122 X-Wing Green Attack Dice"
  },
  swl_atkred: {
    name: "Legion Attack - Red",
    category: "Star Wars\u2122 Legion",
    foreground: "#ffffff",
    background: ["#440D19", "#8A1425", "#C72336", "#C04551"],
    outline: "none",
    texture: "fire",
    description: "Star Wars\u2122 Legion Red Attack Dice"
  },
  swl_atkblack: {
    name: "Legion Attack - Black",
    category: "Star Wars\u2122 Legion",
    foreground: "#ffffff",
    background: ["#252223", "#241F21", "#282828", "#111111"],
    outline: "none",
    texture: "fire",
    description: "Star Wars\u2122 Legion Black Attack Dice"
  },
  swl_atkwhite: {
    name: "Legion Attack - White",
    category: "Star Wars\u2122 Legion",
    foreground: "#000000",
    background: ["#ffffff", "#DFF4FA", "#BCBCBC", "#F1EDE2", "#F2ECE0"],
    outline: "none",
    texture: "fire",
    description: "Star Wars\u2122 Legion White Attack Dice"
  },
  swl_defred: {
    name: "Legion Defense - Red",
    category: "Star Wars\u2122 Legion",
    foreground: "#ffffff",
    background: ["#440D19", "#8A1425", "#C72336", "#C04551"],
    outline: "none",
    texture: "fire",
    description: "Star Wars\u2122 Legion Red Defense Dice"
  },
  swl_defwhite: {
    name: "Legion Defense - White",
    category: "Star Wars\u2122 Legion",
    foreground: "#000000",
    background: ["#ffffff", "#DFF4FA", "#BCBCBC", "#F1EDE2", "#F2ECE0"],
    outline: "none",
    texture: "fire",
    description: "Star Wars\u2122 Legion White Defense Dice"
  }
};
class Op {
  constructor(e = {}) {
    this.colorsets = {}, this.assetPath = e.assetPath, this.assetUrl = e.assetUrl;
  }
  async ImageLoader(e) {
    if (Array.isArray(e)) {
      for (let t = 0, n = e.length; t < n; t++)
        e[t] = await this.ImageLoader(e[t]);
      return e;
    }
    return e.source && e.source != "" && (e.texture = await this.loadImage(e.source)), e.source_bump && e.source_bump != "" && (e.bump = await this.loadImage(e.source_bump)), e;
  }
  loadImage(e) {
    return new Promise((t, n) => {
      let i = new Image();
      i.onload = () => t(i), i.crossOrigin = "anonymous", i.src = typeof this.assetUrl == "function" ? this.assetUrl(e) : this.assetPath + e, i.onerror = (s) => n(s);
    }).catch((t) => {
      console.error("Unable to load image texture");
    });
  }
  async getColorSet(e) {
    let t, n;
    if (typeof e == "string" && (t = e), typeof e == "object" && (t = e.colorset), this.colorsets.hasOwnProperty(t))
      return this.colorsets[t];
    let i = { ...po[t] };
    return n = e.texture || i.texture, i.texture = this.getTexture(n), i.texture = await this.ImageLoader(i.texture), e.material && (i.texture.material = e.material), this.colorsets[t] = i, i;
  }
  async makeColorSet(e = {}) {
    const t = `custom:${JSON.stringify(e)}`;
    if (this.colorsets.hasOwnProperty(t))
      return this.colorsets[t];
    let n = po.white, i = Object.assign({}, n, e), s = this.getTexture(i.texture);
    return i.texture = await this.ImageLoader(s), e.material && (i.texture.material = e.material), i.name.toLowerCase() === "white" && (i.name = `${Date.now()}`), this.colorsets[t] = i, i;
  }
  getTexture(e) {
    if (Array.isArray(e)) {
      let t = [];
      for (let n = 0, i = e.length; n < i; n++)
        t.push(this.getTexture(e[n]));
      return t;
    }
    return ks.hasOwnProperty(e) ? { ...ks[e] } : { ...ks.none };
  }
}
const Up = {
  default: {
    name: "Solid Color",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "wood_tray",
    colors: { fg: "#9794ff", bg: "#0b1a3e" },
    cubeMap: ["envmap.jpg", "envmap.jpg", "envmap.jpg", "envmap.jpg", "envmap.jpg", "envmap.jpg"]
  },
  "blue-felt": {
    name: "Blue Felt",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "felt",
    colors: { fg: "#9794ff", bg: "#0b1a3e" },
    cubeMap: ["envmap.jpg", "envmap.jpg", "envmap.jpg", "envmap.jpg", "envmap.jpg", "envmap.jpg"]
  },
  "red-felt": {
    name: "Red Felt",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "felt",
    colors: { fg: "#ff9494", bg: "#4d1e1e" },
    cubeMap: ["envmap.jpg", "envmap.jpg", "envmap.jpg", "envmap.jpg", "envmap.jpg", "envmap.jpg"]
  },
  "green-felt": {
    name: "Green Felt",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "felt",
    colors: { fg: "#97ff94", bg: "#244d1e" },
    cubeMap: ["envmap.jpg", "envmap.jpg", "envmap.jpg", "envmap.jpg", "envmap.jpg", "envmap.jpg"]
  },
  taverntable: {
    name: "Old Tavern Table",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "wood_table",
    colors: { fg: "#9794ff", bg: "#0b1a3e" },
    cubeMap: ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]
  },
  mahogany: {
    name: "(Mah-Hog-Any)",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "wood_table",
    colors: { fg: "#9794ff", bg: "#0b1a3e" },
    cubeMap: ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]
  },
  stainless: {
    name: "Stainless Steel",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "metal",
    colors: { fg: "#9794ff", bg: "#0b1a3e" },
    cubeMap: ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]
  },
  cyberpunk: {
    name: "Neo-New-Future-City",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "metal",
    colors: { fg: "#3494A6", bg: "#440B28" },
    cubeMap: ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]
  },
  cagetown: {
    name: "Cage Town",
    author: "MajorVictory",
    showColorPicker: !0,
    surface: "wood_table",
    colors: { fg: "#D7A866", bg: "#282811" },
    cubeMap: ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]
  }
}, Gp = (h) => {
  let e;
  return function() {
    let t = this, n = arguments;
    e && window.cancelAnimationFrame(e), e = window.requestAnimationFrame(function() {
      h.apply(t, n);
    });
  };
}, kp = 2.1, Xo = 0.15;
function Wp(h) {
  return Number.isFinite(h) ? Math.min(1, Math.max(0, h)) : 0;
}
function Vp({ width: h, height: e, strength: t = 1, spread: n = Xo, random: i = Math.random }) {
  const s = Math.max(1, Math.hypot(h, e)), o = i() * Math.PI * 2, r = { x: Math.cos(o) * s, y: Math.sin(o) * s }, a = 1 + Wp(n) * (i() * 2 - 1), l = kp * s * t * a;
  return { vector: r, dist: s, boost: l };
}
class Hp extends Io {
  constructor() {
    super();
    const e = new Qn();
    e.deleteAttribute("uv");
    const t = new js({ side: 1 }), n = new js(), i = new od(16777215, 5, 28, 2);
    i.position.set(0.418, 16.199, 0.3), this.add(i);
    const s = new ke(e, t);
    s.position.set(-0.757, 13.219, 0.717), s.scale.set(31.713, 28.305, 28.591), this.add(s);
    const o = new ke(e, n);
    o.position.set(-10.906, 2.009, 1.846), o.rotation.set(0, -0.195, 0), o.scale.set(2.328, 7.905, 4.651), this.add(o);
    const r = new ke(e, n);
    r.position.set(-5.607, -0.754, -0.758), r.rotation.set(0, 0.994, 0), r.scale.set(1.97, 1.534, 3.955), this.add(r);
    const a = new ke(e, n);
    a.position.set(6.167, 0.857, 7.803), a.rotation.set(0, 0.561, 0), a.scale.set(3.927, 6.285, 3.687), this.add(a);
    const l = new ke(e, n);
    l.position.set(-2.017, 0.018, 6.124), l.rotation.set(0, 0.333, 0), l.scale.set(2.002, 4.566, 2.064), this.add(l);
    const u = new ke(e, n);
    u.position.set(2.291, -0.756, -2.621), u.rotation.set(0, -0.286, 0), u.scale.set(1.546, 1.552, 1.496), this.add(u);
    const d = new ke(e, n);
    d.position.set(-2.193, -0.369, -5.547), d.rotation.set(0, 0.516, 0), d.scale.set(3.875, 3.487, 2.986), this.add(d);
    const c = new ke(e, jn(50));
    c.position.set(-16.116, 14.37, 8.208), c.scale.set(0.1, 2.428, 2.739), this.add(c);
    const m = new ke(e, jn(50));
    m.position.set(-16.109, 18.021, -8.207), m.scale.set(0.1, 2.425, 2.751), this.add(m);
    const g = new ke(e, jn(17));
    g.position.set(14.904, 12.198, -1.832), g.scale.set(0.15, 4.265, 6.331), this.add(g);
    const p = new ke(e, jn(43));
    p.position.set(-0.462, 8.89, 14.52), p.scale.set(4.38, 5.441, 0.088), this.add(p);
    const f = new ke(e, jn(20));
    f.position.set(3.235, 11.486, -12.541), f.scale.set(2.5, 2, 0.1), this.add(f);
    const v = new ke(e, jn(100));
    v.position.set(0, 20, 0), v.scale.set(1, 0.1, 1), this.add(v);
  }
}
function jn(h) {
  const e = new $s();
  return e.color.setScalar(h), e;
}
const mo = { coin: 6, metal: 12, plastic: 15, wood: 12 }, qp = { felt: 7, wood_table: 7, wood_tray: 7, metal: 9 }, Xp = ["theme_colorset", "theme_texture", "theme_material", "theme_customColorset"], jp = {
  assetPath: "./",
  framerate: 1 / 60,
  sounds: !1,
  volume: 100,
  color_spotlight: 15720405,
  shadows: !0,
  theme_surface: "green-felt",
  sound_dieMaterial: "plastic",
  theme_customColorset: null,
  theme_colorset: "white",
  theme_texture: "",
  theme_material: "glass",
  gravity_multiplier: 400,
  light_intensity: 0.7,
  baseScale: 100,
  strength: 1,
  throw_spread: Xo,
  throw_start: 0.9,
  wall_bounce: 1,
  shine: 0,
  label_glow: 0,
  assetUrl: null,
  iterationLimit: 1e3,
  onRollComplete: () => {
  },
  onRerollComplete: () => {
  },
  onAddDiceComplete: () => {
  },
  onRemoveDiceComplete: () => {
  }
};
class $p {
  constructor(e, t = {}) {
    this.initialized = !1, this.container = document.querySelector(e), this.dimensions = new Ce(this.container.clientWidth, this.container.clientHeight), this.adaptive_timestep = !1, this.last_time = 0, this.running = !1, this.rolling = !1, this.threadid, this.display = {
      currentWidth: null,
      currentHeight: null,
      containerWidth: null,
      containerHeight: null,
      aspect: null,
      scale: null
    }, this.cameraHeight = {
      max: null,
      close: null,
      medium: null,
      far: null
    }, this.scene = new Io(), this.world = new Cp(), this.dice_body_material = new En(), this.sounds_table = {}, this.sounds_dice = [], this.lastSoundType = "", this.lastSoundStep = 0, this.lastSound = 0, this.iteration, this.renderer, this.barrier, this.camera, this.light, this.light_amb, this.desk, this.box_body = {}, this.bodies = [], this.meshes = [], this.diceList = [], this.notationVectors = null, this.dieIndex = 0, this.soundDelay = 10, this.animstate = "", this.selector = {
      animate: !0,
      rotate: !0,
      intersected: null,
      dice: []
    }, Object.assign(this, jp, t), this.DiceColors = new Op({ assetPath: this.assetPath, assetUrl: this.assetUrl }), this.DiceFactory = new $i({
      baseScale: this.baseScale,
      shine: this.shine,
      label_glow: this.label_glow
    }), this.DiceFactory.setBumpMapping(!0), this.surface = Up[this.theme_surface].surface;
  }
  enableShadows() {
    this.shadows = !0, this.renderer && (this.renderer.shadowMap.enabled = this.shadows), this.light && (this.light.castShadow = this.shadows), this.desk && (this.desk.receiveShadow = this.shadows);
  }
  disableShadows() {
    this.shadows = !1, this.renderer && (this.renderer.shadowMap.enabled = this.shadows), this.light && (this.light.castShadow = this.shadows), this.desk && (this.desk.receiveShadow = this.shadows);
  }
  async initialize() {
    if (this.renderer = new Po({ antialias: !0, alpha: !0 }), this.container.appendChild(this.renderer.domElement), this.renderer.shadowMap.enabled = this.shadows, this.renderer.shadowMap.type = 2, this.renderer.setClearColor(0, 0), this.shine > 0) {
      const e = new Hs(this.renderer);
      this.scene.environment = e.fromScene(new Hp(), 0.04).texture, e.dispose();
    }
    this.setDimensions(this.dimensions), this.world.gravity.set(0, 0, -9.8 * this.gravity_multiplier), this.world.broadphase = new Oo(), this.world.solver.iterations = 14, this.world.allowSleep = !0, this.makeWorldBox(), this.resizeWorld(), await this.loadTheme({
      colorset: this.theme_colorset,
      texture: this.theme_texture,
      material: this.theme_material
    }).catch((e) => {
      throw new Error("Unable to load theme");
    }), this.sounds && await this.loadSounds().catch((e) => {
      throw new Error("Unable to load sounds");
    }), this.initialized = !0, this.renderer.render(this.scene, this.camera);
  }
  makeWorldBox() {
    Object.keys(this.box_body).length && (this.world.removeBody(this.box_body.desk), this.world.removeBody(this.box_body.topWall), this.world.removeBody(this.box_body.bottomWall), this.world.removeBody(this.box_body.leftWall), this.world.removeBody(this.box_body.rightWall));
    const e = new En(), t = new En();
    this.world.addContactMaterial(new Sn(e, this.dice_body_material, { mass: 0, friction: 0.6, restitution: 0.5 })), this.world.addContactMaterial(new Sn(t, this.dice_body_material, { mass: 0, friction: 0.6, restitution: this.wall_bounce })), this.world.addContactMaterial(new Sn(this.dice_body_material, this.dice_body_material, { mass: 0, friction: 0.6, restitution: 0.5 })), this.box_body.desk = new ie({ allowSleep: !1, mass: 0, shape: new li(), material: e }), this.world.addBody(this.box_body.desk), this.box_body.topWall = new ie({ allowSleep: !1, mass: 0, shape: new li(), material: t }), this.box_body.topWall.quaternion.setFromAxisAngle(new w(1, 0, 0), Math.PI / 2), this.box_body.topWall.position.set(0, this.display.containerHeight * 0.93, 0), this.world.addBody(this.box_body.topWall), this.box_body.bottomWall = new ie({ allowSleep: !1, mass: 0, shape: new li(), material: t }), this.box_body.bottomWall.quaternion.setFromAxisAngle(new w(1, 0, 0), -Math.PI / 2), this.box_body.bottomWall.position.set(0, -this.display.containerHeight * 0.93, 0), this.world.addBody(this.box_body.bottomWall), this.box_body.leftWall = new ie({ allowSleep: !1, mass: 0, shape: new li(), material: t }), this.box_body.leftWall.quaternion.setFromAxisAngle(new w(0, 1, 0), -Math.PI / 2), this.box_body.leftWall.position.set(this.display.containerWidth * 0.93, 0, 0), this.world.addBody(this.box_body.leftWall), this.box_body.rightWall = new ie({ allowSleep: !1, mass: 0, shape: new li(), material: t }), this.box_body.rightWall.quaternion.setFromAxisAngle(new w(0, 1, 0), Math.PI / 2), this.box_body.rightWall.position.set(-this.display.containerWidth * 0.93, 0, 0), this.world.addBody(this.box_body.rightWall);
  }
  async loadTheme(e) {
    let t;
    this.theme_customColorset ? t = await this.DiceColors.makeColorSet(this.theme_customColorset) : t = await this.DiceColors.getColorSet(e), this.DiceFactory.applyColorSet(t), this.colorData = t;
  }
  assetSource(e) {
    return typeof this.assetUrl == "function" ? this.assetUrl(e) : this.assetPath + e;
  }
  soundMaterial() {
    var n, i;
    const e = Array.isArray((n = this.colorData) == null ? void 0 : n.texture) ? this.colorData.texture[0] : (i = this.colorData) == null ? void 0 : i.texture, t = String((e == null ? void 0 : e.material) || "").match(/wood|metal/);
    return t ? t[0] : "plastic";
  }
  async loadSoundSet(e, t, n, i) {
    if (e.hasOwnProperty(t) || !n)
      return;
    e[t] = [];
    const s = await Promise.all(Array.from({ length: n }, (o, r) => this.loadAudio(this.assetSource(i(r + 1)))));
    e[t] = s.filter(Boolean);
  }
  async loadSounds() {
    this.sound_dieMaterial = this.soundMaterial(), await this.loadSoundSet(this.sounds_table, this.surface, qp[this.surface], (e) => `sounds/surfaces/surface_${this.surface}${e}.mp3`), await this.loadSoundSet(this.sounds_dice, "coin", mo.coin, (e) => `sounds/dicehit/dicehit_coin${e}.mp3`), await this.loadSoundSet(this.sounds_dice, this.sound_dieMaterial, mo[this.sound_dieMaterial], (e) => `sounds/dicehit/dicehit_${this.sound_dieMaterial}${e}.mp3`);
  }
  loadAudio(e) {
    return new Promise((t, n) => {
      let i = new Audio();
      setTimeout(() => t(void 0), 5e3), i.oncanplaythrough = () => t(i), i.crossOrigin = "anonymous", i.src = e, i.onerror = (s) => n(s);
    }).catch((t) => {
      console.error("Unable to load audio");
    });
  }
  async updateConfig(e = {}) {
    const t = Xp.some((n) => n in e);
    "theme_colorset" in e && !("theme_customColorset" in e) && (e = { ...e, theme_customColorset: null }), Object.assign(this, e), "gravity_multiplier" in e && this.world && this.world.gravity.set(0, 0, -9.8 * this.gravity_multiplier), "wall_bounce" in e && this.world && this.makeWorldBox(), "shadows" in e && (this.shadows ? this.enableShadows() : this.disableShadows()), "light_intensity" in e && this.light && (this.light.intensity = this.light_intensity), t && await this.loadTheme({
      colorset: this.theme_colorset,
      texture: this.theme_texture,
      material: this.theme_material
    }), this.sounds && (t || "sounds" in e) && this.initialized && await this.loadSounds();
  }
  celebrateDice(e = [], { color: t = 16763210, duration: n = 1800, sparks: i = 120 } = {}) {
    const s = e.map((c) => this.diceList[c]).filter(Boolean);
    if (!s.length || !this.renderer || typeof requestAnimationFrame != "function")
      return Promise.resolve();
    const o = new Ae(t), r = s.flatMap((c) => Array.isArray(c.material) ? c.material : [c.material]).filter((c) => c.emissive), a = r.map((c) => ({ map: c.emissiveMap, intensity: c.emissiveIntensity }));
    r.forEach((c) => {
      c.emissive = o.clone(), c.emissiveIntensity = 0, c.emissiveMap && (c.emissiveMap = null, c.needsUpdate = !0);
    });
    const l = this.display.scale * 5, u = this.sparkTexture(), d = s.map((c) => {
      const m = new Float32Array(i * 3), g = [];
      for (let _ = 0; _ < i; _++) {
        const b = Math.random() * Math.PI * 2, x = l * (0.45 + Math.random() * 0.75);
        g.push(new B(Math.cos(b) * x, Math.sin(b) * x, l * (0.4 + Math.random() * 0.9))), m.set([c.position.x, c.position.y, c.position.z], _ * 3);
      }
      const p = new Et();
      p.setAttribute("position", new Dt(m, 3));
      const f = new zo({ color: o, map: u, size: this.display.scale * 1.5, transparent: !0, opacity: 1, depthTest: !1, depthWrite: !1, blending: 2 }), v = new Qu(p, f);
      return this.scene.add(v), { mesh: c, points: v, positions: m, velocities: g, origin: c.position.clone(), scale: c.scale.clone() };
    });
    return new Promise((c) => {
      const m = performance.now(), g = (p) => {
        const f = Math.min(1, (p - m) / n), v = f * n / 1e3, _ = (0.5 + 0.5 * Math.cos(f * Math.PI * 6)) * (1 - f);
        if (r.forEach((b) => {
          b.emissiveIntensity = 0.25 + 0.75 * _;
        }), d.forEach(({ mesh: b, points: x, positions: M, velocities: S, origin: C, scale: y }) => {
          const A = f < 0.2 ? Math.sin(f / 0.2 * Math.PI) * 0.25 : 0;
          b.scale.set(y.x * (1 + A), y.y * (1 + A), y.z * (1 + A)), S.forEach((P, z) => {
            M[z * 3] = C.x + P.x * v, M[z * 3 + 1] = C.y + P.y * v, M[z * 3 + 2] = Math.max(0, C.z + P.z * v - l * 1.6 * v * v);
          }), x.geometry.attributes.position.needsUpdate = !0, x.material.opacity = 1 - f * f;
        }), this.renderer.render(this.scene, this.camera), f < 1) {
          requestAnimationFrame(g);
          return;
        }
        d.forEach(({ mesh: b, points: x, scale: M }) => {
          b.scale.copy(M), this.scene.remove(x), x.geometry.dispose(), x.material.dispose();
        }), r.forEach((b, x) => {
          a[x].map ? (b.emissiveMap = a[x].map, b.emissiveIntensity = Math.max(a[x].intensity, 0.6), b.needsUpdate = !0) : b.emissiveIntensity = 0.25;
        }), this.renderer.render(this.scene, this.camera), c();
      };
      requestAnimationFrame(g);
    });
  }
  sparkTexture() {
    if (this.sparkMap)
      return this.sparkMap;
    const e = document.createElement("canvas");
    e.width = 64, e.height = 64;
    const t = e.getContext("2d"), n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
    return n.addColorStop(0, "rgba(255,255,255,1)"), n.addColorStop(0.2, "rgba(255,245,215,0.95)"), n.addColorStop(0.5, "rgba(255,215,120,0.35)"), n.addColorStop(1, "rgba(255,190,80,0)"), t.fillStyle = n, t.fillRect(0, 0, 64, 64), this.sparkMap = new Yi(e), this.sparkMap;
  }
  fadeDice(e = [], t = 0.3, n = 900) {
    const i = e.map((a) => this.diceList[a]).filter(Boolean), s = i.flatMap((a) => Array.isArray(a.material) ? a.material : [a.material]), o = s.map((a) => a.opacity);
    s.forEach((a) => {
      a.transparent = !0;
    });
    const r = (a) => {
      const l = a * a * (3 - 2 * a);
      s.forEach((u, d) => {
        u.opacity = o[d] + (t - o[d]) * l;
      }), this.renderer && this.renderer.render(this.scene, this.camera);
    };
    return new Promise((a) => {
      const l = () => {
        r(1), i.forEach((c) => {
          c.castShadow = t >= 0.6;
        }), this.renderer && this.renderer.render(this.scene, this.camera), a();
      };
      if (!i.length || !(n > 0) || typeof requestAnimationFrame != "function") {
        l();
        return;
      }
      const u = performance.now(), d = (c) => {
        const m = Math.min(1, (c - u) / n);
        if (m >= 1) {
          l();
          return;
        }
        r(m), requestAnimationFrame(d);
      };
      requestAnimationFrame(d);
    });
  }
  setDimensions(e) {
    switch (this.display.currentWidth = this.container.clientWidth / 2, this.display.currentHeight = this.container.clientHeight / 2, e ? (this.display.containerWidth = e.x, this.display.containerHeight = e.y) : (this.display.containerWidth = this.display.currentWidth, this.display.containerHeight = this.display.currentHeight), this.display.aspect = Math.min(this.display.currentWidth / this.display.containerWidth, this.display.currentHeight / this.display.containerHeight), this.display.scale = Math.sqrt(this.display.containerWidth * this.display.containerWidth + this.display.containerHeight * this.display.containerHeight) / 13, this.makeWorldBox(), this.renderer.setSize(this.display.currentWidth * 2, this.display.currentHeight * 2), this.cameraHeight.max = this.display.currentHeight / this.display.aspect / Math.tan(10 * Math.PI / 180), this.cameraHeight.medium = this.cameraHeight.max / 1.5, this.cameraHeight.far = this.cameraHeight.max, this.cameraHeight.close = this.cameraHeight.max / 2, this.camera && this.scene.remove(this.camera), this.camera = new dt(20, this.display.currentWidth / this.display.currentHeight, 1, this.cameraHeight.max * 1.3), this.animstate) {
      case "selector":
        this.camera.position.z = this.selector.dice.length > 9 ? this.cameraHeight.far : this.selector.dice.length < 6 ? this.cameraHeight.close : this.cameraHeight.medium;
        break;
      case "throw":
      case "afterthrow":
      default:
        this.camera.position.z = this.cameraHeight.far;
    }
    this.camera.lookAt(new B(0, 0, 0));
    const t = Math.max(this.display.containerWidth, this.display.containerHeight);
    this.light && this.scene.remove(this.light), this.light_amb && this.scene.remove(this.light_amb), this.light = new sd(this.color_spotlight, this.light_intensity), this.light.position.set(-t / 2, t / 2, t * 3), this.light.target.position.set(0, 0, 0), this.light.distance = t * 5, this.light.angle = Math.PI / 4, this.light.castShadow = this.shadows, this.light.shadow.camera.near = t / 10, this.light.shadow.camera.far = t * 5, this.light.shadow.camera.fov = 50, this.light.shadow.bias = 1e-3, this.light.shadow.mapSize.width = 1024, this.light.shadow.mapSize.height = 1024, this.scene.add(this.light), this.light_amb = new nd(16777147, 6776689, this.light_intensity), this.scene.add(this.light_amb), this.desk && this.scene.remove(this.desk);
    let n = new ed();
    n.opacity = 0.5, this.desk = new ke(new Ji(this.display.containerWidth * 6, this.display.containerHeight * 6, 1, 1), n), this.desk.receiveShadow = this.shadows, this.scene.add(this.desk), this.renderer.render(this.scene, this.camera);
  }
  resizeWorld() {
    const t = Gp(() => {
      const n = this.renderer.domElement, i = this.container.clientWidth, s = this.container.clientHeight, o = n.width !== i || n.height !== s;
      return o && this.setDimensions(new Ce(this.container.clientWidth, this.container.clientHeight)), o;
    });
    window.addEventListener("resize", t);
  }
  vectorRand({ x: e, y: t }) {
    let n = Math.random() * Math.PI / 5 - Math.PI / 5 / 2, i = {
      x: e * Math.cos(n) - t * Math.sin(n),
      y: e * Math.sin(n) + t * Math.cos(n)
    };
    return i.x == 0 && (i.x = 0.01), i.y == 0 && (i.y = 0.01), i;
  }
  getNotationVectors(e, t, n, i) {
    let s = new fo(e);
    for (let o in s.set) {
      const r = this.DiceFactory.get(s.set[o].type);
      let a = s.set[o].num, l = s.set[o].op, u = s.set[o].sid, d = s.set[o].gid, c = s.set[o].glvl, m = s.set[o].func, g = s.set[o].args;
      for (let p = 0; p < a; p++) {
        let f = this.vectorRand(t);
        f.x /= i, f.y /= i;
        let v = {
          x: this.display.containerWidth * (f.x > 0 ? -1 : 1) * this.throw_start,
          y: this.display.containerHeight * (f.y > 0 ? -1 : 1) * this.throw_start,
          z: Math.random() * 200 + 200
        }, _ = Math.abs(f.x / f.y);
        _ > 1 ? v.y /= _ : v.x *= _;
        let b = this.vectorRand(t);
        b.x /= i, b.y /= i;
        let x, M, S;
        r.shape != "d2" ? (x = {
          x: b.x * n,
          y: b.y * n,
          z: -10
        }, M = {
          x: -(Math.random() * f.y * 5 + r.inertia * f.y),
          y: Math.random() * f.x * 5 + r.inertia * f.x,
          z: 0
        }, S = {
          x: Math.random(),
          y: Math.random(),
          z: Math.random(),
          a: Math.random()
        }) : (x = {
          x: b.x * n / 10,
          y: b.y * n / 10,
          z: 3e3
        }, M = {
          x: 12 * r.inertia,
          y: 1 * r.inertia,
          z: 0
        }, S = {
          x: 1,
          y: 1,
          z: Math.random(),
          a: Math.random()
        }), s.vectors.push({
          index: this.dieIndex++,
          type: r.type,
          op: l,
          sid: u,
          gid: d,
          glvl: c,
          func: m,
          args: g,
          pos: v,
          velocity: x,
          angle: M,
          axis: S
        });
      }
    }
    return s;
  }
  swapDiceFace(e, t) {
    const n = this.DiceFactory.get(e.notation.type);
    if (e.resultReason = "forced", n.shape == "d4") {
      this.swapDiceFace_D4(e, t);
      return;
    }
    n.values;
    let i = parseInt(e.getLastValue().value);
    t = parseInt(t), e.notation.type == "d10" && i == 0 && (i = 10), e.notation.type == "d100" && i == 0 && (i = 100), e.notation.type == "d100" && i > 0 && i < 10 && (i *= 10), e.notation.type == "d10" && t == 0 && (t = 10), e.notation.type == "d100" && t == 0 && (t = 100), e.notation.type == "d100" && t > 0 && t < 10 && (t *= 10);
    let s = n.values.indexOf(i), o = n.values.indexOf(t);
    if (s < 0 || o < 0 || s == o)
      return;
    let r = e.geometry.clone(), a = [], l = [], u = 2;
    n.shape == "d10" && (u = 1);
    let d, c = o + u;
    n.shape != "d2" ? (d = s + u, c = o + u) : (d = s + 1, c = o + 1);
    for (var m = 0, g = r.groups.length; m < g; ++m) {
      const f = r.groups[m].materialIndex;
      if (f == d) {
        a.push(m);
        continue;
      }
      if (f == c) {
        l.push(m);
        continue;
      }
    }
    if (!(a.length <= 0 || l.length <= 0)) {
      for (let p = 0, f = l.length; p < f; p++)
        r.groups[l[p]].materialIndex = d;
      for (let p = 0, f = a.length; p < f; p++)
        r.groups[a[p]].materialIndex = c;
      e.geometry = r, e.result = [];
    }
  }
  swapDiceFace_D4(e, t) {
    const n = this.DiceFactory.get(e.notation.type);
    let i = parseInt(e.getLastValue().value);
    if (t = parseInt(t), !(i >= 1 && i <= 4))
      return;
    let s = t - i, o = e.geometry.clone();
    for (let r = 0, a = o.groups.length; r < a; ++r) {
      const l = o.groups[r];
      let u = l.materialIndex;
      if (u != 0) {
        for (u += s - 1; u > 4; )
          u -= 4;
        for (; u < 1; )
          u += 4;
        l.materialIndex = u + 1;
      }
    }
    s != 0 && (s < 0 && (s += 4), e.material = this.DiceFactory.createMaterials(n, 0, 0, !1, s)), e.geometry = o;
  }
  spawnDice(e, t = !1) {
    var a, l, u;
    const { pos: n, axis: i, angle: s, velocity: o } = e;
    let r;
    if (t)
      r = t, r.stopped = 0, this.world.removeBody(r.body);
    else {
      const d = this.diceList.length, c = (a = this.dieLooks) == null ? void 0 : a[d];
      if (c && this.DiceFactory.applyColorSet(c), r = this.DiceFactory.create(e.type, this.colorData, (u = (l = this.dieLabels) == null ? void 0 : l[d]) != null ? u : null), c && this.DiceFactory.applyColorSet(this.colorData), !r)
        return;
      r.notation = e, r.result = [], r.stopped = 0, r.castShadow = this.shadows, this.scene.add(r), this.diceList.push(r);
    }
    r.body = new ie({ allowSleep: !0, sleepSpeedLimit: 75, sleepTimeLimit: 0.9, mass: r.mass, shape: r.geometry.cannon_shape, material: this.dice_body_material }), r.body.type = ie.DYNAMIC, r.body.position.set(n.x, n.y, n.z), r.body.quaternion.setFromAxisAngle(new w(i.x, i.y, i.z), i.a * Math.PI * 2), r.body.angularVelocity.set(s.x, s.y, s.z), r.body.velocity.set(o.x, o.y, o.z), r.body.linearDamping = 0.1, r.body.angularDamping = 0.1, r.body.diceShape = r.shape, r.body.sleepState = 0, r.body.addEventListener("collide", this.eventCollide.bind(this)), this.world.addBody(r.body);
  }
  eventCollide({ body: e, target: t }) {
    if (this.animstate == "simulate" || !this.sounds || !e || this.volume <= 0)
      return;
    let n = Date.now(), i = e.mass > 0 ? "dice" : "table";
    if (!((this.lastSoundStep == e.world.stepnumber || this.lastSound > n) && i != "dice") && !((this.lastSoundStep == e.world.stepnumber || this.lastSound > n) && i == "dice" && this.lastSoundType == "dice")) {
      if (e.mass > 0) {
        let s = e.velocity.length();
        if (s < 250)
          return;
        let o;
        const r = this.sounds_dice[e.diceShape === "d2" ? "coin" : this.sound_dieMaterial] || [];
        o = r[Math.floor(Math.random() * r.length)], o && (o.volume = Math.min(s / 8e3, this.volume / 100), o.play().catch((a) => {
        })), this.lastSoundType = "dice";
      } else {
        let s = t.velocity.length();
        if (s < 250)
          return;
        let o = this.surface, r = this.sounds_table[o] || [], a = r[Math.floor(Math.random() * r.length)];
        a && (a.volume = Math.min(s / 8e3, this.volume / 100), a.play().catch((l) => {
        })), this.lastSoundType = "table";
      }
      this.lastSoundStep = e.world.stepnumber, this.lastSound = n + this.soundDelay;
    }
  }
  checkForRethrow(e) {
    let t = e.notation.func ? e.notation.func.toLowerCase() : "", n, i = !1;
    if (t != "" && n && n.method) {
      t = e.notation.func.toLowerCase();
      let s = e.notation.args || "";
      i = n.method(e, s);
    }
    return i;
  }
  throwFinished() {
    const e = this.iteration > this.iterationLimit;
    for (let t = 0, n = this.diceList.length; t < n; ++t) {
      const i = this.diceList[t], s = ie.SLEEPING;
      if (i.body.sleepState < s && !e)
        return !1;
      if (i.body.sleepState == s || e) {
        if (i.body.type === ie.KINEMATIC)
          continue;
        let o = !1;
        if (i.result.length == 0 ? (i.storeRolledValue(i.resultReason), o = this.checkForRethrow(i)) : i.result.length > 0 && i.rerolling && (i.rerolling = !1, i.storeRolledValue("reroll"), o = this.checkForRethrow(i)), o)
          return i.rerolls += 1, i.rerolling = !0, i.body.wakeUp(), i.body.type = ie.DYNAMIC, i.body.angularVelocity = new w(25, 25, 25), i.body.velocity = new w(0, 0, 3e3), !1;
        i.rerolling = !1, i.body.type = ie.KINEMATIC;
      }
    }
    return !0;
  }
  simulateThrow() {
    for (this.animstate = "simulate", this.iteration = 0, this.rolling = !0; !this.throwFinished(!0); )
      ++this.iteration, this.world.step(this.framerate);
  }
  animateThrow(e, t) {
    this.animstate = "throw";
    let n = Date.now();
    this.last_time = this.last_time || n - this.framerate * 1e3;
    let i = (n - this.last_time) / 1e3;
    ++this.iteration;
    let s = Math.floor(i / this.framerate);
    for (let o = 0; o < s; o++)
      this.world.step(this.framerate), ++this.steps;
    for (let o in this.scene.children) {
      let r = this.scene.children[o];
      r.body != null && (r.position.copy(r.body.position), r.quaternion.copy(r.body.quaternion));
    }
    if (this.renderer.render(this.scene, this.camera), this.last_time = this.last_time + s * this.framerate * 1e3, this.running == e && this.throwFinished()) {
      this.running = !1, this.rolling = !1, t && t.call(this, this.notationVectors), this.running = Date.now(), this.animateAfterThrow(this.running);
      return;
    }
    this.running == e && ((o, r, a, l, u) => {
      !a && i < this.framerate ? setTimeout(() => {
        requestAnimationFrame(() => {
          o.call(this, r, l, u);
        });
      }, (this.framerate - i) * 1e3) : requestAnimationFrame(() => {
        o.call(this, r, l, u);
      });
    }).bind(this)(this.animateThrow, e, this.adaptive_timestep, t);
  }
  animateAfterThrow(e) {
    this.animstate = "afterthrow";
    let t = Date.now(), n = (t - this.last_time) / 1e3;
    n > 3 && (n = this.framerate), this.running = !1, this.last_time = t, this.renderer.render(this.scene, this.camera), this.running == e && ((i, s, o) => {
      !o && n < this.framerate ? setTimeout(() => {
        requestAnimationFrame(() => {
          i.call(this, s);
        });
      }, (this.framerate - n) * 1e3) : requestAnimationFrame(() => {
        i.call(this, s);
      });
    }).bind(this)(this.animateAfterThrow, e, this.adaptive_timestep);
  }
  startClickThrow(e) {
    this.rolling && (this.clearDice(), this.rolling = !1);
    const { vector: t, dist: n, boost: i } = Vp({
      width: this.display.currentWidth,
      height: this.display.currentHeight,
      strength: this.strength,
      spread: this.throw_spread
    });
    return this.getNotationVectors(e, t, i, n);
  }
  clearDice() {
    this.running = !1;
    let e;
    for (; e = this.diceList.pop(); )
      this.scene.remove(e), e.body && this.world.removeBody(e.body);
    this.renderer.render(this.scene, this.camera), setTimeout(() => {
      this.renderer.render(this.scene, this.camera);
    }, 100);
  }
  getDiceResults(e) {
    if (e !== void 0)
      return {
        type: this.diceList[e].shape,
        sides: parseInt(this.diceList[e].shape.substring(1)),
        id: e,
        ...this.diceList[e].result.at(-1)
      };
    let t = 0;
    const n = this.notationVectors.constant ? parseInt(`${this.notationVectors.op}${this.notationVectors.constant}`) : 0;
    let i = n;
    return {
      notation: this.notationVectors.notation,
      sets: this.notationVectors.set.map((o) => {
        const r = t + o.num - 1;
        let a = 0;
        const l = [];
        for (let d = t; d <= r; d++) {
          if (this.diceList[t].result.at(-1).reason === "remove") {
            t++;
            continue;
          }
          l.push({
            type: o.type,
            sides: parseInt(o.type.substring(1)),
            id: t,
            ...this.diceList[t].result.at(-1)
          }), a += this.diceList[t].result.at(-1).value, t++;
        }
        const u = {
          num: o.num,
          type: o.type,
          sides: parseInt(o.type.substring(1)),
          rolls: l,
          total: a
        };
        return i += a, u;
      }),
      modifier: n,
      total: i
    };
  }
  async roll(e, { looks: t = null } = {}) {
    if (this.dieLooks = t ? await Promise.all(t.map((n) => n ? this.DiceColors.makeColorSet(n) : null)) : null, this.dieLabels = t ? t.map((n) => {
      var i;
      return (i = n == null ? void 0 : n.labels) != null ? i : null;
    }) : null, this.notationVectors = this.startClickThrow(e), this.notationVectors)
      return new Promise((n, i) => {
        this.rollDice(() => {
          const s = this.getDiceResults();
          this.onRollComplete(s);
          const o = new CustomEvent("rollComplete", { detail: s });
          document.dispatchEvent(o), n(s);
        });
      });
  }
  async reroll(e) {
    return this.rolling = !0, this.running = Date.now(), this.iteration = 0, new Promise((t, n) => {
      e.forEach((i) => {
        const s = this.diceList[i];
        s.rerolls += 1, s.rerolling = !0, s.body.wakeUp(), s.body.type = ie.DYNAMIC, s.body.angularVelocity = new w(25, 25, 25), s.body.velocity = new w(0, 0, 3e3);
      }), this.animateThrow(this.running, () => {
        const i = e.map((o) => this.getDiceResults(o));
        this.onRerollComplete(i);
        const s = new CustomEvent("rerollComplete", { detail: i });
        document.dispatchEvent(s), t(i);
      });
    });
  }
  async add(e) {
    let t = this.diceList.length;
    if (!t)
      return this.roll(e);
    let n = this.startClickThrow(e), i = [];
    for (let s = 0, o = n.vectors.length; s < o; ++s)
      this.spawnDice(n.vectors[s]);
    this.simulateThrow(), this.steps = 0, this.iteration = 0;
    for (let s = 0, o = n.vectors.length; s < o; ++s) {
      const r = t + s;
      !this.diceList[r] || (this.spawnDice(n.vectors[s], this.diceList[r]), i.push(r));
    }
    if (n.result && n.result.length > 0)
      for (let s = 0; s < n.result.length; s++) {
        const o = t + s;
        let r = this.diceList[o];
        !r || r.getLastValue().value != n.result[s] && this.swapDiceFace(r, n.result[s]);
      }
    return this.notationVectors = fo.mergeNotation(this.notationVectors, n), new Promise((s, o) => {
      const r = () => {
        const a = i.map((u) => this.getDiceResults(u));
        this.onAddDiceComplete(a);
        const l = new CustomEvent("addDiceComplete", { detail: a });
        document.dispatchEvent(l), s(a);
      };
      this.rolling = !0, this.running = Date.now(), this.last_time = 0, this.animateThrow(this.running, r);
    });
  }
  async remove(e) {
    return new Promise((t, n) => {
      const i = [];
      e.forEach((o) => {
        const r = this.diceList[o];
        r.body && this.world.removeBody(r.body), this.scene.remove(r), r.storeRolledValue("remove"), i.push(this.getDiceResults(o));
      }), this.renderer.render(this.scene, this.camera), this.onRemoveDiceComplete(i);
      const s = new CustomEvent("removeDiceComplete", { detail: i });
      document.dispatchEvent(s), t(i);
    });
  }
  rollDice(e) {
    if (this.notationVectors.error) {
      e.call(this);
      return;
    }
    this.clearDice();
    for (let t = 0, n = this.notationVectors.vectors.length; t < n; ++t)
      this.spawnDice(this.notationVectors.vectors[t]);
    this.simulateThrow(), this.steps = 0, this.iteration = 0;
    for (let t = 0, n = this.diceList.length; t < n; ++t)
      !this.diceList[t] || this.spawnDice(this.notationVectors.vectors[t], this.diceList[t]);
    if (this.notationVectors.result && this.notationVectors.result.length > 0)
      for (let t = 0; t < this.notationVectors.result.length; t++) {
        let n = this.diceList[t];
        !n || n.getLastValue().value != this.notationVectors.result[t] && this.swapDiceFace(n, this.notationVectors.result[t]);
      }
    this.rolling = !0, this.running = Date.now(), this.last_time = 0, this.animateThrow(this.running, e);
  }
}
export {
  $p as default
};
