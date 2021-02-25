const FollowToggle = require("./follow_toggle.js");

// for iterate from 0 to $li.length
// cont $button = new FollowToggle($btn)
// followToggle.render();

$(() => {
  const $btm = $(".follow-toggle");
  for (let i = 0; i < $btm.length; i++) {
    const $followToggle = new FollowToggle($($btm[i]));
    $followToggle.render();
  }
  $('.follow-toggle').on('click', (e) => {
    const newToggle = new FollowToggle($(e.target));
    debugger
    e.preventDefault();
    debugger
    newToggle.handleClick();
  }
  );
});