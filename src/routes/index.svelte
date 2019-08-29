<script>
  import initI18n from "../initI18n";
	export let lang = 'en';
	function handleClick(event) {
		if(lang=='en'){
			lang='hi'
		}else{
			lang='en'
		}
	}
  $: i18n = initI18n(lang);
</script>
<style>
	h1 {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>{i18n.t('hello')}!</h1>
<h1>{i18n.t('msg')}!</h1>
<br/>
<center>
	<button on:click={handleClick}>
	{lang}
	</button>
	</center>