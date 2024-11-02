class RailwayForm {
  submit() {
    // alert("Form submitted");
    alert(this.name + " : Form submitted");
  }
  cancel() {
    alert(this.name + " : this form is cancelled");
  }
  fill(givenName) {
    //this. matlab is object(harryForm) ki property hai name
    // (harryForm = new RailwayForm()) harryForm jo object hai, iske saath ek property associate ho jayegi jo ki hai, name,
    // aur uska naam hoga harry e.g. givenName (refer Notes.md)
    this.name = givenName;
  }
}

// create the form for harry
let harryForm = new RailwayForm();
// fill the form with harry's details
harryForm.fill("Harry");

let rohan = new RailwayForm();
rohan.fill("Rohan");

harryForm.submit();
rohan.submit();
rohan.cancel();
