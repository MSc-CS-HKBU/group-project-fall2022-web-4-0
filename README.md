## group-project-fall2022-web-4-0
# Members:
# TSOI Wai Chuen Thomas  (21469385) - Frontend
# YIP Chi Hong           (21467358) - Backend

## Shared Git Repository
# Frontend --- under [vue] directory
# Backend  --- under [express] directory

# Online API Documentation (by Swagger)
http://localhost:3000/api-doc/
Note: Only GET can show result

## Data Schema or Sample Inputs
database [assessmentDB]
collection [assessment]
{
  "StudentID": "51235123",
  "Subject": "MATH",
  "Class": "4A",
  "AssessmentType": "Test",
  "GradingType": "Score",
  "MaxScore": 100,
  "MinScore": 0,
  "Score": 70,
  "GradeRange": null,
  "Grade": null,
  "Rank": null,
  "AssessmentDate": "2022-10-10"
}

{
  "StudentID": "51235123",
  "SubjectID": "1",
  "AssessmentType": "Project",
  "GradingType": "Grade",
  "MaxScore": null,
  "MinScore": null,
  "Score": null,
  "GradeRange": "A+ A A- B+ B B- C D E F U",
  "Grade": "A-",
  "Rank": 3,
  "AssessmentDate": "2022-10-11"
}

{
  "StudentID": "51235123",
  "SubjectID": "2",
  "AssessmentType": "DSE",
  "GradingType": "Grade",
  "MaxScore": null,
  "MinScore": null,
  "Score": null,
  "GradeRange": "5** 5* 5 4 3 2 1 U",
  "Grade": "5*",
  "Rank": null,
  "AssessmentDate": "2022-04-11"
}
Note: GradingType: Score or Grade

# Sample Query API Calls for testing
http://localhost:3000/api/assessments/query?StudentID=282323
http://localhost:3000/api/assessments/query?Subject=ENG&AssessmentType=DSE
http://localhost:3000/api/assessments/query?Class=A&Subject=ENG&AssessmentType=Test
http://localhost:3000/api/assessments/query?Class=C&StartDate=2021-01-01&EndDate=2022-11-11
http://localhost:3000/api/assessments/query?Class=C&StartDate="2021-09-03T00:00:00.000Z"&EndDate="2022-11-11"
http://localhost:3000/api/assessments/query?Subject=ENG&AssessmentType=DSE&page=3 (Default: page=1 & perPage=20)
