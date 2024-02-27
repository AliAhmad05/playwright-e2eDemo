class WebTables {
  firstName = '[id="firstName"]';
  lastName = '[id="lastName"]';
  email = '[id="userEmail"]';
  age = '[id="age"]';
  salary = '[id="salary"]';
  department = '[id="department"]';
}

class PracticeForm {
  firstName = '[id="firstName"]';
  lastName = '[id="lastName"]';
  email = '[id="userEmail"]';
  mobile = '[id="userNumber"]';
  subject = '#subjectsInput';
  currentAddress = '[id="currentAddress"]';
  dateOfBirth = '[id="dateOfBirthInput"]';
  uploadImage = '#uploadPicture';
  state = '[id="state"]';
  city = '[id="city"]'
}

class Widget {
  startStopButton = '[id="startStopButton"]';
  progressBar = '[role="progressbar"]';
}

class ToolTip {
  buttonHover = '[id="toolTipButton"]';
  tooltipText = '[class="tooltip-inner"]';
}

export const locatorWebTables = new WebTables();
export const locatorPracticeForm = new PracticeForm();
export const locatorWidget = new Widget();
export const locatorToolTip = new ToolTip();
