document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("predictor-form");
    const result = document.getElementById("prediction-result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const language = form.language.value;
        const projects = form.projects.value;
        const strength = form.strength.value;
        const company = form.company.value;
        const bugs = form.bugs.value;

        let prediction = "";

        if (language === "C++" && projects === "Game Development") {
            prediction = "You are going to be an unproductive farmer with 12 children and you plant beqolo u always gonna  collect arem😂😂..........its just for fun we all are gonna be succesful software enginners! 🎮";
        } else if (language === "Python" && projects === "AI & Machine Learning") {
            prediction = "Erso wedefit mirt ginbegna yiwetawetal balotim yeginbata tibeb u will make best temama foqochin😂😂..........its just for fun we all are gonna be succesful software enginners! 🤖";
        } else if (strength === "Debugging" && bugs === "I patiently debug them") {
            prediction = "Erso u will be best migib absay yihun enji bzun gize miserut migib yibokabotal eij eijm yilibotal😂😂..........its just for fun we all are gonna be succesful software enginners! 💻";
        } else {
            prediction = "in the future u will be good shemane blotim yeshimena tibeb minm sayserubet endamareu yinoralu😂😂..........its just for fun we all are gonna be succesful software enginners🚀";
        }

        result.textContent = prediction;
    });
});
