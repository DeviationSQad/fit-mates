package pl.deviationsquad.fitmates.activities;

import android.content.Context;
import android.content.SharedPreferences;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.util.ArrayList;

import pl.deviationsquad.fitmates.R;
import pl.deviationsquad.fitmates.fragments.CreateEventFragment;
import pl.deviationsquad.fitmates.fragments.ProfileFragment;
import pl.deviationsquad.fitmates.fragments.SearchForEventsFragment;
import pl.deviationsquad.fitmates.pojo.Tag;
import pl.deviationsquad.fitmates.pojo.User;

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

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        sharedPreferences = getSharedPreferences(getString(R.string.shared_preferences_key), Context.MODE_PRIVATE);
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
                    toolbar.setTitle("Profile");
                    loadFragment(profileFragment);
                    break;
                }

                case R.id.action_create: {
                    toolbar.setTitle("Create event");
                    loadFragment(createEventFragment);
                    break;
                }

                case R.id.action_search: {
                    toolbar.setTitle("Search for events");
                    loadFragment(searchForEventsFragment);
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
    public User getUser() {
        return user;
    }

    @Override
    public ArrayList<Tag> getUserTags() {
        return userTags;
    }
}
