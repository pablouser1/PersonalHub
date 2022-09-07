<script lang="ts">
  const items = document.getElementsByClassName('item') as HTMLCollectionOf<HTMLDivElement>

  let term = '';

  const filterItems = () => {
    const upper_term = term.toUpperCase()
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      if (item.dataset.name!.toUpperCase().indexOf(upper_term) > -1) {
        item.classList.remove('is-hidden')
      } else {
        item.classList.add('is-hidden')
      }
    }
  }
</script>

<div class="field mb-4">
	<div class="control">
		<input type="text" class="input" placeholder="Search" bind:value={term} on:keyup={filterItems} />
	</div>
</div>
