<script>
  export default {
    name: 'FooTer'
  }
</script>

<template>
  <div class="d-flex flex-column h-100 bg-dark p-4">
    <!-- FOOTER -->
    <footer class="flex-shrink-0">
        <div class="py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="h1 text-white">LOGO</h5>
                    <p class="small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p class="small mb-0 text-white">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#">AM ANTOR</a></p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-muted">
                        <li><router-link to="/home" class="quick-link">Home</router-link></li>
                        <li><router-link to="/about" class="quick-link">About</router-link></li>
                        <li><router-link to="/contact" class="quick-link">Contact</router-link></li>
                        <li><router-link to="/home" class="quick-link">Get started</router-link></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-muted">
                        <li><router-link to="/home" class="quick-link">Home</router-link></li>
                        <li><router-link to="/about" class="quick-link">About</router-link></li>
                        <li><router-link to="/contact" class="quick-link">Contact</router-link></li>
                        <li><router-link to="/home" class="quick-link">Get started</router-link></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">Newsletter</h5>
                    <p class="small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <form action="#">
                        <div class="input-group mb-3">
                            <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                            <button class="btn btn-primary" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<style>
  .quick-link {
  text-decoration: none;
  transition: all 0.3s;
}

.quick-link:hover, .quick-link:focus {
  text-decoration: none;
}

.form-control {
  background: #212529;
  border-color: #545454;
}

.form-control:focus {
  background: #212529;
}

footer {
  background: #212529;
}

</style>
