package pl.deviationsquad.fitmates.activity;

import android.app.ProgressDialog;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

import com.google.gson.Gson;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;

import pl.deviationsquad.fitmates.R;
import pl.deviationsquad.fitmates.fragment.AuthorizationChoiceFragment;
import pl.deviationsquad.fitmates.fragment.LoginFragment;
import pl.deviationsquad.fitmates.fragment.RegisterFragment;
import pl.deviationsquad.fitmates.pojo.Tag;
import pl.deviationsquad.fitmates.pojo.User;
import pl.deviationsquad.fitmates.retrofit.FitMatesService;
import pl.deviationsquad.fitmates.retrofit.RetrofitClient;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class AuthorizationActivity extends AppCompatActivity implements AuthorizationChoiceFragment.AuthorizationChoiceFragmentListener, RegisterFragment.RegisterFragmentListener, LoginFragment.LoginFragmentListener {

    private ActionBar toolbar;
    private FragmentManager fragmentManager = getSupportFragmentManager();

    private SharedPreferences sharedPreferences;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_authorization);

        sharedPreferences = getSharedPreferences(getString(R.string.shared_preferences_key), Context.MODE_PRIVATE);
        findViews();
        toolbar.setTitle("FitMates");
        loadFragment(new AuthorizationChoiceFragment());
    }

    @Override
    public void onBackPressed() {
        Log.i("fit", String.valueOf(fragmentManager.getBackStackEntryCount()));
        if(fragmentManager.getBackStackEntryCount() > 1)
            super.onBackPressed();
        else
            finish();
    }

    private void findViews() {
        toolbar = getSupportActionBar();
    }

    @Override
    public void loadFragment(Fragment fragment) {
        FragmentTransaction transaction = fragmentManager.beginTransaction();
        transaction
                .replace(R.id.login_fragment_container, fragment)
                .addToBackStack(null)
                .setTransition(FragmentTransaction.TRANSIT_FRAGMENT_OPEN)
                .commit();
    }

    @Override
    public void openMainPage() {
        startActivity(new Intent(this, MainActivity.class));
        finish();
    }

    @Override
    public void saveUser(User user) {
        SharedPreferences.Editor editor = sharedPreferences.edit();
        JSONObject jsonObject = null;
        try {
            jsonObject = new JSONObject(new Gson().toJson(user));
        } catch (Exception e) {
            e.printStackTrace();
            Log.i("fit", e.getMessage());
        }
        editor.putString(getString(R.string.user_shared_preferences_key), jsonObject.toString());
        editor.apply();
    }

    @Override
    public void saveUserTags(ArrayList<Tag> userTags) {
        SharedPreferences.Editor editor = sharedPreferences.edit();
        JSONArray jsonArray = null;
        try {
            jsonArray = new JSONArray(new Gson().toJson(userTags));
        } catch (Exception e) {
            e.printStackTrace();
            Log.i("fit", e.getMessage());
        }
        editor.putString(getString(R.string.user_tags_shared_preferences_key), jsonArray.toString());
        editor.apply();
    }

    public void saveUserTagsAndOpenMainPage(User user) {
        FitMatesService service = RetrofitClient.createService(FitMatesService.class);
        Call<ArrayList<Tag>> call = service.getAllTags();
        call.enqueue(new Callback<ArrayList<Tag>>() {
            @Override
            public void onResponse(Call<ArrayList<Tag>> call, Response<ArrayList<Tag>> response) {
                if (response.isSuccessful()) {
                    ArrayList<Tag> onlyUserTags = getOnlyUserTagsFromAll(user, response.body());
                    saveUserTags(onlyUserTags);
                    Log.i("fit", "user tags saved");
                    Log.i("fit", "user tags: " + new Gson().toJson(onlyUserTags));
                    openMainPage();
                }
                else
                    Log.i("fit", "tags not get");
            }

            @Override
            public void onFailure(Call<ArrayList<Tag>> call, Throwable throwable) {
                Log.i("fit", throwable.getMessage());
            }
        });
    }

    private ArrayList<Tag> getOnlyUserTagsFromAll(User user, ArrayList<Tag> allTags) {
        ArrayList<Tag> userTags = new ArrayList<>();
        String tagName = "";
        for (Tag tag : allTags) {
            tagName = tag.getName();
            if (tagName.equals(user.getProfile().getTag1()) || tagName.equals(user.getProfile().getTag2()) || tagName.equals(user.getProfile().getTag3()) || tagName.equals(user.getProfile().getTag4()))
                userTags.add(tag);
        }

        return userTags;
    }
}
