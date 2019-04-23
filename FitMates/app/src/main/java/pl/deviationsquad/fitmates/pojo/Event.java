package pl.deviationsquad.fitmates.pojo;

import com.google.gson.annotations.SerializedName;

public class Event {

    private int id;
    private String title;
    @SerializedName("creator")
    private int creatorId;
    @SerializedName("event_date")
    private String date;
    @SerializedName("place_name")
    private String placeName;
    private String address;
    private String city;
    private String country;
    @SerializedName("tag")
    private int tagId;
    @SerializedName("max_amount_of_people")
    private int maxAmountOfPeople;

    public Event() {

    }

    public Event(String title, int creatorId, String date, String placeName, String address, String city, String country, int tagId, int maxAmountOfPeople) {
        this.title = title;
        this.creatorId = creatorId;
        this.date = date;
        this.placeName = placeName;
        this.address = address;
        this.city = city;
        this.country = country;
        this.tagId = tagId;
        this.maxAmountOfPeople = maxAmountOfPeople;
    }

    public Event(int id, String title, int creatorId, String date, String placeName, String address, String city, String country, int tagId, int maxAmountOfPeople) {
        this.id = id;
        this.title = title;
        this.creatorId = creatorId;
        this.date = date;
        this.placeName = placeName;
        this.address = address;
        this.city = city;
        this.country = country;
        this.tagId = tagId;
        this.maxAmountOfPeople = maxAmountOfPeople;
    }

    public String getTitle() {
        return title;
    }

    public int getCreatorId() {
        return creatorId;
    }

    public String getDate() {
        return date;
    }

    public String getPlaceName() {
        return placeName;
    }

    public String getAddress() {
        return address;
    }

    public String getCity() {
        return city;
    }

    public String getCountry() {
        return country;
    }

    public int getTagId() {
        return tagId;
    }

    public int getMaxAmountOfPeople() {
        return maxAmountOfPeople;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setCreatorId(int creatorId) {
        this.creatorId = creatorId;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setPlaceName(String placeName) {
        this.placeName = placeName;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setTagId(int tagId) {
        this.tagId = tagId;
    }

    public void setMaxAmountOfPeople(int maxAmountOfPeople) {
        this.maxAmountOfPeople = maxAmountOfPeople;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
