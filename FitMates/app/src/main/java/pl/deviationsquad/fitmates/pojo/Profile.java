package pl.deviationsquad.fitmates.pojo;

import com.google.gson.annotations.SerializedName;

public class Profile {

    @SerializedName("dob")
    private String dateOfBirth;
    private String city;
    private String country;
    private String bio;
    private String tag1;
    private String tag2;
    private String tag3;
    private String tag4;

    public Profile() {
    }

    public Profile(String dateOfBirth, String city, String country, String bio, String tag1, String tag2, String tag3, String tag4) {
        this.dateOfBirth = dateOfBirth;
        this.city = city;
        this.country = country;
        this.bio = bio;
        this.tag1 = tag1;
        this.tag2 = tag2;
        this.tag3 = tag3;
        this.tag4 = tag4;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public String getCity() {
        return city;
    }

    public String getCountry() {
        return country;
    }

    public String getBio() {
        return bio;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getTag1() {
        return tag1;
    }

    public String getTag2() {
        return tag2;
    }

    public String getTag3() {
        return tag3;
    }

    public String getTag4() {
        return tag4;
    }

    public void setTag1(String tag1) {
        this.tag1 = tag1;
    }

    public void setTag2(String tag2) {
        this.tag2 = tag2;
    }

    public void setTag3(String tag3) {
        this.tag3 = tag3;
    }

    public void setTag4(String tag4) {
        this.tag4 = tag4;
    }
}
