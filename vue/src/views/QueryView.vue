<template>
    <div class="container">
        <div class="card pt-3 ps-5 pe-5 pb-3" style="max-width: 800px; margin: 0 auto;">

            <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="params-tab" data-bs-toggle="tab" data-bs-target="#params-tab-pane" type="button" role="tab" aria-controls="params-tab-pane" aria-selected="true">Parameters</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="results-tab" data-bs-toggle="tab" data-bs-target="#results-tab-pane" type="button" role="tab" aria-controls="results-tab-pane" aria-selected="false">Results</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="params-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">

                    <form method="post" @submit.prevent="search" id="input_form">
                        <div class="mb-3 row">
                            <label for="staticEmail" class="col-md-3 col-lg-3 col-form-label">Student ID</label>
                            <div class="col-md-9 col-lg-9">
                                <input type="number" class="form-control text-center" id="id" name="id" min="100000" max="999999" maxlength="6" placeholder="Student ID">
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-md-3 col-lg-3 col-form-label">Subject</label>
                            <div class="col-md-9 col-lg-9">
                                <select class="form-select text-center" id="subject" name="subject">
                                    <option value="" selected disabled>Select subject:</option>
                                    <option value="CHIN">Chinese</option>
                                    <option value="ENG">English</option>
                                    <option value="MATH">Mathematics</option>
                                    <option value="LIBS">Liberal Studies</option>
                                </select>
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-md-3 col-lg-3 col-form-label">Class</label>
                            <div class="col-md-9 col-lg-9">
                                <div class="btn-group" style="width:100%" role="group" aria-label="Basic checkbox toggle button group">
                                    <input type="radio" class="btn-check" id="class-A" name="class" value="A" autocomplete="off">
                                    <label class="btn btn-outline-dark" for="class-A">A</label>

                                    <input type="radio" class="btn-check" id="class-B" name="class" value="B" autocomplete="off">
                                    <label class="btn btn-outline-dark" for="class-B">B</label>

                                    <input type="radio" class="btn-check" id="class-C" name="class" value="C" autocomplete="off">
                                    <label class="btn btn-outline-dark" for="class-C">C</label>

                                    <input type="radio" class="btn-check" id="class-D" name="class" value="D" autocomplete="off">
                                    <label class="btn btn-outline-dark" for="class-D">D</label>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-md-3 col-lg-3 col-form-label">Assessment Type</label>
                            <div class="col-md-9 col-lg-9">
                                <select class="form-select text-center" id="assessment_type"  name="assessment_type">
                                    <option value="" selected disabled>Select assessement type:</option>
                                    <option value="Test">Test</option>
                                    <option value="Exam">Exam</option>
                                    <option value="DSE">DSE</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-md-3 col-lg-3 col-form-label">Assessment Date</label>
                            <div class="col-md-4 col-lg-4">
                                <input type="date" id="assessment_date-start" class="form-control" name="assessment_date-start" value="2018-09-01">
                            </div>
                            <div class="col-md-1 col-lg-1">
                                <div style="line-height: 40px;">to</div>
                            </div>
                            <div class="col-md-4 col-lg-4">
                                <input type="date" id="assessment_date-end" class="form-control" name="assessment_date-end" value="2022-08-31">
                            </div>
                        </div>

                        
                        <div class="mb-3 row">
                            <button class="btn btn-dark" type="submit">Search records</button>
                        </div>
                    </form>

                </div>

                <div class="tab-pane fade" id="results-tab-pane" role="tabpanel" aria-labelledby="results-tab" tabindex="0">
                    <div class="list-group" id="results-list" @click="selectItem">
                        <a href="#" class="list-group-item list-group-item-action text-start" v-for="(item, index) in records" :key="index" @click="selectItem">
                            <div class="d-flex w-100 justify-content-between">
                            <h6 class="mb-1"><strong>{{ item.StudentID }}</strong> | {{ item.Class }} | {{ item.Subject }}
                                <div v-if="item.GradingType=='Score'"><strong>Score: </strong>{{ item.Score }}</div>
                                <div v-if="item.GradingType=='Grade'"><strong>Grade: </strong>{{ item.Grade }}</div>
                            </h6>
                            <small class="text-muted"> {{ item.AssessmentType }}@{{ new Date(item.AssessmentDate).toLocaleDateString("en-UK") }}</small>
                            </div>
                        </a>
                    </div>

                    <ul class="pagination mt-3" id="pagination">
                        <li class="page-item" v-for="(item, index) in pages" :key="index" @click="selectPage(item)"><a class="page-link" href="#">{{ item }}</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="modal" tabindex="-1" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
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
let StudentID, Subject, Class, AssessmentType, StartDate, EndDate, page=1;


export default {
    name: 'QueryView',
    data() {
        return {
            records: [],
            pages: []
        }
    },
    methods: {
        search() {
            StudentID = document.getElementById("id").value;
            Subject = document.getElementById("subject").value;

            Class = document.querySelector('input[name="class"]:checked') ? document.querySelector('input[name="class"]:checked').value : null;

            AssessmentType = document.getElementById("assessment_type").value;
            StartDate = document.getElementById("assessment_date-start").value;
            EndDate = document.getElementById("assessment_date-end").value;
            
            document.querySelector('#myTab button[data-bs-target="#results-tab-pane"]').click() 
            this.loadPage(1);
        },

        async loadPage(p) {
            page = p
            var url = '/api/assessments/query?';
            let params = new URLSearchParams({
                StudentID: StudentID,
                Subject: Subject,
                Class: Class,
                AssessmentType: AssessmentType,
                StartDate: StartDate,
                EndDate: EndDate,
                page: page
            }); 

            let response = await fetch(url + params.toString());


            if (response.ok) {
                let data = await response.json();
                this.records = data.assessment;

                let arr = [];
                for (let i=1; i<data.pages; i++) {
                    arr.push(i);
                }

                this.pages = arr;
            } else {
                console.log("HTTP-Error: " + response.status);
            }
        },

        selectItem() {
            
        },

        selectPage(p) {
            this.loadPage(p)
        },

        showAssessment() {

        }
    }
}
</script>
  