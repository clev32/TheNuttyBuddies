Vue.component('recipe-form', {
	
	template: `
	<form class ="recipe-form" @submit.prevent="onSubmit">
 
<div class="container-fluid">
	<div>
	<label for="recipeName">Recipe Name:</label>
	<input type="text" id="recipeName" v-model="recipeName" required>
	</div>
	</br>
	
	<div>
	<label for="directions">Directions:</label>
	<textarea rows="4" cols="25" id="directions" v-model="directions" required></textarea>
	</div>
	</br>
	
	<div>
	<label for="ingredients">Ingredients:</label>
	<textarea rows="4" cols="25" id="ingredients" v-model="ingredients" required></textarea>
	</div>
	</br>			
	
	<div>
	<label for="firstName">First Name:</label>
	<input type="text" id="firstName" v-model="firstName" required>
	</div>
	</br>
	
	<div>
	<label for="lastName">Last Name:</label>
	<input type="text" id="lastName" v-model="lastName" required>
	</div>
	</br>
 
 	<div>
 	<input id ="submit" type ="submit" value ="Submit">	
 	</div>
	
 </div>	
</form>

`,
	data(){
		return{
			recipeName: null,
			directions: null,
			ingredients: null,
			firstName: null,
			lastName: null,
			message: null

		}
	},

methods: {
      onSubmit: function() {
      	
      	alert('Thank you ' + this.firstName + ' for submitting a recipe');
      	let recipe ={
      	name: this.recipeName,
      	directions: this.directions,
      	ingredients: this.ingredients,
      	firstName: this.firstName,
      	lastName: this.lastName
      	
      	}
      	this.$emit('recipe-submitted', recipe)
    	this.recipeName =null,
    	this.directions= null,
    	this.ingredients =null,
    	this.firstName = null,
    	this. lastName =null
    }
   
}
})
  
var app = new Vue({
    el: '#app',
    data: {
    recipes: [],
    count: 0
    },
	methods:{
		addRecipe(recipe){
  		this.recipes.push(recipe)
  		this.count++
  	}
	}
  
 });
