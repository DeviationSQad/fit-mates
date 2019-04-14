package pl.deviationsquad.fitmates.adapter;

import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import java.util.ArrayList;

import pl.deviationsquad.fitmates.R;
import pl.deviationsquad.fitmates.pojo.Event;

public class CardStackAdapter extends RecyclerView.Adapter<CardStackAdapter.ViewHolder> {

    private ArrayList<Event> events;

    public CardStackAdapter(ArrayList<Event> events) {
        this.events = events;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int i) {
        return new ViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.event_card_layout, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder viewHolder, int position) {
        Event event = events.get(position);
        viewHolder.eventTitleTextView.setText(event.getTitle());
        viewHolder.eventPlaceNameTextView.setText(event.getPlaceName());
        viewHolder.eventCityTextView.setText(event.getCity());
        viewHolder.eventDateTextView.setText(event.getDate());
    }

    @Override
    public int getItemCount() {
        if(events == null)
            return 0;
        return events.size();
    }

    class ViewHolder extends RecyclerView.ViewHolder {

        private TextView eventTitleTextView;
        private TextView eventTagTextView;
        private TextView eventPlaceNameTextView;
        private TextView eventCityTextView;
        private TextView eventDateTextView;

        public ViewHolder(View view) {
            super(view);
            eventTitleTextView = view.findViewById(R.id.card_event_title_text_view);
            eventCityTextView = view.findViewById(R.id.card_event_city_text_view);
            eventPlaceNameTextView = view.findViewById(R.id.card_event_place_name_text_view);
            eventDateTextView = view.findViewById(R.id.card_event_date_text_view);
        }
    }
}
