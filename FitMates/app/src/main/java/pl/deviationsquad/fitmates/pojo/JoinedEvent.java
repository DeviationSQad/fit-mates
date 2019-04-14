package pl.deviationsquad.fitmates.pojo;

import com.google.gson.annotations.SerializedName;

public class JoinedEvent {

    @SerializedName("user_id")
    private int userId;
    @SerializedName("event_id")
    private int eventId;

    public JoinedEvent(int userId, int eventId) {
        this.userId = userId;
        this.eventId = eventId;
    }

    public int getUserId() {
        return userId;
    }

    public int getEventId() {
        return eventId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setEventId(int eventId) {
        this.eventId = eventId;
    }
}
