'use strict';

var React = require('react/addons');
var mixin = require('baobab-react/mixins');
var tree = require('./stateTree.js');

var Presentation = require('./components/Presentation.js');
var Search = require('./components/Search.js');
var Information = require('./components/Information.js');

// var ReactVelocityTransitionGroup = require('./components/VelocityTransitionGroup');
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var mui = require('material-ui');

var fastClick = require('fastclick');

require('../styles/main.scss');

// var imageURL = require('../images/yeoman.png');

var CivicHackApp = React.createClass({
  mixins: [mixin.branch],

  cursors: {
    hola: ['hola']
  },

  render: function() {
    return (
      <div>
        <Information />
      </div>
    );
  }
});

var CivicHackAppWrapper = React.createClass({
  mixins: [mixin.root],

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return <CivicHackApp />;
  }
});
React.render(<CivicHackAppWrapper tree={tree} />, document.getElementById('app')); // jshint ignore:line

fastClick.attach(document.body);
