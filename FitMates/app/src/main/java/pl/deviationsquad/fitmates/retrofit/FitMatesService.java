package pl.deviationsquad.fitmates.retrofit;

import java.util.ArrayList;

import okhttp3.Credentials;
import pl.deviationsquad.fitmates.pojo.User;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.Headers;
import retrofit2.http.POST;

public interface FitMatesService {

    String AUTH = Credentials.basic("admin@admin.pl", "Kapelusz123!");

    @POST("api/users/")
    @Headers("Content-Type: application/json")
    Call<User> registerUser(@Body User user);

    @GET("api/users/")
    @Headers("Content-Type: application/json")
    Call<ArrayList<User>> getAllUsers(@Header("Authorization") String auth);



}
