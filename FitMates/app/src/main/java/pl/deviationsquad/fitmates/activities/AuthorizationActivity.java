package pl.deviationsquad.fitmates.activities;

import android.content.Intent;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

import pl.deviationsquad.fitmates.R;
import pl.deviationsquad.fitmates.fragments.AuthorizationChoiceFragment;
import pl.deviationsquad.fitmates.fragments.LoginFragment;
import pl.deviationsquad.fitmates.fragments.RegisterFragment;

public class AuthorizationActivity extends AppCompatActivity implements AuthorizationChoiceFragment.AuthorizationChoiceFragmentListener, RegisterFragment.RegisterFragmentListener, LoginFragment.LoginFragmentListener {

    private ActionBar toolbar;
    private FragmentManager fragmentManager = getSupportFragmentManager();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_authorization);

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
}
