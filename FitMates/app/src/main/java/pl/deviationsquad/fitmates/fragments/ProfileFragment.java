package pl.deviationsquad.fitmates.fragments;

import android.content.Context;
import android.os.Bundle;
import android.support.design.button.MaterialButton;
import android.support.v4.app.Fragment;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import pl.deviationsquad.fitmates.R;
import pl.deviationsquad.fitmates.pojo.User;

/**
 * A simple {@link Fragment} subclass.
 * Activities that contain this fragment must implement the
 * {@link ProfileFragmentListener} interface
 * to handle interaction events.
 * Use the {@link ProfileFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class ProfileFragment extends Fragment {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private ProfileFragmentListener listener;

    private ImageView profilePhotoImageView;
    private TextView userNameTextView;
    private TextView userCityTextView;
    private MaterialButton historyEventsButton;
    private MaterialButton createdEventsButton;
    private RecyclerView historyEventsRecyclerView;
    private RecyclerView createdEventsrecyclerView;

    public ProfileFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment ProfileFragment.
     */
    // TODO: Rename and change types and number of parameters
    public static ProfileFragment newInstance(String param1, String param2) {
        ProfileFragment fragment = new ProfileFragment();
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
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_profile, container, false);
        findViews(view);
        initUser(listener.getUser());
        setupButtonsListeners();
        return view;
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        if (context instanceof ProfileFragmentListener) {
            listener = (ProfileFragmentListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement ProfileFragmentListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        listener = null;
    }

    private void findViews(View view) {
        profilePhotoImageView = view.findViewById(R.id.profile_photo_image_view);
        userNameTextView = view.findViewById(R.id.user_name_text_view);
        userCityTextView = view.findViewById(R.id.user_city_text_view);
        historyEventsButton = view.findViewById(R.id.user_history_events_button);
        createdEventsButton = view.findViewById(R.id.user_created_events_button);
        historyEventsRecyclerView = view.findViewById(R.id.user_history_events_recycler_view);
        createdEventsrecyclerView = view.findViewById(R.id.user_created_events_recycler_view);
    }

    private void setupButtonsListeners() {
        historyEventsButton.setOnClickListener(v -> {
            Log.i("fit", "history events recycler button clicked");
            int visibility = historyEventsRecyclerView.getVisibility();
            historyEventsRecyclerView.setVisibility(visibility == View.VISIBLE ? View.GONE : View.VISIBLE);
            Log.i("fit", "visibility " + visibility);
        });

        createdEventsButton.setOnClickListener(v -> {
            Log.i("fit", "created events recycler button clicked");
            int visibility = createdEventsrecyclerView.getVisibility();
            createdEventsrecyclerView.setVisibility(visibility == View.VISIBLE ? View.GONE : View.VISIBLE);
            Log.i("fit", "visibility " + visibility);
        });
    }

    private void initUser(User user) {
        userNameTextView.setText(user.getFirstName() + " " + user.getLastName());
        userCityTextView.setText(user.getProfile().getCity());
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
    public interface ProfileFragmentListener {
        User getUser();
    }
}
