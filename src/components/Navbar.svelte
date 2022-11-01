<script lang="ts">
  import type Section from "../interfaces/Section";
  export let sections: Section[] = [];
	let burger: boolean = false;
  const toggleBurger = () => burger = !burger;
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">Home</a>

    <button class="navbar-burger" class:is-active="{burger === true}" aria-label="menu" aria-expanded="false" on:click={toggleBurger}>
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </button>
  </div>

  <div class="navbar-menu" class:is-active="{burger === true}">
    <div class="navbar-start">
      {#each sections as section}
        <a class="navbar-item" href="{section.url}">{section.name}</a>
      {/each}
    </div>
  </div>
</nav>
