package pl.deviationsquad.fitmates.fragments;

import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.support.design.button.MaterialButton;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.MultiAutoCompleteTextView;
import android.widget.Toast;

import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.Random;

import okhttp3.Credentials;
import pl.deviationsquad.fitmates.R;
import pl.deviationsquad.fitmates.pojo.Profile;
import pl.deviationsquad.fitmates.pojo.Tag;
import pl.deviationsquad.fitmates.pojo.User;
import pl.deviationsquad.fitmates.retrofit.FitMatesService;
import pl.deviationsquad.fitmates.retrofit.RetrofitClient;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * A simple {@link Fragment} subclass.
 * Activities that contain this fragment must implement the
 * {@link RegisterFragmentListener} interface
 * to handle interaction events.
 * Use the {@link RegisterFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class RegisterFragment extends Fragment {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private RegisterFragmentListener listener;

    private EditText emailEditText;
    private EditText passwordEditText;
    private EditText firstNameEditText;
    private EditText lastNameEditText;
    private EditText dateOfBirthEditText;
    private EditText cityEditText;
    private EditText countryEditText;
    private EditText bioEditText;
    private EditText tag1EditText;
    private EditText tag2EditText;
    private EditText tag3EditText;
    private EditText tag4EditText;
    private MaterialButton registerButton;
    private MultiAutoCompleteTextView tagsMultiAutoCompleteTextView;

    public RegisterFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment RegisterFragment.
     */
    // TODO: Rename and change types and number of parameters
    public static RegisterFragment newInstance(String param1, String param2) {
        RegisterFragment fragment = new RegisterFragment();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_register, container, false);
        findViews(view);
        tagsMultiAutoCompleteTextView.setTokenizer(new MultiAutoCompleteTextView.CommaTokenizer());
        initTags();
        setupButtonsListeners();
        return view;
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        if (context instanceof RegisterFragmentListener) {
            listener = (RegisterFragmentListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement RegisterFragmentListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        listener = null;
    }

    private void findViews(View view) {
        emailEditText = view.findViewById(R.id.register_email_edit_text);
        passwordEditText = view.findViewById(R.id.register_password_edit_text);
        firstNameEditText = view.findViewById(R.id.register_first_name_edit_text);
        lastNameEditText = view.findViewById(R.id.register_last_name_edit_text);
        dateOfBirthEditText = view.findViewById(R.id.register_date_of_birth_edit_text);
        cityEditText = view.findViewById(R.id.register_city_edit_text);
        countryEditText = view.findViewById(R.id.register_country_edit_text);
        bioEditText = view.findViewById(R.id.register_bio_edit_text);
        //tag1EditText = view.findViewById(R.id.register_tag_1);
        //tag2EditText = view.findViewById(R.id.register_tag_2);
        //tag3EditText = view.findViewById(R.id.register_tag_3);
        //tag4EditText = view.findViewById(R.id.register_tag_4);
        registerButton = view.findViewById(R.id.register_button);
        tagsMultiAutoCompleteTextView = view.findViewById(R.id.tags_multi_auto_complete_text_view);
    }

    private void setupButtonsListeners() {
        registerButton.setOnClickListener(v -> {
            User user = createUser();
            registerUser(user);
        });
    }

    private User createUser() {
        User user = new User();
        //user.setEmail(emailEditText.getText().toString());
        user.setEmail(String.valueOf(new Random().nextInt(100000000)) + "@gmail.com");
        user.setPassword(passwordEditText.getText().toString());
        user.setFirstName(firstNameEditText.getText().toString());
        user.setLastName(lastNameEditText.getText().toString());

        Profile profile = new Profile();
        profile.setDateOfBirth(dateOfBirthEditText.getText().toString());
        profile.setCity(cityEditText.getText().toString());
        profile.setCountry(countryEditText.getText().toString());
        profile.setBio(bioEditText.getText().toString());
        //profile.setTag1(tag1EditText.getText().toString());
        //profile.setTag2(tag2EditText.getText().toString());
        //profile.setTag3(tag3EditText.getText().toString());
        //profile.setTag4(tag4EditText.getText().toString());
        user.setProfile(profile);

        Log.i("fit", new Gson().toJson(user));

        return user;
    }

    private void registerUser(User user) {
        FitMatesService service = RetrofitClient.createService(FitMatesService.class);
        Call<User> call = service.registerUser(user);
        call.enqueue(new Callback<User>() {
            @Override
            public void onResponse(Call<User> call, Response<User> response) {
                if (response.isSuccessful()) {
                    Log.i("fit", "User registered");
                    Toast.makeText(getContext(), "User registered", Toast.LENGTH_SHORT)
                            .show();
                    listener.openMainPage();
                }
                else
                    Toast.makeText(getContext(), "Registration failed", Toast.LENGTH_SHORT)
                            .show();
            }

            @Override
            public void onFailure(Call<User> call, Throwable throwable) {
                Log.i("fit", throwable.getMessage());
                call.cancel();
            }
        });
    }


    private void initTags() {
        FitMatesService service = RetrofitClient.createService(FitMatesService.class);
        Call<ArrayList<Tag>> call = service.getAllTags();
        call.enqueue(new Callback<ArrayList<Tag>>() {
            @Override
            public void onResponse(Call<ArrayList<Tag>> call, Response<ArrayList<Tag>> response) {
                if (response.isSuccessful()) {
                    Log.i("fit", "tags get");
                    ArrayAdapter<Tag> adapter = new ArrayAdapter<Tag>(getContext(), android.R.layout.simple_dropdown_item_1line, response.body());
                    tagsMultiAutoCompleteTextView.setThreshold(1);
                    tagsMultiAutoCompleteTextView.setAdapter(adapter);
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

    private Tag[] retrieveTagsFromString(String tagsText, char separator) {
        Tag[] tags = new Tag[4];
        int firstSeparatorIndex = 0;
        for (int i = 0; i < 4; i++) {
            int secondSeparatorIndex = tagsText.indexOf(',');
            tags[i] = new Tag(i, tagsText.substring(firstSeparatorIndex, secondSeparatorIndex+1));
            firstSeparatorIndex = ++secondSeparatorIndex;
            Log.i("fit", "," + tags[i].getName() + ",");
        }

        return tags;
    }

    /**
     * This interface must be implemented by activities that contain this
     * fragment to allow an interaction in this fragment to be communicated
     * to the activity and potentially other fragments contained in that
     * activity.
     * <p>
     * See the Android Training lesson <a href=
     * "http://developer.android.com/training/basics/fragments/communicating.html"
     * >Communicating with Other Fragments</a> for more information.
     */
    public interface RegisterFragmentListener {
        void loadFragment(Fragment fragment);
        void openMainPage();
    }
}
