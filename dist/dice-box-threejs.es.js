var Pa = Object.defineProperty;
var Ia = (c, e, t) => e in c ? Pa(c, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[e] = t;
var Ar = (c, e, t) => (Ia(c, typeof e != "symbol" ? e + "" : e, t), t);
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const mr = "143";
const en = "srgb", Mn = "srgb-linear";
const Tr = "300 es";
class si {
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
const st = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], vs = Math.PI / 180, lr = 180 / Math.PI;
function fn() {
  const c = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (st[c & 255] + st[c >> 8 & 255] + st[c >> 16 & 255] + st[c >> 24 & 255] + "-" + st[e & 255] + st[e >> 8 & 255] + "-" + st[e >> 16 & 15 | 64] + st[e >> 24 & 255] + "-" + st[t & 63 | 128] + st[t >> 8 & 255] + "-" + st[t >> 16 & 255] + st[t >> 24 & 255] + st[n & 255] + st[n >> 8 & 255] + st[n >> 16 & 255] + st[n >> 24 & 255]).toLowerCase();
}
function xt(c, e, t) {
  return Math.max(e, Math.min(t, c));
}
function Ba(c, e) {
  return (c % e + e) % e;
}
function xs(c, e, t) {
  return (1 - t) * c + t * e;
}
function Cr(c) {
  return (c & c - 1) === 0 && c !== 0;
}
function cr(c) {
  return Math.pow(2, Math.floor(Math.log(c) / Math.LN2));
}
class be {
  constructor(e = 0, t = 0) {
    be.prototype.isVector2 = !0, this.x = e, this.y = t;
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
class Tt {
  constructor() {
    Tt.prototype.isMatrix3 = !0, this.elements = [
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
  set(e, t, n, i, s, o, r, l, a) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = r, h[3] = t, h[4] = s, h[5] = l, h[6] = n, h[7] = o, h[8] = a, this;
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
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], r = n[3], l = n[6], a = n[1], h = n[4], d = n[7], u = n[2], m = n[5], g = n[8], p = i[0], f = i[3], _ = i[6], v = i[1], y = i[4], x = i[7], M = i[2], S = i[5], C = i[8];
    return s[0] = o * p + r * v + l * M, s[3] = o * f + r * y + l * S, s[6] = o * _ + r * x + l * C, s[1] = a * p + h * v + d * M, s[4] = a * f + h * y + d * S, s[7] = a * _ + h * x + d * C, s[2] = u * p + m * v + g * M, s[5] = u * f + m * y + g * S, s[8] = u * _ + m * x + g * C, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], r = e[5], l = e[6], a = e[7], h = e[8];
    return t * o * h - t * r * a - n * s * h + n * r * l + i * s * a - i * o * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], r = e[5], l = e[6], a = e[7], h = e[8], d = h * o - r * a, u = r * l - h * s, m = a * s - o * l, g = t * d + n * u + i * m;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / g;
    return e[0] = d * p, e[1] = (i * a - h * n) * p, e[2] = (r * n - i * o) * p, e[3] = u * p, e[4] = (h * t - i * l) * p, e[5] = (i * s - r * t) * p, e[6] = m * p, e[7] = (n * l - a * t) * p, e[8] = (o * t - n * s) * p, this;
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
    const l = Math.cos(s), a = Math.sin(s);
    return this.set(
      n * l,
      n * a,
      -n * (l * o + a * r) + o + e,
      -i * a,
      i * l,
      -i * (-a * o + l * r) + r + t,
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
    const t = Math.cos(e), n = Math.sin(e), i = this.elements, s = i[0], o = i[3], r = i[6], l = i[1], a = i[4], h = i[7];
    return i[0] = t * s + n * l, i[3] = t * o + n * a, i[6] = t * r + n * h, i[1] = -n * s + t * l, i[4] = -n * o + t * a, i[7] = -n * r + t * h, this;
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
function qo(c) {
  for (let e = c.length - 1; e >= 0; --e)
    if (c[e] > 65535)
      return !0;
  return !1;
}
function cs(c) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", c);
}
function Sn(c) {
  return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
}
function os(c) {
  return c < 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
}
const ys = {
  [en]: { [Mn]: Sn },
  [Mn]: { [en]: os }
}, Ct = {
  legacyMode: !0,
  get workingColorSpace() {
    return Mn;
  },
  set workingColorSpace(c) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(c, e, t) {
    if (this.legacyMode || e === t || !e || !t)
      return c;
    if (ys[e] && ys[e][t] !== void 0) {
      const n = ys[e][t];
      return c.r = n(c.r), c.g = n(c.g), c.b = n(c.b), c;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(c, e) {
    return this.convert(c, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(c, e) {
    return this.convert(c, e, this.workingColorSpace);
  }
}, Xo = {
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
}, Ke = { r: 0, g: 0, b: 0 }, Lt = { h: 0, s: 0, l: 0 }, Ci = { h: 0, s: 0, l: 0 };
function ws(c, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? c + (e - c) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? c + (e - c) * 6 * (2 / 3 - t) : c;
}
function Li(c, e) {
  return e.r = c.r, e.g = c.g, e.b = c.b, e;
}
class xe {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = en) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ct.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = Mn) {
    return this.r = e, this.g = t, this.b = n, Ct.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = Mn) {
    if (e = Ba(e, 1), t = xt(t, 0, 1), n = xt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = ws(o, s, e + 1 / 3), this.g = ws(o, s, e), this.b = ws(o, s, e - 1 / 3);
    }
    return Ct.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = en) {
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
            return this.r = Math.min(255, parseInt(s[1], 10)) / 255, this.g = Math.min(255, parseInt(s[2], 10)) / 255, this.b = Math.min(255, parseInt(s[3], 10)) / 255, Ct.toWorkingColorSpace(this, t), n(s[4]), this;
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
            return this.r = Math.min(100, parseInt(s[1], 10)) / 100, this.g = Math.min(100, parseInt(s[2], 10)) / 100, this.b = Math.min(100, parseInt(s[3], 10)) / 100, Ct.toWorkingColorSpace(this, t), n(s[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
            const l = parseFloat(s[1]) / 360, a = parseInt(s[2], 10) / 100, h = parseInt(s[3], 10) / 100;
            return n(s[4]), this.setHSL(l, a, h, t);
          }
          break;
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], o = s.length;
      if (o === 3)
        return this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255, this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255, this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255, Ct.toWorkingColorSpace(this, t), this;
      if (o === 6)
        return this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255, this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255, this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255, Ct.toWorkingColorSpace(this, t), this;
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = en) {
    const n = Xo[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Sn(e.r), this.g = Sn(e.g), this.b = Sn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = os(e.r), this.g = os(e.g), this.b = os(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = en) {
    return Ct.fromWorkingColorSpace(Li(this, Ke), e), xt(Ke.r * 255, 0, 255) << 16 ^ xt(Ke.g * 255, 0, 255) << 8 ^ xt(Ke.b * 255, 0, 255) << 0;
  }
  getHexString(e = en) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Mn) {
    Ct.fromWorkingColorSpace(Li(this, Ke), t);
    const n = Ke.r, i = Ke.g, s = Ke.b, o = Math.max(n, i, s), r = Math.min(n, i, s);
    let l, a;
    const h = (r + o) / 2;
    if (r === o)
      l = 0, a = 0;
    else {
      const d = o - r;
      switch (a = h <= 0.5 ? d / (o + r) : d / (2 - o - r), o) {
        case n:
          l = (i - s) / d + (i < s ? 6 : 0);
          break;
        case i:
          l = (s - n) / d + 2;
          break;
        case s:
          l = (n - i) / d + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = a, e.l = h, e;
  }
  getRGB(e, t = Mn) {
    return Ct.fromWorkingColorSpace(Li(this, Ke), t), e.r = Ke.r, e.g = Ke.g, e.b = Ke.b, e;
  }
  getStyle(e = en) {
    return Ct.fromWorkingColorSpace(Li(this, Ke), e), e !== en ? `color(${e} ${Ke.r} ${Ke.g} ${Ke.b})` : `rgb(${Ke.r * 255 | 0},${Ke.g * 255 | 0},${Ke.b * 255 | 0})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Lt), Lt.h += e, Lt.s += t, Lt.l += n, this.setHSL(Lt.h, Lt.s, Lt.l), this;
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
    this.getHSL(Lt), e.getHSL(Ci);
    const n = xs(Lt.h, Ci.h, t), i = xs(Lt.s, Ci.s, t), s = xs(Lt.l, Ci.l, t);
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
xe.NAMES = Xo;
let Pn;
class jo {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Pn === void 0 && (Pn = cs("canvas")), Pn.width = e.width, Pn.height = e.height;
      const n = Pn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Pn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = cs("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let o = 0; o < s.length; o++)
        s[o] = Sn(s[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Sn(t[n] / 255) * 255) : t[n] = Sn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class Yo {
  constructor(e = null) {
    this.isSource = !0, this.uuid = fn(), this.data = e, this.version = 0;
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
          i[o].isDataTexture ? s.push(bs(i[o].image)) : s.push(bs(i[o]));
      } else
        s = bs(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function bs(c) {
  return typeof HTMLImageElement < "u" && c instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && c instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && c instanceof ImageBitmap ? jo.getDataURL(c) : c.data ? {
    data: Array.from(c.data),
    width: c.width,
    height: c.height,
    type: c.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let za = 0;
class wt extends si {
  constructor(e = wt.DEFAULT_IMAGE, t = wt.DEFAULT_MAPPING, n = 1001, i = 1001, s = 1006, o = 1008, r = 1023, l = 1009, a = 1, h = 3e3) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: za++ }), this.uuid = fn(), this.name = "", this.source = new Yo(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = o, this.anisotropy = a, this.format = r, this.internalFormat = null, this.type = l, this.offset = new be(0, 0), this.repeat = new be(1, 1), this.center = new be(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Tt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
wt.DEFAULT_IMAGE = null;
wt.DEFAULT_MAPPING = 300;
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
    const l = e.elements, a = l[0], h = l[4], d = l[8], u = l[1], m = l[5], g = l[9], p = l[2], f = l[6], _ = l[10];
    if (Math.abs(h - u) < 0.01 && Math.abs(d - p) < 0.01 && Math.abs(g - f) < 0.01) {
      if (Math.abs(h + u) < 0.1 && Math.abs(d + p) < 0.1 && Math.abs(g + f) < 0.1 && Math.abs(a + m + _ - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const y = (a + 1) / 2, x = (m + 1) / 2, M = (_ + 1) / 2, S = (h + u) / 4, C = (d + p) / 4, w = (g + f) / 4;
      return y > x && y > M ? y < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(y), i = S / n, s = C / n) : x > M ? x < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(x), n = S / i, s = w / i) : M < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(M), n = C / s, i = w / s), this.set(n, i, s, t), this;
    }
    let v = Math.sqrt((f - g) * (f - g) + (d - p) * (d - p) + (u - h) * (u - h));
    return Math.abs(v) < 1e-3 && (v = 1), this.x = (f - g) / v, this.y = (d - p) / v, this.z = (u - h) / v, this.w = Math.acos((a + m + _ - 1) / 2), this;
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
class Cn extends si {
  constructor(e, t, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ge(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ge(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    this.texture = new wt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : 1006, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
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
    return this.texture.source = new Yo(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class $o extends wt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Na extends wt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class ri {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, o, r) {
    let l = n[i + 0], a = n[i + 1], h = n[i + 2], d = n[i + 3];
    const u = s[o + 0], m = s[o + 1], g = s[o + 2], p = s[o + 3];
    if (r === 0) {
      e[t + 0] = l, e[t + 1] = a, e[t + 2] = h, e[t + 3] = d;
      return;
    }
    if (r === 1) {
      e[t + 0] = u, e[t + 1] = m, e[t + 2] = g, e[t + 3] = p;
      return;
    }
    if (d !== p || l !== u || a !== m || h !== g) {
      let f = 1 - r;
      const _ = l * u + a * m + h * g + d * p, v = _ >= 0 ? 1 : -1, y = 1 - _ * _;
      if (y > Number.EPSILON) {
        const M = Math.sqrt(y), S = Math.atan2(M, _ * v);
        f = Math.sin(f * S) / M, r = Math.sin(r * S) / M;
      }
      const x = r * v;
      if (l = l * f + u * x, a = a * f + m * x, h = h * f + g * x, d = d * f + p * x, f === 1 - r) {
        const M = 1 / Math.sqrt(l * l + a * a + h * h + d * d);
        l *= M, a *= M, h *= M, d *= M;
      }
    }
    e[t] = l, e[t + 1] = a, e[t + 2] = h, e[t + 3] = d;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, o) {
    const r = n[i], l = n[i + 1], a = n[i + 2], h = n[i + 3], d = s[o], u = s[o + 1], m = s[o + 2], g = s[o + 3];
    return e[t] = r * g + h * d + l * m - a * u, e[t + 1] = l * g + h * u + a * d - r * m, e[t + 2] = a * g + h * m + r * u - l * d, e[t + 3] = h * g - r * d - l * u - a * m, e;
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
    const n = e._x, i = e._y, s = e._z, o = e._order, r = Math.cos, l = Math.sin, a = r(n / 2), h = r(i / 2), d = r(s / 2), u = l(n / 2), m = l(i / 2), g = l(s / 2);
    switch (o) {
      case "XYZ":
        this._x = u * h * d + a * m * g, this._y = a * m * d - u * h * g, this._z = a * h * g + u * m * d, this._w = a * h * d - u * m * g;
        break;
      case "YXZ":
        this._x = u * h * d + a * m * g, this._y = a * m * d - u * h * g, this._z = a * h * g - u * m * d, this._w = a * h * d + u * m * g;
        break;
      case "ZXY":
        this._x = u * h * d - a * m * g, this._y = a * m * d + u * h * g, this._z = a * h * g + u * m * d, this._w = a * h * d - u * m * g;
        break;
      case "ZYX":
        this._x = u * h * d - a * m * g, this._y = a * m * d + u * h * g, this._z = a * h * g - u * m * d, this._w = a * h * d + u * m * g;
        break;
      case "YZX":
        this._x = u * h * d + a * m * g, this._y = a * m * d + u * h * g, this._z = a * h * g - u * m * d, this._w = a * h * d - u * m * g;
        break;
      case "XZY":
        this._x = u * h * d - a * m * g, this._y = a * m * d - u * h * g, this._z = a * h * g + u * m * d, this._w = a * h * d + u * m * g;
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
    const t = e.elements, n = t[0], i = t[4], s = t[8], o = t[1], r = t[5], l = t[9], a = t[2], h = t[6], d = t[10], u = n + r + d;
    if (u > 0) {
      const m = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / m, this._x = (h - l) * m, this._y = (s - a) * m, this._z = (o - i) * m;
    } else if (n > r && n > d) {
      const m = 2 * Math.sqrt(1 + n - r - d);
      this._w = (h - l) / m, this._x = 0.25 * m, this._y = (i + o) / m, this._z = (s + a) / m;
    } else if (r > d) {
      const m = 2 * Math.sqrt(1 + r - n - d);
      this._w = (s - a) / m, this._x = (i + o) / m, this._y = 0.25 * m, this._z = (l + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + d - n - r);
      this._w = (o - i) / m, this._x = (s + a) / m, this._y = (l + h) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(xt(this.dot(e), -1, 1)));
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
    const n = e._x, i = e._y, s = e._z, o = e._w, r = t._x, l = t._y, a = t._z, h = t._w;
    return this._x = n * h + o * r + i * a - s * l, this._y = i * h + o * l + s * r - n * a, this._z = s * h + o * a + n * l - i * r, this._w = o * h - n * r - i * l - s * a, this._onChangeCallback(), this;
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
    const l = 1 - r * r;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * o + t * this._w, this._x = m * n + t * this._x, this._y = m * i + t * this._y, this._z = m * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const a = Math.sqrt(l), h = Math.atan2(a, r), d = Math.sin((1 - t) * h) / a, u = Math.sin(t * h) / a;
    return this._w = o * d + this._w * u, this._x = n * d + this._x * u, this._y = i * d + this._y * u, this._z = s * d + this._z * u, this._onChangeCallback(), this;
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
class P {
  constructor(e = 0, t = 0, n = 0) {
    P.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
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
    return this.applyQuaternion(Lr.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Lr.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, i = this.z, s = e.x, o = e.y, r = e.z, l = e.w, a = l * t + o * i - r * n, h = l * n + r * t - s * i, d = l * i + s * n - o * t, u = -s * t - o * n - r * i;
    return this.x = a * l + u * -s + h * -r - d * -o, this.y = h * l + u * -o + d * -s - a * -r, this.z = d * l + u * -r + a * -o - h * -s, this;
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
    const n = e.x, i = e.y, s = e.z, o = t.x, r = t.y, l = t.z;
    return this.x = i * l - s * r, this.y = s * o - n * l, this.z = n * r - i * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Ms.copy(this).projectOnVector(e), this.sub(Ms);
  }
  reflect(e) {
    return this.sub(Ms.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(xt(n, -1, 1));
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
const Ms = /* @__PURE__ */ new P(), Lr = /* @__PURE__ */ new ri();
class Ei {
  constructor(e = new P(1 / 0, 1 / 0, 1 / 0), t = new P(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, o = -1 / 0, r = -1 / 0;
    for (let l = 0, a = e.length; l < a; l += 3) {
      const h = e[l], d = e[l + 1], u = e[l + 2];
      h < t && (t = h), d < n && (n = d), u < i && (i = u), h > s && (s = h), d > o && (o = d), u > r && (r = u);
    }
    return this.min.set(t, n, i), this.max.set(s, o, r), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, o = -1 / 0, r = -1 / 0;
    for (let l = 0, a = e.count; l < a; l++) {
      const h = e.getX(l), d = e.getY(l), u = e.getZ(l);
      h < t && (t = h), d < n && (n = d), u < i && (i = u), h > s && (s = h), d > o && (o = d), u > r && (r = u);
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
    const n = mn.copy(t).multiplyScalar(0.5);
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
          mn.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld), this.expandByPoint(mn);
      } else
        n.boundingBox === null && n.computeBoundingBox(), Ss.copy(n.boundingBox), Ss.applyMatrix4(e.matrixWorld), this.union(Ss);
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
    return this.clampPoint(e.center, mn), mn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(hi), Ri.subVectors(this.max, hi), In.subVectors(e.a, hi), Bn.subVectors(e.b, hi), zn.subVectors(e.c, hi), rn.subVectors(Bn, In), on.subVectors(zn, Bn), gn.subVectors(In, zn);
    let t = [
      0,
      -rn.z,
      rn.y,
      0,
      -on.z,
      on.y,
      0,
      -gn.z,
      gn.y,
      rn.z,
      0,
      -rn.x,
      on.z,
      0,
      -on.x,
      gn.z,
      0,
      -gn.x,
      -rn.y,
      rn.x,
      0,
      -on.y,
      on.x,
      0,
      -gn.y,
      gn.x,
      0
    ];
    return !Es(t, In, Bn, zn, Ri) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Es(t, In, Bn, zn, Ri)) ? !1 : (Fi.crossVectors(rn, on), t = [Fi.x, Fi.y, Fi.z], Es(t, In, Bn, zn, Ri));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return mn.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return this.getCenter(e.center), e.radius = this.getSize(mn).length() * 0.5, e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Ht[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Ht[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Ht[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Ht[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Ht[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Ht[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Ht[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Ht[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Ht), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Ht = [
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P(),
  /* @__PURE__ */ new P()
], mn = /* @__PURE__ */ new P(), Ss = /* @__PURE__ */ new Ei(), In = /* @__PURE__ */ new P(), Bn = /* @__PURE__ */ new P(), zn = /* @__PURE__ */ new P(), rn = /* @__PURE__ */ new P(), on = /* @__PURE__ */ new P(), gn = /* @__PURE__ */ new P(), hi = /* @__PURE__ */ new P(), Ri = /* @__PURE__ */ new P(), Fi = /* @__PURE__ */ new P(), _n = /* @__PURE__ */ new P();
function Es(c, e, t, n, i) {
  for (let s = 0, o = c.length - 3; s <= o; s += 3) {
    _n.fromArray(c, s);
    const r = i.x * Math.abs(_n.x) + i.y * Math.abs(_n.y) + i.z * Math.abs(_n.z), l = e.dot(_n), a = t.dot(_n), h = n.dot(_n);
    if (Math.max(-Math.max(l, a, h), Math.min(l, a, h)) > r)
      return !1;
  }
  return !0;
}
const Oa = /* @__PURE__ */ new Ei(), Rr = /* @__PURE__ */ new P(), Di = /* @__PURE__ */ new P(), As = /* @__PURE__ */ new P();
class ni {
  constructor(e = new P(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Oa.setFromPoints(e).getCenter(n);
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
    As.subVectors(e, this.center);
    const t = As.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.add(As.multiplyScalar(i / n)), this.radius += i;
    }
    return this;
  }
  union(e) {
    return this.center.equals(e.center) === !0 ? Di.set(0, 0, 1).multiplyScalar(e.radius) : Di.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(Rr.copy(e.center).add(Di)), this.expandByPoint(Rr.copy(e.center).sub(Di)), this;
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const qt = /* @__PURE__ */ new P(), Ts = /* @__PURE__ */ new P(), Pi = /* @__PURE__ */ new P(), an = /* @__PURE__ */ new P(), Cs = /* @__PURE__ */ new P(), Ii = /* @__PURE__ */ new P(), Ls = /* @__PURE__ */ new P();
class Zo {
  constructor(e = new P(), t = new P(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, qt)), this;
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
    const t = qt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (qt.copy(this.direction).multiplyScalar(t).add(this.origin), qt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Ts.copy(e).add(t).multiplyScalar(0.5), Pi.copy(t).sub(e).normalize(), an.copy(this.origin).sub(Ts);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(Pi), r = an.dot(this.direction), l = -an.dot(Pi), a = an.lengthSq(), h = Math.abs(1 - o * o);
    let d, u, m, g;
    if (h > 0)
      if (d = o * l - r, u = o * r - l, g = s * h, d >= 0)
        if (u >= -g)
          if (u <= g) {
            const p = 1 / h;
            d *= p, u *= p, m = d * (d + o * u + 2 * r) + u * (o * d + u + 2 * l) + a;
          } else
            u = s, d = Math.max(0, -(o * u + r)), m = -d * d + u * (u + 2 * l) + a;
        else
          u = -s, d = Math.max(0, -(o * u + r)), m = -d * d + u * (u + 2 * l) + a;
      else
        u <= -g ? (d = Math.max(0, -(-o * s + r)), u = d > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -d * d + u * (u + 2 * l) + a) : u <= g ? (d = 0, u = Math.min(Math.max(-s, -l), s), m = u * (u + 2 * l) + a) : (d = Math.max(0, -(o * s + r)), u = d > 0 ? s : Math.min(Math.max(-s, -l), s), m = -d * d + u * (u + 2 * l) + a);
    else
      u = o > 0 ? -s : s, d = Math.max(0, -(o * u + r)), m = -d * d + u * (u + 2 * l) + a;
    return n && n.copy(this.direction).multiplyScalar(d).add(this.origin), i && i.copy(Pi).multiplyScalar(u).add(Ts), m;
  }
  intersectSphere(e, t) {
    qt.subVectors(e.center, this.origin);
    const n = qt.dot(this.direction), i = qt.dot(qt) - n * n, s = e.radius * e.radius;
    if (i > s)
      return null;
    const o = Math.sqrt(s - i), r = n - o, l = n + o;
    return r < 0 && l < 0 ? null : r < 0 ? this.at(l, t) : this.at(r, t);
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
    let n, i, s, o, r, l;
    const a = 1 / this.direction.x, h = 1 / this.direction.y, d = 1 / this.direction.z, u = this.origin;
    return a >= 0 ? (n = (e.min.x - u.x) * a, i = (e.max.x - u.x) * a) : (n = (e.max.x - u.x) * a, i = (e.min.x - u.x) * a), h >= 0 ? (s = (e.min.y - u.y) * h, o = (e.max.y - u.y) * h) : (s = (e.max.y - u.y) * h, o = (e.min.y - u.y) * h), n > o || s > i || ((s > n || n !== n) && (n = s), (o < i || i !== i) && (i = o), d >= 0 ? (r = (e.min.z - u.z) * d, l = (e.max.z - u.z) * d) : (r = (e.max.z - u.z) * d, l = (e.min.z - u.z) * d), n > l || r > i) || ((r > n || n !== n) && (n = r), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, qt) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    Cs.subVectors(t, e), Ii.subVectors(n, e), Ls.crossVectors(Cs, Ii);
    let o = this.direction.dot(Ls), r;
    if (o > 0) {
      if (i)
        return null;
      r = 1;
    } else if (o < 0)
      r = -1, o = -o;
    else
      return null;
    an.subVectors(this.origin, e);
    const l = r * this.direction.dot(Ii.crossVectors(an, Ii));
    if (l < 0)
      return null;
    const a = r * this.direction.dot(Cs.cross(an));
    if (a < 0 || l + a > o)
      return null;
    const h = -r * an.dot(Ls);
    return h < 0 ? null : this.at(h / o, s);
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
class He {
  constructor() {
    He.prototype.isMatrix4 = !0, this.elements = [
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
  set(e, t, n, i, s, o, r, l, a, h, d, u, m, g, p, f) {
    const _ = this.elements;
    return _[0] = e, _[4] = t, _[8] = n, _[12] = i, _[1] = s, _[5] = o, _[9] = r, _[13] = l, _[2] = a, _[6] = h, _[10] = d, _[14] = u, _[3] = m, _[7] = g, _[11] = p, _[15] = f, this;
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
    return new He().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, i = 1 / Nn.setFromMatrixColumn(e, 0).length(), s = 1 / Nn.setFromMatrixColumn(e, 1).length(), o = 1 / Nn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, o = Math.cos(n), r = Math.sin(n), l = Math.cos(i), a = Math.sin(i), h = Math.cos(s), d = Math.sin(s);
    if (e.order === "XYZ") {
      const u = o * h, m = o * d, g = r * h, p = r * d;
      t[0] = l * h, t[4] = -l * d, t[8] = a, t[1] = m + g * a, t[5] = u - p * a, t[9] = -r * l, t[2] = p - u * a, t[6] = g + m * a, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const u = l * h, m = l * d, g = a * h, p = a * d;
      t[0] = u + p * r, t[4] = g * r - m, t[8] = o * a, t[1] = o * d, t[5] = o * h, t[9] = -r, t[2] = m * r - g, t[6] = p + u * r, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const u = l * h, m = l * d, g = a * h, p = a * d;
      t[0] = u - p * r, t[4] = -o * d, t[8] = g + m * r, t[1] = m + g * r, t[5] = o * h, t[9] = p - u * r, t[2] = -o * a, t[6] = r, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const u = o * h, m = o * d, g = r * h, p = r * d;
      t[0] = l * h, t[4] = g * a - m, t[8] = u * a + p, t[1] = l * d, t[5] = p * a + u, t[9] = m * a - g, t[2] = -a, t[6] = r * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const u = o * l, m = o * a, g = r * l, p = r * a;
      t[0] = l * h, t[4] = p - u * d, t[8] = g * d + m, t[1] = d, t[5] = o * h, t[9] = -r * h, t[2] = -a * h, t[6] = m * d + g, t[10] = u - p * d;
    } else if (e.order === "XZY") {
      const u = o * l, m = o * a, g = r * l, p = r * a;
      t[0] = l * h, t[4] = -d, t[8] = a * h, t[1] = u * d + p, t[5] = o * h, t[9] = m * d - g, t[2] = g * d - m, t[6] = r * h, t[10] = p * d + u;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Ua, e, Ga);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return _t.subVectors(e, t), _t.lengthSq() === 0 && (_t.z = 1), _t.normalize(), ln.crossVectors(n, _t), ln.lengthSq() === 0 && (Math.abs(n.z) === 1 ? _t.x += 1e-4 : _t.z += 1e-4, _t.normalize(), ln.crossVectors(n, _t)), ln.normalize(), Bi.crossVectors(_t, ln), i[0] = ln.x, i[4] = Bi.x, i[8] = _t.x, i[1] = ln.y, i[5] = Bi.y, i[9] = _t.y, i[2] = ln.z, i[6] = Bi.z, i[10] = _t.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], r = n[4], l = n[8], a = n[12], h = n[1], d = n[5], u = n[9], m = n[13], g = n[2], p = n[6], f = n[10], _ = n[14], v = n[3], y = n[7], x = n[11], M = n[15], S = i[0], C = i[4], w = i[8], A = i[12], D = i[1], B = i[5], W = i[9], z = i[13], F = i[2], I = i[6], L = i[10], G = i[14], U = i[3], N = i[7], q = i[11], J = i[15];
    return s[0] = o * S + r * D + l * F + a * U, s[4] = o * C + r * B + l * I + a * N, s[8] = o * w + r * W + l * L + a * q, s[12] = o * A + r * z + l * G + a * J, s[1] = h * S + d * D + u * F + m * U, s[5] = h * C + d * B + u * I + m * N, s[9] = h * w + d * W + u * L + m * q, s[13] = h * A + d * z + u * G + m * J, s[2] = g * S + p * D + f * F + _ * U, s[6] = g * C + p * B + f * I + _ * N, s[10] = g * w + p * W + f * L + _ * q, s[14] = g * A + p * z + f * G + _ * J, s[3] = v * S + y * D + x * F + M * U, s[7] = v * C + y * B + x * I + M * N, s[11] = v * w + y * W + x * L + M * q, s[15] = v * A + y * z + x * G + M * J, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], o = e[1], r = e[5], l = e[9], a = e[13], h = e[2], d = e[6], u = e[10], m = e[14], g = e[3], p = e[7], f = e[11], _ = e[15];
    return g * (+s * l * d - i * a * d - s * r * u + n * a * u + i * r * m - n * l * m) + p * (+t * l * m - t * a * u + s * o * u - i * o * m + i * a * h - s * l * h) + f * (+t * a * d - t * r * m - s * o * d + n * o * m + s * r * h - n * a * h) + _ * (-i * r * h - t * l * d + t * r * u + i * o * d - n * o * u + n * l * h);
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
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], r = e[5], l = e[6], a = e[7], h = e[8], d = e[9], u = e[10], m = e[11], g = e[12], p = e[13], f = e[14], _ = e[15], v = d * f * a - p * u * a + p * l * m - r * f * m - d * l * _ + r * u * _, y = g * u * a - h * f * a - g * l * m + o * f * m + h * l * _ - o * u * _, x = h * p * a - g * d * a + g * r * m - o * p * m - h * r * _ + o * d * _, M = g * d * l - h * p * l - g * r * u + o * p * u + h * r * f - o * d * f, S = t * v + n * y + i * x + s * M;
    if (S === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / S;
    return e[0] = v * C, e[1] = (p * u * s - d * f * s - p * i * m + n * f * m + d * i * _ - n * u * _) * C, e[2] = (r * f * s - p * l * s + p * i * a - n * f * a - r * i * _ + n * l * _) * C, e[3] = (d * l * s - r * u * s - d * i * a + n * u * a + r * i * m - n * l * m) * C, e[4] = y * C, e[5] = (h * f * s - g * u * s + g * i * m - t * f * m - h * i * _ + t * u * _) * C, e[6] = (g * l * s - o * f * s - g * i * a + t * f * a + o * i * _ - t * l * _) * C, e[7] = (o * u * s - h * l * s + h * i * a - t * u * a - o * i * m + t * l * m) * C, e[8] = x * C, e[9] = (g * d * s - h * p * s - g * n * m + t * p * m + h * n * _ - t * d * _) * C, e[10] = (o * p * s - g * r * s + g * n * a - t * p * a - o * n * _ + t * r * _) * C, e[11] = (h * r * s - o * d * s - h * n * a + t * d * a + o * n * m - t * r * m) * C, e[12] = M * C, e[13] = (h * p * i - g * d * i + g * n * u - t * p * u - h * n * f + t * d * f) * C, e[14] = (g * r * i - o * p * i - g * n * l + t * p * l + o * n * f - t * r * f) * C, e[15] = (o * d * i - h * r * i + h * n * l - t * d * l - o * n * u + t * r * u) * C, this;
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
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, o = e.x, r = e.y, l = e.z, a = s * o, h = s * r;
    return this.set(
      a * o + n,
      a * r - i * l,
      a * l + i * r,
      0,
      a * r + i * l,
      h * r + n,
      h * l - i * o,
      0,
      a * l - i * r,
      h * l + i * o,
      s * l * l + n,
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
    const i = this.elements, s = t._x, o = t._y, r = t._z, l = t._w, a = s + s, h = o + o, d = r + r, u = s * a, m = s * h, g = s * d, p = o * h, f = o * d, _ = r * d, v = l * a, y = l * h, x = l * d, M = n.x, S = n.y, C = n.z;
    return i[0] = (1 - (p + _)) * M, i[1] = (m + x) * M, i[2] = (g - y) * M, i[3] = 0, i[4] = (m - x) * S, i[5] = (1 - (u + _)) * S, i[6] = (f + v) * S, i[7] = 0, i[8] = (g + y) * C, i[9] = (f - v) * C, i[10] = (1 - (u + p)) * C, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Nn.set(i[0], i[1], i[2]).length();
    const o = Nn.set(i[4], i[5], i[6]).length(), r = Nn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], Rt.copy(this);
    const a = 1 / s, h = 1 / o, d = 1 / r;
    return Rt.elements[0] *= a, Rt.elements[1] *= a, Rt.elements[2] *= a, Rt.elements[4] *= h, Rt.elements[5] *= h, Rt.elements[6] *= h, Rt.elements[8] *= d, Rt.elements[9] *= d, Rt.elements[10] *= d, t.setFromRotationMatrix(Rt), n.x = s, n.y = o, n.z = r, this;
  }
  makePerspective(e, t, n, i, s, o) {
    const r = this.elements, l = 2 * s / (t - e), a = 2 * s / (n - i), h = (t + e) / (t - e), d = (n + i) / (n - i), u = -(o + s) / (o - s), m = -2 * o * s / (o - s);
    return r[0] = l, r[4] = 0, r[8] = h, r[12] = 0, r[1] = 0, r[5] = a, r[9] = d, r[13] = 0, r[2] = 0, r[6] = 0, r[10] = u, r[14] = m, r[3] = 0, r[7] = 0, r[11] = -1, r[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, o) {
    const r = this.elements, l = 1 / (t - e), a = 1 / (n - i), h = 1 / (o - s), d = (t + e) * l, u = (n + i) * a, m = (o + s) * h;
    return r[0] = 2 * l, r[4] = 0, r[8] = 0, r[12] = -d, r[1] = 0, r[5] = 2 * a, r[9] = 0, r[13] = -u, r[2] = 0, r[6] = 0, r[10] = -2 * h, r[14] = -m, r[3] = 0, r[7] = 0, r[11] = 0, r[15] = 1, this;
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
const Nn = /* @__PURE__ */ new P(), Rt = /* @__PURE__ */ new He(), Ua = /* @__PURE__ */ new P(0, 0, 0), Ga = /* @__PURE__ */ new P(1, 1, 1), ln = /* @__PURE__ */ new P(), Bi = /* @__PURE__ */ new P(), _t = /* @__PURE__ */ new P(), Fr = /* @__PURE__ */ new He(), Dr = /* @__PURE__ */ new ri();
class Ai {
  constructor(e = 0, t = 0, n = 0, i = Ai.DefaultOrder) {
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
    const i = e.elements, s = i[0], o = i[4], r = i[8], l = i[1], a = i[5], h = i[9], d = i[2], u = i[6], m = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(xt(r, -1, 1)), Math.abs(r) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(u, a), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-xt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(r, m), this._z = Math.atan2(l, a)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(xt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-d, m), this._z = Math.atan2(-o, a)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-xt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(u, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, a));
        break;
      case "YZX":
        this._z = Math.asin(xt(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, a), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(r, m));
        break;
      case "XZY":
        this._z = Math.asin(-xt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(u, a), this._y = Math.atan2(r, s)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Fr.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Fr, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Dr.setFromEuler(this), this.setFromQuaternion(Dr, e);
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
Ai.DefaultOrder = "XYZ";
Ai.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Ko {
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
let ka = 0;
const Pr = /* @__PURE__ */ new P(), On = /* @__PURE__ */ new ri(), Xt = /* @__PURE__ */ new He(), zi = /* @__PURE__ */ new P(), ui = /* @__PURE__ */ new P(), Wa = /* @__PURE__ */ new P(), Va = /* @__PURE__ */ new ri(), Ir = /* @__PURE__ */ new P(1, 0, 0), Br = /* @__PURE__ */ new P(0, 1, 0), zr = /* @__PURE__ */ new P(0, 0, 1), Ha = { type: "added" }, Nr = { type: "removed" };
class it extends si {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: ka++ }), this.uuid = fn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = it.DefaultUp.clone();
    const e = new P(), t = new Ai(), n = new ri(), i = new P(1, 1, 1);
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
        value: new He()
      },
      normalMatrix: {
        value: new Tt()
      }
    }), this.matrix = new He(), this.matrixWorld = new He(), this.matrixAutoUpdate = it.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Ko(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return On.setFromAxisAngle(e, t), this.quaternion.multiply(On), this;
  }
  rotateOnWorldAxis(e, t) {
    return On.setFromAxisAngle(e, t), this.quaternion.premultiply(On), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Ir, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Br, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(zr, e);
  }
  translateOnAxis(e, t) {
    return Pr.copy(e).applyQuaternion(this.quaternion), this.position.add(Pr.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Ir, e);
  }
  translateY(e) {
    return this.translateOnAxis(Br, e);
  }
  translateZ(e) {
    return this.translateOnAxis(zr, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(Xt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? zi.copy(e) : zi.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), ui.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Xt.lookAt(ui, zi, this.up) : Xt.lookAt(zi, ui, this.up), this.quaternion.setFromRotationMatrix(Xt), i && (Xt.extractRotation(i.matrixWorld), On.setFromRotationMatrix(Xt), this.quaternion.premultiply(On.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Ha)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Nr)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(Nr);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Xt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Xt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Xt), this.add(e), e.updateWorldMatrix(!1, !0), this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ui, e, Wa), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ui, Va, e), e;
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
    function s(r, l) {
      return r[l.uuid] === void 0 && (r[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const r = this.geometry.parameters;
      if (r !== void 0 && r.shapes !== void 0) {
        const l = r.shapes;
        if (Array.isArray(l))
          for (let a = 0, h = l.length; a < h; a++) {
            const d = l[a];
            s(e.shapes, d);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const r = [];
        for (let l = 0, a = this.material.length; l < a; l++)
          r.push(s(e.materials, this.material[l]));
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
        const l = this.animations[r];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const r = o(e.geometries), l = o(e.materials), a = o(e.textures), h = o(e.images), d = o(e.shapes), u = o(e.skeletons), m = o(e.animations), g = o(e.nodes);
      r.length > 0 && (n.geometries = r), l.length > 0 && (n.materials = l), a.length > 0 && (n.textures = a), h.length > 0 && (n.images = h), d.length > 0 && (n.shapes = d), u.length > 0 && (n.skeletons = u), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function o(r) {
      const l = [];
      for (const a in r) {
        const h = r[a];
        delete h.metadata, l.push(h);
      }
      return l;
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
it.DefaultUp = /* @__PURE__ */ new P(0, 1, 0);
it.DefaultMatrixAutoUpdate = !0;
const Ft = /* @__PURE__ */ new P(), jt = /* @__PURE__ */ new P(), Rs = /* @__PURE__ */ new P(), Yt = /* @__PURE__ */ new P(), Un = /* @__PURE__ */ new P(), Gn = /* @__PURE__ */ new P(), Or = /* @__PURE__ */ new P(), Fs = /* @__PURE__ */ new P(), Ds = /* @__PURE__ */ new P(), Ps = /* @__PURE__ */ new P();
class kt {
  constructor(e = new P(), t = new P(), n = new P()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Ft.subVectors(e, t), i.cross(Ft);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    Ft.subVectors(i, t), jt.subVectors(n, t), Rs.subVectors(e, t);
    const o = Ft.dot(Ft), r = Ft.dot(jt), l = Ft.dot(Rs), a = jt.dot(jt), h = jt.dot(Rs), d = o * a - r * r;
    if (d === 0)
      return s.set(-2, -1, -1);
    const u = 1 / d, m = (a * l - r * h) * u, g = (o * h - r * l) * u;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Yt), Yt.x >= 0 && Yt.y >= 0 && Yt.x + Yt.y <= 1;
  }
  static getUV(e, t, n, i, s, o, r, l) {
    return this.getBarycoord(e, t, n, i, Yt), l.set(0, 0), l.addScaledVector(s, Yt.x), l.addScaledVector(o, Yt.y), l.addScaledVector(r, Yt.z), l;
  }
  static isFrontFacing(e, t, n, i) {
    return Ft.subVectors(n, t), jt.subVectors(e, t), Ft.cross(jt).dot(i) < 0;
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
    return Ft.subVectors(this.c, this.b), jt.subVectors(this.a, this.b), Ft.cross(jt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return kt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return kt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return kt.getUV(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return kt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return kt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let o, r;
    Un.subVectors(i, n), Gn.subVectors(s, n), Fs.subVectors(e, n);
    const l = Un.dot(Fs), a = Gn.dot(Fs);
    if (l <= 0 && a <= 0)
      return t.copy(n);
    Ds.subVectors(e, i);
    const h = Un.dot(Ds), d = Gn.dot(Ds);
    if (h >= 0 && d <= h)
      return t.copy(i);
    const u = l * d - h * a;
    if (u <= 0 && l >= 0 && h <= 0)
      return o = l / (l - h), t.copy(n).addScaledVector(Un, o);
    Ps.subVectors(e, s);
    const m = Un.dot(Ps), g = Gn.dot(Ps);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const p = m * a - l * g;
    if (p <= 0 && a >= 0 && g <= 0)
      return r = a / (a - g), t.copy(n).addScaledVector(Gn, r);
    const f = h * g - m * d;
    if (f <= 0 && d - h >= 0 && m - g >= 0)
      return Or.subVectors(s, i), r = (d - h) / (d - h + (m - g)), t.copy(i).addScaledVector(Or, r);
    const _ = 1 / (f + p + u);
    return o = p * _, r = u * _, t.copy(n).addScaledVector(Un, o).addScaledVector(Gn, r);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let qa = 0;
class tn extends si {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: qa++ }), this.uuid = fn(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
        const l = s[r];
        delete l.metadata, o.push(l);
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
class ds extends tn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new xe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Ye = /* @__PURE__ */ new P(), Ni = /* @__PURE__ */ new be();
class yt {
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
      o === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), o = new xe()), t[n++] = o.r, t[n++] = o.g, t[n++] = o.b;
    }
    return this;
  }
  copyVector2sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let o = e[i];
      o === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), o = new be()), t[n++] = o.x, t[n++] = o.y;
    }
    return this;
  }
  copyVector3sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let o = e[i];
      o === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), o = new P()), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z;
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
        Ni.fromBufferAttribute(this, t), Ni.applyMatrix3(e), this.setXY(t, Ni.x, Ni.y);
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
class Jo extends yt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Qo extends yt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class ot extends yt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Xa = 0;
const Et = /* @__PURE__ */ new He(), Is = /* @__PURE__ */ new it(), kn = /* @__PURE__ */ new P(), vt = /* @__PURE__ */ new Ei(), di = /* @__PURE__ */ new Ei(), et = /* @__PURE__ */ new P();
class pt extends si {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Xa++ }), this.uuid = fn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (qo(e) ? Qo : Jo)(e, 1) : this.index = e, this;
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
      const s = new Tt().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Et.makeRotationFromQuaternion(e), this.applyMatrix4(Et), this;
  }
  rotateX(e) {
    return Et.makeRotationX(e), this.applyMatrix4(Et), this;
  }
  rotateY(e) {
    return Et.makeRotationY(e), this.applyMatrix4(Et), this;
  }
  rotateZ(e) {
    return Et.makeRotationZ(e), this.applyMatrix4(Et), this;
  }
  translate(e, t, n) {
    return Et.makeTranslation(e, t, n), this.applyMatrix4(Et), this;
  }
  scale(e, t, n) {
    return Et.makeScale(e, t, n), this.applyMatrix4(Et), this;
  }
  lookAt(e) {
    return Is.lookAt(e), Is.updateMatrix(), this.applyMatrix4(Is.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(kn).negate(), this.translate(kn.x, kn.y, kn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new ot(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ei());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new P(-1 / 0, -1 / 0, -1 / 0),
        new P(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          vt.setFromBufferAttribute(s), this.morphTargetsRelative ? (et.addVectors(this.boundingBox.min, vt.min), this.boundingBox.expandByPoint(et), et.addVectors(this.boundingBox.max, vt.max), this.boundingBox.expandByPoint(et)) : (this.boundingBox.expandByPoint(vt.min), this.boundingBox.expandByPoint(vt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ni());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new P(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (vt.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const r = t[s];
          di.setFromBufferAttribute(r), this.morphTargetsRelative ? (et.addVectors(vt.min, di.min), vt.expandByPoint(et), et.addVectors(vt.max, di.max), vt.expandByPoint(et)) : (vt.expandByPoint(di.min), vt.expandByPoint(di.max));
        }
      vt.getCenter(n);
      let i = 0;
      for (let s = 0, o = e.count; s < o; s++)
        et.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(et));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const r = t[s], l = this.morphTargetsRelative;
          for (let a = 0, h = r.count; a < h; a++)
            et.fromBufferAttribute(r, a), l && (kn.fromBufferAttribute(e, a), et.add(kn)), i = Math.max(i, n.distanceToSquared(et));
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new yt(new Float32Array(4 * r), 4));
    const l = this.getAttribute("tangent").array, a = [], h = [];
    for (let D = 0; D < r; D++)
      a[D] = new P(), h[D] = new P();
    const d = new P(), u = new P(), m = new P(), g = new be(), p = new be(), f = new be(), _ = new P(), v = new P();
    function y(D, B, W) {
      d.fromArray(i, D * 3), u.fromArray(i, B * 3), m.fromArray(i, W * 3), g.fromArray(o, D * 2), p.fromArray(o, B * 2), f.fromArray(o, W * 2), u.sub(d), m.sub(d), p.sub(g), f.sub(g);
      const z = 1 / (p.x * f.y - f.x * p.y);
      !isFinite(z) || (_.copy(u).multiplyScalar(f.y).addScaledVector(m, -p.y).multiplyScalar(z), v.copy(m).multiplyScalar(p.x).addScaledVector(u, -f.x).multiplyScalar(z), a[D].add(_), a[B].add(_), a[W].add(_), h[D].add(v), h[B].add(v), h[W].add(v));
    }
    let x = this.groups;
    x.length === 0 && (x = [{
      start: 0,
      count: n.length
    }]);
    for (let D = 0, B = x.length; D < B; ++D) {
      const W = x[D], z = W.start, F = W.count;
      for (let I = z, L = z + F; I < L; I += 3)
        y(
          n[I + 0],
          n[I + 1],
          n[I + 2]
        );
    }
    const M = new P(), S = new P(), C = new P(), w = new P();
    function A(D) {
      C.fromArray(s, D * 3), w.copy(C);
      const B = a[D];
      M.copy(B), M.sub(C.multiplyScalar(C.dot(B))).normalize(), S.crossVectors(w, B);
      const z = S.dot(h[D]) < 0 ? -1 : 1;
      l[D * 4] = M.x, l[D * 4 + 1] = M.y, l[D * 4 + 2] = M.z, l[D * 4 + 3] = z;
    }
    for (let D = 0, B = x.length; D < B; ++D) {
      const W = x[D], z = W.start, F = W.count;
      for (let I = z, L = z + F; I < L; I += 3)
        A(n[I + 0]), A(n[I + 1]), A(n[I + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new yt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let u = 0, m = n.count; u < m; u++)
          n.setXYZ(u, 0, 0, 0);
      const i = new P(), s = new P(), o = new P(), r = new P(), l = new P(), a = new P(), h = new P(), d = new P();
      if (e)
        for (let u = 0, m = e.count; u < m; u += 3) {
          const g = e.getX(u + 0), p = e.getX(u + 1), f = e.getX(u + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, p), o.fromBufferAttribute(t, f), h.subVectors(o, s), d.subVectors(i, s), h.cross(d), r.fromBufferAttribute(n, g), l.fromBufferAttribute(n, p), a.fromBufferAttribute(n, f), r.add(h), l.add(h), a.add(h), n.setXYZ(g, r.x, r.y, r.z), n.setXYZ(p, l.x, l.y, l.z), n.setXYZ(f, a.x, a.y, a.z);
        }
      else
        for (let u = 0, m = t.count; u < m; u += 3)
          i.fromBufferAttribute(t, u + 0), s.fromBufferAttribute(t, u + 1), o.fromBufferAttribute(t, u + 2), h.subVectors(o, s), d.subVectors(i, s), h.cross(d), n.setXYZ(u + 0, h.x, h.y, h.z), n.setXYZ(u + 1, h.x, h.y, h.z), n.setXYZ(u + 2, h.x, h.y, h.z);
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
      const o = n[i].array, r = e.attributes[i], l = r.array, a = r.itemSize * t, h = Math.min(l.length, o.length - a);
      for (let d = 0, u = a; d < h; d++, u++)
        o[u] = l[d];
    }
    return this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      et.fromBufferAttribute(e, t), et.normalize(), e.setXYZ(t, et.x, et.y, et.z);
  }
  toNonIndexed() {
    function e(r, l) {
      const a = r.array, h = r.itemSize, d = r.normalized, u = new a.constructor(l.length * h);
      let m = 0, g = 0;
      for (let p = 0, f = l.length; p < f; p++) {
        r.isInterleavedBufferAttribute ? m = l[p] * r.data.stride + r.offset : m = l[p] * h;
        for (let _ = 0; _ < h; _++)
          u[g++] = a[m++];
      }
      return new yt(u, h, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new pt(), n = this.index.array, i = this.attributes;
    for (const r in i) {
      const l = i[r], a = e(l, n);
      t.setAttribute(r, a);
    }
    const s = this.morphAttributes;
    for (const r in s) {
      const l = [], a = s[r];
      for (let h = 0, d = a.length; h < d; h++) {
        const u = a[h], m = e(u, n);
        l.push(m);
      }
      t.morphAttributes[r] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let r = 0, l = o.length; r < l; r++) {
      const a = o[r];
      t.addGroup(a.start, a.count, a.materialIndex);
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
      const l = this.parameters;
      for (const a in l)
        l[a] !== void 0 && (e[a] = l[a]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const a = n[l];
      e.data.attributes[l] = a.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const a = this.morphAttributes[l], h = [];
      for (let d = 0, u = a.length; d < u; d++) {
        const m = a[d];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && (i[l] = h, s = !0);
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
    for (const a in i) {
      const h = i[a];
      this.setAttribute(a, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const a in s) {
      const h = [], d = s[a];
      for (let u = 0, m = d.length; u < m; u++)
        h.push(d[u].clone(t));
      this.morphAttributes[a] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let a = 0, h = o.length; a < h; a++) {
      const d = o[a];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const r = e.boundingBox;
    r !== null && (this.boundingBox = r.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Ur = /* @__PURE__ */ new He(), Wn = /* @__PURE__ */ new Zo(), Bs = /* @__PURE__ */ new ni(), cn = /* @__PURE__ */ new P(), hn = /* @__PURE__ */ new P(), un = /* @__PURE__ */ new P(), zs = /* @__PURE__ */ new P(), Ns = /* @__PURE__ */ new P(), Os = /* @__PURE__ */ new P(), Oi = /* @__PURE__ */ new P(), Ui = /* @__PURE__ */ new P(), Gi = /* @__PURE__ */ new P(), ki = /* @__PURE__ */ new be(), Wi = /* @__PURE__ */ new be(), Vi = /* @__PURE__ */ new be(), Us = /* @__PURE__ */ new P(), Hi = /* @__PURE__ */ new P();
class ke extends it {
  constructor(e = new pt(), t = new ds()) {
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
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), Bs.copy(n.boundingSphere), Bs.applyMatrix4(s), e.ray.intersectsSphere(Bs) === !1) || (Ur.copy(s).invert(), Wn.copy(e.ray).applyMatrix4(Ur), n.boundingBox !== null && Wn.intersectsBox(n.boundingBox) === !1))
      return;
    let o;
    const r = n.index, l = n.attributes.position, a = n.morphAttributes.position, h = n.morphTargetsRelative, d = n.attributes.uv, u = n.attributes.uv2, m = n.groups, g = n.drawRange;
    if (r !== null)
      if (Array.isArray(i))
        for (let p = 0, f = m.length; p < f; p++) {
          const _ = m[p], v = i[_.materialIndex], y = Math.max(_.start, g.start), x = Math.min(r.count, Math.min(_.start + _.count, g.start + g.count));
          for (let M = y, S = x; M < S; M += 3) {
            const C = r.getX(M), w = r.getX(M + 1), A = r.getX(M + 2);
            o = qi(this, v, e, Wn, l, a, h, d, u, C, w, A), o && (o.faceIndex = Math.floor(M / 3), o.face.materialIndex = _.materialIndex, t.push(o));
          }
        }
      else {
        const p = Math.max(0, g.start), f = Math.min(r.count, g.start + g.count);
        for (let _ = p, v = f; _ < v; _ += 3) {
          const y = r.getX(_), x = r.getX(_ + 1), M = r.getX(_ + 2);
          o = qi(this, i, e, Wn, l, a, h, d, u, y, x, M), o && (o.faceIndex = Math.floor(_ / 3), t.push(o));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(i))
        for (let p = 0, f = m.length; p < f; p++) {
          const _ = m[p], v = i[_.materialIndex], y = Math.max(_.start, g.start), x = Math.min(l.count, Math.min(_.start + _.count, g.start + g.count));
          for (let M = y, S = x; M < S; M += 3) {
            const C = M, w = M + 1, A = M + 2;
            o = qi(this, v, e, Wn, l, a, h, d, u, C, w, A), o && (o.faceIndex = Math.floor(M / 3), o.face.materialIndex = _.materialIndex, t.push(o));
          }
        }
      else {
        const p = Math.max(0, g.start), f = Math.min(l.count, g.start + g.count);
        for (let _ = p, v = f; _ < v; _ += 3) {
          const y = _, x = _ + 1, M = _ + 2;
          o = qi(this, i, e, Wn, l, a, h, d, u, y, x, M), o && (o.faceIndex = Math.floor(_ / 3), t.push(o));
        }
      }
  }
}
function ja(c, e, t, n, i, s, o, r) {
  let l;
  if (e.side === 1 ? l = n.intersectTriangle(o, s, i, !0, r) : l = n.intersectTriangle(i, s, o, e.side !== 2, r), l === null)
    return null;
  Hi.copy(r), Hi.applyMatrix4(c.matrixWorld);
  const a = t.ray.origin.distanceTo(Hi);
  return a < t.near || a > t.far ? null : {
    distance: a,
    point: Hi.clone(),
    object: c
  };
}
function qi(c, e, t, n, i, s, o, r, l, a, h, d) {
  cn.fromBufferAttribute(i, a), hn.fromBufferAttribute(i, h), un.fromBufferAttribute(i, d);
  const u = c.morphTargetInfluences;
  if (s && u) {
    Oi.set(0, 0, 0), Ui.set(0, 0, 0), Gi.set(0, 0, 0);
    for (let g = 0, p = s.length; g < p; g++) {
      const f = u[g], _ = s[g];
      f !== 0 && (zs.fromBufferAttribute(_, a), Ns.fromBufferAttribute(_, h), Os.fromBufferAttribute(_, d), o ? (Oi.addScaledVector(zs, f), Ui.addScaledVector(Ns, f), Gi.addScaledVector(Os, f)) : (Oi.addScaledVector(zs.sub(cn), f), Ui.addScaledVector(Ns.sub(hn), f), Gi.addScaledVector(Os.sub(un), f)));
    }
    cn.add(Oi), hn.add(Ui), un.add(Gi);
  }
  c.isSkinnedMesh && (c.boneTransform(a, cn), c.boneTransform(h, hn), c.boneTransform(d, un));
  const m = ja(c, e, t, n, cn, hn, un, Us);
  if (m) {
    r && (ki.fromBufferAttribute(r, a), Wi.fromBufferAttribute(r, h), Vi.fromBufferAttribute(r, d), m.uv = kt.getUV(Us, cn, hn, un, ki, Wi, Vi, new be())), l && (ki.fromBufferAttribute(l, a), Wi.fromBufferAttribute(l, h), Vi.fromBufferAttribute(l, d), m.uv2 = kt.getUV(Us, cn, hn, un, ki, Wi, Vi, new be()));
    const g = {
      a,
      b: h,
      c: d,
      normal: new P(),
      materialIndex: 0
    };
    kt.getNormal(cn, hn, un, g.normal), m.face = g;
  }
  return m;
}
class oi extends pt {
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
    const l = [], a = [], h = [], d = [];
    let u = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, s, 0), g("z", "y", "x", 1, -1, n, t, -e, o, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, o, 2), g("x", "z", "y", 1, -1, e, n, -t, i, o, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new ot(a, 3)), this.setAttribute("normal", new ot(h, 3)), this.setAttribute("uv", new ot(d, 2));
    function g(p, f, _, v, y, x, M, S, C, w, A) {
      const D = x / C, B = M / w, W = x / 2, z = M / 2, F = S / 2, I = C + 1, L = w + 1;
      let G = 0, U = 0;
      const N = new P();
      for (let q = 0; q < L; q++) {
        const J = q * B - z;
        for (let k = 0; k < I; k++) {
          const ee = k * D - W;
          N[p] = ee * v, N[f] = J * y, N[_] = F, a.push(N.x, N.y, N.z), N[p] = 0, N[f] = 0, N[_] = S > 0 ? 1 : -1, h.push(N.x, N.y, N.z), d.push(k / C), d.push(1 - q / w), G += 1;
        }
      }
      for (let q = 0; q < w; q++)
        for (let J = 0; J < C; J++) {
          const k = u + J + I * q, ee = u + J + I * (q + 1), re = u + (J + 1) + I * (q + 1), ge = u + (J + 1) + I * q;
          l.push(k, ee, ge), l.push(ee, re, ge), U += 6;
        }
      r.addGroup(m, U, A), m += U, u += G;
    }
  }
  static fromJSON(e) {
    return new oi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function ii(c) {
  const e = {};
  for (const t in c) {
    e[t] = {};
    for (const n in c[t]) {
      const i = c[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function rt(c) {
  const e = {};
  for (let t = 0; t < c.length; t++) {
    const n = ii(c[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function Ya(c) {
  const e = [];
  for (let t = 0; t < c.length; t++)
    e.push(c[t].clone());
  return e;
}
const $a = { clone: ii, merge: rt };
var Za = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Ka = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Ln extends tn {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Za, this.fragmentShader = Ka, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ii(e.uniforms), this.uniformsGroups = Ya(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class ea extends it {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new He(), this.projectionMatrix = new He(), this.projectionMatrixInverse = new He();
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
class ft extends ea {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = lr * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(vs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return lr * 2 * Math.atan(
      Math.tan(vs * 0.5 * this.fov) / this.zoom
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
    let t = e * Math.tan(vs * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, a = o.fullHeight;
      s += o.offsetX * i / l, t -= o.offsetY * n / a, i *= o.width / l, n *= o.height / a;
    }
    const r = this.filmOffset;
    r !== 0 && (s += e * r / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Vn = 90, Hn = 1;
class Ja extends it {
  constructor(e, t, n) {
    if (super(), this.type = "CubeCamera", n.isWebGLCubeRenderTarget !== !0) {
      console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
      return;
    }
    this.renderTarget = n;
    const i = new ft(Vn, Hn, e, t);
    i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new P(1, 0, 0)), this.add(i);
    const s = new ft(Vn, Hn, e, t);
    s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new P(-1, 0, 0)), this.add(s);
    const o = new ft(Vn, Hn, e, t);
    o.layers = this.layers, o.up.set(0, 0, 1), o.lookAt(new P(0, 1, 0)), this.add(o);
    const r = new ft(Vn, Hn, e, t);
    r.layers = this.layers, r.up.set(0, 0, -1), r.lookAt(new P(0, -1, 0)), this.add(r);
    const l = new ft(Vn, Hn, e, t);
    l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new P(0, 0, 1)), this.add(l);
    const a = new ft(Vn, Hn, e, t);
    a.layers = this.layers, a.up.set(0, -1, 0), a.lookAt(new P(0, 0, -1)), this.add(a);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, s, o, r, l, a] = this.children, h = e.getRenderTarget(), d = e.toneMapping, u = e.xr.enabled;
    e.toneMapping = 0, e.xr.enabled = !1;
    const m = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, r), e.setRenderTarget(n, 4), e.render(t, l), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5), e.render(t, a), e.setRenderTarget(h), e.toneMapping = d, e.xr.enabled = u, n.texture.needsPMREMUpdate = !0;
  }
}
class ta extends wt {
  constructor(e, t, n, i, s, o, r, l, a, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : 301, super(e, t, n, i, s, o, r, l, a, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Qa extends Cn {
  constructor(e, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new ta(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006;
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
    }, i = new oi(5, 5, 5), s = new Ln({
      name: "CubemapFromEquirect",
      uniforms: ii(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const o = new ke(i, s), r = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new Ja(1, 10, this).update(e, o), t.minFilter = r, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const Gs = /* @__PURE__ */ new P(), el = /* @__PURE__ */ new P(), tl = /* @__PURE__ */ new Tt();
class xn {
  constructor(e = new P(1, 0, 0), t = 0) {
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
    const i = Gs.subVectors(n, t).cross(el.subVectors(e, t)).normalize();
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
    const n = e.delta(Gs), i = this.normal.dot(n);
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
    const n = t || tl.getNormalMatrix(e), i = this.coplanarPoint(Gs).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
const qn = /* @__PURE__ */ new ni(), Xi = /* @__PURE__ */ new P();
class gr {
  constructor(e = new xn(), t = new xn(), n = new xn(), i = new xn(), s = new xn(), o = new xn()) {
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
    const t = this.planes, n = e.elements, i = n[0], s = n[1], o = n[2], r = n[3], l = n[4], a = n[5], h = n[6], d = n[7], u = n[8], m = n[9], g = n[10], p = n[11], f = n[12], _ = n[13], v = n[14], y = n[15];
    return t[0].setComponents(r - i, d - l, p - u, y - f).normalize(), t[1].setComponents(r + i, d + l, p + u, y + f).normalize(), t[2].setComponents(r + s, d + a, p + m, y + _).normalize(), t[3].setComponents(r - s, d - a, p - m, y - _).normalize(), t[4].setComponents(r - o, d - h, p - g, y - v).normalize(), t[5].setComponents(r + o, d + h, p + g, y + v).normalize(), this;
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(qn);
  }
  intersectsSprite(e) {
    return qn.center.set(0, 0, 0), qn.radius = 0.7071067811865476, qn.applyMatrix4(e.matrixWorld), this.intersectsSphere(qn);
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
      if (Xi.x = i.normal.x > 0 ? e.max.x : e.min.x, Xi.y = i.normal.y > 0 ? e.max.y : e.min.y, Xi.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Xi) < 0)
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
function na() {
  let c = null, e = !1, t = null, n = null;
  function i(s, o) {
    t(s, o), n = c.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = c.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      c.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      c = s;
    }
  };
}
function nl(c, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(a, h) {
    const d = a.array, u = a.usage, m = c.createBuffer();
    c.bindBuffer(h, m), c.bufferData(h, d, u), a.onUploadCallback();
    let g;
    if (d instanceof Float32Array)
      g = 5126;
    else if (d instanceof Uint16Array)
      if (a.isFloat16BufferAttribute)
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
      version: a.version
    };
  }
  function s(a, h, d) {
    const u = h.array, m = h.updateRange;
    c.bindBuffer(d, a), m.count === -1 ? c.bufferSubData(d, 0, u) : (t ? c.bufferSubData(
      d,
      m.offset * u.BYTES_PER_ELEMENT,
      u,
      m.offset,
      m.count
    ) : c.bufferSubData(
      d,
      m.offset * u.BYTES_PER_ELEMENT,
      u.subarray(m.offset, m.offset + m.count)
    ), m.count = -1);
  }
  function o(a) {
    return a.isInterleavedBufferAttribute && (a = a.data), n.get(a);
  }
  function r(a) {
    a.isInterleavedBufferAttribute && (a = a.data);
    const h = n.get(a);
    h && (c.deleteBuffer(h.buffer), n.delete(a));
  }
  function l(a, h) {
    if (a.isGLBufferAttribute) {
      const u = n.get(a);
      (!u || u.version < a.version) && n.set(a, {
        buffer: a.buffer,
        type: a.type,
        bytesPerElement: a.elementSize,
        version: a.version
      });
      return;
    }
    a.isInterleavedBufferAttribute && (a = a.data);
    const d = n.get(a);
    d === void 0 ? n.set(a, i(a, h)) : d.version < a.version && (s(d.buffer, a, h), d.version = a.version);
  }
  return {
    get: o,
    remove: r,
    update: l
  };
}
class Si extends pt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, o = t / 2, r = Math.floor(n), l = Math.floor(i), a = r + 1, h = l + 1, d = e / r, u = t / l, m = [], g = [], p = [], f = [];
    for (let _ = 0; _ < h; _++) {
      const v = _ * u - o;
      for (let y = 0; y < a; y++) {
        const x = y * d - s;
        g.push(x, -v, 0), p.push(0, 0, 1), f.push(y / r), f.push(1 - _ / l);
      }
    }
    for (let _ = 0; _ < l; _++)
      for (let v = 0; v < r; v++) {
        const y = v + a * _, x = v + a * (_ + 1), M = v + 1 + a * (_ + 1), S = v + 1 + a * _;
        m.push(y, x, S), m.push(x, M, S);
      }
    this.setIndex(m), this.setAttribute("position", new ot(g, 3)), this.setAttribute("normal", new ot(p, 3)), this.setAttribute("uv", new ot(f, 2));
  }
  static fromJSON(e) {
    return new Si(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var il = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, sl = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, rl = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, ol = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, al = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, ll = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, cl = "vec3 transformed = vec3( position );", hl = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, ul = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`, dl = `#ifdef USE_IRIDESCENCE
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
#endif`, fl = `#ifdef USE_BUMPMAP
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
#endif`, pl = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, ml = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, gl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, _l = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, vl = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, xl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, yl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, wl = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, bl = `#define PI 3.141592653589793
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
}`, Ml = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Sl = `vec3 transformedNormal = objectNormal;
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
#endif`, El = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Al = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, Tl = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Cl = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Ll = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Rl = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Fl = `#ifdef USE_ENVMAP
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
#endif`, Dl = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Pl = `#ifdef USE_ENVMAP
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
#endif`, Il = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Bl = `#ifdef USE_ENVMAP
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
#endif`, zl = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Nl = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Ol = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Ul = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Gl = `#ifdef USE_GRADIENTMAP
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
}`, kl = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Wl = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Vl = `vec3 diffuse = vec3( 1.0 );
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
#endif`, Hl = `uniform bool receiveShadow;
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
#endif`, ql = `#if defined( USE_ENVMAP )
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
#endif`, Xl = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, jl = `varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`, Yl = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, $l = `varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`, Zl = `PhysicalMaterial material;
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
#endif`, Kl = `struct PhysicalMaterial {
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
}`, Jl = `
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
#endif`, Ql = `#if defined( RE_IndirectDiffuse )
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
#endif`, ec = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, tc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, nc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, ic = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, sc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, rc = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, oc = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, ac = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, lc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, cc = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, hc = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, uc = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, dc = `#ifdef USE_MORPHNORMALS
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
#endif`, fc = `#ifdef USE_MORPHTARGETS
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
#endif`, pc = `#ifdef USE_MORPHTARGETS
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
#endif`, mc = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`, gc = `#ifdef OBJECTSPACE_NORMALMAP
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
#endif`, _c = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, vc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, xc = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, yc = `#ifdef USE_NORMALMAP
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
#endif`, wc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, bc = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, Mc = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, Sc = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Ec = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Ac = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Tc = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Cc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Lc = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Rc = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Fc = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Dc = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Pc = `#ifdef USE_SHADOWMAP
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
#endif`, Ic = `#ifdef USE_SHADOWMAP
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
#endif`, Bc = `#ifdef USE_SHADOWMAP
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
#endif`, zc = `float getShadowMask() {
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
}`, Nc = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Oc = `#ifdef USE_SKINNING
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
#endif`, Uc = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Gc = `#ifdef USE_SKINNING
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
#endif`, kc = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Wc = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Vc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Hc = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, qc = `#ifdef USE_TRANSMISSION
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
#endif`, Xc = `#ifdef USE_TRANSMISSION
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
#endif`, jc = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, Yc = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, $c = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, Zc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, Kc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, Jc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, Qc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const eh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, th = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, nh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, ih = `#include <envmap_common_pars_fragment>
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
}`, sh = `#include <common>
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
}`, rh = `#if DEPTH_PACKING == 3200
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
}`, oh = `#define DISTANCE
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
}`, ah = `#define DISTANCE
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
}`, lh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, ch = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, hh = `uniform float scale;
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
}`, uh = `uniform vec3 diffuse;
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
}`, dh = `#include <common>
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
}`, fh = `uniform vec3 diffuse;
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
}`, ph = `#define LAMBERT
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
}`, mh = `uniform vec3 diffuse;
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
}`, gh = `#define MATCAP
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
}`, _h = `#define MATCAP
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
}`, vh = `#define NORMAL
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
}`, xh = `#define NORMAL
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
}`, yh = `#define PHONG
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
}`, wh = `#define PHONG
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
}`, bh = `#define STANDARD
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
}`, Mh = `#define STANDARD
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
}`, Sh = `#define TOON
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
}`, Eh = `#define TOON
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
}`, Ah = `uniform float size;
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
}`, Th = `uniform vec3 diffuse;
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
}`, Ch = `#include <common>
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
}`, Lh = `uniform vec3 color;
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
}`, Rh = `uniform float rotation;
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
}`, Fh = `uniform vec3 diffuse;
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
}`, Ce = {
  alphamap_fragment: il,
  alphamap_pars_fragment: sl,
  alphatest_fragment: rl,
  alphatest_pars_fragment: ol,
  aomap_fragment: al,
  aomap_pars_fragment: ll,
  begin_vertex: cl,
  beginnormal_vertex: hl,
  bsdfs: ul,
  iridescence_fragment: dl,
  bumpmap_pars_fragment: fl,
  clipping_planes_fragment: pl,
  clipping_planes_pars_fragment: ml,
  clipping_planes_pars_vertex: gl,
  clipping_planes_vertex: _l,
  color_fragment: vl,
  color_pars_fragment: xl,
  color_pars_vertex: yl,
  color_vertex: wl,
  common: bl,
  cube_uv_reflection_fragment: Ml,
  defaultnormal_vertex: Sl,
  displacementmap_pars_vertex: El,
  displacementmap_vertex: Al,
  emissivemap_fragment: Tl,
  emissivemap_pars_fragment: Cl,
  encodings_fragment: Ll,
  encodings_pars_fragment: Rl,
  envmap_fragment: Fl,
  envmap_common_pars_fragment: Dl,
  envmap_pars_fragment: Pl,
  envmap_pars_vertex: Il,
  envmap_physical_pars_fragment: ql,
  envmap_vertex: Bl,
  fog_vertex: zl,
  fog_pars_vertex: Nl,
  fog_fragment: Ol,
  fog_pars_fragment: Ul,
  gradientmap_pars_fragment: Gl,
  lightmap_fragment: kl,
  lightmap_pars_fragment: Wl,
  lights_lambert_vertex: Vl,
  lights_pars_begin: Hl,
  lights_toon_fragment: Xl,
  lights_toon_pars_fragment: jl,
  lights_phong_fragment: Yl,
  lights_phong_pars_fragment: $l,
  lights_physical_fragment: Zl,
  lights_physical_pars_fragment: Kl,
  lights_fragment_begin: Jl,
  lights_fragment_maps: Ql,
  lights_fragment_end: ec,
  logdepthbuf_fragment: tc,
  logdepthbuf_pars_fragment: nc,
  logdepthbuf_pars_vertex: ic,
  logdepthbuf_vertex: sc,
  map_fragment: rc,
  map_pars_fragment: oc,
  map_particle_fragment: ac,
  map_particle_pars_fragment: lc,
  metalnessmap_fragment: cc,
  metalnessmap_pars_fragment: hc,
  morphcolor_vertex: uc,
  morphnormal_vertex: dc,
  morphtarget_pars_vertex: fc,
  morphtarget_vertex: pc,
  normal_fragment_begin: mc,
  normal_fragment_maps: gc,
  normal_pars_fragment: _c,
  normal_pars_vertex: vc,
  normal_vertex: xc,
  normalmap_pars_fragment: yc,
  clearcoat_normal_fragment_begin: wc,
  clearcoat_normal_fragment_maps: bc,
  clearcoat_pars_fragment: Mc,
  iridescence_pars_fragment: Sc,
  output_fragment: Ec,
  packing: Ac,
  premultiplied_alpha_fragment: Tc,
  project_vertex: Cc,
  dithering_fragment: Lc,
  dithering_pars_fragment: Rc,
  roughnessmap_fragment: Fc,
  roughnessmap_pars_fragment: Dc,
  shadowmap_pars_fragment: Pc,
  shadowmap_pars_vertex: Ic,
  shadowmap_vertex: Bc,
  shadowmask_pars_fragment: zc,
  skinbase_vertex: Nc,
  skinning_pars_vertex: Oc,
  skinning_vertex: Uc,
  skinnormal_vertex: Gc,
  specularmap_fragment: kc,
  specularmap_pars_fragment: Wc,
  tonemapping_fragment: Vc,
  tonemapping_pars_fragment: Hc,
  transmission_fragment: qc,
  transmission_pars_fragment: Xc,
  uv_pars_fragment: jc,
  uv_pars_vertex: Yc,
  uv_vertex: $c,
  uv2_pars_fragment: Zc,
  uv2_pars_vertex: Kc,
  uv2_vertex: Jc,
  worldpos_vertex: Qc,
  background_vert: eh,
  background_frag: th,
  cube_vert: nh,
  cube_frag: ih,
  depth_vert: sh,
  depth_frag: rh,
  distanceRGBA_vert: oh,
  distanceRGBA_frag: ah,
  equirect_vert: lh,
  equirect_frag: ch,
  linedashed_vert: hh,
  linedashed_frag: uh,
  meshbasic_vert: dh,
  meshbasic_frag: fh,
  meshlambert_vert: ph,
  meshlambert_frag: mh,
  meshmatcap_vert: gh,
  meshmatcap_frag: _h,
  meshnormal_vert: vh,
  meshnormal_frag: xh,
  meshphong_vert: yh,
  meshphong_frag: wh,
  meshphysical_vert: bh,
  meshphysical_frag: Mh,
  meshtoon_vert: Sh,
  meshtoon_frag: Eh,
  points_vert: Ah,
  points_frag: Th,
  shadow_vert: Ch,
  shadow_frag: Lh,
  sprite_vert: Rh,
  sprite_frag: Fh
}, ne = {
  common: {
    diffuse: { value: /* @__PURE__ */ new xe(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: /* @__PURE__ */ new Tt() },
    uv2Transform: { value: /* @__PURE__ */ new Tt() },
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
    normalScale: { value: /* @__PURE__ */ new be(1, 1) }
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
    fogColor: { value: /* @__PURE__ */ new xe(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new xe(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Tt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new xe(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new be(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Tt() }
  }
}, Gt = {
  basic: {
    uniforms: /* @__PURE__ */ rt([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.fog
    ]),
    vertexShader: Ce.meshbasic_vert,
    fragmentShader: Ce.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ rt([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new xe(0) }
      }
    ]),
    vertexShader: Ce.meshlambert_vert,
    fragmentShader: Ce.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ rt([
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
        emissive: { value: /* @__PURE__ */ new xe(0) },
        specular: { value: /* @__PURE__ */ new xe(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ce.meshphong_vert,
    fragmentShader: Ce.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ rt([
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
        emissive: { value: /* @__PURE__ */ new xe(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Ce.meshphysical_vert,
    fragmentShader: Ce.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ rt([
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
        emissive: { value: /* @__PURE__ */ new xe(0) }
      }
    ]),
    vertexShader: Ce.meshtoon_vert,
    fragmentShader: Ce.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ rt([
      ne.common,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ce.meshmatcap_vert,
    fragmentShader: Ce.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ rt([
      ne.points,
      ne.fog
    ]),
    vertexShader: Ce.points_vert,
    fragmentShader: Ce.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ rt([
      ne.common,
      ne.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ce.linedashed_vert,
    fragmentShader: Ce.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ rt([
      ne.common,
      ne.displacementmap
    ]),
    vertexShader: Ce.depth_vert,
    fragmentShader: Ce.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ rt([
      ne.common,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ce.meshnormal_vert,
    fragmentShader: Ce.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ rt([
      ne.sprite,
      ne.fog
    ]),
    vertexShader: Ce.sprite_vert,
    fragmentShader: Ce.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Tt() },
      t2D: { value: null }
    },
    vertexShader: Ce.background_vert,
    fragmentShader: Ce.background_frag
  },
  cube: {
    uniforms: /* @__PURE__ */ rt([
      ne.envmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ce.cube_vert,
    fragmentShader: Ce.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ce.equirect_vert,
    fragmentShader: Ce.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ rt([
      ne.common,
      ne.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new P() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ce.distanceRGBA_vert,
    fragmentShader: Ce.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ rt([
      ne.lights,
      ne.fog,
      {
        color: { value: /* @__PURE__ */ new xe(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ce.shadow_vert,
    fragmentShader: Ce.shadow_frag
  }
};
Gt.physical = {
  uniforms: /* @__PURE__ */ rt([
    Gt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: /* @__PURE__ */ new be(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new xe(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: /* @__PURE__ */ new be() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new xe(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: /* @__PURE__ */ new xe(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: Ce.meshphysical_vert,
  fragmentShader: Ce.meshphysical_frag
};
function Dh(c, e, t, n, i, s) {
  const o = new xe(0);
  let r = i === !0 ? 0 : 1, l, a, h = null, d = 0, u = null;
  function m(p, f) {
    let _ = !1, v = f.isScene === !0 ? f.background : null;
    v && v.isTexture && (v = e.get(v));
    const y = c.xr, x = y.getSession && y.getSession();
    x && x.environmentBlendMode === "additive" && (v = null), v === null ? g(o, r) : v && v.isColor && (g(v, 1), _ = !0), (c.autoClear || _) && c.clear(c.autoClearColor, c.autoClearDepth, c.autoClearStencil), v && (v.isCubeTexture || v.mapping === 306) ? (a === void 0 && (a = new ke(
      new oi(1, 1, 1),
      new Ln({
        name: "BackgroundCubeMaterial",
        uniforms: ii(Gt.cube.uniforms),
        vertexShader: Gt.cube.vertexShader,
        fragmentShader: Gt.cube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), a.geometry.deleteAttribute("normal"), a.geometry.deleteAttribute("uv"), a.onBeforeRender = function(M, S, C) {
      this.matrixWorld.copyPosition(C.matrixWorld);
    }, Object.defineProperty(a.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), n.update(a)), a.material.uniforms.envMap.value = v, a.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, (h !== v || d !== v.version || u !== c.toneMapping) && (a.material.needsUpdate = !0, h = v, d = v.version, u = c.toneMapping), a.layers.enableAll(), p.unshift(a, a.geometry, a.material, 0, 0, null)) : v && v.isTexture && (l === void 0 && (l = new ke(
      new Si(2, 2),
      new Ln({
        name: "BackgroundMaterial",
        uniforms: ii(Gt.background.uniforms),
        vertexShader: Gt.background.vertexShader,
        fragmentShader: Gt.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), n.update(l)), l.material.uniforms.t2D.value = v, v.matrixAutoUpdate === !0 && v.updateMatrix(), l.material.uniforms.uvTransform.value.copy(v.matrix), (h !== v || d !== v.version || u !== c.toneMapping) && (l.material.needsUpdate = !0, h = v, d = v.version, u = c.toneMapping), l.layers.enableAll(), p.unshift(l, l.geometry, l.material, 0, 0, null));
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
function Ph(c, e, t, n) {
  const i = c.getParameter(34921), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, r = {}, l = f(null);
  let a = l, h = !1;
  function d(F, I, L, G, U) {
    let N = !1;
    if (o) {
      const q = p(G, L, I);
      a !== q && (a = q, m(a.object)), N = _(F, G, L, U), N && v(F, G, L, U);
    } else {
      const q = I.wireframe === !0;
      (a.geometry !== G.id || a.program !== L.id || a.wireframe !== q) && (a.geometry = G.id, a.program = L.id, a.wireframe = q, N = !0);
    }
    U !== null && t.update(U, 34963), (N || h) && (h = !1, w(F, I, L, G), U !== null && c.bindBuffer(34963, t.get(U).buffer));
  }
  function u() {
    return n.isWebGL2 ? c.createVertexArray() : s.createVertexArrayOES();
  }
  function m(F) {
    return n.isWebGL2 ? c.bindVertexArray(F) : s.bindVertexArrayOES(F);
  }
  function g(F) {
    return n.isWebGL2 ? c.deleteVertexArray(F) : s.deleteVertexArrayOES(F);
  }
  function p(F, I, L) {
    const G = L.wireframe === !0;
    let U = r[F.id];
    U === void 0 && (U = {}, r[F.id] = U);
    let N = U[I.id];
    N === void 0 && (N = {}, U[I.id] = N);
    let q = N[G];
    return q === void 0 && (q = f(u()), N[G] = q), q;
  }
  function f(F) {
    const I = [], L = [], G = [];
    for (let U = 0; U < i; U++)
      I[U] = 0, L[U] = 0, G[U] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: I,
      enabledAttributes: L,
      attributeDivisors: G,
      object: F,
      attributes: {},
      index: null
    };
  }
  function _(F, I, L, G) {
    const U = a.attributes, N = I.attributes;
    let q = 0;
    const J = L.getAttributes();
    for (const k in J)
      if (J[k].location >= 0) {
        const re = U[k];
        let ge = N[k];
        if (ge === void 0 && (k === "instanceMatrix" && F.instanceMatrix && (ge = F.instanceMatrix), k === "instanceColor" && F.instanceColor && (ge = F.instanceColor)), re === void 0 || re.attribute !== ge || ge && re.data !== ge.data)
          return !0;
        q++;
      }
    return a.attributesNum !== q || a.index !== G;
  }
  function v(F, I, L, G) {
    const U = {}, N = I.attributes;
    let q = 0;
    const J = L.getAttributes();
    for (const k in J)
      if (J[k].location >= 0) {
        let re = N[k];
        re === void 0 && (k === "instanceMatrix" && F.instanceMatrix && (re = F.instanceMatrix), k === "instanceColor" && F.instanceColor && (re = F.instanceColor));
        const ge = {};
        ge.attribute = re, re && re.data && (ge.data = re.data), U[k] = ge, q++;
      }
    a.attributes = U, a.attributesNum = q, a.index = G;
  }
  function y() {
    const F = a.newAttributes;
    for (let I = 0, L = F.length; I < L; I++)
      F[I] = 0;
  }
  function x(F) {
    M(F, 0);
  }
  function M(F, I) {
    const L = a.newAttributes, G = a.enabledAttributes, U = a.attributeDivisors;
    L[F] = 1, G[F] === 0 && (c.enableVertexAttribArray(F), G[F] = 1), U[F] !== I && ((n.isWebGL2 ? c : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](F, I), U[F] = I);
  }
  function S() {
    const F = a.newAttributes, I = a.enabledAttributes;
    for (let L = 0, G = I.length; L < G; L++)
      I[L] !== F[L] && (c.disableVertexAttribArray(L), I[L] = 0);
  }
  function C(F, I, L, G, U, N) {
    n.isWebGL2 === !0 && (L === 5124 || L === 5125) ? c.vertexAttribIPointer(F, I, L, U, N) : c.vertexAttribPointer(F, I, L, G, U, N);
  }
  function w(F, I, L, G) {
    if (n.isWebGL2 === !1 && (F.isInstancedMesh || G.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    y();
    const U = G.attributes, N = L.getAttributes(), q = I.defaultAttributeValues;
    for (const J in N) {
      const k = N[J];
      if (k.location >= 0) {
        let ee = U[J];
        if (ee === void 0 && (J === "instanceMatrix" && F.instanceMatrix && (ee = F.instanceMatrix), J === "instanceColor" && F.instanceColor && (ee = F.instanceColor)), ee !== void 0) {
          const re = ee.normalized, ge = ee.itemSize, Z = t.get(ee);
          if (Z === void 0)
            continue;
          const De = Z.buffer, ve = Z.type, ye = Z.bytesPerElement;
          if (ee.isInterleavedBufferAttribute) {
            const ue = ee.data, Oe = ue.stride, Te = ee.offset;
            if (ue.isInstancedInterleavedBuffer) {
              for (let me = 0; me < k.locationSize; me++)
                M(k.location + me, ue.meshPerAttribute);
              F.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = ue.meshPerAttribute * ue.count);
            } else
              for (let me = 0; me < k.locationSize; me++)
                x(k.location + me);
            c.bindBuffer(34962, De);
            for (let me = 0; me < k.locationSize; me++)
              C(
                k.location + me,
                ge / k.locationSize,
                ve,
                re,
                Oe * ye,
                (Te + ge / k.locationSize * me) * ye
              );
          } else {
            if (ee.isInstancedBufferAttribute) {
              for (let ue = 0; ue < k.locationSize; ue++)
                M(k.location + ue, ee.meshPerAttribute);
              F.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = ee.meshPerAttribute * ee.count);
            } else
              for (let ue = 0; ue < k.locationSize; ue++)
                x(k.location + ue);
            c.bindBuffer(34962, De);
            for (let ue = 0; ue < k.locationSize; ue++)
              C(
                k.location + ue,
                ge / k.locationSize,
                ve,
                re,
                ge * ye,
                ge / k.locationSize * ue * ye
              );
          }
        } else if (q !== void 0) {
          const re = q[J];
          if (re !== void 0)
            switch (re.length) {
              case 2:
                c.vertexAttrib2fv(k.location, re);
                break;
              case 3:
                c.vertexAttrib3fv(k.location, re);
                break;
              case 4:
                c.vertexAttrib4fv(k.location, re);
                break;
              default:
                c.vertexAttrib1fv(k.location, re);
            }
        }
      }
    }
    S();
  }
  function A() {
    W();
    for (const F in r) {
      const I = r[F];
      for (const L in I) {
        const G = I[L];
        for (const U in G)
          g(G[U].object), delete G[U];
        delete I[L];
      }
      delete r[F];
    }
  }
  function D(F) {
    if (r[F.id] === void 0)
      return;
    const I = r[F.id];
    for (const L in I) {
      const G = I[L];
      for (const U in G)
        g(G[U].object), delete G[U];
      delete I[L];
    }
    delete r[F.id];
  }
  function B(F) {
    for (const I in r) {
      const L = r[I];
      if (L[F.id] === void 0)
        continue;
      const G = L[F.id];
      for (const U in G)
        g(G[U].object), delete G[U];
      delete L[F.id];
    }
  }
  function W() {
    z(), h = !0, a !== l && (a = l, m(a.object));
  }
  function z() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: d,
    reset: W,
    resetDefaultState: z,
    dispose: A,
    releaseStatesOfGeometry: D,
    releaseStatesOfProgram: B,
    initAttributes: y,
    enableAttribute: x,
    disableUnusedAttributes: S
  };
}
function Ih(c, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(a) {
    s = a;
  }
  function r(a, h) {
    c.drawArrays(s, a, h), t.update(h, s, 1);
  }
  function l(a, h, d) {
    if (d === 0)
      return;
    let u, m;
    if (i)
      u = c, m = "drawArraysInstanced";
    else if (u = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", u === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    u[m](s, a, h, d), t.update(h, s, d);
  }
  this.setMode = o, this.render = r, this.renderInstances = l;
}
function Bh(c, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const C = e.get("EXT_texture_filter_anisotropic");
      n = c.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(C) {
    if (C === "highp") {
      if (c.getShaderPrecisionFormat(35633, 36338).precision > 0 && c.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      C = "mediump";
    }
    return C === "mediump" && c.getShaderPrecisionFormat(35633, 36337).precision > 0 && c.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && c instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && c instanceof WebGL2ComputeRenderingContext;
  let r = t.precision !== void 0 ? t.precision : "highp";
  const l = s(r);
  l !== r && (console.warn("THREE.WebGLRenderer:", r, "not supported, using", l, "instead."), r = l);
  const a = o || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, d = c.getParameter(34930), u = c.getParameter(35660), m = c.getParameter(3379), g = c.getParameter(34076), p = c.getParameter(34921), f = c.getParameter(36347), _ = c.getParameter(36348), v = c.getParameter(36349), y = u > 0, x = o || e.has("OES_texture_float"), M = y && x, S = o ? c.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: a,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: r,
    logarithmicDepthBuffer: h,
    maxTextures: d,
    maxVertexTextures: u,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: p,
    maxVertexUniforms: f,
    maxVaryings: _,
    maxFragmentUniforms: v,
    vertexTextures: y,
    floatFragmentTextures: x,
    floatVertexTextures: M,
    maxSamples: S
  };
}
function zh(c) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const o = new xn(), r = new Tt(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, u, m) {
    const g = d.length !== 0 || u || n !== 0 || i;
    return i = u, t = h(d, m, 0), n = d.length, g;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1, a();
  }, this.setState = function(d, u, m) {
    const g = d.clippingPlanes, p = d.clipIntersection, f = d.clipShadows, _ = c.get(d);
    if (!i || g === null || g.length === 0 || s && !f)
      s ? h(null) : a();
    else {
      const v = s ? 0 : n, y = v * 4;
      let x = _.clippingState || null;
      l.value = x, x = h(g, u, y, m);
      for (let M = 0; M !== y; ++M)
        x[M] = t[M];
      _.clippingState = x, this.numIntersection = p ? this.numPlanes : 0, this.numPlanes += v;
    }
  };
  function a() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(d, u, m, g) {
    const p = d !== null ? d.length : 0;
    let f = null;
    if (p !== 0) {
      if (f = l.value, g !== !0 || f === null) {
        const _ = m + p * 4, v = u.matrixWorldInverse;
        r.getNormalMatrix(v), (f === null || f.length < _) && (f = new Float32Array(_));
        for (let y = 0, x = m; y !== p; ++y, x += 4)
          o.copy(d[y]).applyMatrix4(v, r), o.normal.toArray(f, x), f[x + 3] = o.constant;
      }
      l.value = f, l.needsUpdate = !0;
    }
    return e.numPlanes = p, e.numIntersection = 0, f;
  }
}
function Nh(c) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, r) {
    return r === 303 ? o.mapping = 301 : r === 304 && (o.mapping = 302), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const r = o.mapping;
      if (r === 303 || r === 304)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const a = new Qa(l.height / 2);
            return a.fromEquirectangularTexture(c, o), e.set(o, a), o.addEventListener("dispose", i), t(a.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function i(o) {
    const r = o.target;
    r.removeEventListener("dispose", i);
    const l = e.get(r);
    l !== void 0 && (e.delete(r), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class Oh extends ea {
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
    let s = n - e, o = n + e, r = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const a = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += a * this.view.offsetX, o = s + a * this.view.width, r -= h * this.view.offsetY, l = r - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, r, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const ei = 4, Gr = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], wn = 20, ks = /* @__PURE__ */ new Oh(), kr = /* @__PURE__ */ new xe();
let Ws = null;
const yn = (1 + Math.sqrt(5)) / 2, Xn = 1 / yn, Wr = [
  /* @__PURE__ */ new P(1, 1, 1),
  /* @__PURE__ */ new P(-1, 1, 1),
  /* @__PURE__ */ new P(1, 1, -1),
  /* @__PURE__ */ new P(-1, 1, -1),
  /* @__PURE__ */ new P(0, yn, Xn),
  /* @__PURE__ */ new P(0, yn, -Xn),
  /* @__PURE__ */ new P(Xn, 0, yn),
  /* @__PURE__ */ new P(-Xn, 0, yn),
  /* @__PURE__ */ new P(yn, Xn, 0),
  /* @__PURE__ */ new P(-yn, Xn, 0)
];
class hr {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    Ws = this._renderer.getRenderTarget(), this._setSize(256);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = qr(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Hr(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Ws), e.scissorTest = !1, ji(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Ws = this._renderer.getRenderTarget();
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
    }, i = Vr(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Vr(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Uh(s)), this._blurMaterial = Gh(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new ke(this._lodPlanes[0], e);
    this._renderer.compile(t, ks);
  }
  _sceneToCubeUV(e, t, n, i) {
    const r = new ft(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], a = [1, 1, 1, -1, -1, -1], h = this._renderer, d = h.autoClear, u = h.toneMapping;
    h.getClearColor(kr), h.toneMapping = 0, h.autoClear = !1;
    const m = new ds({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    }), g = new ke(new oi(), m);
    let p = !1;
    const f = e.background;
    f ? f.isColor && (m.color.copy(f), e.background = null, p = !0) : (m.color.copy(kr), p = !0);
    for (let _ = 0; _ < 6; _++) {
      const v = _ % 3;
      v === 0 ? (r.up.set(0, l[_], 0), r.lookAt(a[_], 0, 0)) : v === 1 ? (r.up.set(0, 0, l[_]), r.lookAt(0, a[_], 0)) : (r.up.set(0, l[_], 0), r.lookAt(0, 0, a[_]));
      const y = this._cubeSize;
      ji(i, v * y, _ > 2 ? y : 0, y, y), h.setRenderTarget(i), p && h.render(g, r), h.render(e, r);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = u, h.autoClear = d, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === 301 || e.mapping === 302;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = qr()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Hr());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, o = new ke(this._lodPlanes[0], s), r = s.uniforms;
    r.envMap.value = e;
    const l = this._cubeSize;
    ji(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, ks);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), o = Wr[(i - 1) % Wr.length];
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
    const l = this._renderer, a = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, d = new ke(this._lodPlanes[i], a), u = a.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * wn - 1), p = s / g, f = isFinite(s) ? 1 + Math.floor(h * p) : wn;
    f > wn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${wn}`);
    const _ = [];
    let v = 0;
    for (let C = 0; C < wn; ++C) {
      const w = C / p, A = Math.exp(-w * w / 2);
      _.push(A), C === 0 ? v += A : C < f && (v += 2 * A);
    }
    for (let C = 0; C < _.length; C++)
      _[C] = _[C] / v;
    u.envMap.value = e.texture, u.samples.value = f, u.weights.value = _, u.latitudinal.value = o === "latitudinal", r && (u.poleAxis.value = r);
    const { _lodMax: y } = this;
    u.dTheta.value = g, u.mipInt.value = y - n;
    const x = this._sizeLods[i], M = 3 * x * (i > y - ei ? i - y + ei : 0), S = 4 * (this._cubeSize - x);
    ji(t, M, S, 3 * x, 2 * x), l.setRenderTarget(t), l.render(d, ks);
  }
}
function Uh(c) {
  const e = [], t = [], n = [];
  let i = c;
  const s = c - ei + 1 + Gr.length;
  for (let o = 0; o < s; o++) {
    const r = Math.pow(2, i);
    t.push(r);
    let l = 1 / r;
    o > c - ei ? l = Gr[o - c + ei - 1] : o === 0 && (l = 0), n.push(l);
    const a = 1 / (r - 2), h = -a, d = 1 + a, u = [h, h, d, h, d, d, h, h, d, d, h, d], m = 6, g = 6, p = 3, f = 2, _ = 1, v = new Float32Array(p * g * m), y = new Float32Array(f * g * m), x = new Float32Array(_ * g * m);
    for (let S = 0; S < m; S++) {
      const C = S % 3 * 2 / 3 - 1, w = S > 2 ? 0 : -1, A = [
        C,
        w,
        0,
        C + 2 / 3,
        w,
        0,
        C + 2 / 3,
        w + 1,
        0,
        C,
        w,
        0,
        C + 2 / 3,
        w + 1,
        0,
        C,
        w + 1,
        0
      ];
      v.set(A, p * g * S), y.set(u, f * g * S);
      const D = [S, S, S, S, S, S];
      x.set(D, _ * g * S);
    }
    const M = new pt();
    M.setAttribute("position", new yt(v, p)), M.setAttribute("uv", new yt(y, f)), M.setAttribute("faceIndex", new yt(x, _)), e.push(M), i > ei && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Vr(c, e, t) {
  const n = new Cn(c, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function ji(c, e, t, n, i) {
  c.viewport.set(e, t, n, i), c.scissor.set(e, t, n, i);
}
function Gh(c, e, t) {
  const n = new Float32Array(wn), i = new P(0, 1, 0);
  return new Ln({
    name: "SphericalGaussianBlur",
    defines: {
      n: wn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${c}.0`
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
    vertexShader: _r(),
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
function Hr() {
  return new Ln({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: _r(),
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
function qr() {
  return new Ln({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: _r(),
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
function _r() {
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
function kh(c) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(r) {
    if (r && r.isTexture) {
      const l = r.mapping, a = l === 303 || l === 304, h = l === 301 || l === 302;
      if (a || h)
        if (r.isRenderTargetTexture && r.needsPMREMUpdate === !0) {
          r.needsPMREMUpdate = !1;
          let d = e.get(r);
          return t === null && (t = new hr(c)), d = a ? t.fromEquirectangular(r, d) : t.fromCubemap(r, d), e.set(r, d), d.texture;
        } else {
          if (e.has(r))
            return e.get(r).texture;
          {
            const d = r.image;
            if (a && d && d.height > 0 || h && d && i(d)) {
              t === null && (t = new hr(c));
              const u = a ? t.fromEquirectangular(r) : t.fromCubemap(r);
              return e.set(r, u), r.addEventListener("dispose", s), u.texture;
            } else
              return null;
          }
        }
    }
    return r;
  }
  function i(r) {
    let l = 0;
    const a = 6;
    for (let h = 0; h < a; h++)
      r[h] !== void 0 && l++;
    return l === a;
  }
  function s(r) {
    const l = r.target;
    l.removeEventListener("dispose", s);
    const a = e.get(l);
    a !== void 0 && (e.delete(l), a.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function Wh(c) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = c.getExtension("WEBGL_depth_texture") || c.getExtension("MOZ_WEBGL_depth_texture") || c.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = c.getExtension("EXT_texture_filter_anisotropic") || c.getExtension("MOZ_EXT_texture_filter_anisotropic") || c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = c.getExtension("WEBGL_compressed_texture_s3tc") || c.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = c.getExtension("WEBGL_compressed_texture_pvrtc") || c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = c.getExtension(n);
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
function Vh(c, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function o(d) {
    const u = d.target;
    u.index !== null && e.remove(u.index);
    for (const g in u.attributes)
      e.remove(u.attributes[g]);
    u.removeEventListener("dispose", o), delete i[u.id];
    const m = s.get(u);
    m && (e.remove(m), s.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, t.memory.geometries--;
  }
  function r(d, u) {
    return i[u.id] === !0 || (u.addEventListener("dispose", o), i[u.id] = !0, t.memory.geometries++), u;
  }
  function l(d) {
    const u = d.attributes;
    for (const g in u)
      e.update(u[g], 34962);
    const m = d.morphAttributes;
    for (const g in m) {
      const p = m[g];
      for (let f = 0, _ = p.length; f < _; f++)
        e.update(p[f], 34962);
    }
  }
  function a(d) {
    const u = [], m = d.index, g = d.attributes.position;
    let p = 0;
    if (m !== null) {
      const v = m.array;
      p = m.version;
      for (let y = 0, x = v.length; y < x; y += 3) {
        const M = v[y + 0], S = v[y + 1], C = v[y + 2];
        u.push(M, S, S, C, C, M);
      }
    } else {
      const v = g.array;
      p = g.version;
      for (let y = 0, x = v.length / 3 - 1; y < x; y += 3) {
        const M = y + 0, S = y + 1, C = y + 2;
        u.push(M, S, S, C, C, M);
      }
    }
    const f = new (qo(u) ? Qo : Jo)(u, 1);
    f.version = p;
    const _ = s.get(d);
    _ && e.remove(_), s.set(d, f);
  }
  function h(d) {
    const u = s.get(d);
    if (u) {
      const m = d.index;
      m !== null && u.version < m.version && a(d);
    } else
      a(d);
    return s.get(d);
  }
  return {
    get: r,
    update: l,
    getWireframeAttribute: h
  };
}
function Hh(c, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(u) {
    s = u;
  }
  let r, l;
  function a(u) {
    r = u.type, l = u.bytesPerElement;
  }
  function h(u, m) {
    c.drawElements(s, m, r, u * l), t.update(m, s, 1);
  }
  function d(u, m, g) {
    if (g === 0)
      return;
    let p, f;
    if (i)
      p = c, f = "drawElementsInstanced";
    else if (p = e.get("ANGLE_instanced_arrays"), f = "drawElementsInstancedANGLE", p === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    p[f](s, m, r, u * l, g), t.update(m, s, g);
  }
  this.setMode = o, this.setIndex = a, this.render = h, this.renderInstances = d;
}
function qh(c) {
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
function Xh(c, e) {
  return c[0] - e[0];
}
function jh(c, e) {
  return Math.abs(e[1]) - Math.abs(c[1]);
}
function Vs(c, e) {
  let t = 1;
  const n = e.isInterleavedBufferAttribute ? e.data.array : e.array;
  n instanceof Int8Array ? t = 127 : n instanceof Uint8Array ? t = 255 : n instanceof Uint16Array ? t = 65535 : n instanceof Int16Array ? t = 32767 : n instanceof Int32Array ? t = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", n), c.divideScalar(t);
}
function Yh(c, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), o = new Ge(), r = [];
  for (let a = 0; a < 8; a++)
    r[a] = [a, 0];
  function l(a, h, d, u) {
    const m = a.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, p = g !== void 0 ? g.length : 0;
      let f = s.get(h);
      if (f === void 0 || f.count !== p) {
        let I = function() {
          z.dispose(), s.delete(h), h.removeEventListener("dispose", I);
        };
        f !== void 0 && f.texture.dispose();
        const y = h.morphAttributes.position !== void 0, x = h.morphAttributes.normal !== void 0, M = h.morphAttributes.color !== void 0, S = h.morphAttributes.position || [], C = h.morphAttributes.normal || [], w = h.morphAttributes.color || [];
        let A = 0;
        y === !0 && (A = 1), x === !0 && (A = 2), M === !0 && (A = 3);
        let D = h.attributes.position.count * A, B = 1;
        D > e.maxTextureSize && (B = Math.ceil(D / e.maxTextureSize), D = e.maxTextureSize);
        const W = new Float32Array(D * B * 4 * p), z = new $o(W, D, B, p);
        z.type = 1015, z.needsUpdate = !0;
        const F = A * 4;
        for (let L = 0; L < p; L++) {
          const G = S[L], U = C[L], N = w[L], q = D * B * 4 * L;
          for (let J = 0; J < G.count; J++) {
            const k = J * F;
            y === !0 && (o.fromBufferAttribute(G, J), G.normalized === !0 && Vs(o, G), W[q + k + 0] = o.x, W[q + k + 1] = o.y, W[q + k + 2] = o.z, W[q + k + 3] = 0), x === !0 && (o.fromBufferAttribute(U, J), U.normalized === !0 && Vs(o, U), W[q + k + 4] = o.x, W[q + k + 5] = o.y, W[q + k + 6] = o.z, W[q + k + 7] = 0), M === !0 && (o.fromBufferAttribute(N, J), N.normalized === !0 && Vs(o, N), W[q + k + 8] = o.x, W[q + k + 9] = o.y, W[q + k + 10] = o.z, W[q + k + 11] = N.itemSize === 4 ? o.w : 1);
          }
        }
        f = {
          count: p,
          texture: z,
          size: new be(D, B)
        }, s.set(h, f), h.addEventListener("dispose", I);
      }
      let _ = 0;
      for (let y = 0; y < m.length; y++)
        _ += m[y];
      const v = h.morphTargetsRelative ? 1 : 1 - _;
      u.getUniforms().setValue(c, "morphTargetBaseInfluence", v), u.getUniforms().setValue(c, "morphTargetInfluences", m), u.getUniforms().setValue(c, "morphTargetsTexture", f.texture, t), u.getUniforms().setValue(c, "morphTargetsTextureSize", f.size);
    } else {
      const g = m === void 0 ? 0 : m.length;
      let p = n[h.id];
      if (p === void 0 || p.length !== g) {
        p = [];
        for (let x = 0; x < g; x++)
          p[x] = [x, 0];
        n[h.id] = p;
      }
      for (let x = 0; x < g; x++) {
        const M = p[x];
        M[0] = x, M[1] = m[x];
      }
      p.sort(jh);
      for (let x = 0; x < 8; x++)
        x < g && p[x][1] ? (r[x][0] = p[x][0], r[x][1] = p[x][1]) : (r[x][0] = Number.MAX_SAFE_INTEGER, r[x][1] = 0);
      r.sort(Xh);
      const f = h.morphAttributes.position, _ = h.morphAttributes.normal;
      let v = 0;
      for (let x = 0; x < 8; x++) {
        const M = r[x], S = M[0], C = M[1];
        S !== Number.MAX_SAFE_INTEGER && C ? (f && h.getAttribute("morphTarget" + x) !== f[S] && h.setAttribute("morphTarget" + x, f[S]), _ && h.getAttribute("morphNormal" + x) !== _[S] && h.setAttribute("morphNormal" + x, _[S]), i[x] = C, v += C) : (f && h.hasAttribute("morphTarget" + x) === !0 && h.deleteAttribute("morphTarget" + x), _ && h.hasAttribute("morphNormal" + x) === !0 && h.deleteAttribute("morphNormal" + x), i[x] = 0);
      }
      const y = h.morphTargetsRelative ? 1 : 1 - v;
      u.getUniforms().setValue(c, "morphTargetBaseInfluence", y), u.getUniforms().setValue(c, "morphTargetInfluences", i);
    }
  }
  return {
    update: l
  };
}
function $h(c, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const a = n.render.frame, h = l.geometry, d = e.get(l, h);
    return i.get(d) !== a && (e.update(d), i.set(d, a)), l.isInstancedMesh && (l.hasEventListener("dispose", r) === !1 && l.addEventListener("dispose", r), t.update(l.instanceMatrix, 34962), l.instanceColor !== null && t.update(l.instanceColor, 34962)), d;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function r(l) {
    const a = l.target;
    a.removeEventListener("dispose", r), t.remove(a.instanceMatrix), a.instanceColor !== null && t.remove(a.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
const ia = /* @__PURE__ */ new wt(), sa = /* @__PURE__ */ new $o(), ra = /* @__PURE__ */ new Na(), oa = /* @__PURE__ */ new ta(), Xr = [], jr = [], Yr = new Float32Array(16), $r = new Float32Array(9), Zr = new Float32Array(4);
function ai(c, e, t) {
  const n = c[0];
  if (n <= 0 || n > 0)
    return c;
  const i = e * t;
  let s = Xr[i];
  if (s === void 0 && (s = new Float32Array(i), Xr[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, r = 0; o !== e; ++o)
      r += t, c[o].toArray(s, r);
  }
  return s;
}
function ht(c, e) {
  if (c.length !== e.length)
    return !1;
  for (let t = 0, n = c.length; t < n; t++)
    if (c[t] !== e[t])
      return !1;
  return !0;
}
function ut(c, e) {
  for (let t = 0, n = e.length; t < n; t++)
    c[t] = e[t];
}
function fs(c, e) {
  let t = jr[e];
  t === void 0 && (t = new Int32Array(e), jr[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = c.allocateTextureUnit();
  return t;
}
function Zh(c, e) {
  const t = this.cache;
  t[0] !== e && (c.uniform1f(this.addr, e), t[0] = e);
}
function Kh(c, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (c.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ht(t, e))
      return;
    c.uniform2fv(this.addr, e), ut(t, e);
  }
}
function Jh(c, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (c.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (c.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ht(t, e))
      return;
    c.uniform3fv(this.addr, e), ut(t, e);
  }
}
function Qh(c, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (c.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ht(t, e))
      return;
    c.uniform4fv(this.addr, e), ut(t, e);
  }
}
function eu(c, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ht(t, e))
      return;
    c.uniformMatrix2fv(this.addr, !1, e), ut(t, e);
  } else {
    if (ht(t, n))
      return;
    Zr.set(n), c.uniformMatrix2fv(this.addr, !1, Zr), ut(t, n);
  }
}
function tu(c, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ht(t, e))
      return;
    c.uniformMatrix3fv(this.addr, !1, e), ut(t, e);
  } else {
    if (ht(t, n))
      return;
    $r.set(n), c.uniformMatrix3fv(this.addr, !1, $r), ut(t, n);
  }
}
function nu(c, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ht(t, e))
      return;
    c.uniformMatrix4fv(this.addr, !1, e), ut(t, e);
  } else {
    if (ht(t, n))
      return;
    Yr.set(n), c.uniformMatrix4fv(this.addr, !1, Yr), ut(t, n);
  }
}
function iu(c, e) {
  const t = this.cache;
  t[0] !== e && (c.uniform1i(this.addr, e), t[0] = e);
}
function su(c, e) {
  const t = this.cache;
  ht(t, e) || (c.uniform2iv(this.addr, e), ut(t, e));
}
function ru(c, e) {
  const t = this.cache;
  ht(t, e) || (c.uniform3iv(this.addr, e), ut(t, e));
}
function ou(c, e) {
  const t = this.cache;
  ht(t, e) || (c.uniform4iv(this.addr, e), ut(t, e));
}
function au(c, e) {
  const t = this.cache;
  t[0] !== e && (c.uniform1ui(this.addr, e), t[0] = e);
}
function lu(c, e) {
  const t = this.cache;
  ht(t, e) || (c.uniform2uiv(this.addr, e), ut(t, e));
}
function cu(c, e) {
  const t = this.cache;
  ht(t, e) || (c.uniform3uiv(this.addr, e), ut(t, e));
}
function hu(c, e) {
  const t = this.cache;
  ht(t, e) || (c.uniform4uiv(this.addr, e), ut(t, e));
}
function uu(c, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (c.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || ia, i);
}
function du(c, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (c.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || ra, i);
}
function fu(c, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (c.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || oa, i);
}
function pu(c, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (c.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || sa, i);
}
function mu(c) {
  switch (c) {
    case 5126:
      return Zh;
    case 35664:
      return Kh;
    case 35665:
      return Jh;
    case 35666:
      return Qh;
    case 35674:
      return eu;
    case 35675:
      return tu;
    case 35676:
      return nu;
    case 5124:
    case 35670:
      return iu;
    case 35667:
    case 35671:
      return su;
    case 35668:
    case 35672:
      return ru;
    case 35669:
    case 35673:
      return ou;
    case 5125:
      return au;
    case 36294:
      return lu;
    case 36295:
      return cu;
    case 36296:
      return hu;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return uu;
    case 35679:
    case 36299:
    case 36307:
      return du;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return fu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return pu;
  }
}
function gu(c, e) {
  c.uniform1fv(this.addr, e);
}
function _u(c, e) {
  const t = ai(e, this.size, 2);
  c.uniform2fv(this.addr, t);
}
function vu(c, e) {
  const t = ai(e, this.size, 3);
  c.uniform3fv(this.addr, t);
}
function xu(c, e) {
  const t = ai(e, this.size, 4);
  c.uniform4fv(this.addr, t);
}
function yu(c, e) {
  const t = ai(e, this.size, 4);
  c.uniformMatrix2fv(this.addr, !1, t);
}
function wu(c, e) {
  const t = ai(e, this.size, 9);
  c.uniformMatrix3fv(this.addr, !1, t);
}
function bu(c, e) {
  const t = ai(e, this.size, 16);
  c.uniformMatrix4fv(this.addr, !1, t);
}
function Mu(c, e) {
  c.uniform1iv(this.addr, e);
}
function Su(c, e) {
  c.uniform2iv(this.addr, e);
}
function Eu(c, e) {
  c.uniform3iv(this.addr, e);
}
function Au(c, e) {
  c.uniform4iv(this.addr, e);
}
function Tu(c, e) {
  c.uniform1uiv(this.addr, e);
}
function Cu(c, e) {
  c.uniform2uiv(this.addr, e);
}
function Lu(c, e) {
  c.uniform3uiv(this.addr, e);
}
function Ru(c, e) {
  c.uniform4uiv(this.addr, e);
}
function Fu(c, e, t) {
  const n = e.length, i = fs(t, n);
  c.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s)
    t.setTexture2D(e[s] || ia, i[s]);
}
function Du(c, e, t) {
  const n = e.length, i = fs(t, n);
  c.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s)
    t.setTexture3D(e[s] || ra, i[s]);
}
function Pu(c, e, t) {
  const n = e.length, i = fs(t, n);
  c.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s)
    t.setTextureCube(e[s] || oa, i[s]);
}
function Iu(c, e, t) {
  const n = e.length, i = fs(t, n);
  c.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s)
    t.setTexture2DArray(e[s] || sa, i[s]);
}
function Bu(c) {
  switch (c) {
    case 5126:
      return gu;
    case 35664:
      return _u;
    case 35665:
      return vu;
    case 35666:
      return xu;
    case 35674:
      return yu;
    case 35675:
      return wu;
    case 35676:
      return bu;
    case 5124:
    case 35670:
      return Mu;
    case 35667:
    case 35671:
      return Su;
    case 35668:
    case 35672:
      return Eu;
    case 35669:
    case 35673:
      return Au;
    case 5125:
      return Tu;
    case 36294:
      return Cu;
    case 36295:
      return Lu;
    case 36296:
      return Ru;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Fu;
    case 35679:
    case 36299:
    case 36307:
      return Du;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Pu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Iu;
  }
}
class zu {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = mu(t.type);
  }
}
class Nu {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = Bu(t.type);
  }
}
class Ou {
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
const Hs = /(\w+)(\])?(\[|\.)?/g;
function Kr(c, e) {
  c.seq.push(e), c.map[e.id] = e;
}
function Uu(c, e, t) {
  const n = c.name, i = n.length;
  for (Hs.lastIndex = 0; ; ) {
    const s = Hs.exec(n), o = Hs.lastIndex;
    let r = s[1];
    const l = s[2] === "]", a = s[3];
    if (l && (r = r | 0), a === void 0 || a === "[" && o + 2 === i) {
      Kr(t, a === void 0 ? new zu(r, c, e) : new Nu(r, c, e));
      break;
    } else {
      let d = t.map[r];
      d === void 0 && (d = new Ou(r), Kr(t, d)), t = d;
    }
  }
}
class as {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), o = e.getUniformLocation(t, s.name);
      Uu(s, o, this);
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
      const r = t[s], l = n[r.id];
      l.needsUpdate !== !1 && r.setValue(e, l.value, i);
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
function Jr(c, e, t) {
  const n = c.createShader(e);
  return c.shaderSource(n, t), c.compileShader(n), n;
}
let Gu = 0;
function ku(c, e) {
  const t = c.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = i; o < s; o++) {
    const r = o + 1;
    n.push(`${r === e ? ">" : " "} ${r}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Wu(c) {
  switch (c) {
    case 3e3:
      return ["Linear", "( value )"];
    case 3001:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", c), ["Linear", "( value )"];
  }
}
function Qr(c, e, t) {
  const n = c.getShaderParameter(e, 35713), i = c.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + ku(c.getShaderSource(e), o);
  } else
    return i;
}
function Vu(c, e) {
  const t = Wu(e);
  return "vec4 " + c + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Hu(c, e) {
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
  return "vec3 " + c + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function qu(c) {
  return [
    c.extensionDerivatives || !!c.envMapCubeUVHeight || c.bumpMap || c.tangentSpaceNormalMap || c.clearcoatNormalMap || c.flatShading || c.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (c.extensionFragDepth || c.logarithmicDepthBuffer) && c.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    c.extensionDrawBuffers && c.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (c.extensionShaderTextureLOD || c.envMap || c.transmission) && c.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(bi).join(`
`);
}
function Xu(c) {
  const e = [];
  for (const t in c) {
    const n = c[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function ju(c, e) {
  const t = {}, n = c.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const s = c.getActiveAttrib(e, i), o = s.name;
    let r = 1;
    s.type === 35674 && (r = 2), s.type === 35675 && (r = 3), s.type === 35676 && (r = 4), t[o] = {
      type: s.type,
      location: c.getAttribLocation(e, o),
      locationSize: r
    };
  }
  return t;
}
function bi(c) {
  return c !== "";
}
function eo(c, e) {
  return c.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function to(c, e) {
  return c.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Yu = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ur(c) {
  return c.replace(Yu, $u);
}
function $u(c, e) {
  const t = Ce[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return ur(t);
}
const Zu = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, Ku = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function no(c) {
  return c.replace(Ku, aa).replace(Zu, Ju);
}
function Ju(c, e, t, n) {
  return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), aa(c, e, t, n);
}
function aa(c, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function io(c) {
  let e = "precision " + c.precision + ` float;
precision ` + c.precision + " int;";
  return c.precision === "highp" ? e += `
#define HIGH_PRECISION` : c.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : c.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Qu(c) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return c.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : c.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : c.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function ed(c) {
  let e = "ENVMAP_TYPE_CUBE";
  if (c.envMap)
    switch (c.envMapMode) {
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
function td(c) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (c.envMap)
    switch (c.envMapMode) {
      case 302:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function nd(c) {
  let e = "ENVMAP_BLENDING_NONE";
  if (c.envMap)
    switch (c.combine) {
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
function id(c) {
  const e = c.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function sd(c, e, t, n) {
  const i = c.getContext(), s = t.defines;
  let o = t.vertexShader, r = t.fragmentShader;
  const l = Qu(t), a = ed(t), h = td(t), d = nd(t), u = id(t), m = t.isWebGL2 ? "" : qu(t), g = Xu(s), p = i.createProgram();
  let f, _, v = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (f = [
    g
  ].filter(bi).join(`
`), f.length > 0 && (f += `
`), _ = [
    m,
    g
  ].filter(bi).join(`
`), _.length > 0 && (_ += `
`)) : (f = [
    io(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
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
    t.shadowMapEnabled ? "#define " + l : "",
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
  ].filter(bi).join(`
`), _ = [
    m,
    io(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + a : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + d : "",
    u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "",
    u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "",
    u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "",
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
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    t.toneMapping !== 0 ? Ce.tonemapping_pars_fragment : "",
    t.toneMapping !== 0 ? Hu("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ce.encodings_pars_fragment,
    Vu("linearToOutputTexel", t.outputEncoding),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(bi).join(`
`)), o = ur(o), o = eo(o, t), o = to(o, t), r = ur(r), r = eo(r, t), r = to(r, t), o = no(o), r = no(r), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (v = `#version 300 es
`, f = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + f, _ = [
    "#define varying in",
    t.glslVersion === Tr ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Tr ? "" : "#define gl_FragColor pc_fragColor",
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
` + _);
  const y = v + f + o, x = v + _ + r, M = Jr(i, 35633, y), S = Jr(i, 35632, x);
  if (i.attachShader(p, M), i.attachShader(p, S), t.index0AttributeName !== void 0 ? i.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"), i.linkProgram(p), c.debug.checkShaderErrors) {
    const A = i.getProgramInfoLog(p).trim(), D = i.getShaderInfoLog(M).trim(), B = i.getShaderInfoLog(S).trim();
    let W = !0, z = !0;
    if (i.getProgramParameter(p, 35714) === !1) {
      W = !1;
      const F = Qr(i, M, "vertex"), I = Qr(i, S, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(p, 35715) + `

Program Info Log: ` + A + `
` + F + `
` + I
      );
    } else
      A !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", A) : (D === "" || B === "") && (z = !1);
    z && (this.diagnostics = {
      runnable: W,
      programLog: A,
      vertexShader: {
        log: D,
        prefix: f
      },
      fragmentShader: {
        log: B,
        prefix: _
      }
    });
  }
  i.deleteShader(M), i.deleteShader(S);
  let C;
  this.getUniforms = function() {
    return C === void 0 && (C = new as(i, p)), C;
  };
  let w;
  return this.getAttributes = function() {
    return w === void 0 && (w = ju(i, p)), w;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(p), this.program = void 0;
  }, this.name = t.shaderName, this.id = Gu++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = M, this.fragmentShader = S, this;
}
let rd = 0;
class od {
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
      const n = new ad(e);
      t.set(e, n);
    }
    return t.get(e);
  }
}
class ad {
  constructor(e) {
    this.id = rd++, this.code = e, this.usedTimes = 0;
  }
}
function ld(c, e, t, n, i, s, o) {
  const r = new Ko(), l = new od(), a = [], h = i.isWebGL2, d = i.logarithmicDepthBuffer, u = i.vertexTextures;
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
  function p(w, A, D, B, W) {
    const z = B.fog, F = W.geometry, I = w.isMeshStandardMaterial ? B.environment : null, L = (w.isMeshStandardMaterial ? t : e).get(w.envMap || I), G = !!L && L.mapping === 306 ? L.image.height : null, U = g[w.type];
    w.precision !== null && (m = i.getMaxPrecision(w.precision), m !== w.precision && console.warn("THREE.WebGLProgram.getParameters:", w.precision, "not supported, using", m, "instead."));
    const N = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, q = N !== void 0 ? N.length : 0;
    let J = 0;
    F.morphAttributes.position !== void 0 && (J = 1), F.morphAttributes.normal !== void 0 && (J = 2), F.morphAttributes.color !== void 0 && (J = 3);
    let k, ee, re, ge;
    if (U) {
      const Oe = Gt[U];
      k = Oe.vertexShader, ee = Oe.fragmentShader;
    } else
      k = w.vertexShader, ee = w.fragmentShader, l.update(w), re = l.getVertexShaderID(w), ge = l.getFragmentShaderID(w);
    const Z = c.getRenderTarget(), De = w.alphaTest > 0, ve = w.clearcoat > 0, ye = w.iridescence > 0;
    return {
      isWebGL2: h,
      shaderID: U,
      shaderName: w.type,
      vertexShader: k,
      fragmentShader: ee,
      defines: w.defines,
      customVertexShaderID: re,
      customFragmentShaderID: ge,
      isRawShaderMaterial: w.isRawShaderMaterial === !0,
      glslVersion: w.glslVersion,
      precision: m,
      instancing: W.isInstancedMesh === !0,
      instancingColor: W.isInstancedMesh === !0 && W.instanceColor !== null,
      supportsVertexTextures: u,
      outputEncoding: Z === null ? c.outputEncoding : Z.isXRRenderTarget === !0 ? Z.texture.encoding : 3e3,
      map: !!w.map,
      matcap: !!w.matcap,
      envMap: !!L,
      envMapMode: L && L.mapping,
      envMapCubeUVHeight: G,
      lightMap: !!w.lightMap,
      aoMap: !!w.aoMap,
      emissiveMap: !!w.emissiveMap,
      bumpMap: !!w.bumpMap,
      normalMap: !!w.normalMap,
      objectSpaceNormalMap: w.normalMapType === 1,
      tangentSpaceNormalMap: w.normalMapType === 0,
      decodeVideoTexture: !!w.map && w.map.isVideoTexture === !0 && w.map.encoding === 3001,
      clearcoat: ve,
      clearcoatMap: ve && !!w.clearcoatMap,
      clearcoatRoughnessMap: ve && !!w.clearcoatRoughnessMap,
      clearcoatNormalMap: ve && !!w.clearcoatNormalMap,
      iridescence: ye,
      iridescenceMap: ye && !!w.iridescenceMap,
      iridescenceThicknessMap: ye && !!w.iridescenceThicknessMap,
      displacementMap: !!w.displacementMap,
      roughnessMap: !!w.roughnessMap,
      metalnessMap: !!w.metalnessMap,
      specularMap: !!w.specularMap,
      specularIntensityMap: !!w.specularIntensityMap,
      specularColorMap: !!w.specularColorMap,
      opaque: w.transparent === !1 && w.blending === 1,
      alphaMap: !!w.alphaMap,
      alphaTest: De,
      gradientMap: !!w.gradientMap,
      sheen: w.sheen > 0,
      sheenColorMap: !!w.sheenColorMap,
      sheenRoughnessMap: !!w.sheenRoughnessMap,
      transmission: w.transmission > 0,
      transmissionMap: !!w.transmissionMap,
      thicknessMap: !!w.thicknessMap,
      combine: w.combine,
      vertexTangents: !!w.normalMap && !!F.attributes.tangent,
      vertexColors: w.vertexColors,
      vertexAlphas: w.vertexColors === !0 && !!F.attributes.color && F.attributes.color.itemSize === 4,
      vertexUvs: !!w.map || !!w.bumpMap || !!w.normalMap || !!w.specularMap || !!w.alphaMap || !!w.emissiveMap || !!w.roughnessMap || !!w.metalnessMap || !!w.clearcoatMap || !!w.clearcoatRoughnessMap || !!w.clearcoatNormalMap || !!w.iridescenceMap || !!w.iridescenceThicknessMap || !!w.displacementMap || !!w.transmissionMap || !!w.thicknessMap || !!w.specularIntensityMap || !!w.specularColorMap || !!w.sheenColorMap || !!w.sheenRoughnessMap,
      uvsVertexOnly: !(!!w.map || !!w.bumpMap || !!w.normalMap || !!w.specularMap || !!w.alphaMap || !!w.emissiveMap || !!w.roughnessMap || !!w.metalnessMap || !!w.clearcoatNormalMap || !!w.iridescenceMap || !!w.iridescenceThicknessMap || w.transmission > 0 || !!w.transmissionMap || !!w.thicknessMap || !!w.specularIntensityMap || !!w.specularColorMap || w.sheen > 0 || !!w.sheenColorMap || !!w.sheenRoughnessMap) && !!w.displacementMap,
      fog: !!z,
      useFog: w.fog === !0,
      fogExp2: z && z.isFogExp2,
      flatShading: !!w.flatShading,
      sizeAttenuation: w.sizeAttenuation,
      logarithmicDepthBuffer: d,
      skinning: W.isSkinnedMesh === !0,
      morphTargets: F.morphAttributes.position !== void 0,
      morphNormals: F.morphAttributes.normal !== void 0,
      morphColors: F.morphAttributes.color !== void 0,
      morphTargetsCount: q,
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
      dithering: w.dithering,
      shadowMapEnabled: c.shadowMap.enabled && D.length > 0,
      shadowMapType: c.shadowMap.type,
      toneMapping: w.toneMapped ? c.toneMapping : 0,
      physicallyCorrectLights: c.physicallyCorrectLights,
      premultipliedAlpha: w.premultipliedAlpha,
      doubleSided: w.side === 2,
      flipSided: w.side === 1,
      useDepthPacking: !!w.depthPacking,
      depthPacking: w.depthPacking || 0,
      index0AttributeName: w.index0AttributeName,
      extensionDerivatives: w.extensions && w.extensions.derivatives,
      extensionFragDepth: w.extensions && w.extensions.fragDepth,
      extensionDrawBuffers: w.extensions && w.extensions.drawBuffers,
      extensionShaderTextureLOD: w.extensions && w.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: w.customProgramCacheKey()
    };
  }
  function f(w) {
    const A = [];
    if (w.shaderID ? A.push(w.shaderID) : (A.push(w.customVertexShaderID), A.push(w.customFragmentShaderID)), w.defines !== void 0)
      for (const D in w.defines)
        A.push(D), A.push(w.defines[D]);
    return w.isRawShaderMaterial === !1 && (_(A, w), v(A, w), A.push(c.outputEncoding)), A.push(w.customProgramCacheKey), A.join();
  }
  function _(w, A) {
    w.push(A.precision), w.push(A.outputEncoding), w.push(A.envMapMode), w.push(A.envMapCubeUVHeight), w.push(A.combine), w.push(A.vertexUvs), w.push(A.fogExp2), w.push(A.sizeAttenuation), w.push(A.morphTargetsCount), w.push(A.morphAttributeCount), w.push(A.numDirLights), w.push(A.numPointLights), w.push(A.numSpotLights), w.push(A.numHemiLights), w.push(A.numRectAreaLights), w.push(A.numDirLightShadows), w.push(A.numPointLightShadows), w.push(A.numSpotLightShadows), w.push(A.shadowMapType), w.push(A.toneMapping), w.push(A.numClippingPlanes), w.push(A.numClipIntersection), w.push(A.depthPacking);
  }
  function v(w, A) {
    r.disableAll(), A.isWebGL2 && r.enable(0), A.supportsVertexTextures && r.enable(1), A.instancing && r.enable(2), A.instancingColor && r.enable(3), A.map && r.enable(4), A.matcap && r.enable(5), A.envMap && r.enable(6), A.lightMap && r.enable(7), A.aoMap && r.enable(8), A.emissiveMap && r.enable(9), A.bumpMap && r.enable(10), A.normalMap && r.enable(11), A.objectSpaceNormalMap && r.enable(12), A.tangentSpaceNormalMap && r.enable(13), A.clearcoat && r.enable(14), A.clearcoatMap && r.enable(15), A.clearcoatRoughnessMap && r.enable(16), A.clearcoatNormalMap && r.enable(17), A.iridescence && r.enable(18), A.iridescenceMap && r.enable(19), A.iridescenceThicknessMap && r.enable(20), A.displacementMap && r.enable(21), A.specularMap && r.enable(22), A.roughnessMap && r.enable(23), A.metalnessMap && r.enable(24), A.gradientMap && r.enable(25), A.alphaMap && r.enable(26), A.alphaTest && r.enable(27), A.vertexColors && r.enable(28), A.vertexAlphas && r.enable(29), A.vertexUvs && r.enable(30), A.vertexTangents && r.enable(31), A.uvsVertexOnly && r.enable(32), A.fog && r.enable(33), w.push(r.mask), r.disableAll(), A.useFog && r.enable(0), A.flatShading && r.enable(1), A.logarithmicDepthBuffer && r.enable(2), A.skinning && r.enable(3), A.morphTargets && r.enable(4), A.morphNormals && r.enable(5), A.morphColors && r.enable(6), A.premultipliedAlpha && r.enable(7), A.shadowMapEnabled && r.enable(8), A.physicallyCorrectLights && r.enable(9), A.doubleSided && r.enable(10), A.flipSided && r.enable(11), A.useDepthPacking && r.enable(12), A.dithering && r.enable(13), A.specularIntensityMap && r.enable(14), A.specularColorMap && r.enable(15), A.transmission && r.enable(16), A.transmissionMap && r.enable(17), A.thicknessMap && r.enable(18), A.sheen && r.enable(19), A.sheenColorMap && r.enable(20), A.sheenRoughnessMap && r.enable(21), A.decodeVideoTexture && r.enable(22), A.opaque && r.enable(23), w.push(r.mask);
  }
  function y(w) {
    const A = g[w.type];
    let D;
    if (A) {
      const B = Gt[A];
      D = $a.clone(B.uniforms);
    } else
      D = w.uniforms;
    return D;
  }
  function x(w, A) {
    let D;
    for (let B = 0, W = a.length; B < W; B++) {
      const z = a[B];
      if (z.cacheKey === A) {
        D = z, ++D.usedTimes;
        break;
      }
    }
    return D === void 0 && (D = new sd(c, A, w, s), a.push(D)), D;
  }
  function M(w) {
    if (--w.usedTimes === 0) {
      const A = a.indexOf(w);
      a[A] = a[a.length - 1], a.pop(), w.destroy();
    }
  }
  function S(w) {
    l.remove(w);
  }
  function C() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: f,
    getUniforms: y,
    acquireProgram: x,
    releaseProgram: M,
    releaseShaderCache: S,
    programs: a,
    dispose: C
  };
}
function cd() {
  let c = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let o = c.get(s);
    return o === void 0 && (o = {}, c.set(s, o)), o;
  }
  function t(s) {
    c.delete(s);
  }
  function n(s, o, r) {
    c.get(s)[o] = r;
  }
  function i() {
    c = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function hd(c, e) {
  return c.groupOrder !== e.groupOrder ? c.groupOrder - e.groupOrder : c.renderOrder !== e.renderOrder ? c.renderOrder - e.renderOrder : c.material.id !== e.material.id ? c.material.id - e.material.id : c.z !== e.z ? c.z - e.z : c.id - e.id;
}
function so(c, e) {
  return c.groupOrder !== e.groupOrder ? c.groupOrder - e.groupOrder : c.renderOrder !== e.renderOrder ? c.renderOrder - e.renderOrder : c.z !== e.z ? e.z - c.z : c.id - e.id;
}
function ro() {
  const c = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function o(d, u, m, g, p, f) {
    let _ = c[e];
    return _ === void 0 ? (_ = {
      id: d.id,
      object: d,
      geometry: u,
      material: m,
      groupOrder: g,
      renderOrder: d.renderOrder,
      z: p,
      group: f
    }, c[e] = _) : (_.id = d.id, _.object = d, _.geometry = u, _.material = m, _.groupOrder = g, _.renderOrder = d.renderOrder, _.z = p, _.group = f), e++, _;
  }
  function r(d, u, m, g, p, f) {
    const _ = o(d, u, m, g, p, f);
    m.transmission > 0 ? n.push(_) : m.transparent === !0 ? i.push(_) : t.push(_);
  }
  function l(d, u, m, g, p, f) {
    const _ = o(d, u, m, g, p, f);
    m.transmission > 0 ? n.unshift(_) : m.transparent === !0 ? i.unshift(_) : t.unshift(_);
  }
  function a(d, u) {
    t.length > 1 && t.sort(d || hd), n.length > 1 && n.sort(u || so), i.length > 1 && i.sort(u || so);
  }
  function h() {
    for (let d = e, u = c.length; d < u; d++) {
      const m = c[d];
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
    unshift: l,
    finish: h,
    sort: a
  };
}
function ud() {
  let c = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    let s;
    return c.has(n) === !1 ? (s = new ro(), c.set(n, [s])) : i >= c.get(n).length ? (s = new ro(), c.get(n).push(s)) : s = c.get(n)[i], s;
  }
  function t() {
    c = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function dd() {
  const c = {};
  return {
    get: function(e) {
      if (c[e.id] !== void 0)
        return c[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new P(),
            color: new xe()
          };
          break;
        case "SpotLight":
          t = {
            position: new P(),
            direction: new P(),
            color: new xe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new P(),
            color: new xe(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new P(),
            skyColor: new xe(),
            groundColor: new xe()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new xe(),
            position: new P(),
            halfWidth: new P(),
            halfHeight: new P()
          };
          break;
      }
      return c[e.id] = t, t;
    }
  };
}
function fd() {
  const c = {};
  return {
    get: function(e) {
      if (c[e.id] !== void 0)
        return c[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new be()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new be()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new be(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return c[e.id] = t, t;
    }
  };
}
let pd = 0;
function md(c, e) {
  return (e.castShadow ? 1 : 0) - (c.castShadow ? 1 : 0);
}
function gd(c, e) {
  const t = new dd(), n = fd(), i = {
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
  for (let h = 0; h < 9; h++)
    i.probe.push(new P());
  const s = new P(), o = new He(), r = new He();
  function l(h, d) {
    let u = 0, m = 0, g = 0;
    for (let A = 0; A < 9; A++)
      i.probe[A].set(0, 0, 0);
    let p = 0, f = 0, _ = 0, v = 0, y = 0, x = 0, M = 0, S = 0;
    h.sort(md);
    const C = d !== !0 ? Math.PI : 1;
    for (let A = 0, D = h.length; A < D; A++) {
      const B = h[A], W = B.color, z = B.intensity, F = B.distance, I = B.shadow && B.shadow.map ? B.shadow.map.texture : null;
      if (B.isAmbientLight)
        u += W.r * z * C, m += W.g * z * C, g += W.b * z * C;
      else if (B.isLightProbe)
        for (let L = 0; L < 9; L++)
          i.probe[L].addScaledVector(B.sh.coefficients[L], z);
      else if (B.isDirectionalLight) {
        const L = t.get(B);
        if (L.color.copy(B.color).multiplyScalar(B.intensity * C), B.castShadow) {
          const G = B.shadow, U = n.get(B);
          U.shadowBias = G.bias, U.shadowNormalBias = G.normalBias, U.shadowRadius = G.radius, U.shadowMapSize = G.mapSize, i.directionalShadow[p] = U, i.directionalShadowMap[p] = I, i.directionalShadowMatrix[p] = B.shadow.matrix, x++;
        }
        i.directional[p] = L, p++;
      } else if (B.isSpotLight) {
        const L = t.get(B);
        if (L.position.setFromMatrixPosition(B.matrixWorld), L.color.copy(W).multiplyScalar(z * C), L.distance = F, L.coneCos = Math.cos(B.angle), L.penumbraCos = Math.cos(B.angle * (1 - B.penumbra)), L.decay = B.decay, B.castShadow) {
          const G = B.shadow, U = n.get(B);
          U.shadowBias = G.bias, U.shadowNormalBias = G.normalBias, U.shadowRadius = G.radius, U.shadowMapSize = G.mapSize, i.spotShadow[_] = U, i.spotShadowMap[_] = I, i.spotShadowMatrix[_] = B.shadow.matrix, S++;
        }
        i.spot[_] = L, _++;
      } else if (B.isRectAreaLight) {
        const L = t.get(B);
        L.color.copy(W).multiplyScalar(z), L.halfWidth.set(B.width * 0.5, 0, 0), L.halfHeight.set(0, B.height * 0.5, 0), i.rectArea[v] = L, v++;
      } else if (B.isPointLight) {
        const L = t.get(B);
        if (L.color.copy(B.color).multiplyScalar(B.intensity * C), L.distance = B.distance, L.decay = B.decay, B.castShadow) {
          const G = B.shadow, U = n.get(B);
          U.shadowBias = G.bias, U.shadowNormalBias = G.normalBias, U.shadowRadius = G.radius, U.shadowMapSize = G.mapSize, U.shadowCameraNear = G.camera.near, U.shadowCameraFar = G.camera.far, i.pointShadow[f] = U, i.pointShadowMap[f] = I, i.pointShadowMatrix[f] = B.shadow.matrix, M++;
        }
        i.point[f] = L, f++;
      } else if (B.isHemisphereLight) {
        const L = t.get(B);
        L.skyColor.copy(B.color).multiplyScalar(z * C), L.groundColor.copy(B.groundColor).multiplyScalar(z * C), i.hemi[y] = L, y++;
      }
    }
    v > 0 && (e.isWebGL2 || c.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ne.LTC_FLOAT_1, i.rectAreaLTC2 = ne.LTC_FLOAT_2) : c.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ne.LTC_HALF_1, i.rectAreaLTC2 = ne.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = u, i.ambient[1] = m, i.ambient[2] = g;
    const w = i.hash;
    (w.directionalLength !== p || w.pointLength !== f || w.spotLength !== _ || w.rectAreaLength !== v || w.hemiLength !== y || w.numDirectionalShadows !== x || w.numPointShadows !== M || w.numSpotShadows !== S) && (i.directional.length = p, i.spot.length = _, i.rectArea.length = v, i.point.length = f, i.hemi.length = y, i.directionalShadow.length = x, i.directionalShadowMap.length = x, i.pointShadow.length = M, i.pointShadowMap.length = M, i.spotShadow.length = S, i.spotShadowMap.length = S, i.directionalShadowMatrix.length = x, i.pointShadowMatrix.length = M, i.spotShadowMatrix.length = S, w.directionalLength = p, w.pointLength = f, w.spotLength = _, w.rectAreaLength = v, w.hemiLength = y, w.numDirectionalShadows = x, w.numPointShadows = M, w.numSpotShadows = S, i.version = pd++);
  }
  function a(h, d) {
    let u = 0, m = 0, g = 0, p = 0, f = 0;
    const _ = d.matrixWorldInverse;
    for (let v = 0, y = h.length; v < y; v++) {
      const x = h[v];
      if (x.isDirectionalLight) {
        const M = i.directional[u];
        M.direction.setFromMatrixPosition(x.matrixWorld), s.setFromMatrixPosition(x.target.matrixWorld), M.direction.sub(s), M.direction.transformDirection(_), u++;
      } else if (x.isSpotLight) {
        const M = i.spot[g];
        M.position.setFromMatrixPosition(x.matrixWorld), M.position.applyMatrix4(_), M.direction.setFromMatrixPosition(x.matrixWorld), s.setFromMatrixPosition(x.target.matrixWorld), M.direction.sub(s), M.direction.transformDirection(_), g++;
      } else if (x.isRectAreaLight) {
        const M = i.rectArea[p];
        M.position.setFromMatrixPosition(x.matrixWorld), M.position.applyMatrix4(_), r.identity(), o.copy(x.matrixWorld), o.premultiply(_), r.extractRotation(o), M.halfWidth.set(x.width * 0.5, 0, 0), M.halfHeight.set(0, x.height * 0.5, 0), M.halfWidth.applyMatrix4(r), M.halfHeight.applyMatrix4(r), p++;
      } else if (x.isPointLight) {
        const M = i.point[m];
        M.position.setFromMatrixPosition(x.matrixWorld), M.position.applyMatrix4(_), m++;
      } else if (x.isHemisphereLight) {
        const M = i.hemi[f];
        M.direction.setFromMatrixPosition(x.matrixWorld), M.direction.transformDirection(_), f++;
      }
    }
  }
  return {
    setup: l,
    setupView: a,
    state: i
  };
}
function oo(c, e) {
  const t = new gd(c, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function o(d) {
    n.push(d);
  }
  function r(d) {
    i.push(d);
  }
  function l(d) {
    t.setup(n, d);
  }
  function a(d) {
    t.setupView(n, d);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: l,
    setupLightsView: a,
    pushLight: o,
    pushShadow: r
  };
}
function _d(c, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, o = 0) {
    let r;
    return t.has(s) === !1 ? (r = new oo(c, e), t.set(s, [r])) : o >= t.get(s).length ? (r = new oo(c, e), t.get(s).push(r)) : r = t.get(s)[o], r;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class la extends tn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class vd extends tn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new P(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const xd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, yd = `uniform sampler2D shadow_pass;
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
function wd(c, e, t) {
  let n = new gr();
  const i = new be(), s = new be(), o = new Ge(), r = new la({ depthPacking: 3201 }), l = new vd(), a = {}, h = t.maxTextureSize, d = { 0: 1, 1: 0, 2: 2 }, u = new Ln({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new be() },
      radius: { value: 4 }
    },
    vertexShader: xd,
    fragmentShader: yd
  }), m = u.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new pt();
  g.setAttribute(
    "position",
    new yt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const p = new ke(g, u), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(x, M, S) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || x.length === 0)
      return;
    const C = c.getRenderTarget(), w = c.getActiveCubeFace(), A = c.getActiveMipmapLevel(), D = c.state;
    D.setBlending(0), D.buffers.color.setClear(1, 1, 1, 1), D.buffers.depth.setTest(!0), D.setScissorTest(!1);
    for (let B = 0, W = x.length; B < W; B++) {
      const z = x[B], F = z.shadow;
      if (F === void 0) {
        console.warn("THREE.WebGLShadowMap:", z, "has no shadow.");
        continue;
      }
      if (F.autoUpdate === !1 && F.needsUpdate === !1)
        continue;
      i.copy(F.mapSize);
      const I = F.getFrameExtents();
      if (i.multiply(I), s.copy(F.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / I.x), i.x = s.x * I.x, F.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / I.y), i.y = s.y * I.y, F.mapSize.y = s.y)), F.map === null) {
        const G = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        F.map = new Cn(i.x, i.y, G), F.map.texture.name = z.name + ".shadowMap", F.camera.updateProjectionMatrix();
      }
      c.setRenderTarget(F.map), c.clear();
      const L = F.getViewportCount();
      for (let G = 0; G < L; G++) {
        const U = F.getViewport(G);
        o.set(
          s.x * U.x,
          s.y * U.y,
          s.x * U.z,
          s.y * U.w
        ), D.viewport(o), F.updateMatrices(z, G), n = F.getFrustum(), y(M, S, F.camera, z, this.type);
      }
      F.isPointLightShadow !== !0 && this.type === 3 && _(F, S), F.needsUpdate = !1;
    }
    f.needsUpdate = !1, c.setRenderTarget(C, w, A);
  };
  function _(x, M) {
    const S = e.update(p);
    u.defines.VSM_SAMPLES !== x.blurSamples && (u.defines.VSM_SAMPLES = x.blurSamples, m.defines.VSM_SAMPLES = x.blurSamples, u.needsUpdate = !0, m.needsUpdate = !0), x.mapPass === null && (x.mapPass = new Cn(i.x, i.y)), u.uniforms.shadow_pass.value = x.map.texture, u.uniforms.resolution.value = x.mapSize, u.uniforms.radius.value = x.radius, c.setRenderTarget(x.mapPass), c.clear(), c.renderBufferDirect(M, null, S, u, p, null), m.uniforms.shadow_pass.value = x.mapPass.texture, m.uniforms.resolution.value = x.mapSize, m.uniforms.radius.value = x.radius, c.setRenderTarget(x.map), c.clear(), c.renderBufferDirect(M, null, S, m, p, null);
  }
  function v(x, M, S, C, w, A) {
    let D = null;
    const B = S.isPointLight === !0 ? x.customDistanceMaterial : x.customDepthMaterial;
    if (B !== void 0 ? D = B : D = S.isPointLight === !0 ? l : r, c.localClippingEnabled && M.clipShadows === !0 && Array.isArray(M.clippingPlanes) && M.clippingPlanes.length !== 0 || M.displacementMap && M.displacementScale !== 0 || M.alphaMap && M.alphaTest > 0) {
      const W = D.uuid, z = M.uuid;
      let F = a[W];
      F === void 0 && (F = {}, a[W] = F);
      let I = F[z];
      I === void 0 && (I = D.clone(), F[z] = I), D = I;
    }
    return D.visible = M.visible, D.wireframe = M.wireframe, A === 3 ? D.side = M.shadowSide !== null ? M.shadowSide : M.side : D.side = M.shadowSide !== null ? M.shadowSide : d[M.side], D.alphaMap = M.alphaMap, D.alphaTest = M.alphaTest, D.clipShadows = M.clipShadows, D.clippingPlanes = M.clippingPlanes, D.clipIntersection = M.clipIntersection, D.displacementMap = M.displacementMap, D.displacementScale = M.displacementScale, D.displacementBias = M.displacementBias, D.wireframeLinewidth = M.wireframeLinewidth, D.linewidth = M.linewidth, S.isPointLight === !0 && D.isMeshDistanceMaterial === !0 && (D.referencePosition.setFromMatrixPosition(S.matrixWorld), D.nearDistance = C, D.farDistance = w), D;
  }
  function y(x, M, S, C, w) {
    if (x.visible === !1)
      return;
    if (x.layers.test(M.layers) && (x.isMesh || x.isLine || x.isPoints) && (x.castShadow || x.receiveShadow && w === 3) && (!x.frustumCulled || n.intersectsObject(x))) {
      x.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse, x.matrixWorld);
      const B = e.update(x), W = x.material;
      if (Array.isArray(W)) {
        const z = B.groups;
        for (let F = 0, I = z.length; F < I; F++) {
          const L = z[F], G = W[L.materialIndex];
          if (G && G.visible) {
            const U = v(x, G, C, S.near, S.far, w);
            c.renderBufferDirect(S, null, B, U, x, L);
          }
        }
      } else if (W.visible) {
        const z = v(x, W, C, S.near, S.far, w);
        c.renderBufferDirect(S, null, B, z, x, null);
      }
    }
    const D = x.children;
    for (let B = 0, W = D.length; B < W; B++)
      y(D[B], M, S, C, w);
  }
}
function bd(c, e, t) {
  const n = t.isWebGL2;
  function i() {
    let O = !1;
    const le = new Ge();
    let Y = null;
    const ae = new Ge(0, 0, 0, 0);
    return {
      setMask: function(se) {
        Y !== se && !O && (c.colorMask(se, se, se, se), Y = se);
      },
      setLocked: function(se) {
        O = se;
      },
      setClear: function(se, Re, Qe, Xe, nn) {
        nn === !0 && (se *= Xe, Re *= Xe, Qe *= Xe), le.set(se, Re, Qe, Xe), ae.equals(le) === !1 && (c.clearColor(se, Re, Qe, Xe), ae.copy(le));
      },
      reset: function() {
        O = !1, Y = null, ae.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let O = !1, le = null, Y = null, ae = null;
    return {
      setTest: function(se) {
        se ? De(2929) : ve(2929);
      },
      setMask: function(se) {
        le !== se && !O && (c.depthMask(se), le = se);
      },
      setFunc: function(se) {
        if (Y !== se) {
          if (se)
            switch (se) {
              case 0:
                c.depthFunc(512);
                break;
              case 1:
                c.depthFunc(519);
                break;
              case 2:
                c.depthFunc(513);
                break;
              case 3:
                c.depthFunc(515);
                break;
              case 4:
                c.depthFunc(514);
                break;
              case 5:
                c.depthFunc(518);
                break;
              case 6:
                c.depthFunc(516);
                break;
              case 7:
                c.depthFunc(517);
                break;
              default:
                c.depthFunc(515);
            }
          else
            c.depthFunc(515);
          Y = se;
        }
      },
      setLocked: function(se) {
        O = se;
      },
      setClear: function(se) {
        ae !== se && (c.clearDepth(se), ae = se);
      },
      reset: function() {
        O = !1, le = null, Y = null, ae = null;
      }
    };
  }
  function o() {
    let O = !1, le = null, Y = null, ae = null, se = null, Re = null, Qe = null, Xe = null, nn = null;
    return {
      setTest: function(We) {
        O || (We ? De(2960) : ve(2960));
      },
      setMask: function(We) {
        le !== We && !O && (c.stencilMask(We), le = We);
      },
      setFunc: function(We, Vt, Mt) {
        (Y !== We || ae !== Vt || se !== Mt) && (c.stencilFunc(We, Vt, Mt), Y = We, ae = Vt, se = Mt);
      },
      setOp: function(We, Vt, Mt) {
        (Re !== We || Qe !== Vt || Xe !== Mt) && (c.stencilOp(We, Vt, Mt), Re = We, Qe = Vt, Xe = Mt);
      },
      setLocked: function(We) {
        O = We;
      },
      setClear: function(We) {
        nn !== We && (c.clearStencil(We), nn = We);
      },
      reset: function() {
        O = !1, le = null, Y = null, ae = null, se = null, Re = null, Qe = null, Xe = null, nn = null;
      }
    };
  }
  const r = new i(), l = new s(), a = new o(), h = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
  let u = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), p = [], f = null, _ = !1, v = null, y = null, x = null, M = null, S = null, C = null, w = null, A = !1, D = null, B = null, W = null, z = null, F = null;
  const I = c.getParameter(35661);
  let L = !1, G = 0;
  const U = c.getParameter(7938);
  U.indexOf("WebGL") !== -1 ? (G = parseFloat(/^WebGL (\d)/.exec(U)[1]), L = G >= 1) : U.indexOf("OpenGL ES") !== -1 && (G = parseFloat(/^OpenGL ES (\d)/.exec(U)[1]), L = G >= 2);
  let N = null, q = {};
  const J = c.getParameter(3088), k = c.getParameter(2978), ee = new Ge().fromArray(J), re = new Ge().fromArray(k);
  function ge(O, le, Y) {
    const ae = new Uint8Array(4), se = c.createTexture();
    c.bindTexture(O, se), c.texParameteri(O, 10241, 9728), c.texParameteri(O, 10240, 9728);
    for (let Re = 0; Re < Y; Re++)
      c.texImage2D(le + Re, 0, 6408, 1, 1, 0, 6408, 5121, ae);
    return se;
  }
  const Z = {};
  Z[3553] = ge(3553, 3553, 1), Z[34067] = ge(34067, 34069, 6), r.setClear(0, 0, 0, 1), l.setClear(1), a.setClear(0), De(2929), l.setFunc(3), at(!1), It(1), De(2884), tt(0);
  function De(O) {
    u[O] !== !0 && (c.enable(O), u[O] = !0);
  }
  function ve(O) {
    u[O] !== !1 && (c.disable(O), u[O] = !1);
  }
  function ye(O, le) {
    return m[O] !== le ? (c.bindFramebuffer(O, le), m[O] = le, n && (O === 36009 && (m[36160] = le), O === 36160 && (m[36009] = le)), !0) : !1;
  }
  function ue(O, le) {
    let Y = p, ae = !1;
    if (O)
      if (Y = g.get(le), Y === void 0 && (Y = [], g.set(le, Y)), O.isWebGLMultipleRenderTargets) {
        const se = O.texture;
        if (Y.length !== se.length || Y[0] !== 36064) {
          for (let Re = 0, Qe = se.length; Re < Qe; Re++)
            Y[Re] = 36064 + Re;
          Y.length = se.length, ae = !0;
        }
      } else
        Y[0] !== 36064 && (Y[0] = 36064, ae = !0);
    else
      Y[0] !== 1029 && (Y[0] = 1029, ae = !0);
    ae && (t.isWebGL2 ? c.drawBuffers(Y) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y));
  }
  function Oe(O) {
    return f !== O ? (c.useProgram(O), f = O, !0) : !1;
  }
  const Te = {
    [100]: 32774,
    [101]: 32778,
    [102]: 32779
  };
  if (n)
    Te[103] = 32775, Te[104] = 32776;
  else {
    const O = e.get("EXT_blend_minmax");
    O !== null && (Te[103] = O.MIN_EXT, Te[104] = O.MAX_EXT);
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
  function tt(O, le, Y, ae, se, Re, Qe, Xe) {
    if (O === 0) {
      _ === !0 && (ve(3042), _ = !1);
      return;
    }
    if (_ === !1 && (De(3042), _ = !0), O !== 5) {
      if (O !== v || Xe !== A) {
        if ((y !== 100 || S !== 100) && (c.blendEquation(32774), y = 100, S = 100), Xe)
          switch (O) {
            case 1:
              c.blendFuncSeparate(1, 771, 1, 771);
              break;
            case 2:
              c.blendFunc(1, 1);
              break;
            case 3:
              c.blendFuncSeparate(0, 769, 0, 1);
              break;
            case 4:
              c.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", O);
              break;
          }
        else
          switch (O) {
            case 1:
              c.blendFuncSeparate(770, 771, 1, 771);
              break;
            case 2:
              c.blendFunc(770, 1);
              break;
            case 3:
              c.blendFuncSeparate(0, 769, 0, 1);
              break;
            case 4:
              c.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", O);
              break;
          }
        x = null, M = null, C = null, w = null, v = O, A = Xe;
      }
      return;
    }
    se = se || le, Re = Re || Y, Qe = Qe || ae, (le !== y || se !== S) && (c.blendEquationSeparate(Te[le], Te[se]), y = le, S = se), (Y !== x || ae !== M || Re !== C || Qe !== w) && (c.blendFuncSeparate(me[Y], me[ae], me[Re], me[Qe]), x = Y, M = ae, C = Re, w = Qe), v = O, A = null;
  }
  function mt(O, le) {
    O.side === 2 ? ve(2884) : De(2884);
    let Y = O.side === 1;
    le && (Y = !Y), at(Y), O.blending === 1 && O.transparent === !1 ? tt(0) : tt(O.blending, O.blendEquation, O.blendSrc, O.blendDst, O.blendEquationAlpha, O.blendSrcAlpha, O.blendDstAlpha, O.premultipliedAlpha), l.setFunc(O.depthFunc), l.setTest(O.depthTest), l.setMask(O.depthWrite), r.setMask(O.colorWrite);
    const ae = O.stencilWrite;
    a.setTest(ae), ae && (a.setMask(O.stencilWriteMask), a.setFunc(O.stencilFunc, O.stencilRef, O.stencilFuncMask), a.setOp(O.stencilFail, O.stencilZFail, O.stencilZPass)), Ne(O.polygonOffset, O.polygonOffsetFactor, O.polygonOffsetUnits), O.alphaToCoverage === !0 ? De(32926) : ve(32926);
  }
  function at(O) {
    D !== O && (O ? c.frontFace(2304) : c.frontFace(2305), D = O);
  }
  function It(O) {
    O !== 0 ? (De(2884), O !== B && (O === 1 ? c.cullFace(1029) : O === 2 ? c.cullFace(1028) : c.cullFace(1032))) : ve(2884), B = O;
  }
  function nt(O) {
    O !== W && (L && c.lineWidth(O), W = O);
  }
  function Ne(O, le, Y) {
    O ? (De(32823), (z !== le || F !== Y) && (c.polygonOffset(le, Y), z = le, F = Y)) : ve(32823);
  }
  function Wt(O) {
    O ? De(3089) : ve(3089);
  }
  function Bt(O) {
    O === void 0 && (O = 33984 + I - 1), N !== O && (c.activeTexture(O), N = O);
  }
  function R(O, le) {
    N === null && Bt();
    let Y = q[N];
    Y === void 0 && (Y = { type: void 0, texture: void 0 }, q[N] = Y), (Y.type !== O || Y.texture !== le) && (c.bindTexture(O, le || Z[O]), Y.type = O, Y.texture = le);
  }
  function E() {
    const O = q[N];
    O !== void 0 && O.type !== void 0 && (c.bindTexture(O.type, null), O.type = void 0, O.texture = void 0);
  }
  function $() {
    try {
      c.compressedTexImage2D.apply(c, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function Q() {
    try {
      c.texSubImage2D.apply(c, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function te() {
    try {
      c.texSubImage3D.apply(c, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function oe() {
    try {
      c.compressedTexSubImage2D.apply(c, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function we() {
    try {
      c.texStorage2D.apply(c, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function j() {
    try {
      c.texStorage3D.apply(c, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function pe() {
    try {
      c.texImage2D.apply(c, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function he() {
    try {
      c.texImage3D.apply(c, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function fe(O) {
    ee.equals(O) === !1 && (c.scissor(O.x, O.y, O.z, O.w), ee.copy(O));
  }
  function de(O) {
    re.equals(O) === !1 && (c.viewport(O.x, O.y, O.z, O.w), re.copy(O));
  }
  function Se(O, le) {
    let Y = d.get(le);
    Y === void 0 && (Y = /* @__PURE__ */ new WeakMap(), d.set(le, Y));
    let ae = Y.get(O);
    ae === void 0 && (ae = c.getUniformBlockIndex(le, O.name), Y.set(O, ae));
  }
  function Ie(O, le) {
    const ae = d.get(le).get(O);
    h.get(O) !== ae && (c.uniformBlockBinding(le, ae, O.__bindingPointIndex), h.set(O, ae));
  }
  function qe() {
    c.disable(3042), c.disable(2884), c.disable(2929), c.disable(32823), c.disable(3089), c.disable(2960), c.disable(32926), c.blendEquation(32774), c.blendFunc(1, 0), c.blendFuncSeparate(1, 0, 1, 0), c.colorMask(!0, !0, !0, !0), c.clearColor(0, 0, 0, 0), c.depthMask(!0), c.depthFunc(513), c.clearDepth(1), c.stencilMask(4294967295), c.stencilFunc(519, 0, 4294967295), c.stencilOp(7680, 7680, 7680), c.clearStencil(0), c.cullFace(1029), c.frontFace(2305), c.polygonOffset(0, 0), c.activeTexture(33984), c.bindFramebuffer(36160, null), n === !0 && (c.bindFramebuffer(36009, null), c.bindFramebuffer(36008, null)), c.useProgram(null), c.lineWidth(1), c.scissor(0, 0, c.canvas.width, c.canvas.height), c.viewport(0, 0, c.canvas.width, c.canvas.height), u = {}, N = null, q = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), p = [], f = null, _ = !1, v = null, y = null, x = null, M = null, S = null, C = null, w = null, A = !1, D = null, B = null, W = null, z = null, F = null, ee.set(0, 0, c.canvas.width, c.canvas.height), re.set(0, 0, c.canvas.width, c.canvas.height), r.reset(), l.reset(), a.reset();
  }
  return {
    buffers: {
      color: r,
      depth: l,
      stencil: a
    },
    enable: De,
    disable: ve,
    bindFramebuffer: ye,
    drawBuffers: ue,
    useProgram: Oe,
    setBlending: tt,
    setMaterial: mt,
    setFlipSided: at,
    setCullFace: It,
    setLineWidth: nt,
    setPolygonOffset: Ne,
    setScissorTest: Wt,
    activeTexture: Bt,
    bindTexture: R,
    unbindTexture: E,
    compressedTexImage2D: $,
    texImage2D: pe,
    texImage3D: he,
    updateUBOMapping: Se,
    uniformBlockBinding: Ie,
    texStorage2D: we,
    texStorage3D: j,
    texSubImage2D: Q,
    texSubImage3D: te,
    compressedTexSubImage2D: oe,
    scissor: fe,
    viewport: de,
    reset: qe
  };
}
function Md(c, e, t, n, i, s, o) {
  const r = i.isWebGL2, l = i.maxTextures, a = i.maxCubemapSize, h = i.maxTextureSize, d = i.maxSamples, u = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let p;
  const f = /* @__PURE__ */ new WeakMap();
  let _ = !1;
  try {
    _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function v(R, E) {
    return _ ? new OffscreenCanvas(R, E) : cs("canvas");
  }
  function y(R, E, $, Q) {
    let te = 1;
    if ((R.width > Q || R.height > Q) && (te = Q / Math.max(R.width, R.height)), te < 1 || E === !0)
      if (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && R instanceof ImageBitmap) {
        const oe = E ? cr : Math.floor, we = oe(te * R.width), j = oe(te * R.height);
        p === void 0 && (p = v(we, j));
        const pe = $ ? v(we, j) : p;
        return pe.width = we, pe.height = j, pe.getContext("2d").drawImage(R, 0, 0, we, j), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + R.width + "x" + R.height + ") to (" + we + "x" + j + ")."), pe;
      } else
        return "data" in R && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + R.width + "x" + R.height + ")."), R;
    return R;
  }
  function x(R) {
    return Cr(R.width) && Cr(R.height);
  }
  function M(R) {
    return r ? !1 : R.wrapS !== 1001 || R.wrapT !== 1001 || R.minFilter !== 1003 && R.minFilter !== 1006;
  }
  function S(R, E) {
    return R.generateMipmaps && E && R.minFilter !== 1003 && R.minFilter !== 1006;
  }
  function C(R) {
    c.generateMipmap(R);
  }
  function w(R, E, $, Q, te = !1) {
    if (r === !1)
      return E;
    if (R !== null) {
      if (c[R] !== void 0)
        return c[R];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + R + "'");
    }
    let oe = E;
    return E === 6403 && ($ === 5126 && (oe = 33326), $ === 5131 && (oe = 33325), $ === 5121 && (oe = 33321)), E === 33319 && ($ === 5126 && (oe = 33328), $ === 5131 && (oe = 33327), $ === 5121 && (oe = 33323)), E === 6408 && ($ === 5126 && (oe = 34836), $ === 5131 && (oe = 34842), $ === 5121 && (oe = Q === 3001 && te === !1 ? 35907 : 32856), $ === 32819 && (oe = 32854), $ === 32820 && (oe = 32855)), (oe === 33325 || oe === 33326 || oe === 33327 || oe === 33328 || oe === 34842 || oe === 34836) && e.get("EXT_color_buffer_float"), oe;
  }
  function A(R, E, $) {
    return S(R, $) === !0 || R.isFramebufferTexture && R.minFilter !== 1003 && R.minFilter !== 1006 ? Math.log2(Math.max(E.width, E.height)) + 1 : R.mipmaps !== void 0 && R.mipmaps.length > 0 ? R.mipmaps.length : R.isCompressedTexture && Array.isArray(R.image) ? E.mipmaps.length : 1;
  }
  function D(R) {
    return R === 1003 || R === 1004 || R === 1005 ? 9728 : 9729;
  }
  function B(R) {
    const E = R.target;
    E.removeEventListener("dispose", B), z(E), E.isVideoTexture && g.delete(E);
  }
  function W(R) {
    const E = R.target;
    E.removeEventListener("dispose", W), I(E);
  }
  function z(R) {
    const E = n.get(R);
    if (E.__webglInit === void 0)
      return;
    const $ = R.source, Q = f.get($);
    if (Q) {
      const te = Q[E.__cacheKey];
      te.usedTimes--, te.usedTimes === 0 && F(R), Object.keys(Q).length === 0 && f.delete($);
    }
    n.remove(R);
  }
  function F(R) {
    const E = n.get(R);
    c.deleteTexture(E.__webglTexture);
    const $ = R.source, Q = f.get($);
    delete Q[E.__cacheKey], o.memory.textures--;
  }
  function I(R) {
    const E = R.texture, $ = n.get(R), Q = n.get(E);
    if (Q.__webglTexture !== void 0 && (c.deleteTexture(Q.__webglTexture), o.memory.textures--), R.depthTexture && R.depthTexture.dispose(), R.isWebGLCubeRenderTarget)
      for (let te = 0; te < 6; te++)
        c.deleteFramebuffer($.__webglFramebuffer[te]), $.__webglDepthbuffer && c.deleteRenderbuffer($.__webglDepthbuffer[te]);
    else {
      if (c.deleteFramebuffer($.__webglFramebuffer), $.__webglDepthbuffer && c.deleteRenderbuffer($.__webglDepthbuffer), $.__webglMultisampledFramebuffer && c.deleteFramebuffer($.__webglMultisampledFramebuffer), $.__webglColorRenderbuffer)
        for (let te = 0; te < $.__webglColorRenderbuffer.length; te++)
          $.__webglColorRenderbuffer[te] && c.deleteRenderbuffer($.__webglColorRenderbuffer[te]);
      $.__webglDepthRenderbuffer && c.deleteRenderbuffer($.__webglDepthRenderbuffer);
    }
    if (R.isWebGLMultipleRenderTargets)
      for (let te = 0, oe = E.length; te < oe; te++) {
        const we = n.get(E[te]);
        we.__webglTexture && (c.deleteTexture(we.__webglTexture), o.memory.textures--), n.remove(E[te]);
      }
    n.remove(E), n.remove(R);
  }
  let L = 0;
  function G() {
    L = 0;
  }
  function U() {
    const R = L;
    return R >= l && console.warn("THREE.WebGLTextures: Trying to use " + R + " texture units while this GPU supports only " + l), L += 1, R;
  }
  function N(R) {
    const E = [];
    return E.push(R.wrapS), E.push(R.wrapT), E.push(R.magFilter), E.push(R.minFilter), E.push(R.anisotropy), E.push(R.internalFormat), E.push(R.format), E.push(R.type), E.push(R.generateMipmaps), E.push(R.premultiplyAlpha), E.push(R.flipY), E.push(R.unpackAlignment), E.push(R.encoding), E.join();
  }
  function q(R, E) {
    const $ = n.get(R);
    if (R.isVideoTexture && Wt(R), R.isRenderTargetTexture === !1 && R.version > 0 && $.__version !== R.version) {
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
  function k(R, E) {
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
      ye($, R, E);
      return;
    }
    t.activeTexture(33984 + E), t.bindTexture(34067, $.__webglTexture);
  }
  const re = {
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
    if ($ ? (c.texParameteri(R, 10242, re[E.wrapS]), c.texParameteri(R, 10243, re[E.wrapT]), (R === 32879 || R === 35866) && c.texParameteri(R, 32882, re[E.wrapR]), c.texParameteri(R, 10240, ge[E.magFilter]), c.texParameteri(R, 10241, ge[E.minFilter])) : (c.texParameteri(R, 10242, 33071), c.texParameteri(R, 10243, 33071), (R === 32879 || R === 35866) && c.texParameteri(R, 32882, 33071), (E.wrapS !== 1001 || E.wrapT !== 1001) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), c.texParameteri(R, 10240, D(E.magFilter)), c.texParameteri(R, 10241, D(E.minFilter)), E.minFilter !== 1003 && E.minFilter !== 1006 && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const Q = e.get("EXT_texture_filter_anisotropic");
      if (E.type === 1015 && e.has("OES_texture_float_linear") === !1 || r === !1 && E.type === 1016 && e.has("OES_texture_half_float_linear") === !1)
        return;
      (E.anisotropy > 1 || n.get(E).__currentAnisotropy) && (c.texParameterf(R, Q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(E.anisotropy, i.getMaxAnisotropy())), n.get(E).__currentAnisotropy = E.anisotropy);
    }
  }
  function De(R, E) {
    let $ = !1;
    R.__webglInit === void 0 && (R.__webglInit = !0, E.addEventListener("dispose", B));
    const Q = E.source;
    let te = f.get(Q);
    te === void 0 && (te = {}, f.set(Q, te));
    const oe = N(E);
    if (oe !== R.__cacheKey) {
      te[oe] === void 0 && (te[oe] = {
        texture: c.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, $ = !0), te[oe].usedTimes++;
      const we = te[R.__cacheKey];
      we !== void 0 && (te[R.__cacheKey].usedTimes--, we.usedTimes === 0 && F(E)), R.__cacheKey = oe, R.__webglTexture = te[oe].texture;
    }
    return $;
  }
  function ve(R, E, $) {
    let Q = 3553;
    E.isDataArrayTexture && (Q = 35866), E.isData3DTexture && (Q = 32879);
    const te = De(R, E), oe = E.source;
    if (t.activeTexture(33984 + $), t.bindTexture(Q, R.__webglTexture), oe.version !== oe.__currentVersion || te === !0) {
      c.pixelStorei(37440, E.flipY), c.pixelStorei(37441, E.premultiplyAlpha), c.pixelStorei(3317, E.unpackAlignment), c.pixelStorei(37443, 0);
      const we = M(E) && x(E.image) === !1;
      let j = y(E.image, we, !1, h);
      j = Bt(E, j);
      const pe = x(j) || r, he = s.convert(E.format, E.encoding);
      let fe = s.convert(E.type), de = w(E.internalFormat, he, fe, E.encoding, E.isVideoTexture);
      Z(Q, E, pe);
      let Se;
      const Ie = E.mipmaps, qe = r && E.isVideoTexture !== !0, O = oe.__currentVersion === void 0 || te === !0, le = A(E, j, pe);
      if (E.isDepthTexture)
        de = 6402, r ? E.type === 1015 ? de = 36012 : E.type === 1014 ? de = 33190 : E.type === 1020 ? de = 35056 : de = 33189 : E.type === 1015 && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), E.format === 1026 && de === 6402 && E.type !== 1012 && E.type !== 1014 && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), E.type = 1014, fe = s.convert(E.type)), E.format === 1027 && de === 6402 && (de = 34041, E.type !== 1020 && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), E.type = 1020, fe = s.convert(E.type))), O && (qe ? t.texStorage2D(3553, 1, de, j.width, j.height) : t.texImage2D(3553, 0, de, j.width, j.height, 0, he, fe, null));
      else if (E.isDataTexture)
        if (Ie.length > 0 && pe) {
          qe && O && t.texStorage2D(3553, le, de, Ie[0].width, Ie[0].height);
          for (let Y = 0, ae = Ie.length; Y < ae; Y++)
            Se = Ie[Y], qe ? t.texSubImage2D(3553, Y, 0, 0, Se.width, Se.height, he, fe, Se.data) : t.texImage2D(3553, Y, de, Se.width, Se.height, 0, he, fe, Se.data);
          E.generateMipmaps = !1;
        } else
          qe ? (O && t.texStorage2D(3553, le, de, j.width, j.height), t.texSubImage2D(3553, 0, 0, 0, j.width, j.height, he, fe, j.data)) : t.texImage2D(3553, 0, de, j.width, j.height, 0, he, fe, j.data);
      else if (E.isCompressedTexture) {
        qe && O && t.texStorage2D(3553, le, de, Ie[0].width, Ie[0].height);
        for (let Y = 0, ae = Ie.length; Y < ae; Y++)
          Se = Ie[Y], E.format !== 1023 ? he !== null ? qe ? t.compressedTexSubImage2D(3553, Y, 0, 0, Se.width, Se.height, he, Se.data) : t.compressedTexImage2D(3553, Y, de, Se.width, Se.height, 0, Se.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : qe ? t.texSubImage2D(3553, Y, 0, 0, Se.width, Se.height, he, fe, Se.data) : t.texImage2D(3553, Y, de, Se.width, Se.height, 0, he, fe, Se.data);
      } else if (E.isDataArrayTexture)
        qe ? (O && t.texStorage3D(35866, le, de, j.width, j.height, j.depth), t.texSubImage3D(35866, 0, 0, 0, 0, j.width, j.height, j.depth, he, fe, j.data)) : t.texImage3D(35866, 0, de, j.width, j.height, j.depth, 0, he, fe, j.data);
      else if (E.isData3DTexture)
        qe ? (O && t.texStorage3D(32879, le, de, j.width, j.height, j.depth), t.texSubImage3D(32879, 0, 0, 0, 0, j.width, j.height, j.depth, he, fe, j.data)) : t.texImage3D(32879, 0, de, j.width, j.height, j.depth, 0, he, fe, j.data);
      else if (E.isFramebufferTexture) {
        if (O)
          if (qe)
            t.texStorage2D(3553, le, de, j.width, j.height);
          else {
            let Y = j.width, ae = j.height;
            for (let se = 0; se < le; se++)
              t.texImage2D(3553, se, de, Y, ae, 0, he, fe, null), Y >>= 1, ae >>= 1;
          }
      } else if (Ie.length > 0 && pe) {
        qe && O && t.texStorage2D(3553, le, de, Ie[0].width, Ie[0].height);
        for (let Y = 0, ae = Ie.length; Y < ae; Y++)
          Se = Ie[Y], qe ? t.texSubImage2D(3553, Y, 0, 0, he, fe, Se) : t.texImage2D(3553, Y, de, he, fe, Se);
        E.generateMipmaps = !1;
      } else
        qe ? (O && t.texStorage2D(3553, le, de, j.width, j.height), t.texSubImage2D(3553, 0, 0, 0, he, fe, j)) : t.texImage2D(3553, 0, de, he, fe, j);
      S(E, pe) && C(Q), oe.__currentVersion = oe.version, E.onUpdate && E.onUpdate(E);
    }
    R.__version = E.version;
  }
  function ye(R, E, $) {
    if (E.image.length !== 6)
      return;
    const Q = De(R, E), te = E.source;
    if (t.activeTexture(33984 + $), t.bindTexture(34067, R.__webglTexture), te.version !== te.__currentVersion || Q === !0) {
      c.pixelStorei(37440, E.flipY), c.pixelStorei(37441, E.premultiplyAlpha), c.pixelStorei(3317, E.unpackAlignment), c.pixelStorei(37443, 0);
      const oe = E.isCompressedTexture || E.image[0].isCompressedTexture, we = E.image[0] && E.image[0].isDataTexture, j = [];
      for (let Y = 0; Y < 6; Y++)
        !oe && !we ? j[Y] = y(E.image[Y], !1, !0, a) : j[Y] = we ? E.image[Y].image : E.image[Y], j[Y] = Bt(E, j[Y]);
      const pe = j[0], he = x(pe) || r, fe = s.convert(E.format, E.encoding), de = s.convert(E.type), Se = w(E.internalFormat, fe, de, E.encoding), Ie = r && E.isVideoTexture !== !0, qe = te.__currentVersion === void 0 || Q === !0;
      let O = A(E, pe, he);
      Z(34067, E, he);
      let le;
      if (oe) {
        Ie && qe && t.texStorage2D(34067, O, Se, pe.width, pe.height);
        for (let Y = 0; Y < 6; Y++) {
          le = j[Y].mipmaps;
          for (let ae = 0; ae < le.length; ae++) {
            const se = le[ae];
            E.format !== 1023 ? fe !== null ? Ie ? t.compressedTexSubImage2D(34069 + Y, ae, 0, 0, se.width, se.height, fe, se.data) : t.compressedTexImage2D(34069 + Y, ae, Se, se.width, se.height, 0, se.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ie ? t.texSubImage2D(34069 + Y, ae, 0, 0, se.width, se.height, fe, de, se.data) : t.texImage2D(34069 + Y, ae, Se, se.width, se.height, 0, fe, de, se.data);
          }
        }
      } else {
        le = E.mipmaps, Ie && qe && (le.length > 0 && O++, t.texStorage2D(34067, O, Se, j[0].width, j[0].height));
        for (let Y = 0; Y < 6; Y++)
          if (we) {
            Ie ? t.texSubImage2D(34069 + Y, 0, 0, 0, j[Y].width, j[Y].height, fe, de, j[Y].data) : t.texImage2D(34069 + Y, 0, Se, j[Y].width, j[Y].height, 0, fe, de, j[Y].data);
            for (let ae = 0; ae < le.length; ae++) {
              const Re = le[ae].image[Y].image;
              Ie ? t.texSubImage2D(34069 + Y, ae + 1, 0, 0, Re.width, Re.height, fe, de, Re.data) : t.texImage2D(34069 + Y, ae + 1, Se, Re.width, Re.height, 0, fe, de, Re.data);
            }
          } else {
            Ie ? t.texSubImage2D(34069 + Y, 0, 0, 0, fe, de, j[Y]) : t.texImage2D(34069 + Y, 0, Se, fe, de, j[Y]);
            for (let ae = 0; ae < le.length; ae++) {
              const se = le[ae];
              Ie ? t.texSubImage2D(34069 + Y, ae + 1, 0, 0, fe, de, se.image[Y]) : t.texImage2D(34069 + Y, ae + 1, Se, fe, de, se.image[Y]);
            }
          }
      }
      S(E, he) && C(34067), te.__currentVersion = te.version, E.onUpdate && E.onUpdate(E);
    }
    R.__version = E.version;
  }
  function ue(R, E, $, Q, te) {
    const oe = s.convert($.format, $.encoding), we = s.convert($.type), j = w($.internalFormat, oe, we, $.encoding);
    n.get(E).__hasExternalTextures || (te === 32879 || te === 35866 ? t.texImage3D(te, 0, j, E.width, E.height, E.depth, 0, oe, we, null) : t.texImage2D(te, 0, j, E.width, E.height, 0, oe, we, null)), t.bindFramebuffer(36160, R), Ne(E) ? u.framebufferTexture2DMultisampleEXT(36160, Q, te, n.get($).__webglTexture, 0, nt(E)) : c.framebufferTexture2D(36160, Q, te, n.get($).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function Oe(R, E, $) {
    if (c.bindRenderbuffer(36161, R), E.depthBuffer && !E.stencilBuffer) {
      let Q = 33189;
      if ($ || Ne(E)) {
        const te = E.depthTexture;
        te && te.isDepthTexture && (te.type === 1015 ? Q = 36012 : te.type === 1014 && (Q = 33190));
        const oe = nt(E);
        Ne(E) ? u.renderbufferStorageMultisampleEXT(36161, oe, Q, E.width, E.height) : c.renderbufferStorageMultisample(36161, oe, Q, E.width, E.height);
      } else
        c.renderbufferStorage(36161, Q, E.width, E.height);
      c.framebufferRenderbuffer(36160, 36096, 36161, R);
    } else if (E.depthBuffer && E.stencilBuffer) {
      const Q = nt(E);
      $ && Ne(E) === !1 ? c.renderbufferStorageMultisample(36161, Q, 35056, E.width, E.height) : Ne(E) ? u.renderbufferStorageMultisampleEXT(36161, Q, 35056, E.width, E.height) : c.renderbufferStorage(36161, 34041, E.width, E.height), c.framebufferRenderbuffer(36160, 33306, 36161, R);
    } else {
      const Q = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture];
      for (let te = 0; te < Q.length; te++) {
        const oe = Q[te], we = s.convert(oe.format, oe.encoding), j = s.convert(oe.type), pe = w(oe.internalFormat, we, j, oe.encoding), he = nt(E);
        $ && Ne(E) === !1 ? c.renderbufferStorageMultisample(36161, he, pe, E.width, E.height) : Ne(E) ? u.renderbufferStorageMultisampleEXT(36161, he, pe, E.width, E.height) : c.renderbufferStorage(36161, pe, E.width, E.height);
      }
    }
    c.bindRenderbuffer(36161, null);
  }
  function Te(R, E) {
    if (E && E.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(36160, R), !(E.depthTexture && E.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(E.depthTexture).__webglTexture || E.depthTexture.image.width !== E.width || E.depthTexture.image.height !== E.height) && (E.depthTexture.image.width = E.width, E.depthTexture.image.height = E.height, E.depthTexture.needsUpdate = !0), q(E.depthTexture, 0);
    const Q = n.get(E.depthTexture).__webglTexture, te = nt(E);
    if (E.depthTexture.format === 1026)
      Ne(E) ? u.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, Q, 0, te) : c.framebufferTexture2D(36160, 36096, 3553, Q, 0);
    else if (E.depthTexture.format === 1027)
      Ne(E) ? u.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, Q, 0, te) : c.framebufferTexture2D(36160, 33306, 3553, Q, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function me(R) {
    const E = n.get(R), $ = R.isWebGLCubeRenderTarget === !0;
    if (R.depthTexture && !E.__autoAllocateDepthBuffer) {
      if ($)
        throw new Error("target.depthTexture not supported in Cube render targets");
      Te(E.__webglFramebuffer, R);
    } else if ($) {
      E.__webglDepthbuffer = [];
      for (let Q = 0; Q < 6; Q++)
        t.bindFramebuffer(36160, E.__webglFramebuffer[Q]), E.__webglDepthbuffer[Q] = c.createRenderbuffer(), Oe(E.__webglDepthbuffer[Q], R, !1);
    } else
      t.bindFramebuffer(36160, E.__webglFramebuffer), E.__webglDepthbuffer = c.createRenderbuffer(), Oe(E.__webglDepthbuffer, R, !1);
    t.bindFramebuffer(36160, null);
  }
  function tt(R, E, $) {
    const Q = n.get(R);
    E !== void 0 && ue(Q.__webglFramebuffer, R, R.texture, 36064, 3553), $ !== void 0 && me(R);
  }
  function mt(R) {
    const E = R.texture, $ = n.get(R), Q = n.get(E);
    R.addEventListener("dispose", W), R.isWebGLMultipleRenderTargets !== !0 && (Q.__webglTexture === void 0 && (Q.__webglTexture = c.createTexture()), Q.__version = E.version, o.memory.textures++);
    const te = R.isWebGLCubeRenderTarget === !0, oe = R.isWebGLMultipleRenderTargets === !0, we = x(R) || r;
    if (te) {
      $.__webglFramebuffer = [];
      for (let j = 0; j < 6; j++)
        $.__webglFramebuffer[j] = c.createFramebuffer();
    } else {
      if ($.__webglFramebuffer = c.createFramebuffer(), oe)
        if (i.drawBuffers) {
          const j = R.texture;
          for (let pe = 0, he = j.length; pe < he; pe++) {
            const fe = n.get(j[pe]);
            fe.__webglTexture === void 0 && (fe.__webglTexture = c.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (r && R.samples > 0 && Ne(R) === !1) {
        const j = oe ? E : [E];
        $.__webglMultisampledFramebuffer = c.createFramebuffer(), $.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, $.__webglMultisampledFramebuffer);
        for (let pe = 0; pe < j.length; pe++) {
          const he = j[pe];
          $.__webglColorRenderbuffer[pe] = c.createRenderbuffer(), c.bindRenderbuffer(36161, $.__webglColorRenderbuffer[pe]);
          const fe = s.convert(he.format, he.encoding), de = s.convert(he.type), Se = w(he.internalFormat, fe, de, he.encoding), Ie = nt(R);
          c.renderbufferStorageMultisample(36161, Ie, Se, R.width, R.height), c.framebufferRenderbuffer(36160, 36064 + pe, 36161, $.__webglColorRenderbuffer[pe]);
        }
        c.bindRenderbuffer(36161, null), R.depthBuffer && ($.__webglDepthRenderbuffer = c.createRenderbuffer(), Oe($.__webglDepthRenderbuffer, R, !0)), t.bindFramebuffer(36160, null);
      }
    }
    if (te) {
      t.bindTexture(34067, Q.__webglTexture), Z(34067, E, we);
      for (let j = 0; j < 6; j++)
        ue($.__webglFramebuffer[j], R, E, 36064, 34069 + j);
      S(E, we) && C(34067), t.unbindTexture();
    } else if (oe) {
      const j = R.texture;
      for (let pe = 0, he = j.length; pe < he; pe++) {
        const fe = j[pe], de = n.get(fe);
        t.bindTexture(3553, de.__webglTexture), Z(3553, fe, we), ue($.__webglFramebuffer, R, fe, 36064 + pe, 3553), S(fe, we) && C(3553);
      }
      t.unbindTexture();
    } else {
      let j = 3553;
      (R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) && (r ? j = R.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(j, Q.__webglTexture), Z(j, E, we), ue($.__webglFramebuffer, R, E, 36064, j), S(E, we) && C(j), t.unbindTexture();
    }
    R.depthBuffer && me(R);
  }
  function at(R) {
    const E = x(R) || r, $ = R.isWebGLMultipleRenderTargets === !0 ? R.texture : [R.texture];
    for (let Q = 0, te = $.length; Q < te; Q++) {
      const oe = $[Q];
      if (S(oe, E)) {
        const we = R.isWebGLCubeRenderTarget ? 34067 : 3553, j = n.get(oe).__webglTexture;
        t.bindTexture(we, j), C(we), t.unbindTexture();
      }
    }
  }
  function It(R) {
    if (r && R.samples > 0 && Ne(R) === !1) {
      const E = R.isWebGLMultipleRenderTargets ? R.texture : [R.texture], $ = R.width, Q = R.height;
      let te = 16384;
      const oe = [], we = R.stencilBuffer ? 33306 : 36096, j = n.get(R), pe = R.isWebGLMultipleRenderTargets === !0;
      if (pe)
        for (let he = 0; he < E.length; he++)
          t.bindFramebuffer(36160, j.__webglMultisampledFramebuffer), c.framebufferRenderbuffer(36160, 36064 + he, 36161, null), t.bindFramebuffer(36160, j.__webglFramebuffer), c.framebufferTexture2D(36009, 36064 + he, 3553, null, 0);
      t.bindFramebuffer(36008, j.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, j.__webglFramebuffer);
      for (let he = 0; he < E.length; he++) {
        oe.push(36064 + he), R.depthBuffer && oe.push(we);
        const fe = j.__ignoreDepthValues !== void 0 ? j.__ignoreDepthValues : !1;
        if (fe === !1 && (R.depthBuffer && (te |= 256), R.stencilBuffer && (te |= 1024)), pe && c.framebufferRenderbuffer(36008, 36064, 36161, j.__webglColorRenderbuffer[he]), fe === !0 && (c.invalidateFramebuffer(36008, [we]), c.invalidateFramebuffer(36009, [we])), pe) {
          const de = n.get(E[he]).__webglTexture;
          c.framebufferTexture2D(36009, 36064, 3553, de, 0);
        }
        c.blitFramebuffer(0, 0, $, Q, 0, 0, $, Q, te, 9728), m && c.invalidateFramebuffer(36008, oe);
      }
      if (t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), pe)
        for (let he = 0; he < E.length; he++) {
          t.bindFramebuffer(36160, j.__webglMultisampledFramebuffer), c.framebufferRenderbuffer(36160, 36064 + he, 36161, j.__webglColorRenderbuffer[he]);
          const fe = n.get(E[he]).__webglTexture;
          t.bindFramebuffer(36160, j.__webglFramebuffer), c.framebufferTexture2D(36009, 36064 + he, 3553, fe, 0);
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
  function Wt(R) {
    const E = o.render.frame;
    g.get(R) !== E && (g.set(R, E), R.update());
  }
  function Bt(R, E) {
    const $ = R.encoding, Q = R.format, te = R.type;
    return R.isCompressedTexture === !0 || R.isVideoTexture === !0 || R.format === 1035 || $ !== 3e3 && ($ === 3001 ? r === !1 ? e.has("EXT_sRGB") === !0 && Q === 1023 ? (R.format = 1035, R.minFilter = 1006, R.generateMipmaps = !1) : E = jo.sRGBToLinear(E) : (Q !== 1023 || te !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", $)), E;
  }
  this.allocateTextureUnit = U, this.resetTextureUnits = G, this.setTexture2D = q, this.setTexture2DArray = J, this.setTexture3D = k, this.setTextureCube = ee, this.rebindTextures = tt, this.setupRenderTarget = mt, this.updateRenderTargetMipmap = at, this.updateMultisampleRenderTarget = It, this.setupDepthRenderbuffer = me, this.setupFrameBufferTexture = ue, this.useMultisampledRTT = Ne;
}
function Sd(c, e, t) {
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
    return s === 1020 ? n ? 34042 : (r = e.get("WEBGL_depth_texture"), r !== null ? r.UNSIGNED_INT_24_8_WEBGL : null) : c[s] !== void 0 ? c[s] : null;
  }
  return { convert: i };
}
class Ed extends ft {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Yi extends it {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Ad = { type: "move" };
class qs {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Yi(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Yi(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new P(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new P()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Yi(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new P(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new P()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, o = null;
    const r = this._targetRay, l = this._grip, a = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (a && e.hand) {
        o = !0;
        for (const p of e.hand.values()) {
          const f = t.getJointPose(p, n);
          if (a.joints[p.jointName] === void 0) {
            const v = new Yi();
            v.matrixAutoUpdate = !1, v.visible = !1, a.joints[p.jointName] = v, a.add(v);
          }
          const _ = a.joints[p.jointName];
          f !== null && (_.matrix.fromArray(f.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), _.jointRadius = f.radius), _.visible = f !== null;
        }
        const h = a.joints["index-finger-tip"], d = a.joints["thumb-tip"], u = h.position.distanceTo(d.position), m = 0.02, g = 5e-3;
        a.inputState.pinching && u > m + g ? (a.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !a.inputState.pinching && u <= m - g && (a.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      r !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (r.matrix.fromArray(i.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), i.linearVelocity ? (r.hasLinearVelocity = !0, r.linearVelocity.copy(i.linearVelocity)) : r.hasLinearVelocity = !1, i.angularVelocity ? (r.hasAngularVelocity = !0, r.angularVelocity.copy(i.angularVelocity)) : r.hasAngularVelocity = !1, this.dispatchEvent(Ad)));
    }
    return r !== null && (r.visible = i !== null), l !== null && (l.visible = s !== null), a !== null && (a.visible = o !== null), this;
  }
}
class Td extends wt {
  constructor(e, t, n, i, s, o, r, l, a, h) {
    if (h = h !== void 0 ? h : 1026, h !== 1026 && h !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === 1026 && (n = 1014), n === void 0 && h === 1027 && (n = 1020), super(null, i, s, o, r, l, h, n, a), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = r !== void 0 ? r : 1003, this.minFilter = l !== void 0 ? l : 1003, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class Cd extends si {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, o = null, r = "local-floor", l = null, a = null, h = null, d = null, u = null, m = null;
    const g = t.getContextAttributes();
    let p = null, f = null;
    const _ = [], v = [], y = new ft();
    y.layers.enable(1), y.viewport = new Ge();
    const x = new ft();
    x.layers.enable(2), x.viewport = new Ge();
    const M = [y, x], S = new Ed();
    S.layers.enable(1), S.layers.enable(2);
    let C = null, w = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(N) {
      let q = _[N];
      return q === void 0 && (q = new qs(), _[N] = q), q.getTargetRaySpace();
    }, this.getControllerGrip = function(N) {
      let q = _[N];
      return q === void 0 && (q = new qs(), _[N] = q), q.getGripSpace();
    }, this.getHand = function(N) {
      let q = _[N];
      return q === void 0 && (q = new qs(), _[N] = q), q.getHandSpace();
    };
    function A(N) {
      const q = v.indexOf(N.inputSource);
      if (q === -1)
        return;
      const J = _[q];
      J !== void 0 && J.dispatchEvent({ type: N.type, data: N.inputSource });
    }
    function D() {
      i.removeEventListener("select", A), i.removeEventListener("selectstart", A), i.removeEventListener("selectend", A), i.removeEventListener("squeeze", A), i.removeEventListener("squeezestart", A), i.removeEventListener("squeezeend", A), i.removeEventListener("end", D), i.removeEventListener("inputsourceschange", B);
      for (let N = 0; N < _.length; N++) {
        const q = v[N];
        q !== null && (v[N] = null, _[N].disconnect(q));
      }
      C = null, w = null, e.setRenderTarget(p), u = null, d = null, h = null, i = null, f = null, U.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(N) {
      s = N, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(N) {
      r = N, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || o;
    }, this.setReferenceSpace = function(N) {
      l = N;
    }, this.getBaseLayer = function() {
      return d !== null ? d : u;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(N) {
      if (i = N, i !== null) {
        if (p = e.getRenderTarget(), i.addEventListener("select", A), i.addEventListener("selectstart", A), i.addEventListener("selectend", A), i.addEventListener("squeeze", A), i.addEventListener("squeezestart", A), i.addEventListener("squeezeend", A), i.addEventListener("end", D), i.addEventListener("inputsourceschange", B), g.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const q = {
            antialias: i.renderState.layers === void 0 ? g.antialias : !0,
            alpha: g.alpha,
            depth: g.depth,
            stencil: g.stencil,
            framebufferScaleFactor: s
          };
          u = new XRWebGLLayer(i, t, q), i.updateRenderState({ baseLayer: u }), f = new Cn(
            u.framebufferWidth,
            u.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              encoding: e.outputEncoding
            }
          );
        } else {
          let q = null, J = null, k = null;
          g.depth && (k = g.stencil ? 35056 : 33190, q = g.stencil ? 1027 : 1026, J = g.stencil ? 1020 : 1014);
          const ee = {
            colorFormat: 32856,
            depthFormat: k,
            scaleFactor: s
          };
          h = new XRWebGLBinding(i, t), d = h.createProjectionLayer(ee), i.updateRenderState({ layers: [d] }), f = new Cn(
            d.textureWidth,
            d.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new Td(d.textureWidth, d.textureHeight, J, void 0, void 0, void 0, void 0, void 0, void 0, q),
              stencilBuffer: g.stencil,
              encoding: e.outputEncoding,
              samples: g.antialias ? 4 : 0
            }
          );
          const re = e.properties.get(f);
          re.__ignoreDepthValues = d.ignoreDepthValues;
        }
        f.isXRRenderTarget = !0, this.setFoveation(1), l = null, o = await i.requestReferenceSpace(r), U.setContext(i), U.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function B(N) {
      for (let q = 0; q < N.removed.length; q++) {
        const J = N.removed[q], k = v.indexOf(J);
        k >= 0 && (v[k] = null, _[k].dispatchEvent({ type: "disconnected", data: J }));
      }
      for (let q = 0; q < N.added.length; q++) {
        const J = N.added[q];
        let k = v.indexOf(J);
        if (k === -1) {
          for (let re = 0; re < _.length; re++)
            if (re >= v.length) {
              v.push(J), k = re;
              break;
            } else if (v[re] === null) {
              v[re] = J, k = re;
              break;
            }
          if (k === -1)
            break;
        }
        const ee = _[k];
        ee && ee.dispatchEvent({ type: "connected", data: J });
      }
    }
    const W = new P(), z = new P();
    function F(N, q, J) {
      W.setFromMatrixPosition(q.matrixWorld), z.setFromMatrixPosition(J.matrixWorld);
      const k = W.distanceTo(z), ee = q.projectionMatrix.elements, re = J.projectionMatrix.elements, ge = ee[14] / (ee[10] - 1), Z = ee[14] / (ee[10] + 1), De = (ee[9] + 1) / ee[5], ve = (ee[9] - 1) / ee[5], ye = (ee[8] - 1) / ee[0], ue = (re[8] + 1) / re[0], Oe = ge * ye, Te = ge * ue, me = k / (-ye + ue), tt = me * -ye;
      q.matrixWorld.decompose(N.position, N.quaternion, N.scale), N.translateX(tt), N.translateZ(me), N.matrixWorld.compose(N.position, N.quaternion, N.scale), N.matrixWorldInverse.copy(N.matrixWorld).invert();
      const mt = ge + me, at = Z + me, It = Oe - tt, nt = Te + (k - tt), Ne = De * Z / at * mt, Wt = ve * Z / at * mt;
      N.projectionMatrix.makePerspective(It, nt, Ne, Wt, mt, at);
    }
    function I(N, q) {
      q === null ? N.matrixWorld.copy(N.matrix) : N.matrixWorld.multiplyMatrices(q.matrixWorld, N.matrix), N.matrixWorldInverse.copy(N.matrixWorld).invert();
    }
    this.updateCamera = function(N) {
      if (i === null)
        return;
      S.near = x.near = y.near = N.near, S.far = x.far = y.far = N.far, (C !== S.near || w !== S.far) && (i.updateRenderState({
        depthNear: S.near,
        depthFar: S.far
      }), C = S.near, w = S.far);
      const q = N.parent, J = S.cameras;
      I(S, q);
      for (let ee = 0; ee < J.length; ee++)
        I(J[ee], q);
      S.matrixWorld.decompose(S.position, S.quaternion, S.scale), N.position.copy(S.position), N.quaternion.copy(S.quaternion), N.scale.copy(S.scale), N.matrix.copy(S.matrix), N.matrixWorld.copy(S.matrixWorld);
      const k = N.children;
      for (let ee = 0, re = k.length; ee < re; ee++)
        k[ee].updateMatrixWorld(!0);
      J.length === 2 ? F(S, y, x) : S.projectionMatrix.copy(y.projectionMatrix);
    }, this.getCamera = function() {
      return S;
    }, this.getFoveation = function() {
      if (d !== null)
        return d.fixedFoveation;
      if (u !== null)
        return u.fixedFoveation;
    }, this.setFoveation = function(N) {
      d !== null && (d.fixedFoveation = N), u !== null && u.fixedFoveation !== void 0 && (u.fixedFoveation = N);
    };
    let L = null;
    function G(N, q) {
      if (a = q.getViewerPose(l || o), m = q, a !== null) {
        const J = a.views;
        u !== null && (e.setRenderTargetFramebuffer(f, u.framebuffer), e.setRenderTarget(f));
        let k = !1;
        J.length !== S.cameras.length && (S.cameras.length = 0, k = !0);
        for (let ee = 0; ee < J.length; ee++) {
          const re = J[ee];
          let ge = null;
          if (u !== null)
            ge = u.getViewport(re);
          else {
            const De = h.getViewSubImage(d, re);
            ge = De.viewport, ee === 0 && (e.setRenderTargetTextures(
              f,
              De.colorTexture,
              d.ignoreDepthValues ? void 0 : De.depthStencilTexture
            ), e.setRenderTarget(f));
          }
          let Z = M[ee];
          Z === void 0 && (Z = new ft(), Z.layers.enable(ee), Z.viewport = new Ge(), M[ee] = Z), Z.matrix.fromArray(re.transform.matrix), Z.projectionMatrix.fromArray(re.projectionMatrix), Z.viewport.set(ge.x, ge.y, ge.width, ge.height), ee === 0 && S.matrix.copy(Z.matrix), k === !0 && S.cameras.push(Z);
        }
      }
      for (let J = 0; J < _.length; J++) {
        const k = v[J], ee = _[J];
        k !== null && ee !== void 0 && ee.update(k, q, l || o);
      }
      L && L(N, q), m = null;
    }
    const U = new na();
    U.setAnimationLoop(G), this.setAnimationLoop = function(N) {
      L = N;
    }, this.dispose = function() {
    };
  }
}
function Ld(c, e) {
  function t(p, f) {
    p.fogColor.value.copy(f.color), f.isFog ? (p.fogNear.value = f.near, p.fogFar.value = f.far) : f.isFogExp2 && (p.fogDensity.value = f.density);
  }
  function n(p, f, _, v, y) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? i(p, f) : f.isMeshToonMaterial ? (i(p, f), h(p, f)) : f.isMeshPhongMaterial ? (i(p, f), a(p, f)) : f.isMeshStandardMaterial ? (i(p, f), d(p, f), f.isMeshPhysicalMaterial && u(p, f, y)) : f.isMeshMatcapMaterial ? (i(p, f), m(p, f)) : f.isMeshDepthMaterial ? i(p, f) : f.isMeshDistanceMaterial ? (i(p, f), g(p, f)) : f.isMeshNormalMaterial ? i(p, f) : f.isLineBasicMaterial ? (s(p, f), f.isLineDashedMaterial && o(p, f)) : f.isPointsMaterial ? r(p, f, _, v) : f.isSpriteMaterial ? l(p, f) : f.isShadowMaterial ? (p.color.value.copy(f.color), p.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function i(p, f) {
    p.opacity.value = f.opacity, f.color && p.diffuse.value.copy(f.color), f.emissive && p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.bumpMap && (p.bumpMap.value = f.bumpMap, p.bumpScale.value = f.bumpScale, f.side === 1 && (p.bumpScale.value *= -1)), f.displacementMap && (p.displacementMap.value = f.displacementMap, p.displacementScale.value = f.displacementScale, p.displacementBias.value = f.displacementBias), f.emissiveMap && (p.emissiveMap.value = f.emissiveMap), f.normalMap && (p.normalMap.value = f.normalMap, p.normalScale.value.copy(f.normalScale), f.side === 1 && p.normalScale.value.negate()), f.specularMap && (p.specularMap.value = f.specularMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    const _ = e.get(f).envMap;
    if (_ && (p.envMap.value = _, p.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = f.reflectivity, p.ior.value = f.ior, p.refractionRatio.value = f.refractionRatio), f.lightMap) {
      p.lightMap.value = f.lightMap;
      const x = c.physicallyCorrectLights !== !0 ? Math.PI : 1;
      p.lightMapIntensity.value = f.lightMapIntensity * x;
    }
    f.aoMap && (p.aoMap.value = f.aoMap, p.aoMapIntensity.value = f.aoMapIntensity);
    let v;
    f.map ? v = f.map : f.specularMap ? v = f.specularMap : f.displacementMap ? v = f.displacementMap : f.normalMap ? v = f.normalMap : f.bumpMap ? v = f.bumpMap : f.roughnessMap ? v = f.roughnessMap : f.metalnessMap ? v = f.metalnessMap : f.alphaMap ? v = f.alphaMap : f.emissiveMap ? v = f.emissiveMap : f.clearcoatMap ? v = f.clearcoatMap : f.clearcoatNormalMap ? v = f.clearcoatNormalMap : f.clearcoatRoughnessMap ? v = f.clearcoatRoughnessMap : f.iridescenceMap ? v = f.iridescenceMap : f.iridescenceThicknessMap ? v = f.iridescenceThicknessMap : f.specularIntensityMap ? v = f.specularIntensityMap : f.specularColorMap ? v = f.specularColorMap : f.transmissionMap ? v = f.transmissionMap : f.thicknessMap ? v = f.thicknessMap : f.sheenColorMap ? v = f.sheenColorMap : f.sheenRoughnessMap && (v = f.sheenRoughnessMap), v !== void 0 && (v.isWebGLRenderTarget && (v = v.texture), v.matrixAutoUpdate === !0 && v.updateMatrix(), p.uvTransform.value.copy(v.matrix));
    let y;
    f.aoMap ? y = f.aoMap : f.lightMap && (y = f.lightMap), y !== void 0 && (y.isWebGLRenderTarget && (y = y.texture), y.matrixAutoUpdate === !0 && y.updateMatrix(), p.uv2Transform.value.copy(y.matrix));
  }
  function s(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity;
  }
  function o(p, f) {
    p.dashSize.value = f.dashSize, p.totalSize.value = f.dashSize + f.gapSize, p.scale.value = f.scale;
  }
  function r(p, f, _, v) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.size.value = f.size * _, p.scale.value = v * 0.5, f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let y;
    f.map ? y = f.map : f.alphaMap && (y = f.alphaMap), y !== void 0 && (y.matrixAutoUpdate === !0 && y.updateMatrix(), p.uvTransform.value.copy(y.matrix));
  }
  function l(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.rotation.value = f.rotation, f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let _;
    f.map ? _ = f.map : f.alphaMap && (_ = f.alphaMap), _ !== void 0 && (_.matrixAutoUpdate === !0 && _.updateMatrix(), p.uvTransform.value.copy(_.matrix));
  }
  function a(p, f) {
    p.specular.value.copy(f.specular), p.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function h(p, f) {
    f.gradientMap && (p.gradientMap.value = f.gradientMap);
  }
  function d(p, f) {
    p.roughness.value = f.roughness, p.metalness.value = f.metalness, f.roughnessMap && (p.roughnessMap.value = f.roughnessMap), f.metalnessMap && (p.metalnessMap.value = f.metalnessMap), e.get(f).envMap && (p.envMapIntensity.value = f.envMapIntensity);
  }
  function u(p, f, _) {
    p.ior.value = f.ior, f.sheen > 0 && (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), p.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (p.sheenColorMap.value = f.sheenColorMap), f.sheenRoughnessMap && (p.sheenRoughnessMap.value = f.sheenRoughnessMap)), f.clearcoat > 0 && (p.clearcoat.value = f.clearcoat, p.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (p.clearcoatMap.value = f.clearcoatMap), f.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap), f.clearcoatNormalMap && (p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), p.clearcoatNormalMap.value = f.clearcoatNormalMap, f.side === 1 && p.clearcoatNormalScale.value.negate())), f.iridescence > 0 && (p.iridescence.value = f.iridescence, p.iridescenceIOR.value = f.iridescenceIOR, p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (p.iridescenceMap.value = f.iridescenceMap), f.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = f.iridescenceThicknessMap)), f.transmission > 0 && (p.transmission.value = f.transmission, p.transmissionSamplerMap.value = _.texture, p.transmissionSamplerSize.value.set(_.width, _.height), f.transmissionMap && (p.transmissionMap.value = f.transmissionMap), p.thickness.value = f.thickness, f.thicknessMap && (p.thicknessMap.value = f.thicknessMap), p.attenuationDistance.value = f.attenuationDistance, p.attenuationColor.value.copy(f.attenuationColor)), p.specularIntensity.value = f.specularIntensity, p.specularColor.value.copy(f.specularColor), f.specularIntensityMap && (p.specularIntensityMap.value = f.specularIntensityMap), f.specularColorMap && (p.specularColorMap.value = f.specularColorMap);
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
function Rd(c, e, t, n) {
  let i = {}, s = {}, o = [];
  const r = t.isWebGL2 ? c.getParameter(35375) : 0;
  function l(v, y) {
    const x = y.program;
    n.uniformBlockBinding(v, x);
  }
  function a(v, y) {
    let x = i[v.id];
    x === void 0 && (g(v), x = h(v), i[v.id] = x, v.addEventListener("dispose", f));
    const M = y.program;
    n.updateUBOMapping(v, M);
    const S = e.render.frame;
    s[v.id] !== S && (u(v), s[v.id] = S);
  }
  function h(v) {
    const y = d();
    v.__bindingPointIndex = y;
    const x = c.createBuffer(), M = v.__size, S = v.usage;
    return c.bindBuffer(35345, x), c.bufferData(35345, M, S), c.bindBuffer(35345, null), c.bindBufferBase(35345, y, x), x;
  }
  function d() {
    for (let v = 0; v < r; v++)
      if (o.indexOf(v) === -1)
        return o.push(v), v;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(v) {
    const y = i[v.id], x = v.uniforms, M = v.__cache;
    c.bindBuffer(35345, y);
    for (let S = 0, C = x.length; S < C; S++) {
      const w = x[S];
      if (m(w, S, M) === !0) {
        const A = w.value, D = w.__offset;
        typeof A == "number" ? (w.__data[0] = A, c.bufferSubData(35345, D, w.__data)) : (w.value.isMatrix3 ? (w.__data[0] = w.value.elements[0], w.__data[1] = w.value.elements[1], w.__data[2] = w.value.elements[2], w.__data[3] = w.value.elements[0], w.__data[4] = w.value.elements[3], w.__data[5] = w.value.elements[4], w.__data[6] = w.value.elements[5], w.__data[7] = w.value.elements[0], w.__data[8] = w.value.elements[6], w.__data[9] = w.value.elements[7], w.__data[10] = w.value.elements[8], w.__data[11] = w.value.elements[0]) : A.toArray(w.__data), c.bufferSubData(35345, D, w.__data));
      }
    }
    c.bindBuffer(35345, null);
  }
  function m(v, y, x) {
    const M = v.value;
    if (x[y] === void 0)
      return typeof M == "number" ? x[y] = M : x[y] = M.clone(), !0;
    if (typeof M == "number") {
      if (x[y] !== M)
        return x[y] = M, !0;
    } else {
      const S = x[y];
      if (S.equals(M) === !1)
        return S.copy(M), !0;
    }
    return !1;
  }
  function g(v) {
    const y = v.uniforms;
    let x = 0;
    const M = 16;
    let S = 0;
    for (let C = 0, w = y.length; C < w; C++) {
      const A = y[C], D = p(A);
      if (A.__data = new Float32Array(D.storage / Float32Array.BYTES_PER_ELEMENT), A.__offset = x, C > 0) {
        S = x % M;
        const B = M - S;
        S !== 0 && B - D.boundary < 0 && (x += M - S, A.__offset = x);
      }
      x += D.storage;
    }
    return S = x % M, S > 0 && (x += M - S), v.__size = x, v.__cache = {}, this;
  }
  function p(v) {
    const y = v.value, x = {
      boundary: 0,
      storage: 0
    };
    return typeof y == "number" ? (x.boundary = 4, x.storage = 4) : y.isVector2 ? (x.boundary = 8, x.storage = 8) : y.isVector3 || y.isColor ? (x.boundary = 16, x.storage = 12) : y.isVector4 ? (x.boundary = 16, x.storage = 16) : y.isMatrix3 ? (x.boundary = 48, x.storage = 48) : y.isMatrix4 ? (x.boundary = 64, x.storage = 64) : y.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", y), x;
  }
  function f(v) {
    const y = v.target;
    y.removeEventListener("dispose", f);
    const x = o.indexOf(y.__bindingPointIndex);
    o.splice(x, 1), c.deleteBuffer(i[y.id]), delete i[y.id], delete s[y.id];
  }
  function _() {
    for (const v in i)
      c.deleteBuffer(i[v]);
    o = [], i = {}, s = {};
  }
  return {
    bind: l,
    update: a,
    dispose: _
  };
}
function Fd() {
  const c = cs("canvas");
  return c.style.display = "block", c;
}
function ca(c = {}) {
  this.isWebGLRenderer = !0;
  const e = c.canvas !== void 0 ? c.canvas : Fd(), t = c.context !== void 0 ? c.context : null, n = c.depth !== void 0 ? c.depth : !0, i = c.stencil !== void 0 ? c.stencil : !0, s = c.antialias !== void 0 ? c.antialias : !1, o = c.premultipliedAlpha !== void 0 ? c.premultipliedAlpha : !0, r = c.preserveDrawingBuffer !== void 0 ? c.preserveDrawingBuffer : !1, l = c.powerPreference !== void 0 ? c.powerPreference : "default", a = c.failIfMajorPerformanceCaveat !== void 0 ? c.failIfMajorPerformanceCaveat : !1;
  let h;
  t !== null ? h = t.getContextAttributes().alpha : h = c.alpha !== void 0 ? c.alpha : !1;
  let d = null, u = null;
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
  let f = !1, _ = 0, v = 0, y = null, x = -1, M = null;
  const S = new Ge(), C = new Ge();
  let w = null, A = e.width, D = e.height, B = 1, W = null, z = null;
  const F = new Ge(0, 0, A, D), I = new Ge(0, 0, A, D);
  let L = !1;
  const G = new gr();
  let U = !1, N = !1, q = null;
  const J = new He(), k = new be(), ee = new P(), re = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function ge() {
    return y === null ? B : 1;
  }
  let Z = t;
  function De(T, V) {
    for (let X = 0; X < T.length; X++) {
      const H = T[X], K = e.getContext(H, V);
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
      powerPreference: l,
      failIfMajorPerformanceCaveat: a
    };
    if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${mr}`), e.addEventListener("webglcontextlost", Se, !1), e.addEventListener("webglcontextrestored", Ie, !1), e.addEventListener("webglcontextcreationerror", qe, !1), Z === null) {
      const V = ["webgl2", "webgl", "experimental-webgl"];
      if (p.isWebGL1Renderer === !0 && V.shift(), Z = De(V, T), Z === null)
        throw De(V) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    Z.getShaderPrecisionFormat === void 0 && (Z.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (T) {
    throw console.error("THREE.WebGLRenderer: " + T.message), T;
  }
  let ve, ye, ue, Oe, Te, me, tt, mt, at, It, nt, Ne, Wt, Bt, R, E, $, Q, te, oe, we, j, pe, he;
  function fe() {
    ve = new Wh(Z), ye = new Bh(Z, ve, c), ve.init(ye), j = new Sd(Z, ve, ye), ue = new bd(Z, ve, ye), Oe = new qh(), Te = new cd(), me = new Md(Z, ve, ue, Te, ye, j, Oe), tt = new Nh(p), mt = new kh(p), at = new nl(Z, ye), pe = new Ph(Z, ve, at, ye), It = new Vh(Z, at, Oe, pe), nt = new $h(Z, It, at, Oe), te = new Yh(Z, ye, me), E = new zh(Te), Ne = new ld(p, tt, mt, ve, ye, pe, E), Wt = new Ld(p, Te), Bt = new ud(), R = new _d(ve, ye), Q = new Dh(p, tt, ue, nt, h, o), $ = new wd(p, nt, ye), he = new Rd(Z, Oe, ye, ue), oe = new Ih(Z, ve, Oe, ye), we = new Hh(Z, ve, Oe, ye), Oe.programs = Ne.programs, p.capabilities = ye, p.extensions = ve, p.properties = Te, p.renderLists = Bt, p.shadowMap = $, p.state = ue, p.info = Oe;
  }
  fe();
  const de = new Cd(p, Z);
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
    return B;
  }, this.setPixelRatio = function(T) {
    T !== void 0 && (B = T, this.setSize(A, D, !1));
  }, this.getSize = function(T) {
    return T.set(A, D);
  }, this.setSize = function(T, V, X) {
    if (de.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    A = T, D = V, e.width = Math.floor(T * B), e.height = Math.floor(V * B), X !== !1 && (e.style.width = T + "px", e.style.height = V + "px"), this.setViewport(0, 0, T, V);
  }, this.getDrawingBufferSize = function(T) {
    return T.set(A * B, D * B).floor();
  }, this.setDrawingBufferSize = function(T, V, X) {
    A = T, D = V, B = X, e.width = Math.floor(T * X), e.height = Math.floor(V * X), this.setViewport(0, 0, T, V);
  }, this.getCurrentViewport = function(T) {
    return T.copy(S);
  }, this.getViewport = function(T) {
    return T.copy(F);
  }, this.setViewport = function(T, V, X, H) {
    T.isVector4 ? F.set(T.x, T.y, T.z, T.w) : F.set(T, V, X, H), ue.viewport(S.copy(F).multiplyScalar(B).floor());
  }, this.getScissor = function(T) {
    return T.copy(I);
  }, this.setScissor = function(T, V, X, H) {
    T.isVector4 ? I.set(T.x, T.y, T.z, T.w) : I.set(T, V, X, H), ue.scissor(C.copy(I).multiplyScalar(B).floor());
  }, this.getScissorTest = function() {
    return L;
  }, this.setScissorTest = function(T) {
    ue.setScissorTest(L = T);
  }, this.setOpaqueSort = function(T) {
    W = T;
  }, this.setTransparentSort = function(T) {
    z = T;
  }, this.getClearColor = function(T) {
    return T.copy(Q.getClearColor());
  }, this.setClearColor = function() {
    Q.setClearColor.apply(Q, arguments);
  }, this.getClearAlpha = function() {
    return Q.getClearAlpha();
  }, this.setClearAlpha = function() {
    Q.setClearAlpha.apply(Q, arguments);
  }, this.clear = function(T = !0, V = !0, X = !0) {
    let H = 0;
    T && (H |= 16384), V && (H |= 256), X && (H |= 1024), Z.clear(H);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    e.removeEventListener("webglcontextlost", Se, !1), e.removeEventListener("webglcontextrestored", Ie, !1), e.removeEventListener("webglcontextcreationerror", qe, !1), Bt.dispose(), R.dispose(), Te.dispose(), tt.dispose(), mt.dispose(), nt.dispose(), pe.dispose(), he.dispose(), Ne.dispose(), de.dispose(), de.removeEventListener("sessionstart", Re), de.removeEventListener("sessionend", Qe), q && (q.dispose(), q = null), Xe.stop();
  };
  function Se(T) {
    T.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), f = !0;
  }
  function Ie() {
    console.log("THREE.WebGLRenderer: Context Restored."), f = !1;
    const T = Oe.autoReset, V = $.enabled, X = $.autoUpdate, H = $.needsUpdate, K = $.type;
    fe(), Oe.autoReset = T, $.enabled = V, $.autoUpdate = X, $.needsUpdate = H, $.type = K;
  }
  function qe(T) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", T.statusMessage);
  }
  function O(T) {
    const V = T.target;
    V.removeEventListener("dispose", O), le(V);
  }
  function le(T) {
    Y(T), Te.remove(T);
  }
  function Y(T) {
    const V = Te.get(T).programs;
    V !== void 0 && (V.forEach(function(X) {
      Ne.releaseProgram(X);
    }), T.isShaderMaterial && Ne.releaseShaderCache(T));
  }
  this.renderBufferDirect = function(T, V, X, H, K, _e) {
    V === null && (V = re);
    const Me = K.isMesh && K.matrixWorld.determinant() < 0, Ae = La(T, V, X, H, K);
    ue.setMaterial(H, Me);
    let Ee = X.index;
    const ze = X.attributes.position;
    if (Ee === null) {
      if (ze === void 0 || ze.count === 0)
        return;
    } else if (Ee.count === 0)
      return;
    let Le = 1;
    H.wireframe === !0 && (Ee = It.getWireframeAttribute(X), Le = 2), pe.setup(K, H, Ae, X, Ee);
    let Fe, Ve = oe;
    Ee !== null && (Fe = at.get(Ee), Ve = we, Ve.setIndex(Fe));
    const pn = Ee !== null ? Ee.count : ze.count, Rn = X.drawRange.start * Le, Fn = X.drawRange.count * Le, zt = _e !== null ? _e.start * Le : 0, Be = _e !== null ? _e.count * Le : 1 / 0, Dn = Math.max(Rn, zt), je = Math.min(pn, Rn + Fn, zt + Be) - 1, St = Math.max(0, je - Dn + 1);
    if (St !== 0) {
      if (K.isMesh)
        H.wireframe === !0 ? (ue.setLineWidth(H.wireframeLinewidth * ge()), Ve.setMode(1)) : Ve.setMode(4);
      else if (K.isLine) {
        let sn = H.linewidth;
        sn === void 0 && (sn = 1), ue.setLineWidth(sn * ge()), K.isLineSegments ? Ve.setMode(1) : K.isLineLoop ? Ve.setMode(2) : Ve.setMode(3);
      } else
        K.isPoints ? Ve.setMode(0) : K.isSprite && Ve.setMode(4);
      if (K.isInstancedMesh)
        Ve.renderInstances(Dn, St, K.count);
      else if (X.isInstancedBufferGeometry) {
        const sn = Math.min(X.instanceCount, X._maxInstanceCount);
        Ve.renderInstances(Dn, St, sn);
      } else
        Ve.render(Dn, St);
    }
  }, this.compile = function(T, V) {
    u = R.get(T), u.init(), g.push(u), T.traverseVisible(function(X) {
      X.isLight && X.layers.test(V.layers) && (u.pushLight(X), X.castShadow && u.pushShadow(X));
    }), u.setupLights(p.physicallyCorrectLights), T.traverse(function(X) {
      const H = X.material;
      if (H)
        if (Array.isArray(H))
          for (let K = 0; K < H.length; K++) {
            const _e = H[K];
            ps(_e, T, X);
          }
        else
          ps(H, T, X);
    }), g.pop(), u = null;
  };
  let ae = null;
  function se(T) {
    ae && ae(T);
  }
  function Re() {
    Xe.stop();
  }
  function Qe() {
    Xe.start();
  }
  const Xe = new na();
  Xe.setAnimationLoop(se), typeof self < "u" && Xe.setContext(self), this.setAnimationLoop = function(T) {
    ae = T, de.setAnimationLoop(T), T === null ? Xe.stop() : Xe.start();
  }, de.addEventListener("sessionstart", Re), de.addEventListener("sessionend", Qe), this.render = function(T, V) {
    if (V !== void 0 && V.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (f === !0)
      return;
    T.autoUpdate === !0 && T.updateMatrixWorld(), V.parent === null && V.updateMatrixWorld(), de.enabled === !0 && de.isPresenting === !0 && (de.cameraAutoUpdate === !0 && de.updateCamera(V), V = de.getCamera()), T.isScene === !0 && T.onBeforeRender(p, T, V, y), u = R.get(T, g.length), u.init(), g.push(u), J.multiplyMatrices(V.projectionMatrix, V.matrixWorldInverse), G.setFromProjectionMatrix(J), N = this.localClippingEnabled, U = E.init(this.clippingPlanes, N, V), d = Bt.get(T, m.length), d.init(), m.push(d), nn(T, V, 0, p.sortObjects), d.finish(), p.sortObjects === !0 && d.sort(W, z), U === !0 && E.beginShadows();
    const X = u.state.shadowsArray;
    if ($.render(X, T, V), U === !0 && E.endShadows(), this.info.autoReset === !0 && this.info.reset(), Q.render(d, T), u.setupLights(p.physicallyCorrectLights), V.isArrayCamera) {
      const H = V.cameras;
      for (let K = 0, _e = H.length; K < _e; K++) {
        const Me = H[K];
        We(d, T, Me, Me.viewport);
      }
    } else
      We(d, T, V);
    y !== null && (me.updateMultisampleRenderTarget(y), me.updateRenderTargetMipmap(y)), T.isScene === !0 && T.onAfterRender(p, T, V), pe.resetDefaultState(), x = -1, M = null, g.pop(), g.length > 0 ? u = g[g.length - 1] : u = null, m.pop(), m.length > 0 ? d = m[m.length - 1] : d = null;
  };
  function nn(T, V, X, H) {
    if (T.visible === !1)
      return;
    if (T.layers.test(V.layers)) {
      if (T.isGroup)
        X = T.renderOrder;
      else if (T.isLOD)
        T.autoUpdate === !0 && T.update(V);
      else if (T.isLight)
        u.pushLight(T), T.castShadow && u.pushShadow(T);
      else if (T.isSprite) {
        if (!T.frustumCulled || G.intersectsSprite(T)) {
          H && ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);
          const Me = nt.update(T), Ae = T.material;
          Ae.visible && d.push(T, Me, Ae, X, ee.z, null);
        }
      } else if ((T.isMesh || T.isLine || T.isPoints) && (T.isSkinnedMesh && T.skeleton.frame !== Oe.render.frame && (T.skeleton.update(), T.skeleton.frame = Oe.render.frame), !T.frustumCulled || G.intersectsObject(T))) {
        H && ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);
        const Me = nt.update(T), Ae = T.material;
        if (Array.isArray(Ae)) {
          const Ee = Me.groups;
          for (let ze = 0, Le = Ee.length; ze < Le; ze++) {
            const Fe = Ee[ze], Ve = Ae[Fe.materialIndex];
            Ve && Ve.visible && d.push(T, Me, Ve, X, ee.z, Fe);
          }
        } else
          Ae.visible && d.push(T, Me, Ae, X, ee.z, null);
      }
    }
    const _e = T.children;
    for (let Me = 0, Ae = _e.length; Me < Ae; Me++)
      nn(_e[Me], V, X, H);
  }
  function We(T, V, X, H) {
    const K = T.opaque, _e = T.transmissive, Me = T.transparent;
    u.setupLightsView(X), _e.length > 0 && Vt(K, V, X), H && ue.viewport(S.copy(H)), K.length > 0 && Mt(K, V, X), _e.length > 0 && Mt(_e, V, X), Me.length > 0 && Mt(Me, V, X), ue.buffers.depth.setTest(!0), ue.buffers.depth.setMask(!0), ue.buffers.color.setMask(!0), ue.setPolygonOffset(!1);
  }
  function Vt(T, V, X) {
    const H = ye.isWebGL2;
    q === null && (q = new Cn(1, 1, {
      generateMipmaps: !0,
      type: ve.has("EXT_color_buffer_half_float") ? 1016 : 1009,
      minFilter: 1008,
      samples: H && s === !0 ? 4 : 0
    })), p.getDrawingBufferSize(k), H ? q.setSize(k.x, k.y) : q.setSize(cr(k.x), cr(k.y));
    const K = p.getRenderTarget();
    p.setRenderTarget(q), p.clear();
    const _e = p.toneMapping;
    p.toneMapping = 0, Mt(T, V, X), p.toneMapping = _e, me.updateMultisampleRenderTarget(q), me.updateRenderTargetMipmap(q), p.setRenderTarget(K);
  }
  function Mt(T, V, X) {
    const H = V.isScene === !0 ? V.overrideMaterial : null;
    for (let K = 0, _e = T.length; K < _e; K++) {
      const Me = T[K], Ae = Me.object, Ee = Me.geometry, ze = H === null ? Me.material : H, Le = Me.group;
      Ae.layers.test(X.layers) && Ca(Ae, V, X, Ee, ze, Le);
    }
  }
  function Ca(T, V, X, H, K, _e) {
    T.onBeforeRender(p, V, X, H, K, _e), T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse, T.matrixWorld), T.normalMatrix.getNormalMatrix(T.modelViewMatrix), K.onBeforeRender(p, V, X, H, T, _e), K.transparent === !0 && K.side === 2 ? (K.side = 1, K.needsUpdate = !0, p.renderBufferDirect(X, V, H, K, T, _e), K.side = 0, K.needsUpdate = !0, p.renderBufferDirect(X, V, H, K, T, _e), K.side = 2) : p.renderBufferDirect(X, V, H, K, T, _e), T.onAfterRender(p, V, X, H, K, _e);
  }
  function ps(T, V, X) {
    V.isScene !== !0 && (V = re);
    const H = Te.get(T), K = u.state.lights, _e = u.state.shadowsArray, Me = K.state.version, Ae = Ne.getParameters(T, K.state, _e, V, X), Ee = Ne.getProgramCacheKey(Ae);
    let ze = H.programs;
    H.environment = T.isMeshStandardMaterial ? V.environment : null, H.fog = V.fog, H.envMap = (T.isMeshStandardMaterial ? mt : tt).get(T.envMap || H.environment), ze === void 0 && (T.addEventListener("dispose", O), ze = /* @__PURE__ */ new Map(), H.programs = ze);
    let Le = ze.get(Ee);
    if (Le !== void 0) {
      if (H.currentProgram === Le && H.lightsStateVersion === Me)
        return Sr(T, Ae), Le;
    } else
      Ae.uniforms = Ne.getUniforms(T), T.onBuild(X, Ae, p), T.onBeforeCompile(Ae, p), Le = Ne.acquireProgram(Ae, Ee), ze.set(Ee, Le), H.uniforms = Ae.uniforms;
    const Fe = H.uniforms;
    (!T.isShaderMaterial && !T.isRawShaderMaterial || T.clipping === !0) && (Fe.clippingPlanes = E.uniform), Sr(T, Ae), H.needsLights = Fa(T), H.lightsStateVersion = Me, H.needsLights && (Fe.ambientLightColor.value = K.state.ambient, Fe.lightProbe.value = K.state.probe, Fe.directionalLights.value = K.state.directional, Fe.directionalLightShadows.value = K.state.directionalShadow, Fe.spotLights.value = K.state.spot, Fe.spotLightShadows.value = K.state.spotShadow, Fe.rectAreaLights.value = K.state.rectArea, Fe.ltc_1.value = K.state.rectAreaLTC1, Fe.ltc_2.value = K.state.rectAreaLTC2, Fe.pointLights.value = K.state.point, Fe.pointLightShadows.value = K.state.pointShadow, Fe.hemisphereLights.value = K.state.hemi, Fe.directionalShadowMap.value = K.state.directionalShadowMap, Fe.directionalShadowMatrix.value = K.state.directionalShadowMatrix, Fe.spotShadowMap.value = K.state.spotShadowMap, Fe.spotShadowMatrix.value = K.state.spotShadowMatrix, Fe.pointShadowMap.value = K.state.pointShadowMap, Fe.pointShadowMatrix.value = K.state.pointShadowMatrix);
    const Ve = Le.getUniforms(), pn = as.seqWithValue(Ve.seq, Fe);
    return H.currentProgram = Le, H.uniformsList = pn, Le;
  }
  function Sr(T, V) {
    const X = Te.get(T);
    X.outputEncoding = V.outputEncoding, X.instancing = V.instancing, X.skinning = V.skinning, X.morphTargets = V.morphTargets, X.morphNormals = V.morphNormals, X.morphColors = V.morphColors, X.morphTargetsCount = V.morphTargetsCount, X.numClippingPlanes = V.numClippingPlanes, X.numIntersection = V.numClipIntersection, X.vertexAlphas = V.vertexAlphas, X.vertexTangents = V.vertexTangents, X.toneMapping = V.toneMapping;
  }
  function La(T, V, X, H, K) {
    V.isScene !== !0 && (V = re), me.resetTextureUnits();
    const _e = V.fog, Me = H.isMeshStandardMaterial ? V.environment : null, Ae = y === null ? p.outputEncoding : y.isXRRenderTarget === !0 ? y.texture.encoding : 3e3, Ee = (H.isMeshStandardMaterial ? mt : tt).get(H.envMap || Me), ze = H.vertexColors === !0 && !!X.attributes.color && X.attributes.color.itemSize === 4, Le = !!H.normalMap && !!X.attributes.tangent, Fe = !!X.morphAttributes.position, Ve = !!X.morphAttributes.normal, pn = !!X.morphAttributes.color, Rn = H.toneMapped ? p.toneMapping : 0, Fn = X.morphAttributes.position || X.morphAttributes.normal || X.morphAttributes.color, zt = Fn !== void 0 ? Fn.length : 0, Be = Te.get(H), Dn = u.state.lights;
    if (U === !0 && (N === !0 || T !== M)) {
      const gt = T === M && H.id === x;
      E.setState(H, T, gt);
    }
    let je = !1;
    H.version === Be.__version ? (Be.needsLights && Be.lightsStateVersion !== Dn.state.version || Be.outputEncoding !== Ae || K.isInstancedMesh && Be.instancing === !1 || !K.isInstancedMesh && Be.instancing === !0 || K.isSkinnedMesh && Be.skinning === !1 || !K.isSkinnedMesh && Be.skinning === !0 || Be.envMap !== Ee || H.fog === !0 && Be.fog !== _e || Be.numClippingPlanes !== void 0 && (Be.numClippingPlanes !== E.numPlanes || Be.numIntersection !== E.numIntersection) || Be.vertexAlphas !== ze || Be.vertexTangents !== Le || Be.morphTargets !== Fe || Be.morphNormals !== Ve || Be.morphColors !== pn || Be.toneMapping !== Rn || ye.isWebGL2 === !0 && Be.morphTargetsCount !== zt) && (je = !0) : (je = !0, Be.__version = H.version);
    let St = Be.currentProgram;
    je === !0 && (St = ps(H, V, K));
    let sn = !1, li = !1, ms = !1;
    const lt = St.getUniforms(), ci = Be.uniforms;
    if (ue.useProgram(St.program) && (sn = !0, li = !0, ms = !0), H.id !== x && (x = H.id, li = !0), sn || M !== T) {
      if (lt.setValue(Z, "projectionMatrix", T.projectionMatrix), ye.logarithmicDepthBuffer && lt.setValue(
        Z,
        "logDepthBufFC",
        2 / (Math.log(T.far + 1) / Math.LN2)
      ), M !== T && (M = T, li = !0, ms = !0), H.isShaderMaterial || H.isMeshPhongMaterial || H.isMeshToonMaterial || H.isMeshStandardMaterial || H.envMap) {
        const gt = lt.map.cameraPosition;
        gt !== void 0 && gt.setValue(
          Z,
          ee.setFromMatrixPosition(T.matrixWorld)
        );
      }
      (H.isMeshPhongMaterial || H.isMeshToonMaterial || H.isMeshLambertMaterial || H.isMeshBasicMaterial || H.isMeshStandardMaterial || H.isShaderMaterial) && lt.setValue(Z, "isOrthographic", T.isOrthographicCamera === !0), (H.isMeshPhongMaterial || H.isMeshToonMaterial || H.isMeshLambertMaterial || H.isMeshBasicMaterial || H.isMeshStandardMaterial || H.isShaderMaterial || H.isShadowMaterial || K.isSkinnedMesh) && lt.setValue(Z, "viewMatrix", T.matrixWorldInverse);
    }
    if (K.isSkinnedMesh) {
      lt.setOptional(Z, K, "bindMatrix"), lt.setOptional(Z, K, "bindMatrixInverse");
      const gt = K.skeleton;
      gt && (ye.floatVertexTextures ? (gt.boneTexture === null && gt.computeBoneTexture(), lt.setValue(Z, "boneTexture", gt.boneTexture, me), lt.setValue(Z, "boneTextureSize", gt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const gs = X.morphAttributes;
    if ((gs.position !== void 0 || gs.normal !== void 0 || gs.color !== void 0 && ye.isWebGL2 === !0) && te.update(K, X, H, St), (li || Be.receiveShadow !== K.receiveShadow) && (Be.receiveShadow = K.receiveShadow, lt.setValue(Z, "receiveShadow", K.receiveShadow)), li && (lt.setValue(Z, "toneMappingExposure", p.toneMappingExposure), Be.needsLights && Ra(ci, ms), _e && H.fog === !0 && Wt.refreshFogUniforms(ci, _e), Wt.refreshMaterialUniforms(ci, H, B, D, q), as.upload(Z, Be.uniformsList, ci, me)), H.isShaderMaterial && H.uniformsNeedUpdate === !0 && (as.upload(Z, Be.uniformsList, ci, me), H.uniformsNeedUpdate = !1), H.isSpriteMaterial && lt.setValue(Z, "center", K.center), lt.setValue(Z, "modelViewMatrix", K.modelViewMatrix), lt.setValue(Z, "normalMatrix", K.normalMatrix), lt.setValue(Z, "modelMatrix", K.matrixWorld), H.isShaderMaterial || H.isRawShaderMaterial) {
      const gt = H.uniformsGroups;
      for (let _s = 0, Da = gt.length; _s < Da; _s++)
        if (ye.isWebGL2) {
          const Er = gt[_s];
          he.update(Er, St), he.bind(Er, St);
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return St;
  }
  function Ra(T, V) {
    T.ambientLightColor.needsUpdate = V, T.lightProbe.needsUpdate = V, T.directionalLights.needsUpdate = V, T.directionalLightShadows.needsUpdate = V, T.pointLights.needsUpdate = V, T.pointLightShadows.needsUpdate = V, T.spotLights.needsUpdate = V, T.spotLightShadows.needsUpdate = V, T.rectAreaLights.needsUpdate = V, T.hemisphereLights.needsUpdate = V;
  }
  function Fa(T) {
    return T.isMeshLambertMaterial || T.isMeshToonMaterial || T.isMeshPhongMaterial || T.isMeshStandardMaterial || T.isShadowMaterial || T.isShaderMaterial && T.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return _;
  }, this.getActiveMipmapLevel = function() {
    return v;
  }, this.getRenderTarget = function() {
    return y;
  }, this.setRenderTargetTextures = function(T, V, X) {
    Te.get(T.texture).__webglTexture = V, Te.get(T.depthTexture).__webglTexture = X;
    const H = Te.get(T);
    H.__hasExternalTextures = !0, H.__hasExternalTextures && (H.__autoAllocateDepthBuffer = X === void 0, H.__autoAllocateDepthBuffer || ve.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), H.__useRenderToTexture = !1));
  }, this.setRenderTargetFramebuffer = function(T, V) {
    const X = Te.get(T);
    X.__webglFramebuffer = V, X.__useDefaultFramebuffer = V === void 0;
  }, this.setRenderTarget = function(T, V = 0, X = 0) {
    y = T, _ = V, v = X;
    let H = !0;
    if (T) {
      const Ee = Te.get(T);
      Ee.__useDefaultFramebuffer !== void 0 ? (ue.bindFramebuffer(36160, null), H = !1) : Ee.__webglFramebuffer === void 0 ? me.setupRenderTarget(T) : Ee.__hasExternalTextures && me.rebindTextures(T, Te.get(T.texture).__webglTexture, Te.get(T.depthTexture).__webglTexture);
    }
    let K = null, _e = !1, Me = !1;
    if (T) {
      const Ee = T.texture;
      (Ee.isData3DTexture || Ee.isDataArrayTexture) && (Me = !0);
      const ze = Te.get(T).__webglFramebuffer;
      T.isWebGLCubeRenderTarget ? (K = ze[V], _e = !0) : ye.isWebGL2 && T.samples > 0 && me.useMultisampledRTT(T) === !1 ? K = Te.get(T).__webglMultisampledFramebuffer : K = ze, S.copy(T.viewport), C.copy(T.scissor), w = T.scissorTest;
    } else
      S.copy(F).multiplyScalar(B).floor(), C.copy(I).multiplyScalar(B).floor(), w = L;
    if (ue.bindFramebuffer(36160, K) && ye.drawBuffers && H && ue.drawBuffers(T, K), ue.viewport(S), ue.scissor(C), ue.setScissorTest(w), _e) {
      const Ee = Te.get(T.texture);
      Z.framebufferTexture2D(36160, 36064, 34069 + V, Ee.__webglTexture, X);
    } else if (Me) {
      const Ee = Te.get(T.texture), ze = V || 0;
      Z.framebufferTextureLayer(36160, 36064, Ee.__webglTexture, X || 0, ze);
    }
    x = -1;
  }, this.readRenderTargetPixels = function(T, V, X, H, K, _e, Me) {
    if (!(T && T.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let Ae = Te.get(T).__webglFramebuffer;
    if (T.isWebGLCubeRenderTarget && Me !== void 0 && (Ae = Ae[Me]), Ae) {
      ue.bindFramebuffer(36160, Ae);
      try {
        const Ee = T.texture, ze = Ee.format, Le = Ee.type;
        if (ze !== 1023 && j.convert(ze) !== Z.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const Fe = Le === 1016 && (ve.has("EXT_color_buffer_half_float") || ye.isWebGL2 && ve.has("EXT_color_buffer_float"));
        if (Le !== 1009 && j.convert(Le) !== Z.getParameter(35738) && !(Le === 1015 && (ye.isWebGL2 || ve.has("OES_texture_float") || ve.has("WEBGL_color_buffer_float"))) && !Fe) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        V >= 0 && V <= T.width - H && X >= 0 && X <= T.height - K && Z.readPixels(V, X, H, K, j.convert(ze), j.convert(Le), _e);
      } finally {
        const Ee = y !== null ? Te.get(y).__webglFramebuffer : null;
        ue.bindFramebuffer(36160, Ee);
      }
    }
  }, this.copyFramebufferToTexture = function(T, V, X = 0) {
    const H = Math.pow(2, -X), K = Math.floor(V.image.width * H), _e = Math.floor(V.image.height * H);
    me.setTexture2D(V, 0), Z.copyTexSubImage2D(3553, X, 0, 0, T.x, T.y, K, _e), ue.unbindTexture();
  }, this.copyTextureToTexture = function(T, V, X, H = 0) {
    const K = V.image.width, _e = V.image.height, Me = j.convert(X.format), Ae = j.convert(X.type);
    me.setTexture2D(X, 0), Z.pixelStorei(37440, X.flipY), Z.pixelStorei(37441, X.premultiplyAlpha), Z.pixelStorei(3317, X.unpackAlignment), V.isDataTexture ? Z.texSubImage2D(3553, H, T.x, T.y, K, _e, Me, Ae, V.image.data) : V.isCompressedTexture ? Z.compressedTexSubImage2D(3553, H, T.x, T.y, V.mipmaps[0].width, V.mipmaps[0].height, Me, V.mipmaps[0].data) : Z.texSubImage2D(3553, H, T.x, T.y, Me, Ae, V.image), H === 0 && X.generateMipmaps && Z.generateMipmap(3553), ue.unbindTexture();
  }, this.copyTextureToTexture3D = function(T, V, X, H, K = 0) {
    if (p.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const _e = T.max.x - T.min.x + 1, Me = T.max.y - T.min.y + 1, Ae = T.max.z - T.min.z + 1, Ee = j.convert(H.format), ze = j.convert(H.type);
    let Le;
    if (H.isData3DTexture)
      me.setTexture3D(H, 0), Le = 32879;
    else if (H.isDataArrayTexture)
      me.setTexture2DArray(H, 0), Le = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    Z.pixelStorei(37440, H.flipY), Z.pixelStorei(37441, H.premultiplyAlpha), Z.pixelStorei(3317, H.unpackAlignment);
    const Fe = Z.getParameter(3314), Ve = Z.getParameter(32878), pn = Z.getParameter(3316), Rn = Z.getParameter(3315), Fn = Z.getParameter(32877), zt = X.isCompressedTexture ? X.mipmaps[0] : X.image;
    Z.pixelStorei(3314, zt.width), Z.pixelStorei(32878, zt.height), Z.pixelStorei(3316, T.min.x), Z.pixelStorei(3315, T.min.y), Z.pixelStorei(32877, T.min.z), X.isDataTexture || X.isData3DTexture ? Z.texSubImage3D(Le, K, V.x, V.y, V.z, _e, Me, Ae, Ee, ze, zt.data) : X.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), Z.compressedTexSubImage3D(Le, K, V.x, V.y, V.z, _e, Me, Ae, Ee, zt.data)) : Z.texSubImage3D(Le, K, V.x, V.y, V.z, _e, Me, Ae, Ee, ze, zt), Z.pixelStorei(3314, Fe), Z.pixelStorei(32878, Ve), Z.pixelStorei(3316, pn), Z.pixelStorei(3315, Rn), Z.pixelStorei(32877, Fn), K === 0 && H.generateMipmaps && Z.generateMipmap(Le), ue.unbindTexture();
  }, this.initTexture = function(T) {
    T.isCubeTexture ? me.setTextureCube(T, 0) : T.isData3DTexture ? me.setTexture3D(T, 0) : T.isDataArrayTexture ? me.setTexture2DArray(T, 0) : me.setTexture2D(T, 0), ue.unbindTexture();
  }, this.resetState = function() {
    _ = 0, v = 0, y = null, ue.reset(), pe.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class Dd extends ca {
}
Dd.prototype.isWebGL1Renderer = !0;
class ha extends it {
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
class Pd {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = fn();
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
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = fn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = fn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const ct = /* @__PURE__ */ new P();
class hs {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i === !0;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      ct.fromBufferAttribute(this, t), ct.applyMatrix4(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ct.fromBufferAttribute(this, t), ct.applyNormalMatrix(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ct.fromBufferAttribute(this, t), ct.transformDirection(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  setX(e, t) {
    return this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    return this.data.array[e * this.data.stride + this.offset];
  }
  getY(e) {
    return this.data.array[e * this.data.stride + this.offset + 1];
  }
  getZ(e) {
    return this.data.array[e * this.data.stride + this.offset + 2];
  }
  getW(e) {
    return this.data.array[e * this.data.stride + this.offset + 3];
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return new yt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new hs(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
class ua extends tn {
  constructor(e) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new xe(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let jn;
const fi = /* @__PURE__ */ new P(), Yn = /* @__PURE__ */ new P(), $n = /* @__PURE__ */ new P(), Zn = /* @__PURE__ */ new be(), pi = /* @__PURE__ */ new be(), da = /* @__PURE__ */ new He(), $i = /* @__PURE__ */ new P(), mi = /* @__PURE__ */ new P(), Zi = /* @__PURE__ */ new P(), ao = /* @__PURE__ */ new be(), Xs = /* @__PURE__ */ new be(), lo = /* @__PURE__ */ new be();
class Id extends it {
  constructor(e) {
    if (super(), this.isSprite = !0, this.type = "Sprite", jn === void 0) {
      jn = new pt();
      const t = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), n = new Pd(t, 5);
      jn.setIndex([0, 1, 2, 0, 2, 3]), jn.setAttribute("position", new hs(n, 3, 0, !1)), jn.setAttribute("uv", new hs(n, 2, 3, !1));
    }
    this.geometry = jn, this.material = e !== void 0 ? e : new ua(), this.center = new be(0.5, 0.5);
  }
  raycast(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Yn.setFromMatrixScale(this.matrixWorld), da.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), $n.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Yn.multiplyScalar(-$n.z);
    const n = this.material.rotation;
    let i, s;
    n !== 0 && (s = Math.cos(n), i = Math.sin(n));
    const o = this.center;
    Ki($i.set(-0.5, -0.5, 0), $n, o, Yn, i, s), Ki(mi.set(0.5, -0.5, 0), $n, o, Yn, i, s), Ki(Zi.set(0.5, 0.5, 0), $n, o, Yn, i, s), ao.set(0, 0), Xs.set(1, 0), lo.set(1, 1);
    let r = e.ray.intersectTriangle($i, mi, Zi, !1, fi);
    if (r === null && (Ki(mi.set(-0.5, 0.5, 0), $n, o, Yn, i, s), Xs.set(0, 1), r = e.ray.intersectTriangle($i, Zi, mi, !1, fi), r === null))
      return;
    const l = e.ray.origin.distanceTo(fi);
    l < e.near || l > e.far || t.push({
      distance: l,
      point: fi.clone(),
      uv: kt.getUV(fi, $i, mi, Zi, ao, Xs, lo, new be()),
      face: null,
      object: this
    });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function Ki(c, e, t, n, i, s) {
  Zn.subVectors(c, t).addScalar(0.5).multiply(n), i !== void 0 ? (pi.x = s * Zn.x - i * Zn.y, pi.y = i * Zn.x + s * Zn.y) : pi.copy(Zn), c.copy(e), c.x += pi.x, c.y += pi.y, c.applyMatrix4(da);
}
class dr extends tn {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new xe(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const co = /* @__PURE__ */ new He(), fr = /* @__PURE__ */ new Zo(), Ji = /* @__PURE__ */ new ni(), Qi = /* @__PURE__ */ new P();
class ho extends it {
  constructor(e = new pt(), t = new dr()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ji.copy(n.boundingSphere), Ji.applyMatrix4(i), Ji.radius += s, e.ray.intersectsSphere(Ji) === !1)
      return;
    co.copy(i).invert(), fr.copy(e.ray).applyMatrix4(co);
    const r = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = r * r, a = n.index, d = n.attributes.position;
    if (a !== null) {
      const u = Math.max(0, o.start), m = Math.min(a.count, o.start + o.count);
      for (let g = u, p = m; g < p; g++) {
        const f = a.getX(g);
        Qi.fromBufferAttribute(d, f), uo(Qi, f, l, i, e, t, this);
      }
    } else {
      const u = Math.max(0, o.start), m = Math.min(d.count, o.start + o.count);
      for (let g = u, p = m; g < p; g++)
        Qi.fromBufferAttribute(d, g), uo(Qi, g, l, i, e, t, this);
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
function uo(c, e, t, n, i, s, o) {
  const r = fr.distanceSqToPoint(c);
  if (r < t) {
    const l = new P();
    fr.closestPointToPoint(c, l), l.applyMatrix4(n);
    const a = i.ray.origin.distanceTo(l);
    if (a < i.near || a > i.far)
      return;
    s.push({
      distance: a,
      distanceToRay: Math.sqrt(r),
      point: l,
      index: e,
      face: null,
      object: o
    });
  }
}
class Mi extends wt {
  constructor(e, t, n, i, s, o, r, l, a) {
    super(e, t, n, i, s, o, r, l, a), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class vr extends pt {
  constructor(e = 1, t = 1, n = 1, i = 8, s = 1, o = !1, r = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: i,
      heightSegments: s,
      openEnded: o,
      thetaStart: r,
      thetaLength: l
    };
    const a = this;
    i = Math.floor(i), s = Math.floor(s);
    const h = [], d = [], u = [], m = [];
    let g = 0;
    const p = [], f = n / 2;
    let _ = 0;
    v(), o === !1 && (e > 0 && y(!0), t > 0 && y(!1)), this.setIndex(h), this.setAttribute("position", new ot(d, 3)), this.setAttribute("normal", new ot(u, 3)), this.setAttribute("uv", new ot(m, 2));
    function v() {
      const x = new P(), M = new P();
      let S = 0;
      const C = (t - e) / n;
      for (let w = 0; w <= s; w++) {
        const A = [], D = w / s, B = D * (t - e) + e;
        for (let W = 0; W <= i; W++) {
          const z = W / i, F = z * l + r, I = Math.sin(F), L = Math.cos(F);
          M.x = B * I, M.y = -D * n + f, M.z = B * L, d.push(M.x, M.y, M.z), x.set(I, C, L).normalize(), u.push(x.x, x.y, x.z), m.push(z, 1 - D), A.push(g++);
        }
        p.push(A);
      }
      for (let w = 0; w < i; w++)
        for (let A = 0; A < s; A++) {
          const D = p[A][w], B = p[A + 1][w], W = p[A + 1][w + 1], z = p[A][w + 1];
          h.push(D, B, z), h.push(B, W, z), S += 6;
        }
      a.addGroup(_, S, 0), _ += S;
    }
    function y(x) {
      const M = g, S = new be(), C = new P();
      let w = 0;
      const A = x === !0 ? e : t, D = x === !0 ? 1 : -1;
      for (let W = 1; W <= i; W++)
        d.push(0, f * D, 0), u.push(0, D, 0), m.push(0.5, 0.5), g++;
      const B = g;
      for (let W = 0; W <= i; W++) {
        const F = W / i * l + r, I = Math.cos(F), L = Math.sin(F);
        C.x = A * L, C.y = f * D, C.z = A * I, d.push(C.x, C.y, C.z), u.push(0, D, 0), S.x = I * 0.5 + 0.5, S.y = L * 0.5 * D + 0.5, m.push(S.x, S.y), g++;
      }
      for (let W = 0; W < i; W++) {
        const z = M + W, F = B + W;
        x === !0 ? h.push(F, F + 1, z) : h.push(F + 1, F, z), w += 3;
      }
      a.addGroup(_, w, x === !0 ? 1 : 2), _ += w;
    }
  }
  static fromJSON(e) {
    return new vr(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Bd extends tn {
  constructor(e) {
    super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new xe(0), this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
  }
}
class pr extends tn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new xe(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new xe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class zd extends tn {
  constructor(e) {
    super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new xe(16777215), this.specular = new xe(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new xe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class xr extends it {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new xe(e), this.intensity = t;
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
class Nd extends xr {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(it.DefaultUp), this.updateMatrix(), this.groundColor = new xe(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const fo = /* @__PURE__ */ new He(), po = /* @__PURE__ */ new P(), mo = /* @__PURE__ */ new P();
class fa {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new be(512, 512), this.map = null, this.mapPass = null, this.matrix = new He(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new gr(), this._frameExtents = new be(1, 1), this._viewportCount = 1, this._viewports = [
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
    po.setFromMatrixPosition(e.matrixWorld), t.position.copy(po), mo.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(mo), t.updateMatrixWorld(), fo.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(fo), n.set(
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
class Od extends fa {
  constructor() {
    super(new ft(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = lr * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class Ud extends xr {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, o = 1) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(it.DefaultUp), this.updateMatrix(), this.target = new it(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = o, this.shadow = new Od();
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
const go = /* @__PURE__ */ new He(), gi = /* @__PURE__ */ new P(), js = /* @__PURE__ */ new P();
class Gd extends fa {
  constructor() {
    super(new ft(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new be(4, 2), this._viewportCount = 6, this._viewports = [
      new Ge(2, 1, 1, 1),
      new Ge(0, 1, 1, 1),
      new Ge(3, 1, 1, 1),
      new Ge(1, 1, 1, 1),
      new Ge(3, 0, 1, 1),
      new Ge(1, 0, 1, 1)
    ], this._cubeDirections = [
      new P(1, 0, 0),
      new P(-1, 0, 0),
      new P(0, 0, 1),
      new P(0, 0, -1),
      new P(0, 1, 0),
      new P(0, -1, 0)
    ], this._cubeUps = [
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 1, 0),
      new P(0, 0, 1),
      new P(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), gi.setFromMatrixPosition(e.matrixWorld), n.position.copy(gi), js.copy(n.position), js.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(js), n.updateMatrixWorld(), i.makeTranslation(-gi.x, -gi.y, -gi.z), go.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(go);
  }
}
class pa extends xr {
  constructor(e, t, n = 0, i = 1) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Gd();
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
  revision: mr
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = mr);
class Pt {
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
    e === void 0 && (e = new b());
    const t = this.elements;
    return e.x = t[0], e.y = t[4], e.z = t[8], e;
  }
  vmult(e, t) {
    t === void 0 && (t = new b());
    const n = this.elements, i = e.x, s = e.y, o = e.z;
    return t.x = n[0] * i + n[1] * s + n[2] * o, t.y = n[3] * i + n[4] * s + n[5] * o, t.z = n[6] * i + n[7] * s + n[8] * o, t;
  }
  smult(e) {
    for (let t = 0; t < this.elements.length; t++)
      this.elements[t] *= e;
  }
  mmult(e, t) {
    t === void 0 && (t = new Pt());
    const n = this.elements, i = e.elements, s = t.elements, o = n[0], r = n[1], l = n[2], a = n[3], h = n[4], d = n[5], u = n[6], m = n[7], g = n[8], p = i[0], f = i[1], _ = i[2], v = i[3], y = i[4], x = i[5], M = i[6], S = i[7], C = i[8];
    return s[0] = o * p + r * v + l * M, s[1] = o * f + r * y + l * S, s[2] = o * _ + r * x + l * C, s[3] = a * p + h * v + d * M, s[4] = a * f + h * y + d * S, s[5] = a * _ + h * x + d * C, s[6] = u * p + m * v + g * M, s[7] = u * f + m * y + g * S, s[8] = u * _ + m * x + g * C, t;
  }
  scale(e, t) {
    t === void 0 && (t = new Pt());
    const n = this.elements, i = t.elements;
    for (let s = 0; s !== 3; s++)
      i[3 * s + 0] = e.x * n[3 * s + 0], i[3 * s + 1] = e.y * n[3 * s + 1], i[3 * s + 2] = e.z * n[3 * s + 2];
    return t;
  }
  solve(e, t) {
    t === void 0 && (t = new b());
    const n = 3, i = 4, s = [];
    let o, r;
    for (o = 0; o < n * i; o++)
      s.push(0);
    for (o = 0; o < 3; o++)
      for (r = 0; r < 3; r++)
        s[o + i * r] = this.elements[o + 3 * r];
    s[3 + 4 * 0] = e.x, s[3 + 4 * 1] = e.y, s[3 + 4 * 2] = e.z;
    let l = 3;
    const a = l;
    let h;
    const d = 4;
    let u;
    do {
      if (o = a - l, s[o + i * o] === 0) {
        for (r = o + 1; r < a; r++)
          if (s[o + i * r] !== 0) {
            h = d;
            do
              u = d - h, s[u + i * o] += s[u + i * r];
            while (--h);
            break;
          }
      }
      if (s[o + i * o] !== 0)
        for (r = o + 1; r < a; r++) {
          const m = s[o + i * r] / s[o + i * o];
          h = d;
          do
            u = d - h, s[u + i * r] = u <= o ? 0 : s[u + i * r] - s[u + i * o] * m;
          while (--h);
        }
    } while (--l);
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
    e === void 0 && (e = new Pt());
    const t = 3, n = 6, i = kd;
    let s, o;
    for (s = 0; s < 3; s++)
      for (o = 0; o < 3; o++)
        i[s + n * o] = this.elements[s + 3 * o];
    i[3 + 6 * 0] = 1, i[3 + 6 * 1] = 0, i[3 + 6 * 2] = 0, i[4 + 6 * 0] = 0, i[4 + 6 * 1] = 1, i[4 + 6 * 2] = 0, i[5 + 6 * 0] = 0, i[5 + 6 * 1] = 0, i[5 + 6 * 2] = 1;
    let r = 3;
    const l = r;
    let a;
    const h = n;
    let d;
    do {
      if (s = l - r, i[s + n * s] === 0) {
        for (o = s + 1; o < l; o++)
          if (i[s + n * o] !== 0) {
            a = h;
            do
              d = h - a, i[d + n * s] += i[d + n * o];
            while (--a);
            break;
          }
      }
      if (i[s + n * s] !== 0)
        for (o = s + 1; o < l; o++) {
          const u = i[s + n * o] / i[s + n * s];
          a = h;
          do
            d = h - a, i[d + n * o] = d <= s ? 0 : i[d + n * o] - i[d + n * s] * u;
          while (--a);
        }
    } while (--r);
    s = 2;
    do {
      o = s - 1;
      do {
        const u = i[s + n * o] / i[s + n * s];
        a = n;
        do
          d = n - a, i[d + n * o] = i[d + n * o] - i[d + n * s] * u;
        while (--a);
      } while (o--);
    } while (--s);
    s = 2;
    do {
      const u = 1 / i[s + n * s];
      a = n;
      do
        d = n - a, i[d + n * s] = i[d + n * s] * u;
      while (--a);
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
    const t = e.x, n = e.y, i = e.z, s = e.w, o = t + t, r = n + n, l = i + i, a = t * o, h = t * r, d = t * l, u = n * r, m = n * l, g = i * l, p = s * o, f = s * r, _ = s * l, v = this.elements;
    return v[3 * 0 + 0] = 1 - (u + g), v[3 * 0 + 1] = h - _, v[3 * 0 + 2] = d + f, v[3 * 1 + 0] = h + _, v[3 * 1 + 1] = 1 - (a + g), v[3 * 1 + 2] = m - p, v[3 * 2 + 0] = d - f, v[3 * 2 + 1] = m + p, v[3 * 2 + 2] = 1 - (a + u), this;
  }
  transpose(e) {
    e === void 0 && (e = new Pt());
    const t = this.elements, n = e.elements;
    let i;
    return n[0] = t[0], n[4] = t[4], n[8] = t[8], i = t[1], n[1] = t[3], n[3] = i, i = t[2], n[2] = t[6], n[6] = i, i = t[5], n[5] = t[7], n[7] = i, e;
  }
}
const kd = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
class b {
  constructor(e, t, n) {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0), this.x = e, this.y = t, this.z = n;
  }
  cross(e, t) {
    t === void 0 && (t = new b());
    const n = e.x, i = e.y, s = e.z, o = this.x, r = this.y, l = this.z;
    return t.x = r * s - l * i, t.y = l * n - o * s, t.z = o * i - r * n, t;
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
      return new b(this.x + e.x, this.y + e.y, this.z + e.z);
  }
  vsub(e, t) {
    if (t)
      t.x = this.x - e.x, t.y = this.y - e.y, t.z = this.z - e.z;
    else
      return new b(this.x - e.x, this.y - e.y, this.z - e.z);
  }
  crossmat() {
    return new Pt([0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0]);
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
    e === void 0 && (e = new b());
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
    t === void 0 && (t = new b());
    const n = this.x, i = this.y, s = this.z;
    return t.x = e * n, t.y = e * i, t.z = e * s, t;
  }
  vmul(e, t) {
    return t === void 0 && (t = new b()), t.x = e.x * this.x, t.y = e.y * this.y, t.z = e.z * this.z, t;
  }
  addScaledVector(e, t, n) {
    return n === void 0 && (n = new b()), n.x = this.x + e * t.x, n.y = this.y + e * t.y, n.z = this.z + e * t.z, n;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  isZero() {
    return this.x === 0 && this.y === 0 && this.z === 0;
  }
  negate(e) {
    return e === void 0 && (e = new b()), e.x = -this.x, e.y = -this.y, e.z = -this.z, e;
  }
  tangents(e, t) {
    const n = this.length();
    if (n > 0) {
      const i = Wd, s = 1 / n;
      i.set(this.x * s, this.y * s, this.z * s);
      const o = Vd;
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
    return this.negate(_o), _o.almostEquals(e, t);
  }
  clone() {
    return new b(this.x, this.y, this.z);
  }
}
b.ZERO = new b(0, 0, 0);
b.UNIT_X = new b(1, 0, 0);
b.UNIT_Y = new b(0, 1, 0);
b.UNIT_Z = new b(0, 0, 1);
const Wd = new b(), Vd = new b(), _o = new b();
class bt {
  constructor(e) {
    e === void 0 && (e = {}), this.lowerBound = new b(), this.upperBound = new b(), e.lowerBound && this.lowerBound.copy(e.lowerBound), e.upperBound && this.upperBound.copy(e.upperBound);
  }
  setFromPoints(e, t, n, i) {
    const s = this.lowerBound, o = this.upperBound, r = n;
    s.copy(e[0]), r && r.vmult(s, s), o.copy(s);
    for (let l = 1; l < e.length; l++) {
      let a = e[l];
      r && (r.vmult(a, vo), a = vo), a.x > o.x && (o.x = a.x), a.x < s.x && (s.x = a.x), a.y > o.y && (o.y = a.y), a.y < s.y && (s.y = a.y), a.z > o.z && (o.z = a.z), a.z < s.z && (s.z = a.z);
    }
    return t && (t.vadd(s, s), t.vadd(o, o)), i && (s.x -= i, s.y -= i, s.z -= i, o.x += i, o.y += i, o.z += i), this;
  }
  copy(e) {
    return this.lowerBound.copy(e.lowerBound), this.upperBound.copy(e.upperBound), this;
  }
  clone() {
    return new bt().copy(this);
  }
  extend(e) {
    this.lowerBound.x = Math.min(this.lowerBound.x, e.lowerBound.x), this.upperBound.x = Math.max(this.upperBound.x, e.upperBound.x), this.lowerBound.y = Math.min(this.lowerBound.y, e.lowerBound.y), this.upperBound.y = Math.max(this.upperBound.y, e.upperBound.y), this.lowerBound.z = Math.min(this.lowerBound.z, e.lowerBound.z), this.upperBound.z = Math.max(this.upperBound.z, e.upperBound.z);
  }
  overlaps(e) {
    const t = this.lowerBound, n = this.upperBound, i = e.lowerBound, s = e.upperBound, o = i.x <= n.x && n.x <= s.x || t.x <= s.x && s.x <= n.x, r = i.y <= n.y && n.y <= s.y || t.y <= s.y && s.y <= n.y, l = i.z <= n.z && n.z <= s.z || t.z <= s.z && s.z <= n.z;
    return o && r && l;
  }
  volume() {
    const e = this.lowerBound, t = this.upperBound;
    return (t.x - e.x) * (t.y - e.y) * (t.z - e.z);
  }
  contains(e) {
    const t = this.lowerBound, n = this.upperBound, i = e.lowerBound, s = e.upperBound;
    return t.x <= i.x && n.x >= s.x && t.y <= i.y && n.y >= s.y && t.z <= i.z && n.z >= s.z;
  }
  getCorners(e, t, n, i, s, o, r, l) {
    const a = this.lowerBound, h = this.upperBound;
    e.copy(a), t.set(h.x, a.y, a.z), n.set(h.x, h.y, a.z), i.set(a.x, h.y, h.z), s.set(h.x, a.y, h.z), o.set(a.x, h.y, a.z), r.set(a.x, a.y, h.z), l.copy(h);
  }
  toLocalFrame(e, t) {
    const n = xo, i = n[0], s = n[1], o = n[2], r = n[3], l = n[4], a = n[5], h = n[6], d = n[7];
    this.getCorners(i, s, o, r, l, a, h, d);
    for (let u = 0; u !== 8; u++) {
      const m = n[u];
      e.pointToLocal(m, m);
    }
    return t.setFromPoints(n);
  }
  toWorldFrame(e, t) {
    const n = xo, i = n[0], s = n[1], o = n[2], r = n[3], l = n[4], a = n[5], h = n[6], d = n[7];
    this.getCorners(i, s, o, r, l, a, h, d);
    for (let u = 0; u !== 8; u++) {
      const m = n[u];
      e.pointToWorld(m, m);
    }
    return t.setFromPoints(n);
  }
  overlapsRay(e) {
    const {
      direction: t,
      from: n
    } = e, i = 1 / t.x, s = 1 / t.y, o = 1 / t.z, r = (this.lowerBound.x - n.x) * i, l = (this.upperBound.x - n.x) * i, a = (this.lowerBound.y - n.y) * s, h = (this.upperBound.y - n.y) * s, d = (this.lowerBound.z - n.z) * o, u = (this.upperBound.z - n.z) * o, m = Math.max(Math.max(Math.min(r, l), Math.min(a, h)), Math.min(d, u)), g = Math.min(Math.min(Math.max(r, l), Math.max(a, h)), Math.max(d, u));
    return !(g < 0 || m > g);
  }
}
const vo = new b(), xo = [new b(), new b(), new b(), new b(), new b(), new b(), new b(), new b()];
class yo {
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
class ma {
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
    e === void 0 && (e = new b()), this.normalize();
    const t = 2 * Math.acos(this.w), n = Math.sqrt(1 - this.w * this.w);
    return n < 1e-3 ? (e.x = this.x, e.y = this.y, e.z = this.z) : (e.x = this.x / n, e.y = this.y / n, e.z = this.z / n), [e, t];
  }
  setFromVectors(e, t) {
    if (e.isAntiparallelTo(t)) {
      const n = Hd, i = qd;
      e.tangents(n, i), this.setFromAxisAngle(n, Math.PI);
    } else {
      const n = e.cross(t);
      this.x = n.x, this.y = n.y, this.z = n.z, this.w = Math.sqrt(e.length() ** 2 * t.length() ** 2) + e.dot(t), this.normalize();
    }
    return this;
  }
  mult(e, t) {
    t === void 0 && (t = new Ze());
    const n = this.x, i = this.y, s = this.z, o = this.w, r = e.x, l = e.y, a = e.z, h = e.w;
    return t.x = n * h + o * r + i * a - s * l, t.y = i * h + o * l + s * r - n * a, t.z = s * h + o * a + n * l - i * r, t.w = o * h - n * r - i * l - s * a, t;
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
    t === void 0 && (t = new b());
    const n = e.x, i = e.y, s = e.z, o = this.x, r = this.y, l = this.z, a = this.w, h = a * n + r * s - l * i, d = a * i + l * n - o * s, u = a * s + o * i - r * n, m = -o * n - r * i - l * s;
    return t.x = h * a + m * -o + d * -l - u * -r, t.y = d * a + m * -r + u * -o - h * -l, t.z = u * a + m * -l + h * -r - d * -o, t;
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w, this;
  }
  toEuler(e, t) {
    t === void 0 && (t = "YZX");
    let n, i, s;
    const o = this.x, r = this.y, l = this.z, a = this.w;
    switch (t) {
      case "YZX":
        const h = o * r + l * a;
        if (h > 0.499 && (n = 2 * Math.atan2(o, a), i = Math.PI / 2, s = 0), h < -0.499 && (n = -2 * Math.atan2(o, a), i = -Math.PI / 2, s = 0), n === void 0) {
          const d = o * o, u = r * r, m = l * l;
          n = Math.atan2(2 * r * a - 2 * o * l, 1 - 2 * u - 2 * m), i = Math.asin(2 * h), s = Math.atan2(2 * o * a - 2 * r * l, 1 - 2 * d - 2 * m);
        }
        break;
      default:
        throw new Error(`Euler order ${t} not supported yet.`);
    }
    e.y = n, e.z = i, e.x = s;
  }
  setFromEuler(e, t, n, i) {
    i === void 0 && (i = "XYZ");
    const s = Math.cos(e / 2), o = Math.cos(t / 2), r = Math.cos(n / 2), l = Math.sin(e / 2), a = Math.sin(t / 2), h = Math.sin(n / 2);
    return i === "XYZ" ? (this.x = l * o * r + s * a * h, this.y = s * a * r - l * o * h, this.z = s * o * h + l * a * r, this.w = s * o * r - l * a * h) : i === "YXZ" ? (this.x = l * o * r + s * a * h, this.y = s * a * r - l * o * h, this.z = s * o * h - l * a * r, this.w = s * o * r + l * a * h) : i === "ZXY" ? (this.x = l * o * r - s * a * h, this.y = s * a * r + l * o * h, this.z = s * o * h + l * a * r, this.w = s * o * r - l * a * h) : i === "ZYX" ? (this.x = l * o * r - s * a * h, this.y = s * a * r + l * o * h, this.z = s * o * h - l * a * r, this.w = s * o * r + l * a * h) : i === "YZX" ? (this.x = l * o * r + s * a * h, this.y = s * a * r + l * o * h, this.z = s * o * h - l * a * r, this.w = s * o * r - l * a * h) : i === "XZY" && (this.x = l * o * r - s * a * h, this.y = s * a * r - l * o * h, this.z = s * o * h + l * a * r, this.w = s * o * r + l * a * h), this;
  }
  clone() {
    return new Ze(this.x, this.y, this.z, this.w);
  }
  slerp(e, t, n) {
    n === void 0 && (n = new Ze());
    const i = this.x, s = this.y, o = this.z, r = this.w;
    let l = e.x, a = e.y, h = e.z, d = e.w, u, m, g, p, f;
    return m = i * l + s * a + o * h + r * d, m < 0 && (m = -m, l = -l, a = -a, h = -h, d = -d), 1 - m > 1e-6 ? (u = Math.acos(m), g = Math.sin(u), p = Math.sin((1 - t) * u) / g, f = Math.sin(t * u) / g) : (p = 1 - t, f = t), n.x = p * i + f * l, n.y = p * s + f * a, n.z = p * o + f * h, n.w = p * r + f * d, n;
  }
  integrate(e, t, n, i) {
    i === void 0 && (i = new Ze());
    const s = e.x * n.x, o = e.y * n.y, r = e.z * n.z, l = this.x, a = this.y, h = this.z, d = this.w, u = t * 0.5;
    return i.x += u * (s * d + o * h - r * a), i.y += u * (o * d + r * l - s * h), i.z += u * (r * d + s * a - o * l), i.w += u * (-s * l - o * a - r * h), i;
  }
}
const Hd = new b(), qd = new b(), Xd = {
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
class ce {
  constructor(e) {
    e === void 0 && (e = {}), this.id = ce.idCounter++, this.type = e.type || 0, this.boundingSphereRadius = 0, this.collisionResponse = e.collisionResponse ? e.collisionResponse : !0, this.collisionFilterGroup = e.collisionFilterGroup !== void 0 ? e.collisionFilterGroup : 1, this.collisionFilterMask = e.collisionFilterMask !== void 0 ? e.collisionFilterMask : -1, this.material = e.material ? e.material : null, this.body = null;
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
ce.idCounter = 0;
ce.types = Xd;
class Pe {
  constructor(e) {
    e === void 0 && (e = {}), this.position = new b(), this.quaternion = new Ze(), e.position && this.position.copy(e.position), e.quaternion && this.quaternion.copy(e.quaternion);
  }
  pointToLocal(e, t) {
    return Pe.pointToLocalFrame(this.position, this.quaternion, e, t);
  }
  pointToWorld(e, t) {
    return Pe.pointToWorldFrame(this.position, this.quaternion, e, t);
  }
  vectorToWorldFrame(e, t) {
    return t === void 0 && (t = new b()), this.quaternion.vmult(e, t), t;
  }
  static pointToLocalFrame(e, t, n, i) {
    return i === void 0 && (i = new b()), n.vsub(e, i), t.conjugate(wo), wo.vmult(i, i), i;
  }
  static pointToWorldFrame(e, t, n, i) {
    return i === void 0 && (i = new b()), t.vmult(n, i), i.vadd(e, i), i;
  }
  static vectorToWorldFrame(e, t, n) {
    return n === void 0 && (n = new b()), e.vmult(t, n), n;
  }
  static vectorToLocalFrame(e, t, n, i) {
    return i === void 0 && (i = new b()), t.w *= -1, t.vmult(n, i), t.w *= -1, i;
  }
}
const wo = new Ze();
class En extends ce {
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
      type: ce.types.CONVEXPOLYHEDRON
    }), this.vertices = t, this.faces = n, this.faceNormals = i, this.faceNormals.length === 0 && this.computeNormals(), o ? this.boundingSphereRadius = o : this.updateBoundingSphereRadius(), this.worldVertices = [], this.worldVerticesNeedsUpdate = !0, this.worldFaceNormals = [], this.worldFaceNormalsNeedsUpdate = !0, this.uniqueAxes = s ? s.slice() : null, this.uniqueEdges = [], this.computeEdges();
  }
  computeEdges() {
    const e = this.faces, t = this.vertices, n = this.uniqueEdges;
    n.length = 0;
    const i = new b();
    for (let s = 0; s !== e.length; s++) {
      const o = e[s], r = o.length;
      for (let l = 0; l !== r; l++) {
        const a = (l + 1) % r;
        t[o[l]].vsub(t[o[a]], i), i.normalize();
        let h = !1;
        for (let d = 0; d !== n.length; d++)
          if (n[d].almostEquals(i) || n[d].almostEquals(i)) {
            h = !0;
            break;
          }
        h || n.push(i.clone());
      }
    }
  }
  computeNormals() {
    this.faceNormals.length = this.faces.length;
    for (let e = 0; e < this.faces.length; e++) {
      for (let i = 0; i < this.faces[e].length; i++)
        if (!this.vertices[this.faces[e][i]])
          throw new Error(`Vertex ${this.faces[e][i]} not found!`);
      const t = this.faceNormals[e] || new b();
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
    En.computeNormal(i, s, o, t);
  }
  static computeNormal(e, t, n, i) {
    const s = new b(), o = new b();
    t.vsub(e, o), n.vsub(t, s), s.cross(o, i), i.isZero() || i.normalize();
  }
  clipAgainstHull(e, t, n, i, s, o, r, l, a) {
    const h = new b();
    let d = -1, u = -Number.MAX_VALUE;
    for (let g = 0; g < n.faces.length; g++) {
      h.copy(n.faceNormals[g]), s.vmult(h, h);
      const p = h.dot(o);
      p > u && (u = p, d = g);
    }
    const m = [];
    for (let g = 0; g < n.faces[d].length; g++) {
      const p = n.vertices[n.faces[d][g]], f = new b();
      f.copy(p), s.vmult(f, f), i.vadd(f, f), m.push(f);
    }
    d >= 0 && this.clipFaceAgainstHull(o, e, t, m, r, l, a);
  }
  findSeparatingAxis(e, t, n, i, s, o, r, l) {
    const a = new b(), h = new b(), d = new b(), u = new b(), m = new b(), g = new b();
    let p = Number.MAX_VALUE;
    const f = this;
    if (f.uniqueAxes)
      for (let _ = 0; _ !== f.uniqueAxes.length; _++) {
        n.vmult(f.uniqueAxes[_], a);
        const v = f.testSepAxis(a, e, t, n, i, s);
        if (v === !1)
          return !1;
        v < p && (p = v, o.copy(a));
      }
    else {
      const _ = r ? r.length : f.faces.length;
      for (let v = 0; v < _; v++) {
        const y = r ? r[v] : v;
        a.copy(f.faceNormals[y]), n.vmult(a, a);
        const x = f.testSepAxis(a, e, t, n, i, s);
        if (x === !1)
          return !1;
        x < p && (p = x, o.copy(a));
      }
    }
    if (e.uniqueAxes)
      for (let _ = 0; _ !== e.uniqueAxes.length; _++) {
        s.vmult(e.uniqueAxes[_], h);
        const v = f.testSepAxis(h, e, t, n, i, s);
        if (v === !1)
          return !1;
        v < p && (p = v, o.copy(h));
      }
    else {
      const _ = l ? l.length : e.faces.length;
      for (let v = 0; v < _; v++) {
        const y = l ? l[v] : v;
        h.copy(e.faceNormals[y]), s.vmult(h, h);
        const x = f.testSepAxis(h, e, t, n, i, s);
        if (x === !1)
          return !1;
        x < p && (p = x, o.copy(h));
      }
    }
    for (let _ = 0; _ !== f.uniqueEdges.length; _++) {
      n.vmult(f.uniqueEdges[_], u);
      for (let v = 0; v !== e.uniqueEdges.length; v++)
        if (s.vmult(e.uniqueEdges[v], m), u.cross(m, g), !g.almostZero()) {
          g.normalize();
          const y = f.testSepAxis(g, e, t, n, i, s);
          if (y === !1)
            return !1;
          y < p && (p = y, o.copy(g));
        }
    }
    return i.vsub(t, d), d.dot(o) > 0 && o.negate(o), !0;
  }
  testSepAxis(e, t, n, i, s, o) {
    const r = this;
    En.project(r, e, n, i, Ys), En.project(t, e, s, o, $s);
    const l = Ys[0], a = Ys[1], h = $s[0], d = $s[1];
    if (l < d || h < a)
      return !1;
    const u = l - d, m = h - a;
    return u < m ? u : m;
  }
  calculateLocalInertia(e, t) {
    const n = new b(), i = new b();
    this.computeLocalAABB(i, n);
    const s = n.x - i.x, o = n.y - i.y, r = n.z - i.z;
    t.x = 1 / 12 * e * (2 * o * 2 * o + 2 * r * 2 * r), t.y = 1 / 12 * e * (2 * s * 2 * s + 2 * r * 2 * r), t.z = 1 / 12 * e * (2 * o * 2 * o + 2 * s * 2 * s);
  }
  getPlaneConstantOfFace(e) {
    const t = this.faces[e], n = this.faceNormals[e], i = this.vertices[t[0]];
    return -n.dot(i);
  }
  clipFaceAgainstHull(e, t, n, i, s, o, r) {
    const l = new b(), a = new b(), h = new b(), d = new b(), u = new b(), m = new b(), g = new b(), p = new b(), f = this, _ = [], v = i, y = _;
    let x = -1, M = Number.MAX_VALUE;
    for (let D = 0; D < f.faces.length; D++) {
      l.copy(f.faceNormals[D]), n.vmult(l, l);
      const B = l.dot(e);
      B < M && (M = B, x = D);
    }
    if (x < 0)
      return;
    const S = f.faces[x];
    S.connectedFaces = [];
    for (let D = 0; D < f.faces.length; D++)
      for (let B = 0; B < f.faces[D].length; B++)
        S.indexOf(f.faces[D][B]) !== -1 && D !== x && S.connectedFaces.indexOf(D) === -1 && S.connectedFaces.push(D);
    const C = S.length;
    for (let D = 0; D < C; D++) {
      const B = f.vertices[S[D]], W = f.vertices[S[(D + 1) % C]];
      B.vsub(W, a), h.copy(a), n.vmult(h, h), t.vadd(h, h), d.copy(this.faceNormals[x]), n.vmult(d, d), t.vadd(d, d), h.cross(d, u), u.negate(u), m.copy(B), n.vmult(m, m), t.vadd(m, m);
      const z = S.connectedFaces[D];
      g.copy(this.faceNormals[z]);
      const F = this.getPlaneConstantOfFace(z);
      p.copy(g), n.vmult(p, p);
      const I = F - p.dot(t);
      for (this.clipFaceAgainstPlane(v, y, p, I); v.length; )
        v.shift();
      for (; y.length; )
        v.push(y.shift());
    }
    g.copy(this.faceNormals[x]);
    const w = this.getPlaneConstantOfFace(x);
    p.copy(g), n.vmult(p, p);
    const A = w - p.dot(t);
    for (let D = 0; D < v.length; D++) {
      let B = p.dot(v[D]) + A;
      if (B <= s && (console.log(`clamped: depth=${B} to minDist=${s}`), B = s), B <= o) {
        const W = v[D];
        if (B <= 1e-6) {
          const z = {
            point: W,
            normal: p,
            depth: B
          };
          r.push(z);
        }
      }
    }
  }
  clipFaceAgainstPlane(e, t, n, i) {
    let s, o;
    const r = e.length;
    if (r < 2)
      return t;
    let l = e[e.length - 1], a = e[0];
    s = n.dot(l) + i;
    for (let h = 0; h < r; h++) {
      if (a = e[h], o = n.dot(a) + i, s < 0)
        if (o < 0) {
          const d = new b();
          d.copy(a), t.push(d);
        } else {
          const d = new b();
          l.lerp(a, s / (s - o), d), t.push(d);
        }
      else if (o < 0) {
        const d = new b();
        l.lerp(a, s / (s - o), d), t.push(d), t.push(a);
      }
      l = a, s = o;
    }
    return t;
  }
  computeWorldVertices(e, t) {
    for (; this.worldVertices.length < this.vertices.length; )
      this.worldVertices.push(new b());
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
      this.worldFaceNormals.push(new b());
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
    let o, r, l, a, h, d, u = new b();
    for (let m = 0; m < s.length; m++) {
      u.copy(s[m]), t.vmult(u, u), e.vadd(u, u);
      const g = u;
      (o === void 0 || g.x < o) && (o = g.x), (a === void 0 || g.x > a) && (a = g.x), (r === void 0 || g.y < r) && (r = g.y), (h === void 0 || g.y > h) && (h = g.y), (l === void 0 || g.z < l) && (l = g.z), (d === void 0 || g.z > d) && (d = g.z);
    }
    n.set(o, r, l), i.set(a, h, d);
  }
  volume() {
    return 4 * Math.PI * this.boundingSphereRadius / 3;
  }
  getAveragePointLocal(e) {
    e === void 0 && (e = new b());
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
    const t = this.vertices, n = this.faces, i = this.faceNormals, s = null, o = new b();
    this.getAveragePointLocal(o);
    for (let r = 0; r < this.faces.length; r++) {
      let l = i[r];
      const a = t[n[r][0]], h = new b();
      e.vsub(a, h);
      const d = l.dot(h), u = new b();
      o.vsub(a, u);
      const m = l.dot(u);
      if (d < 0 && m > 0 || d > 0 && m < 0)
        return !1;
    }
    return s ? 1 : -1;
  }
  static project(e, t, n, i, s) {
    const o = e.vertices.length, r = jd;
    let l = 0, a = 0;
    const h = Yd, d = e.vertices;
    h.setZero(), Pe.vectorToLocalFrame(n, i, t, r), Pe.pointToLocalFrame(n, i, h, h);
    const u = h.dot(r);
    a = l = d[0].dot(r);
    for (let m = 1; m < o; m++) {
      const g = d[m].dot(r);
      g > l && (l = g), g < a && (a = g);
    }
    if (a -= u, l -= u, a > l) {
      const m = a;
      a = l, l = m;
    }
    s[0] = l, s[1] = a;
  }
}
const Ys = [], $s = [];
new b();
const jd = new b(), Yd = new b();
class yr extends ce {
  constructor(e) {
    super({
      type: ce.types.BOX
    }), this.halfExtents = e, this.convexPolyhedronRepresentation = null, this.updateConvexPolyhedronRepresentation(), this.updateBoundingSphereRadius();
  }
  updateConvexPolyhedronRepresentation() {
    const e = this.halfExtents.x, t = this.halfExtents.y, n = this.halfExtents.z, i = b, s = [new i(-e, -t, -n), new i(e, -t, -n), new i(e, t, -n), new i(-e, t, -n), new i(-e, -t, n), new i(e, -t, n), new i(e, t, n), new i(-e, t, n)], o = [
      [3, 2, 1, 0],
      [4, 5, 6, 7],
      [5, 4, 0, 1],
      [2, 3, 7, 6],
      [0, 4, 7, 3],
      [1, 2, 6, 5]
    ], r = [new i(0, 0, 1), new i(0, 1, 0), new i(1, 0, 0)], l = new En({
      vertices: s,
      faces: o,
      axes: r
    });
    this.convexPolyhedronRepresentation = l, l.material = this.material;
  }
  calculateLocalInertia(e, t) {
    return t === void 0 && (t = new b()), yr.calculateInertia(this.halfExtents, e, t), t;
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
      dn.set(s[o][0], s[o][1], s[o][2]), t.vmult(dn, dn), e.vadd(dn, dn), n(dn.x, dn.y, dn.z);
  }
  calculateWorldAABB(e, t, n, i) {
    const s = this.halfExtents;
    Nt[0].set(s.x, s.y, s.z), Nt[1].set(-s.x, s.y, s.z), Nt[2].set(-s.x, -s.y, s.z), Nt[3].set(-s.x, -s.y, -s.z), Nt[4].set(s.x, -s.y, -s.z), Nt[5].set(s.x, s.y, -s.z), Nt[6].set(-s.x, s.y, -s.z), Nt[7].set(s.x, -s.y, s.z);
    const o = Nt[0];
    t.vmult(o, o), e.vadd(o, o), i.copy(o), n.copy(o);
    for (let r = 1; r < 8; r++) {
      const l = Nt[r];
      t.vmult(l, l), e.vadd(l, l);
      const a = l.x, h = l.y, d = l.z;
      a > i.x && (i.x = a), h > i.y && (i.y = h), d > i.z && (i.z = d), a < n.x && (n.x = a), h < n.y && (n.y = h), d < n.z && (n.z = d);
    }
  }
}
const dn = new b(), Nt = [new b(), new b(), new b(), new b(), new b(), new b(), new b(), new b()], wr = {
  DYNAMIC: 1,
  STATIC: 2,
  KINEMATIC: 4
}, br = {
  AWAKE: 0,
  SLEEPY: 1,
  SLEEPING: 2
};
class ie extends ma {
  constructor(e) {
    e === void 0 && (e = {}), super(), this.id = ie.idCounter++, this.index = -1, this.world = null, this.vlambda = new b(), this.collisionFilterGroup = typeof e.collisionFilterGroup == "number" ? e.collisionFilterGroup : 1, this.collisionFilterMask = typeof e.collisionFilterMask == "number" ? e.collisionFilterMask : -1, this.collisionResponse = typeof e.collisionResponse == "boolean" ? e.collisionResponse : !0, this.position = new b(), this.previousPosition = new b(), this.interpolatedPosition = new b(), this.initPosition = new b(), e.position && (this.position.copy(e.position), this.previousPosition.copy(e.position), this.interpolatedPosition.copy(e.position), this.initPosition.copy(e.position)), this.velocity = new b(), e.velocity && this.velocity.copy(e.velocity), this.initVelocity = new b(), this.force = new b();
    const t = typeof e.mass == "number" ? e.mass : 0;
    this.mass = t, this.invMass = t > 0 ? 1 / t : 0, this.material = e.material || null, this.linearDamping = typeof e.linearDamping == "number" ? e.linearDamping : 0.01, this.type = t <= 0 ? ie.STATIC : ie.DYNAMIC, typeof e.type == typeof ie.STATIC && (this.type = e.type), this.allowSleep = typeof e.allowSleep < "u" ? e.allowSleep : !0, this.sleepState = ie.AWAKE, this.sleepSpeedLimit = typeof e.sleepSpeedLimit < "u" ? e.sleepSpeedLimit : 0.1, this.sleepTimeLimit = typeof e.sleepTimeLimit < "u" ? e.sleepTimeLimit : 1, this.timeLastSleepy = 0, this.wakeUpAfterNarrowphase = !1, this.torque = new b(), this.quaternion = new Ze(), this.initQuaternion = new Ze(), this.previousQuaternion = new Ze(), this.interpolatedQuaternion = new Ze(), e.quaternion && (this.quaternion.copy(e.quaternion), this.initQuaternion.copy(e.quaternion), this.previousQuaternion.copy(e.quaternion), this.interpolatedQuaternion.copy(e.quaternion)), this.angularVelocity = new b(), e.angularVelocity && this.angularVelocity.copy(e.angularVelocity), this.initAngularVelocity = new b(), this.shapes = [], this.shapeOffsets = [], this.shapeOrientations = [], this.inertia = new b(), this.invInertia = new b(), this.invInertiaWorld = new Pt(), this.invMassSolve = 0, this.invInertiaSolve = new b(), this.invInertiaWorldSolve = new Pt(), this.fixedRotation = typeof e.fixedRotation < "u" ? e.fixedRotation : !1, this.angularDamping = typeof e.angularDamping < "u" ? e.angularDamping : 0.01, this.linearFactor = new b(1, 1, 1), e.linearFactor && this.linearFactor.copy(e.linearFactor), this.angularFactor = new b(1, 1, 1), e.angularFactor && this.angularFactor.copy(e.angularFactor), this.aabb = new bt(), this.aabbNeedsUpdate = !0, this.boundingRadius = 0, this.wlambda = new b(), this.isTrigger = Boolean(e.isTrigger), e.shape && this.addShape(e.shape), this.updateMassProperties();
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
    return t === void 0 && (t = new b()), e.vsub(this.position, t), this.quaternion.conjugate().vmult(t, t), t;
  }
  vectorToLocalFrame(e, t) {
    return t === void 0 && (t = new b()), this.quaternion.conjugate().vmult(e, t), t;
  }
  pointToWorldFrame(e, t) {
    return t === void 0 && (t = new b()), this.quaternion.vmult(e, t), t.vadd(this.position, t), t;
  }
  vectorToWorldFrame(e, t) {
    return t === void 0 && (t = new b()), this.quaternion.vmult(e, t), t;
  }
  addShape(e, t, n) {
    const i = new b(), s = new Ze();
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
      const r = t[s].length(), l = o.boundingSphereRadius;
      r + l > i && (i = r + l);
    }
    this.boundingRadius = i;
  }
  updateAABB() {
    const e = this.shapes, t = this.shapeOffsets, n = this.shapeOrientations, i = e.length, s = $d, o = Zd, r = this.quaternion, l = this.aabb, a = Kd;
    for (let h = 0; h !== i; h++) {
      const d = e[h];
      r.vmult(t[h], s), s.vadd(this.position, s), r.mult(n[h], o), d.calculateWorldAABB(s, o, a.lowerBound, a.upperBound), h === 0 ? l.copy(a) : l.extend(a);
    }
    this.aabbNeedsUpdate = !1;
  }
  updateInertiaWorld(e) {
    const t = this.invInertia;
    if (!(t.x === t.y && t.y === t.z && !e)) {
      const n = Jd, i = Qd;
      n.setRotationFromQuaternion(this.quaternion), n.transpose(i), n.scale(t, n), n.mmult(i, this.invInertiaWorld);
    }
  }
  applyForce(e, t) {
    if (t === void 0 && (t = new b()), this.type !== ie.DYNAMIC)
      return;
    this.sleepState === ie.SLEEPING && this.wakeUp();
    const n = tf;
    t.cross(e, n), this.force.vadd(e, this.force), this.torque.vadd(n, this.torque);
  }
  applyLocalForce(e, t) {
    if (t === void 0 && (t = new b()), this.type !== ie.DYNAMIC)
      return;
    const n = nf, i = sf;
    this.vectorToWorldFrame(e, n), this.vectorToWorldFrame(t, i), this.applyForce(n, i);
  }
  applyTorque(e) {
    this.type === ie.DYNAMIC && (this.sleepState === ie.SLEEPING && this.wakeUp(), this.torque.vadd(e, this.torque));
  }
  applyImpulse(e, t) {
    if (t === void 0 && (t = new b()), this.type !== ie.DYNAMIC)
      return;
    this.sleepState === ie.SLEEPING && this.wakeUp();
    const n = t, i = rf;
    i.copy(e), i.scale(this.invMass, i), this.velocity.vadd(i, this.velocity);
    const s = of;
    n.cross(e, s), this.invInertiaWorld.vmult(s, s), this.angularVelocity.vadd(s, this.angularVelocity);
  }
  applyLocalImpulse(e, t) {
    if (t === void 0 && (t = new b()), this.type !== ie.DYNAMIC)
      return;
    const n = af, i = lf;
    this.vectorToWorldFrame(e, n), this.vectorToWorldFrame(t, i), this.applyImpulse(n, i);
  }
  updateMassProperties() {
    const e = cf;
    this.invMass = this.mass > 0 ? 1 / this.mass : 0;
    const t = this.inertia, n = this.fixedRotation;
    this.updateAABB(), e.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2), yr.calculateInertia(e, this.mass, t), this.invInertia.set(t.x > 0 && !n ? 1 / t.x : 0, t.y > 0 && !n ? 1 / t.y : 0, t.z > 0 && !n ? 1 / t.z : 0), this.updateInertiaWorld(!0);
  }
  getVelocityAtWorldPoint(e, t) {
    const n = new b();
    return e.vsub(this.position, n), this.angularVelocity.cross(n, t), this.velocity.vadd(t, t), t;
  }
  integrate(e, t, n) {
    if (this.previousPosition.copy(this.position), this.previousQuaternion.copy(this.quaternion), !(this.type === ie.DYNAMIC || this.type === ie.KINEMATIC) || this.sleepState === ie.SLEEPING)
      return;
    const i = this.velocity, s = this.angularVelocity, o = this.position, r = this.force, l = this.torque, a = this.quaternion, h = this.invMass, d = this.invInertiaWorld, u = this.linearFactor, m = h * e;
    i.x += r.x * m * u.x, i.y += r.y * m * u.y, i.z += r.z * m * u.z;
    const g = d.elements, p = this.angularFactor, f = l.x * p.x, _ = l.y * p.y, v = l.z * p.z;
    s.x += e * (g[0] * f + g[1] * _ + g[2] * v), s.y += e * (g[3] * f + g[4] * _ + g[5] * v), s.z += e * (g[6] * f + g[7] * _ + g[8] * v), o.x += i.x * e, o.y += i.y * e, o.z += i.z * e, a.integrate(this.angularVelocity, e, this.angularFactor, a), t && (n ? a.normalizeFast() : a.normalize()), this.aabbNeedsUpdate = !0, this.updateInertiaWorld();
  }
}
ie.idCounter = 0;
ie.COLLIDE_EVENT_NAME = "collide";
ie.DYNAMIC = wr.DYNAMIC;
ie.STATIC = wr.STATIC;
ie.KINEMATIC = wr.KINEMATIC;
ie.AWAKE = br.AWAKE;
ie.SLEEPY = br.SLEEPY;
ie.SLEEPING = br.SLEEPING;
ie.wakeupEvent = {
  type: "wakeup"
};
ie.sleepyEvent = {
  type: "sleepy"
};
ie.sleepEvent = {
  type: "sleep"
};
const $d = new b(), Zd = new Ze(), Kd = new bt(), Jd = new Pt(), Qd = new Pt(), ef = new Pt(), tf = new b(), nf = new b(), sf = new b(), rf = new b(), of = new b(), af = new b(), lf = new b(), cf = new b();
class hf {
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
    const s = uf;
    t.position.vsub(e.position, s);
    const o = (e.boundingRadius + t.boundingRadius) ** 2;
    s.lengthSquared() < o && (n.push(e), i.push(t));
  }
  doBoundingBoxBroadphase(e, t, n, i) {
    e.aabbNeedsUpdate && e.updateAABB(), t.aabbNeedsUpdate && t.updateAABB(), e.aabb.overlaps(t.aabb) && (n.push(e), i.push(t));
  }
  makePairsUnique(e, t) {
    const n = df, i = ff, s = pf, o = e.length;
    for (let r = 0; r !== o; r++)
      i[r] = e[r], s[r] = t[r];
    e.length = 0, t.length = 0;
    for (let r = 0; r !== o; r++) {
      const l = i[r].id, a = s[r].id, h = l < a ? `${l},${a}` : `${a},${l}`;
      n[h] = r, n.keys.push(h);
    }
    for (let r = 0; r !== n.keys.length; r++) {
      const l = n.keys.pop(), a = n[l];
      e.push(i[a]), t.push(s[a]), delete n[l];
    }
  }
  setWorld(e) {
  }
  static boundingSphereCheck(e, t) {
    const n = new b();
    e.position.vsub(t.position, n);
    const i = e.shapes[0], s = t.shapes[0];
    return Math.pow(i.boundingSphereRadius + s.boundingSphereRadius, 2) > n.lengthSquared();
  }
  aabbQuery(e, t, n) {
    return console.warn(".aabbQuery is not implemented in this Broadphase subclass."), [];
  }
}
const uf = new b();
new b();
new Ze();
new b();
const df = {
  keys: []
}, ff = [], pf = [];
new b();
new b();
new b();
class ga extends hf {
  constructor() {
    super();
  }
  collisionPairs(e, t, n) {
    const i = e.bodies, s = i.length;
    let o, r;
    for (let l = 0; l !== s; l++)
      for (let a = 0; a !== l; a++)
        o = i[l], r = i[a], this.needBroadphaseCollision(o, r) && this.intersectionTest(o, r, t, n);
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
class us {
  constructor() {
    this.rayFromWorld = new b(), this.rayToWorld = new b(), this.hitNormalWorld = new b(), this.hitPointWorld = new b(), this.hasHit = !1, this.shape = null, this.body = null, this.hitFaceIndex = -1, this.distance = -1, this.shouldStop = !1;
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
let _a, va, xa, ya, wa, ba, Ma;
const Mr = {
  CLOSEST: 1,
  ANY: 2,
  ALL: 4
};
_a = ce.types.SPHERE;
va = ce.types.PLANE;
xa = ce.types.BOX;
ya = ce.types.CYLINDER;
wa = ce.types.CONVEXPOLYHEDRON;
ba = ce.types.HEIGHTFIELD;
Ma = ce.types.TRIMESH;
class $e {
  get [_a]() {
    return this._intersectSphere;
  }
  get [va]() {
    return this._intersectPlane;
  }
  get [xa]() {
    return this._intersectBox;
  }
  get [ya]() {
    return this._intersectConvex;
  }
  get [wa]() {
    return this._intersectConvex;
  }
  get [ba]() {
    return this._intersectHeightfield;
  }
  get [Ma]() {
    return this._intersectTrimesh;
  }
  constructor(e, t) {
    e === void 0 && (e = new b()), t === void 0 && (t = new b()), this.from = e.clone(), this.to = t.clone(), this.direction = new b(), this.precision = 1e-4, this.checkCollisionResponse = !0, this.skipBackfaces = !1, this.collisionFilterMask = -1, this.collisionFilterGroup = -1, this.mode = $e.ANY, this.result = new us(), this.hasHit = !1, this.callback = (n) => {
    };
  }
  intersectWorld(e, t) {
    return this.mode = t.mode || $e.ANY, this.result = t.result || new us(), this.skipBackfaces = !!t.skipBackfaces, this.collisionFilterMask = typeof t.collisionFilterMask < "u" ? t.collisionFilterMask : -1, this.collisionFilterGroup = typeof t.collisionFilterGroup < "u" ? t.collisionFilterGroup : -1, this.checkCollisionResponse = typeof t.checkCollisionResponse < "u" ? t.checkCollisionResponse : !0, t.from && this.from.copy(t.from), t.to && this.to.copy(t.to), this.callback = t.callback || (() => {
    }), this.hasHit = !1, this.result.reset(), this.updateDirection(), this.getAABB(bo), Zs.length = 0, e.broadphase.aabbQuery(e, bo, Zs), this.intersectBodies(Zs), this.hasHit;
  }
  intersectBody(e, t) {
    t && (this.result = t, this.updateDirection());
    const n = this.checkCollisionResponse;
    if (n && !e.collisionResponse || (this.collisionFilterGroup & e.collisionFilterMask) === 0 || (e.collisionFilterGroup & this.collisionFilterMask) === 0)
      return;
    const i = mf, s = gf;
    for (let o = 0, r = e.shapes.length; o < r; o++) {
      const l = e.shapes[o];
      if (!(n && !l.collisionResponse) && (e.quaternion.mult(e.shapeOrientations[o], s), e.quaternion.vmult(e.shapeOffsets[o], i), i.vadd(e.position, i), this.intersectShape(l, s, i, e), this.result.shouldStop))
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
    if (Rf(s, this.direction, n) > e.boundingSphereRadius)
      return;
    const r = this[e.type];
    r && r.call(this, e, t, n, i, e);
  }
  _intersectBox(e, t, n, i, s) {
    return this._intersectConvex(e.convexPolyhedronRepresentation, t, n, i, s);
  }
  _intersectPlane(e, t, n, i, s) {
    const o = this.from, r = this.to, l = this.direction, a = new b(0, 0, 1);
    t.vmult(a, a);
    const h = new b();
    o.vsub(n, h);
    const d = h.dot(a);
    r.vsub(n, h);
    const u = h.dot(a);
    if (d * u > 0 || o.distanceTo(r) < d)
      return;
    const m = a.dot(l);
    if (Math.abs(m) < this.precision)
      return;
    const g = new b(), p = new b(), f = new b();
    o.vsub(n, g);
    const _ = -a.dot(g) / m;
    l.scale(_, p), o.vadd(p, f), this.reportIntersection(a, f, s, i, -1);
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
    const o = _f;
    o.from.copy(this.from), o.to.copy(this.to), Pe.pointToLocalFrame(n, t, o.from, o.from), Pe.pointToLocalFrame(n, t, o.to, o.to), o.updateDirection();
    const r = vf;
    let l, a, h, d;
    l = a = 0, h = d = e.data.length - 1;
    const u = new bt();
    o.getAABB(u), e.getIndexOfPosition(u.lowerBound.x, u.lowerBound.y, r, !0), l = Math.max(l, r[0]), a = Math.max(a, r[1]), e.getIndexOfPosition(u.upperBound.x, u.upperBound.y, r, !0), h = Math.min(h, r[0] + 1), d = Math.min(d, r[1] + 1);
    for (let m = l; m < h; m++)
      for (let g = a; g < d; g++) {
        if (this.result.shouldStop)
          return;
        if (e.getAabbAtIndex(m, g, u), !!u.overlapsRay(o)) {
          if (e.getConvexTrianglePillar(m, g, !1), Pe.pointToWorldFrame(n, t, e.pillarOffset, es), this._intersectConvex(e.pillarConvex, t, es, i, s, Mo), this.result.shouldStop)
            return;
          e.getConvexTrianglePillar(m, g, !0), Pe.pointToWorldFrame(n, t, e.pillarOffset, es), this._intersectConvex(e.pillarConvex, t, es, i, s, Mo);
        }
      }
  }
  _intersectSphere(e, t, n, i, s) {
    const o = this.from, r = this.to, l = e.radius, a = (r.x - o.x) ** 2 + (r.y - o.y) ** 2 + (r.z - o.z) ** 2, h = 2 * ((r.x - o.x) * (o.x - n.x) + (r.y - o.y) * (o.y - n.y) + (r.z - o.z) * (o.z - n.z)), d = (o.x - n.x) ** 2 + (o.y - n.y) ** 2 + (o.z - n.z) ** 2 - l ** 2, u = h ** 2 - 4 * a * d, m = xf, g = yf;
    if (!(u < 0))
      if (u === 0)
        o.lerp(r, u, m), m.vsub(n, g), g.normalize(), this.reportIntersection(g, m, s, i, -1);
      else {
        const p = (-h - Math.sqrt(u)) / (2 * a), f = (-h + Math.sqrt(u)) / (2 * a);
        if (p >= 0 && p <= 1 && (o.lerp(r, p, m), m.vsub(n, g), g.normalize(), this.reportIntersection(g, m, s, i, -1)), this.result.shouldStop)
          return;
        f >= 0 && f <= 1 && (o.lerp(r, f, m), m.vsub(n, g), g.normalize(), this.reportIntersection(g, m, s, i, -1));
      }
  }
  _intersectConvex(e, t, n, i, s, o) {
    const r = wf, l = So, a = o && o.faceList || null, h = e.faces, d = e.vertices, u = e.faceNormals, m = this.direction, g = this.from, p = this.to, f = g.distanceTo(p), _ = a ? a.length : h.length, v = this.result;
    for (let y = 0; !v.shouldStop && y < _; y++) {
      const x = a ? a[y] : y, M = h[x], S = u[x], C = t, w = n;
      l.copy(d[M[0]]), C.vmult(l, l), l.vadd(w, l), l.vsub(g, l), C.vmult(S, r);
      const A = m.dot(r);
      if (Math.abs(A) < this.precision)
        continue;
      const D = r.dot(l) / A;
      if (!(D < 0)) {
        m.scale(D, dt), dt.vadd(g, dt), Dt.copy(d[M[0]]), C.vmult(Dt, Dt), w.vadd(Dt, Dt);
        for (let B = 1; !v.shouldStop && B < M.length - 1; B++) {
          Ot.copy(d[M[B]]), Ut.copy(d[M[B + 1]]), C.vmult(Ot, Ot), C.vmult(Ut, Ut), w.vadd(Ot, Ot), w.vadd(Ut, Ut);
          const W = dt.distanceTo(g);
          !($e.pointInTriangle(dt, Dt, Ot, Ut) || $e.pointInTriangle(dt, Ot, Dt, Ut)) || W > f || this.reportIntersection(r, dt, s, i, x);
        }
      }
    }
  }
  _intersectTrimesh(e, t, n, i, s, o) {
    const r = bf, l = Cf, a = Lf, h = So, d = Mf, u = Sf, m = Ef, g = Tf, p = Af, f = e.indices;
    e.vertices;
    const _ = this.from, v = this.to, y = this.direction;
    a.position.copy(n), a.quaternion.copy(t), Pe.vectorToLocalFrame(n, t, y, d), Pe.pointToLocalFrame(n, t, _, u), Pe.pointToLocalFrame(n, t, v, m), m.x *= e.scale.x, m.y *= e.scale.y, m.z *= e.scale.z, u.x *= e.scale.x, u.y *= e.scale.y, u.z *= e.scale.z, m.vsub(u, d), d.normalize();
    const x = u.distanceSquared(m);
    e.tree.rayQuery(this, a, l);
    for (let M = 0, S = l.length; !this.result.shouldStop && M !== S; M++) {
      const C = l[M];
      e.getNormal(C, r), e.getVertex(f[C * 3], Dt), Dt.vsub(u, h);
      const w = d.dot(r), A = r.dot(h) / w;
      if (A < 0)
        continue;
      d.scale(A, dt), dt.vadd(u, dt), e.getVertex(f[C * 3 + 1], Ot), e.getVertex(f[C * 3 + 2], Ut);
      const D = dt.distanceSquared(u);
      !($e.pointInTriangle(dt, Ot, Dt, Ut) || $e.pointInTriangle(dt, Dt, Ot, Ut)) || D > x || (Pe.vectorToWorldFrame(t, r, p), Pe.pointToWorldFrame(n, t, dt, g), this.reportIntersection(p, g, s, i, C));
    }
    l.length = 0;
  }
  reportIntersection(e, t, n, i, s) {
    const o = this.from, r = this.to, l = o.distanceTo(t), a = this.result;
    if (!(this.skipBackfaces && e.dot(this.direction) > 0))
      switch (a.hitFaceIndex = typeof s < "u" ? s : -1, this.mode) {
        case $e.ALL:
          this.hasHit = !0, a.set(o, r, e, t, n, i, l), a.hasHit = !0, this.callback(a);
          break;
        case $e.CLOSEST:
          (l < a.distance || !a.hasHit) && (this.hasHit = !0, a.hasHit = !0, a.set(o, r, e, t, n, i, l));
          break;
        case $e.ANY:
          this.hasHit = !0, a.hasHit = !0, a.set(o, r, e, t, n, i, l), a.shouldStop = !0;
          break;
      }
  }
  static pointInTriangle(e, t, n, i) {
    i.vsub(t, bn), n.vsub(t, _i), e.vsub(t, Ks);
    const s = bn.dot(bn), o = bn.dot(_i), r = bn.dot(Ks), l = _i.dot(_i), a = _i.dot(Ks);
    let h, d;
    return (h = l * r - o * a) >= 0 && (d = s * a - o * r) >= 0 && h + d < s * l - o * o;
  }
}
$e.CLOSEST = Mr.CLOSEST;
$e.ANY = Mr.ANY;
$e.ALL = Mr.ALL;
const bo = new bt(), Zs = [], _i = new b(), Ks = new b(), mf = new b(), gf = new Ze(), dt = new b(), Dt = new b(), Ot = new b(), Ut = new b();
new b();
new us();
const Mo = {
  faceList: [0]
}, es = new b(), _f = new $e(), vf = [], xf = new b(), yf = new b(), wf = new b();
new b();
new b();
const So = new b(), bf = new b(), Mf = new b(), Sf = new b(), Ef = new b(), Af = new b(), Tf = new b();
new bt();
const Cf = [], Lf = new Pe(), bn = new b(), ts = new b();
function Rf(c, e, t) {
  t.vsub(c, bn);
  const n = bn.dot(e);
  return e.scale(n, ts), ts.vadd(c, ts), t.distanceTo(ts);
}
class Ff {
  static defaults(e, t) {
    e === void 0 && (e = {});
    for (let n in t)
      n in e || (e[n] = t[n]);
    return e;
  }
}
class Eo {
  constructor() {
    this.spatial = new b(), this.rotational = new b();
  }
  multiplyElement(e) {
    return e.spatial.dot(this.spatial) + e.rotational.dot(this.rotational);
  }
  multiplyVectors(e, t) {
    return e.dot(this.spatial) + t.dot(this.rotational);
  }
}
class Ti {
  constructor(e, t, n, i) {
    n === void 0 && (n = -1e6), i === void 0 && (i = 1e6), this.id = Ti.idCounter++, this.minForce = n, this.maxForce = i, this.bi = e, this.bj = t, this.a = 0, this.b = 0, this.eps = 0, this.jacobianElementA = new Eo(), this.jacobianElementB = new Eo(), this.enabled = !0, this.multiplier = 0, this.setSpookParams(1e7, 4, 1 / 60);
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
    const e = this.jacobianElementA, t = this.jacobianElementB, n = this.bi, i = this.bj, s = n.velocity, o = i.velocity, r = n.angularVelocity, l = i.angularVelocity;
    return e.multiplyVectors(s, r) + t.multiplyVectors(o, l);
  }
  computeGWlambda() {
    const e = this.jacobianElementA, t = this.jacobianElementB, n = this.bi, i = this.bj, s = n.vlambda, o = i.vlambda, r = n.wlambda, l = i.wlambda;
    return e.multiplyVectors(s, r) + t.multiplyVectors(o, l);
  }
  computeGiMf() {
    const e = this.jacobianElementA, t = this.jacobianElementB, n = this.bi, i = this.bj, s = n.force, o = n.torque, r = i.force, l = i.torque, a = n.invMassSolve, h = i.invMassSolve;
    return s.scale(a, Ao), r.scale(h, To), n.invInertiaWorldSolve.vmult(o, Co), i.invInertiaWorldSolve.vmult(l, Lo), e.multiplyVectors(Ao, Co) + t.multiplyVectors(To, Lo);
  }
  computeGiMGt() {
    const e = this.jacobianElementA, t = this.jacobianElementB, n = this.bi, i = this.bj, s = n.invMassSolve, o = i.invMassSolve, r = n.invInertiaWorldSolve, l = i.invInertiaWorldSolve;
    let a = s + o;
    return r.vmult(e.rotational, ns), a += ns.dot(e.rotational), l.vmult(t.rotational, ns), a += ns.dot(t.rotational), a;
  }
  addToWlambda(e) {
    const t = this.jacobianElementA, n = this.jacobianElementB, i = this.bi, s = this.bj, o = Df;
    i.vlambda.addScaledVector(i.invMassSolve * e, t.spatial, i.vlambda), s.vlambda.addScaledVector(s.invMassSolve * e, n.spatial, s.vlambda), i.invInertiaWorldSolve.vmult(t.rotational, o), i.wlambda.addScaledVector(e, o, i.wlambda), s.invInertiaWorldSolve.vmult(n.rotational, o), s.wlambda.addScaledVector(e, o, s.wlambda);
  }
  computeC() {
    return this.computeGiMGt() + this.eps;
  }
}
Ti.idCounter = 0;
const Ao = new b(), To = new b(), Co = new b(), Lo = new b(), ns = new b(), Df = new b();
class Pf extends Ti {
  constructor(e, t, n) {
    n === void 0 && (n = 1e6), super(e, t, 0, n), this.restitution = 0, this.ri = new b(), this.rj = new b(), this.ni = new b();
  }
  computeB(e) {
    const t = this.a, n = this.b, i = this.bi, s = this.bj, o = this.ri, r = this.rj, l = If, a = Bf, h = i.velocity, d = i.angularVelocity;
    i.force, i.torque;
    const u = s.velocity, m = s.angularVelocity;
    s.force, s.torque;
    const g = zf, p = this.jacobianElementA, f = this.jacobianElementB, _ = this.ni;
    o.cross(_, l), r.cross(_, a), _.negate(p.spatial), l.negate(p.rotational), f.spatial.copy(_), f.rotational.copy(a), g.copy(s.position), g.vadd(r, g), g.vsub(i.position, g), g.vsub(o, g);
    const v = _.dot(g), y = this.restitution + 1, x = y * u.dot(_) - y * h.dot(_) + m.dot(a) - d.dot(l), M = this.computeGiMf();
    return -v * t - x * n - e * M;
  }
  getImpactVelocityAlongNormal() {
    const e = Nf, t = Of, n = Uf, i = Gf, s = kf;
    return this.bi.position.vadd(this.ri, n), this.bj.position.vadd(this.rj, i), this.bi.getVelocityAtWorldPoint(n, e), this.bj.getVelocityAtWorldPoint(i, t), e.vsub(t, s), this.ni.dot(s);
  }
}
const If = new b(), Bf = new b(), zf = new b(), Nf = new b(), Of = new b(), Uf = new b(), Gf = new b(), kf = new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
class Ro extends Ti {
  constructor(e, t, n) {
    super(e, t, -n, n), this.ri = new b(), this.rj = new b(), this.t = new b();
  }
  computeB(e) {
    this.a;
    const t = this.b;
    this.bi, this.bj;
    const n = this.ri, i = this.rj, s = Wf, o = Vf, r = this.t;
    n.cross(r, s), i.cross(r, o);
    const l = this.jacobianElementA, a = this.jacobianElementB;
    r.negate(l.spatial), s.negate(l.rotational), a.spatial.copy(r), a.rotational.copy(o);
    const h = this.computeGW(), d = this.computeGiMf();
    return -h * t - e * d;
  }
}
const Wf = new b(), Vf = new b();
class An {
  constructor(e, t, n) {
    n = Ff.defaults(n, {
      friction: 0.3,
      restitution: 0.3,
      contactEquationStiffness: 1e7,
      contactEquationRelaxation: 3,
      frictionEquationStiffness: 1e7,
      frictionEquationRelaxation: 3
    }), this.id = An.idCounter++, this.materials = [e, t], this.friction = n.friction, this.restitution = n.restitution, this.contactEquationStiffness = n.contactEquationStiffness, this.contactEquationRelaxation = n.contactEquationRelaxation, this.frictionEquationStiffness = n.frictionEquationStiffness, this.frictionEquationRelaxation = n.frictionEquationRelaxation;
  }
}
An.idCounter = 0;
class Tn {
  constructor(e) {
    e === void 0 && (e = {});
    let t = "";
    typeof e == "string" && (t = e, e = {}), this.name = t, this.id = Tn.idCounter++, this.friction = typeof e.friction < "u" ? e.friction : -1, this.restitution = typeof e.restitution < "u" ? e.restitution : -1;
  }
}
Tn.idCounter = 0;
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new $e();
new b();
new b();
new b();
new b(1, 0, 0), new b(0, 1, 0), new b(0, 0, 1);
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
class Hf extends En {
  constructor(e, t, n, i) {
    if (e === void 0 && (e = 1), t === void 0 && (t = 1), n === void 0 && (n = 1), i === void 0 && (i = 8), e < 0)
      throw new Error("The cylinder radiusTop cannot be negative.");
    if (t < 0)
      throw new Error("The cylinder radiusBottom cannot be negative.");
    const s = i, o = [], r = [], l = [], a = [], h = [], d = Math.cos, u = Math.sin;
    o.push(new b(-t * u(0), -n * 0.5, t * d(0))), a.push(0), o.push(new b(-e * u(0), n * 0.5, e * d(0))), h.push(1);
    for (let g = 0; g < s; g++) {
      const p = 2 * Math.PI / s * (g + 1), f = 2 * Math.PI / s * (g + 0.5);
      g < s - 1 ? (o.push(new b(-t * u(p), -n * 0.5, t * d(p))), a.push(2 * g + 2), o.push(new b(-e * u(p), n * 0.5, e * d(p))), h.push(2 * g + 3), l.push([2 * g, 2 * g + 1, 2 * g + 3, 2 * g + 2])) : l.push([2 * g, 2 * g + 1, 1, 0]), (s % 2 === 1 || g < s / 2) && r.push(new b(-u(f), 0, d(f)));
    }
    l.push(a), r.push(new b(0, 1, 0));
    const m = [];
    for (let g = 0; g < h.length; g++)
      m.push(h[h.length - g - 1]);
    l.push(m), super({
      vertices: o,
      faces: l,
      axes: r
    }), this.type = ce.types.CYLINDER, this.radiusTop = e, this.radiusBottom = t, this.height = n, this.numSegments = i;
  }
}
class vi extends ce {
  constructor() {
    super({
      type: ce.types.PLANE
    }), this.worldNormal = new b(), this.worldNormalNeedsUpdate = !0, this.boundingSphereRadius = Number.MAX_VALUE;
  }
  computeWorldNormal(e) {
    const t = this.worldNormal;
    t.set(0, 0, 1), e.vmult(t, t), this.worldNormalNeedsUpdate = !1;
  }
  calculateLocalInertia(e, t) {
    return t === void 0 && (t = new b()), t;
  }
  volume() {
    return Number.MAX_VALUE;
  }
  calculateWorldAABB(e, t, n, i) {
    $t.set(0, 0, 1), t.vmult($t, $t);
    const s = Number.MAX_VALUE;
    n.set(-s, -s, -s), i.set(s, s, s), $t.x === 1 ? i.x = e.x : $t.x === -1 && (n.x = e.x), $t.y === 1 ? i.y = e.y : $t.y === -1 && (n.y = e.y), $t.z === 1 ? i.z = e.z : $t.z === -1 && (n.z = e.z);
  }
  updateBoundingSphereRadius() {
    this.boundingSphereRadius = Number.MAX_VALUE;
  }
}
const $t = new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new bt();
new b();
new bt();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new bt();
new b();
new Pe();
new bt();
class qf {
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
class Xf extends qf {
  constructor() {
    super(), this.iterations = 10, this.tolerance = 1e-7;
  }
  solve(e, t) {
    let n = 0;
    const i = this.iterations, s = this.tolerance * this.tolerance, o = this.equations, r = o.length, l = t.bodies, a = l.length, h = e;
    let d, u, m, g, p, f;
    if (r !== 0)
      for (let x = 0; x !== a; x++)
        l[x].updateSolveMassProperties();
    const _ = Yf, v = $f, y = jf;
    _.length = r, v.length = r, y.length = r;
    for (let x = 0; x !== r; x++) {
      const M = o[x];
      y[x] = 0, v[x] = M.computeB(h), _[x] = 1 / M.computeC();
    }
    if (r !== 0) {
      for (let S = 0; S !== a; S++) {
        const C = l[S], w = C.vlambda, A = C.wlambda;
        w.set(0, 0, 0), A.set(0, 0, 0);
      }
      for (n = 0; n !== i; n++) {
        g = 0;
        for (let S = 0; S !== r; S++) {
          const C = o[S];
          d = v[S], u = _[S], f = y[S], p = C.computeGWlambda(), m = u * (d - p - C.eps * f), f + m < C.minForce ? m = C.minForce - f : f + m > C.maxForce && (m = C.maxForce - f), y[S] += m, g += m > 0 ? m : -m, C.addToWlambda(m);
        }
        if (g * g < s)
          break;
      }
      for (let S = 0; S !== a; S++) {
        const C = l[S], w = C.velocity, A = C.angularVelocity;
        C.vlambda.vmul(C.linearFactor, C.vlambda), w.vadd(C.vlambda, w), C.wlambda.vmul(C.angularFactor, C.wlambda), A.vadd(C.wlambda, A);
      }
      let x = o.length;
      const M = 1 / h;
      for (; x--; )
        o[x].multiplier = y[x] * M;
    }
    return n;
  }
}
const jf = [], Yf = [], $f = [];
ie.STATIC;
class Zf {
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
class Kf extends Zf {
  constructor() {
    super(...arguments), this.type = b;
  }
  constructObject() {
    return new b();
  }
}
const Ue = {
  sphereSphere: ce.types.SPHERE,
  spherePlane: ce.types.SPHERE | ce.types.PLANE,
  boxBox: ce.types.BOX | ce.types.BOX,
  sphereBox: ce.types.SPHERE | ce.types.BOX,
  planeBox: ce.types.PLANE | ce.types.BOX,
  convexConvex: ce.types.CONVEXPOLYHEDRON,
  sphereConvex: ce.types.SPHERE | ce.types.CONVEXPOLYHEDRON,
  planeConvex: ce.types.PLANE | ce.types.CONVEXPOLYHEDRON,
  boxConvex: ce.types.BOX | ce.types.CONVEXPOLYHEDRON,
  sphereHeightfield: ce.types.SPHERE | ce.types.HEIGHTFIELD,
  boxHeightfield: ce.types.BOX | ce.types.HEIGHTFIELD,
  convexHeightfield: ce.types.CONVEXPOLYHEDRON | ce.types.HEIGHTFIELD,
  sphereParticle: ce.types.PARTICLE | ce.types.SPHERE,
  planeParticle: ce.types.PLANE | ce.types.PARTICLE,
  boxParticle: ce.types.BOX | ce.types.PARTICLE,
  convexParticle: ce.types.PARTICLE | ce.types.CONVEXPOLYHEDRON,
  cylinderCylinder: ce.types.CYLINDER,
  sphereCylinder: ce.types.SPHERE | ce.types.CYLINDER,
  planeCylinder: ce.types.PLANE | ce.types.CYLINDER,
  boxCylinder: ce.types.BOX | ce.types.CYLINDER,
  convexCylinder: ce.types.CONVEXPOLYHEDRON | ce.types.CYLINDER,
  heightfieldCylinder: ce.types.HEIGHTFIELD | ce.types.CYLINDER,
  particleCylinder: ce.types.PARTICLE | ce.types.CYLINDER,
  sphereTrimesh: ce.types.SPHERE | ce.types.TRIMESH,
  planeTrimesh: ce.types.PLANE | ce.types.TRIMESH
};
class Jf {
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
    this.contactPointPool = [], this.frictionEquationPool = [], this.result = [], this.frictionResult = [], this.v3pool = new Kf(), this.world = e, this.currentContactMaterial = e.defaultContactMaterial, this.enableFrictionReduction = !1;
  }
  createContactEquation(e, t, n, i, s, o) {
    let r;
    this.contactPointPool.length ? (r = this.contactPointPool.pop(), r.bi = e, r.bj = t) : r = new Pf(e, t), r.enabled = e.collisionResponse && t.collisionResponse && n.collisionResponse && i.collisionResponse;
    const l = this.currentContactMaterial;
    r.restitution = l.restitution, r.setSpookParams(l.contactEquationStiffness, l.contactEquationRelaxation, this.world.dt);
    const a = n.material || e.material, h = i.material || t.material;
    return a && h && a.restitution >= 0 && h.restitution >= 0 && (r.restitution = a.restitution * h.restitution), r.si = s || n, r.sj = o || i, r;
  }
  createFrictionEquationsFromContact(e, t) {
    const n = e.bi, i = e.bj, s = e.si, o = e.sj, r = this.world, l = this.currentContactMaterial;
    let a = l.friction;
    const h = s.material || n.material, d = o.material || i.material;
    if (h && d && h.friction >= 0 && d.friction >= 0 && (a = h.friction * d.friction), a > 0) {
      const u = a * (r.frictionGravity || r.gravity).length();
      let m = n.invMass + i.invMass;
      m > 0 && (m = 1 / m);
      const g = this.frictionEquationPool, p = g.length ? g.pop() : new Ro(n, i, u * m), f = g.length ? g.pop() : new Ro(n, i, u * m);
      return p.bi = f.bi = n, p.bj = f.bj = i, p.minForce = f.minForce = -u * m, p.maxForce = f.maxForce = u * m, p.ri.copy(e.ri), p.rj.copy(e.rj), f.ri.copy(e.ri), f.rj.copy(e.rj), e.ni.tangents(p.t, f.t), p.setSpookParams(l.frictionEquationStiffness, l.frictionEquationRelaxation, r.dt), f.setSpookParams(l.frictionEquationStiffness, l.frictionEquationRelaxation, r.dt), p.enabled = f.enabled = e.enabled, t.push(p, f), !0;
    }
    return !1;
  }
  createFrictionFromAverage(e) {
    let t = this.result[this.result.length - 1];
    if (!this.createFrictionEquationsFromContact(t, this.frictionResult) || e === 1)
      return;
    const n = this.frictionResult[this.frictionResult.length - 2], i = this.frictionResult[this.frictionResult.length - 1];
    vn.setZero(), Kn.setZero(), Jn.setZero();
    const s = t.bi;
    t.bj;
    for (let r = 0; r !== e; r++)
      t = this.result[this.result.length - 1 - r], t.bi !== s ? (vn.vadd(t.ni, vn), Kn.vadd(t.ri, Kn), Jn.vadd(t.rj, Jn)) : (vn.vsub(t.ni, vn), Kn.vadd(t.rj, Kn), Jn.vadd(t.ri, Jn));
    const o = 1 / e;
    Kn.scale(o, n.ri), Jn.scale(o, n.rj), i.ri.copy(n.ri), i.rj.copy(n.rj), vn.normalize(), vn.tangents(n.t, i.t);
  }
  getContacts(e, t, n, i, s, o, r) {
    this.contactPointPool = s, this.frictionEquationPool = r, this.result = i, this.frictionResult = o;
    const l = tp, a = np, h = Qf, d = ep;
    for (let u = 0, m = e.length; u !== m; u++) {
      const g = e[u], p = t[u];
      let f = null;
      g.material && p.material && (f = n.getContactMaterial(g.material, p.material) || null);
      const _ = g.type & ie.KINEMATIC && p.type & ie.STATIC || g.type & ie.STATIC && p.type & ie.KINEMATIC || g.type & ie.KINEMATIC && p.type & ie.KINEMATIC;
      for (let v = 0; v < g.shapes.length; v++) {
        g.quaternion.mult(g.shapeOrientations[v], l), g.quaternion.vmult(g.shapeOffsets[v], h), h.vadd(g.position, h);
        const y = g.shapes[v];
        for (let x = 0; x < p.shapes.length; x++) {
          p.quaternion.mult(p.shapeOrientations[x], a), p.quaternion.vmult(p.shapeOffsets[x], d), d.vadd(p.position, d);
          const M = p.shapes[x];
          if (!(y.collisionFilterMask & M.collisionFilterGroup && M.collisionFilterMask & y.collisionFilterGroup) || h.distanceTo(d) > y.boundingSphereRadius + M.boundingSphereRadius)
            continue;
          let S = null;
          y.material && M.material && (S = n.getContactMaterial(y.material, M.material) || null), this.currentContactMaterial = S || f || n.defaultContactMaterial;
          const C = y.type | M.type, w = this[C];
          if (w) {
            let A = !1;
            y.type < M.type ? A = w.call(this, y, M, h, d, l, a, g, p, y, M, _) : A = w.call(this, M, y, d, h, a, l, p, g, y, M, _), A && _ && (n.shapeOverlapKeeper.set(y.id, M.id), n.bodyOverlapKeeper.set(g.id, p.id));
          }
        }
      }
    }
  }
  sphereSphere(e, t, n, i, s, o, r, l, a, h, d) {
    if (d)
      return n.distanceSquared(i) < (e.radius + t.radius) ** 2;
    const u = this.createContactEquation(r, l, e, t, a, h);
    i.vsub(n, u.ni), u.ni.normalize(), u.ri.copy(u.ni), u.rj.copy(u.ni), u.ri.scale(e.radius, u.ri), u.rj.scale(-t.radius, u.rj), u.ri.vadd(n, u.ri), u.ri.vsub(r.position, u.ri), u.rj.vadd(i, u.rj), u.rj.vsub(l.position, u.rj), this.result.push(u), this.createFrictionEquationsFromContact(u, this.frictionResult);
  }
  spherePlane(e, t, n, i, s, o, r, l, a, h, d) {
    const u = this.createContactEquation(r, l, e, t, a, h);
    if (u.ni.set(0, 0, 1), o.vmult(u.ni, u.ni), u.ni.negate(u.ni), u.ni.normalize(), u.ni.scale(e.radius, u.ri), n.vsub(i, is), u.ni.scale(u.ni.dot(is), Fo), is.vsub(Fo, u.rj), -is.dot(u.ni) <= e.radius) {
      if (d)
        return !0;
      const m = u.ri, g = u.rj;
      m.vadd(n, m), m.vsub(r.position, m), g.vadd(i, g), g.vsub(l.position, g), this.result.push(u), this.createFrictionEquationsFromContact(u, this.frictionResult);
    }
  }
  boxBox(e, t, n, i, s, o, r, l, a, h, d) {
    return e.convexPolyhedronRepresentation.material = e.material, t.convexPolyhedronRepresentation.material = t.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, this.convexConvex(e.convexPolyhedronRepresentation, t.convexPolyhedronRepresentation, n, i, s, o, r, l, e, t, d);
  }
  sphereBox(e, t, n, i, s, o, r, l, a, h, d) {
    const u = this.v3pool, m = Cp;
    n.vsub(i, ss), t.getSideNormals(m, o);
    const g = e.radius;
    let p = !1;
    const f = Rp, _ = Fp, v = Dp;
    let y = null, x = 0, M = 0, S = 0, C = null;
    for (let L = 0, G = m.length; L !== G && p === !1; L++) {
      const U = Ep;
      U.copy(m[L]);
      const N = U.length();
      U.normalize();
      const q = ss.dot(U);
      if (q < N + g && q > 0) {
        const J = Ap, k = Tp;
        J.copy(m[(L + 1) % 3]), k.copy(m[(L + 2) % 3]);
        const ee = J.length(), re = k.length();
        J.normalize(), k.normalize();
        const ge = ss.dot(J), Z = ss.dot(k);
        if (ge < ee && ge > -ee && Z < re && Z > -re) {
          const De = Math.abs(q - N - g);
          if ((C === null || De < C) && (C = De, M = ge, S = Z, y = N, f.copy(U), _.copy(J), v.copy(k), x++, d))
            return !0;
        }
      }
    }
    if (x) {
      p = !0;
      const L = this.createContactEquation(r, l, e, t, a, h);
      f.scale(-g, L.ri), L.ni.copy(f), L.ni.negate(L.ni), f.scale(y, f), _.scale(M, _), f.vadd(_, f), v.scale(S, v), f.vadd(v, L.rj), L.ri.vadd(n, L.ri), L.ri.vsub(r.position, L.ri), L.rj.vadd(i, L.rj), L.rj.vsub(l.position, L.rj), this.result.push(L), this.createFrictionEquationsFromContact(L, this.frictionResult);
    }
    let w = u.get();
    const A = Lp;
    for (let L = 0; L !== 2 && !p; L++)
      for (let G = 0; G !== 2 && !p; G++)
        for (let U = 0; U !== 2 && !p; U++)
          if (w.set(0, 0, 0), L ? w.vadd(m[0], w) : w.vsub(m[0], w), G ? w.vadd(m[1], w) : w.vsub(m[1], w), U ? w.vadd(m[2], w) : w.vsub(m[2], w), i.vadd(w, A), A.vsub(n, A), A.lengthSquared() < g * g) {
            if (d)
              return !0;
            p = !0;
            const N = this.createContactEquation(r, l, e, t, a, h);
            N.ri.copy(A), N.ri.normalize(), N.ni.copy(N.ri), N.ri.scale(g, N.ri), N.rj.copy(w), N.ri.vadd(n, N.ri), N.ri.vsub(r.position, N.ri), N.rj.vadd(i, N.rj), N.rj.vsub(l.position, N.rj), this.result.push(N), this.createFrictionEquationsFromContact(N, this.frictionResult);
          }
    u.release(w), w = null;
    const D = u.get(), B = u.get(), W = u.get(), z = u.get(), F = u.get(), I = m.length;
    for (let L = 0; L !== I && !p; L++)
      for (let G = 0; G !== I && !p; G++)
        if (L % 3 !== G % 3) {
          m[G].cross(m[L], D), D.normalize(), m[L].vadd(m[G], B), W.copy(n), W.vsub(B, W), W.vsub(i, W);
          const U = W.dot(D);
          D.scale(U, z);
          let N = 0;
          for (; N === L % 3 || N === G % 3; )
            N++;
          F.copy(n), F.vsub(z, F), F.vsub(B, F), F.vsub(i, F);
          const q = Math.abs(U), J = F.length();
          if (q < m[N].length() && J < g) {
            if (d)
              return !0;
            p = !0;
            const k = this.createContactEquation(r, l, e, t, a, h);
            B.vadd(z, k.rj), k.rj.copy(k.rj), F.negate(k.ni), k.ni.normalize(), k.ri.copy(k.rj), k.ri.vadd(i, k.ri), k.ri.vsub(n, k.ri), k.ri.normalize(), k.ri.scale(g, k.ri), k.ri.vadd(n, k.ri), k.ri.vsub(r.position, k.ri), k.rj.vadd(i, k.rj), k.rj.vsub(l.position, k.rj), this.result.push(k), this.createFrictionEquationsFromContact(k, this.frictionResult);
          }
        }
    u.release(D, B, W, z, F);
  }
  planeBox(e, t, n, i, s, o, r, l, a, h, d) {
    return t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, t.convexPolyhedronRepresentation.id = t.id, this.planeConvex(e, t.convexPolyhedronRepresentation, n, i, s, o, r, l, e, t, d);
  }
  convexConvex(e, t, n, i, s, o, r, l, a, h, d, u, m) {
    const g = jp;
    if (!(n.distanceTo(i) > e.boundingSphereRadius + t.boundingSphereRadius) && e.findSeparatingAxis(t, n, s, i, o, g, u, m)) {
      const p = [], f = Yp;
      e.clipAgainstHull(n, s, t, i, o, g, -100, 100, p);
      let _ = 0;
      for (let v = 0; v !== p.length; v++) {
        if (d)
          return !0;
        const y = this.createContactEquation(r, l, e, t, a, h), x = y.ri, M = y.rj;
        g.negate(y.ni), p[v].normal.negate(f), f.scale(p[v].depth, f), p[v].point.vadd(f, x), M.copy(p[v].point), x.vsub(n, x), M.vsub(i, M), x.vadd(n, x), x.vsub(r.position, x), M.vadd(i, M), M.vsub(l.position, M), this.result.push(y), _++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(y, this.frictionResult);
      }
      this.enableFrictionReduction && _ && this.createFrictionFromAverage(_);
    }
  }
  sphereConvex(e, t, n, i, s, o, r, l, a, h, d) {
    const u = this.v3pool;
    n.vsub(i, Pp);
    const m = t.faceNormals, g = t.faces, p = t.vertices, f = e.radius;
    let _ = !1;
    for (let v = 0; v !== p.length; v++) {
      const y = p[v], x = Np;
      o.vmult(y, x), i.vadd(x, x);
      const M = zp;
      if (x.vsub(n, M), M.lengthSquared() < f * f) {
        if (d)
          return !0;
        _ = !0;
        const S = this.createContactEquation(r, l, e, t, a, h);
        S.ri.copy(M), S.ri.normalize(), S.ni.copy(S.ri), S.ri.scale(f, S.ri), x.vsub(i, S.rj), S.ri.vadd(n, S.ri), S.ri.vsub(r.position, S.ri), S.rj.vadd(i, S.rj), S.rj.vsub(l.position, S.rj), this.result.push(S), this.createFrictionEquationsFromContact(S, this.frictionResult);
        return;
      }
    }
    for (let v = 0, y = g.length; v !== y && _ === !1; v++) {
      const x = m[v], M = g[v], S = Op;
      o.vmult(x, S);
      const C = Up;
      o.vmult(p[M[0]], C), C.vadd(i, C);
      const w = Gp;
      S.scale(-f, w), n.vadd(w, w);
      const A = kp;
      w.vsub(C, A);
      const D = A.dot(S), B = Wp;
      if (n.vsub(C, B), D < 0 && B.dot(S) > 0) {
        const W = [];
        for (let z = 0, F = M.length; z !== F; z++) {
          const I = u.get();
          o.vmult(p[M[z]], I), i.vadd(I, I), W.push(I);
        }
        if (Sp(W, S, n)) {
          if (d)
            return !0;
          _ = !0;
          const z = this.createContactEquation(r, l, e, t, a, h);
          S.scale(-f, z.ri), S.negate(z.ni);
          const F = u.get();
          S.scale(-D, F);
          const I = u.get();
          S.scale(-f, I), n.vsub(i, z.rj), z.rj.vadd(I, z.rj), z.rj.vadd(F, z.rj), z.rj.vadd(i, z.rj), z.rj.vsub(l.position, z.rj), z.ri.vadd(n, z.ri), z.ri.vsub(r.position, z.ri), u.release(F), u.release(I), this.result.push(z), this.createFrictionEquationsFromContact(z, this.frictionResult);
          for (let L = 0, G = W.length; L !== G; L++)
            u.release(W[L]);
          return;
        } else
          for (let z = 0; z !== M.length; z++) {
            const F = u.get(), I = u.get();
            o.vmult(p[M[(z + 1) % M.length]], F), o.vmult(p[M[(z + 2) % M.length]], I), i.vadd(F, F), i.vadd(I, I);
            const L = Ip;
            I.vsub(F, L);
            const G = Bp;
            L.unit(G);
            const U = u.get(), N = u.get();
            n.vsub(F, N);
            const q = N.dot(G);
            G.scale(q, U), U.vadd(F, U);
            const J = u.get();
            if (U.vsub(n, J), q > 0 && q * q < L.lengthSquared() && J.lengthSquared() < f * f) {
              if (d)
                return !0;
              const k = this.createContactEquation(r, l, e, t, a, h);
              U.vsub(i, k.rj), U.vsub(n, k.ni), k.ni.normalize(), k.ni.scale(f, k.ri), k.rj.vadd(i, k.rj), k.rj.vsub(l.position, k.rj), k.ri.vadd(n, k.ri), k.ri.vsub(r.position, k.ri), this.result.push(k), this.createFrictionEquationsFromContact(k, this.frictionResult);
              for (let ee = 0, re = W.length; ee !== re; ee++)
                u.release(W[ee]);
              u.release(F), u.release(I), u.release(U), u.release(J), u.release(N);
              return;
            }
            u.release(F), u.release(I), u.release(U), u.release(J), u.release(N);
          }
        for (let z = 0, F = W.length; z !== F; z++)
          u.release(W[z]);
      }
    }
  }
  planeConvex(e, t, n, i, s, o, r, l, a, h, d) {
    const u = Vp, m = Hp;
    m.set(0, 0, 1), s.vmult(m, m);
    let g = 0;
    const p = qp;
    for (let f = 0; f !== t.vertices.length; f++)
      if (u.copy(t.vertices[f]), o.vmult(u, u), i.vadd(u, u), u.vsub(n, p), m.dot(p) <= 0) {
        if (d)
          return !0;
        const v = this.createContactEquation(r, l, e, t, a, h), y = Xp;
        m.scale(m.dot(p), y), u.vsub(y, y), y.vsub(n, v.ri), v.ni.copy(m), u.vsub(i, v.rj), v.ri.vadd(n, v.ri), v.ri.vsub(r.position, v.ri), v.rj.vadd(i, v.rj), v.rj.vsub(l.position, v.rj), this.result.push(v), g++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(v, this.frictionResult);
      }
    this.enableFrictionReduction && g && this.createFrictionFromAverage(g);
  }
  boxConvex(e, t, n, i, s, o, r, l, a, h, d) {
    return e.convexPolyhedronRepresentation.material = e.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, this.convexConvex(e.convexPolyhedronRepresentation, t, n, i, s, o, r, l, e, t, d);
  }
  sphereHeightfield(e, t, n, i, s, o, r, l, a, h, d) {
    const u = t.data, m = e.radius, g = t.elementSize, p = om, f = rm;
    Pe.pointToLocalFrame(i, o, n, f);
    let _ = Math.floor((f.x - m) / g) - 1, v = Math.ceil((f.x + m) / g) + 1, y = Math.floor((f.y - m) / g) - 1, x = Math.ceil((f.y + m) / g) + 1;
    if (v < 0 || x < 0 || _ > u.length || y > u[0].length)
      return;
    _ < 0 && (_ = 0), v < 0 && (v = 0), y < 0 && (y = 0), x < 0 && (x = 0), _ >= u.length && (_ = u.length - 1), v >= u.length && (v = u.length - 1), x >= u[0].length && (x = u[0].length - 1), y >= u[0].length && (y = u[0].length - 1);
    const M = [];
    t.getRectMinMax(_, y, v, x, M);
    const S = M[0], C = M[1];
    if (f.z - m > C || f.z + m < S)
      return;
    const w = this.result;
    for (let A = _; A < v; A++)
      for (let D = y; D < x; D++) {
        const B = w.length;
        let W = !1;
        if (t.getConvexTrianglePillar(A, D, !1), Pe.pointToWorldFrame(i, o, t.pillarOffset, p), n.distanceTo(p) < t.pillarConvex.boundingSphereRadius + e.boundingSphereRadius && (W = this.sphereConvex(e, t.pillarConvex, n, p, s, o, r, l, e, t, d)), d && W || (t.getConvexTrianglePillar(A, D, !0), Pe.pointToWorldFrame(i, o, t.pillarOffset, p), n.distanceTo(p) < t.pillarConvex.boundingSphereRadius + e.boundingSphereRadius && (W = this.sphereConvex(e, t.pillarConvex, n, p, s, o, r, l, e, t, d)), d && W))
          return !0;
        if (w.length - B > 2)
          return;
      }
  }
  boxHeightfield(e, t, n, i, s, o, r, l, a, h, d) {
    return e.convexPolyhedronRepresentation.material = e.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, this.convexHeightfield(e.convexPolyhedronRepresentation, t, n, i, s, o, r, l, e, t, d);
  }
  convexHeightfield(e, t, n, i, s, o, r, l, a, h, d) {
    const u = t.data, m = t.elementSize, g = e.boundingSphereRadius, p = im, f = sm, _ = nm;
    Pe.pointToLocalFrame(i, o, n, _);
    let v = Math.floor((_.x - g) / m) - 1, y = Math.ceil((_.x + g) / m) + 1, x = Math.floor((_.y - g) / m) - 1, M = Math.ceil((_.y + g) / m) + 1;
    if (y < 0 || M < 0 || v > u.length || x > u[0].length)
      return;
    v < 0 && (v = 0), y < 0 && (y = 0), x < 0 && (x = 0), M < 0 && (M = 0), v >= u.length && (v = u.length - 1), y >= u.length && (y = u.length - 1), M >= u[0].length && (M = u[0].length - 1), x >= u[0].length && (x = u[0].length - 1);
    const S = [];
    t.getRectMinMax(v, x, y, M, S);
    const C = S[0], w = S[1];
    if (!(_.z - g > w || _.z + g < C))
      for (let A = v; A < y; A++)
        for (let D = x; D < M; D++) {
          let B = !1;
          if (t.getConvexTrianglePillar(A, D, !1), Pe.pointToWorldFrame(i, o, t.pillarOffset, p), n.distanceTo(p) < t.pillarConvex.boundingSphereRadius + e.boundingSphereRadius && (B = this.convexConvex(e, t.pillarConvex, n, p, s, o, r, l, null, null, d, f, null)), d && B || (t.getConvexTrianglePillar(A, D, !0), Pe.pointToWorldFrame(i, o, t.pillarOffset, p), n.distanceTo(p) < t.pillarConvex.boundingSphereRadius + e.boundingSphereRadius && (B = this.convexConvex(e, t.pillarConvex, n, p, s, o, r, l, null, null, d, f, null)), d && B))
            return !0;
        }
  }
  sphereParticle(e, t, n, i, s, o, r, l, a, h, d) {
    const u = Jp;
    if (u.set(0, 0, 1), i.vsub(n, u), u.lengthSquared() <= e.radius * e.radius) {
      if (d)
        return !0;
      const g = this.createContactEquation(l, r, t, e, a, h);
      u.normalize(), g.rj.copy(u), g.rj.scale(e.radius, g.rj), g.ni.copy(u), g.ni.negate(g.ni), g.ri.set(0, 0, 0), this.result.push(g), this.createFrictionEquationsFromContact(g, this.frictionResult);
    }
  }
  planeParticle(e, t, n, i, s, o, r, l, a, h, d) {
    const u = $p;
    u.set(0, 0, 1), r.quaternion.vmult(u, u);
    const m = Zp;
    if (i.vsub(r.position, m), u.dot(m) <= 0) {
      if (d)
        return !0;
      const p = this.createContactEquation(l, r, t, e, a, h);
      p.ni.copy(u), p.ni.negate(p.ni), p.ri.set(0, 0, 0);
      const f = Kp;
      u.scale(u.dot(i), f), i.vsub(f, f), p.rj.copy(f), this.result.push(p), this.createFrictionEquationsFromContact(p, this.frictionResult);
    }
  }
  boxParticle(e, t, n, i, s, o, r, l, a, h, d) {
    return e.convexPolyhedronRepresentation.material = e.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, this.convexParticle(e.convexPolyhedronRepresentation, t, n, i, s, o, r, l, e, t, d);
  }
  convexParticle(e, t, n, i, s, o, r, l, a, h, d) {
    let u = -1;
    const m = em, g = tm;
    let p = null;
    const f = Qp;
    if (f.copy(i), f.vsub(n, f), s.conjugate(Do), Do.vmult(f, f), e.pointIsInside(f)) {
      e.worldVerticesNeedsUpdate && e.computeWorldVertices(n, s), e.worldFaceNormalsNeedsUpdate && e.computeWorldFaceNormals(s);
      for (let _ = 0, v = e.faces.length; _ !== v; _++) {
        const y = [e.worldVertices[e.faces[_][0]]], x = e.worldFaceNormals[_];
        i.vsub(y[0], Po);
        const M = -x.dot(Po);
        if (p === null || Math.abs(M) < Math.abs(p)) {
          if (d)
            return !0;
          p = M, u = _, m.copy(x);
        }
      }
      if (u !== -1) {
        const _ = this.createContactEquation(l, r, t, e, a, h);
        m.scale(p, g), g.vadd(i, g), g.vsub(n, g), _.rj.copy(g), m.negate(_.ni), _.ri.set(0, 0, 0);
        const v = _.ri, y = _.rj;
        v.vadd(i, v), v.vsub(l.position, v), y.vadd(n, y), y.vsub(r.position, y), this.result.push(_), this.createFrictionEquationsFromContact(_, this.frictionResult);
      } else
        console.warn("Point found inside convex, but did not find penetrating face!");
    }
  }
  heightfieldCylinder(e, t, n, i, s, o, r, l, a, h, d) {
    return this.convexHeightfield(t, e, i, n, o, s, l, r, a, h, d);
  }
  particleCylinder(e, t, n, i, s, o, r, l, a, h, d) {
    return this.convexParticle(t, e, i, n, o, s, l, r, a, h, d);
  }
  sphereTrimesh(e, t, n, i, s, o, r, l, a, h, d) {
    const u = hp, m = up, g = dp, p = fp, f = pp, _ = mp, v = xp, y = cp, x = ap, M = yp;
    Pe.pointToLocalFrame(i, o, n, f);
    const S = e.radius;
    v.lowerBound.set(f.x - S, f.y - S, f.z - S), v.upperBound.set(f.x + S, f.y + S, f.z + S), t.getTrianglesInAABB(v, M);
    const C = lp, w = e.radius * e.radius;
    for (let z = 0; z < M.length; z++)
      for (let F = 0; F < 3; F++)
        if (t.getVertex(t.indices[M[z] * 3 + F], C), C.vsub(f, x), x.lengthSquared() <= w) {
          if (y.copy(C), Pe.pointToWorldFrame(i, o, y, C), C.vsub(n, x), d)
            return !0;
          let I = this.createContactEquation(r, l, e, t, a, h);
          I.ni.copy(x), I.ni.normalize(), I.ri.copy(I.ni), I.ri.scale(e.radius, I.ri), I.ri.vadd(n, I.ri), I.ri.vsub(r.position, I.ri), I.rj.copy(C), I.rj.vsub(l.position, I.rj), this.result.push(I), this.createFrictionEquationsFromContact(I, this.frictionResult);
        }
    for (let z = 0; z < M.length; z++)
      for (let F = 0; F < 3; F++) {
        t.getVertex(t.indices[M[z] * 3 + F], u), t.getVertex(t.indices[M[z] * 3 + (F + 1) % 3], m), m.vsub(u, g), f.vsub(m, _);
        const I = _.dot(g);
        f.vsub(u, _);
        let L = _.dot(g);
        if (L > 0 && I < 0 && (f.vsub(u, _), p.copy(g), p.normalize(), L = _.dot(p), p.scale(L, _), _.vadd(u, _), _.distanceTo(f) < e.radius)) {
          if (d)
            return !0;
          const U = this.createContactEquation(r, l, e, t, a, h);
          _.vsub(f, U.ni), U.ni.normalize(), U.ni.scale(e.radius, U.ri), U.ri.vadd(n, U.ri), U.ri.vsub(r.position, U.ri), Pe.pointToWorldFrame(i, o, _, _), _.vsub(l.position, U.rj), Pe.vectorToWorldFrame(o, U.ni, U.ni), Pe.vectorToWorldFrame(o, U.ri, U.ri), this.result.push(U), this.createFrictionEquationsFromContact(U, this.frictionResult);
        }
      }
    const A = gp, D = _p, B = vp, W = op;
    for (let z = 0, F = M.length; z !== F; z++) {
      t.getTriangleVertices(M[z], A, D, B), t.getNormal(M[z], W), f.vsub(A, _);
      let I = _.dot(W);
      if (W.scale(I, _), f.vsub(_, _), I = _.distanceTo(f), $e.pointInTriangle(_, A, D, B) && I < e.radius) {
        if (d)
          return !0;
        let L = this.createContactEquation(r, l, e, t, a, h);
        _.vsub(f, L.ni), L.ni.normalize(), L.ni.scale(e.radius, L.ri), L.ri.vadd(n, L.ri), L.ri.vsub(r.position, L.ri), Pe.pointToWorldFrame(i, o, _, _), _.vsub(l.position, L.rj), Pe.vectorToWorldFrame(o, L.ni, L.ni), Pe.vectorToWorldFrame(o, L.ri, L.ri), this.result.push(L), this.createFrictionEquationsFromContact(L, this.frictionResult);
      }
    }
    M.length = 0;
  }
  planeTrimesh(e, t, n, i, s, o, r, l, a, h, d) {
    const u = new b(), m = ip;
    m.set(0, 0, 1), s.vmult(m, m);
    for (let g = 0; g < t.vertices.length / 3; g++) {
      t.getVertex(g, u);
      const p = new b();
      p.copy(u), Pe.pointToWorldFrame(i, o, p, u);
      const f = sp;
      if (u.vsub(n, f), m.dot(f) <= 0) {
        if (d)
          return !0;
        const v = this.createContactEquation(r, l, e, t, a, h);
        v.ni.copy(m);
        const y = rp;
        m.scale(f.dot(m), y), u.vsub(y, y), v.ri.copy(y), v.ri.vsub(r.position, v.ri), v.rj.copy(u), v.rj.vsub(l.position, v.rj), this.result.push(v), this.createFrictionEquationsFromContact(v, this.frictionResult);
      }
    }
  }
}
const vn = new b(), Kn = new b(), Jn = new b(), Qf = new b(), ep = new b(), tp = new Ze(), np = new Ze(), ip = new b(), sp = new b(), rp = new b(), op = new b(), ap = new b();
new b();
const lp = new b(), cp = new b(), hp = new b(), up = new b(), dp = new b(), fp = new b(), pp = new b(), mp = new b(), gp = new b(), _p = new b(), vp = new b(), xp = new bt(), yp = [], is = new b(), Fo = new b(), wp = new b(), bp = new b(), Mp = new b();
function Sp(c, e, t) {
  let n = null;
  const i = c.length;
  for (let s = 0; s !== i; s++) {
    const o = c[s], r = wp;
    c[(s + 1) % i].vsub(o, r);
    const l = bp;
    r.cross(e, l);
    const a = Mp;
    t.vsub(o, a);
    const h = l.dot(a);
    if (n === null || h > 0 && n === !0 || h <= 0 && n === !1) {
      n === null && (n = h > 0);
      continue;
    } else
      return !1;
  }
  return !0;
}
const ss = new b(), Ep = new b(), Ap = new b(), Tp = new b(), Cp = [new b(), new b(), new b(), new b(), new b(), new b()], Lp = new b(), Rp = new b(), Fp = new b(), Dp = new b(), Pp = new b(), Ip = new b(), Bp = new b(), zp = new b(), Np = new b(), Op = new b(), Up = new b(), Gp = new b(), kp = new b(), Wp = new b();
new b();
new b();
const Vp = new b(), Hp = new b(), qp = new b(), Xp = new b(), jp = new b(), Yp = new b(), $p = new b(), Zp = new b(), Kp = new b(), Jp = new b(), Do = new Ze(), Qp = new b();
new b();
const em = new b(), Po = new b(), tm = new b(), nm = new b(), im = new b(), sm = [0], rm = new b(), om = new b();
class Io {
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
    for (let l = 0; l < s; l++) {
      let a = !1;
      const h = n[l];
      for (; h > i[r]; )
        r++;
      a = h === i[r], a || Bo(e, h);
    }
    r = 0;
    for (let l = 0; l < o; l++) {
      let a = !1;
      const h = i[l];
      for (; h > n[r]; )
        r++;
      a = n[r] === h, a || Bo(t, h);
    }
  }
}
function Bo(c, e) {
  c.push((e & 4294901760) >> 16, e & 65535);
}
const Js = (c, e) => c < e ? `${c}-${e}` : `${e}-${c}`;
class am {
  constructor() {
    this.data = {
      keys: []
    };
  }
  get(e, t) {
    const n = Js(e, t);
    return this.data[n];
  }
  set(e, t, n) {
    const i = Js(e, t);
    this.get(e, t) || this.data.keys.push(i), this.data[i] = n;
  }
  delete(e, t) {
    const n = Js(e, t), i = this.data.keys.indexOf(n);
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
class lm extends ma {
  constructor(e) {
    e === void 0 && (e = {}), super(), this.dt = -1, this.allowSleep = !!e.allowSleep, this.contacts = [], this.frictionEquations = [], this.quatNormalizeSkip = e.quatNormalizeSkip !== void 0 ? e.quatNormalizeSkip : 0, this.quatNormalizeFast = e.quatNormalizeFast !== void 0 ? e.quatNormalizeFast : !1, this.time = 0, this.stepnumber = 0, this.default_dt = 1 / 60, this.nextId = 0, this.gravity = new b(), e.gravity && this.gravity.copy(e.gravity), e.frictionGravity && (this.frictionGravity = new b(), this.frictionGravity.copy(e.frictionGravity)), this.broadphase = e.broadphase !== void 0 ? e.broadphase : new ga(), this.bodies = [], this.hasActiveBodies = !1, this.solver = e.solver !== void 0 ? e.solver : new Xf(), this.constraints = [], this.narrowphase = new Jf(this), this.collisionMatrix = new yo(), this.collisionMatrixPrevious = new yo(), this.bodyOverlapKeeper = new Io(), this.shapeOverlapKeeper = new Io(), this.contactmaterials = [], this.contactMaterialTable = new am(), this.defaultMaterial = new Tn("default"), this.defaultContactMaterial = new An(this.defaultMaterial, this.defaultMaterial, {
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
    n instanceof us ? this.raycastClosest(e, t, {
      skipBackfaces: !0
    }, n) : this.raycastAll(e, t, {
      skipBackfaces: !0
    }, n);
  }
  raycastAll(e, t, n, i) {
    return n === void 0 && (n = {}), n.mode = $e.ALL, n.from = e, n.to = t, n.callback = i, Qs.intersectWorld(this, n);
  }
  raycastAny(e, t, n, i) {
    return n === void 0 && (n = {}), n.mode = $e.ANY, n.from = e, n.to = t, n.result = i, Qs.intersectWorld(this, n);
  }
  raycastClosest(e, t, n, i) {
    return n === void 0 && (n = {}), n.mode = $e.CLOSEST, n.from = e, n.to = t, n.result = i, Qs.intersectWorld(this, n);
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
        const l = this.bodies[r];
        l.previousPosition.lerp(l.position, o, l.interpolatedPosition), l.previousQuaternion.slerp(l.quaternion, o, l.interpolatedQuaternion), l.previousQuaternion.normalize();
      }
      this.time += t;
    }
  }
  internalStep(e) {
    this.dt = e;
    const t = this.contacts, n = fm, i = pm, s = this.bodies.length, o = this.bodies, r = this.solver, l = this.gravity, a = this.doProfiling, h = this.profile, d = ie.DYNAMIC;
    let u = -1 / 0;
    const m = this.constraints, g = dm;
    l.length();
    const p = l.x, f = l.y, _ = l.z;
    let v = 0;
    for (a && (u = Je.now()), v = 0; v !== s; v++) {
      const z = o[v];
      if (z.type === d) {
        const F = z.force, I = z.mass;
        F.x += I * p, F.y += I * f, F.z += I * _;
      }
    }
    for (let z = 0, F = this.subsystems.length; z !== F; z++)
      this.subsystems[z].update();
    a && (u = Je.now()), n.length = 0, i.length = 0, this.broadphase.collisionPairs(this, n, i), a && (h.broadphase = Je.now() - u);
    let y = m.length;
    for (v = 0; v !== y; v++) {
      const z = m[v];
      if (!z.collideConnected)
        for (let F = n.length - 1; F >= 0; F -= 1)
          (z.bodyA === n[F] && z.bodyB === i[F] || z.bodyB === n[F] && z.bodyA === i[F]) && (n.splice(F, 1), i.splice(F, 1));
    }
    this.collisionMatrixTick(), a && (u = Je.now());
    const x = um, M = t.length;
    for (v = 0; v !== M; v++)
      x.push(t[v]);
    t.length = 0;
    const S = this.frictionEquations.length;
    for (v = 0; v !== S; v++)
      g.push(this.frictionEquations[v]);
    for (this.frictionEquations.length = 0, this.narrowphase.getContacts(
      n,
      i,
      this,
      t,
      x,
      this.frictionEquations,
      g
    ), a && (h.narrowphase = Je.now() - u), a && (u = Je.now()), v = 0; v < this.frictionEquations.length; v++)
      r.addEquation(this.frictionEquations[v]);
    const C = t.length;
    for (let z = 0; z !== C; z++) {
      const F = t[z], I = F.bi, L = F.bj, G = F.si, U = F.sj;
      let N;
      if (I.material && L.material ? N = this.getContactMaterial(I.material, L.material) || this.defaultContactMaterial : N = this.defaultContactMaterial, N.friction, I.material && L.material && (I.material.friction >= 0 && L.material.friction >= 0 && I.material.friction * L.material.friction, I.material.restitution >= 0 && L.material.restitution >= 0 && (F.restitution = I.material.restitution * L.material.restitution)), r.addEquation(F), I.allowSleep && I.type === ie.DYNAMIC && I.sleepState === ie.SLEEPING && L.sleepState === ie.AWAKE && L.type !== ie.STATIC) {
        const q = L.velocity.lengthSquared() + L.angularVelocity.lengthSquared(), J = L.sleepSpeedLimit ** 2;
        q >= J * 2 && (I.wakeUpAfterNarrowphase = !0);
      }
      if (L.allowSleep && L.type === ie.DYNAMIC && L.sleepState === ie.SLEEPING && I.sleepState === ie.AWAKE && I.type !== ie.STATIC) {
        const q = I.velocity.lengthSquared() + I.angularVelocity.lengthSquared(), J = I.sleepSpeedLimit ** 2;
        q >= J * 2 && (L.wakeUpAfterNarrowphase = !0);
      }
      this.collisionMatrix.set(I, L, !0), this.collisionMatrixPrevious.get(I, L) || (xi.body = L, xi.contact = F, I.dispatchEvent(xi), xi.body = I, L.dispatchEvent(xi)), this.bodyOverlapKeeper.set(I.id, L.id), this.shapeOverlapKeeper.set(G.id, U.id);
    }
    for (this.emitContactEvents(), a && (h.makeContactConstraints = Je.now() - u, u = Je.now()), v = 0; v !== s; v++) {
      const z = o[v];
      z.wakeUpAfterNarrowphase && (z.wakeUp(), z.wakeUpAfterNarrowphase = !1);
    }
    for (y = m.length, v = 0; v !== y; v++) {
      const z = m[v];
      z.update();
      for (let F = 0, I = z.equations.length; F !== I; F++) {
        const L = z.equations[F];
        r.addEquation(L);
      }
    }
    r.solve(e, this), a && (h.solve = Je.now() - u), r.removeAllEquations();
    const w = Math.pow;
    for (v = 0; v !== s; v++) {
      const z = o[v];
      if (z.type & d) {
        const F = w(1 - z.linearDamping, e), I = z.velocity;
        I.scale(F, I);
        const L = z.angularVelocity;
        if (L) {
          const G = w(1 - z.angularDamping, e);
          L.scale(G, L);
        }
      }
    }
    this.dispatchEvent(hm), a && (u = Je.now());
    const D = this.stepnumber % (this.quatNormalizeSkip + 1) === 0, B = this.quatNormalizeFast;
    for (v = 0; v !== s; v++)
      o[v].integrate(e, D, B);
    this.clearForces(), this.broadphase.dirty = !0, a && (h.integrate = Je.now() - u), this.stepnumber += 1, this.dispatchEvent(cm);
    let W = !0;
    if (this.allowSleep)
      for (W = !1, v = 0; v !== s; v++) {
        const z = o[v];
        z.sleepTick(this.time), z.sleepState !== ie.SLEEPING && (W = !0);
      }
    this.hasActiveBodies = W;
  }
  emitContactEvents() {
    const e = this.hasAnyEventListener("beginContact"), t = this.hasAnyEventListener("endContact");
    if ((e || t) && this.bodyOverlapKeeper.getDiff(Zt, Kt), e) {
      for (let s = 0, o = Zt.length; s < o; s += 2)
        yi.bodyA = this.getBodyById(Zt[s]), yi.bodyB = this.getBodyById(Zt[s + 1]), this.dispatchEvent(yi);
      yi.bodyA = yi.bodyB = null;
    }
    if (t) {
      for (let s = 0, o = Kt.length; s < o; s += 2)
        wi.bodyA = this.getBodyById(Kt[s]), wi.bodyB = this.getBodyById(Kt[s + 1]), this.dispatchEvent(wi);
      wi.bodyA = wi.bodyB = null;
    }
    Zt.length = Kt.length = 0;
    const n = this.hasAnyEventListener("beginShapeContact"), i = this.hasAnyEventListener("endShapeContact");
    if ((n || i) && this.shapeOverlapKeeper.getDiff(Zt, Kt), n) {
      for (let s = 0, o = Zt.length; s < o; s += 2) {
        const r = this.getShapeById(Zt[s]), l = this.getShapeById(Zt[s + 1]);
        Jt.shapeA = r, Jt.shapeB = l, r && (Jt.bodyA = r.body), l && (Jt.bodyB = l.body), this.dispatchEvent(Jt);
      }
      Jt.bodyA = Jt.bodyB = Jt.shapeA = Jt.shapeB = null;
    }
    if (i) {
      for (let s = 0, o = Kt.length; s < o; s += 2) {
        const r = this.getShapeById(Kt[s]), l = this.getShapeById(Kt[s + 1]);
        Qt.shapeA = r, Qt.shapeB = l, r && (Qt.bodyA = r.body), l && (Qt.bodyB = l.body), this.dispatchEvent(Qt);
      }
      Qt.bodyA = Qt.bodyB = Qt.shapeA = Qt.shapeB = null;
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
new bt();
const Qs = new $e(), Je = globalThis.performance || {};
if (!Je.now) {
  let c = Date.now();
  Je.timing && Je.timing.navigationStart && (c = Je.timing.navigationStart), Je.now = () => Date.now() - c;
}
new b();
const cm = {
  type: "postStep"
}, hm = {
  type: "preStep"
}, xi = {
  type: ie.COLLIDE_EVENT_NAME,
  body: null,
  contact: null
}, um = [], dm = [], fm = [], pm = [], Zt = [], Kt = [], yi = {
  type: "beginContact",
  bodyA: null,
  bodyB: null
}, wi = {
  type: "endContact",
  bodyA: null,
  bodyB: null
}, Jt = {
  type: "beginShapeContact",
  bodyA: null,
  bodyB: null,
  shapeA: null,
  shapeB: null
}, Qt = {
  type: "endShapeContact",
  bodyA: null,
  bodyB: null,
  shapeA: null,
  shapeB: null
};
class zo {
  constructor(e) {
    typeof e == "object" && (e = e.notation), this.set = [], this.setkeys = [], this.setid = 0, this.groups = [], this.totalDice = 0, this.op = "", this.constant = null, this.result = [], this.error = !1, this.boost = 1, this.notation = "", this.vectors = [], (!e || e == "0") && (this.error = !0), this.parseNotation(e);
  }
  parseNotation(e) {
    if (e) {
      let u = e.split("!").length - 1 || 0;
      u > 0 && (this.boost = Math.min(Math.max(u, 0), 3) * 4), e = e.split("!").join(""), e = e.split(" ").join("");
      let m = e.split("(").length - 1, g = e.split(")").length - 1;
      m != g && (this.error = !0);
    }
    const t = this.notation.length > 0 ? "+" : "";
    this.notation += t + e;
    let n = e.split("@"), i = n[0], s = new RegExp(/(\+|\-|\*|\/|\%|\^|){0,1}()(\d*)([a-z]+\d+|[a-z]+|)(?:\{([a-z]+)(.*?|)\}|)()/, "i"), o = new RegExp(/(\b)*(\-\d+|\d+)(\b)*/, "gi"), r, l = 0, a = 30, h = 0, d = 0;
    for (; !this.error && i.length > 0 && (r = s.exec(i)) !== null && l < a; ) {
      l++, i = i.substring(r[0].length);
      let u = r[1], m = r[2] && r[2].length > 0, g = r[3], p = r[4], f = r[5] || "", _ = r[6] || "", v = r[7] && r[7].length > 0, y = !0;
      m && (h += r[2].length), _ = _.split(","), (!_ || _.length < 1) && (_ = ""), _.shift(), l == 1 && i.length == 0 && !p && u && g ? (p = "d20", this.op = u, this.constant = parseInt(g), g = 1) : l > 1 && i.length == 0 && !p && (this.op = u, this.constant = parseInt(g), y = !1), y && this.addSet(g, p, d, h, f, _, u), v && (h -= r[7].length, d += r[7].length);
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
    let l = r + "" + t + n + i + s + o, a = this.setkeys[l] != null, h = {};
    a && (h = this.set[this.setkeys[l] - 1]), e > 0 && (h.num = a ? e + h.num : e, h.type = t, h.sid = this.setid, h.gid = n, h.glvl = i, s && (h.func = s), o && (h.args = o), r && (h.op = r), a ? this.set[this.setkeys[l] - 1] = h : this.setkeys[l] = this.set.push(h)), a || ++this.setid;
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
const er = {
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
}, At = {
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
}, mm = {
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
class gm {
  constructor(e) {
    if (!er.hasOwnProperty(e))
      return console.error("dice type unavailable");
    Object.assign(this, mm, er[e]), this.shape = er[e].type || e, this.type = e, this.setLabels(this.labels), this.setValues(this.values[0], this.values[1], this.values[2]), this.setValueMap(this.valueMap), this.bumpMaps && this.setBumpMaps(this.bumpMaps);
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
    let i = 0, s = e.length, o = /\.(PNG|JPG|GIF|WEBP)$/i, r = Array(e.length), l = !1;
    for (let a = 0; a < s; a++) {
      if (e[a] == "" || !e[a].match(o)) {
        r[a] = e[a], ++i;
        continue;
      }
      l = !0, r[a] = new Image(), r[a].onload = function() {
        ++i >= s && t(r, n);
      }, r[a].src = e[a];
    }
    l || t(r, n);
  }
  range(e, t, n = 1) {
    for (var i = [e], s = e; s < t; )
      i.push(s += n || 1);
    return i;
  }
}
const tr = {
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
};
function Sa(c) {
  return Math.min(Math.max(Number(c) || 0, 0), 1);
}
function _m(c, e, t) {
  return !(t > 0) || !(c != null && c.emissive) || !e ? !1 : (c.emissiveMap = e, c.emissive = new xe(16777215), c.emissiveIntensity = t, !0);
}
function vm(c, e = null, t = 1) {
  const n = (e == null ? void 0 : e.composite) === "destination-in" || t < 1;
  return c.opacity = t, c.transparent = n, c.depthTest = !0, c.depthWrite = !n || t >= 0.5, c.needsUpdate = !0, c;
}
const xm = 180;
class ym {
  constructor(e = xm) {
    this.maxEntries = Math.max(1, e), this.map = /* @__PURE__ */ new Map();
  }
  get size() {
    return this.map.size;
  }
  get(e) {
    if (!this.map.has(e))
      return null;
    const t = this.map.get(e);
    return this.map.delete(e), this.map.set(e, t), t;
  }
  set(e, t) {
    if (this.map.has(e)) {
      const n = this.map.get(e);
      this.map.delete(e), n !== t && nr(n);
    }
    for (this.map.set(e, t); this.map.size > this.maxEntries; ) {
      const n = this.map.keys().next().value, i = this.map.get(n);
      this.map.delete(n), nr(i);
    }
  }
  clear() {
    for (const e of this.map.values())
      nr(e);
    this.map.clear();
  }
}
function nr(c) {
  var e, t, n, i, s, o;
  !c || typeof c != "object" || ((t = (e = c.composite) == null ? void 0 : e.dispose) == null || t.call(e), (i = (n = c.bump) == null ? void 0 : n.dispose) == null || i.call(n), (o = (s = c.glow) == null ? void 0 : s.dispose) == null || o.call(s));
}
function No(c) {
  var t, n, i, s, o, r;
  if (!c)
    return;
  const e = Array.isArray(c.material) ? c.material : c.material ? [c.material] : [];
  for (const l of e)
    (t = l == null ? void 0 : l.dispose) == null || t.call(l);
  c.customDepthMaterial && ((i = (n = c.customDepthMaterial).dispose) == null || i.call(n), c.customDepthMaterial = null), ((s = c.userData) == null ? void 0 : s.clonedGeometry) && c.geometry && ((r = (o = c.geometry).dispose) == null || r.call(o), c.userData.clonedGeometry = !1);
}
const Oo = {
  serif: "bold {size}pt Georgia, 'Palatino Linotype', 'Times New Roman', serif",
  sans: "bold {size}pt 'Trebuchet MS', 'Segoe UI', Arial, sans-serif",
  mono: "bold {size}pt 'Cascadia Mono', Consolas, 'Courier New', monospace",
  display: "700 {size}pt 'Cinzel', 'Trajan Pro', Georgia, serif",
  classic: "{size}pt Arial, sans-serif"
};
function ir(c, e, t) {
  const n = Math.max(1, Number(t) || 16), i = String(c || "").trim().toLowerCase();
  return i && Oo[i] ? Oo[i].replace("{size}", String(n)) : i ? `${n}pt ${String(c).trim()}` : `${n}pt ${e || "Arial"}`;
}
function wm(c) {
  if (!c)
    return "";
  const e = c.edge;
  return (Array.isArray(e) ? e.length > 0 : Boolean(e && String(e).trim())) ? e : c.background;
}
const Ea = ["swirl", "marble_vein", "nebula", "hammered", "magma"];
function bm(c) {
  let e = Number(c) | 0 || 1;
  return () => {
    e = e + 1831565813 | 0;
    let t = Math.imul(e ^ e >>> 15, 1 | e);
    return t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t, ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function Mm(c) {
  if (!c)
    return null;
  const e = typeof c == "string" ? c : c.procedural || c.name || "", t = String(e).toLowerCase();
  return Ea.includes(t) ? t : null;
}
function Sm(c, { ctx: e, bumpCtx: t = null, glowCtx: n = null, size: i, seed: s = 1, accent: o = "#ffffff" }) {
  var l, a, h, d, u, m, g;
  if (!e || !(i > 0) || !Ea.includes(c))
    return !1;
  const r = bm(s * 7919 + c.length * 131);
  if (e.save(), (l = t == null ? void 0 : t.save) == null || l.call(t), (a = n == null ? void 0 : n.save) == null || a.call(n), c === "swirl") {
    const p = r() * Math.PI * 2, f = i * (0.35 + r() * 0.3), _ = i * (0.35 + r() * 0.3);
    for (let y = 0; y < 14; y += 1) {
      const x = p + y * 0.45;
      e.beginPath();
      const M = y / 14 * i;
      e.moveTo(-i * 0.1, M);
      for (let S = 0; S <= i * 1.1; S += i / 8) {
        const C = Math.sin(S / i * Math.PI * 2.5 + x) * i * 0.09, w = Math.cos(M / i * Math.PI * 2 + x) * i * 0.05;
        e.lineTo(S, M + C + w);
      }
      e.strokeStyle = y % 2 === 0 ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.16)", e.lineWidth = i * (0.04 + r() * 0.05), e.lineCap = "round", e.stroke();
    }
    const v = e.createRadialGradient(f, _, i * 0.04, f, _, i * 0.55);
    v.addColorStop(0, "rgba(255,255,255,0.22)"), v.addColorStop(1, "rgba(0,0,0,0.12)"), e.fillStyle = v, e.fillRect(0, 0, i, i);
  } else if (c === "marble_vein") {
    for (let p = 0; p < 6; p += 1) {
      const f = r() * i, _ = r() * i, v = e.createRadialGradient(f, _, 0, f, _, i * (0.28 + r() * 0.3));
      v.addColorStop(0, p % 2 === 0 ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.10)"), v.addColorStop(1, "rgba(0,0,0,0)"), e.fillStyle = v, e.fillRect(0, 0, i, i);
    }
    for (let p = 0; p < 7; p += 1) {
      let f = r() * i, _ = p % 2 === 0 ? 0 : r() * i;
      const v = (r() - 0.5) * i * 0.14, y = i / 10;
      e.beginPath(), (h = t == null ? void 0 : t.beginPath) == null || h.call(t), e.moveTo(f, _), (d = t == null ? void 0 : t.moveTo) == null || d.call(t, f, _);
      for (let M = 0; M < 12; M += 1)
        f += v + (r() - 0.5) * i * 0.12, _ += y * (0.6 + r() * 0.7), e.lineTo(f, _), (u = t == null ? void 0 : t.lineTo) == null || u.call(t, f, _);
      const x = Math.max(1, i * (4e-3 + r() * 0.01));
      e.strokeStyle = p % 3 === 0 ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.22)", e.lineWidth = x, e.stroke(), t && (t.strokeStyle = "rgba(180,180,180,0.6)", t.lineWidth = x, t.stroke());
    }
  } else if (c === "nebula") {
    for (let p = 0; p < 6; p += 1) {
      const f = r() * i, _ = r() * i, v = i * (0.22 + r() * 0.36), y = e.createRadialGradient(f, _, 0, f, _, v), x = p % 3 === 0 ? "rgba(170,120,255,0.24)" : p % 3 === 1 ? "rgba(90,190,255,0.20)" : "rgba(255,120,200,0.18)";
      y.addColorStop(0, x), y.addColorStop(1, "rgba(0,0,0,0)"), e.fillStyle = y, e.fillRect(0, 0, i, i);
    }
    for (let p = 0; p < 55; p += 1) {
      const f = r() * i, _ = r() * i, v = Math.max(0.7, i * (25e-4 + r() * 7e-3)), y = 0.45 + r() * 0.55;
      e.fillStyle = `rgba(255,255,255,${y.toFixed(2)})`, e.beginPath(), e.arc(f, _, v, 0, Math.PI * 2), e.fill(), n && p < 18 && (n.fillStyle = `rgba(210,225,255,${(y * 0.7).toFixed(2)})`, n.beginPath(), n.arc(f, _, v * 1.1, 0, Math.PI * 2), n.fill());
    }
  } else if (c === "hammered")
    for (let f = 0; f < 48; f += 1) {
      const _ = r() * i, v = r() * i, y = i * (0.06 + r() * 0.09), x = e.createRadialGradient(_ - y * 0.25, v - y * 0.25, y * 0.05, _, v, y);
      if (x.addColorStop(0, "rgba(255,255,255,0.16)"), x.addColorStop(0.65, "rgba(0,0,0,0.08)"), x.addColorStop(1, "rgba(0,0,0,0)"), e.fillStyle = x, e.beginPath(), e.arc(_, v, y, 0, Math.PI * 2), e.fill(), t) {
        const M = t.createRadialGradient(_, v, 0, _, v, y);
        M.addColorStop(0, "rgba(130,130,130,0.75)"), M.addColorStop(0.8, "rgba(235,235,235,0.35)"), M.addColorStop(1, "rgba(255,255,255,0)"), t.fillStyle = M, t.beginPath(), t.arc(_, v, y, 0, Math.PI * 2), t.fill();
      }
    }
  else if (c === "magma") {
    e.fillStyle = "rgba(18,8,6,0.35)", e.fillRect(0, 0, i, i);
    for (let p = 0; p < 9; p += 1) {
      let f = r() * i, _ = r() * i;
      const v = [[f, _]];
      for (let x = 0; x < 7; x += 1)
        f += (r() - 0.5) * i * 0.24, _ += (r() - 0.5) * i * 0.24, v.push([f, _]);
      const y = (x, M, S) => {
        !x || (x.beginPath(), v.forEach(([C, w], A) => A === 0 ? x.moveTo(C, w) : x.lineTo(C, w)), x.strokeStyle = M, x.lineWidth = S, x.lineCap = "round", x.lineJoin = "round", x.stroke());
      };
      y(e, "rgba(255,95,20,0.55)", i * 0.028), y(e, o || "#ffd15c", i * 0.011), y(t, "rgba(40,40,40,0.9)", i * 0.024), y(n, "rgba(255,115,25,0.85)", i * 0.02);
    }
  }
  return e.restore(), (m = t == null ? void 0 : t.restore) == null || m.call(t), (g = n == null ? void 0 : n.restore) == null || g.call(n), !0;
}
const Aa = {
  gem: { color: 16777215, strength: 0.28, power: 2.8, mode: 0 },
  fire: { color: 16739098, strength: 0.48, power: 2.2, mode: 1 },
  frost: { color: 12578815, strength: 0.46, power: 2.4, mode: 2 },
  storm: { color: 16770155, strength: 0.52, power: 2.5, mode: 3 },
  arcane: { color: 13666559, strength: 0.46, power: 2.3, mode: 4 }
};
function Em(c, e) {
  const t = String(c || "").trim().toLowerCase();
  return t && Aa[t] ? t : t === "none" ? null : e === "glass" ? "gem" : null;
}
function Am() {
  const c = [
    "uniform float uLwTime;",
    "uniform vec3 uLwRimColor;",
    "uniform float uLwRimStrength;",
    "uniform float uLwRimPower;",
    "uniform float uLwEffectMode;"
  ].join(`
`), e = [
    "{",
    "  vec3 lwViewDir = normalize(vViewPosition);",
    "  float lwNdotV = clamp(abs(dot(normalize(normal), lwViewDir)), 0.0, 1.0);",
    "  float lwFresnel = pow(1.0 - lwNdotV, uLwRimPower);",
    "  vec3 lwTint = uLwRimColor;",
    "  float lwMod = 1.0;",
    "  if (uLwEffectMode > 0.5 && uLwEffectMode < 1.5) {",
    "    lwMod = 0.72 + 0.35 * sin(uLwTime * 5.2 + vViewPosition.x * 0.04);",
    "  } else if (uLwEffectMode >= 1.5 && uLwEffectMode < 2.5) {",
    "    lwMod = 0.85 + 0.18 * cos(uLwTime * 2.4 + lwNdotV * 6.0);",
    "  } else if (uLwEffectMode >= 2.5 && uLwEffectMode < 3.5) {",
    "    float lwFlash = pow(max(0.0, sin(uLwTime * 7.5)), 8.0);",
    "    lwMod = 0.55 + 0.95 * lwFlash;",
    "  } else if (uLwEffectMode >= 3.5) {",
    "    float lwShift = 0.5 + 0.5 * sin(uLwTime * 2.8 + lwNdotV * 4.0);",
    "    lwTint = mix(uLwRimColor, vec3(0.45, 0.85, 1.0), lwShift * 0.45);",
    "    lwMod = 0.8 + 0.25 * lwShift;",
    "  }",
    "  gl_FragColor.rgb += lwTint * lwFresnel * uLwRimStrength * lwMod * gl_FragColor.a;",
    "}"
  ].join(`
`);
  return { declarations: c, body: e };
}
function Tm(c, e, t, n = null) {
  const i = e ? Aa[e] : null;
  if (!i || !c || typeof c != "object")
    return !1;
  const s = new xe(n || i.color), { declarations: o, body: r } = Am(), l = c.onBeforeCompile;
  return c.customProgramCacheKey = () => `lw-dice-effect-${e}`, c.onBeforeCompile = (a, h) => {
    typeof l == "function" && l.call(c, a, h), a.uniforms.uLwTime = t, a.uniforms.uLwRimColor = { value: s }, a.uniforms.uLwRimStrength = { value: i.strength }, a.uniforms.uLwRimPower = { value: i.power }, a.uniforms.uLwEffectMode = { value: i.mode }, a.fragmentShader = a.fragmentShader.replace("void main() {", `${o}
void main() {`).replace("#include <dithering_fragment>", `${r}
#include <dithering_fragment>`);
  }, c.userData = { ...c.userData || {}, lwEffect: e }, !0;
}
const Cm = {
  baseScale: 100,
  bumpMapping: !0
}, ti = class {
  constructor(e) {
    this.geometries = {}, this.materials_cache = new ym(), this.cache_hits = 0, this.cache_misses = 0, this.label_color = "", this.dice_color = "", this.edge_color = "", this.label_outline = "", this.label_font = "", this.dice_texture = "", this.dice_material = "", this.dice_effect = "", this.shaderTime = { value: 0 }, this.material_options = {
      specular: 16777215,
      color: 11908533,
      shininess: 5,
      flatShading: !0
    }, Object.assign(this, Cm, e);
  }
  updateConfig(e = {}) {
    var n;
    const t = (n = e.baseScale) != null ? n : e.scale;
    Object.assign(this, e), t && t !== this._builtScale && (this.baseScale = t, this.scaleGeometry());
  }
  setBumpMapping(e) {
    this.bumpMapping = e, this.materials_cache.clear();
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
    if (o || (o = this.createGeometry(i.shape, i.scale * this.baseScale), this.geometries[e] = o, this._builtScale = this.baseScale), !o)
      return null;
    this.setMaterialInfo();
    let r = new ke(o, this.createMaterials(s, this.baseScale / 2, 1));
    switch (r.result = [], r.shape = i.shape, r.rerolls = 0, r.resultReason = "natural", r.mass = i.mass, r.getFaceValue = function() {
      let l = this.resultReason, a = new P(0, 0, this.shape == "d4" ? -1 : 1), h, d = Math.PI * 2, u = this.geometry.getAttribute("normal").array;
      for (let v = 0, y = this.geometry.groups.length; v < y; ++v) {
        let x = this.geometry.groups[v];
        if (x.materialIndex == 0)
          continue;
        let M = v * 9, C = new P(u[M], u[M + 1], u[M + 2]).clone().applyQuaternion(this.body.quaternion).angleTo(a);
        C < d && (d = C, h = x);
      }
      let m = h.materialIndex - 1, g = 2;
      const p = ti.dice[this.notation.type];
      if (this.shape == "d4") {
        let v = m - 1 == 0 ? 5 : m;
        return { value: m, label: p.labels[m - 1][v][0], reason: l };
      }
      ["d10", "d2"].includes(this.shape) && (m += 1, g -= 1);
      let f = p.values[(m - 1) % p.values.length], _ = p.labels[(m - 1) % (p.labels.length - 2) + g];
      return { value: f, label: _, reason: l };
    }, r.storeRolledValue = function(l) {
      this.resultReason = l || this.resultReason, this.result.push(this.getFaceValue());
    }, r.getLastValue = function() {
      return !this.result || this.result.length < 1 ? { value: void 0, label: "", reason: "" } : this.result[this.result.length - 1];
    }, r.ignoreLastValue = function(l) {
      let a = this.getLastValue();
      a.value !== void 0 && (a.ignore = l, this.setLastValue(a));
    }, r.setLastValue = function(l) {
      if (!(!this.result || this.result.length < 1) && !(!l || l.length < 1))
        return this.result[this.result.length - 1] = l;
    }, i.color && (r.material[0].color = new xe(i.color), r.material[0].emissive = new xe(i.color), r.material[0].emissiveIntensity = 1, r.material[0].needsUpdate = !0), i.values.length) {
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
    return ti.dice.hasOwnProperty(e) ? t = ti.dice[e] : (t = new gm(e), ti.dice[e] = t), t;
  }
  getGeometry(e) {
    return this.geometries[e];
  }
  scaleGeometry() {
    Object.values(this.geometries).forEach((e) => {
      var t;
      return (t = e == null ? void 0 : e.dispose) == null ? void 0 : t.call(e);
    }), this.geometries = {}, this._builtScale = this.baseScale;
  }
  createMaterials(e, t, n, i = !0, s = 0) {
    var h, d, u, m;
    let o = [], r = e.labels;
    e.shape == "d4" && (r = e.labels[s], t = this.baseScale / 2, n = this.baseScale * 2);
    for (var l = 0; l < r.length; ++l) {
      var a;
      if (this.dice_material != "none") {
        a = new pr(tr[this.dice_material]), a.envMapIntensity = ((d = (h = tr[this.dice_material]) == null ? void 0 : h.envMapIntensity) != null ? d : 1) * (this.shine || 0);
        const p = Em(this.dice_effect, this.dice_material);
        p && Tm(a, p, this.shaderTime, ((u = this.colordata) == null ? void 0 : u.light) || null);
      } else
        a = new zd(this.material_options);
      let g;
      if (l == 0) {
        let p = { name: "none" };
        !(this.edge_color_rand && this.edge_color_rand !== this.dice_color_rand) && this.dice_texture_rand.composite != "source-over" && (p = this.dice_texture_rand), g = this.createTextMaterial(e, r, l, t, n, p, this.label_color_rand, this.label_outline_rand, this.edge_color_rand, i), a.map = g.composite, this.applyGlow(a, g);
      } else {
        g = this.createTextMaterial(e, r, l, t, n, this.dice_texture_rand, this.label_color_rand, this.label_outline_rand, this.dice_color_rand, i), a.map = g.composite;
        const p = ((m = tr[this.dice_material]) == null ? void 0 : m.metalness) || 0;
        if (this.label_glow > 0 && p > 0 && g.glow && a.emissive && (a.emissiveMap = g.glow, a.emissive = new xe(16777215), a.emissiveIntensity = this.label_glow * p), this.applyGlow(a, g), this.bumpMapping) {
          {
            let f = 0.75;
            t > 35 && (f = 1), t > 40 && (f = 2.5), t > 45 && (f = 4), a.bumpScale = f;
          }
          g.bump && (a.bumpMap = g.bump), e.shape != "d4" && e.normals[l] && (a.bumpMap = new wt(e.normals[l]), a.bumpScale = 4, a.bumpMap.needsUpdate = !0);
        }
      }
      vm(a, l === 0 && this.dice_texture_rand.composite !== "source-over" ? this.dice_texture_rand : l === 0 ? null : this.dice_texture_rand, 1), o.push(a);
    }
    return o;
  }
  createTextMaterial(e, t, n, i, s, o, r, l, a, h) {
    if (t[n] === void 0)
      return null;
    o = o || this.dice_texture_rand, r = r || this.label_color_rand, l = l || this.label_outline_rand, a = a || this.dice_color_rand, h = h == null ? !0 : h;
    let d = t[n], u = !1, m = d;
    d instanceof HTMLImageElement ? m = d.src : d instanceof Array && d.forEach((F) => {
      m += F.src;
    });
    const g = this.label_font || e.font || "";
    let p = e.type + m + n + o.name + r + l + a + g;
    e.shape == "d4" && (p = e.type + m + o.name + r + l + a + g);
    const f = h ? this.materials_cache.get(p) : null;
    if (f != null)
      return this.cache_hits++, f;
    let _ = document.createElement("canvas"), v = _.getContext("2d", { alpha: !0 });
    v.globalAlpha = 0, v.clearRect(0, 0, _.width, _.height);
    let y = document.createElement("canvas"), x = y.getContext("2d", { alpha: !0 });
    x.globalAlpha = 0, x.clearRect(0, 0, y.width, y.height);
    let M = document.createElement("canvas"), S = M.getContext("2d", { alpha: !1 }), C;
    e.shape == "d4" ? C = this.calc_texture_size(i + s) * 4 : C = this.calc_texture_size(i + i * 2 * s) * 4, _.width = _.height = C, y.width = y.height = C, M.width = M.height = C, S.fillStyle = "#000000", S.fillRect(0, 0, C, C), v.fillStyle = a, v.fillRect(0, 0, _.width, _.height), x.fillStyle = "#FFFFFF", x.fillRect(0, 0, y.width, y.height);
    const w = Mm(o);
    if (w ? (Sm(w, { ctx: v, bumpCtx: x, glowCtx: S, size: _.width, seed: n + 1, accent: r }), v.globalCompositeOperation = "source-over") : o.texture && o.name != "" && o.name != "none" ? (v.globalCompositeOperation = o.composite || "source-over", v.drawImage(o.texture, 0, 0, _.width, _.height), v.globalCompositeOperation = "source-over", o.bump && (x.globalCompositeOperation = "source-over", x.drawImage(o.bump, 0, 0, _.width, _.height))) : v.globalCompositeOperation = "source-over", v.globalCompositeOperation = "source-over", v.textAlign = "center", v.textBaseline = "middle", x.textAlign = "center", x.textBaseline = "middle", S.textAlign = "center", S.textBaseline = "middle", e.shape != "d4") {
      let I = {
        d8: { even: -7.5, odd: -127.5 },
        d10: { all: -6 },
        d12: { all: 5 },
        d20: { all: -7.5 }
      }[e.shape];
      if (I) {
        let L;
        if (I.hasOwnProperty("all") ? L = I.all : n > 0 && n % 2 != 0 ? L = I.odd : L = I.even, L && L != 0) {
          var A = _.width / 2, D = _.height / 2;
          v.translate(A, D), v.rotate(L * (Math.PI / 180)), v.translate(-A, -D), x.translate(A, D), x.rotate(L * (Math.PI / 180)), x.translate(-A, -D), S.translate(A, D), S.rotate(L * (Math.PI / 180)), S.translate(-A, -D);
        }
      }
      if (d instanceof HTMLImageElement)
        u = !0, v.drawImage(d, 0, 0, d.width, d.height, 0, 0, _.width, _.height);
      else {
        let L = C / (1 + 2 * s), G = _.height / 2 + 10, U = _.width / 2;
        e.shape == "d10" ? (L = L * 0.75, G = G * 1.15 - 10) : e.shape == "d20" && (U = U * 0.98);
        const N = ir(this.label_font, e.font, L);
        v.font = N, x.font = N, S.font = N;
        let q = v.measureText("M").width * 1.4, J = d.split(`
`);
        if (J.length > 1) {
          L = L / J.length;
          const k = ir(this.label_font, e.font, L);
          v.font = k, x.font = k, S.font = k, q = v.measureText("M").width * 1.2, G -= q * J.length / 2;
        }
        for (let k = 0, ee = J.length; k < ee; k++) {
          let re = J[k].trim();
          l != "none" && l != a && (v.strokeStyle = l, v.lineWidth = 5, v.strokeText(J[k], U, G), x.strokeStyle = "#000000", x.lineWidth = 5, x.strokeText(J[k], U, G), (re == "6" || re == "9") && (v.strokeText("  .", U, G), x.strokeText("  .", U, G))), v.fillStyle = r, v.fillText(J[k], U, G), x.fillStyle = "#000000", x.fillText(J[k], U, G), S.fillStyle = r, S.fillText(J[k], U, G), (re == "6" || re == "9") && (v.fillText("  .", U, G), x.fillText("  .", U, G), S.fillText("  .", U, G)), G += q * 1.5;
        }
      }
    } else {
      var A = _.width / 2, D = _.height / 2;
      const L = ir(this.label_font, e.font, C / 128 * 24);
      v.font = L, x.font = L, S.font = L;
      for (let G = 0; G < d.length; G++) {
        if (d[G] instanceof HTMLImageElement) {
          let U = d[G].width / _.width;
          v.drawImage(d[G], 0, 0, d[G].width, d[G].height, 100 / U, 25 / U, 60 / U, 60 / U);
        } else
          l != "none" && l != a && (v.strokeStyle = l, v.lineWidth = 5, v.strokeText(d[G], A, D - C * 0.3), x.strokeStyle = "#000000", x.lineWidth = 5, x.strokeText(d[G], A, D - C * 0.3)), v.fillStyle = r, v.fillText(d[G], A, D - C * 0.3), x.fillStyle = "#000000", x.fillText(d[G], A, D - C * 0.3), S.fillStyle = r, S.fillText(d[G], A, D - C * 0.3);
        v.translate(A, D), v.rotate(Math.PI * 2 / 3), v.translate(-A, -D), x.translate(A, D), x.rotate(Math.PI * 2 / 3), x.translate(-A, -D), S.translate(A, D), S.rotate(Math.PI * 2 / 3), S.translate(-A, -D);
      }
    }
    var B = new Mi(_), W;
    u ? W = null : W = new Mi(y);
    var z = new Mi(M);
    return h && (this.cache_misses++, this.materials_cache.set(p, { composite: B, bump: W, glow: z })), { composite: B, bump: W, glow: z };
  }
  applyColorSet(e) {
    var t;
    this.colordata = e, this.label_color = e.foreground, this.dice_color = e.background, this.label_outline = e.outline, this.label_font = e.font || "", this.dice_texture = e.texture, this.dice_material = ((t = e == null ? void 0 : e.texture) == null ? void 0 : t.material) || "none", this.edge_color = wm(e), this.dice_glow = Sa(e.glow), this.dice_effect = e.effect || "";
  }
  applyGlow(e, t) {
    _m(e, t == null ? void 0 : t.composite, this.dice_glow);
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
        var s = new vr(1 * t, 1 * t, 0.1 * t, 32);
        return s.cannon_shape = new Hf(1 * t, 1 * t, 0.1 * t, 8), s;
      case "d4":
        return this[i](At.d4.vertices, At.d4.faces, t, -0.1, Math.PI * 7 / 6, 0.96);
      case "d6":
        return this[i](At.d6.vertices, At.d6.faces, t, 0.1, Math.PI / 4, 0.96);
      case "d8":
        return this[i](At.d8.vertices, At.d8.faces, t, 0, -Math.PI / 4 / 2, 0.965);
      case "d10":
        return this[i](At.d10.vertices, At.d10.faces, t, 0.3, Math.PI, 0.945);
      case "d12":
        return this[i](At.d12.vertices, At.d12.faces, t, 0.2, -Math.PI / 4 / 2, 0.968);
      case "d20":
        return this[i](At.d20.vertices, At.d20.faces, t, -0.2, -Math.PI / 4 / 2, 0.955);
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
      i[s] = new P().fromArray(e[s]).normalize();
    for (var o = new Array(e.length), r = new Array(t.length), s = 0; s < i.length; ++s) {
      var l = i[s];
      o[s] = new b(l.x * n, l.y * n, l.z * n);
    }
    for (var s = 0; s < t.length; ++s)
      r[s] = t[s].slice(0, t[s].length - 1);
    return new En({ vertices: o, faces: r });
  }
  make_geom(e, t, n, i, s) {
    let o = new pt();
    for (let g = 0; g < e.length; ++g)
      e[g] = e[g].multiplyScalar(n);
    let r = [];
    const l = [], a = [], h = new P(), d = new P();
    let u, m = 0;
    for (let g = 0; g < t.length; ++g) {
      let p = t[g], f = p.length - 1, _ = Math.PI * 2 / f;
      u = p[f] + 1;
      for (let y = 0; y < f - 2; ++y)
        r.push(...e[p[0]].toArray()), r.push(...e[p[y + 1]].toArray()), r.push(...e[p[y + 2]].toArray()), h.subVectors(e[p[y + 2]], e[p[y + 1]]), d.subVectors(e[p[0]], e[p[y + 1]]), h.cross(d), h.normalize(), l.push(...h.toArray()), l.push(...h.toArray()), l.push(...h.toArray()), a.push((Math.cos(s) + 1 + i) / 2 / (1 + i), (Math.sin(s) + 1 + i) / 2 / (1 + i)), a.push((Math.cos(_ * (y + 1) + s) + 1 + i) / 2 / (1 + i), (Math.sin(_ * (y + 1) + s) + 1 + i) / 2 / (1 + i)), a.push((Math.cos(_ * (y + 2) + s) + 1 + i) / 2 / (1 + i), (Math.sin(_ * (y + 2) + s) + 1 + i) / 2 / (1 + i));
      let v = (f - 2) * 3;
      for (let y = 0; y < v / 3; y++)
        o.addGroup(m, 3, u), m += 3;
    }
    return o.setAttribute("position", new ot(r, 3)), o.setAttribute("normal", new ot(l, 3)), o.setAttribute("uv", new ot(a, 2)), o.boundingSphere = new ni(new P(), n), o;
  }
  make_d10_geom(e, t, n, i, s) {
    let o = new pt();
    for (let y = 0; y < e.length; ++y)
      e[y] = e[y].multiplyScalar(n);
    let r = [];
    const l = [], a = [], h = new P(), d = new P();
    let u, m = 0;
    for (let y = 0; y < t.length; ++y) {
      let x = t[y], M = x.length - 1, S = Math.PI * 2 / M;
      u = x[M] + 1;
      var g = 0.65, p = 0.85, f = 1 - 1 * p, _ = 1 - 0.895 / 1.105 * p, v = 1;
      for (let w = 0; w < M - 2; ++w)
        r.push(...e[x[0]].toArray()), r.push(...e[x[w + 1]].toArray()), r.push(...e[x[w + 2]].toArray()), h.subVectors(e[x[w + 2]], e[x[w + 1]]), d.subVectors(e[x[0]], e[x[w + 1]]), h.cross(d), h.normalize(), l.push(...h.toArray()), l.push(...h.toArray()), l.push(...h.toArray()), t[y][t[y].length - 1] == -1 || w >= 2 ? (a.push((Math.cos(s) + 1 + i) / 2 / (1 + i), (Math.sin(s) + 1 + i) / 2 / (1 + i)), a.push((Math.cos(S * (w + 1) + s) + 1 + i) / 2 / (1 + i), (Math.sin(S * (w + 1) + s) + 1 + i) / 2 / (1 + i)), a.push((Math.cos(S * (w + 2) + s) + 1 + i) / 2 / (1 + i), (Math.sin(S * (w + 2) + s) + 1 + i) / 2 / (1 + i))) : w == 0 ? (a.push(0.5 - g / 2, _), a.push(0.5, f), a.push(0.5 + g / 2, _)) : w == 1 && (a.push(0.5 - g / 2, _), a.push(0.5 + g / 2, _), a.push(0.5, v));
      let C = (M - 2) * 3;
      for (let w = 0; w < C / 3; w++)
        o.addGroup(m, 3, u), m += 3;
    }
    return o.setAttribute("position", new ot(r, 3)), o.setAttribute("normal", new ot(l, 3)), o.setAttribute("uv", new ot(a, 2)), o.boundingSphere = new ni(new P(), n), o;
  }
  chamfer_geom(e, t, n) {
    for (var i = [], s = [], o = new Array(e.length), r = 0; r < e.length; ++r)
      o[r] = [];
    for (var r = 0; r < t.length; ++r) {
      for (var l = t[r], a = l.length - 1, h = new P(), d = new Array(a), u = 0; u < a; ++u) {
        var m = e[l[u]].clone();
        h.add(m), o[l[u]].push(d[u] = i.push(m) - 1);
      }
      h.divideScalar(a);
      for (var u = 0; u < a; ++u) {
        var m = i[d[u]];
        m.subVectors(m, h).multiplyScalar(n).addVectors(m, h);
      }
      d.push(l[a]), s.push(d);
    }
    for (var r = 0; r < t.length - 1; ++r)
      for (var u = r + 1; u < t.length; ++u) {
        for (var g = [], p = -1, f = 0; f < t[r].length - 1; ++f) {
          var _ = t[u].indexOf(t[r][f]);
          _ >= 0 && _ < t[u].length - 1 && (p >= 0 && f != p + 1 ? g.unshift([r, f], [u, _]) : g.push([r, f], [u, _]), p = f);
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
      for (var v = o[r], d = [v[0]], y = v.length - 1; y; ) {
        for (var f = t.length; f < s.length; ++f) {
          var x = s[f].indexOf(d[d.length - 1]);
          if (x >= 0 && x < 4) {
            --x == -1 && (x = 3);
            var M = s[f][x];
            if (v.indexOf(M) >= 0) {
              d.push(M);
              break;
            }
          }
        }
        --y;
      }
      d.push(-1), s.push(d);
    }
    return { vectors: i, faces: s };
  }
  create_geom(e, t, n, i, s, o) {
    for (var r = new Array(e.length), l = 0; l < e.length; ++l)
      r[l] = new P().fromArray(e[l]).normalize();
    var a = this.chamfer_geom(r, t, o);
    if (t.length != 10)
      var h = this.make_geom(a.vectors, a.faces, n, i, s);
    else
      var h = this.make_d10_geom(a.vectors, a.faces, n, i, s);
    return h.cannon_shape = this.create_shape(e, t, n), h.name = "d" + t.length, h;
  }
};
let ls = ti;
Ar(ls, "dice", {});
const sr = {
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
  swirl: {
    name: "Resin Swirl",
    procedural: "swirl",
    composite: "source-over",
    source: "",
    source_bump: "",
    material: "glass"
  },
  marble_vein: {
    name: "Marble Veins",
    procedural: "marble_vein",
    composite: "source-over",
    source: "",
    source_bump: "",
    material: "glass"
  },
  nebula: {
    name: "Nebula",
    procedural: "nebula",
    composite: "source-over",
    source: "",
    source_bump: "",
    material: "glass"
  },
  hammered: {
    name: "Hammered Metal",
    procedural: "hammered",
    composite: "source-over",
    source: "",
    source_bump: "",
    material: "metal"
  },
  magma: {
    name: "Magma Cracks",
    procedural: "magma",
    composite: "source-over",
    source: "",
    source_bump: "",
    material: "metal"
  },
  "": {
    name: "~ Preset ~",
    composite: "source-over",
    source: "",
    source_bump: "",
    material: ""
  }
}, Uo = {
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
class Lm {
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
    let i = { ...Uo[t] };
    return n = e.texture || i.texture, i.texture = this.getTexture(n), i.texture = await this.ImageLoader(i.texture), e.material && (i.texture.material = e.material), this.colorsets[t] = i, i;
  }
  async makeColorSet(e = {}) {
    const t = `custom:${JSON.stringify(e)}`;
    if (this.colorsets.hasOwnProperty(t))
      return this.colorsets[t];
    let n = Uo.white, i = Object.assign({}, n, e), s = this.getTexture(i.texture);
    return i.texture = await this.ImageLoader(s), e.material && (i.texture.material = e.material), i.name.toLowerCase() === "white" && (i.name = `${Date.now()}`), this.colorsets[t] = i, i;
  }
  getTexture(e) {
    if (Array.isArray(e)) {
      let t = [];
      for (let n = 0, i = e.length; n < i; n++)
        t.push(this.getTexture(e[n]));
      return t;
    }
    return sr.hasOwnProperty(e) ? { ...sr[e] } : { ...sr.none };
  }
}
const Rm = {
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
}, Fm = (c) => {
  let e;
  return function() {
    let t = this, n = arguments;
    e && window.cancelAnimationFrame(e), e = window.requestAnimationFrame(function() {
      c.apply(t, n);
    });
  };
}, Dm = 2.1, Ta = 0.15;
function Pm(c) {
  return Number.isFinite(c) ? Math.min(1, Math.max(0, c)) : 0;
}
function Im({ width: c, height: e, strength: t = 1, spread: n = Ta, random: i = Math.random }) {
  const s = Math.max(1, Math.hypot(c, e)), o = i() * Math.PI * 2, r = { x: Math.cos(o) * s, y: Math.sin(o) * s }, l = 1 + Pm(n) * (i() * 2 - 1), a = Dm * s * t * l;
  return { vector: r, dist: s, boost: a };
}
const Bm = 9, zm = 6, Nm = 4.5, Om = 12, Um = 6, Gm = 0.85, km = 0.7, rr = (c, e, t) => Math.min(Math.max(c, e), t);
function Wm(c = {}) {
  return { level: Sa(c == null ? void 0 : c.glow), color: (c == null ? void 0 : c.light) || (c == null ? void 0 : c.background) || "#ffffff" };
}
function Vm({ level: c, radius: e, height: t, opacity: n = 1 }) {
  const i = rr(c, 0, 1) * rr(n, 0, 1), s = rr(t / (e * Um), 0, 1);
  return {
    pool: {
      scale: e * (Bm + zm * s),
      opacity: Math.min(Gm, i * 1.8 * (1 - 0.6 * s))
    },
    halo: { scale: e * Nm, opacity: Math.min(km, i * 1.4) },
    light: { intensity: i * 2.2, distance: e * Om }
  };
}
const Hm = 700, qm = 0.68, Xm = 1.25;
function jm(c, e, t = 100) {
  if (!(c > 0) || !(e > 0) || !(t > 0))
    return t || 100;
  const n = Math.min(c, e), i = Math.min(Xm, Math.max(qm, n / Hm));
  return Math.round(t * i);
}
function Ym(c, e) {
  return Math.abs((Number(c) || 0) - (Number(e) || 0)) >= 2;
}
const or = 350;
function rs(c) {
  var n, i;
  if (!c)
    return "plastic";
  const e = typeof c == "string" ? c : (Array.isArray(c.texture) ? (n = c.texture[0]) == null ? void 0 : n.material : (i = c.texture) == null ? void 0 : i.material) || c.material || "", t = String(e).match(/wood|metal/i);
  return t ? t[0].toLowerCase() : "plastic";
}
function Go({ speed: c, mass: e = or, volume: t = 100, random: n = Math.random }) {
  const i = Math.min(1, Math.max(0, (Number(t) || 0) / 100)), s = Math.min(Math.max(0, c / 8e3), i), o = Math.max(150, Math.min(600, Number(e) || or)), r = Math.pow(or / o, 0.25), l = 0.96 + Math.min(0.1, Math.max(0, (c - 250) / 16e3)), a = 0.96 + n() * 0.08, h = Math.min(1.35, Math.max(0.72, r * l * a));
  return { gain: s, playbackRate: h };
}
function $m(c) {
  if (typeof c != "string" || !c.startsWith("data:"))
    return null;
  const e = c.indexOf(",");
  if (e < 0 || !c.slice(0, e).includes(";base64"))
    return null;
  const n = atob(c.slice(e + 1)), i = new Uint8Array(n.length);
  for (let s = 0; s < n.length; s += 1)
    i[s] = n.charCodeAt(s);
  return i.buffer;
}
function ko(c, e, { gain: t, playbackRate: n }) {
  var i;
  if (!(!c || !(t > 0))) {
    if (e && typeof AudioBuffer < "u" && c instanceof AudioBuffer)
      try {
        e.state === "suspended" && ((i = e.resume) == null || i.call(e).catch(() => {
        }));
        const s = e.createBufferSource(), o = e.createGain();
        s.buffer = c, s.playbackRate.value = n, o.gain.value = t, s.connect(o), o.connect(e.destination), s.start(0);
        return;
      } catch {
      }
    if (typeof c.play == "function")
      try {
        c.volume = t, "playbackRate" in c && (c.playbackRate = n), c.currentTime && (c.currentTime = 0), c.play().catch(() => {
        });
      } catch {
      }
  }
}
const ar = {
  gold: { color: 16763210, gravity: 1.6, lift: 0.9, spread: 1, swirl: 0 },
  fire: { color: 16743209, gravity: -0.35, lift: 1.3, spread: 0.75, swirl: 1.8 },
  frost: { color: 10217727, gravity: 0.35, lift: 0.3, spread: 1.35, swirl: 0.4 },
  storm: { color: 16770140, gravity: 0.2, lift: 0.6, spread: 1.5, swirl: 0 },
  arcane: { color: 13206271, gravity: -0.15, lift: 0.7, spread: 1.05, swirl: 3.6 },
  shadow: { color: 9137863, gravity: -0.25, lift: 0.8, spread: 0.85, swirl: 1.4 }
};
function Zm(c = "gold", e = null) {
  const t = String(c || "gold").toLowerCase(), n = ar[t] || ar.gold;
  return { ...n, style: ar[t] ? t : "gold", color: e != null ? e : n.color };
}
function Km(c) {
  var l, a, h, d, u, m;
  if (!((a = (l = c == null ? void 0 : c.geometry) == null ? void 0 : l.groups) != null && a.length) || c.shape === "d4")
    return null;
  const e = (d = (h = c.geometry).getAttribute) == null ? void 0 : d.call(h, "normal");
  if (!(e != null && e.array))
    return null;
  const t = e.array, n = c.quaternion || ((u = c.body) == null ? void 0 : u.quaternion), i = new P(0, 0, 1), s = new P();
  let o = null, r = Math.PI * 2;
  for (let g = 0; g < c.geometry.groups.length; g += 1) {
    const p = c.geometry.groups[g];
    if (!p || p.materialIndex === 0)
      continue;
    const f = ((m = p.start) != null ? m : g * 3) * 3;
    s.set(t[f], t[f + 1], t[f + 2]), n && s.applyQuaternion(n);
    const _ = s.angleTo(i);
    _ < r && (r = _, o = p.materialIndex);
  }
  return o;
}
function Wo(c, e = !1) {
  var i;
  const t = (Array.isArray(c == null ? void 0 : c.material) ? c.material : [c == null ? void 0 : c.material]).filter((s) => s == null ? void 0 : s.emissive);
  if (!e || !Array.isArray(c == null ? void 0 : c.material))
    return t;
  const n = Km(c);
  return n != null && ((i = c.material[n]) == null ? void 0 : i.emissive) ? [c.material[n]] : t;
}
function Jm(c) {
  const e = Math.min(1, Math.max(0, c));
  return Math.sin(e * Math.PI * 5) * (1 - e) * (1 - e) * 0.22;
}
function Qm(c, { spacing: e = 180, maxWidth: t = 900, rowGap: n = e } = {}) {
  if (!(c > 0))
    return [];
  const i = Math.max(1, e), s = Math.max(1, Math.min(c, Math.floor(Math.max(i, t) / i))), o = Math.ceil(c / s), r = [];
  for (let l = 0; l < c; l += 1) {
    const a = Math.floor(l / s), h = a === o - 1 ? c - a * s : s, u = (l - a * s - (h - 1) / 2) * i, m = ((o - 1) / 2 - a) * n;
    r.push({ x: u, y: m });
  }
  return r;
}
function Vo(c) {
  const e = Math.min(1, Math.max(0, c));
  return e * e * (3 - 2 * e);
}
class eg extends ha {
  constructor() {
    super();
    const e = new oi();
    e.deleteAttribute("uv");
    const t = new pr({ side: 1 }), n = new pr(), i = new pa(16777215, 5, 28, 2);
    i.position.set(0.418, 16.199, 0.3), this.add(i);
    const s = new ke(e, t);
    s.position.set(-0.757, 13.219, 0.717), s.scale.set(31.713, 28.305, 28.591), this.add(s);
    const o = new ke(e, n);
    o.position.set(-10.906, 2.009, 1.846), o.rotation.set(0, -0.195, 0), o.scale.set(2.328, 7.905, 4.651), this.add(o);
    const r = new ke(e, n);
    r.position.set(-5.607, -0.754, -0.758), r.rotation.set(0, 0.994, 0), r.scale.set(1.97, 1.534, 3.955), this.add(r);
    const l = new ke(e, n);
    l.position.set(6.167, 0.857, 7.803), l.rotation.set(0, 0.561, 0), l.scale.set(3.927, 6.285, 3.687), this.add(l);
    const a = new ke(e, n);
    a.position.set(-2.017, 0.018, 6.124), a.rotation.set(0, 0.333, 0), a.scale.set(2.002, 4.566, 2.064), this.add(a);
    const h = new ke(e, n);
    h.position.set(2.291, -0.756, -2.621), h.rotation.set(0, -0.286, 0), h.scale.set(1.546, 1.552, 1.496), this.add(h);
    const d = new ke(e, n);
    d.position.set(-2.193, -0.369, -5.547), d.rotation.set(0, 0.516, 0), d.scale.set(3.875, 3.487, 2.986), this.add(d);
    const u = new ke(e, Qn(50));
    u.position.set(-16.116, 14.37, 8.208), u.scale.set(0.1, 2.428, 2.739), this.add(u);
    const m = new ke(e, Qn(50));
    m.position.set(-16.109, 18.021, -8.207), m.scale.set(0.1, 2.425, 2.751), this.add(m);
    const g = new ke(e, Qn(17));
    g.position.set(14.904, 12.198, -1.832), g.scale.set(0.15, 4.265, 6.331), this.add(g);
    const p = new ke(e, Qn(43));
    p.position.set(-0.462, 8.89, 14.52), p.scale.set(4.38, 5.441, 0.088), this.add(p);
    const f = new ke(e, Qn(20));
    f.position.set(3.235, 11.486, -12.541), f.scale.set(2.5, 2, 0.1), this.add(f);
    const _ = new ke(e, Qn(100));
    _.position.set(0, 20, 0), _.scale.set(1, 0.1, 1), this.add(_);
  }
}
function Qn(c) {
  const e = new ds();
  return e.color.setScalar(c), e;
}
const Ho = { coin: 6, metal: 12, plastic: 15, wood: 12 }, tg = { felt: 7, wood_table: 7, wood_tray: 7, metal: 9 }, ng = ["theme_colorset", "theme_texture", "theme_material", "theme_customColorset"], ig = {
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
  throw_spread: Ta,
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
class rg {
  constructor(e, t = {}) {
    this.initialized = !1, this.container = document.querySelector(e), this.dimensions = new be(this.container.clientWidth, this.container.clientHeight), this.adaptive_timestep = !1, this.last_time = 0, this.running = !1, this.rolling = !1, this.threadid, this.display = {
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
    }, this.scene = new ha(), this.world = new lm(), this.dice_body_material = new Tn(), this.sounds_table = {}, this.sounds_dice = [], this.lastSoundType = "", this.lastSoundStep = 0, this.lastSound = 0, this.iteration, this.renderer, this.barrier, this.camera, this.light, this.light_amb, this.desk, this.box_body = {}, this.bodies = [], this.meshes = [], this.diceList = [], this.notationVectors = null, this.dieIndex = 0, this.soundDelay = 10, this.animstate = "", this.selector = {
      animate: !0,
      rotate: !0,
      intersected: null,
      dice: []
    }, Object.assign(this, ig, t), this.DiceColors = new Lm({ assetPath: this.assetPath, assetUrl: this.assetUrl }), this.DiceFactory = new ls({
      baseScale: this.baseScale,
      shine: this.shine,
      label_glow: this.label_glow
    }), this.DiceFactory.setBumpMapping(!0), this.surface = Rm[this.theme_surface].surface;
  }
  enableShadows() {
    this.shadows = !0, this.renderer && (this.renderer.shadowMap.enabled = this.shadows), this.light && (this.light.castShadow = this.shadows), this.desk && (this.desk.receiveShadow = this.shadows);
  }
  disableShadows() {
    this.shadows = !1, this.renderer && (this.renderer.shadowMap.enabled = this.shadows), this.light && (this.light.castShadow = this.shadows), this.desk && (this.desk.receiveShadow = this.shadows);
  }
  async initialize() {
    if (this.renderer = new ca({ antialias: !0, alpha: !0 }), this.container.appendChild(this.renderer.domElement), this.renderer.shadowMap.enabled = this.shadows, this.renderer.shadowMap.type = 2, this.renderer.setClearColor(0, 0), this.scene.onBeforeRender = () => {
      var e;
      (e = this.DiceFactory) != null && e.shaderTime && (this.DiceFactory.shaderTime.value = (typeof performance < "u" ? performance.now() : Date.now()) / 1e3), this.updateDieLights();
    }, this.shine > 0) {
      const e = new hr(this.renderer);
      this.scene.environment = e.fromScene(new eg(), 0.04).texture, e.dispose();
    }
    this.setDimensions(this.dimensions), this.world.gravity.set(0, 0, -9.8 * this.gravity_multiplier), this.world.broadphase = new ga(), this.world.solver.iterations = 14, this.world.allowSleep = !0, this.makeWorldBox(), this.resizeWorld(), await this.loadTheme({
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
    const e = new Tn(), t = new Tn();
    this.world.addContactMaterial(new An(e, this.dice_body_material, { mass: 0, friction: 0.6, restitution: 0.5 })), this.world.addContactMaterial(new An(t, this.dice_body_material, { mass: 0, friction: 0.6, restitution: this.wall_bounce })), this.world.addContactMaterial(new An(this.dice_body_material, this.dice_body_material, { mass: 0, friction: 0.6, restitution: 0.5 })), this.box_body.desk = new ie({ allowSleep: !1, mass: 0, shape: new vi(), material: e }), this.world.addBody(this.box_body.desk), this.box_body.topWall = new ie({ allowSleep: !1, mass: 0, shape: new vi(), material: t }), this.box_body.topWall.quaternion.setFromAxisAngle(new b(1, 0, 0), Math.PI / 2), this.box_body.topWall.position.set(0, this.display.containerHeight * 0.93, 0), this.world.addBody(this.box_body.topWall), this.box_body.bottomWall = new ie({ allowSleep: !1, mass: 0, shape: new vi(), material: t }), this.box_body.bottomWall.quaternion.setFromAxisAngle(new b(1, 0, 0), -Math.PI / 2), this.box_body.bottomWall.position.set(0, -this.display.containerHeight * 0.93, 0), this.world.addBody(this.box_body.bottomWall), this.box_body.leftWall = new ie({ allowSleep: !1, mass: 0, shape: new vi(), material: t }), this.box_body.leftWall.quaternion.setFromAxisAngle(new b(0, 1, 0), -Math.PI / 2), this.box_body.leftWall.position.set(this.display.containerWidth * 0.93, 0, 0), this.world.addBody(this.box_body.leftWall), this.box_body.rightWall = new ie({ allowSleep: !1, mass: 0, shape: new vi(), material: t }), this.box_body.rightWall.quaternion.setFromAxisAngle(new b(0, 1, 0), Math.PI / 2), this.box_body.rightWall.position.set(-this.display.containerWidth * 0.93, 0, 0), this.world.addBody(this.box_body.rightWall);
  }
  async loadTheme(e) {
    let t;
    this.theme_customColorset ? t = await this.DiceColors.makeColorSet(this.theme_customColorset) : t = await this.DiceColors.getColorSet(e), this.DiceFactory.applyColorSet(t), this.colorData = t;
  }
  assetSource(e) {
    return typeof this.assetUrl == "function" ? this.assetUrl(e) : this.assetPath + e;
  }
  soundMaterial() {
    return rs(this.colorData);
  }
  getAudioContext() {
    if (this._audioCtx)
      return this._audioCtx;
    const e = typeof window < "u" && (window.AudioContext || window.webkitAudioContext);
    if (!e)
      return null;
    try {
      return this._audioCtx = new e(), this._audioCtx;
    } catch {
      return null;
    }
  }
  async loadSoundSet(e, t, n, i) {
    if (e.hasOwnProperty(t) || !n)
      return;
    e[t] = [];
    const s = await Promise.all(Array.from({ length: n }, (o, r) => {
      const l = this.assetSource(i(r + 1));
      return l ? this.decodeOrLoadAudio(l) : Promise.resolve(void 0);
    }));
    e[t] = s.filter(Boolean);
  }
  async decodeOrLoadAudio(e) {
    const t = this.getAudioContext();
    if (t && typeof t.decodeAudioData == "function")
      try {
        let n = $m(e);
        if (!n && typeof fetch == "function") {
          const i = await fetch(e);
          i.ok && (n = await i.arrayBuffer());
        }
        if (n)
          return await t.decodeAudioData(n.slice(0));
      } catch {
      }
    return this.loadAudio(e);
  }
  async loadSounds(e = []) {
    this.sound_dieMaterial = this.soundMaterial(), await this.loadSoundSet(this.sounds_table, this.surface, tg[this.surface], (n) => `sounds/surfaces/surface_${this.surface}${n}.mp3`), await this.loadSoundSet(this.sounds_dice, "coin", Ho.coin, (n) => `sounds/dicehit/dicehit_coin${n}.mp3`);
    const t = [...new Set([this.sound_dieMaterial, ...e].filter(Boolean))];
    await Promise.all(t.map((n) => this.loadSoundSet(this.sounds_dice, n, Ho[n], (i) => `sounds/dicehit/dicehit_${n}${i}.mp3`)));
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
    const t = ng.some((n) => n in e);
    "theme_colorset" in e && !("theme_customColorset" in e) && (e = { ...e, theme_customColorset: null }), Object.assign(this, e), "gravity_multiplier" in e && this.world && this.world.gravity.set(0, 0, -9.8 * this.gravity_multiplier), "wall_bounce" in e && this.world && this.makeWorldBox(), "shadows" in e && (this.shadows ? this.enableShadows() : this.disableShadows()), "light_intensity" in e && this.light && (this.light.intensity = this.light_intensity), t && await this.loadTheme({
      colorset: this.theme_colorset,
      texture: this.theme_texture,
      material: this.theme_material
    }), this.sounds && (t || "sounds" in e) && this.initialized && await this.loadSounds();
  }
  highlightDice(e = [], { color: t = 16769146, intensity: n = 0.45, duration: i = 420 } = {}) {
    const s = e.map((h) => this.diceList[h]).filter(Boolean);
    if (!s.length || !this.renderer)
      return Promise.resolve();
    const o = new xe(t), r = s.flatMap((h) => Wo(h, !0)), l = r.map((h) => h.emissiveIntensity || 0);
    r.forEach((h) => {
      h.emissive = o.clone();
    });
    const a = (h) => {
      const d = Vo(h);
      r.forEach((u, m) => {
        u.emissiveIntensity = l[m] + (n - l[m]) * d;
      }), this.renderer.render(this.scene, this.camera);
    };
    return !(i > 0) || typeof requestAnimationFrame != "function" ? (a(1), Promise.resolve()) : new Promise((h) => {
      const d = performance.now(), u = (m) => {
        const g = Math.min(1, (m - d) / i);
        if (a(g), g >= 1) {
          h();
          return;
        }
        requestAnimationFrame(u);
      };
      requestAnimationFrame(u);
    });
  }
  arrangeDice(e = null, { duration: t = 420 } = {}) {
    const i = (Array.isArray(e) ? e : this.diceList.map((d, u) => u)).map((d) => this.diceList[d]).filter(Boolean);
    if (i.length < 2 || !this.renderer)
      return Promise.resolve();
    const o = Math.max(...i.map((d) => {
      var u;
      return d.geometry.boundingSphere || d.geometry.computeBoundingSphere(), ((u = d.geometry.boundingSphere) == null ? void 0 : u.radius) || this.DiceFactory.baseScale;
    })) * 2.45, r = Math.max(o, (this.display.containerWidth || 400) * 1.45), l = Qm(i.length, { spacing: o, maxWidth: r, rowGap: o }), a = i.map((d) => ({ x: d.position.x, y: d.position.y, z: d.position.z })), h = (d) => {
      const u = Vo(d);
      i.forEach((m, g) => {
        const p = a[g].x + (l[g].x - a[g].x) * u, f = a[g].y + (l[g].y - a[g].y) * u;
        m.position.set(p, f, a[g].z), m.body && m.body.position.set(p, f, a[g].z);
      }), this.renderer.render(this.scene, this.camera);
    };
    return !(t > 0) || typeof requestAnimationFrame != "function" ? (h(1), Promise.resolve()) : new Promise((d) => {
      const u = performance.now(), m = (g) => {
        const p = Math.min(1, (g - u) / t);
        if (h(p), p >= 1) {
          d();
          return;
        }
        requestAnimationFrame(m);
      };
      requestAnimationFrame(m);
    });
  }
  async fadeAwayDice(e = 650) {
    const t = this.diceList.map((n, i) => i);
    t.length && await this.fadeDice(t, 0, e), this.clearDice();
  }
  celebrateDice(e = [], { color: t = null, style: n = "gold", faceOnly: i = !0, duration: s = 1800, sparks: o = 120 } = {}) {
    const r = e.map((p) => this.diceList[p]).filter(Boolean);
    if (!r.length || !this.renderer || typeof requestAnimationFrame != "function")
      return Promise.resolve();
    const l = Zm(n, t), a = new xe(l.color), h = r.flatMap((p) => Wo(p, i)), d = h.map((p) => ({ map: p.emissiveMap, intensity: p.emissiveIntensity }));
    h.forEach((p) => {
      p.emissive = a.clone(), p.emissiveIntensity = 0, p.emissiveMap && (p.emissiveMap = null, p.needsUpdate = !0);
    });
    const u = this.display.scale * 5, m = this.sparkTexture(), g = r.map((p) => {
      const f = new Float32Array(o * 3), _ = [];
      for (let M = 0; M < o; M++) {
        const S = Math.random() * Math.PI * 2, C = u * l.spread * (0.45 + Math.random() * 0.75);
        _.push(new P(Math.cos(S) * C, Math.sin(S) * C, u * l.lift * (0.4 + Math.random() * 0.9))), f.set([p.position.x, p.position.y, p.position.z], M * 3);
      }
      const v = new pt();
      v.setAttribute("position", new yt(f, 3));
      const y = new dr({ color: a, map: m, size: this.display.scale * 1.5, transparent: !0, opacity: 1, depthTest: !1, depthWrite: !1, blending: 2 }), x = new ho(v, y);
      return this.scene.add(x), { mesh: p, points: x, positions: f, velocities: _, origin: p.position.clone(), scale: p.scale.clone() };
    });
    return new Promise((p) => {
      const f = performance.now(), _ = (v) => {
        const y = Math.min(1, (v - f) / s), x = y * s / 1e3, M = (0.5 + 0.5 * Math.cos(y * Math.PI * 6)) * (1 - y);
        if (h.forEach((S) => {
          S.emissiveIntensity = 0.28 + 0.72 * M;
        }), g.forEach(({ mesh: S, points: C, positions: w, velocities: A, origin: D, scale: B }) => {
          const W = y < 0.2 ? Math.sin(y / 0.2 * Math.PI) * 0.25 : 0;
          S.scale.set(B.x * (1 + W), B.y * (1 + W), B.z * (1 + W));
          const z = l.swirl * x, F = z ? Math.cos(z) : 1, I = z ? Math.sin(z) : 0;
          A.forEach((L, G) => {
            const U = L.x * x, N = L.y * x;
            w[G * 3] = D.x + (U * F - N * I), w[G * 3 + 1] = D.y + (U * I + N * F), w[G * 3 + 2] = Math.max(0, D.z + L.z * x - u * l.gravity * x * x);
          }), C.geometry.attributes.position.needsUpdate = !0, C.material.opacity = 1 - y * y;
        }), this.renderer.render(this.scene, this.camera), y < 1) {
          requestAnimationFrame(_);
          return;
        }
        g.forEach(({ mesh: S, points: C, scale: w }) => {
          S.scale.copy(w), this.scene.remove(C), C.geometry.dispose(), C.material.dispose();
        }), h.forEach((S, C) => {
          d[C].map ? (S.emissiveMap = d[C].map, S.emissiveIntensity = Math.max(d[C].intensity, 0.7), S.needsUpdate = !0) : S.emissiveIntensity = 0.3;
        }), this.renderer.render(this.scene, this.camera), p();
      };
      requestAnimationFrame(_);
    });
  }
  fumbleDice(e = [], { duration: t = 950, color: n = 6050920, puffs: i = 36 } = {}) {
    const s = e.map((u) => this.diceList[u]).filter(Boolean);
    if (!s.length || !this.renderer || typeof requestAnimationFrame != "function")
      return Promise.resolve();
    const o = new xe(n), r = this.sparkTexture(), l = this.display.scale * 2.6, a = s.map((u) => {
      const m = new Float32Array(i * 3), g = [];
      for (let x = 0; x < i; x++) {
        const M = Math.random() * Math.PI * 2, S = l * (0.25 + Math.random() * 0.55);
        g.push(new P(Math.cos(M) * S, Math.sin(M) * S, l * (0.35 + Math.random() * 0.6))), m.set([u.position.x, u.position.y, u.position.z], x * 3);
      }
      const p = new pt();
      p.setAttribute("position", new yt(m, 3));
      const f = new dr({ color: o, map: r, size: this.display.scale * 2.2, transparent: !0, opacity: 0.55, depthTest: !1, depthWrite: !1 }), _ = new ho(p, f);
      this.scene.add(_);
      const v = (Array.isArray(u.material) ? u.material : [u.material]).filter(Boolean), y = v.map((x) => x.color ? x.color.clone() : null);
      return { mesh: u, points: _, positions: m, velocities: g, origin: u.position.clone(), baseQuat: u.quaternion.clone(), mats: v, baseColors: y };
    }), h = new P(1, 0.35, 0).normalize(), d = new ri();
    return new Promise((u) => {
      const m = performance.now(), g = (p) => {
        const f = Math.min(1, (p - m) / t), _ = f * t / 1e3, v = Jm(f), y = 1 - 0.25 * Math.sin(f * Math.PI);
        if (d.setFromAxisAngle(h, v), a.forEach(({ mesh: x, points: M, positions: S, velocities: C, origin: w, baseQuat: A, mats: D, baseColors: B }) => {
          x.quaternion.copy(A).premultiply(d), D.forEach((W, z) => {
            W.color && B[z] && W.color.copy(B[z]).multiplyScalar(y);
          }), C.forEach((W, z) => {
            S[z * 3] = w.x + W.x * _, S[z * 3 + 1] = w.y + W.y * _, S[z * 3 + 2] = w.z + W.z * _;
          }), M.geometry.attributes.position.needsUpdate = !0, M.material.opacity = 0.55 * (1 - f);
        }), this.renderer.render(this.scene, this.camera), f < 1) {
          requestAnimationFrame(g);
          return;
        }
        a.forEach(({ mesh: x, points: M, baseQuat: S, mats: C, baseColors: w }) => {
          x.quaternion.copy(S), C.forEach((A, D) => {
            A.color && w[D] && A.color.copy(w[D]);
          }), this.scene.remove(M), M.geometry.dispose(), M.material.dispose();
        }), this.renderer.render(this.scene, this.camera), u();
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
    return n.addColorStop(0, "rgba(255,255,255,1)"), n.addColorStop(0.2, "rgba(255,245,215,0.95)"), n.addColorStop(0.5, "rgba(255,215,120,0.35)"), n.addColorStop(1, "rgba(255,190,80,0)"), t.fillStyle = n, t.fillRect(0, 0, 64, 64), this.sparkMap = new Mi(e), this.sparkMap;
  }
  shadowFade(e) {
    var i, s;
    if ((s = (i = e.customDepthMaterial) == null ? void 0 : i.userData) != null && s.shadowFade)
      return e.customDepthMaterial.userData.shadowFade;
    const t = { value: 1 }, n = new la({ depthPacking: 3201 });
    return n.userData.shadowFade = t, n.onBeforeCompile = (o) => {
      o.uniforms.shadowStrength = t, o.fragmentShader = o.fragmentShader.replace("void main() {", [
        "uniform float shadowStrength;",
        "float lwDither(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }",
        "void main() {",
        "	if (lwDither(gl_FragCoord.xy) >= shadowStrength) discard;"
      ].join(`
`));
    }, e.customDepthMaterial = n, t;
  }
  fadeDice(e = [], t = 0.3, n = 900) {
    const i = e.map((h) => this.diceList[h]).filter(Boolean), s = i.flatMap((h) => Array.isArray(h.material) ? h.material : [h.material]), o = s.map((h) => h.opacity), r = i.map((h) => this.shadowFade(h)), l = r.map((h) => h.value);
    s.forEach((h) => {
      h.transparent = !0;
    });
    const a = (h) => {
      const d = h * h * (3 - 2 * h);
      s.forEach((u, m) => {
        u.opacity = o[m] + (t - o[m]) * d;
      }), r.forEach((u, m) => {
        u.value = l[m] + (t - l[m]) * d;
      }), this.renderer && this.renderer.render(this.scene, this.camera);
    };
    return new Promise((h) => {
      const d = () => {
        a(1), i.forEach((g) => {
          g.castShadow = this.shadows && t > 0;
        }), this.renderer && this.renderer.render(this.scene, this.camera), h();
      };
      if (!i.length || !(n > 0) || typeof requestAnimationFrame != "function") {
        d();
        return;
      }
      const u = performance.now(), m = (g) => {
        const p = Math.min(1, (g - u) / n);
        if (p >= 1) {
          d();
          return;
        }
        a(p), requestAnimationFrame(m);
      };
      requestAnimationFrame(m);
    });
  }
  setDimensions(e) {
    const t = (e == null ? void 0 : e.x) || this.container.clientWidth, n = (e == null ? void 0 : e.y) || this.container.clientHeight;
    if (!(t > 0) || !(n > 0))
      return;
    this.display.currentWidth = this.container.clientWidth / 2, this.display.currentHeight = this.container.clientHeight / 2, e ? (this.display.containerWidth = e.x, this.display.containerHeight = e.y) : (this.display.containerWidth = this.display.currentWidth, this.display.containerHeight = this.display.currentHeight), this.display.aspect = Math.min(this.display.currentWidth / this.display.containerWidth, this.display.currentHeight / this.display.containerHeight), this.display.scale = Math.sqrt(this.display.containerWidth * this.display.containerWidth + this.display.containerHeight * this.display.containerHeight) / 13;
    const i = jm(t, n, this.baseScale);
    switch (this.DiceFactory && Ym(this.DiceFactory.baseScale, i) && this.DiceFactory.updateConfig({ baseScale: i }), this.makeWorldBox(), this.renderer.setSize(this.display.currentWidth * 2, this.display.currentHeight * 2), this.cameraHeight.max = this.display.currentHeight / this.display.aspect / Math.tan(10 * Math.PI / 180), this.cameraHeight.medium = this.cameraHeight.max / 1.5, this.cameraHeight.far = this.cameraHeight.max, this.cameraHeight.close = this.cameraHeight.max / 2, this.camera && this.scene.remove(this.camera), this.camera = new ft(20, this.display.currentWidth / this.display.currentHeight, 1, this.cameraHeight.max * 1.3), this.animstate) {
      case "selector":
        this.camera.position.z = this.selector.dice.length > 9 ? this.cameraHeight.far : this.selector.dice.length < 6 ? this.cameraHeight.close : this.cameraHeight.medium;
        break;
      case "throw":
      case "afterthrow":
      default:
        this.camera.position.z = this.cameraHeight.far;
    }
    this.camera.lookAt(new P(0, 0, 0));
    const s = Math.max(this.display.containerWidth, this.display.containerHeight);
    this.light && this.scene.remove(this.light), this.light_amb && this.scene.remove(this.light_amb), this.light = new Ud(this.color_spotlight, this.light_intensity), this.light.position.set(-s / 2, s / 2, s * 3), this.light.target.position.set(0, 0, 0), this.light.distance = s * 5, this.light.angle = Math.PI / 4, this.light.castShadow = this.shadows, this.light.shadow.camera.near = s / 10, this.light.shadow.camera.far = s * 5, this.light.shadow.camera.fov = 50, this.light.shadow.bias = 1e-3, this.light.shadow.mapSize.width = 1024, this.light.shadow.mapSize.height = 1024, this.scene.add(this.light), this.light_amb = new Nd(16777147, 6776689, this.light_intensity), this.scene.add(this.light_amb), this.desk && this.scene.remove(this.desk);
    let o = new Bd();
    o.opacity = 0.5, this.desk = new ke(new Si(this.display.containerWidth * 6, this.display.containerHeight * 6, 1, 1), o), this.desk.receiveShadow = this.shadows, this.scene.add(this.desk), this.renderer.render(this.scene, this.camera);
  }
  resizeWorld() {
    const t = Fm(() => {
      const n = this.renderer.domElement, i = this.container.clientWidth, s = this.container.clientHeight, o = n.width !== i || n.height !== s;
      return o && this.setDimensions(new be(this.container.clientWidth, this.container.clientHeight)), o;
    });
    window.addEventListener("resize", t), window.addEventListener("orientationchange", t), typeof ResizeObserver == "function" && this.container && (this._resizeObserver = new ResizeObserver(t), this._resizeObserver.observe(this.container));
  }
  vectorRand({ x: e, y: t }) {
    let n = Math.random() * Math.PI / 5 - Math.PI / 5 / 2, i = {
      x: e * Math.cos(n) - t * Math.sin(n),
      y: e * Math.sin(n) + t * Math.cos(n)
    };
    return i.x == 0 && (i.x = 0.01), i.y == 0 && (i.y = 0.01), i;
  }
  getNotationVectors(e, t, n, i) {
    let s = new zo(e);
    for (let o in s.set) {
      const r = this.DiceFactory.get(s.set[o].type);
      let l = s.set[o].num, a = s.set[o].op, h = s.set[o].sid, d = s.set[o].gid, u = s.set[o].glvl, m = s.set[o].func, g = s.set[o].args;
      for (let p = 0; p < l; p++) {
        let f = this.vectorRand(t);
        f.x /= i, f.y /= i;
        let _ = {
          x: this.display.containerWidth * (f.x > 0 ? -1 : 1) * this.throw_start,
          y: this.display.containerHeight * (f.y > 0 ? -1 : 1) * this.throw_start,
          z: Math.random() * 200 + 200
        }, v = Math.abs(f.x / f.y);
        v > 1 ? _.y /= v : _.x *= v;
        let y = this.vectorRand(t);
        y.x /= i, y.y /= i;
        let x, M, S;
        r.shape != "d2" ? (x = {
          x: y.x * n,
          y: y.y * n,
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
          x: y.x * n / 10,
          y: y.y * n / 10,
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
          op: a,
          sid: h,
          gid: d,
          glvl: u,
          func: m,
          args: g,
          pos: _,
          velocity: x,
          angle: M,
          axis: S
        });
      }
    }
    return s;
  }
  swapDiceFace(e, t) {
    var p;
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
    let r = e.geometry.clone(), l = [], a = [], h = 2;
    n.shape == "d10" && (h = 1);
    let d, u = o + h;
    n.shape != "d2" ? (d = s + h, u = o + h) : (d = s + 1, u = o + 1);
    for (var m = 0, g = r.groups.length; m < g; ++m) {
      const _ = r.groups[m].materialIndex;
      if (_ == d) {
        l.push(m);
        continue;
      }
      if (_ == u) {
        a.push(m);
        continue;
      }
    }
    if (!(l.length <= 0 || a.length <= 0)) {
      for (let f = 0, _ = a.length; f < _; f++)
        r.groups[a[f]].materialIndex = d;
      for (let f = 0, _ = l.length; f < _; f++)
        r.groups[l[f]].materialIndex = u;
      ((p = e.userData) == null ? void 0 : p.clonedGeometry) && e.geometry && e.geometry.dispose(), e.geometry = r, e.userData = { ...e.userData || {}, clonedGeometry: !0 }, e.result = [];
    }
  }
  swapDiceFace_D4(e, t) {
    var r;
    const n = this.DiceFactory.get(e.notation.type);
    let i = parseInt(e.getLastValue().value);
    if (t = parseInt(t), !(i >= 1 && i <= 4))
      return;
    let s = t - i, o = e.geometry.clone();
    for (let l = 0, a = o.groups.length; l < a; ++l) {
      const h = o.groups[l];
      let d = h.materialIndex;
      if (d != 0) {
        for (d += s - 1; d > 4; )
          d -= 4;
        for (; d < 1; )
          d += 4;
        h.materialIndex = d + 1;
      }
    }
    s != 0 && (s < 0 && (s += 4), (Array.isArray(e.material) ? e.material : e.material ? [e.material] : []).forEach((a) => {
      var h;
      return (h = a == null ? void 0 : a.dispose) == null ? void 0 : h.call(a);
    }), e.material = this.DiceFactory.createMaterials(n, 0, 0, !1, s)), ((r = e.userData) == null ? void 0 : r.clonedGeometry) && e.geometry && e.geometry.dispose(), e.geometry = o, e.userData = { ...e.userData || {}, clonedGeometry: !0 };
  }
  spawnDice(e, t = !1) {
    var l, a, h;
    const { pos: n, axis: i, angle: s, velocity: o } = e;
    let r;
    if (t)
      r = t, r.stopped = 0, this.world.removeBody(r.body);
    else {
      const d = this.diceList.length, u = (l = this.dieLooks) == null ? void 0 : l[d];
      if (u && this.DiceFactory.applyColorSet(u), r = this.DiceFactory.create(e.type, this.colorData, (h = (a = this.dieLabels) == null ? void 0 : a[d]) != null ? h : null), u && this.DiceFactory.applyColorSet(this.colorData), !r)
        return;
      r.notation = e, r.result = [], r.stopped = 0, r.castShadow = this.shadows, r.soundMaterial = rs(u != null ? u : this.colorData), this.scene.add(r), this.diceList.push(r), this.addDieLight(r, u != null ? u : this.colorData);
    }
    r.body = new ie({ allowSleep: !0, sleepSpeedLimit: 75, sleepTimeLimit: 0.9, mass: r.mass, shape: r.geometry.cannon_shape, material: this.dice_body_material }), r.body.type = ie.DYNAMIC, r.body.position.set(n.x, n.y, n.z), r.body.quaternion.setFromAxisAngle(new b(i.x, i.y, i.z), i.a * Math.PI * 2), r.body.angularVelocity.set(s.x, s.y, s.z), r.body.velocity.set(o.x, o.y, o.z), r.body.linearDamping = 0.1, r.body.angularDamping = 0.1, r.body.diceShape = r.shape, r.body.soundMaterial = r.soundMaterial || this.sound_dieMaterial, r.body.sleepState = 0, r.body.addEventListener("collide", this.eventCollide.bind(this)), this.world.addBody(r.body);
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
        const o = e.diceShape === "d2" ? "coin" : e.soundMaterial || this.sound_dieMaterial, r = this.sounds_dice[o] || this.sounds_dice[this.sound_dieMaterial] || [], l = r[Math.floor(Math.random() * r.length)];
        l && ko(l, this._audioCtx, Go({ speed: s, mass: e.mass, volume: this.volume })), this.lastSoundType = "dice";
      } else {
        let s = t.velocity.length();
        if (s < 250)
          return;
        let o = this.surface, r = this.sounds_table[o] || [], l = r[Math.floor(Math.random() * r.length)];
        l && ko(l, this._audioCtx, Go({ speed: s, mass: t.mass, volume: this.volume })), this.lastSoundType = "table";
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
          return i.rerolls += 1, i.rerolling = !0, i.body.wakeUp(), i.body.type = ie.DYNAMIC, i.body.angularVelocity = new b(25, 25, 25), i.body.velocity = new b(0, 0, 3e3), !1;
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
    this.running == e && ((o, r, l, a, h) => {
      !l && i < this.framerate ? setTimeout(() => {
        requestAnimationFrame(() => {
          o.call(this, r, a, h);
        });
      }, (this.framerate - i) * 1e3) : requestAnimationFrame(() => {
        o.call(this, r, a, h);
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
    const { vector: t, dist: n, boost: i } = Im({
      width: this.display.currentWidth,
      height: this.display.currentHeight,
      strength: this.strength,
      spread: this.throw_spread
    });
    return this.getNotationVectors(e, t, i, n);
  }
  glowTexture() {
    if (this.glowTextureCache)
      return this.glowTextureCache;
    const e = 128, t = document.createElement("canvas");
    t.width = e, t.height = e;
    const n = t.getContext("2d"), i = n.createRadialGradient(e / 2, e / 2, 0, e / 2, e / 2, e / 2);
    return i.addColorStop(0, "rgba(255,255,255,1)"), i.addColorStop(0.3, "rgba(255,255,255,0.55)"), i.addColorStop(0.65, "rgba(255,255,255,0.15)"), i.addColorStop(1, "rgba(255,255,255,0)"), n.fillStyle = i, n.fillRect(0, 0, e, e), this.glowTextureCache = new Mi(t), this.glowTextureCache;
  }
  addDieLight(e, t) {
    var d;
    const { level: n, color: i } = Wm(t);
    if (!(n > 0) || !this.scene)
      return;
    e.geometry.boundingSphere || e.geometry.computeBoundingSphere();
    const s = ((d = e.geometry.boundingSphere) == null ? void 0 : d.radius) || 1, o = new xe(i), r = { map: this.glowTexture(), color: o, transparent: !0, opacity: 0, depthWrite: !1 }, l = new ke(new Si(1, 1), new ds(r)), a = new Id(new ua(r)), h = new pa(o, 0, s * 12, 2);
    this.scene.add(l, a, h), e.userData.dieLight = { level: n, radius: s, pool: l, halo: a, light: h };
  }
  updateDieLights() {
    var e, t;
    for (const n of this.diceList) {
      const i = (e = n.userData) == null ? void 0 : e.dieLight;
      if (!i)
        continue;
      const s = Array.isArray(n.material) ? n.material[0] : n.material, o = n.visible === !1 ? 0 : (t = s == null ? void 0 : s.opacity) != null ? t : 1, { x: r, y: l, z: a } = n.position, h = Vm({ level: i.level, radius: i.radius, height: Math.max(0, a - i.radius), opacity: o });
      i.pool.position.set(r, l, 0.5), i.pool.scale.set(h.pool.scale, h.pool.scale, 1), i.pool.material.opacity = h.pool.opacity, i.halo.position.set(r, l, Math.max(0.5, a - i.radius * 0.9)), i.halo.scale.set(h.halo.scale, h.halo.scale, 1), i.halo.material.opacity = h.halo.opacity, i.light.position.set(r, l, a), i.light.intensity = h.light.intensity, i.light.distance = h.light.distance;
    }
  }
  removeDieLight(e) {
    var n;
    const t = (n = e == null ? void 0 : e.userData) == null ? void 0 : n.dieLight;
    !t || (this.scene.remove(t.pool, t.halo, t.light), t.pool.geometry.dispose(), t.pool.material.dispose(), t.halo.material.dispose(), delete e.userData.dieLight);
  }
  clearDice() {
    this.running = !1;
    let e;
    for (; e = this.diceList.pop(); )
      this.removeDieLight(e), this.scene.remove(e), e.body && this.world.removeBody(e.body), No(e);
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
        let l = 0;
        const a = [];
        for (let d = t; d <= r; d++) {
          if (this.diceList[t].result.at(-1).reason === "remove") {
            t++;
            continue;
          }
          a.push({
            type: o.type,
            sides: parseInt(o.type.substring(1)),
            id: t,
            ...this.diceList[t].result.at(-1)
          }), l += this.diceList[t].result.at(-1).value, t++;
        }
        const h = {
          num: o.num,
          type: o.type,
          sides: parseInt(o.type.substring(1)),
          rolls: a,
          total: l
        };
        return i += l, h;
      }),
      modifier: n,
      total: i
    };
  }
  async roll(e, { looks: t = null } = {}) {
    if (this.dieLooks = t ? await Promise.all(t.map((n) => n ? this.DiceColors.makeColorSet(n) : null)) : null, this.dieLabels = t ? t.map((n) => {
      var i;
      return (i = n == null ? void 0 : n.labels) != null ? i : null;
    }) : null, this.sounds && this.dieLooks && await this.loadSounds(this.dieLooks.map((n) => rs(n))), this.notationVectors = this.startClickThrow(e), this.notationVectors)
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
        s.rerolls += 1, s.rerolling = !0, s.body.wakeUp(), s.body.type = ie.DYNAMIC, s.body.angularVelocity = new b(25, 25, 25), s.body.velocity = new b(0, 0, 3e3);
      }), this.animateThrow(this.running, () => {
        const i = e.map((o) => this.getDiceResults(o));
        this.onRerollComplete(i);
        const s = new CustomEvent("rerollComplete", { detail: i });
        document.dispatchEvent(s), t(i);
      });
    });
  }
  async add(e, { looks: t = null } = {}) {
    let n = this.diceList.length;
    if (!n)
      return this.roll(e, { looks: t });
    const i = t ? await Promise.all(t.map((r) => r ? this.DiceColors.makeColorSet(r) : null)) : [];
    this.sounds && i.length && await this.loadSounds(i.map((r) => rs(r))), this.dieLooks = [], this.dieLabels = [], i.forEach((r, l) => {
      var a, h;
      this.dieLooks[n + l] = r, this.dieLabels[n + l] = (h = (a = t[l]) == null ? void 0 : a.labels) != null ? h : null;
    });
    let s = this.startClickThrow(e), o = [];
    for (let r = 0, l = s.vectors.length; r < l; ++r)
      this.spawnDice(s.vectors[r]);
    this.simulateThrow(), this.steps = 0, this.iteration = 0;
    for (let r = 0, l = s.vectors.length; r < l; ++r) {
      const a = n + r;
      !this.diceList[a] || (this.spawnDice(s.vectors[r], this.diceList[a]), o.push(a));
    }
    if (s.result && s.result.length > 0)
      for (let r = 0; r < s.result.length; r++) {
        const l = n + r;
        let a = this.diceList[l];
        !a || a.getLastValue().value != s.result[r] && this.swapDiceFace(a, s.result[r]);
      }
    return this.notationVectors = zo.mergeNotation(this.notationVectors, s), new Promise((r, l) => {
      const a = () => {
        const h = o.map((u) => this.getDiceResults(u));
        this.onAddDiceComplete(h);
        const d = new CustomEvent("addDiceComplete", { detail: h });
        document.dispatchEvent(d), r(h);
      };
      this.rolling = !0, this.running = Date.now(), this.last_time = 0, this.animateThrow(this.running, a);
    });
  }
  async remove(e) {
    return new Promise((t, n) => {
      const i = [];
      e.forEach((o) => {
        const r = this.diceList[o];
        r.body && this.world.removeBody(r.body), this.removeDieLight(r), this.scene.remove(r), r.storeRolledValue("remove"), i.push(this.getDiceResults(o)), No(r);
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
  rg as default
};
