package pl.deviationsquad.fitmates.adapter;

import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.TextView;

import java.util.ArrayList;

import pl.deviationsquad.fitmates.R;
import pl.deviationsquad.fitmates.pojo.Event;

public class JoinedEventsRecyclerAdapter extends RecyclerView.Adapter<JoinedEventsRecyclerAdapter.ViewHolder> {

    private ArrayList<Event> events;

    public JoinedEventsRecyclerAdapter(ArrayList<Event> events) {
        this.events = events;
    }

    @NonNull
    @Override
    public JoinedEventsRecyclerAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int i) {
        return new ViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.single_list_item, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull JoinedEventsRecyclerAdapter.ViewHolder viewHolder, int position) {
        viewHolder.eventTitleTextView.setText(events.get(position).getTitle());
        viewHolder.eventDateTextView.setText(events.get(position).getDate());
        viewHolder.eventPlaceNameTextView.setText(events.get(position).getPlaceName());
        viewHolder.eventCityTextView.setText(events.get(position).getCity());
    }

    @Override
    public int getItemCount() {
        if(events == null)
            return 0;
        return events.size();
    }

    class ViewHolder extends RecyclerView.ViewHolder {

        private TextView eventTitleTextView;
        private TextView eventDateTextView;
        private TextView eventPlaceNameTextView;
        private TextView eventCityTextView;

        public ViewHolder(View view) {
            super(view);
            eventTitleTextView = view.findViewById(R.id.list_event_title_text_view);
            eventDateTextView = view.findViewById(R.id.list_event_date_text_view);
            eventPlaceNameTextView = view.findViewById(R.id.list_event_place_name_text_view);
            eventCityTextView = view.findViewById(R.id.list_event_city_text_view);
        }
    }
}
