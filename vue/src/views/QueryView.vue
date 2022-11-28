<template>
    <div class="container">
        <div class="card pt-3 ps-5 pe-5 pb-3">

            <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Parameters</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Results</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                    <form>
                        <div class="mb-3 row">
                            <label for="staticEmail" class="col-md-3 col-lg-2 col-form-label">ID</label>
                            <div class="col-md-9 col-lg-10">
                                <input type="text" class="form-control" id="staticEmail" value="">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-md-3 col-lg-2 col-form-label">Class</label>
                            <div class="col-md-9 col-lg-10">
                                <input type="password" class="form-control" id="inputPassword">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-md-3 col-lg-2 col-form-label">Assessment Type</label>
                            <div class="col-md-9 col-lg-10">
                                <input type="password" class="form-control" id="inputPassword">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <button class="btn btn-primary" type="submit">Search</button>
                        </div>
                    </form>
                </div>

                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                    
                </div>
            </div>

        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'QueryView',
    components: {
      
    }
  }
  </script>
  