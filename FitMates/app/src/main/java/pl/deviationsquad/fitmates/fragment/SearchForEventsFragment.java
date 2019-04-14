package pl.deviationsquad.fitmates.fragment;

import android.content.Context;
import android.os.Bundle;
import android.support.design.button.MaterialButton;
import android.support.v4.app.Fragment;
import android.support.v7.widget.DefaultItemAnimator;
import android.util.Log;
import android.view.DragEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.AccelerateInterpolator;
import android.view.animation.DecelerateInterpolator;
import android.view.animation.LinearInterpolator;

import com.yuyakaido.android.cardstackview.CardStackLayoutManager;
import com.yuyakaido.android.cardstackview.CardStackListener;
import com.yuyakaido.android.cardstackview.CardStackView;
import com.yuyakaido.android.cardstackview.Direction;
import com.yuyakaido.android.cardstackview.Duration;
import com.yuyakaido.android.cardstackview.RewindAnimationSetting;
import com.yuyakaido.android.cardstackview.StackFrom;
import com.yuyakaido.android.cardstackview.SwipeAnimationSetting;
import com.yuyakaido.android.cardstackview.SwipeableMethod;

import java.util.ArrayList;

import pl.deviationsquad.fitmates.R;
import pl.deviationsquad.fitmates.adapter.CardStackAdapter;
import pl.deviationsquad.fitmates.pojo.Event;
import pl.deviationsquad.fitmates.pojo.Profile;
import pl.deviationsquad.fitmates.pojo.User;
import pl.deviationsquad.fitmates.retrofit.FitMatesService;
import pl.deviationsquad.fitmates.retrofit.RetrofitClient;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * A simple {@link Fragment} subclass.
 * Activities that contain this fragment must implement the
 * {@link SearchForEventsFragmentListener} interface
 * to handle interaction events.
 * Use the {@link SearchForEventsFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class SearchForEventsFragment extends Fragment implements CardStackListener{
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private SearchForEventsFragmentListener listener;

    private MaterialButton leftButton;
    private MaterialButton rightButton;
    private CardStackView cardStackView;

    private ArrayList<Event> foundEvents = new ArrayList<>();
    private int eventsIndex = 0;
    private CardStackLayoutManager layoutManager;
    private CardStackAdapter adapter;

    public SearchForEventsFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment SearchForEventsFragment.
     */
    // TODO: Rename and change types and number of parameters
    public static SearchForEventsFragment newInstance(String param1, String param2) {
        SearchForEventsFragment fragment = new SearchForEventsFragment();
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
        View view = inflater.inflate(R.layout.fragment_search_for_events, container, false);
        getAllEventsByUserTag();
        findViews(view);
        setupButtonsListeners();
        initCardStackView();
        Log.i("fit", String.valueOf(foundEvents.size()));
        return view;
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        if (context instanceof SearchForEventsFragmentListener) {
            listener = (SearchForEventsFragmentListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement SearchForEventsFragmentListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        listener = null;
    }

    private void findViews(View view) {
        cardStackView = view.findViewById(R.id.card_stack_view);
        leftButton = view.findViewById(R.id.left_image_button);
        rightButton = view.findViewById(R.id.right_image_button);
    }

    private void setupButtonsListeners() {
        leftButton.setOnClickListener(v -> {
            SwipeAnimationSetting setting = new SwipeAnimationSetting.Builder()
                    .setDirection(Direction.Left)
                    .setDuration(Duration.Normal.duration)
                    .setInterpolator(new AccelerateInterpolator())
                    .build();
            layoutManager.setSwipeAnimationSetting(setting);
            cardStackView.swipe();
        });

        rightButton.setOnClickListener(v -> {
            SwipeAnimationSetting setting = new SwipeAnimationSetting.Builder()
                    .setDirection(Direction.Right)
                    .setDuration(Duration.Normal.duration)
                    .setInterpolator(new AccelerateInterpolator())
                    .build();
            layoutManager.setSwipeAnimationSetting(setting);
            cardStackView.swipe();
        });
    }

    private void getAllEventsByUserTag() {
        Profile profile = listener.getUser().getProfile();
        getEvents(profile.getTag1());
        getEvents(profile.getTag2());
        getEvents(profile.getTag3());
        getEvents(profile.getTag4());
    }

    private void getEvents(String tagName) {
        FitMatesService service = RetrofitClient.createService(FitMatesService.class);
        Call<ArrayList<Event>> call = service.getEventsByTag(tagName);
        call.enqueue(new Callback<ArrayList<Event>>() {
            @Override
            public void onResponse(Call<ArrayList<Event>> call, Response<ArrayList<Event>> response) {
                if (response.isSuccessful()) {
                    Log.i("fit", "events by tag get");
                    foundEvents.addAll(response.body());
                    Log.i("fit", "foundEvents size: " + foundEvents.size());
                }
                else
                    Log.i("fit", "events by tag not get");
            }

            @Override
            public void onFailure(Call<ArrayList<Event>> call, Throwable throwable) {
                Log.i("fit", throwable.getMessage());
                call.cancel();
            }
        });
    }

    private void initCardStackView() {
        layoutManager = new CardStackLayoutManager(getContext(), this);
        adapter = new CardStackAdapter(foundEvents);

        layoutManager.setStackFrom(StackFrom.TopAndRight);
        layoutManager.setVisibleCount(3);
        layoutManager.setTranslationInterval(8.0F);
        layoutManager.setScaleInterval(0.95F);
        layoutManager.setSwipeThreshold(0.3F);
        layoutManager.setMaxDegree(40.0F);
        layoutManager.setDirections(Direction.HORIZONTAL);
        layoutManager.setCanScrollHorizontal(true);
        layoutManager.setCanScrollVertical(true);
        layoutManager.setSwipeableMethod(SwipeableMethod.AutomaticAndManual);
        layoutManager.setOverlayInterpolator(new LinearInterpolator());
        cardStackView.setLayoutManager(layoutManager);
        cardStackView.setAdapter(adapter);
        cardStackView.setItemAnimator(new DefaultItemAnimator());
    }


    @Override
    public void onCardDragging(Direction direction, float ratio) {

    }

    @Override
    public void onCardSwiped(Direction direction) {
        if (direction == Direction.Right)
            listener.joinEventAndSave(foundEvents.get(eventsIndex).getId());

        eventsIndex++;
    }

    @Override
    public void onCardRewound() {

    }

    @Override
    public void onCardCanceled() {

    }

    @Override
    public void onCardAppeared(View view, int position) {

    }

    @Override
    public void onCardDisappeared(View view, int position) {

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
    public interface SearchForEventsFragmentListener {
        User getUser();
        void joinEventAndSave(int eventId);
    }
}
