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
    "emulateJSON": {}
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
 * @param {Function} onError
 * @param {Backbone.Model} originalModel
 * @param {Object} options
 */
Backbone.wrapError = function(onError, originalModel, options){};

/**
 * @param {string=} method
 * @param {Backbone.Model=} model
 * @param {Object=} options
 */
Backbone.sync = function(method, model, options){};

/**
 * @extends {Backbone.Events}
 * @constructor
 * @param {Object=} config
 */
Backbone.Model = function(config) {};

Backbone.Model.prototype.on = Backbone.Events.on;
Backbone.Model.prototype.off = Backbone.Events.off;
Backbone.Model.prototype.trigger = Backbone.Events.trigger;
Backbone.Model.prototype.bind = Backbone.Events.on;
Backbone.Model.prototype.unbind = Backbone.Events.on;

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
Backbone.Model.prototype.id;

/** @type {string} */
Backbone.Model.prototype.idAttribute;

/** @type {number} */
Backbone.Model.prototype.cid;

/** @type {Object} */
Backbone.Model.prototype.attributes;

/** @type {Object} */
Backbone.Model.prototype.changed;

/** @type {Object|Function} */
Backbone.Model.prototype.defaults;

/**
 * @param {Object=} options
 * @return {Object}
 */
Backbone.Model.prototype.toJSON = function(options) {};

/**
 * @param {Object=} options
 * @return {Object} returns jQuery xhr
 */
Backbone.Model.prototype.fetch = function(options) {};

/**
 * @param {string|Object=} key
 * @param {*=} value
 * @param {Object=} options
 * @return {boolean|Object}
 */
Backbone.Model.prototype.save = function(key, value, options) {};

/**
 * @param {Object=} options
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
 * @param {Object=} options
 * @return {Backbone.Model}
 */
Backbone.Model.prototype.change = function(options) {};

/**
 * @param {string|number=} attr
 * @return {boolean}
 */
Backbone.Model.prototype.hasChanged = function(attr) {};

/**
 * @param {Object=} attributes
 * @return {Object}
 */
Backbone.Model.prototype.changedAttributes = function(attributes) {};

/**
 * @param {string|number} attribute
 * @return {*}
 */
Backbone.Model.prototype.previous = function(attribute) {};

/**
 * @return {Object}
 */
Backbone.Model.prototype.previousAttributes = function() {};

/**
 * @extends {Backbone.Events}
 * @constructor
 * @param {Object|Backbone.Model|Array.<Object>=} models
 * @param {Object=} config
 */
Backbone.Collection = function(models, config) {};

/**
 * @param {...*} args
 */
Backbone.Collection.prototype.initialize = function(args) {};


Backbone.Collection.prototype = {
    "sort": function () {},
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
    "sortedIndex": function () {},
    "toArray": function () {},
    "size": function () {},
    "first": function () {},
    "initial": function () {},
    "rest": function () {},
    "last": function () {},
    "without": function () {},
    "shuffle": function () {},
    "lastIndexOf": function () {},
    "isEmpty": function () {}
};

/**
 * @param {Object=} options
 * @return {Array.<Object>}
 */
Backbone.Collection.prototype.toJSON = function(options) {};

Backbone.Collection.prototype.on = Backbone.Events.on;
Backbone.Collection.prototype.off = Backbone.Events.off;
Backbone.Collection.prototype.trigger = Backbone.Events.trigger;
Backbone.Collection.prototype.bind = Backbone.Events.on;
Backbone.Collection.prototype.unbind = Backbone.Events.on;
Backbone.Collection.prototype.once = Backbone.Events.once;
Backbone.Collection.prototype.listenTo = Backbone.Events.listenTo;
Backbone.Collection.prototype.stopListening = Backbone.Events.stopListening;

/** @type {number} */
Backbone.Collection.prototype.length;

/** @type {Array} */
Backbone.Collection.prototype.models;

Backbone.Collection.prototype.on = Backbone.Events.on;
Backbone.Collection.prototype.off = Backbone.Events.off;
Backbone.Collection.prototype.bind = Backbone.Events.on;
Backbone.Collection.prototype.unbind = Backbone.Events.off;

/** @type {Backbone.Model} */
Backbone.Collection.model;

/**
 * @param {Object=} options
 * @return {Object} returns jQuery xhr
 */
Backbone.Collection.prototype.fetch = function(options) {};

/**
 * @param {string|number} index
 * @return {Backbone.Model|undefined}
 */
Backbone.Collection.prototype.at = function(index) {};

/**
 * @param {string|number|Backbone.Model} id
 * @return {Backbone.Model|undefined}
 */
Backbone.Collection.prototype.get = function(id) {};

/**
 * @param {string|number} cid
 * @return {Backbone.Model|undefined}
 */
Backbone.Collection.prototype.getByCid = function(cid) {};

/**
 * @param {Object|Backbone.Model|Array.<Object>} models
 * @param {Object=} options
 */
Backbone.Collection.prototype.add = function(models, options){};

/**
 * @param {Object|Backbone.Model|Array.<Object>} models
 * @param {Object=} options
 */
Backbone.Collection.prototype.remove = function(models, options){};

/**
 * @param {Object|Backbone.Model} model
 * @param {Object=} options
 */
Backbone.Collection.prototype.create = function(model, options){};

/**
 * @param {Array=} models
 * @param {Object=} options
 */
Backbone.Collection.prototype.reset = function(models, options){};

/**
 * @param {string} attr
 * @return {Array}
 */
Backbone.Collection.prototype.pluck = function(attr){};

/**
 * @param {*} value
 * @param {Object=} options
 * @return {number|undefined}
 */
Backbone.Collection.prototype.indexOf = function(value, options){};

/**
 * @param {Object=} options
 * @return {Backbone.Model|undefined}
 */
Backbone.Collection.prototype.shift = function(options){};

/**
 * @param {Backbone.Model|Object} model
 * @param {Object=} options
 */
Backbone.Collection.prototype.unshift = function(model, options){};

/**
 * @param {Object=} options
 */
Backbone.Collection.prototype.pop = function(options){};

/**
 * @param {Backbone.Model} model
 * @param {Object=} options
 */
Backbone.Collection.prototype.push = function(model, options){};

/**
 * @param {Object} attrs
 * @return {Array}
 */
Backbone.Collection.prototype.where = function(attrs) {};

/**
 * @param {Function|string} iterator
 * @param {Object=} context
 */
Backbone.Collection.prototype.sortBy = function(iterator, context) {};

/**
 * @param {Function|string} iterator
 * @param {Object=} context
 */
Backbone.Collection.prototype.groupBy = function(iterator, context) {};

Backbone.Router.prototype = {
    "route": function () {},
    "navigate": function () {},
    "_bindRoutes": function () {},
    "_routeToRegExp": function () {},
    "_extractParameters": function () {}
};

/**
 * @param {...*} args
 */
Backbone.Router.prototype.initialize = function(args) {};

Backbone.Router.prototype.on = Backbone.Events.on;
Backbone.Router.prototype.off = Backbone.Events.off;
Backbone.Router.prototype.trigger = Backbone.Events.trigger;
Backbone.Router.prototype.bind = Backbone.Events.on;
Backbone.Router.prototype.unbind = Backbone.Events.on;
Backbone.Router.prototype.once = Backbone.Events.once;
Backbone.Router.prototype.listenTo = Backbone.Events.listenTo;
Backbone.Router.prototype.stopListening = Backbone.Events.stopListening;

/**
 * @constructor
 */
Backbone.History = function() {};

Backbone.History.prototype = {
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

Backbone.History.prototype.on = Backbone.Events.on;
Backbone.History.prototype.off = Backbone.Events.off;
Backbone.History.prototype.trigger = Backbone.Events.trigger;
Backbone.History.prototype.bind = Backbone.Events.on;
Backbone.History.prototype.unbind = Backbone.Events.on;
Backbone.History.prototype.once = Backbone.Events.once;
Backbone.History.prototype.listenTo = Backbone.Events.listenTo;
Backbone.History.prototype.stopListening = Backbone.Events.stopListening;

/** @type {boolean} */
Backbone.History.started;
/** @type {boolean} */
Backbone.History.prototype.started;

/**
 * @param {Object=} options
 */
Backbone.History.prototype.start = function(options) {};

/**
 * @param {Object=} options
 */
Backbone.History.prototype.stop = function(options) {};

/**
 * @param {Object=} e
 */
Backbone.History.prototype.checkUrl = function(e) {};

/**
 * @param {string} fragment
 * @param {boolean|Object=} options
 */
Backbone.History.prototype.navigate = function(fragment, options) {};

/**
 * @param {string=} fragment
 * @param {boolean=} forcePushState
 */
Backbone.History.prototype.getFragment = function(fragment, forcePushState) {};

/**
 * @param {...*} args
 * @constructor
 */
Backbone.View = function(args){};

Backbone.View.prototype.on = Backbone.Events.on;
Backbone.View.prototype.off = Backbone.Events.off;
Backbone.View.prototype.trigger = Backbone.Events.trigger;
Backbone.View.prototype.bind = Backbone.Events.on;
Backbone.View.prototype.unbind = Backbone.Events.on;
Backbone.View.prototype.once = Backbone.Events.once;
Backbone.View.prototype.listenTo = Backbone.Events.listenTo;
Backbone.View.prototype.stopListening = Backbone.Events.stopListening;

/** @type {string} */
Backbone.View.prototype.tagName;
/** @type {{id: string, className: string, tagName: string}} */
Backbone.View.prototype.options;
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
 * @param {string|Element|jQuery} element
 * @param {boolean=} delegate
 */
Backbone.View.prototype.setElement = function(element, delegate){};

/**
 * @param {string} selector
 */
Backbone.View.prototype.$ = function(selector){};
