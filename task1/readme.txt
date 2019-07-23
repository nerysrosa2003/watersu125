1)

please replace the dashboard with realfinaldash

2)
the read hart logo is not present in the dash 

3) the image to the left vary according to score
    see logic in android java code
    simple like a credit score if score <500 then  score255
     image if score <600 then score600 image etc

4) notice that square names come from the database but
   if we have hardcoded in view no problem as these will never
   change just make sure the follow the order as in database

5) the score to the right is the pampindex field

6) the counter in circle red is the "cantidad" field


7) please make sure that at the end your final results look
exactly as realfinaldash. as that is live view of the user admin
  dash

8 
like in android java code
create some utils and global for global properties
notice utils will have the herokuurl in case i change
and globals will share the profile user around the system


9) add menu top right content in dashboard


String url = Utils.herokuUrl+"dash/"+ global.getProfileUser()

see getall in java code