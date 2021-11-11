// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here

var lang=0;

function languageChange()
{
  fetch("scripts/CV.json",
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json()).then(data =>
    {
      lang += 1;
      if (lang >= Object.keys(data.lang).length)
      {
        lang = 0;
      }
    })
  dataLoading();
}


function dataChanged(element, text)
{
  document.getElementById(element).innerHTML = text;
}

function dataLoading()
{
  fetch("scripts/CV.json",
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json()).then(data =>
    {
    dataChanged("SiteTitle", data.siteTitle[lang] + " | "+ data.updatedText[lang] +": " + data.cvUpdated);

    dataChanged("About",data.about[lang]);
    dataChanged("Skill",data.skill[lang]);
    dataChanged("Experience",data.experience[lang]);
    dataChanged("Education",data.education[lang]);
    dataChanged("CEducation",data.education[lang]);
    dataChanged("Contact",data.contact[lang]);
    dataChanged("CContact",data.contact[lang]);
    dataChanged("Language",data.language[lang]+"("+data.lang[lang]+")");

    dataChanged("NameSurname", data.nameSurname);
    dataChanged("Title", data.title[lang]);

    dataChanged("DButtonTitle", data.dButtonTitle[lang]);
    dataChanged("BContactTitle", data.bContactTitle[lang]);

    dataChanged("TAboutTitle", data.tAboutTitle[lang]);
    if (document.getElementById("TAbout").innerHTML != null)
    {
      document.getElementById("TAbout").innerHTML = "";  
    }
    for (const key in data.tAbout[lang])
    {
      document.getElementById("TAbout").innerHTML += data.tAbout[lang][key] +"<br><br>";
    }

    dataChanged("PersonalInfoTitle", data.personalInfoTitle[lang]);
    dataChanged("PhoneNumberTitle", data.phoneNumberTitle[lang]);
    dataChanged("MailTitle", data.mailTitle[lang]);
    dataChanged("AddressTitle", data.addressTitle[lang]);
    dataChanged("AgeTitle", data.ageTitle[lang]);
    var tAge = ageCalucate();
    function ageCalucate()
    {
      bYear=data.birthDay.year;
      bMonth=data.birthDay.month;
      bDay=data.birthDay.day;
      var nDate=new Date();
      nYear=nDate.getFullYear();
      nMonth=nDate.getMonth()+1;
      nDay=nDate.getDate();
      age=nYear-bYear;
      if(nMonth<bMonth)
      {
        age--;
      }
      if(nMonth==bMonth&&nDay<bDay)
      {
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

    dataChanged("CSkill",data.skill[lang]);
    dataChanged("SkillPrograms", data.skillPrograms[lang]);
    dataChanged("SkillSDT", data.skillSDT[lang]);
    dataChanged("SkillFLTitle", data.skillFLTitle[lang]);
    dataChanged("SkillFLSpeaking", data.skillFLSpeaking[lang]);
    dataChanged("SkillFLReading", data.skillFLReading[lang]);
    dataChanged("SkillFLWriting", data.skillFLWriting[lang]);
    dataChanged("SkillFLSBeginner", data.skillFLBeginner[lang]);
    dataChanged("SkillFLRBeginner", data.skillFLBeginner[lang]);
    dataChanged("SkillFLWBeginner", data.skillFLBeginner[lang]);

    dataChanged("CExperience",data.experience[lang]);
    if (document.getElementById("ExperienceWork").innerHTML != null)
    {
      document.getElementById("ExperienceWork").innerHTML = "";
    }
    for (const key in data.experienceWork) 
    {
      document.getElementById("ExperienceWork").innerHTML += "<div class='timeline-card timeline-card-info' data-aos='fade-in' data-aos-delay='0'>"+
      "<div class='timeline-head px-4 pt-3'>"+
        "<div class='h5'>"+
          "<label id='WorkTitle'>"+
          data.experienceWork[key].workTitle[lang]+
          "</label>"+
          "<span class='text-muted h6'>"+
            "<label id='CompanyText'>&nbsp;"+
            data.companyText[lang]+
            "</label>"+
            "<label id='CompanyName'>&nbsp;"+
            data.experienceWork[key].companyName[lang]+
            "</label>"+
          "</span>"+
        "</div>"+
      "</div>"+
      "<div class='timeline-body px-4 pb-4'>"+
        "<div class='text-muted text-small mb-3'>"+
        data.experienceWork[key].dateWork[lang]+
        "</div>"+
        "<div>"+
        data.experienceWork[key].description[lang]+
        "</div>"+
      "</div>";
    }

    dataChanged("SoftwareDevelopmentTitle", data.softwareDevelopmentTitle[lang]);


    
    







    dataChanged("cFormNameSurname", data.cForm.NameSurname[lang]);
    dataChanged("cFormEmail", data.cForm.Mail[lang]);
    dataChanged("cFormMessage", data.cForm.Message[lang]);
    dataChanged("cFormButton", data.cForm.Button[lang]);



  })
}

dataLoading();