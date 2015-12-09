 angular.module('fasterAngular', []).
        controller('mycontroller', ['$scope', function($scope){
            $scope.framework = 'ReactJs';
 
        }]).directive('fastNg', function(){
            return{
                restrict:'E',
                scope:{
                    framework:'='
                },
                link:function(scope, el, attrs){
                    scope.$watch('framework', function(newValue, oldValue){
                        React.renderComponent(
                            MYAPP({framework:newValue}),
                            el[0]
                        );
                    })
                }
            }
        })



//<!-- React Code -->
/*var FancyCheckbox = React.createClass({
  render: function() {
    var { checked, ...other } = this.props;
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    // `other` contains { onClick: console.log } but not the checked property
    return (
      <div {...other} className={fancyClass} />
    );
  }
});
ReactDOM.render(
  <FancyCheckbox checked={true} onClick={console.log.bind(console)}>
    Hello world!
  </FancyCheckbox>,
  document.getElementById('content')
);
*/
/*
ReactDOM.render(
  <Users myName="Han Solo" />,
  document.getElementById('content')
);
*/
