import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
		return fetch('/menu/'+params.item_name+'.json')
				.then(data => data.json())
				.then(res => res[0])
				.catch(err => console.log(err + " in item"))
	}
});

