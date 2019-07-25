
open cases
https://luis1.herokuapp.com/medcase/?type=A&userName=admin

close cases
https://luis1.herokuapp.com/medcase/?type=C&userName=admin


right menu
delete

  private void delete(int id){
        String url = Utils.herokuUrl+"medcase/"+id;
        StringRequest request = new StringRequest(Request.Method.DELETE, url, new Response.Listener<String>(){
		
		
close:
  "caseStatus": "C",
  String url = Utils.herokuUrl+"medcase/"+caseMaster.id;
            JsonObjectRequest request = new JsonObjectRequest(Request.Method.PUT, url, json,
reopen:
  "caseStatus": "A",
  String url = Utils.herokuUrl+"medcase/"+caseMaster.id;
            JsonObjectRequest request = new JsonObjectRequest(Request.Method.PUT, url, json,

all three should ask popup confirmation ( "are you sure you want to delete/close/reopen)
			
			



[
    {
        "userName": "admin",
        "doctorName": "Kat Perez-optometrist",
        "hospitalName": "regional hospital",
        "specialty": "",
        "description": "check my retina",
        "partName": "Eye",
        "caseDate": "March 09 2019",
        "pampIndex": 638,
        "caseStatus": "C",
        "_links": {
            "self": {
                "href": "https://luis1.herokuapp.com/medcase/1631"
            },
            "update": {
                "href": "https://luis1.herokuapp.com/medcase/1631"
            },
            "delete": {
                "href": "https://luis1.herokuapp.com/medcase/1631"
            }
        },
        "id": 1631
    },
    {
        "userName": "admin",
        "doctorName": "Peter Ret-retina specialist",
        "hospitalName": "regional hospital",
        "specialty": "",
        "description": "check",
        "partName": "Penis",
        "caseDate": "October 14 2018",
        "pampIndex": 625,
        "caseStatus": "C",
        "_links": {
            "self": {
                "href": "https://luis1.herokuapp.com/medcase/1621"
            },
            "update": {
                "href": "https://luis1.herokuapp.com/medcase/1621"
            },
            "delete": {
                "href": "https://luis1.herokuapp.com/medcase/1621"
            }
        },
        "id": 1621
    }
]

