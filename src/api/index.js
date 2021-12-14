/* eslint-disable */

import moment from "moment";
import axios from "axios";

var isMergeableObject = function (e) {
  return isNonNullObject(e) && !isSpecial(e);
};
function isNonNullObject(e) {
  return !!e && "object" == typeof e;
}
function isSpecial(e) {
  var t = Object.prototype.toString.call(e);
  return "[object RegExp]" === t || "[object Date]" === t || isReactElement(e);
}
var canUseSymbol = "function" == typeof Symbol && Symbol.for,
  REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(e) {
  return e.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(e) {
  return Array.isArray(e) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(e, t) {
  return !1 !== t.clone && t.isMergeableObject(e)
    ? deepmerge(emptyTarget(e), e, t)
    : e;
}
function defaultArrayMerge(e, t, r) {
  return e.concat(t).map(function (e) {
    return cloneUnlessOtherwiseSpecified(e, r);
  });
}
function getMergeFunction(e, t) {
  if (!t.customMerge) return deepmerge;
  e = t.customMerge(e);
  return "function" == typeof e ? e : deepmerge;
}
function getEnumerableOwnPropertySymbols(t) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(t).filter(function (e) {
        return t.propertyIsEnumerable(e);
      })
    : [];
}
function getKeys(e) {
  return Object.keys(e).concat(getEnumerableOwnPropertySymbols(e));
}
function propertyIsOnObject(e, t) {
  try {
    return t in e;
  } catch (e) {
    return !1;
  }
}
function propertyIsUnsafe(e, t) {
  return (
    propertyIsOnObject(e, t) &&
    !(
      Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)
    )
  );
}
function mergeObject(t, r, n) {
  var a = {};
  return (
    n.isMergeableObject(t) &&
      getKeys(t).forEach(function (e) {
        a[e] = cloneUnlessOtherwiseSpecified(t[e], n);
      }),
    getKeys(r).forEach(function (e) {
      propertyIsUnsafe(t, e) ||
        (propertyIsOnObject(t, e) && n.isMergeableObject(r[e])
          ? (a[e] = getMergeFunction(e, n)(t[e], r[e], n))
          : (a[e] = cloneUnlessOtherwiseSpecified(r[e], n)));
    }),
    a
  );
}
function deepmerge(e, t, r) {
  ((r = r || {}).arrayMerge = r.arrayMerge || defaultArrayMerge),
    (r.isMergeableObject = r.isMergeableObject || isMergeableObject),
    (r.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified);
  var n = Array.isArray(t);
  return n === Array.isArray(e)
    ? n
      ? r.arrayMerge(e, t, r)
      : mergeObject(e, t, r)
    : cloneUnlessOtherwiseSpecified(t, r);
}
function getNumberOfContracts(e) {
  return Object.keys(e.data.d.Ugovori).length;
}
deepmerge.all = function (e, r) {
  if (!Array.isArray(e)) throw new Error("first argument should be an array");
  return e.reduce(function (e, t) {
    return deepmerge(e, t, r);
  }, {});
};
const fetchData = (e) =>
  axios.post(
    "https://warm-river-64553.herokuapp.com/https://katastar.rgz.gov.rs/RegistarCenaNepokretnosti/Default.aspx/Data",
    {
      DatumPocetak: e.startDate,
      DatumZavrsetak: e.endDate,
      OpstinaID: e.cityId,
      KoID: e.cityCadasterId,
      VrsteNepokretnosti: e.realEstateType,
    }
  );
let tim = 0,
  ukupanBroj = 0;
async function refetchDataByDate(e, t = 20) {
  let r = moment(e.startDate, "DD.MM.YYYY"),
    n = moment(e.endDate, "DD.MM.YYYY"),
    a = {};
  if (n.diff(r, "days") <= t)
    return (
      (a = await fetchData({
        ...e,
        startDate: r.format("DD.MM.YYYY"),
        endDate: n.format("DD.MM.YYYY"),
      })),
      a
    );
  let o, c;
  for (; 0 < n.diff(r, "days"); )
    tim++,
      (c = r.clone().add(t, "days")),
      n.diff(c, "days") < 0 && (c = n.clone()),
      (o = await fetchData({
        ...e,
        startDate: r.format("DD.MM.YYYY"),
        endDate: c.format("DD.MM.YYYY"),
      })),
      (a = deepmerge(a, o)),
      r.add(t + 1, "days");
  getNumberOfContracts(a);
  return a;
}

export default refetchDataByDate;
