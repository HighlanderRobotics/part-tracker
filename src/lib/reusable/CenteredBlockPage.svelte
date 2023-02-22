<main>
  <div class="center">
    <slot />
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    background-color: #350868;
  }

  .center {
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.4rem;
  }

  @media screen and (max-width: 720px) {
    main {
      display: block;
      background-color: unset;
    }
  }
</style>
