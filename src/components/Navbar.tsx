import { createSignal, For } from "solid-js";
import type Section from "../interfaces/Section";

const Navbar = (props: { sections: Section[] }) => {
  const [active, setActive] = createSignal(false);

  return (
    <nav class="navbar" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          Home
        </a>

        <button class="navbar-burger" aria-label="menu" aria-expanded="false" onClick={() => setActive(!active())} classList={{'is-active': active()}}>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div class="navbar-menu" classList={{'is-active': active()}}>
        <div class="navbar-start">
          <For each={props.sections}>{(section) => (
            <a class="navbar-item" href={section.url}>{section.name}</a>
          )}</For>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
