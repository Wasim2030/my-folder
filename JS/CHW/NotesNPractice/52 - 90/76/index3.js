class RailwayForm {
  submit() {
    alert(this.name + " : Form submitted for train number: " + this.trainno);
  }
  cancel() {
    alert(
      this.name + " : this form is cancelled for train number: " + this.trainno
    );
  }
  fill(givenName, trainno) {
    this.name = givenName;
    this.trainno = trainno;
  }
}

let harryForm = new RailwayForm();
harryForm.fill("Harry", 12557);

let rohanForm1 = new RailwayForm();
let rohanForm2 = new RailwayForm();

rohanForm1.fill("Rohan", 12289420);
rohanForm2.fill("Rohan", 12289211);

harryForm.submit();
rohanForm1.submit();
rohanForm2.submit();
rohanForm1.cancel();
