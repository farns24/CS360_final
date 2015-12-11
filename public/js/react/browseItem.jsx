var React = require('react');


module.exports = React.createClass({
  render: function() {
    return (
    <div className="creationGridItem fb-like"
  data-share="true"
  data-width="450"
  data-show-faces="true">
        <img src="/public/image/cherry.svg" className="creationGridItemImage"/>
	<a href="/creation/">
		{this.props.title}
	</a>
    </div>
    );
  }
});
