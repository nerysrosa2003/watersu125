https://luis1.herokuapp.com/visitproxy?userName=admin&caseNumber=-1&visitStatus=P

from that whole response 
notice the row is two lines

date=visitDate
doctor=doctorName
remove the info in parenthesis to the right of date (1661-9921)


menu top right
delete  :  call DELETE
   String url = Utils.herokuUrl+"visit/"+id;  (example visit/9841
   
delete should ask popup confirmation (are you sure?)   
   
   
record ping : 
show modal message with text "(casenumber+"-"+id)"  example "(1661-9841)"




[
    {
        "visitDate": "July 23 2019",
        "nextVisitDate": "",
        "procDate": "July 23 2019",
        "procCode": "S3000",
        "refDate": "",
        "procName": "Bilat dil retinal exam",
        "procAlias": "",
        "refHospital": "",
        "refDoctor": "",
        "refSpecialty": "",
        "refComments": "",
        "procStatus": "P",
        "procResults": "P",
        "procComments": "",
        "userName": "admin",
        "caseNumber": 1661,
        "doctorName": "Carlos Frank-Haematologist",
        "hospitalName": "Luis hospital",
        "onlineRec": "N",
        "paperRec": "N",
        "visitStatus": "P",
        "visitType": "P",
        "comments": "",
        "symptoms": [],
        "diagnoses": [],
        "meds": [],
        "labs": [],
        "risks": [],
        "alternatives": [],
        "instructions": [],
        "prodiags": [],
        "_links": {
            "self": {
                "href": "https://luis1.herokuapp.com/visitproxy/9841"
            },
            "update": {
                "href": "https://luis1.herokuapp.com/visitproxy/9841"
            },
            "delete": {
                "href": "https://luis1.herokuapp.com/visitproxy/9841"
            }
        },
        "id": 9841
    },
    {
        "visitDate": "July 23 2019",
        "nextVisitDate": "",
        "procDate": "",
        "procCode": "",
        "refDate": "",
        "procName": "",
        "procAlias": "",
        "refHospital": "",
        "refDoctor": "",
        "refSpecialty": "",
        "refComments": "",
        "procStatus": "",
        "procResults": "",
        "procComments": "",
        "userName": "admin",
        "caseNumber": 1661,
        "doctorName": "Lucy D. Doe-retina specialist",
        "hospitalName": "regional hospital",
        "onlineRec": "N",
        "paperRec": "N",
        "visitStatus": "P",
        "visitType": "R",
        "comments": "",
        "symptoms": [],
        "diagnoses": [],
        "meds": [],
        "labs": [],
        "risks": [],
        "alternatives": [],
        "instructions": [],
        "prodiags": [],
        "_links": {
            "self": {
                "href": "https://luis1.herokuapp.com/visitproxy/9921"
            },
            "update": {
                "href": "https://luis1.herokuapp.com/visitproxy/9921"
            },
            "delete": {
                "href": "https://luis1.herokuapp.com/visitproxy/9921"
            }
        },
        "id": 9921
    },
    {
        "visitDate": "July 23 2019",
        "nextVisitDate": "",
        "procDate": "July 23 2019",
        "procCode": "2022F",
        "refDate": "",
        "procName": "Dil retina exam interp rev",
        "procAlias": "",
        "refHospital": "",
        "refDoctor": "",
        "refSpecialty": "",
        "refComments": "",
        "procStatus": "P",
        "procResults": "P",
        "procComments": "",
        "userName": "admin",
        "caseNumber": 1661,
        "doctorName": "Lucy D. Doe-retina specialist",
        "hospitalName": "Baptist Hospital",
        "onlineRec": "N",
        "paperRec": "N",
        "visitStatus": "P",
        "visitType": "P",
        "comments": "",
        "symptoms": [],
        "diagnoses": [],
        "meds": [],
        "labs": [],
        "risks": [
            {
                "id": 17551,
                "visitNumber": 9931,
                "caseNumber": 1661,
                "riskDesc": "Infeccion",
                "estado": ""
            },
            {
                "id": 17561,
                "visitNumber": 9931,
                "caseNumber": 1661,
                "riskDesc": "infection",
                "estado": ""
            },
            {
                "id": 17571,
                "visitNumber": 9931,
                "caseNumber": 1661,
                "riskDesc": "PVR",
                "estado": ""
            }
        ],
        "alternatives": [
            {
                "id": 10491,
                "caseNumber": 1661,
                "visitNumber": 9931,
                "alternativeDesc": "pneumatic retinopexy"
            },
            {
                "id": 10501,
                "caseNumber": 1661,
                "visitNumber": 9931,
                "alternativeDesc": "scleral buckle"
            }
        ],
        "instructions": [
            {
                "id": 13881,
                "caseNumber": 1661,
                "visitNumber": 9931,
                "instructionDesc": "no running"
            },
            {
                "id": 13891,
                "caseNumber": 1661,
                "visitNumber": 9931,
                "instructionDesc": "no water in eye"
            }
        ],
        "prodiags": [
            {
                "id": 4031,
                "visitNumber": 9931,
                "caseNumber": 1661,
                "diagnoseDesc": "Erysipelas(A46)",
                "diagnoseCode": ""
            }
        ],
        "_links": {
            "self": {
                "href": "https://luis1.herokuapp.com/visitproxy/9931"
            },
            "update": {
                "href": "https://luis1.herokuapp.com/visitproxy/9931"
            },
            "delete": {
                "href": "https://luis1.herokuapp.com/visitproxy/9931"
            }
        },
        "id": 9931
    },
    {
        "visitDate": "July 22 2019",
        "nextVisitDate": "",
        "procDate": "",
        "procCode": "",
        "refDate": "",
        "procName": "",
        "procAlias": "",
        "refHospital": "",
        "refDoctor": "",
        "refSpecialty": "",
        "refComments": "",
        "procStatus": "",
        "procResults": "",
        "procComments": "",
        "userName": "admin",
        "caseNumber": 1661,
        "doctorName": "Carlos Frank-Haematologist",
        "hospitalName": "Luis hospital",
        "onlineRec": "N",
        "paperRec": "N",
        "visitStatus": "P",
        "visitType": "F",
        "comments": "",
        "symptoms": [],
        "diagnoses": [],
        "meds": [],
        "labs": [],
        "risks": [],
        "alternatives": [],
        "instructions": [],
        "prodiags": [],
        "_links": {
            "self": {
                "href": "https://luis1.herokuapp.com/visitproxy/9831"
            },
            "update": {
                "href": "https://luis1.herokuapp.com/visitproxy/9831"
            },
            "delete": {
                "href": "https://luis1.herokuapp.com/visitproxy/9831"
            }
        },
        "id": 9831
    }
]