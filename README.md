## group-project-fall2022-web-4-0
# Members:
# TSOI Wai Chuen Thomas  (21469385) - Frontend
# YIP Chi Hong           (21467358) - Backend

## Shared Git Repository
# Frontend --- under [vue] directory
# Backend  --- under [express] directory

## Data Schema
database [assessmentDB]
collection [assessment]
{
    StudentID,
    Subject,
    Class,
    AssessmentType,
    GradingType,
    MaxScore,
    MinScore,
    GradeRange,
    Grade,
    Rank,
    AssessmentDate,
}

Note: GradingType: Score or Grade

Sample Inputs:

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