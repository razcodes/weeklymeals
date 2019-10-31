import Route from '@ember/routing/route';

export default Ember.Route.extend({
	model() {
		return fetch('/menu/menu.json')
					.then((data) => data.json())
					.then((res) => res)
					.catch((err) => console.log(err+" in menu"))
			}
});

	