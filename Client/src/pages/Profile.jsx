import AboutCard from "../components/AboutCard";
import EducationCard from "../components/EdcucationCard";
import ExperienceCard from "../components/ExperienceCard";
import LicenseCard from "../components/LicenseCard";
import ProfileHeader from "../components/ProfileHeader";

const ProfileData = {
  profilePic:
    "https://images.pexels.com/photos/18900111/pexels-photo-18900111/free-photo-of-woman-in-beige-trench-leaning-on-bride-railing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  coverPic:
    "https://images.pexels.com/photos/5717773/pexels-photo-5717773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  userName: "John doe",
  pronouns: "he/him",
  heading: "CTO @ newTechCo.pvt.ltd",
  city: "Mumbai",
  country: "India",
  followerCount: 100,
  connectionCount: 100,
};
export default function Profile() {
  return (
    <main className="m-4 max-w-[800px] md:mx-auto grid gap-2">
      <ProfileHeader
        profilePicUrl={ProfileData.profilePic}
        coverPicUrl={ProfileData.coverPic}
        userName={ProfileData.userName}
        pronouns={ProfileData.pronouns}
        heading={ProfileData.heading}
        city={ProfileData.city}
        country={ProfileData.country}
        followerCount={ProfileData.followerCount}
        connectionCount={ProfileData.connectionCount}
      />
      <AboutCard />
      <ExperienceCard />
      <EducationCard />
      <LicenseCard />
    </main>
  );
}
