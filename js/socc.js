$(function() {
	loadPeopleFrom("https://raw.githubusercontent.com/di-unipi-socc/di-unipi-socc.github.io/master/resources/members.json");
	loadCollaboratorsFrom("https://raw.githubusercontent.com/di-unipi-socc/di-unipi-socc.github.io/master/resources/collaborators.json");
	loadProjectsFrom("https://raw.githubusercontent.com/di-unipi-socc/di-unipi-socc.github.io/master/resources/research-projects.json");
});

var loadPeopleFrom = function (peopleURL) {
	$.getJSON(peopleURL, function (people) {
		var peopleDiv = $("#members-content")[0];
		$.each(people, function (i) {
			var p = document.createElement("div");
			p.className = "col-lg-4 col-md-4";
			
			var name = document.createElement("h3");
			name.innerHTML = this.name + " " + this.surname.toUpperCase();
			p.appendChild(name);
			
			var aPhoto = document.createElement("a");
			aPhoto.setAttribute("href",this.home);
			aPhoto.setAttribute("target","_blank");
			var photo = document.createElement("img");
			photo.className = "photo";
			photo.setAttribute("src", this.photo);
			aPhoto.appendChild(photo);
			p.appendChild(aPhoto);
			
			var position = document.createElement("p");
			switch(this.position) {
				case "full-professor":
					position.innerHTML = "Full Professor";
					break
				case "post-doc":
					position.innerHTML = "Post-Doc Researcher";
					break
				case "phd-student":
					position.innerHTML = "PhD Student";
					break
			    case "msc-student":
			        position.innerHTML = "MSc Student";
			        break
			    case "research-assistant":
			        position.innerHTML = "Research assistant";
			        break
			    case "msc":
			        position.innerHTML = "MSc Student";
			        break
			    default:
					position.innerHTML = "Other";
			}			
			p.appendChild(position);
			
			peopleDiv.appendChild(p);
		});
	});
}

var loadCollaboratorsFrom = function (collaboratorsURL) {
    $.getJSON(collaboratorsURL, function (collaborators) {
        var collaboratorsDiv = $("#collaborators-content")[0];
        $.each(collaborators, function (i) {
            var c = document.createElement("div");
            c.className = "col-lg-3 col-md-4 col-sm-6";

            var name = document.createElement("b");
            name.innerHTML = this.name + "<br>" + this.surname.toUpperCase();
            c.appendChild(name);

            var period = document.createElement("p");
            if (this.to == "" || this.to == null)
                period.innerHTML = "since " + this.from;
            else
                period.innerHTML = "from " + this.from + "<br>to " + this.to;
            c.appendChild(period);

            collaboratorsDiv.appendChild(c);
        });
    });
}

var loadProjectsFrom = function (projectsURL) {
	$.getJSON(projectsURL, function (projects) {
		var projectsDiv = $("#projects-content")[0];
		$.each(projects, function (i) {
			var proj = document.createElement("div");
			proj.className = "col-lg-4";
			
			var title = document.createElement("h3");
			title.innerHTML = this.title;
			proj.appendChild(title);
			
			var logo = document.createElement("img");
			logo.className = "project-logo";
			switch(this.type) {
				case "eu": 
					logo.setAttribute("src","img/projects/eu.png");
					break;
				case "it": 
					logo.setAttribute("src","img/projects/it.png");
					break;
				case "unipi": 
					logo.setAttribute("src","img/projects/unipi.png");
					break;
				default:
					break;
			}
			proj.appendChild(logo);
			
			var aId = document.createElement("a");
			aId.setAttribute("href",this.home);
			aId.setAttribute("target","_blank");
			var id = document.createElement("p");
			id.innerHTML = this.id;
			aId.appendChild(id);
			proj.appendChild(aId);
			
			var subtitle = document.createElement("p");
			subtitle.innerHTML = this.subtitle;
			proj.appendChild(subtitle);
			
			projectsDiv.appendChild(proj);
		});
	});
}