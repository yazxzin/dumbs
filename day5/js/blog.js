let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let projectName = document.getElementById("project-name").value;
  let startDate = new Date(document.getElementById("start-date").value);
  let endDate = new Date(document.getElementById("end-date").value);
  let description = document.getElementById("description").value;
  let nodejs = document.getElementById("nodejs").checked;
  let golang = document.getElementById("golang").checked;
  let react = document.getElementById("reactjs").checked;
  let javascript = document.getElementById("javascript").checked;
  let file = document.getElementById("input-image").files;

  let distance = endDate - startDate; 

  let miliSecond = 1000;
  let secondInHour = 3600;
  let hourInDay = 24;
  let dayInWeek = 7;
  let dayInMonth = 30;
  let monthInYear = 12;

  let distanceDay = Math.floor(
    distance / (miliSecond * secondInHour * hourInDay)
  ); 
  let distanceMonth = Math.floor(
    distance / (miliSecond * secondInHour * hourInDay * dayInMonth)
  );
  let distanceYear = Math.floor(
    distance /
      (miliSecond * secondInHour * hourInDay * dayInMonth * monthInYear)
  );

  duration = "";

  if (distanceDay <= 30 && distanceDay > 1) {
    duration = `${distanceDay} Days`;
  } else if (distanceDay == 1) {
    duration = `${distanceDay} Day`;
  } else if (distanceDay > 30 && distanceMonth >= 1) {
    duration = `${distanceMonth} Month ${distanceDay % 30} Days`;
  } else if (distanceDay > 30 && distanceMonth > 1) {
    duration = `${distanceMonth} Months ${distanceDay % 30} Days`;
  } else if (distanceYear == 1) {
    duration = `${distanceYear} Year`;
  } else if (distanceMonth > 12 && distanceYear > 1) {
    duration = `${distanceYear} Years ${distanceMonth % 12} Months ${
      distanceDay % 30
    } Days`;
  }

  console.log(duration);


  let technologies = [];

  if (nodejs) {
    technologies.push('<i class="fa-brands fa-node-js"></i>');
  }
  if (golang) {
    technologies.push('<i class="fa-brands fa-golang" id="golang"></i>');
  }
  if (react) {
    technologies.push('<i class="fa-brands fa-react" id="reactsJS"></i>');
  }
  if (javascript) {
    technologies.push('<i class="fa-brands fa-square-js"></i>');
  }

  let technologiesHTML = technologies.join();

  console.log(technologiesHTML);

  if (projectName == "") {
    return alert("Input the project name first");
  } else if (startDate == "") {
    return alert("Input the start date first");
  } else if (endDate == "") {
    return alert("Input the end date first");
  } else if (description == "") {
    return alert("Input the description first");
  } else if (file == "") {
    return alert("Input the value first");
  }

  let image = URL.createObjectURL(file[0]);

  let blog = {
    image,
    projectName,
    duration,
    description,
    technologiesHTML,
    author: "Haqi Ayassi",
    durationPost : new Date(),
  };

  dataBlog.push(blog);

  renderBlog();

  console.log(dataBlog);
}

function renderBlog() {
  document.getElementById("content").innerHTML = "";

  for (let i = 0; i < dataBlog.length; i++) {
    document.getElementById("content").innerHTML += 
    `<div class="container-card">
                    <a href="#"><img src= ${dataBlog[i].image} alt=""/></a>
                <h3>Dumbways Mobile App - 2023</h3>
                <span>Duration : ${dataBlog[i].duration} | ${dataBlog[i].author}</span>
                <p>
                ${dataBlog[i].description}
                </p>
                <div class="programming-language">
                ${dataBlog[i].technologiesHTML}
                <div class="Post">
                <span>${getDurationPost(dataBlog[i].durationPost)}</span>
            </div>
                </div>
                <div class="btn-group">
              <button>Edit</button>
              <button>Delete</button>
            </div>
        </div>`;
    }
}

function getDurationPost(time) {
  let timeNow = new Date();
  let timePost = time;

  let durationPost = timeNow - timePost;
  console.log(durationPost);

  let miliSecond = 1000;
  let secondInHour = 3600; 
  let minutesInHour = 60;
  let hourInDay = 24;

  let durationPostDay = Math.floor(
    durationPost / (miliSecond * secondInHour * hourInDay)
  );
  let durationPostHour = Math.floor(durationPost / (miliSecond * secondInHour));
  let durationPostMinute = Math.floor(
    durationPost / (miliSecond * minutesInHour)
  );
  let durationPostSecond = Math.floor(durationPost / miliSecond);

  if (durationPostSecond == 1) {
    return `${durationPostSecond} second ago`;
  } else if (durationPostSecond <= 60) {
    return `${durationPostSecond} seconds ago`;
  } else if (durationPostMinute == 1) {
    return `${durationPostMinute} minute ago`;
  } else if (durationPostMinute <= 60) {
    return `${durationPostMinute} minutes ago`;
  } else if (durationPostHour == 1) {
    return `${durationPostHour} hour Ago`;
  } else if (durationPostHour <= 24) {
    return `${durationPostHour} hours ago`;
  } else if (durationPostDay == 1) {
    return `${durationPostDay} day ago`;
  } else if (durationPostDay <= 30) {
    return `${durationPostDay} days ago`;
  } 
}

setInterval(function () {
  renderBlog();
}, 1000);