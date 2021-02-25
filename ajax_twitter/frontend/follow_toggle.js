const FollowToggle = function ($el) {
  
  this.$el = $el;
  this.userId = $el.data('user-id');
  this.followState = $el.data('initial-follow-state');

  const handleClick = () => {
    console.log('hello');
    // $.ajax({
    //   method: 'POST',
    //   url: `/user/${this.userId}/follow`,
    //   success: (response) =>{
    //   }
    // });
  };
};

FollowToggle.prototype.render = function(){
  
  if (this.followState){
    this.$el.html('Unfollow!');
  } else{
    this.$el.html('Follow!');
  }
};

module.exports = FollowToggle;
