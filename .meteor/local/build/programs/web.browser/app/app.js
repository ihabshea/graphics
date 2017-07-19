var require = meteorInstall({"client":{"main.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.html                                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.main.js");                                                                        // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.main.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.body.addContent((function() {                                                                                 // 2
  var view = this;                                                                                                     // 3
  return Spacebars.include(view.lookupTemplate("hello"));                                                              // 4
}));                                                                                                                   // 5
Meteor.startup(Template.body.renderToDocument);                                                                        // 6
                                                                                                                       // 7
Template.__checkName("hello");                                                                                         // 8
Template["hello"] = new Template("Template.hello", (function() {                                                       // 9
  var view = this;                                                                                                     // 10
  return [ HTML.Raw('<!-- Simple header with scrollable tabs. -->\n\n            <div class="mdl-textfield mdl-js-textfield">\n              <input class="mdl-textfield__input" type="text" id="radius">\n              <label class="mdl-textfield__label" for="radius">Enter the radius</label>\n            </div>\n  <button id="midpointgo" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">\n        <span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">GO</span>\n        Calculate first octant\n  </button>\n      '), Blaze.If(function() {
    return Spacebars.call(view.lookup("point"));                                                                       // 12
  }, function() {                                                                                                      // 13
    return [ "\n  ", HTML.TABLE({                                                                                      // 14
      class: "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp"                             // 15
    }, "\n    ", HTML.THEAD("\n      ", HTML.TR("\n        ", HTML.TH("K"), "\n        ", HTML.TH("P(k)"), "\n        ", HTML.TH("Plot"), "\n        ", HTML.TH(), "\n      "), "\n    "), "\n", Blaze.Each(function() {
      return Spacebars.call(view.lookup("point"));                                                                     // 17
    }, function() {                                                                                                    // 18
      return [ "\n", HTML.TR("\n  ", HTML.TD(Blaze.View("lookup:@index", function() {                                  // 19
        return Spacebars.mustache(view.lookup("@index"));                                                              // 20
      })), "\n   ", HTML.TD({                                                                                          // 21
        class: "mdl-data-table__cell--non-numeric"                                                                     // 22
      }, Blaze.View("lookup:pv", function() {                                                                          // 23
        return Spacebars.mustache(view.lookup("pv"));                                                                  // 24
      })), "\n   ", HTML.TD("(", Blaze.View("lookup:xp", function() {                                                  // 25
        return Spacebars.mustache(view.lookup("xp"));                                                                  // 26
      }), ", ", Blaze.View("lookup:yp", function() {                                                                   // 27
        return Spacebars.mustache(view.lookup("yp"));                                                                  // 28
      }), ")"), "\n   ", HTML.TD(Blaze.If(function() {                                                                 // 29
        return Spacebars.dataMustache(view.lookup("lessthan"), view.lookup("xp"), view.lookup("yp"));                  // 30
      }, function() {                                                                                                  // 31
        return Blaze.If(function() {                                                                                   // 32
          return Spacebars.dataMustache(view.lookup("isnegative"), view.lookup("pv"));                                 // 33
        }, function() {                                                                                                // 34
          return [ " P(", Blaze.View("lookup:addone", function() {                                                     // 35
            return Spacebars.mustache(view.lookup("addone"), view.lookup("@index"));                                   // 36
          }), ") = ", Blaze.View("lookup:pv", function() {                                                             // 37
            return Spacebars.mustache(view.lookup("pv"));                                                              // 38
          }), " + 2*", Blaze.View("lookup:xp", function() {                                                            // 39
            return Spacebars.mustache(view.lookup("xp"));                                                              // 40
          }), " +1 " ];                                                                                                // 41
        }, function() {                                                                                                // 42
          return [ " P(", Blaze.View("lookup:addone", function() {                                                     // 43
            return Spacebars.mustache(view.lookup("addone"), view.lookup("@index"));                                   // 44
          }), ") = ", Blaze.View("lookup:pv", function() {                                                             // 45
            return Spacebars.mustache(view.lookup("pv"));                                                              // 46
          }), " + 2*", Blaze.View("lookup:xp", function() {                                                            // 47
            return Spacebars.mustache(view.lookup("xp"));                                                              // 48
          }), " +1 - 2*", Blaze.View("lookup:yp", function() {                                                         // 49
            return Spacebars.mustache(view.lookup("yp"));                                                              // 50
          }), " " ];                                                                                                   // 51
        });                                                                                                            // 52
      })), "\n "), "\n" ];                                                                                             // 53
    }), "\n"), "\n" ];                                                                                                 // 54
  }), HTML.Raw('\n<div style="break:both;"></div>\n<div class="mdl-textfield mdl-js-textfield">\n  <input class="mdl-textfield__input" type="text" id="dda-x0">\n  <label class="mdl-textfield__label" for="dda-x0">X0</label>\n</div>\n<div class="mdl-textfield mdl-js-textfield">\n  <input class="mdl-textfield__input" type="text" id="dda-y0">\n  <label class="mdl-textfield__label" for="dda-y0">Y0</label>\n</div>\n<div class="mdl-textfield mdl-js-textfield">\n  <input class="mdl-textfield__input" type="text" id="dda-x1">\n  <label class="mdl-textfield__label" for="dda-x1">X1</label>\n</div>\n<div class="mdl-textfield mdl-js-textfield">\n  <input class="mdl-textfield__input" type="text" id="dda-y1">\n  <label class="mdl-textfield__label" for="dda-y1">Y1</label>\n</div>\n<button id="ddago" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">\n<span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">GO</span>\nDDA\n</button>\n'), Blaze.If(function() {
    return Spacebars.call(view.lookup("ddap"));                                                                        // 56
  }, function() {                                                                                                      // 57
    return [ "\n", HTML.TABLE({                                                                                        // 58
      class: "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp"                             // 59
    }, "\n", HTML.THEAD("\n", HTML.TR("\n  ", HTML.TH("x"), "\n  ", HTML.TH("y"), "\n  ", HTML.TH("Plot"), "\n  ", HTML.TH(), "\n"), "\n"), "\n", Blaze.Each(function() {
      return Spacebars.call(view.lookup("ddap"));                                                                      // 61
    }, function() {                                                                                                    // 62
      return [ "\n", HTML.TR("\n", HTML.TD(Blaze.View("lookup:@index", function() {                                    // 63
        return Spacebars.mustache(view.lookup("@index"));                                                              // 64
      })), "\n", HTML.TD({                                                                                             // 65
        class: "mdl-data-table__cell--non-numeric"                                                                     // 66
      }, Blaze.View("lookup:xp", function() {                                                                          // 67
        return Spacebars.mustache(view.lookup("xp"));                                                                  // 68
      })), "\n", HTML.TD({                                                                                             // 69
        class: "mdl-data-table__cell--non-numeric"                                                                     // 70
      }, Blaze.View("lookup:yp", function() {                                                                          // 71
        return Spacebars.mustache(view.lookup("yp"));                                                                  // 72
      })), "\n", HTML.TD("(", Blaze.View("lookup:nxp", function() {                                                    // 73
        return Spacebars.mustache(view.lookup("nxp"));                                                                 // 74
      }), ", ", Blaze.View("lookup:nyp", function() {                                                                  // 75
        return Spacebars.mustache(view.lookup("nyp"));                                                                 // 76
      }), ")"), "\n"), "\n" ];                                                                                         // 77
    }), "\n"), "\n" ];                                                                                                 // 78
  }), HTML.Raw('\n<div style="break:both;"></div>\n<div class="mdl-textfield mdl-js-textfield">\n  <input class="mdl-textfield__input" type="text" id="bers-x0">\n  <label class="mdl-textfield__label" for="bers-x0">X0</label>\n</div>\n<div class="mdl-textfield mdl-js-textfield">\n  <input class="mdl-textfield__input" type="text" id="bers-y0">\n  <label class="mdl-textfield__label" for="bers-y0">Y0</label>\n</div>\n<div class="mdl-textfield mdl-js-textfield">\n  <input class="mdl-textfield__input" type="text" id="bers-x1">\n  <label class="mdl-textfield__label" for="bers-x1">X1</label>\n</div>\n<div class="mdl-textfield mdl-js-textfield">\n  <input class="mdl-textfield__input" type="text" id="bers-y1">\n  <label class="mdl-textfield__label" for="bers-y1">Y1</label>\n</div>\n<button id="bersgo" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">\n<span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">GO</span>\nBersenham\'s\n</button>\n'), Blaze.If(function() {
    return Spacebars.call(view.lookup("bersp"));                                                                       // 80
  }, function() {                                                                                                      // 81
    return [ "\n", HTML.TABLE({                                                                                        // 82
      class: "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp"                             // 83
    }, "\n", HTML.THEAD("\n", HTML.TR("\n  ", HTML.TH("k"), "\n  ", HTML.TH("Pk"), "\n  ", HTML.TH("Plot"), "\n  ", HTML.TH("2x"), "\n  ", HTML.TH("2y"), "\n  ", HTML.TH(), "\n  ", HTML.TH(), "\n"), "\n"), "\n", Blaze.Each(function() {
      return Spacebars.call(view.lookup("bersp"));                                                                     // 85
    }, function() {                                                                                                    // 86
      return [ "\n", HTML.TR("\n", HTML.TD(Blaze.View("lookup:@index", function() {                                    // 87
        return Spacebars.mustache(view.lookup("@index"));                                                              // 88
      })), "\n", HTML.TD({                                                                                             // 89
        class: "mdl-data-table__cell--non-numeric"                                                                     // 90
      }, Blaze.View("lookup:pv", function() {                                                                          // 91
        return Spacebars.mustache(view.lookup("pv"));                                                                  // 92
      })), "\n", HTML.TD({                                                                                             // 93
        class: "mdl-data-table__cell--non-numeric"                                                                     // 94
      }, "(", Blaze.View("lookup:xp", function() {                                                                     // 95
        return Spacebars.mustache(view.lookup("xp"));                                                                  // 96
      }), ",", Blaze.View("lookup:yp", function() {                                                                    // 97
        return Spacebars.mustache(view.lookup("yp"));                                                                  // 98
      }), ")"), "\n", HTML.TD({                                                                                        // 99
        class: "mdl-data-table__cell--non-numeric"                                                                     // 100
      }, Blaze.View("lookup:double", function() {                                                                      // 101
        return Spacebars.mustache(view.lookup("double"), view.lookup("xp"));                                           // 102
      })), "\n", HTML.TD({                                                                                             // 103
        class: "mdl-data-table__cell--non-numeric"                                                                     // 104
      }, Blaze.View("lookup:double", function() {                                                                      // 105
        return Spacebars.mustache(view.lookup("double"), view.lookup("yp"));                                           // 106
      })), "\n", HTML.TD({                                                                                             // 107
        class: "mdl-data-table__cell--non-numeric"                                                                     // 108
      }, " ", Blaze.If(function() {                                                                                    // 109
        return Spacebars.dataMustache(view.lookup("isnegative"), view.lookup("pv"));                                   // 110
      }, function() {                                                                                                  // 111
        return [ " P(", Blaze.View("lookup:addone", function() {                                                       // 112
          return Spacebars.mustache(view.lookup("addone"), view.lookup("@index"));                                     // 113
        }), ")= ", Blaze.View("lookup:pv", function() {                                                                // 114
          return Spacebars.mustache(view.lookup("pv"));                                                                // 115
        }), " + ", Blaze.View("lookup:double", function() {                                                            // 116
          return Spacebars.mustache(view.lookup("double"), view.lookup("yp"));                                         // 117
        }), " " ];                                                                                                     // 118
      }, function() {                                                                                                  // 119
        return [ " P(", Blaze.View("lookup:addone", function() {                                                       // 120
          return Spacebars.mustache(view.lookup("addone"), view.lookup("@index"));                                     // 121
        }), ")= ", Blaze.View("lookup:pv", function() {                                                                // 122
          return Spacebars.mustache(view.lookup("pv"));                                                                // 123
        }), " + ", Blaze.View("lookup:double", function() {                                                            // 124
          return Spacebars.mustache(view.lookup("double"), view.lookup("yp"));                                         // 125
        }), " - ", Blaze.View("lookup:double", function() {                                                            // 126
          return Spacebars.mustache(view.lookup("double"), view.lookup("xp"));                                         // 127
        }), " " ];                                                                                                     // 128
      })), "\n\n"), "\n" ];                                                                                            // 129
    }), "\n"), "\n" ];                                                                                                 // 130
  }), HTML.Raw('\n<p>Developed by <a href="http://ihabshea.me">Ihab McShea</a>.</p>') ];                               // 131
}));                                                                                                                   // 132
                                                                                                                       // 133
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var ReactiveVar = void 0;                                                                                              // 1
module.watch(require("meteor/reactive-var"), {                                                                         // 1
  ReactiveVar: function (v) {                                                                                          // 1
    ReactiveVar = v;                                                                                                   // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
module.watch(require("./main.html"));                                                                                  // 1
points = new ReactiveVar([]);                                                                                          // 5
ddapoints = new ReactiveVar([]);                                                                                       // 6
berspoints = new ReactiveVar([]);                                                                                      // 7
var newChattersDep = new Tracker.Dependency();                                                                         // 8
var newDDA = new Tracker.Dependency();                                                                                 // 9
var newBers = new Tracker.Dependency();                                                                                // 10
Template.hello.onCreated(function () {                                                                                 // 11
  function helloOnCreated() {                                                                                          // 11
    this.points = points;                                                                                              // 12
  }                                                                                                                    // 13
                                                                                                                       //
  return helloOnCreated;                                                                                               // 11
}());                                                                                                                  // 11
Template.hello.helpers({                                                                                               // 16
  point: function () {                                                                                                 // 17
    newChattersDep.depend();                                                                                           // 18
    return points.get();                                                                                               // 19
  },                                                                                                                   // 20
  double: function (n) {                                                                                               // 21
    return 2 * n;                                                                                                      // 22
  },                                                                                                                   // 23
  ddap: function () {                                                                                                  // 24
    newDDA.depend();                                                                                                   // 25
    return ddapoints.get();                                                                                            // 26
  },                                                                                                                   // 27
  bersp: function () {                                                                                                 // 28
    newDDA.depend();                                                                                                   // 29
    return berspoints.get();                                                                                           // 30
  },                                                                                                                   // 31
  isnegative: function (number) {                                                                                      // 32
    if (number < 0) {                                                                                                  // 33
      return true;                                                                                                     // 34
    }                                                                                                                  // 35
  },                                                                                                                   // 36
  addone: function (x) {                                                                                               // 37
    return x + 1;                                                                                                      // 38
  },                                                                                                                   // 39
  lessthan: function (x, y) {                                                                                          // 40
    if (x < y) return true;                                                                                            // 41
  }                                                                                                                    // 42
});                                                                                                                    // 16
Template.hello.events({                                                                                                // 45
  'click #bersgo': function (event, instance) {                                                                        // 46
    dx0 = $("#bers-x0").val();                                                                                         // 47
    dx1 = $("#bers-x1").val();                                                                                         // 48
    dy0 = $("#bers-y0").val();                                                                                         // 49
    dy1 = $("#bers-y1").val();                                                                                         // 50
    counter = 0;                                                                                                       // 51
    m = (dy1 - dy0) / (dx1 - dx0);                                                                                     // 52
    x = parseInt(dx0);                                                                                                 // 53
    y = parseInt(dy0);                                                                                                 // 54
    dx = dx1 - dx0;                                                                                                    // 55
    dy = dy1 - dy0;                                                                                                    // 56
    ddy = 2 * dy;                                                                                                      // 57
    ddx = 2 * dx;                                                                                                      // 58
    ddymx = ddy - ddx;                                                                                                 // 59
    p0 = ddy - dx;                                                                                                     // 60
    p = p0;                                                                                                            // 61
                                                                                                                       //
    if (m < 1) {                                                                                                       // 62
      for (i = 0; i < dx; i++) {                                                                                       // 63
        if (p < 0) {                                                                                                   // 64
          x += 1;                                                                                                      // 65
          var foo = berspoints.get(counter);                                                                           // 66
          newDDA.changed();                                                                                            // 68
          foo.push({                                                                                                   // 69
            xp: x,                                                                                                     // 69
            yp: y,                                                                                                     // 69
            pv: p                                                                                                      // 69
          });                                                                                                          // 69
          p += ddy;                                                                                                    // 70
        } else {                                                                                                       // 71
          x += 1;                                                                                                      // 72
          y += 1;                                                                                                      // 73
          var foo = berspoints.get(counter);                                                                           // 74
          newDDA.changed();                                                                                            // 75
          foo.push({                                                                                                   // 76
            xp: x,                                                                                                     // 76
            yp: y,                                                                                                     // 76
            pv: p                                                                                                      // 76
          });                                                                                                          // 76
          p += ddy - ddx;                                                                                              // 77
        }                                                                                                              // 78
      }                                                                                                                // 79
    }                                                                                                                  // 80
  },                                                                                                                   // 81
  'click #ddago': function (event, instance) {                                                                         // 82
    dx0 = $("#dda-x0").val();                                                                                          // 83
    dx1 = $("#dda-x1").val();                                                                                          // 84
    dy0 = $("#dda-y0").val();                                                                                          // 85
    dy1 = $("#dda-y1").val();                                                                                          // 86
    counter = 0;                                                                                                       // 87
    m = (dy1 - dy0) / (dx1 - dx0);                                                                                     // 88
    x = parseInt(dx0);                                                                                                 // 89
    y = parseInt(dy0);                                                                                                 // 90
    dx = dx1 - dx0;                                                                                                    // 91
                                                                                                                       //
    if (m < 1) {                                                                                                       // 92
      for (i = 0; i < dx; i++) {                                                                                       // 93
        x += 1;                                                                                                        // 94
        y += m;                                                                                                        // 95
        ny = parseInt(y + 0.5);                                                                                        // 96
        var foo = ddapoints.get(counter);                                                                              // 97
        newDDA.changed();                                                                                              // 98
        foo.push({                                                                                                     // 99
          xp: x,                                                                                                       // 99
          yp: y,                                                                                                       // 99
          nyp: ny,                                                                                                     // 99
          nxp: x                                                                                                       // 99
        });                                                                                                            // 99
      }                                                                                                                // 100
    } else {                                                                                                           // 101
      for (i = 0; i < dx; i++) {                                                                                       // 102
        x += 1 / m;                                                                                                    // 103
        y += 1;                                                                                                        // 104
        nx = parseInt(x + 0.5);                                                                                        // 105
        var foo = ddapoints.get(counter);                                                                              // 106
        newDDA.changed();                                                                                              // 107
        foo.push({                                                                                                     // 108
          xp: x,                                                                                                       // 108
          yp: y,                                                                                                       // 108
          nyp: y,                                                                                                      // 108
          nxp: nx                                                                                                      // 108
        });                                                                                                            // 108
        counter += 1;                                                                                                  // 109
      }                                                                                                                // 110
    }                                                                                                                  // 111
  },                                                                                                                   // 112
  'click #midpointgo': function (event, instance) {                                                                    // 113
    r = $("#radius").val();                                                                                            // 114
    counter = 1;                                                                                                       // 115
    var x0 = 0;                                                                                                        // 116
    var y0 = r;                                                                                                        // 117
    var p0 = 1 - r;                                                                                                    // 118
    var x = x0;                                                                                                        // 119
    var p = p0;                                                                                                        // 120
    var y = y0;                                                                                                        // 121
                                                                                                                       //
    while (x < y) {                                                                                                    // 123
      if (p < 0) {                                                                                                     // 124
        x += 1;                                                                                                        // 125
        var foo = points.get(counter);                                                                                 // 128
        foo.push({                                                                                                     // 129
          xp: x,                                                                                                       // 129
          yp: y,                                                                                                       // 129
          pv: p                                                                                                        // 129
        });                                                                                                            // 129
        p += 2 * x + 1;                                                                                                // 130
        counter += 1;                                                                                                  // 131
      } else {                                                                                                         // 133
        x += 1;                                                                                                        // 134
        y -= 1;                                                                                                        // 135
        var foo = points.get(counter);                                                                                 // 138
        foo.push({                                                                                                     // 139
          xp: x,                                                                                                       // 139
          yp: y,                                                                                                       // 139
          pv: p                                                                                                        // 139
        });                                                                                                            // 139
        p += 2 * x + 1 - 2 * y;                                                                                        // 140
        counter += 1;                                                                                                  // 141
      }                                                                                                                // 142
    }                                                                                                                  // 143
                                                                                                                       //
    newChattersDep.changed();                                                                                          // 144
    console.log(points.get());                                                                                         // 145
  }                                                                                                                    // 146
});                                                                                                                    // 45
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css",
    ".scss"
  ]
});
require("./client/template.main.js");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/settings-file-checked.generated.js                                                                       //
// This file is in bare mode and is not in its own closure.                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
MDl.settings = JSON.parse(decodeURI("%7B%22jsLib%22:%7B%22minified%22:false%7D,%22theme%22:%7B%22primary%22:%22indigo%22,%22accent%22:%22pink%22%7D,%22patches%22:%7B%22autoUpgrade%22:%22fullUpgrade%22%7D,%22verbose%22:false%7D"));
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/dist/material.js                                                                                         //
// This file is in bare mode and is not in its own closure.                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
;(function() {                                                                                                         // 1
"use strict";                                                                                                          // 2
                                                                                                                       // 3
/**                                                                                                                    // 4
 * @license                                                                                                            // 5
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 6
 *                                                                                                                     // 7
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 8
 * you may not use this file except in compliance with the License.                                                    // 9
 * You may obtain a copy of the License at                                                                             // 10
 *                                                                                                                     // 11
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 12
 *                                                                                                                     // 13
 * Unless required by applicable law or agreed to in writing, software                                                 // 14
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 15
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 16
 * See the License for the specific language governing permissions and                                                 // 17
 * limitations under the License.                                                                                      // 18
 */                                                                                                                    // 19
                                                                                                                       // 20
/**                                                                                                                    // 21
 * A component handler interface using the revealing module design pattern.                                            // 22
 * More details on this design pattern here:                                                                           // 23
 * https://github.com/jasonmayes/mdl-component-design-pattern                                                          // 24
 *                                                                                                                     // 25
 * @author Jason Mayes.                                                                                                // 26
 */                                                                                                                    // 27
/* exported componentHandler */                                                                                        // 28
                                                                                                                       // 29
// Pre-defining the componentHandler interface, for closure documentation and                                          // 30
// static verification.                                                                                                // 31
var componentHandler = {                                                                                               // 32
  /**                                                                                                                  // 33
   * Searches existing DOM for elements of our component type and upgrades them                                        // 34
   * if they have not already been upgraded.                                                                           // 35
   *                                                                                                                   // 36
   * @param {string=} optJsClass the programatic name of the element class we                                          // 37
   * need to create a new instance of.                                                                                 // 38
   * @param {string=} optCssClass the name of the CSS class elements of this                                           // 39
   * type will have.                                                                                                   // 40
   */                                                                                                                  // 41
  upgradeDom: function(optJsClass, optCssClass) {},                                                                    // 42
  /**                                                                                                                  // 43
   * Upgrades a specific element rather than all in the DOM.                                                           // 44
   *                                                                                                                   // 45
   * @param {!Element} element The element we wish to upgrade.                                                         // 46
   * @param {string=} optJsClass Optional name of the class we want to upgrade                                         // 47
   * the element to.                                                                                                   // 48
   */                                                                                                                  // 49
  upgradeElement: function(element, optJsClass) {},                                                                    // 50
  /**                                                                                                                  // 51
   * Upgrades a specific list of elements rather than all in the DOM.                                                  // 52
   *                                                                                                                   // 53
   * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements                                             // 54
   * The elements we wish to upgrade.                                                                                  // 55
   */                                                                                                                  // 56
  upgradeElements: function(elements) {},                                                                              // 57
  /**                                                                                                                  // 58
   * Upgrades all registered components found in the current DOM. This is                                              // 59
   * automatically called on window load.                                                                              // 60
   */                                                                                                                  // 61
  upgradeAllRegistered: function() {},                                                                                 // 62
  /**                                                                                                                  // 63
   * Allows user to be alerted to any upgrades that are performed for a given                                          // 64
   * component type                                                                                                    // 65
   *                                                                                                                   // 66
   * @param {string} jsClass The class name of the MDL component we wish                                               // 67
   * to hook into for any upgrades performed.                                                                          // 68
   * @param {function(!HTMLElement)} callback The function to call upon an                                             // 69
   * upgrade. This function should expect 1 parameter - the HTMLElement which                                          // 70
   * got upgraded.                                                                                                     // 71
   */                                                                                                                  // 72
  registerUpgradedCallback: function(jsClass, callback) {},                                                            // 73
  /**                                                                                                                  // 74
   * Registers a class for future use and attempts to upgrade existing DOM.                                            // 75
   *                                                                                                                   // 76
   * @param {componentHandler.ComponentConfigPublic} config the registration configuration                             // 77
   */                                                                                                                  // 78
  register: function(config) {},                                                                                       // 79
  /**                                                                                                                  // 80
   * Downgrade either a given node, an array of nodes, or a NodeList.                                                  // 81
   *                                                                                                                   // 82
   * @param {!Node|!Array<!Node>|!NodeList} nodes                                                                      // 83
   */                                                                                                                  // 84
  downgradeElements: function(nodes) {}                                                                                // 85
};                                                                                                                     // 86
                                                                                                                       // 87
componentHandler = (function() {                                                                                       // 88
  'use strict';                                                                                                        // 89
                                                                                                                       // 90
  /** @type {!Array<componentHandler.ComponentConfig>} */                                                              // 91
  var registeredComponents_ = [];                                                                                      // 92
                                                                                                                       // 93
  /** @type {!Array<componentHandler.Component>} */                                                                    // 94
  var createdComponents_ = [];                                                                                         // 95
                                                                                                                       // 96
  var componentConfigProperty_ = 'mdlComponentConfigInternal_';                                                        // 97
                                                                                                                       // 98
  /**                                                                                                                  // 99
   * Searches registered components for a class we are interested in using.                                            // 100
   * Optionally replaces a match with passed object if specified.                                                      // 101
   *                                                                                                                   // 102
   * @param {string} name The name of a class we want to use.                                                          // 103
   * @param {componentHandler.ComponentConfig=} optReplace Optional object to replace match with.                      // 104
   * @return {!Object|boolean}                                                                                         // 105
   * @private                                                                                                          // 106
   */                                                                                                                  // 107
  function findRegisteredClass_(name, optReplace) {                                                                    // 108
    for (var i = 0; i < registeredComponents_.length; i++) {                                                           // 109
      if (registeredComponents_[i].className === name) {                                                               // 110
        if (typeof optReplace !== 'undefined') {                                                                       // 111
          registeredComponents_[i] = optReplace;                                                                       // 112
        }                                                                                                              // 113
        return registeredComponents_[i];                                                                               // 114
      }                                                                                                                // 115
    }                                                                                                                  // 116
    return false;                                                                                                      // 117
  }                                                                                                                    // 118
                                                                                                                       // 119
  /**                                                                                                                  // 120
   * Returns an array of the classNames of the upgraded classes on the element.                                        // 121
   *                                                                                                                   // 122
   * @param {!Element} element The element to fetch data from.                                                         // 123
   * @return {!Array<string>}                                                                                          // 124
   * @private                                                                                                          // 125
   */                                                                                                                  // 126
  function getUpgradedListOfElement_(element) {                                                                        // 127
    var dataUpgraded = element.getAttribute('data-upgraded');                                                          // 128
    // Use `['']` as default value to conform the `,name,name...` style.                                               // 129
    return dataUpgraded === null ? [''] : dataUpgraded.split(',');                                                     // 130
  }                                                                                                                    // 131
                                                                                                                       // 132
  /**                                                                                                                  // 133
   * Returns true if the given element has already been upgraded for the given                                         // 134
   * class.                                                                                                            // 135
   *                                                                                                                   // 136
   * @param {!Element} element The element we want to check.                                                           // 137
   * @param {string} jsClass The class to check for.                                                                   // 138
   * @returns {boolean}                                                                                                // 139
   * @private                                                                                                          // 140
   */                                                                                                                  // 141
  function isElementUpgraded_(element, jsClass) {                                                                      // 142
    var upgradedList = getUpgradedListOfElement_(element);                                                             // 143
    return upgradedList.indexOf(jsClass) !== -1;                                                                       // 144
  }                                                                                                                    // 145
                                                                                                                       // 146
  /**                                                                                                                  // 147
   * Searches existing DOM for elements of our component type and upgrades them                                        // 148
   * if they have not already been upgraded.                                                                           // 149
   *                                                                                                                   // 150
   * @param {string=} optJsClass the programatic name of the element class we                                          // 151
   * need to create a new instance of.                                                                                 // 152
   * @param {string=} optCssClass the name of the CSS class elements of this                                           // 153
   * type will have.                                                                                                   // 154
   */                                                                                                                  // 155
  function upgradeDomInternal(optJsClass, optCssClass) {                                                               // 156
    if (typeof optJsClass === 'undefined' &&                                                                           // 157
        typeof optCssClass === 'undefined') {                                                                          // 158
      for (var i = 0; i < registeredComponents_.length; i++) {                                                         // 159
        upgradeDomInternal(registeredComponents_[i].className,                                                         // 160
            registeredComponents_[i].cssClass);                                                                        // 161
      }                                                                                                                // 162
    } else {                                                                                                           // 163
      var jsClass = /** @type {string} */ (optJsClass);                                                                // 164
      if (typeof optCssClass === 'undefined') {                                                                        // 165
        var registeredClass = findRegisteredClass_(jsClass);                                                           // 166
        if (registeredClass) {                                                                                         // 167
          optCssClass = registeredClass.cssClass;                                                                      // 168
        }                                                                                                              // 169
      }                                                                                                                // 170
                                                                                                                       // 171
      var elements = document.querySelectorAll('.' + optCssClass);                                                     // 172
      for (var n = 0; n < elements.length; n++) {                                                                      // 173
        upgradeElementInternal(elements[n], jsClass);                                                                  // 174
      }                                                                                                                // 175
    }                                                                                                                  // 176
  }                                                                                                                    // 177
                                                                                                                       // 178
  /**                                                                                                                  // 179
   * Upgrades a specific element rather than all in the DOM.                                                           // 180
   *                                                                                                                   // 181
   * @param {!Element} element The element we wish to upgrade.                                                         // 182
   * @param {string=} optJsClass Optional name of the class we want to upgrade                                         // 183
   * the element to.                                                                                                   // 184
   */                                                                                                                  // 185
  function upgradeElementInternal(element, optJsClass) {                                                               // 186
    // Verify argument type.                                                                                           // 187
    if (!(typeof element === 'object' && element instanceof Element)) {                                                // 188
      throw new Error('Invalid argument provided to upgrade MDL element.');                                            // 189
    }                                                                                                                  // 190
    var upgradedList = getUpgradedListOfElement_(element);                                                             // 191
    var classesToUpgrade = [];                                                                                         // 192
    // If jsClass is not provided scan the registered components to find the                                           // 193
    // ones matching the element's CSS classList.                                                                      // 194
    if (!optJsClass) {                                                                                                 // 195
      var classList = element.classList;                                                                               // 196
      registeredComponents_.forEach(function(component) {                                                              // 197
        // Match CSS & Not to be upgraded & Not upgraded.                                                              // 198
        if (classList.contains(component.cssClass) &&                                                                  // 199
            classesToUpgrade.indexOf(component) === -1 &&                                                              // 200
            !isElementUpgraded_(element, component.className)) {                                                       // 201
          classesToUpgrade.push(component);                                                                            // 202
        }                                                                                                              // 203
      });                                                                                                              // 204
    } else if (!isElementUpgraded_(element, optJsClass)) {                                                             // 205
      classesToUpgrade.push(findRegisteredClass_(optJsClass));                                                         // 206
    }                                                                                                                  // 207
                                                                                                                       // 208
    // Upgrade the element for each classes.                                                                           // 209
    for (var i = 0, n = classesToUpgrade.length, registeredClass; i < n; i++) {                                        // 210
      registeredClass = classesToUpgrade[i];                                                                           // 211
      if (registeredClass) {                                                                                           // 212
        // Mark element as upgraded.                                                                                   // 213
        upgradedList.push(registeredClass.className);                                                                  // 214
        element.setAttribute('data-upgraded', upgradedList.join(','));                                                 // 215
        var instance = new registeredClass.classConstructor(element);                                                  // 216
        instance[componentConfigProperty_] = registeredClass;                                                          // 217
        createdComponents_.push(instance);                                                                             // 218
        // Call any callbacks the user has registered with this component type.                                        // 219
        for (var j = 0, m = registeredClass.callbacks.length; j < m; j++) {                                            // 220
          registeredClass.callbacks[j](element);                                                                       // 221
        }                                                                                                              // 222
                                                                                                                       // 223
        if (registeredClass.widget) {                                                                                  // 224
          // Assign per element instance for control over API                                                          // 225
          element[registeredClass.className] = instance;                                                               // 226
        }                                                                                                              // 227
      } else {                                                                                                         // 228
        throw new Error(                                                                                               // 229
          'Unable to find a registered component for the given class.');                                               // 230
      }                                                                                                                // 231
                                                                                                                       // 232
      var ev;                                                                                                          // 233
      if ('CustomEvent' in window && typeof window.CustomEvent === 'function') {                                       // 234
        ev = new Event('mdl-componentupgraded', {                                                                      // 235
          'bubbles': true, 'cancelable': false                                                                         // 236
        });                                                                                                            // 237
      } else {                                                                                                         // 238
        ev = document.createEvent('Events');                                                                           // 239
        ev.initEvent('mdl-componentupgraded', true, true);                                                             // 240
      }                                                                                                                // 241
      element.dispatchEvent(ev);                                                                                       // 242
    }                                                                                                                  // 243
  }                                                                                                                    // 244
                                                                                                                       // 245
  /**                                                                                                                  // 246
   * Upgrades a specific list of elements rather than all in the DOM.                                                  // 247
   *                                                                                                                   // 248
   * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements                                             // 249
   * The elements we wish to upgrade.                                                                                  // 250
   */                                                                                                                  // 251
  function upgradeElementsInternal(elements) {                                                                         // 252
    if (!Array.isArray(elements)) {                                                                                    // 253
      if (typeof elements.item === 'function') {                                                                       // 254
        elements = Array.prototype.slice.call(/** @type {Array} */ (elements));                                        // 255
      } else {                                                                                                         // 256
        elements = [elements];                                                                                         // 257
      }                                                                                                                // 258
    }                                                                                                                  // 259
    for (var i = 0, n = elements.length, element; i < n; i++) {                                                        // 260
      element = elements[i];                                                                                           // 261
      if (element instanceof HTMLElement) {                                                                            // 262
        upgradeElementInternal(element);                                                                               // 263
        if (element.children.length > 0) {                                                                             // 264
          upgradeElementsInternal(element.children);                                                                   // 265
        }                                                                                                              // 266
      }                                                                                                                // 267
    }                                                                                                                  // 268
  }                                                                                                                    // 269
                                                                                                                       // 270
  /**                                                                                                                  // 271
   * Registers a class for future use and attempts to upgrade existing DOM.                                            // 272
   *                                                                                                                   // 273
   * @param {componentHandler.ComponentConfigPublic} config                                                            // 274
   */                                                                                                                  // 275
  function registerInternal(config) {                                                                                  // 276
    // In order to support both Closure-compiled and uncompiled code accessing                                         // 277
    // this method, we need to allow for both the dot and array syntax for                                             // 278
    // property access. You'll therefore see the `foo.bar || foo['bar']`                                               // 279
    // pattern repeated across this method.                                                                            // 280
    var widgetMissing = (typeof config.widget === 'undefined' &&                                                       // 281
        typeof config['widget'] === 'undefined');                                                                      // 282
    var widget = true;                                                                                                 // 283
                                                                                                                       // 284
    if (!widgetMissing) {                                                                                              // 285
      widget = config.widget || config['widget'];                                                                      // 286
    }                                                                                                                  // 287
                                                                                                                       // 288
    var newConfig = /** @type {componentHandler.ComponentConfig} */ ({                                                 // 289
      classConstructor: config.constructor || config['constructor'],                                                   // 290
      className: config.classAsString || config['classAsString'],                                                      // 291
      cssClass: config.cssClass || config['cssClass'],                                                                 // 292
      widget: widget,                                                                                                  // 293
      callbacks: []                                                                                                    // 294
    });                                                                                                                // 295
                                                                                                                       // 296
    registeredComponents_.forEach(function(item) {                                                                     // 297
      if (item.cssClass === newConfig.cssClass) {                                                                      // 298
        throw new Error('The provided cssClass has already been registered: ' + item.cssClass);                        // 299
      }                                                                                                                // 300
      if (item.className === newConfig.className) {                                                                    // 301
        throw new Error('The provided className has already been registered');                                         // 302
      }                                                                                                                // 303
    });                                                                                                                // 304
                                                                                                                       // 305
    if (config.constructor.prototype                                                                                   // 306
        .hasOwnProperty(componentConfigProperty_)) {                                                                   // 307
      throw new Error(                                                                                                 // 308
          'MDL component classes must not have ' + componentConfigProperty_ +                                          // 309
          ' defined as a property.');                                                                                  // 310
    }                                                                                                                  // 311
                                                                                                                       // 312
    var found = findRegisteredClass_(config.classAsString, newConfig);                                                 // 313
                                                                                                                       // 314
    if (!found) {                                                                                                      // 315
      registeredComponents_.push(newConfig);                                                                           // 316
    }                                                                                                                  // 317
  }                                                                                                                    // 318
                                                                                                                       // 319
  /**                                                                                                                  // 320
   * Allows user to be alerted to any upgrades that are performed for a given                                          // 321
   * component type                                                                                                    // 322
   *                                                                                                                   // 323
   * @param {string} jsClass The class name of the MDL component we wish                                               // 324
   * to hook into for any upgrades performed.                                                                          // 325
   * @param {function(!HTMLElement)} callback The function to call upon an                                             // 326
   * upgrade. This function should expect 1 parameter - the HTMLElement which                                          // 327
   * got upgraded.                                                                                                     // 328
   */                                                                                                                  // 329
  function registerUpgradedCallbackInternal(jsClass, callback) {                                                       // 330
    var regClass = findRegisteredClass_(jsClass);                                                                      // 331
    if (regClass) {                                                                                                    // 332
      regClass.callbacks.push(callback);                                                                               // 333
    }                                                                                                                  // 334
  }                                                                                                                    // 335
                                                                                                                       // 336
  /**                                                                                                                  // 337
   * Upgrades all registered components found in the current DOM. This is                                              // 338
   * automatically called on window load.                                                                              // 339
   */                                                                                                                  // 340
  function upgradeAllRegisteredInternal() {                                                                            // 341
    for (var n = 0; n < registeredComponents_.length; n++) {                                                           // 342
      upgradeDomInternal(registeredComponents_[n].className);                                                          // 343
    }                                                                                                                  // 344
  }                                                                                                                    // 345
                                                                                                                       // 346
  /**                                                                                                                  // 347
   * Check the component for the downgrade method.                                                                     // 348
   * Execute if found.                                                                                                 // 349
   * Remove component from createdComponents list.                                                                     // 350
   *                                                                                                                   // 351
   * @param {?componentHandler.Component} component                                                                    // 352
   */                                                                                                                  // 353
  function deconstructComponentInternal(component) {                                                                   // 354
    if (component) {                                                                                                   // 355
      var componentIndex = createdComponents_.indexOf(component);                                                      // 356
      createdComponents_.splice(componentIndex, 1);                                                                    // 357
                                                                                                                       // 358
      var upgrades = component.element_.getAttribute('data-upgraded').split(',');                                      // 359
      var componentPlace = upgrades.indexOf(component[componentConfigProperty_].classAsString);                        // 360
      upgrades.splice(componentPlace, 1);                                                                              // 361
      component.element_.setAttribute('data-upgraded', upgrades.join(','));                                            // 362
                                                                                                                       // 363
      var ev;                                                                                                          // 364
      if ('CustomEvent' in window && typeof window.CustomEvent === 'function') {                                       // 365
        ev = new Event('mdl-componentdowngraded', {                                                                    // 366
          'bubbles': true, 'cancelable': false                                                                         // 367
        });                                                                                                            // 368
      } else {                                                                                                         // 369
        ev = document.createEvent('Events');                                                                           // 370
        ev.initEvent('mdl-componentdowngraded', true, true);                                                           // 371
      }                                                                                                                // 372
    }                                                                                                                  // 373
  }                                                                                                                    // 374
                                                                                                                       // 375
  /**                                                                                                                  // 376
   * Downgrade either a given node, an array of nodes, or a NodeList.                                                  // 377
   *                                                                                                                   // 378
   * @param {!Node|!Array<!Node>|!NodeList} nodes                                                                      // 379
   */                                                                                                                  // 380
  function downgradeNodesInternal(nodes) {                                                                             // 381
    /**                                                                                                                // 382
     * Auxiliary function to downgrade a single node.                                                                  // 383
     * @param  {!Node} node the node to be downgraded                                                                  // 384
     */                                                                                                                // 385
    var downgradeNode = function(node) {                                                                               // 386
      createdComponents_.filter(function(item) {                                                                       // 387
        return item.element_ === node;                                                                                 // 388
      }).forEach(deconstructComponentInternal);                                                                        // 389
    };                                                                                                                 // 390
    if (nodes instanceof Array || nodes instanceof NodeList) {                                                         // 391
      for (var n = 0; n < nodes.length; n++) {                                                                         // 392
        downgradeNode(nodes[n]);                                                                                       // 393
      }                                                                                                                // 394
    } else if (nodes instanceof Node) {                                                                                // 395
      downgradeNode(nodes);                                                                                            // 396
    } else {                                                                                                           // 397
      throw new Error('Invalid argument provided to downgrade MDL nodes.');                                            // 398
    }                                                                                                                  // 399
  }                                                                                                                    // 400
                                                                                                                       // 401
  // Now return the functions that should be made public with their publicly                                           // 402
  // facing names...                                                                                                   // 403
  return {                                                                                                             // 404
    upgradeDom: upgradeDomInternal,                                                                                    // 405
    upgradeElement: upgradeElementInternal,                                                                            // 406
    upgradeElements: upgradeElementsInternal,                                                                          // 407
    upgradeAllRegistered: upgradeAllRegisteredInternal,                                                                // 408
    registerUpgradedCallback: registerUpgradedCallbackInternal,                                                        // 409
    register: registerInternal,                                                                                        // 410
    downgradeElements: downgradeNodesInternal                                                                          // 411
  };                                                                                                                   // 412
})();                                                                                                                  // 413
                                                                                                                       // 414
/**                                                                                                                    // 415
 * Describes the type of a registered component type managed by                                                        // 416
 * componentHandler. Provided for benefit of the Closure compiler.                                                     // 417
 *                                                                                                                     // 418
 * @typedef {{                                                                                                         // 419
 *   constructor: Function,                                                                                            // 420
 *   classAsString: string,                                                                                            // 421
 *   cssClass: string,                                                                                                 // 422
 *   widget: (string|boolean|undefined)                                                                                // 423
 * }}                                                                                                                  // 424
 */                                                                                                                    // 425
componentHandler.ComponentConfigPublic;  // jshint ignore:line                                                         // 426
                                                                                                                       // 427
/**                                                                                                                    // 428
 * Describes the type of a registered component type managed by                                                        // 429
 * componentHandler. Provided for benefit of the Closure compiler.                                                     // 430
 *                                                                                                                     // 431
 * @typedef {{                                                                                                         // 432
 *   constructor: !Function,                                                                                           // 433
 *   className: string,                                                                                                // 434
 *   cssClass: string,                                                                                                 // 435
 *   widget: (string|boolean),                                                                                         // 436
 *   callbacks: !Array<function(!HTMLElement)>                                                                         // 437
 * }}                                                                                                                  // 438
 */                                                                                                                    // 439
componentHandler.ComponentConfig;  // jshint ignore:line                                                               // 440
                                                                                                                       // 441
/**                                                                                                                    // 442
 * Created component (i.e., upgraded element) type as managed by                                                       // 443
 * componentHandler. Provided for benefit of the Closure compiler.                                                     // 444
 *                                                                                                                     // 445
 * @typedef {{                                                                                                         // 446
 *   element_: !HTMLElement,                                                                                           // 447
 *   className: string,                                                                                                // 448
 *   classAsString: string,                                                                                            // 449
 *   cssClass: string,                                                                                                 // 450
 *   widget: string                                                                                                    // 451
 * }}                                                                                                                  // 452
 */                                                                                                                    // 453
componentHandler.Component;  // jshint ignore:line                                                                     // 454
                                                                                                                       // 455
// Export all symbols, for the benefit of Closure compiler.                                                            // 456
// No effect on uncompiled code.                                                                                       // 457
componentHandler['upgradeDom'] = componentHandler.upgradeDom;                                                          // 458
componentHandler['upgradeElement'] = componentHandler.upgradeElement;                                                  // 459
componentHandler['upgradeElements'] = componentHandler.upgradeElements;                                                // 460
componentHandler['upgradeAllRegistered'] =                                                                             // 461
    componentHandler.upgradeAllRegistered;                                                                             // 462
componentHandler['registerUpgradedCallback'] =                                                                         // 463
    componentHandler.registerUpgradedCallback;                                                                         // 464
componentHandler['register'] = componentHandler.register;                                                              // 465
componentHandler['downgradeElements'] = componentHandler.downgradeElements;                                            // 466
window.componentHandler = componentHandler;                                                                            // 467
window['componentHandler'] = componentHandler;                                                                         // 468
                                                                                                                       // 469
window.addEventListener('load', function() {                                                                           // 470
  'use strict';                                                                                                        // 471
                                                                                                                       // 472
  /**                                                                                                                  // 473
   * Performs a "Cutting the mustard" test. If the browser supports the features                                       // 474
   * tested, adds a mdl-js class to the <html> element. It then upgrades all MDL                                       // 475
   * components requiring JavaScript.                                                                                  // 476
   */                                                                                                                  // 477
  if ('classList' in document.createElement('div') &&                                                                  // 478
      'querySelector' in document &&                                                                                   // 479
      'addEventListener' in window && Array.prototype.forEach) {                                                       // 480
    document.documentElement.classList.add('mdl-js');                                                                  // 481
    componentHandler.upgradeAllRegistered();                                                                           // 482
  } else {                                                                                                             // 483
    /**                                                                                                                // 484
     * Dummy function to avoid JS errors.                                                                              // 485
     */                                                                                                                // 486
    componentHandler.upgradeElement = function() {};                                                                   // 487
    /**                                                                                                                // 488
     * Dummy function to avoid JS errors.                                                                              // 489
     */                                                                                                                // 490
    componentHandler.register = function() {};                                                                         // 491
  }                                                                                                                    // 492
});                                                                                                                    // 493
                                                                                                                       // 494
// Source: https://github.com/darius/requestAnimationFrame/blob/master/requestAnimationFrame.js                        // 495
// Adapted from https://gist.github.com/paulirish/1579671 which derived from                                           // 496
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/                                                // 497
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating                            // 498
// requestAnimationFrame polyfill by Erik Möller.                                                                      // 499
// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavič, Darius Bacon                                         // 500
// MIT license                                                                                                         // 501
if (!Date.now) {                                                                                                       // 502
    /**                                                                                                                // 503
   * Date.now polyfill.                                                                                                // 504
   * @return {number} the current Date                                                                                 // 505
   */                                                                                                                  // 506
    Date.now = function () {                                                                                           // 507
        return new Date().getTime();                                                                                   // 508
    };                                                                                                                 // 509
    Date['now'] = Date.now;                                                                                            // 510
}                                                                                                                      // 511
var vendors = [                                                                                                        // 512
    'webkit',                                                                                                          // 513
    'moz'                                                                                                              // 514
];                                                                                                                     // 515
for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {                                            // 516
    var vp = vendors[i];                                                                                               // 517
    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];                                               // 518
    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];   // 519
    window['requestAnimationFrame'] = window.requestAnimationFrame;                                                    // 520
    window['cancelAnimationFrame'] = window.cancelAnimationFrame;                                                      // 521
}                                                                                                                      // 522
if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;                                                                                                  // 524
    /**                                                                                                                // 525
   * requestAnimationFrame polyfill.                                                                                   // 526
   * @param  {!Function} callback the callback function.                                                               // 527
   */                                                                                                                  // 528
    window.requestAnimationFrame = function (callback) {                                                               // 529
        var now = Date.now();                                                                                          // 530
        var nextTime = Math.max(lastTime + 16, now);                                                                   // 531
        return setTimeout(function () {                                                                                // 532
            callback(lastTime = nextTime);                                                                             // 533
        }, nextTime - now);                                                                                            // 534
    };                                                                                                                 // 535
    window.cancelAnimationFrame = clearTimeout;                                                                        // 536
    window['requestAnimationFrame'] = window.requestAnimationFrame;                                                    // 537
    window['cancelAnimationFrame'] = window.cancelAnimationFrame;                                                      // 538
}                                                                                                                      // 539
/**                                                                                                                    // 540
 * @license                                                                                                            // 541
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 542
 *                                                                                                                     // 543
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 544
 * you may not use this file except in compliance with the License.                                                    // 545
 * You may obtain a copy of the License at                                                                             // 546
 *                                                                                                                     // 547
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 548
 *                                                                                                                     // 549
 * Unless required by applicable law or agreed to in writing, software                                                 // 550
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 551
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 552
 * See the License for the specific language governing permissions and                                                 // 553
 * limitations under the License.                                                                                      // 554
 */                                                                                                                    // 555
/**                                                                                                                    // 556
   * Class constructor for Button MDL component.                                                                       // 557
   * Implements MDL component design pattern defined at:                                                               // 558
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 559
   *                                                                                                                   // 560
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 561
   */                                                                                                                  // 562
var MaterialButton = function MaterialButton(element) {                                                                // 563
    this.element_ = element;                                                                                           // 564
    // Initialize instance.                                                                                            // 565
    this.init();                                                                                                       // 566
};                                                                                                                     // 567
window['MaterialButton'] = MaterialButton;                                                                             // 568
/**                                                                                                                    // 569
   * Store constants in one place so they can be updated easily.                                                       // 570
   *                                                                                                                   // 571
   * @enum {string | number}                                                                                           // 572
   * @private                                                                                                          // 573
   */                                                                                                                  // 574
MaterialButton.prototype.Constant_ = {};                                                                               // 575
/**                                                                                                                    // 576
   * Store strings for class names defined by this component that are used in                                          // 577
   * JavaScript. This allows us to simply change it in one place should we                                             // 578
   * decide to modify at a later date.                                                                                 // 579
   *                                                                                                                   // 580
   * @enum {string}                                                                                                    // 581
   * @private                                                                                                          // 582
   */                                                                                                                  // 583
MaterialButton.prototype.CssClasses_ = {                                                                               // 584
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',                                                                             // 585
    RIPPLE_CONTAINER: 'mdl-button__ripple-container',                                                                  // 586
    RIPPLE: 'mdl-ripple'                                                                                               // 587
};                                                                                                                     // 588
/**                                                                                                                    // 589
   * Handle blur of element.                                                                                           // 590
   *                                                                                                                   // 591
   * @param {Event} event The event that fired.                                                                        // 592
   * @private                                                                                                          // 593
   */                                                                                                                  // 594
MaterialButton.prototype.blurHandler_ = function (event) {                                                             // 595
    if (event) {                                                                                                       // 596
        this.element_.blur();                                                                                          // 597
    }                                                                                                                  // 598
};                                                                                                                     // 599
// Public methods.                                                                                                     // 600
/**                                                                                                                    // 601
   * Disable button.                                                                                                   // 602
   *                                                                                                                   // 603
   * @public                                                                                                           // 604
   */                                                                                                                  // 605
MaterialButton.prototype.disable = function () {                                                                       // 606
    this.element_.disabled = true;                                                                                     // 607
};                                                                                                                     // 608
MaterialButton.prototype['disable'] = MaterialButton.prototype.disable;                                                // 609
/**                                                                                                                    // 610
   * Enable button.                                                                                                    // 611
   *                                                                                                                   // 612
   * @public                                                                                                           // 613
   */                                                                                                                  // 614
MaterialButton.prototype.enable = function () {                                                                        // 615
    this.element_.disabled = false;                                                                                    // 616
};                                                                                                                     // 617
MaterialButton.prototype['enable'] = MaterialButton.prototype.enable;                                                  // 618
/**                                                                                                                    // 619
   * Initialize element.                                                                                               // 620
   */                                                                                                                  // 621
MaterialButton.prototype.init = function () {                                                                          // 622
    if (this.element_) {                                                                                               // 623
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {                                        // 624
            var rippleContainer = document.createElement('span');                                                      // 625
            rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);                                          // 626
            this.rippleElement_ = document.createElement('span');                                                      // 627
            this.rippleElement_.classList.add(this.CssClasses_.RIPPLE);                                                // 628
            rippleContainer.appendChild(this.rippleElement_);                                                          // 629
            this.boundRippleBlurHandler = this.blurHandler_.bind(this);                                                // 630
            this.rippleElement_.addEventListener('mouseup', this.boundRippleBlurHandler);                              // 631
            this.element_.appendChild(rippleContainer);                                                                // 632
        }                                                                                                              // 633
        this.boundButtonBlurHandler = this.blurHandler_.bind(this);                                                    // 634
        this.element_.addEventListener('mouseup', this.boundButtonBlurHandler);                                        // 635
        this.element_.addEventListener('mouseleave', this.boundButtonBlurHandler);                                     // 636
    }                                                                                                                  // 637
};                                                                                                                     // 638
// The component registers itself. It can assume componentHandler is available                                         // 639
// in the global scope.                                                                                                // 640
componentHandler.register({                                                                                            // 641
    constructor: MaterialButton,                                                                                       // 642
    classAsString: 'MaterialButton',                                                                                   // 643
    cssClass: 'mdl-js-button',                                                                                         // 644
    widget: true                                                                                                       // 645
});                                                                                                                    // 646
/**                                                                                                                    // 647
 * @license                                                                                                            // 648
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 649
 *                                                                                                                     // 650
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 651
 * you may not use this file except in compliance with the License.                                                    // 652
 * You may obtain a copy of the License at                                                                             // 653
 *                                                                                                                     // 654
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 655
 *                                                                                                                     // 656
 * Unless required by applicable law or agreed to in writing, software                                                 // 657
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 658
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 659
 * See the License for the specific language governing permissions and                                                 // 660
 * limitations under the License.                                                                                      // 661
 */                                                                                                                    // 662
/**                                                                                                                    // 663
   * Class constructor for Checkbox MDL component.                                                                     // 664
   * Implements MDL component design pattern defined at:                                                               // 665
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 666
   *                                                                                                                   // 667
   * @constructor                                                                                                      // 668
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 669
   */                                                                                                                  // 670
var MaterialCheckbox = function MaterialCheckbox(element) {                                                            // 671
    this.element_ = element;                                                                                           // 672
    // Initialize instance.                                                                                            // 673
    this.init();                                                                                                       // 674
};                                                                                                                     // 675
window['MaterialCheckbox'] = MaterialCheckbox;                                                                         // 676
/**                                                                                                                    // 677
   * Store constants in one place so they can be updated easily.                                                       // 678
   *                                                                                                                   // 679
   * @enum {string | number}                                                                                           // 680
   * @private                                                                                                          // 681
   */                                                                                                                  // 682
MaterialCheckbox.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };                                                        // 683
/**                                                                                                                    // 684
   * Store strings for class names defined by this component that are used in                                          // 685
   * JavaScript. This allows us to simply change it in one place should we                                             // 686
   * decide to modify at a later date.                                                                                 // 687
   *                                                                                                                   // 688
   * @enum {string}                                                                                                    // 689
   * @private                                                                                                          // 690
   */                                                                                                                  // 691
MaterialCheckbox.prototype.CssClasses_ = {                                                                             // 692
    INPUT: 'mdl-checkbox__input',                                                                                      // 693
    BOX_OUTLINE: 'mdl-checkbox__box-outline',                                                                          // 694
    FOCUS_HELPER: 'mdl-checkbox__focus-helper',                                                                        // 695
    TICK_OUTLINE: 'mdl-checkbox__tick-outline',                                                                        // 696
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',                                                                             // 697
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',                                                       // 698
    RIPPLE_CONTAINER: 'mdl-checkbox__ripple-container',                                                                // 699
    RIPPLE_CENTER: 'mdl-ripple--center',                                                                               // 700
    RIPPLE: 'mdl-ripple',                                                                                              // 701
    IS_FOCUSED: 'is-focused',                                                                                          // 702
    IS_DISABLED: 'is-disabled',                                                                                        // 703
    IS_CHECKED: 'is-checked',                                                                                          // 704
    IS_UPGRADED: 'is-upgraded'                                                                                         // 705
};                                                                                                                     // 706
/**                                                                                                                    // 707
   * Handle change of state.                                                                                           // 708
   *                                                                                                                   // 709
   * @param {Event} event The event that fired.                                                                        // 710
   * @private                                                                                                          // 711
   */                                                                                                                  // 712
MaterialCheckbox.prototype.onChange_ = function (event) {                                                              // 713
    this.updateClasses_();                                                                                             // 714
};                                                                                                                     // 715
/**                                                                                                                    // 716
   * Handle focus of element.                                                                                          // 717
   *                                                                                                                   // 718
   * @param {Event} event The event that fired.                                                                        // 719
   * @private                                                                                                          // 720
   */                                                                                                                  // 721
MaterialCheckbox.prototype.onFocus_ = function (event) {                                                               // 722
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);                                                          // 723
};                                                                                                                     // 724
/**                                                                                                                    // 725
   * Handle lost focus of element.                                                                                     // 726
   *                                                                                                                   // 727
   * @param {Event} event The event that fired.                                                                        // 728
   * @private                                                                                                          // 729
   */                                                                                                                  // 730
MaterialCheckbox.prototype.onBlur_ = function (event) {                                                                // 731
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);                                                       // 732
};                                                                                                                     // 733
/**                                                                                                                    // 734
   * Handle mouseup.                                                                                                   // 735
   *                                                                                                                   // 736
   * @param {Event} event The event that fired.                                                                        // 737
   * @private                                                                                                          // 738
   */                                                                                                                  // 739
MaterialCheckbox.prototype.onMouseUp_ = function (event) {                                                             // 740
    this.blur_();                                                                                                      // 741
};                                                                                                                     // 742
/**                                                                                                                    // 743
   * Handle class updates.                                                                                             // 744
   *                                                                                                                   // 745
   * @private                                                                                                          // 746
   */                                                                                                                  // 747
MaterialCheckbox.prototype.updateClasses_ = function () {                                                              // 748
    this.checkDisabled();                                                                                              // 749
    this.checkToggleState();                                                                                           // 750
};                                                                                                                     // 751
/**                                                                                                                    // 752
   * Add blur.                                                                                                         // 753
   *                                                                                                                   // 754
   * @private                                                                                                          // 755
   */                                                                                                                  // 756
MaterialCheckbox.prototype.blur_ = function () {                                                                       // 757
    // TODO: figure out why there's a focus event being fired after our blur,                                          // 758
    // so that we can avoid this hack.                                                                                 // 759
    window.setTimeout(function () {                                                                                    // 760
        this.inputElement_.blur();                                                                                     // 761
    }.bind(this), this.Constant_.TINY_TIMEOUT);                                                                        // 762
};                                                                                                                     // 763
// Public methods.                                                                                                     // 764
/**                                                                                                                    // 765
   * Check the inputs toggle state and update display.                                                                 // 766
   *                                                                                                                   // 767
   * @public                                                                                                           // 768
   */                                                                                                                  // 769
MaterialCheckbox.prototype.checkToggleState = function () {                                                            // 770
    if (this.inputElement_.checked) {                                                                                  // 771
        this.element_.classList.add(this.CssClasses_.IS_CHECKED);                                                      // 772
    } else {                                                                                                           // 773
        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);                                                   // 774
    }                                                                                                                  // 775
};                                                                                                                     // 776
MaterialCheckbox.prototype['checkToggleState'] = MaterialCheckbox.prototype.checkToggleState;                          // 777
/**                                                                                                                    // 778
   * Check the inputs disabled state and update display.                                                               // 779
   *                                                                                                                   // 780
   * @public                                                                                                           // 781
   */                                                                                                                  // 782
MaterialCheckbox.prototype.checkDisabled = function () {                                                               // 783
    if (this.inputElement_.disabled) {                                                                                 // 784
        this.element_.classList.add(this.CssClasses_.IS_DISABLED);                                                     // 785
    } else {                                                                                                           // 786
        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);                                                  // 787
    }                                                                                                                  // 788
};                                                                                                                     // 789
MaterialCheckbox.prototype['checkDisabled'] = MaterialCheckbox.prototype.checkDisabled;                                // 790
/**                                                                                                                    // 791
   * Disable checkbox.                                                                                                 // 792
   *                                                                                                                   // 793
   * @public                                                                                                           // 794
   */                                                                                                                  // 795
MaterialCheckbox.prototype.disable = function () {                                                                     // 796
    this.inputElement_.disabled = true;                                                                                // 797
    this.updateClasses_();                                                                                             // 798
};                                                                                                                     // 799
MaterialCheckbox.prototype['disable'] = MaterialCheckbox.prototype.disable;                                            // 800
/**                                                                                                                    // 801
   * Enable checkbox.                                                                                                  // 802
   *                                                                                                                   // 803
   * @public                                                                                                           // 804
   */                                                                                                                  // 805
MaterialCheckbox.prototype.enable = function () {                                                                      // 806
    this.inputElement_.disabled = false;                                                                               // 807
    this.updateClasses_();                                                                                             // 808
};                                                                                                                     // 809
MaterialCheckbox.prototype['enable'] = MaterialCheckbox.prototype.enable;                                              // 810
/**                                                                                                                    // 811
   * Check checkbox.                                                                                                   // 812
   *                                                                                                                   // 813
   * @public                                                                                                           // 814
   */                                                                                                                  // 815
MaterialCheckbox.prototype.check = function () {                                                                       // 816
    this.inputElement_.checked = true;                                                                                 // 817
    this.updateClasses_();                                                                                             // 818
};                                                                                                                     // 819
MaterialCheckbox.prototype['check'] = MaterialCheckbox.prototype.check;                                                // 820
/**                                                                                                                    // 821
   * Uncheck checkbox.                                                                                                 // 822
   *                                                                                                                   // 823
   * @public                                                                                                           // 824
   */                                                                                                                  // 825
MaterialCheckbox.prototype.uncheck = function () {                                                                     // 826
    this.inputElement_.checked = false;                                                                                // 827
    this.updateClasses_();                                                                                             // 828
};                                                                                                                     // 829
MaterialCheckbox.prototype['uncheck'] = MaterialCheckbox.prototype.uncheck;                                            // 830
/**                                                                                                                    // 831
   * Initialize element.                                                                                               // 832
   */                                                                                                                  // 833
MaterialCheckbox.prototype.init = function () {                                                                        // 834
    if (this.element_) {                                                                                               // 835
        this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);                                // 836
        var boxOutline = document.createElement('span');                                                               // 837
        boxOutline.classList.add(this.CssClasses_.BOX_OUTLINE);                                                        // 838
        var tickContainer = document.createElement('span');                                                            // 839
        tickContainer.classList.add(this.CssClasses_.FOCUS_HELPER);                                                    // 840
        var tickOutline = document.createElement('span');                                                              // 841
        tickOutline.classList.add(this.CssClasses_.TICK_OUTLINE);                                                      // 842
        boxOutline.appendChild(tickOutline);                                                                           // 843
        this.element_.appendChild(tickContainer);                                                                      // 844
        this.element_.appendChild(boxOutline);                                                                         // 845
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {                                        // 846
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);                                        // 847
            this.rippleContainerElement_ = document.createElement('span');                                             // 848
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);                             // 849
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT);                                // 850
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);                                // 851
            this.boundRippleMouseUp = this.onMouseUp_.bind(this);                                                      // 852
            this.rippleContainerElement_.addEventListener('mouseup', this.boundRippleMouseUp);                         // 853
            var ripple = document.createElement('span');                                                               // 854
            ripple.classList.add(this.CssClasses_.RIPPLE);                                                             // 855
            this.rippleContainerElement_.appendChild(ripple);                                                          // 856
            this.element_.appendChild(this.rippleContainerElement_);                                                   // 857
        }                                                                                                              // 858
        this.boundInputOnChange = this.onChange_.bind(this);                                                           // 859
        this.boundInputOnFocus = this.onFocus_.bind(this);                                                             // 860
        this.boundInputOnBlur = this.onBlur_.bind(this);                                                               // 861
        this.boundElementMouseUp = this.onMouseUp_.bind(this);                                                         // 862
        this.inputElement_.addEventListener('change', this.boundInputOnChange);                                        // 863
        this.inputElement_.addEventListener('focus', this.boundInputOnFocus);                                          // 864
        this.inputElement_.addEventListener('blur', this.boundInputOnBlur);                                            // 865
        this.element_.addEventListener('mouseup', this.boundElementMouseUp);                                           // 866
        this.updateClasses_();                                                                                         // 867
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);                                                     // 868
    }                                                                                                                  // 869
};                                                                                                                     // 870
// The component registers itself. It can assume componentHandler is available                                         // 871
// in the global scope.                                                                                                // 872
componentHandler.register({                                                                                            // 873
    constructor: MaterialCheckbox,                                                                                     // 874
    classAsString: 'MaterialCheckbox',                                                                                 // 875
    cssClass: 'mdl-js-checkbox',                                                                                       // 876
    widget: true                                                                                                       // 877
});                                                                                                                    // 878
/**                                                                                                                    // 879
 * @license                                                                                                            // 880
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 881
 *                                                                                                                     // 882
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 883
 * you may not use this file except in compliance with the License.                                                    // 884
 * You may obtain a copy of the License at                                                                             // 885
 *                                                                                                                     // 886
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 887
 *                                                                                                                     // 888
 * Unless required by applicable law or agreed to in writing, software                                                 // 889
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 890
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 891
 * See the License for the specific language governing permissions and                                                 // 892
 * limitations under the License.                                                                                      // 893
 */                                                                                                                    // 894
/**                                                                                                                    // 895
   * Class constructor for icon toggle MDL component.                                                                  // 896
   * Implements MDL component design pattern defined at:                                                               // 897
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 898
   *                                                                                                                   // 899
   * @constructor                                                                                                      // 900
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 901
   */                                                                                                                  // 902
var MaterialIconToggle = function MaterialIconToggle(element) {                                                        // 903
    this.element_ = element;                                                                                           // 904
    // Initialize instance.                                                                                            // 905
    this.init();                                                                                                       // 906
};                                                                                                                     // 907
window['MaterialIconToggle'] = MaterialIconToggle;                                                                     // 908
/**                                                                                                                    // 909
   * Store constants in one place so they can be updated easily.                                                       // 910
   *                                                                                                                   // 911
   * @enum {string | number}                                                                                           // 912
   * @private                                                                                                          // 913
   */                                                                                                                  // 914
MaterialIconToggle.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };                                                      // 915
/**                                                                                                                    // 916
   * Store strings for class names defined by this component that are used in                                          // 917
   * JavaScript. This allows us to simply change it in one place should we                                             // 918
   * decide to modify at a later date.                                                                                 // 919
   *                                                                                                                   // 920
   * @enum {string}                                                                                                    // 921
   * @private                                                                                                          // 922
   */                                                                                                                  // 923
MaterialIconToggle.prototype.CssClasses_ = {                                                                           // 924
    INPUT: 'mdl-icon-toggle__input',                                                                                   // 925
    JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',                                                                          // 926
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',                                                       // 927
    RIPPLE_CONTAINER: 'mdl-icon-toggle__ripple-container',                                                             // 928
    RIPPLE_CENTER: 'mdl-ripple--center',                                                                               // 929
    RIPPLE: 'mdl-ripple',                                                                                              // 930
    IS_FOCUSED: 'is-focused',                                                                                          // 931
    IS_DISABLED: 'is-disabled',                                                                                        // 932
    IS_CHECKED: 'is-checked'                                                                                           // 933
};                                                                                                                     // 934
/**                                                                                                                    // 935
   * Handle change of state.                                                                                           // 936
   *                                                                                                                   // 937
   * @param {Event} event The event that fired.                                                                        // 938
   * @private                                                                                                          // 939
   */                                                                                                                  // 940
MaterialIconToggle.prototype.onChange_ = function (event) {                                                            // 941
    this.updateClasses_();                                                                                             // 942
};                                                                                                                     // 943
/**                                                                                                                    // 944
   * Handle focus of element.                                                                                          // 945
   *                                                                                                                   // 946
   * @param {Event} event The event that fired.                                                                        // 947
   * @private                                                                                                          // 948
   */                                                                                                                  // 949
MaterialIconToggle.prototype.onFocus_ = function (event) {                                                             // 950
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);                                                          // 951
};                                                                                                                     // 952
/**                                                                                                                    // 953
   * Handle lost focus of element.                                                                                     // 954
   *                                                                                                                   // 955
   * @param {Event} event The event that fired.                                                                        // 956
   * @private                                                                                                          // 957
   */                                                                                                                  // 958
MaterialIconToggle.prototype.onBlur_ = function (event) {                                                              // 959
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);                                                       // 960
};                                                                                                                     // 961
/**                                                                                                                    // 962
   * Handle mouseup.                                                                                                   // 963
   *                                                                                                                   // 964
   * @param {Event} event The event that fired.                                                                        // 965
   * @private                                                                                                          // 966
   */                                                                                                                  // 967
MaterialIconToggle.prototype.onMouseUp_ = function (event) {                                                           // 968
    this.blur_();                                                                                                      // 969
};                                                                                                                     // 970
/**                                                                                                                    // 971
   * Handle class updates.                                                                                             // 972
   *                                                                                                                   // 973
   * @private                                                                                                          // 974
   */                                                                                                                  // 975
MaterialIconToggle.prototype.updateClasses_ = function () {                                                            // 976
    this.checkDisabled();                                                                                              // 977
    this.checkToggleState();                                                                                           // 978
};                                                                                                                     // 979
/**                                                                                                                    // 980
   * Add blur.                                                                                                         // 981
   *                                                                                                                   // 982
   * @private                                                                                                          // 983
   */                                                                                                                  // 984
MaterialIconToggle.prototype.blur_ = function () {                                                                     // 985
    // TODO: figure out why there's a focus event being fired after our blur,                                          // 986
    // so that we can avoid this hack.                                                                                 // 987
    window.setTimeout(function () {                                                                                    // 988
        this.inputElement_.blur();                                                                                     // 989
    }.bind(this), this.Constant_.TINY_TIMEOUT);                                                                        // 990
};                                                                                                                     // 991
// Public methods.                                                                                                     // 992
/**                                                                                                                    // 993
   * Check the inputs toggle state and update display.                                                                 // 994
   *                                                                                                                   // 995
   * @public                                                                                                           // 996
   */                                                                                                                  // 997
MaterialIconToggle.prototype.checkToggleState = function () {                                                          // 998
    if (this.inputElement_.checked) {                                                                                  // 999
        this.element_.classList.add(this.CssClasses_.IS_CHECKED);                                                      // 1000
    } else {                                                                                                           // 1001
        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);                                                   // 1002
    }                                                                                                                  // 1003
};                                                                                                                     // 1004
MaterialIconToggle.prototype['checkToggleState'] = MaterialIconToggle.prototype.checkToggleState;                      // 1005
/**                                                                                                                    // 1006
   * Check the inputs disabled state and update display.                                                               // 1007
   *                                                                                                                   // 1008
   * @public                                                                                                           // 1009
   */                                                                                                                  // 1010
MaterialIconToggle.prototype.checkDisabled = function () {                                                             // 1011
    if (this.inputElement_.disabled) {                                                                                 // 1012
        this.element_.classList.add(this.CssClasses_.IS_DISABLED);                                                     // 1013
    } else {                                                                                                           // 1014
        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);                                                  // 1015
    }                                                                                                                  // 1016
};                                                                                                                     // 1017
MaterialIconToggle.prototype['checkDisabled'] = MaterialIconToggle.prototype.checkDisabled;                            // 1018
/**                                                                                                                    // 1019
   * Disable icon toggle.                                                                                              // 1020
   *                                                                                                                   // 1021
   * @public                                                                                                           // 1022
   */                                                                                                                  // 1023
MaterialIconToggle.prototype.disable = function () {                                                                   // 1024
    this.inputElement_.disabled = true;                                                                                // 1025
    this.updateClasses_();                                                                                             // 1026
};                                                                                                                     // 1027
MaterialIconToggle.prototype['disable'] = MaterialIconToggle.prototype.disable;                                        // 1028
/**                                                                                                                    // 1029
   * Enable icon toggle.                                                                                               // 1030
   *                                                                                                                   // 1031
   * @public                                                                                                           // 1032
   */                                                                                                                  // 1033
MaterialIconToggle.prototype.enable = function () {                                                                    // 1034
    this.inputElement_.disabled = false;                                                                               // 1035
    this.updateClasses_();                                                                                             // 1036
};                                                                                                                     // 1037
MaterialIconToggle.prototype['enable'] = MaterialIconToggle.prototype.enable;                                          // 1038
/**                                                                                                                    // 1039
   * Check icon toggle.                                                                                                // 1040
   *                                                                                                                   // 1041
   * @public                                                                                                           // 1042
   */                                                                                                                  // 1043
MaterialIconToggle.prototype.check = function () {                                                                     // 1044
    this.inputElement_.checked = true;                                                                                 // 1045
    this.updateClasses_();                                                                                             // 1046
};                                                                                                                     // 1047
MaterialIconToggle.prototype['check'] = MaterialIconToggle.prototype.check;                                            // 1048
/**                                                                                                                    // 1049
   * Uncheck icon toggle.                                                                                              // 1050
   *                                                                                                                   // 1051
   * @public                                                                                                           // 1052
   */                                                                                                                  // 1053
MaterialIconToggle.prototype.uncheck = function () {                                                                   // 1054
    this.inputElement_.checked = false;                                                                                // 1055
    this.updateClasses_();                                                                                             // 1056
};                                                                                                                     // 1057
MaterialIconToggle.prototype['uncheck'] = MaterialIconToggle.prototype.uncheck;                                        // 1058
/**                                                                                                                    // 1059
   * Initialize element.                                                                                               // 1060
   */                                                                                                                  // 1061
MaterialIconToggle.prototype.init = function () {                                                                      // 1062
    if (this.element_) {                                                                                               // 1063
        this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);                                // 1064
        if (this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {                                     // 1065
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);                                        // 1066
            this.rippleContainerElement_ = document.createElement('span');                                             // 1067
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);                             // 1068
            this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT);                             // 1069
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);                                // 1070
            this.boundRippleMouseUp = this.onMouseUp_.bind(this);                                                      // 1071
            this.rippleContainerElement_.addEventListener('mouseup', this.boundRippleMouseUp);                         // 1072
            var ripple = document.createElement('span');                                                               // 1073
            ripple.classList.add(this.CssClasses_.RIPPLE);                                                             // 1074
            this.rippleContainerElement_.appendChild(ripple);                                                          // 1075
            this.element_.appendChild(this.rippleContainerElement_);                                                   // 1076
        }                                                                                                              // 1077
        this.boundInputOnChange = this.onChange_.bind(this);                                                           // 1078
        this.boundInputOnFocus = this.onFocus_.bind(this);                                                             // 1079
        this.boundInputOnBlur = this.onBlur_.bind(this);                                                               // 1080
        this.boundElementOnMouseUp = this.onMouseUp_.bind(this);                                                       // 1081
        this.inputElement_.addEventListener('change', this.boundInputOnChange);                                        // 1082
        this.inputElement_.addEventListener('focus', this.boundInputOnFocus);                                          // 1083
        this.inputElement_.addEventListener('blur', this.boundInputOnBlur);                                            // 1084
        this.element_.addEventListener('mouseup', this.boundElementOnMouseUp);                                         // 1085
        this.updateClasses_();                                                                                         // 1086
        this.element_.classList.add('is-upgraded');                                                                    // 1087
    }                                                                                                                  // 1088
};                                                                                                                     // 1089
// The component registers itself. It can assume componentHandler is available                                         // 1090
// in the global scope.                                                                                                // 1091
componentHandler.register({                                                                                            // 1092
    constructor: MaterialIconToggle,                                                                                   // 1093
    classAsString: 'MaterialIconToggle',                                                                               // 1094
    cssClass: 'mdl-js-icon-toggle',                                                                                    // 1095
    widget: true                                                                                                       // 1096
});                                                                                                                    // 1097
/**                                                                                                                    // 1098
 * @license                                                                                                            // 1099
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 1100
 *                                                                                                                     // 1101
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 1102
 * you may not use this file except in compliance with the License.                                                    // 1103
 * You may obtain a copy of the License at                                                                             // 1104
 *                                                                                                                     // 1105
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 1106
 *                                                                                                                     // 1107
 * Unless required by applicable law or agreed to in writing, software                                                 // 1108
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 1109
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 1110
 * See the License for the specific language governing permissions and                                                 // 1111
 * limitations under the License.                                                                                      // 1112
 */                                                                                                                    // 1113
/**                                                                                                                    // 1114
   * Class constructor for dropdown MDL component.                                                                     // 1115
   * Implements MDL component design pattern defined at:                                                               // 1116
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 1117
   *                                                                                                                   // 1118
   * @constructor                                                                                                      // 1119
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 1120
   */                                                                                                                  // 1121
var MaterialMenu = function MaterialMenu(element) {                                                                    // 1122
    this.element_ = element;                                                                                           // 1123
    // Initialize instance.                                                                                            // 1124
    this.init();                                                                                                       // 1125
};                                                                                                                     // 1126
window['MaterialMenu'] = MaterialMenu;                                                                                 // 1127
/**                                                                                                                    // 1128
   * Store constants in one place so they can be updated easily.                                                       // 1129
   *                                                                                                                   // 1130
   * @enum {string | number}                                                                                           // 1131
   * @private                                                                                                          // 1132
   */                                                                                                                  // 1133
MaterialMenu.prototype.Constant_ = {                                                                                   // 1134
    // Total duration of the menu animation.                                                                           // 1135
    TRANSITION_DURATION_SECONDS: 0.3,                                                                                  // 1136
    // The fraction of the total duration we want to use for menu item animations.                                     // 1137
    TRANSITION_DURATION_FRACTION: 0.8,                                                                                 // 1138
    // How long the menu stays open after choosing an option (so the user can see                                      // 1139
    // the ripple).                                                                                                    // 1140
    CLOSE_TIMEOUT: 150                                                                                                 // 1141
};                                                                                                                     // 1142
/**                                                                                                                    // 1143
   * Keycodes, for code readability.                                                                                   // 1144
   *                                                                                                                   // 1145
   * @enum {number}                                                                                                    // 1146
   * @private                                                                                                          // 1147
   */                                                                                                                  // 1148
MaterialMenu.prototype.Keycodes_ = {                                                                                   // 1149
    ENTER: 13,                                                                                                         // 1150
    ESCAPE: 27,                                                                                                        // 1151
    SPACE: 32,                                                                                                         // 1152
    UP_ARROW: 38,                                                                                                      // 1153
    DOWN_ARROW: 40                                                                                                     // 1154
};                                                                                                                     // 1155
/**                                                                                                                    // 1156
   * Store strings for class names defined by this component that are used in                                          // 1157
   * JavaScript. This allows us to simply change it in one place should we                                             // 1158
   * decide to modify at a later date.                                                                                 // 1159
   *                                                                                                                   // 1160
   * @enum {string}                                                                                                    // 1161
   * @private                                                                                                          // 1162
   */                                                                                                                  // 1163
MaterialMenu.prototype.CssClasses_ = {                                                                                 // 1164
    CONTAINER: 'mdl-menu__container',                                                                                  // 1165
    OUTLINE: 'mdl-menu__outline',                                                                                      // 1166
    ITEM: 'mdl-menu__item',                                                                                            // 1167
    ITEM_RIPPLE_CONTAINER: 'mdl-menu__item-ripple-container',                                                          // 1168
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',                                                                             // 1169
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',                                                       // 1170
    RIPPLE: 'mdl-ripple',                                                                                              // 1171
    // Statuses                                                                                                        // 1172
    IS_UPGRADED: 'is-upgraded',                                                                                        // 1173
    IS_VISIBLE: 'is-visible',                                                                                          // 1174
    IS_ANIMATING: 'is-animating',                                                                                      // 1175
    // Alignment options                                                                                               // 1176
    BOTTOM_LEFT: 'mdl-menu--bottom-left',                                                                              // 1177
    // This is the default.                                                                                            // 1178
    BOTTOM_RIGHT: 'mdl-menu--bottom-right',                                                                            // 1179
    TOP_LEFT: 'mdl-menu--top-left',                                                                                    // 1180
    TOP_RIGHT: 'mdl-menu--top-right',                                                                                  // 1181
    UNALIGNED: 'mdl-menu--unaligned'                                                                                   // 1182
};                                                                                                                     // 1183
/**                                                                                                                    // 1184
   * Initialize element.                                                                                               // 1185
   */                                                                                                                  // 1186
MaterialMenu.prototype.init = function () {                                                                            // 1187
    if (this.element_) {                                                                                               // 1188
        // Create container for the menu.                                                                              // 1189
        var container = document.createElement('div');                                                                 // 1190
        container.classList.add(this.CssClasses_.CONTAINER);                                                           // 1191
        this.element_.parentElement.insertBefore(container, this.element_);                                            // 1192
        this.element_.parentElement.removeChild(this.element_);                                                        // 1193
        container.appendChild(this.element_);                                                                          // 1194
        this.container_ = container;                                                                                   // 1195
        // Create outline for the menu (shadow and background).                                                        // 1196
        var outline = document.createElement('div');                                                                   // 1197
        outline.classList.add(this.CssClasses_.OUTLINE);                                                               // 1198
        this.outline_ = outline;                                                                                       // 1199
        container.insertBefore(outline, this.element_);                                                                // 1200
        // Find the "for" element and bind events to it.                                                               // 1201
        var forElId = this.element_.getAttribute('for') || this.element_.getAttribute('data-mdl-for');                 // 1202
        var forEl = null;                                                                                              // 1203
        if (forElId) {                                                                                                 // 1204
            forEl = document.getElementById(forElId);                                                                  // 1205
            if (forEl) {                                                                                               // 1206
                this.forElement_ = forEl;                                                                              // 1207
                forEl.addEventListener('click', this.handleForClick_.bind(this));                                      // 1208
                forEl.addEventListener('keydown', this.handleForKeyboardEvent_.bind(this));                            // 1209
            }                                                                                                          // 1210
        }                                                                                                              // 1211
        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);                                       // 1212
        this.boundItemKeydown_ = this.handleItemKeyboardEvent_.bind(this);                                             // 1213
        this.boundItemClick_ = this.handleItemClick_.bind(this);                                                       // 1214
        for (var i = 0; i < items.length; i++) {                                                                       // 1215
            // Add a listener to each menu item.                                                                       // 1216
            items[i].addEventListener('click', this.boundItemClick_);                                                  // 1217
            // Add a tab index to each menu item.                                                                      // 1218
            items[i].tabIndex = '-1';                                                                                  // 1219
            // Add a keyboard listener to each menu item.                                                              // 1220
            items[i].addEventListener('keydown', this.boundItemKeydown_);                                              // 1221
        }                                                                                                              // 1222
        // Add ripple classes to each item, if the user has enabled ripples.                                           // 1223
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {                                        // 1224
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);                                        // 1225
            for (i = 0; i < items.length; i++) {                                                                       // 1226
                var item = items[i];                                                                                   // 1227
                var rippleContainer = document.createElement('span');                                                  // 1228
                rippleContainer.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);                                 // 1229
                var ripple = document.createElement('span');                                                           // 1230
                ripple.classList.add(this.CssClasses_.RIPPLE);                                                         // 1231
                rippleContainer.appendChild(ripple);                                                                   // 1232
                item.appendChild(rippleContainer);                                                                     // 1233
                item.classList.add(this.CssClasses_.RIPPLE_EFFECT);                                                    // 1234
            }                                                                                                          // 1235
        }                                                                                                              // 1236
        // Copy alignment classes to the container, so the outline can use them.                                       // 1237
        if (this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)) {                                          // 1238
            this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT);                                                 // 1239
        }                                                                                                              // 1240
        if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {                                         // 1241
            this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT);                                                // 1242
        }                                                                                                              // 1243
        if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {                                             // 1244
            this.outline_.classList.add(this.CssClasses_.TOP_LEFT);                                                    // 1245
        }                                                                                                              // 1246
        if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {                                            // 1247
            this.outline_.classList.add(this.CssClasses_.TOP_RIGHT);                                                   // 1248
        }                                                                                                              // 1249
        if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {                                            // 1250
            this.outline_.classList.add(this.CssClasses_.UNALIGNED);                                                   // 1251
        }                                                                                                              // 1252
        container.classList.add(this.CssClasses_.IS_UPGRADED);                                                         // 1253
    }                                                                                                                  // 1254
};                                                                                                                     // 1255
/**                                                                                                                    // 1256
   * Handles a click on the "for" element, by positioning the menu and then                                            // 1257
   * toggling it.                                                                                                      // 1258
   *                                                                                                                   // 1259
   * @param {Event} evt The event that fired.                                                                          // 1260
   * @private                                                                                                          // 1261
   */                                                                                                                  // 1262
MaterialMenu.prototype.handleForClick_ = function (evt) {                                                              // 1263
    if (this.element_ && this.forElement_) {                                                                           // 1264
        var rect = this.forElement_.getBoundingClientRect();                                                           // 1265
        var forRect = this.forElement_.parentElement.getBoundingClientRect();                                          // 1266
        if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {                                            // 1267
        } else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {                                  // 1268
            // Position below the "for" element, aligned to its right.                                                 // 1269
            this.container_.style.right = forRect.right - rect.right + 'px';                                           // 1270
            this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + 'px';             // 1271
        } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {                                      // 1272
            // Position above the "for" element, aligned to its left.                                                  // 1273
            this.container_.style.left = this.forElement_.offsetLeft + 'px';                                           // 1274
            this.container_.style.bottom = forRect.bottom - rect.top + 'px';                                           // 1275
        } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {                                     // 1276
            // Position above the "for" element, aligned to its right.                                                 // 1277
            this.container_.style.right = forRect.right - rect.right + 'px';                                           // 1278
            this.container_.style.bottom = forRect.bottom - rect.top + 'px';                                           // 1279
        } else {                                                                                                       // 1280
            // Default: position below the "for" element, aligned to its left.                                         // 1281
            this.container_.style.left = this.forElement_.offsetLeft + 'px';                                           // 1282
            this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + 'px';             // 1283
        }                                                                                                              // 1284
    }                                                                                                                  // 1285
    this.toggle(evt);                                                                                                  // 1286
};                                                                                                                     // 1287
/**                                                                                                                    // 1288
   * Handles a keyboard event on the "for" element.                                                                    // 1289
   *                                                                                                                   // 1290
   * @param {Event} evt The event that fired.                                                                          // 1291
   * @private                                                                                                          // 1292
   */                                                                                                                  // 1293
MaterialMenu.prototype.handleForKeyboardEvent_ = function (evt) {                                                      // 1294
    if (this.element_ && this.container_ && this.forElement_) {                                                        // 1295
        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM + ':not([disabled])');                  // 1296
        if (items && items.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {            // 1297
            if (evt.keyCode === this.Keycodes_.UP_ARROW) {                                                             // 1298
                evt.preventDefault();                                                                                  // 1299
                items[items.length - 1].focus();                                                                       // 1300
            } else if (evt.keyCode === this.Keycodes_.DOWN_ARROW) {                                                    // 1301
                evt.preventDefault();                                                                                  // 1302
                items[0].focus();                                                                                      // 1303
            }                                                                                                          // 1304
        }                                                                                                              // 1305
    }                                                                                                                  // 1306
};                                                                                                                     // 1307
/**                                                                                                                    // 1308
   * Handles a keyboard event on an item.                                                                              // 1309
   *                                                                                                                   // 1310
   * @param {Event} evt The event that fired.                                                                          // 1311
   * @private                                                                                                          // 1312
   */                                                                                                                  // 1313
MaterialMenu.prototype.handleItemKeyboardEvent_ = function (evt) {                                                     // 1314
    if (this.element_ && this.container_) {                                                                            // 1315
        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM + ':not([disabled])');                  // 1316
        if (items && items.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {            // 1317
            var currentIndex = Array.prototype.slice.call(items).indexOf(evt.target);                                  // 1318
            if (evt.keyCode === this.Keycodes_.UP_ARROW) {                                                             // 1319
                evt.preventDefault();                                                                                  // 1320
                if (currentIndex > 0) {                                                                                // 1321
                    items[currentIndex - 1].focus();                                                                   // 1322
                } else {                                                                                               // 1323
                    items[items.length - 1].focus();                                                                   // 1324
                }                                                                                                      // 1325
            } else if (evt.keyCode === this.Keycodes_.DOWN_ARROW) {                                                    // 1326
                evt.preventDefault();                                                                                  // 1327
                if (items.length > currentIndex + 1) {                                                                 // 1328
                    items[currentIndex + 1].focus();                                                                   // 1329
                } else {                                                                                               // 1330
                    items[0].focus();                                                                                  // 1331
                }                                                                                                      // 1332
            } else if (evt.keyCode === this.Keycodes_.SPACE || evt.keyCode === this.Keycodes_.ENTER) {                 // 1333
                evt.preventDefault();                                                                                  // 1334
                // Send mousedown and mouseup to trigger ripple.                                                       // 1335
                var e = new MouseEvent('mousedown');                                                                   // 1336
                evt.target.dispatchEvent(e);                                                                           // 1337
                e = new MouseEvent('mouseup');                                                                         // 1338
                evt.target.dispatchEvent(e);                                                                           // 1339
                // Send click.                                                                                         // 1340
                evt.target.click();                                                                                    // 1341
            } else if (evt.keyCode === this.Keycodes_.ESCAPE) {                                                        // 1342
                evt.preventDefault();                                                                                  // 1343
                this.hide();                                                                                           // 1344
            }                                                                                                          // 1345
        }                                                                                                              // 1346
    }                                                                                                                  // 1347
};                                                                                                                     // 1348
/**                                                                                                                    // 1349
   * Handles a click event on an item.                                                                                 // 1350
   *                                                                                                                   // 1351
   * @param {Event} evt The event that fired.                                                                          // 1352
   * @private                                                                                                          // 1353
   */                                                                                                                  // 1354
MaterialMenu.prototype.handleItemClick_ = function (evt) {                                                             // 1355
    if (evt.target.hasAttribute('disabled')) {                                                                         // 1356
        evt.stopPropagation();                                                                                         // 1357
    } else {                                                                                                           // 1358
        // Wait some time before closing menu, so the user can see the ripple.                                         // 1359
        this.closing_ = true;                                                                                          // 1360
        window.setTimeout(function (evt) {                                                                             // 1361
            this.hide();                                                                                               // 1362
            this.closing_ = false;                                                                                     // 1363
        }.bind(this), this.Constant_.CLOSE_TIMEOUT);                                                                   // 1364
    }                                                                                                                  // 1365
};                                                                                                                     // 1366
/**                                                                                                                    // 1367
   * Calculates the initial clip (for opening the menu) or final clip (for closing                                     // 1368
   * it), and applies it. This allows us to animate from or to the correct point,                                      // 1369
   * that is, the point it's aligned to in the "for" element.                                                          // 1370
   *                                                                                                                   // 1371
   * @param {number} height Height of the clip rectangle                                                               // 1372
   * @param {number} width Width of the clip rectangle                                                                 // 1373
   * @private                                                                                                          // 1374
   */                                                                                                                  // 1375
MaterialMenu.prototype.applyClip_ = function (height, width) {                                                         // 1376
    if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {                                                // 1377
        // Do not clip.                                                                                                // 1378
        this.element_.style.clip = '';                                                                                 // 1379
    } else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {                                      // 1380
        // Clip to the top right corner of the menu.                                                                   // 1381
        this.element_.style.clip = 'rect(0 ' + width + 'px ' + '0 ' + width + 'px)';                                   // 1382
    } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {                                          // 1383
        // Clip to the bottom left corner of the menu.                                                                 // 1384
        this.element_.style.clip = 'rect(' + height + 'px 0 ' + height + 'px 0)';                                      // 1385
    } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {                                         // 1386
        // Clip to the bottom right corner of the menu.                                                                // 1387
        this.element_.style.clip = 'rect(' + height + 'px ' + width + 'px ' + height + 'px ' + width + 'px)';          // 1388
    } else {                                                                                                           // 1389
        // Default: do not clip (same as clipping to the top left corner).                                             // 1390
        this.element_.style.clip = '';                                                                                 // 1391
    }                                                                                                                  // 1392
};                                                                                                                     // 1393
/**                                                                                                                    // 1394
   * Cleanup function to remove animation listeners.                                                                   // 1395
   *                                                                                                                   // 1396
   * @param {Event} evt                                                                                                // 1397
   * @private                                                                                                          // 1398
   */                                                                                                                  // 1399
MaterialMenu.prototype.removeAnimationEndListener_ = function (evt) {                                                  // 1400
    evt.target.classList.remove(MaterialMenu.prototype.CssClasses_.IS_ANIMATING);                                      // 1401
};                                                                                                                     // 1402
/**                                                                                                                    // 1403
   * Adds an event listener to clean up after the animation ends.                                                      // 1404
   *                                                                                                                   // 1405
   * @private                                                                                                          // 1406
   */                                                                                                                  // 1407
MaterialMenu.prototype.addAnimationEndListener_ = function () {                                                        // 1408
    this.element_.addEventListener('transitionend', this.removeAnimationEndListener_);                                 // 1409
    this.element_.addEventListener('webkitTransitionEnd', this.removeAnimationEndListener_);                           // 1410
};                                                                                                                     // 1411
/**                                                                                                                    // 1412
   * Displays the menu.                                                                                                // 1413
   *                                                                                                                   // 1414
   * @public                                                                                                           // 1415
   */                                                                                                                  // 1416
MaterialMenu.prototype.show = function (evt) {                                                                         // 1417
    if (this.element_ && this.container_ && this.outline_) {                                                           // 1418
        // Measure the inner element.                                                                                  // 1419
        var height = this.element_.getBoundingClientRect().height;                                                     // 1420
        var width = this.element_.getBoundingClientRect().width;                                                       // 1421
        // Apply the inner element's size to the container and outline.                                                // 1422
        this.container_.style.width = width + 'px';                                                                    // 1423
        this.container_.style.height = height + 'px';                                                                  // 1424
        this.outline_.style.width = width + 'px';                                                                      // 1425
        this.outline_.style.height = height + 'px';                                                                    // 1426
        var transitionDuration = this.Constant_.TRANSITION_DURATION_SECONDS * this.Constant_.TRANSITION_DURATION_FRACTION;
        // Calculate transition delays for individual menu items, so that they fade                                    // 1428
        // in one at a time.                                                                                           // 1429
        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);                                       // 1430
        for (var i = 0; i < items.length; i++) {                                                                       // 1431
            var itemDelay = null;                                                                                      // 1432
            if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT) || this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
                itemDelay = (height - items[i].offsetTop - items[i].offsetHeight) / height * transitionDuration + 's';
            } else {                                                                                                   // 1435
                itemDelay = items[i].offsetTop / height * transitionDuration + 's';                                    // 1436
            }                                                                                                          // 1437
            items[i].style.transitionDelay = itemDelay;                                                                // 1438
        }                                                                                                              // 1439
        // Apply the initial clip to the text before we start animating.                                               // 1440
        this.applyClip_(height, width);                                                                                // 1441
        // Wait for the next frame, turn on animation, and apply the final clip.                                       // 1442
        // Also make it visible. This triggers the transitions.                                                        // 1443
        window.requestAnimationFrame(function () {                                                                     // 1444
            this.element_.classList.add(this.CssClasses_.IS_ANIMATING);                                                // 1445
            this.element_.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';                                   // 1446
            this.container_.classList.add(this.CssClasses_.IS_VISIBLE);                                                // 1447
        }.bind(this));                                                                                                 // 1448
        // Clean up after the animation is complete.                                                                   // 1449
        this.addAnimationEndListener_();                                                                               // 1450
        // Add a click listener to the document, to close the menu.                                                    // 1451
        var callback = function (e) {                                                                                  // 1452
            // Check to see if the document is processing the same event that                                          // 1453
            // displayed the menu in the first place. If so, do nothing.                                               // 1454
            // Also check to see if the menu is in the process of closing itself, and                                  // 1455
            // do nothing in that case.                                                                                // 1456
            // Also check if the clicked element is a menu item                                                        // 1457
            // if so, do nothing.                                                                                      // 1458
            if (e !== evt && !this.closing_ && e.target.parentNode !== this.element_) {                                // 1459
                document.removeEventListener('click', callback);                                                       // 1460
                this.hide();                                                                                           // 1461
            }                                                                                                          // 1462
        }.bind(this);                                                                                                  // 1463
        document.addEventListener('click', callback);                                                                  // 1464
    }                                                                                                                  // 1465
};                                                                                                                     // 1466
MaterialMenu.prototype['show'] = MaterialMenu.prototype.show;                                                          // 1467
/**                                                                                                                    // 1468
   * Hides the menu.                                                                                                   // 1469
   *                                                                                                                   // 1470
   * @public                                                                                                           // 1471
   */                                                                                                                  // 1472
MaterialMenu.prototype.hide = function () {                                                                            // 1473
    if (this.element_ && this.container_ && this.outline_) {                                                           // 1474
        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);                                       // 1475
        // Remove all transition delays; menu items fade out concurrently.                                             // 1476
        for (var i = 0; i < items.length; i++) {                                                                       // 1477
            items[i].style.removeProperty('transition-delay');                                                         // 1478
        }                                                                                                              // 1479
        // Measure the inner element.                                                                                  // 1480
        var rect = this.element_.getBoundingClientRect();                                                              // 1481
        var height = rect.height;                                                                                      // 1482
        var width = rect.width;                                                                                        // 1483
        // Turn on animation, and apply the final clip. Also make invisible.                                           // 1484
        // This triggers the transitions.                                                                              // 1485
        this.element_.classList.add(this.CssClasses_.IS_ANIMATING);                                                    // 1486
        this.applyClip_(height, width);                                                                                // 1487
        this.container_.classList.remove(this.CssClasses_.IS_VISIBLE);                                                 // 1488
        // Clean up after the animation is complete.                                                                   // 1489
        this.addAnimationEndListener_();                                                                               // 1490
    }                                                                                                                  // 1491
};                                                                                                                     // 1492
MaterialMenu.prototype['hide'] = MaterialMenu.prototype.hide;                                                          // 1493
/**                                                                                                                    // 1494
   * Displays or hides the menu, depending on current state.                                                           // 1495
   *                                                                                                                   // 1496
   * @public                                                                                                           // 1497
   */                                                                                                                  // 1498
MaterialMenu.prototype.toggle = function (evt) {                                                                       // 1499
    if (this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {                                             // 1500
        this.hide();                                                                                                   // 1501
    } else {                                                                                                           // 1502
        this.show(evt);                                                                                                // 1503
    }                                                                                                                  // 1504
};                                                                                                                     // 1505
MaterialMenu.prototype['toggle'] = MaterialMenu.prototype.toggle;                                                      // 1506
// The component registers itself. It can assume componentHandler is available                                         // 1507
// in the global scope.                                                                                                // 1508
componentHandler.register({                                                                                            // 1509
    constructor: MaterialMenu,                                                                                         // 1510
    classAsString: 'MaterialMenu',                                                                                     // 1511
    cssClass: 'mdl-js-menu',                                                                                           // 1512
    widget: true                                                                                                       // 1513
});                                                                                                                    // 1514
/**                                                                                                                    // 1515
 * @license                                                                                                            // 1516
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 1517
 *                                                                                                                     // 1518
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 1519
 * you may not use this file except in compliance with the License.                                                    // 1520
 * You may obtain a copy of the License at                                                                             // 1521
 *                                                                                                                     // 1522
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 1523
 *                                                                                                                     // 1524
 * Unless required by applicable law or agreed to in writing, software                                                 // 1525
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 1526
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 1527
 * See the License for the specific language governing permissions and                                                 // 1528
 * limitations under the License.                                                                                      // 1529
 */                                                                                                                    // 1530
/**                                                                                                                    // 1531
   * Class constructor for Progress MDL component.                                                                     // 1532
   * Implements MDL component design pattern defined at:                                                               // 1533
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 1534
   *                                                                                                                   // 1535
   * @constructor                                                                                                      // 1536
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 1537
   */                                                                                                                  // 1538
var MaterialProgress = function MaterialProgress(element) {                                                            // 1539
    this.element_ = element;                                                                                           // 1540
    // Initialize instance.                                                                                            // 1541
    this.init();                                                                                                       // 1542
};                                                                                                                     // 1543
window['MaterialProgress'] = MaterialProgress;                                                                         // 1544
/**                                                                                                                    // 1545
   * Store constants in one place so they can be updated easily.                                                       // 1546
   *                                                                                                                   // 1547
   * @enum {string | number}                                                                                           // 1548
   * @private                                                                                                          // 1549
   */                                                                                                                  // 1550
MaterialProgress.prototype.Constant_ = {};                                                                             // 1551
/**                                                                                                                    // 1552
   * Store strings for class names defined by this component that are used in                                          // 1553
   * JavaScript. This allows us to simply change it in one place should we                                             // 1554
   * decide to modify at a later date.                                                                                 // 1555
   *                                                                                                                   // 1556
   * @enum {string}                                                                                                    // 1557
   * @private                                                                                                          // 1558
   */                                                                                                                  // 1559
MaterialProgress.prototype.CssClasses_ = { INDETERMINATE_CLASS: 'mdl-progress__indeterminate' };                       // 1560
/**                                                                                                                    // 1561
   * Set the current progress of the progressbar.                                                                      // 1562
   *                                                                                                                   // 1563
   * @param {number} p Percentage of the progress (0-100)                                                              // 1564
   * @public                                                                                                           // 1565
   */                                                                                                                  // 1566
MaterialProgress.prototype.setProgress = function (p) {                                                                // 1567
    if (this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)) {                                      // 1568
        return;                                                                                                        // 1569
    }                                                                                                                  // 1570
    this.progressbar_.style.width = p + '%';                                                                           // 1571
};                                                                                                                     // 1572
MaterialProgress.prototype['setProgress'] = MaterialProgress.prototype.setProgress;                                    // 1573
/**                                                                                                                    // 1574
   * Set the current progress of the buffer.                                                                           // 1575
   *                                                                                                                   // 1576
   * @param {number} p Percentage of the buffer (0-100)                                                                // 1577
   * @public                                                                                                           // 1578
   */                                                                                                                  // 1579
MaterialProgress.prototype.setBuffer = function (p) {                                                                  // 1580
    this.bufferbar_.style.width = p + '%';                                                                             // 1581
    this.auxbar_.style.width = 100 - p + '%';                                                                          // 1582
};                                                                                                                     // 1583
MaterialProgress.prototype['setBuffer'] = MaterialProgress.prototype.setBuffer;                                        // 1584
/**                                                                                                                    // 1585
   * Initialize element.                                                                                               // 1586
   */                                                                                                                  // 1587
MaterialProgress.prototype.init = function () {                                                                        // 1588
    if (this.element_) {                                                                                               // 1589
        var el = document.createElement('div');                                                                        // 1590
        el.className = 'progressbar bar bar1';                                                                         // 1591
        this.element_.appendChild(el);                                                                                 // 1592
        this.progressbar_ = el;                                                                                        // 1593
        el = document.createElement('div');                                                                            // 1594
        el.className = 'bufferbar bar bar2';                                                                           // 1595
        this.element_.appendChild(el);                                                                                 // 1596
        this.bufferbar_ = el;                                                                                          // 1597
        el = document.createElement('div');                                                                            // 1598
        el.className = 'auxbar bar bar3';                                                                              // 1599
        this.element_.appendChild(el);                                                                                 // 1600
        this.auxbar_ = el;                                                                                             // 1601
        this.progressbar_.style.width = '0%';                                                                          // 1602
        this.bufferbar_.style.width = '100%';                                                                          // 1603
        this.auxbar_.style.width = '0%';                                                                               // 1604
        this.element_.classList.add('is-upgraded');                                                                    // 1605
    }                                                                                                                  // 1606
};                                                                                                                     // 1607
// The component registers itself. It can assume componentHandler is available                                         // 1608
// in the global scope.                                                                                                // 1609
componentHandler.register({                                                                                            // 1610
    constructor: MaterialProgress,                                                                                     // 1611
    classAsString: 'MaterialProgress',                                                                                 // 1612
    cssClass: 'mdl-js-progress',                                                                                       // 1613
    widget: true                                                                                                       // 1614
});                                                                                                                    // 1615
/**                                                                                                                    // 1616
 * @license                                                                                                            // 1617
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 1618
 *                                                                                                                     // 1619
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 1620
 * you may not use this file except in compliance with the License.                                                    // 1621
 * You may obtain a copy of the License at                                                                             // 1622
 *                                                                                                                     // 1623
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 1624
 *                                                                                                                     // 1625
 * Unless required by applicable law or agreed to in writing, software                                                 // 1626
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 1627
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 1628
 * See the License for the specific language governing permissions and                                                 // 1629
 * limitations under the License.                                                                                      // 1630
 */                                                                                                                    // 1631
/**                                                                                                                    // 1632
   * Class constructor for Radio MDL component.                                                                        // 1633
   * Implements MDL component design pattern defined at:                                                               // 1634
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 1635
   *                                                                                                                   // 1636
   * @constructor                                                                                                      // 1637
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 1638
   */                                                                                                                  // 1639
var MaterialRadio = function MaterialRadio(element) {                                                                  // 1640
    this.element_ = element;                                                                                           // 1641
    // Initialize instance.                                                                                            // 1642
    this.init();                                                                                                       // 1643
};                                                                                                                     // 1644
window['MaterialRadio'] = MaterialRadio;                                                                               // 1645
/**                                                                                                                    // 1646
   * Store constants in one place so they can be updated easily.                                                       // 1647
   *                                                                                                                   // 1648
   * @enum {string | number}                                                                                           // 1649
   * @private                                                                                                          // 1650
   */                                                                                                                  // 1651
MaterialRadio.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };                                                           // 1652
/**                                                                                                                    // 1653
   * Store strings for class names defined by this component that are used in                                          // 1654
   * JavaScript. This allows us to simply change it in one place should we                                             // 1655
   * decide to modify at a later date.                                                                                 // 1656
   *                                                                                                                   // 1657
   * @enum {string}                                                                                                    // 1658
   * @private                                                                                                          // 1659
   */                                                                                                                  // 1660
MaterialRadio.prototype.CssClasses_ = {                                                                                // 1661
    IS_FOCUSED: 'is-focused',                                                                                          // 1662
    IS_DISABLED: 'is-disabled',                                                                                        // 1663
    IS_CHECKED: 'is-checked',                                                                                          // 1664
    IS_UPGRADED: 'is-upgraded',                                                                                        // 1665
    JS_RADIO: 'mdl-js-radio',                                                                                          // 1666
    RADIO_BTN: 'mdl-radio__button',                                                                                    // 1667
    RADIO_OUTER_CIRCLE: 'mdl-radio__outer-circle',                                                                     // 1668
    RADIO_INNER_CIRCLE: 'mdl-radio__inner-circle',                                                                     // 1669
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',                                                                             // 1670
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',                                                       // 1671
    RIPPLE_CONTAINER: 'mdl-radio__ripple-container',                                                                   // 1672
    RIPPLE_CENTER: 'mdl-ripple--center',                                                                               // 1673
    RIPPLE: 'mdl-ripple'                                                                                               // 1674
};                                                                                                                     // 1675
/**                                                                                                                    // 1676
   * Handle change of state.                                                                                           // 1677
   *                                                                                                                   // 1678
   * @param {Event} event The event that fired.                                                                        // 1679
   * @private                                                                                                          // 1680
   */                                                                                                                  // 1681
MaterialRadio.prototype.onChange_ = function (event) {                                                                 // 1682
    // Since other radio buttons don't get change events, we need to look for                                          // 1683
    // them to update their classes.                                                                                   // 1684
    var radios = document.getElementsByClassName(this.CssClasses_.JS_RADIO);                                           // 1685
    for (var i = 0; i < radios.length; i++) {                                                                          // 1686
        var button = radios[i].querySelector('.' + this.CssClasses_.RADIO_BTN);                                        // 1687
        // Different name == different group, so no point updating those.                                              // 1688
        if (button.getAttribute('name') === this.btnElement_.getAttribute('name')) {                                   // 1689
            radios[i]['MaterialRadio'].updateClasses_();                                                               // 1690
        }                                                                                                              // 1691
    }                                                                                                                  // 1692
};                                                                                                                     // 1693
/**                                                                                                                    // 1694
   * Handle focus.                                                                                                     // 1695
   *                                                                                                                   // 1696
   * @param {Event} event The event that fired.                                                                        // 1697
   * @private                                                                                                          // 1698
   */                                                                                                                  // 1699
MaterialRadio.prototype.onFocus_ = function (event) {                                                                  // 1700
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);                                                          // 1701
};                                                                                                                     // 1702
/**                                                                                                                    // 1703
   * Handle lost focus.                                                                                                // 1704
   *                                                                                                                   // 1705
   * @param {Event} event The event that fired.                                                                        // 1706
   * @private                                                                                                          // 1707
   */                                                                                                                  // 1708
MaterialRadio.prototype.onBlur_ = function (event) {                                                                   // 1709
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);                                                       // 1710
};                                                                                                                     // 1711
/**                                                                                                                    // 1712
   * Handle mouseup.                                                                                                   // 1713
   *                                                                                                                   // 1714
   * @param {Event} event The event that fired.                                                                        // 1715
   * @private                                                                                                          // 1716
   */                                                                                                                  // 1717
MaterialRadio.prototype.onMouseup_ = function (event) {                                                                // 1718
    this.blur_();                                                                                                      // 1719
};                                                                                                                     // 1720
/**                                                                                                                    // 1721
   * Update classes.                                                                                                   // 1722
   *                                                                                                                   // 1723
   * @private                                                                                                          // 1724
   */                                                                                                                  // 1725
MaterialRadio.prototype.updateClasses_ = function () {                                                                 // 1726
    this.checkDisabled();                                                                                              // 1727
    this.checkToggleState();                                                                                           // 1728
};                                                                                                                     // 1729
/**                                                                                                                    // 1730
   * Add blur.                                                                                                         // 1731
   *                                                                                                                   // 1732
   * @private                                                                                                          // 1733
   */                                                                                                                  // 1734
MaterialRadio.prototype.blur_ = function () {                                                                          // 1735
    // TODO: figure out why there's a focus event being fired after our blur,                                          // 1736
    // so that we can avoid this hack.                                                                                 // 1737
    window.setTimeout(function () {                                                                                    // 1738
        this.btnElement_.blur();                                                                                       // 1739
    }.bind(this), this.Constant_.TINY_TIMEOUT);                                                                        // 1740
};                                                                                                                     // 1741
// Public methods.                                                                                                     // 1742
/**                                                                                                                    // 1743
   * Check the components disabled state.                                                                              // 1744
   *                                                                                                                   // 1745
   * @public                                                                                                           // 1746
   */                                                                                                                  // 1747
MaterialRadio.prototype.checkDisabled = function () {                                                                  // 1748
    if (this.btnElement_.disabled) {                                                                                   // 1749
        this.element_.classList.add(this.CssClasses_.IS_DISABLED);                                                     // 1750
    } else {                                                                                                           // 1751
        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);                                                  // 1752
    }                                                                                                                  // 1753
};                                                                                                                     // 1754
MaterialRadio.prototype['checkDisabled'] = MaterialRadio.prototype.checkDisabled;                                      // 1755
/**                                                                                                                    // 1756
   * Check the components toggled state.                                                                               // 1757
   *                                                                                                                   // 1758
   * @public                                                                                                           // 1759
   */                                                                                                                  // 1760
MaterialRadio.prototype.checkToggleState = function () {                                                               // 1761
    if (this.btnElement_.checked) {                                                                                    // 1762
        this.element_.classList.add(this.CssClasses_.IS_CHECKED);                                                      // 1763
    } else {                                                                                                           // 1764
        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);                                                   // 1765
    }                                                                                                                  // 1766
};                                                                                                                     // 1767
MaterialRadio.prototype['checkToggleState'] = MaterialRadio.prototype.checkToggleState;                                // 1768
/**                                                                                                                    // 1769
   * Disable radio.                                                                                                    // 1770
   *                                                                                                                   // 1771
   * @public                                                                                                           // 1772
   */                                                                                                                  // 1773
MaterialRadio.prototype.disable = function () {                                                                        // 1774
    this.btnElement_.disabled = true;                                                                                  // 1775
    this.updateClasses_();                                                                                             // 1776
};                                                                                                                     // 1777
MaterialRadio.prototype['disable'] = MaterialRadio.prototype.disable;                                                  // 1778
/**                                                                                                                    // 1779
   * Enable radio.                                                                                                     // 1780
   *                                                                                                                   // 1781
   * @public                                                                                                           // 1782
   */                                                                                                                  // 1783
MaterialRadio.prototype.enable = function () {                                                                         // 1784
    this.btnElement_.disabled = false;                                                                                 // 1785
    this.updateClasses_();                                                                                             // 1786
};                                                                                                                     // 1787
MaterialRadio.prototype['enable'] = MaterialRadio.prototype.enable;                                                    // 1788
/**                                                                                                                    // 1789
   * Check radio.                                                                                                      // 1790
   *                                                                                                                   // 1791
   * @public                                                                                                           // 1792
   */                                                                                                                  // 1793
MaterialRadio.prototype.check = function () {                                                                          // 1794
    this.btnElement_.checked = true;                                                                                   // 1795
    this.updateClasses_();                                                                                             // 1796
};                                                                                                                     // 1797
MaterialRadio.prototype['check'] = MaterialRadio.prototype.check;                                                      // 1798
/**                                                                                                                    // 1799
   * Uncheck radio.                                                                                                    // 1800
   *                                                                                                                   // 1801
   * @public                                                                                                           // 1802
   */                                                                                                                  // 1803
MaterialRadio.prototype.uncheck = function () {                                                                        // 1804
    this.btnElement_.checked = false;                                                                                  // 1805
    this.updateClasses_();                                                                                             // 1806
};                                                                                                                     // 1807
MaterialRadio.prototype['uncheck'] = MaterialRadio.prototype.uncheck;                                                  // 1808
/**                                                                                                                    // 1809
   * Initialize element.                                                                                               // 1810
   */                                                                                                                  // 1811
MaterialRadio.prototype.init = function () {                                                                           // 1812
    if (this.element_) {                                                                                               // 1813
        this.btnElement_ = this.element_.querySelector('.' + this.CssClasses_.RADIO_BTN);                              // 1814
        this.boundChangeHandler_ = this.onChange_.bind(this);                                                          // 1815
        this.boundFocusHandler_ = this.onChange_.bind(this);                                                           // 1816
        this.boundBlurHandler_ = this.onBlur_.bind(this);                                                              // 1817
        this.boundMouseUpHandler_ = this.onMouseup_.bind(this);                                                        // 1818
        var outerCircle = document.createElement('span');                                                              // 1819
        outerCircle.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);                                                // 1820
        var innerCircle = document.createElement('span');                                                              // 1821
        innerCircle.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE);                                                // 1822
        this.element_.appendChild(outerCircle);                                                                        // 1823
        this.element_.appendChild(innerCircle);                                                                        // 1824
        var rippleContainer;                                                                                           // 1825
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {                                        // 1826
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);                                        // 1827
            rippleContainer = document.createElement('span');                                                          // 1828
            rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);                                          // 1829
            rippleContainer.classList.add(this.CssClasses_.RIPPLE_EFFECT);                                             // 1830
            rippleContainer.classList.add(this.CssClasses_.RIPPLE_CENTER);                                             // 1831
            rippleContainer.addEventListener('mouseup', this.boundMouseUpHandler_);                                    // 1832
            var ripple = document.createElement('span');                                                               // 1833
            ripple.classList.add(this.CssClasses_.RIPPLE);                                                             // 1834
            rippleContainer.appendChild(ripple);                                                                       // 1835
            this.element_.appendChild(rippleContainer);                                                                // 1836
        }                                                                                                              // 1837
        this.btnElement_.addEventListener('change', this.boundChangeHandler_);                                         // 1838
        this.btnElement_.addEventListener('focus', this.boundFocusHandler_);                                           // 1839
        this.btnElement_.addEventListener('blur', this.boundBlurHandler_);                                             // 1840
        this.element_.addEventListener('mouseup', this.boundMouseUpHandler_);                                          // 1841
        this.updateClasses_();                                                                                         // 1842
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);                                                     // 1843
    }                                                                                                                  // 1844
};                                                                                                                     // 1845
// The component registers itself. It can assume componentHandler is available                                         // 1846
// in the global scope.                                                                                                // 1847
componentHandler.register({                                                                                            // 1848
    constructor: MaterialRadio,                                                                                        // 1849
    classAsString: 'MaterialRadio',                                                                                    // 1850
    cssClass: 'mdl-js-radio',                                                                                          // 1851
    widget: true                                                                                                       // 1852
});                                                                                                                    // 1853
/**                                                                                                                    // 1854
 * @license                                                                                                            // 1855
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 1856
 *                                                                                                                     // 1857
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 1858
 * you may not use this file except in compliance with the License.                                                    // 1859
 * You may obtain a copy of the License at                                                                             // 1860
 *                                                                                                                     // 1861
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 1862
 *                                                                                                                     // 1863
 * Unless required by applicable law or agreed to in writing, software                                                 // 1864
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 1865
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 1866
 * See the License for the specific language governing permissions and                                                 // 1867
 * limitations under the License.                                                                                      // 1868
 */                                                                                                                    // 1869
/**                                                                                                                    // 1870
   * Class constructor for Slider MDL component.                                                                       // 1871
   * Implements MDL component design pattern defined at:                                                               // 1872
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 1873
   *                                                                                                                   // 1874
   * @constructor                                                                                                      // 1875
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 1876
   */                                                                                                                  // 1877
var MaterialSlider = function MaterialSlider(element) {                                                                // 1878
    this.element_ = element;                                                                                           // 1879
    // Browser feature detection.                                                                                      // 1880
    this.isIE_ = window.navigator.msPointerEnabled;                                                                    // 1881
    // Initialize instance.                                                                                            // 1882
    this.init();                                                                                                       // 1883
};                                                                                                                     // 1884
window['MaterialSlider'] = MaterialSlider;                                                                             // 1885
/**                                                                                                                    // 1886
   * Store constants in one place so they can be updated easily.                                                       // 1887
   *                                                                                                                   // 1888
   * @enum {string | number}                                                                                           // 1889
   * @private                                                                                                          // 1890
   */                                                                                                                  // 1891
MaterialSlider.prototype.Constant_ = {};                                                                               // 1892
/**                                                                                                                    // 1893
   * Store strings for class names defined by this component that are used in                                          // 1894
   * JavaScript. This allows us to simply change it in one place should we                                             // 1895
   * decide to modify at a later date.                                                                                 // 1896
   *                                                                                                                   // 1897
   * @enum {string}                                                                                                    // 1898
   * @private                                                                                                          // 1899
   */                                                                                                                  // 1900
MaterialSlider.prototype.CssClasses_ = {                                                                               // 1901
    IE_CONTAINER: 'mdl-slider__ie-container',                                                                          // 1902
    SLIDER_CONTAINER: 'mdl-slider__container',                                                                         // 1903
    BACKGROUND_FLEX: 'mdl-slider__background-flex',                                                                    // 1904
    BACKGROUND_LOWER: 'mdl-slider__background-lower',                                                                  // 1905
    BACKGROUND_UPPER: 'mdl-slider__background-upper',                                                                  // 1906
    IS_LOWEST_VALUE: 'is-lowest-value',                                                                                // 1907
    IS_UPGRADED: 'is-upgraded'                                                                                         // 1908
};                                                                                                                     // 1909
/**                                                                                                                    // 1910
   * Handle input on element.                                                                                          // 1911
   *                                                                                                                   // 1912
   * @param {Event} event The event that fired.                                                                        // 1913
   * @private                                                                                                          // 1914
   */                                                                                                                  // 1915
MaterialSlider.prototype.onInput_ = function (event) {                                                                 // 1916
    this.updateValueStyles_();                                                                                         // 1917
};                                                                                                                     // 1918
/**                                                                                                                    // 1919
   * Handle change on element.                                                                                         // 1920
   *                                                                                                                   // 1921
   * @param {Event} event The event that fired.                                                                        // 1922
   * @private                                                                                                          // 1923
   */                                                                                                                  // 1924
MaterialSlider.prototype.onChange_ = function (event) {                                                                // 1925
    this.updateValueStyles_();                                                                                         // 1926
};                                                                                                                     // 1927
/**                                                                                                                    // 1928
   * Handle mouseup on element.                                                                                        // 1929
   *                                                                                                                   // 1930
   * @param {Event} event The event that fired.                                                                        // 1931
   * @private                                                                                                          // 1932
   */                                                                                                                  // 1933
MaterialSlider.prototype.onMouseUp_ = function (event) {                                                               // 1934
    event.target.blur();                                                                                               // 1935
};                                                                                                                     // 1936
/**                                                                                                                    // 1937
   * Handle mousedown on container element.                                                                            // 1938
   * This handler is purpose is to not require the use to click                                                        // 1939
   * exactly on the 2px slider element, as FireFox seems to be very                                                    // 1940
   * strict about this.                                                                                                // 1941
   *                                                                                                                   // 1942
   * @param {Event} event The event that fired.                                                                        // 1943
   * @private                                                                                                          // 1944
   * @suppress {missingProperties}                                                                                     // 1945
   */                                                                                                                  // 1946
MaterialSlider.prototype.onContainerMouseDown_ = function (event) {                                                    // 1947
    // If this click is not on the parent element (but rather some child)                                              // 1948
    // ignore. It may still bubble up.                                                                                 // 1949
    if (event.target !== this.element_.parentElement) {                                                                // 1950
        return;                                                                                                        // 1951
    }                                                                                                                  // 1952
    // Discard the original event and create a new event that                                                          // 1953
    // is on the slider element.                                                                                       // 1954
    event.preventDefault();                                                                                            // 1955
    var newEvent = new MouseEvent('mousedown', {                                                                       // 1956
        target: event.target,                                                                                          // 1957
        buttons: event.buttons,                                                                                        // 1958
        clientX: event.clientX,                                                                                        // 1959
        clientY: this.element_.getBoundingClientRect().y                                                               // 1960
    });                                                                                                                // 1961
    this.element_.dispatchEvent(newEvent);                                                                             // 1962
};                                                                                                                     // 1963
/**                                                                                                                    // 1964
   * Handle updating of values.                                                                                        // 1965
   *                                                                                                                   // 1966
   * @private                                                                                                          // 1967
   */                                                                                                                  // 1968
MaterialSlider.prototype.updateValueStyles_ = function () {                                                            // 1969
    // Calculate and apply percentages to div structure behind slider.                                                 // 1970
    var fraction = (this.element_.value - this.element_.min) / (this.element_.max - this.element_.min);                // 1971
    if (fraction === 0) {                                                                                              // 1972
        this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE);                                                 // 1973
    } else {                                                                                                           // 1974
        this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE);                                              // 1975
    }                                                                                                                  // 1976
    if (!this.isIE_) {                                                                                                 // 1977
        this.backgroundLower_.style.flex = fraction;                                                                   // 1978
        this.backgroundLower_.style.webkitFlex = fraction;                                                             // 1979
        this.backgroundUpper_.style.flex = 1 - fraction;                                                               // 1980
        this.backgroundUpper_.style.webkitFlex = 1 - fraction;                                                         // 1981
    }                                                                                                                  // 1982
};                                                                                                                     // 1983
// Public methods.                                                                                                     // 1984
/**                                                                                                                    // 1985
   * Disable slider.                                                                                                   // 1986
   *                                                                                                                   // 1987
   * @public                                                                                                           // 1988
   */                                                                                                                  // 1989
MaterialSlider.prototype.disable = function () {                                                                       // 1990
    this.element_.disabled = true;                                                                                     // 1991
};                                                                                                                     // 1992
MaterialSlider.prototype['disable'] = MaterialSlider.prototype.disable;                                                // 1993
/**                                                                                                                    // 1994
   * Enable slider.                                                                                                    // 1995
   *                                                                                                                   // 1996
   * @public                                                                                                           // 1997
   */                                                                                                                  // 1998
MaterialSlider.prototype.enable = function () {                                                                        // 1999
    this.element_.disabled = false;                                                                                    // 2000
};                                                                                                                     // 2001
MaterialSlider.prototype['enable'] = MaterialSlider.prototype.enable;                                                  // 2002
/**                                                                                                                    // 2003
   * Update slider value.                                                                                              // 2004
   *                                                                                                                   // 2005
   * @param {number} value The value to which to set the control (optional).                                           // 2006
   * @public                                                                                                           // 2007
   */                                                                                                                  // 2008
MaterialSlider.prototype.change = function (value) {                                                                   // 2009
    if (typeof value !== 'undefined') {                                                                                // 2010
        this.element_.value = value;                                                                                   // 2011
    }                                                                                                                  // 2012
    this.updateValueStyles_();                                                                                         // 2013
};                                                                                                                     // 2014
MaterialSlider.prototype['change'] = MaterialSlider.prototype.change;                                                  // 2015
/**                                                                                                                    // 2016
   * Initialize element.                                                                                               // 2017
   */                                                                                                                  // 2018
MaterialSlider.prototype.init = function () {                                                                          // 2019
    if (this.element_) {                                                                                               // 2020
        if (this.isIE_) {                                                                                              // 2021
            // Since we need to specify a very large height in IE due to                                               // 2022
            // implementation limitations, we add a parent here that trims it down to                                  // 2023
            // a reasonable size.                                                                                      // 2024
            var containerIE = document.createElement('div');                                                           // 2025
            containerIE.classList.add(this.CssClasses_.IE_CONTAINER);                                                  // 2026
            this.element_.parentElement.insertBefore(containerIE, this.element_);                                      // 2027
            this.element_.parentElement.removeChild(this.element_);                                                    // 2028
            containerIE.appendChild(this.element_);                                                                    // 2029
        } else {                                                                                                       // 2030
            // For non-IE browsers, we need a div structure that sits behind the                                       // 2031
            // slider and allows us to style the left and right sides of it with                                       // 2032
            // different colors.                                                                                       // 2033
            var container = document.createElement('div');                                                             // 2034
            container.classList.add(this.CssClasses_.SLIDER_CONTAINER);                                                // 2035
            this.element_.parentElement.insertBefore(container, this.element_);                                        // 2036
            this.element_.parentElement.removeChild(this.element_);                                                    // 2037
            container.appendChild(this.element_);                                                                      // 2038
            var backgroundFlex = document.createElement('div');                                                        // 2039
            backgroundFlex.classList.add(this.CssClasses_.BACKGROUND_FLEX);                                            // 2040
            container.appendChild(backgroundFlex);                                                                     // 2041
            this.backgroundLower_ = document.createElement('div');                                                     // 2042
            this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER);                                    // 2043
            backgroundFlex.appendChild(this.backgroundLower_);                                                         // 2044
            this.backgroundUpper_ = document.createElement('div');                                                     // 2045
            this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER);                                    // 2046
            backgroundFlex.appendChild(this.backgroundUpper_);                                                         // 2047
        }                                                                                                              // 2048
        this.boundInputHandler = this.onInput_.bind(this);                                                             // 2049
        this.boundChangeHandler = this.onChange_.bind(this);                                                           // 2050
        this.boundMouseUpHandler = this.onMouseUp_.bind(this);                                                         // 2051
        this.boundContainerMouseDownHandler = this.onContainerMouseDown_.bind(this);                                   // 2052
        this.element_.addEventListener('input', this.boundInputHandler);                                               // 2053
        this.element_.addEventListener('change', this.boundChangeHandler);                                             // 2054
        this.element_.addEventListener('mouseup', this.boundMouseUpHandler);                                           // 2055
        this.element_.parentElement.addEventListener('mousedown', this.boundContainerMouseDownHandler);                // 2056
        this.updateValueStyles_();                                                                                     // 2057
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);                                                     // 2058
    }                                                                                                                  // 2059
};                                                                                                                     // 2060
// The component registers itself. It can assume componentHandler is available                                         // 2061
// in the global scope.                                                                                                // 2062
componentHandler.register({                                                                                            // 2063
    constructor: MaterialSlider,                                                                                       // 2064
    classAsString: 'MaterialSlider',                                                                                   // 2065
    cssClass: 'mdl-js-slider',                                                                                         // 2066
    widget: true                                                                                                       // 2067
});                                                                                                                    // 2068
/**                                                                                                                    // 2069
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 2070
 *                                                                                                                     // 2071
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 2072
 * you may not use this file except in compliance with the License.                                                    // 2073
 * You may obtain a copy of the License at                                                                             // 2074
 *                                                                                                                     // 2075
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 2076
 *                                                                                                                     // 2077
 * Unless required by applicable law or agreed to in writing, software                                                 // 2078
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 2079
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 2080
 * See the License for the specific language governing permissions and                                                 // 2081
 * limitations under the License.                                                                                      // 2082
 */                                                                                                                    // 2083
/**                                                                                                                    // 2084
   * Class constructor for Snackbar MDL component.                                                                     // 2085
   * Implements MDL component design pattern defined at:                                                               // 2086
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 2087
   *                                                                                                                   // 2088
   * @constructor                                                                                                      // 2089
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 2090
   */                                                                                                                  // 2091
var MaterialSnackbar = function MaterialSnackbar(element) {                                                            // 2092
    this.element_ = element;                                                                                           // 2093
    this.textElement_ = this.element_.querySelector('.' + this.cssClasses_.MESSAGE);                                   // 2094
    this.actionElement_ = this.element_.querySelector('.' + this.cssClasses_.ACTION);                                  // 2095
    if (!this.textElement_) {                                                                                          // 2096
        throw new Error('There must be a message element for a snackbar.');                                            // 2097
    }                                                                                                                  // 2098
    if (!this.actionElement_) {                                                                                        // 2099
        throw new Error('There must be an action element for a snackbar.');                                            // 2100
    }                                                                                                                  // 2101
    this.active = false;                                                                                               // 2102
    this.actionHandler_ = undefined;                                                                                   // 2103
    this.message_ = undefined;                                                                                         // 2104
    this.actionText_ = undefined;                                                                                      // 2105
    this.queuedNotifications_ = [];                                                                                    // 2106
    this.setActionHidden_(true);                                                                                       // 2107
};                                                                                                                     // 2108
window['MaterialSnackbar'] = MaterialSnackbar;                                                                         // 2109
/**                                                                                                                    // 2110
   * Store constants in one place so they can be updated easily.                                                       // 2111
   *                                                                                                                   // 2112
   * @enum {string | number}                                                                                           // 2113
   * @private                                                                                                          // 2114
   */                                                                                                                  // 2115
MaterialSnackbar.prototype.Constant_ = {                                                                               // 2116
    // The duration of the snackbar show/hide animation, in ms.                                                        // 2117
    ANIMATION_LENGTH: 250                                                                                              // 2118
};                                                                                                                     // 2119
/**                                                                                                                    // 2120
   * Store strings for class names defined by this component that are used in                                          // 2121
   * JavaScript. This allows us to simply change it in one place should we                                             // 2122
   * decide to modify at a later date.                                                                                 // 2123
   *                                                                                                                   // 2124
   * @enum {string}                                                                                                    // 2125
   * @private                                                                                                          // 2126
   */                                                                                                                  // 2127
MaterialSnackbar.prototype.cssClasses_ = {                                                                             // 2128
    SNACKBAR: 'mdl-snackbar',                                                                                          // 2129
    MESSAGE: 'mdl-snackbar__text',                                                                                     // 2130
    ACTION: 'mdl-snackbar__action',                                                                                    // 2131
    ACTIVE: 'mdl-snackbar--active'                                                                                     // 2132
};                                                                                                                     // 2133
/**                                                                                                                    // 2134
   * Display the snackbar.                                                                                             // 2135
   *                                                                                                                   // 2136
   * @private                                                                                                          // 2137
   */                                                                                                                  // 2138
MaterialSnackbar.prototype.displaySnackbar_ = function () {                                                            // 2139
    this.element_.setAttribute('aria-hidden', 'true');                                                                 // 2140
    if (this.actionHandler_) {                                                                                         // 2141
        this.actionElement_.textContent = this.actionText_;                                                            // 2142
        this.actionElement_.addEventListener('click', this.actionHandler_);                                            // 2143
        this.setActionHidden_(false);                                                                                  // 2144
    }                                                                                                                  // 2145
    this.textElement_.textContent = this.message_;                                                                     // 2146
    this.element_.classList.add(this.cssClasses_.ACTIVE);                                                              // 2147
    this.element_.setAttribute('aria-hidden', 'false');                                                                // 2148
    setTimeout(this.cleanup_.bind(this), this.timeout_);                                                               // 2149
};                                                                                                                     // 2150
/**                                                                                                                    // 2151
   * Show the snackbar.                                                                                                // 2152
   *                                                                                                                   // 2153
   * @param {Object} data The data for the notification.                                                               // 2154
   * @public                                                                                                           // 2155
   */                                                                                                                  // 2156
MaterialSnackbar.prototype.showSnackbar = function (data) {                                                            // 2157
    if (data === undefined) {                                                                                          // 2158
        throw new Error('Please provide a data object with at least a message to display.');                           // 2159
    }                                                                                                                  // 2160
    if (data['message'] === undefined) {                                                                               // 2161
        throw new Error('Please provide a message to be displayed.');                                                  // 2162
    }                                                                                                                  // 2163
    if (data['actionHandler'] && !data['actionText']) {                                                                // 2164
        throw new Error('Please provide action text with the handler.');                                               // 2165
    }                                                                                                                  // 2166
    if (this.active) {                                                                                                 // 2167
        this.queuedNotifications_.push(data);                                                                          // 2168
    } else {                                                                                                           // 2169
        this.active = true;                                                                                            // 2170
        this.message_ = data['message'];                                                                               // 2171
        if (data['timeout']) {                                                                                         // 2172
            this.timeout_ = data['timeout'];                                                                           // 2173
        } else {                                                                                                       // 2174
            this.timeout_ = 2750;                                                                                      // 2175
        }                                                                                                              // 2176
        if (data['actionHandler']) {                                                                                   // 2177
            this.actionHandler_ = data['actionHandler'];                                                               // 2178
        }                                                                                                              // 2179
        if (data['actionText']) {                                                                                      // 2180
            this.actionText_ = data['actionText'];                                                                     // 2181
        }                                                                                                              // 2182
        this.displaySnackbar_();                                                                                       // 2183
    }                                                                                                                  // 2184
};                                                                                                                     // 2185
MaterialSnackbar.prototype['showSnackbar'] = MaterialSnackbar.prototype.showSnackbar;                                  // 2186
/**                                                                                                                    // 2187
   * Check if the queue has items within it.                                                                           // 2188
   * If it does, display the next entry.                                                                               // 2189
   *                                                                                                                   // 2190
   * @private                                                                                                          // 2191
   */                                                                                                                  // 2192
MaterialSnackbar.prototype.checkQueue_ = function () {                                                                 // 2193
    if (this.queuedNotifications_.length > 0) {                                                                        // 2194
        this.showSnackbar(this.queuedNotifications_.shift());                                                          // 2195
    }                                                                                                                  // 2196
};                                                                                                                     // 2197
/**                                                                                                                    // 2198
   * Cleanup the snackbar event listeners and accessiblity attributes.                                                 // 2199
   *                                                                                                                   // 2200
   * @private                                                                                                          // 2201
   */                                                                                                                  // 2202
MaterialSnackbar.prototype.cleanup_ = function () {                                                                    // 2203
    this.element_.classList.remove(this.cssClasses_.ACTIVE);                                                           // 2204
    setTimeout(function () {                                                                                           // 2205
        this.element_.setAttribute('aria-hidden', 'true');                                                             // 2206
        this.textElement_.textContent = '';                                                                            // 2207
        if (!Boolean(this.actionElement_.getAttribute('aria-hidden'))) {                                               // 2208
            this.setActionHidden_(true);                                                                               // 2209
            this.actionElement_.textContent = '';                                                                      // 2210
            this.actionElement_.removeEventListener('click', this.actionHandler_);                                     // 2211
        }                                                                                                              // 2212
        this.actionHandler_ = undefined;                                                                               // 2213
        this.message_ = undefined;                                                                                     // 2214
        this.actionText_ = undefined;                                                                                  // 2215
        this.active = false;                                                                                           // 2216
        this.checkQueue_();                                                                                            // 2217
    }.bind(this), this.Constant_.ANIMATION_LENGTH);                                                                    // 2218
};                                                                                                                     // 2219
/**                                                                                                                    // 2220
   * Set the action handler hidden state.                                                                              // 2221
   *                                                                                                                   // 2222
   * @param {boolean} value                                                                                            // 2223
   * @private                                                                                                          // 2224
   */                                                                                                                  // 2225
MaterialSnackbar.prototype.setActionHidden_ = function (value) {                                                       // 2226
    if (value) {                                                                                                       // 2227
        this.actionElement_.setAttribute('aria-hidden', 'true');                                                       // 2228
    } else {                                                                                                           // 2229
        this.actionElement_.removeAttribute('aria-hidden');                                                            // 2230
    }                                                                                                                  // 2231
};                                                                                                                     // 2232
// The component registers itself. It can assume componentHandler is available                                         // 2233
// in the global scope.                                                                                                // 2234
componentHandler.register({                                                                                            // 2235
    constructor: MaterialSnackbar,                                                                                     // 2236
    classAsString: 'MaterialSnackbar',                                                                                 // 2237
    cssClass: 'mdl-js-snackbar',                                                                                       // 2238
    widget: true                                                                                                       // 2239
});                                                                                                                    // 2240
/**                                                                                                                    // 2241
 * @license                                                                                                            // 2242
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 2243
 *                                                                                                                     // 2244
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 2245
 * you may not use this file except in compliance with the License.                                                    // 2246
 * You may obtain a copy of the License at                                                                             // 2247
 *                                                                                                                     // 2248
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 2249
 *                                                                                                                     // 2250
 * Unless required by applicable law or agreed to in writing, software                                                 // 2251
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 2252
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 2253
 * See the License for the specific language governing permissions and                                                 // 2254
 * limitations under the License.                                                                                      // 2255
 */                                                                                                                    // 2256
/**                                                                                                                    // 2257
   * Class constructor for Spinner MDL component.                                                                      // 2258
   * Implements MDL component design pattern defined at:                                                               // 2259
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 2260
   *                                                                                                                   // 2261
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 2262
   * @constructor                                                                                                      // 2263
   */                                                                                                                  // 2264
var MaterialSpinner = function MaterialSpinner(element) {                                                              // 2265
    this.element_ = element;                                                                                           // 2266
    // Initialize instance.                                                                                            // 2267
    this.init();                                                                                                       // 2268
};                                                                                                                     // 2269
window['MaterialSpinner'] = MaterialSpinner;                                                                           // 2270
/**                                                                                                                    // 2271
   * Store constants in one place so they can be updated easily.                                                       // 2272
   *                                                                                                                   // 2273
   * @enum {string | number}                                                                                           // 2274
   * @private                                                                                                          // 2275
   */                                                                                                                  // 2276
MaterialSpinner.prototype.Constant_ = { MDL_SPINNER_LAYER_COUNT: 4 };                                                  // 2277
/**                                                                                                                    // 2278
   * Store strings for class names defined by this component that are used in                                          // 2279
   * JavaScript. This allows us to simply change it in one place should we                                             // 2280
   * decide to modify at a later date.                                                                                 // 2281
   *                                                                                                                   // 2282
   * @enum {string}                                                                                                    // 2283
   * @private                                                                                                          // 2284
   */                                                                                                                  // 2285
MaterialSpinner.prototype.CssClasses_ = {                                                                              // 2286
    MDL_SPINNER_LAYER: 'mdl-spinner__layer',                                                                           // 2287
    MDL_SPINNER_CIRCLE_CLIPPER: 'mdl-spinner__circle-clipper',                                                         // 2288
    MDL_SPINNER_CIRCLE: 'mdl-spinner__circle',                                                                         // 2289
    MDL_SPINNER_GAP_PATCH: 'mdl-spinner__gap-patch',                                                                   // 2290
    MDL_SPINNER_LEFT: 'mdl-spinner__left',                                                                             // 2291
    MDL_SPINNER_RIGHT: 'mdl-spinner__right'                                                                            // 2292
};                                                                                                                     // 2293
/**                                                                                                                    // 2294
   * Auxiliary method to create a spinner layer.                                                                       // 2295
   *                                                                                                                   // 2296
   * @param {number} index Index of the layer to be created.                                                           // 2297
   * @public                                                                                                           // 2298
   */                                                                                                                  // 2299
MaterialSpinner.prototype.createLayer = function (index) {                                                             // 2300
    var layer = document.createElement('div');                                                                         // 2301
    layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER);                                                           // 2302
    layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER + '-' + index);                                             // 2303
    var leftClipper = document.createElement('div');                                                                   // 2304
    leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);                                            // 2305
    leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);                                                      // 2306
    var gapPatch = document.createElement('div');                                                                      // 2307
    gapPatch.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);                                                    // 2308
    var rightClipper = document.createElement('div');                                                                  // 2309
    rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);                                           // 2310
    rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);                                                    // 2311
    var circleOwners = [                                                                                               // 2312
        leftClipper,                                                                                                   // 2313
        gapPatch,                                                                                                      // 2314
        rightClipper                                                                                                   // 2315
    ];                                                                                                                 // 2316
    for (var i = 0; i < circleOwners.length; i++) {                                                                    // 2317
        var circle = document.createElement('div');                                                                    // 2318
        circle.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE);                                                     // 2319
        circleOwners[i].appendChild(circle);                                                                           // 2320
    }                                                                                                                  // 2321
    layer.appendChild(leftClipper);                                                                                    // 2322
    layer.appendChild(gapPatch);                                                                                       // 2323
    layer.appendChild(rightClipper);                                                                                   // 2324
    this.element_.appendChild(layer);                                                                                  // 2325
};                                                                                                                     // 2326
MaterialSpinner.prototype['createLayer'] = MaterialSpinner.prototype.createLayer;                                      // 2327
/**                                                                                                                    // 2328
   * Stops the spinner animation.                                                                                      // 2329
   * Public method for users who need to stop the spinner for any reason.                                              // 2330
   *                                                                                                                   // 2331
   * @public                                                                                                           // 2332
   */                                                                                                                  // 2333
MaterialSpinner.prototype.stop = function () {                                                                         // 2334
    this.element_.classList.remove('is-active');                                                                       // 2335
};                                                                                                                     // 2336
MaterialSpinner.prototype['stop'] = MaterialSpinner.prototype.stop;                                                    // 2337
/**                                                                                                                    // 2338
   * Starts the spinner animation.                                                                                     // 2339
   * Public method for users who need to manually start the spinner for any reason                                     // 2340
   * (instead of just adding the 'is-active' class to their markup).                                                   // 2341
   *                                                                                                                   // 2342
   * @public                                                                                                           // 2343
   */                                                                                                                  // 2344
MaterialSpinner.prototype.start = function () {                                                                        // 2345
    this.element_.classList.add('is-active');                                                                          // 2346
};                                                                                                                     // 2347
MaterialSpinner.prototype['start'] = MaterialSpinner.prototype.start;                                                  // 2348
/**                                                                                                                    // 2349
   * Initialize element.                                                                                               // 2350
   */                                                                                                                  // 2351
MaterialSpinner.prototype.init = function () {                                                                         // 2352
    if (this.element_) {                                                                                               // 2353
        for (var i = 1; i <= this.Constant_.MDL_SPINNER_LAYER_COUNT; i++) {                                            // 2354
            this.createLayer(i);                                                                                       // 2355
        }                                                                                                              // 2356
        this.element_.classList.add('is-upgraded');                                                                    // 2357
    }                                                                                                                  // 2358
};                                                                                                                     // 2359
// The component registers itself. It can assume componentHandler is available                                         // 2360
// in the global scope.                                                                                                // 2361
componentHandler.register({                                                                                            // 2362
    constructor: MaterialSpinner,                                                                                      // 2363
    classAsString: 'MaterialSpinner',                                                                                  // 2364
    cssClass: 'mdl-js-spinner',                                                                                        // 2365
    widget: true                                                                                                       // 2366
});                                                                                                                    // 2367
/**                                                                                                                    // 2368
 * @license                                                                                                            // 2369
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 2370
 *                                                                                                                     // 2371
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 2372
 * you may not use this file except in compliance with the License.                                                    // 2373
 * You may obtain a copy of the License at                                                                             // 2374
 *                                                                                                                     // 2375
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 2376
 *                                                                                                                     // 2377
 * Unless required by applicable law or agreed to in writing, software                                                 // 2378
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 2379
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 2380
 * See the License for the specific language governing permissions and                                                 // 2381
 * limitations under the License.                                                                                      // 2382
 */                                                                                                                    // 2383
/**                                                                                                                    // 2384
   * Class constructor for Checkbox MDL component.                                                                     // 2385
   * Implements MDL component design pattern defined at:                                                               // 2386
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 2387
   *                                                                                                                   // 2388
   * @constructor                                                                                                      // 2389
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 2390
   */                                                                                                                  // 2391
var MaterialSwitch = function MaterialSwitch(element) {                                                                // 2392
    this.element_ = element;                                                                                           // 2393
    // Initialize instance.                                                                                            // 2394
    this.init();                                                                                                       // 2395
};                                                                                                                     // 2396
window['MaterialSwitch'] = MaterialSwitch;                                                                             // 2397
/**                                                                                                                    // 2398
   * Store constants in one place so they can be updated easily.                                                       // 2399
   *                                                                                                                   // 2400
   * @enum {string | number}                                                                                           // 2401
   * @private                                                                                                          // 2402
   */                                                                                                                  // 2403
MaterialSwitch.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };                                                          // 2404
/**                                                                                                                    // 2405
   * Store strings for class names defined by this component that are used in                                          // 2406
   * JavaScript. This allows us to simply change it in one place should we                                             // 2407
   * decide to modify at a later date.                                                                                 // 2408
   *                                                                                                                   // 2409
   * @enum {string}                                                                                                    // 2410
   * @private                                                                                                          // 2411
   */                                                                                                                  // 2412
MaterialSwitch.prototype.CssClasses_ = {                                                                               // 2413
    INPUT: 'mdl-switch__input',                                                                                        // 2414
    TRACK: 'mdl-switch__track',                                                                                        // 2415
    THUMB: 'mdl-switch__thumb',                                                                                        // 2416
    FOCUS_HELPER: 'mdl-switch__focus-helper',                                                                          // 2417
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',                                                                             // 2418
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',                                                       // 2419
    RIPPLE_CONTAINER: 'mdl-switch__ripple-container',                                                                  // 2420
    RIPPLE_CENTER: 'mdl-ripple--center',                                                                               // 2421
    RIPPLE: 'mdl-ripple',                                                                                              // 2422
    IS_FOCUSED: 'is-focused',                                                                                          // 2423
    IS_DISABLED: 'is-disabled',                                                                                        // 2424
    IS_CHECKED: 'is-checked'                                                                                           // 2425
};                                                                                                                     // 2426
/**                                                                                                                    // 2427
   * Handle change of state.                                                                                           // 2428
   *                                                                                                                   // 2429
   * @param {Event} event The event that fired.                                                                        // 2430
   * @private                                                                                                          // 2431
   */                                                                                                                  // 2432
MaterialSwitch.prototype.onChange_ = function (event) {                                                                // 2433
    this.updateClasses_();                                                                                             // 2434
};                                                                                                                     // 2435
/**                                                                                                                    // 2436
   * Handle focus of element.                                                                                          // 2437
   *                                                                                                                   // 2438
   * @param {Event} event The event that fired.                                                                        // 2439
   * @private                                                                                                          // 2440
   */                                                                                                                  // 2441
MaterialSwitch.prototype.onFocus_ = function (event) {                                                                 // 2442
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);                                                          // 2443
};                                                                                                                     // 2444
/**                                                                                                                    // 2445
   * Handle lost focus of element.                                                                                     // 2446
   *                                                                                                                   // 2447
   * @param {Event} event The event that fired.                                                                        // 2448
   * @private                                                                                                          // 2449
   */                                                                                                                  // 2450
MaterialSwitch.prototype.onBlur_ = function (event) {                                                                  // 2451
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);                                                       // 2452
};                                                                                                                     // 2453
/**                                                                                                                    // 2454
   * Handle mouseup.                                                                                                   // 2455
   *                                                                                                                   // 2456
   * @param {Event} event The event that fired.                                                                        // 2457
   * @private                                                                                                          // 2458
   */                                                                                                                  // 2459
MaterialSwitch.prototype.onMouseUp_ = function (event) {                                                               // 2460
    this.blur_();                                                                                                      // 2461
};                                                                                                                     // 2462
/**                                                                                                                    // 2463
   * Handle class updates.                                                                                             // 2464
   *                                                                                                                   // 2465
   * @private                                                                                                          // 2466
   */                                                                                                                  // 2467
MaterialSwitch.prototype.updateClasses_ = function () {                                                                // 2468
    this.checkDisabled();                                                                                              // 2469
    this.checkToggleState();                                                                                           // 2470
};                                                                                                                     // 2471
/**                                                                                                                    // 2472
   * Add blur.                                                                                                         // 2473
   *                                                                                                                   // 2474
   * @private                                                                                                          // 2475
   */                                                                                                                  // 2476
MaterialSwitch.prototype.blur_ = function () {                                                                         // 2477
    // TODO: figure out why there's a focus event being fired after our blur,                                          // 2478
    // so that we can avoid this hack.                                                                                 // 2479
    window.setTimeout(function () {                                                                                    // 2480
        this.inputElement_.blur();                                                                                     // 2481
    }.bind(this), this.Constant_.TINY_TIMEOUT);                                                                        // 2482
};                                                                                                                     // 2483
// Public methods.                                                                                                     // 2484
/**                                                                                                                    // 2485
   * Check the components disabled state.                                                                              // 2486
   *                                                                                                                   // 2487
   * @public                                                                                                           // 2488
   */                                                                                                                  // 2489
MaterialSwitch.prototype.checkDisabled = function () {                                                                 // 2490
    if (this.inputElement_.disabled) {                                                                                 // 2491
        this.element_.classList.add(this.CssClasses_.IS_DISABLED);                                                     // 2492
    } else {                                                                                                           // 2493
        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);                                                  // 2494
    }                                                                                                                  // 2495
};                                                                                                                     // 2496
MaterialSwitch.prototype['checkDisabled'] = MaterialSwitch.prototype.checkDisabled;                                    // 2497
/**                                                                                                                    // 2498
   * Check the components toggled state.                                                                               // 2499
   *                                                                                                                   // 2500
   * @public                                                                                                           // 2501
   */                                                                                                                  // 2502
MaterialSwitch.prototype.checkToggleState = function () {                                                              // 2503
    if (this.inputElement_.checked) {                                                                                  // 2504
        this.element_.classList.add(this.CssClasses_.IS_CHECKED);                                                      // 2505
    } else {                                                                                                           // 2506
        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);                                                   // 2507
    }                                                                                                                  // 2508
};                                                                                                                     // 2509
MaterialSwitch.prototype['checkToggleState'] = MaterialSwitch.prototype.checkToggleState;                              // 2510
/**                                                                                                                    // 2511
   * Disable switch.                                                                                                   // 2512
   *                                                                                                                   // 2513
   * @public                                                                                                           // 2514
   */                                                                                                                  // 2515
MaterialSwitch.prototype.disable = function () {                                                                       // 2516
    this.inputElement_.disabled = true;                                                                                // 2517
    this.updateClasses_();                                                                                             // 2518
};                                                                                                                     // 2519
MaterialSwitch.prototype['disable'] = MaterialSwitch.prototype.disable;                                                // 2520
/**                                                                                                                    // 2521
   * Enable switch.                                                                                                    // 2522
   *                                                                                                                   // 2523
   * @public                                                                                                           // 2524
   */                                                                                                                  // 2525
MaterialSwitch.prototype.enable = function () {                                                                        // 2526
    this.inputElement_.disabled = false;                                                                               // 2527
    this.updateClasses_();                                                                                             // 2528
};                                                                                                                     // 2529
MaterialSwitch.prototype['enable'] = MaterialSwitch.prototype.enable;                                                  // 2530
/**                                                                                                                    // 2531
   * Activate switch.                                                                                                  // 2532
   *                                                                                                                   // 2533
   * @public                                                                                                           // 2534
   */                                                                                                                  // 2535
MaterialSwitch.prototype.on = function () {                                                                            // 2536
    this.inputElement_.checked = true;                                                                                 // 2537
    this.updateClasses_();                                                                                             // 2538
};                                                                                                                     // 2539
MaterialSwitch.prototype['on'] = MaterialSwitch.prototype.on;                                                          // 2540
/**                                                                                                                    // 2541
   * Deactivate switch.                                                                                                // 2542
   *                                                                                                                   // 2543
   * @public                                                                                                           // 2544
   */                                                                                                                  // 2545
MaterialSwitch.prototype.off = function () {                                                                           // 2546
    this.inputElement_.checked = false;                                                                                // 2547
    this.updateClasses_();                                                                                             // 2548
};                                                                                                                     // 2549
MaterialSwitch.prototype['off'] = MaterialSwitch.prototype.off;                                                        // 2550
/**                                                                                                                    // 2551
   * Initialize element.                                                                                               // 2552
   */                                                                                                                  // 2553
MaterialSwitch.prototype.init = function () {                                                                          // 2554
    if (this.element_) {                                                                                               // 2555
        this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);                                // 2556
        var track = document.createElement('div');                                                                     // 2557
        track.classList.add(this.CssClasses_.TRACK);                                                                   // 2558
        var thumb = document.createElement('div');                                                                     // 2559
        thumb.classList.add(this.CssClasses_.THUMB);                                                                   // 2560
        var focusHelper = document.createElement('span');                                                              // 2561
        focusHelper.classList.add(this.CssClasses_.FOCUS_HELPER);                                                      // 2562
        thumb.appendChild(focusHelper);                                                                                // 2563
        this.element_.appendChild(track);                                                                              // 2564
        this.element_.appendChild(thumb);                                                                              // 2565
        this.boundMouseUpHandler = this.onMouseUp_.bind(this);                                                         // 2566
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {                                        // 2567
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);                                        // 2568
            this.rippleContainerElement_ = document.createElement('span');                                             // 2569
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);                             // 2570
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT);                                // 2571
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);                                // 2572
            this.rippleContainerElement_.addEventListener('mouseup', this.boundMouseUpHandler);                        // 2573
            var ripple = document.createElement('span');                                                               // 2574
            ripple.classList.add(this.CssClasses_.RIPPLE);                                                             // 2575
            this.rippleContainerElement_.appendChild(ripple);                                                          // 2576
            this.element_.appendChild(this.rippleContainerElement_);                                                   // 2577
        }                                                                                                              // 2578
        this.boundChangeHandler = this.onChange_.bind(this);                                                           // 2579
        this.boundFocusHandler = this.onFocus_.bind(this);                                                             // 2580
        this.boundBlurHandler = this.onBlur_.bind(this);                                                               // 2581
        this.inputElement_.addEventListener('change', this.boundChangeHandler);                                        // 2582
        this.inputElement_.addEventListener('focus', this.boundFocusHandler);                                          // 2583
        this.inputElement_.addEventListener('blur', this.boundBlurHandler);                                            // 2584
        this.element_.addEventListener('mouseup', this.boundMouseUpHandler);                                           // 2585
        this.updateClasses_();                                                                                         // 2586
        this.element_.classList.add('is-upgraded');                                                                    // 2587
    }                                                                                                                  // 2588
};                                                                                                                     // 2589
// The component registers itself. It can assume componentHandler is available                                         // 2590
// in the global scope.                                                                                                // 2591
componentHandler.register({                                                                                            // 2592
    constructor: MaterialSwitch,                                                                                       // 2593
    classAsString: 'MaterialSwitch',                                                                                   // 2594
    cssClass: 'mdl-js-switch',                                                                                         // 2595
    widget: true                                                                                                       // 2596
});                                                                                                                    // 2597
/**                                                                                                                    // 2598
 * @license                                                                                                            // 2599
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 2600
 *                                                                                                                     // 2601
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 2602
 * you may not use this file except in compliance with the License.                                                    // 2603
 * You may obtain a copy of the License at                                                                             // 2604
 *                                                                                                                     // 2605
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 2606
 *                                                                                                                     // 2607
 * Unless required by applicable law or agreed to in writing, software                                                 // 2608
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 2609
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 2610
 * See the License for the specific language governing permissions and                                                 // 2611
 * limitations under the License.                                                                                      // 2612
 */                                                                                                                    // 2613
/**                                                                                                                    // 2614
   * Class constructor for Tabs MDL component.                                                                         // 2615
   * Implements MDL component design pattern defined at:                                                               // 2616
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 2617
   *                                                                                                                   // 2618
   * @constructor                                                                                                      // 2619
   * @param {Element} element The element that will be upgraded.                                                       // 2620
   */                                                                                                                  // 2621
var MaterialTabs = function MaterialTabs(element) {                                                                    // 2622
    // Stores the HTML element.                                                                                        // 2623
    this.element_ = element;                                                                                           // 2624
    // Initialize instance.                                                                                            // 2625
    this.init();                                                                                                       // 2626
};                                                                                                                     // 2627
window['MaterialTabs'] = MaterialTabs;                                                                                 // 2628
/**                                                                                                                    // 2629
   * Store constants in one place so they can be updated easily.                                                       // 2630
   *                                                                                                                   // 2631
   * @enum {string}                                                                                                    // 2632
   * @private                                                                                                          // 2633
   */                                                                                                                  // 2634
MaterialTabs.prototype.Constant_ = {};                                                                                 // 2635
/**                                                                                                                    // 2636
   * Store strings for class names defined by this component that are used in                                          // 2637
   * JavaScript. This allows us to simply change it in one place should we                                             // 2638
   * decide to modify at a later date.                                                                                 // 2639
   *                                                                                                                   // 2640
   * @enum {string}                                                                                                    // 2641
   * @private                                                                                                          // 2642
   */                                                                                                                  // 2643
MaterialTabs.prototype.CssClasses_ = {                                                                                 // 2644
    TAB_CLASS: 'mdl-tabs__tab',                                                                                        // 2645
    PANEL_CLASS: 'mdl-tabs__panel',                                                                                    // 2646
    ACTIVE_CLASS: 'is-active',                                                                                         // 2647
    UPGRADED_CLASS: 'is-upgraded',                                                                                     // 2648
    MDL_JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',                                                                      // 2649
    MDL_RIPPLE_CONTAINER: 'mdl-tabs__ripple-container',                                                                // 2650
    MDL_RIPPLE: 'mdl-ripple',                                                                                          // 2651
    MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events'                                          // 2652
};                                                                                                                     // 2653
/**                                                                                                                    // 2654
   * Handle clicks to a tabs component                                                                                 // 2655
   *                                                                                                                   // 2656
   * @private                                                                                                          // 2657
   */                                                                                                                  // 2658
MaterialTabs.prototype.initTabs_ = function () {                                                                       // 2659
    if (this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {                                     // 2660
        this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS);                              // 2661
    }                                                                                                                  // 2662
    // Select element tabs, document panels                                                                            // 2663
    this.tabs_ = this.element_.querySelectorAll('.' + this.CssClasses_.TAB_CLASS);                                     // 2664
    this.panels_ = this.element_.querySelectorAll('.' + this.CssClasses_.PANEL_CLASS);                                 // 2665
    // Create new tabs for each tab element                                                                            // 2666
    for (var i = 0; i < this.tabs_.length; i++) {                                                                      // 2667
        new MaterialTab(this.tabs_[i], this);                                                                          // 2668
    }                                                                                                                  // 2669
    this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS);                                                      // 2670
};                                                                                                                     // 2671
/**                                                                                                                    // 2672
   * Reset tab state, dropping active classes                                                                          // 2673
   *                                                                                                                   // 2674
   * @private                                                                                                          // 2675
   */                                                                                                                  // 2676
MaterialTabs.prototype.resetTabState_ = function () {                                                                  // 2677
    for (var k = 0; k < this.tabs_.length; k++) {                                                                      // 2678
        this.tabs_[k].classList.remove(this.CssClasses_.ACTIVE_CLASS);                                                 // 2679
    }                                                                                                                  // 2680
};                                                                                                                     // 2681
/**                                                                                                                    // 2682
   * Reset panel state, droping active classes                                                                         // 2683
   *                                                                                                                   // 2684
   * @private                                                                                                          // 2685
   */                                                                                                                  // 2686
MaterialTabs.prototype.resetPanelState_ = function () {                                                                // 2687
    for (var j = 0; j < this.panels_.length; j++) {                                                                    // 2688
        this.panels_[j].classList.remove(this.CssClasses_.ACTIVE_CLASS);                                               // 2689
    }                                                                                                                  // 2690
};                                                                                                                     // 2691
/**                                                                                                                    // 2692
   * Initialize element.                                                                                               // 2693
   */                                                                                                                  // 2694
MaterialTabs.prototype.init = function () {                                                                            // 2695
    if (this.element_) {                                                                                               // 2696
        this.initTabs_();                                                                                              // 2697
    }                                                                                                                  // 2698
};                                                                                                                     // 2699
/**                                                                                                                    // 2700
   * Constructor for an individual tab.                                                                                // 2701
   *                                                                                                                   // 2702
   * @constructor                                                                                                      // 2703
   * @param {Element} tab The HTML element for the tab.                                                                // 2704
   * @param {MaterialTabs} ctx The MaterialTabs object that owns the tab.                                              // 2705
   */                                                                                                                  // 2706
function MaterialTab(tab, ctx) {                                                                                       // 2707
    if (tab) {                                                                                                         // 2708
        if (ctx.element_.classList.contains(ctx.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {                                   // 2709
            var rippleContainer = document.createElement('span');                                                      // 2710
            rippleContainer.classList.add(ctx.CssClasses_.MDL_RIPPLE_CONTAINER);                                       // 2711
            rippleContainer.classList.add(ctx.CssClasses_.MDL_JS_RIPPLE_EFFECT);                                       // 2712
            var ripple = document.createElement('span');                                                               // 2713
            ripple.classList.add(ctx.CssClasses_.MDL_RIPPLE);                                                          // 2714
            rippleContainer.appendChild(ripple);                                                                       // 2715
            tab.appendChild(rippleContainer);                                                                          // 2716
        }                                                                                                              // 2717
        tab.addEventListener('click', function (e) {                                                                   // 2718
            e.preventDefault();                                                                                        // 2719
            var href = tab.href.split('#')[1];                                                                         // 2720
            var panel = ctx.element_.querySelector('#' + href);                                                        // 2721
            ctx.resetTabState_();                                                                                      // 2722
            ctx.resetPanelState_();                                                                                    // 2723
            tab.classList.add(ctx.CssClasses_.ACTIVE_CLASS);                                                           // 2724
            panel.classList.add(ctx.CssClasses_.ACTIVE_CLASS);                                                         // 2725
        });                                                                                                            // 2726
    }                                                                                                                  // 2727
}                                                                                                                      // 2728
// The component registers itself. It can assume componentHandler is available                                         // 2729
// in the global scope.                                                                                                // 2730
componentHandler.register({                                                                                            // 2731
    constructor: MaterialTabs,                                                                                         // 2732
    classAsString: 'MaterialTabs',                                                                                     // 2733
    cssClass: 'mdl-js-tabs'                                                                                            // 2734
});                                                                                                                    // 2735
/**                                                                                                                    // 2736
 * @license                                                                                                            // 2737
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 2738
 *                                                                                                                     // 2739
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 2740
 * you may not use this file except in compliance with the License.                                                    // 2741
 * You may obtain a copy of the License at                                                                             // 2742
 *                                                                                                                     // 2743
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 2744
 *                                                                                                                     // 2745
 * Unless required by applicable law or agreed to in writing, software                                                 // 2746
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 2747
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 2748
 * See the License for the specific language governing permissions and                                                 // 2749
 * limitations under the License.                                                                                      // 2750
 */                                                                                                                    // 2751
/**                                                                                                                    // 2752
   * Class constructor for Textfield MDL component.                                                                    // 2753
   * Implements MDL component design pattern defined at:                                                               // 2754
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 2755
   *                                                                                                                   // 2756
   * @constructor                                                                                                      // 2757
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 2758
   */                                                                                                                  // 2759
var MaterialTextfield = function MaterialTextfield(element) {                                                          // 2760
    this.element_ = element;                                                                                           // 2761
    this.maxRows = this.Constant_.NO_MAX_ROWS;                                                                         // 2762
    // Initialize instance.                                                                                            // 2763
    this.init();                                                                                                       // 2764
};                                                                                                                     // 2765
window['MaterialTextfield'] = MaterialTextfield;                                                                       // 2766
/**                                                                                                                    // 2767
   * Store constants in one place so they can be updated easily.                                                       // 2768
   *                                                                                                                   // 2769
   * @enum {string | number}                                                                                           // 2770
   * @private                                                                                                          // 2771
   */                                                                                                                  // 2772
MaterialTextfield.prototype.Constant_ = {                                                                              // 2773
    NO_MAX_ROWS: -1,                                                                                                   // 2774
    MAX_ROWS_ATTRIBUTE: 'maxrows'                                                                                      // 2775
};                                                                                                                     // 2776
/**                                                                                                                    // 2777
   * Store strings for class names defined by this component that are used in                                          // 2778
   * JavaScript. This allows us to simply change it in one place should we                                             // 2779
   * decide to modify at a later date.                                                                                 // 2780
   *                                                                                                                   // 2781
   * @enum {string}                                                                                                    // 2782
   * @private                                                                                                          // 2783
   */                                                                                                                  // 2784
MaterialTextfield.prototype.CssClasses_ = {                                                                            // 2785
    LABEL: 'mdl-textfield__label',                                                                                     // 2786
    INPUT: 'mdl-textfield__input',                                                                                     // 2787
    IS_DIRTY: 'is-dirty',                                                                                              // 2788
    IS_FOCUSED: 'is-focused',                                                                                          // 2789
    IS_DISABLED: 'is-disabled',                                                                                        // 2790
    IS_INVALID: 'is-invalid',                                                                                          // 2791
    IS_UPGRADED: 'is-upgraded',                                                                                        // 2792
    HAS_PLACEHOLDER: 'has-placeholder'                                                                                 // 2793
};                                                                                                                     // 2794
/**                                                                                                                    // 2795
   * Handle input being entered.                                                                                       // 2796
   *                                                                                                                   // 2797
   * @param {Event} event The event that fired.                                                                        // 2798
   * @private                                                                                                          // 2799
   */                                                                                                                  // 2800
MaterialTextfield.prototype.onKeyDown_ = function (event) {                                                            // 2801
    var currentRowCount = event.target.value.split('\n').length;                                                       // 2802
    if (event.keyCode === 13) {                                                                                        // 2803
        if (currentRowCount >= this.maxRows) {                                                                         // 2804
            event.preventDefault();                                                                                    // 2805
        }                                                                                                              // 2806
    }                                                                                                                  // 2807
};                                                                                                                     // 2808
/**                                                                                                                    // 2809
   * Handle focus.                                                                                                     // 2810
   *                                                                                                                   // 2811
   * @param {Event} event The event that fired.                                                                        // 2812
   * @private                                                                                                          // 2813
   */                                                                                                                  // 2814
MaterialTextfield.prototype.onFocus_ = function (event) {                                                              // 2815
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);                                                          // 2816
};                                                                                                                     // 2817
/**                                                                                                                    // 2818
   * Handle lost focus.                                                                                                // 2819
   *                                                                                                                   // 2820
   * @param {Event} event The event that fired.                                                                        // 2821
   * @private                                                                                                          // 2822
   */                                                                                                                  // 2823
MaterialTextfield.prototype.onBlur_ = function (event) {                                                               // 2824
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);                                                       // 2825
};                                                                                                                     // 2826
/**                                                                                                                    // 2827
   * Handle reset event from out side.                                                                                 // 2828
   *                                                                                                                   // 2829
   * @param {Event} event The event that fired.                                                                        // 2830
   * @private                                                                                                          // 2831
   */                                                                                                                  // 2832
MaterialTextfield.prototype.onReset_ = function (event) {                                                              // 2833
    this.updateClasses_();                                                                                             // 2834
};                                                                                                                     // 2835
/**                                                                                                                    // 2836
   * Handle class updates.                                                                                             // 2837
   *                                                                                                                   // 2838
   * @private                                                                                                          // 2839
   */                                                                                                                  // 2840
MaterialTextfield.prototype.updateClasses_ = function () {                                                             // 2841
    this.checkDisabled();                                                                                              // 2842
    this.checkValidity();                                                                                              // 2843
    this.checkDirty();                                                                                                 // 2844
    this.checkFocus();                                                                                                 // 2845
};                                                                                                                     // 2846
// Public methods.                                                                                                     // 2847
/**                                                                                                                    // 2848
   * Check the disabled state and update field accordingly.                                                            // 2849
   *                                                                                                                   // 2850
   * @public                                                                                                           // 2851
   */                                                                                                                  // 2852
MaterialTextfield.prototype.checkDisabled = function () {                                                              // 2853
    if (this.input_.disabled) {                                                                                        // 2854
        this.element_.classList.add(this.CssClasses_.IS_DISABLED);                                                     // 2855
    } else {                                                                                                           // 2856
        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);                                                  // 2857
    }                                                                                                                  // 2858
};                                                                                                                     // 2859
MaterialTextfield.prototype['checkDisabled'] = MaterialTextfield.prototype.checkDisabled;                              // 2860
/**                                                                                                                    // 2861
  * Check the focus state and update field accordingly.                                                                // 2862
  *                                                                                                                    // 2863
  * @public                                                                                                            // 2864
  */                                                                                                                   // 2865
MaterialTextfield.prototype.checkFocus = function () {                                                                 // 2866
    if (Boolean(this.element_.querySelector(':focus'))) {                                                              // 2867
        this.element_.classList.add(this.CssClasses_.IS_FOCUSED);                                                      // 2868
    } else {                                                                                                           // 2869
        this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);                                                   // 2870
    }                                                                                                                  // 2871
};                                                                                                                     // 2872
MaterialTextfield.prototype['checkFocus'] = MaterialTextfield.prototype.checkFocus;                                    // 2873
/**                                                                                                                    // 2874
   * Check the validity state and update field accordingly.                                                            // 2875
   *                                                                                                                   // 2876
   * @public                                                                                                           // 2877
   */                                                                                                                  // 2878
MaterialTextfield.prototype.checkValidity = function () {                                                              // 2879
    if (this.input_.validity) {                                                                                        // 2880
        if (this.input_.validity.valid) {                                                                              // 2881
            this.element_.classList.remove(this.CssClasses_.IS_INVALID);                                               // 2882
        } else {                                                                                                       // 2883
            this.element_.classList.add(this.CssClasses_.IS_INVALID);                                                  // 2884
        }                                                                                                              // 2885
    }                                                                                                                  // 2886
};                                                                                                                     // 2887
MaterialTextfield.prototype['checkValidity'] = MaterialTextfield.prototype.checkValidity;                              // 2888
/**                                                                                                                    // 2889
   * Check the dirty state and update field accordingly.                                                               // 2890
   *                                                                                                                   // 2891
   * @public                                                                                                           // 2892
   */                                                                                                                  // 2893
MaterialTextfield.prototype.checkDirty = function () {                                                                 // 2894
    if (this.input_.value && this.input_.value.length > 0) {                                                           // 2895
        this.element_.classList.add(this.CssClasses_.IS_DIRTY);                                                        // 2896
    } else {                                                                                                           // 2897
        this.element_.classList.remove(this.CssClasses_.IS_DIRTY);                                                     // 2898
    }                                                                                                                  // 2899
};                                                                                                                     // 2900
MaterialTextfield.prototype['checkDirty'] = MaterialTextfield.prototype.checkDirty;                                    // 2901
/**                                                                                                                    // 2902
   * Disable text field.                                                                                               // 2903
   *                                                                                                                   // 2904
   * @public                                                                                                           // 2905
   */                                                                                                                  // 2906
MaterialTextfield.prototype.disable = function () {                                                                    // 2907
    this.input_.disabled = true;                                                                                       // 2908
    this.updateClasses_();                                                                                             // 2909
};                                                                                                                     // 2910
MaterialTextfield.prototype['disable'] = MaterialTextfield.prototype.disable;                                          // 2911
/**                                                                                                                    // 2912
   * Enable text field.                                                                                                // 2913
   *                                                                                                                   // 2914
   * @public                                                                                                           // 2915
   */                                                                                                                  // 2916
MaterialTextfield.prototype.enable = function () {                                                                     // 2917
    this.input_.disabled = false;                                                                                      // 2918
    this.updateClasses_();                                                                                             // 2919
};                                                                                                                     // 2920
MaterialTextfield.prototype['enable'] = MaterialTextfield.prototype.enable;                                            // 2921
/**                                                                                                                    // 2922
   * Update text field value.                                                                                          // 2923
   *                                                                                                                   // 2924
   * @param {string} value The value to which to set the control (optional).                                           // 2925
   * @public                                                                                                           // 2926
   */                                                                                                                  // 2927
MaterialTextfield.prototype.change = function (value) {                                                                // 2928
    this.input_.value = value || '';                                                                                   // 2929
    this.updateClasses_();                                                                                             // 2930
};                                                                                                                     // 2931
MaterialTextfield.prototype['change'] = MaterialTextfield.prototype.change;                                            // 2932
/**                                                                                                                    // 2933
   * Initialize element.                                                                                               // 2934
   */                                                                                                                  // 2935
MaterialTextfield.prototype.init = function () {                                                                       // 2936
    if (this.element_) {                                                                                               // 2937
        this.label_ = this.element_.querySelector('.' + this.CssClasses_.LABEL);                                       // 2938
        this.input_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);                                       // 2939
        if (this.input_) {                                                                                             // 2940
            if (this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)) {                                         // 2941
                this.maxRows = parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE), 10);              // 2942
                if (isNaN(this.maxRows)) {                                                                             // 2943
                    this.maxRows = this.Constant_.NO_MAX_ROWS;                                                         // 2944
                }                                                                                                      // 2945
            }                                                                                                          // 2946
            if (this.input_.hasAttribute('placeholder')) {                                                             // 2947
                this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER);                                         // 2948
            }                                                                                                          // 2949
            this.boundUpdateClassesHandler = this.updateClasses_.bind(this);                                           // 2950
            this.boundFocusHandler = this.onFocus_.bind(this);                                                         // 2951
            this.boundBlurHandler = this.onBlur_.bind(this);                                                           // 2952
            this.boundResetHandler = this.onReset_.bind(this);                                                         // 2953
            this.input_.addEventListener('input', this.boundUpdateClassesHandler);                                     // 2954
            this.input_.addEventListener('focus', this.boundFocusHandler);                                             // 2955
            this.input_.addEventListener('blur', this.boundBlurHandler);                                               // 2956
            this.input_.addEventListener('reset', this.boundResetHandler);                                             // 2957
            if (this.maxRows !== this.Constant_.NO_MAX_ROWS) {                                                         // 2958
                // TODO: This should handle pasting multi line text.                                                   // 2959
                // Currently doesn't.                                                                                  // 2960
                this.boundKeyDownHandler = this.onKeyDown_.bind(this);                                                 // 2961
                this.input_.addEventListener('keydown', this.boundKeyDownHandler);                                     // 2962
            }                                                                                                          // 2963
            var invalid = this.element_.classList.contains(this.CssClasses_.IS_INVALID);                               // 2964
            this.updateClasses_();                                                                                     // 2965
            this.element_.classList.add(this.CssClasses_.IS_UPGRADED);                                                 // 2966
            if (invalid) {                                                                                             // 2967
                this.element_.classList.add(this.CssClasses_.IS_INVALID);                                              // 2968
            }                                                                                                          // 2969
            if (this.input_.hasAttribute('autofocus')) {                                                               // 2970
                this.element_.focus();                                                                                 // 2971
                this.checkFocus();                                                                                     // 2972
            }                                                                                                          // 2973
        }                                                                                                              // 2974
    }                                                                                                                  // 2975
};                                                                                                                     // 2976
// The component registers itself. It can assume componentHandler is available                                         // 2977
// in the global scope.                                                                                                // 2978
componentHandler.register({                                                                                            // 2979
    constructor: MaterialTextfield,                                                                                    // 2980
    classAsString: 'MaterialTextfield',                                                                                // 2981
    cssClass: 'mdl-js-textfield',                                                                                      // 2982
    widget: true                                                                                                       // 2983
});                                                                                                                    // 2984
/**                                                                                                                    // 2985
 * @license                                                                                                            // 2986
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 2987
 *                                                                                                                     // 2988
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 2989
 * you may not use this file except in compliance with the License.                                                    // 2990
 * You may obtain a copy of the License at                                                                             // 2991
 *                                                                                                                     // 2992
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 2993
 *                                                                                                                     // 2994
 * Unless required by applicable law or agreed to in writing, software                                                 // 2995
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 2996
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 2997
 * See the License for the specific language governing permissions and                                                 // 2998
 * limitations under the License.                                                                                      // 2999
 */                                                                                                                    // 3000
/**                                                                                                                    // 3001
   * Class constructor for Tooltip MDL component.                                                                      // 3002
   * Implements MDL component design pattern defined at:                                                               // 3003
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 3004
   *                                                                                                                   // 3005
   * @constructor                                                                                                      // 3006
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 3007
   */                                                                                                                  // 3008
var MaterialTooltip = function MaterialTooltip(element) {                                                              // 3009
    this.element_ = element;                                                                                           // 3010
    // Initialize instance.                                                                                            // 3011
    this.init();                                                                                                       // 3012
};                                                                                                                     // 3013
window['MaterialTooltip'] = MaterialTooltip;                                                                           // 3014
/**                                                                                                                    // 3015
   * Store constants in one place so they can be updated easily.                                                       // 3016
   *                                                                                                                   // 3017
   * @enum {string | number}                                                                                           // 3018
   * @private                                                                                                          // 3019
   */                                                                                                                  // 3020
MaterialTooltip.prototype.Constant_ = {};                                                                              // 3021
/**                                                                                                                    // 3022
   * Store strings for class names defined by this component that are used in                                          // 3023
   * JavaScript. This allows us to simply change it in one place should we                                             // 3024
   * decide to modify at a later date.                                                                                 // 3025
   *                                                                                                                   // 3026
   * @enum {string}                                                                                                    // 3027
   * @private                                                                                                          // 3028
   */                                                                                                                  // 3029
MaterialTooltip.prototype.CssClasses_ = {                                                                              // 3030
    IS_ACTIVE: 'is-active',                                                                                            // 3031
    BOTTOM: 'mdl-tooltip--bottom',                                                                                     // 3032
    LEFT: 'mdl-tooltip--left',                                                                                         // 3033
    RIGHT: 'mdl-tooltip--right',                                                                                       // 3034
    TOP: 'mdl-tooltip--top'                                                                                            // 3035
};                                                                                                                     // 3036
/**                                                                                                                    // 3037
   * Handle mouseenter for tooltip.                                                                                    // 3038
   *                                                                                                                   // 3039
   * @param {Event} event The event that fired.                                                                        // 3040
   * @private                                                                                                          // 3041
   */                                                                                                                  // 3042
MaterialTooltip.prototype.handleMouseEnter_ = function (event) {                                                       // 3043
    var props = event.target.getBoundingClientRect();                                                                  // 3044
    var left = props.left + props.width / 2;                                                                           // 3045
    var top = props.top + props.height / 2;                                                                            // 3046
    var marginLeft = -1 * (this.element_.offsetWidth / 2);                                                             // 3047
    var marginTop = -1 * (this.element_.offsetHeight / 2);                                                             // 3048
    if (this.element_.classList.contains(this.CssClasses_.LEFT) || this.element_.classList.contains(this.CssClasses_.RIGHT)) {
        left = props.width / 2;                                                                                        // 3050
        if (top + marginTop < 0) {                                                                                     // 3051
            this.element_.style.top = 0;                                                                               // 3052
            this.element_.style.marginTop = 0;                                                                         // 3053
        } else {                                                                                                       // 3054
            this.element_.style.top = top + 'px';                                                                      // 3055
            this.element_.style.marginTop = marginTop + 'px';                                                          // 3056
        }                                                                                                              // 3057
    } else {                                                                                                           // 3058
        if (left + marginLeft < 0) {                                                                                   // 3059
            this.element_.style.left = 0;                                                                              // 3060
            this.element_.style.marginLeft = 0;                                                                        // 3061
        } else {                                                                                                       // 3062
            this.element_.style.left = left + 'px';                                                                    // 3063
            this.element_.style.marginLeft = marginLeft + 'px';                                                        // 3064
        }                                                                                                              // 3065
    }                                                                                                                  // 3066
    if (this.element_.classList.contains(this.CssClasses_.TOP)) {                                                      // 3067
        this.element_.style.top = props.top - this.element_.offsetHeight - 10 + 'px';                                  // 3068
    } else if (this.element_.classList.contains(this.CssClasses_.RIGHT)) {                                             // 3069
        this.element_.style.left = props.left + props.width + 10 + 'px';                                               // 3070
    } else if (this.element_.classList.contains(this.CssClasses_.LEFT)) {                                              // 3071
        this.element_.style.left = props.left - this.element_.offsetWidth - 10 + 'px';                                 // 3072
    } else {                                                                                                           // 3073
        this.element_.style.top = props.top + props.height + 10 + 'px';                                                // 3074
    }                                                                                                                  // 3075
    this.element_.classList.add(this.CssClasses_.IS_ACTIVE);                                                           // 3076
};                                                                                                                     // 3077
/**                                                                                                                    // 3078
   * Handle mouseleave for tooltip.                                                                                    // 3079
   *                                                                                                                   // 3080
   * @private                                                                                                          // 3081
   */                                                                                                                  // 3082
MaterialTooltip.prototype.handleMouseLeave_ = function () {                                                            // 3083
    this.element_.classList.remove(this.CssClasses_.IS_ACTIVE);                                                        // 3084
};                                                                                                                     // 3085
/**                                                                                                                    // 3086
   * Initialize element.                                                                                               // 3087
   */                                                                                                                  // 3088
MaterialTooltip.prototype.init = function () {                                                                         // 3089
    if (this.element_) {                                                                                               // 3090
        var forElId = this.element_.getAttribute('for');                                                               // 3091
        if (forElId) {                                                                                                 // 3092
            this.forElement_ = document.getElementById(forElId);                                                       // 3093
        }                                                                                                              // 3094
        if (this.forElement_) {                                                                                        // 3095
            // It's left here because it prevents accidental text selection on Android                                 // 3096
            if (!this.forElement_.hasAttribute('tabindex')) {                                                          // 3097
                this.forElement_.setAttribute('tabindex', '0');                                                        // 3098
            }                                                                                                          // 3099
            this.boundMouseEnterHandler = this.handleMouseEnter_.bind(this);                                           // 3100
            this.boundMouseLeaveHandler = this.handleMouseLeave_.bind(this);                                           // 3101
            this.forElement_.addEventListener('mouseenter', this.boundMouseEnterHandler, false);                       // 3102
            this.forElement_.addEventListener('touchend', this.boundMouseEnterHandler, false);                         // 3103
            this.forElement_.addEventListener('mouseleave', this.boundMouseLeaveHandler, false);                       // 3104
            window.addEventListener('touchstart', this.boundMouseLeaveHandler);                                        // 3105
        }                                                                                                              // 3106
    }                                                                                                                  // 3107
};                                                                                                                     // 3108
// The component registers itself. It can assume componentHandler is available                                         // 3109
// in the global scope.                                                                                                // 3110
componentHandler.register({                                                                                            // 3111
    constructor: MaterialTooltip,                                                                                      // 3112
    classAsString: 'MaterialTooltip',                                                                                  // 3113
    cssClass: 'mdl-tooltip'                                                                                            // 3114
});                                                                                                                    // 3115
/**                                                                                                                    // 3116
 * @license                                                                                                            // 3117
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 3118
 *                                                                                                                     // 3119
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 3120
 * you may not use this file except in compliance with the License.                                                    // 3121
 * You may obtain a copy of the License at                                                                             // 3122
 *                                                                                                                     // 3123
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 3124
 *                                                                                                                     // 3125
 * Unless required by applicable law or agreed to in writing, software                                                 // 3126
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 3127
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 3128
 * See the License for the specific language governing permissions and                                                 // 3129
 * limitations under the License.                                                                                      // 3130
 */                                                                                                                    // 3131
/**                                                                                                                    // 3132
   * Class constructor for Layout MDL component.                                                                       // 3133
   * Implements MDL component design pattern defined at:                                                               // 3134
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 3135
   *                                                                                                                   // 3136
   * @constructor                                                                                                      // 3137
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 3138
   */                                                                                                                  // 3139
var MaterialLayout = function MaterialLayout(element) {                                                                // 3140
    this.element_ = element;                                                                                           // 3141
    // Initialize instance.                                                                                            // 3142
    this.init();                                                                                                       // 3143
};                                                                                                                     // 3144
window['MaterialLayout'] = MaterialLayout;                                                                             // 3145
/**                                                                                                                    // 3146
   * Store constants in one place so they can be updated easily.                                                       // 3147
   *                                                                                                                   // 3148
   * @enum {string | number}                                                                                           // 3149
   * @private                                                                                                          // 3150
   */                                                                                                                  // 3151
MaterialLayout.prototype.Constant_ = {                                                                                 // 3152
    MAX_WIDTH: '(max-width: 1024px)',                                                                                  // 3153
    TAB_SCROLL_PIXELS: 100,                                                                                            // 3154
    RESIZE_TIMEOUT: 100,                                                                                               // 3155
    MENU_ICON: '&#xE5D2;',                                                                                             // 3156
    CHEVRON_LEFT: 'chevron_left',                                                                                      // 3157
    CHEVRON_RIGHT: 'chevron_right'                                                                                     // 3158
};                                                                                                                     // 3159
/**                                                                                                                    // 3160
   * Keycodes, for code readability.                                                                                   // 3161
   *                                                                                                                   // 3162
   * @enum {number}                                                                                                    // 3163
   * @private                                                                                                          // 3164
   */                                                                                                                  // 3165
MaterialLayout.prototype.Keycodes_ = {                                                                                 // 3166
    ENTER: 13,                                                                                                         // 3167
    ESCAPE: 27,                                                                                                        // 3168
    SPACE: 32                                                                                                          // 3169
};                                                                                                                     // 3170
/**                                                                                                                    // 3171
   * Modes.                                                                                                            // 3172
   *                                                                                                                   // 3173
   * @enum {number}                                                                                                    // 3174
   * @private                                                                                                          // 3175
   */                                                                                                                  // 3176
MaterialLayout.prototype.Mode_ = {                                                                                     // 3177
    STANDARD: 0,                                                                                                       // 3178
    SEAMED: 1,                                                                                                         // 3179
    WATERFALL: 2,                                                                                                      // 3180
    SCROLL: 3                                                                                                          // 3181
};                                                                                                                     // 3182
/**                                                                                                                    // 3183
   * Store strings for class names defined by this component that are used in                                          // 3184
   * JavaScript. This allows us to simply change it in one place should we                                             // 3185
   * decide to modify at a later date.                                                                                 // 3186
   *                                                                                                                   // 3187
   * @enum {string}                                                                                                    // 3188
   * @private                                                                                                          // 3189
   */                                                                                                                  // 3190
MaterialLayout.prototype.CssClasses_ = {                                                                               // 3191
    CONTAINER: 'mdl-layout__container',                                                                                // 3192
    HEADER: 'mdl-layout__header',                                                                                      // 3193
    DRAWER: 'mdl-layout__drawer',                                                                                      // 3194
    CONTENT: 'mdl-layout__content',                                                                                    // 3195
    DRAWER_BTN: 'mdl-layout__drawer-button',                                                                           // 3196
    ICON: 'material-icons',                                                                                            // 3197
    JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',                                                                          // 3198
    RIPPLE_CONTAINER: 'mdl-layout__tab-ripple-container',                                                              // 3199
    RIPPLE: 'mdl-ripple',                                                                                              // 3200
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',                                                       // 3201
    HEADER_SEAMED: 'mdl-layout__header--seamed',                                                                       // 3202
    HEADER_WATERFALL: 'mdl-layout__header--waterfall',                                                                 // 3203
    HEADER_SCROLL: 'mdl-layout__header--scroll',                                                                       // 3204
    FIXED_HEADER: 'mdl-layout--fixed-header',                                                                          // 3205
    OBFUSCATOR: 'mdl-layout__obfuscator',                                                                              // 3206
    TAB_BAR: 'mdl-layout__tab-bar',                                                                                    // 3207
    TAB_CONTAINER: 'mdl-layout__tab-bar-container',                                                                    // 3208
    TAB: 'mdl-layout__tab',                                                                                            // 3209
    TAB_BAR_BUTTON: 'mdl-layout__tab-bar-button',                                                                      // 3210
    TAB_BAR_LEFT_BUTTON: 'mdl-layout__tab-bar-left-button',                                                            // 3211
    TAB_BAR_RIGHT_BUTTON: 'mdl-layout__tab-bar-right-button',                                                          // 3212
    PANEL: 'mdl-layout__tab-panel',                                                                                    // 3213
    HAS_DRAWER: 'has-drawer',                                                                                          // 3214
    HAS_TABS: 'has-tabs',                                                                                              // 3215
    HAS_SCROLLING_HEADER: 'has-scrolling-header',                                                                      // 3216
    CASTING_SHADOW: 'is-casting-shadow',                                                                               // 3217
    IS_COMPACT: 'is-compact',                                                                                          // 3218
    IS_SMALL_SCREEN: 'is-small-screen',                                                                                // 3219
    IS_DRAWER_OPEN: 'is-visible',                                                                                      // 3220
    IS_ACTIVE: 'is-active',                                                                                            // 3221
    IS_UPGRADED: 'is-upgraded',                                                                                        // 3222
    IS_ANIMATING: 'is-animating',                                                                                      // 3223
    ON_LARGE_SCREEN: 'mdl-layout--large-screen-only',                                                                  // 3224
    ON_SMALL_SCREEN: 'mdl-layout--small-screen-only'                                                                   // 3225
};                                                                                                                     // 3226
/**                                                                                                                    // 3227
   * Handles scrolling on the content.                                                                                 // 3228
   *                                                                                                                   // 3229
   * @private                                                                                                          // 3230
   */                                                                                                                  // 3231
MaterialLayout.prototype.contentScrollHandler_ = function () {                                                         // 3232
    if (this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)) {                                              // 3233
        return;                                                                                                        // 3234
    }                                                                                                                  // 3235
    var headerVisible = !this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN) || this.element_.classList.contains(this.CssClasses_.FIXED_HEADER);
    if (this.content_.scrollTop > 0 && !this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {                // 3237
        this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);                                                   // 3238
        this.header_.classList.add(this.CssClasses_.IS_COMPACT);                                                       // 3239
        if (headerVisible) {                                                                                           // 3240
            this.header_.classList.add(this.CssClasses_.IS_ANIMATING);                                                 // 3241
        }                                                                                                              // 3242
    } else if (this.content_.scrollTop <= 0 && this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {         // 3243
        this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);                                                // 3244
        this.header_.classList.remove(this.CssClasses_.IS_COMPACT);                                                    // 3245
        if (headerVisible) {                                                                                           // 3246
            this.header_.classList.add(this.CssClasses_.IS_ANIMATING);                                                 // 3247
        }                                                                                                              // 3248
    }                                                                                                                  // 3249
};                                                                                                                     // 3250
/**                                                                                                                    // 3251
   * Handles a keyboard event on the drawer.                                                                           // 3252
   *                                                                                                                   // 3253
   * @param {Event} evt The event that fired.                                                                          // 3254
   * @private                                                                                                          // 3255
   */                                                                                                                  // 3256
MaterialLayout.prototype.keyboardEventHandler_ = function (evt) {                                                      // 3257
    // Only react when the drawer is open.                                                                             // 3258
    if (evt.keyCode === this.Keycodes_.ESCAPE && this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)) {   // 3259
        this.toggleDrawer();                                                                                           // 3260
    }                                                                                                                  // 3261
};                                                                                                                     // 3262
/**                                                                                                                    // 3263
   * Handles changes in screen size.                                                                                   // 3264
   *                                                                                                                   // 3265
   * @private                                                                                                          // 3266
   */                                                                                                                  // 3267
MaterialLayout.prototype.screenSizeHandler_ = function () {                                                            // 3268
    if (this.screenSizeMediaQuery_.matches) {                                                                          // 3269
        this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN);                                                 // 3270
    } else {                                                                                                           // 3271
        this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN);                                              // 3272
        // Collapse drawer (if any) when moving to a large screen size.                                                // 3273
        if (this.drawer_) {                                                                                            // 3274
            this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);                                            // 3275
            this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);                                        // 3276
        }                                                                                                              // 3277
    }                                                                                                                  // 3278
};                                                                                                                     // 3279
/**                                                                                                                    // 3280
   * Handles events of drawer button.                                                                                  // 3281
   *                                                                                                                   // 3282
   * @param {Event} evt The event that fired.                                                                          // 3283
   * @private                                                                                                          // 3284
   */                                                                                                                  // 3285
MaterialLayout.prototype.drawerToggleHandler_ = function (evt) {                                                       // 3286
    if (evt && evt.type === 'keydown') {                                                                               // 3287
        if (evt.keyCode === this.Keycodes_.SPACE || evt.keyCode === this.Keycodes_.ENTER) {                            // 3288
            // prevent scrolling in drawer nav                                                                         // 3289
            evt.preventDefault();                                                                                      // 3290
        } else {                                                                                                       // 3291
            // prevent other keys                                                                                      // 3292
            return;                                                                                                    // 3293
        }                                                                                                              // 3294
    }                                                                                                                  // 3295
    this.toggleDrawer();                                                                                               // 3296
};                                                                                                                     // 3297
/**                                                                                                                    // 3298
   * Handles (un)setting the `is-animating` class                                                                      // 3299
   *                                                                                                                   // 3300
   * @private                                                                                                          // 3301
   */                                                                                                                  // 3302
MaterialLayout.prototype.headerTransitionEndHandler_ = function () {                                                   // 3303
    this.header_.classList.remove(this.CssClasses_.IS_ANIMATING);                                                      // 3304
};                                                                                                                     // 3305
/**                                                                                                                    // 3306
   * Handles expanding the header on click                                                                             // 3307
   *                                                                                                                   // 3308
   * @private                                                                                                          // 3309
   */                                                                                                                  // 3310
MaterialLayout.prototype.headerClickHandler_ = function () {                                                           // 3311
    if (this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {                                                // 3312
        this.header_.classList.remove(this.CssClasses_.IS_COMPACT);                                                    // 3313
        this.header_.classList.add(this.CssClasses_.IS_ANIMATING);                                                     // 3314
    }                                                                                                                  // 3315
};                                                                                                                     // 3316
/**                                                                                                                    // 3317
   * Reset tab state, dropping active classes                                                                          // 3318
   *                                                                                                                   // 3319
   * @private                                                                                                          // 3320
   */                                                                                                                  // 3321
MaterialLayout.prototype.resetTabState_ = function (tabBar) {                                                          // 3322
    for (var k = 0; k < tabBar.length; k++) {                                                                          // 3323
        tabBar[k].classList.remove(this.CssClasses_.IS_ACTIVE);                                                        // 3324
    }                                                                                                                  // 3325
};                                                                                                                     // 3326
/**                                                                                                                    // 3327
   * Reset panel state, droping active classes                                                                         // 3328
   *                                                                                                                   // 3329
   * @private                                                                                                          // 3330
   */                                                                                                                  // 3331
MaterialLayout.prototype.resetPanelState_ = function (panels) {                                                        // 3332
    for (var j = 0; j < panels.length; j++) {                                                                          // 3333
        panels[j].classList.remove(this.CssClasses_.IS_ACTIVE);                                                        // 3334
    }                                                                                                                  // 3335
};                                                                                                                     // 3336
/**                                                                                                                    // 3337
  * Toggle drawer state                                                                                                // 3338
  *                                                                                                                    // 3339
  * @public                                                                                                            // 3340
  */                                                                                                                   // 3341
MaterialLayout.prototype.toggleDrawer = function () {                                                                  // 3342
    var drawerButton = this.element_.querySelector('.' + this.CssClasses_.DRAWER_BTN);                                 // 3343
    this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);                                                    // 3344
    this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);                                                // 3345
    // Set accessibility properties.                                                                                   // 3346
    if (this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)) {                                            // 3347
        this.drawer_.setAttribute('aria-hidden', 'false');                                                             // 3348
        drawerButton.setAttribute('aria-expanded', 'true');                                                            // 3349
    } else {                                                                                                           // 3350
        this.drawer_.setAttribute('aria-hidden', 'true');                                                              // 3351
        drawerButton.setAttribute('aria-expanded', 'false');                                                           // 3352
    }                                                                                                                  // 3353
};                                                                                                                     // 3354
MaterialLayout.prototype['toggleDrawer'] = MaterialLayout.prototype.toggleDrawer;                                      // 3355
/**                                                                                                                    // 3356
   * Initialize element.                                                                                               // 3357
   */                                                                                                                  // 3358
MaterialLayout.prototype.init = function () {                                                                          // 3359
    if (this.element_) {                                                                                               // 3360
        var container = document.createElement('div');                                                                 // 3361
        container.classList.add(this.CssClasses_.CONTAINER);                                                           // 3362
        var focusedElement = this.element_.querySelector(':focus');                                                    // 3363
        this.element_.parentElement.insertBefore(container, this.element_);                                            // 3364
        this.element_.parentElement.removeChild(this.element_);                                                        // 3365
        container.appendChild(this.element_);                                                                          // 3366
        if (focusedElement) {                                                                                          // 3367
            focusedElement.focus();                                                                                    // 3368
        }                                                                                                              // 3369
        var directChildren = this.element_.childNodes;                                                                 // 3370
        var numChildren = directChildren.length;                                                                       // 3371
        for (var c = 0; c < numChildren; c++) {                                                                        // 3372
            var child = directChildren[c];                                                                             // 3373
            if (child.classList && child.classList.contains(this.CssClasses_.HEADER)) {                                // 3374
                this.header_ = child;                                                                                  // 3375
            }                                                                                                          // 3376
            if (child.classList && child.classList.contains(this.CssClasses_.DRAWER)) {                                // 3377
                this.drawer_ = child;                                                                                  // 3378
            }                                                                                                          // 3379
            if (child.classList && child.classList.contains(this.CssClasses_.CONTENT)) {                               // 3380
                this.content_ = child;                                                                                 // 3381
            }                                                                                                          // 3382
        }                                                                                                              // 3383
        window.addEventListener('pageshow', function (e) {                                                             // 3384
            if (e.persisted) {                                                                                         // 3385
                // when page is loaded from back/forward cache                                                         // 3386
                // trigger repaint to let layout scroll in safari                                                      // 3387
                this.element_.style.overflowY = 'hidden';                                                              // 3388
                requestAnimationFrame(function () {                                                                    // 3389
                    this.element_.style.overflowY = '';                                                                // 3390
                }.bind(this));                                                                                         // 3391
            }                                                                                                          // 3392
        }.bind(this), false);                                                                                          // 3393
        if (this.header_) {                                                                                            // 3394
            this.tabBar_ = this.header_.querySelector('.' + this.CssClasses_.TAB_BAR);                                 // 3395
        }                                                                                                              // 3396
        var mode = this.Mode_.STANDARD;                                                                                // 3397
        if (this.header_) {                                                                                            // 3398
            if (this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)) {                                     // 3399
                mode = this.Mode_.SEAMED;                                                                              // 3400
            } else if (this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)) {                           // 3401
                mode = this.Mode_.WATERFALL;                                                                           // 3402
                this.header_.addEventListener('transitionend', this.headerTransitionEndHandler_.bind(this));           // 3403
                this.header_.addEventListener('click', this.headerClickHandler_.bind(this));                           // 3404
            } else if (this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)) {                              // 3405
                mode = this.Mode_.SCROLL;                                                                              // 3406
                container.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER);                                        // 3407
            }                                                                                                          // 3408
            if (mode === this.Mode_.STANDARD) {                                                                        // 3409
                this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);                                           // 3410
                if (this.tabBar_) {                                                                                    // 3411
                    this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW);                                       // 3412
                }                                                                                                      // 3413
            } else if (mode === this.Mode_.SEAMED || mode === this.Mode_.SCROLL) {                                     // 3414
                this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);                                        // 3415
                if (this.tabBar_) {                                                                                    // 3416
                    this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW);                                    // 3417
                }                                                                                                      // 3418
            } else if (mode === this.Mode_.WATERFALL) {                                                                // 3419
                // Add and remove shadows depending on scroll position.                                                // 3420
                // Also add/remove auxiliary class for styling of the compact version of                               // 3421
                // the header.                                                                                         // 3422
                this.content_.addEventListener('scroll', this.contentScrollHandler_.bind(this));                       // 3423
                this.contentScrollHandler_();                                                                          // 3424
            }                                                                                                          // 3425
        }                                                                                                              // 3426
        // Add drawer toggling button to our layout, if we have an openable drawer.                                    // 3427
        if (this.drawer_) {                                                                                            // 3428
            var drawerButton = this.element_.querySelector('.' + this.CssClasses_.DRAWER_BTN);                         // 3429
            if (!drawerButton) {                                                                                       // 3430
                drawerButton = document.createElement('div');                                                          // 3431
                drawerButton.setAttribute('aria-expanded', 'false');                                                   // 3432
                drawerButton.setAttribute('role', 'button');                                                           // 3433
                drawerButton.setAttribute('tabindex', '0');                                                            // 3434
                drawerButton.classList.add(this.CssClasses_.DRAWER_BTN);                                               // 3435
                var drawerButtonIcon = document.createElement('i');                                                    // 3436
                drawerButtonIcon.classList.add(this.CssClasses_.ICON);                                                 // 3437
                drawerButtonIcon.innerHTML = this.Constant_.MENU_ICON;                                                 // 3438
                drawerButton.appendChild(drawerButtonIcon);                                                            // 3439
            }                                                                                                          // 3440
            if (this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)) {                                   // 3441
                //If drawer has ON_LARGE_SCREEN class then add it to the drawer toggle button as well.                 // 3442
                drawerButton.classList.add(this.CssClasses_.ON_LARGE_SCREEN);                                          // 3443
            } else if (this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)) {                            // 3444
                //If drawer has ON_SMALL_SCREEN class then add it to the drawer toggle button as well.                 // 3445
                drawerButton.classList.add(this.CssClasses_.ON_SMALL_SCREEN);                                          // 3446
            }                                                                                                          // 3447
            drawerButton.addEventListener('click', this.drawerToggleHandler_.bind(this));                              // 3448
            drawerButton.addEventListener('keydown', this.drawerToggleHandler_.bind(this));                            // 3449
            // Add a class if the layout has a drawer, for altering the left padding.                                  // 3450
            // Adds the HAS_DRAWER to the elements since this.header_ may or may                                       // 3451
            // not be present.                                                                                         // 3452
            this.element_.classList.add(this.CssClasses_.HAS_DRAWER);                                                  // 3453
            // If we have a fixed header, add the button to the header rather than                                     // 3454
            // the layout.                                                                                             // 3455
            if (this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)) {                                     // 3456
                this.header_.insertBefore(drawerButton, this.header_.firstChild);                                      // 3457
            } else {                                                                                                   // 3458
                this.element_.insertBefore(drawerButton, this.content_);                                               // 3459
            }                                                                                                          // 3460
            var obfuscator = document.createElement('div');                                                            // 3461
            obfuscator.classList.add(this.CssClasses_.OBFUSCATOR);                                                     // 3462
            this.element_.appendChild(obfuscator);                                                                     // 3463
            obfuscator.addEventListener('click', this.drawerToggleHandler_.bind(this));                                // 3464
            this.obfuscator_ = obfuscator;                                                                             // 3465
            this.drawer_.addEventListener('keydown', this.keyboardEventHandler_.bind(this));                           // 3466
            this.drawer_.setAttribute('aria-hidden', 'true');                                                          // 3467
        }                                                                                                              // 3468
        // Keep an eye on screen size, and add/remove auxiliary class for styling                                      // 3469
        // of small screens.                                                                                           // 3470
        this.screenSizeMediaQuery_ = window.matchMedia(this.Constant_.MAX_WIDTH);                                      // 3471
        this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this));                                    // 3472
        this.screenSizeHandler_();                                                                                     // 3473
        // Initialize tabs, if any.                                                                                    // 3474
        if (this.header_ && this.tabBar_) {                                                                            // 3475
            this.element_.classList.add(this.CssClasses_.HAS_TABS);                                                    // 3476
            var tabContainer = document.createElement('div');                                                          // 3477
            tabContainer.classList.add(this.CssClasses_.TAB_CONTAINER);                                                // 3478
            this.header_.insertBefore(tabContainer, this.tabBar_);                                                     // 3479
            this.header_.removeChild(this.tabBar_);                                                                    // 3480
            var leftButton = document.createElement('div');                                                            // 3481
            leftButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);                                                 // 3482
            leftButton.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);                                            // 3483
            var leftButtonIcon = document.createElement('i');                                                          // 3484
            leftButtonIcon.classList.add(this.CssClasses_.ICON);                                                       // 3485
            leftButtonIcon.textContent = this.Constant_.CHEVRON_LEFT;                                                  // 3486
            leftButton.appendChild(leftButtonIcon);                                                                    // 3487
            leftButton.addEventListener('click', function () {                                                         // 3488
                this.tabBar_.scrollLeft -= this.Constant_.TAB_SCROLL_PIXELS;                                           // 3489
            }.bind(this));                                                                                             // 3490
            var rightButton = document.createElement('div');                                                           // 3491
            rightButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);                                                // 3492
            rightButton.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);                                          // 3493
            var rightButtonIcon = document.createElement('i');                                                         // 3494
            rightButtonIcon.classList.add(this.CssClasses_.ICON);                                                      // 3495
            rightButtonIcon.textContent = this.Constant_.CHEVRON_RIGHT;                                                // 3496
            rightButton.appendChild(rightButtonIcon);                                                                  // 3497
            rightButton.addEventListener('click', function () {                                                        // 3498
                this.tabBar_.scrollLeft += this.Constant_.TAB_SCROLL_PIXELS;                                           // 3499
            }.bind(this));                                                                                             // 3500
            tabContainer.appendChild(leftButton);                                                                      // 3501
            tabContainer.appendChild(this.tabBar_);                                                                    // 3502
            tabContainer.appendChild(rightButton);                                                                     // 3503
            // Add and remove tab buttons depending on scroll position and total                                       // 3504
            // window size.                                                                                            // 3505
            var tabUpdateHandler = function () {                                                                       // 3506
                if (this.tabBar_.scrollLeft > 0) {                                                                     // 3507
                    leftButton.classList.add(this.CssClasses_.IS_ACTIVE);                                              // 3508
                } else {                                                                                               // 3509
                    leftButton.classList.remove(this.CssClasses_.IS_ACTIVE);                                           // 3510
                }                                                                                                      // 3511
                if (this.tabBar_.scrollLeft < this.tabBar_.scrollWidth - this.tabBar_.offsetWidth) {                   // 3512
                    rightButton.classList.add(this.CssClasses_.IS_ACTIVE);                                             // 3513
                } else {                                                                                               // 3514
                    rightButton.classList.remove(this.CssClasses_.IS_ACTIVE);                                          // 3515
                }                                                                                                      // 3516
            }.bind(this);                                                                                              // 3517
            this.tabBar_.addEventListener('scroll', tabUpdateHandler);                                                 // 3518
            tabUpdateHandler();                                                                                        // 3519
            // Update tabs when the window resizes.                                                                    // 3520
            var windowResizeHandler = function () {                                                                    // 3521
                // Use timeouts to make sure it doesn't happen too often.                                              // 3522
                if (this.resizeTimeoutId_) {                                                                           // 3523
                    clearTimeout(this.resizeTimeoutId_);                                                               // 3524
                }                                                                                                      // 3525
                this.resizeTimeoutId_ = setTimeout(function () {                                                       // 3526
                    tabUpdateHandler();                                                                                // 3527
                    this.resizeTimeoutId_ = null;                                                                      // 3528
                }.bind(this), this.Constant_.RESIZE_TIMEOUT);                                                          // 3529
            }.bind(this);                                                                                              // 3530
            window.addEventListener('resize', windowResizeHandler);                                                    // 3531
            if (this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {                                  // 3532
                this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);                                     // 3533
            }                                                                                                          // 3534
            // Select element tabs, document panels                                                                    // 3535
            var tabs = this.tabBar_.querySelectorAll('.' + this.CssClasses_.TAB);                                      // 3536
            var panels = this.content_.querySelectorAll('.' + this.CssClasses_.PANEL);                                 // 3537
            // Create new tabs for each tab element                                                                    // 3538
            for (var i = 0; i < tabs.length; i++) {                                                                    // 3539
                new MaterialLayoutTab(tabs[i], tabs, panels, this);                                                    // 3540
            }                                                                                                          // 3541
        }                                                                                                              // 3542
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);                                                     // 3543
    }                                                                                                                  // 3544
};                                                                                                                     // 3545
/**                                                                                                                    // 3546
   * Constructor for an individual tab.                                                                                // 3547
   *                                                                                                                   // 3548
   * @constructor                                                                                                      // 3549
   * @param {HTMLElement} tab The HTML element for the tab.                                                            // 3550
   * @param {!Array<HTMLElement>} tabs Array with HTML elements for all tabs.                                          // 3551
   * @param {!Array<HTMLElement>} panels Array with HTML elements for all panels.                                      // 3552
   * @param {MaterialLayout} layout The MaterialLayout object that owns the tab.                                       // 3553
   */                                                                                                                  // 3554
function MaterialLayoutTab(tab, tabs, panels, layout) {                                                                // 3555
    /**                                                                                                                // 3556
     * Auxiliary method to programmatically select a tab in the UI.                                                    // 3557
     */                                                                                                                // 3558
    function selectTab() {                                                                                             // 3559
        var href = tab.href.split('#')[1];                                                                             // 3560
        var panel = layout.content_.querySelector('#' + href);                                                         // 3561
        layout.resetTabState_(tabs);                                                                                   // 3562
        layout.resetPanelState_(panels);                                                                               // 3563
        tab.classList.add(layout.CssClasses_.IS_ACTIVE);                                                               // 3564
        panel.classList.add(layout.CssClasses_.IS_ACTIVE);                                                             // 3565
    }                                                                                                                  // 3566
    if (layout.tabBar_.classList.contains(layout.CssClasses_.JS_RIPPLE_EFFECT)) {                                      // 3567
        var rippleContainer = document.createElement('span');                                                          // 3568
        rippleContainer.classList.add(layout.CssClasses_.RIPPLE_CONTAINER);                                            // 3569
        rippleContainer.classList.add(layout.CssClasses_.JS_RIPPLE_EFFECT);                                            // 3570
        var ripple = document.createElement('span');                                                                   // 3571
        ripple.classList.add(layout.CssClasses_.RIPPLE);                                                               // 3572
        rippleContainer.appendChild(ripple);                                                                           // 3573
        tab.appendChild(rippleContainer);                                                                              // 3574
    }                                                                                                                  // 3575
    tab.addEventListener('click', function (e) {                                                                       // 3576
        if (tab.getAttribute('href').charAt(0) === '#') {                                                              // 3577
            e.preventDefault();                                                                                        // 3578
            selectTab();                                                                                               // 3579
        }                                                                                                              // 3580
    });                                                                                                                // 3581
    tab.show = selectTab;                                                                                              // 3582
}                                                                                                                      // 3583
window['MaterialLayoutTab'] = MaterialLayoutTab;                                                                       // 3584
// The component registers itself. It can assume componentHandler is available                                         // 3585
// in the global scope.                                                                                                // 3586
componentHandler.register({                                                                                            // 3587
    constructor: MaterialLayout,                                                                                       // 3588
    classAsString: 'MaterialLayout',                                                                                   // 3589
    cssClass: 'mdl-js-layout'                                                                                          // 3590
});                                                                                                                    // 3591
/**                                                                                                                    // 3592
 * @license                                                                                                            // 3593
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 3594
 *                                                                                                                     // 3595
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 3596
 * you may not use this file except in compliance with the License.                                                    // 3597
 * You may obtain a copy of the License at                                                                             // 3598
 *                                                                                                                     // 3599
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 3600
 *                                                                                                                     // 3601
 * Unless required by applicable law or agreed to in writing, software                                                 // 3602
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 3603
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 3604
 * See the License for the specific language governing permissions and                                                 // 3605
 * limitations under the License.                                                                                      // 3606
 */                                                                                                                    // 3607
/**                                                                                                                    // 3608
   * Class constructor for Data Table Card MDL component.                                                              // 3609
   * Implements MDL component design pattern defined at:                                                               // 3610
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 3611
   *                                                                                                                   // 3612
   * @constructor                                                                                                      // 3613
   * @param {Element} element The element that will be upgraded.                                                       // 3614
   */                                                                                                                  // 3615
var MaterialDataTable = function MaterialDataTable(element) {                                                          // 3616
    this.element_ = element;                                                                                           // 3617
    // Initialize instance.                                                                                            // 3618
    this.init();                                                                                                       // 3619
};                                                                                                                     // 3620
window['MaterialDataTable'] = MaterialDataTable;                                                                       // 3621
/**                                                                                                                    // 3622
   * Store constants in one place so they can be updated easily.                                                       // 3623
   *                                                                                                                   // 3624
   * @enum {string | number}                                                                                           // 3625
   * @private                                                                                                          // 3626
   */                                                                                                                  // 3627
MaterialDataTable.prototype.Constant_ = {};                                                                            // 3628
/**                                                                                                                    // 3629
   * Store strings for class names defined by this component that are used in                                          // 3630
   * JavaScript. This allows us to simply change it in one place should we                                             // 3631
   * decide to modify at a later date.                                                                                 // 3632
   *                                                                                                                   // 3633
   * @enum {string}                                                                                                    // 3634
   * @private                                                                                                          // 3635
   */                                                                                                                  // 3636
MaterialDataTable.prototype.CssClasses_ = {                                                                            // 3637
    DATA_TABLE: 'mdl-data-table',                                                                                      // 3638
    SELECTABLE: 'mdl-data-table--selectable',                                                                          // 3639
    SELECT_ELEMENT: 'mdl-data-table__select',                                                                          // 3640
    IS_SELECTED: 'is-selected',                                                                                        // 3641
    IS_UPGRADED: 'is-upgraded'                                                                                         // 3642
};                                                                                                                     // 3643
/**                                                                                                                    // 3644
   * Generates and returns a function that toggles the selection state of a                                            // 3645
   * single row (or multiple rows).                                                                                    // 3646
   *                                                                                                                   // 3647
   * @param {Element} checkbox Checkbox that toggles the selection state.                                              // 3648
   * @param {Element} row Row to toggle when checkbox changes.                                                         // 3649
   * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.                                 // 3650
   * @private                                                                                                          // 3651
   */                                                                                                                  // 3652
MaterialDataTable.prototype.selectRow_ = function (checkbox, row, opt_rows) {                                          // 3653
    if (row) {                                                                                                         // 3654
        return function () {                                                                                           // 3655
            if (checkbox.checked) {                                                                                    // 3656
                row.classList.add(this.CssClasses_.IS_SELECTED);                                                       // 3657
            } else {                                                                                                   // 3658
                row.classList.remove(this.CssClasses_.IS_SELECTED);                                                    // 3659
            }                                                                                                          // 3660
        }.bind(this);                                                                                                  // 3661
    }                                                                                                                  // 3662
    if (opt_rows) {                                                                                                    // 3663
        return function () {                                                                                           // 3664
            var i;                                                                                                     // 3665
            var el;                                                                                                    // 3666
            if (checkbox.checked) {                                                                                    // 3667
                for (i = 0; i < opt_rows.length; i++) {                                                                // 3668
                    el = opt_rows[i].querySelector('td').querySelector('.mdl-checkbox');                               // 3669
                    el['MaterialCheckbox'].check();                                                                    // 3670
                    opt_rows[i].classList.add(this.CssClasses_.IS_SELECTED);                                           // 3671
                }                                                                                                      // 3672
            } else {                                                                                                   // 3673
                for (i = 0; i < opt_rows.length; i++) {                                                                // 3674
                    el = opt_rows[i].querySelector('td').querySelector('.mdl-checkbox');                               // 3675
                    el['MaterialCheckbox'].uncheck();                                                                  // 3676
                    opt_rows[i].classList.remove(this.CssClasses_.IS_SELECTED);                                        // 3677
                }                                                                                                      // 3678
            }                                                                                                          // 3679
        }.bind(this);                                                                                                  // 3680
    }                                                                                                                  // 3681
};                                                                                                                     // 3682
/**                                                                                                                    // 3683
   * Creates a checkbox for a single or or multiple rows and hooks up the                                              // 3684
   * event handling.                                                                                                   // 3685
   *                                                                                                                   // 3686
   * @param {Element} row Row to toggle when checkbox changes.                                                         // 3687
   * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.                                 // 3688
   * @private                                                                                                          // 3689
   */                                                                                                                  // 3690
MaterialDataTable.prototype.createCheckbox_ = function (row, opt_rows) {                                               // 3691
    var label = document.createElement('label');                                                                       // 3692
    var labelClasses = [                                                                                               // 3693
        'mdl-checkbox',                                                                                                // 3694
        'mdl-js-checkbox',                                                                                             // 3695
        'mdl-js-ripple-effect',                                                                                        // 3696
        this.CssClasses_.SELECT_ELEMENT                                                                                // 3697
    ];                                                                                                                 // 3698
    label.className = labelClasses.join(' ');                                                                          // 3699
    var checkbox = document.createElement('input');                                                                    // 3700
    checkbox.type = 'checkbox';                                                                                        // 3701
    checkbox.classList.add('mdl-checkbox__input');                                                                     // 3702
    if (row) {                                                                                                         // 3703
        checkbox.checked = row.classList.contains(this.CssClasses_.IS_SELECTED);                                       // 3704
        checkbox.addEventListener('change', this.selectRow_(checkbox, row));                                           // 3705
    } else if (opt_rows) {                                                                                             // 3706
        checkbox.addEventListener('change', this.selectRow_(checkbox, null, opt_rows));                                // 3707
    }                                                                                                                  // 3708
    label.appendChild(checkbox);                                                                                       // 3709
    componentHandler.upgradeElement(label, 'MaterialCheckbox');                                                        // 3710
    return label;                                                                                                      // 3711
};                                                                                                                     // 3712
/**                                                                                                                    // 3713
   * Initialize element.                                                                                               // 3714
   */                                                                                                                  // 3715
MaterialDataTable.prototype.init = function () {                                                                       // 3716
    if (this.element_) {                                                                                               // 3717
        var firstHeader = this.element_.querySelector('th');                                                           // 3718
        var bodyRows = Array.prototype.slice.call(this.element_.querySelectorAll('tbody tr'));                         // 3719
        var footRows = Array.prototype.slice.call(this.element_.querySelectorAll('tfoot tr'));                         // 3720
        var rows = bodyRows.concat(footRows);                                                                          // 3721
        if (this.element_.classList.contains(this.CssClasses_.SELECTABLE)) {                                           // 3722
            var th = document.createElement('th');                                                                     // 3723
            var headerCheckbox = this.createCheckbox_(null, rows);                                                     // 3724
            th.appendChild(headerCheckbox);                                                                            // 3725
            firstHeader.parentElement.insertBefore(th, firstHeader);                                                   // 3726
            for (var i = 0; i < rows.length; i++) {                                                                    // 3727
                var firstCell = rows[i].querySelector('td');                                                           // 3728
                if (firstCell) {                                                                                       // 3729
                    var td = document.createElement('td');                                                             // 3730
                    if (rows[i].parentNode.nodeName.toUpperCase() === 'TBODY') {                                       // 3731
                        var rowCheckbox = this.createCheckbox_(rows[i]);                                               // 3732
                        td.appendChild(rowCheckbox);                                                                   // 3733
                    }                                                                                                  // 3734
                    rows[i].insertBefore(td, firstCell);                                                               // 3735
                }                                                                                                      // 3736
            }                                                                                                          // 3737
            this.element_.classList.add(this.CssClasses_.IS_UPGRADED);                                                 // 3738
        }                                                                                                              // 3739
    }                                                                                                                  // 3740
};                                                                                                                     // 3741
// The component registers itself. It can assume componentHandler is available                                         // 3742
// in the global scope.                                                                                                // 3743
componentHandler.register({                                                                                            // 3744
    constructor: MaterialDataTable,                                                                                    // 3745
    classAsString: 'MaterialDataTable',                                                                                // 3746
    cssClass: 'mdl-js-data-table'                                                                                      // 3747
});                                                                                                                    // 3748
/**                                                                                                                    // 3749
 * @license                                                                                                            // 3750
 * Copyright 2015 Google Inc. All Rights Reserved.                                                                     // 3751
 *                                                                                                                     // 3752
 * Licensed under the Apache License, Version 2.0 (the "License");                                                     // 3753
 * you may not use this file except in compliance with the License.                                                    // 3754
 * You may obtain a copy of the License at                                                                             // 3755
 *                                                                                                                     // 3756
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                     // 3757
 *                                                                                                                     // 3758
 * Unless required by applicable law or agreed to in writing, software                                                 // 3759
 * distributed under the License is distributed on an "AS IS" BASIS,                                                   // 3760
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                            // 3761
 * See the License for the specific language governing permissions and                                                 // 3762
 * limitations under the License.                                                                                      // 3763
 */                                                                                                                    // 3764
/**                                                                                                                    // 3765
   * Class constructor for Ripple MDL component.                                                                       // 3766
   * Implements MDL component design pattern defined at:                                                               // 3767
   * https://github.com/jasonmayes/mdl-component-design-pattern                                                        // 3768
   *                                                                                                                   // 3769
   * @constructor                                                                                                      // 3770
   * @param {HTMLElement} element The element that will be upgraded.                                                   // 3771
   */                                                                                                                  // 3772
var MaterialRipple = function MaterialRipple(element) {                                                                // 3773
    this.element_ = element;                                                                                           // 3774
    // Initialize instance.                                                                                            // 3775
    this.init();                                                                                                       // 3776
};                                                                                                                     // 3777
window['MaterialRipple'] = MaterialRipple;                                                                             // 3778
/**                                                                                                                    // 3779
   * Store constants in one place so they can be updated easily.                                                       // 3780
   *                                                                                                                   // 3781
   * @enum {string | number}                                                                                           // 3782
   * @private                                                                                                          // 3783
   */                                                                                                                  // 3784
MaterialRipple.prototype.Constant_ = {                                                                                 // 3785
    INITIAL_SCALE: 'scale(0.0001, 0.0001)',                                                                            // 3786
    INITIAL_SIZE: '1px',                                                                                               // 3787
    INITIAL_OPACITY: '0.4',                                                                                            // 3788
    FINAL_OPACITY: '0',                                                                                                // 3789
    FINAL_SCALE: ''                                                                                                    // 3790
};                                                                                                                     // 3791
/**                                                                                                                    // 3792
   * Store strings for class names defined by this component that are used in                                          // 3793
   * JavaScript. This allows us to simply change it in one place should we                                             // 3794
   * decide to modify at a later date.                                                                                 // 3795
   *                                                                                                                   // 3796
   * @enum {string}                                                                                                    // 3797
   * @private                                                                                                          // 3798
   */                                                                                                                  // 3799
MaterialRipple.prototype.CssClasses_ = {                                                                               // 3800
    RIPPLE_CENTER: 'mdl-ripple--center',                                                                               // 3801
    RIPPLE_EFFECT_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',                                                // 3802
    RIPPLE: 'mdl-ripple',                                                                                              // 3803
    IS_ANIMATING: 'is-animating',                                                                                      // 3804
    IS_VISIBLE: 'is-visible'                                                                                           // 3805
};                                                                                                                     // 3806
/**                                                                                                                    // 3807
   * Handle mouse / finger down on element.                                                                            // 3808
   *                                                                                                                   // 3809
   * @param {Event} event The event that fired.                                                                        // 3810
   * @private                                                                                                          // 3811
   */                                                                                                                  // 3812
MaterialRipple.prototype.downHandler_ = function (event) {                                                             // 3813
    if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {                                       // 3814
        var rect = this.element_.getBoundingClientRect();                                                              // 3815
        this.boundHeight = rect.height;                                                                                // 3816
        this.boundWidth = rect.width;                                                                                  // 3817
        this.rippleSize_ = Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 2 + 2;                     // 3818
        this.rippleElement_.style.width = this.rippleSize_ + 'px';                                                     // 3819
        this.rippleElement_.style.height = this.rippleSize_ + 'px';                                                    // 3820
    }                                                                                                                  // 3821
    this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE);                                                    // 3822
    if (event.type === 'mousedown' && this.ignoringMouseDown_) {                                                       // 3823
        this.ignoringMouseDown_ = false;                                                                               // 3824
    } else {                                                                                                           // 3825
        if (event.type === 'touchstart') {                                                                             // 3826
            this.ignoringMouseDown_ = true;                                                                            // 3827
        }                                                                                                              // 3828
        var frameCount = this.getFrameCount();                                                                         // 3829
        if (frameCount > 0) {                                                                                          // 3830
            return;                                                                                                    // 3831
        }                                                                                                              // 3832
        this.setFrameCount(1);                                                                                         // 3833
        var bound = event.currentTarget.getBoundingClientRect();                                                       // 3834
        var x;                                                                                                         // 3835
        var y;                                                                                                         // 3836
        // Check if we are handling a keyboard click.                                                                  // 3837
        if (event.clientX === 0 && event.clientY === 0) {                                                              // 3838
            x = Math.round(bound.width / 2);                                                                           // 3839
            y = Math.round(bound.height / 2);                                                                          // 3840
        } else {                                                                                                       // 3841
            var clientX = event.clientX ? event.clientX : event.touches[0].clientX;                                    // 3842
            var clientY = event.clientY ? event.clientY : event.touches[0].clientY;                                    // 3843
            x = Math.round(clientX - bound.left);                                                                      // 3844
            y = Math.round(clientY - bound.top);                                                                       // 3845
        }                                                                                                              // 3846
        this.setRippleXY(x, y);                                                                                        // 3847
        this.setRippleStyles(true);                                                                                    // 3848
        window.requestAnimationFrame(this.animFrameHandler.bind(this));                                                // 3849
    }                                                                                                                  // 3850
};                                                                                                                     // 3851
/**                                                                                                                    // 3852
   * Handle mouse / finger up on element.                                                                              // 3853
   *                                                                                                                   // 3854
   * @param {Event} event The event that fired.                                                                        // 3855
   * @private                                                                                                          // 3856
   */                                                                                                                  // 3857
MaterialRipple.prototype.upHandler_ = function (event) {                                                               // 3858
    // Don't fire for the artificial "mouseup" generated by a double-click.                                            // 3859
    if (event && event.detail !== 2) {                                                                                 // 3860
        // Allow a repaint to occur before removing this class, so the animation                                       // 3861
        // shows for tap events, which seem to trigger a mouseup too soon after                                        // 3862
        // mousedown.                                                                                                  // 3863
        window.setTimeout(function () {                                                                                // 3864
            this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE);                                         // 3865
        }.bind(this), 0);                                                                                              // 3866
    }                                                                                                                  // 3867
};                                                                                                                     // 3868
/**                                                                                                                    // 3869
   * Initialize element.                                                                                               // 3870
   */                                                                                                                  // 3871
MaterialRipple.prototype.init = function () {                                                                          // 3872
    if (this.element_) {                                                                                               // 3873
        var recentering = this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);                            // 3874
        if (!this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)) {                         // 3875
            this.rippleElement_ = this.element_.querySelector('.' + this.CssClasses_.RIPPLE);                          // 3876
            this.frameCount_ = 0;                                                                                      // 3877
            this.rippleSize_ = 0;                                                                                      // 3878
            this.x_ = 0;                                                                                               // 3879
            this.y_ = 0;                                                                                               // 3880
            // Touch start produces a compat mouse down event, which would cause a                                     // 3881
            // second ripples. To avoid that, we use this property to ignore the first                                 // 3882
            // mouse down after a touch start.                                                                         // 3883
            this.ignoringMouseDown_ = false;                                                                           // 3884
            this.boundDownHandler = this.downHandler_.bind(this);                                                      // 3885
            this.element_.addEventListener('mousedown', this.boundDownHandler);                                        // 3886
            this.element_.addEventListener('touchstart', this.boundDownHandler);                                       // 3887
            this.boundUpHandler = this.upHandler_.bind(this);                                                          // 3888
            this.element_.addEventListener('mouseup', this.boundUpHandler);                                            // 3889
            this.element_.addEventListener('mouseleave', this.boundUpHandler);                                         // 3890
            this.element_.addEventListener('touchend', this.boundUpHandler);                                           // 3891
            this.element_.addEventListener('blur', this.boundUpHandler);                                               // 3892
            /**                                                                                                        // 3893
         * Getter for frameCount_.                                                                                     // 3894
         * @return {number} the frame count.                                                                           // 3895
         */                                                                                                            // 3896
            this.getFrameCount = function () {                                                                         // 3897
                return this.frameCount_;                                                                               // 3898
            };                                                                                                         // 3899
            /**                                                                                                        // 3900
         * Setter for frameCount_.                                                                                     // 3901
         * @param {number} fC the frame count.                                                                         // 3902
         */                                                                                                            // 3903
            this.setFrameCount = function (fC) {                                                                       // 3904
                this.frameCount_ = fC;                                                                                 // 3905
            };                                                                                                         // 3906
            /**                                                                                                        // 3907
         * Getter for rippleElement_.                                                                                  // 3908
         * @return {Element} the ripple element.                                                                       // 3909
         */                                                                                                            // 3910
            this.getRippleElement = function () {                                                                      // 3911
                return this.rippleElement_;                                                                            // 3912
            };                                                                                                         // 3913
            /**                                                                                                        // 3914
         * Sets the ripple X and Y coordinates.                                                                        // 3915
         * @param  {number} newX the new X coordinate                                                                  // 3916
         * @param  {number} newY the new Y coordinate                                                                  // 3917
         */                                                                                                            // 3918
            this.setRippleXY = function (newX, newY) {                                                                 // 3919
                this.x_ = newX;                                                                                        // 3920
                this.y_ = newY;                                                                                        // 3921
            };                                                                                                         // 3922
            /**                                                                                                        // 3923
         * Sets the ripple styles.                                                                                     // 3924
         * @param  {boolean} start whether or not this is the start frame.                                             // 3925
         */                                                                                                            // 3926
            this.setRippleStyles = function (start) {                                                                  // 3927
                if (this.rippleElement_ !== null) {                                                                    // 3928
                    var transformString;                                                                               // 3929
                    var scale;                                                                                         // 3930
                    var size;                                                                                          // 3931
                    var offset = 'translate(' + this.x_ + 'px, ' + this.y_ + 'px)';                                    // 3932
                    if (start) {                                                                                       // 3933
                        scale = this.Constant_.INITIAL_SCALE;                                                          // 3934
                        size = this.Constant_.INITIAL_SIZE;                                                            // 3935
                    } else {                                                                                           // 3936
                        scale = this.Constant_.FINAL_SCALE;                                                            // 3937
                        size = this.rippleSize_ + 'px';                                                                // 3938
                        if (recentering) {                                                                             // 3939
                            offset = 'translate(' + this.boundWidth / 2 + 'px, ' + this.boundHeight / 2 + 'px)';       // 3940
                        }                                                                                              // 3941
                    }                                                                                                  // 3942
                    transformString = 'translate(-50%, -50%) ' + offset + scale;                                       // 3943
                    this.rippleElement_.style.webkitTransform = transformString;                                       // 3944
                    this.rippleElement_.style.msTransform = transformString;                                           // 3945
                    this.rippleElement_.style.transform = transformString;                                             // 3946
                    if (start) {                                                                                       // 3947
                        this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING);                           // 3948
                    } else {                                                                                           // 3949
                        this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING);                              // 3950
                    }                                                                                                  // 3951
                }                                                                                                      // 3952
            };                                                                                                         // 3953
            /**                                                                                                        // 3954
         * Handles an animation frame.                                                                                 // 3955
         */                                                                                                            // 3956
            this.animFrameHandler = function () {                                                                      // 3957
                if (this.frameCount_-- > 0) {                                                                          // 3958
                    window.requestAnimationFrame(this.animFrameHandler.bind(this));                                    // 3959
                } else {                                                                                               // 3960
                    this.setRippleStyles(false);                                                                       // 3961
                }                                                                                                      // 3962
            };                                                                                                         // 3963
        }                                                                                                              // 3964
    }                                                                                                                  // 3965
};                                                                                                                     // 3966
// The component registers itself. It can assume componentHandler is available                                         // 3967
// in the global scope.                                                                                                // 3968
componentHandler.register({                                                                                            // 3969
    constructor: MaterialRipple,                                                                                       // 3970
    classAsString: 'MaterialRipple',                                                                                   // 3971
    cssClass: 'mdl-js-ripple-effect',                                                                                  // 3972
    widget: false                                                                                                      // 3973
});                                                                                                                    // 3974
}());                                                                                                                  // 3975
                                                                                                                       // 3976
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/attach-componentHandler.generated.js                                                                     //
// This file is in bare mode and is not in its own closure.                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
MDl.componentHandler = componentHandler;                                                                               // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


require("./client/main.js");