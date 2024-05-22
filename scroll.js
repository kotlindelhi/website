window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var externalLinksPosition = document.getElementById('external-links').offsetTop;
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');

    if (scrollPosition >= externalLinksPosition - window.innerHeight / 2) {
        box1.classList.add('zoom-in');
        box2.classList.add('zoom-in');
    } else {
        box1.classList.remove('zoom-in');
        box2.classList.remove('zoom-in');
    }
});
window.addEventListener('scroll', function() {
    // Get the position of the team section
    const teamSection = document.getElementById('team');
    const teamSectionPosition = teamSection.getBoundingClientRect().top;
    
    // Get the team members
    const member1 = document.getElementById('member1');
    const member2 = document.getElementById('member2');
    const member3 = document.getElementById('member3');
    const member4 = document.getElementById('member4');
    const member5 = document.getElementById('member5');
    const member6 = document.getElementById('member6');
    const member7 = document.getElementById('member7');
    const member8 = document.getElementById('member8');

    // Check if the team section is in view
    if (teamSectionPosition < window.innerHeight) {
        // Check if the team members are not already flipped
        if (!member1.classList.contains('flip')) {
            // Add flip class to each team member
            member1.classList.add('flip');
            member2.classList.add('flip');
            member3.classList.add('flip');
            member4.classList.add('flip');
            member5.classList.add('flip');
            member6.classList.add('flip');
            member7.classList.add('flip');
            member8.classList.add('flip');
        }
    } else {
        // If the team section is out of view, remove flip class from team members
        member1.classList.remove('flip');
        member2.classList.remove('flip');
        member3.classList.remove('flip');
        member4.classList.remove('flip');
        member5.classList.remove('flip');
        member6.classList.remove('flip');
        member7.classList.remove('flip');
        member8.classList.remove('flip');
    }
});
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScroll() {
    const teamMembers = document.querySelectorAll(".team-member");

    teamMembers.forEach(function (member) {
        if (isInViewport(member)) {
            member.classList.add("flip");
        } else {
            member.classList.remove("flip");
        }
    });
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Add click event listener to each team member
document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = document.querySelectorAll(".team-member");

    teamMembers.forEach(function (member) {
        member.addEventListener("click", function () {
            this.classList.toggle("flip");
        });
    });
});


