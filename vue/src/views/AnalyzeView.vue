<template>
    <div class="container">
        <div class="card pt-3 ps-5 pe-5 pb-3" style="max-width: 800px; margin: 0 auto;">
          <select class="form-select" id="chart-select" aria-label="Default select example" @change="show_chart">
              <option selected disabled>Select statistical chart</option>
              <option value="plotChartAssessmentByClass">Assessment Comparison by Class</option>
              <!-- <option value="plotChartDSEvsExam">DSE Results Against Internal Exam</option> -->
              <option value="plotChartDSEGrade">DSE Resuls by Grade</option>
          </select>
          
          <div id="chart_area" class="mt-5 mb-3">

            <div id="chart1" class="toggle-content">
              <apexchart type="bar" height="500" :options="options1" :series="series1"></apexchart>
            </div>
    
            <div id="chart3" class="toggle-content">
              <apexchart type="pie" height="500" :options="options3" :series="series3"></apexchart>
            </div>

          </div>
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
import { ref } from "vue";

// const options1 = ref({});
// const series1 = ref([]);
const options1 = ref({});
const series1 = ref([]);
const options3 = ref({});
const series3 = ref([]);

export default {
  name: 'AnalyzeView',
  methods: {
    show_chart() {
      let choice = document.getElementById("chart-select").value;

      if (choice == "plotChartAssessmentByClass") {
        document.getElementById("chart1").classList.add("is-visible");
        document.getElementById("chart3").classList.remove("is-visible");
      }
      else if (choice == "plotChartDSEGrade") {
        document.getElementById("chart3").classList.add("is-visible");
        document.getElementById("chart1").classList.remove("is-visible");
      }

      this.loadChartAssessmentByClass();
      this.loadChartDSEGrade();
    },

    async loadChartAssessmentByClass() {
      
      var response1 = await fetch("/api/plotChartAssessmentByClass");

      if (response1.ok) {
        var json = await response1.json();
        let date = [];
        let A = [];
        let B = [];
        let C = [];
        let D = [];
        for (let i=0; i<json.result.length; i++) {
          let adate = json.result[i]._id.AssessmentDate;
          let sclass = json.result[i]._id.Class;
          let avg = Math.round(json.result[i].avg, 0);

          if (! date.includes(adate)) {
            date.push(adate);
          }
          if (sclass=="A") A.push(sclass=="A"?avg:null);
          if (sclass=="B") B.push(sclass=="B"?avg:null);
          if (sclass=="C") C.push(sclass=="C"?avg:null);
          if (sclass=="D") D.push(sclass=="D"?avg:null);

        }

        series1.value = [{
            name: 'Class A',
            data: A
          }, {
            name: 'Class B',
            data: B
          }, {
            name: 'Class C',
            data: C
          }, {
            name: 'Class D',
            data: D
          }];
        
        options1.value = {
          labels: date.map(a => new Date(a).toLocaleDateString("en-UK")),
          title: {
            text: "Assessment Score Comparison by Class"
          },
          legend: {
            position: 'bottom',
          }
        };
      }
    },


    async loadChartDSEGrade() {
      var response3 = await fetch("/api/plotChartDSEGrade");

      if (response3.ok) {
        var dse = await response3.json();
        
        for (let i=0; i<dse.result.length; i++) {
          if (dse.result[i]._id == "6")
            dse.result[i]._id = "5*";
          else if (dse.result[i]._id == "7")
            dse.result[i]._id = "5**";
        }

        series3.value = dse.result.map(a => a.count); 
        options3.value = {
          labels: dse.result.map(a => "Grade " + a._id),
          title: {
            text: "DSE Results by Grade"
          },
          legend: {
            position: 'bottom',
          }
        };
      }
    }
  },
  setup() {
      return {
        
        options1, series1, options3, series3
      }
  }
}
</script>
  