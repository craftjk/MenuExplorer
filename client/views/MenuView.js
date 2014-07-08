var MenuView = Backbone.View.extend({
  tagName: 'table',

  template: _.template(''),

  initialize: function() {
  },

  render: function() {
    this.collection.each(function(comboModel) {
      // make a new view from the bookmodel
      newComboViewEl = new ComboView({model: comboModel}).render();

      // append that to the page
      this.$el.append(newComboViewEl);
    }, this);
    return this.$el;
  }
});
