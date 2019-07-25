https://luis1.herokuapp.com/maindiag?userName=admin

level one  diagnosedesc

level two  hardcoded differential diagnosis,required labs,symptoms

level three  confusedesc, labdesc, symtomdesc


drawable letters to the right drawable uppercase first letter

 "labStatus": "M"
  "probability": "high"           
   "symptomStatus": "N"
   
   
   colors of the letters
 "labStatus": P:blue, anyother:black    (P for positive result)
  "probability": "high"   H:red anyother black    (H for this diseased is highly misdiagnosed)        
   "symptomStatus": "N"      P:blue, anyother black    (P for patient presents symptoms at time of visit
   
   
   easy for you... you are a master
   



[
    {
        "visitNumber": 9591,
        "caseNumber": 1631,
        "errorMargin": 0,
        "diagnoseDesc": "Retinal detachment with giant retinal tear, bilateral(H33.033)",
        "diagnoseIcd9": "",
        "diagnoseAlias": "",
        "hereditary": "",
        "estado": "",
        "diagnoseCode": "H33.033",
        "diaglabs": [
            {
                "id": 291,
                "diagnoseCode": "H33.033",
                "loincCode": "33242-9",
                "labDesc": "Fungi.filamentous [Presence] in Urine by Computer assisted method(Alias:)(LOINC:33242-9)(CPT:)",
                "labStatus": "M"
            },
            {
                "id": 301,
                "diagnoseCode": "H33.033",
                "loincCode": "17947-3",
                "labDesc": "Fungus # 2 identified in Unspecified specimen by Culture(Alias:)(LOINC:17947-3)(CPT:)",
                "labStatus": "M"
            }
        ],
        "confuses": [
            {
                "id": 1171,
                "diagnoseCode": "H33.033",
                "confuseCode": "H31.11",
                "confuseDesc": "Age-related choroidal atrophy(H31.11)",
                "probability": "high"
            },
            {
                "id": 1161,
                "diagnoseCode": "H33.033",
                "confuseCode": "H32",
                "confuseDesc": "Chorioretinal disorders in diseases classified elsewhere(H32)",
                "probability": "high"
            }
        ],
        "diagsymptoms": [
            {
                "id": 1551,
                "diagnoseCode": "H33.033",
                "symptomCode": "R64",
                "symptomDesc": "Cachexia(R64)",
                "symptomStatus": "Y"
            },
            {
                "id": 1561,
                "diagnoseCode": "H33.033",
                "symptomCode": "R04",
                "symptomDesc": "Hemorrhage from respiratory passages(R04)",
                "symptomStatus": "N"
            }
        ],
        "id": 12111
    },
    {
        "visitNumber": 9591,
        "caseNumber": 1631,
        "errorMargin": 0,
        "diagnoseDesc": "Mixed hyperlipidemia(E78.2)",
        "diagnoseIcd9": "",
        "diagnoseAlias": "",
        "hereditary": "",
        "estado": "",
        "diagnoseCode": "E78.2",
        "diaglabs": [],
        "confuses": [],
        "diagsymptoms": [],
        "id": 12101
    },
    {
        "visitNumber": 9671,
        "caseNumber": 1621,
        "errorMargin": 0,
        "diagnoseDesc": "Herpesviral infection, unspecified(B00.9)",
        "diagnoseIcd9": "",
        "diagnoseAlias": "",
        "hereditary": "",
        "estado": "",
        "diagnoseCode": "B00.9",
        "diaglabs": [],
        "confuses": [],
        "diagsymptoms": [],
        "id": 12011
    },
    {
        "visitNumber": 9571,
        "caseNumber": 1621,
        "errorMargin": 0,
        "diagnoseDesc": "Erysipelas(A46)",
        "diagnoseIcd9": "",
        "diagnoseAlias": "",
        "hereditary": "",
        "estado": "",
        "diagnoseCode": "A46",
        "diaglabs": [],
        "confuses": [],
        "diagsymptoms": [],
        "id": 11971
    },
    {
        "visitNumber": 9821,
        "caseNumber": 1661,
        "errorMargin": 0,
        "diagnoseDesc": "Acquired pure red cell aplasia [erythroblastopenia](D60)",
        "diagnoseIcd9": "",
        "diagnoseAlias": "",
        "hereditary": "",
        "estado": "",
        "diagnoseCode": "D60",
        "diaglabs": [],
        "confuses": [],
        "diagsymptoms": [],
        "id": 12191
    },
    {
        "visitNumber": 9571,
        "caseNumber": 1621,
        "errorMargin": 0,
        "diagnoseDesc": "Abnormal tumor markers(R97)",
        "diagnoseIcd9": "",
        "diagnoseAlias": "",
        "hereditary": "",
        "estado": "",
        "diagnoseCode": "R97",
        "diaglabs": [],
        "confuses": [],
        "diagsymptoms": [],
        "id": 11981
    },
    {
        "visitNumber": 9821,
        "caseNumber": 1661,
        "errorMargin": 0,
        "diagnoseDesc": "Abn radlgc find on dx imaging renal pelv, ureter, or blddr(R93.41)",
        "diagnoseIcd9": "",
        "diagnoseAlias": "",
        "hereditary": "",
        "estado": "",
        "diagnoseCode": "R93.41",
        "diaglabs": [],
        "confuses": [],
        "diagsymptoms": [],
        "id": 12181
    }
]