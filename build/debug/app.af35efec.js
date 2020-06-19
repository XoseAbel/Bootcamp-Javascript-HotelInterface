// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"app/components/get-empty-rooms.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEmptyRooms = void 0;

var getEmptyRooms = function getEmptyRooms(store) {
  var result;
  result = store.rooms.filter(function (value) {
    return value.guest === '';
  });
  return result;
};

exports.getEmptyRooms = getEmptyRooms;
},{}],"app/store.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;
var store = {
  guests: [{
    idGuest: '6578',
    members: [{
      idCard: '12345678',
      name: 'Peter',
      age: 20
    }, {
      idCard: '12348678',
      name: 'Sarah',
      age: 20
    }],
    phone: '09009090',
    asignedRoom: [101],
    checkInDate: '2020/06/16',
    checkOutDate: '',
    invoice: true
  }, {
    idGuest: '6378',
    members: [{
      idCard: '32345678',
      name: 'Axel',
      age: 25
    }, {
      idCard: '72348678',
      name: 'Sarah',
      age: 25
    }, {
      idCard: '33345678',
      name: 'Axel',
      age: 10
    }, {
      idCard: '33348678',
      name: 'Sarah',
      age: 10
    }],
    phone: '09009190',
    asignedRoom: [204, 304],
    checkInDate: '2020/06/17',
    checkOutDate: '',
    invoice: false
  }],
  rooms: [{
    idRoom: 101,
    maxCapacity: 2,
    price: 60,
    guest: '6578'
  }, {
    idRoom: 102,
    maxCapacity: 2,
    price: 60,
    guest: ''
  }, {
    idRoom: 103,
    maxCapacity: 2,
    price: 60,
    guest: ''
  }, {
    idRoom: 104,
    maxCapacity: 2,
    price: 80,
    guest: ''
  }, {
    idRoom: 201,
    maxCapacity: 3,
    price: 90,
    guest: ''
  }, {
    idRoom: 202,
    maxCapacity: 3,
    price: 90,
    guest: ''
  }, {
    idRoom: 203,
    maxCapacity: 3,
    price: 90,
    guest: ''
  }, {
    idRoom: 204,
    maxCapacity: 3,
    price: 90,
    guest: '6378'
  }, {
    idRoom: 301,
    maxCapacity: 4,
    price: 100,
    guest: ''
  }, {
    idRoom: 302,
    maxCapacity: 4,
    price: 100,
    guest: ''
  }, {
    idRoom: 303,
    maxCapacity: 4,
    price: 110,
    guest: ''
  }, {
    idRoom: 304,
    maxCapacity: 2,
    price: 100,
    guest: '6378'
  }, {
    idRoom: 401,
    maxCapacity: 3,
    price: 120,
    guest: ''
  }, {
    idRoom: 402,
    maxCapacity: 2,
    price: 100,
    guest: ''
  }, {
    idRoom: 403,
    maxCapacity: 3,
    price: 120,
    guest: ''
  }, {
    idRoom: 404,
    maxCapacity: 4,
    price: 150,
    guest: ''
  }],
  previousCustomers: [{
    idCard: '12345678',
    name: 'Peter',
    age: 20
  }, {
    idCard: '99999999',
    name: 'Robert',
    age: 30
  }]
};
exports.store = store;
},{}],"app/pages/rooms/print-list-rooms.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printListRooms = void 0;

var printListRooms = function printListRooms(listToPrint) {
  var listRoomsTable = document.querySelector('#listRoomsTable');

  if (listRoomsTable) {
    listToPrint.forEach(function (value, index) {
      listRoomsTable.insertAdjacentHTML('beforeend', "<tr class=\"table-success\">\n          <th scope=\"row\" class=\"py-1\">" + (index + 1) + "</th>\n      <th scope=\"col\" class=\"py-1\">" + value.idRoom + "</th>\n      <th scope=\"col\" class=\"py-1\">" + value.maxCapacity + "</th>\n      <th scope=\"col\" class=\"py-1\">" + value.price + "</th>\n    </tr>");
    });
  }
};

exports.printListRooms = printListRooms;
},{}],"app/pages/rooms/list-room.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listRoom = void 0;

var _getEmptyRooms = require("../../components/get-empty-rooms");

var _store = require("../../store");

var _printListRooms = require("./print-list-rooms");

var listRoom = function listRoom() {
  var listToPrint = (0, _getEmptyRooms.getEmptyRooms)(_store.store);
  (0, _printListRooms.printListRooms)(listToPrint);
};

exports.listRoom = listRoom;
},{"../../components/get-empty-rooms":"app/components/get-empty-rooms.ts","../../store":"app/store.ts","./print-list-rooms":"app/pages/rooms/print-list-rooms.ts"}],"app/pages/rooms/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listRoom = require("./list-room");

Object.keys(_listRoom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _listRoom[key];
    }
  });
});
},{"./list-room":"app/pages/rooms/list-room.ts"}],"app/pages/checkIn/add-member-button.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onclickCallback = exports.addInputForMember = void 0;

var addInputForMember = function addInputForMember() {
  var addMemberButton = document.querySelector('#addMemberButton');
  addMemberButton === null || addMemberButton === void 0 ? void 0 : addMemberButton.addEventListener('click', onclickCallback, false);
};

exports.addInputForMember = addInputForMember;

var onclickCallback = function onclickCallback() {
  var addInputMember = document.querySelector('.addPerson');
  addInputMember.insertAdjacentHTML('afterend', " <div class=\"form-row addPerson\">\n<div class=\"form-group col-md-4\">\n<label for=\"name\" class=\"bg-white rounded px-2\">Name</label>\n<input type=\"text\" class=\"form-control namePerson\" />\n</div>\n<div class=\"form-group col-md-4\">\n<label for=\"idCard\" class=\"bg-white rounded px-2\">idCard</label>\n<input type=\"text\" class=\"form-control idCardPerson\" />\n</div>\n<div class=\"form-group col-md-4\">\n<label for=\"age\" class=\"bg-white rounded px-2\">Age</label>\n<input\n  type=\"number\"\n  class=\"form-control agePerson\"\n  min=\"0\"\n  max=\"99\"\n/>\n</div>\n</div>    ");
};

exports.onclickCallback = onclickCallback;
},{}],"app/pages/checkIn/reset-member-area.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetMemberArea = void 0;

var resetMemberArea = function resetMemberArea() {
  var addPersonArea = document.querySelectorAll('.addPerson');
  addPersonArea.forEach(function (value, index) {
    if (index === 0) {
      value.innerHTML = "\n    <div class=\"form-group col-md-4\">\n      <label for=\"name\" class=\"bg-white rounded px-2\">Name</label>\n      <input type=\"text\" class=\"form-control namePerson\" />\n    </div>\n    <div class=\"form-group col-md-4\">\n      <label for=\"idCard\" class=\"bg-white rounded px-2\">idCard</label>\n      <input type=\"text\" class=\"form-control idCardPerson\" />\n    </div>\n    <div class=\"form-group col-md-4\">\n      <label for=\"age\" class=\"bg-white rounded px-2\">Age</label>\n      <input\n        type=\"number\"\n        class=\"form-control agePerson\"\n        min=\"0\"\n        max=\"99\"\n      />\n    </div>\n  ";
    }

    if (index !== 0) {
      value.remove();
    }
  });
};

exports.resetMemberArea = resetMemberArea;
},{}],"app/components/constructor-functions.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = Person;

function Person(idCard, name, age) {
  this.idCard = idCard;
  this.name = name;
  this.age = age;
}
},{}],"app/pages/checkIn/get-New-Member.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewMember = void 0;

var _constructorFunctions = require("../../components/constructor-functions");

var getNewMember = function getNewMember() {
  var result = {
    resolve: [],
    reject: []
  };
  var addPerson = document.querySelectorAll('.addPerson');
  var newMembers = [];
  addPerson.forEach(function (value, index) {
    var newIdCard = value.children[0].children[1].value;
    var newName = value.children[1].children[1].value;
    var newAge = value.children[2].children[1].value;

    if (newIdCard === '' || newName === '' || newAge === '') {
      result.reject.push("Please complete member " + (index + 1));
      return result;
    }

    var newPerson = new _constructorFunctions.Person(newIdCard, newName, newAge);
    newMembers.push(newPerson);
  });
  result.resolve.push(newMembers);
  return result;
};

exports.getNewMember = getNewMember;
},{"../../components/constructor-functions":"app/components/constructor-functions.ts"}],"app/pages/checkIn/register-guest-in-store.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerGuestInStore = void 0;

var _getNewMember = require("./get-New-Member");

var registerGuestInStore = function registerGuestInStore() {
  var result = {
    resolve: [],
    reject: []
  };
  var form = document.querySelector('#formCheckIn');
  form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    event.preventDefault();
    var newMembers = (0, _getNewMember.getNewMember)();
    console.log(newMembers);
  });
  return result;
};

exports.registerGuestInStore = registerGuestInStore;
},{"./get-New-Member":"app/pages/checkIn/get-New-Member.ts"}],"app/pages/checkIn/check-in.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkInFunction = void 0;

var _addMemberButton = require("./add-member-button");

var _resetMemberArea = require("./reset-member-area");

var _registerGuestInStore = require("./register-guest-in-store");

var checkInFunction = function checkInFunction() {
  var addMemberButton = document.querySelector('#addMemberButton');
  addMemberButton === null || addMemberButton === void 0 ? void 0 : addMemberButton.removeEventListener('click', _addMemberButton.onclickCallback, false);
  (0, _resetMemberArea.resetMemberArea)();
  (0, _addMemberButton.addInputForMember)();
  (0, _registerGuestInStore.registerGuestInStore)();
};

exports.checkInFunction = checkInFunction;
},{"./add-member-button":"app/pages/checkIn/add-member-button.ts","./reset-member-area":"app/pages/checkIn/reset-member-area.ts","./register-guest-in-store":"app/pages/checkIn/register-guest-in-store.ts"}],"app/pages/checkIn/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkIn = require("./check-in");

Object.keys(_checkIn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _checkIn[key];
    }
  });
});
},{"./check-in":"app/pages/checkIn/check-in.ts"}],"app/index.ts":[function(require,module,exports) {
"use strict";

var _rooms = require("./pages/rooms");

var _checkIn = require("./pages/checkIn");

var areaButtonsButton = document.querySelector('#areaButtons');
var goBackButton = document.querySelector('#goBack');
var area;
areaButtonsButton === null || areaButtonsButton === void 0 ? void 0 : areaButtonsButton.addEventListener('click', function (event) {
  area = document.querySelector("#" + event.target.id + "Area");
  console.log(area.id);

  if (area && goBackButton) {
    areaButtonsButton.classList.add('d-none');
    area.classList.remove('d-none');
    goBackButton.classList.remove('d-none');

    switch (area.id) {
      case 'listRoomsArea':
        (0, _rooms.listRoom)();
        break;

      case 'checkInArea':
        (0, _checkIn.checkInFunction)();
        break;
    }
  }
});

if (goBackButton && areaButtonsButton) {
  goBackButton.addEventListener('click', function () {
    areaButtonsButton.classList.remove('d-none');
    area.classList.add('d-none');
    goBackButton.classList.add('d-none');
  });
}
},{"./pages/rooms":"app/pages/rooms/index.ts","./pages/checkIn":"app/pages/checkIn/index.ts"}],"C:/Users/Usuario/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55052" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Usuario/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app/index.ts"], null)
//# sourceMappingURL=/app.af35efec.js.map