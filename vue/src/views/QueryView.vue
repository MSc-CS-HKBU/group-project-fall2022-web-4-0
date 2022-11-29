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
                                <input type="number" class="form-control" id="staticEmail"  min="100000" max="999999">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-md-3 col-lg-2 col-form-label">Class</label>
                            <div class="col-md-9 col-lg-10">
                                <div class="btn-group" style="width:100%" role="group" aria-label="Basic checkbox toggle button group">
                                    <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
                                    <label class="btn btn-outline-dark" for="btncheck1">A</label>

                                    <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
                                    <label class="btn btn-outline-dark" for="btncheck2">B</label>

                                    <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
                                    <label class="btn btn-outline-dark" for="btncheck3">C</label>

                                    <input type="checkbox" class="btn-check" id="btncheck4" autocomplete="off">
                                    <label class="btn btn-outline-dark" for="btncheck4">D</label>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-md-3 col-lg-2 col-form-label">Assessment Type</label>
                            <div class="col-md-9 col-lg-10">
                                <select class="form-select" >
                                    <option selected disabled>Select assessement type:</option>
                                    <option value="1">Test</option>
                                    <option value="2">Exam</option>
                                    <option value="3">DSE</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-md-3 col-lg-2 col-form-label">Assessment Date</label>
                            <div class="col-md-4 col-lg-4">
                                <input type="date" id="start" class="form-control" name="period-start" value="2018-09-01">
                            </div>
                            <div class="col-md-1 col-lg-2">
                                <div style="line-height: 40px;">to</div>
                            </div>
                            <div class="col-md-4 col-lg-4">
                                <input type="date" id="end" class="form-control" name="period-end" value="2022-08-31">
                            </div>
                        </div>

                        


                        <div class="mb-3 row">
                            <button class="btn btn-dark" type="submit">Search</button>
                        </div>
                    </form>
                </div>

                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                    
                </div>
            </div>

        </div>
    </div>
  </template>
  

<style>
.nav-tabs .nav-link {
  color: #422874;
}
.nav-tabs .nav-link:hover {
  color: #550050;
}


.btn:hover {
  background-color: #550050;
}


</style>







  <script>
  
  export default {
    name: 'QueryView',
    components: {
      
    }
  }
  </script>
  