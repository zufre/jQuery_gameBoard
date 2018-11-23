var main = function() {
  $('.more-btn').on('click', (e) => {
		$(e.currentTarget).siblings().toggle();
  });
  $('.share').on('click', (e) => {
    $(e.currentTarget).siblings().toggle();
  });
  $('.notification').on('click', (e) => {
    $(e.currentTarget).toggleClass('active');
  });
 
};

$(document).ready(main);
