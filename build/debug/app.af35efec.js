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
})({"app/store.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;
var store = {
  guests: [{
    idGuest: '65478',
    members: [{
      idCard: '92325678',
      name: 'Peter',
      age: 20
    }, {
      idCard: '99348678',
      name: 'Sarah',
      age: 20
    }],
    phone: '19009090',
    asignedRoom: [101],
    checkInDate: '2020/06/16',
    checkOutDate: '2020/06/26',
    invoice: true
  }, {
    idGuest: '98278',
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
    asignedRoom: [401],
    checkInDate: '2020/06/16',
    checkOutDate: '2020/06/26',
    invoice: false
  }, {
    idGuest: '99378',
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
    checkOutDate: '2020/06/19',
    invoice: false
  }],
  rooms: [{
    idRoom: 101,
    maxCapacity: 2,
    price: 60,
    guest: '65478'
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
    guest: '99378'
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
    guest: '99378'
  }, {
    idRoom: 401,
    maxCapacity: 3,
    price: 120,
    guest: '98278'
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
  }, {
    idCard: '33333333',
    name: 'Carlos',
    age: 40
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
    listRoomsTable.innerHTML = '';
    listToPrint.forEach(function (value, index) {
      listRoomsTable.insertAdjacentHTML('beforeend', "<tr class=\"table-success\">\n          <th scope=\"row\" class=\"py-1\">" + (index + 1) + "</th>\n      <th scope=\"col\" class=\"py-1\">" + value.idRoom + "</th>\n      <th scope=\"col\" class=\"py-1\">" + value.maxCapacity + "</th>\n      <th scope=\"col\" class=\"py-1\">" + value.price + "</th>\n      <th scope=\"col\" class=\"py-1\">" + value.guest + "</th>\n    </tr>");
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

var _store = require("../../store");

var _printListRooms = require("./print-list-rooms");

var listRoom = function listRoom() {
  (0, _printListRooms.printListRooms)(_store.store.rooms);
};

exports.listRoom = listRoom;
},{"../../store":"app/store.ts","./print-list-rooms":"app/pages/rooms/print-list-rooms.ts"}],"app/pages/rooms/index.ts":[function(require,module,exports) {
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
exports.onclickCallbackAddMemberButton = exports.addInputForMember = void 0;

var addInputForMember = function addInputForMember() {
  var addMemberButton = document.querySelector('#addMemberButton');
  addMemberButton === null || addMemberButton === void 0 ? void 0 : addMemberButton.addEventListener('click', onclickCallbackAddMemberButton, false);
};

exports.addInputForMember = addInputForMember;

var onclickCallbackAddMemberButton = function onclickCallbackAddMemberButton() {
  var addInputMember = document.querySelector('.addPerson');
  addInputMember.insertAdjacentHTML('afterend', " <div class=\"form-row addPerson\">\n<div class=\"form-group col-md-4\">\n<label for=\"name\" class=\"bg-white rounded px-2\">Name</label>\n<input type=\"text\" class=\"form-control namePerson\" />\n</div>\n<div class=\"form-group col-md-4\">\n<label for=\"idCard\" class=\"bg-white rounded px-2\">idCard</label>\n<input type=\"text\" class=\"form-control idCardPerson\" />\n</div>\n<div class=\"form-group col-md-4\">\n<label for=\"age\" class=\"bg-white rounded px-2\">Age</label>\n<input\n  type=\"number\"\n  class=\"form-control agePerson\"\n  min=\"0\"\n  max=\"99\"\n/>\n</div>\n</div>    ");
};

exports.onclickCallbackAddMemberButton = onclickCallbackAddMemberButton;
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
exports.Guest = Guest;

function Person(idCard, name, age) {
  this.idCard = idCard;
  this.name = name;
  this.age = age;
}

function Guest(idGuest, members, phone, asignedRoom, checkInDate, checkOutDate, invoice) {
  this.idGuest = idGuest;
  this.members = members;
  this.phone = phone;
  this.asignedRoom = asignedRoom;
  this.checkInDate = checkInDate;
  this.checkOutDate = checkOutDate;
  this.invoice = invoice;
}
},{}],"app/pages/checkIn/components/get-new-member.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewMember = void 0;

var _constructorFunctions = require("../../../components/constructor-functions");

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
    newAge = +newAge;

    if (newIdCard === '' || newName === '' || newAge === 0) {
      result.reject.push("Faltan datos de la linea " + (index + 1));
      return result;
    }

    var newPerson = new _constructorFunctions.Person(newIdCard, newName, newAge);
    newMembers.push(newPerson);
  });

  if (newMembers.length !== 0) {
    result.resolve.push(newMembers);
  }

  return result;
};

exports.getNewMember = getNewMember;
},{"../../../components/constructor-functions":"app/components/constructor-functions.ts"}],"app/pages/checkIn/components/get-phone-dates-checkIn.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPhoneDatesCheckIn = void 0;

var getPhoneDatesCheckIn = function getPhoneDatesCheckIn() {
  var result = {
    resolve: [],
    reject: []
  };
  var newPhone = document.querySelector('#phone').value;

  if (newPhone === '') {
    result.reject.push('movil incorrecto');
  }

  var newCheckInDate = document.querySelector('#checkInDate').value;

  if (newCheckInDate === '') {
    result.reject.push('Fecha Check In incorrecto');
  }

  var newCheckOutDate = document.querySelector('#checkOutDate').value;

  if (newCheckOutDate === '') {
    result.reject.push('Fecha Check Out incorrecto');
  }

  result.resolve.push(newPhone, newCheckInDate, newCheckOutDate);
  return result;
};

exports.getPhoneDatesCheckIn = getPhoneDatesCheckIn;
},{}],"app/pages/checkIn/components/get-capacity-per-room.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCapacityPerRoom = void 0;

var getCapacityPerRoom = function getCapacityPerRoom(qtyRooms, capaRequested) {
  var roomsToFind = [];

  for (var i = 0; i < qtyRooms - 1; i++) {
    roomsToFind.push(Math.round(capaRequested / (qtyRooms - i)));
    capaRequested = capaRequested - Math.round(capaRequested / (qtyRooms - i));
  }

  roomsToFind.push(capaRequested);
  return roomsToFind;
};

exports.getCapacityPerRoom = getCapacityPerRoom;
},{}],"app/components/get-empty-rooms.ts":[function(require,module,exports) {
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
},{}],"app/components/get-assigned-room.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFirstEmptyRoom = void 0;

var _store = require("../store");

var _getEmptyRooms = require("./get-empty-rooms");

var getFirstEmptyRoom = function getFirstEmptyRoom(capacity) {
  var emptyRooms;
  emptyRooms = (0, _getEmptyRooms.getEmptyRooms)(_store.store);
  var result = emptyRooms.find(function (value) {
    if (value.maxCapacity === capacity) return value;
  });
  return result;
};

exports.getFirstEmptyRoom = getFirstEmptyRoom;
},{"../store":"app/store.ts","./get-empty-rooms":"app/components/get-empty-rooms.ts"}],"app/components/actual-max-capacity-free.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actualMaxCapaFree = void 0;

var _getEmptyRooms = require("./get-empty-rooms");

var _store = require("../store");

var actualMaxCapaFree = function actualMaxCapaFree() {
  var result = [];
  var emptyRooms = (0, _getEmptyRooms.getEmptyRooms)(_store.store);
  emptyRooms.forEach(function (value) {
    return result.push(value.maxCapacity);
  });
  return Math.max.apply(Math, result);
};

exports.actualMaxCapaFree = actualMaxCapaFree;
},{"./get-empty-rooms":"app/components/get-empty-rooms.ts","../store":"app/store.ts"}],"app/components/bucle-find-empty-room.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoomSelected = void 0;

var _getAssignedRoom = require("./get-assigned-room");

var _actualMaxCapacityFree = require("./actual-max-capacity-free");

var getRoomSelected = function getRoomSelected(requestedCapacity) {
  var findEmptyRoom;

  for (var i = requestedCapacity; i <= (0, _actualMaxCapacityFree.actualMaxCapaFree)(); i++) {
    findEmptyRoom = (0, _getAssignedRoom.getFirstEmptyRoom)(i);

    if (findEmptyRoom !== undefined) {
      i = (0, _actualMaxCapacityFree.actualMaxCapaFree)();
    }
  }

  return findEmptyRoom;
};

exports.getRoomSelected = getRoomSelected;
},{"./get-assigned-room":"app/components/get-assigned-room.ts","./actual-max-capacity-free":"app/components/actual-max-capacity-free.ts"}],"app/pages/checkIn/components/get-new-assigned-rooms.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewAssignedRooms = void 0;

var _store = require("../../../store");

var _getCapacityPerRoom = require("./get-capacity-per-room");

var _bucleFindEmptyRoom = require("../../../components/bucle-find-empty-room");

var getNewAssignedRooms = function getNewAssignedRooms(newMembers, guestId) {
  var result = {
    resolve: [],
    reject: []
  };

  if (!newMembers.length) {
    result.reject.push('No hay personas para registrar');
    return result;
  }

  var capaRequested;

  if (newMembers.length) {
    capaRequested = newMembers[0].length;
  }

  var quantityRoomsRequested = document.querySelector('#selectNumberRooms');
  quantityRoomsRequested = +quantityRoomsRequested.value;

  if (!quantityRoomsRequested) {
    result.reject.push('No hay habitaciones selecionadas');
    return result;
  }

  var capacityPerRoom = (0, _getCapacityPerRoom.getCapacityPerRoom)(quantityRoomsRequested, capaRequested);
  capacityPerRoom.forEach(function (value) {
    var assignedRoom = (0, _bucleFindEmptyRoom.getRoomSelected)(value);

    if (assignedRoom === undefined) {
      result.reject.push('No quedan habicationes');
      return;
    }

    result.resolve.push(assignedRoom.idRoom);

    _store.store.rooms.forEach(function (room) {
      if (room.idRoom === assignedRoom.idRoom) room.guest = guestId;
    });
  });
  return result;
};

exports.getNewAssignedRooms = getNewAssignedRooms;
},{"../../../store":"app/store.ts","./get-capacity-per-room":"app/pages/checkIn/components/get-capacity-per-room.ts","../../../components/bucle-find-empty-room":"app/components/bucle-find-empty-room.ts"}],"app/pages/checkIn/get-new-guest.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewGuest = void 0;

var _getPhoneDatesCheckIn = require("./components/get-phone-dates-checkIn");

var _constructorFunctions = require("../../components/constructor-functions");

var _getNewAssignedRooms = require("./components/get-new-assigned-rooms");

var getNewGuest = function getNewGuest(newMembers) {
  var result = {
    resolve: [],
    reject: []
  };
  var phoneDatesCheckInOut = (0, _getPhoneDatesCheckIn.getPhoneDatesCheckIn)();

  if (phoneDatesCheckInOut.reject.length) {
    result.reject.push(phoneDatesCheckInOut.reject);
    return result;
  }

  var newIdGuest = "" + Math.floor(Math.random() * 99999);
  var newAssignedRooms = (0, _getNewAssignedRooms.getNewAssignedRooms)(newMembers, newIdGuest);

  if (newAssignedRooms.reject.length) {
    result.reject.push(newAssignedRooms.reject);
    return result;
  }

  var newGuest = new _constructorFunctions.Guest(newIdGuest, newMembers[0], phoneDatesCheckInOut.resolve[0], newAssignedRooms.resolve, phoneDatesCheckInOut.resolve[1], phoneDatesCheckInOut.resolve[2], false);
  result.resolve.push(newGuest);
  return result;
};

exports.getNewGuest = getNewGuest;
},{"./components/get-phone-dates-checkIn":"app/pages/checkIn/components/get-phone-dates-checkIn.ts","../../components/constructor-functions":"app/components/constructor-functions.ts","./components/get-new-assigned-rooms":"app/pages/checkIn/components/get-new-assigned-rooms.ts"}],"app/pages/checkIn/register-guest-in-store.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerGuestInStore = void 0;

var _getNewMember = require("./components/get-new-member");

var _getNewGuest = require("./get-new-guest");

var _store = require("../../store");

var registerGuestInStore = function registerGuestInStore() {
  var result = {
    resolve: [],
    reject: []
  };
  var form = document.querySelector('#formCheckIn');
  var resultArea = document.querySelector('.resultCheckInArea');
  var resultAreaResolve = document.querySelector('.resultCheckInAreaResolve');
  var resultAreaReject = document.querySelector('.resultCheckInAreaReject');
  form === null || form === void 0 ? void 0 : form.addEventListener('submit', function submitCheckIn(event) {
    event.preventDefault();
    var counter = result.resolve.length;
    resultAreaResolve === null || resultAreaResolve === void 0 ? void 0 : resultAreaResolve.innerHTML = '';
    resultAreaReject === null || resultAreaReject === void 0 ? void 0 : resultAreaReject.innerHTML = '';
    var newMembers = (0, _getNewMember.getNewMember)();

    if (newMembers.reject.length) {
      result.reject.push(newMembers.reject);
    }

    var newGuest = (0, _getNewGuest.getNewGuest)(newMembers.resolve);

    if (newGuest.resolve.length !== 0) {
      result.resolve.push(newGuest.resolve[0]);
    }

    if (newGuest.reject.length !== 0) {
      result.reject.push(newGuest.reject);
    }

    if (newGuest.reject.length === 0) {
      _store.store.guests.push(newGuest.resolve[0]);
    }

    console.log(result.resolve[counter]);
    resultArea === null || resultArea === void 0 ? void 0 : resultArea.classList.remove('d-none');
    result.reject.length ? (resultAreaReject.classList.remove('d-none'), resultAreaReject.innerHTML = "", resultAreaReject.innerHTML = "<p class=\"bg-white rounded px-2 py-1 mt-2\">" + result.reject + "\n      </p>") : (resultAreaResolve.classList.remove('d-none'), resultAreaReject.innerHTML = "", resultAreaResolve.innerHTML = "<p class=\"bg-white rounded px-2 py-1 mt-2\">Habitacion asignada: " + result.resolve[counter].asignedRoom + "<br>\n      IdGuest: " + result.resolve[counter].idGuest + "<br>\n      CheckIn Date: " + result.resolve[counter].checkInDate + "<br>\n      CheckOut Date: " + result.resolve[counter].checkOutDate + "\n      </p>");
  });
  return result;
};

exports.registerGuestInStore = registerGuestInStore;
},{"./components/get-new-member":"app/pages/checkIn/components/get-new-member.ts","./get-new-guest":"app/pages/checkIn/get-new-guest.ts","../../store":"app/store.ts"}],"app/pages/checkIn/check-in.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkInFunction = void 0;

var _addMemberButton = require("./add-member-button");

var _resetMemberArea = require("./reset-member-area");

var _registerGuestInStore = require("./register-guest-in-store");

var checkInFunction = function checkInFunction() {
  var _a;

  var addMemberButton = document.querySelector('#addMemberButton');
  addMemberButton === null || addMemberButton === void 0 ? void 0 : addMemberButton.removeEventListener('click', _addMemberButton.onclickCallbackAddMemberButton, false);
  (_a = document.querySelector('.resultCheckInArea')) === null || _a === void 0 ? void 0 : _a.classList.add('d-none');
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
},{"./check-in":"app/pages/checkIn/check-in.ts"}],"app/pages/guest/components/show-members-details.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showMembersDetails = void 0;

var _store = require("../../../store");

var showMembersDetails = function showMembersDetails(areaMemberList, membersId) {
  areaMemberList.children[0].innerHTML = "";

  var guestToShow = _store.store.guests.find(function (guest) {
    return guest.idGuest === membersId;
  });

  guestToShow.members.forEach(function (member) {
    areaMemberList.children[0].insertAdjacentHTML('beforeend', "<ul>Name: " + member.name + " \u2192 IdCard: " + member.idCard + " \u2192 Age: " + member.age + "\n      </ul>");
  });
};

exports.showMembersDetails = showMembersDetails;
},{"../../../store":"app/store.ts"}],"app/pages/guest/list-guest.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listGuests = void 0;

var _store = require("../../store");

var _showMembersDetails = require("./components/show-members-details");

var listGuests = function listGuests() {
  var listGuestsTable = document.querySelector('#listGuestsTable');

  if (listGuestsTable) {
    listGuestsTable.innerHTML = '';

    _store.store.guests.forEach(function (guest, index) {
      listGuestsTable.insertAdjacentHTML('beforeend', "<tr class=\"table-success \">\n            <th scope=\"row\">" + (index + 1) + "</th>\n            <td class=\"pl-0\">" + guest.idGuest + "</td>\n            <td class=\"pl-0\">" + guest.checkInDate + "</td>\n            <td class=\"pl-0\">" + guest.checkOutDate + "</td>\n            <td class=\"pl-0\">" + guest.invoice + "</td>\n            <td class=\"pl-0\">" + guest.asignedRoom + "</td>\n            <td class=\"pl-0 d-flex justify-content-center \">\n            <button class=\"btn btn-success py-1 listMembers\" type=\"button\" id=\"" + guest.idGuest + "\">\n            " + guest.members.length + "  \u25BC\n            </button>\n            </div></td>\n            </tr>\n            <tr class=\"d-none\">\n            <td class=\"px-3\" colspan=\"7\" style=\"background-color:#c3e6cb\">          \n            </td></tr>\n                        ");
    });
  }

  listGuestsTable === null || listGuestsTable === void 0 ? void 0 : listGuestsTable.addEventListener('click', function (event) {
    if (event.target.classList.value.includes('listMembers')) {
      var membersId = event.target.id;
      var areaMemberList = event.target.parentElement.parentElement.nextElementSibling;
      areaMemberList.classList.toggle('d-none');
      (0, _showMembersDetails.showMembersDetails)(areaMemberList, membersId);
    }
  });
};

exports.listGuests = listGuests;
},{"../../store":"app/store.ts","./components/show-members-details":"app/pages/guest/components/show-members-details.ts"}],"app/pages/guest/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listGuest = require("./list-guest");

Object.keys(_listGuest).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _listGuest[key];
    }
  });
});
},{"./list-guest":"app/pages/guest/list-guest.ts"}],"app/pages/invoice/components/get-guest-per-room.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGuestPerRoom = void 0;

var _store = require("../../../store");

var getGuestPerRoom = function getGuestPerRoom() {
  var roomToInvoice = document.querySelector('#roomToInvoice');

  var result = _store.store.guests.find(function (value) {
    if (value.asignedRoom.indexOf(roomToInvoice.valueAsNumber) + 1) return value;
  });

  return result;
};

exports.getGuestPerRoom = getGuestPerRoom;
},{"../../../store":"app/store.ts"}],"app/pages/invoice/components/invoicing.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invoicing = void 0;

var _store = require("../../../store");

var invoicing = function invoicing(guest) {
  var result = {
    resolve: [],
    reject: []
  };
  result.resolve.push(guest.asignedRoom);
  var price = [];
  guest.asignedRoom.forEach(function (room) {
    var roomPrice = _store.store.rooms.find(function (value) {
      return value.idRoom === room;
    });

    price.push(roomPrice.price);
  });
  var checkOutDate = new Date(guest.checkOutDate);
  var checkInDate = new Date(guest.checkInDate);
  var days = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
  result.resolve.push(price.map(function (value) {
    return value * days;
  }));

  _store.store.guests.forEach(function (value) {
    if (value.idGuest === guest.idGuest) value.invoice = true;
  });

  var previousCheck = _store.store.previousCustomers.find(function (value) {
    return guest.members.some(function (member) {
      return member.idCard === value.idCard;
    });
  });

  if (previousCheck) {
    result.resolve.push('Previous');
  }

  return result.resolve;
};

exports.invoicing = invoicing;
},{"../../../store":"app/store.ts"}],"app/components/hide-elements.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideElements = void 0;

var hideElements = function hideElements(element) {
  element.forEach(function (value) {
    return value.classList.add('d-none');
  });
};

exports.hideElements = hideElements;
},{}],"app/components/show-elements.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showElements = void 0;

var showElements = function showElements(element) {
  element.forEach(function (value) {
    return value.classList.remove('d-none');
  });
};

exports.showElements = showElements;
},{}],"app/pages/invoice/components/print-invoice-result.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printInvoiceResult = void 0;

var _hideElements = require("../../../components/hide-elements");

var _showElements = require("../../../components/show-elements");

var printInvoiceResult = function printInvoiceResult(information) {
  var areaPrint = document.querySelector('#invoiceResult');
  (0, _hideElements.hideElements)([areaPrint]);
  (0, _showElements.showElements)([areaPrint]);

  if (information.length === 1) {
    areaPrint === null || areaPrint === void 0 ? void 0 : areaPrint.innerHTML = '';
    areaPrint === null || areaPrint === void 0 ? void 0 : areaPrint.insertAdjacentHTML('beforeend', "<p class=\"py-2 px-2\">" + information + "</p><p class=\"py-2 px-2\">\n      Muchas gracias por la visita</p>");
  }

  if (information.length >= 2) {
    areaPrint === null || areaPrint === void 0 ? void 0 : areaPrint.innerHTML = '';

    if (!information[2]) {
      information[0].forEach(function (value, index) {
        areaPrint === null || areaPrint === void 0 ? void 0 : areaPrint.insertAdjacentHTML('beforeend', "\n      <li class=\"py-2 px-2\">Por la habitacion " + value + " debe pagar " + information[1][index] + " \u20AC</li>\n      ");
      });
      areaPrint === null || areaPrint === void 0 ? void 0 : areaPrint.insertAdjacentHTML('beforeend', "<h6 class=\"py-2 px-2\">La factura total asciende a " + information[1].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }) + " \u20AC</h6><p class=\"py-2 px-2\">Muchas gracias por la visita</p>");
    }

    if (information[2]) {
      areaPrint === null || areaPrint === void 0 ? void 0 : areaPrint.insertAdjacentHTML('beforeend', "<h6 class=\"py-2 px-2\">Es usted cliente previo\n         </h6>");
      information[0].forEach(function (value, index) {
        areaPrint === null || areaPrint === void 0 ? void 0 : areaPrint.insertAdjacentHTML('beforeend', "\n      <li class=\"py-2 px-2\">Por la habitacion " + value + " debe pagar " + information[1][index] * 0.9 + " \u20AC</li>\n      ");
      });
      areaPrint === null || areaPrint === void 0 ? void 0 : areaPrint.insertAdjacentHTML('beforeend', "<h6 class=\"py-2 px-2\">La factura total asciende a " + 0.9 * information[1].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }) + " \u20AC</h6><p class=\"py-2 px-2\">Muchas gracias por volver a nuestro hotel</p>");
    }
  }
};

exports.printInvoiceResult = printInvoiceResult;
},{"../../../components/hide-elements":"app/components/hide-elements.ts","../../../components/show-elements":"app/components/show-elements.ts"}],"app/pages/invoice/callback-invoice.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callbackInvoice = void 0;

var _getGuestPerRoom = require("./components/get-guest-per-room");

var _invoicing = require("./components/invoicing");

var _printInvoiceResult = require("./components/print-invoice-result");

var callbackInvoice = function callbackInvoice(event) {
  event.preventDefault();
  var result = {
    resolve: [],
    reject: []
  };
  result.reject.splice(0, 3);
  result.resolve.splice(0, 3);
  var guest = (0, _getGuestPerRoom.getGuestPerRoom)();

  if (guest === undefined) {
    result.reject.push('Habitacion no encontrada');
  }

  if (guest) {
    guest.invoice ? result.reject.push('Habitacion ya pagada, puede hacer CheckIn') : result.resolve = (0, _invoicing.invoicing)(guest);
  }

  if (result.reject.length) {
    (0, _printInvoiceResult.printInvoiceResult)(result.reject);
  }

  if (result.resolve.length) {
    (0, _printInvoiceResult.printInvoiceResult)(result.resolve);
  }
};

exports.callbackInvoice = callbackInvoice;
},{"./components/get-guest-per-room":"app/pages/invoice/components/get-guest-per-room.ts","./components/invoicing":"app/pages/invoice/components/invoicing.ts","./components/print-invoice-result":"app/pages/invoice/components/print-invoice-result.ts"}],"app/pages/invoice/invoice.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invoiceFunction = void 0;

var _callbackInvoice = require("./callback-invoice");

var invoiceFunction = function invoiceFunction() {
  var _a;

  (_a = document.querySelector('#invoiceResult')) === null || _a === void 0 ? void 0 : _a.classList.add('d-none');
  var invoiceForm = document.querySelector('#invoiceForm');

  if (invoiceForm) {
    invoiceForm.removeEventListener('submit', _callbackInvoice.callbackInvoice);
    invoiceForm.addEventListener('submit', _callbackInvoice.callbackInvoice);
  }
};

exports.invoiceFunction = invoiceFunction;
},{"./callback-invoice":"app/pages/invoice/callback-invoice.ts"}],"app/pages/invoice/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _invoice = require("./invoice");

Object.keys(_invoice).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _invoice[key];
    }
  });
});
},{"./invoice":"app/pages/invoice/invoice.ts"}],"app/pages/weather/components/get-location-api.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocationApi = void 0;

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var APIKEY = 'w42UjDijls6DictTC5GWNzehDFloFKJD';
var BASEURL = "http://dataservice.accuweather.com/locations/v1/cities/search";

var getLocationApi = function getLocationApi(location) {
  return __awaiter(void 0, void 0, void 0, function () {
    var resultLocation, dataLocation;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, fetch(BASEURL + "?apikey=" + APIKEY + "&q=" + location + "&details=true")];

        case 1:
          resultLocation = _a.sent();
          return [4, resultLocation.json()];

        case 2:
          dataLocation = _a.sent();
          return [2, dataLocation];
      }
    });
  });
};

exports.getLocationApi = getLocationApi;
},{}],"app/pages/weather/components/get-weather-api.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWeatherApi = void 0;

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var APIKEY = 'w42UjDijls6DictTC5GWNzehDFloFKJD';
var BASEURL = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/";

var getWeatherApi = function getWeatherApi(locationKey) {
  return __awaiter(void 0, void 0, void 0, function () {
    var resultWeather, dataWeather;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, fetch("" + BASEURL + locationKey + "?apikey=" + APIKEY + "&language=es-ES&details=true&metric=true")];

        case 1:
          resultWeather = _a.sent();
          return [4, resultWeather.json()];

        case 2:
          dataWeather = _a.sent();
          return [2, dataWeather];
      }
    });
  });
};

exports.getWeatherApi = getWeatherApi;
},{}],"app/pages/weather/components/print-result-weather.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printResultWeather = void 0;

var printResultWeather = function printResultWeather(data) {
  var weatherTitle = document.querySelector('.weatherTitle');
  var weatherTemperatureMax = document.querySelector('.weatherTemperatureMax');
  var weatherTemperatureMin = document.querySelector('.weatherTemperatureMin');
  var weatherImg = document.querySelector('.weatherImg');
  weatherTitle.textContent = '';
  weatherTitle.textContent = "" + data.Headline.Text;
  weatherTemperatureMax.textContent = '';
  weatherTemperatureMax.textContent = data.DailyForecasts[0].Temperature.Maximum.Value + " \xBAC";
  weatherTemperatureMin.textContent = '';
  weatherTemperatureMin.textContent = data.DailyForecasts[0].Temperature.Minimum.Value + " \xBAC";
  weatherImg.src = "./weather/" + data.DailyForecasts[0].Day.Icon + "-s.png";
  weatherImg.alt = "" + data.DailyForecasts[0].Day.Icon;
};

exports.printResultWeather = printResultWeather;
},{}],"app/pages/weather/weather.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.weather = void 0;

var _getLocationApi = require("./components/get-location-api");

var _getWeatherApi = require("./components/get-weather-api");

var _printResultWeather = require("./components/print-result-weather");

var weather = function weather() {
  var locationForm = document.querySelector('#cityToFindForm');
  var locationInput = document.querySelector('#cityToFind');
  var showCardResult = document.querySelector('#weatherResult');
  showCardResult === null || showCardResult === void 0 ? void 0 : showCardResult.classList.add('d-none');
  locationForm === null || locationForm === void 0 ? void 0 : locationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (locationInput) {
      var locationData = (0, _getLocationApi.getLocationApi)(locationInput.value);
      locationData.then(function (data) {
        var weatherData = (0, _getWeatherApi.getWeatherApi)(data[0].Key);
        weatherData.then(function (data) {
          showCardResult === null || showCardResult === void 0 ? void 0 : showCardResult.classList.remove('d-none');
          (0, _printResultWeather.printResultWeather)(data);
        });
      });
    }
  });
};

exports.weather = weather;
},{"./components/get-location-api":"app/pages/weather/components/get-location-api.ts","./components/get-weather-api":"app/pages/weather/components/get-weather-api.ts","./components/print-result-weather":"app/pages/weather/components/print-result-weather.ts"}],"app/pages/weather/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weather = require("./weather");

Object.keys(_weather).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _weather[key];
    }
  });
});
},{"./weather":"app/pages/weather/weather.ts"}],"app/pages/newYorkTimes/components/get-news.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNews = void 0;

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var APIKEY = 'U0kqqSE6F1u8cJ3fS55r0TuBHP7pncBP';

var getNews = function getNews(section) {
  return __awaiter(void 0, void 0, void 0, function () {
    var result, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, fetch("https://api.nytimes.com/svc/news/v3/content/all/" + section + ".json?api-key=" + APIKEY)];

        case 1:
          result = _a.sent();
          return [4, result.json()];

        case 2:
          data = _a.sent();
          return [2, data];
      }
    });
  });
};

exports.getNews = getNews;
},{}],"app/pages/newYorkTimes/new-york-times.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.news = void 0;

var _showElements = require("../../components/show-elements");

var _getNews = require("./components/get-news");

var _hideElements = require("../../components/hide-elements");

var news = function news() {
  var selectNews = document.querySelector('#selectNews');
  var newYorkTimesResult = document.querySelector('#newYorkTimesResult');
  (0, _hideElements.hideElements)([newYorkTimesResult]);
  selectNews === null || selectNews === void 0 ? void 0 : selectNews.addEventListener('change', function () {
    var newNews = (0, _getNews.getNews)(selectNews.value);
    newNews.then(function (data) {
      newYorkTimesResult === null || newYorkTimesResult === void 0 ? void 0 : newYorkTimesResult.innerHTML = '';
      (0, _showElements.showElements)([newYorkTimesResult]);

      for (var i = 0; i < 4; i++) {
        newYorkTimesResult.insertAdjacentHTML('beforeend', "<h6>" + data.results[i].title + "</h6>");
        newYorkTimesResult.insertAdjacentHTML('beforeend', "<a class=\"pb-3\"href=\"" + data.results[i].url + "\">Link</a>");
      }
    });
  });
};

exports.news = news;
},{"../../components/show-elements":"app/components/show-elements.ts","./components/get-news":"app/pages/newYorkTimes/components/get-news.ts","../../components/hide-elements":"app/components/hide-elements.ts"}],"app/pages/newYorkTimes/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _newYorkTimes = require("./new-york-times");

Object.keys(_newYorkTimes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _newYorkTimes[key];
    }
  });
});
},{"./new-york-times":"app/pages/newYorkTimes/new-york-times.ts"}],"app/pages/checkOut/components/get-guest-per-room.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGuestPerRoom = void 0;

var _store = require("../../../store");

var getGuestPerRoom = function getGuestPerRoom() {
  var roomToCheckOut = document.querySelector('#roomToCheckOut');

  var result = _store.store.guests.find(function (value) {
    if (value.asignedRoom.indexOf(roomToCheckOut.valueAsNumber) + 1) return value;
  });

  return result;
};

exports.getGuestPerRoom = getGuestPerRoom;
},{"../../../store":"app/store.ts"}],"app/pages/checkOut/components/checkOut-guest.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkOutGuest = void 0;

var _store = require("../../../store");

var checkOutGuest = function checkOutGuest(guest) {
  var asignedRoom = guest.asignedRoom;

  _store.store.rooms.forEach(function (room) {
    if (asignedRoom.some(function (value) {
      return value === room.idRoom;
    })) {
      room.guest = '';
    }
  });

  var index = _store.store.guests.findIndex(function (value) {
    return value.idGuest === guest.idGuest;
  });

  _store.store.guests.splice(index, 1);

  guest.members.forEach(function (member) {
    return _store.store.previousCustomers.push(member);
  });
  return asignedRoom;
};

exports.checkOutGuest = checkOutGuest;
},{"../../../store":"app/store.ts"}],"app/pages/checkOut/components/print-checkOut-result.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printCheckOutResult = void 0;

var _showElements = require("../../../components/show-elements");

var _hideElements = require("../../../components/hide-elements");

var printCheckOutResult = function printCheckOutResult(information) {
  var resultArea = document.querySelector('#CheckOutResult');
  (0, _hideElements.hideElements)([resultArea]);
  (0, _showElements.showElements)([resultArea]);

  if (information.reject.length) {
    resultArea === null || resultArea === void 0 ? void 0 : resultArea.innerHTML = '';
    resultArea === null || resultArea === void 0 ? void 0 : resultArea.insertAdjacentHTML('beforeend', "<p class=\"p-2\">" + information.reject + "\n    </p>\n    <p class=\"p-2\">Muchas Gracias</p>\n    ");
  }

  if (information.resolve.length) {
    resultArea === null || resultArea === void 0 ? void 0 : resultArea.innerHTML = '';
    information.resolve.forEach(function (value) {
      resultArea === null || resultArea === void 0 ? void 0 : resultArea.insertAdjacentHTML('beforeend', "<li class=\"p-2\">Check Out habitacion: " + value + "</li>     \n        ");
    });
    resultArea === null || resultArea === void 0 ? void 0 : resultArea.insertAdjacentHTML('beforeend', "<p class=\"p-2\">Muchas gracias por la visita</p>");
  }
};

exports.printCheckOutResult = printCheckOutResult;
},{"../../../components/show-elements":"app/components/show-elements.ts","../../../components/hide-elements":"app/components/hide-elements.ts"}],"app/pages/checkOut/components/callback-checkOut.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callbackCheckOut = void 0;

var _getGuestPerRoom = require("./get-guest-per-room");

var _checkOutGuest = require("./checkOut-guest");

var _printCheckOutResult = require("./print-checkOut-result");

var callbackCheckOut = function callbackCheckOut(event) {
  event.preventDefault();
  var result = {
    resolve: [],
    reject: []
  };
  var guest = (0, _getGuestPerRoom.getGuestPerRoom)();

  if (guest === undefined) {
    result.reject.push('La habitacion no esta alquilada');
  }

  if ((guest === null || guest === void 0 ? void 0 : guest.invoice) === false) {
    result.reject.push('La habitacion no esta facturada');
  }

  if ((guest === null || guest === void 0 ? void 0 : guest.invoice) === true) {
    result.resolve = (0, _checkOutGuest.checkOutGuest)(guest);
  }

  (0, _printCheckOutResult.printCheckOutResult)(result);
};

exports.callbackCheckOut = callbackCheckOut;
},{"./get-guest-per-room":"app/pages/checkOut/components/get-guest-per-room.ts","./checkOut-guest":"app/pages/checkOut/components/checkOut-guest.ts","./print-checkOut-result":"app/pages/checkOut/components/print-checkOut-result.ts"}],"app/pages/checkOut/checkOut.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkOut = void 0;

var _callbackCheckOut = require("./components/callback-checkOut");

var _hideElements = require("../../components/hide-elements");

var checkOut = function checkOut() {
  (0, _hideElements.hideElements)([document.querySelector('#CheckOutResult')]);
  var checkOutForm = document.querySelector('#checkOutForm');

  if (checkOutForm) {
    checkOutForm.removeEventListener('submit', _callbackCheckOut.callbackCheckOut);
    checkOutForm.addEventListener('submit', _callbackCheckOut.callbackCheckOut);
  }
};

exports.checkOut = checkOut;
},{"./components/callback-checkOut":"app/pages/checkOut/components/callback-checkOut.ts","../../components/hide-elements":"app/components/hide-elements.ts"}],"app/pages/checkOut/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkOut = require("./checkOut");

Object.keys(_checkOut).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _checkOut[key];
    }
  });
});
},{"./checkOut":"app/pages/checkOut/checkOut.ts"}],"app/pages/changeRoom/components/get-guest-per-room.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGuestPerRoom = void 0;

var _store = require("../../../store");

var getGuestPerRoom = function getGuestPerRoom(roomsSelected) {
  var result = _store.store.guests.find(function (guest) {
    return guest.asignedRoom.some(function (room) {
      return room === parseInt(roomsSelected);
    });
  });

  return result;
};

exports.getGuestPerRoom = getGuestPerRoom;
},{"../../../store":"app/store.ts"}],"app/pages/changeRoom/components/print-guest-info.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printGuestInfo = void 0;

var _showElements = require("../../../components/show-elements");

var printGuestInfo = function printGuestInfo(guest, selectRooms) {
  var areaGuestInfo = document.querySelector('#changeRoomAreaGuestInfo');
  (0, _showElements.showElements)([areaGuestInfo]);
  areaGuestInfo === null || areaGuestInfo === void 0 ? void 0 : areaGuestInfo.innerHTML = '';
  areaGuestInfo === null || areaGuestInfo === void 0 ? void 0 : areaGuestInfo.insertAdjacentHTML('beforeend', "<h6 class=\"p-2 \">Id Guest: " + guest.idGuest + "</h6>\n    <p class=\"p-1 mb-2\">Asign room: " + guest.asignedRoom + "</p>\n    <p class=\"py-1 \">Change rooms: " + selectRooms + "</p>\n    <button class=\"btn btn-success mt-2 \" id=\"confirmChange\">Confirm</button>");
};

exports.printGuestInfo = printGuestInfo;
},{"../../../components/show-elements":"app/components/show-elements.ts"}],"app/pages/changeRoom/components/print-result-change-room.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printResultChangeRoom = void 0;

var _hideElements = require("../../../components/hide-elements");

var _showElements = require("../../../components/show-elements");

var printResultChangeRoom = function printResultChangeRoom(information) {
  var changeRoomResult = document.querySelector('#changeRoomAreaResult');
  (0, _hideElements.hideElements)([changeRoomResult]);
  (0, _showElements.showElements)([changeRoomResult]);
  changeRoomResult === null || changeRoomResult === void 0 ? void 0 : changeRoomResult.innerHTML = '';

  if (information.length === 1) {
    changeRoomResult === null || changeRoomResult === void 0 ? void 0 : changeRoomResult.insertAdjacentHTML('beforeend', "<p>" + information + "\n    </p>");
  }

  if (information.length >= 2) {
    for (var i = 0; i < information.length; i = i + 2) {
      changeRoomResult === null || changeRoomResult === void 0 ? void 0 : changeRoomResult.insertAdjacentHTML('beforeend', "<li class=\"p-2\">Cambiada habitacion: " + information[i] + " por la " + information[i + 1] + "</li>");
    }

    changeRoomResult === null || changeRoomResult === void 0 ? void 0 : changeRoomResult.insertAdjacentHTML('beforeend', "<p class=\"p-2\">Muchas Gracias</p>");
  }
};

exports.printResultChangeRoom = printResultChangeRoom;
},{"../../../components/hide-elements":"app/components/hide-elements.ts","../../../components/show-elements":"app/components/show-elements.ts"}],"app/pages/changeRoom/components/callback-change-room.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callbackChangeRoom = void 0;

var _store = require("../../../store");

var _getGuestPerRoom = require("./get-guest-per-room");

var _printGuestInfo = require("./print-guest-info");

var _printResultChangeRoom = require("./print-result-change-room");

var _getAssignedRoom = require("../../../components/get-assigned-room");

var _hideElements = require("../../../components/hide-elements");

var callbackChangeRoom = function callbackChangeRoom(event) {
  event.preventDefault();
  var result = {
    resolve: [],
    reject: []
  };
  var changeRoomSelect = document.querySelectorAll('#changeRoomSelect option:checked');

  if (document.querySelector('#changeRoomAreaResult')) {
    (0, _hideElements.hideElements)([document.querySelector('#changeRoomAreaResult')]);
  }

  var roomsSelected = Array.from(changeRoomSelect).map(function (el) {
    return el.value;
  });
  var guest = (0, _getGuestPerRoom.getGuestPerRoom)(roomsSelected[0]);

  if (guest === undefined) {
    result.reject.push('Esa habitacion esta vacia');
    (0, _hideElements.hideElements)([document.querySelector('#changeRoomAreaGuestInfo')]);
    (0, _printResultChangeRoom.printResultChangeRoom)(result.reject);
  }

  if (guest !== undefined) {
    (0, _printGuestInfo.printGuestInfo)(guest, roomsSelected);
  }

  var confirmChangeRoom = function confirmChangeRoom() {
    roomsSelected.forEach(function (value) {
      _store.store.rooms.find(function (room) {
        if (parseInt(value) === room.idRoom) {
          var requestedCapacity = room.maxCapacity;

          var allOcupped = _store.store.rooms.find(function (value) {
            return value.guest === '';
          });

          if (allOcupped === undefined) {
            result.reject.push('No disponemos de otra habitacion libre');
            (0, _printResultChangeRoom.printResultChangeRoom)(result.reject);
            return;
          }

          var findEmptyRoom_1 = (0, _getAssignedRoom.getFirstEmptyRoom)(requestedCapacity);

          _store.store.rooms.filter(function (element) {
            if (findEmptyRoom_1.idRoom === element.idRoom) {
              element.guest = guest === null || guest === void 0 ? void 0 : guest.idGuest;
            }
          });

          _store.store.rooms.forEach(function (element) {
            if (parseInt(value) === element.idRoom) {
              element.guest = '';
            }
          });

          var index = guest.asignedRoom.findIndex(function (element) {
            return element === parseInt(value);
          });
          var oldRoom = guest.asignedRoom.splice(index, 1, findEmptyRoom_1.idRoom);
          result.resolve.push(parseInt(value));
          result.resolve.push(findEmptyRoom_1.idRoom);
        }
      });
    });
    (0, _printResultChangeRoom.printResultChangeRoom)(result.resolve);
  };

  var confirmChangeButton = document.querySelector('#confirmChange');

  if (confirmChangeButton) {
    confirmChangeButton.removeEventListener('click', confirmChangeRoom);
    confirmChangeButton.addEventListener('click', confirmChangeRoom);
  }
};

exports.callbackChangeRoom = callbackChangeRoom;
},{"../../../store":"app/store.ts","./get-guest-per-room":"app/pages/changeRoom/components/get-guest-per-room.ts","./print-guest-info":"app/pages/changeRoom/components/print-guest-info.ts","./print-result-change-room":"app/pages/changeRoom/components/print-result-change-room.ts","../../../components/get-assigned-room":"app/components/get-assigned-room.ts","../../../components/hide-elements":"app/components/hide-elements.ts"}],"app/pages/changeRoom/change-room.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeRoom = void 0;

var _callbackChangeRoom = require("./components/callback-change-room");

var _hideElements = require("../../components/hide-elements");

var changeRoom = function changeRoom() {
  (0, _hideElements.hideElements)([document.querySelector('#changeRoomAreaGuestInfo'), document.querySelector('#changeRoomAreaResult')]);
  var changeRoomForm = document.querySelector('#changeRoomForm');

  if (changeRoomForm) {
    changeRoomForm.removeEventListener('submit', _callbackChangeRoom.callbackChangeRoom);
    changeRoomForm.addEventListener('submit', _callbackChangeRoom.callbackChangeRoom);
  }
};

exports.changeRoom = changeRoom;
},{"./components/callback-change-room":"app/pages/changeRoom/components/callback-change-room.ts","../../components/hide-elements":"app/components/hide-elements.ts"}],"app/pages/changeRoom/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _changeRoom = require("./change-room");

Object.keys(_changeRoom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _changeRoom[key];
    }
  });
});
},{"./change-room":"app/pages/changeRoom/change-room.ts"}],"app/index.ts":[function(require,module,exports) {
"use strict";

var _rooms = require("./pages/rooms");

var _checkIn = require("./pages/checkIn");

var _guest = require("./pages/guest");

var _invoice = require("./pages/invoice");

var _weather = require("./pages/weather");

var _newYorkTimes = require("./pages/newYorkTimes");

var _checkOut = require("./pages/checkOut");

var _hideElements = require("./components/hide-elements");

var _showElements = require("./components/show-elements");

var _changeRoom = require("./pages/changeRoom");

var areaButtonsButton = document.querySelector('#areaButtons');
var goBackButton = document.querySelector('#goBack');
var area;
areaButtonsButton === null || areaButtonsButton === void 0 ? void 0 : areaButtonsButton.addEventListener('click', function (event) {
  area = document.querySelector("#" + event.target.id + "Area");

  if (area && goBackButton) {
    (0, _hideElements.hideElements)([areaButtonsButton]);
    (0, _showElements.showElements)([area, goBackButton]);

    switch (area.id) {
      case 'listRoomsArea':
        (0, _rooms.listRoom)();
        break;

      case 'listGuestsArea':
        (0, _guest.listGuests)();
        break;

      case 'checkInArea':
        (0, _checkIn.checkInFunction)();
        break;

      case 'invoiceArea':
        (0, _invoice.invoiceFunction)();
        break;

      case 'weatherArea':
        (0, _weather.weather)();
        break;

      case 'checkOutArea':
        (0, _checkOut.checkOut)();
        break;

      case 'changeRoomArea':
        (0, _changeRoom.changeRoom)();
        break;

      case 'newYorkArea':
        (0, _newYorkTimes.news)();
        break;
    }
  }
});

if (goBackButton && areaButtonsButton) {
  goBackButton.addEventListener('click', function () {
    (0, _showElements.showElements)([areaButtonsButton]);
    (0, _hideElements.hideElements)([area, goBackButton]);
  });
}
},{"./pages/rooms":"app/pages/rooms/index.ts","./pages/checkIn":"app/pages/checkIn/index.ts","./pages/guest":"app/pages/guest/index.ts","./pages/invoice":"app/pages/invoice/index.ts","./pages/weather":"app/pages/weather/index.ts","./pages/newYorkTimes":"app/pages/newYorkTimes/index.ts","./pages/checkOut":"app/pages/checkOut/index.ts","./components/hide-elements":"app/components/hide-elements.ts","./components/show-elements":"app/components/show-elements.ts","./pages/changeRoom":"app/pages/changeRoom/index.ts"}],"C:/Users/Usuario/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62197" + '/');

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