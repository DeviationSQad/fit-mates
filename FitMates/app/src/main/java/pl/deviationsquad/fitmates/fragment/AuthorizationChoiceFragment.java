package pl.deviationsquad.fitmates.fragment;

import android.content.Context;
import android.os.Bundle;
import android.support.design.button.MaterialButton;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import pl.deviationsquad.fitmates.R;

/**
 * A simple {@link Fragment} subclass.
 * Activities that contain this fragment must implement the
 * {@link AuthorizationChoiceFragmentListener} interface
 * to handle interaction events.
 * Use the {@link AuthorizationChoiceFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class AuthorizationChoiceFragment extends Fragment {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private AuthorizationChoiceFragmentListener listener;

    private MaterialButton loginChoiceButton;
    private MaterialButton registerChoiceButton;

    public AuthorizationChoiceFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment AuthorizationChoiceFragment.
     */
    // TODO: Rename and change types and number of parameters
    public static AuthorizationChoiceFragment newInstance(String param1, String param2) {
        AuthorizationChoiceFragment fragment = new AuthorizationChoiceFragment();
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
        View view = inflater.inflate(R.layout.fragment_authorization_choice, container, false);
        findViews(view);
        setupButtonsListeners();
        return view;
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        if (context instanceof AuthorizationChoiceFragmentListener) {
            listener = (AuthorizationChoiceFragmentListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement AuthorizationChoiceFragmentListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        listener = null;
    }

    private void findViews(View view) {
        loginChoiceButton = view.findViewById(R.id.login_choice_button);
        registerChoiceButton = view.findViewById(R.id.register_choice_button);
    }

    private void setupButtonsListeners() {
        loginChoiceButton.setOnClickListener(v ->
            listener.loadFragment(new LoginFragment()));

        registerChoiceButton.setOnClickListener(v ->
                listener.loadFragment(new RegisterFragment()));

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
    public interface AuthorizationChoiceFragmentListener {
        void loadFragment(Fragment fragment);
    }
}
