// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here

var lang=0;

function language()
{
  if(lang==0)
  {
    lang=1;
  }
  else
  {
    lang=0;
  }
  dataLoading();
}


function dataChanged(element, text)
{
  document.getElementById(element).innerHTML = text;
}

function dataLoading()
{
  fetch("scripts/CV.json", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json()).then(data => {
    dataChanged("SiteTitle", data.siteTitle[lang] + " | "+ data.updatedText[lang] +": " + data.cvUpdated);
    dataChanged("About",data.about[lang]);
    dataChanged("Skill",data.skill[lang]);
    dataChanged("CSkill",data.skill[lang]);
    dataChanged("Experience",data.experience[lang]);
    dataChanged("CExperience",data.experience[lang]);
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
    var tAText = tAboutText();
    function tAboutText()
    {
      var t = "";
      if (lang == 0)
      {
        for (var key in data.tAbout.tr) {
          t += data.tAbout.tr[key] + "<br><br>";
        }
        return t;
      }
      else if (lang == 1)
      {
        for (const key in data.tAbout.en) {
          t += data.tAbout.en[key] + "<br><br>";
        }
        return t;
      }
    }
    dataChanged("tAbout", tAText);
    dataChanged("PersonalInfoTitle", data.personalInfoTitle[lang]);
    dataChanged("PhoneNumberTitle", data.phoneNumberTitle[lang]);
    dataChanged("MailTitle", data.mailTitle[lang]);
    dataChanged("AddressTitle", data.addressTitle[lang]);
    dataChanged("AgeTitle", data.ageTitle[lang]);
    var tAge = ageCalucate();
    function ageCalucate() {
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
    dataChanged("SkillPrograms", data.skillPrograms[lang]);
    dataChanged("SkillSDT", data.skillSDT[lang]);
    dataChanged("SkillFLTitle", data.skillFLTitle[lang]);
    dataChanged("SkillFLSpeaking", data.skillFLSpeaking[lang]);
    dataChanged("SkillFLReading", data.skillFLReading[lang]);
    dataChanged("SkillFLWriting", data.skillFLWriting[lang]);
    dataChanged("SkillFLSBeginner", data.skillFLBeginner[lang]);
    dataChanged("SkillFLRBeginner", data.skillFLBeginner[lang]);
    dataChanged("SkillFLWBeginner", data.skillFLBeginner[lang]);








    dataChanged("cFormNameSurname", data.cForm.NameSurname[lang]);
    dataChanged("cFormEmail", data.cForm.Mail[lang]);
    dataChanged("cFormMessage", data.cForm.Message[lang]);
    dataChanged("cFormButton", data.cForm.Button[lang]);



  })
}

dataLoading();