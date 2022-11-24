# group-project-fall2022-web-4-0
database [assessmentsDB]
collection [assessments]
{
    StudentID,
    SubjectID,
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
  "SubjectID": "3",
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