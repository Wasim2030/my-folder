class RailwayForm {
  constructor(givenName, trainno) {
    console.log("CONSTRUCTOR CALLED....." + givenName + " " + trainno);
    this.name = givenName;
    this.trainno = trainno;
  }

  submit() {
    alert(this.name + " : Form submitted for train number: " + this.trainno);
  }

  cancel() {
    alert(
      this.name + " : this form is cancelled for train number: " + this.trainno
    );
  }
}

let harryForm = new RailwayForm("Harry", 12557);

let rohanForm1 = new RailwayForm("Rohan", 12289420);
// let rohanForm1 = new RailwayForm();
let rohanForm2 = new RailwayForm("Rohan", 12289211);

harryForm.submit();
rohanForm1.submit();
rohanForm2.submit();
rohanForm1.cancel();
