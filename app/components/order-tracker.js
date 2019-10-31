import Component from '@ember/component';

export default Component.extend({
	orderManager: Ember.inject.service('order-manager'),
	actions: {
		remove(day, category){
			this.get('orderManager').removeMenuOption(day, category);
		},
		setDay(day){
			this.get('orderManager').setSelectedDay(day);
		}
	}
});
