// Animations
AOS.init({
    anchorPlacement: 'top-left',
    duration: 1000
});

var lang = 0;
var sG = 0;
var test = 0;

dataLoading();
onLoad();


document.getElementById("scrollUp").addEventListener('click', function (event) {
    window.scrollTo(0, 'slow');
}, false);

function onLoad() {
    console.log("lang = " + lang);
    console.log("sg = " + sG);
    console.log("test = " + test);
}

function languageChange() {
    fetch("scripts/CV.json",
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            lang += 1;
            if (lang >= Object.keys(data.lang).length) {
                lang = 0;
            }
        })
    dataLoading();
}


function dataChanged(element, text) {
    document.getElementById(element).innerHTML = text;
}

function dataLoading() {
    fetch("scripts/CV.json",
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => {

            try {
                sg = Object.keys(data.SG).length;
            } catch (e) {
                console.log(e);
            }

            dataChanged("SiteTitle", data.siteTitle[lang] + " | " + data.updatedText[lang] + ": " + data.cvUpdated[lang]);

            dataChanged("About", data.about[lang]);
            dataChanged("Skill", data.skill[lang]);
            dataChanged("Experience", data.experience[lang]);
            dataChanged("Education", data.education[lang]);
            dataChanged("Contact", data.contact[lang]);
            if (lang >= (Object.keys(data.lang).length - 1)) {
                let l = 0;
                dataChanged("Language", data.language[l] + "(" + data.lang[l] + ")");
            } else {
                dataChanged("Language", data.language[lang + 1] + "(" + data.lang[lang + 1] + ")");
            }

            dataChanged("NameSurname", data.nameSurname);
            dataChanged("Title", data.title[lang]);

            dataChanged("DButtonTitle", data.dButtonTitle[lang]);
            dataChanged("BContactTitle", data.bContactTitle[lang]);

            dataChanged("TAboutTitle", data.tAboutTitle[lang]);
            if (document.getElementById("TAbout").innerHTML != null) {
                document.getElementById("TAbout").innerHTML = "";
            }
            for (const key in data.tAbout[lang]) {
                document.getElementById("TAbout").innerHTML += data.tAbout[lang][key] + "<br><br>";
            }

            dataChanged("PersonalInfoTitle", data.personalInfoTitle[lang]);
            dataChanged("PhoneNumberTitle", data.phoneNumberTitle[lang]);
            dataChanged("MailTitle", data.mailTitle[lang]);
            dataChanged("AddressTitle", data.addressTitle[lang]);
            dataChanged("AgeTitle", data.ageTitle[lang]);
            var tAge = ageCalucate();
            function ageCalucate() {
                bYear = data.birthDay.year;
                bMonth = data.birthDay.month;
                bDay = data.birthDay.day;
                var nDate = new Date();
                nYear = nDate.getFullYear();
                nMonth = nDate.getMonth() + 1;
                nDay = nDate.getDate();
                age = nYear - bYear;
                if (nMonth < bMonth) {
                    age--;
                }
                if (nMonth == bMonth && nDay < bDay) {
                    age--;
                }
                return age;
            }
            dataChanged("TAge", tAge);
            dataChanged("GenderTitle", data.genderTitle[lang]);
            dataChanged("Gender", data.gender[lang]);
            dataChanged("MaritalStatusTitle", data.maritalStatusTitle[lang]);
            dataChanged("MaritalStatus", data.maritalStatus[lang]);
            dataChanged("DrivingLicenseTitle", data.drivingLicenseTitle[lang]);
            dataChanged("DrivingLicense", data.drivingLicense[lang]);
            dataChanged("MilitaryServiceTitle", data.militaryServiceTitle[lang]);
            dataChanged("MilitaryService", data.militaryService[lang]);

            dataChanged("CSkill", data.skill[lang]);
            dataChanged("SkillPrograms", data.skillPrograms[lang]);
            dataChanged("SkillSDT", data.skillSDT[lang]);
            dataChanged("SkillFLTitle", data.skillFLTitle[lang]);
            dataChanged("SkillFLSpeaking", data.skillFLSpeaking[lang]);
            dataChanged("SkillFLReading", data.skillFLReading[lang]);
            dataChanged("SkillFLWriting", data.skillFLWriting[lang]);
            dataChanged("SkillFLSBeginner", data.skillFLBeginner[lang]);
            dataChanged("SkillFLRBeginner", data.skillFLBeginner[lang]);
            dataChanged("SkillFLWBeginner", data.skillFLBeginner[lang]);

            dataChanged("CExperience", data.experience[lang]);
            if (document.getElementById("ExperienceWork").innerHTML != null) {
                document.getElementById("ExperienceWork").innerHTML = "";
            }
            for (const key in data.experienceWork) {
                document.getElementById("ExperienceWork").innerHTML += "<div class='timeline-card timeline-card-info' data-aos='fade-in' data-aos-delay='0'>" +
                    "<div class='timeline-head px-4 pt-3'>" +
                    "<div class='h5'>" +
                    data.experienceWork[key].workTitle[lang] +
                    "<span class='text-muted h6'>&nbsp;" +
                    data.companyText[lang] +
                    "&nbsp;" +
                    data.experienceWork[key].companyName[lang] +
                    "</span>" +
                    "</div>" +
                    "</div>" +
                    "<div class='timeline-body px-4 pb-4'>" +
                    "<div class='text-muted text-small mb-3'>" +
                    data.experienceWork[key].dateWork[lang] +
                    "</div>" +
                    "<div>" +
                    data.experienceWork[key].description[lang] +
                    "</div>" +
                    "</div>" +
                    "</div>";
            }

            dataChanged("SoftwareDevelopmentTitle", data.softwareDevelopmentTitle[lang]);
            if (document.getElementById("ExperienceSoftware").innerHTML != null) {
                document.getElementById("ExperienceSoftware").innerHTML = "";
            }
            for (const cat in data.experienceSoftware) {
                document.getElementById("ExperienceSoftware").innerHTML += "<div class='progress my-2 rounded' style='height: 21px'>" +
                    "<div class='progress-bar bg-info' role='progressbar' data-aos='zoom-in-right' data-aos-delay='100' data-aos-anchor='.skills-section' style='width: 100%;' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'>" +
                    data.experienceSoftware[cat].title[lang] +
                    "</div>" +
                    "</div>" +
                    "<div class='timeline' id='" + cat + "'></div>";
                for (const con in data.experienceSoftware[cat]) {
                    if (con == "contents") {
                        for (const p in data.experienceSoftware[cat][con]) {
                            document.getElementById(cat).innerHTML += "<div class='timeline-card timeline-card-info' data-aos='fade-in' data-aos-delay='0'>" +
                                "<div class='timeline-head px-4 pt-3'>" +
                                "<div class='h5'>" +
                                data.experienceSoftware[cat][con][p].name[lang] +
                                "<span class='text-muted h6'>&nbsp;" +
                                data.technologiesText[lang] +
                                "&nbsp;" +
                                data.experienceSoftware[cat][con][p].usedTechnologies[lang] +
                                "</span>" +
                                "</div>" +
                                "</div>" +
                                "<div class='timeline-body px-4'>" +
                                "<div>" +
                                data.experienceSoftware[cat][con][p].description[lang] +
                                "</div>" +
                                "</div>" +
                                "</div>";
                        }
                    }
                }
            }

            dataChanged("CEducation", data.education[lang]);
            if (document.getElementById("EducationContents").innerHTML != "") {
                document.getElementById("EducationContents").innerHTML = "";
            }
            for (const school in data.educationContents) {
                document.getElementById("EducationContents").innerHTML += "<div class='timeline-card timeline-card-success' data-aos='fade-in' data-aos-delay='0'>" +
                    "<div class='timeline-head px-4 pt-3'>" +
                    "<div class='h5'>" +
                    data.educationContents[school].graduated[lang] +
                    "<span class='text-muted h6'>&nbsp;" +
                    data.educationText[lang] +
                    "&nbsp;" +
                    data.educationContents[school].title[lang] +
                    "</span>" +
                    "</div>" +
                    "</div>" +
                    "<div class='timeline-body px-4'>" +
                    "<div class='text-muted text-small'>" +
                    data.educationContents[school].dateEdu[lang] +
                    "</div>" +
                    "</div>" +
                    "</div>";
            }

            dataChanged("CContact", data.contact[lang]);
            dataChanged("cFormNameSurname", data.cForm.NameSurname[lang]);
            dataChanged("cFormEmail", data.cForm.Mail[lang]);
            dataChanged("cFormMessage", data.cForm.Message[lang]);
            dataChanged("cFormButton", data.cForm.Button[lang]);

            dataChanged("Design", data.Footer.design[lang]);
            dataChanged("Developer", data.Footer.developer[lang]);
        })
}
