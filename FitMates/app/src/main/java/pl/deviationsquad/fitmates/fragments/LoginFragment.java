package pl.deviationsquad.fitmates.fragments;

import android.content.Context;
import android.os.Bundle;
import android.support.design.button.MaterialButton;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.Toast;

import com.google.gson.Gson;

import java.util.ArrayList;

import okhttp3.Credentials;
import pl.deviationsquad.fitmates.R;
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
 * {@link LoginFragmentListener} interface
 * to handle interaction events.
 * Use the {@link LoginFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class LoginFragment extends Fragment {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private LoginFragmentListener listener;

    private EditText emailEditText;
    private EditText passwordEditText;
    private MaterialButton loginButton;

    public LoginFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment LoginFragment.
     */
    // TODO: Rename and change types and number of parameters
    public static LoginFragment newInstance(String param1, String param2) {
        LoginFragment fragment = new LoginFragment();
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
        View view = inflater.inflate(R.layout.fragment_login, container, false);
        findViews(view);
        setupButtonsListeners();
        return view;
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        if (context instanceof LoginFragmentListener) {
            listener = (LoginFragmentListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement LoginFragmentListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        listener = null;
    }

    private void findViews(View view) {
        emailEditText = view.findViewById(R.id.login_email_edit_text);
        passwordEditText = view.findViewById(R.id.login_password_edit_text);
        loginButton = view.findViewById(R.id.login_button);
    }

    private void setupButtonsListeners() {
        loginButton.setOnClickListener(v -> {
            loginUser();
        });
    }

    private void loginUser() {
        //listener.openMainPage();

        FitMatesService service = RetrofitClient.createService(FitMatesService.class);
        String auth = Credentials.basic(emailEditText.getText().toString(), passwordEditText.getText().toString());
        Call<User> call = service.loginUser(auth);
        call.enqueue(new Callback<User>() {
            @Override
            public void onResponse(Call<User> call, Response<User> response) {
                if (response.isSuccessful()) {
                    Log.i("fit", "User logged");
                    Toast.makeText(getContext(), "User logged", Toast.LENGTH_SHORT)
                            .show();
                    listener.saveUser(response.body());
                    listener.saveUserTagsAndOpenMainPage(response.body());
                    //listener.openMainPage();
                    Log.i("fit", new Gson().toJson(response.body()));
                }
                else {
                    Toast.makeText(getContext(), "Logging failed", Toast.LENGTH_SHORT)
                            .show();
                }
            }

            @Override
            public void onFailure(Call<User> call, Throwable throwable) {
                Log.i("fit", throwable.getMessage());
                call.cancel();
            }
        });

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
    public interface LoginFragmentListener {
        void loadFragment(Fragment fragment);
        void openMainPage();
        void saveUser(User user);
        void saveUserTagsAndOpenMainPage(User user);
    }
}
