var React = require('react');


module.exports = React.createClass({
  render: function() {
    return (
    <div className="creationGridItem fb-like"
  data-share="true"
  data-width="450"
  data-show-faces="true">
        <img src="/public/image/cherry.svg" className="creationGridItemImage"/>
	{this.props.title}
	<form action="#editItem" method ="get">
		
		<input type="hidden" name="itemId" value={this.props.itemId}/>
		<input type="hidden" name="title" value ={this.props.title}/>
		<input type="hidden" name="id" value={this.props.id}/>
		<input type="submit" value= "edit"/>
	</form>
    </div>
    );
  }
});
