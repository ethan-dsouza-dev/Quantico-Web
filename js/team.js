// team.js

document.addEventListener("DOMContentLoaded", () => {
    const teamProfiles = {
        "justin-cho": {
            name: "Justin Cho",
            role: "President and Founder of Quantico",
            image: "/images/team/Justin Cho.jpeg",
            academics: "Bachelor of Math | Year 2",
            bio_main: "N/A",
            bio_extra: "N/A",
            classes: ["group-heads"]
        },
        "jinho-park": {
            name: "Jinho Park",
            role: "Supreme leader and Web Developer",
            image: "/images/team/Jinho Park.jpeg",
            academics: "Bachelor of Computer Science | Year 3",
            bio_main: "N/A",
            bio_extra: "N/A",
            classes: ["group-heads", "senior-analysts"]
        },
        "p1": {
            name: "Person 1",
            role: "He gets me Coffee",
            image: "/images/team/Aaryan Rampal.jpeg",
            academics: "Douglas College | Super Senior",
            bio_main: "N/A",
            bio_extra: "N/A",
            classes: ["pity-hire"]
        },
        "p2": {
            name: "Person 2",
            role: "He gets me Coffee",
            image: "/images/team/Aaryan Rampal.jpeg",
            academics: "Douglas College | Super Senior",
            bio_main: "N/A",
            bio_extra: "N/A",
            classes: ["pity-hire"]
        },
        "p3": {
            name: "Person 3",
            role: "Manages my brawl stars account",
            image: "/images/team/Aaryan Rampal.jpeg",
            academics: "Douglas College | Super Senior",
            bio_main: "Amazing coffee getter",
            bio_extra: "Template",
            classes: ["management"]
        },
        "ethan": {
            name: "Ethan Dsouza",
            role: "Junior Analysts",
            image: "/images/team/Ethan.jpeg",
            academics: "Bachelor of Data Analytics | Year 3",
            bio_main: "From Africa",
            bio_extra: "he likes to hike",
            classes: ["junior-analysts"]
        },
        "shaleen": {
            name: "Shalin Bhanot",
            role: "Junior Analysts",
            image: "/images/team/shaleen.jpeg",
            academics: "Bachelor of Data Analytics | Year 3",
            bio_main: "From India",
            bio_extra: "Template",
            classes: ["junior-analysts"]
        }
    };

    function renderTeamProfiles() {
        const teamGrid = document.getElementById("teamGrid");

        teamGrid.innerHTML = "";
      
        Object.values(teamProfiles).forEach(profile => {
            // Create the team member container
            const teamMember = document.createElement("div");
            teamMember.classList.add("team-member");
            profile.classes.forEach(teamClass => {
                teamMember.classList.add(teamClass);
            });
            teamMember.setAttribute("data-id", profile.id);
      
            // Create the HTML content for each team member using profile data
            teamMember.innerHTML = `
                <img src="${profile.image}" alt="${profile.name}">
                <div class="info">
                    <h3>${profile.name}</h3>
                    <p>${profile.role}</p>
                </div>
            `;
      
            // Add an event listener to open the profile modal on click
            teamMember.addEventListener("click", () => openProfileModal(profile));
        
            // Append the team member to the grid
            teamGrid.appendChild(teamMember);
        });
    }

    function openProfileModal(profile) {
        document.getElementById("profileImage").src = profile.image;
        document.getElementById("profileName").textContent = profile.name;
        document.getElementById("profileRole").textContent = profile.role;
        document.getElementById("profileBio").textContent = profile.bio_main;
        document.getElementById("profileBioExtra").textContent = profile.bio_extra;
        document.getElementById("profileModal").style.display = "block";
    }

    document.querySelector('.close').onclick = function() {
        document.getElementById('profileModal').style.display = 'none';
    };
    renderTeamProfiles();
});

function filterTeam(category) {
    const teamMembers = document.querySelectorAll('.team-member');
    const buttons = document.querySelectorAll('.filter-btn');

    // Remove active class from all buttons and add it to the clicked button
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');

    // Show/hide team members based on category
    teamMembers.forEach(member => {
        if (category === 'all' || member.classList.contains(category)) {
        member.style.display = 'block';
        } else {
        member.style.display = 'none';
        }
    });
}