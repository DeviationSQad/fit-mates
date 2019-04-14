package pl.deviationsquad.fitmates.fragment;

import android.content.Context;
import android.os.Bundle;
import android.support.design.button.MaterialButton;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;
import android.widget.EditText;
import android.widget.Toast;

import com.google.gson.Gson;

import java.util.ArrayList;

import pl.deviationsquad.fitmates.R;
import pl.deviationsquad.fitmates.pojo.Event;
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
 * {@link CreateEventFragmentListener} interface
 * to handle interaction events.
 * Use the {@link CreateEventFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class CreateEventFragment extends Fragment {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    private CreateEventFragmentListener listener;

    private EditText eventTitleEditText;
    private EditText eventDateEditText;
    private EditText eventPlaceNameEditText;
    private EditText eventAddressEditText;
    private EditText eventCityEditText;
    private EditText eventCountryEditText;
    private AutoCompleteTextView eventTagAutoCompleteTextView;
    private EditText maxAmountOfPeopleEditText;
    private MaterialButton createEventButton;

    private ArrayList<Tag> tagsArrayList;


    public CreateEventFragment() {
        // Required empty public constructor
    }

    /**
     * Use this factory method to create a new instance of
     * this fragment using the provided parameters.
     *
     * @param param1 Parameter 1.
     * @param param2 Parameter 2.
     * @return A new instance of fragment CreateEventFragment.
     */
    // TODO: Rename and change types and number of parameters
    public static CreateEventFragment newInstance(String param1, String param2) {
        CreateEventFragment fragment = new CreateEventFragment();
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
        View view = inflater.inflate(R.layout.fragment_create_event, container, false);
        findViews(view);
        initTags();
        setupButtonsListeners();
        return view;
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        if (context instanceof CreateEventFragmentListener) {
            listener = (CreateEventFragmentListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement CreateEventFragmentListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        listener = null;
    }

    private void findViews(View view) {
        eventTitleEditText = view.findViewById(R.id.event_title_edit_text);
        eventDateEditText = view.findViewById(R.id.event_date_edit_text);
        eventPlaceNameEditText = view.findViewById(R.id.event_place_name_edit_text);
        eventAddressEditText = view.findViewById(R.id.event_address_edit_text);
        eventCityEditText = view.findViewById(R.id.event_city_edit_text);
        eventCountryEditText = view.findViewById(R.id.event_country_edit_text);
        eventTagAutoCompleteTextView = view.findViewById(R.id.event_tag_auto_complete_text_view);
        maxAmountOfPeopleEditText = view.findViewById(R.id.max_amount_of_people_edit_text);
        createEventButton = view.findViewById(R.id.create_event_button);
    }

    private void setupButtonsListeners() {
        createEventButton.setOnClickListener(v -> {
            if (listener.getUserTags() == null)
                Log.i("fit", "tags null");

            if (!areEventFieldsEmpty())
                postNewEvent();
            else
                Toast.makeText(getContext(), "Event fields cannot be empty", Toast.LENGTH_SHORT)
                        .show();
        });
    }

    private boolean areEventFieldsEmpty() {
        return (eventTitleEditText.getText().toString().isEmpty() || eventDateEditText.getText().toString().isEmpty() || eventPlaceNameEditText.getText().toString().isEmpty() || eventAddressEditText.getText().toString().isEmpty() || eventCityEditText.getText().toString().isEmpty() || eventCountryEditText.getText().toString().isEmpty() || maxAmountOfPeopleEditText.getText().toString().isEmpty());
    }

    private void initTags() {
        FitMatesService service = RetrofitClient.createService(FitMatesService.class);
        Call<ArrayList<Tag>> call = service.getAllTags();
        call.enqueue(new Callback<ArrayList<Tag>>() {
            @Override
            public void onResponse(Call<ArrayList<Tag>> call, Response<ArrayList<Tag>> response) {
                if (response.isSuccessful()) {
                    Log.i("fit", "tags get");
                    tagsArrayList = response.body();
                    Log.i("fit", new Gson().toJson(tagsArrayList));
                    ArrayAdapter<Tag> adapter = new ArrayAdapter<>(getContext(), android.R.layout.simple_dropdown_item_1line, tagsArrayList);
                    eventTagAutoCompleteTextView.setThreshold(1);
                    eventTagAutoCompleteTextView.setAdapter(adapter);
                } else
                    Log.i("fit", "tags not get");
            }

            @Override
            public void onFailure(Call<ArrayList<Tag>> call, Throwable throwable) {
                Log.i("fit", throwable.getMessage());
            }
        });
    }

    private void postNewEvent() {
        FitMatesService service = RetrofitClient.createService(FitMatesService.class);
        Call<Event> call = service.createEvent(FitMatesService.AUTH, createNewEvent());
        call.enqueue(new Callback<Event>() {
            @Override
            public void onResponse(Call<Event> call, Response<Event> response) {
                if (response.isSuccessful()) {
                    Log.i("fit", "Event added");
                    Toast.makeText(getContext(), "Event added", Toast.LENGTH_SHORT)
                            .show();
                    //clearAllEditTexts();
                }
                else
                    Toast.makeText(getContext(), "Cannot add the event", Toast.LENGTH_SHORT)
                            .show();
            }

            @Override
            public void onFailure(Call<Event> call, Throwable throwable) {
                Log.i("fit", throwable.getMessage());
                call.cancel();
            }
        });
    }

    private Event createNewEvent() {
        Event event = new Event();
        event.setTitle(eventTitleEditText.getText().toString());
        event.setDate(eventDateEditText.getText().toString());
        event.setCreatorId(listener.getUser().getId());
        event.setPlaceName(eventPlaceNameEditText.getText().toString());
        event.setAddress(eventAddressEditText.getText().toString());
        event.setCity(eventCityEditText.getText().toString());
        event.setCountry(eventCountryEditText.getText().toString());
        event.setTagId(getTagId(eventTagAutoCompleteTextView.getText().toString()));
        event.setMaxAmountOfPeople(Integer.parseInt(maxAmountOfPeopleEditText.getText().toString()));

        Log.i("fit", new Gson().toJson(event));
        return event;
    }

    private int getTagId(String tagName) {
        int tagId = 0;
        for (Tag tag : listener.getAllTags())
            if (tag.getName().equals(tagName))
                tagId = tag.getId();
        return tagId;
    }

    private void clearAllEditTexts() {
        eventTitleEditText.setText("");
        eventDateEditText.setText("");
        eventPlaceNameEditText.setText("");
        eventAddressEditText.setText("");
        eventCityEditText.setText("");
        eventCountryEditText.setText("");
        eventTagAutoCompleteTextView.setText("");
        maxAmountOfPeopleEditText.setText("");
        createEventButton.setText("");
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
    public interface CreateEventFragmentListener {
        User getUser();
        ArrayList<Tag> getUserTags();
        ArrayList<Tag> getAllTags();
    }
}
