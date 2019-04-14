package pl.deviationsquad.fitmates.retrofit;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;

import okhttp3.Credentials;
import pl.deviationsquad.fitmates.pojo.Event;
import pl.deviationsquad.fitmates.pojo.JoinedEvent;
import pl.deviationsquad.fitmates.pojo.Tag;
import pl.deviationsquad.fitmates.pojo.User;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.HTTP;
import retrofit2.http.Header;
import retrofit2.http.Headers;
import retrofit2.http.POST;
import retrofit2.http.Query;

public interface FitMatesService {

    String AUTH = Credentials.basic("admin@admin.pl", "Kapelusz123!");

    @POST("api/users/")
    @Headers("Content-Type: application/json")
    Call<User> registerUser(@Body User user);

    @GET("api/auth/user/")
    @Headers("Content-Type: application/json")
    Call<User> loginUser(@Header("Authorization") String auth);

    @GET("api/tags/")
    @Headers("Content-Type: application/json")
    Call<ArrayList<Tag>> getAllTags();

    @POST("api/events/")
    @Headers("Content-Type: application/json")
    Call<Event> createEvent(@Header("Authorization") String auth, @Body Event event);

    //@HTTP(method = "GET", hasBody = true, path = "api/userEvents/")
    @GET("api/userEvents/")
    @Headers("Content-Type: application/json")
    Call<ArrayList<Event>> getEventsByTag(@Query("tag") String tagName);

    @POST("api/userJoinToEvent/")
    @Headers("Content-Type: application/json")
    Call<JoinedEvent> joinEvent(@Body JoinedEvent joinedEvent);

    @GET("api/returnEventsOfUser/")
    @Headers("Content-Type: application/json")
    Call<ArrayList<Event>> getAllUserEvents(@Query("user_id") int userId);

    /*
    @GET("api/users/")
    @Headers("Content-Type: application/json")
    Call<ArrayList<User>> getAllUsers(@Header("Authorization") String auth);
    */


}
