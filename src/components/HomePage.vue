<template>
  <main>
    <!-- Header -->
    <header>
      <h2>Undabot Assignment Home Page</h2>
    </header>

    <!-- Hero -->
    <section class="flex-container">
      <div class="custom-text">
        <p class="first-paragraph">
          <b>Lorem</b> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
          vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </div>
      <div class="custom-image">
        <img class="zagreb-image" src="../assets/zagreb.jpg" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main,
header,
section,
footer {
  margin: 0;
}

footer {
  position: fixed;
}

main {
  padding: 0 60px;
}

section {
  padding: 20px 0;
}

.first-paragraph {
  margin-top: 0;
}

.flex-container {
  display: flex;
}
.custom-text {
  text-align: justify;
  flex-grow: 1;
  flex-basis: 0;
  padding-right: 20px;
}
.custom-image {
  flex-grow: 0.7;
  flex-basis: 0;
}
.zagreb-image {
  width: 100%;
  max-width: 600px;
}

@media screen and (max-width: 1024px) {
  .flex-container {
    flex-direction: column;
  }

  .custom-text {
    padding-right: initial;
  }
}

@media screen and (max-width: 426px) {
  main {
    padding: 0 10px;
  }
}
</style>
