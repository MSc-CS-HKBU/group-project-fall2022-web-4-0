<template>
    <div class="container">
        <div class="card pt-3 ps-5 pe-5 pb-3">
            <select class="form-select" id="chart-select" aria-label="Default select example">
                <option selected disabled>Select statistical chart</option>
                <option value="1">Assessment Comparison by Class</option>
                <option value="2">DSE Results Against Internal Exam</option>
                <option value="3">DSE Resuls by Grade</option>
            </select>
            
            <!-- <div class="dropdown">
                <button class="btn btn-dark dropdown-toggle" type="button" id="chart" data-bs-toggle="dropdown" aria-expanded="false">
                    Select statistical chart
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item active" href="#">Assessment Comparison by Class</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div> -->

        </div>
    </div>
  </template>


<style>
#chart, .dropdown-menu {
    width: 100%;
    max-width: 500px;
}

.dropdown-item.active {
    
  background-color: #550050;
}

.btn:hover {
  background-color: #550050;
}


</style>
  
  <script>
  
  export default {
    name: 'AnalyzeView',
    components: {
      
    }
  }
  </script>
  