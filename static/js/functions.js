// example: var data ={a:5,g: [{"a":1,"b":[4,5,6,{a:55},[33, new Date()]]},{"c":2},{"a":3}]};
// SECTION: search data in dataDict

// var g=[];
//
// if (!Object.keys) {
//     Object.keys = function (obj) {
//         var keys = [],
//             k;
//         for (k in obj) {
//             if (Object.prototype.hasOwnProperty.call(obj, k)) {
//                 keys.push(k);
//             }
//         }
//         return keys;
//     };
// }
//
// function actualType(o)
// {
//   return Object.prototype.toString.apply(o);
// }
//
// var arr=actualType([]);
// var obj=actualType({});
//
// function work(a,val)
//
// {
//
//         if (actualType(a) == obj ||actualType(a) == arr)
//         {
//             for (var j = 0; j < Object.keys(a).length; j++)
//             {
//               if (Object.keys(a)[j]==val)    g.push(a[Object.keys(a)[j]]);
//               else
//               work(a[Object.keys(a)[j]],val);
//             }
//         }
//
//
// }

// work(data,'a')
// console.log(g)
