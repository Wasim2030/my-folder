class RailwayForm {
  constructor(givenName, trainno, address) {
    console.log("CONSTRUCTOR CALLED..... " + givenName + " " + trainno);
    this.name = givenName;
    this.trainno = trainno;
    this.address = address;
  }

  preview() {
    alert(
      this.name +
        " : Your Form is for train number: " +
        this.trainno +
        " and your address is " +
        this.address
    );
  }

  submit() {
    alert(this.name + " : Form submitted for train number: " + this.trainno);
  }

  cancel() {
    alert(
      this.name + " : this form is cancelled for train number: " + this.trainno
    );
    // make trainno zero if train is cancelled
    this.trainno = 0;
  }
}

let harryForm = new RailwayForm("wasim", 123222, "south delhi, india, 88888");
harryForm.preview();
harryForm.submit();
harryForm.cancel();
harryForm.preview();
