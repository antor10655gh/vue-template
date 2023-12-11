<script>
    export default {
      name: 'NavBar',
      data() {
          return {
            menus: [
              {
                name: 'Home',
                link: '/home'
              },
              {
                name: 'About',
                link: '/about'
              },
              {
                name: 'Contact',
                link: '/contact'
              }
            ]
          }
      }
    }
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">LOGO</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto ">
          <li class="nav-item" v-for="(item, index) in menus" :key="index">
            <router-link class="nav-link mx-2 active text-uppercase" aria-current="page" :to="item.link">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    </nav>
</template>
  
  

  