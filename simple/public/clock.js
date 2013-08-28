App = Ember.Application.create({
  tick: 0
});

var socket = io.connect(location.hostname);

socket.on('tick', function(data) {
  App.set('tick', data);
});