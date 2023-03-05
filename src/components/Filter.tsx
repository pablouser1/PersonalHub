import type Input from "../interfaces/Input";

const Filter = () => {
  const items = document.getElementsByClassName('item') as HTMLCollectionOf<HTMLDivElement>

  const filterItems = (e: Input) => {
    const upper_term = e.currentTarget.value.toUpperCase()
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      if (item.dataset.name!.toUpperCase().indexOf(upper_term) > -1) {
        item.classList.remove('is-hidden')
      } else {
        item.classList.add('is-hidden')
      }
    }
  }

  return (
    <div class="field mb-4">
      <div class="control">
        <input type="text" class="input" placeholder="Search" onInput={filterItems} />
      </div>
    </div>
  );
};

export default Filter;
