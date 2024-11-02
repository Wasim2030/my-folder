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
    this.trainno = trainno; // this.trainno is associated with object
  }
}

let harryForm = new RailwayForm();
harryForm.fill("Harry", 12557);

let rohan = new RailwayForm();
rohan.fill("Rohan", 12289);

harryForm.submit();
rohan.submit();
rohan.cancel();
