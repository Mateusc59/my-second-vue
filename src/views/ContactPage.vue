<script>

export default {
	name: "ContactPage",
	data() {
		return {
			address: "18 avenue du Beurre, Paris, France",
			email: "hello@cafewithavue.bakery",
			phone: "01 88 88 88 88"

		}
	},
}
</script>



<template>
  <h2>Contactez nous</h2>
		<p>Adresse : {{ address }}</p>
		<p>Téléphone : {{ phone }}</p>
		<p>Email : {{ email }}</p>
		<p>Horaires :</p>
		<ul>
			<li>L-V: 06:00 à 16:00</li>
			<li>Samedi: 07:00 à 14:00</li>
			<li>Dimanche: 07:00 à 12:00</li>
		</ul>
		<footer class=“footer”>
			<p>{{ copyright }}</p>
		</footer>
</template>

<style lang="scss">
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2C3E50;
	margin-top: 60px;
}
ul{
list-style-type: none;
text-align: center;

}
</style>
