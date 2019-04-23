package pl.deviationsquad.fitmates.activity;

import android.content.Context;
import android.content.SharedPreferences;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import org.json.JSONArray;

import java.util.ArrayList;

import pl.deviationsquad.fitmates.R;
import pl.deviationsquad.fitmates.fragment.CreateEventFragment;
import pl.deviationsquad.fitmates.fragment.ProfileFragment;
import pl.deviationsquad.fitmates.fragment.SearchForEventsFragment;
import pl.deviationsquad.fitmates.pojo.Event;
import pl.deviationsquad.fitmates.pojo.JoinedEvent;
import pl.deviationsquad.fitmates.pojo.Tag;
import pl.deviationsquad.fitmates.pojo.User;
import pl.deviationsquad.fitmates.retrofit.FitMatesService;
import pl.deviationsquad.fitmates.retrofit.RetrofitClient;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity implements ProfileFragment.ProfileFragmentListener, CreateEventFragment.CreateEventFragmentListener, SearchForEventsFragment.SearchForEventsFragmentListener {

    private BottomNavigationView bottomNavigationView;
    private ActionBar toolbar;

    private FragmentManager fragmentManager = getSupportFragmentManager();
    private ProfileFragment profileFragment = new ProfileFragment();
    private CreateEventFragment createEventFragment = new CreateEventFragment();
    private SearchForEventsFragment searchForEventsFragment = new SearchForEventsFragment();
    private Fragment activeFragment = profileFragment;
    private SharedPreferences sharedPreferences;
    private User user;
    private ArrayList<Tag> userTags;
    private ArrayList<Tag> allTags;
    private ArrayList<Event> joinedEvents;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        sharedPreferences = getSharedPreferences(getString(R.string.shared_preferences_key), Context.MODE_PRIVATE);
        downloadAllTags();
        user = loadUser();
        userTags = loadUserTags();
        initToolbar();
        initBottomNavigationView();
        setupButtonsListeners();
        initFragments();
        loadFragment(profileFragment);
    }

    private void initToolbar() {
        toolbar = getSupportActionBar();
        toolbar.setTitle("Profile");
    }

    private void initBottomNavigationView() {
        bottomNavigationView = findViewById(R.id.bottom_navigation_view);
        bottomNavigationView.setSelectedItemId(R.id.action_profile);
    }

    private void setupButtonsListeners() {
        bottomNavigationView.setOnNavigationItemSelectedListener(menuItem -> {
            switch(menuItem.getItemId()) {
                case R.id.action_profile: {
                    if (!(activeFragment instanceof ProfileFragment)) {
                        toolbar.setTitle("Profile");
                        loadFragment(profileFragment);
                    }
                    break;
                }

                case R.id.action_create: {
                    if (!(activeFragment instanceof CreateEventFragment)) {
                        toolbar.setTitle("Create event");
                        loadFragment(createEventFragment);
                    }
                    break;
                }

                case R.id.action_search: {
                    if (!(activeFragment instanceof SearchForEventsFragment)) {
                        toolbar.setTitle("Search for events");
                        loadFragment(searchForEventsFragment);
                    }
                    break;
                }
            }

            return true;
        });
    }

    private void initFragments() {
        fragmentManager.beginTransaction().add(R.id.main_activity_fragment_container, searchForEventsFragment, "3").hide(searchForEventsFragment).commit();
        fragmentManager.beginTransaction().add(R.id.main_activity_fragment_container, createEventFragment, "2").hide(createEventFragment).commit();
        fragmentManager.beginTransaction().add(R.id.main_activity_fragment_container, profileFragment, "1").commit();
    }

    public void loadFragment(Fragment fragment) {
        FragmentTransaction transaction = fragmentManager.beginTransaction();
        transaction
                .hide(activeFragment)
                .show(fragment)
                .setTransition(FragmentTransaction.TRANSIT_FRAGMENT_OPEN)
                .commit();
        activeFragment = fragment;
    }

    /*
    public void loadFragment(Fragment fragment) {
        FragmentTransaction transaction = fragmentManager.beginTransaction();
        transaction
                .replace(R.id.login_fragment_container, fragment)
                .addToBackStack(null)
                .setTransition(FragmentTransaction.TRANSIT_FRAGMENT_OPEN)
                .commit();
    }
    */

    public User loadUser() {
        String jsonString = sharedPreferences.getString(getString(R.string.user_shared_preferences_key), "");
        User user = new Gson().fromJson(jsonString, User.class);
        return user;
    }

    public ArrayList<Tag> loadUserTags() {
        String jsonString = sharedPreferences.getString(getString(R.string.user_tags_shared_preferences_key), "");
        ArrayList<Tag> tags = new Gson().fromJson(jsonString, new TypeToken<ArrayList<Tag>>(){}.getType());
        return tags;
    }

    @Override
    protected void onPause() {
        super.onPause();
        //saveJoinedEvents();
    }

    private void saveJoinedEvents() {
        SharedPreferences.Editor editor = sharedPreferences.edit();
        JSONArray jsonArray = null;
        try {
            jsonArray = new JSONArray(new Gson().toJson(joinedEvents));
        } catch (Exception e) {
            e.printStackTrace();
        }
        editor.putString(getString(R.string.user_joined_events_shared_preferences_key), jsonArray.toString());
        Log.i("fit", "joined events saved");
    }

    private void downloadAllTags() {
        FitMatesService service = RetrofitClient.createService(FitMatesService.class);
        Call<ArrayList<Tag>> call = service.getAllTags();
        call.enqueue(new Callback<ArrayList<Tag>>() {
            @Override
            public void onResponse(Call<ArrayList<Tag>> call, Response<ArrayList<Tag>> response) {
                if (response.isSuccessful()) {
                    Log.i("fit", "tags get");
                    allTags = response.body();
                }
                else
                    Log.i("fit", "tags not get");
            }

            @Override
            public void onFailure(Call<ArrayList<Tag>> call, Throwable throwable) {
                Log.i("fit", throwable.getMessage());
                call.cancel();
            }
        });
    }

    @Override
    public User getUser() {
        return user;
    }

    @Override
    public ArrayList<Tag> getUserTags() {
        return userTags;
    }

    @Override
    public ArrayList<Tag> getAllTags() {
        return allTags;
    }

    @Override
    public void joinEventAndSave(int eventId) {
        JoinedEvent joinedEvent = new JoinedEvent(user.getId(), eventId);
        //joinedEvents.add(joinedEvent);
        Log.i("fit", new Gson().toJson(joinedEvent));
        FitMatesService service = RetrofitClient.createService(FitMatesService.class);
        Call<JoinedEvent> call = service.joinEvent(joinedEvent);
        call.enqueue(new Callback<JoinedEvent>() {
            @Override
            public void onResponse(Call<JoinedEvent> call, Response<JoinedEvent> response) {
                if (response.isSuccessful()) {
                    Log.i("fit", "event joined");
                    profileFragment.eventJoined();
                }
                else
                    Log.i("fit", "cannot join event");
            }

            @Override
            public void onFailure(Call<JoinedEvent> call, Throwable throwable) {
                Log.i("fit", throwable.getMessage());
                call.cancel();
            }
        });
    }

    @Override
    public ArrayList<Event> getUserJoinedEvents() {
        return joinedEvents;
    }
}
