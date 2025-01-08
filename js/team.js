// team.js

document.addEventListener("DOMContentLoaded", () => {
    const teamProfiles = {
        "justin-cho": {
            name: "Justin Cho",
            role: "President of Quantico | Lead Quant Researcher",
            image: "/images/team/Justin Cho.jpeg",
            academics: "Bachelor of Science | Major in Mathematics Minor in Economics | Year 3",
            bio_main: "N/A",
            bio_extra: "N/A",
            classes: ["founder", "quant-research"]
        },
        "jinho-park": {
            name: "Jinho Park",
            role: "Vice President of Quantico | Quant Developer",
            image: "/images/team/Jinho Park.jpeg",
            academics: "Bachelor of Science | Major in Computer Science | Year 3",
            bio_main: "N/A",
            bio_extra: "N/A",
            classes: ["founder", "quant-dev"]
        },
        "aaryan-rampal": {
            name: "Aaryan Rampal",
            role: "Lead Quant Developer",
            image: "/images/team/Aaryan Rampal.jpeg",
            academics: "Bachelor of Science | Major in Computer Science (Honours) | Year 3",
            bio_main: "N/A",
            bio_extra: "N/A",
            classes: ["quant-dev"]
        },
        "gregory-liu": {
            name: "Gregory Liu",
            role: "Quant Developer",
            image: "/images/team/Gregory Liu.jpeg",
            academics: "Bachelor of Commerce | Major in Business and Computer Science | Year 3",
            bio_main: "Amazing coffee getter",
            bio_extra: "Template",
            classes: ["quant-dev"]
        },
        "ethan-dsouza": {
            name: "Ethan Dsouza",
            role: "Lead Web Dev",
            image: "/images/team/Ethan.jpeg",
            academics: "Bachelor of Science | Major in Statistics | Year 3",
            bio_main: "From Africa",
            bio_extra: "he likes to hike",
            classes: ["web-dev"]
        },
        "shaleen-gorakatar": {
            name: "Shaleen Gorakatar",
            role: "Lead Analyst",
            image: "/images/team/shaleen.jpeg",
            academics: "Bachelor of Science | Major in Statistics | Year 3",
            bio_main: "From India",
            bio_extra: "Template",
            classes: ["analyst"]
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