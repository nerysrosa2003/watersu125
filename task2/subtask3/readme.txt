https://luis1.herokuapp.com/lab?userName=admin  

[
    {
        "userName": "admin",
        "visitNumber": 9591,
        "caseNumber": 1631,
        "labDesc": "11-Deoxycorticosterone [Mass/volume] in Dried blood spot(Alias:)(LOINC:53347-1)(CPT:)",
        "labCode": "",
        "loincCode": "53347-1",
        "labStatus": "O",
        "id": 11
    },
    {
        "userName": "admin",
        "visitNumber": 9821,
        "caseNumber": 1661,
        "labDesc": "11-Deoxycorticosterone [Mass/volume] in Dried blood spot(Alias:)(LOINC:53347-1)(CPT:)",
        "labCode": "",
        "loincCode": "53347-1",
        "labStatus": "O",
        "id": 41
    }
]


the menu right

 
  
  
  delete,negative,positive,inconclusive,
  just set labstatus field to uppercase first letter and send POST
  
   String url = Utils.herokuUrl+"lab/"+lab.id;
   
   
   all 4 should ask pop up confirmation "are you sure?"
   
   
 note: every action will delete record from view (meaning is no longer pending results) 