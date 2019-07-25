see the apicall in addOne 

 JSONObject json = signup.exportToJson();
            String url = Utils.herokuUrl+"signup";
            int method=Request.Method.POST;
            if (currentUser!=null) {
                url = Utils.herokuUrl + "signup/" + signup.id;
                method=Request.Method.PUT;
            }

			
			logic below shows thi
			
			1) on activity create check from global object is currentuser object exists (user is logged in, not creating new user)
			    if so call put to modify else call post for new
				
		    2) whenever user calls put force a log out and relogin








import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.RequiresApi;
import android.support.v7.app.AppCompatActivity;
import android.util.Base64;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.leo.simplearcloader.SimpleArcDialog;
i

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;


public class RegisterActivity extends AppCompatActivity implements View.OnClickListener{

    Global global;

    TextView submit,login;
    EditText email,userName,userCode,father,mother,password,confirmPassword;
    Signup  signup;
    Signup  currentUser;
    AlertDialog alertDialog;




    @RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        this.requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_register);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        global = new Global(RegisterActivity.this);
        Bundle bundle = getIntent().getExtras();
        currentUser = (Signup) bundle.getParcelable("currentUser");


        System.out.println(" register  currenuser "+currentUser);
        initComponents();

        submit.setOnClickListener(this);

        login.setOnClickListener(this);
        if (currentUser!=null){
            login.setVisibility(View.GONE);
            submit.setText("Update Account");
            email.setText(currentUser.email);
            userName.setText(currentUser.userName);
            userName.setEnabled(false);
            userCode.setText(currentUser.userCode);
            password.setText(currentUser.password);
            confirmPassword.setText(currentUser.password);
            father.setText(currentUser.father);
           // mother.setText(currentUser.mother);
        }


       /* Bitmap bitmap= drawableToBitmap(LoginActivity.this.getResources().getDrawable(R.drawable.bg_gradient_splash));
        Bitmap blurred = global.fastblur(bitmap, 1, 1);//second parametre is radius
        reLSplash.setBackground(new BitmapDrawable(LoginActivity.this.getResources(), blurred));*/



    }

    public void initComponents(){
        submit = (TextView) findViewById(R.id.submit);

        email = (EditText) findViewById(R.id.email);
        userName = (EditText) findViewById(R.id.userName);
        userCode = (EditText) findViewById(R.id.userCode);
        password = (EditText) findViewById(R.id.password);
        father = (EditText) findViewById(R.id.father);
    //    mother = (EditText) findViewById(R.id.mother);
        login=(TextView) findViewById(R.id.login);
        confirmPassword = (EditText) findViewById(R.id.confirmPassword);

    }


    @Override
    public void onClick(View view) {

            switch (view.getId()){
                case R.id.submit:
                    Utils.hideKeyboard(RegisterActivity.this);
                    signup = new Signup();

                        signup.email = email.getText().toString();
                        signup.userName = userName.getText().toString();
                        signup.userCode = userCode.getText().toString();
                        signup.father = father.getText().toString();
                     //   signup.mother = mother.getText().toString();
                        signup.password = password.getText().toString();
                        signup.confirmPassword = confirmPassword.getText().toString();

                        if (currentUser!=null){
                            signup.id=currentUser.id;
                        }

                     String res=signup.validate();
                    if (!"".equals(res)) {
                        Toast.makeText(RegisterActivity.this,res,Toast.LENGTH_SHORT).show();
                    } else {
                              addOne();

                    }

                    break;
                case R.id.login:
                    onBackPressed();
                    break;
            }
    }


    private void addOne(){
        try {
            JSONObject json = signup.exportToJson();
            String url = Utils.herokuUrl+"signup";
            int method=Request.Method.POST;
            if (currentUser!=null) {
                url = Utils.herokuUrl + "signup/" + signup.id;
                method=Request.Method.PUT;
            }
            JsonObjectRequest request = new JsonObjectRequest(method, url, json,
                    new Response.Listener<JSONObject>() {
                        @Override
                        public void onResponse(JSONObject s) {
                            global.removePref();
                            if (currentUser!=null) {
                                myDialog("Profile updated, please login again",RegisterActivity.this);
                            }
                            else {
                                Intent intentLogin = new Intent(RegisterActivity.this, LoginActivity.class);
                                startActivity(intentLogin);
                                MyFirebaseUtil.createFireBaseUser(signup.userName);
                                overridePendingTransition(R.anim.slide_in_right, R.anim.slide_out_left);
                            }

                        }
                    }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError volleyError) {

                    if (volleyError.networkResponse!=null) {
                        if (volleyError.networkResponse.statusCode==406)
                            showDialog("User already registered",RegisterActivity.this);
                        else
                            showDialog("Server Error:"+volleyError.networkResponse.statusCode+" please try again later",RegisterActivity.this);
                    }
                    else
                        showDialog("Server is  currently down, please try again later",RegisterActivity.this);
                }
            }) {



                @Override
                public Map<String, String> getHeaders() throws AuthFailureError {
                    HashMap<String, String> params = new HashMap<String, String>();
                    String creds="";
                    if (MainActivity.getCurrentUser()!=null)
                     creds = String.format("%s:%s", MainActivity.getCurrentUser().userName, MainActivity.getCurrentUser().password);
                    else
                        return new HashMap<String, String>();
                        //creds = String.format("%s:%s", signup.userName,signup.password);

                    String auth = "Basic " + Base64.encodeToString(creds.getBytes(), Base64.NO_WRAP);
                    params.put("Authorization", auth);
                    return params;

                }
            };
            RequestQueue rQueue = Volley.newRequestQueue(RegisterActivity.this);
            rQueue.add(request);
        }
        catch (Exception e){
            System.out.println("error inserting");
        }
    }

    public void myDialog(String message,Context context) {
        AlertDialog alertDialog = new AlertDialog.Builder(context).create();
        alertDialog.setTitle(context.getString(R.string.app_name));
        alertDialog.setMessage(message);
        alertDialog.setButton("OK", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int which) {
                Intent intentLogin = new Intent(RegisterActivity.this, LoginActivity.class);
                startActivity(intentLogin);
                overridePendingTransition(R.anim.slide_in_right, R.anim.slide_out_left);
            }
        });

        alertDialog.show();

    }





    @Override
    public void onBackPressed() {
        //this is only needed if you have specific things
        //that you want to do when the user presses the back button.
        /* your specific things...*/
        super.onBackPressed();
    }


    @Override
    protected void onPause() {

        if (alertDialog != null && alertDialog.isShowing()) {
            alertDialog.dismiss();
        }
        super.onPause();
    }

    public void showDialog(String message,Context context) {
        alertDialog = new AlertDialog.Builder(context).create();
        alertDialog.setTitle(context.getString(R.string.app_name));
        alertDialog.setMessage(message);
        alertDialog.setButton("OK", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int which) {
                // Write your code here to execute after dialog closed
            }
        });
        // Showing Alert Message

        alertDialog.show();

    }


}
