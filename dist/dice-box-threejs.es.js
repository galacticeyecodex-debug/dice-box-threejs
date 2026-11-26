var wa = Object.defineProperty;
var ba = (c, e, t) => e in c ? wa(c, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[e] = t;
var wr = (c, e, t) => (ba(c, typeof e != "symbol" ? e + "" : e, t), t);
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const hr = "143";
const en = "srgb", Mn = "srgb-linear";
const br = "300 es";
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
const st = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], _s = Math.PI / 180, sr = 180 / Math.PI;
function fn() {
  const c = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (st[c & 255] + st[c >> 8 & 255] + st[c >> 16 & 255] + st[c >> 24 & 255] + "-" + st[e & 255] + st[e >> 8 & 255] + "-" + st[e >> 16 & 15 | 64] + st[e >> 24 & 255] + "-" + st[t & 63 | 128] + st[t >> 8 & 255] + "-" + st[t >> 16 & 255] + st[t >> 24 & 255] + st[n & 255] + st[n >> 8 & 255] + st[n >> 16 & 255] + st[n >> 24 & 255]).toLowerCase();
}
function vt(c, e, t) {
  return Math.max(e, Math.min(t, c));
}
function Ma(c, e) {
  return (c % e + e) % e;
}
function vs(c, e, t) {
  return (1 - t) * c + t * e;
}
function Mr(c) {
  return (c & c - 1) === 0 && c !== 0;
}
function rr(c) {
  return Math.pow(2, Math.floor(Math.log(c) / Math.LN2));
}
class we {
  constructor(e = 0, t = 0) {
    we.prototype.isVector2 = !0, this.x = e, this.y = t;
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
class At {
  constructor() {
    At.prototype.isMatrix3 = !0, this.elements = [
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
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = r, h[3] = t, h[4] = s, h[5] = a, h[6] = n, h[7] = o, h[8] = l, this;
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
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], r = n[3], a = n[6], l = n[1], h = n[4], d = n[7], u = n[2], m = n[5], g = n[8], p = i[0], f = i[3], _ = i[6], v = i[1], w = i[4], x = i[7], M = i[2], S = i[5], L = i[8];
    return s[0] = o * p + r * v + a * M, s[3] = o * f + r * w + a * S, s[6] = o * _ + r * x + a * L, s[1] = l * p + h * v + d * M, s[4] = l * f + h * w + d * S, s[7] = l * _ + h * x + d * L, s[2] = u * p + m * v + g * M, s[5] = u * f + m * w + g * S, s[8] = u * _ + m * x + g * L, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], r = e[5], a = e[6], l = e[7], h = e[8];
    return t * o * h - t * r * l - n * s * h + n * r * a + i * s * l - i * o * a;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], r = e[5], a = e[6], l = e[7], h = e[8], d = h * o - r * l, u = r * a - h * s, m = l * s - o * a, g = t * d + n * u + i * m;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / g;
    return e[0] = d * p, e[1] = (i * l - h * n) * p, e[2] = (r * n - i * o) * p, e[3] = u * p, e[4] = (h * t - i * a) * p, e[5] = (i * s - r * t) * p, e[6] = m * p, e[7] = (n * a - l * t) * p, e[8] = (o * t - n * s) * p, this;
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
    const t = Math.cos(e), n = Math.sin(e), i = this.elements, s = i[0], o = i[3], r = i[6], a = i[1], l = i[4], h = i[7];
    return i[0] = t * s + n * a, i[3] = t * o + n * l, i[6] = t * r + n * h, i[1] = -n * s + t * a, i[4] = -n * o + t * l, i[7] = -n * r + t * h, this;
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
function Io(c) {
  for (let e = c.length - 1; e >= 0; --e)
    if (c[e] > 65535)
      return !0;
  return !1;
}
function ls(c) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", c);
}
function Sn(c) {
  return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
}
function rs(c) {
  return c < 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
}
const xs = {
  [en]: { [Mn]: Sn },
  [Mn]: { [en]: rs }
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
    if (xs[e] && xs[e][t] !== void 0) {
      const n = xs[e][t];
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
}, zo = {
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
function ys(c, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? c + (e - c) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? c + (e - c) * 6 * (2 / 3 - t) : c;
}
function Li(c, e) {
  return e.r = c.r, e.g = c.g, e.b = c.b, e;
}
class Me {
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
    if (e = Ma(e, 1), t = vt(t, 0, 1), n = vt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = ys(o, s, e + 1 / 3), this.g = ys(o, s, e), this.b = ys(o, s, e - 1 / 3);
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
            const a = parseFloat(s[1]) / 360, l = parseInt(s[2], 10) / 100, h = parseInt(s[3], 10) / 100;
            return n(s[4]), this.setHSL(a, l, h, t);
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
    const n = zo[e.toLowerCase()];
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
    return this.r = rs(e.r), this.g = rs(e.g), this.b = rs(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = en) {
    return Ct.fromWorkingColorSpace(Li(this, Ke), e), vt(Ke.r * 255, 0, 255) << 16 ^ vt(Ke.g * 255, 0, 255) << 8 ^ vt(Ke.b * 255, 0, 255) << 0;
  }
  getHexString(e = en) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Mn) {
    Ct.fromWorkingColorSpace(Li(this, Ke), t);
    const n = Ke.r, i = Ke.g, s = Ke.b, o = Math.max(n, i, s), r = Math.min(n, i, s);
    let a, l;
    const h = (r + o) / 2;
    if (r === o)
      a = 0, l = 0;
    else {
      const d = o - r;
      switch (l = h <= 0.5 ? d / (o + r) : d / (2 - o - r), o) {
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
    return e.h = a, e.s = l, e.l = h, e;
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
    const n = vs(Lt.h, Ci.h, t), i = vs(Lt.s, Ci.s, t), s = vs(Lt.l, Ci.l, t);
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
Me.NAMES = zo;
let Pn;
class Bo {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Pn === void 0 && (Pn = ls("canvas")), Pn.width = e.width, Pn.height = e.height;
      const n = Pn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Pn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = ls("canvas");
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
class No {
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
          i[o].isDataTexture ? s.push(ws(i[o].image)) : s.push(ws(i[o]));
      } else
        s = ws(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function ws(c) {
  return typeof HTMLImageElement < "u" && c instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && c instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && c instanceof ImageBitmap ? Bo.getDataURL(c) : c.data ? {
    data: Array.from(c.data),
    width: c.width,
    height: c.height,
    type: c.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Sa = 0;
class xt extends si {
  constructor(e = xt.DEFAULT_IMAGE, t = xt.DEFAULT_MAPPING, n = 1001, i = 1001, s = 1006, o = 1008, r = 1023, a = 1009, l = 1, h = 3e3) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Sa++ }), this.uuid = fn(), this.name = "", this.source = new No(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = o, this.anisotropy = l, this.format = r, this.internalFormat = null, this.type = a, this.offset = new we(0, 0), this.repeat = new we(1, 1), this.center = new we(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new At(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
xt.DEFAULT_IMAGE = null;
xt.DEFAULT_MAPPING = 300;
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
    const a = e.elements, l = a[0], h = a[4], d = a[8], u = a[1], m = a[5], g = a[9], p = a[2], f = a[6], _ = a[10];
    if (Math.abs(h - u) < 0.01 && Math.abs(d - p) < 0.01 && Math.abs(g - f) < 0.01) {
      if (Math.abs(h + u) < 0.1 && Math.abs(d + p) < 0.1 && Math.abs(g + f) < 0.1 && Math.abs(l + m + _ - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const w = (l + 1) / 2, x = (m + 1) / 2, M = (_ + 1) / 2, S = (h + u) / 4, L = (d + p) / 4, y = (g + f) / 4;
      return w > x && w > M ? w < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(w), i = S / n, s = L / n) : x > M ? x < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(x), n = S / i, s = y / i) : M < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(M), n = L / s, i = y / s), this.set(n, i, s, t), this;
    }
    let v = Math.sqrt((f - g) * (f - g) + (d - p) * (d - p) + (u - h) * (u - h));
    return Math.abs(v) < 1e-3 && (v = 1), this.x = (f - g) / v, this.y = (d - p) / v, this.z = (u - h) / v, this.w = Math.acos((l + m + _ - 1) / 2), this;
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
    this.texture = new xt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : 1006, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
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
    return this.texture.source = new No(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Oo extends xt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Ea extends xt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Si {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, o, r) {
    let a = n[i + 0], l = n[i + 1], h = n[i + 2], d = n[i + 3];
    const u = s[o + 0], m = s[o + 1], g = s[o + 2], p = s[o + 3];
    if (r === 0) {
      e[t + 0] = a, e[t + 1] = l, e[t + 2] = h, e[t + 3] = d;
      return;
    }
    if (r === 1) {
      e[t + 0] = u, e[t + 1] = m, e[t + 2] = g, e[t + 3] = p;
      return;
    }
    if (d !== p || a !== u || l !== m || h !== g) {
      let f = 1 - r;
      const _ = a * u + l * m + h * g + d * p, v = _ >= 0 ? 1 : -1, w = 1 - _ * _;
      if (w > Number.EPSILON) {
        const M = Math.sqrt(w), S = Math.atan2(M, _ * v);
        f = Math.sin(f * S) / M, r = Math.sin(r * S) / M;
      }
      const x = r * v;
      if (a = a * f + u * x, l = l * f + m * x, h = h * f + g * x, d = d * f + p * x, f === 1 - r) {
        const M = 1 / Math.sqrt(a * a + l * l + h * h + d * d);
        a *= M, l *= M, h *= M, d *= M;
      }
    }
    e[t] = a, e[t + 1] = l, e[t + 2] = h, e[t + 3] = d;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, o) {
    const r = n[i], a = n[i + 1], l = n[i + 2], h = n[i + 3], d = s[o], u = s[o + 1], m = s[o + 2], g = s[o + 3];
    return e[t] = r * g + h * d + a * m - l * u, e[t + 1] = a * g + h * u + l * d - r * m, e[t + 2] = l * g + h * m + r * u - a * d, e[t + 3] = h * g - r * d - a * u - l * m, e;
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
    const n = e._x, i = e._y, s = e._z, o = e._order, r = Math.cos, a = Math.sin, l = r(n / 2), h = r(i / 2), d = r(s / 2), u = a(n / 2), m = a(i / 2), g = a(s / 2);
    switch (o) {
      case "XYZ":
        this._x = u * h * d + l * m * g, this._y = l * m * d - u * h * g, this._z = l * h * g + u * m * d, this._w = l * h * d - u * m * g;
        break;
      case "YXZ":
        this._x = u * h * d + l * m * g, this._y = l * m * d - u * h * g, this._z = l * h * g - u * m * d, this._w = l * h * d + u * m * g;
        break;
      case "ZXY":
        this._x = u * h * d - l * m * g, this._y = l * m * d + u * h * g, this._z = l * h * g + u * m * d, this._w = l * h * d - u * m * g;
        break;
      case "ZYX":
        this._x = u * h * d - l * m * g, this._y = l * m * d + u * h * g, this._z = l * h * g - u * m * d, this._w = l * h * d + u * m * g;
        break;
      case "YZX":
        this._x = u * h * d + l * m * g, this._y = l * m * d + u * h * g, this._z = l * h * g - u * m * d, this._w = l * h * d - u * m * g;
        break;
      case "XZY":
        this._x = u * h * d - l * m * g, this._y = l * m * d - u * h * g, this._z = l * h * g + u * m * d, this._w = l * h * d + u * m * g;
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
    const t = e.elements, n = t[0], i = t[4], s = t[8], o = t[1], r = t[5], a = t[9], l = t[2], h = t[6], d = t[10], u = n + r + d;
    if (u > 0) {
      const m = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / m, this._x = (h - a) * m, this._y = (s - l) * m, this._z = (o - i) * m;
    } else if (n > r && n > d) {
      const m = 2 * Math.sqrt(1 + n - r - d);
      this._w = (h - a) / m, this._x = 0.25 * m, this._y = (i + o) / m, this._z = (s + l) / m;
    } else if (r > d) {
      const m = 2 * Math.sqrt(1 + r - n - d);
      this._w = (s - l) / m, this._x = (i + o) / m, this._y = 0.25 * m, this._z = (a + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + d - n - r);
      this._w = (o - i) / m, this._x = (s + l) / m, this._y = (a + h) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(vt(this.dot(e), -1, 1)));
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
    const n = e._x, i = e._y, s = e._z, o = e._w, r = t._x, a = t._y, l = t._z, h = t._w;
    return this._x = n * h + o * r + i * l - s * a, this._y = i * h + o * a + s * r - n * l, this._z = s * h + o * l + n * a - i * r, this._w = o * h - n * r - i * a - s * l, this._onChangeCallback(), this;
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
    const l = Math.sqrt(a), h = Math.atan2(l, r), d = Math.sin((1 - t) * h) / l, u = Math.sin(t * h) / l;
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
class I {
  constructor(e = 0, t = 0, n = 0) {
    I.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
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
    return this.applyQuaternion(Sr.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Sr.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, i = this.z, s = e.x, o = e.y, r = e.z, a = e.w, l = a * t + o * i - r * n, h = a * n + r * t - s * i, d = a * i + s * n - o * t, u = -s * t - o * n - r * i;
    return this.x = l * a + u * -s + h * -r - d * -o, this.y = h * a + u * -o + d * -s - l * -r, this.z = d * a + u * -r + l * -o - h * -s, this;
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
    return bs.copy(this).projectOnVector(e), this.sub(bs);
  }
  reflect(e) {
    return this.sub(bs.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(vt(n, -1, 1));
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
const bs = /* @__PURE__ */ new I(), Sr = /* @__PURE__ */ new Si();
class Ei {
  constructor(e = new I(1 / 0, 1 / 0, 1 / 0), t = new I(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, o = -1 / 0, r = -1 / 0;
    for (let a = 0, l = e.length; a < l; a += 3) {
      const h = e[a], d = e[a + 1], u = e[a + 2];
      h < t && (t = h), d < n && (n = d), u < i && (i = u), h > s && (s = h), d > o && (o = d), u > r && (r = u);
    }
    return this.min.set(t, n, i), this.max.set(s, o, r), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, o = -1 / 0, r = -1 / 0;
    for (let a = 0, l = e.count; a < l; a++) {
      const h = e.getX(a), d = e.getY(a), u = e.getZ(a);
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
        n.boundingBox === null && n.computeBoundingBox(), Ms.copy(n.boundingBox), Ms.applyMatrix4(e.matrixWorld), this.union(Ms);
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
    this.getCenter(ci), Ri.subVectors(this.max, ci), In.subVectors(e.a, ci), zn.subVectors(e.b, ci), Bn.subVectors(e.c, ci), rn.subVectors(zn, In), on.subVectors(Bn, zn), gn.subVectors(In, Bn);
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
    return !Ss(t, In, zn, Bn, Ri) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ss(t, In, zn, Bn, Ri)) ? !1 : (Di.crossVectors(rn, on), t = [Di.x, Di.y, Di.z], Ss(t, In, zn, Bn, Ri));
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
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I()
], mn = /* @__PURE__ */ new I(), Ms = /* @__PURE__ */ new Ei(), In = /* @__PURE__ */ new I(), zn = /* @__PURE__ */ new I(), Bn = /* @__PURE__ */ new I(), rn = /* @__PURE__ */ new I(), on = /* @__PURE__ */ new I(), gn = /* @__PURE__ */ new I(), ci = /* @__PURE__ */ new I(), Ri = /* @__PURE__ */ new I(), Di = /* @__PURE__ */ new I(), _n = /* @__PURE__ */ new I();
function Ss(c, e, t, n, i) {
  for (let s = 0, o = c.length - 3; s <= o; s += 3) {
    _n.fromArray(c, s);
    const r = i.x * Math.abs(_n.x) + i.y * Math.abs(_n.y) + i.z * Math.abs(_n.z), a = e.dot(_n), l = t.dot(_n), h = n.dot(_n);
    if (Math.max(-Math.max(a, l, h), Math.min(a, l, h)) > r)
      return !1;
  }
  return !0;
}
const Aa = /* @__PURE__ */ new Ei(), Er = /* @__PURE__ */ new I(), Fi = /* @__PURE__ */ new I(), Es = /* @__PURE__ */ new I();
class ni {
  constructor(e = new I(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Aa.setFromPoints(e).getCenter(n);
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
    Es.subVectors(e, this.center);
    const t = Es.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.add(Es.multiplyScalar(i / n)), this.radius += i;
    }
    return this;
  }
  union(e) {
    return this.center.equals(e.center) === !0 ? Fi.set(0, 0, 1).multiplyScalar(e.radius) : Fi.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(Er.copy(e.center).add(Fi)), this.expandByPoint(Er.copy(e.center).sub(Fi)), this;
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const qt = /* @__PURE__ */ new I(), As = /* @__PURE__ */ new I(), Pi = /* @__PURE__ */ new I(), an = /* @__PURE__ */ new I(), Ts = /* @__PURE__ */ new I(), Ii = /* @__PURE__ */ new I(), Cs = /* @__PURE__ */ new I();
class Uo {
  constructor(e = new I(), t = new I(0, 0, -1)) {
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
    As.copy(e).add(t).multiplyScalar(0.5), Pi.copy(t).sub(e).normalize(), an.copy(this.origin).sub(As);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(Pi), r = an.dot(this.direction), a = -an.dot(Pi), l = an.lengthSq(), h = Math.abs(1 - o * o);
    let d, u, m, g;
    if (h > 0)
      if (d = o * a - r, u = o * r - a, g = s * h, d >= 0)
        if (u >= -g)
          if (u <= g) {
            const p = 1 / h;
            d *= p, u *= p, m = d * (d + o * u + 2 * r) + u * (o * d + u + 2 * a) + l;
          } else
            u = s, d = Math.max(0, -(o * u + r)), m = -d * d + u * (u + 2 * a) + l;
        else
          u = -s, d = Math.max(0, -(o * u + r)), m = -d * d + u * (u + 2 * a) + l;
      else
        u <= -g ? (d = Math.max(0, -(-o * s + r)), u = d > 0 ? -s : Math.min(Math.max(-s, -a), s), m = -d * d + u * (u + 2 * a) + l) : u <= g ? (d = 0, u = Math.min(Math.max(-s, -a), s), m = u * (u + 2 * a) + l) : (d = Math.max(0, -(o * s + r)), u = d > 0 ? s : Math.min(Math.max(-s, -a), s), m = -d * d + u * (u + 2 * a) + l);
    else
      u = o > 0 ? -s : s, d = Math.max(0, -(o * u + r)), m = -d * d + u * (u + 2 * a) + l;
    return n && n.copy(this.direction).multiplyScalar(d).add(this.origin), i && i.copy(Pi).multiplyScalar(u).add(As), m;
  }
  intersectSphere(e, t) {
    qt.subVectors(e.center, this.origin);
    const n = qt.dot(this.direction), i = qt.dot(qt) - n * n, s = e.radius * e.radius;
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
    const l = 1 / this.direction.x, h = 1 / this.direction.y, d = 1 / this.direction.z, u = this.origin;
    return l >= 0 ? (n = (e.min.x - u.x) * l, i = (e.max.x - u.x) * l) : (n = (e.max.x - u.x) * l, i = (e.min.x - u.x) * l), h >= 0 ? (s = (e.min.y - u.y) * h, o = (e.max.y - u.y) * h) : (s = (e.max.y - u.y) * h, o = (e.min.y - u.y) * h), n > o || s > i || ((s > n || n !== n) && (n = s), (o < i || i !== i) && (i = o), d >= 0 ? (r = (e.min.z - u.z) * d, a = (e.max.z - u.z) * d) : (r = (e.max.z - u.z) * d, a = (e.min.z - u.z) * d), n > a || r > i) || ((r > n || n !== n) && (n = r), (a < i || i !== i) && (i = a), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, qt) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    Ts.subVectors(t, e), Ii.subVectors(n, e), Cs.crossVectors(Ts, Ii);
    let o = this.direction.dot(Cs), r;
    if (o > 0) {
      if (i)
        return null;
      r = 1;
    } else if (o < 0)
      r = -1, o = -o;
    else
      return null;
    an.subVectors(this.origin, e);
    const a = r * this.direction.dot(Ii.crossVectors(an, Ii));
    if (a < 0)
      return null;
    const l = r * this.direction.dot(Ts.cross(an));
    if (l < 0 || a + l > o)
      return null;
    const h = -r * an.dot(Cs);
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
  set(e, t, n, i, s, o, r, a, l, h, d, u, m, g, p, f) {
    const _ = this.elements;
    return _[0] = e, _[4] = t, _[8] = n, _[12] = i, _[1] = s, _[5] = o, _[9] = r, _[13] = a, _[2] = l, _[6] = h, _[10] = d, _[14] = u, _[3] = m, _[7] = g, _[11] = p, _[15] = f, this;
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
    const t = this.elements, n = e.x, i = e.y, s = e.z, o = Math.cos(n), r = Math.sin(n), a = Math.cos(i), l = Math.sin(i), h = Math.cos(s), d = Math.sin(s);
    if (e.order === "XYZ") {
      const u = o * h, m = o * d, g = r * h, p = r * d;
      t[0] = a * h, t[4] = -a * d, t[8] = l, t[1] = m + g * l, t[5] = u - p * l, t[9] = -r * a, t[2] = p - u * l, t[6] = g + m * l, t[10] = o * a;
    } else if (e.order === "YXZ") {
      const u = a * h, m = a * d, g = l * h, p = l * d;
      t[0] = u + p * r, t[4] = g * r - m, t[8] = o * l, t[1] = o * d, t[5] = o * h, t[9] = -r, t[2] = m * r - g, t[6] = p + u * r, t[10] = o * a;
    } else if (e.order === "ZXY") {
      const u = a * h, m = a * d, g = l * h, p = l * d;
      t[0] = u - p * r, t[4] = -o * d, t[8] = g + m * r, t[1] = m + g * r, t[5] = o * h, t[9] = p - u * r, t[2] = -o * l, t[6] = r, t[10] = o * a;
    } else if (e.order === "ZYX") {
      const u = o * h, m = o * d, g = r * h, p = r * d;
      t[0] = a * h, t[4] = g * l - m, t[8] = u * l + p, t[1] = a * d, t[5] = p * l + u, t[9] = m * l - g, t[2] = -l, t[6] = r * a, t[10] = o * a;
    } else if (e.order === "YZX") {
      const u = o * a, m = o * l, g = r * a, p = r * l;
      t[0] = a * h, t[4] = p - u * d, t[8] = g * d + m, t[1] = d, t[5] = o * h, t[9] = -r * h, t[2] = -l * h, t[6] = m * d + g, t[10] = u - p * d;
    } else if (e.order === "XZY") {
      const u = o * a, m = o * l, g = r * a, p = r * l;
      t[0] = a * h, t[4] = -d, t[8] = l * h, t[1] = u * d + p, t[5] = o * h, t[9] = m * d - g, t[2] = g * d - m, t[6] = r * h, t[10] = p * d + u;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Ta, e, Ca);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return gt.subVectors(e, t), gt.lengthSq() === 0 && (gt.z = 1), gt.normalize(), ln.crossVectors(n, gt), ln.lengthSq() === 0 && (Math.abs(n.z) === 1 ? gt.x += 1e-4 : gt.z += 1e-4, gt.normalize(), ln.crossVectors(n, gt)), ln.normalize(), zi.crossVectors(gt, ln), i[0] = ln.x, i[4] = zi.x, i[8] = gt.x, i[1] = ln.y, i[5] = zi.y, i[9] = gt.y, i[2] = ln.z, i[6] = zi.z, i[10] = gt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, o = n[0], r = n[4], a = n[8], l = n[12], h = n[1], d = n[5], u = n[9], m = n[13], g = n[2], p = n[6], f = n[10], _ = n[14], v = n[3], w = n[7], x = n[11], M = n[15], S = i[0], L = i[4], y = i[8], T = i[12], P = i[1], z = i[5], H = i[9], B = i[13], C = i[2], F = i[6], D = i[10], X = i[14], U = i[3], N = i[7], V = i[11], J = i[15];
    return s[0] = o * S + r * P + a * C + l * U, s[4] = o * L + r * z + a * F + l * N, s[8] = o * y + r * H + a * D + l * V, s[12] = o * T + r * B + a * X + l * J, s[1] = h * S + d * P + u * C + m * U, s[5] = h * L + d * z + u * F + m * N, s[9] = h * y + d * H + u * D + m * V, s[13] = h * T + d * B + u * X + m * J, s[2] = g * S + p * P + f * C + _ * U, s[6] = g * L + p * z + f * F + _ * N, s[10] = g * y + p * H + f * D + _ * V, s[14] = g * T + p * B + f * X + _ * J, s[3] = v * S + w * P + x * C + M * U, s[7] = v * L + w * z + x * F + M * N, s[11] = v * y + w * H + x * D + M * V, s[15] = v * T + w * B + x * X + M * J, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], o = e[1], r = e[5], a = e[9], l = e[13], h = e[2], d = e[6], u = e[10], m = e[14], g = e[3], p = e[7], f = e[11], _ = e[15];
    return g * (+s * a * d - i * l * d - s * r * u + n * l * u + i * r * m - n * a * m) + p * (+t * a * m - t * l * u + s * o * u - i * o * m + i * l * h - s * a * h) + f * (+t * l * d - t * r * m - s * o * d + n * o * m + s * r * h - n * l * h) + _ * (-i * r * h - t * a * d + t * r * u + i * o * d - n * o * u + n * a * h);
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
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], o = e[4], r = e[5], a = e[6], l = e[7], h = e[8], d = e[9], u = e[10], m = e[11], g = e[12], p = e[13], f = e[14], _ = e[15], v = d * f * l - p * u * l + p * a * m - r * f * m - d * a * _ + r * u * _, w = g * u * l - h * f * l - g * a * m + o * f * m + h * a * _ - o * u * _, x = h * p * l - g * d * l + g * r * m - o * p * m - h * r * _ + o * d * _, M = g * d * a - h * p * a - g * r * u + o * p * u + h * r * f - o * d * f, S = t * v + n * w + i * x + s * M;
    if (S === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const L = 1 / S;
    return e[0] = v * L, e[1] = (p * u * s - d * f * s - p * i * m + n * f * m + d * i * _ - n * u * _) * L, e[2] = (r * f * s - p * a * s + p * i * l - n * f * l - r * i * _ + n * a * _) * L, e[3] = (d * a * s - r * u * s - d * i * l + n * u * l + r * i * m - n * a * m) * L, e[4] = w * L, e[5] = (h * f * s - g * u * s + g * i * m - t * f * m - h * i * _ + t * u * _) * L, e[6] = (g * a * s - o * f * s - g * i * l + t * f * l + o * i * _ - t * a * _) * L, e[7] = (o * u * s - h * a * s + h * i * l - t * u * l - o * i * m + t * a * m) * L, e[8] = x * L, e[9] = (g * d * s - h * p * s - g * n * m + t * p * m + h * n * _ - t * d * _) * L, e[10] = (o * p * s - g * r * s + g * n * l - t * p * l - o * n * _ + t * r * _) * L, e[11] = (h * r * s - o * d * s - h * n * l + t * d * l + o * n * m - t * r * m) * L, e[12] = M * L, e[13] = (h * p * i - g * d * i + g * n * u - t * p * u - h * n * f + t * d * f) * L, e[14] = (g * r * i - o * p * i - g * n * a + t * p * a + o * n * f - t * r * f) * L, e[15] = (o * d * i - h * r * i + h * n * a - t * d * a - o * n * u + t * r * u) * L, this;
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
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, o = e.x, r = e.y, a = e.z, l = s * o, h = s * r;
    return this.set(
      l * o + n,
      l * r - i * a,
      l * a + i * r,
      0,
      l * r + i * a,
      h * r + n,
      h * a - i * o,
      0,
      l * a - i * r,
      h * a + i * o,
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
    const i = this.elements, s = t._x, o = t._y, r = t._z, a = t._w, l = s + s, h = o + o, d = r + r, u = s * l, m = s * h, g = s * d, p = o * h, f = o * d, _ = r * d, v = a * l, w = a * h, x = a * d, M = n.x, S = n.y, L = n.z;
    return i[0] = (1 - (p + _)) * M, i[1] = (m + x) * M, i[2] = (g - w) * M, i[3] = 0, i[4] = (m - x) * S, i[5] = (1 - (u + _)) * S, i[6] = (f + v) * S, i[7] = 0, i[8] = (g + w) * L, i[9] = (f - v) * L, i[10] = (1 - (u + p)) * L, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Nn.set(i[0], i[1], i[2]).length();
    const o = Nn.set(i[4], i[5], i[6]).length(), r = Nn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], Rt.copy(this);
    const l = 1 / s, h = 1 / o, d = 1 / r;
    return Rt.elements[0] *= l, Rt.elements[1] *= l, Rt.elements[2] *= l, Rt.elements[4] *= h, Rt.elements[5] *= h, Rt.elements[6] *= h, Rt.elements[8] *= d, Rt.elements[9] *= d, Rt.elements[10] *= d, t.setFromRotationMatrix(Rt), n.x = s, n.y = o, n.z = r, this;
  }
  makePerspective(e, t, n, i, s, o) {
    const r = this.elements, a = 2 * s / (t - e), l = 2 * s / (n - i), h = (t + e) / (t - e), d = (n + i) / (n - i), u = -(o + s) / (o - s), m = -2 * o * s / (o - s);
    return r[0] = a, r[4] = 0, r[8] = h, r[12] = 0, r[1] = 0, r[5] = l, r[9] = d, r[13] = 0, r[2] = 0, r[6] = 0, r[10] = u, r[14] = m, r[3] = 0, r[7] = 0, r[11] = -1, r[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, o) {
    const r = this.elements, a = 1 / (t - e), l = 1 / (n - i), h = 1 / (o - s), d = (t + e) * a, u = (n + i) * l, m = (o + s) * h;
    return r[0] = 2 * a, r[4] = 0, r[8] = 0, r[12] = -d, r[1] = 0, r[5] = 2 * l, r[9] = 0, r[13] = -u, r[2] = 0, r[6] = 0, r[10] = -2 * h, r[14] = -m, r[3] = 0, r[7] = 0, r[11] = 0, r[15] = 1, this;
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
const Nn = /* @__PURE__ */ new I(), Rt = /* @__PURE__ */ new He(), Ta = /* @__PURE__ */ new I(0, 0, 0), Ca = /* @__PURE__ */ new I(1, 1, 1), ln = /* @__PURE__ */ new I(), zi = /* @__PURE__ */ new I(), gt = /* @__PURE__ */ new I(), Ar = /* @__PURE__ */ new He(), Tr = /* @__PURE__ */ new Si();
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
    const i = e.elements, s = i[0], o = i[4], r = i[8], a = i[1], l = i[5], h = i[9], d = i[2], u = i[6], m = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(vt(r, -1, 1)), Math.abs(r) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(u, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-vt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(r, m), this._z = Math.atan2(a, l)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(vt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-d, m), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(a, s));
        break;
      case "ZYX":
        this._y = Math.asin(-vt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(u, m), this._z = Math.atan2(a, s)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(vt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(r, m));
        break;
      case "XZY":
        this._z = Math.asin(-vt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(r, s)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Ar.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ar, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Tr.setFromEuler(this), this.setFromQuaternion(Tr, e);
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
class Go {
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
let La = 0;
const Cr = /* @__PURE__ */ new I(), On = /* @__PURE__ */ new Si(), Xt = /* @__PURE__ */ new He(), Bi = /* @__PURE__ */ new I(), hi = /* @__PURE__ */ new I(), Ra = /* @__PURE__ */ new I(), Da = /* @__PURE__ */ new Si(), Lr = /* @__PURE__ */ new I(1, 0, 0), Rr = /* @__PURE__ */ new I(0, 1, 0), Dr = /* @__PURE__ */ new I(0, 0, 1), Fa = { type: "added" }, Fr = { type: "removed" };
class it extends si {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: La++ }), this.uuid = fn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = it.DefaultUp.clone();
    const e = new I(), t = new Ai(), n = new Si(), i = new I(1, 1, 1);
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
        value: new At()
      }
    }), this.matrix = new He(), this.matrixWorld = new He(), this.matrixAutoUpdate = it.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Go(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return this.rotateOnAxis(Lr, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Rr, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Dr, e);
  }
  translateOnAxis(e, t) {
    return Cr.copy(e).applyQuaternion(this.quaternion), this.position.add(Cr.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Lr, e);
  }
  translateY(e) {
    return this.translateOnAxis(Rr, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Dr, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(Xt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Bi.copy(e) : Bi.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), hi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Xt.lookAt(hi, Bi, this.up) : Xt.lookAt(Bi, hi, this.up), this.quaternion.setFromRotationMatrix(Xt), i && (Xt.extractRotation(i.matrixWorld), On.setFromRotationMatrix(Xt), this.quaternion.premultiply(On.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Fa)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Fr)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(Fr);
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(hi, e, Ra), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(hi, Da, e), e;
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
          for (let l = 0, h = a.length; l < h; l++) {
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
      const r = o(e.geometries), a = o(e.materials), l = o(e.textures), h = o(e.images), d = o(e.shapes), u = o(e.skeletons), m = o(e.animations), g = o(e.nodes);
      r.length > 0 && (n.geometries = r), a.length > 0 && (n.materials = a), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), d.length > 0 && (n.shapes = d), u.length > 0 && (n.skeletons = u), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function o(r) {
      const a = [];
      for (const l in r) {
        const h = r[l];
        delete h.metadata, a.push(h);
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
it.DefaultUp = /* @__PURE__ */ new I(0, 1, 0);
it.DefaultMatrixAutoUpdate = !0;
const Dt = /* @__PURE__ */ new I(), jt = /* @__PURE__ */ new I(), Ls = /* @__PURE__ */ new I(), Yt = /* @__PURE__ */ new I(), Un = /* @__PURE__ */ new I(), Gn = /* @__PURE__ */ new I(), Pr = /* @__PURE__ */ new I(), Rs = /* @__PURE__ */ new I(), Ds = /* @__PURE__ */ new I(), Fs = /* @__PURE__ */ new I();
class kt {
  constructor(e = new I(), t = new I(), n = new I()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Dt.subVectors(e, t), i.cross(Dt);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    Dt.subVectors(i, t), jt.subVectors(n, t), Ls.subVectors(e, t);
    const o = Dt.dot(Dt), r = Dt.dot(jt), a = Dt.dot(Ls), l = jt.dot(jt), h = jt.dot(Ls), d = o * l - r * r;
    if (d === 0)
      return s.set(-2, -1, -1);
    const u = 1 / d, m = (l * a - r * h) * u, g = (o * h - r * a) * u;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Yt), Yt.x >= 0 && Yt.y >= 0 && Yt.x + Yt.y <= 1;
  }
  static getUV(e, t, n, i, s, o, r, a) {
    return this.getBarycoord(e, t, n, i, Yt), a.set(0, 0), a.addScaledVector(s, Yt.x), a.addScaledVector(o, Yt.y), a.addScaledVector(r, Yt.z), a;
  }
  static isFrontFacing(e, t, n, i) {
    return Dt.subVectors(n, t), jt.subVectors(e, t), Dt.cross(jt).dot(i) < 0;
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
    return Dt.subVectors(this.c, this.b), jt.subVectors(this.a, this.b), Dt.cross(jt).length() * 0.5;
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
    Un.subVectors(i, n), Gn.subVectors(s, n), Rs.subVectors(e, n);
    const a = Un.dot(Rs), l = Gn.dot(Rs);
    if (a <= 0 && l <= 0)
      return t.copy(n);
    Ds.subVectors(e, i);
    const h = Un.dot(Ds), d = Gn.dot(Ds);
    if (h >= 0 && d <= h)
      return t.copy(i);
    const u = a * d - h * l;
    if (u <= 0 && a >= 0 && h <= 0)
      return o = a / (a - h), t.copy(n).addScaledVector(Un, o);
    Fs.subVectors(e, s);
    const m = Un.dot(Fs), g = Gn.dot(Fs);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const p = m * l - a * g;
    if (p <= 0 && l >= 0 && g <= 0)
      return r = l / (l - g), t.copy(n).addScaledVector(Gn, r);
    const f = h * g - m * d;
    if (f <= 0 && d - h >= 0 && m - g >= 0)
      return Pr.subVectors(s, i), r = (d - h) / (d - h + (m - g)), t.copy(i).addScaledVector(Pr, r);
    const _ = 1 / (f + p + u);
    return o = p * _, r = u * _, t.copy(n).addScaledVector(Un, o).addScaledVector(Gn, r);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Pa = 0;
class tn extends si {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Pa++ }), this.uuid = fn(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
class us extends tn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Me(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Ye = /* @__PURE__ */ new I(), Ni = /* @__PURE__ */ new we();
class Tt {
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
      o === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), o = new Me()), t[n++] = o.r, t[n++] = o.g, t[n++] = o.b;
    }
    return this;
  }
  copyVector2sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let o = e[i];
      o === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), o = new we()), t[n++] = o.x, t[n++] = o.y;
    }
    return this;
  }
  copyVector3sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, s = e.length; i < s; i++) {
      let o = e[i];
      o === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), o = new I()), t[n++] = o.x, t[n++] = o.y, t[n++] = o.z;
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
class ko extends Tt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Wo extends Tt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class ot extends Tt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Ia = 0;
const St = /* @__PURE__ */ new He(), Ps = /* @__PURE__ */ new it(), kn = /* @__PURE__ */ new I(), _t = /* @__PURE__ */ new Ei(), ui = /* @__PURE__ */ new Ei(), et = /* @__PURE__ */ new I();
class yt extends si {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Ia++ }), this.uuid = fn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Io(e) ? Wo : ko)(e, 1) : this.index = e, this;
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
      const s = new At().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return St.makeRotationFromQuaternion(e), this.applyMatrix4(St), this;
  }
  rotateX(e) {
    return St.makeRotationX(e), this.applyMatrix4(St), this;
  }
  rotateY(e) {
    return St.makeRotationY(e), this.applyMatrix4(St), this;
  }
  rotateZ(e) {
    return St.makeRotationZ(e), this.applyMatrix4(St), this;
  }
  translate(e, t, n) {
    return St.makeTranslation(e, t, n), this.applyMatrix4(St), this;
  }
  scale(e, t, n) {
    return St.makeScale(e, t, n), this.applyMatrix4(St), this;
  }
  lookAt(e) {
    return Ps.lookAt(e), Ps.updateMatrix(), this.applyMatrix4(Ps.matrix), this;
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
        new I(-1 / 0, -1 / 0, -1 / 0),
        new I(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          _t.setFromBufferAttribute(s), this.morphTargetsRelative ? (et.addVectors(this.boundingBox.min, _t.min), this.boundingBox.expandByPoint(et), et.addVectors(this.boundingBox.max, _t.max), this.boundingBox.expandByPoint(et)) : (this.boundingBox.expandByPoint(_t.min), this.boundingBox.expandByPoint(_t.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ni());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new I(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (_t.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const r = t[s];
          ui.setFromBufferAttribute(r), this.morphTargetsRelative ? (et.addVectors(_t.min, ui.min), _t.expandByPoint(et), et.addVectors(_t.max, ui.max), _t.expandByPoint(et)) : (_t.expandByPoint(ui.min), _t.expandByPoint(ui.max));
        }
      _t.getCenter(n);
      let i = 0;
      for (let s = 0, o = e.count; s < o; s++)
        et.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(et));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const r = t[s], a = this.morphTargetsRelative;
          for (let l = 0, h = r.count; l < h; l++)
            et.fromBufferAttribute(r, l), a && (kn.fromBufferAttribute(e, l), et.add(kn)), i = Math.max(i, n.distanceToSquared(et));
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Tt(new Float32Array(4 * r), 4));
    const a = this.getAttribute("tangent").array, l = [], h = [];
    for (let P = 0; P < r; P++)
      l[P] = new I(), h[P] = new I();
    const d = new I(), u = new I(), m = new I(), g = new we(), p = new we(), f = new we(), _ = new I(), v = new I();
    function w(P, z, H) {
      d.fromArray(i, P * 3), u.fromArray(i, z * 3), m.fromArray(i, H * 3), g.fromArray(o, P * 2), p.fromArray(o, z * 2), f.fromArray(o, H * 2), u.sub(d), m.sub(d), p.sub(g), f.sub(g);
      const B = 1 / (p.x * f.y - f.x * p.y);
      !isFinite(B) || (_.copy(u).multiplyScalar(f.y).addScaledVector(m, -p.y).multiplyScalar(B), v.copy(m).multiplyScalar(p.x).addScaledVector(u, -f.x).multiplyScalar(B), l[P].add(_), l[z].add(_), l[H].add(_), h[P].add(v), h[z].add(v), h[H].add(v));
    }
    let x = this.groups;
    x.length === 0 && (x = [{
      start: 0,
      count: n.length
    }]);
    for (let P = 0, z = x.length; P < z; ++P) {
      const H = x[P], B = H.start, C = H.count;
      for (let F = B, D = B + C; F < D; F += 3)
        w(
          n[F + 0],
          n[F + 1],
          n[F + 2]
        );
    }
    const M = new I(), S = new I(), L = new I(), y = new I();
    function T(P) {
      L.fromArray(s, P * 3), y.copy(L);
      const z = l[P];
      M.copy(z), M.sub(L.multiplyScalar(L.dot(z))).normalize(), S.crossVectors(y, z);
      const B = S.dot(h[P]) < 0 ? -1 : 1;
      a[P * 4] = M.x, a[P * 4 + 1] = M.y, a[P * 4 + 2] = M.z, a[P * 4 + 3] = B;
    }
    for (let P = 0, z = x.length; P < z; ++P) {
      const H = x[P], B = H.start, C = H.count;
      for (let F = B, D = B + C; F < D; F += 3)
        T(n[F + 0]), T(n[F + 1]), T(n[F + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Tt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let u = 0, m = n.count; u < m; u++)
          n.setXYZ(u, 0, 0, 0);
      const i = new I(), s = new I(), o = new I(), r = new I(), a = new I(), l = new I(), h = new I(), d = new I();
      if (e)
        for (let u = 0, m = e.count; u < m; u += 3) {
          const g = e.getX(u + 0), p = e.getX(u + 1), f = e.getX(u + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, p), o.fromBufferAttribute(t, f), h.subVectors(o, s), d.subVectors(i, s), h.cross(d), r.fromBufferAttribute(n, g), a.fromBufferAttribute(n, p), l.fromBufferAttribute(n, f), r.add(h), a.add(h), l.add(h), n.setXYZ(g, r.x, r.y, r.z), n.setXYZ(p, a.x, a.y, a.z), n.setXYZ(f, l.x, l.y, l.z);
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
      const o = n[i].array, r = e.attributes[i], a = r.array, l = r.itemSize * t, h = Math.min(a.length, o.length - l);
      for (let d = 0, u = l; d < h; d++, u++)
        o[u] = a[d];
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
      const l = r.array, h = r.itemSize, d = r.normalized, u = new l.constructor(a.length * h);
      let m = 0, g = 0;
      for (let p = 0, f = a.length; p < f; p++) {
        r.isInterleavedBufferAttribute ? m = a[p] * r.data.stride + r.offset : m = a[p] * h;
        for (let _ = 0; _ < h; _++)
          u[g++] = l[m++];
      }
      return new Tt(u, h, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new yt(), n = this.index.array, i = this.attributes;
    for (const r in i) {
      const a = i[r], l = e(a, n);
      t.setAttribute(r, l);
    }
    const s = this.morphAttributes;
    for (const r in s) {
      const a = [], l = s[r];
      for (let h = 0, d = l.length; h < d; h++) {
        const u = l[h], m = e(u, n);
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
      const l = this.morphAttributes[a], h = [];
      for (let d = 0, u = l.length; d < u; d++) {
        const m = l[d];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && (i[a] = h, s = !0);
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
      const h = i[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [], d = s[l];
      for (let u = 0, m = d.length; u < m; u++)
        h.push(d[u].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, h = o.length; l < h; l++) {
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
const Ir = /* @__PURE__ */ new He(), Wn = /* @__PURE__ */ new Uo(), Is = /* @__PURE__ */ new ni(), cn = /* @__PURE__ */ new I(), hn = /* @__PURE__ */ new I(), un = /* @__PURE__ */ new I(), zs = /* @__PURE__ */ new I(), Bs = /* @__PURE__ */ new I(), Ns = /* @__PURE__ */ new I(), Oi = /* @__PURE__ */ new I(), Ui = /* @__PURE__ */ new I(), Gi = /* @__PURE__ */ new I(), ki = /* @__PURE__ */ new we(), Wi = /* @__PURE__ */ new we(), Vi = /* @__PURE__ */ new we(), Os = /* @__PURE__ */ new I(), Hi = /* @__PURE__ */ new I();
class ke extends it {
  constructor(e = new yt(), t = new us()) {
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
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), Is.copy(n.boundingSphere), Is.applyMatrix4(s), e.ray.intersectsSphere(Is) === !1) || (Ir.copy(s).invert(), Wn.copy(e.ray).applyMatrix4(Ir), n.boundingBox !== null && Wn.intersectsBox(n.boundingBox) === !1))
      return;
    let o;
    const r = n.index, a = n.attributes.position, l = n.morphAttributes.position, h = n.morphTargetsRelative, d = n.attributes.uv, u = n.attributes.uv2, m = n.groups, g = n.drawRange;
    if (r !== null)
      if (Array.isArray(i))
        for (let p = 0, f = m.length; p < f; p++) {
          const _ = m[p], v = i[_.materialIndex], w = Math.max(_.start, g.start), x = Math.min(r.count, Math.min(_.start + _.count, g.start + g.count));
          for (let M = w, S = x; M < S; M += 3) {
            const L = r.getX(M), y = r.getX(M + 1), T = r.getX(M + 2);
            o = qi(this, v, e, Wn, a, l, h, d, u, L, y, T), o && (o.faceIndex = Math.floor(M / 3), o.face.materialIndex = _.materialIndex, t.push(o));
          }
        }
      else {
        const p = Math.max(0, g.start), f = Math.min(r.count, g.start + g.count);
        for (let _ = p, v = f; _ < v; _ += 3) {
          const w = r.getX(_), x = r.getX(_ + 1), M = r.getX(_ + 2);
          o = qi(this, i, e, Wn, a, l, h, d, u, w, x, M), o && (o.faceIndex = Math.floor(_ / 3), t.push(o));
        }
      }
    else if (a !== void 0)
      if (Array.isArray(i))
        for (let p = 0, f = m.length; p < f; p++) {
          const _ = m[p], v = i[_.materialIndex], w = Math.max(_.start, g.start), x = Math.min(a.count, Math.min(_.start + _.count, g.start + g.count));
          for (let M = w, S = x; M < S; M += 3) {
            const L = M, y = M + 1, T = M + 2;
            o = qi(this, v, e, Wn, a, l, h, d, u, L, y, T), o && (o.faceIndex = Math.floor(M / 3), o.face.materialIndex = _.materialIndex, t.push(o));
          }
        }
      else {
        const p = Math.max(0, g.start), f = Math.min(a.count, g.start + g.count);
        for (let _ = p, v = f; _ < v; _ += 3) {
          const w = _, x = _ + 1, M = _ + 2;
          o = qi(this, i, e, Wn, a, l, h, d, u, w, x, M), o && (o.faceIndex = Math.floor(_ / 3), t.push(o));
        }
      }
  }
}
function za(c, e, t, n, i, s, o, r) {
  let a;
  if (e.side === 1 ? a = n.intersectTriangle(o, s, i, !0, r) : a = n.intersectTriangle(i, s, o, e.side !== 2, r), a === null)
    return null;
  Hi.copy(r), Hi.applyMatrix4(c.matrixWorld);
  const l = t.ray.origin.distanceTo(Hi);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Hi.clone(),
    object: c
  };
}
function qi(c, e, t, n, i, s, o, r, a, l, h, d) {
  cn.fromBufferAttribute(i, l), hn.fromBufferAttribute(i, h), un.fromBufferAttribute(i, d);
  const u = c.morphTargetInfluences;
  if (s && u) {
    Oi.set(0, 0, 0), Ui.set(0, 0, 0), Gi.set(0, 0, 0);
    for (let g = 0, p = s.length; g < p; g++) {
      const f = u[g], _ = s[g];
      f !== 0 && (zs.fromBufferAttribute(_, l), Bs.fromBufferAttribute(_, h), Ns.fromBufferAttribute(_, d), o ? (Oi.addScaledVector(zs, f), Ui.addScaledVector(Bs, f), Gi.addScaledVector(Ns, f)) : (Oi.addScaledVector(zs.sub(cn), f), Ui.addScaledVector(Bs.sub(hn), f), Gi.addScaledVector(Ns.sub(un), f)));
    }
    cn.add(Oi), hn.add(Ui), un.add(Gi);
  }
  c.isSkinnedMesh && (c.boneTransform(l, cn), c.boneTransform(h, hn), c.boneTransform(d, un));
  const m = za(c, e, t, n, cn, hn, un, Os);
  if (m) {
    r && (ki.fromBufferAttribute(r, l), Wi.fromBufferAttribute(r, h), Vi.fromBufferAttribute(r, d), m.uv = kt.getUV(Os, cn, hn, un, ki, Wi, Vi, new we())), a && (ki.fromBufferAttribute(a, l), Wi.fromBufferAttribute(a, h), Vi.fromBufferAttribute(a, d), m.uv2 = kt.getUV(Os, cn, hn, un, ki, Wi, Vi, new we()));
    const g = {
      a: l,
      b: h,
      c: d,
      normal: new I(),
      materialIndex: 0
    };
    kt.getNormal(cn, hn, un, g.normal), m.face = g;
  }
  return m;
}
class ri extends yt {
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
    const a = [], l = [], h = [], d = [];
    let u = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, s, 0), g("z", "y", "x", 1, -1, n, t, -e, o, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, o, 2), g("x", "z", "y", 1, -1, e, n, -t, i, o, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(a), this.setAttribute("position", new ot(l, 3)), this.setAttribute("normal", new ot(h, 3)), this.setAttribute("uv", new ot(d, 2));
    function g(p, f, _, v, w, x, M, S, L, y, T) {
      const P = x / L, z = M / y, H = x / 2, B = M / 2, C = S / 2, F = L + 1, D = y + 1;
      let X = 0, U = 0;
      const N = new I();
      for (let V = 0; V < D; V++) {
        const J = V * z - B;
        for (let W = 0; W < F; W++) {
          const ee = W * P - H;
          N[p] = ee * v, N[f] = J * w, N[_] = C, l.push(N.x, N.y, N.z), N[p] = 0, N[f] = 0, N[_] = S > 0 ? 1 : -1, h.push(N.x, N.y, N.z), d.push(W / L), d.push(1 - V / y), X += 1;
        }
      }
      for (let V = 0; V < y; V++)
        for (let J = 0; J < L; J++) {
          const W = u + J + F * V, ee = u + J + F * (V + 1), ce = u + (J + 1) + F * (V + 1), ge = u + (J + 1) + F * V;
          a.push(W, ee, ge), a.push(ee, ce, ge), U += 6;
        }
      r.addGroup(m, U, T), m += U, u += X;
    }
  }
  static fromJSON(e) {
    return new ri(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
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
function Ba(c) {
  const e = [];
  for (let t = 0; t < c.length; t++)
    e.push(c[t].clone());
  return e;
}
const Na = { clone: ii, merge: rt };
var Oa = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Ua = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Ln extends tn {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Oa, this.fragmentShader = Ua, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ii(e.uniforms), this.uniformsGroups = Ba(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class Vo extends it {
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
class ft extends Vo {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = sr * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(_s * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return sr * 2 * Math.atan(
      Math.tan(_s * 0.5 * this.fov) / this.zoom
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
    let t = e * Math.tan(_s * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
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
const Vn = 90, Hn = 1;
class Ga extends it {
  constructor(e, t, n) {
    if (super(), this.type = "CubeCamera", n.isWebGLCubeRenderTarget !== !0) {
      console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
      return;
    }
    this.renderTarget = n;
    const i = new ft(Vn, Hn, e, t);
    i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new I(1, 0, 0)), this.add(i);
    const s = new ft(Vn, Hn, e, t);
    s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new I(-1, 0, 0)), this.add(s);
    const o = new ft(Vn, Hn, e, t);
    o.layers = this.layers, o.up.set(0, 0, 1), o.lookAt(new I(0, 1, 0)), this.add(o);
    const r = new ft(Vn, Hn, e, t);
    r.layers = this.layers, r.up.set(0, 0, -1), r.lookAt(new I(0, -1, 0)), this.add(r);
    const a = new ft(Vn, Hn, e, t);
    a.layers = this.layers, a.up.set(0, -1, 0), a.lookAt(new I(0, 0, 1)), this.add(a);
    const l = new ft(Vn, Hn, e, t);
    l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new I(0, 0, -1)), this.add(l);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, s, o, r, a, l] = this.children, h = e.getRenderTarget(), d = e.toneMapping, u = e.xr.enabled;
    e.toneMapping = 0, e.xr.enabled = !1;
    const m = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, r), e.setRenderTarget(n, 4), e.render(t, a), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(h), e.toneMapping = d, e.xr.enabled = u, n.texture.needsPMREMUpdate = !0;
  }
}
class Ho extends xt {
  constructor(e, t, n, i, s, o, r, a, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : 301, super(e, t, n, i, s, o, r, a, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class ka extends Cn {
  constructor(e, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new Ho(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006;
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
    }, i = new ri(5, 5, 5), s = new Ln({
      name: "CubemapFromEquirect",
      uniforms: ii(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const o = new ke(i, s), r = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new Ga(1, 10, this).update(e, o), t.minFilter = r, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const Us = /* @__PURE__ */ new I(), Wa = /* @__PURE__ */ new I(), Va = /* @__PURE__ */ new At();
class xn {
  constructor(e = new I(1, 0, 0), t = 0) {
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
    const i = Us.subVectors(n, t).cross(Wa.subVectors(e, t)).normalize();
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
    const n = e.delta(Us), i = this.normal.dot(n);
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
    const n = t || Va.getNormalMatrix(e), i = this.coplanarPoint(Us).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
const qn = /* @__PURE__ */ new ni(), Xi = /* @__PURE__ */ new I();
class ur {
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
    const t = this.planes, n = e.elements, i = n[0], s = n[1], o = n[2], r = n[3], a = n[4], l = n[5], h = n[6], d = n[7], u = n[8], m = n[9], g = n[10], p = n[11], f = n[12], _ = n[13], v = n[14], w = n[15];
    return t[0].setComponents(r - i, d - a, p - u, w - f).normalize(), t[1].setComponents(r + i, d + a, p + u, w + f).normalize(), t[2].setComponents(r + s, d + l, p + m, w + _).normalize(), t[3].setComponents(r - s, d - l, p - m, w - _).normalize(), t[4].setComponents(r - o, d - h, p - g, w - v).normalize(), t[5].setComponents(r + o, d + h, p + g, w + v).normalize(), this;
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
function qo() {
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
function Ha(c, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, h) {
    const d = l.array, u = l.usage, m = c.createBuffer();
    c.bindBuffer(h, m), c.bufferData(h, d, u), l.onUploadCallback();
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
  function s(l, h, d) {
    const u = h.array, m = h.updateRange;
    c.bindBuffer(d, l), m.count === -1 ? c.bufferSubData(d, 0, u) : (t ? c.bufferSubData(
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
  function o(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function r(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h && (c.deleteBuffer(h.buffer), n.delete(l));
  }
  function a(l, h) {
    if (l.isGLBufferAttribute) {
      const u = n.get(l);
      (!u || u.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const d = n.get(l);
    d === void 0 ? n.set(l, i(l, h)) : d.version < l.version && (s(d.buffer, l, h), d.version = l.version);
  }
  return {
    get: o,
    remove: r,
    update: a
  };
}
class Mi extends yt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, o = t / 2, r = Math.floor(n), a = Math.floor(i), l = r + 1, h = a + 1, d = e / r, u = t / a, m = [], g = [], p = [], f = [];
    for (let _ = 0; _ < h; _++) {
      const v = _ * u - o;
      for (let w = 0; w < l; w++) {
        const x = w * d - s;
        g.push(x, -v, 0), p.push(0, 0, 1), f.push(w / r), f.push(1 - _ / a);
      }
    }
    for (let _ = 0; _ < a; _++)
      for (let v = 0; v < r; v++) {
        const w = v + l * _, x = v + l * (_ + 1), M = v + 1 + l * (_ + 1), S = v + 1 + l * _;
        m.push(w, x, S), m.push(x, M, S);
      }
    this.setIndex(m), this.setAttribute("position", new ot(g, 3)), this.setAttribute("normal", new ot(p, 3)), this.setAttribute("uv", new ot(f, 2));
  }
  static fromJSON(e) {
    return new Mi(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var qa = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, Xa = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, ja = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Ya = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, $a = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Za = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Ka = "vec3 transformed = vec3( position );", Ja = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Qa = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`, el = `#ifdef USE_IRIDESCENCE
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
#endif`, tl = `#ifdef USE_BUMPMAP
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
#endif`, nl = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, il = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, sl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, rl = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, ol = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, al = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, ll = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, cl = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, hl = `#define PI 3.141592653589793
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
}`, ul = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, dl = `vec3 transformedNormal = objectNormal;
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
#endif`, fl = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, pl = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, ml = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, gl = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, _l = "gl_FragColor = linearToOutputTexel( gl_FragColor );", vl = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, xl = `#ifdef USE_ENVMAP
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
#endif`, yl = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, wl = `#ifdef USE_ENVMAP
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
#endif`, bl = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Ml = `#ifdef USE_ENVMAP
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
#endif`, Sl = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, El = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Al = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Tl = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Cl = `#ifdef USE_GRADIENTMAP
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
}`, Ll = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Rl = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Dl = `vec3 diffuse = vec3( 1.0 );
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
#endif`, Fl = `uniform bool receiveShadow;
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
#endif`, Pl = `#if defined( USE_ENVMAP )
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
#endif`, Il = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, zl = `varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`, Bl = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Nl = `varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`, Ol = `PhysicalMaterial material;
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
#endif`, Ul = `struct PhysicalMaterial {
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
}`, Gl = `
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
#endif`, kl = `#if defined( RE_IndirectDiffuse )
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
#endif`, Wl = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, Vl = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Hl = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, ql = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Xl = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, jl = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Yl = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, $l = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Zl = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Kl = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Jl = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Ql = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, ec = `#ifdef USE_MORPHNORMALS
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
#endif`, tc = `#ifdef USE_MORPHTARGETS
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
#endif`, nc = `#ifdef USE_MORPHTARGETS
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
#endif`, ic = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`, sc = `#ifdef OBJECTSPACE_NORMALMAP
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
#endif`, rc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, oc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, ac = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, lc = `#ifdef USE_NORMALMAP
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
#endif`, cc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, hc = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, uc = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, dc = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, fc = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, pc = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, mc = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, gc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, _c = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, vc = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, xc = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, yc = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, wc = `#ifdef USE_SHADOWMAP
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
#endif`, bc = `#ifdef USE_SHADOWMAP
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
#endif`, Mc = `#ifdef USE_SHADOWMAP
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
#endif`, Sc = `float getShadowMask() {
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
}`, Ec = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Ac = `#ifdef USE_SKINNING
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
#endif`, Tc = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Cc = `#ifdef USE_SKINNING
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
#endif`, Lc = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Rc = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Dc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Fc = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Pc = `#ifdef USE_TRANSMISSION
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
#endif`, Ic = `#ifdef USE_TRANSMISSION
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
#endif`, zc = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, Bc = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, Nc = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, Oc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, Uc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, Gc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, kc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Wc = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Vc = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Hc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, qc = `#include <envmap_common_pars_fragment>
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
}`, Xc = `#include <common>
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
}`, jc = `#if DEPTH_PACKING == 3200
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
}`, Yc = `#define DISTANCE
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
}`, $c = `#define DISTANCE
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
}`, Zc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Kc = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Jc = `uniform float scale;
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
}`, Qc = `uniform vec3 diffuse;
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
}`, eh = `#include <common>
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
}`, th = `uniform vec3 diffuse;
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
}`, nh = `#define LAMBERT
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
}`, ih = `uniform vec3 diffuse;
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
}`, sh = `#define MATCAP
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
}`, rh = `#define MATCAP
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
}`, oh = `#define NORMAL
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
}`, ah = `#define NORMAL
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
}`, lh = `#define PHONG
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
}`, ch = `#define PHONG
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
}`, hh = `#define STANDARD
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
}`, uh = `#define STANDARD
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
}`, dh = `#define TOON
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
}`, fh = `#define TOON
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
}`, ph = `uniform float size;
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
}`, mh = `uniform vec3 diffuse;
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
}`, gh = `#include <common>
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
}`, _h = `uniform vec3 color;
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
}`, vh = `uniform float rotation;
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
}`, xh = `uniform vec3 diffuse;
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
  alphamap_fragment: qa,
  alphamap_pars_fragment: Xa,
  alphatest_fragment: ja,
  alphatest_pars_fragment: Ya,
  aomap_fragment: $a,
  aomap_pars_fragment: Za,
  begin_vertex: Ka,
  beginnormal_vertex: Ja,
  bsdfs: Qa,
  iridescence_fragment: el,
  bumpmap_pars_fragment: tl,
  clipping_planes_fragment: nl,
  clipping_planes_pars_fragment: il,
  clipping_planes_pars_vertex: sl,
  clipping_planes_vertex: rl,
  color_fragment: ol,
  color_pars_fragment: al,
  color_pars_vertex: ll,
  color_vertex: cl,
  common: hl,
  cube_uv_reflection_fragment: ul,
  defaultnormal_vertex: dl,
  displacementmap_pars_vertex: fl,
  displacementmap_vertex: pl,
  emissivemap_fragment: ml,
  emissivemap_pars_fragment: gl,
  encodings_fragment: _l,
  encodings_pars_fragment: vl,
  envmap_fragment: xl,
  envmap_common_pars_fragment: yl,
  envmap_pars_fragment: wl,
  envmap_pars_vertex: bl,
  envmap_physical_pars_fragment: Pl,
  envmap_vertex: Ml,
  fog_vertex: Sl,
  fog_pars_vertex: El,
  fog_fragment: Al,
  fog_pars_fragment: Tl,
  gradientmap_pars_fragment: Cl,
  lightmap_fragment: Ll,
  lightmap_pars_fragment: Rl,
  lights_lambert_vertex: Dl,
  lights_pars_begin: Fl,
  lights_toon_fragment: Il,
  lights_toon_pars_fragment: zl,
  lights_phong_fragment: Bl,
  lights_phong_pars_fragment: Nl,
  lights_physical_fragment: Ol,
  lights_physical_pars_fragment: Ul,
  lights_fragment_begin: Gl,
  lights_fragment_maps: kl,
  lights_fragment_end: Wl,
  logdepthbuf_fragment: Vl,
  logdepthbuf_pars_fragment: Hl,
  logdepthbuf_pars_vertex: ql,
  logdepthbuf_vertex: Xl,
  map_fragment: jl,
  map_pars_fragment: Yl,
  map_particle_fragment: $l,
  map_particle_pars_fragment: Zl,
  metalnessmap_fragment: Kl,
  metalnessmap_pars_fragment: Jl,
  morphcolor_vertex: Ql,
  morphnormal_vertex: ec,
  morphtarget_pars_vertex: tc,
  morphtarget_vertex: nc,
  normal_fragment_begin: ic,
  normal_fragment_maps: sc,
  normal_pars_fragment: rc,
  normal_pars_vertex: oc,
  normal_vertex: ac,
  normalmap_pars_fragment: lc,
  clearcoat_normal_fragment_begin: cc,
  clearcoat_normal_fragment_maps: hc,
  clearcoat_pars_fragment: uc,
  iridescence_pars_fragment: dc,
  output_fragment: fc,
  packing: pc,
  premultiplied_alpha_fragment: mc,
  project_vertex: gc,
  dithering_fragment: _c,
  dithering_pars_fragment: vc,
  roughnessmap_fragment: xc,
  roughnessmap_pars_fragment: yc,
  shadowmap_pars_fragment: wc,
  shadowmap_pars_vertex: bc,
  shadowmap_vertex: Mc,
  shadowmask_pars_fragment: Sc,
  skinbase_vertex: Ec,
  skinning_pars_vertex: Ac,
  skinning_vertex: Tc,
  skinnormal_vertex: Cc,
  specularmap_fragment: Lc,
  specularmap_pars_fragment: Rc,
  tonemapping_fragment: Dc,
  tonemapping_pars_fragment: Fc,
  transmission_fragment: Pc,
  transmission_pars_fragment: Ic,
  uv_pars_fragment: zc,
  uv_pars_vertex: Bc,
  uv_vertex: Nc,
  uv2_pars_fragment: Oc,
  uv2_pars_vertex: Uc,
  uv2_vertex: Gc,
  worldpos_vertex: kc,
  background_vert: Wc,
  background_frag: Vc,
  cube_vert: Hc,
  cube_frag: qc,
  depth_vert: Xc,
  depth_frag: jc,
  distanceRGBA_vert: Yc,
  distanceRGBA_frag: $c,
  equirect_vert: Zc,
  equirect_frag: Kc,
  linedashed_vert: Jc,
  linedashed_frag: Qc,
  meshbasic_vert: eh,
  meshbasic_frag: th,
  meshlambert_vert: nh,
  meshlambert_frag: ih,
  meshmatcap_vert: sh,
  meshmatcap_frag: rh,
  meshnormal_vert: oh,
  meshnormal_frag: ah,
  meshphong_vert: lh,
  meshphong_frag: ch,
  meshphysical_vert: hh,
  meshphysical_frag: uh,
  meshtoon_vert: dh,
  meshtoon_frag: fh,
  points_vert: ph,
  points_frag: mh,
  shadow_vert: gh,
  shadow_frag: _h,
  sprite_vert: vh,
  sprite_frag: xh
}, ne = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Me(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: /* @__PURE__ */ new At() },
    uv2Transform: { value: /* @__PURE__ */ new At() },
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
    normalScale: { value: /* @__PURE__ */ new we(1, 1) }
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
    fogColor: { value: /* @__PURE__ */ new Me(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new Me(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new At() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Me(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new we(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new At() }
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
        emissive: { value: /* @__PURE__ */ new Me(0) }
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
        emissive: { value: /* @__PURE__ */ new Me(0) },
        specular: { value: /* @__PURE__ */ new Me(1118481) },
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
        emissive: { value: /* @__PURE__ */ new Me(0) },
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
        emissive: { value: /* @__PURE__ */ new Me(0) }
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
      uvTransform: { value: /* @__PURE__ */ new At() },
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
        referencePosition: { value: /* @__PURE__ */ new I() },
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
        color: { value: /* @__PURE__ */ new Me(0) },
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
      clearcoatNormalScale: { value: /* @__PURE__ */ new we(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Me(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: /* @__PURE__ */ new we() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Me(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: /* @__PURE__ */ new Me(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: Ce.meshphysical_vert,
  fragmentShader: Ce.meshphysical_frag
};
function yh(c, e, t, n, i, s) {
  const o = new Me(0);
  let r = i === !0 ? 0 : 1, a, l, h = null, d = 0, u = null;
  function m(p, f) {
    let _ = !1, v = f.isScene === !0 ? f.background : null;
    v && v.isTexture && (v = e.get(v));
    const w = c.xr, x = w.getSession && w.getSession();
    x && x.environmentBlendMode === "additive" && (v = null), v === null ? g(o, r) : v && v.isColor && (g(v, 1), _ = !0), (c.autoClear || _) && c.clear(c.autoClearColor, c.autoClearDepth, c.autoClearStencil), v && (v.isCubeTexture || v.mapping === 306) ? (l === void 0 && (l = new ke(
      new ri(1, 1, 1),
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
    ), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(M, S, L) {
      this.matrixWorld.copyPosition(L.matrixWorld);
    }, Object.defineProperty(l.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), n.update(l)), l.material.uniforms.envMap.value = v, l.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, (h !== v || d !== v.version || u !== c.toneMapping) && (l.material.needsUpdate = !0, h = v, d = v.version, u = c.toneMapping), l.layers.enableAll(), p.unshift(l, l.geometry, l.material, 0, 0, null)) : v && v.isTexture && (a === void 0 && (a = new ke(
      new Mi(2, 2),
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
    ), a.geometry.deleteAttribute("normal"), Object.defineProperty(a.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), n.update(a)), a.material.uniforms.t2D.value = v, v.matrixAutoUpdate === !0 && v.updateMatrix(), a.material.uniforms.uvTransform.value.copy(v.matrix), (h !== v || d !== v.version || u !== c.toneMapping) && (a.material.needsUpdate = !0, h = v, d = v.version, u = c.toneMapping), a.layers.enableAll(), p.unshift(a, a.geometry, a.material, 0, 0, null));
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
function wh(c, e, t, n) {
  const i = c.getParameter(34921), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, r = {}, a = f(null);
  let l = a, h = !1;
  function d(C, F, D, X, U) {
    let N = !1;
    if (o) {
      const V = p(X, D, F);
      l !== V && (l = V, m(l.object)), N = _(C, X, D, U), N && v(C, X, D, U);
    } else {
      const V = F.wireframe === !0;
      (l.geometry !== X.id || l.program !== D.id || l.wireframe !== V) && (l.geometry = X.id, l.program = D.id, l.wireframe = V, N = !0);
    }
    U !== null && t.update(U, 34963), (N || h) && (h = !1, y(C, F, D, X), U !== null && c.bindBuffer(34963, t.get(U).buffer));
  }
  function u() {
    return n.isWebGL2 ? c.createVertexArray() : s.createVertexArrayOES();
  }
  function m(C) {
    return n.isWebGL2 ? c.bindVertexArray(C) : s.bindVertexArrayOES(C);
  }
  function g(C) {
    return n.isWebGL2 ? c.deleteVertexArray(C) : s.deleteVertexArrayOES(C);
  }
  function p(C, F, D) {
    const X = D.wireframe === !0;
    let U = r[C.id];
    U === void 0 && (U = {}, r[C.id] = U);
    let N = U[F.id];
    N === void 0 && (N = {}, U[F.id] = N);
    let V = N[X];
    return V === void 0 && (V = f(u()), N[X] = V), V;
  }
  function f(C) {
    const F = [], D = [], X = [];
    for (let U = 0; U < i; U++)
      F[U] = 0, D[U] = 0, X[U] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: F,
      enabledAttributes: D,
      attributeDivisors: X,
      object: C,
      attributes: {},
      index: null
    };
  }
  function _(C, F, D, X) {
    const U = l.attributes, N = F.attributes;
    let V = 0;
    const J = D.getAttributes();
    for (const W in J)
      if (J[W].location >= 0) {
        const ce = U[W];
        let ge = N[W];
        if (ge === void 0 && (W === "instanceMatrix" && C.instanceMatrix && (ge = C.instanceMatrix), W === "instanceColor" && C.instanceColor && (ge = C.instanceColor)), ce === void 0 || ce.attribute !== ge || ge && ce.data !== ge.data)
          return !0;
        V++;
      }
    return l.attributesNum !== V || l.index !== X;
  }
  function v(C, F, D, X) {
    const U = {}, N = F.attributes;
    let V = 0;
    const J = D.getAttributes();
    for (const W in J)
      if (J[W].location >= 0) {
        let ce = N[W];
        ce === void 0 && (W === "instanceMatrix" && C.instanceMatrix && (ce = C.instanceMatrix), W === "instanceColor" && C.instanceColor && (ce = C.instanceColor));
        const ge = {};
        ge.attribute = ce, ce && ce.data && (ge.data = ce.data), U[W] = ge, V++;
      }
    l.attributes = U, l.attributesNum = V, l.index = X;
  }
  function w() {
    const C = l.newAttributes;
    for (let F = 0, D = C.length; F < D; F++)
      C[F] = 0;
  }
  function x(C) {
    M(C, 0);
  }
  function M(C, F) {
    const D = l.newAttributes, X = l.enabledAttributes, U = l.attributeDivisors;
    D[C] = 1, X[C] === 0 && (c.enableVertexAttribArray(C), X[C] = 1), U[C] !== F && ((n.isWebGL2 ? c : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](C, F), U[C] = F);
  }
  function S() {
    const C = l.newAttributes, F = l.enabledAttributes;
    for (let D = 0, X = F.length; D < X; D++)
      F[D] !== C[D] && (c.disableVertexAttribArray(D), F[D] = 0);
  }
  function L(C, F, D, X, U, N) {
    n.isWebGL2 === !0 && (D === 5124 || D === 5125) ? c.vertexAttribIPointer(C, F, D, U, N) : c.vertexAttribPointer(C, F, D, X, U, N);
  }
  function y(C, F, D, X) {
    if (n.isWebGL2 === !1 && (C.isInstancedMesh || X.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    w();
    const U = X.attributes, N = D.getAttributes(), V = F.defaultAttributeValues;
    for (const J in N) {
      const W = N[J];
      if (W.location >= 0) {
        let ee = U[J];
        if (ee === void 0 && (J === "instanceMatrix" && C.instanceMatrix && (ee = C.instanceMatrix), J === "instanceColor" && C.instanceColor && (ee = C.instanceColor)), ee !== void 0) {
          const ce = ee.normalized, ge = ee.itemSize, Z = t.get(ee);
          if (Z === void 0)
            continue;
          const Fe = Z.buffer, ve = Z.type, xe = Z.bytesPerElement;
          if (ee.isInterleavedBufferAttribute) {
            const ue = ee.data, Oe = ue.stride, Te = ee.offset;
            if (ue.isInstancedInterleavedBuffer) {
              for (let me = 0; me < W.locationSize; me++)
                M(W.location + me, ue.meshPerAttribute);
              C.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = ue.meshPerAttribute * ue.count);
            } else
              for (let me = 0; me < W.locationSize; me++)
                x(W.location + me);
            c.bindBuffer(34962, Fe);
            for (let me = 0; me < W.locationSize; me++)
              L(
                W.location + me,
                ge / W.locationSize,
                ve,
                ce,
                Oe * xe,
                (Te + ge / W.locationSize * me) * xe
              );
          } else {
            if (ee.isInstancedBufferAttribute) {
              for (let ue = 0; ue < W.locationSize; ue++)
                M(W.location + ue, ee.meshPerAttribute);
              C.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = ee.meshPerAttribute * ee.count);
            } else
              for (let ue = 0; ue < W.locationSize; ue++)
                x(W.location + ue);
            c.bindBuffer(34962, Fe);
            for (let ue = 0; ue < W.locationSize; ue++)
              L(
                W.location + ue,
                ge / W.locationSize,
                ve,
                ce,
                ge * xe,
                ge / W.locationSize * ue * xe
              );
          }
        } else if (V !== void 0) {
          const ce = V[J];
          if (ce !== void 0)
            switch (ce.length) {
              case 2:
                c.vertexAttrib2fv(W.location, ce);
                break;
              case 3:
                c.vertexAttrib3fv(W.location, ce);
                break;
              case 4:
                c.vertexAttrib4fv(W.location, ce);
                break;
              default:
                c.vertexAttrib1fv(W.location, ce);
            }
        }
      }
    }
    S();
  }
  function T() {
    H();
    for (const C in r) {
      const F = r[C];
      for (const D in F) {
        const X = F[D];
        for (const U in X)
          g(X[U].object), delete X[U];
        delete F[D];
      }
      delete r[C];
    }
  }
  function P(C) {
    if (r[C.id] === void 0)
      return;
    const F = r[C.id];
    for (const D in F) {
      const X = F[D];
      for (const U in X)
        g(X[U].object), delete X[U];
      delete F[D];
    }
    delete r[C.id];
  }
  function z(C) {
    for (const F in r) {
      const D = r[F];
      if (D[C.id] === void 0)
        continue;
      const X = D[C.id];
      for (const U in X)
        g(X[U].object), delete X[U];
      delete D[C.id];
    }
  }
  function H() {
    B(), h = !0, l !== a && (l = a, m(l.object));
  }
  function B() {
    a.geometry = null, a.program = null, a.wireframe = !1;
  }
  return {
    setup: d,
    reset: H,
    resetDefaultState: B,
    dispose: T,
    releaseStatesOfGeometry: P,
    releaseStatesOfProgram: z,
    initAttributes: w,
    enableAttribute: x,
    disableUnusedAttributes: S
  };
}
function bh(c, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(l) {
    s = l;
  }
  function r(l, h) {
    c.drawArrays(s, l, h), t.update(h, s, 1);
  }
  function a(l, h, d) {
    if (d === 0)
      return;
    let u, m;
    if (i)
      u = c, m = "drawArraysInstanced";
    else if (u = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", u === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    u[m](s, l, h, d), t.update(h, s, d);
  }
  this.setMode = o, this.render = r, this.renderInstances = a;
}
function Mh(c, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const L = e.get("EXT_texture_filter_anisotropic");
      n = c.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(L) {
    if (L === "highp") {
      if (c.getShaderPrecisionFormat(35633, 36338).precision > 0 && c.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      L = "mediump";
    }
    return L === "mediump" && c.getShaderPrecisionFormat(35633, 36337).precision > 0 && c.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && c instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && c instanceof WebGL2ComputeRenderingContext;
  let r = t.precision !== void 0 ? t.precision : "highp";
  const a = s(r);
  a !== r && (console.warn("THREE.WebGLRenderer:", r, "not supported, using", a, "instead."), r = a);
  const l = o || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, d = c.getParameter(34930), u = c.getParameter(35660), m = c.getParameter(3379), g = c.getParameter(34076), p = c.getParameter(34921), f = c.getParameter(36347), _ = c.getParameter(36348), v = c.getParameter(36349), w = u > 0, x = o || e.has("OES_texture_float"), M = w && x, S = o ? c.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: l,
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
    vertexTextures: w,
    floatFragmentTextures: x,
    floatVertexTextures: M,
    maxSamples: S
  };
}
function Sh(c) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const o = new xn(), r = new At(), a = { value: null, needsUpdate: !1 };
  this.uniform = a, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, u, m) {
    const g = d.length !== 0 || u || n !== 0 || i;
    return i = u, t = h(d, m, 0), n = d.length, g;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1, l();
  }, this.setState = function(d, u, m) {
    const g = d.clippingPlanes, p = d.clipIntersection, f = d.clipShadows, _ = c.get(d);
    if (!i || g === null || g.length === 0 || s && !f)
      s ? h(null) : l();
    else {
      const v = s ? 0 : n, w = v * 4;
      let x = _.clippingState || null;
      a.value = x, x = h(g, u, w, m);
      for (let M = 0; M !== w; ++M)
        x[M] = t[M];
      _.clippingState = x, this.numIntersection = p ? this.numPlanes : 0, this.numPlanes += v;
    }
  };
  function l() {
    a.value !== t && (a.value = t, a.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(d, u, m, g) {
    const p = d !== null ? d.length : 0;
    let f = null;
    if (p !== 0) {
      if (f = a.value, g !== !0 || f === null) {
        const _ = m + p * 4, v = u.matrixWorldInverse;
        r.getNormalMatrix(v), (f === null || f.length < _) && (f = new Float32Array(_));
        for (let w = 0, x = m; w !== p; ++w, x += 4)
          o.copy(d[w]).applyMatrix4(v, r), o.normal.toArray(f, x), f[x + 3] = o.constant;
      }
      a.value = f, a.needsUpdate = !0;
    }
    return e.numPlanes = p, e.numIntersection = 0, f;
  }
}
function Eh(c) {
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
            const l = new ka(a.height / 2);
            return l.fromEquirectangularTexture(c, o), e.set(o, l), o.addEventListener("dispose", i), t(l.texture, o.mapping);
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
class Ah extends Vo {
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
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, o = s + l * this.view.width, r -= h * this.view.offsetY, a = r - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, r, a, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const ei = 4, zr = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], wn = 20, Gs = /* @__PURE__ */ new Ah(), Br = /* @__PURE__ */ new Me();
let ks = null;
const yn = (1 + Math.sqrt(5)) / 2, Xn = 1 / yn, Nr = [
  /* @__PURE__ */ new I(1, 1, 1),
  /* @__PURE__ */ new I(-1, 1, 1),
  /* @__PURE__ */ new I(1, 1, -1),
  /* @__PURE__ */ new I(-1, 1, -1),
  /* @__PURE__ */ new I(0, yn, Xn),
  /* @__PURE__ */ new I(0, yn, -Xn),
  /* @__PURE__ */ new I(Xn, 0, yn),
  /* @__PURE__ */ new I(-Xn, 0, yn),
  /* @__PURE__ */ new I(yn, Xn, 0),
  /* @__PURE__ */ new I(-yn, Xn, 0)
];
class or {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    ks = this._renderer.getRenderTarget(), this._setSize(256);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Gr(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ur(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(ks), e.scissorTest = !1, ji(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), ks = this._renderer.getRenderTarget();
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
    }, i = Or(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Or(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Th(s)), this._blurMaterial = Ch(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new ke(this._lodPlanes[0], e);
    this._renderer.compile(t, Gs);
  }
  _sceneToCubeUV(e, t, n, i) {
    const r = new ft(90, 1, t, n), a = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, d = h.autoClear, u = h.toneMapping;
    h.getClearColor(Br), h.toneMapping = 0, h.autoClear = !1;
    const m = new us({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    }), g = new ke(new ri(), m);
    let p = !1;
    const f = e.background;
    f ? f.isColor && (m.color.copy(f), e.background = null, p = !0) : (m.color.copy(Br), p = !0);
    for (let _ = 0; _ < 6; _++) {
      const v = _ % 3;
      v === 0 ? (r.up.set(0, a[_], 0), r.lookAt(l[_], 0, 0)) : v === 1 ? (r.up.set(0, 0, a[_]), r.lookAt(0, l[_], 0)) : (r.up.set(0, a[_], 0), r.lookAt(0, 0, l[_]));
      const w = this._cubeSize;
      ji(i, v * w, _ > 2 ? w : 0, w, w), h.setRenderTarget(i), p && h.render(g, r), h.render(e, r);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = u, h.autoClear = d, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === 301 || e.mapping === 302;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Gr()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ur());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, o = new ke(this._lodPlanes[0], s), r = s.uniforms;
    r.envMap.value = e;
    const a = this._cubeSize;
    ji(t, 0, 0, 3 * a, 2 * a), n.setRenderTarget(t), n.render(o, Gs);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), o = Nr[(i - 1) % Nr.length];
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
    const h = 3, d = new ke(this._lodPlanes[i], l), u = l.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * wn - 1), p = s / g, f = isFinite(s) ? 1 + Math.floor(h * p) : wn;
    f > wn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${wn}`);
    const _ = [];
    let v = 0;
    for (let L = 0; L < wn; ++L) {
      const y = L / p, T = Math.exp(-y * y / 2);
      _.push(T), L === 0 ? v += T : L < f && (v += 2 * T);
    }
    for (let L = 0; L < _.length; L++)
      _[L] = _[L] / v;
    u.envMap.value = e.texture, u.samples.value = f, u.weights.value = _, u.latitudinal.value = o === "latitudinal", r && (u.poleAxis.value = r);
    const { _lodMax: w } = this;
    u.dTheta.value = g, u.mipInt.value = w - n;
    const x = this._sizeLods[i], M = 3 * x * (i > w - ei ? i - w + ei : 0), S = 4 * (this._cubeSize - x);
    ji(t, M, S, 3 * x, 2 * x), a.setRenderTarget(t), a.render(d, Gs);
  }
}
function Th(c) {
  const e = [], t = [], n = [];
  let i = c;
  const s = c - ei + 1 + zr.length;
  for (let o = 0; o < s; o++) {
    const r = Math.pow(2, i);
    t.push(r);
    let a = 1 / r;
    o > c - ei ? a = zr[o - c + ei - 1] : o === 0 && (a = 0), n.push(a);
    const l = 1 / (r - 2), h = -l, d = 1 + l, u = [h, h, d, h, d, d, h, h, d, d, h, d], m = 6, g = 6, p = 3, f = 2, _ = 1, v = new Float32Array(p * g * m), w = new Float32Array(f * g * m), x = new Float32Array(_ * g * m);
    for (let S = 0; S < m; S++) {
      const L = S % 3 * 2 / 3 - 1, y = S > 2 ? 0 : -1, T = [
        L,
        y,
        0,
        L + 2 / 3,
        y,
        0,
        L + 2 / 3,
        y + 1,
        0,
        L,
        y,
        0,
        L + 2 / 3,
        y + 1,
        0,
        L,
        y + 1,
        0
      ];
      v.set(T, p * g * S), w.set(u, f * g * S);
      const P = [S, S, S, S, S, S];
      x.set(P, _ * g * S);
    }
    const M = new yt();
    M.setAttribute("position", new Tt(v, p)), M.setAttribute("uv", new Tt(w, f)), M.setAttribute("faceIndex", new Tt(x, _)), e.push(M), i > ei && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Or(c, e, t) {
  const n = new Cn(c, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function ji(c, e, t, n, i) {
  c.viewport.set(e, t, n, i), c.scissor.set(e, t, n, i);
}
function Ch(c, e, t) {
  const n = new Float32Array(wn), i = new I(0, 1, 0);
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
    vertexShader: dr(),
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
function Ur() {
  return new Ln({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: dr(),
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
function Gr() {
  return new Ln({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: dr(),
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
function dr() {
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
function Lh(c) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(r) {
    if (r && r.isTexture) {
      const a = r.mapping, l = a === 303 || a === 304, h = a === 301 || a === 302;
      if (l || h)
        if (r.isRenderTargetTexture && r.needsPMREMUpdate === !0) {
          r.needsPMREMUpdate = !1;
          let d = e.get(r);
          return t === null && (t = new or(c)), d = l ? t.fromEquirectangular(r, d) : t.fromCubemap(r, d), e.set(r, d), d.texture;
        } else {
          if (e.has(r))
            return e.get(r).texture;
          {
            const d = r.image;
            if (l && d && d.height > 0 || h && d && i(d)) {
              t === null && (t = new or(c));
              const u = l ? t.fromEquirectangular(r) : t.fromCubemap(r);
              return e.set(r, u), r.addEventListener("dispose", s), u.texture;
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
    for (let h = 0; h < l; h++)
      r[h] !== void 0 && a++;
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
function Rh(c) {
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
function Dh(c, e, t, n) {
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
  function a(d) {
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
  function l(d) {
    const u = [], m = d.index, g = d.attributes.position;
    let p = 0;
    if (m !== null) {
      const v = m.array;
      p = m.version;
      for (let w = 0, x = v.length; w < x; w += 3) {
        const M = v[w + 0], S = v[w + 1], L = v[w + 2];
        u.push(M, S, S, L, L, M);
      }
    } else {
      const v = g.array;
      p = g.version;
      for (let w = 0, x = v.length / 3 - 1; w < x; w += 3) {
        const M = w + 0, S = w + 1, L = w + 2;
        u.push(M, S, S, L, L, M);
      }
    }
    const f = new (Io(u) ? Wo : ko)(u, 1);
    f.version = p;
    const _ = s.get(d);
    _ && e.remove(_), s.set(d, f);
  }
  function h(d) {
    const u = s.get(d);
    if (u) {
      const m = d.index;
      m !== null && u.version < m.version && l(d);
    } else
      l(d);
    return s.get(d);
  }
  return {
    get: r,
    update: a,
    getWireframeAttribute: h
  };
}
function Fh(c, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(u) {
    s = u;
  }
  let r, a;
  function l(u) {
    r = u.type, a = u.bytesPerElement;
  }
  function h(u, m) {
    c.drawElements(s, m, r, u * a), t.update(m, s, 1);
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
    p[f](s, m, r, u * a, g), t.update(m, s, g);
  }
  this.setMode = o, this.setIndex = l, this.render = h, this.renderInstances = d;
}
function Ph(c) {
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
function Ih(c, e) {
  return c[0] - e[0];
}
function zh(c, e) {
  return Math.abs(e[1]) - Math.abs(c[1]);
}
function Ws(c, e) {
  let t = 1;
  const n = e.isInterleavedBufferAttribute ? e.data.array : e.array;
  n instanceof Int8Array ? t = 127 : n instanceof Uint8Array ? t = 255 : n instanceof Uint16Array ? t = 65535 : n instanceof Int16Array ? t = 32767 : n instanceof Int32Array ? t = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", n), c.divideScalar(t);
}
function Bh(c, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), o = new Ge(), r = [];
  for (let l = 0; l < 8; l++)
    r[l] = [l, 0];
  function a(l, h, d, u) {
    const m = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, p = g !== void 0 ? g.length : 0;
      let f = s.get(h);
      if (f === void 0 || f.count !== p) {
        let F = function() {
          B.dispose(), s.delete(h), h.removeEventListener("dispose", F);
        };
        f !== void 0 && f.texture.dispose();
        const w = h.morphAttributes.position !== void 0, x = h.morphAttributes.normal !== void 0, M = h.morphAttributes.color !== void 0, S = h.morphAttributes.position || [], L = h.morphAttributes.normal || [], y = h.morphAttributes.color || [];
        let T = 0;
        w === !0 && (T = 1), x === !0 && (T = 2), M === !0 && (T = 3);
        let P = h.attributes.position.count * T, z = 1;
        P > e.maxTextureSize && (z = Math.ceil(P / e.maxTextureSize), P = e.maxTextureSize);
        const H = new Float32Array(P * z * 4 * p), B = new Oo(H, P, z, p);
        B.type = 1015, B.needsUpdate = !0;
        const C = T * 4;
        for (let D = 0; D < p; D++) {
          const X = S[D], U = L[D], N = y[D], V = P * z * 4 * D;
          for (let J = 0; J < X.count; J++) {
            const W = J * C;
            w === !0 && (o.fromBufferAttribute(X, J), X.normalized === !0 && Ws(o, X), H[V + W + 0] = o.x, H[V + W + 1] = o.y, H[V + W + 2] = o.z, H[V + W + 3] = 0), x === !0 && (o.fromBufferAttribute(U, J), U.normalized === !0 && Ws(o, U), H[V + W + 4] = o.x, H[V + W + 5] = o.y, H[V + W + 6] = o.z, H[V + W + 7] = 0), M === !0 && (o.fromBufferAttribute(N, J), N.normalized === !0 && Ws(o, N), H[V + W + 8] = o.x, H[V + W + 9] = o.y, H[V + W + 10] = o.z, H[V + W + 11] = N.itemSize === 4 ? o.w : 1);
          }
        }
        f = {
          count: p,
          texture: B,
          size: new we(P, z)
        }, s.set(h, f), h.addEventListener("dispose", F);
      }
      let _ = 0;
      for (let w = 0; w < m.length; w++)
        _ += m[w];
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
      p.sort(zh);
      for (let x = 0; x < 8; x++)
        x < g && p[x][1] ? (r[x][0] = p[x][0], r[x][1] = p[x][1]) : (r[x][0] = Number.MAX_SAFE_INTEGER, r[x][1] = 0);
      r.sort(Ih);
      const f = h.morphAttributes.position, _ = h.morphAttributes.normal;
      let v = 0;
      for (let x = 0; x < 8; x++) {
        const M = r[x], S = M[0], L = M[1];
        S !== Number.MAX_SAFE_INTEGER && L ? (f && h.getAttribute("morphTarget" + x) !== f[S] && h.setAttribute("morphTarget" + x, f[S]), _ && h.getAttribute("morphNormal" + x) !== _[S] && h.setAttribute("morphNormal" + x, _[S]), i[x] = L, v += L) : (f && h.hasAttribute("morphTarget" + x) === !0 && h.deleteAttribute("morphTarget" + x), _ && h.hasAttribute("morphNormal" + x) === !0 && h.deleteAttribute("morphNormal" + x), i[x] = 0);
      }
      const w = h.morphTargetsRelative ? 1 : 1 - v;
      u.getUniforms().setValue(c, "morphTargetBaseInfluence", w), u.getUniforms().setValue(c, "morphTargetInfluences", i);
    }
  }
  return {
    update: a
  };
}
function Nh(c, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(a) {
    const l = n.render.frame, h = a.geometry, d = e.get(a, h);
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
const Xo = /* @__PURE__ */ new xt(), jo = /* @__PURE__ */ new Oo(), Yo = /* @__PURE__ */ new Ea(), $o = /* @__PURE__ */ new Ho(), kr = [], Wr = [], Vr = new Float32Array(16), Hr = new Float32Array(9), qr = new Float32Array(4);
function oi(c, e, t) {
  const n = c[0];
  if (n <= 0 || n > 0)
    return c;
  const i = e * t;
  let s = kr[i];
  if (s === void 0 && (s = new Float32Array(i), kr[i] = s), e !== 0) {
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
function ds(c, e) {
  let t = Wr[e];
  t === void 0 && (t = new Int32Array(e), Wr[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = c.allocateTextureUnit();
  return t;
}
function Oh(c, e) {
  const t = this.cache;
  t[0] !== e && (c.uniform1f(this.addr, e), t[0] = e);
}
function Uh(c, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (c.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ht(t, e))
      return;
    c.uniform2fv(this.addr, e), ut(t, e);
  }
}
function Gh(c, e) {
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
function kh(c, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (c.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ht(t, e))
      return;
    c.uniform4fv(this.addr, e), ut(t, e);
  }
}
function Wh(c, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ht(t, e))
      return;
    c.uniformMatrix2fv(this.addr, !1, e), ut(t, e);
  } else {
    if (ht(t, n))
      return;
    qr.set(n), c.uniformMatrix2fv(this.addr, !1, qr), ut(t, n);
  }
}
function Vh(c, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ht(t, e))
      return;
    c.uniformMatrix3fv(this.addr, !1, e), ut(t, e);
  } else {
    if (ht(t, n))
      return;
    Hr.set(n), c.uniformMatrix3fv(this.addr, !1, Hr), ut(t, n);
  }
}
function Hh(c, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ht(t, e))
      return;
    c.uniformMatrix4fv(this.addr, !1, e), ut(t, e);
  } else {
    if (ht(t, n))
      return;
    Vr.set(n), c.uniformMatrix4fv(this.addr, !1, Vr), ut(t, n);
  }
}
function qh(c, e) {
  const t = this.cache;
  t[0] !== e && (c.uniform1i(this.addr, e), t[0] = e);
}
function Xh(c, e) {
  const t = this.cache;
  ht(t, e) || (c.uniform2iv(this.addr, e), ut(t, e));
}
function jh(c, e) {
  const t = this.cache;
  ht(t, e) || (c.uniform3iv(this.addr, e), ut(t, e));
}
function Yh(c, e) {
  const t = this.cache;
  ht(t, e) || (c.uniform4iv(this.addr, e), ut(t, e));
}
function $h(c, e) {
  const t = this.cache;
  t[0] !== e && (c.uniform1ui(this.addr, e), t[0] = e);
}
function Zh(c, e) {
  const t = this.cache;
  ht(t, e) || (c.uniform2uiv(this.addr, e), ut(t, e));
}
function Kh(c, e) {
  const t = this.cache;
  ht(t, e) || (c.uniform3uiv(this.addr, e), ut(t, e));
}
function Jh(c, e) {
  const t = this.cache;
  ht(t, e) || (c.uniform4uiv(this.addr, e), ut(t, e));
}
function Qh(c, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (c.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || Xo, i);
}
function eu(c, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (c.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Yo, i);
}
function tu(c, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (c.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || $o, i);
}
function nu(c, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (c.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || jo, i);
}
function iu(c) {
  switch (c) {
    case 5126:
      return Oh;
    case 35664:
      return Uh;
    case 35665:
      return Gh;
    case 35666:
      return kh;
    case 35674:
      return Wh;
    case 35675:
      return Vh;
    case 35676:
      return Hh;
    case 5124:
    case 35670:
      return qh;
    case 35667:
    case 35671:
      return Xh;
    case 35668:
    case 35672:
      return jh;
    case 35669:
    case 35673:
      return Yh;
    case 5125:
      return $h;
    case 36294:
      return Zh;
    case 36295:
      return Kh;
    case 36296:
      return Jh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Qh;
    case 35679:
    case 36299:
    case 36307:
      return eu;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return tu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return nu;
  }
}
function su(c, e) {
  c.uniform1fv(this.addr, e);
}
function ru(c, e) {
  const t = oi(e, this.size, 2);
  c.uniform2fv(this.addr, t);
}
function ou(c, e) {
  const t = oi(e, this.size, 3);
  c.uniform3fv(this.addr, t);
}
function au(c, e) {
  const t = oi(e, this.size, 4);
  c.uniform4fv(this.addr, t);
}
function lu(c, e) {
  const t = oi(e, this.size, 4);
  c.uniformMatrix2fv(this.addr, !1, t);
}
function cu(c, e) {
  const t = oi(e, this.size, 9);
  c.uniformMatrix3fv(this.addr, !1, t);
}
function hu(c, e) {
  const t = oi(e, this.size, 16);
  c.uniformMatrix4fv(this.addr, !1, t);
}
function uu(c, e) {
  c.uniform1iv(this.addr, e);
}
function du(c, e) {
  c.uniform2iv(this.addr, e);
}
function fu(c, e) {
  c.uniform3iv(this.addr, e);
}
function pu(c, e) {
  c.uniform4iv(this.addr, e);
}
function mu(c, e) {
  c.uniform1uiv(this.addr, e);
}
function gu(c, e) {
  c.uniform2uiv(this.addr, e);
}
function _u(c, e) {
  c.uniform3uiv(this.addr, e);
}
function vu(c, e) {
  c.uniform4uiv(this.addr, e);
}
function xu(c, e, t) {
  const n = e.length, i = ds(t, n);
  c.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s)
    t.setTexture2D(e[s] || Xo, i[s]);
}
function yu(c, e, t) {
  const n = e.length, i = ds(t, n);
  c.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s)
    t.setTexture3D(e[s] || Yo, i[s]);
}
function wu(c, e, t) {
  const n = e.length, i = ds(t, n);
  c.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s)
    t.setTextureCube(e[s] || $o, i[s]);
}
function bu(c, e, t) {
  const n = e.length, i = ds(t, n);
  c.uniform1iv(this.addr, i);
  for (let s = 0; s !== n; ++s)
    t.setTexture2DArray(e[s] || jo, i[s]);
}
function Mu(c) {
  switch (c) {
    case 5126:
      return su;
    case 35664:
      return ru;
    case 35665:
      return ou;
    case 35666:
      return au;
    case 35674:
      return lu;
    case 35675:
      return cu;
    case 35676:
      return hu;
    case 5124:
    case 35670:
      return uu;
    case 35667:
    case 35671:
      return du;
    case 35668:
    case 35672:
      return fu;
    case 35669:
    case 35673:
      return pu;
    case 5125:
      return mu;
    case 36294:
      return gu;
    case 36295:
      return _u;
    case 36296:
      return vu;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return xu;
    case 35679:
    case 36299:
    case 36307:
      return yu;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return wu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return bu;
  }
}
class Su {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = iu(t.type);
  }
}
class Eu {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = Mu(t.type);
  }
}
class Au {
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
const Vs = /(\w+)(\])?(\[|\.)?/g;
function Xr(c, e) {
  c.seq.push(e), c.map[e.id] = e;
}
function Tu(c, e, t) {
  const n = c.name, i = n.length;
  for (Vs.lastIndex = 0; ; ) {
    const s = Vs.exec(n), o = Vs.lastIndex;
    let r = s[1];
    const a = s[2] === "]", l = s[3];
    if (a && (r = r | 0), l === void 0 || l === "[" && o + 2 === i) {
      Xr(t, l === void 0 ? new Su(r, c, e) : new Eu(r, c, e));
      break;
    } else {
      let d = t.map[r];
      d === void 0 && (d = new Au(r), Xr(t, d)), t = d;
    }
  }
}
class os {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), o = e.getUniformLocation(t, s.name);
      Tu(s, o, this);
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
function jr(c, e, t) {
  const n = c.createShader(e);
  return c.shaderSource(n, t), c.compileShader(n), n;
}
let Cu = 0;
function Lu(c, e) {
  const t = c.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = i; o < s; o++) {
    const r = o + 1;
    n.push(`${r === e ? ">" : " "} ${r}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Ru(c) {
  switch (c) {
    case 3e3:
      return ["Linear", "( value )"];
    case 3001:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", c), ["Linear", "( value )"];
  }
}
function Yr(c, e, t) {
  const n = c.getShaderParameter(e, 35713), i = c.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + Lu(c.getShaderSource(e), o);
  } else
    return i;
}
function Du(c, e) {
  const t = Ru(e);
  return "vec4 " + c + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Fu(c, e) {
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
function Pu(c) {
  return [
    c.extensionDerivatives || !!c.envMapCubeUVHeight || c.bumpMap || c.tangentSpaceNormalMap || c.clearcoatNormalMap || c.flatShading || c.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (c.extensionFragDepth || c.logarithmicDepthBuffer) && c.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    c.extensionDrawBuffers && c.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (c.extensionShaderTextureLOD || c.envMap || c.transmission) && c.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(wi).join(`
`);
}
function Iu(c) {
  const e = [];
  for (const t in c) {
    const n = c[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function zu(c, e) {
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
function wi(c) {
  return c !== "";
}
function $r(c, e) {
  return c.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Zr(c, e) {
  return c.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Bu = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ar(c) {
  return c.replace(Bu, Nu);
}
function Nu(c, e) {
  const t = Ce[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return ar(t);
}
const Ou = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, Uu = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Kr(c) {
  return c.replace(Uu, Zo).replace(Ou, Gu);
}
function Gu(c, e, t, n) {
  return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Zo(c, e, t, n);
}
function Zo(c, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function Jr(c) {
  let e = "precision " + c.precision + ` float;
precision ` + c.precision + " int;";
  return c.precision === "highp" ? e += `
#define HIGH_PRECISION` : c.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : c.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function ku(c) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return c.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : c.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : c.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Wu(c) {
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
function Vu(c) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (c.envMap)
    switch (c.envMapMode) {
      case 302:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Hu(c) {
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
function qu(c) {
  const e = c.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Xu(c, e, t, n) {
  const i = c.getContext(), s = t.defines;
  let o = t.vertexShader, r = t.fragmentShader;
  const a = ku(t), l = Wu(t), h = Vu(t), d = Hu(t), u = qu(t), m = t.isWebGL2 ? "" : Pu(t), g = Iu(s), p = i.createProgram();
  let f, _, v = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (f = [
    g
  ].filter(wi).join(`
`), f.length > 0 && (f += `
`), _ = [
    m,
    g
  ].filter(wi).join(`
`), _.length > 0 && (_ += `
`)) : (f = [
    Jr(t),
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
  ].filter(wi).join(`
`), _ = [
    m,
    Jr(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
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
    t.shadowMapEnabled ? "#define " + a : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    t.toneMapping !== 0 ? Ce.tonemapping_pars_fragment : "",
    t.toneMapping !== 0 ? Fu("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ce.encodings_pars_fragment,
    Du("linearToOutputTexel", t.outputEncoding),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(wi).join(`
`)), o = ar(o), o = $r(o, t), o = Zr(o, t), r = ar(r), r = $r(r, t), r = Zr(r, t), o = Kr(o), r = Kr(r), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (v = `#version 300 es
`, f = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + f, _ = [
    "#define varying in",
    t.glslVersion === br ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === br ? "" : "#define gl_FragColor pc_fragColor",
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
  const w = v + f + o, x = v + _ + r, M = jr(i, 35633, w), S = jr(i, 35632, x);
  if (i.attachShader(p, M), i.attachShader(p, S), t.index0AttributeName !== void 0 ? i.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"), i.linkProgram(p), c.debug.checkShaderErrors) {
    const T = i.getProgramInfoLog(p).trim(), P = i.getShaderInfoLog(M).trim(), z = i.getShaderInfoLog(S).trim();
    let H = !0, B = !0;
    if (i.getProgramParameter(p, 35714) === !1) {
      H = !1;
      const C = Yr(i, M, "vertex"), F = Yr(i, S, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(p, 35715) + `

Program Info Log: ` + T + `
` + C + `
` + F
      );
    } else
      T !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", T) : (P === "" || z === "") && (B = !1);
    B && (this.diagnostics = {
      runnable: H,
      programLog: T,
      vertexShader: {
        log: P,
        prefix: f
      },
      fragmentShader: {
        log: z,
        prefix: _
      }
    });
  }
  i.deleteShader(M), i.deleteShader(S);
  let L;
  this.getUniforms = function() {
    return L === void 0 && (L = new os(i, p)), L;
  };
  let y;
  return this.getAttributes = function() {
    return y === void 0 && (y = zu(i, p)), y;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(p), this.program = void 0;
  }, this.name = t.shaderName, this.id = Cu++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = M, this.fragmentShader = S, this;
}
let ju = 0;
class Yu {
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
      const n = new $u(e);
      t.set(e, n);
    }
    return t.get(e);
  }
}
class $u {
  constructor(e) {
    this.id = ju++, this.code = e, this.usedTimes = 0;
  }
}
function Zu(c, e, t, n, i, s, o) {
  const r = new Go(), a = new Yu(), l = [], h = i.isWebGL2, d = i.logarithmicDepthBuffer, u = i.vertexTextures;
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
  function p(y, T, P, z, H) {
    const B = z.fog, C = H.geometry, F = y.isMeshStandardMaterial ? z.environment : null, D = (y.isMeshStandardMaterial ? t : e).get(y.envMap || F), X = !!D && D.mapping === 306 ? D.image.height : null, U = g[y.type];
    y.precision !== null && (m = i.getMaxPrecision(y.precision), m !== y.precision && console.warn("THREE.WebGLProgram.getParameters:", y.precision, "not supported, using", m, "instead."));
    const N = C.morphAttributes.position || C.morphAttributes.normal || C.morphAttributes.color, V = N !== void 0 ? N.length : 0;
    let J = 0;
    C.morphAttributes.position !== void 0 && (J = 1), C.morphAttributes.normal !== void 0 && (J = 2), C.morphAttributes.color !== void 0 && (J = 3);
    let W, ee, ce, ge;
    if (U) {
      const Oe = Gt[U];
      W = Oe.vertexShader, ee = Oe.fragmentShader;
    } else
      W = y.vertexShader, ee = y.fragmentShader, a.update(y), ce = a.getVertexShaderID(y), ge = a.getFragmentShaderID(y);
    const Z = c.getRenderTarget(), Fe = y.alphaTest > 0, ve = y.clearcoat > 0, xe = y.iridescence > 0;
    return {
      isWebGL2: h,
      shaderID: U,
      shaderName: y.type,
      vertexShader: W,
      fragmentShader: ee,
      defines: y.defines,
      customVertexShaderID: ce,
      customFragmentShaderID: ge,
      isRawShaderMaterial: y.isRawShaderMaterial === !0,
      glslVersion: y.glslVersion,
      precision: m,
      instancing: H.isInstancedMesh === !0,
      instancingColor: H.isInstancedMesh === !0 && H.instanceColor !== null,
      supportsVertexTextures: u,
      outputEncoding: Z === null ? c.outputEncoding : Z.isXRRenderTarget === !0 ? Z.texture.encoding : 3e3,
      map: !!y.map,
      matcap: !!y.matcap,
      envMap: !!D,
      envMapMode: D && D.mapping,
      envMapCubeUVHeight: X,
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
      alphaTest: Fe,
      gradientMap: !!y.gradientMap,
      sheen: y.sheen > 0,
      sheenColorMap: !!y.sheenColorMap,
      sheenRoughnessMap: !!y.sheenRoughnessMap,
      transmission: y.transmission > 0,
      transmissionMap: !!y.transmissionMap,
      thicknessMap: !!y.thicknessMap,
      combine: y.combine,
      vertexTangents: !!y.normalMap && !!C.attributes.tangent,
      vertexColors: y.vertexColors,
      vertexAlphas: y.vertexColors === !0 && !!C.attributes.color && C.attributes.color.itemSize === 4,
      vertexUvs: !!y.map || !!y.bumpMap || !!y.normalMap || !!y.specularMap || !!y.alphaMap || !!y.emissiveMap || !!y.roughnessMap || !!y.metalnessMap || !!y.clearcoatMap || !!y.clearcoatRoughnessMap || !!y.clearcoatNormalMap || !!y.iridescenceMap || !!y.iridescenceThicknessMap || !!y.displacementMap || !!y.transmissionMap || !!y.thicknessMap || !!y.specularIntensityMap || !!y.specularColorMap || !!y.sheenColorMap || !!y.sheenRoughnessMap,
      uvsVertexOnly: !(!!y.map || !!y.bumpMap || !!y.normalMap || !!y.specularMap || !!y.alphaMap || !!y.emissiveMap || !!y.roughnessMap || !!y.metalnessMap || !!y.clearcoatNormalMap || !!y.iridescenceMap || !!y.iridescenceThicknessMap || y.transmission > 0 || !!y.transmissionMap || !!y.thicknessMap || !!y.specularIntensityMap || !!y.specularColorMap || y.sheen > 0 || !!y.sheenColorMap || !!y.sheenRoughnessMap) && !!y.displacementMap,
      fog: !!B,
      useFog: y.fog === !0,
      fogExp2: B && B.isFogExp2,
      flatShading: !!y.flatShading,
      sizeAttenuation: y.sizeAttenuation,
      logarithmicDepthBuffer: d,
      skinning: H.isSkinnedMesh === !0,
      morphTargets: C.morphAttributes.position !== void 0,
      morphNormals: C.morphAttributes.normal !== void 0,
      morphColors: C.morphAttributes.color !== void 0,
      morphTargetsCount: V,
      morphTextureStride: J,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: y.dithering,
      shadowMapEnabled: c.shadowMap.enabled && P.length > 0,
      shadowMapType: c.shadowMap.type,
      toneMapping: y.toneMapped ? c.toneMapping : 0,
      physicallyCorrectLights: c.physicallyCorrectLights,
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
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: y.customProgramCacheKey()
    };
  }
  function f(y) {
    const T = [];
    if (y.shaderID ? T.push(y.shaderID) : (T.push(y.customVertexShaderID), T.push(y.customFragmentShaderID)), y.defines !== void 0)
      for (const P in y.defines)
        T.push(P), T.push(y.defines[P]);
    return y.isRawShaderMaterial === !1 && (_(T, y), v(T, y), T.push(c.outputEncoding)), T.push(y.customProgramCacheKey), T.join();
  }
  function _(y, T) {
    y.push(T.precision), y.push(T.outputEncoding), y.push(T.envMapMode), y.push(T.envMapCubeUVHeight), y.push(T.combine), y.push(T.vertexUvs), y.push(T.fogExp2), y.push(T.sizeAttenuation), y.push(T.morphTargetsCount), y.push(T.morphAttributeCount), y.push(T.numDirLights), y.push(T.numPointLights), y.push(T.numSpotLights), y.push(T.numHemiLights), y.push(T.numRectAreaLights), y.push(T.numDirLightShadows), y.push(T.numPointLightShadows), y.push(T.numSpotLightShadows), y.push(T.shadowMapType), y.push(T.toneMapping), y.push(T.numClippingPlanes), y.push(T.numClipIntersection), y.push(T.depthPacking);
  }
  function v(y, T) {
    r.disableAll(), T.isWebGL2 && r.enable(0), T.supportsVertexTextures && r.enable(1), T.instancing && r.enable(2), T.instancingColor && r.enable(3), T.map && r.enable(4), T.matcap && r.enable(5), T.envMap && r.enable(6), T.lightMap && r.enable(7), T.aoMap && r.enable(8), T.emissiveMap && r.enable(9), T.bumpMap && r.enable(10), T.normalMap && r.enable(11), T.objectSpaceNormalMap && r.enable(12), T.tangentSpaceNormalMap && r.enable(13), T.clearcoat && r.enable(14), T.clearcoatMap && r.enable(15), T.clearcoatRoughnessMap && r.enable(16), T.clearcoatNormalMap && r.enable(17), T.iridescence && r.enable(18), T.iridescenceMap && r.enable(19), T.iridescenceThicknessMap && r.enable(20), T.displacementMap && r.enable(21), T.specularMap && r.enable(22), T.roughnessMap && r.enable(23), T.metalnessMap && r.enable(24), T.gradientMap && r.enable(25), T.alphaMap && r.enable(26), T.alphaTest && r.enable(27), T.vertexColors && r.enable(28), T.vertexAlphas && r.enable(29), T.vertexUvs && r.enable(30), T.vertexTangents && r.enable(31), T.uvsVertexOnly && r.enable(32), T.fog && r.enable(33), y.push(r.mask), r.disableAll(), T.useFog && r.enable(0), T.flatShading && r.enable(1), T.logarithmicDepthBuffer && r.enable(2), T.skinning && r.enable(3), T.morphTargets && r.enable(4), T.morphNormals && r.enable(5), T.morphColors && r.enable(6), T.premultipliedAlpha && r.enable(7), T.shadowMapEnabled && r.enable(8), T.physicallyCorrectLights && r.enable(9), T.doubleSided && r.enable(10), T.flipSided && r.enable(11), T.useDepthPacking && r.enable(12), T.dithering && r.enable(13), T.specularIntensityMap && r.enable(14), T.specularColorMap && r.enable(15), T.transmission && r.enable(16), T.transmissionMap && r.enable(17), T.thicknessMap && r.enable(18), T.sheen && r.enable(19), T.sheenColorMap && r.enable(20), T.sheenRoughnessMap && r.enable(21), T.decodeVideoTexture && r.enable(22), T.opaque && r.enable(23), y.push(r.mask);
  }
  function w(y) {
    const T = g[y.type];
    let P;
    if (T) {
      const z = Gt[T];
      P = Na.clone(z.uniforms);
    } else
      P = y.uniforms;
    return P;
  }
  function x(y, T) {
    let P;
    for (let z = 0, H = l.length; z < H; z++) {
      const B = l[z];
      if (B.cacheKey === T) {
        P = B, ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && (P = new Xu(c, T, y, s), l.push(P)), P;
  }
  function M(y) {
    if (--y.usedTimes === 0) {
      const T = l.indexOf(y);
      l[T] = l[l.length - 1], l.pop(), y.destroy();
    }
  }
  function S(y) {
    a.remove(y);
  }
  function L() {
    a.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: f,
    getUniforms: w,
    acquireProgram: x,
    releaseProgram: M,
    releaseShaderCache: S,
    programs: l,
    dispose: L
  };
}
function Ku() {
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
function Ju(c, e) {
  return c.groupOrder !== e.groupOrder ? c.groupOrder - e.groupOrder : c.renderOrder !== e.renderOrder ? c.renderOrder - e.renderOrder : c.material.id !== e.material.id ? c.material.id - e.material.id : c.z !== e.z ? c.z - e.z : c.id - e.id;
}
function Qr(c, e) {
  return c.groupOrder !== e.groupOrder ? c.groupOrder - e.groupOrder : c.renderOrder !== e.renderOrder ? c.renderOrder - e.renderOrder : c.z !== e.z ? e.z - c.z : c.id - e.id;
}
function eo() {
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
  function a(d, u, m, g, p, f) {
    const _ = o(d, u, m, g, p, f);
    m.transmission > 0 ? n.unshift(_) : m.transparent === !0 ? i.unshift(_) : t.unshift(_);
  }
  function l(d, u) {
    t.length > 1 && t.sort(d || Ju), n.length > 1 && n.sort(u || Qr), i.length > 1 && i.sort(u || Qr);
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
    unshift: a,
    finish: h,
    sort: l
  };
}
function Qu() {
  let c = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    let s;
    return c.has(n) === !1 ? (s = new eo(), c.set(n, [s])) : i >= c.get(n).length ? (s = new eo(), c.get(n).push(s)) : s = c.get(n)[i], s;
  }
  function t() {
    c = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function ed() {
  const c = {};
  return {
    get: function(e) {
      if (c[e.id] !== void 0)
        return c[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new I(),
            color: new Me()
          };
          break;
        case "SpotLight":
          t = {
            position: new I(),
            direction: new I(),
            color: new Me(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new I(),
            color: new Me(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new I(),
            skyColor: new Me(),
            groundColor: new Me()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Me(),
            position: new I(),
            halfWidth: new I(),
            halfHeight: new I()
          };
          break;
      }
      return c[e.id] = t, t;
    }
  };
}
function td() {
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
            shadowMapSize: new we()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new we()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new we(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return c[e.id] = t, t;
    }
  };
}
let nd = 0;
function id(c, e) {
  return (e.castShadow ? 1 : 0) - (c.castShadow ? 1 : 0);
}
function sd(c, e) {
  const t = new ed(), n = td(), i = {
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
    i.probe.push(new I());
  const s = new I(), o = new He(), r = new He();
  function a(h, d) {
    let u = 0, m = 0, g = 0;
    for (let T = 0; T < 9; T++)
      i.probe[T].set(0, 0, 0);
    let p = 0, f = 0, _ = 0, v = 0, w = 0, x = 0, M = 0, S = 0;
    h.sort(id);
    const L = d !== !0 ? Math.PI : 1;
    for (let T = 0, P = h.length; T < P; T++) {
      const z = h[T], H = z.color, B = z.intensity, C = z.distance, F = z.shadow && z.shadow.map ? z.shadow.map.texture : null;
      if (z.isAmbientLight)
        u += H.r * B * L, m += H.g * B * L, g += H.b * B * L;
      else if (z.isLightProbe)
        for (let D = 0; D < 9; D++)
          i.probe[D].addScaledVector(z.sh.coefficients[D], B);
      else if (z.isDirectionalLight) {
        const D = t.get(z);
        if (D.color.copy(z.color).multiplyScalar(z.intensity * L), z.castShadow) {
          const X = z.shadow, U = n.get(z);
          U.shadowBias = X.bias, U.shadowNormalBias = X.normalBias, U.shadowRadius = X.radius, U.shadowMapSize = X.mapSize, i.directionalShadow[p] = U, i.directionalShadowMap[p] = F, i.directionalShadowMatrix[p] = z.shadow.matrix, x++;
        }
        i.directional[p] = D, p++;
      } else if (z.isSpotLight) {
        const D = t.get(z);
        if (D.position.setFromMatrixPosition(z.matrixWorld), D.color.copy(H).multiplyScalar(B * L), D.distance = C, D.coneCos = Math.cos(z.angle), D.penumbraCos = Math.cos(z.angle * (1 - z.penumbra)), D.decay = z.decay, z.castShadow) {
          const X = z.shadow, U = n.get(z);
          U.shadowBias = X.bias, U.shadowNormalBias = X.normalBias, U.shadowRadius = X.radius, U.shadowMapSize = X.mapSize, i.spotShadow[_] = U, i.spotShadowMap[_] = F, i.spotShadowMatrix[_] = z.shadow.matrix, S++;
        }
        i.spot[_] = D, _++;
      } else if (z.isRectAreaLight) {
        const D = t.get(z);
        D.color.copy(H).multiplyScalar(B), D.halfWidth.set(z.width * 0.5, 0, 0), D.halfHeight.set(0, z.height * 0.5, 0), i.rectArea[v] = D, v++;
      } else if (z.isPointLight) {
        const D = t.get(z);
        if (D.color.copy(z.color).multiplyScalar(z.intensity * L), D.distance = z.distance, D.decay = z.decay, z.castShadow) {
          const X = z.shadow, U = n.get(z);
          U.shadowBias = X.bias, U.shadowNormalBias = X.normalBias, U.shadowRadius = X.radius, U.shadowMapSize = X.mapSize, U.shadowCameraNear = X.camera.near, U.shadowCameraFar = X.camera.far, i.pointShadow[f] = U, i.pointShadowMap[f] = F, i.pointShadowMatrix[f] = z.shadow.matrix, M++;
        }
        i.point[f] = D, f++;
      } else if (z.isHemisphereLight) {
        const D = t.get(z);
        D.skyColor.copy(z.color).multiplyScalar(B * L), D.groundColor.copy(z.groundColor).multiplyScalar(B * L), i.hemi[w] = D, w++;
      }
    }
    v > 0 && (e.isWebGL2 || c.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ne.LTC_FLOAT_1, i.rectAreaLTC2 = ne.LTC_FLOAT_2) : c.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ne.LTC_HALF_1, i.rectAreaLTC2 = ne.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = u, i.ambient[1] = m, i.ambient[2] = g;
    const y = i.hash;
    (y.directionalLength !== p || y.pointLength !== f || y.spotLength !== _ || y.rectAreaLength !== v || y.hemiLength !== w || y.numDirectionalShadows !== x || y.numPointShadows !== M || y.numSpotShadows !== S) && (i.directional.length = p, i.spot.length = _, i.rectArea.length = v, i.point.length = f, i.hemi.length = w, i.directionalShadow.length = x, i.directionalShadowMap.length = x, i.pointShadow.length = M, i.pointShadowMap.length = M, i.spotShadow.length = S, i.spotShadowMap.length = S, i.directionalShadowMatrix.length = x, i.pointShadowMatrix.length = M, i.spotShadowMatrix.length = S, y.directionalLength = p, y.pointLength = f, y.spotLength = _, y.rectAreaLength = v, y.hemiLength = w, y.numDirectionalShadows = x, y.numPointShadows = M, y.numSpotShadows = S, i.version = nd++);
  }
  function l(h, d) {
    let u = 0, m = 0, g = 0, p = 0, f = 0;
    const _ = d.matrixWorldInverse;
    for (let v = 0, w = h.length; v < w; v++) {
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
    setup: a,
    setupView: l,
    state: i
  };
}
function to(c, e) {
  const t = new sd(c, e), n = [], i = [];
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
function rd(c, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, o = 0) {
    let r;
    return t.has(s) === !1 ? (r = new to(c, e), t.set(s, [r])) : o >= t.get(s).length ? (r = new to(c, e), t.get(s).push(r)) : r = t.get(s)[o], r;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class Ko extends tn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class od extends tn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new I(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const ad = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, ld = `uniform sampler2D shadow_pass;
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
function cd(c, e, t) {
  let n = new ur();
  const i = new we(), s = new we(), o = new Ge(), r = new Ko({ depthPacking: 3201 }), a = new od(), l = {}, h = t.maxTextureSize, d = { 0: 1, 1: 0, 2: 2 }, u = new Ln({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new we() },
      radius: { value: 4 }
    },
    vertexShader: ad,
    fragmentShader: ld
  }), m = u.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new yt();
  g.setAttribute(
    "position",
    new Tt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const p = new ke(g, u), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(x, M, S) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || x.length === 0)
      return;
    const L = c.getRenderTarget(), y = c.getActiveCubeFace(), T = c.getActiveMipmapLevel(), P = c.state;
    P.setBlending(0), P.buffers.color.setClear(1, 1, 1, 1), P.buffers.depth.setTest(!0), P.setScissorTest(!1);
    for (let z = 0, H = x.length; z < H; z++) {
      const B = x[z], C = B.shadow;
      if (C === void 0) {
        console.warn("THREE.WebGLShadowMap:", B, "has no shadow.");
        continue;
      }
      if (C.autoUpdate === !1 && C.needsUpdate === !1)
        continue;
      i.copy(C.mapSize);
      const F = C.getFrameExtents();
      if (i.multiply(F), s.copy(C.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / F.x), i.x = s.x * F.x, C.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / F.y), i.y = s.y * F.y, C.mapSize.y = s.y)), C.map === null) {
        const X = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        C.map = new Cn(i.x, i.y, X), C.map.texture.name = B.name + ".shadowMap", C.camera.updateProjectionMatrix();
      }
      c.setRenderTarget(C.map), c.clear();
      const D = C.getViewportCount();
      for (let X = 0; X < D; X++) {
        const U = C.getViewport(X);
        o.set(
          s.x * U.x,
          s.y * U.y,
          s.x * U.z,
          s.y * U.w
        ), P.viewport(o), C.updateMatrices(B, X), n = C.getFrustum(), w(M, S, C.camera, B, this.type);
      }
      C.isPointLightShadow !== !0 && this.type === 3 && _(C, S), C.needsUpdate = !1;
    }
    f.needsUpdate = !1, c.setRenderTarget(L, y, T);
  };
  function _(x, M) {
    const S = e.update(p);
    u.defines.VSM_SAMPLES !== x.blurSamples && (u.defines.VSM_SAMPLES = x.blurSamples, m.defines.VSM_SAMPLES = x.blurSamples, u.needsUpdate = !0, m.needsUpdate = !0), x.mapPass === null && (x.mapPass = new Cn(i.x, i.y)), u.uniforms.shadow_pass.value = x.map.texture, u.uniforms.resolution.value = x.mapSize, u.uniforms.radius.value = x.radius, c.setRenderTarget(x.mapPass), c.clear(), c.renderBufferDirect(M, null, S, u, p, null), m.uniforms.shadow_pass.value = x.mapPass.texture, m.uniforms.resolution.value = x.mapSize, m.uniforms.radius.value = x.radius, c.setRenderTarget(x.map), c.clear(), c.renderBufferDirect(M, null, S, m, p, null);
  }
  function v(x, M, S, L, y, T) {
    let P = null;
    const z = S.isPointLight === !0 ? x.customDistanceMaterial : x.customDepthMaterial;
    if (z !== void 0 ? P = z : P = S.isPointLight === !0 ? a : r, c.localClippingEnabled && M.clipShadows === !0 && Array.isArray(M.clippingPlanes) && M.clippingPlanes.length !== 0 || M.displacementMap && M.displacementScale !== 0 || M.alphaMap && M.alphaTest > 0) {
      const H = P.uuid, B = M.uuid;
      let C = l[H];
      C === void 0 && (C = {}, l[H] = C);
      let F = C[B];
      F === void 0 && (F = P.clone(), C[B] = F), P = F;
    }
    return P.visible = M.visible, P.wireframe = M.wireframe, T === 3 ? P.side = M.shadowSide !== null ? M.shadowSide : M.side : P.side = M.shadowSide !== null ? M.shadowSide : d[M.side], P.alphaMap = M.alphaMap, P.alphaTest = M.alphaTest, P.clipShadows = M.clipShadows, P.clippingPlanes = M.clippingPlanes, P.clipIntersection = M.clipIntersection, P.displacementMap = M.displacementMap, P.displacementScale = M.displacementScale, P.displacementBias = M.displacementBias, P.wireframeLinewidth = M.wireframeLinewidth, P.linewidth = M.linewidth, S.isPointLight === !0 && P.isMeshDistanceMaterial === !0 && (P.referencePosition.setFromMatrixPosition(S.matrixWorld), P.nearDistance = L, P.farDistance = y), P;
  }
  function w(x, M, S, L, y) {
    if (x.visible === !1)
      return;
    if (x.layers.test(M.layers) && (x.isMesh || x.isLine || x.isPoints) && (x.castShadow || x.receiveShadow && y === 3) && (!x.frustumCulled || n.intersectsObject(x))) {
      x.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse, x.matrixWorld);
      const z = e.update(x), H = x.material;
      if (Array.isArray(H)) {
        const B = z.groups;
        for (let C = 0, F = B.length; C < F; C++) {
          const D = B[C], X = H[D.materialIndex];
          if (X && X.visible) {
            const U = v(x, X, L, S.near, S.far, y);
            c.renderBufferDirect(S, null, z, U, x, D);
          }
        }
      } else if (H.visible) {
        const B = v(x, H, L, S.near, S.far, y);
        c.renderBufferDirect(S, null, z, B, x, null);
      }
    }
    const P = x.children;
    for (let z = 0, H = P.length; z < H; z++)
      w(P[z], M, S, L, y);
  }
}
function hd(c, e, t) {
  const n = t.isWebGL2;
  function i() {
    let O = !1;
    const ae = new Ge();
    let Y = null;
    const oe = new Ge(0, 0, 0, 0);
    return {
      setMask: function(se) {
        Y !== se && !O && (c.colorMask(se, se, se, se), Y = se);
      },
      setLocked: function(se) {
        O = se;
      },
      setClear: function(se, Re, Qe, Xe, nn) {
        nn === !0 && (se *= Xe, Re *= Xe, Qe *= Xe), ae.set(se, Re, Qe, Xe), oe.equals(ae) === !1 && (c.clearColor(se, Re, Qe, Xe), oe.copy(ae));
      },
      reset: function() {
        O = !1, Y = null, oe.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let O = !1, ae = null, Y = null, oe = null;
    return {
      setTest: function(se) {
        se ? Fe(2929) : ve(2929);
      },
      setMask: function(se) {
        ae !== se && !O && (c.depthMask(se), ae = se);
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
        oe !== se && (c.clearDepth(se), oe = se);
      },
      reset: function() {
        O = !1, ae = null, Y = null, oe = null;
      }
    };
  }
  function o() {
    let O = !1, ae = null, Y = null, oe = null, se = null, Re = null, Qe = null, Xe = null, nn = null;
    return {
      setTest: function(We) {
        O || (We ? Fe(2960) : ve(2960));
      },
      setMask: function(We) {
        ae !== We && !O && (c.stencilMask(We), ae = We);
      },
      setFunc: function(We, Vt, bt) {
        (Y !== We || oe !== Vt || se !== bt) && (c.stencilFunc(We, Vt, bt), Y = We, oe = Vt, se = bt);
      },
      setOp: function(We, Vt, bt) {
        (Re !== We || Qe !== Vt || Xe !== bt) && (c.stencilOp(We, Vt, bt), Re = We, Qe = Vt, Xe = bt);
      },
      setLocked: function(We) {
        O = We;
      },
      setClear: function(We) {
        nn !== We && (c.clearStencil(We), nn = We);
      },
      reset: function() {
        O = !1, ae = null, Y = null, oe = null, se = null, Re = null, Qe = null, Xe = null, nn = null;
      }
    };
  }
  const r = new i(), a = new s(), l = new o(), h = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
  let u = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), p = [], f = null, _ = !1, v = null, w = null, x = null, M = null, S = null, L = null, y = null, T = !1, P = null, z = null, H = null, B = null, C = null;
  const F = c.getParameter(35661);
  let D = !1, X = 0;
  const U = c.getParameter(7938);
  U.indexOf("WebGL") !== -1 ? (X = parseFloat(/^WebGL (\d)/.exec(U)[1]), D = X >= 1) : U.indexOf("OpenGL ES") !== -1 && (X = parseFloat(/^OpenGL ES (\d)/.exec(U)[1]), D = X >= 2);
  let N = null, V = {};
  const J = c.getParameter(3088), W = c.getParameter(2978), ee = new Ge().fromArray(J), ce = new Ge().fromArray(W);
  function ge(O, ae, Y) {
    const oe = new Uint8Array(4), se = c.createTexture();
    c.bindTexture(O, se), c.texParameteri(O, 10241, 9728), c.texParameteri(O, 10240, 9728);
    for (let Re = 0; Re < Y; Re++)
      c.texImage2D(ae + Re, 0, 6408, 1, 1, 0, 6408, 5121, oe);
    return se;
  }
  const Z = {};
  Z[3553] = ge(3553, 3553, 1), Z[34067] = ge(34067, 34069, 6), r.setClear(0, 0, 0, 1), a.setClear(1), l.setClear(0), Fe(2929), a.setFunc(3), at(!1), It(1), Fe(2884), tt(0);
  function Fe(O) {
    u[O] !== !0 && (c.enable(O), u[O] = !0);
  }
  function ve(O) {
    u[O] !== !1 && (c.disable(O), u[O] = !1);
  }
  function xe(O, ae) {
    return m[O] !== ae ? (c.bindFramebuffer(O, ae), m[O] = ae, n && (O === 36009 && (m[36160] = ae), O === 36160 && (m[36009] = ae)), !0) : !1;
  }
  function ue(O, ae) {
    let Y = p, oe = !1;
    if (O)
      if (Y = g.get(ae), Y === void 0 && (Y = [], g.set(ae, Y)), O.isWebGLMultipleRenderTargets) {
        const se = O.texture;
        if (Y.length !== se.length || Y[0] !== 36064) {
          for (let Re = 0, Qe = se.length; Re < Qe; Re++)
            Y[Re] = 36064 + Re;
          Y.length = se.length, oe = !0;
        }
      } else
        Y[0] !== 36064 && (Y[0] = 36064, oe = !0);
    else
      Y[0] !== 1029 && (Y[0] = 1029, oe = !0);
    oe && (t.isWebGL2 ? c.drawBuffers(Y) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y));
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
  function tt(O, ae, Y, oe, se, Re, Qe, Xe) {
    if (O === 0) {
      _ === !0 && (ve(3042), _ = !1);
      return;
    }
    if (_ === !1 && (Fe(3042), _ = !0), O !== 5) {
      if (O !== v || Xe !== T) {
        if ((w !== 100 || S !== 100) && (c.blendEquation(32774), w = 100, S = 100), Xe)
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
        x = null, M = null, L = null, y = null, v = O, T = Xe;
      }
      return;
    }
    se = se || ae, Re = Re || Y, Qe = Qe || oe, (ae !== w || se !== S) && (c.blendEquationSeparate(Te[ae], Te[se]), w = ae, S = se), (Y !== x || oe !== M || Re !== L || Qe !== y) && (c.blendFuncSeparate(me[Y], me[oe], me[Re], me[Qe]), x = Y, M = oe, L = Re, y = Qe), v = O, T = null;
  }
  function pt(O, ae) {
    O.side === 2 ? ve(2884) : Fe(2884);
    let Y = O.side === 1;
    ae && (Y = !Y), at(Y), O.blending === 1 && O.transparent === !1 ? tt(0) : tt(O.blending, O.blendEquation, O.blendSrc, O.blendDst, O.blendEquationAlpha, O.blendSrcAlpha, O.blendDstAlpha, O.premultipliedAlpha), a.setFunc(O.depthFunc), a.setTest(O.depthTest), a.setMask(O.depthWrite), r.setMask(O.colorWrite);
    const oe = O.stencilWrite;
    l.setTest(oe), oe && (l.setMask(O.stencilWriteMask), l.setFunc(O.stencilFunc, O.stencilRef, O.stencilFuncMask), l.setOp(O.stencilFail, O.stencilZFail, O.stencilZPass)), Ne(O.polygonOffset, O.polygonOffsetFactor, O.polygonOffsetUnits), O.alphaToCoverage === !0 ? Fe(32926) : ve(32926);
  }
  function at(O) {
    P !== O && (O ? c.frontFace(2304) : c.frontFace(2305), P = O);
  }
  function It(O) {
    O !== 0 ? (Fe(2884), O !== z && (O === 1 ? c.cullFace(1029) : O === 2 ? c.cullFace(1028) : c.cullFace(1032))) : ve(2884), z = O;
  }
  function nt(O) {
    O !== H && (D && c.lineWidth(O), H = O);
  }
  function Ne(O, ae, Y) {
    O ? (Fe(32823), (B !== ae || C !== Y) && (c.polygonOffset(ae, Y), B = ae, C = Y)) : ve(32823);
  }
  function Wt(O) {
    O ? Fe(3089) : ve(3089);
  }
  function zt(O) {
    O === void 0 && (O = 33984 + F - 1), N !== O && (c.activeTexture(O), N = O);
  }
  function R(O, ae) {
    N === null && zt();
    let Y = V[N];
    Y === void 0 && (Y = { type: void 0, texture: void 0 }, V[N] = Y), (Y.type !== O || Y.texture !== ae) && (c.bindTexture(O, ae || Z[O]), Y.type = O, Y.texture = ae);
  }
  function E() {
    const O = V[N];
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
  function re() {
    try {
      c.compressedTexSubImage2D.apply(c, arguments);
    } catch (O) {
      console.error("THREE.WebGLState:", O);
    }
  }
  function ye() {
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
    ce.equals(O) === !1 && (c.viewport(O.x, O.y, O.z, O.w), ce.copy(O));
  }
  function Se(O, ae) {
    let Y = d.get(ae);
    Y === void 0 && (Y = /* @__PURE__ */ new WeakMap(), d.set(ae, Y));
    let oe = Y.get(O);
    oe === void 0 && (oe = c.getUniformBlockIndex(ae, O.name), Y.set(O, oe));
  }
  function Ie(O, ae) {
    const oe = d.get(ae).get(O);
    h.get(O) !== oe && (c.uniformBlockBinding(ae, oe, O.__bindingPointIndex), h.set(O, oe));
  }
  function qe() {
    c.disable(3042), c.disable(2884), c.disable(2929), c.disable(32823), c.disable(3089), c.disable(2960), c.disable(32926), c.blendEquation(32774), c.blendFunc(1, 0), c.blendFuncSeparate(1, 0, 1, 0), c.colorMask(!0, !0, !0, !0), c.clearColor(0, 0, 0, 0), c.depthMask(!0), c.depthFunc(513), c.clearDepth(1), c.stencilMask(4294967295), c.stencilFunc(519, 0, 4294967295), c.stencilOp(7680, 7680, 7680), c.clearStencil(0), c.cullFace(1029), c.frontFace(2305), c.polygonOffset(0, 0), c.activeTexture(33984), c.bindFramebuffer(36160, null), n === !0 && (c.bindFramebuffer(36009, null), c.bindFramebuffer(36008, null)), c.useProgram(null), c.lineWidth(1), c.scissor(0, 0, c.canvas.width, c.canvas.height), c.viewport(0, 0, c.canvas.width, c.canvas.height), u = {}, N = null, V = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), p = [], f = null, _ = !1, v = null, w = null, x = null, M = null, S = null, L = null, y = null, T = !1, P = null, z = null, H = null, B = null, C = null, ee.set(0, 0, c.canvas.width, c.canvas.height), ce.set(0, 0, c.canvas.width, c.canvas.height), r.reset(), a.reset(), l.reset();
  }
  return {
    buffers: {
      color: r,
      depth: a,
      stencil: l
    },
    enable: Fe,
    disable: ve,
    bindFramebuffer: xe,
    drawBuffers: ue,
    useProgram: Oe,
    setBlending: tt,
    setMaterial: pt,
    setFlipSided: at,
    setCullFace: It,
    setLineWidth: nt,
    setPolygonOffset: Ne,
    setScissorTest: Wt,
    activeTexture: zt,
    bindTexture: R,
    unbindTexture: E,
    compressedTexImage2D: $,
    texImage2D: pe,
    texImage3D: he,
    updateUBOMapping: Se,
    uniformBlockBinding: Ie,
    texStorage2D: ye,
    texStorage3D: j,
    texSubImage2D: Q,
    texSubImage3D: te,
    compressedTexSubImage2D: re,
    scissor: fe,
    viewport: de,
    reset: qe
  };
}
function ud(c, e, t, n, i, s, o) {
  const r = i.isWebGL2, a = i.maxTextures, l = i.maxCubemapSize, h = i.maxTextureSize, d = i.maxSamples, u = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let p;
  const f = /* @__PURE__ */ new WeakMap();
  let _ = !1;
  try {
    _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function v(R, E) {
    return _ ? new OffscreenCanvas(R, E) : ls("canvas");
  }
  function w(R, E, $, Q) {
    let te = 1;
    if ((R.width > Q || R.height > Q) && (te = Q / Math.max(R.width, R.height)), te < 1 || E === !0)
      if (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && R instanceof ImageBitmap) {
        const re = E ? rr : Math.floor, ye = re(te * R.width), j = re(te * R.height);
        p === void 0 && (p = v(ye, j));
        const pe = $ ? v(ye, j) : p;
        return pe.width = ye, pe.height = j, pe.getContext("2d").drawImage(R, 0, 0, ye, j), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + R.width + "x" + R.height + ") to (" + ye + "x" + j + ")."), pe;
      } else
        return "data" in R && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + R.width + "x" + R.height + ")."), R;
    return R;
  }
  function x(R) {
    return Mr(R.width) && Mr(R.height);
  }
  function M(R) {
    return r ? !1 : R.wrapS !== 1001 || R.wrapT !== 1001 || R.minFilter !== 1003 && R.minFilter !== 1006;
  }
  function S(R, E) {
    return R.generateMipmaps && E && R.minFilter !== 1003 && R.minFilter !== 1006;
  }
  function L(R) {
    c.generateMipmap(R);
  }
  function y(R, E, $, Q, te = !1) {
    if (r === !1)
      return E;
    if (R !== null) {
      if (c[R] !== void 0)
        return c[R];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + R + "'");
    }
    let re = E;
    return E === 6403 && ($ === 5126 && (re = 33326), $ === 5131 && (re = 33325), $ === 5121 && (re = 33321)), E === 33319 && ($ === 5126 && (re = 33328), $ === 5131 && (re = 33327), $ === 5121 && (re = 33323)), E === 6408 && ($ === 5126 && (re = 34836), $ === 5131 && (re = 34842), $ === 5121 && (re = Q === 3001 && te === !1 ? 35907 : 32856), $ === 32819 && (re = 32854), $ === 32820 && (re = 32855)), (re === 33325 || re === 33326 || re === 33327 || re === 33328 || re === 34842 || re === 34836) && e.get("EXT_color_buffer_float"), re;
  }
  function T(R, E, $) {
    return S(R, $) === !0 || R.isFramebufferTexture && R.minFilter !== 1003 && R.minFilter !== 1006 ? Math.log2(Math.max(E.width, E.height)) + 1 : R.mipmaps !== void 0 && R.mipmaps.length > 0 ? R.mipmaps.length : R.isCompressedTexture && Array.isArray(R.image) ? E.mipmaps.length : 1;
  }
  function P(R) {
    return R === 1003 || R === 1004 || R === 1005 ? 9728 : 9729;
  }
  function z(R) {
    const E = R.target;
    E.removeEventListener("dispose", z), B(E), E.isVideoTexture && g.delete(E);
  }
  function H(R) {
    const E = R.target;
    E.removeEventListener("dispose", H), F(E);
  }
  function B(R) {
    const E = n.get(R);
    if (E.__webglInit === void 0)
      return;
    const $ = R.source, Q = f.get($);
    if (Q) {
      const te = Q[E.__cacheKey];
      te.usedTimes--, te.usedTimes === 0 && C(R), Object.keys(Q).length === 0 && f.delete($);
    }
    n.remove(R);
  }
  function C(R) {
    const E = n.get(R);
    c.deleteTexture(E.__webglTexture);
    const $ = R.source, Q = f.get($);
    delete Q[E.__cacheKey], o.memory.textures--;
  }
  function F(R) {
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
      for (let te = 0, re = E.length; te < re; te++) {
        const ye = n.get(E[te]);
        ye.__webglTexture && (c.deleteTexture(ye.__webglTexture), o.memory.textures--), n.remove(E[te]);
      }
    n.remove(E), n.remove(R);
  }
  let D = 0;
  function X() {
    D = 0;
  }
  function U() {
    const R = D;
    return R >= a && console.warn("THREE.WebGLTextures: Trying to use " + R + " texture units while this GPU supports only " + a), D += 1, R;
  }
  function N(R) {
    const E = [];
    return E.push(R.wrapS), E.push(R.wrapT), E.push(R.magFilter), E.push(R.minFilter), E.push(R.anisotropy), E.push(R.internalFormat), E.push(R.format), E.push(R.type), E.push(R.generateMipmaps), E.push(R.premultiplyAlpha), E.push(R.flipY), E.push(R.unpackAlignment), E.push(R.encoding), E.join();
  }
  function V(R, E) {
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
  function W(R, E) {
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
    if ($ ? (c.texParameteri(R, 10242, ce[E.wrapS]), c.texParameteri(R, 10243, ce[E.wrapT]), (R === 32879 || R === 35866) && c.texParameteri(R, 32882, ce[E.wrapR]), c.texParameteri(R, 10240, ge[E.magFilter]), c.texParameteri(R, 10241, ge[E.minFilter])) : (c.texParameteri(R, 10242, 33071), c.texParameteri(R, 10243, 33071), (R === 32879 || R === 35866) && c.texParameteri(R, 32882, 33071), (E.wrapS !== 1001 || E.wrapT !== 1001) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), c.texParameteri(R, 10240, P(E.magFilter)), c.texParameteri(R, 10241, P(E.minFilter)), E.minFilter !== 1003 && E.minFilter !== 1006 && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const Q = e.get("EXT_texture_filter_anisotropic");
      if (E.type === 1015 && e.has("OES_texture_float_linear") === !1 || r === !1 && E.type === 1016 && e.has("OES_texture_half_float_linear") === !1)
        return;
      (E.anisotropy > 1 || n.get(E).__currentAnisotropy) && (c.texParameterf(R, Q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(E.anisotropy, i.getMaxAnisotropy())), n.get(E).__currentAnisotropy = E.anisotropy);
    }
  }
  function Fe(R, E) {
    let $ = !1;
    R.__webglInit === void 0 && (R.__webglInit = !0, E.addEventListener("dispose", z));
    const Q = E.source;
    let te = f.get(Q);
    te === void 0 && (te = {}, f.set(Q, te));
    const re = N(E);
    if (re !== R.__cacheKey) {
      te[re] === void 0 && (te[re] = {
        texture: c.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, $ = !0), te[re].usedTimes++;
      const ye = te[R.__cacheKey];
      ye !== void 0 && (te[R.__cacheKey].usedTimes--, ye.usedTimes === 0 && C(E)), R.__cacheKey = re, R.__webglTexture = te[re].texture;
    }
    return $;
  }
  function ve(R, E, $) {
    let Q = 3553;
    E.isDataArrayTexture && (Q = 35866), E.isData3DTexture && (Q = 32879);
    const te = Fe(R, E), re = E.source;
    if (t.activeTexture(33984 + $), t.bindTexture(Q, R.__webglTexture), re.version !== re.__currentVersion || te === !0) {
      c.pixelStorei(37440, E.flipY), c.pixelStorei(37441, E.premultiplyAlpha), c.pixelStorei(3317, E.unpackAlignment), c.pixelStorei(37443, 0);
      const ye = M(E) && x(E.image) === !1;
      let j = w(E.image, ye, !1, h);
      j = zt(E, j);
      const pe = x(j) || r, he = s.convert(E.format, E.encoding);
      let fe = s.convert(E.type), de = y(E.internalFormat, he, fe, E.encoding, E.isVideoTexture);
      Z(Q, E, pe);
      let Se;
      const Ie = E.mipmaps, qe = r && E.isVideoTexture !== !0, O = re.__currentVersion === void 0 || te === !0, ae = T(E, j, pe);
      if (E.isDepthTexture)
        de = 6402, r ? E.type === 1015 ? de = 36012 : E.type === 1014 ? de = 33190 : E.type === 1020 ? de = 35056 : de = 33189 : E.type === 1015 && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), E.format === 1026 && de === 6402 && E.type !== 1012 && E.type !== 1014 && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), E.type = 1014, fe = s.convert(E.type)), E.format === 1027 && de === 6402 && (de = 34041, E.type !== 1020 && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), E.type = 1020, fe = s.convert(E.type))), O && (qe ? t.texStorage2D(3553, 1, de, j.width, j.height) : t.texImage2D(3553, 0, de, j.width, j.height, 0, he, fe, null));
      else if (E.isDataTexture)
        if (Ie.length > 0 && pe) {
          qe && O && t.texStorage2D(3553, ae, de, Ie[0].width, Ie[0].height);
          for (let Y = 0, oe = Ie.length; Y < oe; Y++)
            Se = Ie[Y], qe ? t.texSubImage2D(3553, Y, 0, 0, Se.width, Se.height, he, fe, Se.data) : t.texImage2D(3553, Y, de, Se.width, Se.height, 0, he, fe, Se.data);
          E.generateMipmaps = !1;
        } else
          qe ? (O && t.texStorage2D(3553, ae, de, j.width, j.height), t.texSubImage2D(3553, 0, 0, 0, j.width, j.height, he, fe, j.data)) : t.texImage2D(3553, 0, de, j.width, j.height, 0, he, fe, j.data);
      else if (E.isCompressedTexture) {
        qe && O && t.texStorage2D(3553, ae, de, Ie[0].width, Ie[0].height);
        for (let Y = 0, oe = Ie.length; Y < oe; Y++)
          Se = Ie[Y], E.format !== 1023 ? he !== null ? qe ? t.compressedTexSubImage2D(3553, Y, 0, 0, Se.width, Se.height, he, Se.data) : t.compressedTexImage2D(3553, Y, de, Se.width, Se.height, 0, Se.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : qe ? t.texSubImage2D(3553, Y, 0, 0, Se.width, Se.height, he, fe, Se.data) : t.texImage2D(3553, Y, de, Se.width, Se.height, 0, he, fe, Se.data);
      } else if (E.isDataArrayTexture)
        qe ? (O && t.texStorage3D(35866, ae, de, j.width, j.height, j.depth), t.texSubImage3D(35866, 0, 0, 0, 0, j.width, j.height, j.depth, he, fe, j.data)) : t.texImage3D(35866, 0, de, j.width, j.height, j.depth, 0, he, fe, j.data);
      else if (E.isData3DTexture)
        qe ? (O && t.texStorage3D(32879, ae, de, j.width, j.height, j.depth), t.texSubImage3D(32879, 0, 0, 0, 0, j.width, j.height, j.depth, he, fe, j.data)) : t.texImage3D(32879, 0, de, j.width, j.height, j.depth, 0, he, fe, j.data);
      else if (E.isFramebufferTexture) {
        if (O)
          if (qe)
            t.texStorage2D(3553, ae, de, j.width, j.height);
          else {
            let Y = j.width, oe = j.height;
            for (let se = 0; se < ae; se++)
              t.texImage2D(3553, se, de, Y, oe, 0, he, fe, null), Y >>= 1, oe >>= 1;
          }
      } else if (Ie.length > 0 && pe) {
        qe && O && t.texStorage2D(3553, ae, de, Ie[0].width, Ie[0].height);
        for (let Y = 0, oe = Ie.length; Y < oe; Y++)
          Se = Ie[Y], qe ? t.texSubImage2D(3553, Y, 0, 0, he, fe, Se) : t.texImage2D(3553, Y, de, he, fe, Se);
        E.generateMipmaps = !1;
      } else
        qe ? (O && t.texStorage2D(3553, ae, de, j.width, j.height), t.texSubImage2D(3553, 0, 0, 0, he, fe, j)) : t.texImage2D(3553, 0, de, he, fe, j);
      S(E, pe) && L(Q), re.__currentVersion = re.version, E.onUpdate && E.onUpdate(E);
    }
    R.__version = E.version;
  }
  function xe(R, E, $) {
    if (E.image.length !== 6)
      return;
    const Q = Fe(R, E), te = E.source;
    if (t.activeTexture(33984 + $), t.bindTexture(34067, R.__webglTexture), te.version !== te.__currentVersion || Q === !0) {
      c.pixelStorei(37440, E.flipY), c.pixelStorei(37441, E.premultiplyAlpha), c.pixelStorei(3317, E.unpackAlignment), c.pixelStorei(37443, 0);
      const re = E.isCompressedTexture || E.image[0].isCompressedTexture, ye = E.image[0] && E.image[0].isDataTexture, j = [];
      for (let Y = 0; Y < 6; Y++)
        !re && !ye ? j[Y] = w(E.image[Y], !1, !0, l) : j[Y] = ye ? E.image[Y].image : E.image[Y], j[Y] = zt(E, j[Y]);
      const pe = j[0], he = x(pe) || r, fe = s.convert(E.format, E.encoding), de = s.convert(E.type), Se = y(E.internalFormat, fe, de, E.encoding), Ie = r && E.isVideoTexture !== !0, qe = te.__currentVersion === void 0 || Q === !0;
      let O = T(E, pe, he);
      Z(34067, E, he);
      let ae;
      if (re) {
        Ie && qe && t.texStorage2D(34067, O, Se, pe.width, pe.height);
        for (let Y = 0; Y < 6; Y++) {
          ae = j[Y].mipmaps;
          for (let oe = 0; oe < ae.length; oe++) {
            const se = ae[oe];
            E.format !== 1023 ? fe !== null ? Ie ? t.compressedTexSubImage2D(34069 + Y, oe, 0, 0, se.width, se.height, fe, se.data) : t.compressedTexImage2D(34069 + Y, oe, Se, se.width, se.height, 0, se.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ie ? t.texSubImage2D(34069 + Y, oe, 0, 0, se.width, se.height, fe, de, se.data) : t.texImage2D(34069 + Y, oe, Se, se.width, se.height, 0, fe, de, se.data);
          }
        }
      } else {
        ae = E.mipmaps, Ie && qe && (ae.length > 0 && O++, t.texStorage2D(34067, O, Se, j[0].width, j[0].height));
        for (let Y = 0; Y < 6; Y++)
          if (ye) {
            Ie ? t.texSubImage2D(34069 + Y, 0, 0, 0, j[Y].width, j[Y].height, fe, de, j[Y].data) : t.texImage2D(34069 + Y, 0, Se, j[Y].width, j[Y].height, 0, fe, de, j[Y].data);
            for (let oe = 0; oe < ae.length; oe++) {
              const Re = ae[oe].image[Y].image;
              Ie ? t.texSubImage2D(34069 + Y, oe + 1, 0, 0, Re.width, Re.height, fe, de, Re.data) : t.texImage2D(34069 + Y, oe + 1, Se, Re.width, Re.height, 0, fe, de, Re.data);
            }
          } else {
            Ie ? t.texSubImage2D(34069 + Y, 0, 0, 0, fe, de, j[Y]) : t.texImage2D(34069 + Y, 0, Se, fe, de, j[Y]);
            for (let oe = 0; oe < ae.length; oe++) {
              const se = ae[oe];
              Ie ? t.texSubImage2D(34069 + Y, oe + 1, 0, 0, fe, de, se.image[Y]) : t.texImage2D(34069 + Y, oe + 1, Se, fe, de, se.image[Y]);
            }
          }
      }
      S(E, he) && L(34067), te.__currentVersion = te.version, E.onUpdate && E.onUpdate(E);
    }
    R.__version = E.version;
  }
  function ue(R, E, $, Q, te) {
    const re = s.convert($.format, $.encoding), ye = s.convert($.type), j = y($.internalFormat, re, ye, $.encoding);
    n.get(E).__hasExternalTextures || (te === 32879 || te === 35866 ? t.texImage3D(te, 0, j, E.width, E.height, E.depth, 0, re, ye, null) : t.texImage2D(te, 0, j, E.width, E.height, 0, re, ye, null)), t.bindFramebuffer(36160, R), Ne(E) ? u.framebufferTexture2DMultisampleEXT(36160, Q, te, n.get($).__webglTexture, 0, nt(E)) : c.framebufferTexture2D(36160, Q, te, n.get($).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function Oe(R, E, $) {
    if (c.bindRenderbuffer(36161, R), E.depthBuffer && !E.stencilBuffer) {
      let Q = 33189;
      if ($ || Ne(E)) {
        const te = E.depthTexture;
        te && te.isDepthTexture && (te.type === 1015 ? Q = 36012 : te.type === 1014 && (Q = 33190));
        const re = nt(E);
        Ne(E) ? u.renderbufferStorageMultisampleEXT(36161, re, Q, E.width, E.height) : c.renderbufferStorageMultisample(36161, re, Q, E.width, E.height);
      } else
        c.renderbufferStorage(36161, Q, E.width, E.height);
      c.framebufferRenderbuffer(36160, 36096, 36161, R);
    } else if (E.depthBuffer && E.stencilBuffer) {
      const Q = nt(E);
      $ && Ne(E) === !1 ? c.renderbufferStorageMultisample(36161, Q, 35056, E.width, E.height) : Ne(E) ? u.renderbufferStorageMultisampleEXT(36161, Q, 35056, E.width, E.height) : c.renderbufferStorage(36161, 34041, E.width, E.height), c.framebufferRenderbuffer(36160, 33306, 36161, R);
    } else {
      const Q = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture];
      for (let te = 0; te < Q.length; te++) {
        const re = Q[te], ye = s.convert(re.format, re.encoding), j = s.convert(re.type), pe = y(re.internalFormat, ye, j, re.encoding), he = nt(E);
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
    (!n.get(E.depthTexture).__webglTexture || E.depthTexture.image.width !== E.width || E.depthTexture.image.height !== E.height) && (E.depthTexture.image.width = E.width, E.depthTexture.image.height = E.height, E.depthTexture.needsUpdate = !0), V(E.depthTexture, 0);
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
  function pt(R) {
    const E = R.texture, $ = n.get(R), Q = n.get(E);
    R.addEventListener("dispose", H), R.isWebGLMultipleRenderTargets !== !0 && (Q.__webglTexture === void 0 && (Q.__webglTexture = c.createTexture()), Q.__version = E.version, o.memory.textures++);
    const te = R.isWebGLCubeRenderTarget === !0, re = R.isWebGLMultipleRenderTargets === !0, ye = x(R) || r;
    if (te) {
      $.__webglFramebuffer = [];
      for (let j = 0; j < 6; j++)
        $.__webglFramebuffer[j] = c.createFramebuffer();
    } else {
      if ($.__webglFramebuffer = c.createFramebuffer(), re)
        if (i.drawBuffers) {
          const j = R.texture;
          for (let pe = 0, he = j.length; pe < he; pe++) {
            const fe = n.get(j[pe]);
            fe.__webglTexture === void 0 && (fe.__webglTexture = c.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (r && R.samples > 0 && Ne(R) === !1) {
        const j = re ? E : [E];
        $.__webglMultisampledFramebuffer = c.createFramebuffer(), $.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, $.__webglMultisampledFramebuffer);
        for (let pe = 0; pe < j.length; pe++) {
          const he = j[pe];
          $.__webglColorRenderbuffer[pe] = c.createRenderbuffer(), c.bindRenderbuffer(36161, $.__webglColorRenderbuffer[pe]);
          const fe = s.convert(he.format, he.encoding), de = s.convert(he.type), Se = y(he.internalFormat, fe, de, he.encoding), Ie = nt(R);
          c.renderbufferStorageMultisample(36161, Ie, Se, R.width, R.height), c.framebufferRenderbuffer(36160, 36064 + pe, 36161, $.__webglColorRenderbuffer[pe]);
        }
        c.bindRenderbuffer(36161, null), R.depthBuffer && ($.__webglDepthRenderbuffer = c.createRenderbuffer(), Oe($.__webglDepthRenderbuffer, R, !0)), t.bindFramebuffer(36160, null);
      }
    }
    if (te) {
      t.bindTexture(34067, Q.__webglTexture), Z(34067, E, ye);
      for (let j = 0; j < 6; j++)
        ue($.__webglFramebuffer[j], R, E, 36064, 34069 + j);
      S(E, ye) && L(34067), t.unbindTexture();
    } else if (re) {
      const j = R.texture;
      for (let pe = 0, he = j.length; pe < he; pe++) {
        const fe = j[pe], de = n.get(fe);
        t.bindTexture(3553, de.__webglTexture), Z(3553, fe, ye), ue($.__webglFramebuffer, R, fe, 36064 + pe, 3553), S(fe, ye) && L(3553);
      }
      t.unbindTexture();
    } else {
      let j = 3553;
      (R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) && (r ? j = R.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(j, Q.__webglTexture), Z(j, E, ye), ue($.__webglFramebuffer, R, E, 36064, j), S(E, ye) && L(j), t.unbindTexture();
    }
    R.depthBuffer && me(R);
  }
  function at(R) {
    const E = x(R) || r, $ = R.isWebGLMultipleRenderTargets === !0 ? R.texture : [R.texture];
    for (let Q = 0, te = $.length; Q < te; Q++) {
      const re = $[Q];
      if (S(re, E)) {
        const ye = R.isWebGLCubeRenderTarget ? 34067 : 3553, j = n.get(re).__webglTexture;
        t.bindTexture(ye, j), L(ye), t.unbindTexture();
      }
    }
  }
  function It(R) {
    if (r && R.samples > 0 && Ne(R) === !1) {
      const E = R.isWebGLMultipleRenderTargets ? R.texture : [R.texture], $ = R.width, Q = R.height;
      let te = 16384;
      const re = [], ye = R.stencilBuffer ? 33306 : 36096, j = n.get(R), pe = R.isWebGLMultipleRenderTargets === !0;
      if (pe)
        for (let he = 0; he < E.length; he++)
          t.bindFramebuffer(36160, j.__webglMultisampledFramebuffer), c.framebufferRenderbuffer(36160, 36064 + he, 36161, null), t.bindFramebuffer(36160, j.__webglFramebuffer), c.framebufferTexture2D(36009, 36064 + he, 3553, null, 0);
      t.bindFramebuffer(36008, j.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, j.__webglFramebuffer);
      for (let he = 0; he < E.length; he++) {
        re.push(36064 + he), R.depthBuffer && re.push(ye);
        const fe = j.__ignoreDepthValues !== void 0 ? j.__ignoreDepthValues : !1;
        if (fe === !1 && (R.depthBuffer && (te |= 256), R.stencilBuffer && (te |= 1024)), pe && c.framebufferRenderbuffer(36008, 36064, 36161, j.__webglColorRenderbuffer[he]), fe === !0 && (c.invalidateFramebuffer(36008, [ye]), c.invalidateFramebuffer(36009, [ye])), pe) {
          const de = n.get(E[he]).__webglTexture;
          c.framebufferTexture2D(36009, 36064, 3553, de, 0);
        }
        c.blitFramebuffer(0, 0, $, Q, 0, 0, $, Q, te, 9728), m && c.invalidateFramebuffer(36008, re);
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
  function zt(R, E) {
    const $ = R.encoding, Q = R.format, te = R.type;
    return R.isCompressedTexture === !0 || R.isVideoTexture === !0 || R.format === 1035 || $ !== 3e3 && ($ === 3001 ? r === !1 ? e.has("EXT_sRGB") === !0 && Q === 1023 ? (R.format = 1035, R.minFilter = 1006, R.generateMipmaps = !1) : E = Bo.sRGBToLinear(E) : (Q !== 1023 || te !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", $)), E;
  }
  this.allocateTextureUnit = U, this.resetTextureUnits = X, this.setTexture2D = V, this.setTexture2DArray = J, this.setTexture3D = W, this.setTextureCube = ee, this.rebindTextures = tt, this.setupRenderTarget = pt, this.updateRenderTargetMipmap = at, this.updateMultisampleRenderTarget = It, this.setupDepthRenderbuffer = me, this.setupFrameBufferTexture = ue, this.useMultisampledRTT = Ne;
}
function dd(c, e, t) {
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
class fd extends ft {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Yi extends it {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const pd = { type: "move" };
class Hs {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Yi(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Yi(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new I(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new I()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Yi(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new I(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new I()), this._grip;
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
            const v = new Yi();
            v.matrixAutoUpdate = !1, v.visible = !1, l.joints[p.jointName] = v, l.add(v);
          }
          const _ = l.joints[p.jointName];
          f !== null && (_.matrix.fromArray(f.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), _.jointRadius = f.radius), _.visible = f !== null;
        }
        const h = l.joints["index-finger-tip"], d = l.joints["thumb-tip"], u = h.position.distanceTo(d.position), m = 0.02, g = 5e-3;
        l.inputState.pinching && u > m + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && u <= m - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        a !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (a.matrix.fromArray(s.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), s.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(s.linearVelocity)) : a.hasLinearVelocity = !1, s.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(s.angularVelocity)) : a.hasAngularVelocity = !1));
      r !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (r.matrix.fromArray(i.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), i.linearVelocity ? (r.hasLinearVelocity = !0, r.linearVelocity.copy(i.linearVelocity)) : r.hasLinearVelocity = !1, i.angularVelocity ? (r.hasAngularVelocity = !0, r.angularVelocity.copy(i.angularVelocity)) : r.hasAngularVelocity = !1, this.dispatchEvent(pd)));
    }
    return r !== null && (r.visible = i !== null), a !== null && (a.visible = s !== null), l !== null && (l.visible = o !== null), this;
  }
}
class md extends xt {
  constructor(e, t, n, i, s, o, r, a, l, h) {
    if (h = h !== void 0 ? h : 1026, h !== 1026 && h !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === 1026 && (n = 1014), n === void 0 && h === 1027 && (n = 1020), super(null, i, s, o, r, a, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = r !== void 0 ? r : 1003, this.minFilter = a !== void 0 ? a : 1003, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class gd extends si {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, o = null, r = "local-floor", a = null, l = null, h = null, d = null, u = null, m = null;
    const g = t.getContextAttributes();
    let p = null, f = null;
    const _ = [], v = [], w = new ft();
    w.layers.enable(1), w.viewport = new Ge();
    const x = new ft();
    x.layers.enable(2), x.viewport = new Ge();
    const M = [w, x], S = new fd();
    S.layers.enable(1), S.layers.enable(2);
    let L = null, y = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(N) {
      let V = _[N];
      return V === void 0 && (V = new Hs(), _[N] = V), V.getTargetRaySpace();
    }, this.getControllerGrip = function(N) {
      let V = _[N];
      return V === void 0 && (V = new Hs(), _[N] = V), V.getGripSpace();
    }, this.getHand = function(N) {
      let V = _[N];
      return V === void 0 && (V = new Hs(), _[N] = V), V.getHandSpace();
    };
    function T(N) {
      const V = v.indexOf(N.inputSource);
      if (V === -1)
        return;
      const J = _[V];
      J !== void 0 && J.dispatchEvent({ type: N.type, data: N.inputSource });
    }
    function P() {
      i.removeEventListener("select", T), i.removeEventListener("selectstart", T), i.removeEventListener("selectend", T), i.removeEventListener("squeeze", T), i.removeEventListener("squeezestart", T), i.removeEventListener("squeezeend", T), i.removeEventListener("end", P), i.removeEventListener("inputsourceschange", z);
      for (let N = 0; N < _.length; N++) {
        const V = v[N];
        V !== null && (v[N] = null, _[N].disconnect(V));
      }
      L = null, y = null, e.setRenderTarget(p), u = null, d = null, h = null, i = null, f = null, U.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(N) {
      s = N, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(N) {
      r = N, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return a || o;
    }, this.setReferenceSpace = function(N) {
      a = N;
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
        if (p = e.getRenderTarget(), i.addEventListener("select", T), i.addEventListener("selectstart", T), i.addEventListener("selectend", T), i.addEventListener("squeeze", T), i.addEventListener("squeezestart", T), i.addEventListener("squeezeend", T), i.addEventListener("end", P), i.addEventListener("inputsourceschange", z), g.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const V = {
            antialias: i.renderState.layers === void 0 ? g.antialias : !0,
            alpha: g.alpha,
            depth: g.depth,
            stencil: g.stencil,
            framebufferScaleFactor: s
          };
          u = new XRWebGLLayer(i, t, V), i.updateRenderState({ baseLayer: u }), f = new Cn(
            u.framebufferWidth,
            u.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              encoding: e.outputEncoding
            }
          );
        } else {
          let V = null, J = null, W = null;
          g.depth && (W = g.stencil ? 35056 : 33190, V = g.stencil ? 1027 : 1026, J = g.stencil ? 1020 : 1014);
          const ee = {
            colorFormat: 32856,
            depthFormat: W,
            scaleFactor: s
          };
          h = new XRWebGLBinding(i, t), d = h.createProjectionLayer(ee), i.updateRenderState({ layers: [d] }), f = new Cn(
            d.textureWidth,
            d.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new md(d.textureWidth, d.textureHeight, J, void 0, void 0, void 0, void 0, void 0, void 0, V),
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
    function z(N) {
      for (let V = 0; V < N.removed.length; V++) {
        const J = N.removed[V], W = v.indexOf(J);
        W >= 0 && (v[W] = null, _[W].dispatchEvent({ type: "disconnected", data: J }));
      }
      for (let V = 0; V < N.added.length; V++) {
        const J = N.added[V];
        let W = v.indexOf(J);
        if (W === -1) {
          for (let ce = 0; ce < _.length; ce++)
            if (ce >= v.length) {
              v.push(J), W = ce;
              break;
            } else if (v[ce] === null) {
              v[ce] = J, W = ce;
              break;
            }
          if (W === -1)
            break;
        }
        const ee = _[W];
        ee && ee.dispatchEvent({ type: "connected", data: J });
      }
    }
    const H = new I(), B = new I();
    function C(N, V, J) {
      H.setFromMatrixPosition(V.matrixWorld), B.setFromMatrixPosition(J.matrixWorld);
      const W = H.distanceTo(B), ee = V.projectionMatrix.elements, ce = J.projectionMatrix.elements, ge = ee[14] / (ee[10] - 1), Z = ee[14] / (ee[10] + 1), Fe = (ee[9] + 1) / ee[5], ve = (ee[9] - 1) / ee[5], xe = (ee[8] - 1) / ee[0], ue = (ce[8] + 1) / ce[0], Oe = ge * xe, Te = ge * ue, me = W / (-xe + ue), tt = me * -xe;
      V.matrixWorld.decompose(N.position, N.quaternion, N.scale), N.translateX(tt), N.translateZ(me), N.matrixWorld.compose(N.position, N.quaternion, N.scale), N.matrixWorldInverse.copy(N.matrixWorld).invert();
      const pt = ge + me, at = Z + me, It = Oe - tt, nt = Te + (W - tt), Ne = Fe * Z / at * pt, Wt = ve * Z / at * pt;
      N.projectionMatrix.makePerspective(It, nt, Ne, Wt, pt, at);
    }
    function F(N, V) {
      V === null ? N.matrixWorld.copy(N.matrix) : N.matrixWorld.multiplyMatrices(V.matrixWorld, N.matrix), N.matrixWorldInverse.copy(N.matrixWorld).invert();
    }
    this.updateCamera = function(N) {
      if (i === null)
        return;
      S.near = x.near = w.near = N.near, S.far = x.far = w.far = N.far, (L !== S.near || y !== S.far) && (i.updateRenderState({
        depthNear: S.near,
        depthFar: S.far
      }), L = S.near, y = S.far);
      const V = N.parent, J = S.cameras;
      F(S, V);
      for (let ee = 0; ee < J.length; ee++)
        F(J[ee], V);
      S.matrixWorld.decompose(S.position, S.quaternion, S.scale), N.position.copy(S.position), N.quaternion.copy(S.quaternion), N.scale.copy(S.scale), N.matrix.copy(S.matrix), N.matrixWorld.copy(S.matrixWorld);
      const W = N.children;
      for (let ee = 0, ce = W.length; ee < ce; ee++)
        W[ee].updateMatrixWorld(!0);
      J.length === 2 ? C(S, w, x) : S.projectionMatrix.copy(w.projectionMatrix);
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
    let D = null;
    function X(N, V) {
      if (l = V.getViewerPose(a || o), m = V, l !== null) {
        const J = l.views;
        u !== null && (e.setRenderTargetFramebuffer(f, u.framebuffer), e.setRenderTarget(f));
        let W = !1;
        J.length !== S.cameras.length && (S.cameras.length = 0, W = !0);
        for (let ee = 0; ee < J.length; ee++) {
          const ce = J[ee];
          let ge = null;
          if (u !== null)
            ge = u.getViewport(ce);
          else {
            const Fe = h.getViewSubImage(d, ce);
            ge = Fe.viewport, ee === 0 && (e.setRenderTargetTextures(
              f,
              Fe.colorTexture,
              d.ignoreDepthValues ? void 0 : Fe.depthStencilTexture
            ), e.setRenderTarget(f));
          }
          let Z = M[ee];
          Z === void 0 && (Z = new ft(), Z.layers.enable(ee), Z.viewport = new Ge(), M[ee] = Z), Z.matrix.fromArray(ce.transform.matrix), Z.projectionMatrix.fromArray(ce.projectionMatrix), Z.viewport.set(ge.x, ge.y, ge.width, ge.height), ee === 0 && S.matrix.copy(Z.matrix), W === !0 && S.cameras.push(Z);
        }
      }
      for (let J = 0; J < _.length; J++) {
        const W = v[J], ee = _[J];
        W !== null && ee !== void 0 && ee.update(W, V, a || o);
      }
      D && D(N, V), m = null;
    }
    const U = new qo();
    U.setAnimationLoop(X), this.setAnimationLoop = function(N) {
      D = N;
    }, this.dispose = function() {
    };
  }
}
function _d(c, e) {
  function t(p, f) {
    p.fogColor.value.copy(f.color), f.isFog ? (p.fogNear.value = f.near, p.fogFar.value = f.far) : f.isFogExp2 && (p.fogDensity.value = f.density);
  }
  function n(p, f, _, v, w) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? i(p, f) : f.isMeshToonMaterial ? (i(p, f), h(p, f)) : f.isMeshPhongMaterial ? (i(p, f), l(p, f)) : f.isMeshStandardMaterial ? (i(p, f), d(p, f), f.isMeshPhysicalMaterial && u(p, f, w)) : f.isMeshMatcapMaterial ? (i(p, f), m(p, f)) : f.isMeshDepthMaterial ? i(p, f) : f.isMeshDistanceMaterial ? (i(p, f), g(p, f)) : f.isMeshNormalMaterial ? i(p, f) : f.isLineBasicMaterial ? (s(p, f), f.isLineDashedMaterial && o(p, f)) : f.isPointsMaterial ? r(p, f, _, v) : f.isSpriteMaterial ? a(p, f) : f.isShadowMaterial ? (p.color.value.copy(f.color), p.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
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
    let w;
    f.aoMap ? w = f.aoMap : f.lightMap && (w = f.lightMap), w !== void 0 && (w.isWebGLRenderTarget && (w = w.texture), w.matrixAutoUpdate === !0 && w.updateMatrix(), p.uv2Transform.value.copy(w.matrix));
  }
  function s(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity;
  }
  function o(p, f) {
    p.dashSize.value = f.dashSize, p.totalSize.value = f.dashSize + f.gapSize, p.scale.value = f.scale;
  }
  function r(p, f, _, v) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.size.value = f.size * _, p.scale.value = v * 0.5, f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let w;
    f.map ? w = f.map : f.alphaMap && (w = f.alphaMap), w !== void 0 && (w.matrixAutoUpdate === !0 && w.updateMatrix(), p.uvTransform.value.copy(w.matrix));
  }
  function a(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.rotation.value = f.rotation, f.map && (p.map.value = f.map), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let _;
    f.map ? _ = f.map : f.alphaMap && (_ = f.alphaMap), _ !== void 0 && (_.matrixAutoUpdate === !0 && _.updateMatrix(), p.uvTransform.value.copy(_.matrix));
  }
  function l(p, f) {
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
function vd(c, e, t, n) {
  let i = {}, s = {}, o = [];
  const r = t.isWebGL2 ? c.getParameter(35375) : 0;
  function a(v, w) {
    const x = w.program;
    n.uniformBlockBinding(v, x);
  }
  function l(v, w) {
    let x = i[v.id];
    x === void 0 && (g(v), x = h(v), i[v.id] = x, v.addEventListener("dispose", f));
    const M = w.program;
    n.updateUBOMapping(v, M);
    const S = e.render.frame;
    s[v.id] !== S && (u(v), s[v.id] = S);
  }
  function h(v) {
    const w = d();
    v.__bindingPointIndex = w;
    const x = c.createBuffer(), M = v.__size, S = v.usage;
    return c.bindBuffer(35345, x), c.bufferData(35345, M, S), c.bindBuffer(35345, null), c.bindBufferBase(35345, w, x), x;
  }
  function d() {
    for (let v = 0; v < r; v++)
      if (o.indexOf(v) === -1)
        return o.push(v), v;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(v) {
    const w = i[v.id], x = v.uniforms, M = v.__cache;
    c.bindBuffer(35345, w);
    for (let S = 0, L = x.length; S < L; S++) {
      const y = x[S];
      if (m(y, S, M) === !0) {
        const T = y.value, P = y.__offset;
        typeof T == "number" ? (y.__data[0] = T, c.bufferSubData(35345, P, y.__data)) : (y.value.isMatrix3 ? (y.__data[0] = y.value.elements[0], y.__data[1] = y.value.elements[1], y.__data[2] = y.value.elements[2], y.__data[3] = y.value.elements[0], y.__data[4] = y.value.elements[3], y.__data[5] = y.value.elements[4], y.__data[6] = y.value.elements[5], y.__data[7] = y.value.elements[0], y.__data[8] = y.value.elements[6], y.__data[9] = y.value.elements[7], y.__data[10] = y.value.elements[8], y.__data[11] = y.value.elements[0]) : T.toArray(y.__data), c.bufferSubData(35345, P, y.__data));
      }
    }
    c.bindBuffer(35345, null);
  }
  function m(v, w, x) {
    const M = v.value;
    if (x[w] === void 0)
      return typeof M == "number" ? x[w] = M : x[w] = M.clone(), !0;
    if (typeof M == "number") {
      if (x[w] !== M)
        return x[w] = M, !0;
    } else {
      const S = x[w];
      if (S.equals(M) === !1)
        return S.copy(M), !0;
    }
    return !1;
  }
  function g(v) {
    const w = v.uniforms;
    let x = 0;
    const M = 16;
    let S = 0;
    for (let L = 0, y = w.length; L < y; L++) {
      const T = w[L], P = p(T);
      if (T.__data = new Float32Array(P.storage / Float32Array.BYTES_PER_ELEMENT), T.__offset = x, L > 0) {
        S = x % M;
        const z = M - S;
        S !== 0 && z - P.boundary < 0 && (x += M - S, T.__offset = x);
      }
      x += P.storage;
    }
    return S = x % M, S > 0 && (x += M - S), v.__size = x, v.__cache = {}, this;
  }
  function p(v) {
    const w = v.value, x = {
      boundary: 0,
      storage: 0
    };
    return typeof w == "number" ? (x.boundary = 4, x.storage = 4) : w.isVector2 ? (x.boundary = 8, x.storage = 8) : w.isVector3 || w.isColor ? (x.boundary = 16, x.storage = 12) : w.isVector4 ? (x.boundary = 16, x.storage = 16) : w.isMatrix3 ? (x.boundary = 48, x.storage = 48) : w.isMatrix4 ? (x.boundary = 64, x.storage = 64) : w.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", w), x;
  }
  function f(v) {
    const w = v.target;
    w.removeEventListener("dispose", f);
    const x = o.indexOf(w.__bindingPointIndex);
    o.splice(x, 1), c.deleteBuffer(i[w.id]), delete i[w.id], delete s[w.id];
  }
  function _() {
    for (const v in i)
      c.deleteBuffer(i[v]);
    o = [], i = {}, s = {};
  }
  return {
    bind: a,
    update: l,
    dispose: _
  };
}
function xd() {
  const c = ls("canvas");
  return c.style.display = "block", c;
}
function Jo(c = {}) {
  this.isWebGLRenderer = !0;
  const e = c.canvas !== void 0 ? c.canvas : xd(), t = c.context !== void 0 ? c.context : null, n = c.depth !== void 0 ? c.depth : !0, i = c.stencil !== void 0 ? c.stencil : !0, s = c.antialias !== void 0 ? c.antialias : !1, o = c.premultipliedAlpha !== void 0 ? c.premultipliedAlpha : !0, r = c.preserveDrawingBuffer !== void 0 ? c.preserveDrawingBuffer : !1, a = c.powerPreference !== void 0 ? c.powerPreference : "default", l = c.failIfMajorPerformanceCaveat !== void 0 ? c.failIfMajorPerformanceCaveat : !1;
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
  let f = !1, _ = 0, v = 0, w = null, x = -1, M = null;
  const S = new Ge(), L = new Ge();
  let y = null, T = e.width, P = e.height, z = 1, H = null, B = null;
  const C = new Ge(0, 0, T, P), F = new Ge(0, 0, T, P);
  let D = !1;
  const X = new ur();
  let U = !1, N = !1, V = null;
  const J = new He(), W = new we(), ee = new I(), ce = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function ge() {
    return w === null ? z : 1;
  }
  let Z = t;
  function Fe(A, G) {
    for (let q = 0; q < A.length; q++) {
      const k = A[q], K = e.getContext(k, G);
      if (K !== null)
        return K;
    }
    return null;
  }
  try {
    const A = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: s,
      premultipliedAlpha: o,
      preserveDrawingBuffer: r,
      powerPreference: a,
      failIfMajorPerformanceCaveat: l
    };
    if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${hr}`), e.addEventListener("webglcontextlost", Se, !1), e.addEventListener("webglcontextrestored", Ie, !1), e.addEventListener("webglcontextcreationerror", qe, !1), Z === null) {
      const G = ["webgl2", "webgl", "experimental-webgl"];
      if (p.isWebGL1Renderer === !0 && G.shift(), Z = Fe(G, A), Z === null)
        throw Fe(G) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    Z.getShaderPrecisionFormat === void 0 && (Z.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (A) {
    throw console.error("THREE.WebGLRenderer: " + A.message), A;
  }
  let ve, xe, ue, Oe, Te, me, tt, pt, at, It, nt, Ne, Wt, zt, R, E, $, Q, te, re, ye, j, pe, he;
  function fe() {
    ve = new Rh(Z), xe = new Mh(Z, ve, c), ve.init(xe), j = new dd(Z, ve, xe), ue = new hd(Z, ve, xe), Oe = new Ph(), Te = new Ku(), me = new ud(Z, ve, ue, Te, xe, j, Oe), tt = new Eh(p), pt = new Lh(p), at = new Ha(Z, xe), pe = new wh(Z, ve, at, xe), It = new Dh(Z, at, Oe, pe), nt = new Nh(Z, It, at, Oe), te = new Bh(Z, xe, me), E = new Sh(Te), Ne = new Zu(p, tt, pt, ve, xe, pe, E), Wt = new _d(p, Te), zt = new Qu(), R = new rd(ve, xe), Q = new yh(p, tt, ue, nt, h, o), $ = new cd(p, nt, xe), he = new vd(Z, Oe, xe, ue), re = new bh(Z, ve, Oe, xe), ye = new Fh(Z, ve, Oe, xe), Oe.programs = Ne.programs, p.capabilities = xe, p.extensions = ve, p.properties = Te, p.renderLists = zt, p.shadowMap = $, p.state = ue, p.info = Oe;
  }
  fe();
  const de = new gd(p, Z);
  this.xr = de, this.getContext = function() {
    return Z;
  }, this.getContextAttributes = function() {
    return Z.getContextAttributes();
  }, this.forceContextLoss = function() {
    const A = ve.get("WEBGL_lose_context");
    A && A.loseContext();
  }, this.forceContextRestore = function() {
    const A = ve.get("WEBGL_lose_context");
    A && A.restoreContext();
  }, this.getPixelRatio = function() {
    return z;
  }, this.setPixelRatio = function(A) {
    A !== void 0 && (z = A, this.setSize(T, P, !1));
  }, this.getSize = function(A) {
    return A.set(T, P);
  }, this.setSize = function(A, G, q) {
    if (de.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    T = A, P = G, e.width = Math.floor(A * z), e.height = Math.floor(G * z), q !== !1 && (e.style.width = A + "px", e.style.height = G + "px"), this.setViewport(0, 0, A, G);
  }, this.getDrawingBufferSize = function(A) {
    return A.set(T * z, P * z).floor();
  }, this.setDrawingBufferSize = function(A, G, q) {
    T = A, P = G, z = q, e.width = Math.floor(A * q), e.height = Math.floor(G * q), this.setViewport(0, 0, A, G);
  }, this.getCurrentViewport = function(A) {
    return A.copy(S);
  }, this.getViewport = function(A) {
    return A.copy(C);
  }, this.setViewport = function(A, G, q, k) {
    A.isVector4 ? C.set(A.x, A.y, A.z, A.w) : C.set(A, G, q, k), ue.viewport(S.copy(C).multiplyScalar(z).floor());
  }, this.getScissor = function(A) {
    return A.copy(F);
  }, this.setScissor = function(A, G, q, k) {
    A.isVector4 ? F.set(A.x, A.y, A.z, A.w) : F.set(A, G, q, k), ue.scissor(L.copy(F).multiplyScalar(z).floor());
  }, this.getScissorTest = function() {
    return D;
  }, this.setScissorTest = function(A) {
    ue.setScissorTest(D = A);
  }, this.setOpaqueSort = function(A) {
    H = A;
  }, this.setTransparentSort = function(A) {
    B = A;
  }, this.getClearColor = function(A) {
    return A.copy(Q.getClearColor());
  }, this.setClearColor = function() {
    Q.setClearColor.apply(Q, arguments);
  }, this.getClearAlpha = function() {
    return Q.getClearAlpha();
  }, this.setClearAlpha = function() {
    Q.setClearAlpha.apply(Q, arguments);
  }, this.clear = function(A = !0, G = !0, q = !0) {
    let k = 0;
    A && (k |= 16384), G && (k |= 256), q && (k |= 1024), Z.clear(k);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    e.removeEventListener("webglcontextlost", Se, !1), e.removeEventListener("webglcontextrestored", Ie, !1), e.removeEventListener("webglcontextcreationerror", qe, !1), zt.dispose(), R.dispose(), Te.dispose(), tt.dispose(), pt.dispose(), nt.dispose(), pe.dispose(), he.dispose(), Ne.dispose(), de.dispose(), de.removeEventListener("sessionstart", Re), de.removeEventListener("sessionend", Qe), V && (V.dispose(), V = null), Xe.stop();
  };
  function Se(A) {
    A.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), f = !0;
  }
  function Ie() {
    console.log("THREE.WebGLRenderer: Context Restored."), f = !1;
    const A = Oe.autoReset, G = $.enabled, q = $.autoUpdate, k = $.needsUpdate, K = $.type;
    fe(), Oe.autoReset = A, $.enabled = G, $.autoUpdate = q, $.needsUpdate = k, $.type = K;
  }
  function qe(A) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", A.statusMessage);
  }
  function O(A) {
    const G = A.target;
    G.removeEventListener("dispose", O), ae(G);
  }
  function ae(A) {
    Y(A), Te.remove(A);
  }
  function Y(A) {
    const G = Te.get(A).programs;
    G !== void 0 && (G.forEach(function(q) {
      Ne.releaseProgram(q);
    }), A.isShaderMaterial && Ne.releaseShaderCache(A));
  }
  this.renderBufferDirect = function(A, G, q, k, K, _e) {
    G === null && (G = ce);
    const be = K.isMesh && K.matrixWorld.determinant() < 0, Ae = _a(A, G, q, k, K);
    ue.setMaterial(k, be);
    let Ee = q.index;
    const Be = q.attributes.position;
    if (Ee === null) {
      if (Be === void 0 || Be.count === 0)
        return;
    } else if (Ee.count === 0)
      return;
    let Le = 1;
    k.wireframe === !0 && (Ee = It.getWireframeAttribute(q), Le = 2), pe.setup(K, k, Ae, q, Ee);
    let De, Ve = re;
    Ee !== null && (De = at.get(Ee), Ve = ye, Ve.setIndex(De));
    const pn = Ee !== null ? Ee.count : Be.count, Rn = q.drawRange.start * Le, Dn = q.drawRange.count * Le, Bt = _e !== null ? _e.start * Le : 0, ze = _e !== null ? _e.count * Le : 1 / 0, Fn = Math.max(Rn, Bt), je = Math.min(pn, Rn + Dn, Bt + ze) - 1, Mt = Math.max(0, je - Fn + 1);
    if (Mt !== 0) {
      if (K.isMesh)
        k.wireframe === !0 ? (ue.setLineWidth(k.wireframeLinewidth * ge()), Ve.setMode(1)) : Ve.setMode(4);
      else if (K.isLine) {
        let sn = k.linewidth;
        sn === void 0 && (sn = 1), ue.setLineWidth(sn * ge()), K.isLineSegments ? Ve.setMode(1) : K.isLineLoop ? Ve.setMode(2) : Ve.setMode(3);
      } else
        K.isPoints ? Ve.setMode(0) : K.isSprite && Ve.setMode(4);
      if (K.isInstancedMesh)
        Ve.renderInstances(Fn, Mt, K.count);
      else if (q.isInstancedBufferGeometry) {
        const sn = Math.min(q.instanceCount, q._maxInstanceCount);
        Ve.renderInstances(Fn, Mt, sn);
      } else
        Ve.render(Fn, Mt);
    }
  }, this.compile = function(A, G) {
    u = R.get(A), u.init(), g.push(u), A.traverseVisible(function(q) {
      q.isLight && q.layers.test(G.layers) && (u.pushLight(q), q.castShadow && u.pushShadow(q));
    }), u.setupLights(p.physicallyCorrectLights), A.traverse(function(q) {
      const k = q.material;
      if (k)
        if (Array.isArray(k))
          for (let K = 0; K < k.length; K++) {
            const _e = k[K];
            fs(_e, A, q);
          }
        else
          fs(k, A, q);
    }), g.pop(), u = null;
  };
  let oe = null;
  function se(A) {
    oe && oe(A);
  }
  function Re() {
    Xe.stop();
  }
  function Qe() {
    Xe.start();
  }
  const Xe = new qo();
  Xe.setAnimationLoop(se), typeof self < "u" && Xe.setContext(self), this.setAnimationLoop = function(A) {
    oe = A, de.setAnimationLoop(A), A === null ? Xe.stop() : Xe.start();
  }, de.addEventListener("sessionstart", Re), de.addEventListener("sessionend", Qe), this.render = function(A, G) {
    if (G !== void 0 && G.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (f === !0)
      return;
    A.autoUpdate === !0 && A.updateMatrixWorld(), G.parent === null && G.updateMatrixWorld(), de.enabled === !0 && de.isPresenting === !0 && (de.cameraAutoUpdate === !0 && de.updateCamera(G), G = de.getCamera()), A.isScene === !0 && A.onBeforeRender(p, A, G, w), u = R.get(A, g.length), u.init(), g.push(u), J.multiplyMatrices(G.projectionMatrix, G.matrixWorldInverse), X.setFromProjectionMatrix(J), N = this.localClippingEnabled, U = E.init(this.clippingPlanes, N, G), d = zt.get(A, m.length), d.init(), m.push(d), nn(A, G, 0, p.sortObjects), d.finish(), p.sortObjects === !0 && d.sort(H, B), U === !0 && E.beginShadows();
    const q = u.state.shadowsArray;
    if ($.render(q, A, G), U === !0 && E.endShadows(), this.info.autoReset === !0 && this.info.reset(), Q.render(d, A), u.setupLights(p.physicallyCorrectLights), G.isArrayCamera) {
      const k = G.cameras;
      for (let K = 0, _e = k.length; K < _e; K++) {
        const be = k[K];
        We(d, A, be, be.viewport);
      }
    } else
      We(d, A, G);
    w !== null && (me.updateMultisampleRenderTarget(w), me.updateRenderTargetMipmap(w)), A.isScene === !0 && A.onAfterRender(p, A, G), pe.resetDefaultState(), x = -1, M = null, g.pop(), g.length > 0 ? u = g[g.length - 1] : u = null, m.pop(), m.length > 0 ? d = m[m.length - 1] : d = null;
  };
  function nn(A, G, q, k) {
    if (A.visible === !1)
      return;
    if (A.layers.test(G.layers)) {
      if (A.isGroup)
        q = A.renderOrder;
      else if (A.isLOD)
        A.autoUpdate === !0 && A.update(G);
      else if (A.isLight)
        u.pushLight(A), A.castShadow && u.pushShadow(A);
      else if (A.isSprite) {
        if (!A.frustumCulled || X.intersectsSprite(A)) {
          k && ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);
          const be = nt.update(A), Ae = A.material;
          Ae.visible && d.push(A, be, Ae, q, ee.z, null);
        }
      } else if ((A.isMesh || A.isLine || A.isPoints) && (A.isSkinnedMesh && A.skeleton.frame !== Oe.render.frame && (A.skeleton.update(), A.skeleton.frame = Oe.render.frame), !A.frustumCulled || X.intersectsObject(A))) {
        k && ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);
        const be = nt.update(A), Ae = A.material;
        if (Array.isArray(Ae)) {
          const Ee = be.groups;
          for (let Be = 0, Le = Ee.length; Be < Le; Be++) {
            const De = Ee[Be], Ve = Ae[De.materialIndex];
            Ve && Ve.visible && d.push(A, be, Ve, q, ee.z, De);
          }
        } else
          Ae.visible && d.push(A, be, Ae, q, ee.z, null);
      }
    }
    const _e = A.children;
    for (let be = 0, Ae = _e.length; be < Ae; be++)
      nn(_e[be], G, q, k);
  }
  function We(A, G, q, k) {
    const K = A.opaque, _e = A.transmissive, be = A.transparent;
    u.setupLightsView(q), _e.length > 0 && Vt(K, G, q), k && ue.viewport(S.copy(k)), K.length > 0 && bt(K, G, q), _e.length > 0 && bt(_e, G, q), be.length > 0 && bt(be, G, q), ue.buffers.depth.setTest(!0), ue.buffers.depth.setMask(!0), ue.buffers.color.setMask(!0), ue.setPolygonOffset(!1);
  }
  function Vt(A, G, q) {
    const k = xe.isWebGL2;
    V === null && (V = new Cn(1, 1, {
      generateMipmaps: !0,
      type: ve.has("EXT_color_buffer_half_float") ? 1016 : 1009,
      minFilter: 1008,
      samples: k && s === !0 ? 4 : 0
    })), p.getDrawingBufferSize(W), k ? V.setSize(W.x, W.y) : V.setSize(rr(W.x), rr(W.y));
    const K = p.getRenderTarget();
    p.setRenderTarget(V), p.clear();
    const _e = p.toneMapping;
    p.toneMapping = 0, bt(A, G, q), p.toneMapping = _e, me.updateMultisampleRenderTarget(V), me.updateRenderTargetMipmap(V), p.setRenderTarget(K);
  }
  function bt(A, G, q) {
    const k = G.isScene === !0 ? G.overrideMaterial : null;
    for (let K = 0, _e = A.length; K < _e; K++) {
      const be = A[K], Ae = be.object, Ee = be.geometry, Be = k === null ? be.material : k, Le = be.group;
      Ae.layers.test(q.layers) && ga(Ae, G, q, Ee, Be, Le);
    }
  }
  function ga(A, G, q, k, K, _e) {
    A.onBeforeRender(p, G, q, k, K, _e), A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse, A.matrixWorld), A.normalMatrix.getNormalMatrix(A.modelViewMatrix), K.onBeforeRender(p, G, q, k, A, _e), K.transparent === !0 && K.side === 2 ? (K.side = 1, K.needsUpdate = !0, p.renderBufferDirect(q, G, k, K, A, _e), K.side = 0, K.needsUpdate = !0, p.renderBufferDirect(q, G, k, K, A, _e), K.side = 2) : p.renderBufferDirect(q, G, k, K, A, _e), A.onAfterRender(p, G, q, k, K, _e);
  }
  function fs(A, G, q) {
    G.isScene !== !0 && (G = ce);
    const k = Te.get(A), K = u.state.lights, _e = u.state.shadowsArray, be = K.state.version, Ae = Ne.getParameters(A, K.state, _e, G, q), Ee = Ne.getProgramCacheKey(Ae);
    let Be = k.programs;
    k.environment = A.isMeshStandardMaterial ? G.environment : null, k.fog = G.fog, k.envMap = (A.isMeshStandardMaterial ? pt : tt).get(A.envMap || k.environment), Be === void 0 && (A.addEventListener("dispose", O), Be = /* @__PURE__ */ new Map(), k.programs = Be);
    let Le = Be.get(Ee);
    if (Le !== void 0) {
      if (k.currentProgram === Le && k.lightsStateVersion === be)
        return xr(A, Ae), Le;
    } else
      Ae.uniforms = Ne.getUniforms(A), A.onBuild(q, Ae, p), A.onBeforeCompile(Ae, p), Le = Ne.acquireProgram(Ae, Ee), Be.set(Ee, Le), k.uniforms = Ae.uniforms;
    const De = k.uniforms;
    (!A.isShaderMaterial && !A.isRawShaderMaterial || A.clipping === !0) && (De.clippingPlanes = E.uniform), xr(A, Ae), k.needsLights = xa(A), k.lightsStateVersion = be, k.needsLights && (De.ambientLightColor.value = K.state.ambient, De.lightProbe.value = K.state.probe, De.directionalLights.value = K.state.directional, De.directionalLightShadows.value = K.state.directionalShadow, De.spotLights.value = K.state.spot, De.spotLightShadows.value = K.state.spotShadow, De.rectAreaLights.value = K.state.rectArea, De.ltc_1.value = K.state.rectAreaLTC1, De.ltc_2.value = K.state.rectAreaLTC2, De.pointLights.value = K.state.point, De.pointLightShadows.value = K.state.pointShadow, De.hemisphereLights.value = K.state.hemi, De.directionalShadowMap.value = K.state.directionalShadowMap, De.directionalShadowMatrix.value = K.state.directionalShadowMatrix, De.spotShadowMap.value = K.state.spotShadowMap, De.spotShadowMatrix.value = K.state.spotShadowMatrix, De.pointShadowMap.value = K.state.pointShadowMap, De.pointShadowMatrix.value = K.state.pointShadowMatrix);
    const Ve = Le.getUniforms(), pn = os.seqWithValue(Ve.seq, De);
    return k.currentProgram = Le, k.uniformsList = pn, Le;
  }
  function xr(A, G) {
    const q = Te.get(A);
    q.outputEncoding = G.outputEncoding, q.instancing = G.instancing, q.skinning = G.skinning, q.morphTargets = G.morphTargets, q.morphNormals = G.morphNormals, q.morphColors = G.morphColors, q.morphTargetsCount = G.morphTargetsCount, q.numClippingPlanes = G.numClippingPlanes, q.numIntersection = G.numClipIntersection, q.vertexAlphas = G.vertexAlphas, q.vertexTangents = G.vertexTangents, q.toneMapping = G.toneMapping;
  }
  function _a(A, G, q, k, K) {
    G.isScene !== !0 && (G = ce), me.resetTextureUnits();
    const _e = G.fog, be = k.isMeshStandardMaterial ? G.environment : null, Ae = w === null ? p.outputEncoding : w.isXRRenderTarget === !0 ? w.texture.encoding : 3e3, Ee = (k.isMeshStandardMaterial ? pt : tt).get(k.envMap || be), Be = k.vertexColors === !0 && !!q.attributes.color && q.attributes.color.itemSize === 4, Le = !!k.normalMap && !!q.attributes.tangent, De = !!q.morphAttributes.position, Ve = !!q.morphAttributes.normal, pn = !!q.morphAttributes.color, Rn = k.toneMapped ? p.toneMapping : 0, Dn = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color, Bt = Dn !== void 0 ? Dn.length : 0, ze = Te.get(k), Fn = u.state.lights;
    if (U === !0 && (N === !0 || A !== M)) {
      const mt = A === M && k.id === x;
      E.setState(k, A, mt);
    }
    let je = !1;
    k.version === ze.__version ? (ze.needsLights && ze.lightsStateVersion !== Fn.state.version || ze.outputEncoding !== Ae || K.isInstancedMesh && ze.instancing === !1 || !K.isInstancedMesh && ze.instancing === !0 || K.isSkinnedMesh && ze.skinning === !1 || !K.isSkinnedMesh && ze.skinning === !0 || ze.envMap !== Ee || k.fog === !0 && ze.fog !== _e || ze.numClippingPlanes !== void 0 && (ze.numClippingPlanes !== E.numPlanes || ze.numIntersection !== E.numIntersection) || ze.vertexAlphas !== Be || ze.vertexTangents !== Le || ze.morphTargets !== De || ze.morphNormals !== Ve || ze.morphColors !== pn || ze.toneMapping !== Rn || xe.isWebGL2 === !0 && ze.morphTargetsCount !== Bt) && (je = !0) : (je = !0, ze.__version = k.version);
    let Mt = ze.currentProgram;
    je === !0 && (Mt = fs(k, G, K));
    let sn = !1, ai = !1, ps = !1;
    const lt = Mt.getUniforms(), li = ze.uniforms;
    if (ue.useProgram(Mt.program) && (sn = !0, ai = !0, ps = !0), k.id !== x && (x = k.id, ai = !0), sn || M !== A) {
      if (lt.setValue(Z, "projectionMatrix", A.projectionMatrix), xe.logarithmicDepthBuffer && lt.setValue(
        Z,
        "logDepthBufFC",
        2 / (Math.log(A.far + 1) / Math.LN2)
      ), M !== A && (M = A, ai = !0, ps = !0), k.isShaderMaterial || k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshStandardMaterial || k.envMap) {
        const mt = lt.map.cameraPosition;
        mt !== void 0 && mt.setValue(
          Z,
          ee.setFromMatrixPosition(A.matrixWorld)
        );
      }
      (k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshLambertMaterial || k.isMeshBasicMaterial || k.isMeshStandardMaterial || k.isShaderMaterial) && lt.setValue(Z, "isOrthographic", A.isOrthographicCamera === !0), (k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshLambertMaterial || k.isMeshBasicMaterial || k.isMeshStandardMaterial || k.isShaderMaterial || k.isShadowMaterial || K.isSkinnedMesh) && lt.setValue(Z, "viewMatrix", A.matrixWorldInverse);
    }
    if (K.isSkinnedMesh) {
      lt.setOptional(Z, K, "bindMatrix"), lt.setOptional(Z, K, "bindMatrixInverse");
      const mt = K.skeleton;
      mt && (xe.floatVertexTextures ? (mt.boneTexture === null && mt.computeBoneTexture(), lt.setValue(Z, "boneTexture", mt.boneTexture, me), lt.setValue(Z, "boneTextureSize", mt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const ms = q.morphAttributes;
    if ((ms.position !== void 0 || ms.normal !== void 0 || ms.color !== void 0 && xe.isWebGL2 === !0) && te.update(K, q, k, Mt), (ai || ze.receiveShadow !== K.receiveShadow) && (ze.receiveShadow = K.receiveShadow, lt.setValue(Z, "receiveShadow", K.receiveShadow)), ai && (lt.setValue(Z, "toneMappingExposure", p.toneMappingExposure), ze.needsLights && va(li, ps), _e && k.fog === !0 && Wt.refreshFogUniforms(li, _e), Wt.refreshMaterialUniforms(li, k, z, P, V), os.upload(Z, ze.uniformsList, li, me)), k.isShaderMaterial && k.uniformsNeedUpdate === !0 && (os.upload(Z, ze.uniformsList, li, me), k.uniformsNeedUpdate = !1), k.isSpriteMaterial && lt.setValue(Z, "center", K.center), lt.setValue(Z, "modelViewMatrix", K.modelViewMatrix), lt.setValue(Z, "normalMatrix", K.normalMatrix), lt.setValue(Z, "modelMatrix", K.matrixWorld), k.isShaderMaterial || k.isRawShaderMaterial) {
      const mt = k.uniformsGroups;
      for (let gs = 0, ya = mt.length; gs < ya; gs++)
        if (xe.isWebGL2) {
          const yr = mt[gs];
          he.update(yr, Mt), he.bind(yr, Mt);
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return Mt;
  }
  function va(A, G) {
    A.ambientLightColor.needsUpdate = G, A.lightProbe.needsUpdate = G, A.directionalLights.needsUpdate = G, A.directionalLightShadows.needsUpdate = G, A.pointLights.needsUpdate = G, A.pointLightShadows.needsUpdate = G, A.spotLights.needsUpdate = G, A.spotLightShadows.needsUpdate = G, A.rectAreaLights.needsUpdate = G, A.hemisphereLights.needsUpdate = G;
  }
  function xa(A) {
    return A.isMeshLambertMaterial || A.isMeshToonMaterial || A.isMeshPhongMaterial || A.isMeshStandardMaterial || A.isShadowMaterial || A.isShaderMaterial && A.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return _;
  }, this.getActiveMipmapLevel = function() {
    return v;
  }, this.getRenderTarget = function() {
    return w;
  }, this.setRenderTargetTextures = function(A, G, q) {
    Te.get(A.texture).__webglTexture = G, Te.get(A.depthTexture).__webglTexture = q;
    const k = Te.get(A);
    k.__hasExternalTextures = !0, k.__hasExternalTextures && (k.__autoAllocateDepthBuffer = q === void 0, k.__autoAllocateDepthBuffer || ve.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), k.__useRenderToTexture = !1));
  }, this.setRenderTargetFramebuffer = function(A, G) {
    const q = Te.get(A);
    q.__webglFramebuffer = G, q.__useDefaultFramebuffer = G === void 0;
  }, this.setRenderTarget = function(A, G = 0, q = 0) {
    w = A, _ = G, v = q;
    let k = !0;
    if (A) {
      const Ee = Te.get(A);
      Ee.__useDefaultFramebuffer !== void 0 ? (ue.bindFramebuffer(36160, null), k = !1) : Ee.__webglFramebuffer === void 0 ? me.setupRenderTarget(A) : Ee.__hasExternalTextures && me.rebindTextures(A, Te.get(A.texture).__webglTexture, Te.get(A.depthTexture).__webglTexture);
    }
    let K = null, _e = !1, be = !1;
    if (A) {
      const Ee = A.texture;
      (Ee.isData3DTexture || Ee.isDataArrayTexture) && (be = !0);
      const Be = Te.get(A).__webglFramebuffer;
      A.isWebGLCubeRenderTarget ? (K = Be[G], _e = !0) : xe.isWebGL2 && A.samples > 0 && me.useMultisampledRTT(A) === !1 ? K = Te.get(A).__webglMultisampledFramebuffer : K = Be, S.copy(A.viewport), L.copy(A.scissor), y = A.scissorTest;
    } else
      S.copy(C).multiplyScalar(z).floor(), L.copy(F).multiplyScalar(z).floor(), y = D;
    if (ue.bindFramebuffer(36160, K) && xe.drawBuffers && k && ue.drawBuffers(A, K), ue.viewport(S), ue.scissor(L), ue.setScissorTest(y), _e) {
      const Ee = Te.get(A.texture);
      Z.framebufferTexture2D(36160, 36064, 34069 + G, Ee.__webglTexture, q);
    } else if (be) {
      const Ee = Te.get(A.texture), Be = G || 0;
      Z.framebufferTextureLayer(36160, 36064, Ee.__webglTexture, q || 0, Be);
    }
    x = -1;
  }, this.readRenderTargetPixels = function(A, G, q, k, K, _e, be) {
    if (!(A && A.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let Ae = Te.get(A).__webglFramebuffer;
    if (A.isWebGLCubeRenderTarget && be !== void 0 && (Ae = Ae[be]), Ae) {
      ue.bindFramebuffer(36160, Ae);
      try {
        const Ee = A.texture, Be = Ee.format, Le = Ee.type;
        if (Be !== 1023 && j.convert(Be) !== Z.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const De = Le === 1016 && (ve.has("EXT_color_buffer_half_float") || xe.isWebGL2 && ve.has("EXT_color_buffer_float"));
        if (Le !== 1009 && j.convert(Le) !== Z.getParameter(35738) && !(Le === 1015 && (xe.isWebGL2 || ve.has("OES_texture_float") || ve.has("WEBGL_color_buffer_float"))) && !De) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        G >= 0 && G <= A.width - k && q >= 0 && q <= A.height - K && Z.readPixels(G, q, k, K, j.convert(Be), j.convert(Le), _e);
      } finally {
        const Ee = w !== null ? Te.get(w).__webglFramebuffer : null;
        ue.bindFramebuffer(36160, Ee);
      }
    }
  }, this.copyFramebufferToTexture = function(A, G, q = 0) {
    const k = Math.pow(2, -q), K = Math.floor(G.image.width * k), _e = Math.floor(G.image.height * k);
    me.setTexture2D(G, 0), Z.copyTexSubImage2D(3553, q, 0, 0, A.x, A.y, K, _e), ue.unbindTexture();
  }, this.copyTextureToTexture = function(A, G, q, k = 0) {
    const K = G.image.width, _e = G.image.height, be = j.convert(q.format), Ae = j.convert(q.type);
    me.setTexture2D(q, 0), Z.pixelStorei(37440, q.flipY), Z.pixelStorei(37441, q.premultiplyAlpha), Z.pixelStorei(3317, q.unpackAlignment), G.isDataTexture ? Z.texSubImage2D(3553, k, A.x, A.y, K, _e, be, Ae, G.image.data) : G.isCompressedTexture ? Z.compressedTexSubImage2D(3553, k, A.x, A.y, G.mipmaps[0].width, G.mipmaps[0].height, be, G.mipmaps[0].data) : Z.texSubImage2D(3553, k, A.x, A.y, be, Ae, G.image), k === 0 && q.generateMipmaps && Z.generateMipmap(3553), ue.unbindTexture();
  }, this.copyTextureToTexture3D = function(A, G, q, k, K = 0) {
    if (p.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const _e = A.max.x - A.min.x + 1, be = A.max.y - A.min.y + 1, Ae = A.max.z - A.min.z + 1, Ee = j.convert(k.format), Be = j.convert(k.type);
    let Le;
    if (k.isData3DTexture)
      me.setTexture3D(k, 0), Le = 32879;
    else if (k.isDataArrayTexture)
      me.setTexture2DArray(k, 0), Le = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    Z.pixelStorei(37440, k.flipY), Z.pixelStorei(37441, k.premultiplyAlpha), Z.pixelStorei(3317, k.unpackAlignment);
    const De = Z.getParameter(3314), Ve = Z.getParameter(32878), pn = Z.getParameter(3316), Rn = Z.getParameter(3315), Dn = Z.getParameter(32877), Bt = q.isCompressedTexture ? q.mipmaps[0] : q.image;
    Z.pixelStorei(3314, Bt.width), Z.pixelStorei(32878, Bt.height), Z.pixelStorei(3316, A.min.x), Z.pixelStorei(3315, A.min.y), Z.pixelStorei(32877, A.min.z), q.isDataTexture || q.isData3DTexture ? Z.texSubImage3D(Le, K, G.x, G.y, G.z, _e, be, Ae, Ee, Be, Bt.data) : q.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), Z.compressedTexSubImage3D(Le, K, G.x, G.y, G.z, _e, be, Ae, Ee, Bt.data)) : Z.texSubImage3D(Le, K, G.x, G.y, G.z, _e, be, Ae, Ee, Be, Bt), Z.pixelStorei(3314, De), Z.pixelStorei(32878, Ve), Z.pixelStorei(3316, pn), Z.pixelStorei(3315, Rn), Z.pixelStorei(32877, Dn), K === 0 && k.generateMipmaps && Z.generateMipmap(Le), ue.unbindTexture();
  }, this.initTexture = function(A) {
    A.isCubeTexture ? me.setTextureCube(A, 0) : A.isData3DTexture ? me.setTexture3D(A, 0) : A.isDataArrayTexture ? me.setTexture2DArray(A, 0) : me.setTexture2D(A, 0), ue.unbindTexture();
  }, this.resetState = function() {
    _ = 0, v = 0, w = null, ue.reset(), pe.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class yd extends Jo {
}
yd.prototype.isWebGL1Renderer = !0;
class Qo extends it {
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
class wd {
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
const ct = /* @__PURE__ */ new I();
class cs {
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
      return new Tt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new cs(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
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
class ea extends tn {
  constructor(e) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new Me(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let jn;
const di = /* @__PURE__ */ new I(), Yn = /* @__PURE__ */ new I(), $n = /* @__PURE__ */ new I(), Zn = /* @__PURE__ */ new we(), fi = /* @__PURE__ */ new we(), ta = /* @__PURE__ */ new He(), $i = /* @__PURE__ */ new I(), pi = /* @__PURE__ */ new I(), Zi = /* @__PURE__ */ new I(), no = /* @__PURE__ */ new we(), qs = /* @__PURE__ */ new we(), io = /* @__PURE__ */ new we();
class bd extends it {
  constructor(e) {
    if (super(), this.isSprite = !0, this.type = "Sprite", jn === void 0) {
      jn = new yt();
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
      ]), n = new wd(t, 5);
      jn.setIndex([0, 1, 2, 0, 2, 3]), jn.setAttribute("position", new cs(n, 3, 0, !1)), jn.setAttribute("uv", new cs(n, 2, 3, !1));
    }
    this.geometry = jn, this.material = e !== void 0 ? e : new ea(), this.center = new we(0.5, 0.5);
  }
  raycast(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Yn.setFromMatrixScale(this.matrixWorld), ta.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), $n.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Yn.multiplyScalar(-$n.z);
    const n = this.material.rotation;
    let i, s;
    n !== 0 && (s = Math.cos(n), i = Math.sin(n));
    const o = this.center;
    Ki($i.set(-0.5, -0.5, 0), $n, o, Yn, i, s), Ki(pi.set(0.5, -0.5, 0), $n, o, Yn, i, s), Ki(Zi.set(0.5, 0.5, 0), $n, o, Yn, i, s), no.set(0, 0), qs.set(1, 0), io.set(1, 1);
    let r = e.ray.intersectTriangle($i, pi, Zi, !1, di);
    if (r === null && (Ki(pi.set(-0.5, 0.5, 0), $n, o, Yn, i, s), qs.set(0, 1), r = e.ray.intersectTriangle($i, Zi, pi, !1, di), r === null))
      return;
    const a = e.ray.origin.distanceTo(di);
    a < e.near || a > e.far || t.push({
      distance: a,
      point: di.clone(),
      uv: kt.getUV(di, $i, pi, Zi, no, qs, io, new we()),
      face: null,
      object: this
    });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function Ki(c, e, t, n, i, s) {
  Zn.subVectors(c, t).addScalar(0.5).multiply(n), i !== void 0 ? (fi.x = s * Zn.x - i * Zn.y, fi.y = i * Zn.x + s * Zn.y) : fi.copy(Zn), c.copy(e), c.x += fi.x, c.y += fi.y, c.applyMatrix4(ta);
}
class na extends tn {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Me(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const so = /* @__PURE__ */ new He(), lr = /* @__PURE__ */ new Uo(), Ji = /* @__PURE__ */ new ni(), Qi = /* @__PURE__ */ new I();
class Md extends it {
  constructor(e = new yt(), t = new na()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ji.copy(n.boundingSphere), Ji.applyMatrix4(i), Ji.radius += s, e.ray.intersectsSphere(Ji) === !1)
      return;
    so.copy(i).invert(), lr.copy(e.ray).applyMatrix4(so);
    const r = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), a = r * r, l = n.index, d = n.attributes.position;
    if (l !== null) {
      const u = Math.max(0, o.start), m = Math.min(l.count, o.start + o.count);
      for (let g = u, p = m; g < p; g++) {
        const f = l.getX(g);
        Qi.fromBufferAttribute(d, f), ro(Qi, f, a, i, e, t, this);
      }
    } else {
      const u = Math.max(0, o.start), m = Math.min(d.count, o.start + o.count);
      for (let g = u, p = m; g < p; g++)
        Qi.fromBufferAttribute(d, g), ro(Qi, g, a, i, e, t, this);
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
function ro(c, e, t, n, i, s, o) {
  const r = lr.distanceSqToPoint(c);
  if (r < t) {
    const a = new I();
    lr.closestPointToPoint(c, a), a.applyMatrix4(n);
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
class bi extends xt {
  constructor(e, t, n, i, s, o, r, a, l) {
    super(e, t, n, i, s, o, r, a, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class fr extends yt {
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
    const h = [], d = [], u = [], m = [];
    let g = 0;
    const p = [], f = n / 2;
    let _ = 0;
    v(), o === !1 && (e > 0 && w(!0), t > 0 && w(!1)), this.setIndex(h), this.setAttribute("position", new ot(d, 3)), this.setAttribute("normal", new ot(u, 3)), this.setAttribute("uv", new ot(m, 2));
    function v() {
      const x = new I(), M = new I();
      let S = 0;
      const L = (t - e) / n;
      for (let y = 0; y <= s; y++) {
        const T = [], P = y / s, z = P * (t - e) + e;
        for (let H = 0; H <= i; H++) {
          const B = H / i, C = B * a + r, F = Math.sin(C), D = Math.cos(C);
          M.x = z * F, M.y = -P * n + f, M.z = z * D, d.push(M.x, M.y, M.z), x.set(F, L, D).normalize(), u.push(x.x, x.y, x.z), m.push(B, 1 - P), T.push(g++);
        }
        p.push(T);
      }
      for (let y = 0; y < i; y++)
        for (let T = 0; T < s; T++) {
          const P = p[T][y], z = p[T + 1][y], H = p[T + 1][y + 1], B = p[T][y + 1];
          h.push(P, z, B), h.push(z, H, B), S += 6;
        }
      l.addGroup(_, S, 0), _ += S;
    }
    function w(x) {
      const M = g, S = new we(), L = new I();
      let y = 0;
      const T = x === !0 ? e : t, P = x === !0 ? 1 : -1;
      for (let H = 1; H <= i; H++)
        d.push(0, f * P, 0), u.push(0, P, 0), m.push(0.5, 0.5), g++;
      const z = g;
      for (let H = 0; H <= i; H++) {
        const C = H / i * a + r, F = Math.cos(C), D = Math.sin(C);
        L.x = T * D, L.y = f * P, L.z = T * F, d.push(L.x, L.y, L.z), u.push(0, P, 0), S.x = F * 0.5 + 0.5, S.y = D * 0.5 * P + 0.5, m.push(S.x, S.y), g++;
      }
      for (let H = 0; H < i; H++) {
        const B = M + H, C = z + H;
        x === !0 ? h.push(C, C + 1, B) : h.push(C + 1, C, B), y += 3;
      }
      l.addGroup(_, y, x === !0 ? 1 : 2), _ += y;
    }
  }
  static fromJSON(e) {
    return new fr(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Sd extends tn {
  constructor(e) {
    super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new Me(0), this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
  }
}
class cr extends tn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Me(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Me(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new we(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Ed extends tn {
  constructor(e) {
    super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new Me(16777215), this.specular = new Me(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Me(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new we(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class pr extends it {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Me(e), this.intensity = t;
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
class Ad extends pr {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(it.DefaultUp), this.updateMatrix(), this.groundColor = new Me(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const oo = /* @__PURE__ */ new He(), ao = /* @__PURE__ */ new I(), lo = /* @__PURE__ */ new I();
class ia {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new we(512, 512), this.map = null, this.mapPass = null, this.matrix = new He(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ur(), this._frameExtents = new we(1, 1), this._viewportCount = 1, this._viewports = [
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
    ao.setFromMatrixPosition(e.matrixWorld), t.position.copy(ao), lo.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(lo), t.updateMatrixWorld(), oo.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(oo), n.set(
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
class Td extends ia {
  constructor() {
    super(new ft(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = sr * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class Cd extends pr {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, o = 1) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(it.DefaultUp), this.updateMatrix(), this.target = new it(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = o, this.shadow = new Td();
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
const co = /* @__PURE__ */ new He(), mi = /* @__PURE__ */ new I(), Xs = /* @__PURE__ */ new I();
class Ld extends ia {
  constructor() {
    super(new ft(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new we(4, 2), this._viewportCount = 6, this._viewports = [
      new Ge(2, 1, 1, 1),
      new Ge(0, 1, 1, 1),
      new Ge(3, 1, 1, 1),
      new Ge(1, 1, 1, 1),
      new Ge(3, 0, 1, 1),
      new Ge(1, 0, 1, 1)
    ], this._cubeDirections = [
      new I(1, 0, 0),
      new I(-1, 0, 0),
      new I(0, 0, 1),
      new I(0, 0, -1),
      new I(0, 1, 0),
      new I(0, -1, 0)
    ], this._cubeUps = [
      new I(0, 1, 0),
      new I(0, 1, 0),
      new I(0, 1, 0),
      new I(0, 1, 0),
      new I(0, 0, 1),
      new I(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), mi.setFromMatrixPosition(e.matrixWorld), n.position.copy(mi), Xs.copy(n.position), Xs.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Xs), n.updateMatrixWorld(), i.makeTranslation(-mi.x, -mi.y, -mi.z), co.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(co);
  }
}
class sa extends pr {
  constructor(e, t, n = 0, i = 1) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Ld();
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
  revision: hr
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = hr);
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
    const n = this.elements, i = e.elements, s = t.elements, o = n[0], r = n[1], a = n[2], l = n[3], h = n[4], d = n[5], u = n[6], m = n[7], g = n[8], p = i[0], f = i[1], _ = i[2], v = i[3], w = i[4], x = i[5], M = i[6], S = i[7], L = i[8];
    return s[0] = o * p + r * v + a * M, s[1] = o * f + r * w + a * S, s[2] = o * _ + r * x + a * L, s[3] = l * p + h * v + d * M, s[4] = l * f + h * w + d * S, s[5] = l * _ + h * x + d * L, s[6] = u * p + m * v + g * M, s[7] = u * f + m * w + g * S, s[8] = u * _ + m * x + g * L, t;
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
    let a = 3;
    const l = a;
    let h;
    const d = 4;
    let u;
    do {
      if (o = l - a, s[o + i * o] === 0) {
        for (r = o + 1; r < l; r++)
          if (s[o + i * r] !== 0) {
            h = d;
            do
              u = d - h, s[u + i * o] += s[u + i * r];
            while (--h);
            break;
          }
      }
      if (s[o + i * o] !== 0)
        for (r = o + 1; r < l; r++) {
          const m = s[o + i * r] / s[o + i * o];
          h = d;
          do
            u = d - h, s[u + i * r] = u <= o ? 0 : s[u + i * r] - s[u + i * o] * m;
          while (--h);
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
    e === void 0 && (e = new Pt());
    const t = 3, n = 6, i = Rd;
    let s, o;
    for (s = 0; s < 3; s++)
      for (o = 0; o < 3; o++)
        i[s + n * o] = this.elements[s + 3 * o];
    i[3 + 6 * 0] = 1, i[3 + 6 * 1] = 0, i[3 + 6 * 2] = 0, i[4 + 6 * 0] = 0, i[4 + 6 * 1] = 1, i[4 + 6 * 2] = 0, i[5 + 6 * 0] = 0, i[5 + 6 * 1] = 0, i[5 + 6 * 2] = 1;
    let r = 3;
    const a = r;
    let l;
    const h = n;
    let d;
    do {
      if (s = a - r, i[s + n * s] === 0) {
        for (o = s + 1; o < a; o++)
          if (i[s + n * o] !== 0) {
            l = h;
            do
              d = h - l, i[d + n * s] += i[d + n * o];
            while (--l);
            break;
          }
      }
      if (i[s + n * s] !== 0)
        for (o = s + 1; o < a; o++) {
          const u = i[s + n * o] / i[s + n * s];
          l = h;
          do
            d = h - l, i[d + n * o] = d <= s ? 0 : i[d + n * o] - i[d + n * s] * u;
          while (--l);
        }
    } while (--r);
    s = 2;
    do {
      o = s - 1;
      do {
        const u = i[s + n * o] / i[s + n * s];
        l = n;
        do
          d = n - l, i[d + n * o] = i[d + n * o] - i[d + n * s] * u;
        while (--l);
      } while (o--);
    } while (--s);
    s = 2;
    do {
      const u = 1 / i[s + n * s];
      l = n;
      do
        d = n - l, i[d + n * s] = i[d + n * s] * u;
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
    const t = e.x, n = e.y, i = e.z, s = e.w, o = t + t, r = n + n, a = i + i, l = t * o, h = t * r, d = t * a, u = n * r, m = n * a, g = i * a, p = s * o, f = s * r, _ = s * a, v = this.elements;
    return v[3 * 0 + 0] = 1 - (u + g), v[3 * 0 + 1] = h - _, v[3 * 0 + 2] = d + f, v[3 * 1 + 0] = h + _, v[3 * 1 + 1] = 1 - (l + g), v[3 * 1 + 2] = m - p, v[3 * 2 + 0] = d - f, v[3 * 2 + 1] = m + p, v[3 * 2 + 2] = 1 - (l + u), this;
  }
  transpose(e) {
    e === void 0 && (e = new Pt());
    const t = this.elements, n = e.elements;
    let i;
    return n[0] = t[0], n[4] = t[4], n[8] = t[8], i = t[1], n[1] = t[3], n[3] = i, i = t[2], n[2] = t[6], n[6] = i, i = t[5], n[5] = t[7], n[7] = i, e;
  }
}
const Rd = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
class b {
  constructor(e, t, n) {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0), this.x = e, this.y = t, this.z = n;
  }
  cross(e, t) {
    t === void 0 && (t = new b());
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
      const i = Dd, s = 1 / n;
      i.set(this.x * s, this.y * s, this.z * s);
      const o = Fd;
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
    return this.negate(ho), ho.almostEquals(e, t);
  }
  clone() {
    return new b(this.x, this.y, this.z);
  }
}
b.ZERO = new b(0, 0, 0);
b.UNIT_X = new b(1, 0, 0);
b.UNIT_Y = new b(0, 1, 0);
b.UNIT_Z = new b(0, 0, 1);
const Dd = new b(), Fd = new b(), ho = new b();
class wt {
  constructor(e) {
    e === void 0 && (e = {}), this.lowerBound = new b(), this.upperBound = new b(), e.lowerBound && this.lowerBound.copy(e.lowerBound), e.upperBound && this.upperBound.copy(e.upperBound);
  }
  setFromPoints(e, t, n, i) {
    const s = this.lowerBound, o = this.upperBound, r = n;
    s.copy(e[0]), r && r.vmult(s, s), o.copy(s);
    for (let a = 1; a < e.length; a++) {
      let l = e[a];
      r && (r.vmult(l, uo), l = uo), l.x > o.x && (o.x = l.x), l.x < s.x && (s.x = l.x), l.y > o.y && (o.y = l.y), l.y < s.y && (s.y = l.y), l.z > o.z && (o.z = l.z), l.z < s.z && (s.z = l.z);
    }
    return t && (t.vadd(s, s), t.vadd(o, o)), i && (s.x -= i, s.y -= i, s.z -= i, o.x += i, o.y += i, o.z += i), this;
  }
  copy(e) {
    return this.lowerBound.copy(e.lowerBound), this.upperBound.copy(e.upperBound), this;
  }
  clone() {
    return new wt().copy(this);
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
    const l = this.lowerBound, h = this.upperBound;
    e.copy(l), t.set(h.x, l.y, l.z), n.set(h.x, h.y, l.z), i.set(l.x, h.y, h.z), s.set(h.x, l.y, h.z), o.set(l.x, h.y, l.z), r.set(l.x, l.y, h.z), a.copy(h);
  }
  toLocalFrame(e, t) {
    const n = fo, i = n[0], s = n[1], o = n[2], r = n[3], a = n[4], l = n[5], h = n[6], d = n[7];
    this.getCorners(i, s, o, r, a, l, h, d);
    for (let u = 0; u !== 8; u++) {
      const m = n[u];
      e.pointToLocal(m, m);
    }
    return t.setFromPoints(n);
  }
  toWorldFrame(e, t) {
    const n = fo, i = n[0], s = n[1], o = n[2], r = n[3], a = n[4], l = n[5], h = n[6], d = n[7];
    this.getCorners(i, s, o, r, a, l, h, d);
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
    } = e, i = 1 / t.x, s = 1 / t.y, o = 1 / t.z, r = (this.lowerBound.x - n.x) * i, a = (this.upperBound.x - n.x) * i, l = (this.lowerBound.y - n.y) * s, h = (this.upperBound.y - n.y) * s, d = (this.lowerBound.z - n.z) * o, u = (this.upperBound.z - n.z) * o, m = Math.max(Math.max(Math.min(r, a), Math.min(l, h)), Math.min(d, u)), g = Math.min(Math.min(Math.max(r, a), Math.max(l, h)), Math.max(d, u));
    return !(g < 0 || m > g);
  }
}
const uo = new b(), fo = [new b(), new b(), new b(), new b(), new b(), new b(), new b(), new b()];
class po {
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
class ra {
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
      const n = Pd, i = Id;
      e.tangents(n, i), this.setFromAxisAngle(n, Math.PI);
    } else {
      const n = e.cross(t);
      this.x = n.x, this.y = n.y, this.z = n.z, this.w = Math.sqrt(e.length() ** 2 * t.length() ** 2) + e.dot(t), this.normalize();
    }
    return this;
  }
  mult(e, t) {
    t === void 0 && (t = new Ze());
    const n = this.x, i = this.y, s = this.z, o = this.w, r = e.x, a = e.y, l = e.z, h = e.w;
    return t.x = n * h + o * r + i * l - s * a, t.y = i * h + o * a + s * r - n * l, t.z = s * h + o * l + n * a - i * r, t.w = o * h - n * r - i * a - s * l, t;
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
    const n = e.x, i = e.y, s = e.z, o = this.x, r = this.y, a = this.z, l = this.w, h = l * n + r * s - a * i, d = l * i + a * n - o * s, u = l * s + o * i - r * n, m = -o * n - r * i - a * s;
    return t.x = h * l + m * -o + d * -a - u * -r, t.y = d * l + m * -r + u * -o - h * -a, t.z = u * l + m * -a + h * -r - d * -o, t;
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
        const h = o * r + a * l;
        if (h > 0.499 && (n = 2 * Math.atan2(o, l), i = Math.PI / 2, s = 0), h < -0.499 && (n = -2 * Math.atan2(o, l), i = -Math.PI / 2, s = 0), n === void 0) {
          const d = o * o, u = r * r, m = a * a;
          n = Math.atan2(2 * r * l - 2 * o * a, 1 - 2 * u - 2 * m), i = Math.asin(2 * h), s = Math.atan2(2 * o * l - 2 * r * a, 1 - 2 * d - 2 * m);
        }
        break;
      default:
        throw new Error(`Euler order ${t} not supported yet.`);
    }
    e.y = n, e.z = i, e.x = s;
  }
  setFromEuler(e, t, n, i) {
    i === void 0 && (i = "XYZ");
    const s = Math.cos(e / 2), o = Math.cos(t / 2), r = Math.cos(n / 2), a = Math.sin(e / 2), l = Math.sin(t / 2), h = Math.sin(n / 2);
    return i === "XYZ" ? (this.x = a * o * r + s * l * h, this.y = s * l * r - a * o * h, this.z = s * o * h + a * l * r, this.w = s * o * r - a * l * h) : i === "YXZ" ? (this.x = a * o * r + s * l * h, this.y = s * l * r - a * o * h, this.z = s * o * h - a * l * r, this.w = s * o * r + a * l * h) : i === "ZXY" ? (this.x = a * o * r - s * l * h, this.y = s * l * r + a * o * h, this.z = s * o * h + a * l * r, this.w = s * o * r - a * l * h) : i === "ZYX" ? (this.x = a * o * r - s * l * h, this.y = s * l * r + a * o * h, this.z = s * o * h - a * l * r, this.w = s * o * r + a * l * h) : i === "YZX" ? (this.x = a * o * r + s * l * h, this.y = s * l * r + a * o * h, this.z = s * o * h - a * l * r, this.w = s * o * r - a * l * h) : i === "XZY" && (this.x = a * o * r - s * l * h, this.y = s * l * r - a * o * h, this.z = s * o * h + a * l * r, this.w = s * o * r + a * l * h), this;
  }
  clone() {
    return new Ze(this.x, this.y, this.z, this.w);
  }
  slerp(e, t, n) {
    n === void 0 && (n = new Ze());
    const i = this.x, s = this.y, o = this.z, r = this.w;
    let a = e.x, l = e.y, h = e.z, d = e.w, u, m, g, p, f;
    return m = i * a + s * l + o * h + r * d, m < 0 && (m = -m, a = -a, l = -l, h = -h, d = -d), 1 - m > 1e-6 ? (u = Math.acos(m), g = Math.sin(u), p = Math.sin((1 - t) * u) / g, f = Math.sin(t * u) / g) : (p = 1 - t, f = t), n.x = p * i + f * a, n.y = p * s + f * l, n.z = p * o + f * h, n.w = p * r + f * d, n;
  }
  integrate(e, t, n, i) {
    i === void 0 && (i = new Ze());
    const s = e.x * n.x, o = e.y * n.y, r = e.z * n.z, a = this.x, l = this.y, h = this.z, d = this.w, u = t * 0.5;
    return i.x += u * (s * d + o * h - r * l), i.y += u * (o * d + r * a - s * h), i.z += u * (r * d + s * l - o * a), i.w += u * (-s * a - o * l - r * h), i;
  }
}
const Pd = new b(), Id = new b(), zd = {
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
le.types = zd;
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
    return i === void 0 && (i = new b()), n.vsub(e, i), t.conjugate(mo), mo.vmult(i, i), i;
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
const mo = new Ze();
class En extends le {
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
    const i = new b();
    for (let s = 0; s !== e.length; s++) {
      const o = e[s], r = o.length;
      for (let a = 0; a !== r; a++) {
        const l = (a + 1) % r;
        t[o[a]].vsub(t[o[l]], i), i.normalize();
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
  clipAgainstHull(e, t, n, i, s, o, r, a, l) {
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
    d >= 0 && this.clipFaceAgainstHull(o, e, t, m, r, a, l);
  }
  findSeparatingAxis(e, t, n, i, s, o, r, a) {
    const l = new b(), h = new b(), d = new b(), u = new b(), m = new b(), g = new b();
    let p = Number.MAX_VALUE;
    const f = this;
    if (f.uniqueAxes)
      for (let _ = 0; _ !== f.uniqueAxes.length; _++) {
        n.vmult(f.uniqueAxes[_], l);
        const v = f.testSepAxis(l, e, t, n, i, s);
        if (v === !1)
          return !1;
        v < p && (p = v, o.copy(l));
      }
    else {
      const _ = r ? r.length : f.faces.length;
      for (let v = 0; v < _; v++) {
        const w = r ? r[v] : v;
        l.copy(f.faceNormals[w]), n.vmult(l, l);
        const x = f.testSepAxis(l, e, t, n, i, s);
        if (x === !1)
          return !1;
        x < p && (p = x, o.copy(l));
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
      const _ = a ? a.length : e.faces.length;
      for (let v = 0; v < _; v++) {
        const w = a ? a[v] : v;
        h.copy(e.faceNormals[w]), s.vmult(h, h);
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
          const w = f.testSepAxis(g, e, t, n, i, s);
          if (w === !1)
            return !1;
          w < p && (p = w, o.copy(g));
        }
    }
    return i.vsub(t, d), d.dot(o) > 0 && o.negate(o), !0;
  }
  testSepAxis(e, t, n, i, s, o) {
    const r = this;
    En.project(r, e, n, i, js), En.project(t, e, s, o, Ys);
    const a = js[0], l = js[1], h = Ys[0], d = Ys[1];
    if (a < d || h < l)
      return !1;
    const u = a - d, m = h - l;
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
    const a = new b(), l = new b(), h = new b(), d = new b(), u = new b(), m = new b(), g = new b(), p = new b(), f = this, _ = [], v = i, w = _;
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
    const L = S.length;
    for (let P = 0; P < L; P++) {
      const z = f.vertices[S[P]], H = f.vertices[S[(P + 1) % L]];
      z.vsub(H, l), h.copy(l), n.vmult(h, h), t.vadd(h, h), d.copy(this.faceNormals[x]), n.vmult(d, d), t.vadd(d, d), h.cross(d, u), u.negate(u), m.copy(z), n.vmult(m, m), t.vadd(m, m);
      const B = S.connectedFaces[P];
      g.copy(this.faceNormals[B]);
      const C = this.getPlaneConstantOfFace(B);
      p.copy(g), n.vmult(p, p);
      const F = C - p.dot(t);
      for (this.clipFaceAgainstPlane(v, w, p, F); v.length; )
        v.shift();
      for (; w.length; )
        v.push(w.shift());
    }
    g.copy(this.faceNormals[x]);
    const y = this.getPlaneConstantOfFace(x);
    p.copy(g), n.vmult(p, p);
    const T = y - p.dot(t);
    for (let P = 0; P < v.length; P++) {
      let z = p.dot(v[P]) + T;
      if (z <= s && (console.log(`clamped: depth=${z} to minDist=${s}`), z = s), z <= o) {
        const H = v[P];
        if (z <= 1e-6) {
          const B = {
            point: H,
            normal: p,
            depth: z
          };
          r.push(B);
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
    for (let h = 0; h < r; h++) {
      if (l = e[h], o = n.dot(l) + i, s < 0)
        if (o < 0) {
          const d = new b();
          d.copy(l), t.push(d);
        } else {
          const d = new b();
          a.lerp(l, s / (s - o), d), t.push(d);
        }
      else if (o < 0) {
        const d = new b();
        a.lerp(l, s / (s - o), d), t.push(d), t.push(l);
      }
      a = l, s = o;
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
    let o, r, a, l, h, d, u = new b();
    for (let m = 0; m < s.length; m++) {
      u.copy(s[m]), t.vmult(u, u), e.vadd(u, u);
      const g = u;
      (o === void 0 || g.x < o) && (o = g.x), (l === void 0 || g.x > l) && (l = g.x), (r === void 0 || g.y < r) && (r = g.y), (h === void 0 || g.y > h) && (h = g.y), (a === void 0 || g.z < a) && (a = g.z), (d === void 0 || g.z > d) && (d = g.z);
    }
    n.set(o, r, a), i.set(l, h, d);
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
      let a = i[r];
      const l = t[n[r][0]], h = new b();
      e.vsub(l, h);
      const d = a.dot(h), u = new b();
      o.vsub(l, u);
      const m = a.dot(u);
      if (d < 0 && m > 0 || d > 0 && m < 0)
        return !1;
    }
    return s ? 1 : -1;
  }
  static project(e, t, n, i, s) {
    const o = e.vertices.length, r = Bd;
    let a = 0, l = 0;
    const h = Nd, d = e.vertices;
    h.setZero(), Pe.vectorToLocalFrame(n, i, t, r), Pe.pointToLocalFrame(n, i, h, h);
    const u = h.dot(r);
    l = a = d[0].dot(r);
    for (let m = 1; m < o; m++) {
      const g = d[m].dot(r);
      g > a && (a = g), g < l && (l = g);
    }
    if (l -= u, a -= u, l > a) {
      const m = l;
      l = a, a = m;
    }
    s[0] = a, s[1] = l;
  }
}
const js = [], Ys = [];
new b();
const Bd = new b(), Nd = new b();
class mr extends le {
  constructor(e) {
    super({
      type: le.types.BOX
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
    ], r = [new i(0, 0, 1), new i(0, 1, 0), new i(1, 0, 0)], a = new En({
      vertices: s,
      faces: o,
      axes: r
    });
    this.convexPolyhedronRepresentation = a, a.material = this.material;
  }
  calculateLocalInertia(e, t) {
    return t === void 0 && (t = new b()), mr.calculateInertia(this.halfExtents, e, t), t;
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
      const a = Nt[r];
      t.vmult(a, a), e.vadd(a, a);
      const l = a.x, h = a.y, d = a.z;
      l > i.x && (i.x = l), h > i.y && (i.y = h), d > i.z && (i.z = d), l < n.x && (n.x = l), h < n.y && (n.y = h), d < n.z && (n.z = d);
    }
  }
}
const dn = new b(), Nt = [new b(), new b(), new b(), new b(), new b(), new b(), new b(), new b()], gr = {
  DYNAMIC: 1,
  STATIC: 2,
  KINEMATIC: 4
}, _r = {
  AWAKE: 0,
  SLEEPY: 1,
  SLEEPING: 2
};
class ie extends ra {
  constructor(e) {
    e === void 0 && (e = {}), super(), this.id = ie.idCounter++, this.index = -1, this.world = null, this.vlambda = new b(), this.collisionFilterGroup = typeof e.collisionFilterGroup == "number" ? e.collisionFilterGroup : 1, this.collisionFilterMask = typeof e.collisionFilterMask == "number" ? e.collisionFilterMask : -1, this.collisionResponse = typeof e.collisionResponse == "boolean" ? e.collisionResponse : !0, this.position = new b(), this.previousPosition = new b(), this.interpolatedPosition = new b(), this.initPosition = new b(), e.position && (this.position.copy(e.position), this.previousPosition.copy(e.position), this.interpolatedPosition.copy(e.position), this.initPosition.copy(e.position)), this.velocity = new b(), e.velocity && this.velocity.copy(e.velocity), this.initVelocity = new b(), this.force = new b();
    const t = typeof e.mass == "number" ? e.mass : 0;
    this.mass = t, this.invMass = t > 0 ? 1 / t : 0, this.material = e.material || null, this.linearDamping = typeof e.linearDamping == "number" ? e.linearDamping : 0.01, this.type = t <= 0 ? ie.STATIC : ie.DYNAMIC, typeof e.type == typeof ie.STATIC && (this.type = e.type), this.allowSleep = typeof e.allowSleep < "u" ? e.allowSleep : !0, this.sleepState = ie.AWAKE, this.sleepSpeedLimit = typeof e.sleepSpeedLimit < "u" ? e.sleepSpeedLimit : 0.1, this.sleepTimeLimit = typeof e.sleepTimeLimit < "u" ? e.sleepTimeLimit : 1, this.timeLastSleepy = 0, this.wakeUpAfterNarrowphase = !1, this.torque = new b(), this.quaternion = new Ze(), this.initQuaternion = new Ze(), this.previousQuaternion = new Ze(), this.interpolatedQuaternion = new Ze(), e.quaternion && (this.quaternion.copy(e.quaternion), this.initQuaternion.copy(e.quaternion), this.previousQuaternion.copy(e.quaternion), this.interpolatedQuaternion.copy(e.quaternion)), this.angularVelocity = new b(), e.angularVelocity && this.angularVelocity.copy(e.angularVelocity), this.initAngularVelocity = new b(), this.shapes = [], this.shapeOffsets = [], this.shapeOrientations = [], this.inertia = new b(), this.invInertia = new b(), this.invInertiaWorld = new Pt(), this.invMassSolve = 0, this.invInertiaSolve = new b(), this.invInertiaWorldSolve = new Pt(), this.fixedRotation = typeof e.fixedRotation < "u" ? e.fixedRotation : !1, this.angularDamping = typeof e.angularDamping < "u" ? e.angularDamping : 0.01, this.linearFactor = new b(1, 1, 1), e.linearFactor && this.linearFactor.copy(e.linearFactor), this.angularFactor = new b(1, 1, 1), e.angularFactor && this.angularFactor.copy(e.angularFactor), this.aabb = new wt(), this.aabbNeedsUpdate = !0, this.boundingRadius = 0, this.wlambda = new b(), this.isTrigger = Boolean(e.isTrigger), e.shape && this.addShape(e.shape), this.updateMassProperties();
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
      const r = t[s].length(), a = o.boundingSphereRadius;
      r + a > i && (i = r + a);
    }
    this.boundingRadius = i;
  }
  updateAABB() {
    const e = this.shapes, t = this.shapeOffsets, n = this.shapeOrientations, i = e.length, s = Od, o = Ud, r = this.quaternion, a = this.aabb, l = Gd;
    for (let h = 0; h !== i; h++) {
      const d = e[h];
      r.vmult(t[h], s), s.vadd(this.position, s), r.mult(n[h], o), d.calculateWorldAABB(s, o, l.lowerBound, l.upperBound), h === 0 ? a.copy(l) : a.extend(l);
    }
    this.aabbNeedsUpdate = !1;
  }
  updateInertiaWorld(e) {
    const t = this.invInertia;
    if (!(t.x === t.y && t.y === t.z && !e)) {
      const n = kd, i = Wd;
      n.setRotationFromQuaternion(this.quaternion), n.transpose(i), n.scale(t, n), n.mmult(i, this.invInertiaWorld);
    }
  }
  applyForce(e, t) {
    if (t === void 0 && (t = new b()), this.type !== ie.DYNAMIC)
      return;
    this.sleepState === ie.SLEEPING && this.wakeUp();
    const n = Hd;
    t.cross(e, n), this.force.vadd(e, this.force), this.torque.vadd(n, this.torque);
  }
  applyLocalForce(e, t) {
    if (t === void 0 && (t = new b()), this.type !== ie.DYNAMIC)
      return;
    const n = qd, i = Xd;
    this.vectorToWorldFrame(e, n), this.vectorToWorldFrame(t, i), this.applyForce(n, i);
  }
  applyTorque(e) {
    this.type === ie.DYNAMIC && (this.sleepState === ie.SLEEPING && this.wakeUp(), this.torque.vadd(e, this.torque));
  }
  applyImpulse(e, t) {
    if (t === void 0 && (t = new b()), this.type !== ie.DYNAMIC)
      return;
    this.sleepState === ie.SLEEPING && this.wakeUp();
    const n = t, i = jd;
    i.copy(e), i.scale(this.invMass, i), this.velocity.vadd(i, this.velocity);
    const s = Yd;
    n.cross(e, s), this.invInertiaWorld.vmult(s, s), this.angularVelocity.vadd(s, this.angularVelocity);
  }
  applyLocalImpulse(e, t) {
    if (t === void 0 && (t = new b()), this.type !== ie.DYNAMIC)
      return;
    const n = $d, i = Zd;
    this.vectorToWorldFrame(e, n), this.vectorToWorldFrame(t, i), this.applyImpulse(n, i);
  }
  updateMassProperties() {
    const e = Kd;
    this.invMass = this.mass > 0 ? 1 / this.mass : 0;
    const t = this.inertia, n = this.fixedRotation;
    this.updateAABB(), e.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2), mr.calculateInertia(e, this.mass, t), this.invInertia.set(t.x > 0 && !n ? 1 / t.x : 0, t.y > 0 && !n ? 1 / t.y : 0, t.z > 0 && !n ? 1 / t.z : 0), this.updateInertiaWorld(!0);
  }
  getVelocityAtWorldPoint(e, t) {
    const n = new b();
    return e.vsub(this.position, n), this.angularVelocity.cross(n, t), this.velocity.vadd(t, t), t;
  }
  integrate(e, t, n) {
    if (this.previousPosition.copy(this.position), this.previousQuaternion.copy(this.quaternion), !(this.type === ie.DYNAMIC || this.type === ie.KINEMATIC) || this.sleepState === ie.SLEEPING)
      return;
    const i = this.velocity, s = this.angularVelocity, o = this.position, r = this.force, a = this.torque, l = this.quaternion, h = this.invMass, d = this.invInertiaWorld, u = this.linearFactor, m = h * e;
    i.x += r.x * m * u.x, i.y += r.y * m * u.y, i.z += r.z * m * u.z;
    const g = d.elements, p = this.angularFactor, f = a.x * p.x, _ = a.y * p.y, v = a.z * p.z;
    s.x += e * (g[0] * f + g[1] * _ + g[2] * v), s.y += e * (g[3] * f + g[4] * _ + g[5] * v), s.z += e * (g[6] * f + g[7] * _ + g[8] * v), o.x += i.x * e, o.y += i.y * e, o.z += i.z * e, l.integrate(this.angularVelocity, e, this.angularFactor, l), t && (n ? l.normalizeFast() : l.normalize()), this.aabbNeedsUpdate = !0, this.updateInertiaWorld();
  }
}
ie.idCounter = 0;
ie.COLLIDE_EVENT_NAME = "collide";
ie.DYNAMIC = gr.DYNAMIC;
ie.STATIC = gr.STATIC;
ie.KINEMATIC = gr.KINEMATIC;
ie.AWAKE = _r.AWAKE;
ie.SLEEPY = _r.SLEEPY;
ie.SLEEPING = _r.SLEEPING;
ie.wakeupEvent = {
  type: "wakeup"
};
ie.sleepyEvent = {
  type: "sleepy"
};
ie.sleepEvent = {
  type: "sleep"
};
const Od = new b(), Ud = new Ze(), Gd = new wt(), kd = new Pt(), Wd = new Pt(), Vd = new Pt(), Hd = new b(), qd = new b(), Xd = new b(), jd = new b(), Yd = new b(), $d = new b(), Zd = new b(), Kd = new b();
class Jd {
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
    const s = Qd;
    t.position.vsub(e.position, s);
    const o = (e.boundingRadius + t.boundingRadius) ** 2;
    s.lengthSquared() < o && (n.push(e), i.push(t));
  }
  doBoundingBoxBroadphase(e, t, n, i) {
    e.aabbNeedsUpdate && e.updateAABB(), t.aabbNeedsUpdate && t.updateAABB(), e.aabb.overlaps(t.aabb) && (n.push(e), i.push(t));
  }
  makePairsUnique(e, t) {
    const n = ef, i = tf, s = nf, o = e.length;
    for (let r = 0; r !== o; r++)
      i[r] = e[r], s[r] = t[r];
    e.length = 0, t.length = 0;
    for (let r = 0; r !== o; r++) {
      const a = i[r].id, l = s[r].id, h = a < l ? `${a},${l}` : `${l},${a}`;
      n[h] = r, n.keys.push(h);
    }
    for (let r = 0; r !== n.keys.length; r++) {
      const a = n.keys.pop(), l = n[a];
      e.push(i[l]), t.push(s[l]), delete n[a];
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
const Qd = new b();
new b();
new Ze();
new b();
const ef = {
  keys: []
}, tf = [], nf = [];
new b();
new b();
new b();
class oa extends Jd {
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
class hs {
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
let aa, la, ca, ha, ua, da, fa;
const vr = {
  CLOSEST: 1,
  ANY: 2,
  ALL: 4
};
aa = le.types.SPHERE;
la = le.types.PLANE;
ca = le.types.BOX;
ha = le.types.CYLINDER;
ua = le.types.CONVEXPOLYHEDRON;
da = le.types.HEIGHTFIELD;
fa = le.types.TRIMESH;
class $e {
  get [aa]() {
    return this._intersectSphere;
  }
  get [la]() {
    return this._intersectPlane;
  }
  get [ca]() {
    return this._intersectBox;
  }
  get [ha]() {
    return this._intersectConvex;
  }
  get [ua]() {
    return this._intersectConvex;
  }
  get [da]() {
    return this._intersectHeightfield;
  }
  get [fa]() {
    return this._intersectTrimesh;
  }
  constructor(e, t) {
    e === void 0 && (e = new b()), t === void 0 && (t = new b()), this.from = e.clone(), this.to = t.clone(), this.direction = new b(), this.precision = 1e-4, this.checkCollisionResponse = !0, this.skipBackfaces = !1, this.collisionFilterMask = -1, this.collisionFilterGroup = -1, this.mode = $e.ANY, this.result = new hs(), this.hasHit = !1, this.callback = (n) => {
    };
  }
  intersectWorld(e, t) {
    return this.mode = t.mode || $e.ANY, this.result = t.result || new hs(), this.skipBackfaces = !!t.skipBackfaces, this.collisionFilterMask = typeof t.collisionFilterMask < "u" ? t.collisionFilterMask : -1, this.collisionFilterGroup = typeof t.collisionFilterGroup < "u" ? t.collisionFilterGroup : -1, this.checkCollisionResponse = typeof t.checkCollisionResponse < "u" ? t.checkCollisionResponse : !0, t.from && this.from.copy(t.from), t.to && this.to.copy(t.to), this.callback = t.callback || (() => {
    }), this.hasHit = !1, this.result.reset(), this.updateDirection(), this.getAABB(go), $s.length = 0, e.broadphase.aabbQuery(e, go, $s), this.intersectBodies($s), this.hasHit;
  }
  intersectBody(e, t) {
    t && (this.result = t, this.updateDirection());
    const n = this.checkCollisionResponse;
    if (n && !e.collisionResponse || (this.collisionFilterGroup & e.collisionFilterMask) === 0 || (e.collisionFilterGroup & this.collisionFilterMask) === 0)
      return;
    const i = sf, s = rf;
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
    if (xf(s, this.direction, n) > e.boundingSphereRadius)
      return;
    const r = this[e.type];
    r && r.call(this, e, t, n, i, e);
  }
  _intersectBox(e, t, n, i, s) {
    return this._intersectConvex(e.convexPolyhedronRepresentation, t, n, i, s);
  }
  _intersectPlane(e, t, n, i, s) {
    const o = this.from, r = this.to, a = this.direction, l = new b(0, 0, 1);
    t.vmult(l, l);
    const h = new b();
    o.vsub(n, h);
    const d = h.dot(l);
    r.vsub(n, h);
    const u = h.dot(l);
    if (d * u > 0 || o.distanceTo(r) < d)
      return;
    const m = l.dot(a);
    if (Math.abs(m) < this.precision)
      return;
    const g = new b(), p = new b(), f = new b();
    o.vsub(n, g);
    const _ = -l.dot(g) / m;
    a.scale(_, p), o.vadd(p, f), this.reportIntersection(l, f, s, i, -1);
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
    const o = of;
    o.from.copy(this.from), o.to.copy(this.to), Pe.pointToLocalFrame(n, t, o.from, o.from), Pe.pointToLocalFrame(n, t, o.to, o.to), o.updateDirection();
    const r = af;
    let a, l, h, d;
    a = l = 0, h = d = e.data.length - 1;
    const u = new wt();
    o.getAABB(u), e.getIndexOfPosition(u.lowerBound.x, u.lowerBound.y, r, !0), a = Math.max(a, r[0]), l = Math.max(l, r[1]), e.getIndexOfPosition(u.upperBound.x, u.upperBound.y, r, !0), h = Math.min(h, r[0] + 1), d = Math.min(d, r[1] + 1);
    for (let m = a; m < h; m++)
      for (let g = l; g < d; g++) {
        if (this.result.shouldStop)
          return;
        if (e.getAabbAtIndex(m, g, u), !!u.overlapsRay(o)) {
          if (e.getConvexTrianglePillar(m, g, !1), Pe.pointToWorldFrame(n, t, e.pillarOffset, es), this._intersectConvex(e.pillarConvex, t, es, i, s, _o), this.result.shouldStop)
            return;
          e.getConvexTrianglePillar(m, g, !0), Pe.pointToWorldFrame(n, t, e.pillarOffset, es), this._intersectConvex(e.pillarConvex, t, es, i, s, _o);
        }
      }
  }
  _intersectSphere(e, t, n, i, s) {
    const o = this.from, r = this.to, a = e.radius, l = (r.x - o.x) ** 2 + (r.y - o.y) ** 2 + (r.z - o.z) ** 2, h = 2 * ((r.x - o.x) * (o.x - n.x) + (r.y - o.y) * (o.y - n.y) + (r.z - o.z) * (o.z - n.z)), d = (o.x - n.x) ** 2 + (o.y - n.y) ** 2 + (o.z - n.z) ** 2 - a ** 2, u = h ** 2 - 4 * l * d, m = lf, g = cf;
    if (!(u < 0))
      if (u === 0)
        o.lerp(r, u, m), m.vsub(n, g), g.normalize(), this.reportIntersection(g, m, s, i, -1);
      else {
        const p = (-h - Math.sqrt(u)) / (2 * l), f = (-h + Math.sqrt(u)) / (2 * l);
        if (p >= 0 && p <= 1 && (o.lerp(r, p, m), m.vsub(n, g), g.normalize(), this.reportIntersection(g, m, s, i, -1)), this.result.shouldStop)
          return;
        f >= 0 && f <= 1 && (o.lerp(r, f, m), m.vsub(n, g), g.normalize(), this.reportIntersection(g, m, s, i, -1));
      }
  }
  _intersectConvex(e, t, n, i, s, o) {
    const r = hf, a = vo, l = o && o.faceList || null, h = e.faces, d = e.vertices, u = e.faceNormals, m = this.direction, g = this.from, p = this.to, f = g.distanceTo(p), _ = l ? l.length : h.length, v = this.result;
    for (let w = 0; !v.shouldStop && w < _; w++) {
      const x = l ? l[w] : w, M = h[x], S = u[x], L = t, y = n;
      a.copy(d[M[0]]), L.vmult(a, a), a.vadd(y, a), a.vsub(g, a), L.vmult(S, r);
      const T = m.dot(r);
      if (Math.abs(T) < this.precision)
        continue;
      const P = r.dot(a) / T;
      if (!(P < 0)) {
        m.scale(P, dt), dt.vadd(g, dt), Ft.copy(d[M[0]]), L.vmult(Ft, Ft), y.vadd(Ft, Ft);
        for (let z = 1; !v.shouldStop && z < M.length - 1; z++) {
          Ot.copy(d[M[z]]), Ut.copy(d[M[z + 1]]), L.vmult(Ot, Ot), L.vmult(Ut, Ut), y.vadd(Ot, Ot), y.vadd(Ut, Ut);
          const H = dt.distanceTo(g);
          !($e.pointInTriangle(dt, Ft, Ot, Ut) || $e.pointInTriangle(dt, Ot, Ft, Ut)) || H > f || this.reportIntersection(r, dt, s, i, x);
        }
      }
    }
  }
  _intersectTrimesh(e, t, n, i, s, o) {
    const r = uf, a = _f, l = vf, h = vo, d = df, u = ff, m = pf, g = gf, p = mf, f = e.indices;
    e.vertices;
    const _ = this.from, v = this.to, w = this.direction;
    l.position.copy(n), l.quaternion.copy(t), Pe.vectorToLocalFrame(n, t, w, d), Pe.pointToLocalFrame(n, t, _, u), Pe.pointToLocalFrame(n, t, v, m), m.x *= e.scale.x, m.y *= e.scale.y, m.z *= e.scale.z, u.x *= e.scale.x, u.y *= e.scale.y, u.z *= e.scale.z, m.vsub(u, d), d.normalize();
    const x = u.distanceSquared(m);
    e.tree.rayQuery(this, l, a);
    for (let M = 0, S = a.length; !this.result.shouldStop && M !== S; M++) {
      const L = a[M];
      e.getNormal(L, r), e.getVertex(f[L * 3], Ft), Ft.vsub(u, h);
      const y = d.dot(r), T = r.dot(h) / y;
      if (T < 0)
        continue;
      d.scale(T, dt), dt.vadd(u, dt), e.getVertex(f[L * 3 + 1], Ot), e.getVertex(f[L * 3 + 2], Ut);
      const P = dt.distanceSquared(u);
      !($e.pointInTriangle(dt, Ot, Ft, Ut) || $e.pointInTriangle(dt, Ft, Ot, Ut)) || P > x || (Pe.vectorToWorldFrame(t, r, p), Pe.pointToWorldFrame(n, t, dt, g), this.reportIntersection(p, g, s, i, L));
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
    i.vsub(t, bn), n.vsub(t, gi), e.vsub(t, Zs);
    const s = bn.dot(bn), o = bn.dot(gi), r = bn.dot(Zs), a = gi.dot(gi), l = gi.dot(Zs);
    let h, d;
    return (h = a * r - o * l) >= 0 && (d = s * l - o * r) >= 0 && h + d < s * a - o * o;
  }
}
$e.CLOSEST = vr.CLOSEST;
$e.ANY = vr.ANY;
$e.ALL = vr.ALL;
const go = new wt(), $s = [], gi = new b(), Zs = new b(), sf = new b(), rf = new Ze(), dt = new b(), Ft = new b(), Ot = new b(), Ut = new b();
new b();
new hs();
const _o = {
  faceList: [0]
}, es = new b(), of = new $e(), af = [], lf = new b(), cf = new b(), hf = new b();
new b();
new b();
const vo = new b(), uf = new b(), df = new b(), ff = new b(), pf = new b(), mf = new b(), gf = new b();
new wt();
const _f = [], vf = new Pe(), bn = new b(), ts = new b();
function xf(c, e, t) {
  t.vsub(c, bn);
  const n = bn.dot(e);
  return e.scale(n, ts), ts.vadd(c, ts), t.distanceTo(ts);
}
class yf {
  static defaults(e, t) {
    e === void 0 && (e = {});
    for (let n in t)
      n in e || (e[n] = t[n]);
    return e;
  }
}
class xo {
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
    n === void 0 && (n = -1e6), i === void 0 && (i = 1e6), this.id = Ti.idCounter++, this.minForce = n, this.maxForce = i, this.bi = e, this.bj = t, this.a = 0, this.b = 0, this.eps = 0, this.jacobianElementA = new xo(), this.jacobianElementB = new xo(), this.enabled = !0, this.multiplier = 0, this.setSpookParams(1e7, 4, 1 / 60);
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
    const e = this.jacobianElementA, t = this.jacobianElementB, n = this.bi, i = this.bj, s = n.force, o = n.torque, r = i.force, a = i.torque, l = n.invMassSolve, h = i.invMassSolve;
    return s.scale(l, yo), r.scale(h, wo), n.invInertiaWorldSolve.vmult(o, bo), i.invInertiaWorldSolve.vmult(a, Mo), e.multiplyVectors(yo, bo) + t.multiplyVectors(wo, Mo);
  }
  computeGiMGt() {
    const e = this.jacobianElementA, t = this.jacobianElementB, n = this.bi, i = this.bj, s = n.invMassSolve, o = i.invMassSolve, r = n.invInertiaWorldSolve, a = i.invInertiaWorldSolve;
    let l = s + o;
    return r.vmult(e.rotational, ns), l += ns.dot(e.rotational), a.vmult(t.rotational, ns), l += ns.dot(t.rotational), l;
  }
  addToWlambda(e) {
    const t = this.jacobianElementA, n = this.jacobianElementB, i = this.bi, s = this.bj, o = wf;
    i.vlambda.addScaledVector(i.invMassSolve * e, t.spatial, i.vlambda), s.vlambda.addScaledVector(s.invMassSolve * e, n.spatial, s.vlambda), i.invInertiaWorldSolve.vmult(t.rotational, o), i.wlambda.addScaledVector(e, o, i.wlambda), s.invInertiaWorldSolve.vmult(n.rotational, o), s.wlambda.addScaledVector(e, o, s.wlambda);
  }
  computeC() {
    return this.computeGiMGt() + this.eps;
  }
}
Ti.idCounter = 0;
const yo = new b(), wo = new b(), bo = new b(), Mo = new b(), ns = new b(), wf = new b();
class bf extends Ti {
  constructor(e, t, n) {
    n === void 0 && (n = 1e6), super(e, t, 0, n), this.restitution = 0, this.ri = new b(), this.rj = new b(), this.ni = new b();
  }
  computeB(e) {
    const t = this.a, n = this.b, i = this.bi, s = this.bj, o = this.ri, r = this.rj, a = Mf, l = Sf, h = i.velocity, d = i.angularVelocity;
    i.force, i.torque;
    const u = s.velocity, m = s.angularVelocity;
    s.force, s.torque;
    const g = Ef, p = this.jacobianElementA, f = this.jacobianElementB, _ = this.ni;
    o.cross(_, a), r.cross(_, l), _.negate(p.spatial), a.negate(p.rotational), f.spatial.copy(_), f.rotational.copy(l), g.copy(s.position), g.vadd(r, g), g.vsub(i.position, g), g.vsub(o, g);
    const v = _.dot(g), w = this.restitution + 1, x = w * u.dot(_) - w * h.dot(_) + m.dot(l) - d.dot(a), M = this.computeGiMf();
    return -v * t - x * n - e * M;
  }
  getImpactVelocityAlongNormal() {
    const e = Af, t = Tf, n = Cf, i = Lf, s = Rf;
    return this.bi.position.vadd(this.ri, n), this.bj.position.vadd(this.rj, i), this.bi.getVelocityAtWorldPoint(n, e), this.bj.getVelocityAtWorldPoint(i, t), e.vsub(t, s), this.ni.dot(s);
  }
}
const Mf = new b(), Sf = new b(), Ef = new b(), Af = new b(), Tf = new b(), Cf = new b(), Lf = new b(), Rf = new b();
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
class So extends Ti {
  constructor(e, t, n) {
    super(e, t, -n, n), this.ri = new b(), this.rj = new b(), this.t = new b();
  }
  computeB(e) {
    this.a;
    const t = this.b;
    this.bi, this.bj;
    const n = this.ri, i = this.rj, s = Df, o = Ff, r = this.t;
    n.cross(r, s), i.cross(r, o);
    const a = this.jacobianElementA, l = this.jacobianElementB;
    r.negate(a.spatial), s.negate(a.rotational), l.spatial.copy(r), l.rotational.copy(o);
    const h = this.computeGW(), d = this.computeGiMf();
    return -h * t - e * d;
  }
}
const Df = new b(), Ff = new b();
class An {
  constructor(e, t, n) {
    n = yf.defaults(n, {
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
class Pf extends En {
  constructor(e, t, n, i) {
    if (e === void 0 && (e = 1), t === void 0 && (t = 1), n === void 0 && (n = 1), i === void 0 && (i = 8), e < 0)
      throw new Error("The cylinder radiusTop cannot be negative.");
    if (t < 0)
      throw new Error("The cylinder radiusBottom cannot be negative.");
    const s = i, o = [], r = [], a = [], l = [], h = [], d = Math.cos, u = Math.sin;
    o.push(new b(-t * u(0), -n * 0.5, t * d(0))), l.push(0), o.push(new b(-e * u(0), n * 0.5, e * d(0))), h.push(1);
    for (let g = 0; g < s; g++) {
      const p = 2 * Math.PI / s * (g + 1), f = 2 * Math.PI / s * (g + 0.5);
      g < s - 1 ? (o.push(new b(-t * u(p), -n * 0.5, t * d(p))), l.push(2 * g + 2), o.push(new b(-e * u(p), n * 0.5, e * d(p))), h.push(2 * g + 3), a.push([2 * g, 2 * g + 1, 2 * g + 3, 2 * g + 2])) : a.push([2 * g, 2 * g + 1, 1, 0]), (s % 2 === 1 || g < s / 2) && r.push(new b(-u(f), 0, d(f)));
    }
    a.push(l), r.push(new b(0, 1, 0));
    const m = [];
    for (let g = 0; g < h.length; g++)
      m.push(h[h.length - g - 1]);
    a.push(m), super({
      vertices: o,
      faces: a,
      axes: r
    }), this.type = le.types.CYLINDER, this.radiusTop = e, this.radiusBottom = t, this.height = n, this.numSegments = i;
  }
}
class _i extends le {
  constructor() {
    super({
      type: le.types.PLANE
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
new wt();
new b();
new wt();
new b();
new b();
new b();
new b();
new b();
new b();
new b();
new wt();
new b();
new Pe();
new wt();
class If {
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
class zf extends If {
  constructor() {
    super(), this.iterations = 10, this.tolerance = 1e-7;
  }
  solve(e, t) {
    let n = 0;
    const i = this.iterations, s = this.tolerance * this.tolerance, o = this.equations, r = o.length, a = t.bodies, l = a.length, h = e;
    let d, u, m, g, p, f;
    if (r !== 0)
      for (let x = 0; x !== l; x++)
        a[x].updateSolveMassProperties();
    const _ = Nf, v = Of, w = Bf;
    _.length = r, v.length = r, w.length = r;
    for (let x = 0; x !== r; x++) {
      const M = o[x];
      w[x] = 0, v[x] = M.computeB(h), _[x] = 1 / M.computeC();
    }
    if (r !== 0) {
      for (let S = 0; S !== l; S++) {
        const L = a[S], y = L.vlambda, T = L.wlambda;
        y.set(0, 0, 0), T.set(0, 0, 0);
      }
      for (n = 0; n !== i; n++) {
        g = 0;
        for (let S = 0; S !== r; S++) {
          const L = o[S];
          d = v[S], u = _[S], f = w[S], p = L.computeGWlambda(), m = u * (d - p - L.eps * f), f + m < L.minForce ? m = L.minForce - f : f + m > L.maxForce && (m = L.maxForce - f), w[S] += m, g += m > 0 ? m : -m, L.addToWlambda(m);
        }
        if (g * g < s)
          break;
      }
      for (let S = 0; S !== l; S++) {
        const L = a[S], y = L.velocity, T = L.angularVelocity;
        L.vlambda.vmul(L.linearFactor, L.vlambda), y.vadd(L.vlambda, y), L.wlambda.vmul(L.angularFactor, L.wlambda), T.vadd(L.wlambda, T);
      }
      let x = o.length;
      const M = 1 / h;
      for (; x--; )
        o[x].multiplier = w[x] * M;
    }
    return n;
  }
}
const Bf = [], Nf = [], Of = [];
ie.STATIC;
class Uf {
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
class Gf extends Uf {
  constructor() {
    super(...arguments), this.type = b;
  }
  constructObject() {
    return new b();
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
class kf {
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
    this.contactPointPool = [], this.frictionEquationPool = [], this.result = [], this.frictionResult = [], this.v3pool = new Gf(), this.world = e, this.currentContactMaterial = e.defaultContactMaterial, this.enableFrictionReduction = !1;
  }
  createContactEquation(e, t, n, i, s, o) {
    let r;
    this.contactPointPool.length ? (r = this.contactPointPool.pop(), r.bi = e, r.bj = t) : r = new bf(e, t), r.enabled = e.collisionResponse && t.collisionResponse && n.collisionResponse && i.collisionResponse;
    const a = this.currentContactMaterial;
    r.restitution = a.restitution, r.setSpookParams(a.contactEquationStiffness, a.contactEquationRelaxation, this.world.dt);
    const l = n.material || e.material, h = i.material || t.material;
    return l && h && l.restitution >= 0 && h.restitution >= 0 && (r.restitution = l.restitution * h.restitution), r.si = s || n, r.sj = o || i, r;
  }
  createFrictionEquationsFromContact(e, t) {
    const n = e.bi, i = e.bj, s = e.si, o = e.sj, r = this.world, a = this.currentContactMaterial;
    let l = a.friction;
    const h = s.material || n.material, d = o.material || i.material;
    if (h && d && h.friction >= 0 && d.friction >= 0 && (l = h.friction * d.friction), l > 0) {
      const u = l * (r.frictionGravity || r.gravity).length();
      let m = n.invMass + i.invMass;
      m > 0 && (m = 1 / m);
      const g = this.frictionEquationPool, p = g.length ? g.pop() : new So(n, i, u * m), f = g.length ? g.pop() : new So(n, i, u * m);
      return p.bi = f.bi = n, p.bj = f.bj = i, p.minForce = f.minForce = -u * m, p.maxForce = f.maxForce = u * m, p.ri.copy(e.ri), p.rj.copy(e.rj), f.ri.copy(e.ri), f.rj.copy(e.rj), e.ni.tangents(p.t, f.t), p.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, r.dt), f.setSpookParams(a.frictionEquationStiffness, a.frictionEquationRelaxation, r.dt), p.enabled = f.enabled = e.enabled, t.push(p, f), !0;
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
    const a = Hf, l = qf, h = Wf, d = Vf;
    for (let u = 0, m = e.length; u !== m; u++) {
      const g = e[u], p = t[u];
      let f = null;
      g.material && p.material && (f = n.getContactMaterial(g.material, p.material) || null);
      const _ = g.type & ie.KINEMATIC && p.type & ie.STATIC || g.type & ie.STATIC && p.type & ie.KINEMATIC || g.type & ie.KINEMATIC && p.type & ie.KINEMATIC;
      for (let v = 0; v < g.shapes.length; v++) {
        g.quaternion.mult(g.shapeOrientations[v], a), g.quaternion.vmult(g.shapeOffsets[v], h), h.vadd(g.position, h);
        const w = g.shapes[v];
        for (let x = 0; x < p.shapes.length; x++) {
          p.quaternion.mult(p.shapeOrientations[x], l), p.quaternion.vmult(p.shapeOffsets[x], d), d.vadd(p.position, d);
          const M = p.shapes[x];
          if (!(w.collisionFilterMask & M.collisionFilterGroup && M.collisionFilterMask & w.collisionFilterGroup) || h.distanceTo(d) > w.boundingSphereRadius + M.boundingSphereRadius)
            continue;
          let S = null;
          w.material && M.material && (S = n.getContactMaterial(w.material, M.material) || null), this.currentContactMaterial = S || f || n.defaultContactMaterial;
          const L = w.type | M.type, y = this[L];
          if (y) {
            let T = !1;
            w.type < M.type ? T = y.call(this, w, M, h, d, a, l, g, p, w, M, _) : T = y.call(this, M, w, d, h, l, a, p, g, w, M, _), T && _ && (n.shapeOverlapKeeper.set(w.id, M.id), n.bodyOverlapKeeper.set(g.id, p.id));
          }
        }
      }
    }
  }
  sphereSphere(e, t, n, i, s, o, r, a, l, h, d) {
    if (d)
      return n.distanceSquared(i) < (e.radius + t.radius) ** 2;
    const u = this.createContactEquation(r, a, e, t, l, h);
    i.vsub(n, u.ni), u.ni.normalize(), u.ri.copy(u.ni), u.rj.copy(u.ni), u.ri.scale(e.radius, u.ri), u.rj.scale(-t.radius, u.rj), u.ri.vadd(n, u.ri), u.ri.vsub(r.position, u.ri), u.rj.vadd(i, u.rj), u.rj.vsub(a.position, u.rj), this.result.push(u), this.createFrictionEquationsFromContact(u, this.frictionResult);
  }
  spherePlane(e, t, n, i, s, o, r, a, l, h, d) {
    const u = this.createContactEquation(r, a, e, t, l, h);
    if (u.ni.set(0, 0, 1), o.vmult(u.ni, u.ni), u.ni.negate(u.ni), u.ni.normalize(), u.ni.scale(e.radius, u.ri), n.vsub(i, is), u.ni.scale(u.ni.dot(is), Eo), is.vsub(Eo, u.rj), -is.dot(u.ni) <= e.radius) {
      if (d)
        return !0;
      const m = u.ri, g = u.rj;
      m.vadd(n, m), m.vsub(r.position, m), g.vadd(i, g), g.vsub(a.position, g), this.result.push(u), this.createFrictionEquationsFromContact(u, this.frictionResult);
    }
  }
  boxBox(e, t, n, i, s, o, r, a, l, h, d) {
    return e.convexPolyhedronRepresentation.material = e.material, t.convexPolyhedronRepresentation.material = t.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, this.convexConvex(e.convexPolyhedronRepresentation, t.convexPolyhedronRepresentation, n, i, s, o, r, a, e, t, d);
  }
  sphereBox(e, t, n, i, s, o, r, a, l, h, d) {
    const u = this.v3pool, m = _p;
    n.vsub(i, ss), t.getSideNormals(m, o);
    const g = e.radius;
    let p = !1;
    const f = xp, _ = yp, v = wp;
    let w = null, x = 0, M = 0, S = 0, L = null;
    for (let D = 0, X = m.length; D !== X && p === !1; D++) {
      const U = pp;
      U.copy(m[D]);
      const N = U.length();
      U.normalize();
      const V = ss.dot(U);
      if (V < N + g && V > 0) {
        const J = mp, W = gp;
        J.copy(m[(D + 1) % 3]), W.copy(m[(D + 2) % 3]);
        const ee = J.length(), ce = W.length();
        J.normalize(), W.normalize();
        const ge = ss.dot(J), Z = ss.dot(W);
        if (ge < ee && ge > -ee && Z < ce && Z > -ce) {
          const Fe = Math.abs(V - N - g);
          if ((L === null || Fe < L) && (L = Fe, M = ge, S = Z, w = N, f.copy(U), _.copy(J), v.copy(W), x++, d))
            return !0;
        }
      }
    }
    if (x) {
      p = !0;
      const D = this.createContactEquation(r, a, e, t, l, h);
      f.scale(-g, D.ri), D.ni.copy(f), D.ni.negate(D.ni), f.scale(w, f), _.scale(M, _), f.vadd(_, f), v.scale(S, v), f.vadd(v, D.rj), D.ri.vadd(n, D.ri), D.ri.vsub(r.position, D.ri), D.rj.vadd(i, D.rj), D.rj.vsub(a.position, D.rj), this.result.push(D), this.createFrictionEquationsFromContact(D, this.frictionResult);
    }
    let y = u.get();
    const T = vp;
    for (let D = 0; D !== 2 && !p; D++)
      for (let X = 0; X !== 2 && !p; X++)
        for (let U = 0; U !== 2 && !p; U++)
          if (y.set(0, 0, 0), D ? y.vadd(m[0], y) : y.vsub(m[0], y), X ? y.vadd(m[1], y) : y.vsub(m[1], y), U ? y.vadd(m[2], y) : y.vsub(m[2], y), i.vadd(y, T), T.vsub(n, T), T.lengthSquared() < g * g) {
            if (d)
              return !0;
            p = !0;
            const N = this.createContactEquation(r, a, e, t, l, h);
            N.ri.copy(T), N.ri.normalize(), N.ni.copy(N.ri), N.ri.scale(g, N.ri), N.rj.copy(y), N.ri.vadd(n, N.ri), N.ri.vsub(r.position, N.ri), N.rj.vadd(i, N.rj), N.rj.vsub(a.position, N.rj), this.result.push(N), this.createFrictionEquationsFromContact(N, this.frictionResult);
          }
    u.release(y), y = null;
    const P = u.get(), z = u.get(), H = u.get(), B = u.get(), C = u.get(), F = m.length;
    for (let D = 0; D !== F && !p; D++)
      for (let X = 0; X !== F && !p; X++)
        if (D % 3 !== X % 3) {
          m[X].cross(m[D], P), P.normalize(), m[D].vadd(m[X], z), H.copy(n), H.vsub(z, H), H.vsub(i, H);
          const U = H.dot(P);
          P.scale(U, B);
          let N = 0;
          for (; N === D % 3 || N === X % 3; )
            N++;
          C.copy(n), C.vsub(B, C), C.vsub(z, C), C.vsub(i, C);
          const V = Math.abs(U), J = C.length();
          if (V < m[N].length() && J < g) {
            if (d)
              return !0;
            p = !0;
            const W = this.createContactEquation(r, a, e, t, l, h);
            z.vadd(B, W.rj), W.rj.copy(W.rj), C.negate(W.ni), W.ni.normalize(), W.ri.copy(W.rj), W.ri.vadd(i, W.ri), W.ri.vsub(n, W.ri), W.ri.normalize(), W.ri.scale(g, W.ri), W.ri.vadd(n, W.ri), W.ri.vsub(r.position, W.ri), W.rj.vadd(i, W.rj), W.rj.vsub(a.position, W.rj), this.result.push(W), this.createFrictionEquationsFromContact(W, this.frictionResult);
          }
        }
    u.release(P, z, H, B, C);
  }
  planeBox(e, t, n, i, s, o, r, a, l, h, d) {
    return t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, t.convexPolyhedronRepresentation.id = t.id, this.planeConvex(e, t.convexPolyhedronRepresentation, n, i, s, o, r, a, e, t, d);
  }
  convexConvex(e, t, n, i, s, o, r, a, l, h, d, u, m) {
    const g = Bp;
    if (!(n.distanceTo(i) > e.boundingSphereRadius + t.boundingSphereRadius) && e.findSeparatingAxis(t, n, s, i, o, g, u, m)) {
      const p = [], f = Np;
      e.clipAgainstHull(n, s, t, i, o, g, -100, 100, p);
      let _ = 0;
      for (let v = 0; v !== p.length; v++) {
        if (d)
          return !0;
        const w = this.createContactEquation(r, a, e, t, l, h), x = w.ri, M = w.rj;
        g.negate(w.ni), p[v].normal.negate(f), f.scale(p[v].depth, f), p[v].point.vadd(f, x), M.copy(p[v].point), x.vsub(n, x), M.vsub(i, M), x.vadd(n, x), x.vsub(r.position, x), M.vadd(i, M), M.vsub(a.position, M), this.result.push(w), _++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(w, this.frictionResult);
      }
      this.enableFrictionReduction && _ && this.createFrictionFromAverage(_);
    }
  }
  sphereConvex(e, t, n, i, s, o, r, a, l, h, d) {
    const u = this.v3pool;
    n.vsub(i, bp);
    const m = t.faceNormals, g = t.faces, p = t.vertices, f = e.radius;
    let _ = !1;
    for (let v = 0; v !== p.length; v++) {
      const w = p[v], x = Ap;
      o.vmult(w, x), i.vadd(x, x);
      const M = Ep;
      if (x.vsub(n, M), M.lengthSquared() < f * f) {
        if (d)
          return !0;
        _ = !0;
        const S = this.createContactEquation(r, a, e, t, l, h);
        S.ri.copy(M), S.ri.normalize(), S.ni.copy(S.ri), S.ri.scale(f, S.ri), x.vsub(i, S.rj), S.ri.vadd(n, S.ri), S.ri.vsub(r.position, S.ri), S.rj.vadd(i, S.rj), S.rj.vsub(a.position, S.rj), this.result.push(S), this.createFrictionEquationsFromContact(S, this.frictionResult);
        return;
      }
    }
    for (let v = 0, w = g.length; v !== w && _ === !1; v++) {
      const x = m[v], M = g[v], S = Tp;
      o.vmult(x, S);
      const L = Cp;
      o.vmult(p[M[0]], L), L.vadd(i, L);
      const y = Lp;
      S.scale(-f, y), n.vadd(y, y);
      const T = Rp;
      y.vsub(L, T);
      const P = T.dot(S), z = Dp;
      if (n.vsub(L, z), P < 0 && z.dot(S) > 0) {
        const H = [];
        for (let B = 0, C = M.length; B !== C; B++) {
          const F = u.get();
          o.vmult(p[M[B]], F), i.vadd(F, F), H.push(F);
        }
        if (fp(H, S, n)) {
          if (d)
            return !0;
          _ = !0;
          const B = this.createContactEquation(r, a, e, t, l, h);
          S.scale(-f, B.ri), S.negate(B.ni);
          const C = u.get();
          S.scale(-P, C);
          const F = u.get();
          S.scale(-f, F), n.vsub(i, B.rj), B.rj.vadd(F, B.rj), B.rj.vadd(C, B.rj), B.rj.vadd(i, B.rj), B.rj.vsub(a.position, B.rj), B.ri.vadd(n, B.ri), B.ri.vsub(r.position, B.ri), u.release(C), u.release(F), this.result.push(B), this.createFrictionEquationsFromContact(B, this.frictionResult);
          for (let D = 0, X = H.length; D !== X; D++)
            u.release(H[D]);
          return;
        } else
          for (let B = 0; B !== M.length; B++) {
            const C = u.get(), F = u.get();
            o.vmult(p[M[(B + 1) % M.length]], C), o.vmult(p[M[(B + 2) % M.length]], F), i.vadd(C, C), i.vadd(F, F);
            const D = Mp;
            F.vsub(C, D);
            const X = Sp;
            D.unit(X);
            const U = u.get(), N = u.get();
            n.vsub(C, N);
            const V = N.dot(X);
            X.scale(V, U), U.vadd(C, U);
            const J = u.get();
            if (U.vsub(n, J), V > 0 && V * V < D.lengthSquared() && J.lengthSquared() < f * f) {
              if (d)
                return !0;
              const W = this.createContactEquation(r, a, e, t, l, h);
              U.vsub(i, W.rj), U.vsub(n, W.ni), W.ni.normalize(), W.ni.scale(f, W.ri), W.rj.vadd(i, W.rj), W.rj.vsub(a.position, W.rj), W.ri.vadd(n, W.ri), W.ri.vsub(r.position, W.ri), this.result.push(W), this.createFrictionEquationsFromContact(W, this.frictionResult);
              for (let ee = 0, ce = H.length; ee !== ce; ee++)
                u.release(H[ee]);
              u.release(C), u.release(F), u.release(U), u.release(J), u.release(N);
              return;
            }
            u.release(C), u.release(F), u.release(U), u.release(J), u.release(N);
          }
        for (let B = 0, C = H.length; B !== C; B++)
          u.release(H[B]);
      }
    }
  }
  planeConvex(e, t, n, i, s, o, r, a, l, h, d) {
    const u = Fp, m = Pp;
    m.set(0, 0, 1), s.vmult(m, m);
    let g = 0;
    const p = Ip;
    for (let f = 0; f !== t.vertices.length; f++)
      if (u.copy(t.vertices[f]), o.vmult(u, u), i.vadd(u, u), u.vsub(n, p), m.dot(p) <= 0) {
        if (d)
          return !0;
        const v = this.createContactEquation(r, a, e, t, l, h), w = zp;
        m.scale(m.dot(p), w), u.vsub(w, w), w.vsub(n, v.ri), v.ni.copy(m), u.vsub(i, v.rj), v.ri.vadd(n, v.ri), v.ri.vsub(r.position, v.ri), v.rj.vadd(i, v.rj), v.rj.vsub(a.position, v.rj), this.result.push(v), g++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(v, this.frictionResult);
      }
    this.enableFrictionReduction && g && this.createFrictionFromAverage(g);
  }
  boxConvex(e, t, n, i, s, o, r, a, l, h, d) {
    return e.convexPolyhedronRepresentation.material = e.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, this.convexConvex(e.convexPolyhedronRepresentation, t, n, i, s, o, r, a, e, t, d);
  }
  sphereHeightfield(e, t, n, i, s, o, r, a, l, h, d) {
    const u = t.data, m = e.radius, g = t.elementSize, p = $p, f = Yp;
    Pe.pointToLocalFrame(i, o, n, f);
    let _ = Math.floor((f.x - m) / g) - 1, v = Math.ceil((f.x + m) / g) + 1, w = Math.floor((f.y - m) / g) - 1, x = Math.ceil((f.y + m) / g) + 1;
    if (v < 0 || x < 0 || _ > u.length || w > u[0].length)
      return;
    _ < 0 && (_ = 0), v < 0 && (v = 0), w < 0 && (w = 0), x < 0 && (x = 0), _ >= u.length && (_ = u.length - 1), v >= u.length && (v = u.length - 1), x >= u[0].length && (x = u[0].length - 1), w >= u[0].length && (w = u[0].length - 1);
    const M = [];
    t.getRectMinMax(_, w, v, x, M);
    const S = M[0], L = M[1];
    if (f.z - m > L || f.z + m < S)
      return;
    const y = this.result;
    for (let T = _; T < v; T++)
      for (let P = w; P < x; P++) {
        const z = y.length;
        let H = !1;
        if (t.getConvexTrianglePillar(T, P, !1), Pe.pointToWorldFrame(i, o, t.pillarOffset, p), n.distanceTo(p) < t.pillarConvex.boundingSphereRadius + e.boundingSphereRadius && (H = this.sphereConvex(e, t.pillarConvex, n, p, s, o, r, a, e, t, d)), d && H || (t.getConvexTrianglePillar(T, P, !0), Pe.pointToWorldFrame(i, o, t.pillarOffset, p), n.distanceTo(p) < t.pillarConvex.boundingSphereRadius + e.boundingSphereRadius && (H = this.sphereConvex(e, t.pillarConvex, n, p, s, o, r, a, e, t, d)), d && H))
          return !0;
        if (y.length - z > 2)
          return;
      }
  }
  boxHeightfield(e, t, n, i, s, o, r, a, l, h, d) {
    return e.convexPolyhedronRepresentation.material = e.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, this.convexHeightfield(e.convexPolyhedronRepresentation, t, n, i, s, o, r, a, e, t, d);
  }
  convexHeightfield(e, t, n, i, s, o, r, a, l, h, d) {
    const u = t.data, m = t.elementSize, g = e.boundingSphereRadius, p = Xp, f = jp, _ = qp;
    Pe.pointToLocalFrame(i, o, n, _);
    let v = Math.floor((_.x - g) / m) - 1, w = Math.ceil((_.x + g) / m) + 1, x = Math.floor((_.y - g) / m) - 1, M = Math.ceil((_.y + g) / m) + 1;
    if (w < 0 || M < 0 || v > u.length || x > u[0].length)
      return;
    v < 0 && (v = 0), w < 0 && (w = 0), x < 0 && (x = 0), M < 0 && (M = 0), v >= u.length && (v = u.length - 1), w >= u.length && (w = u.length - 1), M >= u[0].length && (M = u[0].length - 1), x >= u[0].length && (x = u[0].length - 1);
    const S = [];
    t.getRectMinMax(v, x, w, M, S);
    const L = S[0], y = S[1];
    if (!(_.z - g > y || _.z + g < L))
      for (let T = v; T < w; T++)
        for (let P = x; P < M; P++) {
          let z = !1;
          if (t.getConvexTrianglePillar(T, P, !1), Pe.pointToWorldFrame(i, o, t.pillarOffset, p), n.distanceTo(p) < t.pillarConvex.boundingSphereRadius + e.boundingSphereRadius && (z = this.convexConvex(e, t.pillarConvex, n, p, s, o, r, a, null, null, d, f, null)), d && z || (t.getConvexTrianglePillar(T, P, !0), Pe.pointToWorldFrame(i, o, t.pillarOffset, p), n.distanceTo(p) < t.pillarConvex.boundingSphereRadius + e.boundingSphereRadius && (z = this.convexConvex(e, t.pillarConvex, n, p, s, o, r, a, null, null, d, f, null)), d && z))
            return !0;
        }
  }
  sphereParticle(e, t, n, i, s, o, r, a, l, h, d) {
    const u = kp;
    if (u.set(0, 0, 1), i.vsub(n, u), u.lengthSquared() <= e.radius * e.radius) {
      if (d)
        return !0;
      const g = this.createContactEquation(a, r, t, e, l, h);
      u.normalize(), g.rj.copy(u), g.rj.scale(e.radius, g.rj), g.ni.copy(u), g.ni.negate(g.ni), g.ri.set(0, 0, 0), this.result.push(g), this.createFrictionEquationsFromContact(g, this.frictionResult);
    }
  }
  planeParticle(e, t, n, i, s, o, r, a, l, h, d) {
    const u = Op;
    u.set(0, 0, 1), r.quaternion.vmult(u, u);
    const m = Up;
    if (i.vsub(r.position, m), u.dot(m) <= 0) {
      if (d)
        return !0;
      const p = this.createContactEquation(a, r, t, e, l, h);
      p.ni.copy(u), p.ni.negate(p.ni), p.ri.set(0, 0, 0);
      const f = Gp;
      u.scale(u.dot(i), f), i.vsub(f, f), p.rj.copy(f), this.result.push(p), this.createFrictionEquationsFromContact(p, this.frictionResult);
    }
  }
  boxParticle(e, t, n, i, s, o, r, a, l, h, d) {
    return e.convexPolyhedronRepresentation.material = e.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, this.convexParticle(e.convexPolyhedronRepresentation, t, n, i, s, o, r, a, e, t, d);
  }
  convexParticle(e, t, n, i, s, o, r, a, l, h, d) {
    let u = -1;
    const m = Vp, g = Hp;
    let p = null;
    const f = Wp;
    if (f.copy(i), f.vsub(n, f), s.conjugate(Ao), Ao.vmult(f, f), e.pointIsInside(f)) {
      e.worldVerticesNeedsUpdate && e.computeWorldVertices(n, s), e.worldFaceNormalsNeedsUpdate && e.computeWorldFaceNormals(s);
      for (let _ = 0, v = e.faces.length; _ !== v; _++) {
        const w = [e.worldVertices[e.faces[_][0]]], x = e.worldFaceNormals[_];
        i.vsub(w[0], To);
        const M = -x.dot(To);
        if (p === null || Math.abs(M) < Math.abs(p)) {
          if (d)
            return !0;
          p = M, u = _, m.copy(x);
        }
      }
      if (u !== -1) {
        const _ = this.createContactEquation(a, r, t, e, l, h);
        m.scale(p, g), g.vadd(i, g), g.vsub(n, g), _.rj.copy(g), m.negate(_.ni), _.ri.set(0, 0, 0);
        const v = _.ri, w = _.rj;
        v.vadd(i, v), v.vsub(a.position, v), w.vadd(n, w), w.vsub(r.position, w), this.result.push(_), this.createFrictionEquationsFromContact(_, this.frictionResult);
      } else
        console.warn("Point found inside convex, but did not find penetrating face!");
    }
  }
  heightfieldCylinder(e, t, n, i, s, o, r, a, l, h, d) {
    return this.convexHeightfield(t, e, i, n, o, s, a, r, l, h, d);
  }
  particleCylinder(e, t, n, i, s, o, r, a, l, h, d) {
    return this.convexParticle(t, e, i, n, o, s, a, r, l, h, d);
  }
  sphereTrimesh(e, t, n, i, s, o, r, a, l, h, d) {
    const u = Qf, m = ep, g = tp, p = np, f = ip, _ = sp, v = lp, w = Jf, x = Zf, M = cp;
    Pe.pointToLocalFrame(i, o, n, f);
    const S = e.radius;
    v.lowerBound.set(f.x - S, f.y - S, f.z - S), v.upperBound.set(f.x + S, f.y + S, f.z + S), t.getTrianglesInAABB(v, M);
    const L = Kf, y = e.radius * e.radius;
    for (let B = 0; B < M.length; B++)
      for (let C = 0; C < 3; C++)
        if (t.getVertex(t.indices[M[B] * 3 + C], L), L.vsub(f, x), x.lengthSquared() <= y) {
          if (w.copy(L), Pe.pointToWorldFrame(i, o, w, L), L.vsub(n, x), d)
            return !0;
          let F = this.createContactEquation(r, a, e, t, l, h);
          F.ni.copy(x), F.ni.normalize(), F.ri.copy(F.ni), F.ri.scale(e.radius, F.ri), F.ri.vadd(n, F.ri), F.ri.vsub(r.position, F.ri), F.rj.copy(L), F.rj.vsub(a.position, F.rj), this.result.push(F), this.createFrictionEquationsFromContact(F, this.frictionResult);
        }
    for (let B = 0; B < M.length; B++)
      for (let C = 0; C < 3; C++) {
        t.getVertex(t.indices[M[B] * 3 + C], u), t.getVertex(t.indices[M[B] * 3 + (C + 1) % 3], m), m.vsub(u, g), f.vsub(m, _);
        const F = _.dot(g);
        f.vsub(u, _);
        let D = _.dot(g);
        if (D > 0 && F < 0 && (f.vsub(u, _), p.copy(g), p.normalize(), D = _.dot(p), p.scale(D, _), _.vadd(u, _), _.distanceTo(f) < e.radius)) {
          if (d)
            return !0;
          const U = this.createContactEquation(r, a, e, t, l, h);
          _.vsub(f, U.ni), U.ni.normalize(), U.ni.scale(e.radius, U.ri), U.ri.vadd(n, U.ri), U.ri.vsub(r.position, U.ri), Pe.pointToWorldFrame(i, o, _, _), _.vsub(a.position, U.rj), Pe.vectorToWorldFrame(o, U.ni, U.ni), Pe.vectorToWorldFrame(o, U.ri, U.ri), this.result.push(U), this.createFrictionEquationsFromContact(U, this.frictionResult);
        }
      }
    const T = rp, P = op, z = ap, H = $f;
    for (let B = 0, C = M.length; B !== C; B++) {
      t.getTriangleVertices(M[B], T, P, z), t.getNormal(M[B], H), f.vsub(T, _);
      let F = _.dot(H);
      if (H.scale(F, _), f.vsub(_, _), F = _.distanceTo(f), $e.pointInTriangle(_, T, P, z) && F < e.radius) {
        if (d)
          return !0;
        let D = this.createContactEquation(r, a, e, t, l, h);
        _.vsub(f, D.ni), D.ni.normalize(), D.ni.scale(e.radius, D.ri), D.ri.vadd(n, D.ri), D.ri.vsub(r.position, D.ri), Pe.pointToWorldFrame(i, o, _, _), _.vsub(a.position, D.rj), Pe.vectorToWorldFrame(o, D.ni, D.ni), Pe.vectorToWorldFrame(o, D.ri, D.ri), this.result.push(D), this.createFrictionEquationsFromContact(D, this.frictionResult);
      }
    }
    M.length = 0;
  }
  planeTrimesh(e, t, n, i, s, o, r, a, l, h, d) {
    const u = new b(), m = Xf;
    m.set(0, 0, 1), s.vmult(m, m);
    for (let g = 0; g < t.vertices.length / 3; g++) {
      t.getVertex(g, u);
      const p = new b();
      p.copy(u), Pe.pointToWorldFrame(i, o, p, u);
      const f = jf;
      if (u.vsub(n, f), m.dot(f) <= 0) {
        if (d)
          return !0;
        const v = this.createContactEquation(r, a, e, t, l, h);
        v.ni.copy(m);
        const w = Yf;
        m.scale(f.dot(m), w), u.vsub(w, w), v.ri.copy(w), v.ri.vsub(r.position, v.ri), v.rj.copy(u), v.rj.vsub(a.position, v.rj), this.result.push(v), this.createFrictionEquationsFromContact(v, this.frictionResult);
      }
    }
  }
}
const vn = new b(), Kn = new b(), Jn = new b(), Wf = new b(), Vf = new b(), Hf = new Ze(), qf = new Ze(), Xf = new b(), jf = new b(), Yf = new b(), $f = new b(), Zf = new b();
new b();
const Kf = new b(), Jf = new b(), Qf = new b(), ep = new b(), tp = new b(), np = new b(), ip = new b(), sp = new b(), rp = new b(), op = new b(), ap = new b(), lp = new wt(), cp = [], is = new b(), Eo = new b(), hp = new b(), up = new b(), dp = new b();
function fp(c, e, t) {
  let n = null;
  const i = c.length;
  for (let s = 0; s !== i; s++) {
    const o = c[s], r = hp;
    c[(s + 1) % i].vsub(o, r);
    const a = up;
    r.cross(e, a);
    const l = dp;
    t.vsub(o, l);
    const h = a.dot(l);
    if (n === null || h > 0 && n === !0 || h <= 0 && n === !1) {
      n === null && (n = h > 0);
      continue;
    } else
      return !1;
  }
  return !0;
}
const ss = new b(), pp = new b(), mp = new b(), gp = new b(), _p = [new b(), new b(), new b(), new b(), new b(), new b()], vp = new b(), xp = new b(), yp = new b(), wp = new b(), bp = new b(), Mp = new b(), Sp = new b(), Ep = new b(), Ap = new b(), Tp = new b(), Cp = new b(), Lp = new b(), Rp = new b(), Dp = new b();
new b();
new b();
const Fp = new b(), Pp = new b(), Ip = new b(), zp = new b(), Bp = new b(), Np = new b(), Op = new b(), Up = new b(), Gp = new b(), kp = new b(), Ao = new Ze(), Wp = new b();
new b();
const Vp = new b(), To = new b(), Hp = new b(), qp = new b(), Xp = new b(), jp = [0], Yp = new b(), $p = new b();
class Co {
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
      const h = n[a];
      for (; h > i[r]; )
        r++;
      l = h === i[r], l || Lo(e, h);
    }
    r = 0;
    for (let a = 0; a < o; a++) {
      let l = !1;
      const h = i[a];
      for (; h > n[r]; )
        r++;
      l = n[r] === h, l || Lo(t, h);
    }
  }
}
function Lo(c, e) {
  c.push((e & 4294901760) >> 16, e & 65535);
}
const Ks = (c, e) => c < e ? `${c}-${e}` : `${e}-${c}`;
class Zp {
  constructor() {
    this.data = {
      keys: []
    };
  }
  get(e, t) {
    const n = Ks(e, t);
    return this.data[n];
  }
  set(e, t, n) {
    const i = Ks(e, t);
    this.get(e, t) || this.data.keys.push(i), this.data[i] = n;
  }
  delete(e, t) {
    const n = Ks(e, t), i = this.data.keys.indexOf(n);
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
class Kp extends ra {
  constructor(e) {
    e === void 0 && (e = {}), super(), this.dt = -1, this.allowSleep = !!e.allowSleep, this.contacts = [], this.frictionEquations = [], this.quatNormalizeSkip = e.quatNormalizeSkip !== void 0 ? e.quatNormalizeSkip : 0, this.quatNormalizeFast = e.quatNormalizeFast !== void 0 ? e.quatNormalizeFast : !1, this.time = 0, this.stepnumber = 0, this.default_dt = 1 / 60, this.nextId = 0, this.gravity = new b(), e.gravity && this.gravity.copy(e.gravity), e.frictionGravity && (this.frictionGravity = new b(), this.frictionGravity.copy(e.frictionGravity)), this.broadphase = e.broadphase !== void 0 ? e.broadphase : new oa(), this.bodies = [], this.hasActiveBodies = !1, this.solver = e.solver !== void 0 ? e.solver : new zf(), this.constraints = [], this.narrowphase = new kf(this), this.collisionMatrix = new po(), this.collisionMatrixPrevious = new po(), this.bodyOverlapKeeper = new Co(), this.shapeOverlapKeeper = new Co(), this.contactmaterials = [], this.contactMaterialTable = new Zp(), this.defaultMaterial = new Tn("default"), this.defaultContactMaterial = new An(this.defaultMaterial, this.defaultMaterial, {
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
    n instanceof hs ? this.raycastClosest(e, t, {
      skipBackfaces: !0
    }, n) : this.raycastAll(e, t, {
      skipBackfaces: !0
    }, n);
  }
  raycastAll(e, t, n, i) {
    return n === void 0 && (n = {}), n.mode = $e.ALL, n.from = e, n.to = t, n.callback = i, Js.intersectWorld(this, n);
  }
  raycastAny(e, t, n, i) {
    return n === void 0 && (n = {}), n.mode = $e.ANY, n.from = e, n.to = t, n.result = i, Js.intersectWorld(this, n);
  }
  raycastClosest(e, t, n, i) {
    return n === void 0 && (n = {}), n.mode = $e.CLOSEST, n.from = e, n.to = t, n.result = i, Js.intersectWorld(this, n);
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
    const t = this.contacts, n = nm, i = im, s = this.bodies.length, o = this.bodies, r = this.solver, a = this.gravity, l = this.doProfiling, h = this.profile, d = ie.DYNAMIC;
    let u = -1 / 0;
    const m = this.constraints, g = tm;
    a.length();
    const p = a.x, f = a.y, _ = a.z;
    let v = 0;
    for (l && (u = Je.now()), v = 0; v !== s; v++) {
      const B = o[v];
      if (B.type === d) {
        const C = B.force, F = B.mass;
        C.x += F * p, C.y += F * f, C.z += F * _;
      }
    }
    for (let B = 0, C = this.subsystems.length; B !== C; B++)
      this.subsystems[B].update();
    l && (u = Je.now()), n.length = 0, i.length = 0, this.broadphase.collisionPairs(this, n, i), l && (h.broadphase = Je.now() - u);
    let w = m.length;
    for (v = 0; v !== w; v++) {
      const B = m[v];
      if (!B.collideConnected)
        for (let C = n.length - 1; C >= 0; C -= 1)
          (B.bodyA === n[C] && B.bodyB === i[C] || B.bodyB === n[C] && B.bodyA === i[C]) && (n.splice(C, 1), i.splice(C, 1));
    }
    this.collisionMatrixTick(), l && (u = Je.now());
    const x = em, M = t.length;
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
    ), l && (h.narrowphase = Je.now() - u), l && (u = Je.now()), v = 0; v < this.frictionEquations.length; v++)
      r.addEquation(this.frictionEquations[v]);
    const L = t.length;
    for (let B = 0; B !== L; B++) {
      const C = t[B], F = C.bi, D = C.bj, X = C.si, U = C.sj;
      let N;
      if (F.material && D.material ? N = this.getContactMaterial(F.material, D.material) || this.defaultContactMaterial : N = this.defaultContactMaterial, N.friction, F.material && D.material && (F.material.friction >= 0 && D.material.friction >= 0 && F.material.friction * D.material.friction, F.material.restitution >= 0 && D.material.restitution >= 0 && (C.restitution = F.material.restitution * D.material.restitution)), r.addEquation(C), F.allowSleep && F.type === ie.DYNAMIC && F.sleepState === ie.SLEEPING && D.sleepState === ie.AWAKE && D.type !== ie.STATIC) {
        const V = D.velocity.lengthSquared() + D.angularVelocity.lengthSquared(), J = D.sleepSpeedLimit ** 2;
        V >= J * 2 && (F.wakeUpAfterNarrowphase = !0);
      }
      if (D.allowSleep && D.type === ie.DYNAMIC && D.sleepState === ie.SLEEPING && F.sleepState === ie.AWAKE && F.type !== ie.STATIC) {
        const V = F.velocity.lengthSquared() + F.angularVelocity.lengthSquared(), J = F.sleepSpeedLimit ** 2;
        V >= J * 2 && (D.wakeUpAfterNarrowphase = !0);
      }
      this.collisionMatrix.set(F, D, !0), this.collisionMatrixPrevious.get(F, D) || (vi.body = D, vi.contact = C, F.dispatchEvent(vi), vi.body = F, D.dispatchEvent(vi)), this.bodyOverlapKeeper.set(F.id, D.id), this.shapeOverlapKeeper.set(X.id, U.id);
    }
    for (this.emitContactEvents(), l && (h.makeContactConstraints = Je.now() - u, u = Je.now()), v = 0; v !== s; v++) {
      const B = o[v];
      B.wakeUpAfterNarrowphase && (B.wakeUp(), B.wakeUpAfterNarrowphase = !1);
    }
    for (w = m.length, v = 0; v !== w; v++) {
      const B = m[v];
      B.update();
      for (let C = 0, F = B.equations.length; C !== F; C++) {
        const D = B.equations[C];
        r.addEquation(D);
      }
    }
    r.solve(e, this), l && (h.solve = Je.now() - u), r.removeAllEquations();
    const y = Math.pow;
    for (v = 0; v !== s; v++) {
      const B = o[v];
      if (B.type & d) {
        const C = y(1 - B.linearDamping, e), F = B.velocity;
        F.scale(C, F);
        const D = B.angularVelocity;
        if (D) {
          const X = y(1 - B.angularDamping, e);
          D.scale(X, D);
        }
      }
    }
    this.dispatchEvent(Qp), l && (u = Je.now());
    const P = this.stepnumber % (this.quatNormalizeSkip + 1) === 0, z = this.quatNormalizeFast;
    for (v = 0; v !== s; v++)
      o[v].integrate(e, P, z);
    this.clearForces(), this.broadphase.dirty = !0, l && (h.integrate = Je.now() - u), this.stepnumber += 1, this.dispatchEvent(Jp);
    let H = !0;
    if (this.allowSleep)
      for (H = !1, v = 0; v !== s; v++) {
        const B = o[v];
        B.sleepTick(this.time), B.sleepState !== ie.SLEEPING && (H = !0);
      }
    this.hasActiveBodies = H;
  }
  emitContactEvents() {
    const e = this.hasAnyEventListener("beginContact"), t = this.hasAnyEventListener("endContact");
    if ((e || t) && this.bodyOverlapKeeper.getDiff(Zt, Kt), e) {
      for (let s = 0, o = Zt.length; s < o; s += 2)
        xi.bodyA = this.getBodyById(Zt[s]), xi.bodyB = this.getBodyById(Zt[s + 1]), this.dispatchEvent(xi);
      xi.bodyA = xi.bodyB = null;
    }
    if (t) {
      for (let s = 0, o = Kt.length; s < o; s += 2)
        yi.bodyA = this.getBodyById(Kt[s]), yi.bodyB = this.getBodyById(Kt[s + 1]), this.dispatchEvent(yi);
      yi.bodyA = yi.bodyB = null;
    }
    Zt.length = Kt.length = 0;
    const n = this.hasAnyEventListener("beginShapeContact"), i = this.hasAnyEventListener("endShapeContact");
    if ((n || i) && this.shapeOverlapKeeper.getDiff(Zt, Kt), n) {
      for (let s = 0, o = Zt.length; s < o; s += 2) {
        const r = this.getShapeById(Zt[s]), a = this.getShapeById(Zt[s + 1]);
        Jt.shapeA = r, Jt.shapeB = a, r && (Jt.bodyA = r.body), a && (Jt.bodyB = a.body), this.dispatchEvent(Jt);
      }
      Jt.bodyA = Jt.bodyB = Jt.shapeA = Jt.shapeB = null;
    }
    if (i) {
      for (let s = 0, o = Kt.length; s < o; s += 2) {
        const r = this.getShapeById(Kt[s]), a = this.getShapeById(Kt[s + 1]);
        Qt.shapeA = r, Qt.shapeB = a, r && (Qt.bodyA = r.body), a && (Qt.bodyB = a.body), this.dispatchEvent(Qt);
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
new wt();
const Js = new $e(), Je = globalThis.performance || {};
if (!Je.now) {
  let c = Date.now();
  Je.timing && Je.timing.navigationStart && (c = Je.timing.navigationStart), Je.now = () => Date.now() - c;
}
new b();
const Jp = {
  type: "postStep"
}, Qp = {
  type: "preStep"
}, vi = {
  type: ie.COLLIDE_EVENT_NAME,
  body: null,
  contact: null
}, em = [], tm = [], nm = [], im = [], Zt = [], Kt = [], xi = {
  type: "beginContact",
  bodyA: null,
  bodyB: null
}, yi = {
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
class Ro {
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
    let n = e.split("@"), i = n[0], s = new RegExp(/(\+|\-|\*|\/|\%|\^|){0,1}()(\d*)([a-z]+\d+|[a-z]+|)(?:\{([a-z]+)(.*?|)\}|)()/, "i"), o = new RegExp(/(\b)*(\-\d+|\d+)(\b)*/, "gi"), r, a = 0, l = 30, h = 0, d = 0;
    for (; !this.error && i.length > 0 && (r = s.exec(i)) !== null && a < l; ) {
      a++, i = i.substring(r[0].length);
      let u = r[1], m = r[2] && r[2].length > 0, g = r[3], p = r[4], f = r[5] || "", _ = r[6] || "", v = r[7] && r[7].length > 0, w = !0;
      m && (h += r[2].length), _ = _.split(","), (!_ || _.length < 1) && (_ = ""), _.shift(), a == 1 && i.length == 0 && !p && u && g ? (p = "d20", this.op = u, this.constant = parseInt(g), g = 1) : a > 1 && i.length == 0 && !p && (this.op = u, this.constant = parseInt(g), w = !1), w && this.addSet(g, p, d, h, f, _, u), v && (h -= r[7].length, d += r[7].length);
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
    let a = r + "" + t + n + i + s + o, l = this.setkeys[a] != null, h = {};
    l && (h = this.set[this.setkeys[a] - 1]), e > 0 && (h.num = l ? e + h.num : e, h.type = t, h.sid = this.setid, h.gid = n, h.glvl = i, s && (h.func = s), o && (h.args = o), r && (h.op = r), l ? this.set[this.setkeys[a] - 1] = h : this.setkeys[a] = this.set.push(h)), l || ++this.setid;
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
const Qs = {
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
}, Et = {
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
}, sm = {
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
class rm {
  constructor(e) {
    if (!Qs.hasOwnProperty(e))
      return console.error("dice type unavailable");
    Object.assign(this, sm, Qs[e]), this.shape = Qs[e].type || e, this.type = e, this.setLabels(this.labels), this.setValues(this.values[0], this.values[1], this.values[2]), this.setValueMap(this.valueMap), this.bumpMaps && this.setBumpMaps(this.bumpMaps);
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
const er = {
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
function pa(c) {
  return Math.min(Math.max(Number(c) || 0, 0), 1);
}
function om(c, e, t) {
  return !(t > 0) || !(c != null && c.emissive) || !e ? !1 : (c.emissiveMap = e, c.emissive = new Me(16777215), c.emissiveIntensity = t, !0);
}
function am(c, e = null, t = 1) {
  const n = (e == null ? void 0 : e.composite) === "destination-in" || t < 1;
  return c.opacity = t, c.transparent = n, c.depthTest = !0, c.depthWrite = !n || t >= 0.5, c.needsUpdate = !0, c;
}
const lm = 180;
class cm {
  constructor(e = lm) {
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
      this.map.delete(e), n !== t && tr(n);
    }
    for (this.map.set(e, t); this.map.size > this.maxEntries; ) {
      const n = this.map.keys().next().value, i = this.map.get(n);
      this.map.delete(n), tr(i);
    }
  }
  clear() {
    for (const e of this.map.values())
      tr(e);
    this.map.clear();
  }
}
function tr(c) {
  var e, t, n, i, s, o;
  !c || typeof c != "object" || ((t = (e = c.composite) == null ? void 0 : e.dispose) == null || t.call(e), (i = (n = c.bump) == null ? void 0 : n.dispose) == null || i.call(n), (o = (s = c.glow) == null ? void 0 : s.dispose) == null || o.call(s));
}
function Do(c) {
  var t, n, i, s, o, r;
  if (!c)
    return;
  const e = Array.isArray(c.material) ? c.material : c.material ? [c.material] : [];
  for (const a of e)
    (t = a == null ? void 0 : a.dispose) == null || t.call(a);
  c.customDepthMaterial && ((i = (n = c.customDepthMaterial).dispose) == null || i.call(n), c.customDepthMaterial = null), ((s = c.userData) == null ? void 0 : s.clonedGeometry) && c.geometry && ((r = (o = c.geometry).dispose) == null || r.call(o), c.userData.clonedGeometry = !1);
}
const hm = {
  baseScale: 100,
  bumpMapping: !0
}, ti = class {
  constructor(e) {
    this.geometries = {}, this.materials_cache = new cm(), this.cache_hits = 0, this.cache_misses = 0, this.label_color = "", this.dice_color = "", this.edge_color = "", this.label_outline = "", this.dice_texture = "", this.dice_material = "", this.material_options = {
      specular: 16777215,
      color: 11908533,
      shininess: 5,
      flatShading: !0
    }, Object.assign(this, hm, e);
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
      let a = this.resultReason, l = new I(0, 0, this.shape == "d4" ? -1 : 1), h, d = Math.PI * 2, u = this.geometry.getAttribute("normal").array;
      for (let v = 0, w = this.geometry.groups.length; v < w; ++v) {
        let x = this.geometry.groups[v];
        if (x.materialIndex == 0)
          continue;
        let M = v * 9, L = new I(u[M], u[M + 1], u[M + 2]).clone().applyQuaternion(this.body.quaternion).angleTo(l);
        L < d && (d = L, h = x);
      }
      let m = h.materialIndex - 1, g = 2;
      const p = ti.dice[this.notation.type];
      if (this.shape == "d4") {
        let v = m - 1 == 0 ? 5 : m;
        return { value: m, label: p.labels[m - 1][v][0], reason: a };
      }
      ["d10", "d2"].includes(this.shape) && (m += 1, g -= 1);
      let f = p.values[(m - 1) % p.values.length], _ = p.labels[(m - 1) % (p.labels.length - 2) + g];
      return { value: f, label: _, reason: a };
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
    }, i.color && (r.material[0].color = new Me(i.color), r.material[0].emissive = new Me(i.color), r.material[0].emissiveIntensity = 1, r.material[0].needsUpdate = !0), i.values.length) {
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
    return ti.dice.hasOwnProperty(e) ? t = ti.dice[e] : (t = new rm(e), ti.dice[e] = t), t;
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
    var h, d, u;
    let o = [], r = e.labels;
    e.shape == "d4" && (r = e.labels[s], t = this.baseScale / 2, n = this.baseScale * 2);
    for (var a = 0; a < r.length; ++a) {
      var l;
      this.dice_material != "none" ? (l = new cr(er[this.dice_material]), l.envMapIntensity = ((d = (h = er[this.dice_material]) == null ? void 0 : h.envMapIntensity) != null ? d : 1) * (this.shine || 0)) : l = new Ed(this.material_options);
      let m;
      if (a == 0) {
        let g = { name: "none" };
        this.dice_texture_rand.composite != "source-over" && (g = this.dice_texture_rand), m = this.createTextMaterial(e, r, a, t, n, g, this.label_color_rand, this.label_outline_rand, this.edge_color_rand, i), l.map = m.composite, this.applyGlow(l, m);
      } else {
        m = this.createTextMaterial(e, r, a, t, n, this.dice_texture_rand, this.label_color_rand, this.label_outline_rand, this.dice_color_rand, i), l.map = m.composite;
        const g = ((u = er[this.dice_material]) == null ? void 0 : u.metalness) || 0;
        if (this.label_glow > 0 && g > 0 && m.glow && l.emissive && (l.emissiveMap = m.glow, l.emissive = new Me(16777215), l.emissiveIntensity = this.label_glow * g), this.applyGlow(l, m), this.bumpMapping) {
          {
            let p = 0.75;
            t > 35 && (p = 1), t > 40 && (p = 2.5), t > 45 && (p = 4), l.bumpScale = p;
          }
          m.bump && (l.bumpMap = m.bump), e.shape != "d4" && e.normals[a] && (l.bumpMap = new xt(e.normals[a]), l.bumpScale = 4, l.bumpMap.needsUpdate = !0);
        }
      }
      am(l, a === 0 && this.dice_texture_rand.composite !== "source-over" ? this.dice_texture_rand : a === 0 ? null : this.dice_texture_rand, 1), o.push(l);
    }
    return o;
  }
  createTextMaterial(e, t, n, i, s, o, r, a, l, h) {
    if (t[n] === void 0)
      return null;
    o = o || this.dice_texture_rand, r = r || this.label_color_rand, a = a || this.label_outline_rand, l = l || this.dice_color_rand, h = h == null ? !0 : h;
    let d = t[n], u = !1, m = d;
    d instanceof HTMLImageElement ? m = d.src : d instanceof Array && d.forEach((H) => {
      m += H.src;
    });
    let g = e.type + m + n + o.name + r + a + l;
    e.shape == "d4" && (g = e.type + m + o.name + r + a + l);
    const p = h ? this.materials_cache.get(g) : null;
    if (p != null)
      return this.cache_hits++, p;
    let f = document.createElement("canvas"), _ = f.getContext("2d", { alpha: !0 });
    _.globalAlpha = 0, _.clearRect(0, 0, f.width, f.height);
    let v = document.createElement("canvas"), w = v.getContext("2d", { alpha: !0 });
    w.globalAlpha = 0, w.clearRect(0, 0, v.width, v.height);
    let x = document.createElement("canvas"), M = x.getContext("2d", { alpha: !1 }), S;
    if (e.shape == "d4" ? S = this.calc_texture_size(i + s) * 4 : S = this.calc_texture_size(i + i * 2 * s) * 4, f.width = f.height = S, v.width = v.height = S, x.width = x.height = S, M.fillStyle = "#000000", M.fillRect(0, 0, S, S), _.fillStyle = l, _.fillRect(0, 0, f.width, f.height), w.fillStyle = "#FFFFFF", w.fillRect(0, 0, v.width, v.height), o.texture && o.name != "" && o.name != "none" ? (_.globalCompositeOperation = o.composite || "source-over", _.drawImage(o.texture, 0, 0, f.width, f.height), _.globalCompositeOperation = "source-over", o.bump && (w.globalCompositeOperation = "source-over", w.drawImage(o.bump, 0, 0, f.width, f.height))) : _.globalCompositeOperation = "source-over", _.globalCompositeOperation = "source-over", _.textAlign = "center", _.textBaseline = "middle", w.textAlign = "center", w.textBaseline = "middle", M.textAlign = "center", M.textBaseline = "middle", e.shape != "d4") {
      let B = {
        d8: { even: -7.5, odd: -127.5 },
        d10: { all: -6 },
        d12: { all: 5 },
        d20: { all: -7.5 }
      }[e.shape];
      if (B) {
        let C;
        if (B.hasOwnProperty("all") ? C = B.all : n > 0 && n % 2 != 0 ? C = B.odd : C = B.even, C && C != 0) {
          var L = f.width / 2, y = f.height / 2;
          _.translate(L, y), _.rotate(C * (Math.PI / 180)), _.translate(-L, -y), w.translate(L, y), w.rotate(C * (Math.PI / 180)), w.translate(-L, -y), M.translate(L, y), M.rotate(C * (Math.PI / 180)), M.translate(-L, -y);
        }
      }
      if (d instanceof HTMLImageElement)
        u = !0, _.drawImage(d, 0, 0, d.width, d.height, 0, 0, f.width, f.height);
      else {
        let C = S / (1 + 2 * s), F = f.height / 2 + 10, D = f.width / 2;
        e.shape == "d10" ? (C = C * 0.75, F = F * 1.15 - 10) : e.shape == "d20" && (D = D * 0.98), _.font = C + "pt " + e.font, w.font = C + "pt " + e.font, M.font = C + "pt " + e.font;
        let X = _.measureText("M").width * 1.4, U = d.split(`
`);
        U.length > 1 && (C = C / U.length, _.font = C + "pt " + e.font, w.font = C + "pt " + e.font, M.font = C + "pt " + e.font, X = _.measureText("M").width * 1.2, F -= X * U.length / 2);
        for (let N = 0, V = U.length; N < V; N++) {
          let J = U[N].trim();
          a != "none" && a != l && (_.strokeStyle = a, _.lineWidth = 5, _.strokeText(U[N], D, F), w.strokeStyle = "#000000", w.lineWidth = 5, w.strokeText(U[N], D, F), (J == "6" || J == "9") && (_.strokeText("  .", D, F), w.strokeText("  .", D, F))), _.fillStyle = r, _.fillText(U[N], D, F), w.fillStyle = "#000000", w.fillText(U[N], D, F), M.fillStyle = r, M.fillText(U[N], D, F), (J == "6" || J == "9") && (_.fillText("  .", D, F), w.fillText("  .", D, F), M.fillText("  .", D, F)), F += X * 1.5;
        }
      }
    } else {
      var L = f.width / 2, y = f.height / 2;
      _.font = S / 128 * 24 + "pt " + e.font, w.font = S / 128 * 24 + "pt " + e.font, M.font = S / 128 * 24 + "pt " + e.font;
      for (let C = 0; C < d.length; C++) {
        if (d[C] instanceof HTMLImageElement) {
          let F = d[C].width / f.width;
          _.drawImage(d[C], 0, 0, d[C].width, d[C].height, 100 / F, 25 / F, 60 / F, 60 / F);
        } else
          a != "none" && a != l && (_.strokeStyle = a, _.lineWidth = 5, _.strokeText(d[C], L, y - S * 0.3), w.strokeStyle = "#000000", w.lineWidth = 5, w.strokeText(d[C], L, y - S * 0.3)), _.fillStyle = r, _.fillText(d[C], L, y - S * 0.3), w.fillStyle = "#000000", w.fillText(d[C], L, y - S * 0.3), M.fillStyle = r, M.fillText(d[C], L, y - S * 0.3);
        _.translate(L, y), _.rotate(Math.PI * 2 / 3), _.translate(-L, -y), w.translate(L, y), w.rotate(Math.PI * 2 / 3), w.translate(-L, -y), M.translate(L, y), M.rotate(Math.PI * 2 / 3), M.translate(-L, -y);
      }
    }
    var T = new bi(f), P;
    u ? P = null : P = new bi(v);
    var z = new bi(x);
    return h && (this.cache_misses++, this.materials_cache.set(g, { composite: T, bump: P, glow: z })), { composite: T, bump: P, glow: z };
  }
  applyColorSet(e) {
    var t;
    this.colordata = e, this.label_color = e.foreground, this.dice_color = e.background, this.label_outline = e.outline, this.dice_texture = e.texture, this.dice_material = ((t = e == null ? void 0 : e.texture) == null ? void 0 : t.material) || "none", this.edge_color = e.hasOwnProperty("edge") ? e.edge : e.background, this.dice_glow = pa(e.glow);
  }
  applyGlow(e, t) {
    om(e, t == null ? void 0 : t.composite, this.dice_glow);
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
        var s = new fr(1 * t, 1 * t, 0.1 * t, 32);
        return s.cannon_shape = new Pf(1 * t, 1 * t, 0.1 * t, 8), s;
      case "d4":
        return this[i](Et.d4.vertices, Et.d4.faces, t, -0.1, Math.PI * 7 / 6, 0.96);
      case "d6":
        return this[i](Et.d6.vertices, Et.d6.faces, t, 0.1, Math.PI / 4, 0.96);
      case "d8":
        return this[i](Et.d8.vertices, Et.d8.faces, t, 0, -Math.PI / 4 / 2, 0.965);
      case "d10":
        return this[i](Et.d10.vertices, Et.d10.faces, t, 0.3, Math.PI, 0.945);
      case "d12":
        return this[i](Et.d12.vertices, Et.d12.faces, t, 0.2, -Math.PI / 4 / 2, 0.968);
      case "d20":
        return this[i](Et.d20.vertices, Et.d20.faces, t, -0.2, -Math.PI / 4 / 2, 0.955);
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
      i[s] = new I().fromArray(e[s]).normalize();
    for (var o = new Array(e.length), r = new Array(t.length), s = 0; s < i.length; ++s) {
      var a = i[s];
      o[s] = new b(a.x * n, a.y * n, a.z * n);
    }
    for (var s = 0; s < t.length; ++s)
      r[s] = t[s].slice(0, t[s].length - 1);
    return new En({ vertices: o, faces: r });
  }
  make_geom(e, t, n, i, s) {
    let o = new yt();
    for (let g = 0; g < e.length; ++g)
      e[g] = e[g].multiplyScalar(n);
    let r = [];
    const a = [], l = [], h = new I(), d = new I();
    let u, m = 0;
    for (let g = 0; g < t.length; ++g) {
      let p = t[g], f = p.length - 1, _ = Math.PI * 2 / f;
      u = p[f] + 1;
      for (let w = 0; w < f - 2; ++w)
        r.push(...e[p[0]].toArray()), r.push(...e[p[w + 1]].toArray()), r.push(...e[p[w + 2]].toArray()), h.subVectors(e[p[w + 2]], e[p[w + 1]]), d.subVectors(e[p[0]], e[p[w + 1]]), h.cross(d), h.normalize(), a.push(...h.toArray()), a.push(...h.toArray()), a.push(...h.toArray()), l.push((Math.cos(s) + 1 + i) / 2 / (1 + i), (Math.sin(s) + 1 + i) / 2 / (1 + i)), l.push((Math.cos(_ * (w + 1) + s) + 1 + i) / 2 / (1 + i), (Math.sin(_ * (w + 1) + s) + 1 + i) / 2 / (1 + i)), l.push((Math.cos(_ * (w + 2) + s) + 1 + i) / 2 / (1 + i), (Math.sin(_ * (w + 2) + s) + 1 + i) / 2 / (1 + i));
      let v = (f - 2) * 3;
      for (let w = 0; w < v / 3; w++)
        o.addGroup(m, 3, u), m += 3;
    }
    return o.setAttribute("position", new ot(r, 3)), o.setAttribute("normal", new ot(a, 3)), o.setAttribute("uv", new ot(l, 2)), o.boundingSphere = new ni(new I(), n), o;
  }
  make_d10_geom(e, t, n, i, s) {
    let o = new yt();
    for (let w = 0; w < e.length; ++w)
      e[w] = e[w].multiplyScalar(n);
    let r = [];
    const a = [], l = [], h = new I(), d = new I();
    let u, m = 0;
    for (let w = 0; w < t.length; ++w) {
      let x = t[w], M = x.length - 1, S = Math.PI * 2 / M;
      u = x[M] + 1;
      var g = 0.65, p = 0.85, f = 1 - 1 * p, _ = 1 - 0.895 / 1.105 * p, v = 1;
      for (let y = 0; y < M - 2; ++y)
        r.push(...e[x[0]].toArray()), r.push(...e[x[y + 1]].toArray()), r.push(...e[x[y + 2]].toArray()), h.subVectors(e[x[y + 2]], e[x[y + 1]]), d.subVectors(e[x[0]], e[x[y + 1]]), h.cross(d), h.normalize(), a.push(...h.toArray()), a.push(...h.toArray()), a.push(...h.toArray()), t[w][t[w].length - 1] == -1 || y >= 2 ? (l.push((Math.cos(s) + 1 + i) / 2 / (1 + i), (Math.sin(s) + 1 + i) / 2 / (1 + i)), l.push((Math.cos(S * (y + 1) + s) + 1 + i) / 2 / (1 + i), (Math.sin(S * (y + 1) + s) + 1 + i) / 2 / (1 + i)), l.push((Math.cos(S * (y + 2) + s) + 1 + i) / 2 / (1 + i), (Math.sin(S * (y + 2) + s) + 1 + i) / 2 / (1 + i))) : y == 0 ? (l.push(0.5 - g / 2, _), l.push(0.5, f), l.push(0.5 + g / 2, _)) : y == 1 && (l.push(0.5 - g / 2, _), l.push(0.5 + g / 2, _), l.push(0.5, v));
      let L = (M - 2) * 3;
      for (let y = 0; y < L / 3; y++)
        o.addGroup(m, 3, u), m += 3;
    }
    return o.setAttribute("position", new ot(r, 3)), o.setAttribute("normal", new ot(a, 3)), o.setAttribute("uv", new ot(l, 2)), o.boundingSphere = new ni(new I(), n), o;
  }
  chamfer_geom(e, t, n) {
    for (var i = [], s = [], o = new Array(e.length), r = 0; r < e.length; ++r)
      o[r] = [];
    for (var r = 0; r < t.length; ++r) {
      for (var a = t[r], l = a.length - 1, h = new I(), d = new Array(l), u = 0; u < l; ++u) {
        var m = e[a[u]].clone();
        h.add(m), o[a[u]].push(d[u] = i.push(m) - 1);
      }
      h.divideScalar(l);
      for (var u = 0; u < l; ++u) {
        var m = i[d[u]];
        m.subVectors(m, h).multiplyScalar(n).addVectors(m, h);
      }
      d.push(a[l]), s.push(d);
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
      for (var v = o[r], d = [v[0]], w = v.length - 1; w; ) {
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
        --w;
      }
      d.push(-1), s.push(d);
    }
    return { vectors: i, faces: s };
  }
  create_geom(e, t, n, i, s, o) {
    for (var r = new Array(e.length), a = 0; a < e.length; ++a)
      r[a] = new I().fromArray(e[a]).normalize();
    var l = this.chamfer_geom(r, t, o);
    if (t.length != 10)
      var h = this.make_geom(l.vectors, l.faces, n, i, s);
    else
      var h = this.make_d10_geom(l.vectors, l.faces, n, i, s);
    return h.cannon_shape = this.create_shape(e, t, n), h.name = "d" + t.length, h;
  }
};
let as = ti;
wr(as, "dice", {});
const nr = {
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
}, Fo = {
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
class um {
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
    let i = { ...Fo[t] };
    return n = e.texture || i.texture, i.texture = this.getTexture(n), i.texture = await this.ImageLoader(i.texture), e.material && (i.texture.material = e.material), this.colorsets[t] = i, i;
  }
  async makeColorSet(e = {}) {
    const t = `custom:${JSON.stringify(e)}`;
    if (this.colorsets.hasOwnProperty(t))
      return this.colorsets[t];
    let n = Fo.white, i = Object.assign({}, n, e), s = this.getTexture(i.texture);
    return i.texture = await this.ImageLoader(s), e.material && (i.texture.material = e.material), i.name.toLowerCase() === "white" && (i.name = `${Date.now()}`), this.colorsets[t] = i, i;
  }
  getTexture(e) {
    if (Array.isArray(e)) {
      let t = [];
      for (let n = 0, i = e.length; n < i; n++)
        t.push(this.getTexture(e[n]));
      return t;
    }
    return nr.hasOwnProperty(e) ? { ...nr[e] } : { ...nr.none };
  }
}
const dm = {
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
}, fm = (c) => {
  let e;
  return function() {
    let t = this, n = arguments;
    e && window.cancelAnimationFrame(e), e = window.requestAnimationFrame(function() {
      c.apply(t, n);
    });
  };
}, pm = 2.1, ma = 0.15;
function mm(c) {
  return Number.isFinite(c) ? Math.min(1, Math.max(0, c)) : 0;
}
function gm({ width: c, height: e, strength: t = 1, spread: n = ma, random: i = Math.random }) {
  const s = Math.max(1, Math.hypot(c, e)), o = i() * Math.PI * 2, r = { x: Math.cos(o) * s, y: Math.sin(o) * s }, a = 1 + mm(n) * (i() * 2 - 1), l = pm * s * t * a;
  return { vector: r, dist: s, boost: l };
}
const _m = 9, vm = 6, xm = 4.5, ym = 12, wm = 6, bm = 0.85, Mm = 0.7, ir = (c, e, t) => Math.min(Math.max(c, e), t);
function Sm(c = {}) {
  return { level: pa(c == null ? void 0 : c.glow), color: (c == null ? void 0 : c.light) || (c == null ? void 0 : c.background) || "#ffffff" };
}
function Em({ level: c, radius: e, height: t, opacity: n = 1 }) {
  const i = ir(c, 0, 1) * ir(n, 0, 1), s = ir(t / (e * wm), 0, 1);
  return {
    pool: {
      scale: e * (_m + vm * s),
      opacity: Math.min(bm, i * 1.8 * (1 - 0.6 * s))
    },
    halo: { scale: e * xm, opacity: Math.min(Mm, i * 1.4) },
    light: { intensity: i * 2.2, distance: e * ym }
  };
}
const Am = 700, Tm = 0.68, Cm = 1.25;
function Lm(c, e, t = 100) {
  if (!(c > 0) || !(e > 0) || !(t > 0))
    return t || 100;
  const n = Math.min(c, e), i = Math.min(Cm, Math.max(Tm, n / Am));
  return Math.round(t * i);
}
function Rm(c, e) {
  return Math.abs((Number(c) || 0) - (Number(e) || 0)) >= 2;
}
class Dm extends Qo {
  constructor() {
    super();
    const e = new ri();
    e.deleteAttribute("uv");
    const t = new cr({ side: 1 }), n = new cr(), i = new sa(16777215, 5, 28, 2);
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
  const e = new us();
  return e.color.setScalar(c), e;
}
const Po = { coin: 6, metal: 12, plastic: 15, wood: 12 }, Fm = { felt: 7, wood_table: 7, wood_tray: 7, metal: 9 }, Pm = ["theme_colorset", "theme_texture", "theme_material", "theme_customColorset"], Im = {
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
  throw_spread: ma,
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
class Bm {
  constructor(e, t = {}) {
    this.initialized = !1, this.container = document.querySelector(e), this.dimensions = new we(this.container.clientWidth, this.container.clientHeight), this.adaptive_timestep = !1, this.last_time = 0, this.running = !1, this.rolling = !1, this.threadid, this.display = {
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
    }, this.scene = new Qo(), this.world = new Kp(), this.dice_body_material = new Tn(), this.sounds_table = {}, this.sounds_dice = [], this.lastSoundType = "", this.lastSoundStep = 0, this.lastSound = 0, this.iteration, this.renderer, this.barrier, this.camera, this.light, this.light_amb, this.desk, this.box_body = {}, this.bodies = [], this.meshes = [], this.diceList = [], this.notationVectors = null, this.dieIndex = 0, this.soundDelay = 10, this.animstate = "", this.selector = {
      animate: !0,
      rotate: !0,
      intersected: null,
      dice: []
    }, Object.assign(this, Im, t), this.DiceColors = new um({ assetPath: this.assetPath, assetUrl: this.assetUrl }), this.DiceFactory = new as({
      baseScale: this.baseScale,
      shine: this.shine,
      label_glow: this.label_glow
    }), this.DiceFactory.setBumpMapping(!0), this.surface = dm[this.theme_surface].surface;
  }
  enableShadows() {
    this.shadows = !0, this.renderer && (this.renderer.shadowMap.enabled = this.shadows), this.light && (this.light.castShadow = this.shadows), this.desk && (this.desk.receiveShadow = this.shadows);
  }
  disableShadows() {
    this.shadows = !1, this.renderer && (this.renderer.shadowMap.enabled = this.shadows), this.light && (this.light.castShadow = this.shadows), this.desk && (this.desk.receiveShadow = this.shadows);
  }
  async initialize() {
    if (this.renderer = new Jo({ antialias: !0, alpha: !0 }), this.container.appendChild(this.renderer.domElement), this.renderer.shadowMap.enabled = this.shadows, this.renderer.shadowMap.type = 2, this.renderer.setClearColor(0, 0), this.scene.onBeforeRender = () => this.updateDieLights(), this.shine > 0) {
      const e = new or(this.renderer);
      this.scene.environment = e.fromScene(new Dm(), 0.04).texture, e.dispose();
    }
    this.setDimensions(this.dimensions), this.world.gravity.set(0, 0, -9.8 * this.gravity_multiplier), this.world.broadphase = new oa(), this.world.solver.iterations = 14, this.world.allowSleep = !0, this.makeWorldBox(), this.resizeWorld(), await this.loadTheme({
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
    this.world.addContactMaterial(new An(e, this.dice_body_material, { mass: 0, friction: 0.6, restitution: 0.5 })), this.world.addContactMaterial(new An(t, this.dice_body_material, { mass: 0, friction: 0.6, restitution: this.wall_bounce })), this.world.addContactMaterial(new An(this.dice_body_material, this.dice_body_material, { mass: 0, friction: 0.6, restitution: 0.5 })), this.box_body.desk = new ie({ allowSleep: !1, mass: 0, shape: new _i(), material: e }), this.world.addBody(this.box_body.desk), this.box_body.topWall = new ie({ allowSleep: !1, mass: 0, shape: new _i(), material: t }), this.box_body.topWall.quaternion.setFromAxisAngle(new b(1, 0, 0), Math.PI / 2), this.box_body.topWall.position.set(0, this.display.containerHeight * 0.93, 0), this.world.addBody(this.box_body.topWall), this.box_body.bottomWall = new ie({ allowSleep: !1, mass: 0, shape: new _i(), material: t }), this.box_body.bottomWall.quaternion.setFromAxisAngle(new b(1, 0, 0), -Math.PI / 2), this.box_body.bottomWall.position.set(0, -this.display.containerHeight * 0.93, 0), this.world.addBody(this.box_body.bottomWall), this.box_body.leftWall = new ie({ allowSleep: !1, mass: 0, shape: new _i(), material: t }), this.box_body.leftWall.quaternion.setFromAxisAngle(new b(0, 1, 0), -Math.PI / 2), this.box_body.leftWall.position.set(this.display.containerWidth * 0.93, 0, 0), this.world.addBody(this.box_body.leftWall), this.box_body.rightWall = new ie({ allowSleep: !1, mass: 0, shape: new _i(), material: t }), this.box_body.rightWall.quaternion.setFromAxisAngle(new b(0, 1, 0), Math.PI / 2), this.box_body.rightWall.position.set(-this.display.containerWidth * 0.93, 0, 0), this.world.addBody(this.box_body.rightWall);
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
    this.sound_dieMaterial = this.soundMaterial(), await this.loadSoundSet(this.sounds_table, this.surface, Fm[this.surface], (e) => `sounds/surfaces/surface_${this.surface}${e}.mp3`), await this.loadSoundSet(this.sounds_dice, "coin", Po.coin, (e) => `sounds/dicehit/dicehit_coin${e}.mp3`), await this.loadSoundSet(this.sounds_dice, this.sound_dieMaterial, Po[this.sound_dieMaterial], (e) => `sounds/dicehit/dicehit_${this.sound_dieMaterial}${e}.mp3`);
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
    const t = Pm.some((n) => n in e);
    "theme_colorset" in e && !("theme_customColorset" in e) && (e = { ...e, theme_customColorset: null }), Object.assign(this, e), "gravity_multiplier" in e && this.world && this.world.gravity.set(0, 0, -9.8 * this.gravity_multiplier), "wall_bounce" in e && this.world && this.makeWorldBox(), "shadows" in e && (this.shadows ? this.enableShadows() : this.disableShadows()), "light_intensity" in e && this.light && (this.light.intensity = this.light_intensity), t && await this.loadTheme({
      colorset: this.theme_colorset,
      texture: this.theme_texture,
      material: this.theme_material
    }), this.sounds && (t || "sounds" in e) && this.initialized && await this.loadSounds();
  }
  async fadeAwayDice(e = 650) {
    const t = this.diceList.map((n, i) => i);
    t.length && await this.fadeDice(t, 0, e), this.clearDice();
  }
  celebrateDice(e = [], { color: t = 16763210, duration: n = 1800, sparks: i = 120 } = {}) {
    const s = e.map((u) => this.diceList[u]).filter(Boolean);
    if (!s.length || !this.renderer || typeof requestAnimationFrame != "function")
      return Promise.resolve();
    const o = new Me(t), r = s.flatMap((u) => Array.isArray(u.material) ? u.material : [u.material]).filter((u) => u.emissive), a = r.map((u) => ({ map: u.emissiveMap, intensity: u.emissiveIntensity }));
    r.forEach((u) => {
      u.emissive = o.clone(), u.emissiveIntensity = 0, u.emissiveMap && (u.emissiveMap = null, u.needsUpdate = !0);
    });
    const l = this.display.scale * 5, h = this.sparkTexture(), d = s.map((u) => {
      const m = new Float32Array(i * 3), g = [];
      for (let v = 0; v < i; v++) {
        const w = Math.random() * Math.PI * 2, x = l * (0.45 + Math.random() * 0.75);
        g.push(new I(Math.cos(w) * x, Math.sin(w) * x, l * (0.4 + Math.random() * 0.9))), m.set([u.position.x, u.position.y, u.position.z], v * 3);
      }
      const p = new yt();
      p.setAttribute("position", new Tt(m, 3));
      const f = new na({ color: o, map: h, size: this.display.scale * 1.5, transparent: !0, opacity: 1, depthTest: !1, depthWrite: !1, blending: 2 }), _ = new Md(p, f);
      return this.scene.add(_), { mesh: u, points: _, positions: m, velocities: g, origin: u.position.clone(), scale: u.scale.clone() };
    });
    return new Promise((u) => {
      const m = performance.now(), g = (p) => {
        const f = Math.min(1, (p - m) / n), _ = f * n / 1e3, v = (0.5 + 0.5 * Math.cos(f * Math.PI * 6)) * (1 - f);
        if (r.forEach((w) => {
          w.emissiveIntensity = 0.25 + 0.75 * v;
        }), d.forEach(({ mesh: w, points: x, positions: M, velocities: S, origin: L, scale: y }) => {
          const T = f < 0.2 ? Math.sin(f / 0.2 * Math.PI) * 0.25 : 0;
          w.scale.set(y.x * (1 + T), y.y * (1 + T), y.z * (1 + T)), S.forEach((P, z) => {
            M[z * 3] = L.x + P.x * _, M[z * 3 + 1] = L.y + P.y * _, M[z * 3 + 2] = Math.max(0, L.z + P.z * _ - l * 1.6 * _ * _);
          }), x.geometry.attributes.position.needsUpdate = !0, x.material.opacity = 1 - f * f;
        }), this.renderer.render(this.scene, this.camera), f < 1) {
          requestAnimationFrame(g);
          return;
        }
        d.forEach(({ mesh: w, points: x, scale: M }) => {
          w.scale.copy(M), this.scene.remove(x), x.geometry.dispose(), x.material.dispose();
        }), r.forEach((w, x) => {
          a[x].map ? (w.emissiveMap = a[x].map, w.emissiveIntensity = Math.max(a[x].intensity, 0.6), w.needsUpdate = !0) : w.emissiveIntensity = 0.25;
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
    return n.addColorStop(0, "rgba(255,255,255,1)"), n.addColorStop(0.2, "rgba(255,245,215,0.95)"), n.addColorStop(0.5, "rgba(255,215,120,0.35)"), n.addColorStop(1, "rgba(255,190,80,0)"), t.fillStyle = n, t.fillRect(0, 0, 64, 64), this.sparkMap = new bi(e), this.sparkMap;
  }
  shadowFade(e) {
    var i, s;
    if ((s = (i = e.customDepthMaterial) == null ? void 0 : i.userData) != null && s.shadowFade)
      return e.customDepthMaterial.userData.shadowFade;
    const t = { value: 1 }, n = new Ko({ depthPacking: 3201 });
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
    const i = e.map((h) => this.diceList[h]).filter(Boolean), s = i.flatMap((h) => Array.isArray(h.material) ? h.material : [h.material]), o = s.map((h) => h.opacity), r = i.map((h) => this.shadowFade(h)), a = r.map((h) => h.value);
    s.forEach((h) => {
      h.transparent = !0;
    });
    const l = (h) => {
      const d = h * h * (3 - 2 * h);
      s.forEach((u, m) => {
        u.opacity = o[m] + (t - o[m]) * d;
      }), r.forEach((u, m) => {
        u.value = a[m] + (t - a[m]) * d;
      }), this.renderer && this.renderer.render(this.scene, this.camera);
    };
    return new Promise((h) => {
      const d = () => {
        l(1), i.forEach((g) => {
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
        l(p), requestAnimationFrame(m);
      };
      requestAnimationFrame(m);
    });
  }
  setDimensions(e) {
    const t = (e == null ? void 0 : e.x) || this.container.clientWidth, n = (e == null ? void 0 : e.y) || this.container.clientHeight;
    if (!(t > 0) || !(n > 0))
      return;
    this.display.currentWidth = this.container.clientWidth / 2, this.display.currentHeight = this.container.clientHeight / 2, e ? (this.display.containerWidth = e.x, this.display.containerHeight = e.y) : (this.display.containerWidth = this.display.currentWidth, this.display.containerHeight = this.display.currentHeight), this.display.aspect = Math.min(this.display.currentWidth / this.display.containerWidth, this.display.currentHeight / this.display.containerHeight), this.display.scale = Math.sqrt(this.display.containerWidth * this.display.containerWidth + this.display.containerHeight * this.display.containerHeight) / 13;
    const i = Lm(t, n, this.baseScale);
    switch (this.DiceFactory && Rm(this.DiceFactory.baseScale, i) && this.DiceFactory.updateConfig({ baseScale: i }), this.makeWorldBox(), this.renderer.setSize(this.display.currentWidth * 2, this.display.currentHeight * 2), this.cameraHeight.max = this.display.currentHeight / this.display.aspect / Math.tan(10 * Math.PI / 180), this.cameraHeight.medium = this.cameraHeight.max / 1.5, this.cameraHeight.far = this.cameraHeight.max, this.cameraHeight.close = this.cameraHeight.max / 2, this.camera && this.scene.remove(this.camera), this.camera = new ft(20, this.display.currentWidth / this.display.currentHeight, 1, this.cameraHeight.max * 1.3), this.animstate) {
      case "selector":
        this.camera.position.z = this.selector.dice.length > 9 ? this.cameraHeight.far : this.selector.dice.length < 6 ? this.cameraHeight.close : this.cameraHeight.medium;
        break;
      case "throw":
      case "afterthrow":
      default:
        this.camera.position.z = this.cameraHeight.far;
    }
    this.camera.lookAt(new I(0, 0, 0));
    const s = Math.max(this.display.containerWidth, this.display.containerHeight);
    this.light && this.scene.remove(this.light), this.light_amb && this.scene.remove(this.light_amb), this.light = new Cd(this.color_spotlight, this.light_intensity), this.light.position.set(-s / 2, s / 2, s * 3), this.light.target.position.set(0, 0, 0), this.light.distance = s * 5, this.light.angle = Math.PI / 4, this.light.castShadow = this.shadows, this.light.shadow.camera.near = s / 10, this.light.shadow.camera.far = s * 5, this.light.shadow.camera.fov = 50, this.light.shadow.bias = 1e-3, this.light.shadow.mapSize.width = 1024, this.light.shadow.mapSize.height = 1024, this.scene.add(this.light), this.light_amb = new Ad(16777147, 6776689, this.light_intensity), this.scene.add(this.light_amb), this.desk && this.scene.remove(this.desk);
    let o = new Sd();
    o.opacity = 0.5, this.desk = new ke(new Mi(this.display.containerWidth * 6, this.display.containerHeight * 6, 1, 1), o), this.desk.receiveShadow = this.shadows, this.scene.add(this.desk), this.renderer.render(this.scene, this.camera);
  }
  resizeWorld() {
    const t = fm(() => {
      const n = this.renderer.domElement, i = this.container.clientWidth, s = this.container.clientHeight, o = n.width !== i || n.height !== s;
      return o && this.setDimensions(new we(this.container.clientWidth, this.container.clientHeight)), o;
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
    let s = new Ro(e);
    for (let o in s.set) {
      const r = this.DiceFactory.get(s.set[o].type);
      let a = s.set[o].num, l = s.set[o].op, h = s.set[o].sid, d = s.set[o].gid, u = s.set[o].glvl, m = s.set[o].func, g = s.set[o].args;
      for (let p = 0; p < a; p++) {
        let f = this.vectorRand(t);
        f.x /= i, f.y /= i;
        let _ = {
          x: this.display.containerWidth * (f.x > 0 ? -1 : 1) * this.throw_start,
          y: this.display.containerHeight * (f.y > 0 ? -1 : 1) * this.throw_start,
          z: Math.random() * 200 + 200
        }, v = Math.abs(f.x / f.y);
        v > 1 ? _.y /= v : _.x *= v;
        let w = this.vectorRand(t);
        w.x /= i, w.y /= i;
        let x, M, S;
        r.shape != "d2" ? (x = {
          x: w.x * n,
          y: w.y * n,
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
          x: w.x * n / 10,
          y: w.y * n / 10,
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
    let r = e.geometry.clone(), a = [], l = [], h = 2;
    n.shape == "d10" && (h = 1);
    let d, u = o + h;
    n.shape != "d2" ? (d = s + h, u = o + h) : (d = s + 1, u = o + 1);
    for (var m = 0, g = r.groups.length; m < g; ++m) {
      const _ = r.groups[m].materialIndex;
      if (_ == d) {
        a.push(m);
        continue;
      }
      if (_ == u) {
        l.push(m);
        continue;
      }
    }
    if (!(a.length <= 0 || l.length <= 0)) {
      for (let f = 0, _ = l.length; f < _; f++)
        r.groups[l[f]].materialIndex = d;
      for (let f = 0, _ = a.length; f < _; f++)
        r.groups[a[f]].materialIndex = u;
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
    for (let a = 0, l = o.groups.length; a < l; ++a) {
      const h = o.groups[a];
      let d = h.materialIndex;
      if (d != 0) {
        for (d += s - 1; d > 4; )
          d -= 4;
        for (; d < 1; )
          d += 4;
        h.materialIndex = d + 1;
      }
    }
    s != 0 && (s < 0 && (s += 4), (Array.isArray(e.material) ? e.material : e.material ? [e.material] : []).forEach((l) => {
      var h;
      return (h = l == null ? void 0 : l.dispose) == null ? void 0 : h.call(l);
    }), e.material = this.DiceFactory.createMaterials(n, 0, 0, !1, s)), ((r = e.userData) == null ? void 0 : r.clonedGeometry) && e.geometry && e.geometry.dispose(), e.geometry = o, e.userData = { ...e.userData || {}, clonedGeometry: !0 };
  }
  spawnDice(e, t = !1) {
    var a, l, h;
    const { pos: n, axis: i, angle: s, velocity: o } = e;
    let r;
    if (t)
      r = t, r.stopped = 0, this.world.removeBody(r.body);
    else {
      const d = this.diceList.length, u = (a = this.dieLooks) == null ? void 0 : a[d];
      if (u && this.DiceFactory.applyColorSet(u), r = this.DiceFactory.create(e.type, this.colorData, (h = (l = this.dieLabels) == null ? void 0 : l[d]) != null ? h : null), u && this.DiceFactory.applyColorSet(this.colorData), !r)
        return;
      r.notation = e, r.result = [], r.stopped = 0, r.castShadow = this.shadows, this.scene.add(r), this.diceList.push(r), this.addDieLight(r, u != null ? u : this.colorData);
    }
    r.body = new ie({ allowSleep: !0, sleepSpeedLimit: 75, sleepTimeLimit: 0.9, mass: r.mass, shape: r.geometry.cannon_shape, material: this.dice_body_material }), r.body.type = ie.DYNAMIC, r.body.position.set(n.x, n.y, n.z), r.body.quaternion.setFromAxisAngle(new b(i.x, i.y, i.z), i.a * Math.PI * 2), r.body.angularVelocity.set(s.x, s.y, s.z), r.body.velocity.set(o.x, o.y, o.z), r.body.linearDamping = 0.1, r.body.angularDamping = 0.1, r.body.diceShape = r.shape, r.body.sleepState = 0, r.body.addEventListener("collide", this.eventCollide.bind(this)), this.world.addBody(r.body);
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
    this.running == e && ((o, r, a, l, h) => {
      !a && i < this.framerate ? setTimeout(() => {
        requestAnimationFrame(() => {
          o.call(this, r, l, h);
        });
      }, (this.framerate - i) * 1e3) : requestAnimationFrame(() => {
        o.call(this, r, l, h);
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
    const { vector: t, dist: n, boost: i } = gm({
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
    return i.addColorStop(0, "rgba(255,255,255,1)"), i.addColorStop(0.3, "rgba(255,255,255,0.55)"), i.addColorStop(0.65, "rgba(255,255,255,0.15)"), i.addColorStop(1, "rgba(255,255,255,0)"), n.fillStyle = i, n.fillRect(0, 0, e, e), this.glowTextureCache = new bi(t), this.glowTextureCache;
  }
  addDieLight(e, t) {
    var d;
    const { level: n, color: i } = Sm(t);
    if (!(n > 0) || !this.scene)
      return;
    e.geometry.boundingSphere || e.geometry.computeBoundingSphere();
    const s = ((d = e.geometry.boundingSphere) == null ? void 0 : d.radius) || 1, o = new Me(i), r = { map: this.glowTexture(), color: o, transparent: !0, opacity: 0, depthWrite: !1 }, a = new ke(new Mi(1, 1), new us(r)), l = new bd(new ea(r)), h = new sa(o, 0, s * 12, 2);
    this.scene.add(a, l, h), e.userData.dieLight = { level: n, radius: s, pool: a, halo: l, light: h };
  }
  updateDieLights() {
    var e, t;
    for (const n of this.diceList) {
      const i = (e = n.userData) == null ? void 0 : e.dieLight;
      if (!i)
        continue;
      const s = Array.isArray(n.material) ? n.material[0] : n.material, o = n.visible === !1 ? 0 : (t = s == null ? void 0 : s.opacity) != null ? t : 1, { x: r, y: a, z: l } = n.position, h = Em({ level: i.level, radius: i.radius, height: Math.max(0, l - i.radius), opacity: o });
      i.pool.position.set(r, a, 0.5), i.pool.scale.set(h.pool.scale, h.pool.scale, 1), i.pool.material.opacity = h.pool.opacity, i.halo.position.set(r, a, Math.max(0.5, l - i.radius * 0.9)), i.halo.scale.set(h.halo.scale, h.halo.scale, 1), i.halo.material.opacity = h.halo.opacity, i.light.position.set(r, a, l), i.light.intensity = h.light.intensity, i.light.distance = h.light.distance;
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
      this.removeDieLight(e), this.scene.remove(e), e.body && this.world.removeBody(e.body), Do(e);
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
        const h = {
          num: o.num,
          type: o.type,
          sides: parseInt(o.type.substring(1)),
          rolls: l,
          total: a
        };
        return i += a, h;
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
    this.dieLooks = [], this.dieLabels = [], i.forEach((r, a) => {
      var l, h;
      this.dieLooks[n + a] = r, this.dieLabels[n + a] = (h = (l = t[a]) == null ? void 0 : l.labels) != null ? h : null;
    });
    let s = this.startClickThrow(e), o = [];
    for (let r = 0, a = s.vectors.length; r < a; ++r)
      this.spawnDice(s.vectors[r]);
    this.simulateThrow(), this.steps = 0, this.iteration = 0;
    for (let r = 0, a = s.vectors.length; r < a; ++r) {
      const l = n + r;
      !this.diceList[l] || (this.spawnDice(s.vectors[r], this.diceList[l]), o.push(l));
    }
    if (s.result && s.result.length > 0)
      for (let r = 0; r < s.result.length; r++) {
        const a = n + r;
        let l = this.diceList[a];
        !l || l.getLastValue().value != s.result[r] && this.swapDiceFace(l, s.result[r]);
      }
    return this.notationVectors = Ro.mergeNotation(this.notationVectors, s), new Promise((r, a) => {
      const l = () => {
        const h = o.map((u) => this.getDiceResults(u));
        this.onAddDiceComplete(h);
        const d = new CustomEvent("addDiceComplete", { detail: h });
        document.dispatchEvent(d), r(h);
      };
      this.rolling = !0, this.running = Date.now(), this.last_time = 0, this.animateThrow(this.running, l);
    });
  }
  async remove(e) {
    return new Promise((t, n) => {
      const i = [];
      e.forEach((o) => {
        const r = this.diceList[o];
        r.body && this.world.removeBody(r.body), this.removeDieLight(r), this.scene.remove(r), r.storeRolledValue("remove"), i.push(this.getDiceResults(o)), Do(r);
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
  Bm as default
};
