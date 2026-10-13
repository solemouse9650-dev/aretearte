import {
  Component,
  FirebaseError,
  LogLevel,
  Logger,
  SDK_VERSION,
  _getProvider,
  _isFirebaseServerApp,
  _registerComponent,
  _removeServiceInstance,
  createMockUserToken,
  deepEqual,
  getApp,
  getDefaultEmulatorHostnameAndPort,
  getModularInstance,
  isCloudWorkstation,
  pingServer,
  registerVersion
} from "./chunk-VZ4MIDMU.js";

// node_modules/@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var bloom_blob_es2018 = {};
var Integer;
var Md5;
(function() {
  var h2;
  function k2(d2, a2) {
    function c2() {
    }
    c2.prototype = a2.prototype;
    d2.F = a2.prototype;
    d2.prototype = new c2();
    d2.prototype.constructor = d2;
    d2.D = function(f2, e, g2) {
      for (var b2 = Array(arguments.length - 2), r2 = 2; r2 < arguments.length; r2++) b2[r2 - 2] = arguments[r2];
      return a2.prototype[e].apply(f2, b2);
    };
  }
  function l2() {
    this.blockSize = -1;
  }
  function m2() {
    this.blockSize = -1;
    this.blockSize = 64;
    this.g = Array(4);
    this.C = Array(this.blockSize);
    this.o = this.h = 0;
    this.u();
  }
  k2(m2, l2);
  m2.prototype.u = function() {
    this.g[0] = 1732584193;
    this.g[1] = 4023233417;
    this.g[2] = 2562383102;
    this.g[3] = 271733878;
    this.o = this.h = 0;
  };
  function n2(d2, a2, c2) {
    c2 || (c2 = 0);
    const f2 = Array(16);
    if (typeof a2 === "string") for (var e = 0; e < 16; ++e) f2[e] = a2.charCodeAt(c2++) | a2.charCodeAt(c2++) << 8 | a2.charCodeAt(c2++) << 16 | a2.charCodeAt(c2++) << 24;
    else for (e = 0; e < 16; ++e) f2[e] = a2[c2++] | a2[c2++] << 8 | a2[c2++] << 16 | a2[c2++] << 24;
    a2 = d2.g[0];
    c2 = d2.g[1];
    e = d2.g[2];
    let g2 = d2.g[3], b2;
    b2 = a2 + (g2 ^ c2 & (e ^ g2)) + f2[0] + 3614090360 & 4294967295;
    a2 = c2 + (b2 << 7 & 4294967295 | b2 >>> 25);
    b2 = g2 + (e ^ a2 & (c2 ^ e)) + f2[1] + 3905402710 & 4294967295;
    g2 = a2 + (b2 << 12 & 4294967295 | b2 >>> 20);
    b2 = e + (c2 ^ g2 & (a2 ^ c2)) + f2[2] + 606105819 & 4294967295;
    e = g2 + (b2 << 17 & 4294967295 | b2 >>> 15);
    b2 = c2 + (a2 ^ e & (g2 ^ a2)) + f2[3] + 3250441966 & 4294967295;
    c2 = e + (b2 << 22 & 4294967295 | b2 >>> 10);
    b2 = a2 + (g2 ^ c2 & (e ^ g2)) + f2[4] + 4118548399 & 4294967295;
    a2 = c2 + (b2 << 7 & 4294967295 | b2 >>> 25);
    b2 = g2 + (e ^ a2 & (c2 ^ e)) + f2[5] + 1200080426 & 4294967295;
    g2 = a2 + (b2 << 12 & 4294967295 | b2 >>> 20);
    b2 = e + (c2 ^ g2 & (a2 ^ c2)) + f2[6] + 2821735955 & 4294967295;
    e = g2 + (b2 << 17 & 4294967295 | b2 >>> 15);
    b2 = c2 + (a2 ^ e & (g2 ^ a2)) + f2[7] + 4249261313 & 4294967295;
    c2 = e + (b2 << 22 & 4294967295 | b2 >>> 10);
    b2 = a2 + (g2 ^ c2 & (e ^ g2)) + f2[8] + 1770035416 & 4294967295;
    a2 = c2 + (b2 << 7 & 4294967295 | b2 >>> 25);
    b2 = g2 + (e ^ a2 & (c2 ^ e)) + f2[9] + 2336552879 & 4294967295;
    g2 = a2 + (b2 << 12 & 4294967295 | b2 >>> 20);
    b2 = e + (c2 ^ g2 & (a2 ^ c2)) + f2[10] + 4294925233 & 4294967295;
    e = g2 + (b2 << 17 & 4294967295 | b2 >>> 15);
    b2 = c2 + (a2 ^ e & (g2 ^ a2)) + f2[11] + 2304563134 & 4294967295;
    c2 = e + (b2 << 22 & 4294967295 | b2 >>> 10);
    b2 = a2 + (g2 ^ c2 & (e ^ g2)) + f2[12] + 1804603682 & 4294967295;
    a2 = c2 + (b2 << 7 & 4294967295 | b2 >>> 25);
    b2 = g2 + (e ^ a2 & (c2 ^ e)) + f2[13] + 4254626195 & 4294967295;
    g2 = a2 + (b2 << 12 & 4294967295 | b2 >>> 20);
    b2 = e + (c2 ^ g2 & (a2 ^ c2)) + f2[14] + 2792965006 & 4294967295;
    e = g2 + (b2 << 17 & 4294967295 | b2 >>> 15);
    b2 = c2 + (a2 ^ e & (g2 ^ a2)) + f2[15] + 1236535329 & 4294967295;
    c2 = e + (b2 << 22 & 4294967295 | b2 >>> 10);
    b2 = a2 + (e ^ g2 & (c2 ^ e)) + f2[1] + 4129170786 & 4294967295;
    a2 = c2 + (b2 << 5 & 4294967295 | b2 >>> 27);
    b2 = g2 + (c2 ^ e & (a2 ^ c2)) + f2[6] + 3225465664 & 4294967295;
    g2 = a2 + (b2 << 9 & 4294967295 | b2 >>> 23);
    b2 = e + (a2 ^ c2 & (g2 ^ a2)) + f2[11] + 643717713 & 4294967295;
    e = g2 + (b2 << 14 & 4294967295 | b2 >>> 18);
    b2 = c2 + (g2 ^ a2 & (e ^ g2)) + f2[0] + 3921069994 & 4294967295;
    c2 = e + (b2 << 20 & 4294967295 | b2 >>> 12);
    b2 = a2 + (e ^ g2 & (c2 ^ e)) + f2[5] + 3593408605 & 4294967295;
    a2 = c2 + (b2 << 5 & 4294967295 | b2 >>> 27);
    b2 = g2 + (c2 ^ e & (a2 ^ c2)) + f2[10] + 38016083 & 4294967295;
    g2 = a2 + (b2 << 9 & 4294967295 | b2 >>> 23);
    b2 = e + (a2 ^ c2 & (g2 ^ a2)) + f2[15] + 3634488961 & 4294967295;
    e = g2 + (b2 << 14 & 4294967295 | b2 >>> 18);
    b2 = c2 + (g2 ^ a2 & (e ^ g2)) + f2[4] + 3889429448 & 4294967295;
    c2 = e + (b2 << 20 & 4294967295 | b2 >>> 12);
    b2 = a2 + (e ^ g2 & (c2 ^ e)) + f2[9] + 568446438 & 4294967295;
    a2 = c2 + (b2 << 5 & 4294967295 | b2 >>> 27);
    b2 = g2 + (c2 ^ e & (a2 ^ c2)) + f2[14] + 3275163606 & 4294967295;
    g2 = a2 + (b2 << 9 & 4294967295 | b2 >>> 23);
    b2 = e + (a2 ^ c2 & (g2 ^ a2)) + f2[3] + 4107603335 & 4294967295;
    e = g2 + (b2 << 14 & 4294967295 | b2 >>> 18);
    b2 = c2 + (g2 ^ a2 & (e ^ g2)) + f2[8] + 1163531501 & 4294967295;
    c2 = e + (b2 << 20 & 4294967295 | b2 >>> 12);
    b2 = a2 + (e ^ g2 & (c2 ^ e)) + f2[13] + 2850285829 & 4294967295;
    a2 = c2 + (b2 << 5 & 4294967295 | b2 >>> 27);
    b2 = g2 + (c2 ^ e & (a2 ^ c2)) + f2[2] + 4243563512 & 4294967295;
    g2 = a2 + (b2 << 9 & 4294967295 | b2 >>> 23);
    b2 = e + (a2 ^ c2 & (g2 ^ a2)) + f2[7] + 1735328473 & 4294967295;
    e = g2 + (b2 << 14 & 4294967295 | b2 >>> 18);
    b2 = c2 + (g2 ^ a2 & (e ^ g2)) + f2[12] + 2368359562 & 4294967295;
    c2 = e + (b2 << 20 & 4294967295 | b2 >>> 12);
    b2 = a2 + (c2 ^ e ^ g2) + f2[5] + 4294588738 & 4294967295;
    a2 = c2 + (b2 << 4 & 4294967295 | b2 >>> 28);
    b2 = g2 + (a2 ^ c2 ^ e) + f2[8] + 2272392833 & 4294967295;
    g2 = a2 + (b2 << 11 & 4294967295 | b2 >>> 21);
    b2 = e + (g2 ^ a2 ^ c2) + f2[11] + 1839030562 & 4294967295;
    e = g2 + (b2 << 16 & 4294967295 | b2 >>> 16);
    b2 = c2 + (e ^ g2 ^ a2) + f2[14] + 4259657740 & 4294967295;
    c2 = e + (b2 << 23 & 4294967295 | b2 >>> 9);
    b2 = a2 + (c2 ^ e ^ g2) + f2[1] + 2763975236 & 4294967295;
    a2 = c2 + (b2 << 4 & 4294967295 | b2 >>> 28);
    b2 = g2 + (a2 ^ c2 ^ e) + f2[4] + 1272893353 & 4294967295;
    g2 = a2 + (b2 << 11 & 4294967295 | b2 >>> 21);
    b2 = e + (g2 ^ a2 ^ c2) + f2[7] + 4139469664 & 4294967295;
    e = g2 + (b2 << 16 & 4294967295 | b2 >>> 16);
    b2 = c2 + (e ^ g2 ^ a2) + f2[10] + 3200236656 & 4294967295;
    c2 = e + (b2 << 23 & 4294967295 | b2 >>> 9);
    b2 = a2 + (c2 ^ e ^ g2) + f2[13] + 681279174 & 4294967295;
    a2 = c2 + (b2 << 4 & 4294967295 | b2 >>> 28);
    b2 = g2 + (a2 ^ c2 ^ e) + f2[0] + 3936430074 & 4294967295;
    g2 = a2 + (b2 << 11 & 4294967295 | b2 >>> 21);
    b2 = e + (g2 ^ a2 ^ c2) + f2[3] + 3572445317 & 4294967295;
    e = g2 + (b2 << 16 & 4294967295 | b2 >>> 16);
    b2 = c2 + (e ^ g2 ^ a2) + f2[6] + 76029189 & 4294967295;
    c2 = e + (b2 << 23 & 4294967295 | b2 >>> 9);
    b2 = a2 + (c2 ^ e ^ g2) + f2[9] + 3654602809 & 4294967295;
    a2 = c2 + (b2 << 4 & 4294967295 | b2 >>> 28);
    b2 = g2 + (a2 ^ c2 ^ e) + f2[12] + 3873151461 & 4294967295;
    g2 = a2 + (b2 << 11 & 4294967295 | b2 >>> 21);
    b2 = e + (g2 ^ a2 ^ c2) + f2[15] + 530742520 & 4294967295;
    e = g2 + (b2 << 16 & 4294967295 | b2 >>> 16);
    b2 = c2 + (e ^ g2 ^ a2) + f2[2] + 3299628645 & 4294967295;
    c2 = e + (b2 << 23 & 4294967295 | b2 >>> 9);
    b2 = a2 + (e ^ (c2 | ~g2)) + f2[0] + 4096336452 & 4294967295;
    a2 = c2 + (b2 << 6 & 4294967295 | b2 >>> 26);
    b2 = g2 + (c2 ^ (a2 | ~e)) + f2[7] + 1126891415 & 4294967295;
    g2 = a2 + (b2 << 10 & 4294967295 | b2 >>> 22);
    b2 = e + (a2 ^ (g2 | ~c2)) + f2[14] + 2878612391 & 4294967295;
    e = g2 + (b2 << 15 & 4294967295 | b2 >>> 17);
    b2 = c2 + (g2 ^ (e | ~a2)) + f2[5] + 4237533241 & 4294967295;
    c2 = e + (b2 << 21 & 4294967295 | b2 >>> 11);
    b2 = a2 + (e ^ (c2 | ~g2)) + f2[12] + 1700485571 & 4294967295;
    a2 = c2 + (b2 << 6 & 4294967295 | b2 >>> 26);
    b2 = g2 + (c2 ^ (a2 | ~e)) + f2[3] + 2399980690 & 4294967295;
    g2 = a2 + (b2 << 10 & 4294967295 | b2 >>> 22);
    b2 = e + (a2 ^ (g2 | ~c2)) + f2[10] + 4293915773 & 4294967295;
    e = g2 + (b2 << 15 & 4294967295 | b2 >>> 17);
    b2 = c2 + (g2 ^ (e | ~a2)) + f2[1] + 2240044497 & 4294967295;
    c2 = e + (b2 << 21 & 4294967295 | b2 >>> 11);
    b2 = a2 + (e ^ (c2 | ~g2)) + f2[8] + 1873313359 & 4294967295;
    a2 = c2 + (b2 << 6 & 4294967295 | b2 >>> 26);
    b2 = g2 + (c2 ^ (a2 | ~e)) + f2[15] + 4264355552 & 4294967295;
    g2 = a2 + (b2 << 10 & 4294967295 | b2 >>> 22);
    b2 = e + (a2 ^ (g2 | ~c2)) + f2[6] + 2734768916 & 4294967295;
    e = g2 + (b2 << 15 & 4294967295 | b2 >>> 17);
    b2 = c2 + (g2 ^ (e | ~a2)) + f2[13] + 1309151649 & 4294967295;
    c2 = e + (b2 << 21 & 4294967295 | b2 >>> 11);
    b2 = a2 + (e ^ (c2 | ~g2)) + f2[4] + 4149444226 & 4294967295;
    a2 = c2 + (b2 << 6 & 4294967295 | b2 >>> 26);
    b2 = g2 + (c2 ^ (a2 | ~e)) + f2[11] + 3174756917 & 4294967295;
    g2 = a2 + (b2 << 10 & 4294967295 | b2 >>> 22);
    b2 = e + (a2 ^ (g2 | ~c2)) + f2[2] + 718787259 & 4294967295;
    e = g2 + (b2 << 15 & 4294967295 | b2 >>> 17);
    b2 = c2 + (g2 ^ (e | ~a2)) + f2[9] + 3951481745 & 4294967295;
    d2.g[0] = d2.g[0] + a2 & 4294967295;
    d2.g[1] = d2.g[1] + (e + (b2 << 21 & 4294967295 | b2 >>> 11)) & 4294967295;
    d2.g[2] = d2.g[2] + e & 4294967295;
    d2.g[3] = d2.g[3] + g2 & 4294967295;
  }
  m2.prototype.v = function(d2, a2) {
    a2 === void 0 && (a2 = d2.length);
    const c2 = a2 - this.blockSize, f2 = this.C;
    let e = this.h, g2 = 0;
    for (; g2 < a2; ) {
      if (e == 0) for (; g2 <= c2; ) n2(this, d2, g2), g2 += this.blockSize;
      if (typeof d2 === "string") for (; g2 < a2; ) {
        if (f2[e++] = d2.charCodeAt(g2++), e == this.blockSize) {
          n2(this, f2);
          e = 0;
          break;
        }
      }
      else for (; g2 < a2; ) if (f2[e++] = d2[g2++], e == this.blockSize) {
        n2(this, f2);
        e = 0;
        break;
      }
    }
    this.h = e;
    this.o += a2;
  };
  m2.prototype.A = function() {
    var d2 = Array((this.h < 56 ? this.blockSize : this.blockSize * 2) - this.h);
    d2[0] = 128;
    for (var a2 = 1; a2 < d2.length - 8; ++a2) d2[a2] = 0;
    a2 = this.o * 8;
    for (var c2 = d2.length - 8; c2 < d2.length; ++c2) d2[c2] = a2 & 255, a2 /= 256;
    this.v(d2);
    d2 = Array(16);
    a2 = 0;
    for (c2 = 0; c2 < 4; ++c2) for (let f2 = 0; f2 < 32; f2 += 8) d2[a2++] = this.g[c2] >>> f2 & 255;
    return d2;
  };
  function p2(d2, a2) {
    var c2 = q2;
    return Object.prototype.hasOwnProperty.call(c2, d2) ? c2[d2] : c2[d2] = a2(d2);
  }
  function t(d2, a2) {
    this.h = a2;
    const c2 = [];
    let f2 = true;
    for (let e = d2.length - 1; e >= 0; e--) {
      const g2 = d2[e] | 0;
      f2 && g2 == a2 || (c2[e] = g2, f2 = false);
    }
    this.g = c2;
  }
  var q2 = {};
  function u2(d2) {
    return -128 <= d2 && d2 < 128 ? p2(d2, function(a2) {
      return new t([a2 | 0], a2 < 0 ? -1 : 0);
    }) : new t([d2 | 0], d2 < 0 ? -1 : 0);
  }
  function v2(d2) {
    if (isNaN(d2) || !isFinite(d2)) return w2;
    if (d2 < 0) return x2(v2(-d2));
    const a2 = [];
    let c2 = 1;
    for (let f2 = 0; d2 >= c2; f2++) a2[f2] = d2 / c2 | 0, c2 *= 4294967296;
    return new t(a2, 0);
  }
  function y2(d2, a2) {
    if (d2.length == 0) throw Error("number format error: empty string");
    a2 = a2 || 10;
    if (a2 < 2 || 36 < a2) throw Error("radix out of range: " + a2);
    if (d2.charAt(0) == "-") return x2(y2(d2.substring(1), a2));
    if (d2.indexOf("-") >= 0) throw Error('number format error: interior "-" character');
    const c2 = v2(Math.pow(a2, 8));
    let f2 = w2;
    for (let g2 = 0; g2 < d2.length; g2 += 8) {
      var e = Math.min(8, d2.length - g2);
      const b2 = parseInt(d2.substring(g2, g2 + e), a2);
      e < 8 ? (e = v2(Math.pow(a2, e)), f2 = f2.j(e).add(v2(b2))) : (f2 = f2.j(c2), f2 = f2.add(v2(b2)));
    }
    return f2;
  }
  var w2 = u2(0), z2 = u2(1), A2 = u2(16777216);
  h2 = t.prototype;
  h2.m = function() {
    if (B(this)) return -x2(this).m();
    let d2 = 0, a2 = 1;
    for (let c2 = 0; c2 < this.g.length; c2++) {
      const f2 = this.i(c2);
      d2 += (f2 >= 0 ? f2 : 4294967296 + f2) * a2;
      a2 *= 4294967296;
    }
    return d2;
  };
  h2.toString = function(d2) {
    d2 = d2 || 10;
    if (d2 < 2 || 36 < d2) throw Error("radix out of range: " + d2);
    if (C2(this)) return "0";
    if (B(this)) return "-" + x2(this).toString(d2);
    const a2 = v2(Math.pow(d2, 6));
    var c2 = this;
    let f2 = "";
    for (; ; ) {
      const e = D2(c2, a2).g;
      c2 = F2(c2, e.j(a2));
      let g2 = ((c2.g.length > 0 ? c2.g[0] : c2.h) >>> 0).toString(d2);
      c2 = e;
      if (C2(c2)) return g2 + f2;
      for (; g2.length < 6; ) g2 = "0" + g2;
      f2 = g2 + f2;
    }
  };
  h2.i = function(d2) {
    return d2 < 0 ? 0 : d2 < this.g.length ? this.g[d2] : this.h;
  };
  function C2(d2) {
    if (d2.h != 0) return false;
    for (let a2 = 0; a2 < d2.g.length; a2++) if (d2.g[a2] != 0) return false;
    return true;
  }
  function B(d2) {
    return d2.h == -1;
  }
  h2.l = function(d2) {
    d2 = F2(this, d2);
    return B(d2) ? -1 : C2(d2) ? 0 : 1;
  };
  function x2(d2) {
    const a2 = d2.g.length, c2 = [];
    for (let f2 = 0; f2 < a2; f2++) c2[f2] = ~d2.g[f2];
    return new t(c2, ~d2.h).add(z2);
  }
  h2.abs = function() {
    return B(this) ? x2(this) : this;
  };
  h2.add = function(d2) {
    const a2 = Math.max(this.g.length, d2.g.length), c2 = [];
    let f2 = 0;
    for (let e = 0; e <= a2; e++) {
      let g2 = f2 + (this.i(e) & 65535) + (d2.i(e) & 65535), b2 = (g2 >>> 16) + (this.i(e) >>> 16) + (d2.i(e) >>> 16);
      f2 = b2 >>> 16;
      g2 &= 65535;
      b2 &= 65535;
      c2[e] = b2 << 16 | g2;
    }
    return new t(c2, c2[c2.length - 1] & -2147483648 ? -1 : 0);
  };
  function F2(d2, a2) {
    return d2.add(x2(a2));
  }
  h2.j = function(d2) {
    if (C2(this) || C2(d2)) return w2;
    if (B(this)) return B(d2) ? x2(this).j(x2(d2)) : x2(x2(this).j(d2));
    if (B(d2)) return x2(this.j(x2(d2)));
    if (this.l(A2) < 0 && d2.l(A2) < 0) return v2(this.m() * d2.m());
    const a2 = this.g.length + d2.g.length, c2 = [];
    for (var f2 = 0; f2 < 2 * a2; f2++) c2[f2] = 0;
    for (f2 = 0; f2 < this.g.length; f2++) for (let e = 0; e < d2.g.length; e++) {
      const g2 = this.i(f2) >>> 16, b2 = this.i(f2) & 65535, r2 = d2.i(e) >>> 16, E = d2.i(e) & 65535;
      c2[2 * f2 + 2 * e] += b2 * E;
      G2(c2, 2 * f2 + 2 * e);
      c2[2 * f2 + 2 * e + 1] += g2 * E;
      G2(c2, 2 * f2 + 2 * e + 1);
      c2[2 * f2 + 2 * e + 1] += b2 * r2;
      G2(c2, 2 * f2 + 2 * e + 1);
      c2[2 * f2 + 2 * e + 2] += g2 * r2;
      G2(c2, 2 * f2 + 2 * e + 2);
    }
    for (d2 = 0; d2 < a2; d2++) c2[d2] = c2[2 * d2 + 1] << 16 | c2[2 * d2];
    for (d2 = a2; d2 < 2 * a2; d2++) c2[d2] = 0;
    return new t(c2, 0);
  };
  function G2(d2, a2) {
    for (; (d2[a2] & 65535) != d2[a2]; ) d2[a2 + 1] += d2[a2] >>> 16, d2[a2] &= 65535, a2++;
  }
  function H2(d2, a2) {
    this.g = d2;
    this.h = a2;
  }
  function D2(d2, a2) {
    if (C2(a2)) throw Error("division by zero");
    if (C2(d2)) return new H2(w2, w2);
    if (B(d2)) return a2 = D2(x2(d2), a2), new H2(x2(a2.g), x2(a2.h));
    if (B(a2)) return a2 = D2(d2, x2(a2)), new H2(x2(a2.g), a2.h);
    if (d2.g.length > 30) {
      if (B(d2) || B(a2)) throw Error("slowDivide_ only works with positive integers.");
      for (var c2 = z2, f2 = a2; f2.l(d2) <= 0; ) c2 = I(c2), f2 = I(f2);
      var e = J2(c2, 1), g2 = J2(f2, 1);
      f2 = J2(f2, 2);
      for (c2 = J2(c2, 2); !C2(f2); ) {
        var b2 = g2.add(f2);
        b2.l(d2) <= 0 && (e = e.add(c2), g2 = b2);
        f2 = J2(f2, 1);
        c2 = J2(c2, 1);
      }
      a2 = F2(d2, e.j(a2));
      return new H2(e, a2);
    }
    for (e = w2; d2.l(a2) >= 0; ) {
      c2 = Math.max(1, Math.floor(d2.m() / a2.m()));
      f2 = Math.ceil(Math.log(c2) / Math.LN2);
      f2 = f2 <= 48 ? 1 : Math.pow(2, f2 - 48);
      g2 = v2(c2);
      for (b2 = g2.j(a2); B(b2) || b2.l(d2) > 0; ) c2 -= f2, g2 = v2(c2), b2 = g2.j(a2);
      C2(g2) && (g2 = z2);
      e = e.add(g2);
      d2 = F2(d2, b2);
    }
    return new H2(e, d2);
  }
  h2.B = function(d2) {
    return D2(this, d2).h;
  };
  h2.and = function(d2) {
    const a2 = Math.max(this.g.length, d2.g.length), c2 = [];
    for (let f2 = 0; f2 < a2; f2++) c2[f2] = this.i(f2) & d2.i(f2);
    return new t(c2, this.h & d2.h);
  };
  h2.or = function(d2) {
    const a2 = Math.max(this.g.length, d2.g.length), c2 = [];
    for (let f2 = 0; f2 < a2; f2++) c2[f2] = this.i(f2) | d2.i(f2);
    return new t(c2, this.h | d2.h);
  };
  h2.xor = function(d2) {
    const a2 = Math.max(this.g.length, d2.g.length), c2 = [];
    for (let f2 = 0; f2 < a2; f2++) c2[f2] = this.i(f2) ^ d2.i(f2);
    return new t(c2, this.h ^ d2.h);
  };
  function I(d2) {
    const a2 = d2.g.length + 1, c2 = [];
    for (let f2 = 0; f2 < a2; f2++) c2[f2] = d2.i(f2) << 1 | d2.i(f2 - 1) >>> 31;
    return new t(c2, d2.h);
  }
  function J2(d2, a2) {
    const c2 = a2 >> 5;
    a2 %= 32;
    const f2 = d2.g.length - c2, e = [];
    for (let g2 = 0; g2 < f2; g2++) e[g2] = a2 > 0 ? d2.i(g2 + c2) >>> a2 | d2.i(g2 + c2 + 1) << 32 - a2 : d2.i(g2 + c2);
    return new t(e, d2.h);
  }
  m2.prototype.digest = m2.prototype.A;
  m2.prototype.reset = m2.prototype.u;
  m2.prototype.update = m2.prototype.v;
  Md5 = bloom_blob_es2018.Md5 = m2;
  t.prototype.add = t.prototype.add;
  t.prototype.multiply = t.prototype.j;
  t.prototype.modulo = t.prototype.B;
  t.prototype.compare = t.prototype.l;
  t.prototype.toNumber = t.prototype.m;
  t.prototype.toString = t.prototype.toString;
  t.prototype.getBits = t.prototype.i;
  t.fromNumber = v2;
  t.fromString = y2;
  Integer = bloom_blob_es2018.Integer = t;
}).apply(typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});

// node_modules/@firebase/firestore/dist/lite/common-B8fiiKst.esm.js
var User = class {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return null != this.uid;
  }
  /**
   * Returns a key representing this user, suitable for inclusion in a
   * dictionary.
   */
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
};
User.UNAUTHENTICATED = new User(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
User.GOOGLE_CREDENTIALS = new User("google-credentials-uid"), User.FIRST_PARTY = new User("first-party-uid"), User.MOCK_USER = new User("mock-user");
var s = "12.19.0";
function c(e) {
  s = e;
}
var $ = new Logger("@firebase/firestore");
function setLogLevel(e) {
  $.setLogLevel(e);
}
function a(e, ...t) {
  if ($.logLevel <= LogLevel.DEBUG) {
    const r2 = t.map(__PRIVATE_argToString);
    $.debug(`Firestore (${s}): ${e}`, ...r2);
  }
}
function st(e, ...t) {
  if ($.logLevel <= LogLevel.ERROR) {
    const r2 = t.map(__PRIVATE_argToString);
    $.error(`Firestore (${s}): ${e}`, ...r2);
  }
}
function __PRIVATE_logWarn(e, ...t) {
  if ($.logLevel <= LogLevel.WARN) {
    const r2 = t.map(__PRIVATE_argToString);
    $.warn(`Firestore (${s}): ${e}`, ...r2);
  }
}
function __PRIVATE_argToString(e) {
  if ("string" == typeof e) return e;
  try {
    return (function __PRIVATE_formatJSON(e2) {
      return JSON.stringify(e2);
    })(e);
  } catch (t) {
    return e;
  }
}
function z(e, t, r2) {
  let n2 = "Unexpected state";
  "string" == typeof t ? n2 = t : r2 = t, __PRIVATE__fail(e, n2, r2);
}
function __PRIVATE__fail(e, t, r2) {
  let n2 = `FIRESTORE (${s}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;
  if (void 0 !== r2) try {
    n2 += " CONTEXT: " + JSON.stringify(r2);
  } catch (e2) {
    n2 += " CONTEXT: " + r2;
  }
  throw st(n2), new Error(n2);
}
function __PRIVATE_hardAssert(e, t, r2, n2) {
  let i = "Unexpected state";
  "string" == typeof r2 ? i = r2 : n2 = r2, e || __PRIVATE__fail(t, i, n2);
}
function __PRIVATE_debugCast(e, t) {
  return e;
}
var O = {
  // Causes are copied from:
  // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
  /** Not an error; returned on success. */
  OK: "ok",
  /** The operation was cancelled (typically by the caller). */
  CANCELLED: "cancelled",
  /** Unknown error or an error from a different error domain. */
  UNKNOWN: "unknown",
  /**
   * Client specified an invalid argument. Note that this differs from
   * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
   * problematic regardless of the state of the system (e.g., a malformed file
   * name).
   */
  INVALID_ARGUMENT: "invalid-argument",
  /**
   * Deadline expired before operation could complete. For operations that
   * change the state of the system, this error may be returned even if the
   * operation has completed successfully. For example, a successful response
   * from a server could have been delayed long enough for the deadline to
   * expire.
   */
  DEADLINE_EXCEEDED: "deadline-exceeded",
  /** Some requested entity (e.g., file or directory) was not found. */
  NOT_FOUND: "not-found",
  /**
   * Some entity that we attempted to create (e.g., file or directory) already
   * exists.
   */
  ALREADY_EXISTS: "already-exists",
  /**
   * The caller does not have permission to execute the specified operation.
   * PERMISSION_DENIED must not be used for rejections caused by exhausting
   * some resource (use RESOURCE_EXHAUSTED instead for those errors).
   * PERMISSION_DENIED must not be used if the caller cannot be identified
   * (use UNAUTHENTICATED instead for those errors).
   */
  PERMISSION_DENIED: "permission-denied",
  /**
   * The request does not have valid authentication credentials for the
   * operation.
   */
  UNAUTHENTICATED: "unauthenticated",
  /**
   * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
   * entire file system is out of space.
   */
  RESOURCE_EXHAUSTED: "resource-exhausted",
  /**
   * Operation was rejected because the system is not in a state required for
   * the operation's execution. For example, directory to be deleted may be
   * non-empty, an rmdir operation is applied to a non-directory, etc.
   *
   * A litmus test that may help a service implementor in deciding
   * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
   *  (a) Use UNAVAILABLE if the client can retry just the failing call.
   *  (b) Use ABORTED if the client should retry at a higher-level
   *      (e.g., restarting a read-modify-write sequence).
   *  (c) Use FAILED_PRECONDITION if the client should not retry until
   *      the system state has been explicitly fixed. E.g., if an "rmdir"
   *      fails because the directory is non-empty, FAILED_PRECONDITION
   *      should be returned since the client should not retry unless
   *      they have first fixed up the directory by deleting files from it.
   *  (d) Use FAILED_PRECONDITION if the client performs conditional
   *      REST Get/Update/Delete on a resource and the resource on the
   *      server does not match the condition. E.g., conflicting
   *      read-modify-write on the same resource.
   */
  FAILED_PRECONDITION: "failed-precondition",
  /**
   * The operation was aborted, typically due to a concurrency issue like
   * sequencer check failures, transaction aborts, etc.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  ABORTED: "aborted",
  /**
   * Operation was attempted past the valid range. E.g., seeking or reading
   * past end of file.
   *
   * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
   * if the system state changes. For example, a 32-bit file system will
   * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
   * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
   * an offset past the current file size.
   *
   * There is a fair bit of overlap between FAILED_PRECONDITION and
   * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
   * when it applies so that callers who are iterating through a space can
   * easily look for an OUT_OF_RANGE error to detect when they are done.
   */
  OUT_OF_RANGE: "out-of-range",
  /** Operation is not implemented or not supported/enabled in this service. */
  UNIMPLEMENTED: "unimplemented",
  /**
   * Internal errors. Means some invariants expected by underlying System has
   * been broken. If you see one of these errors, Something is very broken.
   */
  INTERNAL: "internal",
  /**
   * The service is currently unavailable. This is a most likely a transient
   * condition and may be corrected by retrying with a backoff.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  UNAVAILABLE: "unavailable",
  /** Unrecoverable data loss or corruption. */
  DATA_LOSS: "data-loss"
};
var k = class extends FirebaseError {
  /** @hideconstructor */
  constructor(e, t) {
    super(e, t), this.code = e, this.message = t, // HACK: We write a toString property directly because Error is not a real
    // class and so inheritance does not work correctly. We could alternatively
    // do the same "back-door inheritance" trick that FirebaseError does.
    this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
};
var __PRIVATE_OAuthToken = class {
  constructor(e, t) {
    this.user = t, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${e}`);
  }
};
var __PRIVATE_EmptyAuthCredentialsProvider = class {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(e, t) {
    e.enqueueRetryable((() => t(User.UNAUTHENTICATED)));
  }
  shutdown() {
  }
};
var __PRIVATE_EmulatorAuthCredentialsProvider = class {
  constructor(e) {
    this.token = e, /**
     * Stores the listener registered with setChangeListener()
     * This isn't actually necessary since the UID never changes, but we use this
     * to verify the listen contract is adhered to in tests.
     */
    this.changeListener = null;
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {
  }
  start(e, t) {
    this.changeListener = t, // Fire with initial user.
    e.enqueueRetryable((() => t(this.token.user)));
  }
  shutdown() {
    this.changeListener = null;
  }
};
var r = class {
  constructor(e) {
    this.auth = null, e.onInit(((e2) => {
      this.auth = e2;
    }));
  }
  getToken() {
    return this.auth ? this.auth.getToken().then(((e) => e ? (__PRIVATE_hardAssert("string" == typeof e.accessToken, 42297, {
      Z: e
    }), new __PRIVATE_OAuthToken(e.accessToken, new User(this.auth.getUid()))) : null)) : Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(e, t) {
  }
  shutdown() {
  }
};
var __PRIVATE_FirstPartyToken = class {
  constructor(e, t, r2) {
    this.ee = e, this.te = t, this.re = r2, this.type = "FirstParty", this.user = User.FIRST_PARTY, this.ne = /* @__PURE__ */ new Map();
  }
  /**
   * Gets an authorization token, using a provided factory function, or return
   * null.
   */
  ie() {
    return this.re ? this.re() : null;
  }
  get headers() {
    this.ne.set("X-Goog-AuthUser", this.ee);
    const e = this.ie();
    return e && this.ne.set("Authorization", e), this.te && this.ne.set("X-Goog-Iam-Authorization-Token", this.te), this.ne;
  }
};
var __PRIVATE_FirstPartyAuthCredentialsProvider = class {
  constructor(e, t, r2) {
    this.ee = e, this.te = t, this.re = r2;
  }
  getToken() {
    return Promise.resolve(new __PRIVATE_FirstPartyToken(this.ee, this.te, this.re));
  }
  start(e, t) {
    e.enqueueRetryable((() => t(User.FIRST_PARTY)));
  }
  shutdown() {
  }
  invalidateToken() {
  }
};
var AppCheckToken = class {
  constructor(e) {
    this.value = e, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
};
var o = class {
  constructor(e, t) {
    this.se = t, this.appCheck = null, this.oe = null, _isFirebaseServerApp(e) && e.settings.appCheckToken && (this.oe = e.settings.appCheckToken), t.onInit(((e2) => {
      this.appCheck = e2;
    }));
  }
  getToken() {
    return this.oe ? Promise.resolve(new AppCheckToken(this.oe)) : this.appCheck ? this.appCheck.getToken().then(((e) => e ? (__PRIVATE_hardAssert("string" == typeof e.token, 3470, {
      tokenResult: e
    }), new AppCheckToken(e.token)) : null)) : Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(e, t) {
  }
  shutdown() {
  }
};
var DatabaseInfo = class {
  /**
   * Constructs a DatabaseInfo using the provided host, databaseId and
   * persistenceKey.
   *
   * @param databaseId - The database to use.
   * @param appId - The Firebase App Id.
   * @param persistenceKey - A unique identifier for this Firestore's local
   * storage (used in conjunction with the databaseId).
   * @param host - The Firestore backend host to connect to.
   * @param ssl - Whether to use SSL when connecting.
   * @param forceLongPolling - Whether to use the forceLongPolling option
   * when using WebChannel as the network transport.
   * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
   * option when using WebChannel as the network transport.
   * @param longPollingOptions - Options that configure long-polling.
   * @param useFetchStreams - Whether to use the Fetch API instead of
   * XMLHTTPRequest
   */
  constructor(e, t, r2, n2, i, s2, o2, a2, u2, _2, c2, l2, h2) {
    this.databaseId = e, this.appId = t, this.persistenceKey = r2, this.host = n2, this.ssl = i, this.forceLongPolling = s2, this.autoDetectLongPolling = o2, this.longPollingOptions = a2, this.useFetchStreams = u2, this.isUsingEmulator = _2, this.apiKey = c2, this._customHeaders = l2, this.grpcFlowControlWindow = h2;
  }
};
var K = "(default)";
var DatabaseId = class _DatabaseId {
  constructor(e, t) {
    this.projectId = e, this.database = t || K;
  }
  static empty() {
    return new _DatabaseId("", "");
  }
  get isDefaultDatabase() {
    return this.database === K;
  }
  isEqual(e) {
    return e instanceof _DatabaseId && e.projectId === this.projectId && e.database === this.database;
  }
};
function h(e, t) {
  if (!Object.prototype.hasOwnProperty.apply(e.options, ["projectId"])) throw new k(O.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
  return new DatabaseId(e.options.projectId, t);
}
function __PRIVATE_randomBytes(e) {
  const t = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto)
  ), r2 = new Uint8Array(e);
  if (t && "function" == typeof t.getRandomValues) t.getRandomValues(r2);
  else
    for (let t2 = 0; t2 < e; t2++) r2[t2] = Math.floor(256 * Math.random());
  return r2;
}
var __PRIVATE_AutoId = class {
  static newId() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = 62 * Math.floor(256 / 62);
    let r2 = "";
    for (; r2.length < 20; ) {
      const n2 = __PRIVATE_randomBytes(40);
      for (let i = 0; i < n2.length; ++i)
        r2.length < 20 && n2[i] < t && (r2 += e.charAt(n2[i] % 62));
    }
    return r2;
  }
};
function __PRIVATE_primitiveComparator(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function __PRIVATE_compareUtf8Strings(e, t) {
  const r2 = Math.min(e.length, t.length);
  for (let n2 = 0; n2 < r2; n2++) {
    const r3 = e.charAt(n2), i = t.charAt(n2);
    if (r3 !== i) return __PRIVATE_isSurrogate(r3) === __PRIVATE_isSurrogate(i) ? __PRIVATE_primitiveComparator(r3, i) : __PRIVATE_isSurrogate(r3) ? 1 : -1;
  }
  return __PRIVATE_primitiveComparator(e.length, t.length);
}
var G = 55296;
var W = 57343;
function __PRIVATE_isSurrogate(e) {
  const t = e.charCodeAt(0);
  return t >= G && t <= W;
}
function __PRIVATE_arrayEquals(e, t, r2) {
  return e.length === t.length && e.every(((e2, n2) => r2(e2, t[n2])));
}
var J = "__name__";
var BasePath = class _BasePath {
  constructor(e, t, r2) {
    void 0 === t ? t = 0 : t > e.length && z(637, {
      offset: t,
      range: e.length
    }), void 0 === r2 ? r2 = e.length - t : r2 > e.length - t && z(1746, {
      length: r2,
      range: e.length - t
    }), this.segments = e, this.offset = t, this.len = r2;
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return 0 === _BasePath.comparator(this, e);
  }
  child(e) {
    const t = this.segments.slice(this.offset, this.limit());
    return e instanceof _BasePath ? e.forEach(((e2) => {
      t.push(e2);
    })) : t.push(e), this.construct(t);
  }
  /** The index of one past the last segment of the path. */
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return e = void 0 === e ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return 0 === this.length;
  }
  isPrefixOf(e) {
    if (e.length < this.length) return false;
    for (let t = 0; t < this.length; t++) if (this.get(t) !== e.get(t)) return false;
    return true;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return false;
    for (let t = 0; t < this.length; t++) if (this.get(t) !== e.get(t)) return false;
    return true;
  }
  forEach(e) {
    for (let t = this.offset, r2 = this.limit(); t < r2; t++) e(this.segments[t]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  /**
   * Compare 2 paths segment by segment, prioritizing numeric IDs
   * (e.g., "__id123__") in numeric ascending order, followed by string
   * segments in lexicographical order.
   */
  static comparator(e, t) {
    const r2 = Math.min(e.length, t.length);
    for (let n2 = 0; n2 < r2; n2++) {
      const r3 = _BasePath.compareSegments(e.get(n2), t.get(n2));
      if (0 !== r3) return r3;
    }
    return __PRIVATE_primitiveComparator(e.length, t.length);
  }
  static compareSegments(e, t) {
    const r2 = _BasePath.isNumericId(e), n2 = _BasePath.isNumericId(t);
    return r2 && !n2 ? -1 : !r2 && n2 ? 1 : r2 && n2 ? _BasePath.extractNumericId(e).compare(_BasePath.extractNumericId(t)) : __PRIVATE_compareUtf8Strings(e, t);
  }
  // Checks if a segment is a numeric ID (starts with "__id" and ends with "__").
  static isNumericId(e) {
    return e.startsWith("__id") && e.endsWith("__");
  }
  static extractNumericId(e) {
    return Integer.fromString(e.substring(4, e.length - 2));
  }
};
var ResourcePath = class _ResourcePath extends BasePath {
  construct(e, t, r2) {
    return new _ResourcePath(e, t, r2);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  toStringWithLeadingSlash() {
    return `/${this.canonicalString()}`;
  }
  /**
   * Returns a string representation of this path
   * where each path segment has been encoded with
   * `encodeURIComponent`.
   */
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  /**
   * Creates a resource path from the given slash-delimited string. If multiple
   * arguments are provided, all components are combined. Leading and trailing
   * slashes from all components are ignored.
   */
  static fromString(...e) {
    const t = [];
    for (const r2 of e) {
      if (r2.indexOf("//") >= 0) throw new k(O.INVALID_ARGUMENT, `Invalid segment (${r2}). Paths must not contain // in them.`);
      t.push(...r2.split("/").filter(((e2) => e2.length > 0)));
    }
    return new _ResourcePath(t);
  }
  static emptyPath() {
    return new _ResourcePath([]);
  }
};
var H = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
var Y = class FieldPath extends BasePath {
  construct(e, t, r2) {
    return new FieldPath(e, t, r2);
  }
  /**
   * Returns true if the string could be used as a segment in a field path
   * without escaping.
   */
  static isValidIdentifier(e) {
    return H.test(e);
  }
  canonicalString() {
    return this.toArray().map(((e) => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), FieldPath.isValidIdentifier(e) || (e = "`" + e + "`"), e))).join(".");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns true if this field references the key of a document.
   */
  isKeyField() {
    return 1 === this.length && this.get(0) === J;
  }
  /**
   * The field designating the key of a document.
   */
  static keyField() {
    return new FieldPath([J]);
  }
  /**
   * Parses a field string from the given server-formatted string.
   *
   * - Splitting the empty string is not allowed (for now at least).
   * - Empty segments within the string (e.g. if there are two consecutive
   *   separators) are not allowed.
   *
   * TODO(b/37244157): we should make this more strict. Right now, it allows
   * non-identifier path components, even if they aren't escaped.
   */
  static fromServerFormat(e) {
    const t = [];
    let r2 = "", n2 = 0;
    const __PRIVATE_addCurrentSegment = () => {
      if (0 === r2.length) throw new k(O.INVALID_ARGUMENT, `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      t.push(r2), r2 = "";
    };
    let i = false;
    for (; n2 < e.length; ) {
      const t2 = e[n2];
      if ("\\" === t2) {
        if (n2 + 1 === e.length) throw new k(O.INVALID_ARGUMENT, "Path has trailing escape character: " + e);
        const t3 = e[n2 + 1];
        if ("\\" !== t3 && "." !== t3 && "`" !== t3) throw new k(O.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e);
        r2 += t3, n2 += 2;
      } else "`" === t2 ? (i = !i, n2++) : "." !== t2 || i ? (r2 += t2, n2++) : (__PRIVATE_addCurrentSegment(), n2++);
    }
    if (__PRIVATE_addCurrentSegment(), i) throw new k(O.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
    return new FieldPath(t);
  }
  static emptyPath() {
    return new FieldPath([]);
  }
};
var x = class _x {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new _x(ResourcePath.fromString(e));
  }
  static fromName(e) {
    return new _x(ResourcePath.fromString(e).popFirst(5));
  }
  static empty() {
    return new _x(ResourcePath.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  /** Returns true if the document is in the specified collectionId. */
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  /** Returns the collection group (i.e. the name of the parent collection) for this key. */
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  /** Returns the fully qualified path to the parent collection. */
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return null !== e && 0 === ResourcePath.comparator(this.path, e.path);
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, t) {
    return ResourcePath.comparator(e.path, t.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  /**
   * Creates and returns a new document key with the given segments.
   *
   * @param segments - The segments of the path to the document
   * @returns A new instance of DocumentKey
   */
  static fromSegments(e) {
    return new _x(new ResourcePath(e.slice()));
  }
};
function __PRIVATE_validateNonEmptyArgument(e, t, r2) {
  if (!r2) throw new k(O.INVALID_ARGUMENT, `Function ${e}() cannot be called with an empty ${t}.`);
}
function __PRIVATE_validateDocumentPath(e) {
  if (!x.isDocumentKey(e)) throw new k(O.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`);
}
function __PRIVATE_validateCollectionPath(e) {
  if (x.isDocumentKey(e)) throw new k(O.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`);
}
function __PRIVATE_isPlainObject(e) {
  return "object" == typeof e && null !== e && (Object.getPrototypeOf(e) === Object.prototype || null === Object.getPrototypeOf(e));
}
function __PRIVATE_valueDescription(e) {
  if (void 0 === e) return "undefined";
  if (null === e) return "null";
  if ("string" == typeof e) return e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e);
  if ("number" == typeof e || "boolean" == typeof e) return "" + e;
  if ("object" == typeof e) {
    if (e instanceof Array) return "an array";
    {
      const t = (
        /** try to get the constructor name for an object. */
        (function __PRIVATE_tryGetCustomObjectType(e2) {
          if (e2.constructor) return e2.constructor.name;
          return null;
        })(e)
      );
      return t ? `a custom ${t} object` : "an object";
    }
  }
  return "function" == typeof e ? "a function" : z(12329, {
    type: typeof e
  });
}
function f(e, t) {
  if ("_delegate" in e && // Unwrap Compat types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e = e._delegate), !(e instanceof t)) {
    if (t.name === e.constructor.name) throw new k(O.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
      const r2 = __PRIVATE_valueDescription(e);
      throw new k(O.INVALID_ARGUMENT, `Expected type '${t.name}', but it was: ${r2}`);
    }
  }
  return e;
}
function __PRIVATE_validatePositiveNumber(e, t) {
  if (t <= 0) throw new k(O.INVALID_ARGUMENT, `Function ${e}() requires a positive number, but it was: ${t}.`);
}
function __PRIVATE_cloneLongPollingOptions(e) {
  const t = {};
  return void 0 !== e.timeoutSeconds && (t.timeoutSeconds = e.timeoutSeconds), t;
}
var X = null;
function __PRIVATE_generateUniqueDebugId() {
  return null === X ? X = (function __PRIVATE_generateInitialUniqueDebugId() {
    return 268435456 + Math.round(2147483648 * Math.random());
  })() : X++, "0x" + X.toString(16);
}
function tt(e) {
  return null == e;
}
function __PRIVATE_isNegativeZero(e) {
  return 0 === e && 1 / e == -1 / 0;
}
var Z = "RestConnection";
var ee = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery",
  ExecutePipeline: "executePipeline"
};
var __PRIVATE_RestConnection = class {
  get ae() {
    return false;
  }
  constructor(e) {
    this.databaseInfo = e, this.databaseId = e.databaseId;
    const t = e.ssl ? "https" : "http", r2 = encodeURIComponent(this.databaseId.projectId), n2 = encodeURIComponent(this.databaseId.database);
    this.ue = t + "://" + e.host, this._e = `projects/${r2}/databases/${n2}`, this.ce = this.databaseId.database === K ? `project_id=${r2}` : `project_id=${r2}&database_id=${n2}`;
  }
  le(e, t, r2, n2, i) {
    const s2 = __PRIVATE_generateUniqueDebugId(), o2 = this.he(e, t.toUriEncodedString());
    a(Z, `Sending RPC '${e}' ${s2}:`, o2, r2);
    const u2 = {
      "google-cloud-resource-prefix": this._e,
      "x-goog-request-params": this.ce
    };
    this.fe(u2, n2, i);
    const { host: _2 } = new URL(o2), c2 = isCloudWorkstation(_2);
    return this.me(e, o2, u2, r2, c2).then(((t2) => (a(Z, `Received RPC '${e}' ${s2}: `, t2), t2)), ((t2) => {
      throw __PRIVATE_logWarn(Z, `RPC '${e}' ${s2} failed with error: `, t2, "url: ", o2, "request:", r2), t2;
    }));
  }
  de(e, t, r2, n2, i, s2) {
    return this.le(e, t, r2, n2, i);
  }
  /**
   * Modifies the headers for a request, adding any authorization token if
   * present and any additional headers for the request.
   */
  fe(e, t, r2) {
    if (e["X-Goog-Api-Client"] = // SDK_VERSION is updated to different value at runtime depending on the entry point,
    // so we need to get its value when we need it in a function.
    (function __PRIVATE_getGoogApiClientValue() {
      return "gl-js/ fire/" + s;
    })(), // Content-Type: text/plain will avoid preflight requests which might
    // mess with CORS and redirects by proxies. If we add custom headers
    // we will need to change this code to potentially use the $httpOverwrite
    // parameter supported by ESF to avoid triggering preflight requests.
    e["Content-Type"] = "text/plain", this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId), t && t.headers.forEach(((t2, r3) => e[r3] = t2)), r2 && r2.headers.forEach(((t2, r3) => e[r3] = t2)), this.databaseInfo._customHeaders) for (const t2 of Object.keys(this.databaseInfo._customHeaders)) e[t2] = this.databaseInfo._customHeaders[t2];
  }
  he(e, t) {
    const r2 = ee[e];
    let n2 = `${this.ue}/v1/${t}:${r2}`;
    return this.databaseInfo.apiKey && (n2 = `${n2}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`), n2;
  }
  /**
   * Closes and cleans up any resources associated with the connection. This
   * implementation is a no-op because there are no resources associated
   * with the RestConnection that need to be cleaned up.
   */
  terminate() {
  }
};
var te;
var re;
function et(e) {
  switch (e) {
    case O.OK:
      return z(64938);
    case O.CANCELLED:
    case O.UNKNOWN:
    case O.DEADLINE_EXCEEDED:
    case O.RESOURCE_EXHAUSTED:
    case O.INTERNAL:
    case O.UNAVAILABLE:
    // Unauthenticated means something went wrong with our token and we need
    // to retry with new credentials which will happen automatically.
    case O.UNAUTHENTICATED:
      return false;
    case O.INVALID_ARGUMENT:
    case O.NOT_FOUND:
    case O.ALREADY_EXISTS:
    case O.PERMISSION_DENIED:
    case O.FAILED_PRECONDITION:
    // Aborted might be retried in some scenarios, but that is dependent on
    // the context and should handled individually by the calling code.
    // See https://cloud.google.com/apis/design/errors.
    case O.ABORTED:
    case O.OUT_OF_RANGE:
    case O.UNIMPLEMENTED:
    case O.DATA_LOSS:
      return true;
    default:
      return z(15467, {
        code: e
      });
  }
}
function __PRIVATE_mapCodeFromHttpStatus(e) {
  if (void 0 === e) return st("RPC_ERROR", "HTTP error has no status"), O.UNKNOWN;
  switch (e) {
    case 200:
      return O.OK;
    case 400:
      return O.FAILED_PRECONDITION;
    // Other possibilities based on the forward mapping
    // return Code.INVALID_ARGUMENT;
    // return Code.OUT_OF_RANGE;
    case 401:
      return O.UNAUTHENTICATED;
    case 403:
      return O.PERMISSION_DENIED;
    case 404:
      return O.NOT_FOUND;
    case 409:
      return O.ABORTED;
    // Other possibilities:
    // return Code.ALREADY_EXISTS;
    case 416:
      return O.OUT_OF_RANGE;
    case 429:
      return O.RESOURCE_EXHAUSTED;
    case 499:
      return O.CANCELLED;
    case 500:
      return O.UNKNOWN;
    // Other possibilities:
    // return Code.INTERNAL;
    // return Code.DATA_LOSS;
    case 501:
      return O.UNIMPLEMENTED;
    case 503:
      return O.UNAVAILABLE;
    case 504:
      return O.DEADLINE_EXCEEDED;
    default:
      return e >= 200 && e < 300 ? O.OK : e >= 400 && e < 500 ? O.FAILED_PRECONDITION : e >= 500 && e < 600 ? O.INTERNAL : O.UNKNOWN;
  }
}
(re = te || (te = {}))[re.OK = 0] = "OK", re[re.CANCELLED = 1] = "CANCELLED", re[re.UNKNOWN = 2] = "UNKNOWN", re[re.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", re[re.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", re[re.NOT_FOUND = 5] = "NOT_FOUND", re[re.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", re[re.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", re[re.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", re[re.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", re[re.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", re[re.ABORTED = 10] = "ABORTED", re[re.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", re[re.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", re[re.INTERNAL = 13] = "INTERNAL", re[re.UNAVAILABLE = 14] = "UNAVAILABLE", re[re.DATA_LOSS = 15] = "DATA_LOSS";
var __PRIVATE_FetchConnection = class extends __PRIVATE_RestConnection {
  Ee(e, t) {
    throw new Error("Not supported by FetchConnection");
  }
  async me(e, t, r2, n2, i) {
    const s2 = JSON.stringify(n2);
    let o2;
    try {
      const e2 = {
        method: "POST",
        headers: r2,
        body: s2
      };
      i && (e2.credentials = "include"), o2 = await fetch(t, e2);
    } catch (e2) {
      const t2 = e2, r3 = t2?.message, n3 = t2?.cause ? String(t2.cause) : void 0, i2 = (r3 && n3 ? `${r3} (${n3})` : r3 ?? n3) ?? t2?.statusText ?? String(e2);
      throw new k(__PRIVATE_mapCodeFromHttpStatus(t2?.status), `Request failed with error: ${i2}`);
    }
    if (!o2.ok) {
      let e2 = await o2.json();
      Array.isArray(e2) && (e2 = e2[0]);
      const t2 = e2?.error?.message;
      throw new k(__PRIVATE_mapCodeFromHttpStatus(o2.status), `Request failed with error: ${t2 ?? o2.statusText}`);
    }
    return o2.json();
  }
};
function __PRIVATE_objectSize(e) {
  let t = 0;
  for (const r2 in e) Object.prototype.hasOwnProperty.call(e, r2) && t++;
  return t;
}
function forEach(e, t) {
  for (const r2 in e) Object.prototype.hasOwnProperty.call(e, r2) && t(r2, e[r2]);
}
function g(e, t) {
  const r2 = [];
  for (const n2 in e) Object.prototype.hasOwnProperty.call(e, n2) && r2.push(t(e[n2], n2, e));
  return r2;
}
var __PRIVATE_Base64DecodeError = class extends Error {
  constructor() {
    super(...arguments), this.name = "Base64DecodeError";
  }
};
var ByteString = class _ByteString {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const t = (function __PRIVATE_decodeBase64(e2) {
      try {
        return atob(e2);
      } catch (e3) {
        throw "undefined" != typeof DOMException && e3 instanceof DOMException ? new __PRIVATE_Base64DecodeError("Invalid base64 string: " + e3) : e3;
      }
    })(e);
    return new _ByteString(t);
  }
  static fromUint8Array(e) {
    const t = (
      /**
      * Helper function to convert an Uint8array to a binary string.
      */
      (function __PRIVATE_binaryStringFromUint8Array(e2) {
        let t2 = "";
        for (let r2 = 0; r2 < e2.length; ++r2) t2 += String.fromCharCode(e2[r2]);
        return t2;
      })(e)
    );
    return new _ByteString(t);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () => e < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(e++),
        done: false
      } : {
        value: void 0,
        done: true
      }
    };
  }
  toBase64() {
    return (function __PRIVATE_encodeBase64(e) {
      return btoa(e);
    })(this.binaryString);
  }
  toUint8Array() {
    return (function __PRIVATE_uint8ArrayFromBinaryString(e) {
      const t = new Uint8Array(e.length);
      for (let r2 = 0; r2 < e.length; r2++) t[r2] = e.charCodeAt(r2);
      return t;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return __PRIVATE_primitiveComparator(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
};
ByteString.EMPTY_BYTE_STRING = new ByteString("");
var ne = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function __PRIVATE_normalizeTimestamp(e) {
  if (__PRIVATE_hardAssert(!!e, 39018), "string" == typeof e) {
    let t = 0;
    const r2 = ne.exec(e);
    if (__PRIVATE_hardAssert(!!r2, 46558, {
      timestamp: e
    }), r2[1]) {
      let e2 = r2[1];
      e2 = (e2 + "000000000").substr(0, 9), t = Number(e2);
    }
    const n2 = new Date(e);
    return {
      seconds: Math.floor(n2.getTime() / 1e3),
      nanos: t
    };
  }
  return {
    seconds: __PRIVATE_normalizeNumber(e.seconds),
    nanos: __PRIVATE_normalizeNumber(e.nanos)
  };
}
function __PRIVATE_normalizeNumber(e) {
  return "number" == typeof e ? e : "string" == typeof e ? Number(e) : 0;
}
function __PRIVATE_normalizeByteString(e) {
  return "string" == typeof e ? ByteString.fromBase64String(e) : ByteString.fromUint8Array(e);
}
function property(e, t) {
  const r2 = {
    typeString: e
  };
  return t && (r2.value = t), r2;
}
function __PRIVATE_validateJSON(e, t) {
  if (!__PRIVATE_isPlainObject(e)) throw new k(O.INVALID_ARGUMENT, "JSON must be an object");
  let r2;
  for (const n2 in t) if (t[n2]) {
    const i = t[n2].typeString, s2 = "value" in t[n2] ? {
      value: t[n2].value
    } : void 0;
    if (!(n2 in e)) {
      r2 = `JSON missing required field: '${n2}'`;
      break;
    }
    const o2 = e[n2];
    if (i && typeof o2 !== i) {
      r2 = `JSON field '${n2}' must be a ${i}.`;
      break;
    }
    if (void 0 !== s2 && o2 !== s2.value) {
      r2 = `Expected '${n2}' field to equal '${s2.value}'`;
      break;
    }
  }
  if (r2) throw new k(O.INVALID_ARGUMENT, r2);
  return true;
}
var ie = -62135596800;
var se = 1e6;
var Timestamp = class _Timestamp {
  /**
   * Creates a new timestamp with the current date, with millisecond precision.
   *
   * @returns a new timestamp representing the current date.
   */
  static now() {
    return _Timestamp.fromMillis(Date.now());
  }
  /**
   * Creates a new timestamp from the given date.
   *
   * @param date - The date to initialize the `Timestamp` from.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     date.
   */
  static fromDate(e) {
    return _Timestamp.fromMillis(e.getTime());
  }
  /**
   * Creates a new timestamp from the given number of milliseconds.
   *
   * @param milliseconds - Number of milliseconds since Unix epoch
   *     1970-01-01T00:00:00Z.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     number of milliseconds.
   */
  static fromMillis(e) {
    const t = Math.floor(e / 1e3), r2 = Math.floor((e - 1e3 * t) * se);
    return new _Timestamp(t, r2);
  }
  /**
   * Creates a new timestamp from the given `Temporal.Instant`.
   *
   * @param instant - The `Temporal.Instant` to initialize the `Timestamp` from.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     instant.
   */
  static fromInstant(e) {
    if (!e || "bigint" != typeof e.Te) throw new k(O.INVALID_ARGUMENT, "Invalid Temporal.Instant object provided.");
    return _Timestamp._fromEpochNanoseconds(e.Te);
  }
  static _fromEpochNanoseconds(e) {
    let t, r2;
    if (e >= 0n) t = Number(e / 1000000000n), r2 = Number(e % 1000000000n);
    else {
      const n2 = e % 1000000000n;
      0n === n2 ? (t = Number(e / 1000000000n), r2 = 0) : (t = Number(e / 1000000000n - 1n), r2 = Number(n2 + 1000000000n));
    }
    return new _Timestamp(t, r2);
  }
  /**
   * Creates a new timestamp.
   *
   * @param seconds - The number of seconds of UTC time since Unix epoch
   *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   *     9999-12-31T23:59:59Z inclusive.
   * @param nanoseconds - The non-negative fractions of a second at nanosecond
   *     resolution. Negative second values with fractions must still have
   *     non-negative nanoseconds values that count forward in time. Must be
   *     from 0 to 999,999,999 inclusive.
   */
  constructor(e, t) {
    if (this.seconds = e, this.nanoseconds = t, t < 0) throw new k(O.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
    if (t >= 1e9) throw new k(O.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
    if (e < ie) throw new k(O.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800) throw new k(O.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
  }
  /**
   * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
   * causes a loss of precision since `Date` objects only support millisecond
   * precision.
   *
   * @returns JavaScript `Date` object representing the same point in time as
   *     this `Timestamp`, with millisecond precision.
   */
  toDate() {
    return new Date(this.toMillis());
  }
  /**
   * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
   * epoch). This operation causes a loss of precision.
   *
   * @returns The point in time corresponding to this timestamp, represented as
   *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
   */
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / se;
  }
  /**
   * Converts a `Timestamp` to a `Temporal.Instant` object.
   *
   * @returns `Temporal.Instant` object representing the same point in time as
   *     this `Timestamp`.
   */
  toInstant() {
    if ("undefined" == typeof Temporal || !Temporal.Instant) throw new k(O.FAILED_PRECONDITION, "The Temporal object is not available in the current environment.");
    const e = 1000000000n * BigInt(this.seconds) + BigInt(this.nanoseconds);
    return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e);
  }
  _compareTo(e) {
    return this.seconds === e.seconds ? __PRIVATE_primitiveComparator(this.nanoseconds, e.nanoseconds) : __PRIVATE_primitiveComparator(this.seconds, e.seconds);
  }
  /**
   * Returns true if this `Timestamp` is equal to the provided one.
   *
   * @param other - The `Timestamp` to compare against.
   * @returns true if this `Timestamp` is equal to the provided one.
   */
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  /** Returns a textual representation of this `Timestamp`. */
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }
  /**
   * Returns a JSON-serializable representation of this `Timestamp`.
   */
  toJSON() {
    return {
      type: _Timestamp._jsonSchemaVersion,
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }
  /**
   * Builds a `Timestamp` instance from a JSON object created by {@link Timestamp.toJSON}.
   */
  static fromJSON(e) {
    if (__PRIVATE_validateJSON(e, _Timestamp._jsonSchema)) return new _Timestamp(e.seconds, e.nanoseconds);
  }
  /**
   * Converts this object to a primitive string, which allows `Timestamp` objects
   * to be compared using the `>`, `<=`, `>=` and `>` operators.
   */
  valueOf() {
    const e = this.seconds - ie;
    return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }
};
Timestamp._jsonSchemaVersion = "firestore/timestamp/1.0", Timestamp._jsonSchema = {
  type: property("string", Timestamp._jsonSchemaVersion),
  seconds: property("number"),
  nanoseconds: property("number")
};
function __PRIVATE_isServerTimestamp(e) {
  const t = (e?.mapValue?.fields || {}).__type__?.stringValue;
  return "server_timestamp" === t;
}
function __PRIVATE_getPreviousValue(e) {
  const t = e.mapValue.fields.__previous_value__;
  return __PRIVATE_isServerTimestamp(t) ? __PRIVATE_getPreviousValue(t) : t;
}
function __PRIVATE_getLocalWriteTime(e) {
  const t = __PRIVATE_normalizeTimestamp(e.mapValue.fields.__local_write_time__.timestampValue);
  return new Timestamp(t.seconds, t.nanos);
}
var oe = "__type__";
var ae = "__max__";
var ue = {};
var _e = "__vector__";
var ce = "value";
function __PRIVATE_typeOrder(e) {
  return "nullValue" in e ? 0 : "booleanValue" in e ? 1 : "integerValue" in e || "doubleValue" in e ? 2 : "timestampValue" in e ? 3 : "stringValue" in e ? 5 : "bytesValue" in e ? 6 : "referenceValue" in e ? 7 : "geoPointValue" in e ? 8 : "arrayValue" in e ? 9 : "mapValue" in e ? __PRIVATE_isServerTimestamp(e) ? 4 : (
    /** Returns true if the Value represents the canonical {@link #MAX_VALUE} . */
    (function __PRIVATE_isMaxValue(e2) {
      return (((e2.mapValue || {}).fields || {}).__type__ || {}).stringValue === ae;
    })(e) ? 9007199254740991 : (
      /** Returns true if `value` is a VetorValue. */
      (function __PRIVATE_isVectorValue(e2) {
        const t = (e2?.mapValue?.fields || {})[oe]?.stringValue;
        return t === _e;
      })(e) ? 10 : 11
    )
  ) : z(28295, {
    value: e
  });
}
function __PRIVATE_valueEquals(e, t, r2) {
  if (e === t) return true;
  const n2 = __PRIVATE_typeOrder(e);
  if (n2 !== __PRIVATE_typeOrder(t)) return false;
  switch (n2) {
    case 0:
    case 9007199254740991:
      return true;
    case 1:
      return e.booleanValue === t.booleanValue;
    case 4:
      return __PRIVATE_getLocalWriteTime(e).isEqual(__PRIVATE_getLocalWriteTime(t));
    case 3:
      return (function __PRIVATE_timestampEquals(e2, t2) {
        if ("string" == typeof e2.timestampValue && "string" == typeof t2.timestampValue && e2.timestampValue.length === t2.timestampValue.length)
          return e2.timestampValue === t2.timestampValue;
        const r3 = __PRIVATE_normalizeTimestamp(e2.timestampValue), n3 = __PRIVATE_normalizeTimestamp(t2.timestampValue);
        return r3.seconds === n3.seconds && r3.nanos === n3.nanos;
      })(e, t);
    case 5:
      return e.stringValue === t.stringValue;
    case 6:
      return (function __PRIVATE_blobEquals(e2, t2) {
        return __PRIVATE_normalizeByteString(e2.bytesValue).isEqual(__PRIVATE_normalizeByteString(t2.bytesValue));
      })(e, t);
    case 7:
      return e.referenceValue === t.referenceValue;
    case 8:
      return (function __PRIVATE_geoPointEquals(e2, t2) {
        return __PRIVATE_normalizeNumber(e2.geoPointValue.latitude) === __PRIVATE_normalizeNumber(t2.geoPointValue.latitude) && __PRIVATE_normalizeNumber(e2.geoPointValue.longitude) === __PRIVATE_normalizeNumber(t2.geoPointValue.longitude);
      })(e, t);
    case 2:
      return (function __PRIVATE_numberEquals(e2, t2, r3) {
        if ("integerValue" in e2 && "integerValue" in t2) return __PRIVATE_normalizeNumber(e2.integerValue) === __PRIVATE_normalizeNumber(t2.integerValue);
        let n3, i;
        if (!("doubleValue" in e2) || !("doubleValue" in t2)) return false;
        n3 = __PRIVATE_normalizeNumber(e2.doubleValue), i = __PRIVATE_normalizeNumber(t2.doubleValue);
        if (n3 === i) return __PRIVATE_isNegativeZero(n3) === __PRIVATE_isNegativeZero(i);
        return !!(void 0 === r3 || r3.Pe) && (isNaN(n3) && isNaN(i));
      })(e, t, r2);
    case 9:
      return __PRIVATE_arrayEquals(e.arrayValue.values || [], t.arrayValue.values || [], ((e2, t2) => __PRIVATE_valueEquals(e2, t2, r2)));
    case 10:
    case 11:
      return (function __PRIVATE_objectEquals(e2, t2, r3) {
        const n3 = e2.mapValue.fields || {}, i = t2.mapValue.fields || {};
        if (__PRIVATE_objectSize(n3) !== __PRIVATE_objectSize(i)) return false;
        for (const e3 in n3) if (n3.hasOwnProperty(e3) && (void 0 === i[e3] || !__PRIVATE_valueEquals(n3[e3], i[e3], r3))) return false;
        return true;
      })(e, t, r2);
    default:
      return z(52216, {
        left: e
      });
  }
}
function __PRIVATE_arrayValueContains(e, t) {
  return void 0 !== (e.values || []).find(((e2) => __PRIVATE_valueEquals(e2, t)));
}
function __PRIVATE_valueCompare(e, t) {
  if (e === t) return 0;
  const r2 = __PRIVATE_typeOrder(e), n2 = __PRIVATE_typeOrder(t);
  if (r2 !== n2) return __PRIVATE_primitiveComparator(r2, n2);
  switch (r2) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return __PRIVATE_primitiveComparator(e.booleanValue, t.booleanValue);
    case 2:
      return (function __PRIVATE_compareNumbers(e2, t2) {
        const r3 = __PRIVATE_normalizeNumber(e2.integerValue || e2.doubleValue), n3 = __PRIVATE_normalizeNumber(t2.integerValue || t2.doubleValue);
        return r3 < n3 ? -1 : r3 > n3 ? 1 : r3 === n3 ? 0 : (
          // one or both are NaN.
          isNaN(r3) ? isNaN(n3) ? 0 : -1 : 1
        );
      })(e, t);
    case 3:
      return __PRIVATE_compareTimestamps(e.timestampValue, t.timestampValue);
    case 4:
      return __PRIVATE_compareTimestamps(__PRIVATE_getLocalWriteTime(e), __PRIVATE_getLocalWriteTime(t));
    case 5:
      return __PRIVATE_compareUtf8Strings(e.stringValue, t.stringValue);
    case 6:
      return (function __PRIVATE_compareBlobs(e2, t2) {
        const r3 = __PRIVATE_normalizeByteString(e2), n3 = __PRIVATE_normalizeByteString(t2);
        return r3.compareTo(n3);
      })(e.bytesValue, t.bytesValue);
    case 7:
      return (function __PRIVATE_compareReferences(e2, t2) {
        const r3 = e2.split("/"), n3 = t2.split("/");
        for (let e3 = 0; e3 < r3.length && e3 < n3.length; e3++) {
          const t3 = __PRIVATE_primitiveComparator(r3[e3], n3[e3]);
          if (0 !== t3) return t3;
        }
        return __PRIVATE_primitiveComparator(r3.length, n3.length);
      })(e.referenceValue, t.referenceValue);
    case 8:
      return (function __PRIVATE_compareGeoPoints(e2, t2) {
        const r3 = __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e2.latitude), __PRIVATE_normalizeNumber(t2.latitude));
        if (0 !== r3) return r3;
        return __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e2.longitude), __PRIVATE_normalizeNumber(t2.longitude));
      })(e.geoPointValue, t.geoPointValue);
    case 9:
      return __PRIVATE_compareArrays(e.arrayValue, t.arrayValue);
    case 10:
      return (function __PRIVATE_compareVectors(e2, t2) {
        const r3 = e2.fields || {}, n3 = t2.fields || {}, i = r3[ce]?.arrayValue, s2 = n3[ce]?.arrayValue, o2 = __PRIVATE_primitiveComparator(i?.values?.length || 0, s2?.values?.length || 0);
        if (0 !== o2) return o2;
        return __PRIVATE_compareArrays(i, s2);
      })(e.mapValue, t.mapValue);
    case 11:
      return (function __PRIVATE_compareMaps(e2, t2) {
        if (e2 === ue && t2 === ue) return 0;
        if (e2 === ue) return 1;
        if (t2 === ue) return -1;
        const r3 = e2.fields || {}, n3 = Object.keys(r3), i = t2.fields || {}, s2 = Object.keys(i);
        n3.sort(), s2.sort();
        for (let e3 = 0; e3 < n3.length && e3 < s2.length; ++e3) {
          const t3 = __PRIVATE_compareUtf8Strings(n3[e3], s2[e3]);
          if (0 !== t3) return t3;
          const o2 = __PRIVATE_valueCompare(r3[n3[e3]], i[s2[e3]]);
          if (0 !== o2) return o2;
        }
        return __PRIVATE_primitiveComparator(n3.length, s2.length);
      })(e.mapValue, t.mapValue);
    default:
      throw z(23264, {
        Re: r2
      });
  }
}
function __PRIVATE_compareTimestamps(e, t) {
  if ("string" == typeof e && "string" == typeof t && e.length === t.length) return __PRIVATE_primitiveComparator(e, t);
  const r2 = __PRIVATE_normalizeTimestamp(e), n2 = __PRIVATE_normalizeTimestamp(t), i = __PRIVATE_primitiveComparator(r2.seconds, n2.seconds);
  return 0 !== i ? i : __PRIVATE_primitiveComparator(r2.nanos, n2.nanos);
}
function __PRIVATE_compareArrays(e, t) {
  const r2 = e.values || [], n2 = t.values || [];
  for (let e2 = 0; e2 < r2.length && e2 < n2.length; ++e2) {
    const t2 = __PRIVATE_valueCompare(r2[e2], n2[e2]);
    if (void 0 !== t2 && 0 !== t2) return t2;
  }
  return __PRIVATE_primitiveComparator(r2.length, n2.length);
}
function __PRIVATE_refValue(e, t) {
  return {
    referenceValue: `projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`
  };
}
function isArray(e) {
  return !!e && "arrayValue" in e;
}
function __PRIVATE_isNullValue(e) {
  return !!e && "nullValue" in e;
}
function __PRIVATE_isNanValue(e) {
  return !!e && "doubleValue" in e && isNaN(Number(e.doubleValue));
}
function __PRIVATE_isMapValue(e) {
  return !!e && "mapValue" in e;
}
function __PRIVATE_deepClone(e) {
  if (e.geoPointValue) return {
    geoPointValue: {
      ...e.geoPointValue
    }
  };
  if (e.timestampValue && "object" == typeof e.timestampValue) return {
    timestampValue: {
      ...e.timestampValue
    }
  };
  if (e.mapValue) {
    const t = {
      mapValue: {
        fields: {}
      }
    };
    return forEach(e.mapValue.fields, ((e2, r2) => t.mapValue.fields[e2] = __PRIVATE_deepClone(r2))), t;
  }
  if (e.arrayValue) {
    const t = {
      arrayValue: {
        values: []
      }
    };
    for (let r2 = 0; r2 < (e.arrayValue.values || []).length; ++r2) t.arrayValue.values[r2] = __PRIVATE_deepClone(e.arrayValue.values[r2]);
    return t;
  }
  return {
    ...e
  };
}
var Bound = class {
  constructor(e, t) {
    this.position = e, this.inclusive = t;
  }
};
function __PRIVATE_boundEquals(e, t) {
  if (null === e) return null === t;
  if (null === t) return false;
  if (e.inclusive !== t.inclusive || e.position.length !== t.position.length) return false;
  for (let r2 = 0; r2 < e.position.length; r2++) {
    if (!__PRIVATE_valueEquals(e.position[r2], t.position[r2])) return false;
  }
  return true;
}
var Filter = class {
};
var FieldFilter = class _FieldFilter extends Filter {
  constructor(e, t, r2) {
    super(), this.field = e, this.op = t, this.value = r2;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(e, t, r2) {
    return e.isKeyField() ? "in" === t || "not-in" === t ? this.createKeyFieldInFilter(e, t, r2) : new __PRIVATE_KeyFieldFilter(e, t, r2) : "array-contains" === t ? new __PRIVATE_ArrayContainsFilter(e, r2) : "in" === t ? new __PRIVATE_InFilter(e, r2) : "not-in" === t ? new __PRIVATE_NotInFilter(e, r2) : "array-contains-any" === t ? new __PRIVATE_ArrayContainsAnyFilter(e, r2) : new _FieldFilter(e, t, r2);
  }
  static createKeyFieldInFilter(e, t, r2) {
    return "in" === t ? new __PRIVATE_KeyFieldInFilter(e, r2) : new __PRIVATE_KeyFieldNotInFilter(e, r2);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return "!=" === this.op ? null !== t && void 0 === t.nullValue && this.matchesComparison(__PRIVATE_valueCompare(t, this.value)) : null !== t && __PRIVATE_typeOrder(this.value) === __PRIVATE_typeOrder(t) && this.matchesComparison(__PRIVATE_valueCompare(t, this.value));
  }
  matchesComparison(e) {
    switch (this.op) {
      case "<":
        return e < 0;
      case "<=":
        return e <= 0;
      case "==":
        return 0 === e;
      case "!=":
        return 0 !== e;
      case ">":
        return e > 0;
      case ">=":
        return e >= 0;
      default:
        return z(47266, {
          operator: this.op
        });
    }
  }
  isInequality() {
    return [
      "<",
      "<=",
      ">",
      ">=",
      "!=",
      "not-in"
      /* Operator.NOT_IN */
    ].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
};
var CompositeFilter = class _CompositeFilter extends Filter {
  constructor(e, t) {
    super(), this.filters = e, this.op = t, this.Ae = null;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(e, t) {
    return new _CompositeFilter(e, t);
  }
  matches(e) {
    return (function __PRIVATE_compositeFilterIsConjunction(e2) {
      return "and" === e2.op;
    })(this) ? void 0 === this.filters.find(((t) => !t.matches(e))) : void 0 !== this.filters.find(((t) => t.matches(e)));
  }
  getFlattenedFilters() {
    return null !== this.Ae || (this.Ae = this.filters.reduce(((e, t) => e.concat(t.getFlattenedFilters())), [])), this.Ae;
  }
  // Returns a mutable copy of `this.filters`
  getFilters() {
    return Object.assign([], this.filters);
  }
};
function __PRIVATE_filterEquals(e, t) {
  return e instanceof FieldFilter ? (function __PRIVATE_fieldFilterEquals(e2, t2) {
    return t2 instanceof FieldFilter && e2.op === t2.op && e2.field.isEqual(t2.field) && __PRIVATE_valueEquals(e2.value, t2.value);
  })(e, t) : e instanceof CompositeFilter ? (function __PRIVATE_compositeFilterEquals(e2, t2) {
    if (t2 instanceof CompositeFilter && e2.op === t2.op && e2.filters.length === t2.filters.length) {
      return e2.filters.reduce(((e3, r2, n2) => e3 && __PRIVATE_filterEquals(r2, t2.filters[n2])), true);
    }
    return false;
  })(e, t) : void z(19439);
}
var __PRIVATE_KeyFieldFilter = class extends FieldFilter {
  constructor(e, t, r2) {
    super(e, t, r2), this.key = x.fromName(r2.referenceValue);
  }
  matches(e) {
    const t = x.comparator(e.key, this.key);
    return this.matchesComparison(t);
  }
};
var __PRIVATE_KeyFieldInFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "in", t), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("in", t);
  }
  matches(e) {
    return this.keys.some(((t) => t.isEqual(e.key)));
  }
};
var __PRIVATE_KeyFieldNotInFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "not-in", t), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("not-in", t);
  }
  matches(e) {
    return !this.keys.some(((t) => t.isEqual(e.key)));
  }
};
function __PRIVATE_extractDocumentKeysFromArrayValue(e, t) {
  return (t.arrayValue?.values || []).map(((e2) => x.fromName(e2.referenceValue)));
}
var __PRIVATE_ArrayContainsFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "array-contains", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return isArray(t) && __PRIVATE_arrayValueContains(t.arrayValue, this.value);
  }
};
var __PRIVATE_InFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "in", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return null !== t && __PRIVATE_arrayValueContains(this.value.arrayValue, t);
  }
};
var __PRIVATE_NotInFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "not-in", t);
  }
  matches(e) {
    if (__PRIVATE_arrayValueContains(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    })) return false;
    const t = e.data.field(this.field);
    return null !== t && void 0 === t.nullValue && !__PRIVATE_arrayValueContains(this.value.arrayValue, t);
  }
};
var __PRIVATE_ArrayContainsAnyFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "array-contains-any", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return !(!isArray(t) || !t.arrayValue.values) && t.arrayValue.values.some(((e2) => __PRIVATE_arrayValueContains(this.value.arrayValue, e2)));
  }
};
var OrderBy = class {
  constructor(e, t = "asc") {
    this.field = e, this.dir = t;
  }
};
function __PRIVATE_orderByEquals(e, t) {
  return e.dir === t.dir && e.field.isEqual(t.field);
}
var j = class _j {
  static fromTimestamp(e) {
    return new _j(e);
  }
  static min() {
    return new _j(new Timestamp(0, 0));
  }
  static max() {
    return new _j(new Timestamp(253402300799, 999999999));
  }
  constructor(e) {
    this.timestamp = e;
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  /** Returns a number representation of the version for use in spec tests. */
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
};
var SortedMap = class _SortedMap {
  constructor(e, t) {
    this.comparator = e, this.root = t || LLRBNode.EMPTY;
  }
  // Returns a copy of the map, with the specified key/value added or replaced.
  insert(e, t) {
    return new _SortedMap(this.comparator, this.root.insert(e, t, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
  }
  // Returns a copy of the map, with the specified key removed.
  remove(e) {
    return new _SortedMap(this.comparator, this.root.remove(e, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
  }
  // Returns the value of the node with the given key, or null.
  get(e) {
    let t = this.root;
    for (; !t.isEmpty(); ) {
      const r2 = this.comparator(e, t.key);
      if (0 === r2) return t.value;
      r2 < 0 ? t = t.left : r2 > 0 && (t = t.right);
    }
    return null;
  }
  // Returns the index of the element in this sorted map, or -1 if it doesn't
  // exist.
  indexOf(e) {
    let t = 0, r2 = this.root;
    for (; !r2.isEmpty(); ) {
      const n2 = this.comparator(e, r2.key);
      if (0 === n2) return t + r2.left.size;
      n2 < 0 ? r2 = r2.left : (
        // Count all nodes left of the node plus the node itself
        (t += r2.left.size + 1, r2 = r2.right)
      );
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  // Returns the total number of nodes in the map.
  get size() {
    return this.root.size;
  }
  // Returns the minimum key in the map.
  minKey() {
    return this.root.minKey();
  }
  // Returns the maximum key in the map.
  maxKey() {
    return this.root.maxKey();
  }
  // Traverses the map in key order and calls the specified action function
  // for each key/value pair. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal(((t, r2) => (e(t, r2), false)));
  }
  toString() {
    const e = [];
    return this.inorderTraversal(((t, r2) => (e.push(`${t}:${r2}`), false))), `{${e.join(", ")}}`;
  }
  // Traverses the map in reverse key order and calls the specified action
  // function for each key/value pair. If action returns true, traversal is
  // aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  // Returns an iterator over the SortedMap.
  getIterator() {
    return new SortedMapIterator(this.root, null, this.comparator, false);
  }
  getIteratorFrom(e) {
    return new SortedMapIterator(this.root, e, this.comparator, false);
  }
  getReverseIterator() {
    return new SortedMapIterator(this.root, null, this.comparator, true);
  }
  getReverseIteratorFrom(e) {
    return new SortedMapIterator(this.root, e, this.comparator, true);
  }
};
var SortedMapIterator = class {
  constructor(e, t, r2, n2) {
    this.isReverse = n2, this.nodeStack = [];
    let i = 1;
    for (; !e.isEmpty(); ) if (i = t ? r2(e.key, t) : 1, // flip the comparison if we're going in reverse
    t && n2 && (i *= -1), i < 0)
      e = this.isReverse ? e.left : e.right;
    else {
      if (0 === i) {
        this.nodeStack.push(e);
        break;
      }
      this.nodeStack.push(e), e = this.isReverse ? e.right : e.left;
    }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const t = {
      key: e.key,
      value: e.value
    };
    if (this.isReverse) for (e = e.left; !e.isEmpty(); ) this.nodeStack.push(e), e = e.right;
    else for (e = e.right; !e.isEmpty(); ) this.nodeStack.push(e), e = e.left;
    return t;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (0 === this.nodeStack.length) return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: e.key,
      value: e.value
    };
  }
};
var LLRBNode = class _LLRBNode {
  constructor(e, t, r2, n2, i) {
    this.key = e, this.value = t, this.color = null != r2 ? r2 : _LLRBNode.RED, this.left = null != n2 ? n2 : _LLRBNode.EMPTY, this.right = null != i ? i : _LLRBNode.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  // Returns a copy of the current node, optionally replacing pieces of it.
  copy(e, t, r2, n2, i) {
    return new _LLRBNode(null != e ? e : this.key, null != t ? t : this.value, null != r2 ? r2 : this.color, null != n2 ? n2 : this.left, null != i ? i : this.right);
  }
  isEmpty() {
    return false;
  }
  // Traverses the tree in key order and calls the specified action function
  // for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(e) {
    return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e);
  }
  // Traverses the tree in reverse key order and calls the specified action
  // function for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(e) {
    return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e);
  }
  // Returns the minimum node in the tree.
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  // Returns the maximum key in the tree.
  minKey() {
    return this.min().key;
  }
  // Returns the maximum key in the tree.
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  // Returns new tree, with the key/value added.
  insert(e, t, r2) {
    let n2 = this;
    const i = r2(e, n2.key);
    return n2 = i < 0 ? n2.copy(null, null, null, n2.left.insert(e, t, r2), null) : 0 === i ? n2.copy(null, t, null, null, null) : n2.copy(null, null, null, null, n2.right.insert(e, t, r2)), n2.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty()) return _LLRBNode.EMPTY;
    let e = this;
    return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp();
  }
  // Returns new tree, with the specified item removed.
  remove(e, t) {
    let r2, n2 = this;
    if (t(e, n2.key) < 0) n2.left.isEmpty() || n2.left.isRed() || n2.left.left.isRed() || (n2 = n2.moveRedLeft()), n2 = n2.copy(null, null, null, n2.left.remove(e, t), null);
    else {
      if (n2.left.isRed() && (n2 = n2.rotateRight()), n2.right.isEmpty() || n2.right.isRed() || n2.right.left.isRed() || (n2 = n2.moveRedRight()), 0 === t(e, n2.key)) {
        if (n2.right.isEmpty()) return _LLRBNode.EMPTY;
        r2 = n2.right.min(), n2 = n2.copy(r2.key, r2.value, null, null, n2.right.removeMin());
      }
      n2 = n2.copy(null, null, null, null, n2.right.remove(e, t));
    }
    return n2.fixUp();
  }
  isRed() {
    return this.color;
  }
  // Returns new tree after performing any needed rotations.
  fixUp() {
    let e = this;
    return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e;
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e;
  }
  moveRedRight() {
    let e = this.colorFlip();
    return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e;
  }
  rotateLeft() {
    const e = this.copy(null, null, _LLRBNode.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, _LLRBNode.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null), t = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, t);
  }
  // For testing.
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  // In a balanced RB tree, the black-depth (number of black nodes) from root to
  // leaves is equal on both sides.  This function verifies that or asserts.
  check() {
    if (this.isRed() && this.left.isRed()) throw z(43730, {
      key: this.key,
      value: this.value
    });
    if (this.right.isRed()) throw z(14113, {
      key: this.key,
      value: this.value
    });
    const e = this.left.check();
    if (e !== this.right.check()) throw z(27949);
    return e + (this.isRed() ? 0 : 1);
  }
};
LLRBNode.EMPTY = null, LLRBNode.RED = true, LLRBNode.BLACK = false;
LLRBNode.EMPTY = new // Represents an empty node (a leaf node in the Red-Black Tree).
class LLRBEmptyNode {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw z(57766);
  }
  get value() {
    throw z(16141);
  }
  get color() {
    throw z(16727);
  }
  get left() {
    throw z(29726);
  }
  get right() {
    throw z(36894);
  }
  // Returns a copy of the current node.
  copy(e, t, r2, n2, i) {
    return this;
  }
  // Returns a copy of the tree, with the specified key/value added.
  insert(e, t, r2) {
    return new LLRBNode(e, t);
  }
  // Returns a copy of the tree, with the specified key removed.
  remove(e, t) {
    return this;
  }
  isEmpty() {
    return true;
  }
  inorderTraversal(e) {
    return false;
  }
  reverseTraversal(e) {
    return false;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return false;
  }
  // For testing.
  checkMaxDepth() {
    return true;
  }
  check() {
    return 0;
  }
}();
var SortedSet = class _SortedSet {
  constructor(e) {
    this.comparator = e, this.data = new SortedMap(this.comparator);
  }
  has(e) {
    return null !== this.data.get(e);
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  /** Iterates elements in order defined by "comparator" */
  forEach(e) {
    this.data.inorderTraversal(((t, r2) => (e(t), false)));
  }
  /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */
  forEachInRange(e, t) {
    const r2 = this.data.getIteratorFrom(e[0]);
    for (; r2.hasNext(); ) {
      const n2 = r2.getNext();
      if (this.comparator(n2.key, e[1]) >= 0) return;
      t(n2.key);
    }
  }
  /**
   * Iterates over `elem`s such that: start &lt;= elem until false is returned.
   */
  forEachWhile(e, t) {
    let r2;
    for (r2 = void 0 !== t ? this.data.getIteratorFrom(t) : this.data.getIterator(); r2.hasNext(); ) {
      if (!e(r2.getNext().key)) return;
    }
  }
  /** Finds the least element greater than or equal to `elem`. */
  firstAfterOrEqual(e) {
    const t = this.data.getIteratorFrom(e);
    return t.hasNext() ? t.getNext().key : null;
  }
  getIterator() {
    return new SortedSetIterator(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new SortedSetIterator(this.data.getIteratorFrom(e));
  }
  /** Inserts or updates an element */
  add(e) {
    return this.copy(this.data.remove(e).insert(e, true));
  }
  /** Deletes an element */
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let t = this;
    return t.size < e.size && (t = e, e = this), e.forEach(((e2) => {
      t = t.add(e2);
    })), t;
  }
  isEqual(e) {
    if (!(e instanceof _SortedSet)) return false;
    if (this.size !== e.size) return false;
    const t = this.data.getIterator(), r2 = e.data.getIterator();
    for (; t.hasNext(); ) {
      const e2 = t.getNext().key, n2 = r2.getNext().key;
      if (0 !== this.comparator(e2, n2)) return false;
    }
    return true;
  }
  toArray() {
    const e = [];
    return this.forEach(((t) => {
      e.push(t);
    })), e;
  }
  toString() {
    const e = [];
    return this.forEach(((t) => e.push(t))), "SortedSet(" + e.toString() + ")";
  }
  copy(e) {
    const t = new _SortedSet(this.comparator);
    return t.data = e, t;
  }
};
var SortedSetIterator = class {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
};
var FieldMask = class _FieldMask {
  constructor(e) {
    this.fields = e, // TODO(dimond): validation of FieldMask
    // Sort the field mask to support `FieldMask.isEqual()` and assert below.
    e.sort(Y.comparator);
  }
  static empty() {
    return new _FieldMask([]);
  }
  /**
   * Returns a new FieldMask object that is the result of adding all the given
   * fields paths to this field mask.
   */
  unionWith(e) {
    let t = new SortedSet(Y.comparator);
    for (const e2 of this.fields) t = t.add(e2);
    for (const r2 of e) t = t.add(r2);
    return new _FieldMask(t.toArray());
  }
  /**
   * Verifies that `fieldPath` is included by at least one field in this field
   * mask.
   *
   * This is an O(n) operation, where `n` is the size of the field mask.
   */
  covers(e) {
    for (const t of this.fields) if (t.isPrefixOf(e)) return true;
    return false;
  }
  isEqual(e) {
    return __PRIVATE_arrayEquals(this.fields, e.fields, ((e2, t) => e2.isEqual(t)));
  }
};
var u = class _u {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new _u({
      mapValue: {}
    });
  }
  /**
   * Returns the value at the given path or null.
   *
   * @param path - the path to search
   * @returns The value at the path or null if the path is not set.
   */
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let t = this.value;
      for (let r2 = 0; r2 < e.length - 1; ++r2) if (t = (t.mapValue.fields || {})[e.get(r2)], !__PRIVATE_isMapValue(t)) return null;
      return t = (t.mapValue.fields || {})[e.lastSegment()], t || null;
    }
  }
  /**
   * Sets the field to the provided value.
   *
   * @param path - The field path to set.
   * @param value - The value to set.
   */
  set(e, t) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = __PRIVATE_deepClone(t);
  }
  /**
   * Sets the provided fields to the provided values.
   *
   * @param data - A map of fields to values (or null for deletes).
   */
  setAll(e) {
    let t = Y.emptyPath(), r2 = {}, n2 = [];
    e.forEach(((e2, i2) => {
      if (!t.isImmediateParentOf(i2)) {
        const e3 = this.getFieldsMap(t);
        this.applyChanges(e3, r2, n2), r2 = {}, n2 = [], t = i2.popLast();
      }
      e2 ? r2[i2.lastSegment()] = __PRIVATE_deepClone(e2) : n2.push(i2.lastSegment());
    }));
    const i = this.getFieldsMap(t);
    this.applyChanges(i, r2, n2);
  }
  /**
   * Removes the field at the specified path. If there is no field at the
   * specified path, nothing is changed.
   *
   * @param path - The field path to remove.
   */
  delete(e) {
    const t = this.field(e.popLast());
    __PRIVATE_isMapValue(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return __PRIVATE_valueEquals(this.value, e.value);
  }
  /**
   * Returns the map that contains the leaf element of `path`. If the parent
   * entry does not yet exist, or if it is not a map, a new map will be created.
   */
  getFieldsMap(e) {
    let t = this.value;
    t.mapValue.fields || (t.mapValue = {
      fields: {}
    });
    for (let r2 = 0; r2 < e.length; ++r2) {
      let n2 = t.mapValue.fields[e.get(r2)];
      __PRIVATE_isMapValue(n2) && n2.mapValue.fields || (n2 = {
        mapValue: {
          fields: {}
        }
      }, t.mapValue.fields[e.get(r2)] = n2), t = n2;
    }
    return t.mapValue.fields;
  }
  /**
   * Modifies `fieldsMap` by adding, replacing or deleting the specified
   * entries.
   */
  applyChanges(e, t, r2) {
    forEach(t, ((t2, r3) => e[t2] = r3));
    for (const t2 of r2) delete e[t2];
  }
  clone() {
    return new _u(__PRIVATE_deepClone(this.value));
  }
};
var MutableDocument = class _MutableDocument {
  constructor(e, t, r2, n2, i, s2, o2) {
    this.key = e, this.documentType = t, this.version = r2, this.readTime = n2, this.createTime = i, this.data = s2, this.documentState = o2;
  }
  /**
   * Creates a document with no known version or data, but which can serve as
   * base document for mutations.
   */
  static newInvalidDocument(e) {
    return new _MutableDocument(
      e,
      0,
      /* version */
      j.min(),
      /* readTime */
      j.min(),
      /* createTime */
      j.min(),
      u.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist with the given data at the
   * given version.
   */
  static newFoundDocument(e, t, r2, n2) {
    return new _MutableDocument(
      e,
      1,
      /* version */
      t,
      /* readTime */
      j.min(),
      /* createTime */
      r2,
      n2,
      0
      /* DocumentState.SYNCED */
    );
  }
  /** Creates a new document that is known to not exist at the given version. */
  static newNoDocument(e, t) {
    return new _MutableDocument(
      e,
      2,
      /* version */
      t,
      /* readTime */
      j.min(),
      /* createTime */
      j.min(),
      u.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist at the given version but
   * whose data is not known (e.g. a document that was updated without a known
   * base document).
   */
  static newUnknownDocument(e, t) {
    return new _MutableDocument(
      e,
      3,
      /* version */
      t,
      /* readTime */
      j.min(),
      /* createTime */
      j.min(),
      u.empty(),
      2
      /* DocumentState.HAS_COMMITTED_MUTATIONS */
    );
  }
  /**
   * Changes the document type to indicate that it exists and that its version
   * and data are known.
   */
  convertToFoundDocument(e, t) {
    return !this.createTime.isEqual(j.min()) || 2 !== this.documentType && 0 !== this.documentType || (this.createTime = e), this.version = e, this.documentType = 1, this.data = t, this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it doesn't exist at the given
   * version.
   */
  convertToNoDocument(e) {
    return this.version = e, this.documentType = 2, this.data = u.empty(), this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it exists at a given version but
   * that its data is not known (e.g. a document that was updated without a known
   * base document).
   */
  convertToUnknownDocument(e) {
    return this.version = e, this.documentType = 3, this.data = u.empty(), this.documentState = 2, this;
  }
  setHasCommittedMutations() {
    return this.documentState = 2, this;
  }
  setHasLocalMutations() {
    return this.documentState = 1, this.version = j.min(), this;
  }
  setReadTime(e) {
    return this.readTime = e, this;
  }
  get hasLocalMutations() {
    return 1 === this.documentState;
  }
  get hasCommittedMutations() {
    return 2 === this.documentState;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return 0 !== this.documentType;
  }
  isFoundDocument() {
    return 1 === this.documentType;
  }
  isNoDocument() {
    return 2 === this.documentType;
  }
  isUnknownDocument() {
    return 3 === this.documentType;
  }
  isEqual(e) {
    return e instanceof _MutableDocument && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data);
  }
  mutableCopy() {
    return new _MutableDocument(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
};
var __PRIVATE_TargetImpl = class {
  constructor(e, t = null, r2 = [], n2 = [], i = null, s2 = null, o2 = null) {
    this.path = e, this.collectionGroup = t, this.orderBy = r2, this.filters = n2, this.limit = i, this.startAt = s2, this.endAt = o2, this.Ie = null;
  }
};
function __PRIVATE_newTarget(e, t = null, r2 = [], n2 = [], i = null, s2 = null, o2 = null) {
  return new __PRIVATE_TargetImpl(e, t, r2, n2, i, s2, o2);
}
var __PRIVATE_QueryImpl = class {
  /**
   * Initializes a Query with a path and optional additional query constraints.
   * Path must currently be empty if this is a collection group query.
   */
  constructor(e, t = null, r2 = [], n2 = [], i = null, s2 = "F", o2 = null, a2 = null) {
    this.path = e, this.collectionGroup = t, this.explicitOrderBy = r2, this.filters = n2, this.limit = i, this.limitType = s2, this.startAt = o2, this.endAt = a2, this.pe = null, // The corresponding `Target` of this `Query` instance, for use with
    // non-aggregate queries.
    this.ye = null, // The corresponding `Target` of this `Query` instance, for use with
    // aggregate queries. Unlike targets for non-aggregate queries,
    // aggregate query targets do not contain normalized order-bys, they only
    // contain explicit order-bys.
    this.we = null, this.startAt, this.endAt;
  }
};
function __PRIVATE_isCollectionGroupQuery(e) {
  return null !== e.collectionGroup;
}
function __PRIVATE_queryNormalizedOrderBy(e) {
  const t = __PRIVATE_debugCast(e);
  if (null === t.pe) {
    t.pe = [];
    const e2 = /* @__PURE__ */ new Set();
    for (const r3 of t.explicitOrderBy) t.pe.push(r3), e2.add(r3.field.canonicalString());
    const r2 = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc", n2 = (
      // Returns the sorted set of inequality filter fields used in this query.
      (function __PRIVATE_getInequalityFilterFields(e3) {
        let t2 = new SortedSet(Y.comparator);
        return e3.filters.forEach(((e4) => {
          e4.getFlattenedFilters().forEach(((e5) => {
            e5.isInequality() && (t2 = t2.add(e5.field));
          }));
        })), t2;
      })(t)
    );
    n2.forEach(((n3) => {
      e2.has(n3.canonicalString()) || n3.isKeyField() || t.pe.push(new OrderBy(n3, r2));
    })), // Add the document key field to the last if it is not explicitly ordered.
    e2.has(Y.keyField().canonicalString()) || t.pe.push(new OrderBy(Y.keyField(), r2));
  }
  return t.pe;
}
function __PRIVATE_queryToTarget(e) {
  const t = __PRIVATE_debugCast(e);
  return t.ye || (t.ye = __PRIVATE__queryToTarget(t, __PRIVATE_queryNormalizedOrderBy(e))), t.ye;
}
function __PRIVATE__queryToTarget(e, t) {
  if ("F" === e.limitType) return __PRIVATE_newTarget(e.path, e.collectionGroup, t, e.filters, e.limit, e.startAt, e.endAt);
  {
    t = t.map(((e2) => {
      const t2 = "desc" === e2.dir ? "asc" : "desc";
      return new OrderBy(e2.field, t2);
    }));
    const r2 = e.endAt ? new Bound(e.endAt.position, e.endAt.inclusive) : null, n2 = e.startAt ? new Bound(e.startAt.position, e.startAt.inclusive) : null;
    return __PRIVATE_newTarget(e.path, e.collectionGroup, t, e.filters, e.limit, r2, n2);
  }
}
function __PRIVATE_queryWithAddedFilter(e, t) {
  const r2 = e.filters.concat([t]);
  return new __PRIVATE_QueryImpl(e.path, e.collectionGroup, e.explicitOrderBy.slice(), r2, e.limit, e.limitType, e.startAt, e.endAt);
}
function __PRIVATE_queryEquals(e, t) {
  return (function __PRIVATE_targetEquals(e2, t2) {
    if (e2.limit !== t2.limit) return false;
    if (e2.orderBy.length !== t2.orderBy.length) return false;
    for (let r2 = 0; r2 < e2.orderBy.length; r2++) if (!__PRIVATE_orderByEquals(e2.orderBy[r2], t2.orderBy[r2])) return false;
    if (e2.filters.length !== t2.filters.length) return false;
    for (let r2 = 0; r2 < e2.filters.length; r2++) if (!__PRIVATE_filterEquals(e2.filters[r2], t2.filters[r2])) return false;
    return e2.collectionGroup === t2.collectionGroup && !!e2.path.isEqual(t2.path) && !!__PRIVATE_boundEquals(e2.startAt, t2.startAt) && __PRIVATE_boundEquals(e2.endAt, t2.endAt);
  })(__PRIVATE_queryToTarget(e), __PRIVATE_queryToTarget(t)) && e.limitType === t.limitType;
}
function __PRIVATE_toDouble(e, t) {
  if (e.useProto3Json) {
    if (isNaN(t)) return {
      doubleValue: "NaN"
    };
    if (t === 1 / 0) return {
      doubleValue: "Infinity"
    };
    if (t === -1 / 0) return {
      doubleValue: "-Infinity"
    };
  }
  return {
    doubleValue: __PRIVATE_isNegativeZero(t) ? "-0" : t
  };
}
function toNumber(e, t, r2) {
  return (function isSafeInteger(e2) {
    return "number" == typeof e2 && Number.isInteger(e2) && !__PRIVATE_isNegativeZero(e2) && e2 <= Number.MAX_SAFE_INTEGER && e2 >= Number.MIN_SAFE_INTEGER;
  })(t) ? (function __PRIVATE_toInteger(e2) {
    return {
      integerValue: "" + e2
    };
  })(t) : __PRIVATE_toDouble(e, t);
}
var TransformOperation = class {
  constructor() {
    this._ = void 0;
  }
};
var __PRIVATE_ServerTimestampTransform = class extends TransformOperation {
};
var __PRIVATE_ArrayUnionTransformOperation = class extends TransformOperation {
  constructor(e) {
    super(), this.elements = e;
  }
};
var __PRIVATE_ArrayRemoveTransformOperation = class extends TransformOperation {
  constructor(e) {
    super(), this.elements = e;
  }
};
var __PRIVATE_NumericTransformOperation = class extends TransformOperation {
  constructor(e, t) {
    super(), this.serializer = e, this.ge = t;
  }
};
var __PRIVATE_NumericIncrementTransformOperation = class extends __PRIVATE_NumericTransformOperation {
};
var __PRIVATE_NumericMinimumTransformOperation = class extends __PRIVATE_NumericTransformOperation {
};
var __PRIVATE_NumericMaximumTransformOperation = class extends __PRIVATE_NumericTransformOperation {
};
var FieldTransform = class {
  constructor(e, t) {
    this.field = e, this.transform = t;
  }
};
var P = class _P {
  constructor(e, t) {
    this.updateTime = e, this.exists = t;
  }
  /** Creates a new empty Precondition. */
  static none() {
    return new _P();
  }
  /** Creates a new Precondition with an exists flag. */
  static exists(e) {
    return new _P(void 0, e);
  }
  /** Creates a new Precondition based on a version a document exists at. */
  static updateTime(e) {
    return new _P(e);
  }
  /** Returns whether this Precondition is empty. */
  get isNone() {
    return void 0 === this.updateTime && void 0 === this.exists;
  }
  isEqual(e) {
    return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime);
  }
};
var Mutation = class {
};
var __PRIVATE_SetMutation = class extends Mutation {
  constructor(e, t, r2, n2 = []) {
    super(), this.key = e, this.value = t, this.precondition = r2, this.fieldTransforms = n2, this.type = 0;
  }
  getFieldMask() {
    return null;
  }
};
var __PRIVATE_PatchMutation = class extends Mutation {
  constructor(e, t, r2, n2, i = []) {
    super(), this.key = e, this.data = t, this.fieldMask = r2, this.precondition = n2, this.fieldTransforms = i, this.type = 1;
  }
  getFieldMask() {
    return this.fieldMask;
  }
};
var F = class extends Mutation {
  constructor(e, t) {
    super(), this.key = e, this.precondition = t, this.type = 2, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
};
var C = class extends Mutation {
  constructor(e, t) {
    super(), this.key = e, this.precondition = t, this.type = 3, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
};
var le = /* @__PURE__ */ (() => {
  const e = {
    asc: "ASCENDING",
    desc: "DESCENDING"
  };
  return e;
})();
var he = /* @__PURE__ */ (() => {
  const e = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
  };
  return e;
})();
var fe = /* @__PURE__ */ (() => {
  const e = {
    and: "AND",
    or: "OR"
  };
  return e;
})();
var JsonProtoSerializer = class {
  constructor(e, t) {
    this.databaseId = e, this.useProto3Json = t;
  }
};
function toTimestamp(e, t) {
  if (e.useProto3Json) {
    return `${new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z`;
  }
  return {
    seconds: "" + t.seconds,
    nanos: t.nanoseconds
  };
}
function __PRIVATE_toBytes(e, t) {
  return e.useProto3Json ? t.toBase64() : t.toUint8Array();
}
function __PRIVATE_toVersion(e, t) {
  return toTimestamp(e, t.toTimestamp());
}
function __PRIVATE_fromVersion(e) {
  return __PRIVATE_hardAssert(!!e, 49232), j.fromTimestamp((function fromTimestamp(e2) {
    const t = __PRIVATE_normalizeTimestamp(e2);
    return new Timestamp(t.seconds, t.nanos);
  })(e));
}
function __PRIVATE_toResourceName(e, t) {
  return __PRIVATE_toResourcePath(e, t).canonicalString();
}
function __PRIVATE_toResourcePath(e, t) {
  const r2 = (function __PRIVATE_fullyQualifiedPrefixPath(e2) {
    return new ResourcePath(["projects", e2.projectId, "databases", e2.database]);
  })(e).child("documents");
  return void 0 === t ? r2 : r2.child(t);
}
function __PRIVATE_toName(e, t) {
  return __PRIVATE_toResourceName(e.databaseId, t.path);
}
function fromName(e, t) {
  const r2 = (function __PRIVATE_fromResourceName(e2) {
    const t2 = ResourcePath.fromString(e2);
    return __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(t2), 10190, {
      key: t2.toString()
    }), t2;
  })(t);
  if (r2.get(1) !== e.databaseId.projectId) throw new k(O.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + r2.get(1) + " vs " + e.databaseId.projectId);
  if (r2.get(3) !== e.databaseId.database) throw new k(O.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + r2.get(3) + " vs " + e.databaseId.database);
  return new x((function __PRIVATE_extractLocalPathFromResourceName(e2) {
    return __PRIVATE_hardAssert(e2.length > 4 && "documents" === e2.get(4), 29091, {
      key: e2.toString()
    }), e2.popFirst(5);
  })(r2));
}
function __PRIVATE_toMutationDocument(e, t, r2) {
  return {
    name: __PRIVATE_toName(e, t),
    fields: r2.value.mapValue.fields
  };
}
function __PRIVATE_fromBatchGetDocumentsResponse(e, t) {
  return "found" in t ? (function __PRIVATE_fromFound(e2, t2) {
    __PRIVATE_hardAssert(!!t2.found, 43571), t2.found.name, t2.found.updateTime;
    const r2 = fromName(e2, t2.found.name), n2 = __PRIVATE_fromVersion(t2.found.updateTime), i = t2.found.createTime ? __PRIVATE_fromVersion(t2.found.createTime) : j.min(), s2 = new u({
      mapValue: {
        fields: t2.found.fields
      }
    });
    return MutableDocument.newFoundDocument(r2, n2, i, s2);
  })(e, t) : "missing" in t ? (function __PRIVATE_fromMissing(e2, t2) {
    __PRIVATE_hardAssert(!!t2.missing, 3894), __PRIVATE_hardAssert(!!t2.readTime, 22933);
    const r2 = fromName(e2, t2.missing), n2 = __PRIVATE_fromVersion(t2.readTime);
    return MutableDocument.newNoDocument(r2, n2);
  })(e, t) : z(7234, {
    result: t
  });
}
function toMutation(e, t) {
  let r2;
  if (t instanceof __PRIVATE_SetMutation) r2 = {
    update: __PRIVATE_toMutationDocument(e, t.key, t.value)
  };
  else if (t instanceof F) r2 = {
    delete: __PRIVATE_toName(e, t.key)
  };
  else if (t instanceof __PRIVATE_PatchMutation) r2 = {
    update: __PRIVATE_toMutationDocument(e, t.key, t.data),
    updateMask: __PRIVATE_toDocumentMask(t.fieldMask)
  };
  else {
    if (!(t instanceof C)) return z(16599, {
      Fe: t.type
    });
    r2 = {
      verify: __PRIVATE_toName(e, t.key)
    };
  }
  return t.fieldTransforms.length > 0 && (r2.updateTransforms = t.fieldTransforms.map(((e2) => (function __PRIVATE_toFieldTransform(e3, t2) {
    const r3 = t2.transform;
    if (r3 instanceof __PRIVATE_ServerTimestampTransform) return {
      fieldPath: t2.field.canonicalString(),
      setToServerValue: "REQUEST_TIME"
    };
    if (r3 instanceof __PRIVATE_ArrayUnionTransformOperation) return {
      fieldPath: t2.field.canonicalString(),
      appendMissingElements: {
        values: r3.elements
      }
    };
    if (r3 instanceof __PRIVATE_ArrayRemoveTransformOperation) return {
      fieldPath: t2.field.canonicalString(),
      removeAllFromArray: {
        values: r3.elements
      }
    };
    if (r3 instanceof __PRIVATE_NumericIncrementTransformOperation) return {
      fieldPath: t2.field.canonicalString(),
      increment: r3.ge
    };
    if (r3 instanceof __PRIVATE_NumericMinimumTransformOperation) return {
      fieldPath: t2.field.canonicalString(),
      minimum: r3.ge
    };
    if (r3 instanceof __PRIVATE_NumericMaximumTransformOperation) return {
      fieldPath: t2.field.canonicalString(),
      maximum: r3.ge
    };
    throw z(20930, {
      transform: t2.transform
    });
  })(0, e2)))), t.precondition.isNone || (r2.currentDocument = (function __PRIVATE_toPrecondition(e2, t2) {
    return void 0 !== t2.updateTime ? {
      updateTime: __PRIVATE_toVersion(e2, t2.updateTime)
    } : void 0 !== t2.exists ? {
      exists: t2.exists
    } : z(27497);
  })(e, t.precondition)), r2;
}
function __PRIVATE_toQueryTarget(e, t) {
  const r2 = {
    structuredQuery: {}
  }, n2 = t.path;
  let i;
  null !== t.collectionGroup ? (i = n2, r2.structuredQuery.from = [{
    collectionId: t.collectionGroup,
    allDescendants: true
  }]) : (i = n2.popLast(), r2.structuredQuery.from = [{
    collectionId: n2.lastSegment()
  }]), r2.parent = (function __PRIVATE_toQueryPath(e2, t2) {
    return __PRIVATE_toResourceName(e2.databaseId, t2);
  })(e, i);
  const s2 = (function __PRIVATE_toFilters(e2) {
    if (0 === e2.length) return;
    return __PRIVATE_toFilter(CompositeFilter.create(
      e2,
      "and"
      /* CompositeOperator.AND */
    ));
  })(t.filters);
  s2 && (r2.structuredQuery.where = s2);
  const o2 = (function __PRIVATE_toOrder(e2) {
    if (0 === e2.length) return;
    return e2.map(((e3) => (
      // visible for testing
      (function __PRIVATE_toPropertyOrder(e4) {
        return {
          field: __PRIVATE_toFieldPathReference(e4.field),
          direction: __PRIVATE_toDirection(e4.dir)
        };
      })(e3)
    )));
  })(t.orderBy);
  o2 && (r2.structuredQuery.orderBy = o2);
  const a2 = (function __PRIVATE_toInt32Proto(e2, t2) {
    return e2.useProto3Json || tt(t2) ? t2 : {
      value: t2
    };
  })(e, t.limit);
  return null !== a2 && (r2.structuredQuery.limit = a2), t.startAt && (r2.structuredQuery.startAt = (function __PRIVATE_toStartAtCursor(e2) {
    return {
      before: e2.inclusive,
      values: e2.position
    };
  })(t.startAt)), t.endAt && (r2.structuredQuery.endAt = (function __PRIVATE_toEndAtCursor(e2) {
    return {
      before: !e2.inclusive,
      values: e2.position
    };
  })(t.endAt)), {
    ve: r2,
    parent: i
  };
}
function __PRIVATE_toDirection(e) {
  return le[e];
}
function __PRIVATE_toOperatorName(e) {
  return he[e];
}
function __PRIVATE_toCompositeOperatorName(e) {
  return fe[e];
}
function __PRIVATE_toFieldPathReference(e) {
  return {
    fieldPath: e.canonicalString()
  };
}
function __PRIVATE_toFilter(e) {
  return e instanceof FieldFilter ? (function __PRIVATE_toUnaryOrFieldFilter(e2) {
    if ("==" === e2.op) {
      if (__PRIVATE_isNanValue(e2.value)) return {
        unaryFilter: {
          field: __PRIVATE_toFieldPathReference(e2.field),
          op: "IS_NAN"
        }
      };
      if (__PRIVATE_isNullValue(e2.value)) return {
        unaryFilter: {
          field: __PRIVATE_toFieldPathReference(e2.field),
          op: "IS_NULL"
        }
      };
    } else if ("!=" === e2.op) {
      if (__PRIVATE_isNanValue(e2.value)) return {
        unaryFilter: {
          field: __PRIVATE_toFieldPathReference(e2.field),
          op: "IS_NOT_NAN"
        }
      };
      if (__PRIVATE_isNullValue(e2.value)) return {
        unaryFilter: {
          field: __PRIVATE_toFieldPathReference(e2.field),
          op: "IS_NOT_NULL"
        }
      };
    }
    return {
      fieldFilter: {
        field: __PRIVATE_toFieldPathReference(e2.field),
        op: __PRIVATE_toOperatorName(e2.op),
        value: e2.value
      }
    };
  })(e) : e instanceof CompositeFilter ? (function __PRIVATE_toCompositeFilter(e2) {
    const t = e2.getFilters().map(((e3) => __PRIVATE_toFilter(e3)));
    if (1 === t.length) return t[0];
    return {
      compositeFilter: {
        op: __PRIVATE_toCompositeOperatorName(e2.op),
        filters: t
      }
    };
  })(e) : z(54877, {
    filter: e
  });
}
function __PRIVATE_toDocumentMask(e) {
  const t = [];
  return e.fields.forEach(((e2) => t.push(e2.canonicalString()))), {
    fieldPaths: t
  };
}
function __PRIVATE_isValidResourceName(e) {
  return e.length >= 4 && "projects" === e.get(0) && "databases" === e.get(2);
}
function __PRIVATE_isProtoValueSerializable(e) {
  return !!e && "function" == typeof e._toProto && "ProtoValue" === e._protoValueType;
}
function __PRIVATE_newSerializer(e) {
  return new JsonProtoSerializer(
    e,
    /* useProto3Json= */
    true
  );
}
var Datastore = class {
};
var __PRIVATE_DatastoreImpl = class extends Datastore {
  constructor(e, t, r2, n2) {
    super(), this.authCredentials = e, this.appCheckCredentials = t, this.connection = r2, this.serializer = n2, this.be = false;
  }
  De() {
    if (this.be) throw new k(O.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  /** Invokes the provided RPC with auth and AppCheck tokens. */
  le(e, t, r2, n2) {
    return this.De(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((([i, s2]) => this.connection.le(e, __PRIVATE_toResourcePath(t, r2), n2, i, s2))).catch(((e2) => {
      throw "FirebaseError" === e2.name ? (e2.code === O.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e2) : new k(O.UNKNOWN, e2.toString());
    }));
  }
  /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */
  de(e, t, r2, n2, i) {
    return this.De(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then((([s2, o2]) => this.connection.de(e, __PRIVATE_toResourcePath(t, r2), n2, s2, o2, i))).catch(((e2) => {
      throw "FirebaseError" === e2.name ? (e2.code === O.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e2) : new k(O.UNKNOWN, e2.toString());
    }));
  }
  terminate() {
    this.be = true, this.connection.terminate();
  }
};
async function S(e, t) {
  const r2 = __PRIVATE_debugCast(e), n2 = {
    writes: t.map(((e2) => toMutation(r2.serializer, e2)))
  };
  await r2.le("Commit", r2.serializer.databaseId, ResourcePath.emptyPath(), n2);
}
async function q(e, t) {
  const r2 = __PRIVATE_debugCast(e), n2 = {
    documents: t.map(((e2) => __PRIVATE_toName(r2.serializer, e2)))
  }, i = await r2.de("BatchGetDocuments", r2.serializer.databaseId, ResourcePath.emptyPath(), n2, t.length), s2 = /* @__PURE__ */ new Map();
  i.forEach(((e2) => {
    const t2 = __PRIVATE_fromBatchGetDocumentsResponse(r2.serializer, e2);
    s2.set(t2.key.toString(), t2);
  }));
  const o2 = [];
  return t.forEach(((e2) => {
    const t2 = s2.get(e2.toString());
    __PRIVATE_hardAssert(!!t2, 55234, {
      key: e2
    }), o2.push(t2);
  })), o2;
}
async function __PRIVATE_invokeRunQueryRpc(e, t) {
  const r2 = __PRIVATE_debugCast(e), { ve: n2, parent: i } = __PRIVATE_toQueryTarget(r2.serializer, __PRIVATE_queryToTarget(t));
  return (await r2.de("RunQuery", r2.serializer.databaseId, i, {
    structuredQuery: n2.structuredQuery
  })).filter(((e2) => !!e2.document)).map(((e2) => (function fromDocument(e3, t2, r3) {
    const n3 = fromName(e3, t2.name), i2 = __PRIVATE_fromVersion(t2.updateTime), s2 = t2.createTime ? __PRIVATE_fromVersion(t2.createTime) : j.min(), o2 = new u({
      mapValue: {
        fields: t2.fields
      }
    }), a2 = MutableDocument.newFoundDocument(n3, i2, s2, o2);
    return r3 ? a2.setHasCommittedMutations() : a2;
  })(r2.serializer, e2.document, void 0)));
}
async function m(e, t, r2) {
  const n2 = __PRIVATE_debugCast(e), { request: i, Ne: s2, parent: o2 } = (function __PRIVATE_toRunAggregationQueryRequest(e2, t2, r3, n3) {
    const { ve: i2, parent: s3 } = __PRIVATE_toQueryTarget(e2, t2), o3 = {}, a3 = [];
    let u3 = 0;
    return r3.forEach(((e3) => {
      const t3 = "aggregate_" + u3++;
      o3[t3] = e3.alias, "count" === e3.aggregateType ? a3.push({
        alias: t3,
        count: {}
      }) : "avg" === e3.aggregateType ? a3.push({
        alias: t3,
        avg: {
          field: __PRIVATE_toFieldPathReference(e3.fieldPath)
        }
      }) : "sum" === e3.aggregateType && a3.push({
        alias: t3,
        sum: {
          field: __PRIVATE_toFieldPathReference(e3.fieldPath)
        }
      });
    })), {
      request: {
        structuredAggregationQuery: {
          aggregations: a3,
          structuredQuery: i2.structuredQuery
        },
        parent: i2.parent
      },
      Ne: o3,
      parent: s3
    };
  })(n2.serializer, (function __PRIVATE_queryToAggregateTarget(e2) {
    const t2 = __PRIVATE_debugCast(e2);
    return t2.we || // Do not include implicit order-bys for aggregate queries.
    (t2.we = __PRIVATE__queryToTarget(t2, e2.explicitOrderBy)), t2.we;
  })(t), r2);
  n2.connection.ae || delete i.parent;
  const a2 = (await n2.de(
    "RunAggregationQuery",
    n2.serializer.databaseId,
    o2,
    i,
    /*expectedResponseCount=*/
    1
  )).filter(((e2) => !!e2.result));
  __PRIVATE_hardAssert(1 === a2.length, 64727);
  const u2 = a2[0].result?.aggregateFields;
  return Object.keys(u2).reduce(((e2, t2) => (e2[s2[t2]] = u2[t2], e2)), {});
}
var ut = "ComponentProvider";
var me = /* @__PURE__ */ new Map();
function d(e) {
  if (e._terminated) throw new k(O.FAILED_PRECONDITION, "The client has already been terminated.");
  if (!me.has(e)) {
    a(ut, "Initializing Datastore");
    const t = (function __PRIVATE_newConnection(e2) {
      return new __PRIVATE_FetchConnection(e2);
    })((function __PRIVATE_makeDatabaseInfo(e2, t2, r3, n3, i) {
      return new DatabaseInfo(e2, t2, r3, i.host, i.ssl, i.experimentalForceLongPolling, i.experimentalAutoDetectLongPolling, __PRIVATE_cloneLongPollingOptions(i.experimentalLongPollingOptions), i.useFetchStreams, i.isUsingEmulator, n3, i._customHeaders, i.grpcFlowControlWindow);
    })(e._databaseId, e.app.options.appId || "", e._persistenceKey, e.app.options.apiKey, e._freezeSettings())), r2 = __PRIVATE_newSerializer(e._databaseId), n2 = (function __PRIVATE_newDatastore(e2, t2, r3, n3) {
      return new __PRIVATE_DatastoreImpl(e2, t2, r3, n3);
    })(e._authCredentials, e._appCheckCredentials, t, r2);
    me.set(e, n2);
  }
  return me.get(e);
}
var de = 1048576;
var Ee = "firestore.googleapis.com";
var Te = true;
var FirestoreSettingsImpl = class {
  constructor(e) {
    if (void 0 === e.host) {
      if (void 0 !== e.ssl) throw new k(O.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = Ee, this.ssl = Te;
    } else this.host = e.host, this.ssl = e.ssl ?? Te;
    if (this.isUsingEmulator = void 0 !== e.emulatorOptions, this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, this.localCache = e.localCache, e._customHeaders && (this._customHeaders = {
      ...e._customHeaders
    }), void 0 === e.cacheSizeBytes) this.cacheSizeBytes = 41943040;
    else {
      if (-1 !== e.cacheSizeBytes && e.cacheSizeBytes < de) throw new k(O.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    if ((function __PRIVATE_validateIsNotUsedTogether(e2, t, r2, n2) {
      if (true === t && true === n2) throw new k(O.INVALID_ARGUMENT, `${e2} and ${r2} cannot be used together.`);
    })("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = false : void 0 === e.experimentalAutoDetectLongPolling ? this.experimentalAutoDetectLongPolling = true : (
      // For backwards compatibility, coerce the value to boolean even though
      // the TypeScript compiler has narrowed the type to boolean already.
      // noinspection PointlessBooleanExpressionJS
      this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling
    ), this.experimentalLongPollingOptions = __PRIVATE_cloneLongPollingOptions(e.experimentalLongPollingOptions ?? {}), (function __PRIVATE_validateLongPollingOptions(e2) {
      if (void 0 !== e2.timeoutSeconds) {
        if (isNaN(e2.timeoutSeconds)) throw new k(O.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (must not be NaN)`);
        if (e2.timeoutSeconds < 5) throw new k(O.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (minimum allowed value is 5)`);
        if (e2.timeoutSeconds > 30) throw new k(O.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (maximum allowed value is 30)`);
      }
    })(this.experimentalLongPollingOptions), this.useFetchStreams = !!e.useFetchStreams, void 0 !== e.grpcFlowControlWindow) {
      if ("number" != typeof e.grpcFlowControlWindow || e.grpcFlowControlWindow <= 0 || e.grpcFlowControlWindow > 2147483647 || !Number.isInteger(e.grpcFlowControlWindow)) throw new k(O.INVALID_ARGUMENT, "grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");
      this.grpcFlowControlWindow = e.grpcFlowControlWindow;
    }
  }
  isEqual(e) {
    return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && (function __PRIVATE_longPollingOptionsEqual(e2, t) {
      return e2.timeoutSeconds === t.timeoutSeconds;
    })(this.experimentalLongPollingOptions, e.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams && this.grpcFlowControlWindow === e.grpcFlowControlWindow && (function __PRIVATE_customHeadersEqual(e2, t) {
      if (e2 === t) return true;
      if (!e2 || !t) return false;
      const r2 = Object.keys(e2), n2 = Object.keys(t);
      if (r2.length !== n2.length) return false;
      for (const n3 of r2) if (e2[n3] !== t[n3]) return false;
      return true;
    })(this._customHeaders, e._customHeaders);
  }
};
var n = class {
  /** @hideconstructor */
  constructor(e, t, r2, n2) {
    this._authCredentials = e, this._appCheckCredentials = t, this._databaseId = r2, this._app = n2, /**
     * Whether it's a Firestore or Firestore Lite instance.
     */
    this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new FirestoreSettingsImpl({}), this._settingsFrozen = false, this._emulatorOptions = {}, // A task that is assigned when the terminate() is invoked and resolved when
    // all components have shut down. Otherwise, Firestore is not terminated,
    // which can mean either the FirestoreClient is in the process of starting,
    // or restarting.
    this._terminateTask = "notTerminated";
  }
  /**
   * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
   * instance.
   */
  get app() {
    if (!this._app) throw new k(O.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return "notTerminated" !== this._terminateTask;
  }
  _setSettings(e) {
    if (this._settingsFrozen) throw new k(O.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new FirestoreSettingsImpl(e), this._emulatorOptions = e.emulatorOptions || {}, void 0 !== e.credentials && (this._authCredentials = (function __PRIVATE_makeAuthCredentialsProvider(e2) {
      if (!e2) return new __PRIVATE_EmptyAuthCredentialsProvider();
      switch (e2.type) {
        case "firstParty":
          return new __PRIVATE_FirstPartyAuthCredentialsProvider(e2.sessionIndex || "0", e2.iamToken || null, e2.authTokenFactory || null);
        case "provider":
          return e2.client;
        default:
          throw new k(O.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
      }
    })(e.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _getEmulatorOptions() {
    return this._emulatorOptions;
  }
  _freezeSettings() {
    return this._settingsFrozen = true, this._settings;
  }
  _delete() {
    return "notTerminated" === this._terminateTask && (this._terminateTask = this._terminate()), this._terminateTask;
  }
  async _restart() {
    "notTerminated" === this._terminateTask ? await this._terminate() : this._terminateTask = "notTerminated";
  }
  /** Returns a JSON-serializable representation of this `Firestore` instance. */
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  /**
   * Terminates all components used by this client. Subclasses can override
   * this method to clean up their own dependencies, but must also call this
   * method.
   *
   * Only ever called once.
   */
  _terminate() {
    return (function __PRIVATE_removeComponents(e) {
      const t = me.get(e);
      t && (a(ut, "Removing Datastore"), me.delete(e), t.terminate());
    })(this), Promise.resolve();
  }
};
function initializeFirestore(e, t, r2) {
  r2 || (r2 = K);
  const n2 = _getProvider(e, "firestore/lite");
  if (n2.isInitialized(r2)) throw new k(O.FAILED_PRECONDITION, "Firestore can only be initialized once per app.");
  return n2.initialize({
    options: t,
    instanceIdentifier: r2
  });
}
function getFirestore(e, t) {
  const r2 = "object" == typeof e ? e : getApp(), n2 = "string" == typeof e ? e : t || "(default)", i = _getProvider(r2, "firestore/lite").getImmediate({
    identifier: n2
  });
  if (!i._initialized) {
    const e2 = getDefaultEmulatorHostnameAndPort("firestore");
    e2 && connectFirestoreEmulator(i, ...e2);
  }
  return i;
}
function connectFirestoreEmulator(e, t, r2, i = {}) {
  e = f(e, n);
  const s2 = isCloudWorkstation(t), o2 = e._getSettings(), a2 = {
    ...o2,
    emulatorOptions: e._getEmulatorOptions()
  }, u2 = `${t}:${r2}`;
  s2 && pingServer(`https://${u2}`), o2.host !== Ee && o2.host !== u2 && __PRIVATE_logWarn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");
  const _2 = {
    ...o2,
    host: u2,
    ssl: s2,
    emulatorOptions: i
  };
  if (!deepEqual(_2, a2) && (e._setSettings(_2), i.mockUserToken)) {
    let t2, r3;
    if ("string" == typeof i.mockUserToken) t2 = i.mockUserToken, r3 = User.MOCK_USER;
    else {
      t2 = createMockUserToken(i.mockUserToken, e._app?.options.projectId);
      const n2 = i.mockUserToken.sub || i.mockUserToken.user_id;
      if (!n2) throw new k(O.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      r3 = new User(n2);
    }
    e._authCredentials = new __PRIVATE_EmulatorAuthCredentialsProvider(new __PRIVATE_OAuthToken(t2, r3));
  }
}
function terminate(e) {
  return e = f(e, n), _removeServiceInstance(e.app, "firestore/lite"), e._delete();
}
var Query = class _Query {
  // This is the lite version of the Query class in the main SDK.
  /** @hideconstructor protected */
  constructor(e, t, r2) {
    this.converter = t, this._query = r2, /** The type of this Firestore reference. */
    this.type = "query", this.firestore = e;
  }
  withConverter(e) {
    return new _Query(this.firestore, e, this._query);
  }
};
var DocumentReference = class _DocumentReference {
  /** @hideconstructor */
  constructor(e, t, r2) {
    this.converter = t, this._key = r2, /** The type of this Firestore reference. */
    this.type = "document", this.firestore = e;
  }
  get _path() {
    return this._key.path;
  }
  /**
   * The document's identifier within its collection.
   */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced document (relative
   * to the root of the database).
   */
  get path() {
    return this._key.path.canonicalString();
  }
  /**
   * The collection this `DocumentReference` belongs to.
   */
  get parent() {
    return new CollectionReference(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new _DocumentReference(this.firestore, e, this._key);
  }
  /**
   * Returns a JSON-serializable representation of this `DocumentReference` instance.
   *
   * @returns a JSON representation of this object.
   */
  toJSON() {
    return {
      type: _DocumentReference._jsonSchemaVersion,
      referencePath: this._key.toString()
    };
  }
  static fromJSON(e, t, r2) {
    if (__PRIVATE_validateJSON(t, _DocumentReference._jsonSchema)) return new _DocumentReference(e, r2 || null, new x(ResourcePath.fromString(t.referencePath)));
  }
};
DocumentReference._jsonSchemaVersion = "firestore/documentReference/1.0", DocumentReference._jsonSchema = {
  type: property("string", DocumentReference._jsonSchemaVersion),
  referencePath: property("string")
};
var CollectionReference = class _CollectionReference extends Query {
  /** @hideconstructor */
  constructor(e, t, r2) {
    super(e, t, (function __PRIVATE_newQueryForPath(e2) {
      return new __PRIVATE_QueryImpl(e2);
    })(r2)), this._path = r2, /** The type of this Firestore reference. */
    this.type = "collection";
  }
  /** The collection's identifier. */
  get id() {
    return this._query.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced collection (relative
   * to the root of the database).
   */
  get path() {
    return this._query.path.canonicalString();
  }
  /**
   * A reference to the containing `DocumentReference` if this is a
   * subcollection. If this isn't a subcollection, the reference is null.
   */
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new DocumentReference(
      this.firestore,
      /* converter= */
      null,
      new x(e)
    );
  }
  withConverter(e) {
    return new _CollectionReference(this.firestore, e, this._path);
  }
};
function collection(e, t, ...r2) {
  if (e = getModularInstance(e), __PRIVATE_validateNonEmptyArgument("collection", "path", t), e instanceof n) {
    const n2 = ResourcePath.fromString(t, ...r2);
    return __PRIVATE_validateCollectionPath(n2), new CollectionReference(
      e,
      /* converter= */
      null,
      n2
    );
  }
  {
    if (!(e instanceof DocumentReference || e instanceof CollectionReference)) throw new k(O.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const n2 = e._path.child(ResourcePath.fromString(t, ...r2));
    return __PRIVATE_validateCollectionPath(n2), new CollectionReference(
      e.firestore,
      /* converter= */
      null,
      n2
    );
  }
}
function collectionGroup(e, t) {
  if (e = f(e, n), __PRIVATE_validateNonEmptyArgument("collectionGroup", "collection id", t), t.indexOf("/") >= 0) throw new k(O.INVALID_ARGUMENT, `Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
  return new Query(
    e,
    /* converter= */
    null,
    (function __PRIVATE_newQueryForCollectionGroup(e2) {
      return new __PRIVATE_QueryImpl(ResourcePath.emptyPath(), e2);
    })(t)
  );
}
function doc(e, t, ...r2) {
  if (e = getModularInstance(e), // We allow omission of 'pathString' but explicitly prohibit passing in both
  // 'undefined' and 'null'.
  1 === arguments.length && (t = __PRIVATE_AutoId.newId()), __PRIVATE_validateNonEmptyArgument("doc", "path", t), e instanceof n) {
    const n2 = ResourcePath.fromString(t, ...r2);
    return __PRIVATE_validateDocumentPath(n2), new DocumentReference(
      e,
      /* converter= */
      null,
      new x(n2)
    );
  }
  {
    if (!(e instanceof DocumentReference || e instanceof CollectionReference)) throw new k(O.INVALID_ARGUMENT, "Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const n2 = e._path.child(ResourcePath.fromString(t, ...r2));
    return __PRIVATE_validateDocumentPath(n2), new DocumentReference(e.firestore, e instanceof CollectionReference ? e.converter : null, new x(n2));
  }
}
function refEqual(e, t) {
  return e = getModularInstance(e), t = getModularInstance(t), (e instanceof DocumentReference || e instanceof CollectionReference) && (t instanceof DocumentReference || t instanceof CollectionReference) && (e.firestore === t.firestore && e.path === t.path && e.converter === t.converter);
}
function l(e, t) {
  return e = getModularInstance(e), t = getModularInstance(t), e instanceof Query && t instanceof Query && (e.firestore === t.firestore && __PRIVATE_queryEquals(e._query, t._query) && e.converter === t.converter);
}
var Bytes = class _Bytes {
  /** @hideconstructor */
  constructor(e) {
    this._byteString = e;
  }
  /**
   * Creates a new `Bytes` object from the given Base64 string, converting it to
   * bytes.
   *
   * @param base64 - The Base64 string used to create the `Bytes` object.
   */
  static fromBase64String(e) {
    try {
      return new _Bytes(ByteString.fromBase64String(e));
    } catch (e2) {
      throw new k(O.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e2);
    }
  }
  /**
   * Creates a new `Bytes` object from the given Uint8Array.
   *
   * @param array - The Uint8Array used to create the `Bytes` object.
   */
  static fromUint8Array(e) {
    return new _Bytes(ByteString.fromUint8Array(e));
  }
  /**
   * Returns the underlying bytes as a Base64-encoded string.
   *
   * @returns The Base64-encoded string created from the `Bytes` object.
   */
  toBase64() {
    return this._byteString.toBase64();
  }
  /**
   * Returns the underlying bytes in a new `Uint8Array`.
   *
   * @returns The Uint8Array created from the `Bytes` object.
   */
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  /**
   * Returns a string representation of the `Bytes` object.
   *
   * @returns A string representation of the `Bytes` object.
   */
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  /**
   * Returns true if this `Bytes` object is equal to the provided one.
   *
   * @param other - The `Bytes` object to compare against.
   * @returns true if this `Bytes` object is equal to the provided one.
   */
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
  /**
   * Returns a JSON-serializable representation of this `Bytes` instance.
   *
   * @returns a JSON representation of this object.
   */
  toJSON() {
    return {
      type: _Bytes._jsonSchemaVersion,
      bytes: this.toBase64()
    };
  }
  /**
   * Builds a `Bytes` instance from a JSON object created by {@link Bytes.toJSON}.
   *
   * @param json - a JSON object represention of a `Bytes` instance
   * @returns an instance of {@link Bytes} if the JSON object could be parsed. Throws a
   * {@link FirestoreError} if an error occurs.
   */
  static fromJSON(e) {
    if (__PRIVATE_validateJSON(e, _Bytes._jsonSchema)) return _Bytes.fromBase64String(e.bytes);
  }
};
Bytes._jsonSchemaVersion = "firestore/bytes/1.0", Bytes._jsonSchema = {
  type: property("string", Bytes._jsonSchemaVersion),
  bytes: property("string")
};
var D = class {
  /**
   * Creates a `FieldPath` from the provided field names. If more than one field
   * name is provided, the path will point to a nested field in a document.
   *
   * @param fieldNames - A list of field names.
   */
  constructor(...e) {
    for (let t = 0; t < e.length; ++t) if (0 === e[t].length) throw new k(O.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this._internalPath = new Y(e);
  }
  /**
   * Returns true if this `FieldPath` is equal to the provided one.
   *
   * @param other - The `FieldPath` to compare against.
   * @returns true if this `FieldPath` is equal to the provided one.
   */
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
};
function documentId() {
  return new D(J);
}
var FieldValue = class {
  /**
   * @param _methodName - The public API endpoint that returns this class.
   * @hideconstructor
   */
  constructor(e) {
    this._methodName = e;
  }
};
var GeoPoint = class _GeoPoint {
  /**
   * Creates a new immutable `GeoPoint` object with the provided latitude and
   * longitude values.
   * @param latitude - The latitude as number between -90 and 90.
   * @param longitude - The longitude as number between -180 and 180.
   */
  constructor(e, t) {
    if (!isFinite(e) || e < -90 || e > 90) throw new k(O.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + e);
    if (!isFinite(t) || t < -180 || t > 180) throw new k(O.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + t);
    this._lat = e, this._long = t;
  }
  /**
   * The latitude of this `GeoPoint` instance.
   */
  get latitude() {
    return this._lat;
  }
  /**
   * The longitude of this `GeoPoint` instance.
   */
  get longitude() {
    return this._long;
  }
  /**
   * Returns true if this `GeoPoint` is equal to the provided one.
   *
   * @param other - The `GeoPoint` to compare against.
   * @returns true if this `GeoPoint` is equal to the provided one.
   */
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  /**
   * Actually private to JS consumers of our API, so this function is prefixed
   * with an underscore.
   */
  _compareTo(e) {
    return __PRIVATE_primitiveComparator(this._lat, e._lat) || __PRIVATE_primitiveComparator(this._long, e._long);
  }
  /**
   * Returns a JSON-serializable representation of this `GeoPoint` instance.
   *
   * @returns a JSON representation of this object.
   */
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long,
      type: _GeoPoint._jsonSchemaVersion
    };
  }
  /**
   * Builds a `GeoPoint` instance from a JSON object created by {@link GeoPoint.toJSON}.
   *
   * @param json - a JSON object represention of a `GeoPoint` instance
   * @returns an instance of {@link GeoPoint} if the JSON object could be parsed. Throws a
   * {@link FirestoreError} if an error occurs.
   */
  static fromJSON(e) {
    if (__PRIVATE_validateJSON(e, _GeoPoint._jsonSchema)) return new _GeoPoint(e.latitude, e.longitude);
  }
};
GeoPoint._jsonSchemaVersion = "firestore/geoPoint/1.0", GeoPoint._jsonSchema = {
  type: property("string", GeoPoint._jsonSchemaVersion),
  latitude: property("number"),
  longitude: property("number")
};
var VectorValue = class _VectorValue {
  /**
   * @private
   * @internal
   */
  constructor(e) {
    this._values = (e || []).map(((e2) => e2));
  }
  /**
   * Returns a copy of the raw number array form of the vector.
   */
  toArray() {
    return this._values.map(((e) => e));
  }
  /**
   * Returns `true` if the two `VectorValue` values have the same raw number arrays, returns `false` otherwise.
   */
  isEqual(e) {
    return (function __PRIVATE_isPrimitiveArrayEqual(e2, t) {
      if (e2.length !== t.length) return false;
      for (let r2 = 0; r2 < e2.length; ++r2) if (e2[r2] !== t[r2]) return false;
      return true;
    })(this._values, e._values);
  }
  /**
   * Returns a JSON-serializable representation of this `VectorValue` instance.
   *
   * @returns a JSON representation of this object.
   */
  toJSON() {
    return {
      type: _VectorValue._jsonSchemaVersion,
      vectorValues: this._values
    };
  }
  /**
   * Builds a `VectorValue` instance from a JSON object created by {@link VectorValue.toJSON}.
   *
   * @param json - a JSON object represention of a `VectorValue` instance.
   * @returns an instance of {@link VectorValue} if the JSON object could be parsed. Throws a
   * {@link FirestoreError} if an error occurs.
   */
  static fromJSON(e) {
    if (__PRIVATE_validateJSON(e, _VectorValue._jsonSchema)) {
      if (Array.isArray(e.vectorValues) && e.vectorValues.every(((e2) => "number" == typeof e2))) return new _VectorValue(e.vectorValues);
      throw new k(O.INVALID_ARGUMENT, "Expected 'vectorValues' field to be a number array");
    }
  }
};
VectorValue._jsonSchemaVersion = "firestore/vectorValue/1.0", VectorValue._jsonSchema = {
  type: property("string", VectorValue._jsonSchemaVersion),
  vectorValues: property("object")
};
var Ve = /^__.*__$/;
var ParsedSetData = class {
  constructor(e, t, r2) {
    this.data = e, this.fieldMask = t, this.fieldTransforms = r2;
  }
  toMutation(e, t) {
    return null !== this.fieldMask ? new __PRIVATE_PatchMutation(e, this.data, this.fieldMask, t, this.fieldTransforms) : new __PRIVATE_SetMutation(e, this.data, t, this.fieldTransforms);
  }
};
var ParsedUpdateData = class {
  constructor(e, t, r2) {
    this.data = e, this.fieldMask = t, this.fieldTransforms = r2;
  }
  toMutation(e, t) {
    return new __PRIVATE_PatchMutation(e, this.data, this.fieldMask, t, this.fieldTransforms);
  }
};
function __PRIVATE_isWrite(e) {
  switch (e) {
    case 0:
    // fall through
    case 2:
    // fall through
    case 1:
      return true;
    case 3:
    case 4:
      return false;
    default:
      throw z(40011, {
        dataSource: e
      });
  }
}
var ParseContextImpl = class _ParseContextImpl {
  /**
   * Initializes a ParseContext with the given source and path.
   *
   * @param settings - The settings for the parser.
   * @param databaseId - The database ID of the Firestore instance.
   * @param serializer - The serializer to use to generate the Value proto.
   * @param ignoreUndefinedProperties - Whether to ignore undefined properties
   * rather than throw.
   * @param fieldTransforms - A mutable list of field transforms encountered
   * while parsing the data.
   * @param fieldMask - A mutable list of field paths encountered while parsing
   * the data.
   *
   * TODO(b/34871131): We don't support array paths right now, so path can be
   * null to indicate the context represents any location within an array (in
   * which case certain features will not work and errors will be somewhat
   * compromised).
   */
  constructor(e, t, r2, n2, i, s2) {
    this.settings = e, this.databaseId = t, this.serializer = r2, this.ignoreUndefinedProperties = n2, // Minor hack: If fieldTransforms is undefined, we assume this is an
    // external call and we need to validate the entire path.
    void 0 === i && this.validatePath(), this.fieldTransforms = i || [], this.fieldMask = s2 || [];
  }
  get path() {
    return this.settings.path;
  }
  get dataSource() {
    return this.settings.dataSource;
  }
  /** Returns a new context with the specified settings overwritten. */
  contextWith(e) {
    return new _ParseContextImpl({
      ...this.settings,
      ...e
    }, this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }
  childContextForField(e) {
    const t = this.path?.child(e), r2 = this.contextWith({
      path: t,
      arrayElement: false
    });
    return r2.validatePathSegment(e), r2;
  }
  childContextForFieldPath(e) {
    const t = this.path?.child(e), r2 = this.contextWith({
      path: t,
      arrayElement: false
    });
    return r2.validatePath(), r2;
  }
  childContextForArray(e) {
    return this.contextWith({
      path: void 0,
      arrayElement: true
    });
  }
  createError(e) {
    return createError(e, this.settings.methodName, this.settings.hasConverter || false, this.path, this.settings.targetDoc);
  }
  /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
  contains(e) {
    return void 0 !== this.fieldMask.find(((t) => e.isPrefixOf(t))) || void 0 !== this.fieldTransforms.find(((t) => e.isPrefixOf(t.field)));
  }
  validatePath() {
    if (this.path) for (let e = 0; e < this.path.length; e++) this.validatePathSegment(this.path.get(e));
  }
  validatePathSegment(e) {
    if (0 === e.length) throw this.createError("Document fields must not be empty");
    if (__PRIVATE_isWrite(this.dataSource) && Ve.test(e)) throw this.createError('Document fields cannot begin and end with "__"');
  }
};
var UserDataReader = class {
  constructor(e, t, r2) {
    this.databaseId = e, this.ignoreUndefinedProperties = t, this.serializer = r2 || __PRIVATE_newSerializer(e);
  }
  /** Creates a new top-level parse context. */
  createContext(e, t, r2, n2 = false) {
    return new ParseContextImpl({
      dataSource: e,
      methodName: t,
      targetDoc: r2,
      path: Y.emptyPath(),
      arrayElement: false,
      hasConverter: n2
    }, this.databaseId, this.serializer, this.ignoreUndefinedProperties);
  }
};
function p(e) {
  const t = e._freezeSettings(), r2 = __PRIVATE_newSerializer(e._databaseId);
  return new UserDataReader(e._databaseId, !!t.ignoreUndefinedProperties, r2);
}
function y(e, t, r2, n2, i, s2 = {}) {
  const o2 = e.createContext(s2.merge || s2.mergeFields ? 2 : 0, t, r2, i);
  __PRIVATE_validatePlainObject("Data must be an object, but it was:", o2, n2);
  const a2 = __PRIVATE_parseObject(n2, o2);
  let c2, l2;
  if (s2.merge) c2 = new FieldMask(o2.fieldMask), l2 = o2.fieldTransforms;
  else if (s2.mergeFields) {
    const e2 = [];
    for (const n3 of s2.mergeFields) {
      const i2 = _(t, n3, r2);
      if (!o2.contains(i2)) throw new k(O.INVALID_ARGUMENT, `Field '${i2}' is specified in your field mask but missing from your input data.`);
      __PRIVATE_fieldMaskContains(e2, i2) || e2.push(i2);
    }
    c2 = new FieldMask(e2), l2 = o2.fieldTransforms.filter(((e3) => c2.covers(e3.field)));
  } else c2 = null, l2 = o2.fieldTransforms;
  return new ParsedSetData(new u(a2), c2, l2);
}
var __PRIVATE_DeleteFieldValueImpl = class ___PRIVATE_DeleteFieldValueImpl extends FieldValue {
  _toFieldTransform(e) {
    if (2 !== e.dataSource) throw 1 === e.dataSource ? e.createError(`${this._methodName}() can only appear at the top level of your update data`) : e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
    return e.fieldMask.push(e.path), null;
  }
  isEqual(e) {
    return e instanceof ___PRIVATE_DeleteFieldValueImpl;
  }
};
function __PRIVATE_createSentinelChildContext(e, t, r2) {
  return new ParseContextImpl({
    dataSource: 3,
    targetDoc: t.settings.targetDoc,
    methodName: e._methodName,
    arrayElement: r2
  }, t.databaseId, t.serializer, t.ignoreUndefinedProperties);
}
var __PRIVATE_ServerTimestampFieldValueImpl = class ___PRIVATE_ServerTimestampFieldValueImpl extends FieldValue {
  _toFieldTransform(e) {
    return new FieldTransform(e.path, new __PRIVATE_ServerTimestampTransform());
  }
  isEqual(e) {
    return e instanceof ___PRIVATE_ServerTimestampFieldValueImpl;
  }
};
var __PRIVATE_ArrayUnionFieldValueImpl = class ___PRIVATE_ArrayUnionFieldValueImpl extends FieldValue {
  constructor(e, t) {
    super(e), this.Se = t;
  }
  _toFieldTransform(e) {
    const t = __PRIVATE_createSentinelChildContext(
      this,
      e,
      /*array=*/
      true
    ), r2 = this.Se.map(((e2) => __PRIVATE_parseData(e2, t))), n2 = new __PRIVATE_ArrayUnionTransformOperation(r2);
    return new FieldTransform(e.path, n2);
  }
  isEqual(e) {
    return e instanceof ___PRIVATE_ArrayUnionFieldValueImpl && deepEqual(this.Se, e.Se);
  }
};
var __PRIVATE_ArrayRemoveFieldValueImpl = class ___PRIVATE_ArrayRemoveFieldValueImpl extends FieldValue {
  constructor(e, t) {
    super(e), this.Se = t;
  }
  _toFieldTransform(e) {
    const t = __PRIVATE_createSentinelChildContext(
      this,
      e,
      /*array=*/
      true
    ), r2 = this.Se.map(((e2) => __PRIVATE_parseData(e2, t))), n2 = new __PRIVATE_ArrayRemoveTransformOperation(r2);
    return new FieldTransform(e.path, n2);
  }
  isEqual(e) {
    return e instanceof ___PRIVATE_ArrayRemoveFieldValueImpl && deepEqual(this.Se, e.Se);
  }
};
var __PRIVATE_NumericIncrementFieldValueImpl = class ___PRIVATE_NumericIncrementFieldValueImpl extends FieldValue {
  constructor(e, t) {
    super(e), this.Ce = t;
  }
  _toFieldTransform(e) {
    const t = new __PRIVATE_NumericIncrementTransformOperation(e.serializer, toNumber(e.serializer, this.Ce));
    return new FieldTransform(e.path, t);
  }
  isEqual(e) {
    return e instanceof ___PRIVATE_NumericIncrementFieldValueImpl && (this.Ce === e.Ce || Number.isNaN(this.Ce) && Number.isNaN(e.Ce));
  }
};
var __PRIVATE_NumericMinimumFieldValueImpl = class ___PRIVATE_NumericMinimumFieldValueImpl extends FieldValue {
  constructor(e, t) {
    super(e), this.Ce = t;
  }
  _toFieldTransform(e) {
    const t = new __PRIVATE_NumericMinimumTransformOperation(e.serializer, toNumber(e.serializer, this.Ce));
    return new FieldTransform(e.path, t);
  }
  isEqual(e) {
    return e instanceof ___PRIVATE_NumericMinimumFieldValueImpl && (this.Ce === e.Ce || Number.isNaN(this.Ce) && Number.isNaN(e.Ce));
  }
};
var __PRIVATE_NumericMaximumFieldValueImpl = class ___PRIVATE_NumericMaximumFieldValueImpl extends FieldValue {
  constructor(e, t) {
    super(e), this.Ce = t;
  }
  _toFieldTransform(e) {
    const t = new __PRIVATE_NumericMaximumTransformOperation(e.serializer, toNumber(e.serializer, this.Ce));
    return new FieldTransform(e.path, t);
  }
  isEqual(e) {
    return e instanceof ___PRIVATE_NumericMaximumFieldValueImpl && (this.Ce === e.Ce || Number.isNaN(this.Ce) && Number.isNaN(e.Ce));
  }
};
function v(e, t, r2, n2) {
  const i = e.createContext(1, t, r2);
  __PRIVATE_validatePlainObject("Data must be an object, but it was:", i, n2);
  const s2 = [], o2 = u.empty();
  forEach(n2, ((e2, n3) => {
    const a3 = __PRIVATE_fieldPathFromDotSeparatedString(t, e2, r2);
    n3 = getModularInstance(n3);
    const u2 = i.childContextForFieldPath(a3);
    if (n3 instanceof __PRIVATE_DeleteFieldValueImpl)
      s2.push(a3);
    else {
      const e3 = __PRIVATE_parseData(n3, u2);
      null != e3 && (s2.push(a3), o2.set(a3, e3));
    }
  }));
  const a2 = new FieldMask(s2);
  return new ParsedUpdateData(o2, a2, i.fieldTransforms);
}
function b(e, t, r2, n2, i, s2) {
  const o2 = e.createContext(1, t, r2), a2 = [_(t, n2, r2)], c2 = [i];
  if (s2.length % 2 != 0) throw new k(O.INVALID_ARGUMENT, `Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);
  for (let e2 = 0; e2 < s2.length; e2 += 2) a2.push(_(t, s2[e2])), c2.push(s2[e2 + 1]);
  const l2 = [], h2 = u.empty();
  for (let e2 = a2.length - 1; e2 >= 0; --e2) if (!__PRIVATE_fieldMaskContains(l2, a2[e2])) {
    const t2 = a2[e2];
    let r3 = c2[e2];
    r3 = getModularInstance(r3);
    const n3 = o2.childContextForFieldPath(t2);
    if (r3 instanceof __PRIVATE_DeleteFieldValueImpl)
      l2.push(t2);
    else {
      const e3 = __PRIVATE_parseData(r3, n3);
      null != e3 && (l2.push(t2), h2.set(t2, e3));
    }
  }
  const f2 = new FieldMask(l2);
  return new ParsedUpdateData(h2, f2, o2.fieldTransforms);
}
function __PRIVATE_parseQueryValue(e, t, r2, n2 = false) {
  return __PRIVATE_parseData(r2, e.createContext(n2 ? 4 : 3, t));
}
function __PRIVATE_parseData(e, t, r2) {
  if (__PRIVATE_looksLikeJsonObject(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    e = getModularInstance(e)
  )) return __PRIVATE_validatePlainObject("Unsupported field value:", t, e), __PRIVATE_parseObject(e, t);
  if (e instanceof FieldValue)
    return (function __PRIVATE_parseSentinelFieldValue(e2, t2) {
      if (!__PRIVATE_isWrite(t2.dataSource)) throw t2.createError(`${e2._methodName}() can only be used with update() and set()`);
      if (!t2.path) throw t2.createError(`${e2._methodName}() is not currently supported inside arrays`);
      const r3 = e2._toFieldTransform(t2);
      r3 && t2.fieldTransforms.push(r3);
    })(e, t), null;
  if (void 0 === e && t.ignoreUndefinedProperties)
    return null;
  if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    t.path && t.fieldMask.push(t.path), e instanceof Array
  ) {
    if (t.settings.arrayElement && 4 !== t.dataSource) throw t.createError("Nested arrays are not supported");
    return (function __PRIVATE_parseArray(e2, t2) {
      const r3 = [];
      let n2 = 0;
      for (const i of e2) {
        let e3 = __PRIVATE_parseData(i, t2.childContextForArray(n2));
        null == e3 && // Just include nulls in the array for fields being replaced with a
        // sentinel.
        (e3 = {
          nullValue: "NULL_VALUE"
        }), r3.push(e3), n2++;
      }
      return {
        arrayValue: {
          values: r3
        }
      };
    })(e, t);
  }
  return (function __PRIVATE_parseScalarValue(e2, t2, r3) {
    if (null === (e2 = getModularInstance(e2))) return {
      nullValue: "NULL_VALUE"
    };
    if ("number" == typeof e2) return toNumber(t2.serializer, e2);
    if ("boolean" == typeof e2) return {
      booleanValue: e2
    };
    if ("string" == typeof e2) return {
      stringValue: e2
    };
    if (e2 instanceof Date) {
      const r4 = Timestamp.fromDate(e2);
      return {
        timestampValue: toTimestamp(t2.serializer, r4)
      };
    }
    if (e2 instanceof Timestamp) {
      const r4 = new Timestamp(e2.seconds, 1e3 * Math.floor(e2.nanoseconds / 1e3));
      return {
        timestampValue: toTimestamp(t2.serializer, r4)
      };
    }
    if (__PRIVATE_isTemporalInstant(e2)) {
      const r4 = Timestamp.fromInstant(e2), n2 = new Timestamp(r4.seconds, 1e3 * Math.floor(r4.nanoseconds / 1e3));
      return {
        timestampValue: toTimestamp(t2.serializer, n2)
      };
    }
    if (e2 instanceof GeoPoint) return {
      geoPointValue: {
        latitude: e2.latitude,
        longitude: e2.longitude
      }
    };
    if (e2 instanceof Bytes) return {
      bytesValue: __PRIVATE_toBytes(t2.serializer, e2._byteString)
    };
    if (e2 instanceof DocumentReference) {
      const r4 = t2.databaseId, n2 = e2.firestore._databaseId;
      if (!n2.isEqual(r4)) throw t2.createError(`Document reference is for database ${n2.projectId}/${n2.database} but should be for database ${r4.projectId}/${r4.database}`);
      return {
        referenceValue: __PRIVATE_toResourceName(e2.firestore._databaseId || t2.databaseId, e2._key.path)
      };
    }
    if (e2 instanceof VectorValue)
      return (function __PRIVATE_parseVectorValue(e3, t3) {
        const r4 = e3 instanceof VectorValue ? e3.toArray() : e3, n2 = {
          fields: {
            [oe]: {
              stringValue: _e
            },
            [ce]: {
              arrayValue: {
                values: r4.map(((e4) => {
                  if ("number" != typeof e4) throw t3.createError("VectorValues must only contain numeric values.");
                  return __PRIVATE_toDouble(t3.serializer, e4);
                }))
              }
            }
          }
        };
        return {
          mapValue: n2
        };
      })(e2, t2);
    if (__PRIVATE_isProtoValueSerializable(e2)) return e2._toProto(t2.serializer);
    throw t2.createError(`Unsupported field value: ${__PRIVATE_valueDescription(e2)}`);
  })(e, t);
}
function __PRIVATE_parseObject(e, t) {
  const r2 = {};
  return !(function isEmpty(e2) {
    for (const t2 in e2) if (Object.prototype.hasOwnProperty.call(e2, t2)) return false;
    return true;
  })(e) ? forEach(e, ((e2, n2) => {
    const i = __PRIVATE_parseData(n2, t.childContextForField(e2));
    null != i && (r2[e2] = i);
  })) : (
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    t.path && t.path.length > 0 && t.fieldMask.push(t.path)
  ), {
    mapValue: {
      fields: r2
    }
  };
}
function __PRIVATE_isTemporalInstant(e) {
  if ("object" != typeof e || null === e) return false;
  if ("undefined" != typeof Temporal && "function" == typeof Temporal.Instant) {
    if (e instanceof Temporal.Instant) return true;
  }
  const t = e;
  return "Temporal.Instant" === t[Symbol.toStringTag] && "bigint" == typeof t.Te;
}
function __PRIVATE_looksLikeJsonObject(e) {
  return !("object" != typeof e || null === e || e instanceof Array || e instanceof Date || e instanceof Timestamp || e instanceof GeoPoint || e instanceof Bytes || e instanceof DocumentReference || e instanceof FieldValue || e instanceof VectorValue || __PRIVATE_isTemporalInstant(e) || __PRIVATE_isProtoValueSerializable(e));
}
function __PRIVATE_validatePlainObject(e, t, r2) {
  if (!__PRIVATE_looksLikeJsonObject(r2) || !__PRIVATE_isPlainObject(r2)) {
    const n2 = __PRIVATE_valueDescription(r2);
    throw "an object" === n2 ? t.createError(e + " a custom object") : t.createError(e + " " + n2);
  }
}
function _(e, t, r2) {
  if (
    // If required, replace the FieldPath Compat class with the firestore-exp
    // FieldPath.
    (t = getModularInstance(t)) instanceof D
  ) return t._internalPath;
  if ("string" == typeof t) return __PRIVATE_fieldPathFromDotSeparatedString(e, t);
  throw createError(
    "Field path arguments must be of type string or ",
    e,
    /* hasConverter= */
    false,
    /* path= */
    void 0,
    r2
  );
}
var Pe = new RegExp("[~\\*/\\[\\]]");
function __PRIVATE_fieldPathFromDotSeparatedString(e, t, r2) {
  if (t.search(Pe) >= 0) throw createError(
    `Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
    e,
    /* hasConverter= */
    false,
    /* path= */
    void 0,
    r2
  );
  try {
    return new D(...t.split("."))._internalPath;
  } catch (n2) {
    throw createError(
      `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      e,
      /* hasConverter= */
      false,
      /* path= */
      void 0,
      r2
    );
  }
}
function createError(e, t, r2, n2, i) {
  const s2 = n2 && !n2.isEmpty(), o2 = void 0 !== i;
  let a2 = `Function ${t}() called with invalid data`;
  r2 && (a2 += " (via `toFirestore()`)"), a2 += ". ";
  let u2 = "";
  return (s2 || o2) && (u2 += " (found", s2 && (u2 += ` in field ${n2}`), o2 && (u2 += ` in document ${i}`), u2 += ")"), new k(O.INVALID_ARGUMENT, a2 + e + u2);
}
function __PRIVATE_fieldMaskContains(e, t) {
  return e.some(((e2) => e2.isEqual(t)));
}
var it = class {
  // Note: This class is stripped down version of the DocumentSnapshot in
  // the legacy SDK. The changes are:
  // - No support for SnapshotMetadata.
  // - No support for SnapshotOptions.
  /** @hideconstructor protected */
  constructor(e, t, r2, n2, i) {
    this._firestore = e, this._userDataWriter = t, this._key = r2, this._document = n2, this._converter = i;
  }
  /** Property of the `DocumentSnapshot` that provides the document's ID. */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * The `DocumentReference` for the document included in the `DocumentSnapshot`.
   */
  get ref() {
    return new DocumentReference(this._firestore, this._converter, this._key);
  }
  /**
   * Signals whether or not the document at the snapshot's location exists.
   *
   * @returns true if the document exists.
   */
  exists() {
    return null !== this._document;
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * @returns An `Object` containing all fields in the document or `undefined`
   * if the document doesn't exist.
   */
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new QueryDocumentSnapshot(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  /**
   * @internal
   * @private
   *
   * Retrieves all fields in the document as a proto Value. Returns `undefined` if
   * the document doesn't exist.
   *
   * @returns An `Object` containing all fields in the document or `undefined`
   * if the document doesn't exist.
   */
  _fieldsProto() {
    return this._document?.data.clone().value.mapValue.fields ?? void 0;
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(e) {
    if (this._document) {
      const t = this._document.data.field(_("DocumentSnapshot.get", e));
      if (null !== t) return this._userDataWriter.convertValue(t);
    }
  }
};
var QueryDocumentSnapshot = class extends it {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * @override
   * @returns An `Object` containing all fields in the document.
   */
  data() {
    return super.data();
  }
};
var QuerySnapshot = class {
  /** @hideconstructor */
  constructor(e, t) {
    this._docs = t, this.query = e;
  }
  /** An array of all the documents in the `QuerySnapshot`. */
  get docs() {
    return [...this._docs];
  }
  /** The number of documents in the `QuerySnapshot`. */
  get size() {
    return this.docs.length;
  }
  /** True if there are no documents in the `QuerySnapshot`. */
  get empty() {
    return 0 === this.docs.length;
  }
  /**
   * Enumerates all of the documents in the `QuerySnapshot`.
   *
   * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
   * each document in the snapshot.
   * @param thisArg - The `this` binding for the callback.
   */
  forEach(e, t) {
    this._docs.forEach(e, t);
  }
};
function snapshotEqual(e, t) {
  return e = getModularInstance(e), t = getModularInstance(t), e instanceof it && t instanceof it ? e._firestore === t._firestore && e._key.isEqual(t._key) && (null === e._document ? null === t._document : e._document.isEqual(t._document)) && e._converter === t._converter : e instanceof QuerySnapshot && t instanceof QuerySnapshot && (l(e.query, t.query) && __PRIVATE_arrayEquals(e.docs, t.docs, snapshotEqual));
}
var AppliableConstraint = class {
};
var QueryConstraint = class extends AppliableConstraint {
};
function query(e, t, ...r2) {
  let n2 = [];
  t instanceof AppliableConstraint && n2.push(t), n2 = n2.concat(r2), (function __PRIVATE_validateQueryConstraintArray(e2) {
    const t2 = e2.filter(((e3) => e3 instanceof QueryCompositeFilterConstraint)).length, r3 = e2.filter(((e3) => e3 instanceof QueryFieldFilterConstraint)).length;
    if (t2 > 1 || t2 > 0 && r3 > 0) throw new k(O.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.");
  })(n2);
  for (const t2 of n2) e = t2._apply(e);
  return e;
}
var QueryFieldFilterConstraint = class _QueryFieldFilterConstraint extends QueryConstraint {
  /**
   * @internal
   */
  constructor(e, t, r2) {
    super(), this._field = e, this._op = t, this._value = r2, /** The type of this query constraint */
    this.type = "where";
  }
  static _create(e, t, r2) {
    return new _QueryFieldFilterConstraint(e, t, r2);
  }
  _apply(e) {
    const t = this._parse(e);
    return __PRIVATE_validateNewFieldFilter(e._query, t), new Query(e.firestore, e.converter, __PRIVATE_queryWithAddedFilter(e._query, t));
  }
  _parse(e) {
    const t = p(e.firestore), r2 = (function __PRIVATE_newQueryFilter(e2, t2, r3, n2, i, s2, o2) {
      let a2;
      if (i.isKeyField()) {
        if ("array-contains" === s2 || "array-contains-any" === s2) throw new k(O.INVALID_ARGUMENT, `Invalid Query. You can't perform '${s2}' queries on documentId().`);
        if ("in" === s2 || "not-in" === s2) {
          __PRIVATE_validateDisjunctiveFilterElements(o2, s2);
          const t3 = [];
          for (const r4 of o2) t3.push(__PRIVATE_parseDocumentIdValue(n2, e2, r4));
          a2 = {
            arrayValue: {
              values: t3
            }
          };
        } else a2 = __PRIVATE_parseDocumentIdValue(n2, e2, o2);
      } else "in" !== s2 && "not-in" !== s2 && "array-contains-any" !== s2 || __PRIVATE_validateDisjunctiveFilterElements(o2, s2), a2 = __PRIVATE_parseQueryValue(
        r3,
        t2,
        o2,
        /* allowArrays= */
        "in" === s2 || "not-in" === s2
      );
      const u2 = FieldFilter.create(i, s2, a2);
      return u2;
    })(e._query, "where", t, e.firestore._databaseId, this._field, this._op, this._value);
    return r2;
  }
};
function where(e, t, r2) {
  const n2 = t, i = _("where", e);
  return QueryFieldFilterConstraint._create(i, n2, r2);
}
var QueryCompositeFilterConstraint = class _QueryCompositeFilterConstraint extends AppliableConstraint {
  /**
   * @internal
   */
  constructor(e, t) {
    super(), this.type = e, this._queryConstraints = t;
  }
  static _create(e, t) {
    return new _QueryCompositeFilterConstraint(e, t);
  }
  _parse(e) {
    const t = this._queryConstraints.map(((t2) => t2._parse(e))).filter(((e2) => e2.getFilters().length > 0));
    return 1 === t.length ? t[0] : CompositeFilter.create(t, this._getOperator());
  }
  _apply(e) {
    const t = this._parse(e);
    return 0 === t.getFilters().length ? e : ((function __PRIVATE_validateNewFilter(e2, t2) {
      let r2 = e2;
      const n2 = t2.getFlattenedFilters();
      for (const e3 of n2) __PRIVATE_validateNewFieldFilter(r2, e3), r2 = __PRIVATE_queryWithAddedFilter(r2, e3);
    })(e._query, t), new Query(e.firestore, e.converter, __PRIVATE_queryWithAddedFilter(e._query, t)));
  }
  _getQueryConstraints() {
    return this._queryConstraints;
  }
  _getOperator() {
    return "and" === this.type ? "and" : "or";
  }
};
function or(...e) {
  return e.forEach(((e2) => __PRIVATE_validateQueryFilterConstraint("or", e2))), QueryCompositeFilterConstraint._create("or", e);
}
function and(...e) {
  return e.forEach(((e2) => __PRIVATE_validateQueryFilterConstraint("and", e2))), QueryCompositeFilterConstraint._create("and", e);
}
var QueryOrderByConstraint = class _QueryOrderByConstraint extends QueryConstraint {
  /**
   * @internal
   */
  constructor(e, t) {
    super(), this._field = e, this._direction = t, /** The type of this query constraint */
    this.type = "orderBy";
  }
  static _create(e, t) {
    return new _QueryOrderByConstraint(e, t);
  }
  _apply(e) {
    const t = (function __PRIVATE_newQueryOrderBy(e2, t2, r2) {
      if (null !== e2.startAt) throw new k(O.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
      if (null !== e2.endAt) throw new k(O.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
      const n2 = new OrderBy(t2, r2);
      return n2;
    })(e._query, this._field, this._direction);
    return new Query(e.firestore, e.converter, (function __PRIVATE_queryWithAddedOrderBy(e2, t2) {
      const r2 = e2.explicitOrderBy.concat([t2]);
      return new __PRIVATE_QueryImpl(e2.path, e2.collectionGroup, r2, e2.filters.slice(), e2.limit, e2.limitType, e2.startAt, e2.endAt);
    })(e._query, t));
  }
};
function orderBy(e, t = "asc") {
  const r2 = t, n2 = _("orderBy", e);
  return QueryOrderByConstraint._create(n2, r2);
}
var QueryLimitConstraint = class _QueryLimitConstraint extends QueryConstraint {
  /**
   * @internal
   */
  constructor(e, t, r2) {
    super(), this.type = e, this._limit = t, this._limitType = r2;
  }
  static _create(e, t, r2) {
    return new _QueryLimitConstraint(e, t, r2);
  }
  _apply(e) {
    return new Query(e.firestore, e.converter, (function __PRIVATE_queryWithLimit(e2, t, r2) {
      return new __PRIVATE_QueryImpl(e2.path, e2.collectionGroup, e2.explicitOrderBy.slice(), e2.filters.slice(), t, r2, e2.startAt, e2.endAt);
    })(e._query, this._limit, this._limitType));
  }
};
function limit(e) {
  return __PRIVATE_validatePositiveNumber("limit", e), QueryLimitConstraint._create(
    "limit",
    e,
    "F"
    /* LimitType.First */
  );
}
function limitToLast(e) {
  return __PRIVATE_validatePositiveNumber("limitToLast", e), QueryLimitConstraint._create(
    "limitToLast",
    e,
    "L"
    /* LimitType.Last */
  );
}
var QueryStartAtConstraint = class _QueryStartAtConstraint extends QueryConstraint {
  /**
   * @internal
   */
  constructor(e, t, r2) {
    super(), this.type = e, this._docOrFields = t, this._inclusive = r2;
  }
  static _create(e, t, r2) {
    return new _QueryStartAtConstraint(e, t, r2);
  }
  _apply(e) {
    const t = __PRIVATE_newQueryBoundFromDocOrFields(e, this.type, this._docOrFields, this._inclusive);
    return new Query(e.firestore, e.converter, (function __PRIVATE_queryWithStartAt(e2, t2) {
      return new __PRIVATE_QueryImpl(e2.path, e2.collectionGroup, e2.explicitOrderBy.slice(), e2.filters.slice(), e2.limit, e2.limitType, t2, e2.endAt);
    })(e._query, t));
  }
};
function startAt(...e) {
  return QueryStartAtConstraint._create(
    "startAt",
    e,
    /*inclusive=*/
    true
  );
}
function startAfter(...e) {
  return QueryStartAtConstraint._create(
    "startAfter",
    e,
    /*inclusive=*/
    false
  );
}
var QueryEndAtConstraint = class _QueryEndAtConstraint extends QueryConstraint {
  /**
   * @internal
   */
  constructor(e, t, r2) {
    super(), this.type = e, this._docOrFields = t, this._inclusive = r2;
  }
  static _create(e, t, r2) {
    return new _QueryEndAtConstraint(e, t, r2);
  }
  _apply(e) {
    const t = __PRIVATE_newQueryBoundFromDocOrFields(e, this.type, this._docOrFields, this._inclusive);
    return new Query(e.firestore, e.converter, (function __PRIVATE_queryWithEndAt(e2, t2) {
      return new __PRIVATE_QueryImpl(e2.path, e2.collectionGroup, e2.explicitOrderBy.slice(), e2.filters.slice(), e2.limit, e2.limitType, e2.startAt, t2);
    })(e._query, t));
  }
};
function endBefore(...e) {
  return QueryEndAtConstraint._create(
    "endBefore",
    e,
    /*inclusive=*/
    false
  );
}
function endAt(...e) {
  return QueryEndAtConstraint._create(
    "endAt",
    e,
    /*inclusive=*/
    true
  );
}
function __PRIVATE_newQueryBoundFromDocOrFields(e, t, r2, n2) {
  if (r2[0] = getModularInstance(r2[0]), r2[0] instanceof it) return (function __PRIVATE_newQueryBoundFromDocument(e2, t2, r3, n3, i) {
    if (!n3) throw new k(O.NOT_FOUND, `Can't use a DocumentSnapshot that doesn't exist for ${r3}().`);
    const s2 = [];
    for (const r4 of __PRIVATE_queryNormalizedOrderBy(e2)) if (r4.field.isKeyField()) s2.push(__PRIVATE_refValue(t2, n3.key));
    else {
      const e3 = n3.data.field(r4.field);
      if (__PRIVATE_isServerTimestamp(e3)) throw new k(O.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + r4.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
      if (null === e3) {
        const e4 = r4.field.canonicalString();
        throw new k(O.INVALID_ARGUMENT, `Invalid query. You are trying to start or end a query using a document for which the field '${e4}' (used as the orderBy) does not exist.`);
      }
      s2.push(e3);
    }
    return new Bound(s2, i);
  })(e._query, e.firestore._databaseId, t, r2[0]._document, n2);
  {
    const i = p(e.firestore);
    return (function __PRIVATE_newQueryBoundFromFields(e2, t2, r3, n3, i2, s2) {
      const o2 = e2.explicitOrderBy;
      if (i2.length > o2.length) throw new k(O.INVALID_ARGUMENT, `Too many arguments provided to ${n3}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
      const a2 = [];
      for (let s3 = 0; s3 < i2.length; s3++) {
        const u2 = i2[s3];
        if (o2[s3].field.isKeyField()) {
          if ("string" != typeof u2) throw new k(O.INVALID_ARGUMENT, `Invalid query. Expected a string for document ID in ${n3}(), but got a ${typeof u2}`);
          if (!__PRIVATE_isCollectionGroupQuery(e2) && -1 !== u2.indexOf("/")) throw new k(O.INVALID_ARGUMENT, `Invalid query. When querying a collection and ordering by documentId(), the value passed to ${n3}() must be a plain document ID, but '${u2}' contains a slash.`);
          const r4 = e2.path.child(ResourcePath.fromString(u2));
          if (!x.isDocumentKey(r4)) throw new k(O.INVALID_ARGUMENT, `Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${n3}() must result in a valid document path, but '${r4}' is not because it contains an odd number of segments.`);
          const i3 = new x(r4);
          a2.push(__PRIVATE_refValue(t2, i3));
        } else {
          const e3 = __PRIVATE_parseQueryValue(r3, n3, u2);
          a2.push(e3);
        }
      }
      return new Bound(a2, s2);
    })(e._query, e.firestore._databaseId, i, t, r2, n2);
  }
}
function __PRIVATE_parseDocumentIdValue(e, t, r2) {
  if ("string" == typeof (r2 = getModularInstance(r2))) {
    if ("" === r2) throw new k(O.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!__PRIVATE_isCollectionGroupQuery(t) && -1 !== r2.indexOf("/")) throw new k(O.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r2}' contains a '/' character.`);
    const n2 = t.path.child(ResourcePath.fromString(r2));
    if (!x.isDocumentKey(n2)) throw new k(O.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n2}' is not because it has an odd number of segments (${n2.length}).`);
    return __PRIVATE_refValue(e, new x(n2));
  }
  if (r2 instanceof DocumentReference) return __PRIVATE_refValue(e, r2._key);
  throw new k(O.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${__PRIVATE_valueDescription(r2)}.`);
}
function __PRIVATE_validateDisjunctiveFilterElements(e, t) {
  if (!Array.isArray(e) || 0 === e.length) throw new k(O.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);
}
function __PRIVATE_validateNewFieldFilter(e, t) {
  const r2 = (function __PRIVATE_findOpInsideFilters(e2, t2) {
    for (const r3 of e2) for (const e3 of r3.getFlattenedFilters()) if (t2.indexOf(e3.op) >= 0) return e3.op;
    return null;
  })(e.filters, (function __PRIVATE_conflictingOps(e2) {
    switch (e2) {
      case "!=":
        return [
          "!=",
          "not-in"
          /* Operator.NOT_IN */
        ];
      case "array-contains-any":
      case "in":
        return [
          "not-in"
          /* Operator.NOT_IN */
        ];
      case "not-in":
        return [
          "array-contains-any",
          "in",
          "not-in",
          "!="
          /* Operator.NOT_EQUAL */
        ];
      default:
        return [];
    }
  })(t.op));
  if (null !== r2)
    throw r2 === t.op ? new k(O.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${t.op.toString()}' filter.`) : new k(O.INVALID_ARGUMENT, `Invalid query. You cannot use '${t.op.toString()}' filters with '${r2.toString()}' filters.`);
}
function __PRIVATE_validateQueryFilterConstraint(e, t) {
  if (!(t instanceof QueryFieldFilterConstraint || t instanceof QueryCompositeFilterConstraint)) throw new k(O.INVALID_ARGUMENT, `Function ${e}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`);
}
var AbstractUserDataWriter = class {
  convertValue(e, t = "none") {
    switch (__PRIVATE_typeOrder(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return __PRIVATE_normalizeNumber(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, t);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(__PRIVATE_normalizeByteString(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, t);
      case 11:
        return this.convertObject(e.mapValue, t);
      case 10:
        return this.convertVectorValue(e.mapValue);
      default:
        throw z(62114, {
          value: e
        });
    }
  }
  convertObject(e, t) {
    return this.convertObjectMap(e.fields, t);
  }
  /**
   * @internal
   */
  convertObjectMap(e, t = "none") {
    const r2 = {};
    return forEach(e, ((e2, n2) => {
      r2[e2] = this.convertValue(n2, t);
    })), r2;
  }
  /**
   * @internal
   */
  convertVectorValue(e) {
    const t = e.fields?.[ce].arrayValue?.values?.map(((e2) => __PRIVATE_normalizeNumber(e2.doubleValue)));
    return new VectorValue(t);
  }
  convertGeoPoint(e) {
    return new GeoPoint(__PRIVATE_normalizeNumber(e.latitude), __PRIVATE_normalizeNumber(e.longitude));
  }
  convertArray(e, t) {
    return (e.values || []).map(((e2) => this.convertValue(e2, t)));
  }
  convertServerTimestamp(e, t) {
    switch (t) {
      case "previous":
        const r2 = __PRIVATE_getPreviousValue(e);
        return null == r2 ? null : this.convertValue(r2, t);
      case "estimate":
        return this.convertTimestamp(__PRIVATE_getLocalWriteTime(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const t = __PRIVATE_normalizeTimestamp(e);
    return new Timestamp(t.seconds, t.nanos);
  }
  convertDocumentKey(e, t) {
    const r2 = ResourcePath.fromString(e);
    __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(r2), 9688, {
      name: e
    });
    const n2 = new DatabaseId(r2.get(1), r2.get(3)), i = new x(r2.popFirst(5));
    return n2.isEqual(t) || // TODO(b/64130202): Somehow support foreign references.
    st(`A document reference to ${i} refers to a different database (${n2.projectId}/${n2.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`), i;
  }
};
function w(e, t, r2) {
  let n2;
  return n2 = e ? r2 && (r2.merge || r2.mergeFields) ? e.toFirestore(t, r2) : e.toFirestore(t) : t, n2;
}
var A = class extends AbstractUserDataWriter {
  constructor(e) {
    super(), this.firestore = e;
  }
  convertBytes(e) {
    return new Bytes(e);
  }
  convertReference(e) {
    const t = this.convertDocumentKey(e, this.firestore._databaseId);
    return new DocumentReference(
      this.firestore,
      /* converter= */
      null,
      t
    );
  }
};
function getDoc(e) {
  const t = d((e = f(e, DocumentReference)).firestore), r2 = new A(e.firestore);
  return q(t, [e._key]).then(((t2) => {
    __PRIVATE_hardAssert(1 === t2.length, 15618);
    const n2 = t2[0];
    return new it(e.firestore, r2, e._key, n2.isFoundDocument() ? n2 : null, e.converter);
  }));
}
function getDocs(e) {
  (function __PRIVATE_validateHasExplicitOrderByForLimitToLast(e2) {
    if ("L" === e2.limitType && 0 === e2.explicitOrderBy.length) throw new k(O.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
  })((e = f(e, Query))._query);
  const t = d(e.firestore), r2 = new A(e.firestore);
  return __PRIVATE_invokeRunQueryRpc(t, e._query).then(((t2) => {
    const n2 = t2.map(((t3) => new QueryDocumentSnapshot(e.firestore, r2, t3.key, t3, e.converter)));
    return "L" === e._query.limitType && // Limit to last queries reverse the orderBy constraint that was
    // specified by the user. As such, we need to reverse the order of the
    // results to return the documents in the expected order.
    n2.reverse(), new QuerySnapshot(e, n2);
  }));
}
function setDoc(e, t, r2) {
  const n2 = w((e = f(e, DocumentReference)).converter, t, r2), i = y(p(e.firestore), "setDoc", e._key, n2, null !== e.converter, r2);
  return S(d(e.firestore), [i.toMutation(e._key, P.none())]);
}
function updateDoc(e, t, r2, ...n2) {
  const i = p((e = f(e, DocumentReference)).firestore);
  let s2;
  s2 = "string" == typeof (t = getModularInstance(t)) || t instanceof D ? b(i, "updateDoc", e._key, t, r2, n2) : v(i, "updateDoc", e._key, t);
  return S(d(e.firestore), [s2.toMutation(e._key, P.exists(true))]);
}
function deleteDoc(e) {
  return S(d((e = f(e, DocumentReference)).firestore), [new F(e._key, P.none())]);
}
function addDoc(e, t) {
  const r2 = doc(e = f(e, CollectionReference)), n2 = w(e.converter, t), i = y(p(e.firestore), "addDoc", r2._key, n2, null !== r2.converter, {});
  return S(d(e.firestore), [i.toMutation(r2._key, P.exists(false))]).then((() => r2));
}
function deleteField() {
  return new __PRIVATE_DeleteFieldValueImpl("deleteField");
}
function serverTimestamp() {
  return new __PRIVATE_ServerTimestampFieldValueImpl("serverTimestamp");
}
function arrayUnion(...e) {
  return new __PRIVATE_ArrayUnionFieldValueImpl("arrayUnion", e);
}
function arrayRemove(...e) {
  return new __PRIVATE_ArrayRemoveFieldValueImpl("arrayRemove", e);
}
function increment(e) {
  return new __PRIVATE_NumericIncrementFieldValueImpl("increment", e);
}
function minimum(e) {
  return new __PRIVATE_NumericMinimumFieldValueImpl("minimum", e);
}
function maximum(e) {
  return new __PRIVATE_NumericMaximumFieldValueImpl("maximum", e);
}
function vector(e) {
  return new VectorValue(e);
}

// node_modules/@firebase/firestore/dist/lite/index.browser.esm.js
var ot = "4.17.2";
var __PRIVATE_Deferred = class {
  constructor() {
    this.promise = new Promise(((t, e) => {
      this.resolve = t, this.reject = e;
    }));
  }
};
var __PRIVATE_AggregateImpl = class {
  constructor(t, e, s2) {
    this.alias = t, this.aggregateType = e, this.fieldPath = s2;
  }
};
var __PRIVATE_ExponentialBackoff = class {
  constructor(t, e, s2 = 1e3, i = 1.5, a2 = 6e4) {
    this.t = t, this.timerId = e, this.i = s2, this.o = i, this.h = a2, this.u = 0, this.l = null, /** The last backoff attempt, as epoch milliseconds. */
    this._ = Date.now(), this.reset();
  }
  /**
   * Resets the backoff delay.
   *
   * The very next backoffAndWait() will have no delay. If it is called again
   * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
   * subsequent ones will increase according to the backoffFactor.
   */
  reset() {
    this.u = 0;
  }
  /**
   * Resets the backoff delay to the maximum delay (e.g. for use after a
   * RESOURCE_EXHAUSTED error).
   */
  m() {
    this.u = this.h;
  }
  /**
   * Returns a promise that resolves after currentDelayMs, and increases the
   * delay for any subsequent attempts. If there was a pending backoff operation
   * already, it will be canceled.
   */
  A(t) {
    this.cancel();
    const e = Math.floor(this.u + this.p()), s2 = Math.max(0, Date.now() - this._), i = Math.max(0, e - s2);
    i > 0 && a("ExponentialBackoff", `Backing off for ${i} ms (base delay: ${this.u} ms, delay with jitter: ${e} ms, last attempt: ${s2} ms ago)`), this.l = this.t.enqueueAfterDelay(this.timerId, i, (() => (this._ = Date.now(), t()))), // Apply backoff factor to determine next delay and ensure it is within
    // bounds.
    this.u *= this.o, this.u < this.i && (this.u = this.i), this.u > this.h && (this.u = this.h);
  }
  T() {
    null !== this.l && (this.l.skipDelay(), this.l = null);
  }
  cancel() {
    null !== this.l && (this.l.cancel(), this.l = null);
  }
  /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
  p() {
    return (Math.random() - 0.5) * this.u;
  }
};
var AggregateField = class {
  /**
   * Create a new AggregateField<T>
   * @param aggregateType - Specifies the type of aggregation operation to perform.
   * @param _internalFieldPath - Optionally specifies the field that is aggregated.
   * @internal
   */
  constructor(t = "count", e) {
    this._internalFieldPath = e, /** A type string to uniquely identify instances of this class. */
    this.type = "AggregateField", this.aggregateType = t;
  }
};
var AggregateQuerySnapshot = class {
  /** @hideconstructor */
  constructor(t, e, s2) {
    this._userDataWriter = e, this._data = s2, /** A type string to uniquely identify instances of this class. */
    this.type = "AggregateQuerySnapshot", this.query = t;
  }
  /**
   * Returns the results of the aggregations performed over the underlying
   * query.
   *
   * The keys of the returned object will be the same as those of the
   * `AggregateSpec` object specified to the aggregation method, and the values
   * will be the corresponding aggregation result.
   *
   * @returns The results of the aggregations performed over the underlying
   * query.
   */
  data() {
    return this._userDataWriter.convertObjectMap(this._data);
  }
  /**
   * @internal
   * @private
   *
   * Retrieves all fields in the snapshot as a proto value.
   *
   * @returns An `Object` containing all fields in the snapshot.
   */
  _fieldsProto() {
    return new u({
      mapValue: {
        fields: this._data
      }
    }).clone().value.mapValue.fields;
  }
};
function getCount(t) {
  return getAggregate(t, {
    count: count()
  });
}
function getAggregate(t, e) {
  const s2 = f(t.firestore, n), i = d(s2), a2 = g(e, ((t2, e2) => new __PRIVATE_AggregateImpl(e2, t2.aggregateType, t2._internalFieldPath)));
  return m(i, t._query, a2).then(((e2) => (function __PRIVATE_convertToAggregateQuerySnapshot(t2, e3, s3) {
    const i2 = new A(t2), a3 = new AggregateQuerySnapshot(e3, i2, s3);
    return a3;
  })(s2, t, e2)));
}
function sum(t) {
  return new AggregateField("sum", _("sum", t));
}
function average(t) {
  return new AggregateField("avg", _("average", t));
}
function count() {
  return new AggregateField("count");
}
function aggregateFieldEqual(t, e) {
  return t instanceof AggregateField && e instanceof AggregateField && t.aggregateType === e.aggregateType && t._internalFieldPath?.canonicalString() === e._internalFieldPath?.canonicalString();
}
function aggregateQuerySnapshotEqual(t, e) {
  return l(t.query, e.query) && deepEqual(t.data(), e.data());
}
var WriteBatch = class {
  /** @hideconstructor */
  constructor(t, e) {
    this._firestore = t, this._commitHandler = e, this._mutations = [], this._committed = false, this._dataReader = p(t);
  }
  set(t, e, s2) {
    this._verifyNotCommitted();
    const i = __PRIVATE_validateReference(t, this._firestore), a2 = w(i.converter, e, s2), n2 = y(this._dataReader, "WriteBatch.set", i._key, a2, null !== i.converter, s2);
    return this._mutations.push(n2.toMutation(i._key, P.none())), this;
  }
  update(t, e, s2, ...i) {
    this._verifyNotCommitted();
    const a2 = __PRIVATE_validateReference(t, this._firestore);
    let n2;
    return n2 = "string" == typeof (e = getModularInstance(e)) || e instanceof D ? b(this._dataReader, "WriteBatch.update", a2._key, e, s2, i) : v(this._dataReader, "WriteBatch.update", a2._key, e), this._mutations.push(n2.toMutation(a2._key, P.exists(true))), this;
  }
  /**
   * Deletes the document referred to by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be deleted.
   * @returns This `WriteBatch` instance. Used for chaining method calls.
   */
  delete(t) {
    this._verifyNotCommitted();
    const e = __PRIVATE_validateReference(t, this._firestore);
    return this._mutations = this._mutations.concat(new F(e._key, P.none())), this;
  }
  /**
   * Commits all of the writes in this write batch as a single atomic unit.
   *
   * The result of these writes will only be reflected in document reads that
   * occur after the returned promise resolves. If the client is offline, the
   * write fails. If you would like to see local modifications or buffer writes
   * until the client is online, use the full Firestore SDK.
   *
   * @returns A `Promise` resolved once all of the writes in the batch have been
   * successfully written to the backend as an atomic unit (note that it won't
   * resolve while you're offline).
   */
  commit() {
    return this._verifyNotCommitted(), this._committed = true, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
  }
  _verifyNotCommitted() {
    if (this._committed) throw new k(O.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
  }
};
function __PRIVATE_validateReference(t, e) {
  if ((t = getModularInstance(t)).firestore !== e) throw new k(O.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
  return t;
}
function writeBatch(t) {
  t = f(t, n);
  const e = d(t);
  return new WriteBatch(t, ((t2) => S(e, t2)));
}
var ht = class Transaction {
  constructor(t) {
    this.datastore = t, // The version of each document that was read during this transaction.
    this.readVersions = /* @__PURE__ */ new Map(), this.mutations = [], this.committed = false, /**
     * A deferred usage error that occurred previously in this transaction that
     * will cause the transaction to fail once it actually commits.
     */
    this.lastTransactionError = null, /**
     * Set of documents that have been written in the transaction.
     *
     * When there's more than one write to the same key in a transaction, any
     * writes after the first are handled differently.
     */
    this.writtenDocs = /* @__PURE__ */ new Set();
  }
  async lookup(t) {
    if (this.ensureCommitNotCalled(), this.mutations.length > 0) throw this.lastTransactionError = new k(O.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes."), this.lastTransactionError;
    const e = await q(this.datastore, t);
    return e.forEach(((t2) => this.recordVersion(t2))), e;
  }
  set(t, e) {
    this.write(e.toMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString());
  }
  update(t, e) {
    try {
      this.write(e.toMutation(t, this.preconditionForUpdate(t)));
    } catch (t2) {
      this.lastTransactionError = t2;
    }
    this.writtenDocs.add(t.toString());
  }
  delete(t) {
    this.write(new F(t, this.precondition(t))), this.writtenDocs.add(t.toString());
  }
  async commit() {
    if (this.ensureCommitNotCalled(), this.lastTransactionError) throw this.lastTransactionError;
    const t = this.readVersions;
    this.mutations.forEach(((e) => {
      t.delete(e.key.toString());
    })), // For each document that was read but not written to, we want to perform
    // a `verify` operation.
    t.forEach(((t2, e) => {
      const s2 = x.fromPath(e);
      this.mutations.push(new C(s2, this.precondition(s2)));
    })), await S(this.datastore, this.mutations), this.committed = true;
  }
  recordVersion(t) {
    let e;
    if (t.isFoundDocument()) e = t.version;
    else {
      if (!t.isNoDocument()) throw z(50498, {
        R: t.constructor.name
      });
      e = j.min();
    }
    const s2 = this.readVersions.get(t.key.toString());
    if (s2) {
      if (!e.isEqual(s2))
        throw new k(O.ABORTED, "Document version changed between two reads.");
    } else this.readVersions.set(t.key.toString(), e);
  }
  /**
   * Returns the version of this document when it was read in this transaction,
   * as a precondition, or no precondition if it was not read.
   */
  precondition(t) {
    const e = this.readVersions.get(t.toString());
    return !this.writtenDocs.has(t.toString()) && e ? e.isEqual(j.min()) ? P.exists(false) : P.updateTime(e) : P.none();
  }
  /**
   * Returns the precondition for a document if the operation is an update.
   */
  preconditionForUpdate(t) {
    const e = this.readVersions.get(t.toString());
    if (!this.writtenDocs.has(t.toString()) && e) {
      if (e.isEqual(j.min()))
        throw new k(O.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
      return P.updateTime(e);
    }
    return P.exists(true);
  }
  write(t) {
    this.ensureCommitNotCalled(), this.mutations.push(t);
  }
  ensureCommitNotCalled() {
  }
};
var ct = {
  maxAttempts: 5
};
var __PRIVATE_TransactionRunner = class {
  constructor(t, e, s2, i, a2) {
    this.asyncQueue = t, this.datastore = e, this.options = s2, this.updateFunction = i, this.deferred = a2, this.I = s2.maxAttempts, this.P = new __PRIVATE_ExponentialBackoff(
      this.asyncQueue,
      "transaction_retry"
      /* TimerId.TransactionRetry */
    );
  }
  /** Runs the transaction and sets the result on deferred. */
  V() {
    this.I -= 1, this.D();
  }
  D() {
    this.P.A((async () => {
      const t = new ht(this.datastore), e = this.v(t);
      e && e.then(((e2) => {
        this.asyncQueue.enqueueAndForget((() => t.commit().then((() => {
          this.deferred.resolve(e2);
        })).catch(((t2) => {
          this.F(t2);
        }))));
      })).catch(((t2) => {
        this.F(t2);
      }));
    }));
  }
  v(t) {
    try {
      const e = this.updateFunction(t);
      return !tt(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), null);
    } catch (t2) {
      return this.deferred.reject(t2), null;
    }
  }
  F(t) {
    this.I > 0 && this.B(t) ? (this.I -= 1, this.asyncQueue.enqueueAndForget((() => (this.D(), Promise.resolve())))) : this.deferred.reject(t);
  }
  B(t) {
    if ("FirebaseError" === t?.name) {
      const e = t.code;
      return "aborted" === e || "failed-precondition" === e || "already-exists" === e || !et(e);
    }
    return false;
  }
};
function getDocument() {
  return "undefined" != typeof document ? document : null;
}
var DelayedOperation = class _DelayedOperation {
  constructor(t, e, s2, i, a2) {
    this.asyncQueue = t, this.timerId = e, this.targetTimeMs = s2, this.op = i, this.removalCallback = a2, this.deferred = new __PRIVATE_Deferred(), this.then = this.deferred.promise.then.bind(this.deferred.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
    // and so we attach a dummy catch callback to avoid
    // 'UnhandledPromiseRejectionWarning' log spam.
    this.deferred.promise.catch(((t2) => {
    }));
  }
  get promise() {
    return this.deferred.promise;
  }
  /**
   * Creates and returns a DelayedOperation that has been scheduled to be
   * executed on the provided asyncQueue after the provided delayMs.
   *
   * @param asyncQueue - The queue to schedule the operation on.
   * @param id - A Timer ID identifying the type of operation this is.
   * @param delayMs - The delay (ms) before the operation should be scheduled.
   * @param op - The operation to run.
   * @param removalCallback - A callback to be called synchronously once the
   *   operation is executed or canceled, notifying the AsyncQueue to remove it
   *   from its delayedOperations list.
   *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
   *   the DelayedOperation class public.
   */
  static createAndSchedule(t, e, s2, i, a2) {
    const n2 = Date.now() + s2, r2 = new _DelayedOperation(t, e, n2, i, a2);
    return r2.start(s2), r2;
  }
  /**
   * Starts the timer. This is called immediately after construction by
   * createAndSchedule().
   */
  start(t) {
    this.timerHandle = setTimeout((() => this.handleDelayElapsed()), t);
  }
  /**
   * Queues the operation to run immediately (if it hasn't already been run or
   * canceled).
   */
  skipDelay() {
    return this.handleDelayElapsed();
  }
  /**
   * Cancels the operation if it hasn't already been executed or canceled. The
   * promise will be rejected.
   *
   * As long as the operation has not yet been run, calling cancel() provides a
   * guarantee that the operation will not be run.
   */
  cancel(t) {
    null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new k(O.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget((() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then(((t) => this.deferred.resolve(t)))) : Promise.resolve()));
  }
  clearTimeout() {
    null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }
};
var ut2 = "AsyncQueue";
var __PRIVATE_AsyncQueueImpl = class {
  constructor(t = Promise.resolve()) {
    this.k = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
    // be changed again.
    this.O = false, // Operations scheduled to be queued in the future. Operations are
    // automatically removed after they are run or canceled.
    this.S = [], // visible for testing
    this.q = null, // Flag set while there's an outstanding AsyncQueue operation, used for
    // assertion sanity-checks.
    this.C = false, // Enabled during shutdown on Safari to prevent future access to IndexedDB.
    this.M = false, // List of TimerIds to fast-forward delays for.
    this.N = [], // Backoff timer used to schedule retries for retryable operations
    this.P = new __PRIVATE_ExponentialBackoff(
      this,
      "async_queue_retry"
      /* TimerId.AsyncQueueRetry */
    ), // Visibility handler that triggers an immediate retry of all retryable
    // operations. Meant to speed up recovery when we regain file system access
    // after page comes into foreground.
    this.L = () => {
      const t2 = getDocument();
      t2 && a(ut2, "Visibility state changed to " + t2.visibilityState), this.P.T();
    }, this.W = t;
    const e = getDocument();
    e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.L);
  }
  get isShuttingDown() {
    return this.O;
  }
  /**
   * Adds a new operation to the queue without waiting for it to complete (i.e.
   * we ignore the Promise result).
   */
  enqueueAndForget(t) {
    this.enqueue(t);
  }
  enqueueAndForgetEvenWhileRestricted(t) {
    this.U(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.j(t);
  }
  enterRestrictedMode(t) {
    if (!this.O) {
      this.O = true, this.M = t || false;
      const e = getDocument();
      e && "function" == typeof e.removeEventListener && e.removeEventListener("visibilitychange", this.L);
    }
  }
  enqueue(t) {
    if (this.U(), this.O)
      return new Promise((() => {
      }));
    const e = new __PRIVATE_Deferred();
    return this.j((() => this.O && this.M ? Promise.resolve() : (t().then(e.resolve, e.reject), e.promise))).then((() => e.promise));
  }
  enqueueRetryable(t) {
    this.enqueueAndForget((() => (this.k.push(t), this.$())));
  }
  /**
   * Runs the next operation from the retryable queue. If the operation fails,
   * reschedules with backoff.
   */
  async $() {
    if (0 !== this.k.length) {
      try {
        await this.k[0](), this.k.shift(), this.P.reset();
      } catch (t) {
        if (!(function __PRIVATE_isIndexedDbTransactionError(t2) {
          return "IndexedDbTransactionError" === t2.name;
        })(t)) throw t;
        a(ut2, "Operation failed with retryable error: " + t);
      }
      this.k.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
      // This is necessary to run retryable operations that failed during
      // their initial attempt since we don't know whether they are already
      // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
      // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
      // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
      // call scheduled here.
      // Since `backoffAndRun()` cancels an existing backoff and schedules a
      // new backoff on every call, there is only ever a single additional
      // operation in the queue.
      this.P.A((() => this.$()));
    }
  }
  j(t) {
    const e = this.W.then((() => (this.C = true, t().catch(((t2) => {
      this.q = t2, this.C = false;
      const e2 = __PRIVATE_getMessageOrStack(t2);
      throw st("INTERNAL UNHANDLED ERROR: ", e2), t2;
    })).then(((t2) => (this.C = false, t2))))));
    return this.W = e, e;
  }
  enqueueAfterDelay(t, e, s2) {
    this.U(), // Fast-forward delays for timerIds that have been overridden.
    this.N.indexOf(t) > -1 && (e = 0);
    const i = DelayedOperation.createAndSchedule(this, t, e, s2, ((t2) => this.G(t2)));
    return this.S.push(i), i;
  }
  U() {
    this.q && z(47125, {
      H: __PRIVATE_getMessageOrStack(this.q)
    });
  }
  verifyOperationInProgress() {
  }
  /**
   * Waits until all currently queued tasks are finished executing. Delayed
   * operations are not run.
   */
  async J() {
    let t;
    do {
      t = this.W, await t;
    } while (t !== this.W);
  }
  /**
   * For Tests: Determine if a delayed operation with a particular TimerId
   * exists.
   */
  K(t) {
    for (const e of this.S) if (e.timerId === t) return true;
    return false;
  }
  /**
   * For Tests: Runs some or all delayed operations early.
   *
   * @param lastTimerId - Delayed operations up to and including this TimerId
   * will be drained. Pass TimerId.All to run all delayed operations.
   * @returns a Promise that resolves once all operations have been run.
   */
  X(t) {
    return this.J().then((() => {
      this.S.sort(((t2, e) => t2.targetTimeMs - e.targetTimeMs));
      for (const e of this.S) if (e.skipDelay(), "all" !== t && e.timerId === t) break;
      return this.J();
    }));
  }
  /**
   * For Tests: Skip all subsequent delays for a timer id.
   */
  Y(t) {
    this.N.push(t);
  }
  /** Called once a DelayedOperation is run or canceled. */
  G(t) {
    const e = this.S.indexOf(t);
    this.S.splice(e, 1);
  }
};
function __PRIVATE_getMessageOrStack(t) {
  let e = t.message || "";
  return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), e;
}
var Transaction2 = class {
  /** @hideconstructor */
  constructor(t, e) {
    this._firestore = t, this._transaction = e, this._dataReader = p(t);
  }
  /**
   * Reads the document referenced by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be read.
   * @returns A `DocumentSnapshot` with the read data.
   */
  get(t) {
    const e = __PRIVATE_validateReference(t, this._firestore), s2 = new A(this._firestore);
    return this._transaction.lookup([e._key]).then(((t2) => {
      if (!t2 || 1 !== t2.length) return z(24041);
      const i = t2[0];
      if (i.isFoundDocument()) return new it(this._firestore, s2, i.key, i, e.converter);
      if (i.isNoDocument()) return new it(this._firestore, s2, e._key, null, e.converter);
      throw z(18433, {
        doc: i
      });
    }));
  }
  set(t, e, s2) {
    const i = __PRIVATE_validateReference(t, this._firestore), a2 = w(i.converter, e, s2), n2 = y(this._dataReader, "Transaction.set", i._key, a2, null !== i.converter, s2);
    return this._transaction.set(i._key, n2), this;
  }
  update(t, e, s2, ...i) {
    const a2 = __PRIVATE_validateReference(t, this._firestore);
    let n2;
    return n2 = "string" == typeof (e = getModularInstance(e)) || e instanceof D ? b(this._dataReader, "Transaction.update", a2._key, e, s2, i) : v(this._dataReader, "Transaction.update", a2._key, e), this._transaction.update(a2._key, n2), this;
  }
  /**
   * Deletes the document referred to by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be deleted.
   * @returns This `Transaction` instance. Used for chaining method calls.
   */
  delete(t) {
    const e = __PRIVATE_validateReference(t, this._firestore);
    return this._transaction.delete(e._key), this;
  }
};
function runTransaction(t, e, s2) {
  t = f(t, n);
  const i = d(t), a2 = {
    ...ct,
    ...s2
  };
  !(function __PRIVATE_validateTransactionOptions(t2) {
    if (t2.maxAttempts < 1) throw new k(O.INVALID_ARGUMENT, "Max attempts must be at least 1");
  })(a2);
  const r2 = new __PRIVATE_Deferred();
  return new __PRIVATE_TransactionRunner((function __PRIVATE_newAsyncQueue() {
    return new __PRIVATE_AsyncQueueImpl();
  })(), i, a2, ((s3) => e(new Transaction2(t, s3))), r2).V(), r2.promise;
}
!(function __PRIVATE_registerFirestore() {
  c(`${SDK_VERSION}_lite`), _registerComponent(new Component("firestore/lite", ((t, { instanceIdentifier: e, options: s2 }) => {
    const i = t.getProvider("app").getImmediate(), a2 = new n(new r(t.getProvider("auth-internal")), new o(i, t.getProvider("app-check-internal")), h(i, e), i);
    return s2 && a2._setSettings(s2), a2;
  }), "PUBLIC").setMultipleInstances(true)), // RUNTIME_ENV and BUILD_TARGET are replaced by real values during the compilation
  registerVersion("firestore-lite", ot, ""), registerVersion("firestore-lite", ot, "esm2020");
})();
export {
  AggregateField,
  AggregateQuerySnapshot,
  Bytes,
  CollectionReference,
  DocumentReference,
  it as DocumentSnapshot,
  D as FieldPath,
  FieldValue,
  n as Firestore,
  k as FirestoreError,
  GeoPoint,
  Query,
  QueryCompositeFilterConstraint,
  QueryConstraint,
  QueryDocumentSnapshot,
  QueryEndAtConstraint,
  QueryFieldFilterConstraint,
  QueryLimitConstraint,
  QueryOrderByConstraint,
  QuerySnapshot,
  QueryStartAtConstraint,
  Timestamp,
  Transaction2 as Transaction,
  VectorValue,
  WriteBatch,
  addDoc,
  aggregateFieldEqual,
  aggregateQuerySnapshotEqual,
  and,
  arrayRemove,
  arrayUnion,
  average,
  collection,
  collectionGroup,
  connectFirestoreEmulator,
  count,
  deleteDoc,
  deleteField,
  doc,
  documentId,
  endAt,
  endBefore,
  getAggregate,
  getCount,
  getDoc,
  getDocs,
  getFirestore,
  increment,
  initializeFirestore,
  limit,
  limitToLast,
  maximum,
  minimum,
  or,
  orderBy,
  query,
  l as queryEqual,
  refEqual,
  runTransaction,
  serverTimestamp,
  setDoc,
  setLogLevel,
  snapshotEqual,
  startAfter,
  startAt,
  sum,
  terminate,
  updateDoc,
  vector,
  where,
  writeBatch
};
//# sourceMappingURL=firebase_firestore_lite.js.map
