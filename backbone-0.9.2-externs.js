/**
 * @fileoverview Externs for backbone-0.9.2.js
 *
 * built with http://www.dotnetwise.com/Code/Externs/index.html
 * see also: http://blog.dotnetwise.com/2009/11/closure-compiler-externs-extractor.html
 * via: http://code.google.com/p/closure-compiler/wiki/FAQ#How_do_I_write_an_externs_file?
 *
 * Note: when building via that page, you first need to load in underscrore.js, as that's a dependency.
 *       also, after running the extern for Backbone, you need to manually run it for:
 *       Backbone.Model.prototype, Backbone.Collection.prototype, Backbone.Router.prototype, 
 *       Backbone.History.prototype, and Backbone.View.prototype
 *       because these objects are modified using _.extend(Backbone.Model.prototype ...)
 * @see http://documentcloud.github.com/backbone/
 * @externs
 */

var Backbone = {
    "VERSION": {},
    "setDomLibrary": function () {},
    "noConflict": function () {},
    "emulateHTTP": {},
    "emulateJSON": {},
    "Collection": function () {},
    "Router": function () {},
    "History": function () {},
    "View": function () {},
    "sync": function () {},
    "wrapError": function () {}
};

/**
 * @typedef {Object}
 */
Backbone.Events;

/**
 * @param {string} event
 * @param {Function} callback
 * @param {Object=} context
 */
Backbone.Events.on = function(event, callback, context) {};
Backbone.Events.bind = Backbone.Events.on;

/**
 * @param {string=} event
 * @param {Function=} callback
 * @param {Object=} context
 */
Backbone.Events.off = function(event, callback, context) {};
Backbone.Events.unbind = Backbone.Events.off;

/**
 * @param {string} event
 * @param {...*} args
 */
Backbone.Events.trigger = function(event, args) {};

/**
 * @extends {Backbone.Events}
 * @constructor
 * @param {Object=} config
 */
Backbone.Model = function(config) {};

Backbone.Model.prototype.on = Backbone.Events.on;
Backbone.Model.prototype.off = Backbone.Events.off;

/**
 * @param {Object} properties
 * @param {Object=} classProperties
 */
Backbone.Model.prototype.extend = function(properties, classProperties) {};

/**
 * @param {...*} config
 */
Backbone.Model.prototype.initialize = function(config) {};

/**
 * @param {string} attribute
 * @return {*}
 */
Backbone.Model.prototype.get = function(attribute) {};

/**
 * @param {string|Object} key
 * @param {*=} value
 * @param {Object=} options
 * @return {Backbone.Model}
 */
Backbone.Model.prototype.set = function(key, value, options) {};

/**
 * @param {string} attribute
 * @return {string}
 */
Backbone.Model.prototype.escape = function(attribute) {};

/**
 * @param {string} attribute
 * @return {boolean}
 */
Backbone.Model.prototype.has = function(attribute) {};

/**
 * @param {string} attribute
 * @param {Object=} options
 * @return {Backbone.Model}
 */
Backbone.Model.prototype.unset = function(attribute, options) {};

/**
 * @param {Object=} options
 */
Backbone.Model.prototype.clear = function(options) {};

/** @type {number} */
Backbone.Model.id;

/** @type {string} */
Backbone.Model.prototype.idAttribute;

/** @type {number} */
Backbone.Model.cid;

/** @type {Object} */
Backbone.Model.attributes;

/** @type {Object} */
Backbone.Model.changed;

/** @type {Object|Function} */
Backbone.Model.defaults;

/**
 * @return {Object}
 */
Backbone.Model.toJSON();

/**
 * @param {Object} options
 * @return {Object} returns jQuery xhr
 */
Backbone.Model.prototype.fetch = function(options) {};

/**
 * @param {string|Object} key
 * @param {*} value
 * @param {Object=} options
 * @return {boolean|Object}
 */
Backbone.Model.prototype.save = function(key, value, options) {};

/**
 * @param {Object} options
 * @return {boolean|Object}
 */
Backbone.Model.prototype.destroy = function(options) {};

/**
 * @param {Object} attributes
 */
Backbone.Model.prototype.validate = function(attributes) {};

/**
 * @return {boolean}
 */
Backbone.Model.prototype.isValid = function() {};

/**
 * @return {string}
 */
Backbone.Model.prototype.url = function() {};

/** @type {string|Function} */
Backbone.Model.urlRoot;

/**
 * @param {Object} resp
 * @param {Object} xhr
 * @return {Object}
 */
Backbone.Model.prototype.parse = function(resp, xhr) {};

/**
 * @return {Backbone.Model}
 */
Backbone.Model.prototype.clone = function() {};

/**
 * @return {boolean}
 */
Backbone.Model.prototype.isNew = function() {};

/**
 * @return {Backbone.Model}
 */
Backbone.Model.prototype.change = function() {};

/**
 * @param {Object} attributes
 * @return {boolean}
 */
Backbone.Model.prototype.hasChanged = function(attributes) {};

/**
 * @param {Object} attributes
 * @return {Object}
 */
Backbone.Model.prototype.changedAttributes = function(attributes) {};

/**
 * @param {string} attribute
 * @return {*}
 */
Backbone.Model.prototype.previous = function(attribute) {};

/**
 * @return {Object}
 */
Backbone.Model.prototype.previousAttributes = function() {};

/**
 * @constructor
 */
Backbone.Collection = function() {};
/** @type {Array} */
Backbone.Collection.prototype.models;
Backbone.Collection.prototype = {
    "on": function () {},
    "off": function () {},
    "trigger": function () {},
    "bind": function () {},
    "unbind": function () {},
    "model": function () {},
    "initialize": function () {},
    "toJSON": function () {},
    "add": function () {},
    "remove": function () {},
    "get": function () {},
    "getByCid": function () {},
    "at": function () {},
    "sort": function () {},
    "pluck": function () {},
    "reset": function () {},
    "fetch": function () {},
    "create": function () {},
    "parse": function () {},
    "chain": function () {},
    "_reset": function () {},
    "_prepareModel": function () {},
    "_removeReference": function () {},
    "_onModelEvent": function () {},
    "forEach": function () {},
    "each": function () {},
    "map": function () {},
    "reduce": function () {},
    "reduceRight": function () {},
    "find": function () {},
    "detect": function () {},
    "filter": function () {},
    "select": function () {},
    "reject": function () {},
    "every": function () {},
    "all": function () {},
    "some": function () {},
    "any": function () {},
    "include": function () {},
    "contains": function () {},
    "invoke": function () {},
    "max": function () {},
    "min": function () {},
    "sortBy": function () {},
    "sortedIndex": function () {},
    "toArray": function () {},
    "size": function () {},
    "first": function () {},
    "initial": function () {},
    "rest": function () {},
    "last": function () {},
    "without": function () {},
    "indexOf": function () {},
    "shuffle": function () {},
    "lastIndexOf": function () {},
    "isEmpty": function () {},
    "groupBy": function () {}
};
Backbone.Router.prototype = {
    "on": function () {},
    "off": function () {},
    "trigger": function () {},
    "bind": function () {},
    "unbind": function () {},
    "initialize": function () {},
    "route": function () {},
    "navigate": function () {},
    "_bindRoutes": function () {},
    "_routeToRegExp": function () {},
    "_extractParameters": function () {}
};
Backbone.History.prototype = {
    "on": function () {},
    "off": function () {},
    "trigger": function () {},
    "bind": function () {},
    "unbind": function () {},
    "interval": {},
    "getFragment": function () {},
    "start": function () {},
    "stop": function () {},
    "route": function () {},
    "checkUrl": function () {},
    "loadUrl": function () {},
    "navigate": function () {},
    "_updateHash": function () {}
};
/**
 * @param {...*} args
 * @constructor
 */
Backbone.View = function(args){};
/** @type {string} */
Backbone.View.prototype.tagName;
/**
 * @param {...*} args
 */
Backbone.View.prototype.initialize = function(args) {};
/**
 * @return {Backbone.View}
 */
Backbone.View.prototype.render = function(){};
/** @type {Element} */
Backbone.View.prototype.el;
/** @type {jQuery} */
Backbone.View.prototype.$el;
Backbone.View.prototype.remove = function(){};
/**
 * @param {string} tagName
 * @param {Object=} attributes
 * @param {string=} content
 */
Backbone.View.prototype.make = function(tagName, attributes, content){};
Backbone.View.prototype.remove = function(){};
/**
 * @param {Object=} events
 */
Backbone.View.prototype.delegateEvents = function(events){};
/**
 * @param {Object=} events
 */
Backbone.View.prototype.undelegateEvents = function(events){};

/**
 * @param {Element|jQuery} element
 * @param {boolean=} delegate
 */
Backbone.View.prototype.setElement = function(element, delegate){};

/**
 * @param {string} selector
 */
Backbone.View.prototype.$ = function(selector){};
