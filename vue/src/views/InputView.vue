<template>
    <div class="container">

        <div class="card pt-3 ps-5 pe-5 pb-3">
          <div id="liveAlertPlaceholder"></div>

          <form method="post" @submit.prevent="presubmit" id="input_form">
            <div class="mb-3 row">
                <label for="staticEmail" class="col-md-3 col-lg-2 col-form-label">ID</label>
                <div class="col-md-9 col-lg-10">
                    <input type="number" class="form-control text-center" id="id" name="id" min="100000" max="999999" maxlength="6" required placeholder="Student ID">
                </div>
            </div>

            
            <div class="mb-3 row">
                <label for="inputPassword" class="col-md-3 col-lg-2 col-form-label">Subject</label>
                <div class="col-md-9 col-lg-10">
                    <select class="form-select text-center" id="subject" name="subject" required>
                        <option selected disabled>Select subject:</option>
                        <option value="CHIN">Chinese</option>
                        <option value="ENG">English</option>
                        <option value="MATH">Mathematics</option>
                        <option value="LIBS">Liberal Studies</option>
                    </select>
                </div>
            </div>

            <div class="mb-3 row">
                <label for="inputPassword" class="col-md-3 col-lg-2 col-form-label">Class</label>
                <div class="col-md-9 col-lg-10">
                    <div class="btn-group" style="width:100%" role="group" aria-label="Basic checkbox toggle button group">
                        <input type="radio" class="btn-check" id="class-A" name="class" value="A" autocomplete="off" required checked>
                        <label class="btn btn-outline-dark" for="class-A">A</label>

                        <input type="radio" class="btn-check" id="class-B" name="class" value="B" autocomplete="off" required>
                        <label class="btn btn-outline-dark" for="class-B">B</label>

                        <input type="radio" class="btn-check" id="class-C" name="class" value="C" autocomplete="off" required>
                        <label class="btn btn-outline-dark" for="class-C">C</label>

                        <input type="radio" class="btn-check" id="class-D" name="class" value="D" autocomplete="off" required>
                        <label class="btn btn-outline-dark" for="class-D">D</label>
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-md-3 col-lg-2 col-form-label">Assessment Date</label>
                <div class="col-md-9 col-lg-10">
                    <input type="date" class="form-control text-center" id="assessment_date" name="assessment_date" value="2022-09-01" required>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-md-3 col-lg-2 col-form-label">Assessment Type</label>
                <div class="col-md-9 col-lg-10">
                    <select class="form-select text-center" id="assessment_type"  name="assessment_type" required>
                        <option selected disabled>Select assessement type:</option>
                        <option value="Test">Test</option>
                        <option value="Exam">Exam</option>
                        <option value="DSE">DSE</option>
                    </select>
                </div>
            </div>

            <div class="mb-3 row">
                <label for="inputPassword" class="col-md-3 col-lg-2 col-form-label">Grading Type</label>
                <div class="col-md-9 col-lg-10">
                    <div class="btn-group" style="width:100%" role="group">
                        <input type="radio" class="btn-check" id="grading_type-score" name="grading_type" autocomplete="off" value="Score" required @change="changeSection" checked>
                        <label class="btn btn-outline-dark" for="grading_type-score">Score</label>

                        <input type="radio" class="btn-check" id="grading_type-grade" name="grading_type" autocomplete="off" value="Grade" required @change="changeSection">
                        <label class="btn btn-outline-dark" for="grading_type-grade">Grade</label>
                    </div>
                </div>
            </div>

            <div id="section-score" class="toggle-content is-visible">
              <div class="mb-3 row">
                  <label for="staticEmail" class="col-md-3 col-lg-2 col-form-label">Max Score</label>
                  <div class="col-md-9 col-lg-10">
                      <input type="number" class="form-control text-center" id="max_score" name="max_score" min="0" max="9999" placeholder="100">
                  </div>
              </div>

              <div class="mb-3 row">
                  <label for="staticEmail" class="col-md-3 col-lg-2 col-form-label">Min Score</label>
                  <div class="col-md-9 col-lg-10">
                      <input type="number" class="form-control text-center" id="min_score" name="min_score" min="0" max="9999" placeholder="0">
                  </div>
              </div>

              <div class="mb-3 row">
                  <label for="staticEmail" class="col-md-3 col-lg-2 col-form-label">Score</label>
                  <div class="col-md-9 col-lg-10">
                      <input type="number" class="form-control text-center" id="score" name="score" min="0" max="9999" placeholder="80">
                  </div>
              </div>

              <div class="mb-3 row">
                <label for="staticEmail" class="col-md-3 col-lg-2 col-form-label">Rank</label>
                <div class="col-md-9 col-lg-10">
                    <input type="number" class="form-control text-center" id="rank" name="rank" min="1" max="999" placeholder="10">
                </div>
              </div>
            

            </div>


            <div id="section-grade" class="toggle-content">
              <div class="mb-3 row">
                  <label for="inputPassword" class="col-md-3 col-lg-2 col-form-label">Grade Range</label>
                  <div class="col-md-9 col-lg-10">
                      <select class="form-select text-center" id="grade_range" name="grade_range">
                          <option selected disabled>Select grade range:</option>
                          <option value="1 2 3 4 5 6 7" selected>1 2 3 4 5 5* 5**</option>
                      </select>
                  </div>
              </div>
              <div class="mb-3 row">
                  <label for="inputPassword" class="col-md-3 col-lg-2 col-form-label">Grade Range</label>
                  <div class="col-md-9 col-lg-10">
                      <select class="form-select text-center" id="grade" name="grade">
                          <option selected disabled>Select grade:</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">5*</option>
                          <option value="7">5**</option>
                      </select>
                  </div>
              </div>
            </div>

            <div class="mb-3 row">
                <button class="btn btn-dark" type="submit">Search</button>
            </div>
        </form>
        </div>
    </div>
  </template>
  
<style>

.toggle-content {
  display: none;
  height: 0;
  overflow: hidden;
}

.toggle-content.is-visible {
  display: block;
  height: auto;
}

</style>


<script>

  export default {
    name: 'InputView',

    methods: {
      changeSection() {
        let grading_type = document.querySelector("input[name=grading_type]:checked").value ? document.querySelector("input[name=grading_type]:checked").value : "Score";

        if (grading_type == "Score") {
          if (! document.getElementById("section-score").classList.contains("is-visible")) {
            document.getElementById("section-score").classList.add("is-visible");
          }

          if (document.getElementById("section-grade").classList.contains("is-visible")) {
            document.getElementById("section-grade").classList.remove("is-visible");
          }
        } else {
          if (! document.getElementById("section-grade").classList.contains("is-visible")) {
            document.getElementById("section-grade").classList.add("is-visible");
          }

          if (document.getElementById("section-score").classList.contains("is-visible")) {
            document.getElementById("section-score").classList.remove("is-visible");
          }
        }
      },

    async presubmit() {
      let StudentID = document.getElementById("id").value;
      let Subject = document.getElementById("subject").value;
      let Class = document.querySelector('input[name="class"]:checked').value;
      let AssessmentType = document.getElementById("assessment_type").value;
      let GradingType = document.querySelector('input[name="grading_type"]:checked').value;
      let MaxScore = document.getElementById("max_score").value;
      let MinScore = document.getElementById("min_score").value;
      let Score = document.getElementById("score").value;
      let Rank = document.getElementById("rank").value;
      let GradeRange = document.getElementById("grade_range").value;
      let Grade = document.getElementById("grade").value;
      let AssessmentDate = document.getElementById("assessment_date").value;

      StudentID = parseInt(StudentID);
      if (GradingType == "Score") {
        MaxScore = parseInt(MaxScore);
        MinScore = parseInt(MinScore);
        Score = parseInt(Score);
        Rank = parseInt(Rank);
        Grade = null;
        GradeRange = null;
      }
      else if (GradingType == "Grade") {
        MaxScore = null;
        MinScore = null;
        Score = null;
        Rank = null;
      }

      let response = await fetch("/api/assessment", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          StudentID: StudentID,
          Subject: Subject,
          Class: Class,
          AssessmentType: AssessmentType,
          GradingType: GradingType,
          MaxScore: MaxScore,
          MinScore: MinScore,
          Score: Score,
          Rank: Rank,
          Grade: Grade,
          GradeRange: GradeRange,
          AssessmentDate: AssessmentDate
        })
      });

      if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();        
        
        console.log("ok" + json.id);
        this.showAlert(json.id);
        document.getElementById("input_form").reset();
      } else {
        console.log("HTTP-Error: " + response.status);
      }
    },

    showAlert(id) {
      let alertPlaceholder = document.getElementById('liveAlertPlaceholder')
      const wrapper = document.createElement('div')
        wrapper.innerHTML = [
          `<div class="alert alert-success alert-dismissible fade show" role="alert">`,
          `  <span class="app-name">marko {</span> New mark record successfully inserted: <strong>${id}</strong>`,
          `  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`,
          `</div>`
        ].join('')

        alertPlaceholder.append(wrapper)
    }

  }
}
</script>
  